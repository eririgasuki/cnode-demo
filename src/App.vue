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
    Header,
  }
};
</script>

<style>
.main {
  width: 80%;
  margin: 0 auto;
}
</style>
