import { GraphQLResolveInfo } from 'graphql';

const me = (_: any, args: any, context: any, info: GraphQLResolveInfo) => {
  return {
    email: 'djordje@gyorgy.tech',
    firstName: 'Djordje ME',
    id: 'me',
    lastName: 'Vukovic ME',
    role: 'admin'
  };
};

export { me };
