import axios from 'axios';
import apiUrl from '../../variables';


const productStore = {
    namespaced: true,
    state: {
        products: [],
        product: {},
        productCategory: [],

    },
    actions: {
        loadProducts({ commit }) {
            axios
                .get(apiUrl + `/api/products`)
                .then(response => {
                    /* console.log(data.data)*/
                    let products = response.data
                    commit('SET_PRODUCTS', products)
                })
                .catch(error => {
                    console.log(error)
                })
        },

        loadProductCategory({commit}, category) {
            axios
                .get(apiUrl + '/api/products/productCategory/'+ category)
                .then(response => {
                   console.log(response.data)
                   let productCategory = response.data
                   commit('SET_PRODUCT_CATEGORY',productCategory)
                })
                .catch(error => {
                    console.log(error.response)
                })
        },
       /*  loadProductCategory(context,) {
            let nom = "marcel"
            axios
                .get(apiUrl + '/api/products/productCategory/',
                    {
                        headers: {
                            accept: "application/json",
                        },
                        data:{ category: nom },
                    },)
                .then(response => {
                    console.log(response.data)
                    console.log(context)
                })
                .catch(error => {
                    console.log(error.response)
                })
        }, */

        loadProduct({ commit }, id) {
            axios
                .get(apiUrl + '/api/products/' + id)
                .then(response => {
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

        loadProductG(state) {
            return state.product;
        },


    },

    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        },

        SET_PRODUCT(state, product) {
            state.product = product
        },

        SET_PRODUCT_CATEGORY(state, productCategory){
            state.productCategory = productCategory
        }

    }

}


export default productStore;