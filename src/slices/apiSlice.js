import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({baseUrl: 'https://mern-auth-ej2m.onrender.com'});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['user'],
    endpoints: (builder) => ({}),
});

