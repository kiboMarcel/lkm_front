<template>
  <div class="container">
    <h4>S'enregister</h4>
    <sign-up></sign-up>
    <a href="">se connecter</a>
  </div>
</template>

<script>
import SignUp from "../components/SignUp";

export default {
  components: {
    SignUp,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 70vh;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: 500px;
  max-width: 100%;
  margin-top:50px;
  margin-bottom: 50px;
}

div h4 {
  text-align: center;
}

div a{
    display: inline;
    text-align: right;
    margin-right: 12px;
}
</style>
