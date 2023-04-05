import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllData = createAsyncThunk(
    'data/fetchAllData',
    async (page, thunkAPI) => {
        if (page === 1) {
            const response = await axios.get('https://rickandmortyapi.com/api/character')
            return response.data
        } else {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            return response.data
        }
        
    }
)

export const getCharacterDetail = createAsyncThunk(
    'data/fetchCharacterDetail',
    async (id, thunkAPI) => {
        
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
     
            return response.data
        
        
    }
)



const apiSlice = createSlice({
    'name': 'Api Slice',
    'initialState': {
        data: [],
        loading: 'idle',
        detail: {},
        page: 1,
        totalPages: 0
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllData.fulfilled, (state, action) => {
            state.data = action.payload.results
            state.totalPages = action.payload.info.pages
            state.loading = 'fulfilled'
        })
        builder.addCase(getAllData.rejected, (state, action) => {
            state.loading = 'rejected'
           
        })
        builder.addCase(getAllData.pending, (state) => {
            state.loading = 'loading'
        })
        builder.addCase(getCharacterDetail.fulfilled, (state, action) => {
            state.detail = action.payload
        })
        
    }
    })


    export const {setPage} = apiSlice.actions

export default apiSlice.reducer