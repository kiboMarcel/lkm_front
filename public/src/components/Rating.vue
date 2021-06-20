<template>
  <div class="rat">
    <span>
      <i :style="{ color }" :class="icon1"> </i>
    </span>
     <span>
      <i :style="{ color }" :class="icon2"> </i>
    </span>
     <span>
      <i :style="{ color }" :class="icon3"> </i>
    </span>
     <span>
      <i :style="{ color }" :class="icon4"> </i>
    </span>
     <span>
      <i :style="{ color }" :class="icon5"> </i>
    </span>
    <span> {{ text && text }} </span>
   
  </div>
</template>

<script>
export default {
props:{
    value: {required: true},
    text: {required: true},
    color: {required: true}

},



computed:{
    icon1(){
       let className = ''
         this.value >=1
       ? className= 'fas fa-star'
        : this.value >= 0.5
       ? className= 'fas fa-star-half-alt'
       :  className= 'far fa-star'
       return className;
    },
    icon2(){
       let className = ''
         this.value >=2
       ? className= 'fas fa-star'
        : this.value >= 1.5
       ? className= 'fas fa-star-half-alt'
       :  className= 'far fa-star'
       return className;
    },
    icon3(){
       let className = ''
         this.value >=3
       ? className= 'fas fa-star'
        : this.value >= 2.5
       ? className= 'fas fa-star-half-alt'
       :  className= 'far fa-star'
       return className;
    },
    icon4(){
       let className = ''
         this.value >=4
       ? className= 'fas fa-star'
        : this.value >= 3.5
       ? className= 'fas fa-star-half-alt'
       :  className= 'far fa-star'
       return className;
    },
    icon5(){
       let className = ''
         this.value >=5
       ? className= 'fas fa-star'
        : this.value >= 4.5
       ? className= 'fas fa-star-half-alt'
       :  className= 'far fa-star'
       return className;
    }
}

}
</script>

<style scoped>
.rat span{
    margin:0.1rem;
}
</style>
