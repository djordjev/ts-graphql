import { UserInputError } from 'apollo-server';
import { compare } from 'bcrypt';

import User from '../../../connections/db/models/User';
import { IAppContext } from '../../../context/context';
import { LoginMutationArgs } from '../../../generated/types';

const login = async (
  parent: any,
  args: LoginMutationArgs,
  context: IAppContext
) => {
  const { username, password } = args;

  let user;
  try {
    user = await User.findOne({ where: { username } });
  } catch (e) {
    user = null;
  }

  if (!user) {
    throw new UserInputError(`User with username "${username}" does not exist`);
  }

  const passwordHash = user.get('password');

  const passwordCorrect = await compare(password, passwordHash);

  if (!passwordCorrect) {
    throw new UserInputError('Invalid password');
  }

  context.req.session.user = user.toJSON();

  return {
    token: context.req.sessionID,
    user
  };
};

export { login };
