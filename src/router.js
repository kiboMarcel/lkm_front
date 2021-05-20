import { createRouter, createWebHistory } from "vue-router";


import Home from "./screens/Home.vue";
import ProductDetail from "./screens/ProductDetail.vue";
import CartScreen from "./screens/CartScreen.vue";
import UserProfil from "./screens/UserProfil.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: Home },
      {
        name: "userProfil",
        path: "/profil",
        components: {
          default: UserProfil,
        }
      },
      
      {
        name: "ProductDetail",
        path: "/product/:prodId",
        component: ProductDetail,
        props: true
      },
      {
        name: "CartScreen",
        path: "/cart/:id?",
        component: CartScreen,
      },
     
    ],
    scrollBehavior(to , from, savedPosition){
      if(savedPosition){
        return savedPosition;
      }
      return {left:0, top:0}
    }
  });
  

  export default router;