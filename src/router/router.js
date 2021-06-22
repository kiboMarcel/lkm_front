import { createRouter, createWebHistory } from "vue-router";

import Home from "../screens/Home.vue";
import ProductDetail from "../screens/ProductDetail.vue";
//import Layout from "../components/layouts/Layout.vue";
import NavBar from "../components/layouts/navbar/NavBar";
import Order from "../components/user/Order";
import Setting from "../components/user/Setting";
import Footer from "../components/layouts/Footer";
import CartScreen from "../screens/CartScreen.vue";
import UserScreen from "../screens/UserScreen.vue";
import Checkout from "../screens/CheckoutScreen.vue";
import Address from "../components/checkout/Address.vue";
import Payment from "../components/checkout/Payment.vue";
import Confirmation from "../components/checkout/Confirmation.vue";
import OrderDetail from "../components/OrderDetail.vue";
import LoginScreen from "../screens/LoginScreen.vue";
import SignUpScreen from "../screens/SignUpScreen.vue";
import log from "../middleware/log";
import store from "../store/index";
import Pcard from "../components/Pcard";

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
        meta: {
          middleware: log,
        },
      },
    },
    /*  user route */
    {
      name: "userScreen",
      path: "/profil",
      component: UserScreen,
      children: [
        {
          path: "order",
          component: Order,
        },
        {
          path: "settings",
          component: Setting,
        },
      ],

      meta: {
        requiresAuth: true,
      },
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
      name: "login",
      path: "/login",
      components: {
        default: LoginScreen,
        navbar: NavBar,
        footer: Footer,
      },
    },


    {
      name: "sign-up",
      path: "/sign-up",
      components: {
        default: SignUpScreen,
        navbar: NavBar,
        footer: Footer,
      },
    },


    {
      name: "pcard",
      path: "/pcard",
      component: Pcard
    },
    
      
    {
      name: "shipping",
      path: "/shipping",
      redirect: "/address",
      components: {
        default: Checkout,
        navbar: NavBar,
        footer: Footer,
      },
      children: [
        {
          name: "address",
          path: "/address",
          component: Address,
        },
        {
          name: "payment",
          path: "/payment",
          component: Payment,
          meta: {requireShippingAdd: true}
        },
        {
          name: "confirmation",
          path: "/confirmation",
          component: Confirmation,
          meta : {requirePaymentMethod: true}
        },
      ],
      meta: {
        requiresAuth: true,
      },
    },

    {
      name: "OrderDetail",
      path: "/order/:orderId",
      components: {
        default: OrderDetail,
        navbar: NavBar,
        footer: Footer,
      },
      props: true,
    },

  ],
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function(to, _, next) {
  if (
    to.meta.requiresAuth &&
    Object.keys(store.state.userStore.userInfo).length == 0
  ) {
    next("/login");
  } else if (
    to.meta.requireShippingAdd &&
    Object.keys(store.state.cartStore.shippingAddress).length == 0
  ) {
    next("address");
  }else if ( to.meta.requirePaymentMethod &&
    Object.keys(store.state.cartStore.shippingAddress).length == 0 &&
    store.state.cartStore.paymentMethod.length === 0){
      next("payment");
  } else {
    next();
  }
});

export default router;
