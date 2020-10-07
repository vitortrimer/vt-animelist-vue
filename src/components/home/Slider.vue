<template>
  <div class="slider">
    <div v-for="item in items" :key="item.title">
      <AnimeCard :anime="item" />
    </div>
  </div>
</template>

<script>
import AnimeCard from "./AnimeCard";
export default {
  name: "Slider",
  components: {
    AnimeCard,
  },
  props: ["items"],
};
</script>

<style scoped>
.slider {
  display: flex;
  overflow: hidden;
  padding-top: 16px;
  padding-bottom: 32px;
}
</style>
