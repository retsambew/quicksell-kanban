import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const ticketSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setTickets: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setTickets } = ticketSlice.actions

export default ticketSlice.reducer
