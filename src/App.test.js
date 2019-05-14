/**
 * About Testing Containers
 * ------------------------
 *
 * `App` is a container, it needs a running store and a `Provider`
 * to run properly.
 *
 * We can't really test the default export (the container) as such, so
 * for that particular case we modified the default CRA test and actually
 * expect it to throw errors.
 *
 * Unit Testing is better suited for **pure components**. You should put
 * a good deal of effort in architecturing your app so that it renders as
 * a simple chain of pure components.
 *
 * Deep nesting containers (Redux connected components) lead to troubles!
 */

import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './App'

// Jest has some troubles with mocking the console
// https://stackoverflow.com/questions/44596915/jest-mocking-console-error-tests-fails
const spyConsole = (method = 'log') => {
    const original = console[method]
    console[method] = jest.fn()
    console[method].mockClear = () => {
        console[method] = original
    }

    return console[method]
}

it('crashes if rendered as container', () => {
    const spy = spyConsole('error')
    const div = document.createElement('div')

    expect(() => {
        ReactDOM.render(<AppContainer />, div)
    }).toThrow()

    ReactDOM.unmountComponentAtNode(div)
    spy.mockClear()
})


/**
 * If you really want to test connected containers you need to replicate
 * a realistic state for your application.
 *
 * It is not really difficult, and the Redux DevTools help a lot in this task,
 * but it is quite a hassle to me.
 *
 * I still prefer to test `dumb components`.
 */

// eslint-disable-next-line
import ContextProvider from 'lib/ContextProvider'

it('renders with a lot of troubles', () => {
    const div = document.createElement('div')

    ReactDOM.render((
        <ContextProvider reducers={{
            app: () => ({
                name: 'My Custom App Name',
            }),
            locale: () => ({
                locale: 'it',
            }),
        }}>
            <AppContainer />
        </ContextProvider>
    ), div)

    ReactDOM.unmountComponentAtNode(div)
})
