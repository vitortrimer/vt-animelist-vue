<template>
  <div>
    <div class="separator">
      <h2 class="separator--title">{{ title }}</h2>
      <div class="flexed-line"></div>
      <div class="separator--actions">
        <button v-on:click="handleSlide('l')" class="sepparator--actions--button">
          <span class="material-icons">
            navigate_before
          </span>
        </button>
        <button v-on:click="handleSlide('r')" class="sepparator--actions--button">
          <span class="material-icons">
            navigate_next
          </span>
        </button>
      </div>
    </div>
    <div class="slider" :style="{'margin-left': '-' + offset + 'px'}">
      <div v-for="item in items" :key="item.title">
        <AnimeCard :anime="item" />
      </div>
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
  props: ["items", "title"],
  data: function() {
    return {
      offset: 0
    }
  },
  methods: {
    handleSlide: function(direction) {
      const cardsize = 212
      const width = window.innerWidth;
      const listSize = this.items.length;
      const canShow = Math.ceil(width/cardsize)
      const multiplier = this.getSizeMultiplier(width);
      const offsetMoveTo = (cardsize * multiplier);
      if(direction === "l")
        this.offset = this.offset - offsetMoveTo < 0 ? 0 : this.offset - offsetMoveTo;
      if(direction === "r") {
        this.offset = this.offset > ((listSize - canShow) * cardsize) ? 0 : this.offset + offsetMoveTo;
      }
    },
    getSizeMultiplier: function(width) {
      if(width <= 767)
        return 1;
      else if(width <= 1440)
        return 3;
      else
        return 5;
    }
  }
};
</script>

<style scoped>
.separator {
  display: flex;
  align-items: center;
}
.separator--title {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.2px;
  -webkit-user-select: none;
}
.flexed-line {
  flex: 1;
  border-bottom: 1px solid #9e9e9e;
  margin-left: 12px;
  border-radius: 8px;
}

.sepparator--actions--button {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  border: 2px solid #ededed;
  color: #ededed;
  transition: transform 300ms ease-in-out;
}

.sepparator--actions--button:hover {
  transform: translateY(-2px);  
}

.sepparator--actions--button:first-child {
  margin-left: 16px;
  margin-right: 16px;
}

.slider {
  display: flex;
  overflow-x: hidden;
  padding-top: 16px;
  padding-bottom: 32px;
  transition: 300ms ease-in-out;
}

.slider::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

@media (max-width: 600px) {
  .slider {
    overflow-x: scroll;
  }
  .separator--actions {
    display: none;
  }
}

</style>
