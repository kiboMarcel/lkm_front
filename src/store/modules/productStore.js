import axios from 'axios';
import apiUrl from '../../variables';


const productStore = {
    namespaced: true,
    state : {
         products: [],
         product: {},
    
 },
  actions : {
     loadProducts({commit}){
         axios
             .get( apiUrl+`/api/products`)
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
             .get(apiUrl+'/api/products/'+ id)
             .then( response => {
                 let product = response.data
                 //console.log(product)
                 commit('SET_PRODUCT', product)
             })
             .catch(error => {
                 console.log(error)
             })
     },

    
    
    
 },
  getters: {

     loadProductG(state){
         return state.product;
     },

     
 },

  mutations : {
     SET_PRODUCTS ( state, products){
         state.products = products
     },

     SET_PRODUCT ( state, product){
         state.product = product
     },

 }

}

  
export default  productStore;