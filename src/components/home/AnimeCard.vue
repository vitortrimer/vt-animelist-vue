<template>
  <div class="card">
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
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  margin-left: 30px;
  margin-right: 6px;
}

.card:hover .card-image {
  transform: scale(1.1);
  filter: blur(8px);
  -webkit-filter: blur(2px);
}

.card:hover .card--content {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5);
  transform: scale(1.1);
}

.card-image {
  width: 200px;
  height: 300px;
  object-fit: cover;
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
}

.card--content--title {
  text-align: center;
  font-weight: bold;
}

.card--content--details {
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
}

.card--content--footer {
  text-align: center;
  font-weight: bold;
}
</style>
