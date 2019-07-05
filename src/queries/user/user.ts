import { GQLUserType, QueryToUserArgs } from '../../_types/graphQLTypes';

const resolver = (args: QueryToUserArgs): GQLUserType => {
  return {
    age: 29,
    firstName: args.firstName || 'Djordje',
    id: args.id
  };
};

export default resolver;
