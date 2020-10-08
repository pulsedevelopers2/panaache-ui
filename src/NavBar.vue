<template>
  <div class="nav-bar">
    <div class="nav-logo">
      <img src="./assets/fullLogo.png">
    </div><div class="user">
      <img src="./assets/user.png">
    </div>
    <!-- <div class="nav-company-text col-xs-10 col-md-3 golden"><img src="./assets/logo.png" /><img src="./assets/textLogo.png"></div>
    <div class="expanded-option  row col-md-5 hidden-xs hidden-sm"><button class="col-xs-1">RINGS</button><button class="col-xs-1">RINGS</button><button class="col-xs-1">RINGS</button></div>
    <div class="col-md-2 hidden-xs hidden-sm search"><input type="text" placeholder="Search"></div>
    <i class="user fa fa-user-circle col-md-1 col-lg-1 hidden-xs hidden-sm"></i>
    <div class="mobile-options col-xs-2 d-lg-none hidden-lg hidden-md"><i class="fa fa-reorder"/></div> -->
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.nav-bar {
    height: 15vh;
    max-height: 60px;
    display: flex;
    padding: 1vh;
    position: relative;
}
.nav-logo {
    width: 100vw;
    max-height: 100%;
    justify-content: center;
}
.nav-logo img, .user img{
    max-width: 100%;
    max-height: 100%;
}
.user{
    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
    justify-content: center;

}
</style>