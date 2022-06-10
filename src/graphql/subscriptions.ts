/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStCode = /* GraphQL */ `
  subscription OnCreateStCode(
    $Code: String
    $Name: String
    $Address: String
    $Market: String
    $Topic: String
  ) {
    onCreateStCode(
      Code: $Code
      Name: $Name
      Address: $Address
      Market: $Market
      Topic: $Topic
    ) {
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
export const onUpdateStCode = /* GraphQL */ `
  subscription OnUpdateStCode(
    $Code: String
    $Name: String
    $Address: String
    $Market: String
    $Topic: String
  ) {
    onUpdateStCode(
      Code: $Code
      Name: $Name
      Address: $Address
      Market: $Market
      Topic: $Topic
    ) {
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
export const onDeleteStCode = /* GraphQL */ `
  subscription OnDeleteStCode(
    $Code: String
    $Name: String
    $Address: String
    $Market: String
    $Topic: String
  ) {
    onDeleteStCode(
      Code: $Code
      Name: $Name
      Address: $Address
      Market: $Market
      Topic: $Topic
    ) {
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
