import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        name:"test 1",
        gender:"male",
        
    }
]

const TestSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        testAdded: {
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            },
            reducer(state, action) {
                state.push(action.payload)
            }
        },
    }
})

export const TestSelector = (state) => state.test;

export const { testAdded, reactionAdded } = TestSlice.actions

export default TestSlice.reducer