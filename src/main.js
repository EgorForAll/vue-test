import { createApp, h } from "vue";
import App from "./App.vue";
import MainPage from "./components/Main.vue";
import PostsPage from "./components/Posts.vue";
import PostView from "./components/Post.vue";
import { createRouter, createWebHistory } from "vue-router";
import axios from "./axios/index";
import "./style.css";
const router = createRouter({
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
    },
    {
      path: "/posts",
      name: "posts",
      component: PostsPage,
    },
    {
      path: "/posts/:id",
      name: "post",
      component: PostView,
    },
  ],
  history: createWebHistory(),
});

const app = createApp({
  render: () => h(App),
});

app.config.globalProperties.$http = axios;

app.use(router);
app.use(axios, {
  baseUrl: "https://jsonplaceholder.typicode.com",
});

app.mount("#app");
