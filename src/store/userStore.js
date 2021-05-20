import axios from "axios";

let userInfo = window.localStorage.getItem("userInfo");

const userStore = {
  namespaced: true,
  state: {
    message: "lol",
    status: "",
    userInfo: userInfo ? JSON.parse(userInfo) : {},
    c: 0,
  },

  actions: {
    async login({ commit }, userinfo) {
      await axios
        .post("http://127.0.0.1:8000/api/users/login/", {
          username: userinfo.username,
          password: userinfo.password,
        })
        .then((response) => {
          //console.log(response.data);

          let userInfo = response.data;
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          commit("auth_success", userInfo);

          
        })
        .catch((err) => {
          let message = err.response.data.detail;
          commit("auth_error", message);
          localStorage.removeItem("token");
          //console.log(message);
        });
    },

    logout({ commit }) {
      commit("logout_request");
      localStorage.removeItem("userInfo");
    },


    async register({ commit }, userinfo) {
      await axios
        .post("http://127.0.0.1:8000/api/users/register/", {
          email: userinfo.email,
          name: userinfo.name,
          password: userinfo.password,
        })
        .then((response) => {
          console.log(response.data);

          let userInfo = response.data;
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          commit("auth_success", userInfo);

          
        })
        .catch((err) => {
          let message = err.response.data.detail;
          commit("auth_error", message);
          localStorage.removeItem("token");
          //console.log(message);
        });
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
    authStatus: (state) => state.status,
  },

  mutations: {
    auth_request(state) {
      state.status = "loading";
    },

    auth_success(state, user) {
      state.userInfo = user;
      state.status = "success";
    },
    auth_error(state, message) {
      state.message = message;
      state.status = "error";
    },

    logout_request(state) {
      state.status = "";
      state.userInfo = "";
    },
  },
};

export default userStore;
