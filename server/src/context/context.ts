import { Request } from 'express';
import { Sequelize } from 'sequelize';

import { getSequelize } from '../connections/db/db';

interface IAppContext {
  req: Request;
  sequelize: Sequelize;
}

const context = ({ req }: { req: Request }): IAppContext => {
  const sequelize = getSequelize();

  return { req, sequelize };
};

export { context, IAppContext };
