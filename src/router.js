import { createRouter, createWebHistory } from "vue-router";

import Home from "./screens/Home.vue";
import ProductDetail from "./screens/ProductDetail.vue";
//import Layout from "./components/layouts/Layout.vue";
import NavBar from "./components/layouts/navbar/NavBar";
import Order from "./components/user/Order";
import Setting from "./components/user/Setting";
import Footer from "./components/layouts/Footer";
import CartScreen from "./screens/CartScreen.vue";
import UserScreen from "./screens/UserScreen.vue";
import Shippping from "./screens/ShippingScreen.vue";
import Payment from "./screens/PaymentScreen.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: Home,
      components: {
        default: Home,
        navbar: NavBar,
        footer: Footer,
      },
    },
/*  user route */
    {
      name: "userScreen",
      path: "/profil",
      component: UserScreen ,
      children:[ 
        {
        path :"order",
        component: Order
      },
      {
        path: "settings",
        component: Setting
      }
    ]
    },

    {
      name: "ProductDetail",
      path: "/product/:prodId",
      components: {
        default: ProductDetail,
        navbar: NavBar,
        footer: Footer,
      },
      props: true,
    },
    {
      name: "CartScreen",
      path: "/cart/:id?",
      components: {
        default: CartScreen,
        navbar: NavBar,
        footer: Footer,
      },
    },
     {
      name: "shipping",
      path: "/shipping",
      components: {
        default: Shippping,
        navbar: NavBar,
        footer: Footer,
      },
    },
    {
      name: "payment",
      path: "/payment",
      components: {
        default: Payment,
        navbar: NavBar,
        footer: Footer,
      },
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
