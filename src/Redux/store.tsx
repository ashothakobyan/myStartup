import { configureStore } from '@reduxjs/toolkit'
import myStartup from './slice'
export const store = configureStore({
  reducer: {
    myStartup
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch