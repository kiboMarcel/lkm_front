<template>
  <div>
    <h3>Account Settings
    </h3>
    <div>
      <form @submit.prevent="update">
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
            v-model="username"
           
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter password"
            v-model="password"
            
          />
        </div>
        <div>
          <button class="btn" type="submit">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return {
      email : '',
      username : this.$store.state.userStore.profil.username,
      password:'',
    }
  },

  watch: {
    email(){
      this.email = this.$store.state.userStore.profil.email
    }
  },

  methods: {
    update(){
      let value = {
        email : this.email,
        username : this.username,
        password : this.password,
      }
      this.$store.dispatch('userStore/update', value )
    }
  },

  mounted(){
    this.$store.dispatch("userStore/getProfile");
    console.log(this.$store.state.userStore.profil)
  },
  

};
</script>


<style>
div h3 {
  margin-bottom: 20px;
}
</style>
