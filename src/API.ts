/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStCodeInput = {
  Code: string,
  Name?: string | null,
  Address?: string | null,
  Market?: string | null,
  Topic?: string | null,
  Tel?: string | null,
  Unit?: string | null,
};

export type StCode = {
  __typename: "StCode",
  Code: string,
  Name?: string | null,
  Address?: string | null,
  Market?: string | null,
  Topic?: string | null,
  Tel?: string | null,
  Unit?: string | null,
};

export type UpdateStCodeInput = {
  Code: string,
  Name?: string | null,
  Address?: string | null,
  Market?: string | null,
  Topic?: string | null,
  Tel?: string | null,
  Unit?: string | null,
};

export type DeleteStCodeInput = {
  Code: string,
};

export type TableStCodeFilterInput = {
  Code?: TableStringFilterInput | null,
  Name?: TableStringFilterInput | null,
  Address?: TableStringFilterInput | null,
  Market?: TableStringFilterInput | null,
  Topic?: TableStringFilterInput | null,
  Tel?: TableStringFilterInput | null,
  Unit?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type StCodeConnection = {
  __typename: "StCodeConnection",
  items?:  Array<StCode | null > | null,
  nextToken?: string | null,
};

export type CreateStCodeMutationVariables = {
  input: CreateStCodeInput,
};

export type CreateStCodeMutation = {
  createStCode?:  {
    __typename: "StCode",
    Code: string,
    Name?: string | null,
    Address?: string | null,
    Market?: string | null,
    Topic?: string | null,
    Tel?: string | null,
    Unit?: string | null,
  } | null,
};

export type UpdateStCodeMutationVariables = {
  input: UpdateStCodeInput,
};

export type UpdateStCodeMutation = {
  updateStCode?:  {
    __typename: "StCode",
    Code: string,
    Name?: string | null,
    Address?: string | null,
    Market?: string | null,
    Topic?: string | null,
    Tel?: string | null,
    Unit?: string | null,
  } | null,
};

export type DeleteStCodeMutationVariables = {
  input: DeleteStCodeInput,
};

export type DeleteStCodeMutation = {
  deleteStCode?:  {
    __typename: "StCode",
    Code: string,
    Name?: string | null,
    Address?: string | null,
    Market?: string | null,
    Topic?: string | null,
    Tel?: string | null,
    Unit?: string | null,
  } | null,
};

export type GetStCodeQueryVariables = {
  Code: string,
};

export type GetStCodeQuery = {
  getStCode?:  {
    __typename: "StCode",
    Code: string,
    Name?: string | null,
    Address?: string | null,
    Market?: string | null,
    Topic?: string | null,
    Tel?: string | null,
    Unit?: string | null,
  } | null,
};

export type ListStCodesQueryVariables = {
  filter?: TableStCodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStCodesQuery = {
  listStCodes?:  {
    __typename: "StCodeConnection",
    items?:  Array< {
      __typename: "StCode",
      Code: string,
      Name?: string | null,
      Address?: string | null,
      Market?: string | null,
      Topic?: string | null,
      Tel?: string | null,
      Unit?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStCodeSubscriptionVariables = {
  Code?: string | null,
  Name?: string | null,
  Address?: string | null,
  Market?: string | null,
  Topic?: string | null,
};

export type OnCreateStCodeSubscription = {
  onCreateStCode?:  {
    __typename: "StCode",
    Code: string,
    Name?: string | null,
    Address?: string | null,
    Market?: string | null,
    Topic?: string | null,
    Tel?: string | null,
    Unit?: string | null,
  } | null,
};

export type OnUpdateStCodeSubscriptionVariables = {
  Code?: string | null,
  Name?: string | null,
  Address?: string | null,
  Market?: string | null,
  Topic?: string | null,
};

export type OnUpdateStCodeSubscription = {
  onUpdateStCode?:  {
    __typename: "StCode",
    Code: string,
    Name?: string | null,
    Address?: string | null,
    Market?: string | null,
    Topic?: string | null,
    Tel?: string | null,
    Unit?: string | null,
  } | null,
};

export type OnDeleteStCodeSubscriptionVariables = {
  Code?: string | null,
  Name?: string | null,
  Address?: string | null,
  Market?: string | null,
  Topic?: string | null,
};

export type OnDeleteStCodeSubscription = {
  onDeleteStCode?:  {
    __typename: "StCode",
    Code: string,
    Name?: string | null,
    Address?: string | null,
    Market?: string | null,
    Topic?: string | null,
    Tel?: string | null,
    Unit?: string | null,
  } | null,
};
