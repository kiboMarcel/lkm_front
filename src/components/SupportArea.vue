<template>
  <div class="container">
    <ul>
      <li>
        <categorie-feature></categorie-feature>
      </li>
      <li>
        <categorie-feature></categorie-feature>
      </li>
      <li>
        <categorie-feature></categorie-feature>
      </li>
      <li>
        <categorie-feature></categorie-feature>
      </li>
      <li>
        <categorie-feature></categorie-feature>
      </li>
      <li>
        <categorie-feature></categorie-feature>
      </li>
    </ul>
  </div>
</template>

<script>
import CategorieFeature from "./CategorieFeatures";
export default {
  components: {
    CategorieFeature,
  },
};
</script>

<style scoped>
.container {
  margin-top: 3rem;
  align-items: center;
  display: none;
}

@media screen and (max-width: 960px) {
  .container {
      display: block;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    width: 25%;
    margin-top: 10px;
    align-items: center;
  }

  span {
    display: block;
    text-align: center;
  }
}
</style>
