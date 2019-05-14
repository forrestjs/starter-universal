import { GraphQLNonNull, GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql'
import GraphQLJSON from 'graphql-type-json'

export default new GraphQLObjectType({
    name: 'Page',
    fields: {
        fileName: {
            type: new GraphQLNonNull(GraphQLString),
        },
        filePath: {
            type: new GraphQLNonNull(GraphQLString),
        },
        locale: {
            type: new GraphQLNonNull(GraphQLString),
        },
        slug: {
            type: new GraphQLNonNull(GraphQLString),
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
        },
        keywords: {
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
        },
        body: {
            type: new GraphQLNonNull(GraphQLString),
        },
        attributes: {
            type: new GraphQLNonNull(GraphQLJSON),
        },
    },
})
