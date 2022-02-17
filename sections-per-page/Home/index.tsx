import { Box, Badge, Checkbox, Typography } from "@local-mui";
import { useAppSelector } from "state/store";
import {
  useGetCategoryToProductCount,
  // useGetBrandToProductCount,
} from "state/hooks";
import { categories, brands } from "data/predefined";
import { FilterControlMajorProps } from "types/prop-types";
import classes from "./classes.module.scss";

function FilterControlMajor({ title, children }: FilterControlMajorProps) {
  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Box>{children}</Box>
    </Box>
  );
}
export function CategoriesControl() {
  // const { categories: setCategoriesInFilterState } = useAppSelector((state) => state.filters.lists);
  const categoryToProductCount = useGetCategoryToProductCount();
  return (
    <FilterControlMajor title="Categories">
      <ul className={classes.item_list}>
        {categories.map((categoryEnumItem) => {
          return (
            <li key={categoryEnumItem}>
              <Box className={classes.category_name}>{categoryEnumItem}</Box>
              <Badge
                badgeContent={categoryToProductCount[categoryEnumItem]}
                className={classes.category_badge}
              />
            </li>
          );
        })}
      </ul>
    </FilterControlMajor>
  );
}

export function BrandsControl() {
  const { brands: brandsInFilterState } = useAppSelector(
    (state) => state.filters.lists
  );
  // const brandToProductCount = useGetBrandToProductCount();
  return (
    <FilterControlMajor title="Brands">
      <ul className={classes.item_list}>
        {brands.map((brandEnumItem) => {
          const isChecked = brandsInFilterState.includes(brandEnumItem);
          return (
            <li key={brandEnumItem}>
              <Checkbox color="primary" checked={isChecked} />
              <Box>{brandEnumItem}</Box>
            </li>
          );
        })}
      </ul>
    </FilterControlMajor>
  );
}

export function RatingsControl() {
  return (
    <FilterControlMajor title="Ratings">
      <ul className={classes.item_list}></ul>
    </FilterControlMajor>
  );
}

export function PriceControl() {
  return (
    <FilterControlMajor title="Price">
      <ul className={classes.item_list}></ul>
    </FilterControlMajor>
  );
}
