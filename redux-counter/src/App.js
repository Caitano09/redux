import React from 'react'
import { applyMiddleware ,createStore } from 'redux'
import DisplayCounter from './DisplayCounter'
import Counter from './Counter'
import counterReducer from './reducer'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import Ola from './Ola'

let store = createStore(counterReducer, applyMiddleware(logger))//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <DisplayCounter />
        <Ola />
      </div>
    </Provider>
  )
}

export default App
