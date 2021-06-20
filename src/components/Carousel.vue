<template>
  <div class="carousel-section">
    <div class="carousel">
      <div
        id="carouselExampleIndicators"
        class="carousel carousel-c slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            
            <img
              class="d-block w-100"
              src="../assets/images/01.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="../assets/images/01.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="../assets/images/01.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script> 

<style>
.carousel-section {
  background-color: #f2f2f2 !important;
}

.carousel-c {
  height: 350px;
  margin: 1rem;
  border-radius: 20px;
  overflow: hidden;
}

@media (max-width: 930px) {
  .carousel-c {
    height: 149px;
    border-radius: 10px;
    overflow: hidden;
  }
}

/* .text{
  background-color: transparent;
  display: flex;
  justify-content:center;
  position: absolute;
  flex-direction: column;
  top: 44px;
  max-width: 325px;
  left: 134px;
}

.text p{
  font-size: 17px;
  color: #fcfcfc;
}

.text a {
  text-decoration: none;
  padding: 12px;
  display: inline;
  text-align: center;
  width: 42%;
  border-radius: 1px;
  margin: auto;
  
}

.btnclass{
  display: flex;
  justify-content:center;
  position: absolute;
  top: 44px;
  max-width: 325px;
  left: 134px;
} */
</style>
