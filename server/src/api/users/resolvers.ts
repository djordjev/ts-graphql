import { GraphQLResolveInfo } from 'graphql';
import { GetUsersQueryArgs } from '../../generated/types';

const getUsers = (
  _: any,
  args: GetUsersQueryArgs,
  context: any,
  info: GraphQLResolveInfo
) => {
  if (args.userId) {
    return [{ id: args.userId, firstName: 'asda', age: 99 }];
  }

  return [
    { id: 1, firstName: 'assda', age: 11 },
    { id: 2, firstName: 'dasd', age: 22 }
  ];
};

export { getUsers };
