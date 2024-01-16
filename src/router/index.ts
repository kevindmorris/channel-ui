import ChannelView from "@/views/channel/ChannelView.vue";
import CommentView from "@/views/comment/CommentView.vue";
import DiscoverView from "@/views/discover/DiscoverView.vue";
import HomeView from "@/views/home/HomeView.vue";
import NewChannelView from "@/views/new-channel/NewChannelView.vue";
import NewCommentView from "@/views/new-comment/NewCommentView.vue";
import NewPostView from "@/views/new-post/NewPostView.vue";
import PostView from "@/views/post/PostView.vue";
import UpdateChannelView from "@/views/update-channel/UpdateChannelView.vue";
import UpdateCommentView from "@/views/update-comment/UpdateCommentView.vue";
import UpdatePostView from "@/views/update-post/UpdatePostView.vue";
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
