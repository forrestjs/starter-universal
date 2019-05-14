import createSSRState from '@marcopeg/react-ssr/lib/create-ssr-state'
import app from './app.reducer'

const reducers = {
    app,
}

const features = [
    require('@marcopeg/react-ssr/features/storage'),
    require('@marcopeg/react-ssr/features/network'),
    require('@marcopeg/react-ssr/features/locale'),
    require('features/locale'),
    require('features/pages'),
]

export const createState = createSSRState(reducers, features)
