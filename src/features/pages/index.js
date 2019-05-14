import loadable from 'react-loadable'
import pages from './pages.reducer'

// exports the features capabilities:
export const reducers = { pages }
export const services = []
export const listeners = []

// exports the UI entry point asynchronously:
export const HomePage = loadable({
    loader: () => import(/* webpackChunkName: "HomePage" */'./containers/HomePage'),
    loading: () => 'loading...',
})

export const PagesList = loadable({
    loader: () => import(/* webpackChunkName: "PagesList" */'./containers/PagesList'),
    loading: () => 'loading...',
})

export const PageItem = loadable({
    loader: () => import(/* webpackChunkName: "PageItem" */'./containers/PageItem'),
    loading: () => 'loading...',
})
