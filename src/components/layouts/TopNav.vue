<template>
  <nav class="navbar navbar-dark ">
    <div class="container-fluid">
      <div class="logo">
        <a class="navbar-brand" href="#">Afri-Zone</a>
      </div>
      <div class="search-group">
        <input
          class="search_input"
          type="text"
          name=""
          placeholder="Search..."
        />
        <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
      </div>
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
                checkUser ?'  '+$store.state.userStore.userInfo.username : " Account"
              }}
            </span>
          </button>
          <ul class="dropdown-menus">
            <div v-if="!checkUser" class="btns">
              <button @click="loginModal" class="btn btn-primary">Login</button>
              <button class="btn btn-primary">Sign-up</button>
            </div>

            <li><a href="#">other menu</a></li>
            <li><a href="#">other menu</a></li>
            <li><a href="#">other menu</a></li>
            <li><a href="#">other menu</a></li>
            <li v-if="checkUser"><a @click.prevent="logout" href="" >Se deconnecter</a></li>
          </ul>
        </div>
      </div>
    </div>
    <base-modal @close="hideModal" v-if="loginModalIsVisible"> </base-modal>
  </nav>
</template>

<script>
import BaseModal from "../BaseModal";

export default {
  components: {
    BaseModal,
  },

  data() {
    return {
      loginModalIsVisible: false,
      user: "account",
    };
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

  /* watch:  {

    user(value) {
      if(value != ''){
        alert('it s ok ')
      }
    }
  }, */

  methods: {
    loginModal() {
      this.loginModalIsVisible = true;
    },
    hideModal() {
      this.loginModalIsVisible = false;
    },

    logout(){
      this.$store.dispatch('userStore/logout')
    }
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

.search_input {
  background: hsla(0, 0%, 100%, 0.27);
  border: 0;
  padding: 0 1rem;
  width: 450px;
  height: 35px;
  border-radius: 5px;
  color: #fff;
  outline: none;
}

.search_icon {
  width: 10px;
  float: right;
  position: relative;
  bottom: -4px;
  right: 26px;
  border-radius: 50%;
  color: white;
  text-decoration: none;
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

.searchbar:hover > .search_input {
  padding: 0 10px;
  caret-color: white;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_icon {
  color: #e74c3c;
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
  margin: 12px;
}
</style>
