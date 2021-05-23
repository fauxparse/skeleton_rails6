import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  testSubscription: Scalars['String'];
};

export type HelloReactQueryVariables = Exact<{ [key: string]: never }>;

export type HelloReactQuery = { __typename?: 'Query' } & Pick<
  Query,
  'testField'
>;

export const HelloReactDocument = gql`
  query HelloReact {
    testField
  }
`;

/**
 * __useHelloReactQuery__
 *
 * To run a query within a React component, call `useHelloReactQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloReactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloReactQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloReactQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HelloReactQuery,
    HelloReactQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HelloReactQuery, HelloReactQueryVariables>(
    HelloReactDocument,
    options
  );
}
export function useHelloReactLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HelloReactQuery,
    HelloReactQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HelloReactQuery, HelloReactQueryVariables>(
    HelloReactDocument,
    options
  );
}
export type HelloReactQueryHookResult = ReturnType<typeof useHelloReactQuery>;
export type HelloReactLazyQueryHookResult = ReturnType<
  typeof useHelloReactLazyQuery
>;
export type HelloReactQueryResult = Apollo.QueryResult<
  HelloReactQuery,
  HelloReactQueryVariables
>;
