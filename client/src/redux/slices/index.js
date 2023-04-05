import apiReducer from './apiSlice'
import { combineReducers } from '@reduxjs/toolkit'
import choresSilce from './choresSilce'

export const rootReducer = combineReducers({
    api: apiReducer,
    chores: choresSilce
})