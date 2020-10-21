<template>
  <router-link :to="'/details/' + mediaType + '/' + anime.mal_id" class="card">
    <img class="card-image" :src="anime.image_url" :alt="anime.title" />
    <div class="card--content">
      <div class="card--content--title">
        {{ anime.title }}
      </div>
      <button class="card--content--details">
        DETAILS
      </button>
      <div class="card--content--footer">
        <div>{{ anime.type }}</div>
        <div>{{ anime.start_date }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "AnimeCard",
  props: ["anime", "mediaType"]
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  position: relative;
  width: 200px;
  height: 300px;
  transition: 300ms ease-in-out;
  cursor: pointer;
  border-radius: 8px;
  -webkit-user-drag: none;
  -webkit-user-select: none;

  color: inherit;
  text-decoration: none;
}

.card:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
}

.card:hover .card-image {
  transform: scale(1);
}

.card:hover .card--content {
  backdrop-filter: blur(2px);
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5);
  transform: scale(1);
}

.card-image {
  width: 200px;
  height: 300px;
  object-fit: cover;

  border-radius: 8px;

  transform: scale(0.9);
  transition: 300ms ease-in-out;
}

.card--content {
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: 300ms ease-in-out;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(0.9);
  border-radius: 8px;
}

.card--content--title {
  text-align: center;
  font-weight: bold;
}

.card--content--details {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
  background: none;
  border: none;
  outline: none;
  width: 120px;
  height: 40px;
  cursor: pointer;
  color: #e9e9e9;
  border: 2px solid #e9e9e9;
  border-radius: 15px;
  transition: transform 300ms ease-in-out;
  text-decoration: none;
}

.card--content--details:hover {
  transform: translateY(-3px);
}

.card--content--footer {
  text-align: center;
  font-weight: bold;
}
</style>
