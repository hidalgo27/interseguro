<template>
    <div>        
        <div class="spinner-sq spinner--rotate-square-6" v-bind:style="styles">
            <div class="inner-square inner-square-1" v-bind:style="outerStyles" style="border-radius:40px 0 40px 0;"></div>
            <div class="inner-square inner-square-2" v-bind:style="innerStyles"></div>
            <div class="container text-loader bv-example-row">                
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
  z-index: 3;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0,106,184,0.85), rgba(65,181,199,0.85));
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
  animation-direction: reverse;
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