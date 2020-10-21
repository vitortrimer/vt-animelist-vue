<template>
  <div class="page-content">
    <div v-if="!this.$store.state.detailed.title" class="loading">
      <Loader />
    </div>
    <div class="detail" v-else>
      <h1 class="detail--title">
        {{ this.$store.state.detailed.title }}
        <span class="detail--title--type">{{
          this.$store.state.detailed.type
        }}</span>
      </h1>
      <div class="detail--main-content">
        <img
          :src="this.$store.state.detailed.image_url"
          :alt="this.$store.state.detailed.title + ' poster'"
          class="media-poster"
        />
        <div class="detail--main-content--synopsis">
          <div>
            <strong>Synopsis:</strong>
            <span class="detail--main-content--synopsis--content">{{
              this.$store.state.detailed.synopsis
            }}</span>
          </div>
          <div class="detail--main-content--genres">
            <strong>Genres: </strong>
            <span
              v-for="genre in this.$store.state.detailed.genres"
              :key="genre.name"
              class="detail--main-content--genre"
            >
              {{ genre.name }},
            </span>
          </div>
        </div>
      </div>
      <div class="detail--secondary-content">
        <div
          v-if="this.$route.params.type === 'anime'"
          class="trailer-container"
        >
          <div class="trailer--title">trailer:</div>
          <div
            class="trailer--content"
            style="overflow:hidden;position: relative;"
          >
            <iframe
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              height="443"
              type="text/html"
              :src="this.$store.state.detailed.trailer_url"
            ></iframe>
          </div>
        </div>
        <!-- <div>
          <div v-if="this.$route.params.type === 'anime'">
            <strong>Release/end date:</strong>
            {{ this.$store.state.detailed.aired.string }}
          </div>
          <div>
            <strong>Status:</strong>
            {{ this.$store.state.detailed.airing ? "Airing" : "Released" }}
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/common/loader";
export default {
  name: "Details",
  components: {
    Loader
  },
  data() {
    return {
      type: ""
    };
  },
  mounted() {
    this.$store.dispatch("getDetailed", {
      type: this.$route.params.type,
      id: this.$route.params.id
    });
  },
  destroyed: function() {
    this.$store.dispatch("clearDetailed");
  }
};
</script>

<style>
.page-content {
  padding: 26px 16px;
  margin: 0 auto;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
}

.detail--main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
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

.detail--main-content--synopsis {
  display: inline-block;
  max-width: 500px;
  margin-left: 16px;
}

.detail--main-content--synopsis--content {
  display: inline-block;
}

.detail--main-content--genres {
  margin-top: 4px;
}

.detail--main-content--genre {
  margin-left: 6px;
}

.detail--title {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .page-content {
    width: 70%;
  }
  .details--container {
  }
  .detail--title {
    justify-content: start;
  }

  .detail--main-content {
    flex-direction: row;
    align-items: initial;
    margin-top: 0;
  }
}

.detail--title--type {
  font-size: 15px;
  font-weight: bold;
  margin-left: 14px;
  color: #9e9e9e;
  cursor: default;
  transition: 300ms ease-in-out;
}

.detail--title--type:hover {
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.5);
}

.newst {
  position: relative;
  text-align: right;
  height: 420px;
  width: 520px;
}
#gmap_canvas img {
  max-width: none !important;
  background: none !important;
}

.trailer--content {
  width: 100%;
}

.trailer-container {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
}

.trailer--title {
  font-weight: bold;
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

iframe {
  width: 100%;
}
</style>
