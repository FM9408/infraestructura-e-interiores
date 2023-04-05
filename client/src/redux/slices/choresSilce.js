import { createSlice } from '@reduxjs/toolkit'


const choresSlice = createSlice({
    name: 'chores Slice',
    initialState: {
        chores: [],
        loading : true
    },
    reducers: {
        showShores: (state, action) => {
            state.chores = action.payload
            state.loading = false
        },
        
    }
})


export const { showShores } = choresSlice.actions

export default choresSlice.reducer