import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import BeautyMainComponent from './containers/BeautyMainComponent';
import './index.css';
import store from './Store';
import registerServiceWorker from './registerServiceWorker';
const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={BeautyMainComponent}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
