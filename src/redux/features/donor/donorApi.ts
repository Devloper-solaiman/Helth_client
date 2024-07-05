import { baseApi } from "@/redux/api/baseApi";


const donationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDonor: builder.query({
            query: () => {
                return {
                    url: "/donor",
                    method: "GET",
                };
            },
            providesTags: ["donor"],
        }),
        getSingleDonor: builder.query({
            query: (email) => {
                return {
                    url: `/donor/:${email}`,
                    method: "GET",
                };
            },
            providesTags: ["subscription"],
        }),
        postDonor: builder.mutation({
            query: (data) => ({
                url: "/donor",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["donor"],
        }),
    }),
});

export const {
    useGetDonorQuery,
    useGetSingleDonorQuery,
    usePostDonorMutation,
} = donationApi;
