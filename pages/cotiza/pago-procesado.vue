<template>
  <section class="pago-procesado">
    <b-container>
      <b-row class="justify-content-center  poliza-pago">
        <!-- <p v-if="this.endosoActivo == true" class="text-center">
          Tu póliza con endoso de cesión a favor de <strong>{{this.entidadFinanciera.name}}</strong> 
          se está procesando. Te la enviaremos por correo en las próximas horas.</p> -->        
        <b-col cols="12"  lg="6">
          <div class="poliza-card">
            <div>
              <img src="../../static/media/interseguroVehicular_v2/auto_poliza.png" alt="auto_poliza">
            </div>
            <div class="felicitaciones">
              <p class="titulo">¡Felicitaciones!</p>
              <p>Tu carro ya está protegido</p>
              <p>Nro. de póliza <strong>{{this.listaTransaccion.policyNumber}}</strong></p>
            </div>
            <div class="poliza-card__prima">
              <span>Prima Total</span> <br>
              <span>${{this.listaTransaccion.policyAmount||""}}</span>
            </div>
          </div>
        </b-col>
      </b-row>
        <b-row class="justify-content-center">
          <b-col cols="12" lg="6">
            <div class="pagoProcesado">
              <div class="card-pagoProcesado" style="padding-top: 0px;">
                <p class="resumen">RESUMEN DE COMPRA</p>
                <span>Recibirás tu póliza vehicular a : </span><br>
                <span class="email-resumen">{{this.$store.state.common.email||""}}</span>
              </div>
              <div class="card-pagoProcesado">
                <span class="titulo">Datos del Auto</span><br>
                <div class="item  marca  mt-2">
                  <span class="subtitulo">Marca/modelo</span><br>
                  <span>{{this.listaTransaccion.brand||""}} / {{this.listaTransaccion.model||""}} </span>
                </div>
                <div class="item  placa  mt-2">
                  <span class="subtitulo">Placa</span><br>
                  <span>{{this.listaTransaccion.plateNumber||""}}</span>
                </div>
                <div class="item  anio  mt-2">
                  <span class="subtitulo">Año</span><br>
                  <span>{{this.listaTransaccion.modelYear||""}}</span>
                </div>
              </div>

              <div class="card-pagoProcesado   mt-3">
                <span class="titulo">Resumen del seguro</span><br>
                <div class="item  inicio">
                  <span class="subtitulo">Inicio</span><br>
                  <span>{{this.listaTransaccion.fromDate||""}}</span>
                </div>
                <div class="item  fin">
                  <span class="subtitulo">Fin</span><br>
                  <span>{{this.listaTransaccion.toDate||""}}</span>
                </div>

                <div class="item  plan  d-none  d-md-inline-block">
                  <span class="titulo  d-md-none">Plan</span>
                  <span class="titulo2">Plan</span><br>
                  <template>
                      <div v-if="this.planSeleccionado == 4" class="plan-titulo">
                        <p class="roboTotal"><span>PLATA </span></p>
                      </div>
                      <div v-else-if="this.planSeleccionado == 6" class="plan-titulo">
                        <p class="semiFull"><span>ORO </span></p>
                      </div>
                      <div v-else-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" class="plan-titulo">
                        <p class="full"><span> BLACK </span></p>
                      </div>
                  </template>

                </div>
                <div class="item  cuota    d-none  d-md-inline-block">
                  <span class="titulo  d-md-none">Cuota y frecuencia</span>
                  <span class="titulo2 ">Cuota y frecuencia</span><br>
                  <span class="cuota-frecuencia" v-if="this.monto_pagar == 1 ">${{this.mensual}} Mensual (12 cuotas) </span>
                   <span class="cuota-frecuencia" v-else-if="this.monto_pagar == 2">${{this.trimestral}}Trimestral (4 cuotas) </span>
                   <span class="cuota-frecuencia" v-else-if="this.monto_pagar == 3 ">${{this.anual}}Anual (1 cuota) </span>
                   <span class="cuota-frecuencia" v-else-if="this.monto_pagar == 4">${{this.bianual}}Plan 2 años (1 cuota) </span>
                </div>

              </div>

              <div class="card-pagoProcesado   mt-3   d-flex  d-md-none" style="justify-content: space-between;">
                
                <div class="item  plan">
                  <span class="titulo">Plan</span><br>
                  <div class="plan-titulo">
                      <div v-if="this.planSeleccionado == 4" class="plan-titulo">
                        <p class="roboTotal"><span>PLATA </span></p>
                      </div>
                      <div v-else-if="this.planSeleccionado == 6" class="plan-titulo">
                        <p class="semiFull"><span>ORO </span></p>
                      </div>
                      <div v-else-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" class="plan-titulo">
                        <p class="full"><span> BLACK </span></p>
                      </div>
                  </div>
                </div>
                <div class="item  cuota">
                  <span class="titulo">Cuota y frecuencia</span><br>
                  <span class="cuota-text">
                    <label v-if="this.monto_pagar == 1 ">${{this.mensual}} Mensual (12 cuotas)</label>
                    <label v-else-if="this.monto_pagar == 2">${{this.trimestral}}Trimestral (4 cuotas)</label>
                    <label v-else-if="this.monto_pagar == 3 ">${{this.anual}}Anual (1 cuota)</label>
                    <label v-else-if="this.monto_pagar == 4">${{this.bianual}}Plan 2 años (1 cuota)</label>
                    </span>
                </div>
              </div>

              <div class="card-btnPago  mt-3">
                <a target="_blank" v-bind:href="urlpdf" class="resumen">
                  <img src="../../static/media/interseguroVehicular_v2/descargar.png" alt="descargar">
                  <span>Resumen de <br> Cobertura</span>
                </a>
                <a target="_blank" href="https://www.google.com/maps/d/u/1/viewer?mid=1AfrD9gLCIfdsjKM5WevQxeF4SstB4xbg&ll=-10.852255359016214%2C-76.098176665&z=6" class="talleres">Talleres afiliados</a>
              </div>

              <div class="comunicanos">
                <p class="mt-3">En unos minutos nos comunicaremos contigo vía whatsapp al número <strong>{{this.numeroTelefono}}</strong> para realizar la inspección de tu auto</p>
              </div>
            </div>
          <!-- <div class="" v-if="this.$store.state.common.placa01"> -->
            <div class="d-none">
              <div class="col-12  ">
                <div class="inspecciones  row">
                  <div class="col-12">
                    <span class="pendiente">
                      <img width="10" src="./../../static/media/interseguroVehicular_v2/campana.svg" alt="">
                      pendiente
                    </span>
                  </div>
                <div class="col-12  col-lg-6  d-flex  d-lg-none">
                  <div class="box-img">
                    <img class="inspecciones--img" src="./../../static/media/interseguroVehicular_v2/inspecciones.png" alt="">
                  </div>
                </div>
                <div class="col-12  col-lg-6 ">
                  <p class="inspecciones-vehicular">
                    Inspección Vehicular
                  </p>
                  <p>
                    Activa el 100% de tu inspección vehicular Hazlo a través del app, es fácil, seguro y rápido
                  </p>
                  <div class="box-btn">
                    <button @click="showModalNumeroCelular()">
                      Descargar
                    </button>
                  </div>
                  <div class="botones-app">
                    <div class="ios"  @click="showModalNumeroCelular()">
                        <img src="./../../static/media/img/root/tienda_ios.png" alt="">
                    </div>
                    <div class="google  ml-4"  @click="showModalNumeroCelular()">
                      <img src="./../../static/media/img/root/tienda_google.png" alt="">
                    </div>
                  </div>
                </div>

                <div class="col-12  col-lg-6  d-none  d-lg-flex">
                  <div class="box-img">
                    <img class="inspecciones--img" src="./../../static/media/interseguroVehicular_v2/inspecciones.png" alt="">
                  </div>
                </div>

                </div>
              </div>
            </div>

            <div class="comparte">
              <div class="titulo">
                <p class="pasa-la-voz"><span>¡Pasa la voz! </span><img src="../../static/media/interseguroVehicular_v2/redes.png" alt="redes"></p>
                <p>Comparte tu compra, asi tu familia y amigos tendrán la oportunidad de comprar su seguro vehicular a un súper precio</p>
                <div class="redes  mt-4">
                  <div class="redes__item">
                    <a class="enlace_item"  target="_blank" :href="urlCompartirFacebook" >
                      <img src="../../static/media/interseguroVehicular_v2/facebook_pago.png" width="25" alt="facebook_pago">
                      <span>Facebook</span>
                    </a>
                  </div>
                  <!-- <div class="redes__item">
                    <a class="enlace_item"  target="_blank" :href="urlCompartirWhatsApp" >
                      <img src="../../static/media/interseguroVehicular_v2/wapp_pago.png" width="25" alt="wapp_pago">
                      <span>Whatsapp</span>
                    </a>
                  </div> -->
                  <div class="redes__item">
                    <a class="enlace_item"  target="_blank" :href="urlCompartirTwitter" >
                      <img src="../../static/media/interseguroVehicular_v2/tweet_pago.png" width="25" alt="tweet_pago">
                      <span>Twitter</span>
                    </a>
                  </div>
                  <div class="redes__item">
                    <a class="enlace_item"  target="_blank" :href="urlCompartirFacebook" >
                      <img src="../../static/media/interseguroVehicular_v2/copiar_pago.png" width="25" alt="copiar_pago">
                      <span>Copiar</span>
                    </a>
                  </div>
                </div>
                <p class="mt-3">Si no te llegó la confirmación de tu compra, revisa la bandeja de SPAM o contáctanos a la <strong>Central de Atención al Cliente</strong> para poder ayudarte.</p>
              </div>
            </div>

            <div class="msj">
              <p></p>
            </div>
          </b-col>

        </b-row>
        <b-modal title="Bootstrap-Vue"
                hide-footer
                hide-header
                ref="modalNumeroCelular"
                id="modalNumeroCelular">
                <div class="modal-content modal-root">
                    
                    <div class="modal-body">
                    <div class="box-mensajeEnviado" v-bind:class="{mostrarMensajeEnviado : mostrarMensajeEnviado}">
                        <img class="check-enviado" src="./../../static/media/img/root/check.png" alt="">
                        <p>¡Listo! En breve recibirás el link de descarga al <span>{{this.inputNumeroCelular}}</span></p>
                    </div>
                        <img class="close-modal" src="./../../static/media/img/root/close.png" alt="" @click="hideModalNumeroCelular()">
                        <div class="box-img">
                        <img src="./../../static/media/img/root/descarga_modal.png" alt="">
                        </div>
                        <div class="box-titulo">
                        <p class="titulo">Ahora nuestro Seguro Vehicular en tu celular</p>
                        </div>
                        <div class="box-input">
                        <span>+51</span><b-form-input class="telefono" type="tel" maxlength="9" v-model="inputNumeroCelular" :placeholder="placeholderNumeroCelular"></b-form-input>
                        <span class="enviar" @click="enviarNumeroCelular()">Descargar</span>
                        </div>
                        <div class="condiciones">
                        <!-- <span>Al continuar acepto las <span class="enlaceTerminosCondiciones" @click="showModalTerminosCondiciones()">Condiciones de Uso y Política de Privacidad.</span></span> -->
                        </div>
                    </div>
                </div>
            </b-modal>
    </b-container>
  </section>
</template>
<script>
export default {
  layout: "InterseguroPantallaPago",
  data() {
    return {
      mostrarMensajeEnviado: false,
      inputNumeroCelular: '',
      placeholderNumeroCelular: 'Tu teléfono',

      emisionROOT: false,
      itemElegido: {},
      numeroTelefono:'',
      mensual:'',
      trimestral:'',
      anual:'',
      bianual:'',
      monto_pagar:'',
      cobertura_is:{
        transactionId:'',
        plan:"",
        content_ids:""
      },
      emailUsuario: '',
      planSeleccionado: '',
      endosoActivo: false,
      entidadFinanciera: {},
      urlCompartir: '',
      urlCompartirFacebook: "",
      urlCompartirWhatsApp: "",
      urlCompartirTwitter: "",
      urlpdf: "",
      Plantilla: "",
      isEnable: false,
      isEnableURL: true,
      objVehicleSelect: {
        riesgo: ''
      },
      objPagoProcesado: {},
      documentoLocal: "",
      listaTransaccion: {
        policyNumber: "",
        firstName: "",
        brand: "",
        model: "",
        modelYear: "",
        commercialValue: "",
        useType: "",
        fromDate: "",
        toDate: "",
        policyAmount: "",
        plateNumber: "",
        applyFrequencyName: ""
      }
    };
  },
  
  computed: {},
  created() {
    // console.log("====================>",this.$store.state.common.plateNumber)
    // let placa01 = this.$store.state.common.plateNumber
    // console.log("====================>",placa01)
    // if (placa01!= null) {
    //   if (placa01.substr(5,1) == 0 || placa01.substr(5,1) == 1) {
    //     this.$store.commit('common/setPlaca01', true)
    //     console.log("TRUE")  
    //   }else{
    //     console.log("FALSE")
    //     this.$store.commit('common/setPlaca01', false)
    //   }
    // }
  },
  methods: {
    descargarApp() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
      {
          window.location.replace("https://apps.apple.com/pe/app/interseguro-vehicular/id1517921041?l=en");
          return 'iOS';
      }
      else if( userAgent.match( /Android/i ) )
      {
      window.location.replace("https://play.google.com/store/apps/details?id=pe.interseguro.intersegurovehicular&hl=es_PE");
          return 'Android';
      }
      else
      {
      
      return 'unknown'; 
      }
  },
  hideModalNumeroCelular(){

  },
    enviarNumeroCelular(){
          if (this.inputNumeroCelular.length == 9) {
            this.$store.dispatch('common/enviarMsjCelular',this.inputNumeroCelular).then((res)=>{
            if (res.data.code == 0) {
                this.mostrarMensajeEnviado = true
                setTimeout(() => {
                  this.mostrarMensajeEnviado = false
                  this.$refs.modalNumeroCelular.hide();
                  this.inputNumeroCelular = ''
                }, 2000);
            }else{
                this.$swal({
                        title: "Ok!",
                        text: "No logramos enviar el mensaje, vuelve a intenarlo as tarde",
                        type: "warning",
                        showCancelButton: false,
                        confirmButtonColor: "#2177CC",
                        confirmButtonText: "OK"
                    });
              this.mostrarMensajeEnviado = false
              this.inputNumeroCelular = ''
            }
          })
          }else{
            this.$swal({
              title: "Ok!",
              text: "Ingrese un número válido",
              type: "warning",
              showCancelButton: false,
              confirmButtonColor: "#2177CC",
              confirmButtonText: "OK"
            })
            this.inputNumeroCelular = ''
          }
          
        },
    showModalTerminosCondiciones(){

    },
    showModalNumeroCelular() {
        this.$refs.modalNumeroCelular.show();
    },
   PaginaVistaNuevoProducto() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "pagina_vista",
            "page-url": "/vehicular-app/cotiza/pago-procesado/",
            "page-title": "pago procesado",
        });
    },
    cotizador_datalayer(evento,step_valor){
      this.cobertura_is.content_ids =  this.$store.state.common.code_sku
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
          event: evento,
          transactionId: step_valor,
          product: this.cobertura_is,
      });
    },
    onCopy: function (e) {      
      this.isEnableURL = false;
      var self = this;
      setTimeout(function() {
        self.isEnableURL = true;
      }, 1800);    
    },
    onSubmit() {
      this.$router.push({ name: "/" });
    },
    copyURL(event) {     
      e.preventDefault();
      this.isEnableURL = true;
      var copyText  = document.getElementById("copyText");
      copyText.select();
      document.execCommand("copy");
      var self = this;
      setTimeout(function() {
        self.isEnableURL = true;
      }, 1800);
    },
    

    PaginaVista() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pagina_vista",
        "page-url": "/vehicular/cotiza/pago-procesado",
        "page-title": "Pago Procesado"
      });
    },
    pagoProcesadoDataLayer() {
    }
  },
  mounted: function() {
    // this.showModalNumeroCelular()

    localStorage.setItem('activoAgora', false)

    // this.numeroTelefono = this.$store.state.common.numeroTelefono 
    // this.cobertura_is = this.$store.state.common.objectDigodat
    // this.cobertura_is.plan = this.$store.state.common.frecuenciaPago

    // this.urlCompartirFacebook = "https://www.facebook.com/sharer/sharer.php?u="+process.env.URL+"vehicular/"+localStorage.getItem("documentoLocal")+"?utm_source=facebook.com%26utm_medium=share%26utm_campaign=referidos"
    // this.urlCompartirWhatsApp = "https://api.whatsapp.com/send?text="+process.env.URL+"vehicular/"+localStorage.getItem("documentoLocal")+"?utm_source%3Dwhatsapp%26utm_medium%3Dshare%26utm_campaign%3Dreferidos"
    // this.urlCompartirTwitter = "http://twitter.com/share?text=¡Acabo de comprar mi Seguro Vehicular en menos de 3 minutos y al mejor precio del mercado! Tú también cómpralo haciendo clic aquí: &url="+process.env.URL+"vehicular/"+this.$store.state.common.documentoLocal + "?utm_source=twitter.com%26utm_medium=share%26utm_campaign=referidos"
    // this.urlCompartir = process.env.URL+"vehicular/"+this.documentoLocal+"?utm_source=direct&utm_medium=share&utm_campaign=referidos"
    // this.urlpdf = require("./../../static/media/documentos/resumenCoberturas.pdf")
    // this.Plantilla = require("./../../static/media/documentos/Plantilla_Endoso_de_Cesion.pdf")
    // if (document.location.hostname == "www.interseguro.pe"){
    //   window.criteo_q = window.criteo_q || [];
    //   window.criteo_q.push(
    //     { event: "setAccount", account: 64802}, // You should never update this line
    //     { event: "setEmail", email: localStorage.getItem("email") }, // Can be an empty string 
    //     { event: "setSiteType", type: /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d"},
    //     { event: "trackTransaction", id: this.listaTransaccion.policyNumber, item: [{id: "Pago procesado", price: "", quantity: 1 }]}
    //   )
    // }
    // if(this.$store.state.common.nuevoProducto){
    //     this.PaginaVistaNuevoProducto();
    // }else{
    //     this.PaginaVista();
    // }
    // this.emisionROOT = this.$store.state.common.emisionROOT


    // let objJWT = JSON.parse(localStorage.getItem("jwt"))
    // if (objJWT == null || objJWT == undefined) {
    //     this.$nuxt.$router.push("/")
    // }else{
    //     let objJWT = JSON.parse(localStorage.getItem("jwt"))
    //     this.itemElegido = objJWT.common.itemElegido
    //     this.planSeleccionado = objJWT.common.planSeleccionado
    //     this.listCotizacion = objJWT.common.listaCotizacion
    //     this.monto_pagar = objJWT.common.frecuenciaPago
    //     this.mensual = objJWT.common.listaCotizacion.policy.monthly
    //     this.trimestral = objJWT.common.listaCotizacion.policy.quarterly
    //     this.anual = objJWT.common.listaCotizacion.policy.annual
    //     this.bianual = objJWT.common.listaCotizacion.policy.twoYears
    // }
    
    
    // this.entidadFinanciera = JSON.parse(localStorage.getItem("financialInstitution")) != null ? JSON.parse(localStorage.getItem("financialInstitution")) : {}    
    // if (this.entidadFinanciera.id === undefined  || this.entidadFinanciera.id === null || this.entidadFinanciera.id === 'null' ) {   
    //   this.endosoActivo = false    
    // }else{            
    //   this.endosoActivo = true
    // }
            
    // this.cotizador_datalayer('transaction',this.$store.state.common.policy_id)
    // this.$store.dispatch('common/getPagoProcesado')
    //   .then((res) =>{
    //     this.listaTransaccion = res.data.body

    //     this.$store.dispatch('common/enviarMailingConfirmacion', this.listaTransaccion.policyNumber)
    //     window.dataLayer = window.dataLayer || [];
    //     window.dataLayer.push({
    //       event: "EEtransaction",
    //       ecommerce: {
    //         purchase: {
    //           actionField: {
    //             id: this.$store.state.common.policy_id, // ID de la transaccion. Es obligatorio. No puede ser DNI o Datos Personal del CLiente
    //             revenue: res.data.body.policyAmount // Total de la venta. Aqui tiene
    //           },
    //           products: [
    //             {
    //               id: "SV001", // ID del Producto
    //               name: "Seguro Vehicular", // nombre de producto
    //               price: this.listaTransaccion.policyAmount, // precio final
    //               brand: this.listaTransaccion.brand, // marca de vehiculo
    //               category: this.$store.state.common.listaCotizacion.policy.risk, // Reisgo del Vehiculo
    //               variant: this.listaTransaccion.model, // modelo del vehiculo
    //               quantity: 1
    //             }
    //           ]
    //         }
    //       }
    //     })
    //     // setTimeout(() => {
    //     //   this.$store.commit('common/resetState')
    //     // }, 10000);
    //   })
    
  },
  destroyed() {
    // if (process.browser) {
    //   this.$store.commit('common/resetState')
    // }
  }
};
</script>
<style lang="scss" scoped>
.inspecciones{
  background: #ffffff;
  padding-top: 12px;
  padding-bottom: 12px;
  .pendiente{
    color: #FF8000;
    font-family: 'Omnes Medium';
    border: 1px solid #DC6F00;
    border-radius: 4px;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 103px;
    img{
      margin-right: 4px;
    }
  }
  &--img{
    width: 100%;
    max-width: 260px;
    margin: auto;
  }
  .inspecciones-vehicular{
    margin-top: 12px;
    margin-bottom: 12px;
    font-family: 'Omnes Medium';
    font-size: 20px;
  }
  p{
    color: #454A6C;
  }
  .box-btn{
    display: flex;
    justify-content: center;
    button{
      background: #EA0B90;
      border: none;
      color: white;
      height: 38px;
      width: 140px;
      border-radius: 6px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
  .botones-app{
    display: flex;
    justify-content: center;
    img{
      width: 77px;
    }
  }
}
#modalNumeroCelular{
    .telefono{
      border: none;
      border-bottom: 1px solid #A1A1A1;
      border-radius: 0;
      max-width: 180px;
      margin-right: 40px;
    }
  .modal-footer{
    justify-content: center;
  }
  .img-close-modal{
        position: absolute;
        top: -38px;
        right: -38px;
        cursor: pointer;
        width: 50px;
    }
  .condiciones{
    margin-top: 32px;
    .enlaceTerminosCondiciones{
      color: #0854c4;
      cursor: pointer;
    }
      span{
         font-family: 'Omnes Medium';
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.21;
          letter-spacing: normal;
          text-align: center;
          color: #656565;
      }
      a{
        color: #0854c4
      }
    }
  .close-modal{
    position: absolute;
    top: -59px;
    right: -43px;
    height: 61px;
    cursor: pointer;
  }
  .box-mensajeEnviado{
    opacity: 0;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .check-enviado{
      height: 63px;
    }
    p{
      font-family: 'Omnes Regular';
      font-size: 30px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.27;
      letter-spacing: normal;
      text-align: center;
      color: #0854c4;
      margin-top: 34px;
    }
  }
  .mostrarMensajeEnviado{
    display: flex;
    opacity: 1;
  }
  .modal-body{
    position: relative;
  }
  .modal-content{
    border: none;
  }
  .box-img{
    img{
      width: 94px;
    }
  }
  .box-condiciones{
    a span{
      font-family: 'Omnes Regular';
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.21;
      letter-spacing: normal;
      text-align: center;
      color: #0854c4;
    }
  }
  .box-titulo{
    .titulo{
      font-family: 'Omnes Regular';
      font-size: 18px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #0854c4;
      margin: 12px 0;
    }
  }
  .box-input{
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    .input{
      width: 200px;
      height: 43px;
      border-radius: 7px;
      border: solid 0.2px #a7a7a7;

    }
    .enviar{
      display: inline-block;
      width: 180px;
      height: 38px;
      border-radius: 7px;
      background-color: #ea0f90;
      font-size: 18px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 38px;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
      font-family: 'Omnes Regular';
    }
  }
}
  .box-mensajeEnviado{
    opacity: 0;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .check-enviado{
      height: 63px;
    }
    p{
      font-family: 'Omnes Regular';
      font-size: 30px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.27;
      letter-spacing: normal;
      text-align: center;
      color: #0854c4;
      margin-top: 34px;
    }
  }
  .mostrarMensajeEnviado{
    display: flex;
    opacity: 1;
  }
  .pago-procesado{
    background: #f0f2f6;
    color: #4a4a4a;
    padding-top: 128px;
  }
  .card-btnPago{
    display: flex;
    align-items: center;
    justify-content: space-around;
    .resumen{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 48.3px;
      border-radius: 7.7px;
      background-color: #ea0c90;
      color: white;
      img{
        width: 20px;
      }
      span{
        margin-left: 6px;
      }
    }
    .talleres{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 48.3px;
      border-radius: 7px;
      background-color: #00adee;
      color: white;
    }
    .comunicanos{
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.21;
      letter-spacing: normal;
      margin-top: 12px;
    }
  }
  .comparte{
    background: white;
    padding: 16px;
    position: relative;
    border-radius: 8px 8px 0 0;
    margin-top: 24px;
    .pasa-la-voz{
      display: flex;
      align-items: center;
      img{
        width: 30px;
        margin-left: 12px;
      }
    }
    .redes{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 12px;
      
      &__item{
        margin-right: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .enlace_item{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        span{
          font-size: 12px;
        }
      }
      
    }
  }
  .msj{
    padding: 16px;
  }
  p{
    margin: 0;
    padding: 0;
  }
  .poliza-pago{
    position: relative;
    height: 134px;
    background-image: linear-gradient(to bottom, #0062ee, #00adee);
    p{
      color: white;
    }  
  }
  .poliza-card{
    display: flex;
    align-items: center;
    height: 100%;
    &__prima{
      background-color: #ea0c90;
      position: absolute;
      right: 8px;
      top: 38px;
      color: white;
      padding: 10px 5px;
      border-radius: 8px 0 8px 0;
      padding-right: 8px;
      padding-left: 8px;
      span{
        display: inline-block;
        width: 100%;
        text-align: right;
      }
    }
    img{
      width: 64px;
    }
  }

  .pagoProcesado{
    background: white;
    padding: 16px;
    position: relative;
    top: -16px;
    border-radius: 8px 8px 0 0;
    
    .plan-titulo{
      padding-top: 9px;
      p{
        margin-top: 14px;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.3px;
        text-align: center;
        color: #ffffff;
        margin: 0;
        padding: 2px 14px;
        line-height: 14px;
        width: 90%;
        span{
          font-size: 14px;
        }
      }
    }
    .roboTotal{
      background: #b1b1b1;
    }
    .semiFull{
      background: #e6ac38;
      width: 100% !important;
    }
    .full{
      background: #27362d;
    }
    .titulo{
      background: #efefef;
      padding: 4px 16px;
      border-radius: 6px;
    }
    .subtitulo{
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #0754c4;
    }
    .titulo2{
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #0754c4;
    }
    .card-pagoProcesado{
      border-bottom: solid 1px #efefef;
      padding-top: 9px;
      .placa, .anio, .inicio, .fin, .plan, .cuota{
        width: 45%;
        display: inline-block;
      }      
      .plan{
        width: 35%;
      }
      .cuota{
        width: 165px;
        .cuota-frecuencia{
          display: inline-block;
        }
        .cuota-text{
          display: inline-block;
          margin-top: 20px;
          font-size: 15px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #0754c4;
          // padding-left: 4px;
        }
      }
      .resumen{
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 1px;
        color: #0754c4;
      }
      .email-resumen{
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: normal;
        color: #0754c4;
      }
    }
  }
  @media (min-width: 768px) {
    .pagoProcesado{
      border-radius:  0;
      .plan-titulo{
        padding-top: 0;
      }
      .inicio{
        padding-top: 12px;
      }
      .card-btnPago{
        justify-content: flex-start;
        .resumen{
          margin-right: 24px;
        }
      }
    }
      .card-pagoProcesado{
        .item{
          width: auto !important;
          display: inline-block;
          padding-right: 24px;
        }        
      }
      .poliza-pago{
        background: none;  
      }
      .poliza-card{
        background-image: linear-gradient(to bottom, #0062ee, #00adee);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        :nth-child(2){
          padding-right: 16px;
        }
        &__prima{
          position: relative;
          top: 0;
          span{
            font-size: 18px;
          }
        }
        img{
          width: 64px;
          margin-right: 12px;
        }
      }
      .comparte{
        .redes{
          justify-content: flex-start;
        }
      }
  }

  @media (min-width: 1024px) {
    .pago-procesado{
    // padding-top: 65px;
    padding-top: 110px;
  }
  }
  @media (min-width: 1200px) {
    .card-pagoProcesado .item{
      padding-right: 4px;
    }
    .poliza-card{
      p{
        font-size: 18px;
      }
      p.titulo{
        font-size: 22px;
      }
      img{
        width: 80px;
      }
    }
  }
  @media (min-width: 1366px) {
    .card-pagoProcesado .item{
      padding-right: 8px;
    }
  }
</style>
