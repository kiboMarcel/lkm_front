import axios from "axios";
import apiUrl from "../../variables";

let cartItems = window.localStorage.getItem("cartItems");
let cartCount = window.localStorage.getItem("cartCount");
let shippingAddress = window.localStorage.getItem("Shipping_address");
let paymentMethod = window.localStorage.getItem("Payment_Method");

const cartStore = {
  namespaced: true,
  state: {
    cartItems: cartItems ? JSON.parse(cartItems) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
    shippingAddress: shippingAddress ? JSON.parse(shippingAddress) : {},
    paymentMethod: paymentMethod ? JSON.parse(paymentMethod) : "",
  },

  actions: {
    LoadCart({ commit }, id) {
      axios
        .get(apiUrl + "/api/product/" + id)
        .then((response) => {
          let item = response.data;
          commit("SET_CART_ITEM", item);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    saveShippingAddress({ commit }, data) {
      commit("SET_SHIPPING_ADDRRESS", data);
      localStorage.setItem("Shipping_address", JSON.stringify(data));
    },

    savePaymentMethod({ commit }, data) {
      commit("SET_PAYMENT_METHOD", data);
      localStorage.setItem("Payment_Method", JSON.stringify(data));
    },
  },

  getters: {
    loadCartItem(state) {
      //get to local localStorage.getItem('YourItem')
      // delete to local storage localStorage.removeItem('YourItem')
      return state.cartItems;
    },
  },

  mutations: {
    addToCart(state, item) {
      let found = state.cartItems.find((p) => p._id == item._id);
      if (found) {
        found.quantity++;
        //found.totalPrice = found.quantity * found.price
        //console.log("product exist");
      } else {
        state.cartItems.push(item);
        state.cartCount++;
        localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
      }
      this.commit("cartStore/savedata");
      //state.cartCount++
    },

    savedata(state) {
      //state.cartItems = JSON.parse(cartitem)
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    SET_SHIPPING_ADDRRESS(state, address) {
      state.shippingAddress = address;
    },
    SET_PAYMENT_METHOD(state, payment) {
      state.paymentMethod = payment;
    },

    removeCartItem(state, item) {
      /* let index = state.cartItems.indexOf(item);
      state.cartItems.splice(index, 1);
      state.cartCount--; */
      /* localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
      this.commit("cartStore/savedata"); */
      let lists = state.cartItems.filter((x) => {
        return x._id != item;
      });
      state.cartItems = lists
      this.commit("cartStore/savedata");
      state.cartCount--;
      localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
    },
  },
};

export default cartStore;
