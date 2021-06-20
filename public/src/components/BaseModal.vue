<template>
  <div>
    <div class="backdrop" @click="$emit('close')"></div>
    <dialog open>
      
    <div class="close">
       <i class="fas fa-times" @click="$emit('close')"></i>
    </div>
     
      <h3>AFRI-Zone!</h3>
      <ul>
        <li @click="setSelectedComponent('login')"
        :class="isActive=='login' ? style : '' ">
          Se Connecter
        </li>
        <li @click="setSelectedComponent('sign-Up')"
        :class="isActive=='sign-Up' ? style : '' ">
          S'enregistrer
        </li>
      </ul>

      <component :is="isActive"> </component>
    </dialog>
  </div>
</template>

<script>
import Login from "./Login.vue";
import SignUp from "./SignUp.vue";

export default {
  components: {
    Login,
    SignUp,
  },

  emits: ["close"],

  data() {
    return {
      isActive: "login",
      style: "active",
    };
  },
  methods: {
    setSelectedComponent(cpnt) {
      this.isActive = cpnt;
      
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 25vh;
  display: flexbox;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

.close:hover{
  cursor: pointer;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
dialog h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 2rem;
}

li:hover {
  cursor: pointer;
}

.active {
  border-bottom: 2px solid rgb(221, 41, 80);
  color:rgb(221, 41, 80);
}
</style>
