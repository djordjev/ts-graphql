import { GraphQLResolveInfo } from 'graphql';
import { GetUsersQueryArgs } from '../../../generated/types';

const getUsers = (
  _: any,
  args: GetUsersQueryArgs,
  context: any,
  info: GraphQLResolveInfo
) => {
  if (args.userId) {
    return [
      {
        age: 99,
        company: { id: 99, name: 'Comp 99' },
        firstName: 'asda',
        id: args.userId
      }
    ];
  }

  return [
    { id: 1, firstName: 'assda', age: 11, company: { id: 1, name: 'Comp 1' } },
    { id: 2, firstName: 'dasd', age: 22, company: { id: 2, name: 'Comp 2' } }
  ];
};

export default getUsers;
