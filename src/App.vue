<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/common/header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: #111;
  color: #ececec;
}

input,
button,
select {
  font-family: "Roboto", sans-serif;
}

button {
  -webkit-user-select: none;
  -webkit-user-drag: none;
}

</style>
