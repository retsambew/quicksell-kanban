import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setUsers } = userSlice.actions

export default userSlice.reducer
