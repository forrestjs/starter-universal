/**
 * Browser Entry Point
 * -------------------
 *
 * This code runs in the browser only and you can count on that.
 *
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { LocaleProvider } from '@forrestjs/feature-locale/client'

// project specific modules
import * as serviceWorker from './serviceWorker'
import App from './App'
import { createState } from './app.state'
import './locale'
import './index.css'

/**
 * It's likely that the server will provide the production `initialState``
 * via the global variable.
 *
 * Here you can provide some static state for development pourpose.
 * Anyway, it's best if you set it up as `defaultState` in each reducer
 */
const initialState = window.SERVER_DATA || {}

// createMemoryHistory | createHashHistory | createBrowserHistory
const history = require('history').createBrowserHistory()

// eslint-disable-next-line
const Root = ({ store, history, ...props }) => (
    <Router history={history}>
        <Provider store={store}>
            <LocaleProvider>
                <App {...props} />
            </LocaleProvider>
        </Provider>
    </Router>
)

const boot = props => {
    const renderApp = () => {
        const root = <Root {...props} />
        const target = document.querySelector('#root')
        ReactDOM.render(root, target)
    }

    if (module.hot) {
        module.hot.accept(renderApp)
    }

    renderApp()
}

createState(initialState, history)
    .then(boot)

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    // serviceWorker.unregister();
    .then(() =>
        process.env.NODE_ENV === 'production'
            ? serviceWorker.register()
            : serviceWorker.unregister()
    )

    .catch(err => console.error(err))
