import React from 'react';
import * as api from '../api/ApiClient';

interface IFetchDataState {
    loading: boolean;
    forecasts: any;
}

export class FetchData extends React.Component<{}, IFetchDataState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    private static renderForecastsTable(forecasts: any) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map((forecast: any) =>
                        <tr key={forecast.dateFormatted}>
                            <td>{forecast.dateFormatted}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    private async populateWeatherData() {
        let client = new api.SampleDataClient();
        try {
            let response = await client.weatherForecasts();
            this.setState({ forecasts: response.result, loading: false });
        } catch (e) {
            let apiError = e as api.SwaggerException;
            let message = apiError.response ? JSON.parse(apiError.response) : apiError.message;
            alert(message);
        }
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}
