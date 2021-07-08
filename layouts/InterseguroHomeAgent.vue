
<template>
    <div>      
      <header-intercorp v-if="this.businessId == 3"></header-intercorp>
      <header-is-ibk v-else-if="this.businessId == 2"></header-is-ibk>
      <header-is v-else></header-is>
        <div>
          <nuxt/>
        </div>
      <footer-is-app v-if="this.nuevoProducto == true"></footer-is-app>
      <footer-is v-else></footer-is>
    </div>
</template>

<script>
import HeaderIntercorp from '@/components/headers/HeaderIntercorp'
import HeaderIBK from '@/components/headers/HeaderInterbank'
import Header from '@/components/headers/HeaderInterseguro'
import Footer from '@/components/footers/FooterAgent'
import FooteraApp from '@/components/footers/FooterApp'
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
      appDiscountURL:'',
      businessId: "",
      cotizadorId: 0,
      loadinggss:true,
      loading: false,
      color: "#00ADEE",
      sizePulse: "45px",
      size: "30px",
      ocultoAcctivador:false,
      cuentaSueldo: false,
      nuevoProducto: false
    }
  },
  methods: {
    
  },
  components: {
    'header-intercorp' : HeaderIntercorp,
    'header-is-ibk': HeaderIBK,
    'header-is': Header,
    'footer-is': Footer,
    'footer-is-app': FooteraApp,
  },
  created() {      
      if(this.$route.name == "pagogss-pagogss"){        
        this.loadinggss = true
      }else{
        this.loadinggss = false
      }
  },
  mounted() {
    this.$nuxt.$emit('whatsapp', {
      wapp : {
          valor :true
      }
    })
    this.nuevoProducto = this.$store.state.common.nuevoProducto
    setTimeout(() => {
      this.urlLocal = localStorage.getItem("urlLocal")
    }, 0)
    this.cuentaSueldo = localStorage.getItem("urlLocal") == '/cuentasueldo'  || localStorage.getItem("urlLocal") == '/tarjetaoh'? true : false
    this.businessId = this.$store.state.common.businessId
    this.appDiscountURL = this.$store.state.common.appDiscountURL
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
