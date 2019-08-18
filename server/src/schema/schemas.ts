import { DocumentNode } from 'graphql';

import signupSchema from '../api/auth/signup/schema';
import rootSchema from '../api/root/schema';
import meSchema from '../api/user/me/schema';
import userSchema from '../api/user/schema';

const schemas: DocumentNode[] = [
  userSchema,
  rootSchema,
  signupSchema,
  meSchema
];

export default schemas;
