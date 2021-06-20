<template>
  <div>
    <body>
      <router-view name="navbar"></router-view>
      <router-view></router-view>
    </body>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
body {
  background-color: #f2f2f2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

* {
  /* background-color: rgb(252, 250, 247); */
  font-family: Roboto, sans-serif;
}
</style>
