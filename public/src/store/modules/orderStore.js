import axios from 'axios'
import apiUrl from "../../variables";


const orderStore = {
    namespaced : true,

    state:{},

    actions:{

      /* simple({rootGetters}, data){
       console.log(rootGetters['userStore/getUser'].token)
       console.log(data)
      }, */

        async createOrder({rootGetters}, data) {
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
                console.log(rootGetters['userStore/getUser'].token)
                console.log(response.data);
                
              })
              .catch((err) => {
                //let message = err.response.data.detail;
                console.log(err);
              });
             //console.log(context, values)
          },
    }
}

export default orderStore;