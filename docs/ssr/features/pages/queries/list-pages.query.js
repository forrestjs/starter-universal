import path from 'path'
import { GraphQLNonNull, GraphQLList, GraphQLString } from 'graphql'
import { listPages } from '../lib/list-pages'
import typePage from './type.page'

export default {
    description: 'Provide the list of available pages in the database filtered by language',
    args: {
        locale: {
            type: GraphQLString,
        },
    },
    type: new GraphQLNonNull(new GraphQLList(typePage)),
    resolve: async (params, args) => {
        const pages = await listPages(path.join(process.cwd(), 'pages'))
        return pages.filter(page => page.locale === args.locale)
    },
}
