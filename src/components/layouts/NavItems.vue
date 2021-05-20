<template>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon">
      <i class="fas fa-bars"></i>
    </span>
  </button>
  <div class="collapse navbar-collapse flex-container " id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"
          >electronique <span class="sr-only">(current)</span></a
        >
      </li>


      <li class="nav-item">
        <a class="nav-link" href="#"
          >Menages <span class="sr-only">(current)</span></a
        >
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#"
          >Vetement <span class="sr-only">(current)</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
          >Disabled</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-brand {
  font-family: "Poppins", sans-serif;
}

.navbar-nav .nav-item {
  margin: 0 1rem;
}

.fas {
  color:white;
}

a {
  color: black;
  text-decoration: none;
}

.cart {
  position: absolute;
  right: 2rem;
}
</style>
