import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { TResponseRedux } from "@/types";

const JOB_URL = "/job";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addNewJob: builder.mutation({
      query: (data) => ({
        url: `${JOB_URL}/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.job],
    }),
    getAllJobs: builder.query({
      query: (arg: Record<string, any>) => ({
        url: `${JOB_URL}/all-jobs`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.job],
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
