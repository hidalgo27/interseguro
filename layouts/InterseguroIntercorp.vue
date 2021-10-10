
<template>
    <div>
      <header-is></header-is>
        <div>
          <nuxt/>
        </div>
      <footer-is></footer-is>
    </div>
</template>

<script>
import Header from '@/components/headers/HeaderIntercorp'
import Footer from '@/components/footers/Footer'
export default {
  head () {
    return {
      // title: this.carDetails.title,
      meta: [
        { hid: 'fb-og-title', property: 'og:title', content: '¡Ahorra 35% en tu Seguro Vehicular por ser parte del Grupo Intercorp!' },
        { hid: 'fb-og-description', property: 'og:description', content: 'Un Seguro Vehicular con todas las coberturas 100% digital' },
        { hid: 'fb:og:image', property: 'og:image', content: 'https://www.interseguro.pe/vehicular/resources/share/interseguro_intercorp_facebook.png' },
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
    'header-is': Header,
    'footer-is': Footer,
  },
  created() {      
  },
  mounted() {
    setTimeout(() => {
      this.urlLocal = localStorage.getItem("urlLocal")
    }, 0)
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
