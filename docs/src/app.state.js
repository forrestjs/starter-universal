import createSSRState from '@forrestjs/core/lib/create-ssr-state'
import app from './app.reducer'

const reducers = {
    app,
}

const features = [
    require('@forrestjs/core/features/storage'),
    require('@forrestjs/core/features/network'),
    require('@forrestjs/core/features/locale'),
    require('features/locale'),
    require('features/pages'),
]

export const createState = createSSRState(reducers, features)
