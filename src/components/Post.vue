<script lang="ts">
import { defineComponent } from "vue";
import { PostsI, UserI } from "../interfaces";
export default defineComponent({
  name: "PostView",
  data() {
    return {
      post: null as PostsI | null,
      user: null as null | UserI,
    };
  },
  methods: {
    async loadPost() {
      const response = await this.$axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      );
      this.post = response.data;
    },
    async loadUser() {
      const response = await this.$axios.get(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
      );
      this.user = response.data;
    },
    findId(): string {
      return window.location.pathname.slice(7);
    },
  },
  created() {
    this.loadPost();
    this.loadUser();
  },
});
</script>

<template>
  <div class="post-view p-2 ps-4">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink :to="{ name: 'main' }" class="link active"
            >Главная</RouterLink
          >
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <RouterLink :to="{ name: 'posts' }" class="link"
            >Список постов</RouterLink
          >
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <RouterLink :to="{ path: `/posts/${findId()}` }" class="link"
            >Пост {{ findId() }}</RouterLink
          >
        </li>
      </ol>
    </nav>
    <div class="post-view__body mt-2">
      <div class="post-view__item">
        Заголовок поста: <span>{{ post?.title }}</span>
      </div>
      <div class="post-view__item mb-3">
        Контент: <span>{{ post?.body }}</span>
      </div>
      <div class="post-view__item" :to="{ path: `/users/${post?.userId}` }">
        <h2 class="mb-3">Об авторе</h2>
        <div class="autor">
          <div class="author__data">
            <div class="author__item">
              Имя пользователя: <span>{{ user?.name }}</span>
            </div>
            <div class="author__item">
              Email: <span>{{ user?.email }}</span>
            </div>
            <div class="author__item">
              Телефон: <span>{{ user?.phone }}</span>
            </div>
            <div class="author__item">
              Website: <span>{{ user?.website }}</span>
            </div>
          </div>
        </div>
      </div>

      >
    </div>
  </div>
</template>

<style lang="scss">
@import "../scss/main.scss";
.breadcrumb-item + .breadcrumb-item::before {
  color: $color;
}
.post-view__title {
  color: $color;
}

.author__item {
  @extend .post-view__title;
  font-size: 18px;
  margin-bottom: 10px;
  span {
    color: #fff;
    margin-left: 5px;
  }
}

.post-view__item {
  @extend .post-view__title;
  font-size: 18px;
  span {
    color: #fff;
    margin-left: 10px;
  }
}

.link {
  @include trans(color, 0.3s);
  &:hover {
    color: #fff;
  }
}
</style>
