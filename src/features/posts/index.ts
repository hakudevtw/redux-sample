export {
  default as postsReducer,
  selectAllPosts,
  selectPostById,
  selectPostsByUser,
} from "./postsSlice";

export { default as PostsList } from "./components/PostsList";
export { default as AddPostForm } from "./components/AddPostForm";
export { default as SinglePostPage } from "./components/SinglePostPage";
export { default as EditPostForm } from "./components/EditPostForm";

export type { ReactionEmoji, Post, NewPost, EditPost, Reaction } from "./interfaces";
