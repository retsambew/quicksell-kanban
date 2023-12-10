import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: localStorage.getItem("ordering") || "priority",
}

export const orderingSlice = createSlice({
    name: 'ordering',
    initialState,
    reducers: {
        setOrdering: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setOrdering } = orderingSlice.actions

export default orderingSlice.reducer
