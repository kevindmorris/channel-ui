import ChannelViewVue from "@/views/channel/ChannelView.vue";
import CommentViewVue from "@/views/comment/CommentView.vue";
import DiscoverView from "@/views/discover/DiscoverView.vue";
import HomeView from "@/views/home/HomeView.vue";
import NewChannelViewVue from "@/views/new-channel/NewChannelView.vue";
import NewCommentViewVue from "@/views/new-comment/NewCommentView.vue";
import NewPostVue from "@/views/new-post/NewPostView.vue";
import PostViewVue from "@/views/post/PostView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/discover",
      name: "discover",
      component: DiscoverView,
    },
    {
      path: "/channel/:channelId",
      name: "channel",
      component: ChannelViewVue,
    },
    {
      path: "/channel/:channelId/post/:postId",
      name: "post",
      component: PostViewVue,
    },
    {
      path: "/channel/:channelId/post/:postId/comment/:commentId",
      name: "comment",
      component: CommentViewVue,
    },
    {
      path: "/channel/new",
      name: "new-channel",
      component: NewChannelViewVue,
    },
    {
      path: "/channel/:channelId/post/new",
      name: "new-post",
      component: NewPostVue,
    },
    {
      path: "/channel/:channelId/post/:postId/comment/new",
      name: "new-comment",
      component: NewCommentViewVue,
    },
  ],
});

export default router;
