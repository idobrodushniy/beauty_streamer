import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {connectRouter} from 'connected-react-router';
import thunk from 'redux-thunk';
import {beautyReducer} from './reducers/BeautyReducer';

const rootReducer = combineReducers({
    beautyReducer,
})
const history = createBrowserHistory();
const connectedReducer = connectRouter(history)(rootReducer);
const store = createStore(connectedReducer, compose(applyMiddleware(thunk), window.devToolsExtension? window.devToolsExtension(): f => f));
export default store;