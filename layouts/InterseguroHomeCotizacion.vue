<template>
    <div>
      <header-is-ibk v-if="this.businessId == 2"></header-is-ibk>
      <header-cotizador v-else v-bind:class="{cotizadorId: flagCloseListon == 1  }"></header-cotizador>
      <!-- <header-is v-else></header-is>-->
        <div>
          <nuxt/>
        </div>
      <footer-is></footer-is>
    </div>
</template>

<script>
import HeaderIBK from '@/components/headers/HeaderInterbank'
//import Header from '@/components/headers/HeaderHome'
import Header from '@/components/headers/HeaderInterseguro'
import HeaderCotizador from '@/components/headers/HeaderInterseguroCotizador'
import Footer from '@/components/footers/Footer'
export default {
  head () {
    return {
      // title: this.carDetails.title,
      meta: [
        { hid: 'fb:og:title', property: 'og:title', content: '¡Compra tu Seguro Vehicular en menos de 3 minutos y al mejor precio del mercado!' },
        { hid: 'fb:og:image', property: 'og:image', content: 'https://www.interseguro.pe/vehicular/resources/share/interseguro_facebook.png' },      
        { hid: 'fb:og:description', property: 'og:description', content: 'Seguro Vehicular contra Todo Riesgo 100% Digital' }
        // other meta
      ]
    }
  },
  data () {
    return {
      flagCloseListon: 1,
      businessId: "",
      cotizadorId: 0,
      loadinggss:true,
      loading: false,
      color: "#00ADEE",
      sizePulse: "45px",
      size: "30px",
      ocultoAcctivador:false,
      cuentaSueldo: false
    }
  },
  methods: {
    myCustomEvent(e) {
    }
  },
  computed: {
  },
  components: {
    'header-is-ibk': HeaderIBK,
    'header-is': Header,
    'footer-is': Footer,
    'header-cotizador':HeaderCotizador
  },
  created() {      
      if(this.$route.name == "pagogss-pagogss"){        
        this.loadinggss = true
      }else{
        this.loadinggss = false
      }

      this.$bus.$on('updatingTest',(e)=>{
        this.flagCloseListon = e
      })  

    
  },
  mounted() {
    console.log("LAYOUT 3")
    if (localStorage.getItem("flagCloseListon") == 1) {
      this.flagCloseListon = localStorage.getItem("flagCloseListon")
    }else{
      this.flagCloseListon = 0
    }

    this.cuentaSueldo = localStorage.getItem("urlLocal") == '/cuentasueldo'  || localStorage.getItem("urlLocal") == '/tarjetaoh'? true : false
    this.businessId = this.$store.state.common.businessId
    this.cotizadorId = localStorage.getItem("cotizadorId")
  }
}
</script>

<style lang="scss">
  .cuentaSueldobox{
    padding-top: 0px;
  }
  @media (min-width: 768px) {
    .cuentaSueldobox{
      padding-top: 51px;
    }
  }
  .campania-mobile{
    height: 75px !important;
    text-align: center;
    h3{
      width: 100% !important;
    }
    p{
      width: 100% !important;
    }
  }
  .w-slider {
    height: 300px;
    overflow: hidden;
  }
  .campaniatv-home{
    position: fixed;
    bottom: 0;
    background: #1e1e1e;
    color: white;
    height: 70px;
    width: 100%;
    z-index: 99;
    &__body{
      display: flex;
    }
    img{
      position: absolute;
      bottom: 0px;
      width: 100%;
    }
    h3{
      width: 60%;
      font-size: 18px;
      font-weight: 500;
      padding-left: 12px;
      line-height: 20px;
      margin-bottom: 0;
      padding-top: 12px;
      padding-bottom: 4px;
    }
    p{
      padding-left: 12px;
      width: 65%;
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 0;
    }
  }
</style>
