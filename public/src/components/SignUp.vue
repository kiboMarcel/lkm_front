<template>
  <form class="form" @submit.prevent="submitForm">
    
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        aria-describedby="emailHelp"
        placeholder="Enter username"
        v-model="name"
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        aria-describedby="emailHelp"
        placeholder="password"
        v-model="password2"
      />
    </div>
    <p v-if="!formIsValid">
      Entrer un email valid et le mot de passe doit depasser 5 caraceter
    </p>
     <p v-if="!passIsValid">
      mot de passe different
    </p>
    <button class="btn">S'enregistrer</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
      password2: "",
      formIsValid: true,
      passIsValid: true,
    };
  },

  methods: {
    submitForm() {
      this.formIsValid = true;
      this.passIsValid = true;
      if (
        this.email === "" ||
        /* !this.email.includes("@") || */
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      if(this.password != this.password2){
        this.passIsValid = false
        return;
      }

      let userInfo = {
        email: this.email,
        name: this.name,
        password: this.password,
      };

      this.$store.dispatch("userStore/register", userInfo);
     

      //console.log(userInfo);
    },
  },
};
</script>

<style scoped>
.form {
  padding: 0 10px;
}

.form-control{
  border: 2px solid #f0f0f0;
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #777;
    outline: 0;
    box-shadow: none;
}
.btn {
  background-color: rgb(221, 41, 80);
  text-align: center;
  color: white;
  width: 100%;
  border-radius: 0px;
}
</style>
