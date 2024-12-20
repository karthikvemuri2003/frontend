import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Addzeo from '../Components/Addzeo'

export const schoolApi = createApi({
  reducerPath: 'school',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500/'} ),
  endpoints: (builder) => ({
    getschool: builder.query({
      query: () => `/`,
    }), 
    addbranches: builder.mutation({
      query: (branch) => ({
        url: `/addbranches`,
        method: 'POST',  
        body:branch,
      }),
    }),
    Addzeo: builder.mutation({
      query: (branch) => ({
        url: `/addzeo`,
        method: 'POST',  
        body:branch,
      }),
    }),
  }),
})

export const { useGetschoolQuery,useAddbranchesMutation,useAddzeoMutation } = schoolApi