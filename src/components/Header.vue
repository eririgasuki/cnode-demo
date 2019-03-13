<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="container">
        <a href="/">
          <img src="../assets/cnodejs_light.svg" alt>
        </a>
        <ul>
          <li>
            <a href>首页</a>
          </li>
          <li>
            <a href>新手入门</a>
          </li>
          <li>
            <a href>API</a>
          </li>
          <li>
            <a href>关于</a>
          </li>
          <li>
            <a href>注册</a>
          </li>
          <li>
            <a href>登录</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Header'
};
</script>

<style scoped>
.navbar {
  background-color: #444444;
  width: 100%;
  height: 50px;
  font-size: 13px;
}
.navbar-inner {
  width: 90%;
  margin: auto;
  padding: 5px;
  height: 40px;
}
.container {
  width: 100%;
  height: 40px;
  min-width: 960px;
  margin: 0 auto;
  max-width: 1400px;
}
.container > a {
  float: left;
  display: block;
  width: 120px;
  padding: 3px 20px;
  margin-left: -20px;
  height: 34px;
  line-height: 34px;
}
img {
  max-width: 120px;
}
ul {
  list-style: none;
  display: block;
  float: right;
  line-height: 20px;
}
li {
  float: left;
  padding: 10px 15px;
  line-height: 20px;
}
li:nth-child(3) {
  font-family: Tahoma;
}
a {
  color: #cccccc;
  text-decoration: none;
}
</style>

