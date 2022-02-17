import { useAppSelector } from "state/store";
import { generateRatingValue } from "utils/calculate";
import {} from "utils/transform";
import {
  mappingToProductPropertyForDirectListFilterMatch,
  directMatchListFilters,
} from "data/state";
import {
  StateFiltersListsEnum,
  PossibleFilterListValues,
} from "types/state";
import {
  CategoryEnum,
  SortCriterionEnum,
  ProductInterface,
  RecordTypeCategoryEnumToProductCount,
} from "types/data";

function useGetFilteredProducts(): ProductInterface[] {
  const { products, filters } = useAppSelector((state) => state);
  const { lists, ranges } = filters;

  let returnableProducts = products.slice();
  Object.values(StateFiltersListsEnum)
    .filter((filterName) => directMatchListFilters.includes(filterName))
    .forEach((filterName) => {
      const currentFilterList = lists[filterName] as PossibleFilterListValues;
      if (currentFilterList.length > 0) {
        returnableProducts = returnableProducts.filter((currentProduct) => {
          const propertyInProduct =
            currentProduct[
              // @ts-ignore
              mappingToProductPropertyForDirectListFilterMatch[
                filterName
              ] as keyof ProductInterface
            ];
          if (propertyInProduct instanceof Array) {
            return propertyInProduct.some((unitInValueList) =>
              currentFilterList.includes(unitInValueList)
            );
          } else if (typeof propertyInProduct !== "object") {
            return currentFilterList.includes(propertyInProduct);
          }
        });
      }
    });

  returnableProducts = returnableProducts.filter(({ price }) => {
    const { min, max } = ranges.price;
    return price >= min && price <= max;
  });

  return returnableProducts;
}

function useGetSortedProducts() {
  const { sortCriterion } = useAppSelector((state) => state);

  const filteredProducts = useGetFilteredProducts();
  let sortedProducts = filteredProducts.slice();
  if (sortCriterion === SortCriterionEnum.PRICE) {
    sortedProducts.sort((productA, productB) => {
      return productA.price - productB.price;
    });
  } else if (sortCriterion === SortCriterionEnum.POPULARITY) {
    sortedProducts.sort((productA, productB) => {
      return (
        generateRatingValue(productA.rating) -
        generateRatingValue(productB.rating)
      );
    });
  }

  return sortedProducts;
}

function useGetCategoryToProductCount(): RecordTypeCategoryEnumToProductCount {
  // const { products } = useAppSelector((state) => state);
  const products = useGetFilteredProducts();
  const returnableData: RecordTypeCategoryEnumToProductCount = Object.values(
    CategoryEnum
  ).reduce((builtMapping, enumValue) => {
    builtMapping[enumValue] = 0;
    return builtMapping;
  }, {} as RecordTypeCategoryEnumToProductCount);
  products.forEach((productItem) => {
    const { category } = productItem;
    returnableData[category] += 1;
  });

  return returnableData;
}


export {
  useGetSortedProducts,
  useGetCategoryToProductCount,
};
