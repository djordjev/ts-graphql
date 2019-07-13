import { FieldNode, GraphQLResolveInfo } from 'graphql';

const getUsers = (
  _: any,
  args: any,
  context: any,
  info: GraphQLResolveInfo
) => {
  return [
    { id: 1, firstName: 'assda', age: 11 },
    { id: 2, firstName: 'dasd', age: 22 }
  ];
};

export { getUsers };
