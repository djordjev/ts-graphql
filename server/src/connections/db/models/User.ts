import { DataTypes, Model } from 'sequelize';
import { getSequelize } from '../db';

class User extends Model {
  public id!: string;
  public username!: string;
  public lastName!: string;
  public firstName!: string;
  public role!: string;
  public password!: string;
}

const init = () => {
  User.init(
    {
      firstName: {
        allowNull: false,
        field: 'first_name',
        type: DataTypes.STRING
      },
      id: {
        primaryKey: true,
        type: DataTypes.STRING
      },
      lastName: {
        allowNull: false,
        field: 'last_name',
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      sequelize: getSequelize(),
      tableName: 'Users'
    }
  );
};

export { User as default, init };
