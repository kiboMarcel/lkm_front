<template>
  <div class="main-nav">
    <nav class="navbar navbar-dark custom">
      <div class="container-fluid">
        <div class="logo">
          <a :href="'/'"><img src="../../../assets/logo.png" alt="" /></a>
          <a  :href="'/'"><h4>Afri-Zone</h4></a>
          
        </div>
        <div class="search-group">
          <input type="text" placeholder="search" />
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
        <div class="group-icon">
          <ul>
            <div class="search-icon-mob">
              <li>
                <a
                  data-toggle="collapse"
                  href="#collapse"
                  aria-expanded="true"
                  aria-controls="collapse"
                  ><i class="fas fa-search"></i
                ></a>
              </li>
            </div>

            <li>
              <a type="button"  ><i class="far fa-user-circle"></i></a>
            </li>
            
              <li>
                <a href="/cart"><i class="fab fa-opencart"></i>
                <span class="countstore">{{ $store.state.cartStore.cartCount }}</span>
                </a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="collapse navbar-collapse search-mobile" id="collapse">
      <input type="text" placeholder="search" />
      <button class="btn" type="submit">Chercher</button>
    </div>
  </div>
</template>

<script>
export default {
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
        //if (this.$store.state.userStore.userInfo.length != 0) {
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

    logout() {
      this.$store.dispatch("userStore/logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.main-nav {
  position: sticky;
}

.custom {
  max-height: 90px;
  color: white;
  background-color: #212529;
}

.container-fluid {
  display: flex;
  justify-content: space-between;
}

a{
  text-decoration: none;
}

.logo {
  display: flex;
  justify-content: left;
  align-items: center;
  max-width: 200px;
}
.logo img {
  width: 45px;
  height: 45px;
}
h4 {
  color: white;
}

@media (max-width: 990px) {
  .logo {
    max-width: 150px;
  }

  .logo h4 {
    display: none;
  }
}
/* search group */

.search-group {
  display: flex; 
  background-color: hsla(0, 7%, 13%, 0.27);
}

.search-group input {
  background: hsla(0, 7%, 13%, 0.27);
  border: 0;
  padding: 0 1rem;
  width: 450px;
  height: 35px;
  border-radius: 5px;
  color: #fff;
  outline: none;
}

.search-group i {
  color:#fff;
}

.search_icon {
  width: 0;
  float: right;
  position: relative;
  bottom: -6px;
  right: 26px;
  border-radius: 50%;
  color: white;
  text-decoration: none;
}

@media (max-width: 930px) {
  .search-group {
    display: none;
  }
}
/* group icon */
.group-icon {
  display: flex;
  align-items: center;
}

.group-icon ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

.group-icon ul li {
  display: inline-block;
  margin: 12px;
}

.search-icon-mob {
  display: none;
}

.group-icon i {
  color: white;
  font-size: 1.5rem;
}

.countstore{
   background-color: rgb(221, 41, 80);
  min-width: 30px;
  height: 30px;
  color: #fff;
  padding:5px;
  border-radius: 10px;
  line-height: 22px;
  text-align: center;
  position: relative;
  top: -13px;
  left: -1px;
}
/* mobile search bar */
@media (max-width: 930px) {
  .search-icon-mob {
    display: inline;
  }
}

.search-mobile {
  background-color: #212529;
  flex-direction: column;
  padding: 0  40px 0 40px;
}
.search-mobile input {
  background: hsla(0, 0%, 100%, 0.27);
  border: 0;
  padding: 0 1rem;
  width: 100%;
  margin: 12px 0px;
  height: 35px;
  border-radius: 5px;
  color: #fff;
  outline: none;
}
.btn {
  color: white;
  background-color: rgb(57, 25, 80);
  width: 100%;
  margin: 12px 0px;
}

</style>
