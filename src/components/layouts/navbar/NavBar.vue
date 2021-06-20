<template>
  <header>
    <div>
      <TopNav />
    </div>
  
  </header>
</template>

<script>

import TopNav from "./TopNav.vue";

export default {
  components: {
    TopNav: TopNav,
  },

  data() {
    return {
      msg: "Bonjour la team",
    };
  },
};
</script>

<style scoped>

header{
  background-color: #283593;
}

.costum{
  background-color: white;
}

@media screen and (max-width: 960px) {
  .costum {
    background-color: #283593;
  }
}
/* .navbar {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
} */

.st{
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 100;
}

</style>
