<template>
  <div class="sticky-top py-2 py-md-3 shadow-sm bg-white"
       :class="{ 'animateOut': navbar === true, 'animateIn': navbar === false}"
  >
    <div class="container d-md-none">
      <div class="row no-gutters align-items-center justify-content-between">
        <div class="col-5">
          <img src="@/static/images/logos/lobo-movil.svg" alt="" class="w-100 d-md-none omnes-light">
        </div>
        <div class="col-auto">
          <button
            v-show="btncotizar"
            type="button" @click="cotizar()" class="btn btn-sm btn-v-secondary w-100 px-4 omnes-medium m-0">COTIZAR</button>
        </div>
        <div class="col-auto">
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />-->
<!--          </svg>-->
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-auto">
          <img src="@/static/images/logos/logo.svg" alt="" class="w-100 d-none d-md-block">
        </div>
        <div class="col-auto text-right d-none d-md-block">
          <nuxt-link class="mt-2 mr-2 small text-v-gray-dark omnes-semibold"  to="/coberturas/">¿QUÉ ME CUBRE?</nuxt-link>
          <nuxt-link class="mt-2 mx-2 small text-v-gray-dark omnes-semibold"  to="/como-lo-uso/">¿CÓMO LO USO?</nuxt-link>
          <a href="https://www.interseguro.pe/vivemas" class="mx-2 mt-2 omnes-semibold small text-v-gray-dark">BENEFICIOS</a>
          <nuxt-link class="mt-2 ml-2 small text-v-gray-dark omnes-semibold"  to="/oficial/preguntas-frecuentes">AYUDA Y PREGUNTAS</nuxt-link>
          <button
            v-show="btncotizar"
            type="button" @click="cotizar()" class="btn ml-3 btn-v-secondary px-4 omnes-medium m-0"><small>COTIZAR</small></button>
        </div>
      </div>
    </div>
<!--    <div class="container">-->
<!--      <b-navbar toggleable="lg" type="light" class="px-0">-->
<!--        <b-navbar-brand href="#">-->
<!--          <img src="@/static/images/logos/logo.svg" alt="">-->
<!--        </b-navbar-brand>-->
<!--        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->

<!--        <b-collapse id="nav-collapse" is-nav>-->

<!--          <b-navbar-nav class="ml-auto">-->
<!--            <b-navbar-nav right class="font-size-15">-->
<!--              <nuxt-link class="mt-2 nav-link text-v-gray-dark omnes-medium"  to="/coberturas/">¿QUÉ ME CUBRE?</nuxt-link>-->
<!--              <nuxt-link class="mt-2 nav-link text-v-gray-dark omnes-medium"  to="/como-lo-uso/">¿CÓMO LO USO?</nuxt-link>-->
<!--              <a href="https://www.interseguro.pe/vivemas" class="nav-link mt-2 omnes-medium text-v-gray-dark">BENEFICIOS</a>-->
<!--              <nuxt-link class="mt-2 nav-link text-v-gray-dark omnes-medium"  to="/oficial/preguntas-frecuentes">AYUDA Y PREGUNTAS</nuxt-link>-->
<!--              <button-->
<!--                v-show="btncotizar"-->
<!--                type="button" @click="cotizar()" class="btn btn-sm ml-3 btn-v-secondary px-4 py-1 omnes-medium m-0">COTIZAR</button>-->
<!--            </b-navbar-nav>-->

<!--          </b-navbar-nav>-->
<!--        </b-collapse>-->
<!--      </b-navbar>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "NavSticky",
  data() {
    return {
      btncotizar: false,
      navbar: false,
      refOffset: 0,
    }
  },
  methods: {
    handleScroll(eve) {
      const bannerHeight = 77;
      const newOffset = window.scrollY || window.pageYOffset;
      if (newOffset > bannerHeight) {
        if (newOffset > this.refOffset) {
          this.navbar = true;
        }else {
          this.navbar = false;
        }
        this.refOffset = newOffset;
      }

      if (window.scrollY >= 480) {
        this.btncotizar = true;
      } else {
        this.btncotizar = false;
      }
    },
  },
  created() {
    // this.createMail()
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll);
      document.addEventListener('touchstart', this.handleScroll, {passive: true});
    }
  },
  destroyed(){
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll);
      document.addEventListener('touchstart', this.handleScroll, {passive: true});
    }
  },
}

</script>
