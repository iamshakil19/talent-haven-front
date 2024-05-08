import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface FilterItem {
  label: string;
  value: any;
  name?: string;
}

interface AllApplicantsTable {
  allApplicantsTable: {
    limit: number;
    page: number;
    filter: FilterItem[];
    searchTerm: string;
  };
}

const initialState: AllApplicantsTable = {
  allApplicantsTable: {
    limit: 10,
    page: 1,
    filter: [],
    searchTerm: "",
  },
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setAllApplicantPage: (state, action) => {
      state.allApplicantsTable.page = action.payload;
    },
    setAllApplicantLimit: (state, action) => {
      state.allApplicantsTable.limit = action.payload;
    },
    setAllApplicantFilter: (state, action: PayloadAction<any>) => {
      const { label, value, name } = action.payload as {
        label: string;
        value: any;
        name: string;
      };

      const index = state.allApplicantsTable.filter.findIndex(
        (item: any) => (item.value as string) === value
      );

      if (index !== -1) {
        state.allApplicantsTable.filter.splice(index, 1);
      } else {
        state.allApplicantsTable.filter.push({ label, value, name });
      }
    },
    setAllApplicantSearchTerm: (state, action) => {
      state.allApplicantsTable.searchTerm = action.payload;
    },
  },
});

export const {
  setAllApplicantPage,
  setAllApplicantLimit,
  setAllApplicantFilter,
  setAllApplicantSearchTerm,
} = jobSlice.actions;

export default jobSlice.reducer;
