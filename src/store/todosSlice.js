import { createSlice, nanoid } from "@reduxjs/toolkit";


const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: nanoid(),
                title: action.payload,
                completed: false
            })
        },
        removeTodo: (state, action) => {
            const ind = state.items.findIndex(t => t.id === action.payload)
            if (ind > -1) {
                state.items.splice(ind, 1)
            }
        },
        toggleTodo: (state, action) => {
            const ind = state.items.findIndex(t => t.id === action.payload)
            if (ind > -1) {
                state.items[ind].completed = !state.items[ind].completed
            }
        }
    }
})

export const todosActions = todosSlice.actions
export const todosReducer = todosSlice.reducer