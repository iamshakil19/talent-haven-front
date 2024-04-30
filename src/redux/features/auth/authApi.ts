
import { baseApi } from "@/redux/api/baseApi";

const AUTH_URL = "/auth";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/change-password`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useChangePasswordMutation } = authApi;
