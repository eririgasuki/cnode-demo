<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="SlideBar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 80%;
  margin: 0 auto;
}
</style>
