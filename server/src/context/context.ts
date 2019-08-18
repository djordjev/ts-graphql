import { Sequelize } from 'sequelize';

import { getSequelize } from '../connections/db/db';

interface IAppContext {
  sequelize: Sequelize;
}

const context = (): IAppContext => {
  const sequelize = getSequelize();

  return { sequelize };
};

export { context, IAppContext };
