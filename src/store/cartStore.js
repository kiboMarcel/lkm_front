import axios from 'axios';
import apiUrl from '../variables';

let cartItems = window.localStorage.getItem('cartItems');
let cartCount = window.localStorage.getItem('cartCount');


const cartStore= {
    namespaced: true,
    state: {
       cartItems:  cartItems ? JSON.parse(cartItems) :  [],
       cartCount: cartCount ? parseInt(cartCount) : 0,
       count:1,
    },


actions :{
   
   LoadCart({commit}, id){
       axios
           .get(apiUrl+'/api/product/'+ id)
           .then( response=> {
               let item = response.data
               commit('SET_CART_ITEM', item)
           })
           .catch(error => {
               console.log(error)
           })
   }
    
  
},

getters : {

   loadCartItem(state){
       //get to local localStorage.getItem('YourItem')
       // delete to local storage localStorage.removeItem('YourItem')
       return state.cartItems
   }
   
},

mutations : {
   
   addToCart(state, item) {
       
       let found = state.cartItems.find(p => p._id == item._id);
       if (found){ 
            found.quantity ++;
           //found.totalPrice = found.quantity * found.price
           //console.log("product exist");
       }else{
           state.cartItems.push(item);
           state.cartCount++
           localStorage.setItem('cartCount', JSON.stringify(state.cartCount))
       }
       this.commit('cartStore/savedata');
       //state.cartCount++
       
   },

   savedata(state){
       //state.cartItems = JSON.parse(cartitem)
       localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
   },

   removeCartItem(state, item){
       let index = state.cartItems.indexOf(item)
       state.cartItems.splice(index, 1)
       state.cartCount--
       localStorage.setItem('cartCount', JSON.stringify(state.cartCount))
       this.commit('cartStore/savedata');

   }
},

}

 
  


export default cartStore;
