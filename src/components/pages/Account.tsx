import React from 'react';
import Auth from '../api/ApiAuth';
import { Button } from 'antd';

interface IAccountState {
    apiAccessToken: string;
}

export class Account extends React.Component<{}, IAccountState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = { apiAccessToken: "N/A" };
    }

    private refreshToken = async () => {
        await Auth.refresh();
        window.location.reload();
    }

    async componentDidMount() {
        let apiAccessToken = Auth.accessToken;
        this.setState({ apiAccessToken: apiAccessToken });
    }

    render() {
        return (
            <div>
                <h1>Api Access Token</h1>
                <p>{this.state.apiAccessToken}</p>
                <Button className="button" onClick={() => this.refreshToken()}>Refresh</Button>
            </div>
        );
    }
}
