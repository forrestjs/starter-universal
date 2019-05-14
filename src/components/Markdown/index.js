/**
 * Markdown rendering is a quite heavy third party library.
 * It is not a bad idea to have it isolated in it's own chunk and lazy loaded by Webpack.
 *
 * NOTE: Because it is very often used, you can leverage the "preload" functionalty
 * that Webpack offers, and speed up the performances by pre-fetching this code
 * in a place where is it likely going to be used quite soon (like in the home page):
 *
 *     require('components/Markdown').default.preload()
 */

import loadable from 'react-loadable'

export default loadable({
    loader: () => import(/* webpackChunkName: "Markdown" */'./Markdown'),
    loading: () => null,
})
