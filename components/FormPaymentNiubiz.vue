<template lang="pug">
  
  b-row.pt-1
    b-col
      b-row.box-card.pl-sm-1.py-0.justify-content-center
        b-col.pl-md-3.pr-md-4.pl-lg-0.pr-lg-1.mx-lg-0.mx-xl-0.px-xl-0(lg="12" xl="12")
          b-row.py-0.px-0.justify-content-center
            PagoNiubiz(v-if="niubizConfig.sessionkey"
                :configuration="niubizConfig"
                :elementStyle="styles"
                :dataClient="pagador"
                identifierID="500065432"
                :showCheckOption="checkRecurrente"
                labelCheckOption="Autorizo se realicen cobros de mis cuotas recurrentes a estas tarjetas"
                :showCheckAcceptConditions="checkAccept"
                :buttonText="botonTexto"
                :buttonAction="getTokenNiubiz()"
                :vuetifyStyle="vuetify"
            )
</template>

<script>
import FadeLoader from '@/components/loaders/FadeLoader'
import { PagoNiubiz } from 'is-payment-component-front'

export default {
  props: ['payment'],
  data () {
    return {
      // showLoader: true,
      session: {
        currency: 'PEN',
        // amount: parseFloat(33.03),
        amount: this.$store.state.common.montoPagar,
        // amount: parseFloat(this.$store.state.common.montoPagar),
        clientIP: '',
        merchantDefineData : {
          "MDD1": this.$store.state.common.objCliente.documentNumber,
          "MDD2": this.$store.state.common.objCliente.emailAddress,
          "MDD3": this.$store.state.common.objCliente.firstName
        }
      },
      niubizConfig: {
        sessionkey: '', // dato obtenido desde la API del backend
        channel: 'paycard' ,
        merchantid:  522591303,
       // merchantid: process.env.configNiubiz.comercioNiubiz, // código del comercio por producto TEST
        purchasenumber: '0780000001', // Ejemplo: Número de póliza, número de Venta, etc
        // amount: parseFloat(this.$store.state.common.montoPagar), // El precio a cobrar
        amount: this.$store.state.common.montoPagar,
        callbackurl: '', // {urlForGetToken}
        language: 'es', // ejemplo: es o en
        font: 'https://fonts.googleapis.com/css?family=Montserrat:400&display=swap',
        recurrentmaxamount: '0' // Máx. pago
      },
      styles: {
        base: {
            color: '#495057',
            fontWeight: 100,
            fontFamily: '"Montserrat", sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            placeholder: {
                color: '#c4c4c4'
            },
            autofill: {
                color: '#e39f48'
            }
        },
        invalid: {
            color: '#dc3545',
            '::placeholder': { color: '#FFCCA5' }
        }
      },
      vuetify: false, // si es verdadero mostrar elementos de VUETIFY sino BOOTSTRAP
      pagador: { // datos del cliente (tarjetahabiente)
          name: this.$store.state.common.objCliente.firstName,
          lastName: this.$store.state.common.objCliente.firstLastName,
          email:  this.$store.state.common.objCliente.emailAddress,
          alias: this.$store.state.common.objCliente.firstName,
          userBlockId: this.$store.state.common.objCliente.documentNumber
      },
      checkRecurrente: false, // para mostrar el check de 'pago recurrente'
      checkAccept: true, // para mostrar los tyc con el modal
      botonTexto: 'PAGAR $' + this.$store.state.common.montoPagar, // el texto del boton pagar
    }
  },
  mounted () {
    let self = this
    self.niubizConfig.sessionkey = ''
    
    self.$store.commit('payment/setSessionKey', '')
    this.$store.dispatch('payment/getSessionKey', self.session).then(respuesta => {
      let channelPay = (self.$store.state.common.channel === 'IBK') ? 'testvehicular/interbank/como-pagar' : (self.$store.state.common.channel === 'ITC')? 'testvehicular/intercorp/como-pagar' :'testvehicular/cotiza/como-pagar'
      // if (respuesta.code === '01') {
      //   self.niubizConfig.callbackurl = process.env.base + 'payment-api/api/v2/token?protocol=https&host='+process.env.url+'&path='+ channelPay
      // let channelPay = 'testvehicular/cotiza/como-pagar'
      if (respuesta.data.code === '01') {
        // self.niubizConfig.callbackurl = process.env.baseURL + 'payment-api/api/v2/token?protocol=https&host='+process.env.urlPago+'&path='+ channelPay
        self.niubizConfig.callbackurl = 'https://test.interseguro.pe/payment-api/api/v2/token?protocol=https&host=test.interseguro.pe/'+'&path='+ channelPay

        self.niubizConfig.sessionkey = respuesta.data.data.sessionKey
        // probando solo CULQI
        // setTimeout(function () {
        //   // ocultar el formulario de niubiz
        //   if (document.querySelectorAll("#inputFechaExpiracion")[0].children[0].children.length < 1) {
            
        //     self.$nuxt.$emit('show-payment',{
        //       payment: 'CULQI'
        //     })
        //   }
        // }, 12500)
        self.$nuxt.$emit('show-loader',{loader:false})
      } else {
        self.niubizConfig.sessionkey = ''
        // ocultar el formulario de niubiz
        self.$nuxt.$emit('show-payment',  {
          payment: 'CULQI'
        })
        self.$nuxt.$emit('show-loader',{loader:false})
      }
    }, res => {
      self.niubizConfig.sessionkey = ''
      // ocultar el formulario de niubiz
      self.$nuxt.$emit('show-payment',  {
        payment: 'CULQI'
      })
      self.$nuxt.$emit('show-loader',{loader:false})
    })
  },
  methods: {
    getTokenNiubiz () {
      console.log('method para pagar')
    }
  },
  mixins: [
    // validationMixin
  ],
  destroyed () {
    this.$nuxt.$emit('show-payment',  { payment: 'CULQI' })
  },
  components: {
    PagoNiubiz,
    'fade-loader': FadeLoader
  }
}
</script>

<style lang="scss">
            #inputTarjeta, #inputFechaExpiracion, #inputCvv {
              padding-top: 14px;
              padding-bottom: 13px;
              border: 1px solid #c4c4c4;
              input::placeholder {
                color: #333;
              }
            }
            #inputTarjeta {
              border-bottom: none!important;
              padding-left: .5rem;
            }
            #inputFechaExpiracion {
              // background-image: url('../../static/media/icons/calendario-gris.svg');
            }

            
          .form-payment {
            h6 { color: #333 }
            #inputTarjeta, #inputFechaExpiracion, #inputCvv {
              padding-top: 14px;
              padding-bottom: 13px;
              border: 1px solid #c4c4c4;
              input::placeholder {
                color: #333;
              }
          }
          }

          #pago  .form-payment #inputFechaExpiracion {
    background-image: url(/seguro-de-vida/_nuxt/img/calendario-gris.263c1f7.svg);
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: .6rem;
    background-size: 21px;
    padding-left: 2.5rem;
    border-right: 1px solid #c4c4c4;
    border-bottom: none;
}
#pago  .form-payment #inputCvv, #pago  .form-payment #inputFechaExpiracion, #pago  .form-payment #inputTarjeta {
    padding-top: 14px;
    padding-bottom: 13px;
    border: 1px solid #c4c4c4;
}
.btn-dark {
        border-color: #ea0c90 !important;
    background-color: #ea0c90 !important;
    height: 45px;
    padding: 0 58px;
}
@media (min-width: 768px){
#pago  .form-payment #inputFechaExpiracion {
    border-right: none;
    border-bottom: 1px solid #c4c4c4;
}
}
.custom-checkbox label:before {
    background-color: #fff;
    border-radius: 50%!important;
    border: 2px solid #0855c4;
    width: 1.2rem;
    height: 1.1rem;
}
@media (min-width: 768px){
.col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
}
}
</style>