import { UserInputError } from 'apollo-server';

import { IAppContext } from '../../../context/context';

type PromiseResolveFunction = (value?: boolean) => void;

const logout = async (parent: any, args: null, context: IAppContext) => {
  const { req } = context;

  if (!req.session.user) {
    throw new UserInputError('User is not logged in');
  }

  const logoutPromise = new Promise<boolean>(
    (resolve: PromiseResolveFunction) => {
      req.session.destroy((err: any) => {
        resolve(!err);
      });
    }
  );

  const success: boolean = await logoutPromise;

  return success;
};

export { logout };
