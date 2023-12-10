import { configureStore } from '@reduxjs/toolkit'
import groupingReducer from '../features/grouping/groupingSlice'
import orderingReducer from '../features/ordering/orderingSlice'
import userSlice from '../features/users/userSlice'
import ticketSlice from '../features/tickets/ticketSlice'

export const store = configureStore({
    reducer: {
        grouping: groupingReducer,
        ordering: orderingReducer,
        users: userSlice,
        tickets: ticketSlice,
    },
})