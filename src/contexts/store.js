import { configureStore } from '@reduxjs/toolkit'

import rscSlice from './rscSlice'
import categoriesSlice from './categoriesSlice'

export default configureStore({
  reducer: {
    resources: rscSlice,
    categories :  categoriesSlice,
  },
})