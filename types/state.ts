import { Action } from "@reduxjs/toolkit";
import {
  ProductInterface,
  RatingEnum,
  FeaturedTraitEnum,
  SortCriterionEnum,
} from "./data";

export enum StateFiltersListsEnum {
  CATEGORIES = "categories",
  BRANDS = "brands",
  FROM_COUNTRIES = "fromCountries",
  FEATURED_TRAITS = "featuredTraits",
  MAIN_RATINGS = "mainRatings",
}

export enum StateFiltersRangesEnum {
  PRICE = "price",
}

export interface PriceRangeInterface {
  min: number;
  max: number;
}

export type IndividualPossibleFilterListValue = unknown;

export type PossibleFilterListValues = IndividualPossibleFilterListValue[];
export type PossibleRangeFilterValues = unknown;

export type RecordTypeStateFiltersListsEnumToItemList = Record<
  StateFiltersListsEnum,
  PossibleFilterListValues
>;
export type RecordTypeStateFiltersRangesEnumToRangeItem = Record<
  StateFiltersRangesEnum,
  PossibleRangeFilterValues
>;

export type RecordTypeStateFiltersListsEnumToProductProperty = Record<
  StateFiltersListsEnum,
  keyof ProductInterface
>;

export interface AppStateInterface {
  products: ProductInterface[];
  filters: {
    lists: RecordTypeStateFiltersListsEnumToItemList;
    ranges: RecordTypeStateFiltersRangesEnumToRangeItem;
  };
  sortCriterion: SortCriterionEnum;
}

export interface PayloadActionInterface<T> extends Action {
  payload: T;
}

export type SetProductsAction = PayloadActionInterface<ProductInterface[]>;

export interface SetFilterInListsPayload {
  target: StateFiltersListsEnum;
  nextList: PossibleFilterListValues;
}

export interface SetFilterInRangesPayload {
  target: StateFiltersRangesEnum;
  nextRange: PossibleRangeFilterValues;
}

export type SetFilterInListsAction =
  PayloadActionInterface<SetFilterInListsPayload>;

export type SetFilterInRangesAction =
  PayloadActionInterface<SetFilterInRangesPayload>;

export type SetSortModeAction = PayloadActionInterface<SortCriterionEnum>;
