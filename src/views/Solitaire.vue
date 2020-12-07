<template>
  <div class="solitaire-wrapper row" @contextmenu="preventDefault($event)">
    <nav-bar />
    <SideNav />
    <span v-if="loggedIn == 'true'">
      <div class="solitaire-intro col-xs-12">
        <div class="intro-box">
          <h3> Introducing buy on Chat feature. Because we know buying Jewelz is not so easy </h3>
          <h5> You can now buy solitaire diamonds by talking to Diamond Experts from your favourite platforms </h5>
        </div>
      </div>
      <div class="features-wrapper col-xs-12">
        <div class="size-wrapper col-xs-12 col-md-4">
          <h4 class="col-xs-12 header">
            Diamond Shapes
          </h4>
          <div class="size-text row col-xs-12">
            <span class="centered">
              <h3 class="col-xs-12">
                0.01CT - 1.5CT
              </h3>
              <span class="centered" /></span>
          </div>
        </div>
        <div class="size-wrapper col-xs-12 col-md-4">
          <h4 class="col-xs-12 header">
            Diamond Sizes
          </h4>
          <div class="size-text row col-xs-12">
            <span class="centered">
              <h3 class="col-xs-12">
                0.01CT - 1.5CT
              </h3>
              <span class="centered" /></span>
          </div>
        </div>
        <div class="size-wrapper col-xs-12 col-md-4">
          <h4 class="col-xs-12 header">
            Diamond Quality
          </h4>
          <div class="size-text row col-xs-12">
            <span class="centered">
              <h3 class="col-xs-6">
                VVS
              </h3>
              <h3 class="col-xs-6">
                VVS-VS
              </h3>
              <h3 class="col-xs-6">
                VS
              </h3>
              <h3 class="col-xs-6">
                SI
              </h3>
            </span>
          </div>
        </div>
        <div class="size-wrapper col-xs-12 col-md-4">
          <h4 class="col-xs-12 header">
            Diamond color   
          </h4>
          <div class="size-text row col-xs-12">
            <span class="centered">
              <h3 class="col-xs-6">
                E-F
              </h3>
              <h3 class="col-xs-6">
                F-G
              </h3>
              <h3 class="col-xs-6">
                G-H
              </h3>
              <h3 class="col-xs-6">
                H-I
              </h3>
            </span>
          </div>
        </div>
      </div>
      <span class="col-xs-12 col-md-4">
        <button class="contact">
          Whatsapp
        </button>
      </span>
      <span class="col-xs-12 col-md-4">
        <button class="contact">
          Instagram
        </button>
      </span>
      <span class="col-xs-12 col-md-4">
        <button class="contact">
          Call US
        </button>
      </span>
    </span>
    <Footer v-if="loggedIn == 'true'" />
  </div>
</template>
<script>
import NavBar from '../NavBar.vue'
import SideNav from '../components/SideNav.vue'
import Footer from '../footer.vue'
import { mapState } from 'vuex'
export default {
    components: {
        NavBar,
        SideNav,
        Footer
    },
    computed: {
        ...mapState({
            loggedIn: state => state.login.loggedIn
        })
    },
    methods: {
      preventDefault(e) {
        e.preventDefault();
        
      }
    }
}
</script>
<style scoped>
.solitaire-wrapper {
    justify-content: center;
    text-align: center;
}
.solitaire-intro {
    padding: 4%;
}
.features-wrapper {
    padding: 5%;
}
.size-wrapper {
    min-height: 25vh;
    margin-bottom: 2vh;
}
.size-text {
    min-height: inherit;
    background: linear-gradient(45deg, black, rgb(26, 26, 26) 100%);
    display: inline-block;
    position: relative;
    justify-content: center;
}
.header {
    border-bottom: 1px solid rgb(145, 96, 96);
    padding: 1%;
}
.solitaire-intro {
    height: 30vmax;
    background: url('https://miro.medium.com/max/2898/1*f7qq7QZeyQzYF0RTxzPhkg.jpeg');
    background-clip: no-clip;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
}
.intro-box {
    width: inherit;
    height: inherit;
    background: rgba(0, 0, 0, 0.5);
}
@media screen and (orientation: portrait) {
.solitaire-intro .intro-box h3 {
    font-size: 90%;
    position: absolute;
    bottom: 0;
}

.solitaire-intro .intro-box h5 {
    display: none;
}

}
.size-text .centered {
    display: inline-block;
    margin: 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.contact {
    background: transparent;
    border: 1px solid rgb(145, 96, 96);
    padding: 4%;
    margin-top: 2%;
    width: 50%;
    margin-bottom: 5%;
}
</style>