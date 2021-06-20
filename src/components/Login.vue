<template>
  <form class="form" @submit.prevent="submitForm">
    <div
      class="alert alert-danger"
      v-if="$store.state.userStore.status == 'error'"
    >
      {{ $store.state.userStore.message }}
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        aria-describedby="emailHelp"
        placeholder="Enter username"
        v-model="email"
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
    <p v-if="!formIsValid">
      Entrer un email valid et le mot de passe doit depasser 5 caraceter
    </p>
    <button class="btn">Se Connecter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
    };
  },

  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        /* !this.email.includes("@") || */
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      let userInfo = {
        username: this.email,
        password: this.password,
      };

      this.$store.dispatch("userStore/login", userInfo);
      this.password = "";

      console.log(this.$store.state.userStore.status);
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
