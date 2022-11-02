import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post, PostState } from '../types/App'

const initialState: PostState = {
  list: [],
}

export const createPost = createSlice({
  name: 'creator',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.list.unshift({
        id: action.payload.id,
        title: action.payload.title,
        status: action.payload.status,
        date: action.payload.date,
      })
      window.localStorage.setItem('posts', JSON.stringify(state.list))
    },
    updatePost: (state, action: PayloadAction<Post[]>) => {
      window.localStorage.setItem('posts', JSON.stringify(action.payload))
    },
  },
})

export const { addPost, updatePost } = createPost.actions
export default createPost.reducer
