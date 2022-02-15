export enum SortCriterionEnum {
  POPULARITY = "Popularity",
  PRICE = "Price",
}

export enum CategoryEnum {
  VEGETABLES = "Vegetables",
  FRUITS = "Fruits",
  KITCHEN_ACCESSORIES = "Kitceh Accessories",
  CHEF_TIPS = "Chef-Tips",
}

export enum BrandEnum {
  ROYAL_FIELDS = "Royal Fields",
  CRASMAS_FIELDS = "Crasmas Fields",
  VEGETARISMA_FARM = "Vegetarisma Farm",
  FARMER_FIELD_EVE = "Farmer Field Eve",
  TRUE_FARMER_STEVE = "True Farmer Steve",
}

export enum FeaturedTraitEnum {
  FARM = "Farm",
  BIO = "Bio",
}

export interface RatingInterface {
  average: number;
  count: number;
}

export interface ProductInterface {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: CategoryEnum;
  brand: BrandEnum;
  rating: RatingInterface;
  price: number;
  featuredTraits: FeaturedTraitEnum[];
  fromCountry: string;
}

export interface CategoryEnumDataInterface {
  nameList: string[];
}

export type RecordTypeCategoryEnumToData = Record<
  CategoryEnum,
  CategoryEnumDataInterface
>;

export interface SortCriterionEnumDataInterface {
  selectionLabel: string;
}

export type RecordTypeSortCriterionEnumToData = Record<
  SortCriterionEnum,
  SortCriterionEnumDataInterface
>;
