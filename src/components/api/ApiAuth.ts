import queryString from 'query-string';
import autorefresh from 'jwt-autorefresh';
import * as config from '../../Config';

class ApiAuth {
    private static readonly authUrl: string = '/connect/token';
    private static readonly clientId: string = 'brite.webclient';
    private static readonly scope: string = 'brite.api offline_access openid profile roles';
    private static readonly lsAccessTokenKey: string = 'accessToken';
    private static readonly lsRefreshTokenKey: string = 'refreshToken';
    private static readonly lsAccessTokenExpiryDateKey: string = 'accessTokenExpiryDate';

    constructor() {
        if (localStorage[ApiAuth.lsAccessTokenKey] && localStorage[ApiAuth.lsAccessTokenKey] !== 'undefined') {
            this.onAuthorize(localStorage[ApiAuth.lsAccessTokenKey]);
        }
    }

    public get isAuthenticated(): boolean {
        return localStorage[ApiAuth.lsAccessTokenKey] && new Date(localStorage[ApiAuth.lsAccessTokenExpiryDateKey]) > new Date();
    }

    public get accessToken(): string {
        return localStorage[ApiAuth.lsAccessTokenKey];
    }

    public login = async (username: string, password: string): Promise<boolean> => {
        let options = <RequestInit>{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: queryString.stringify({
                client_id: ApiAuth.clientId,
                grant_type: 'password',
                username: username,
                password: password,
                scope: ApiAuth.scope
            })
        };
        let response = await fetch(config.apiUrl + ApiAuth.authUrl, options);
        if (response.status == 200) {
            let accessToken = await this.parseAuthResponse(response);
            this.onAuthorize(accessToken);
            return true;
        } else {
            this.onDeauthorize();
            return false;
        }
    }

    public logout = (): void => {
        localStorage.removeItem(ApiAuth.lsAccessTokenKey);
        localStorage.removeItem(ApiAuth.lsRefreshTokenKey);
        localStorage.removeItem(ApiAuth.lsAccessTokenExpiryDateKey);
    }

    public refresh = async (): Promise<void> => {
        let options = <RequestInit>{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: queryString.stringify({
                client_id: ApiAuth.clientId,
                grant_type: 'refresh_token',
                refresh_token: localStorage[ApiAuth.lsRefreshTokenKey]
            })
        };
        let response = await fetch(config.apiUrl + ApiAuth.authUrl, options);
        if (response.status == 200) {
            let accessToken = await this.parseAuthResponse(response);
        }
    }

    private parseAuthResponse = async (response: Response): Promise<string> => {
        let responseJson = await response.json();
        localStorage[ApiAuth.lsAccessTokenKey] = responseJson.access_token;
        localStorage[ApiAuth.lsRefreshTokenKey] = responseJson.refresh_token;
        let now = new Date();
        now.setSeconds(now.getSeconds() + parseInt(responseJson.expires_in));
        localStorage[ApiAuth.lsAccessTokenExpiryDateKey] = now;
        return responseJson.access_token;
    }

    /** You supply a leadSeconds number or function that generates a number of seconds that the refresh should occur prior to the access token expiring */
    private leadSeconds = () => {
        /** Generate random additional seconds (up to 30 in this case) to append to the lead time to ensure multiple clients dont schedule simultaneous refresh */
        let jitter = Math.floor(Math.random() * 30);

        /** Schedule autorefresh to occur 60 to 90 seconds prior to token expiration */
        return 60 + jitter;
    }

    private start = autorefresh({ refresh: this.refresh, leadSeconds: this.leadSeconds });
    private cancel = () => { };

    private onAuthorize = (accessToken: string) => {
        this.cancel();
        this.cancel = this.start(accessToken);
    };

    private onDeauthorize = () => {
        this.cancel();
    }
}

let Auth = new ApiAuth();
export default Auth;