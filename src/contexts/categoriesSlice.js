import { createSlice } from '@reduxjs/toolkit'

import categoriesData from "../data/categoriesData"

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    value: categoriesData,
  },
  reducers: {},
})


export default categoriesSlice.reducer