/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type Admin = {
  __typename?: 'Admin';
  _id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Blog = {
  __typename?: 'Blog';
  _id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  markdown?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<Admin>;
};

export type Contact = {
  __typename?: 'Contact';
  _id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAdmin?: Maybe<Admin>;
  addBlog?: Maybe<Blog>;
  addContact?: Maybe<Contact>;
  deteteBlog?: Maybe<Blog>;
  updateBlog?: Maybe<Blog>;
};


export type MutationAddAdminArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  status: Scalars['Boolean'];
};


export type MutationAddBlogArgs = {
  description: Scalars['String'];
  markdown: Scalars['String'];
  title: Scalars['String'];
  user: Scalars['ID'];
};


export type MutationAddContactArgs = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
  subject: Scalars['String'];
};


export type MutationDeteteBlogArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateBlogArgs = {
  description: Scalars['String'];
  id: Scalars['ID'];
  markdown: Scalars['String'];
  title: Scalars['String'];
  user: Scalars['ID'];
};

export type Personal = {
  __typename?: 'Personal';
  _id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  blog?: Maybe<Blog>;
  blogs?: Maybe<Array<Maybe<Blog>>>;
  personal?: Maybe<Personal>;
};


export type RootQueryTypeBlogArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BlogQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogQuery = { __typename?: 'RootQueryType', blog?: { __typename?: 'Blog', _id?: string | null, title?: string | null, markdown?: string | null, description?: string | null, createdAt?: any | null, user?: { __typename?: 'Admin', _id?: string | null, name?: string | null, email?: string | null, status?: boolean | null } | null } | null };


export const BlogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"blog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"63aa1fd224da573db23bea7f","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<BlogQuery, BlogQueryVariables>;