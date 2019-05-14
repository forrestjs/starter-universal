import path from 'path'
import { GraphQLNonNull, GraphQLString } from 'graphql'
import { listPages } from '../lib/list-pages'
import typePage from './type.page'

export default {
    description: 'Provide a single page from the database',
    args: {
        slug: {
            type: new GraphQLNonNull(GraphQLString),
        },
        locale: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    type: typePage,
    resolve: async (params, args) => {
        const pages = await listPages(path.join(process.cwd(), 'pages'))
        return pages.find(page => (
            page.slug === args.slug
            && page.locale === args.locale
        ))
    },
}

