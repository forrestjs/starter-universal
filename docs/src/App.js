/**
 * App UI Entry Point
 * ------------------
 *
 * This file is rather complex because it puts together a couple of
 * different concepts just for demonstrative pourposes:
 *
 * - it is a Redux's connected component, so it can receive properties
 *   from the application's state and work with it.
 *
 * - it implements some Routes that allow to render different pages based
 *   on the browser's url.
 *
 * - it uses some translated text so to implementa multilanguage App.
 *
 * Even if things are not so desperately difficult to grasp here, testing
 * this component is a different thing altogether and I honestly believe
 * that what I wrote in this file is WAY TO COMPLICATED and should be
 * broken down in sub-components.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import { injectIntl, intlShape, defineMessages } from 'react-intl'

import { HomePage, PagesList, PageItem } from 'features/pages'
import { LocaleSelector } from 'features/locale'
import logo from './logo.svg'
import './App.css'

const messages = defineMessages({
    subtitle: {
        id: 'app.subtitle',
        defaultMessage: 'Go to `react-ssr` documentation',
    },
    description: {
        id: 'app.description',
        defaultMessage: 'Edit <code>src/App.js</code> and save to reload.',
    },
})

const mapState = ({ app, locale }) => ({
    name: app.name,
    locale: locale.locale.split('_')[0],
})

const App = ({ name, locale, intl }) => (
    <>
        <Helmet>
            <html lang={locale} />
            <title>{name}</title>
        </Helmet>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p dangerouslySetInnerHTML={{ __html: intl.formatMessage(messages.description) }} />
                <a
                    className="App-link"
                    href="https://github.com/marcopeg/forrest-starter-universal"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={intl.formatMessage(messages.subtitle)}
                >
                    {name}
                </a>
            </header>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/:locale" component={PagesList} />
                <Route exact path="/:locale/:slug" component={PageItem} />
            </Switch>
        </div>
        <LocaleSelector />
    </>
)

App.propTypes = {
    name: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    intl: intlShape.isRequired,
}

export default injectIntl(connect(mapState)(App))
