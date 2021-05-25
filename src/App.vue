<template>
  <body> 
    <router-view name="navbar"></router-view> 
    <router-view ></router-view>
    <router-view name="footer" ></router-view>
  </body>
</template>

<script>

export default {
  components: {
  },
};
</script>

<style>

body{
  background-color: #F2F2F2;
}

* {
  /* background-color: rgb(252, 250, 247); */
  font-family: Roboto,sans-serif;
}

</style>
