import React from 'react'
import { render } from 'react-dom'
import Counter from './components/counter/Counter'
import Register from './components/register/Register'
import Posts from './components/posts/Posts'
import NoMatch from './components/nomatch/NoMatch'
import store from './redux/store'
import { Provider } from 'react-redux'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
import Auth  from './auth/auth'

/*let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }]
}*/

/*let initialState = {
  token: null
}*/

//let store = configureStore(initialState)

function requireAuth(nextState, replace) {
  console.log('inside require auth: ' + Auth.loggedIn())
  if (!Auth.loggedIn()) {
    console.log('not logged in, replacing')
    replace({
      pathname: '/register',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Counter} />
      <Route path='/register' component={Register} />
      <Route path='/home' component={Posts} onEnter={requireAuth} />
      <Route path='/*' component={NoMatch} />
    </Router>
  </Provider>,
  document.getElementById('app')
)

/*<Router history={browserHistory}>
      <Route path='/' component={Counter} />
      <Route path='/register' component={Register} />
    </Router>*/