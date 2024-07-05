import { baseApi } from "@/redux/api/baseApi";


const testiomialApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTestimonial: builder.query({
            query: () => {
                return {
                    url: "/testimonial",
                    method: "GET",
                };
            },
            providesTags: ["testiomial"],
        }),
        postTestimonial: builder.mutation({
            query: (data) => ({
                url: "/testimonial",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["testiomial"],
        }),
    }),
});

export const {
    useGetTestimonialQuery,
    usePostTestimonialMutation
} = testiomialApi