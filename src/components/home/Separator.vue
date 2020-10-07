<template>
  <div class="separator">
    <h2 class="separator--title">{{ title }}</h2>
    <div class="flexed-line"></div>
  </div>
</template>

<script>
export default {
  name: "Separator",
  props: ["title"],
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
}
.flexed-line {
  flex: 1;
  border-bottom: 1px solid #9e9e9e;
  margin-left: 12px;
  border-radius: 8px;
}
</style>
