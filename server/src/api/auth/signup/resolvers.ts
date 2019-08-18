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
  const { firstName, lastName, password, username } = args;

  if (!firstName || !lastName || !password || !username) {
    throw new UserInputError('Missing required args');
  }

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      throw new Error('User with the same username already exists');
    }

    const newUser = new User({ firstName, lastName, password, username });
    await newUser.save();
    return {
      token: 'abc',
      user: newUser
    };
  } catch (e) {
    console.error(e);
  }

  return null;
};

export default signup;
