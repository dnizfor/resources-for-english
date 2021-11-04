import { createSlice } from '@reduxjs/toolkit'

import resourcesData from '../data/resourcesData'

export const rscSlice = createSlice({
  name: 'resources',
  initialState: {
    value: resourcesData,
  },
  reducers: {},
})


export default rscSlice.reducer