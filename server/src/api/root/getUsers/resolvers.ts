import { GraphQLResolveInfo } from 'graphql';
import { GetUsersQueryArgs, User } from '../../../generated/types';

const getUsers = (
  _: any,
  args: GetUsersQueryArgs,
  context: any,
  info: GraphQLResolveInfo
): User[] => {
  if (args.userId) {
    return [
      {
        age: 99,
        firstName: 'asda',
        id: String(args.userId)
      }
    ];
  }

  return [
    { id: '1', firstName: 'assda', age: 11 },
    { id: '2', firstName: 'dasd', age: 22 }
  ];
};

export default getUsers;
