import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVolunteers: builder.query({
      query: () => {
        return {
          url: "/volunteer",
          method: "GET",
        };
      },
      providesTags: ["volunteer"],
    }),
    postVolunteer: builder.mutation({
      query: (data) => ({
        url: "/volunteer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["volunteer"],
    }),
  }),
});

export const { useGetVolunteersQuery, usePostVolunteerMutation } = volunteerApi;
