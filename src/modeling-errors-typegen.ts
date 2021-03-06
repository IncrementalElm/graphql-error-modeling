/**
 * This file was automatically generated by Nexus 0.11.2
 * Do not make changes to this file directly
 */

import * as swapi from "./types/backingTypes"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  DiscountErrorReason: 1 | 3 | 2
}

export interface NexusGenRootTypes {
  DiscountedLookupError: { // root type
    reason: NexusGenEnums['DiscountErrorReason']; // DiscountErrorReason!
  }
  DiscountedProductInfo: { // root type
    discountedPrice: number; // Int!
  }
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DiscountedProductInfoOrError: NexusGenRootTypes['DiscountedLookupError'] | NexusGenRootTypes['DiscountedProductInfo'];
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  DiscountErrorReason: NexusGenEnums['DiscountErrorReason'];
}

export interface NexusGenFieldTypes {
  DiscountedLookupError: { // field return type
    reason: NexusGenEnums['DiscountErrorReason']; // DiscountErrorReason!
  }
  DiscountedProductInfo: { // field return type
    discountedPrice: number; // Int!
  }
  Query: { // field return type
    discount: NexusGenRootTypes['DiscountedProductInfo']; // DiscountedProductInfo!
    discountOrError: NexusGenRootTypes['DiscountedProductInfoOrError']; // DiscountedProductInfoOrError!
    shoppingCartItems: string[]; // [String!]!
    userid: string; // String!
  }
}

export interface NexusGenArgTypes {
  Query: {
    discount: { // args
      discountCode: string; // String!
    }
    discountOrError: { // args
      discountCode: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  DiscountedProductInfoOrError: "DiscountedLookupError" | "DiscountedProductInfo"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "DiscountedLookupError" | "DiscountedProductInfo" | "Query";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "DiscountErrorReason";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = "DiscountedProductInfoOrError";

export interface NexusGenTypes {
  context: swapi.ContextType;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}