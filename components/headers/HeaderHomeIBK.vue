<template>
  <header class="main-header" @scroll="handleScroll()" style="position:fixed;">
    <nav class="main-nav" id="main-nav">
      <nuxt-link
        :to="{ path: this.urlLocal = '/interbank' }"
        class="main-nav__logo"
      >
        <img
          src="../../static/media/interseguroVehicular_v2/logo-ibk.svg"
          class="main-nav__logo--iso"
          alt="seguros vehiculares"
        >
        <img
          src="../../static/media/interseguroVehicular_v2/logo-ibk.svg"
          class="main-nav__logo--full"
          alt="intersguro seguro vehicular"
        >
      </nuxt-link>
      <div class="btn-hamburguesa">
        <div  id="btn-cotizaHead"  class="box-cotiza oculto"  v-bind:class="{ ocultoAcctivador: isOculto }" >
          <div class="btn-cotiza">
            <a
              href="/vehicular/interbank"
              class="box-home__btnCotiza text-center"
              @click="cotizarTop($event)"
              style="cursor: pointer"
            >Cotiza aquí</a>
          </div>
        </div>
        <input type="checkbox" id="nav-checkbox" @change="showHide($event)">
        <label class="main-nav__toggle menu-icon" for="nav-checkbox" id="nav-checkbox2">
          <div class="menu-icon__box">
            <div class="menu-icon__box--inner"></div>
          </div>
        </label>
        <ul class="main-nav__menu" id="main-menu">
          <li class="main-nav__menu--item menu-item" @click="enlaceTest()">
            <nuxt-link class="menu-item__enlace"  to="/interbank"> <img :src="require('../../static/media/interseguroVehicular_v2/nav_inicio.svg')" alt="inicio"> Inicio</nuxt-link>
          </li>
          <li class="main-nav__menu--item menu-item" @click="enlaceTest()">
            <nuxt-link class="menu-item__enlace"  to="/cobertura/"><img src="../../static/media/interseguroVehicular_v2/nav_cobertura.svg" alt="Que me cubre">¿Qué me cubre?</nuxt-link>
          </li>        
          <li class="main-nav__menu--item menu-item" @click="enlaceTest()">
            <nuxt-link class="menu-item__enlace"  to="/como-lo-uso/"><img src="../../static/media/interseguroVehicular_v2/nav_como_uso.svg" alt="como lo uso">¿Cómo lo uso?</nuxt-link>
          </li>
          <li class="main-nav__menu--item menu-item"  @click="enlaceTest()">
            <nuxt-link class="menu-item__enlace" to="/oficial/preguntas-frecuentes/"><img src="../../static/media/interseguroVehicular_v2/nav_faqs.svg" alt="Preguntas frecuentes">Preguntas frecuentes </nuxt-link>
          </li>

          <div class="nav-contacto">
            <div class="llamanos">
              <span>
                <img src="../../static/media/interseguroVehicular_v2/nav_telefono_azul.svg" alt="email">
              </span>
              <span>
                Llámanos
                <br>(01) 500 0000
              </span>
            </div>
          </div>
        </ul>
      </div>
    </nav>

    <div class="campaniatv-home  d-none" v-bind:class="{ 'baseIS': baseIS  }" >

    </div>
    
    <div id="capa" style="display: none;"></div>
    
    

  </header>
</template>

<script>
export default {
  name: "navbar",
  props: [""],

  data() {
    return {
      isOculto: true,
      urlLocal: "",
      ocultarBanner:false,
      cuentaSueldo: false,
      tarjetaoh: false,
      baseIS: false,
    };
  },
  head(){
    return {
      /* Facebook Pixel Code */
      // script: [
      //   {
      //     innerHTML:"!function(f,b,e,v,n,t,s)\n" +
      //       "  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n" +
      //       "  n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n" +
      //       "  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n" +
      //       "  n.queue=[];t=b.createElement(e);t.async=!0;\n" +
      //       "  t.src=v;s=b.getElementsByTagName(e)[0];\n" +
      //       "  s.parentNode.insertBefore(t,s)}(window, document,'script',\n" +
      //       "  'https://connect.facebook.net/en_US/fbevents.js');\n" +
      //       "  fbq('init', '768296169980827');\n" +
      //       "  fbq('track', 'PageView');"
      //   },
      //   {
      //     src: 'https://www.googletagmanager.com/gtag/js?id=AW-1002121309', async: true
      //   },
      //   {
      //     innerHTML:" window.dataLayer = window.dataLayer || [];\n" +
      //       "  function gtag(){dataLayer.push(arguments);}\n" +
      //       "  gtag('js', new Date());\n" +
      //       "\n" +
      //       "  gtag('config', 'AW-1002121309');"
      //   }
      // ],
      // noscript: [
      //   { innerHTML: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=768296169980827&ev=PageView&noscript=1" />' }
      // ],
      // __dangerouslyDisableSanitizers: ['script','noscript'] 
      /* End Facebook Pixel Code */
    }
  },
  mounted() {
    
    this.urlLocal = localStorage.getItem("urlLocal");
    setTimeout(() => {
        this.tarjetaoh = false
        this.cuentaSueldo = false
        this.baseIS = false        
    }, 0);
  },
  computed: {},
  methods: {
    verPromociones(){
      var posicion = document.getElementById('cyberInterseguro').offsetTop;
      window.scrollTo(0, posicion-40);
    },
    close(eve) {
      this.ocultarBanner = true
    },
    handleScroll(eve) {
      if (window.scrollY >= 600) {
        if(window.window.innerWidth >= 768){
          document.querySelector(".ocultoAcctivador").classList.remove("oculto");            
        }
        
               
      } else {
        document.querySelector(".ocultoAcctivador").classList.add("oculto");
      }
    },
    cotizarTop(e) {
      e.preventDefault();
      if (process.client) {
        window.scrollTo(0,0)
      }
    },
    enlaceTest(){
        var div = document.getElementById("capa")
        div.style.display = "none";
        document.getElementById("main-menu").style.display = "none"
        document.getElementById("nav-checkbox").checked = false;

        
    },
    showHide(e) {
      if (process.client) {

        e.preventDefault();
        // e.stopPropagation();
        var div = document.getElementById("capa")
        if(document.getElementById("nav-checkbox").checked == true){
          document.getElementById("main-menu").style.display = "flex"
          div.style.display = "block";
        }else{
          document.getElementById("main-menu").style.display = "none"
          div.style.display = "none";
        }
      }
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll);
      document.addEventListener('touchstart', this.handleScroll, {passive: true});
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll);
      document.addEventListener('touchstart', this.handleScroll, {passive: true});
    }
  }
};
</script>

<style lang="scss" scoped>
.header-planes .menu-nav__der ul li {
    font-family: 'Geometria Medium';
}
.cyberInterseguroEnlace{
  color: white;
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 87px;
  height: 22px;
  line-height: 24px;
  &:hover{
    text-decoration: none;
  }
  img{
    position: relative;
  }
}
.logo_interbank{
  width: 200px;
  right: 19%;
  bottom: 8px;
}
.campania-tarjetaoh{
  img{
    width: 58px;
    right: 19%;
    bottom: 8px;
  }
}
.campaniatv-home.cuentaSueldo{
  background: #00bb31;
  .campania-lado-der{
    border-bottom: 50px solid #039228;
    p{
      height: 50px;
      overflow: hidden;
    }
  }  
}
.campaniatv-home.tarjetaoh{
  background: #D2232A;
  .campania-lado-der{
    border-bottom: 50px solid #ED1D23
  }
}
.baseIS{
  display: none !important;
}

.oculto{
  display: none;
}
#baner_copaAmerica{
  position: absolute;
  top: auto;
  right: 0;
  bottom: calc(54px - 100vh);
  img{
    width: 100%;
    cursor: pointer;
  }
}
.nav-contacto{
  display: flex;
  margin-top: 1rem;
  padding-left: 24px;
  flex-direction: column;
  .whatsapp{
    display: flex;
    margin-right: 8px;
    img{
      margin-right: 12px;
    }
  }
  .llamanos{
    display: flex;
    margin-top: 12px;
    img{
      margin-right: 12px;
    }
  }
}
#main-menu{
  display: none;
  border-top: 2px solid #00adee;
}
.main-nav {
  background-color: white;
  position: relative;
  height: 65px;
}
.main-nav .menu-item__enlace {
  color: #5E5E5E;
}
.menu-icon__box--inner,
.menu-icon__box--inner::before,
.menu-icon__box--inner::after {
  background-color: #00adee;
}
.main-nav__menu--item ::after {
  background-color: #65c2ff;
}
.btn-cotiza a {
  border: 2px solid #EA0C90 !important;
  background: #EA0C90;
  color: #fff;
  border-radius: 16px;
  &:hover{
    background: #d6058b;
    text-decoration: none;
  }
}
.box-cotiza {
  background-color: white !important;
}
.main-header {
  background: white;
}

@media (min-width: 1024px) {
  #baner_copaAmerica{
    top: 85px;
    bottom: calc(54px - 100vh);
    img{
      width: 100%;
    }
  }
}




</style>

