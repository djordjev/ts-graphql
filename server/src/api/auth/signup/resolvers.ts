import { UserInputError } from 'apollo-server';
import { GraphQLResolveInfo } from 'graphql';

import User from '../../../connections/db/models/User';
import { IAppContext } from '../../../context/context';
import { AuthPayload, SignupMutationArgs } from '../../../generated/types';

const signup = async (
  _: any,
  args: SignupMutationArgs,
  context: IAppContext,
  info: GraphQLResolveInfo
): Promise<AuthPayload> => {
  const { email, firstName, lastName, password, username } = args;

  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    throw new UserInputError('User with the same username already exists');
  }

  const newUser = await User.create({
    email,
    firstName,
    lastName,
    password,
    username
  });
  return {
    token: 'abc',
    user: newUser
  };

  return null;
};

export default signup;
