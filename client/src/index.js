import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import theme from "./theme";
import App from './App';

import { ThemeProvider } from "@material-ui/core";
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider> 
    </ThemeProvider>,
  document.getElementById('root')
);

