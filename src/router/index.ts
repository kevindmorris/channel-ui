import ChannelView from "@/views/channel/ChannelView.vue";
import CommentView from "@/views/comment/CommentView.vue";
import DiscoverView from "@/views/discover/DiscoverView.vue";
import HomeView from "@/views/home/HomeView.vue";
import NewChannelView from "@/views/new-channel/NewChannelView.vue";
import PostView from "@/views/post/PostView.vue";
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
      path: "/channel/new",
      name: "new-channel",
      component: NewChannelView
    },
    {
      path: "/discover",
      name: "discover",
      component: DiscoverView
    },
    {
      path: "/channel/:id",
      name: "channel",
      component: ChannelView
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostView
    },
    {
      path: "/comment/:id",
      name: "comment",
      component: CommentView
    }
  ]
});

export default router;
