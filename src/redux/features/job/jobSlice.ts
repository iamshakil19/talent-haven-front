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
  allJobsPage: {
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
  allJobsPage: {
    limit: 20,
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
    clearAllApplicantTableFilter: (state) => {
      state.allApplicantsTable.limit = 10;
      state.allApplicantsTable.page = 1;
      state.allApplicantsTable.searchTerm = "";
      state.allApplicantsTable.filter = [];
    },

    setAllJobsPage: (state, action) => {
      state.allJobsPage.page = action.payload;
    },
    setAllJobsLimit: (state, action) => {
      state.allJobsPage.limit = action.payload;
    },
    setAllJobsFilter: (state, action: PayloadAction<any>) => {
      const { label, value, name } = action.payload as {
        label: string;
        value: any;
        name: string;
      };

      const index = state.allJobsPage.filter.findIndex(
        (item: any) => (item.value as string) === value
      );

      if (index !== -1) {
        state.allJobsPage.filter.splice(index, 1);
      } else {
        state.allJobsPage.filter.push({ label, value, name });
      }
    },
    setAllJobsSearchTerm: (state, action) => {
      state.allJobsPage.searchTerm = action.payload;
    },
    clearAllJobsFilter: (state) => {
      state.allJobsPage.limit = 20;
      state.allJobsPage.page = 1;
      state.allJobsPage.searchTerm = "";
      state.allJobsPage.filter = [];
    },
  },
});

export const {
  setAllApplicantPage,
  setAllApplicantLimit,
  setAllApplicantFilter,
  setAllApplicantSearchTerm,
  clearAllApplicantTableFilter,
  setAllJobsPage,
  setAllJobsLimit,
  setAllJobsFilter,
  setAllJobsSearchTerm,
  clearAllJobsFilter,
} = jobSlice.actions;

export default jobSlice.reducer;
