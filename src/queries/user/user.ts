interface IUserArgs {
  id: string;
  firstName?: string;
}

interface IUserResponse {
  id: string;
  age: number;
  firstName?: string;
}

const resolver = (args: IUserArgs): IUserResponse => {
  return {
    age: 29,
    firstName: args.firstName || 'Djordje',
    id: args.id
  };
};

export default resolver;
