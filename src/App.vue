<template>
  <body>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <the-footer></the-footer>
  </body>
</template>

<script>
import NavBar from "./components/layouts/NavBar";
import TheFooter from "./components/layouts/Footer";

export default {
  components: {
    NavBar,
    TheFooter,
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
