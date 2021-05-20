import Vuex from "vuex";
import productStore from  './productStore'
import cartStore from './cartStore';
import userStore from './userStore';



const store = new Vuex.Store({
    
        modules:{
            productStore,
            cartStore,
            userStore,
        }
    
})



export default store;