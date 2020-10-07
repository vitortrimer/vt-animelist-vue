<template>
  <div class="home">
    <div class="featured">
      <div class="featured--vertical">
        <div class="featured--horizontal">
          <div class="featured--content">
            <div class="featured--content--title">
              Kimetsu no Yayba
            </div>
            <div class="featured--content--synopsis">
              A family is attacked by demons and only two members survive -
              Tanjiro and his sister Nezuko, who is turning into a demon slowly.
              Tanjiro sets out to become a demon slayer to avenge his family and
              cure his sister.
            </div>
            <div class="featured--content--action">
              <button class="featured--content--action--button">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home--sliders">
      <div class="home--sliders--item">
        <Separator :title="'Top upcoming'" />
        <Slider :items="this.$store.state.topAnimes" />
      </div>
    </div>
  </div>
</template>

<script>
import Separator from "@/components/home/Separator";
import Slider from "@/components/home/Slider";
export default {
  name: "Home",
  components: {
    Separator,
    Slider,
  },
  mounted() {
    this.$store.dispatch("getTopAnimeList");
  },
};
</script>

<style>
.featured {
  height: calc(100vh - 60px);
  background-size: cover;
  background-position: center;
  background-image: url(https://pbs.twimg.com/media/EVP0f8iUwAIjf4w?format=jpg&name=4096x4096);
}
.featured--vertical {
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
}

.featured--horizontal {
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
}

@media (max-width: 767px) {
  .featured--horizontal {
    background: linear-gradient(to bottom, #111 5%, transparent 95%);
  }
}

.featured--content {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3vw;
  max-width: 30vw;
}

@media (max-width: 767px) {
  .featured--content {
    margin: 0;
    align-items: center;
    padding: 0 16px;
    max-width: unset;
  }
}

.featured--content--title {
  font-size: 32px;
  color: #ececec;
  font-weight: bold;
  margin-bottom: 12px;
  letter-spacing: 1.2px;
}

.featured--content--synopsis {
  font-size: 16px;
  margin-bottom: 24px;
}

.featured--content--action {
  display: flex;
  justify-content: center;
}

.featured--content--action--button {
  background: 0;
  outline: none;
  border: 2px solid #eee;
  padding: 12px;
  font-size: 18px;
  color: #eee;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 18px;
  width: 120px;
  cursor: pointer;
  transition: 300ms ease-in-out;
}

.featured--content--action--button:hover {
  transform: translateY(-3px);
}

.head-img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.home--sliders {
  margin-top: -70px;
  padding: 0 18px;
}
</style>
