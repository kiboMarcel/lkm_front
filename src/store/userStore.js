import axios from "axios";
import apiUrl from "../variables";

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
        .post(apiUrl+"/api/users/login/", {
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
        .post(apiUrl+"/api/users/register/", {
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
          //localStorage.removeItem("token");
          //console.log(message);
        });
    },

    async update({getters}, values) {
      await axios
        .put(
          apiUrl+"/api/users/profile/update/",
          {
            name: values.username,
            email: values.email,
            password: values.password,
          },
          {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${getters.getUser.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          
        })
        .catch((err) => {
          //let message = err.response.data.detail;
          console.log(err);
        });
       //console.log(context, values)
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
    authStatus: (state) => state.status,
    getUser(state){
      return state.userInfo
   }
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
