import { baseApi } from "@/redux/api/baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComment: builder.query({
      query: () => {
        return {
          url: "/comment",
          method: "GET",
        };
      },
      providesTags: ["comment"],
    }),
    postComment: builder.mutation({
      query: (data) => ({
        url: "/comment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});

export const { useGetCommentQuery, usePostCommentMutation } = donationApi;
