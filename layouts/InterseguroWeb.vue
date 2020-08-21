<template>
    <div>
      <header-is-ibk v-if="this.businessId == 2"></header-is-ibk>
      <header-is v-else></header-is>      
        <div>
          <nuxt/>
        </div>
      <footer-is></footer-is>
    </div>
</template>
<script>
import HeaderIBK from '@/components/headers/HeaderInterbank'
// import Header from '@/components/headers/HeaderWeb'
import Header from '@/components/headers/HeaderWeb'
import Footer from '@/components/footers/Footer'

export default {
  data () {
    return {
      businessId: ""
    }
  },
  methods: { },
  components: {
    'header-is-ibk': HeaderIBK,
    'header-is': Header,
    'footer-is': Footer
  },
  mounted() {
    setTimeout(() => {
        this.urlLocal = localStorage.getItem("urlLocal")
    }, 250)
    this.businessId = this.$store.state.common.businessId
  },

}
</script>
