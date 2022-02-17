import { createReducer } from "@reduxjs/toolkit";
import { MAX_PRICE } from "config/constants";
import ActionNames from "./actions/names";
import {
  AppStateInterface,
  SetProductsAction,
  SetFilterInListsAction,
  SetFilterInRangesAction,
  StateFiltersListsEnum,
  StateFiltersRangesEnum,
} from "types/state";
import { SortCriterionEnum } from "types/data";

const { SET_PRODUCT_ITEMS, SET_FILTER_IN_LISTS, SET_FILTER_IN_RANGES } =
  ActionNames;

const initialState: AppStateInterface = {
  products: [],
  filters: {
    lists: {
      [StateFiltersListsEnum.CATEGORIES]: [],
      [StateFiltersListsEnum.BRANDS]: [],
      [StateFiltersListsEnum.FEATURED_TRAITS]: [],
      [StateFiltersListsEnum.FROM_COUNTRIES]: [],
      [StateFiltersListsEnum.MAIN_RATINGS]: [],
    },
    ranges: {
      [StateFiltersRangesEnum.PRICE]: {
        min: 0,
        max: MAX_PRICE,
      },
    },
  },
  sortCriterion: SortCriterionEnum.POPULARITY,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_PRODUCT_ITEMS, (state, action: SetProductsAction) => {
      state.products = action.payload;
    })
    .addCase(SET_FILTER_IN_LISTS, (state, action: SetFilterInListsAction) => {
      const { target, nextList } = action.payload;
      state.filters.lists[target] = nextList;
    })
    .addCase(SET_FILTER_IN_RANGES, (state, action: SetFilterInRangesAction) => {
      const { target, nextRange } = action.payload;
      state.filters.ranges[target] = nextRange;
    });
});

export default rootReducer;
