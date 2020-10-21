<template>
  <header class="header">
    <div class="menu-container">
      <router-link to="/" class="logo">
        <span class="logo-first">ANI</span>
        <span class="logo-second">MEDIA</span>
      </router-link>
      <div class="menu">
        <router-link to="/" class="menu-link">Home</router-link>
        <router-link to="/about" class="menu-link">About</router-link>
      </div>
    </div>
    <div class="searchbar">
      <input
        type="text"
        class="searchbar--input"
        placeholder="Search for animes..."
      />
      <span class="material-icons searchbar--icon">search</span>
    </div>
    <div class="actions">
      <div class="user-avatar"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.menu-container {
  display: flex;
  align-items: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 24px;
}

.menu {
  margin-left: 16px;
}

@media (max-width: 425px) {
  .menu {
    display: none;
  }
}

.menu-link {
  margin-left: 16px;
  text-decoration: none;
  color: #9e9e9e;
  transition: 300ms ease-in-out;
}

.menu-link:hover {
  color: #fd9330;
}

.logo {
  font-weight: bold;
  font-size: 32px;
  color: #ececec;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-user-select: none;
}

.logo-second {
  margin-left: -5px;
  color: #fd9330;
}

.searchbar {
  position: relative;
}

@media (max-width: 1023px) {
  .searchbar {
    display: none;
  }
}

.searchbar--input {
  border-radius: 25px;
  background: #272727;
  border: 2px solid transparent;
  outline: none;
  height: 42px;
  min-width: 520px;
  color: #9e9e9e;
  padding-left: 16px;
  padding-right: 42px;
  transition: 300ms ease-in-out;
}

@media (max-width: 1223px) {
  .searchbar--input {
    min-width: 300px;
  }
}

.searchbar--input:focus {
  border: 2px solid #fd9330;
  background: #111;
}

.searchbar--icon {
  position: absolute;
  top: 8px;
  right: 12px;
  color: #9e9e9e;
  -webkit-user-select: none;
}
</style>
