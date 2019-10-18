import "antd/dist/antd.css";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import serviceWorker from './ServiceWorker';
import configureStore from './config/store.config';

const baseUrl: string = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const mountNode = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </Provider>,
  mountNode
);

serviceWorker();
