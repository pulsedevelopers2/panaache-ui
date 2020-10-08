<template>
  <div class="banner">
    <img class="banner-image" src="http://pulsedevelopers.site/ei_1601548368170-removebg.png">
    <div class="banner-link">
      <p class="banner-text">
        Exclusive Colection of nano tech Diamonds Rings. Crafted by word class machinary
      </p>
      <button class="banner-button">
        Know More
      </button>
    </div>
  </div>
</template>
<style scoped>
.banner{
    position: relative;
    width: 100%;
    height: 40vmax;
    background-image: url('../assets/white-texture.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.banner-image {
    position: absolute;
    top: 5%;
    right: 5%;
    max-width: 95%;
    max-height: 95%;
}
.banner-link {
    position: absolute;
    bottom: 4vh;
    left: 5vw;
    max-width: 30%;
    background: rgb(0,0,0,0.3);
    display: inline-block;
    overflow-wrap: break-word;
    padding: 5vmin;
    font-size: 3vmin;
}
.banner-link button{
    background: rgb(0,0,0,0.3);
    border: 0px;
}

</style>