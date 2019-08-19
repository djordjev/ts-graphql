// ===============================================================
// THIS FILE WAS AUTOMATICALLY GENERATED AND SHOULD NOT BE EDITED.
// ===============================================================
/* tslint:disable */
/* eslint-disable */

export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

export interface Query {
  me: User;
}

export interface User {
  id?: Maybe<string>;

  firstName?: Maybe<string>;

  email?: Maybe<string>;

  lastName?: Maybe<string>;

  role?: Maybe<string>;
}

export interface Mutation {
  signup: AuthPayload;

  login: AuthPayload;
}

export interface AuthPayload {
  user?: Maybe<User>;

  token: string;
}

// ====================================================
// Arguments
// ====================================================

export interface SignupMutationArgs {
  username: string;

  password: string;

  firstName: string;

  lastName: string;

  role?: Maybe<string>;

  email?: Maybe<string>;
}
export interface LoginMutationArgs {
  username: string;

  password: string;
}
