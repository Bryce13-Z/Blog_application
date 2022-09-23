import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { StyledEngineProvider } from '@mui/material';

import App from './App.js';
import { reducers } from './reducers';


// don't get this 
const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
    <StyledEngineProvider injectFirst>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StyledEngineProvider>
</Provider>

,document.getElementById("root"));