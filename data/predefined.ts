import { createRandomPrependsAddedList } from "utils/rand";
import { capitalizeString } from "utils/transform";
import {
  CategoryEnum,
  RecordTypeCategoryEnumToData,
  BrandEnum,
  FeaturedTraitEnum,
  SortCriterionEnum,
  RecordTypeSortCriterionEnumToData,
} from "types/data";

import countries from "./source/countries.json";
import adjectives from "./source/adjectives.json";
import kitchenwareBase from "./source/kitchenware.json";
import vegetablesBase from "./source/vegetables.json";
import fruitsBase from "./source/fruits.json";
import chefTips from "./source/chef-tips.json";
import placeholderTextContent from "./source/lorem-ipsum";
import placeholderImage from "./source/placeholder.png";

const kitchenware = createRandomPrependsAddedList(
  adjectives,
  kitchenwareBase
).map(capitalizeString);
const vegetables = createRandomPrependsAddedList(
  adjectives,
  vegetablesBase
).map(capitalizeString);
const fruits = createRandomPrependsAddedList(adjectives, fruitsBase).map(
  capitalizeString
);

const categories = [
  CategoryEnum.VEGETABLES,
  CategoryEnum.FRUITS,
  CategoryEnum.KITCHEN_ACCESSORIES,
  CategoryEnum.CHEF_TIPS,
];

const categoryEnumToData: RecordTypeCategoryEnumToData = {
  [CategoryEnum.CHEF_TIPS]: {
    nameList: chefTips,
  },
  [CategoryEnum.KITCHEN_ACCESSORIES]: {
    nameList: kitchenware,
  },
  [CategoryEnum.FRUITS]: {
    nameList: fruits,
  },
  [CategoryEnum.VEGETABLES]: {
    nameList: vegetables,
  },
};

const brands = [
  BrandEnum.ROYAL_FIELDS,
  BrandEnum.CRASMAS_FIELDS,
  BrandEnum.VEGETARISMA_FARM,
  BrandEnum.FARMER_FIELD_EVE,
  BrandEnum.TRUE_FARMER_STEVE,
];

const featuredTraits = [FeaturedTraitEnum.FARM, FeaturedTraitEnum.BIO];

const sortCriteria = [SortCriterionEnum.POPULARITY, SortCriterionEnum.PRICE];

const sortCriterionEnumToData: RecordTypeSortCriterionEnumToData = {
  [SortCriterionEnum.POPULARITY]: {
    selectionLabel: "Most Popular",
  },
  [SortCriterionEnum.PRICE]: {
    selectionLabel: "Cheapest",
  },
};

export {
  countries,
  kitchenware,
  vegetables,
  fruits,
  chefTips,
  categories,
  categoryEnumToData,
  brands,
  featuredTraits,
  placeholderTextContent,
  placeholderImage,
  sortCriteria,
  sortCriterionEnumToData,
};
