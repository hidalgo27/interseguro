/* eslint-disable */
import Cookies from 'js-cookie'

const gtmKey = 'GTM-NN2QLC8' // <- insert your GTM key here

export default () => {
  /*
  ** Only run on client-side and only in production mode
  */
  // if (process.env.environment !== 'prod') return
  /*
  ** Only run if it's not prevented by user
  */
  // if (Cookies.get('disable-gtm')) return
  /*
  ** Include Google Tag Manager OPTIMIZE
  */

  
  /* Google Tag Manager */
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-NN2QLC8');

}