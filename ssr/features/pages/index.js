import path from 'path'
import express from 'express'
import { START_FEATURES } from '@forrestjs/hooks'
import { EXPRESS_MIDDLEWARE } from '@forrestjs/service-express'
import { EXPRESS_GRAPHQL } from '@forrestjs/service-express-graphql'
import { FEATURE_NAME } from './hooks'
import { watchPages } from './lib/watch-pages'

export const register = ({ registerAction }) => {
    registerAction({
        hook: START_FEATURES,
        name: FEATURE_NAME,
        trace: __filename,
        handler: () => {
            watchPages(path.join(process.cwd(), 'pages'))
        },
    })

    registerAction({
        hook: EXPRESS_MIDDLEWARE,
        name: FEATURE_NAME,
        trace: __filename,
        handler: ({ app }) => {
            app.use('/media', express.static(path.join(process.cwd(), 'pages', 'media')))
        },
    })

    registerAction({
        hook: EXPRESS_GRAPHQL,
        name: FEATURE_NAME,
        trace: __filename,
        handler: ({ queries }) => {
            queries.listPages = require('./queries/list-pages.query').default
            queries.getPage = require('./queries/get-page.query').default
        },
    })
}
