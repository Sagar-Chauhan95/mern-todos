import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos.reducer";

export const store = configureStore({
    reducer: {
        todosReducer: todosReducer
    }
});

// export default store;
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch