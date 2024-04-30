import { baseApi } from "@/redux/api/baseApi";

const JOB_URL = "/job";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addNewJob: builder.mutation({
      query: (data) => ({
        url: `${JOB_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    getAllJobs: builder.query({
      query: () => ({
        url: `${JOB_URL}`,
        method: "GET",
      }),
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
