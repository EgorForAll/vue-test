<script lang="ts">
export default {
  name: "Main",
};
</script>

<template>
  <div class="main p-2">
    <h1 class="main__title">Главная страница</h1>
    <nav class="main__nav mt-3">
      <RouterLink class="link" :to="{ name: 'posts' }"
        >Список постов</RouterLink
      >
    </nav>
  </div>
</template>

<style lang="scss">
@import "../scss/main.scss";
.main__title,
.link {
  color: $color;
}

.link {
  font-size: 18px;
  @include trans(color, 0.3s);
  &:hover {
    color: #fff;
  }
}
</style>
