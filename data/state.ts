import {
  StateFiltersListsEnum,
  RecordTypeStateFiltersListsEnumToProductProperty,
} from "types/state";

const mappingToProductPropertyForDirectListFilterMatch: Omit<
  RecordTypeStateFiltersListsEnumToProductProperty,
  StateFiltersListsEnum.MAIN_RATINGS
> = {
  [StateFiltersListsEnum.CATEGORIES]: "category",
  [StateFiltersListsEnum.BRANDS]: "brand",
  [StateFiltersListsEnum.FROM_COUNTRIES]: "fromCountry",
  [StateFiltersListsEnum.FEATURED_TRAITS]: "featuredTraits",
};

const directMatchListFilters = Object.keys(
  mappingToProductPropertyForDirectListFilterMatch
);

export {
  mappingToProductPropertyForDirectListFilterMatch,
  directMatchListFilters,
};
