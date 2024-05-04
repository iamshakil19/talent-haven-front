import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { TResponseRedux } from "@/types";

interface FullTagDescription<T = string> {
  type: string;
  id?: T;
}

const JOB_URL = "/job";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addNewJob: builder.mutation({
      query: (data) => ({
        url: `${JOB_URL}/create`,
        method: "POST",
        body: data,
      }),
    }),
    getAllJobs: builder.query({
      query: () => ({
        url: `${JOB_URL}/all-jobs`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getSingleJob: builder.query({
      query: (data) => ({
        url: `${JOB_URL}/${data.id}`,
        method: "GET",
      }),
    }),
    updateJob: builder.mutation({
      query: (data) => ({
        url: `${JOB_URL}/${data.id}`,
        method: "PATCH",
        data: data.data,
      }),
    }),
    deleteJob: builder.mutation({
      query: (data) => ({
        url: `${JOB_URL}/${data.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddNewJobMutation,
  useDeleteJobMutation,
  useGetAllJobsQuery,
  useGetSingleJobQuery,
  useUpdateJobMutation,
} = jobApi;
