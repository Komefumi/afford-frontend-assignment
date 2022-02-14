import {
  StateFiltersListsEnum,
  RecordTypeStateFiltersListsEnumToProductProperty,
} from "types/state";

const productPropertyForStateFiltersListsEnum: RecordTypeStateFiltersListsEnumToProductProperty =
  {
    [StateFiltersListsEnum.CATEGORIES]: "category",
    [StateFiltersListsEnum.BRANDS]: "brand",
    [StateFiltersListsEnum.FROM_COUNTRIES]: "fromCountry",
    [StateFiltersListsEnum.FEATURED_TRAITS]: "featuredTraits",
  };

export { productPropertyForStateFiltersListsEnum };
