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
import Header from '@/components/headers/HeaderInterbank'
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
  // head(){
  //   return {
  //     /* Facebook Pixel Code */
  //     script: [
  //       {
  //         innerHTML:"!function(f,b,e,v,n,t,s)\n" +
  //           "  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n" +
  //           "  n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n" +
  //           "  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n" +
  //           "  n.queue=[];t=b.createElement(e);t.async=!0;\n" +
  //           "  t.src=v;s=b.getElementsByTagName(e)[0];\n" +
  //           "  s.parentNode.insertBefore(t,s)}(window, document,'script',\n" +
  //           "  'https://connect.facebook.net/en_US/fbevents.js');\n" +
  //           "  fbq('init', '768296169980827');\n" +
  //           "  fbq('track', 'PageView');"
  //       },
  //       {
  //         src: 'https://www.googletagmanager.com/gtag/js?id=AW-1002121309', async: true
  //       },
  //       {
  //         innerHTML:" window.dataLayer = window.dataLayer || [];\n" +
  //           "  function gtag(){dataLayer.push(arguments);}\n" +
  //           "  gtag('js', new Date());\n" +
  //           "\n" +
  //           "  gtag('config', 'AW-1002121309');"
  //       }
  //     ],
  //     noscript: [
  //       { innerHTML: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=768296169980827&ev=PageView&noscript=1" />' }
  //     ],
  //     __dangerouslyDisableSanitizers: ['script','noscript'] 
  //     /* End Facebook Pixel Code */
  //   }
  // },
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

</style>
