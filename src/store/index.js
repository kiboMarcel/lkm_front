import Vuex from "vuex";
import productStore from  './modules/productStore'
import cartStore from './modules/cartStore';
import userStore from './modules/userStore';
import orderStore from './modules/orderStore';



const store = new Vuex.Store({
    
        modules:{
            productStore,
            cartStore,
            userStore,
            orderStore,
        }
    
})



export default store;