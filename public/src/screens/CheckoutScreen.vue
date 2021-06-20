<template>
  <div>
    <div class="header col-md-6 col-12">
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">
          <router-link to="/address"> Address</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/payment"> Payement</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/confirmation"> Confirmation</router-link>
        </li>
      </ul>
    </div>

    <div class=" data col-md-8 col-12">
      <div class="body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: this.$route.name,
      style: "is-active",
    };
  },
  methods: {},
};
</script>

<style scoped>


.header {
  margin: 2rem auto;
  text-align: center;
}

.header li {
  width: 100%;
  padding: 0px;
}

.header li a {
  text-decoration: none;
  color: gray;
  display: block;
  padding: 12px;
}

.container {
  width: 50%;
}

.body {
  display: flex;
  flex-direction: column;
}

.data{
  margin: auto;
}

/* .is-active{
  border-bottom: 2px solid purple;
} */

a.router-link-active {
  background-color: gainsboro;
  border-bottom: 2px solid purple;
}
</style>
