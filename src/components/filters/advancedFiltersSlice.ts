import { createSlice } from "@reduxjs/toolkit";
import {AdvancedFiltersTypes} from "types/AdvancedFiltersTypes";

type AdvancedFiltersState = {
  filters: AdvancedFiltersTypes
  filterQueryString: string
}
const initialState : AdvancedFiltersState = {
  filters: {},
  filterQueryString: ""
};

const AdvancedFiltersSlice = createSlice({
  name: "advanced-filter",
  initialState,
  reducers: {
    filterByAreas: (state, action) => {
      state.filters.areas = action.payload.areas;
    },
    filtersByStations: (state, action) => {
      state.filters.stations = action.payload;
    },
    filterByComponents: (state, action) => {
      state.filters.components = action.payload;
    },
    filterInvalid: (state, action) => {
      state.filters.showinvalid = "false"
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    }
  }
});

export const {
  filterByAreas,
  filtersByStations,
  filterByComponents,
  filterInvalid,
  setFilters
} = AdvancedFiltersSlice.actions;

export default AdvancedFiltersSlice.reducer;