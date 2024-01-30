import {
  ChannelView,
  CommentView,
  DiscoverView,
  HomeView,
  NewChannelView,
  NewCommentView,
  NewPostView,
  PostView,
  UpdateChannelView,
  UpdateCommentView,
  UpdatePostView,
  UserView
} from "@/views";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/discover",
      name: "discover",
      component: DiscoverView
    },
    {
      path: "/user",
      name: "user",
      component: UserView
    },
    {
      path: "/channel/new",
      name: "new-channel",
      component: NewChannelView
    },
    {
      path: "/channel/:channelId",
      name: "channel",
      component: ChannelView
    },
    {
      path: "/channel/:channelId/update",
      name: "update-channel",
      component: UpdateChannelView
    },
    {
      path: "/channel/:channelId/post/new",
      name: "new-post",
      component: NewPostView
    },
    {
      path: "/post/:postId",
      name: "post",
      component: PostView
    },
    {
      path: "/post/:postId/update",
      name: "update-post",
      component: UpdatePostView
    },
    {
      path: "/post/:postId/comment/new",
      name: "new-comment",
      component: NewCommentView
    },
    {
      path: "/comment/:commentId",
      name: "comment",
      component: CommentView
    },
    {
      path: "/comment/:commentId/update",
      name: "update-comment",
      component: UpdateCommentView
    }
  ]
});

export default router;
