import { createAction } from "@reduxjs/toolkit";
import { createPayloadCarrier } from "utils/state";
import { ProductInterface } from "types/data";
import {
  SetFilterInListsPayload,
  SetFilterInRangesPayload,
  SetSortModeAction,
} from "types/state";
import ActionNames from "./names";

const {
  SET_PRODUCT_ITEMS,
  SET_FILTER_IN_LISTS,
  SET_FILTER_IN_RANGES,
  SET_SORT_MODE,
} = ActionNames;

const createSetProducts = createAction(
  SET_PRODUCT_ITEMS,
  createPayloadCarrier<ProductInterface[]>()
);

const createSetFilterInLists = createAction(
  SET_FILTER_IN_LISTS,
  createPayloadCarrier<SetFilterInListsPayload>()
);

const createSetFilterInRanges = createAction(
  SET_FILTER_IN_RANGES,
  createPayloadCarrier<SetFilterInRangesPayload>()
);

const createSetSortMode = createAction(
  SET_SORT_MODE,
  createPayloadCarrier<SetSortModeAction>()
);

export {
  createSetProducts,
  createSetFilterInLists,
  createSetFilterInRanges,
  createSetSortMode,
};
