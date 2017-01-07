import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

import configureStore from './stores/configureStore';

import Main from './components/Main';
import OekakiCanvas from './components/OekakiCanvas';

const store = configureStore();
const history = useRouterHistory(createHashHistory)({ queryKey: false });

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Main}>
              <IndexRoute component={OekakiCanvas}></IndexRoute>
            </Route>
        </Router>
    </Provider>, document.getElementById('root'));
