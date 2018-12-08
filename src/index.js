import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Route} from 'react-router-dom'
import thunk from "redux-thunk";
import history from './history'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import rootReducer from './redux/reducers/index.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE|| compose;
const store = createStore(
  rootReducer(history),composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.register();
