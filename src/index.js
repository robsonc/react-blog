import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import 'whatwg-fetch'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'

import blog from './components/blog/store' // Or wherever you keep your reducers

import './index.css'
import BlogApp from './components/blog/components/BlogApp'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
    combineReducers({
        blog,
        router: routerReducer
    }),
    compose(
        applyMiddleware(thunk), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BlogApp />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
