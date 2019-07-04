const user = args => {
  return {
    age: 29,
    firstName: args.firstName || 'Djordje',
    id: args.id
  };
};

const root = {
  user
};

export default root;
