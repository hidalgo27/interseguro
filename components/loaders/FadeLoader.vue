<template>
  <div>
   <div>
      <div class="spinner-sq spinner--rotate-square-6" v-bind:style="styles">
          <div class="inner-square inner-square-1" v-bind:style="outerStyles" style="border-radius:20px 0 20px 0"></div>
          <div class="inner-square inner-square-2" v-bind:style="innerStyles"></div>
          <div class="container text-loader bv-example-row">
              <b-row align-h="center">
                  <b-col v-if="info === 'Estamos buscando los mejores planes para ti'" cols="12" sm="10" md="6" lg="5">
                      <h2 class="text-light omnes-regular">{{ info }}</h2>
                  </b-col>
                  <b-col v-else cols="12" sm="10" md="6" lg="6" xl="6">
                      <h2 style="margin-top: 130px;
                                font-size: 24px;
                                text-align: center;" class="text-light omnes-regular">{{ info }}</h2>
                  </b-col>
              </b-row>
          </div>
      </div>
  </div> 
  </div>
</template>

<script>
export default {
  props: ['info'],
  data () {
    return {
      size: '190px',
      color: '#fff'
    }
  },
  computed: {
    outerWidth () {
      let size = parseInt(this.size)
      return this.calcWidth(size)
    },
    outerStyles () {
      return {
        top: '36%',
        border: '2px solid ' + this.color,
        width: '105px',
        height: '105px'
      }
    },
    innerStyles () {
      return {
        top: '39%',
        border: '2px solid ' + this.color,
        width: '54px',
        height: '54px'
      }
    },
    styles () {
      return {
        width: '100%',
        height: '100%'
      }
    }
  },
  methods: {
    calcWidth (outerWidth) {
      let r = 45 * Math.PI / 180
      let s = Math.abs(Math.cos(r))
      let c = Math.abs(Math.sin(r))
      return (outerWidth * c - outerWidth * s) / (Math.pow(c, 2) - Math.pow(s, 2))
    }
  }
}
</script>

<style>
.spinner-sq {
  position: fixed;
  z-index: 9999;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#0855c4, rgba(65,181,199,0.85));
  justify-content: center;
  align-items: center;
}
.spinner-sq .inner-square {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
}
.spinner-sq .inner-square-1 {
  animation: spinner--rotate-square-6 3.5s linear infinite;
}
.spinner-sq .inner-square-2 {
  width: 44px;
  height: 44px;
  animation: spinner--rotate-square-6 3.5s linear infinite;
  /* animation-direction: reverse; */
}
@keyframes spinner--rotate-square-6 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
