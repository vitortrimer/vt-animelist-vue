<template>
  <div class="card">
    <img class="card-image" :src="anime.image_url" :alt="anime.title" />
  </div>
</template>

<script>
export default {
  name: "AnimeCard",
  props: ["anime"],
};
</script>

<style scoped>
.card {
  margin-left: 24px;
  position: relative;
  width: 200px;
  height: 300px;
  transition: 300ms ease-in-out;
}

.card:hover {
  box-shadow: 0 0 4px rgba(253, 147, 48, 1);
}
.card-image {
  width: 200px;
  height: 300px;
  object-fit: cover;
}
</style>
