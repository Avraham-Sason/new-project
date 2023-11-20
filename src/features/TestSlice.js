import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        userId:"",
        title: 'test vork frop left div',
        content: "test vork frop rghite div.",
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
]

const TestSlice = createSlice({
    name: 'tasks',
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