import { createStore } from "vuex";
import axios from 'axios'; 

let cartItems = window.localStorage.getItem('cartItems');
let cartCount = window.localStorage.getItem('cartCount');


const store = createStore({
    state: {
            products: [],
            product: {},
            cartItems:  cartItems ? JSON.parse(cartItems) :  [],
            cartCount: cartCount ? parseInt(cartCount) : 0,
       
    },
    actions: {
        loadProducts({commit}){
            axios
                .get('http://127.0.0.1:8000/api/products')
                .then(response => {
                    /* console.log(data.data)*/
                    let products = response.data
                    commit('SET_PRODUCTS', products)
                })
                .catch(error => {
                    console.log(error)
                })
        },

        loadProduct({commit}, id){
            axios
                .get('http://127.0.0.1:8000/api/products/'+ id)
                .then( response => {
                    let product = response.data
                    //console.log(product)
                    commit('SET_PRODUCT', product)
                })
                .catch(error => {
                    console.log(error)
                })
        },

        LoadCart({commit}, id){
            axios
                .get('http://127.0.0.1:8000/api/product/'+ id)
                .then( response=> {
                    let item = response.data
                    commit('SET_CART_ITEM', item)
                })
                .catch(error => {
                    console.log(error)
                })
        }
         /* loadProduct(state){
            (productId) =>{
                 state.loadProducts.find((product) => {
                     product._id === productId
                    
                })
                console.log(productId)
            }
        } */
       
    },
    getters: {

        loadProductG(state){
            return state.product;
        },

        loadCartItem(state){
            //get to local localStorage.getItem('YourItem')
            // delete to local storage localStorage.removeItem('YourItem')
            return state.cartItems
        }
    
        
    },
    mutations:{
        SET_PRODUCTS ( state, products){
            state.products = products
        },

        SET_PRODUCT ( state, product){
            state.product = product
        },

        
        addToCart(state, item) {
            
            
            let found = state.cartItems.find(p => p._id == item._id);
            if (found){ 
                 found.quantity ++;
                //found.totalPrice = found.quantity * found.price
                console.log("product exist");
            }else{
                state.cartItems.push(item);
                state.cartCount++
                localStorage.setItem('cartCount', JSON.stringify(state.cartCount))
            }
            this.commit('savedata');
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
            this.commit('savedata');

        }
    }
    
});


export default store;