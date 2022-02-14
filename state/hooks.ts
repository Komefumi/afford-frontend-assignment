import { useAppSelector } from "state/store";
import { generateRatingValue } from "utils/calculate";
import { productPropertyForStateFiltersListsEnum } from "data/state";
import {
  StateFiltersListsEnum,
  PossibleFilterListValues,
} from "types/state";
import { SortCriterionEnum, ProductInterface } from "types/data";

function useGetFilteredProducts(): ProductInterface[] {
  const { products, filters } = useAppSelector((state) => state);
  const { lists, ranges } = filters;

  let returnableProducts = products.slice();
  Object.values(StateFiltersListsEnum).forEach((filterName) => {
    const currentFilterList = lists[filterName] as PossibleFilterListValues;
    if (currentFilterList.length > 0) {
      returnableProducts = returnableProducts.filter((currentProduct) => {
        const propertyInProduct =
          currentProduct[
            productPropertyForStateFiltersListsEnum[
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
        generateRatingValue(productB.rating) -
        generateRatingValue(productA.rating)
      );
    });
  }

  return sortedProducts;
}

export { useGetSortedProducts };
