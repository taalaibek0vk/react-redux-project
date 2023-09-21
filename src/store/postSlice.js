import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

// dispatch(fetchPosts())
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const resp = await axios.get('https://dummyjson.com/posts?limit=15')
    return resp.data
  }
)

export const deletePost = createAsyncThunk('posts/deletePost',
  async (id) => {
    const resp = await axios.delete(`https://dummyjson.com/posts/${id}`)
    return resp.data
  }
)

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null
  },
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true
      state.error = null
      state.posts = []
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload.posts
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false
      state.posts = action.error.message
    })
      .addCase(deletePost.fulfilled, (state, action) => { 
        state.posts = state.posts.filter((p) => p.id !== action.payload.id)
      })
  },
})

export const postReducer = postSlice.reducer