import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { cryptoApi } from './cryptoApi';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'c4b2bfa214msh5c33a09fa8318b6p1b415cjsnde4041577fc8'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const{
    useGetCryptoNewsQuery
} = cryptoNewsApi;