/* eslint-disable */
import { runQuery } from '@forrestjs/feature-network/client'
import {
    loadStart,
    loadFailed,
    setList,
    setItem,
} from './pages.reducer'

// filter out the indexes from the lists of pages
const contentPages = page =>
    !['index', 'home'].includes(page.slug)

export const loadPages = (locale) => async (dispatch) => {
    try {
        dispatch(loadStart())
        const query = await dispatch(runQuery(`
            query q ($locale: String!) {
                listPages(locale: $locale) {
                    title description keywords
                    locale slug attributes
                }
                homePage: getPage(
                    slug: "index"
                    locale: $locale
                ) {
                    body
                    locale slug title
                    description keywords  
                }
            }
        `, { locale }))

        dispatch(setList(locale, query.data.listPages.filter(contentPages)))
        dispatch(setItem(locale, 'index', query.data.homePage))
    } catch (err) {
        dispatch(loadFailed(err.message))
    }
}

export const loadPage = (locale, slug) => async (dispatch) => {
    try {
        dispatch(loadStart())
        const query = await dispatch(runQuery(`
            query q (
                $slug: String!
                $locale: String!
            ) {
                getPage(
                    slug: $slug
                    locale: $locale
                ) {
                    title description keywords
                    locale slug attributes
                    body
                }
            }
        `, { locale, slug }))

        dispatch(setItem(locale, slug, query.data.getPage))
    } catch (err) {
        dispatch(loadFailed(err.message))
    }
}
