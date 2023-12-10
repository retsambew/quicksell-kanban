import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: localStorage.getItem("grouping") || "status",
}

export const groupingSlice = createSlice({
    name: 'grouping',
    initialState,
    reducers: {
        setGrouping: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setGrouping } = groupingSlice.actions

export default groupingSlice.reducer
