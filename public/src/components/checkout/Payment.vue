<template>
  <div >
    <div >
      <h3>Methode de Payement</h3>
      <form @submit.prevent="next">
          <div
      class="alert alert-danger"
      v-if="!validate"
    >
      selectioner une methode de payement
    </div>
        <label>
          <input
            id="paypal"
            type="radio"
            name="payment"
            value="paypal"
            v-model="payment"
          />
          <span>Paypal</span>
        </label>
        <label>
          <input
            id="moov"
            type="radio"
            name="payment"
            value="moov"
            v-model="payment"
          />
          <span>Moov</span>
        </label>
        <div class="btn-div" >
          <button class="btn">Continuer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payment: this.$store.state.cartStore.paymentMethod,
      validate: true
    };
  },
  methods: {
    next() {
      if(this.payment == null){
        this.validate = false
        return
      }
      this.$store.dispatch("cartStore/savePaymentMethod", this.payment);
      this.payment = null
      this.validate = true

      this.$router.push(`/confirmation/`)
    },
  },
  
};
</script>

<style scoped>
form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

h3{
  text-align: center;
}

label {
  display: flex;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.375em;
  /* Accessible outline 
  /* Remove comment to use */
}
label input {
  position: absolute;
  left: -9999px;
}
label input:checked {
  background-color: #d6d6e5;
}
label input:checked + span:before {
  box-shadow: inset 0 0 0 0.4375em #00005c;
}
label span {
  display: flex;
  align-items: center;
  padding: 0.375em 0.75em 0.375em 0.375em;
  border-radius: 99em;
  transition: 0.25s ease;
}
label span:hover {
  background-color: #d6d6e5;
}
label span:before {
  display: flex;
  flex-shrink: 0;
  content: "";
  background-color: #fff;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  margin-right: 0.375em;
  transition: 0.25s ease;
  box-shadow: inset 0 0 0 0.125em #00005c;
}

.btn-div{
  margin-top: 12px;
  width: 100%;
}

button{
  background-color: blueviolet;
  color:white;
  width: 100%;
  margin-bottom: 30px;
}
.body button:hover{
  background-color: rgb(106, 37, 172);
  color:white;
}


</style>
