import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Provider } from 'react-redux';

ReactDOM.render(
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
