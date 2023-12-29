<script lang="ts">
import { PostsI } from "../interfaces";
import { defineComponent, toRaw } from "vue";
export default defineComponent({
  name: "Posts",
  data() {
    return {
      posts: [] as PostsI[],
    };
  },
  methods: {
    async loadPosts() {
      const response = await this.$axios.get(
        " https://jsonplaceholder.typicode.com/posts"
      );
      this.posts = response.data;
    },
    onDeletePost(post: PostsI) {
      this.posts = this.posts.filter((item: PostsI) => item.id !== post.id);
    },
  },
  created() {
    this.loadPosts();
  },
});
</script>

<template>
  <div class="posts p-2 ps-4">
    <h1 class="posts__title">Список постов</h1>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" class="link active">Главная</a>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <a href="#" class="link">Список постов</a>
        </li>
      </ol>
    </nav>
    <ul v-if="posts.length" class="posts__list">
      <li v-for="(post, index) in posts" :key="index">
        <RouterLink :to="{ path: `/posts/${post.id}` }" class="link"
          ><span @contextmenu.prevent="onDeletePost(post)" class="link-text"
            >Пост {{ post.id }}</span
          ></RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "../scss/main.scss";
.breadcrumb-item + .breadcrumb-item::before {
  color: $color;
}
.posts__title {
  color: $color;
}

.active {
  text-decoration: underline;
}

.link {
  color: $color;
}
</style>
