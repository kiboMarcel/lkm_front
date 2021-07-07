import axios from 'axios'
import apiUrl from "../../variables";


const orderStore = {
    namespaced : true,

    state:{
      order : {},
      marcel: 45,
      orderDetail: {},
      success: false,
    },

    actions:{

      /* simple({rootGetters}, data){
       console.log(rootGetters['userStore/getUser'].token)
       console.log(data)
      }, */

        async createOrder({rootGetters, getters, commit}, data) {
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
          
                //console.log("marcel  :"+state.marcel)
              })
              .catch((err) => {
                //let message = err.response.data.detail;
                console.log(err);
              });
             //console.log(context, values)

             return getters.order._id;
          },


          async OrderDetail({rootGetters, commit}, id){
           //let id = await getters.order._id
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
                let order_det = response.data
                commit('SET_ORDER_DETAIL', order_det)

                //console.log(order_det.user.name)
                
                
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
        //console.log(state.order)
      },

      SET_ORDER_DETAIL(state, orderdetail ){
        state.orderDetail = orderdetail
      },

      SUCCESS(state){
        state.success = true;
      }
    },

    getters : {
      order(state){
        return state.order;
      },

      orderG(state){
        return state.orderDetail;
      },

     
    }
}

export default orderStore;