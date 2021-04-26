<template>
    <div class="mainibk">
      <header-is></header-is>      
        <div>
          <nuxt/>
        </div>
      <footer-is></footer-is>
    </div>
</template>

<script>
import Header from '@/components/headers/HeaderInterbank'
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
  data() {
    return {
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
    
  },
  components: {
    'header-is': Header,
    'footer-is': Footer
  },
  created() {      
      if(this.$route.name == "pagogss-pagogss"){        
        this.loadinggss = true
      }else{
        this.loadinggss = false
      }
  },
  mounted() {
    console.log("LAYOUT 8")
    this.cuentaSueldo = localStorage.getItem("urlLocal") == '/cuentasueldo'  || localStorage.getItem("urlLocal") == '/tarjetaoh'? true : false
  }
}
</script>

<style lang="scss">
body .mainibk{
  font-family: "Montserrat Regular";
}
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

</style>
