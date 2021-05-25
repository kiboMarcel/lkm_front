<template>
  <header>
    <div>
      <TopNav />
    </div>
    <nav class="navbar navbar-expand-lg costum ">
      <NavItem />
    </nav>
  </header>
</template>

<script>
import NavItem from "./NavItems.vue";

import TopNav from "./TopNav.vue";

export default {
  components: {
    NavItem: NavItem,
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

</style>
