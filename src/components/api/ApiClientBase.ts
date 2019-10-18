import * as config from '../../Config';
import Auth from './ApiAuth';

export default class ApiClientBase {
    protected getBaseUrl(defaultUrl: string): string {
        return config.apiUrl;
    }

    protected async transformOptions(options: RequestInit): Promise<RequestInit> {
        let accessToken = Auth.accessToken;
        if (accessToken) {
            (<any>options.headers)['Authorization'] = `Bearer ${accessToken}`;
        }
        return Promise.resolve(options);
    }
}