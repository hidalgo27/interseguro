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

import Header from '@/components/headers/HeaderInterseguro'
import Footer from '@/components/footers/FooterIS'
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
    this.cuentaSueldo = localStorage.getItem("urlLocal") == '/cuentasueldo'  || localStorage.getItem("urlLocal") == '/tarjetaoh'? true : false
    this.businessId = this.$store.state.common.businessId
  }
}
</script>

<style lang="scss">
 
</style>
