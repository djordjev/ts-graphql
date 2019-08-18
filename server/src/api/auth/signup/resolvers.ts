import { GraphQLResolveInfo } from 'graphql';
import { AuthPayload } from '../../../generated/types';

const signup = (
  _: any,
  args: any,
  context: any,
  info: GraphQLResolveInfo
): AuthPayload => {
  const response: any = {
    token: 'dasdasdadsadasd',
    user: {
      email: 'djordje@gyorgy.tech',
      firstName: 'Djordje',
      id: 'dasadasd',
      lstName: 'Vukovic',
      role: 'admin'
    }
  };
  return response;
};

export default signup;
