import { Company, CompanyUserArgs, User } from '../../generated/types';

const resolvers = {
  User: {
    company: (parent: User, args: CompanyUserArgs): Company => {
      const type = args.companyType;

      return {
        id: String(Math.floor(Math.random() * 100)),
        name: `Company X (${type})`
      };
    }
  }
};

export default resolvers;
