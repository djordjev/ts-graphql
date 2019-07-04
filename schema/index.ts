import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

const UserType: GraphQLObjectType = new GraphQLObjectType({
  fields: {
    age: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    id: { type: GraphQLString }
  },
  name: 'User'
});

interface IUserQueryArgs {
  firstName?: string;
  id: string;
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
  fields: {
    user: {
      args: {
        firstName: { type: GraphQLString },
        id: { type: GraphQLString }
      },
      async resolve(parentValue: any, args: IUserQueryArgs) {
        await timeout(2000);
        return {
          age: 29,
          firstName: args.firstName || 'Djordje',
          id: args.id
        };
      },
      type: UserType
    }
  },
  name: 'RootQueryType'
});

const schema: GraphQLSchema = new GraphQLSchema({
  query: RootQuery
});

export default schema;
