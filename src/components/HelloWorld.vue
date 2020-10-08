<template>
  <!-- Slideshow container -->
  <div class="mainpage row">
    <div v-if="loggedIn === 'true'" class="main-page">
      <categories class="cat-parent" />
      <banner />
      <p class="golden h1">
        loggedIN
      </p>
    </div>
    <login v-if="loggedIn === 'false' || loggedIn === 'failed'" class="login-block col-xs-12" />
  </div>
</template>

<script>
import Login from './login.vue'
import Banner from './banner.vue'
import Categories from './categories.vue'
import { mapState } from 'vuex';
export default {
  name: 'Main',
  components: {
    Login,
    Banner,
    Categories
  },
  data(){
    return {
      name: null,
      password: null
    }
  },
  computed:{
    ...mapState({
      loggedIn: state => state.login.loggedIn
    })
  }
  }
</script>
<style scoped>
.hover-scale:hover {
  transform: scale(1.2) !important;
}
.mainpage{
  position: relative;
}
.login-block{
  position: absolute;
  justify-content: center;
  text-align: center;
  align-items: center;
  align-content: center;
  margin: auto;
}
.h1{
  font-size: 5vmin;
  letter-spacing: 0.05em;
}
.cat-parent {
  width: inherit;
  padding: 0.5%;
}
</style>