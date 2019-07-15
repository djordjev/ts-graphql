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
  getUsers: (Maybe<User>)[];
}

export interface User {
  id?: Maybe<string>;

  firstName: string;

  age?: Maybe<number>;

  company?: Maybe<Company>;
}

export interface Company {
  id?: Maybe<string>;

  name: string;
}

// ====================================================
// Arguments
// ====================================================

export interface GetUsersQueryArgs {
  userId: number;
}
export interface CompanyUserArgs {
  companyType: string;
}
