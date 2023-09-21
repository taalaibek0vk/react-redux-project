import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: 'Bogdan',
            email: '',
            phone: ''
        },
        xxxx: ''
    },
    reducers: {
        changeName: (state, action) => {
            state.user.name = action.payload
        }
    }
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer