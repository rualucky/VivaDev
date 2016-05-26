import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllCategories } from './actions/category'
import Home from './components/Home'
import Category from './components/Category'
import About from './components/About'
import Login from './components/Login'
import MasterLayout from './components/MasterLayout'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllCategories())

const app = document.getElementById('root');

function requireAuth(nextState, replace) {
  var ka = 192;
  console.log('kaka auth')
  if (ka !== 192) {
    replace({
      pathname: 'login',
      state: {nextPathname: nextState.location.pathname}
    })
  }
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={MasterLayout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='category' component={Category} onEnter={requireAuth}></Route>
        <Route path='about' component={About}></Route>
        <Route path='login' component={Login}></Route>
      </Route>
    </Router>
  </Provider>
  ,
  app
);
