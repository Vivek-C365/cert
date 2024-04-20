import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/user/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "register/",
        method: "POST",
        body: user,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    updateProfile: builder.mutation({
      query: ({ actualData, access_token }) => ({
        url: "update_profile/",
        method: "PUT",
        body: actualData,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    trainingCalender: builder.query({
      query: () => ({
        url: "training_calender/",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    
    loginUser: builder.mutation({
      query: (user) => ({
        url: "login/",
        method: "POST",
        body: user,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getLoggedUser: builder.query({
      query: (access_token) => ({
        url: "profile/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    changeUserPassword: builder.mutation({
      query: ({ actualData, access_token }) => ({
        url: "changepassword/",
        method: "PUT",
        body: actualData,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user) => ({
        url: "send-reset-password-email/",
        method: "POST",
        body: user,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => ({
        url: `reset-password/${id}/${token}/`,
        method: "POST",
        body: actualData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetLoggedUserQuery,
  useChangeUserPasswordMutation,
  useSendPasswordResetEmailMutation,
  useResetPasswordMutation,
  useUpdateProfileMutation,
  useTrainingCalenderQuery,
} = userAuthApi;
