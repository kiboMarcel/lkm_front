<template>
  <div>
    <nav class="navbar navbar-dark ">
      <div class="container-fluid">
        <div class="logo">
          <a class="navbar-brand" href="#">Afri-Zone</a>
        </div>
        <div class="search-group"></div>
        <div class="option">
          <div class="cart">
            <i class="fas fa-shopping-cart"></i>
            <span>{{ $store.state.cartStore.cartCount }}</span>
          </div>
          <div class="login dropdown">
            <button class="btn  dropdown-toggle" type="button">
              <i class="fas fa-user"></i>
              <span class="caret">
                {{
                  checkUser
                    ? "  " + $store.state.userStore.userInfo.username
                    : " Account"
                }}
              </span>
            </button>
            <ul class="dropdown-menus">
              <div v-if="!checkUser" class="btns">
                <button @click="loginModal" class="btn btn-primary">
                  Login
                </button>
                <button class="btn btn-primary">Sign-up</button>
              </div>

              <li><a href="#">other menu</a></li>
              <li v-if="checkUser">
                <a @click.prevent="logout" href="">Se deconnecter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="flexcontainer">
      <div class="option">
        <div class="card options">
          <div class="cardHeader">
            <h4>Option</h4>
          </div>
          <div class="cardContent">
            <ul>
              <li>
                <router-link to="/profil/order/">Order</router-link>
              </li>
              <li>Cart</li>
              <li>And</li>
               <li>
                <router-link to="/profil/settings/">Settings</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card actions">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },

  mounted() {},

  computed: {
    checkUser() {
      let confirm;
      if (Object.keys(this.$store.state.userStore.userInfo).length != 0) {
        confirm = true;
      } else {
        confirm = false;
      }
      return confirm;
    },
  },

  methods: {
    loginModal() {
      this.loginModalIsVisible = true;
    },
    hideModal() {
      this.loginModalIsVisible = false;
    },

    logout() {
      this.$store.dispatch("userStore/logout");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #3761af;
  color: #fff;
}

.container-fluid {
  display: flex;
}

.option {
  margin-right: 25px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.login {
  margin: 0 1.2rem;
}

.cart i {
  padding: 0.5rem 0;
}

.cart span {
  display: inline-block;
  background-color: rgb(221, 41, 80);
  min-width: 20px;
  height: 20px;
  color: #fff;
  border-radius: 10px;
  line-height: 22px;
  text-align: center;
  position: relative;
  top: -13px;
  left: -1px;
}

@media screen and (max-width: 960px) {
  .searchbar {
    display: none;
  }
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menus {
  display: none;
  position: absolute;
  left: -100px;
  padding: 1px;
  background-color: #f1f1f1;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-menus {
  list-style: none;
}

.dropdown-menus li a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-menus li a:hover {
  background-color: rgb(224, 224, 224);
}

.dropdown:hover .dropdown-menus {
  display: block;
}

.btns button {
  margin: 10px;
}

.flexcontainer {
  display: flex;
  margin-top: 20px;
  justify-content: center;
}

.options {
  display: flex;
  min-width: 250px;
  justify-content: left; 
  height: 35vh;
}
.cardHeader {
  background-color: white;
  padding: 20px;
}

.cardContent ul {
  list-style: none;
}
.cardContent ul li {
  margin-bottom: 12px;
}
.cardContent ul li:hover {
  color: #3761af;
  cursor: pointer;
}
.actions{
  display: flex;
  width: 40rem;
  height: 50vh;
  padding: 30px;

}
</style>
