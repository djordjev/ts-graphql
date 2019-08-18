import { Sequelize } from 'sequelize';
import { init as initUser } from './models/User';

const { DB_NAME, DB_USER, DB_PASS } = process.env;

let sequelize: Sequelize = null;

const initializeSequelize = async (): Promise<Sequelize> => {
  if (!sequelize) {
    sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
      define: { timestamps: false },
      dialect: 'postgres',
      host: 'db',
      pool: {
        acquire: 30000,
        idle: 10000,
        max: 5,
        min: 0
      }
    });

    try {
      await sequelize.authenticate();
      console.log('successfully connected to db');

      initUser();
    } catch (e) {
      console.error('connection to db unsuccessfull');
    }
  }

  return sequelize;
};

const getSequelize = (): Sequelize => {
  return sequelize;
};

export { getSequelize, initializeSequelize };
