import axios from 'axios'
import apiUrl from "../../variables";


const orderStore = {
    namespaced : true,

    state:{
      order : {},
      orderDetail: [],
      success: false,
    },

    actions:{

      /* simple({rootGetters}, data){
       console.log(rootGetters['userStore/getUser'].token)
       console.log(data)
      }, */

        async createOrder({rootGetters, commit}, data) {
            await axios
              .post(
                apiUrl+"/api/orders/add/",

               { orderItems : data.orderItems,
                paymentMethod :  data.paymentMethod,
                taxPrice : data.taxPrice,
                shippingPrice : data.shippingPrice,
                totalPrice : data.totalPrice,

                shippingAddress : data.shippingAddress,
              },
                {
                  headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${rootGetters['userStore/getUser'].token}`,
                  },
                }
              )
              .then((response) => {
                //console.log(rootGetters['userStore/getUser'].token)
                let order = response.data
                
                commit( 'SET_ORDER', order )
                commit( 'SUCCESS' )
                
                
              })
              .catch((err) => {
                //let message = err.response.data.detail;
                console.log(err);
              });
             //console.log(context, values)
          },


          async OrderDetail({rootGetters}, id){
            await axios
              .get(
                apiUrl+"/api/orders/"+id,

               
                {
                  headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${rootGetters['userStore/getUser'].token}`,
                  },
                }
              )
              .then((response) => {
                console.log(response.data);
                
              })
              .catch((err) => {
                //let message = err.response.data.detail;
                console.log(err);
              });
          }
    },

    mutations: {
      SET_ORDER(state, order ){
        state.order = order
        console.log(state.order)
      },

      SUCCESS(state){
        state.success = true;
      }
    },

    getters : {
      order(state){
        return state.order;
      }
    }
}

export default orderStore;