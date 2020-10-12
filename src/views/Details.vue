<template>
  <div class="page-content">
    <div v-if="!this.$store.state.detailed.title" class="loading">
      <Loader />
    </div>
    <div class="detail" v-else>
        <h1 class="detail--title">
          {{this.$store.state.detailed.title}} <span class="detail--title--type">{{this.$store.state.detailed.type}}</span>
        </h1>
        <div class="detail--main-content">
          <img :src="this.$store.state.detailed.image_url" :alt="this.$store.state.detailed.title + ' poster'" class="media-poster" />
          <div class="detail--main-content--synopsis">
            <div>
              <strong>Synopsis:</strong> <span>{{ this.$store.state.detailed.synopsis }}</span>
            </div>
            <div class="detail--main-content--genres">
              <strong>Genres: </strong> 
              <span v-for="genre in this.$store.state.detailed.genres" :key="genre.name" class="detail--main-content--genre">
                {{ genre.name }},
              </span>
            </div>
          </div>
        </div>
        <div class="detail--secondary-content">
          <div>
            <div><strong>Release/end date:</strong> {{ this.$store.state.detailed.aired.string}}</div>
            <div><strong>Status:</strong> {{ this.$store.state.detailed.airing ? "Airing" : "Released"}}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/common/loader';
export default {
  name: "Details",
  components: {
    Loader
  },
  mounted() {
    this.$store.dispatch("getDetailed", {type: this.$route.params.type, id: this.$route.params.id});
  },
  destroyed: function () {
    this.$store.dispatch("clearDetailed");
  },
};
</script>

<style>
.page-content {
  width: 70%;
  padding-top: 26px;
  margin: 0 auto;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
}

.detail--main-content {
  padding: 0 16px;
  margin-top: 12px;
}

.detail--secondary-content {
  padding: 0 16px;
  margin-top: 24px;
}

.media-poster {
  width: 280px;
  height: 400px;
  object-fit: cover;
  -webkit-user-drag: none;
}

.details--container {
  width: 70%;
}

.detail--main-content {
  display: flex;
}

.detail--main-content--synopsis {
  max-width: 500px;
  margin-left: 16px;
}

.detail--main-content--genres {
  margin-top: 4px;
}

.detail--main-content--genre {
  margin-left: 6px;
}

.detail--title {
  display: flex;
  align-items: center;
}

.detail--title--type {
  font-size: 15px;
  font-weight: bold;
  margin-left: 14px;
  color: #9E9E9E;
  cursor: default;
  transition: 300ms ease-in-out;
}

.detail--title--type:hover {
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.5);
}
</style>
