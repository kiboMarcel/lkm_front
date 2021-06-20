<template>
  <div class="wrap">
    <ul>
      <li class="cat">
        <a href="">
          <h4>Jeux</h4>
        </a>
      </li>
      <li class="cat">
        <a href="">
          <h4>PC</h4>
        </a>
      </li>
      <li class="cat">
        <a href="">
          <h4>Menage</h4>
        </a>
      </li>
      <li class="cat">
        <a href="">
          <h4>Domestique</h4>
        </a>
      </li>
      <li class="cat">
        <a href="">
          <h4>Autre dfd</h4>
        </a>
      </li>
      <li class="cat">
        <a href="">
          <h4>Autred</h4>
        </a>
      </li>
      <li class="cat">
        <a href="">
          <h4>AutChose</h4>
        </a>
      </li>
      <li class="cat">
        <a href="">
          <h4>AuChose</h4>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap{
  background-color: #f2f2f2;
}

.cat {
  background-color: rgb(40, 36, 75);
  display: inline-block;
  padding: 15px;
  margin: 0.5rem;
  color: white;
  border-radius: 12px;
  margin-right: 10px;
}
a h4 {
  margin: 2px 0;
  font-size: 25px;
}

ul li a {
  text-decoration: none;
  color: white;
}

@media (max-width: 930px) {
  ul {
    padding: 0;
    margin: 1rem;
  }
  .cat {
    padding: 2px 8px;
    margin: 0.2rem 0.2rem;
  }

  a h4 {
    margin: 2px 0;
    font-size: 12px;
  }
}
</style>
