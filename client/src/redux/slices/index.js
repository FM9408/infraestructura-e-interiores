import apiReducer from './apiSlice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    api: apiReducer
})