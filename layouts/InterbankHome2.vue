<template>
    <div class="interbankLayout2">
      <header-is></header-is>      
        <div>
          <nuxt/>
        </div>
      <footer-is></footer-is>
    </div>
</template>

<script>
import Header from '@/components/headers/HeaderHomeIBK'
import Footer from '@/components/footers/Footer'
export default {
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
    console.log("LAYOUT 7")
    this.cuentaSueldo = localStorage.getItem("urlLocal") == '/cuentasueldo'  || localStorage.getItem("urlLocal") == '/tarjetaoh'? true : false
  }
}
</script>

<style lang="scss">
  .interbankLayout2{
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
