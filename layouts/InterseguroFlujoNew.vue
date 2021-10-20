<template>
    <div>
      <header-is-ibk v-if="this.businessId == 2"></header-is-ibk>
      <!-- <header-cotizador v-else-if="this.cotizadorId == 1" class="cotizadorId"></header-cotizador> -->
      <header-is v-else></header-is>      
        <div>
          <nuxt/>
        </div>
      <footer-is></footer-is>
    </div>
</template>

<script>
import HeaderIBK from '@/components/headers/HeaderInterbank'
import Header from '@/components/headers/HeaderFlujoNew'
// import Header from '@/components/headers/HeaderInterseguro'
import HeaderCotizador from '@/components/headers/HeaderInterseguroCotizador'
import FooterFlujo from '@/components/footers/FooterFlujoNew'
export default {
  data () {
    return {
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
    
  },
  components: {
    'header-is-ibk': HeaderIBK,
    'header-is': Header,
    'footer-is': FooterFlujo,
    'header-cotizador':HeaderCotizador
  },
  created() {      
      if(this.$route.name == "pagogss-pagogss"){        
        this.loadinggss = true
      }else{
        this.loadinggss = false
      }
  },
  mounted() {
    console.log("LAYOUT 6")
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
