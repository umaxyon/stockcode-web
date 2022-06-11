/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStCode = /* GraphQL */ `
  query GetStCode($Code: String!) {
    getStCode(Code: $Code) {
      Code
      Name
      Address
      Market
      Topic
      Tel
      Unit
    }
  }
`;
export const listStCodes = /* GraphQL */ `
  query ListStCodes(
    $filter: TableStCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Code
        Name
        Address
        Market
        Topic
        Tel
        Unit
      }
      nextToken
    }
  }
`;
export const listCodes = /* GraphQL */ `
  query ListStCodes(
    $filter: TableStCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Code
      }
      nextToken
    }
  }
`;