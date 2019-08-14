import { GraphQLResolveInfo } from 'graphql';
import { AuthPayload } from '../../generated/types';

const signup = (
  _: any,
  args: any,
  context: any,
  info: GraphQLResolveInfo
): AuthPayload => {
  const response: AuthPayload = {
    token: 'dasdasdadsadasd',
    username: 'sdas'
  };
  return response;
};

export default signup;
