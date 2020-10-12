<template>
  <div class="home">
    <div v-if="this.$store.state.topAiringAnimes.length === 0" class="loading">
      <Loader />
    </div>
    <div v-else>
      <div  class="featured">
        <div class="featured--vertical">
          <div class="featured--horizontal">
            <div class="featured--content">
              <div class="featured--content--title">
                Kimetsu no Yayba
              </div>
              <span class="featured--content--synopsis">
                Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night. When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.
              </span>
              <div class="featured--content--action">
                <router-link :to="'/details/anime/40456'" class="featured--content--action--button">
                  Details
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home--sliders">
        <div class="home--sliders--item">
          <Slider :title="'Airing Animes'" mediaType="anime" :items="this.$store.state.topAiringAnimes" />
          <Slider :title="'Today Releases'" mediaType="anime" :items="this.$store.state.todayAnimes" />
          <Slider :title="'Top upcoming'" mediaType="anime" :items="this.$store.state.topAnimes" />
          <Slider :title="'top mangas'" mediaType="manga" :items="this.$store.state.topMangas" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/home/Slider";
import Loader from '@/components/common/loader';

export default {
  name: "Home",
  components: {
    Slider,
    Loader
  },
  mounted() {
    this.$store.dispatch("getTopAnimeList");
    this.$store.dispatch("getTopAiringAnimes");
    this.$store.dispatch("getTopMangas");
    this.$store.dispatch("getTodayAnimes", this.getCurrentDay());
  },
  methods: {
    getCurrentDay: function() {
      const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      const now = new Date();
      return days[now.getDay()]
    }
  }
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

@media (max-width: 1023px) {
  .featured--content {
    max-width: 40vw;
  }
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
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  text-align: center;
  text-decoration: none;
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
