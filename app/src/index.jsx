import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({form: formReducer})
const store = createStore(reducers, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    <div>hello</div>
  </Provider>,
  document.getElementById('app')
)
