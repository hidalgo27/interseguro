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
import Header from '@/components/headers/HeaderParametro'
import HeaderCotizador from '@/components/headers/HeaderInterseguroCotizador'
import Footer from '@/components/footers/Footer'
import FadeLoader from '@/components/loaders/FadeLoader'
export default {
  data () {
    return {
      businessId: "",
      loadinggss:true,
      loading: false,
      color: "#00ADEE",
      sizePulse: "45px",
      size: "30px",
      ocultoAcctivador:false,
      cuentaSueldo: false,
      show: true,
      textLoader: '',
    }
  },
  methods: {
    
  },
  components: {
    'header-is': Header,
    'footer-is': Footer,
    'header-cotizador':HeaderCotizador,
    'fade-loader': FadeLoader
  },
  created () {
    let self = this
    // listen to show-loader event
    this.$nuxt.$on('show-loader', ({ text }) => {
      self.textLoader = text
      self.show = true
    })
    this.$nuxt.$on('hide-loader', () => { self.show = false })
  },
  mounted() {
    console.log("LAYOUT 1")
    this.cuentaSueldo = localStorage.getItem("urlLocal") == '/cuentasueldo'  || localStorage.getItem("urlLocal") == '/tarjetaoh'? true : false
    this.businessId = this.$store.state.common.businessId
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
</style>
