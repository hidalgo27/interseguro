<template>
  <section class="pago-procesado">
    <b-container fluid>
      <b-row class="banner text-center" align-v="center">
        <b-col cols="12" class="d-none d-lg-block">
          <p>
            <img src="../../static/media/img/pago-procesado/vehiculo.svg" alt="descargar" style="margin-right:10px" >
            <span class="text-primario">¡Felicitaciones! </span><span class="text-secundario">Tu carro ya está protegido</span>
          </p>
        </b-col>
        <b-col cols="12" class="d-lg-none">
          <p>
            <span class="text-secundario">¡Felicitaciones! Tu carro ya está protegido</span>
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="text-center">
        <b-col cols="12" class="titulo">
          <p>Resumen de compra</p>
        </b-col>
        <b-col cols="12" class="sub-titulo">
          <p>NRO. DE PÓLIZA {{this.listaTransaccion.policyNumber}}</p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col class="body-resumen" cols="12" sm="12" md="12" lg="8" xl="8">
          <b-row class="resumen-row">
            <b-col class="label" cols="6">
              <p>MARCA / MODELO</p>
            </b-col>
            <b-col class="datos" cols="6">
              <span>{{this.listaTransaccion.brand||""}} / {{this.listaTransaccion.model||""}} </span>
            </b-col>
          </b-row>
          <b-row class="resumen-row">
            <b-col class="label" cols="6">
              <p>PLACA</p>
            </b-col>
            <b-col class="datos" cols="6">
              <span>{{this.listaTransaccion.plateNumber||""}}</span>
            </b-col>
          </b-row>
          <b-row class="resumen-row">
            <b-col class="label" cols="6">
              <p>AÑO</p>
            </b-col>
            <b-col class="datos" cols="6">
              <span>{{this.listaTransaccion.modelYear||""}}</span>
            </b-col>
          </b-row>
          <b-row class="resumen-row2">
            <b-col class="label" cols="6">
              <p>FECHA DE LA COBERTURA</p>
            </b-col>
            <b-col class="datos2" cols="6">
              <span>{{this.listaTransaccion.fromDate||""}} </span>  hasta el  <span> {{this.listaTransaccion.toDate||""}}</span>
            </b-col>
          </b-row>
          <b-row class="resumen-row2">
            <b-col class="label" cols="6">
              <p>PLAN</p>
            </b-col>
            <b-col class="datos2" cols="6">
              <template>
                  <div v-if="this.planSeleccionado == 4" >
                    <p class="roboTotal"><span> Básico: Protección contra Robos </span></p>
                  </div>
                  <div v-else-if="this.planSeleccionado == 6" >
                    <p class="semiFull"><span> Intermedio: Protección contra Accidentes </span></p>
                  </div>
                  <div v-else-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" >
                    <p class="full"><span> Full: Protección Total </span></p>
                  </div>
              </template>
            </b-col>
          </b-row>
          <b-row class="resumen-row2">
            <b-col class="label" cols="6">
              <p>MONTO Y FRECUENCIA</p>
            </b-col>
            <b-col class="datos2" cols="6">
              <span class="cuota-frecuencia" v-if="this.monto_pagar == 1 ">${{this.mensual}} Mensual (12 cuotas) </span>
              <span class="cuota-frecuencia" v-else-if="this.monto_pagar == 2">${{this.trimestral}}Trimestral (4 cuotas) </span>
              <span class="cuota-frecuencia" v-else-if="this.monto_pagar == 3 ">${{this.anual}}Anual (1 cuota) </span>
              <span class="cuota-frecuencia" v-else-if="this.monto_pagar == 4">${{this.bianual}}Plan 2 años (1 cuota) </span>
            </b-col>
          </b-row>
          <b-row class="email-row text-center">
            <b-col>
              <p>
                <span class="text-email">Recibirás tu póliza vehicular a </span>
                <span class="email">{{this.$store.state.common.objCliente.emailAddress}}</span><span class="text-email">, </span><br>
                <span class="text-email">también puedes descargar un resumen aquí:</span>
              </p>
            </b-col>
          </b-row>
          <b-row class="custom-row">
            <b-col cols="12" sm="12" md="12" lg="6" xl="6" class="pt-2">
              <b-row class="text-center" align-h="center">
                <b-col cols="11">
                  <a target="_blank" v-bind:href="urlpdf" >
                    <b-button class="btn-descargar">
                      <img src="../../static/media/img/pago-procesado/descargar.svg" alt="descargar"><span style="padding-left:5px">Descargar resumen de la póliza</span>
                    </b-button>
                  </a> 
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" sm="12" md="12" lg="6" xl="6" class="pt-2">
              <b-row class="text-center" align-h="center">
                <b-col cols="11">
                  <a target="_blank" 
                  href="https://www.interseguro.pe/vehicular/resources/Talleres_afiliados.pdf" 
                  class="talleres">
                    <b-button class="btn-talleres">Ver talleres afiliados</b-button>
                  </a>                  
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row class="custom-row" align-h="center">            
            <b-col cols="12" sm="12" md="12" lg="10" xl="10" class="contacto"> 
              <b-row align-v="center">
                <b-col cols="2">
                  <img src="../../static/media/img/pago-procesado/phone.svg" alt="descargar" style="margin-right:10px">
                </b-col>
                <b-col cols="10">
                  <p>                
                    <span class="text">
                      Descarga nuestra APP para que puedas realizar la inspección de tu auto  
                    </span>
                    <!-- <span class="text-numero">
                      {{this.$store.state.common.objCliente.phoneNumber}}
                    </span>
                    <span class="text">para realizar la inspección de tu auto</span> -->
                  </p>
                </b-col>              
              </b-row> 
            </b-col>
          </b-row>
          <!-- <b-row class="custom-row" align-h="center">
            <b-col cols="12" class="vale d-none d-lg-block">
              <img src="../../static/media/img/pago-procesado/banner-vale.png" alt="descargar">
            </b-col>
            <b-col cols="12" class="vale d-lg-none">
              <img src="../../static/media/img/pago-procesado/banner-vale-mobile.png" alt="descargar">
            </b-col>
          </b-row> -->
          <b-row class="custom-row" align-h="center">
            <b-col cols="12" class="confirmacion d-none d-lg-block" >
              <p class="text-center">
                Si no te llego la confirmación de tu compra, revisa la bandeja de SPAM o contáctanos a la Central de Atención al Cliente para poder ayudarte.
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-modal title="Bootstrap-Vue"
          hide-footer
          hide-header
          ref="modalNumeroCelular"
          id="modalNumeroCelular">
          <div class="modal-content modal-root">
              
              <div class="d-none  d-lg-block">
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
        <b-modal  title="Bootstrap-Vue"
          hide-footer
          hide-header
          ref="modalNumeroCelular2"
          id="modalNumeroCelular2">
          <div class="modal-content modal-root" style="border: none;">
            <div class="molde-celular d-flex ">
                <img style="margin-top: 38px;" src="./../../static/media/appPagoProcesado/icon.PNG" alt="">
                <p>{{this.$store.state.common.objCliente.firstName}},Bienvenido a tu <br> Seguro Vehicular</p>
                <br>
                <p>
                  Para comenzar debes <br>
                  <span>realizar la inspeccion vehicular,</span> <br>
                  fácil y rápida desde el app.
                </p>
                <div class="box-input  mt-5   d-block  d-lg-none">
                  <span class="enviar" @click="descargarApp()">Descargar</span>
                </div>
                <div class="box-input  mt-5  d-none  d-lg-block">
                  <span class="enviar" @click="showModalNumeroCelular()">Descargar</span>
                </div>
                <p class="inspecciones-detalle">
                  La inspección es un proceso <br> obligatorio para activar el 100% de tu <br> Seguro Vehicular
                </p>
              </div>
          </div>
        </b-modal>
    </b-container>
    
  </section>
</template>
<script>
export default {
  layout: "InterseguroFlujoNew",
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
    console.log("====================>",this.$store.state.common.plateNumber)
    let placa01 = this.$store.state.common.plateNumber
    console.log("====================>",placa01)
    if (placa01!= null) {
      if (placa01.substr(5,1) == 0 || placa01.substr(5,1) == 1 || placa01.substr(5,1) == 2 || placa01.substr(5,1) == 3 || placa01.substr(5,1) == 4 || placa01.substr(5,1) == 5 || placa01.substr(5,1) == 6 || placa01.substr(5,1) == 7 || placa01.substr(5,1) == 8 || placa01.substr(5,1) == 9) {
        this.$store.commit('common/setPlaca01', true)
        console.log("TRUE")  
      }else{
        console.log("FALSE")
        this.$store.commit('common/setPlaca01', false)
      }
    }
  },
  methods: {
    descargarApp() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
      {
          // window.location.replace("https://apps.apple.com/pe/app/interseguro-vehicular/id1517921041?l=en");
          // return 'iOS';
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
      $nuxt.$emit("bv::hide::modal", "modalNumeroCelular");
    },
    hideModalNumeroCelular2(){
      $nuxt.$emit("bv::hide::modal", "modalNumeroCelular2");
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
      this.hideModalNumeroCelular2()
      this.$refs.modalNumeroCelular.show();
    },
    showModalNumeroCelular2() {
        this.$refs.modalNumeroCelular2.show();
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
    if (this.$store.state.common.placa01) {
      this.showModalNumeroCelular2()
    }

    localStorage.setItem('activoAgora', false)

    this.numeroTelefono = this.$store.state.common.numeroTelefono 
    this.cobertura_is = this.$store.state.common.objectDigodat
    this.cobertura_is.plan = this.$store.state.common.frecuenciaPago

    this.urlCompartirFacebook = "https://www.facebook.com/sharer/sharer.php?u="+process.env.URL+"vehicular/"+localStorage.getItem("documentoLocal")+"?utm_source=facebook.com%26utm_medium=share%26utm_campaign=referidos"
    this.urlCompartirWhatsApp = "https://api.whatsapp.com/send?text="+process.env.URL+"vehicular/"+localStorage.getItem("documentoLocal")+"?utm_source%3Dwhatsapp%26utm_medium%3Dshare%26utm_campaign%3Dreferidos"
    this.urlCompartirTwitter = "http://twitter.com/share?text=¡Acabo de comprar mi Seguro Vehicular en menos de 3 minutos y al mejor precio del mercado! Tú también cómpralo haciendo clic aquí: &url="+process.env.URL+"vehicular/"+this.$store.state.common.documentoLocal + "?utm_source=twitter.com%26utm_medium=share%26utm_campaign=referidos"
    this.urlCompartir = process.env.URL+"vehicular/"+this.documentoLocal+"?utm_source=direct&utm_medium=share&utm_campaign=referidos"
    this.urlpdf = require("./../../static/media/documentos/resumenDeCoberturas.pdf")
    this.Plantilla = require("./../../static/media/documentos/Plantilla_Endoso_de_Cesion.pdf")
    if (document.location.hostname == "www.interseguro.pe"){
      window.criteo_q = window.criteo_q || [];
      window.criteo_q.push(
        { event: "setAccount", account: 64802}, // You should never update this line
        { event: "setEmail", email: localStorage.getItem("email") }, // Can be an empty string 
        { event: "setSiteType", type: /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d"},
        { event: "trackTransaction", id: this.listaTransaccion.policyNumber, item: [{id: "Pago procesado", price: "", quantity: 1 }]}
      )
    }
    if(this.$store.state.common.nuevoProducto){
        this.PaginaVistaNuevoProducto();
    }else{
        this.PaginaVista();
    }
    this.emisionROOT = this.$store.state.common.emisionROOT


    let objJWT = JSON.parse(localStorage.getItem("jwt"))
    if (objJWT == null || objJWT == undefined) {
        this.$nuxt.$router.push("/")
    }else{
        let objJWT = JSON.parse(localStorage.getItem("jwt"))
        this.itemElegido = objJWT.common.itemElegido
        this.planSeleccionado = objJWT.common.planSeleccionado
        this.listCotizacion = objJWT.common.listaCotizacion
        this.monto_pagar = objJWT.common.frecuenciaPago
        this.mensual = objJWT.common.listaCotizacion.policy.monthly
        this.trimestral = objJWT.common.listaCotizacion.policy.quarterly
        this.anual = objJWT.common.listaCotizacion.policy.annual
        this.bianual = objJWT.common.listaCotizacion.policy.twoYears
    }
    
    
    this.entidadFinanciera = JSON.parse(localStorage.getItem("financialInstitution")) != null ? JSON.parse(localStorage.getItem("financialInstitution")) : {}    
    if (this.entidadFinanciera.id === undefined  || this.entidadFinanciera.id === null || this.entidadFinanciera.id === 'null' ) {   
      this.endosoActivo = false    
    }else{            
      this.endosoActivo = true
    }
            
    this.cotizador_datalayer('transaction',this.$store.state.common.policy_id)
    this.$store.dispatch('common/getPagoProcesado')
      .then((res) =>{
        this.listaTransaccion = res.data.body

        this.$store.dispatch('common/enviarMailingConfirmacion', this.listaTransaccion.policyNumber)
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "EEtransaction",
          ecommerce: {
            purchase: {
              actionField: {
                id: this.$store.state.common.policy_id, // ID de la transaccion. Es obligatorio. No puede ser DNI o Datos Personal del CLiente
                revenue: res.data.body.policyAmount // Total de la venta. Aqui tiene
              },
              products: [
                {
                  id: "SV001", // ID del Producto
                  name: "Seguro Vehicular", // nombre de producto
                  price: this.listaTransaccion.policyAmount, // precio final
                  brand: this.listaTransaccion.brand, // marca de vehiculo
                  category: this.$store.state.common.listaCotizacion.policy.risk, // Reisgo del Vehiculo
                  variant: this.listaTransaccion.model, // modelo del vehiculo
                  quantity: 1
                }
              ]
            }
          }
        })
        // setTimeout(() => {
        //   this.$store.commit('common/resetState')
        // }, 10000);
      })
    
  },
  destroyed() {
    // if (process.browser) {
    //   this.$store.commit('common/resetState')
    // }
  }
};
</script>
<style lang="scss" scoped>
  #modalNumeroCelular, #modalNumeroCelular2{
    .modal-body{
      padding-bottom: 0;
    }
    .inspecciones-detalle{
      color: #454a6c85;
      font-size: 15px;
      line-height: 17px;
      margin-top: 24px;
      padding-bottom: 28px;
    }
    .modal-content{
      background: transparent;
      
    }
  }
  .molde-celular{
    background: url('./../../static/media/appPagoProcesado/model-celular.png');
    background-repeat: no-repeat;
    background-position: top;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
    p{
      color: #454A6C;
      font-size: 18px;
      text-align: center;
      line-height: 24px;
    }
    span{
      color: #0754c4;
    }
  }
  .close-modal{
    position: absolute;
    top: -59px;
    right: -43px;
    height: 61px;
    cursor: pointer;
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
  
  @media (max-width: 767.9px) {
    .pago-procesado{
      padding-top: 60px;
      padding-bottom: 100px;
      .banner{
        height: 38px;
        background: #0855C4 0% 0% no-repeat padding-box;
        opacity: 1;
        p{
          color: #FFFFFF;
          font-size: 18px;
        }
        .text-principal{          
          font-family: 'Omnes Medium';
        }
        .text-secundario{
          font-family: 'Omnes Regular';
        }
      }
      .titulo{
        font-family: 'Omnes Regular';
        font-size: 20px;
        padding-top: 25px;
        padding-bottom: 10px;
      }
      .sub-titulo{
        font-family: 'Omnes Regular';
        font-size: 13px;
        padding-bottom: 25px;
      }
      .body-resumen{
        padding-left: 30px;
        padding-right: 30px;
        .resumen-row{
          height: 40px;
          background: #eef3fb;
          border: 1px solid #EDF3FB;
          border-radius: 3px;
          margin-bottom: 5px;
          font-family: 'Omnes Medium';
          text-transform: uppercase;
          
        }
        .resumen-row2{
          height: 40px;
          background: #eaf9ff;
          border: 1px solid #EDF3FB;
          border-radius: 3px;
          margin-bottom: 5px;
          font-family: 'Omnes Medium';          
        }
        .label{
          font-size: 13px;
          color: #333333;
          align-self: center;
          text-transform: uppercase;
        }
        .datos{
          font-size: 13px;
          color: #0855C4;
          align-self: center;
          text-align: right;
          text-transform: uppercase;
        }
        .datos2{
          font-size: 13px;
          color: #0855C4;
          align-self: center;
          text-align: right;
          text-transform: none;
        }
        .email-row{
          padding-top: 20px;
          font-size: 16px;
          .text-email{
            font-family: 'Omnes Regular';
            color: #8F93B2;
          }
          .email{
            font-family: 'Omnes Medium';
            color: #383C5A;
          }
        }
        .custom-row{
          padding-top: 25px;
          .btn-descargar{
            height: 52px;
            width: 100%;
            background: var(--unnamed-color-ea0f8f) 0% 0% no-repeat padding-box;
            background: #EA0F8F 0% 0% no-repeat padding-box;
            border-radius: 3px;
            opacity: 1;
            outline: none;
            font-family: 'Omnes Regular';
            font-size: 16px;
          }
          .btn-talleres{
            height: 52px;
            width: 100%;
            background: var(--unnamed-color-0855c4) 0% 0% no-repeat padding-box;
            background: #0855C4 0% 0% no-repeat padding-box;
            border-radius: 3px;
            opacity: 1;
            font-family: 'Omnes Regular';
            font-size: 16px;
          }
          .contacto{
            border: 1px solid #A4A7BA;
            height: 77px;
            padding: 5px;
            font-size: 15px;
            color: #333333;
            .text{
              font-family: 'Omnes Regular';
            }
            .text-numero{
              font-family: 'Omnes Medium';
            }
          }
          .confirmacion{
            font-family: 'Omnes Regular';
            font-size: 18px;
            color: #8F93B2;
            opacity: 1;
          }
          .vale{
            padding: 0;
            img{
              width: 100%;
            }
          }
        }
                
      }
    }
  }
  @media (min-width: 768px) {
    .pago-procesado{
      padding-top: 72px;
      padding-bottom: 100px;
      .banner{
        height: 64px;
        background: #0855C4 0% 0% no-repeat padding-box;
        opacity: 1;
        p{
          color: #FFFFFF;
          font-size: 25px;
        }
        .text-principal{          
          font-family: 'Omnes Medium';
        }
        .text-secundario{
          font-family: 'Omnes Regular';
        }
      }
      .titulo{
        font-family: 'Omnes Regular';
        font-size: 30px;
        padding-top: 25px;
        padding-bottom: 10px;
      }
      .sub-titulo{
        font-family: 'Omnes Regular';
        font-size: 16px;
        padding-bottom: 25px;
      }
      .body-resumen{
        .resumen-row{
          height: 40px;
          background: #eef3fb;
          border: 1px solid #EDF3FB;
          border-radius: 3px;
          margin-bottom: 5px;
          font-family: 'Omnes Medium';
          text-transform: uppercase;
          
        }
        .resumen-row2{
          height: 40px;
          background: #eaf9ff;
          border: 1px solid #EDF3FB;
          border-radius: 3px;
          margin-bottom: 5px;
          font-family: 'Omnes Medium';          
        }
        .label{
          font-size: 16px;
          color: #333333;
          align-self: center;
          text-transform: uppercase;
        }
        .datos{
          font-size: 17px;
          color: #0855C4;
          align-self: center;
          text-align: right;
          text-transform: uppercase;
        }
        .datos2{
          font-size: 17px;
          color: #0855C4;
          align-self: center;
          text-align: right;
          text-transform: none;
        }
        .email-row{
          padding-top: 20px;
          font-size: 18px;
          .text-email{
            font-family: 'Omnes Regular';
            color: #8F93B2;
          }
          .email{
            font-family: 'Omnes Medium';
            color: #383C5A;
          }
        }
        .custom-row{
          padding-top: 25px;
          .btn-descargar{
            height: 52px;
            width: 100%;
            background: var(--unnamed-color-ea0f8f) 0% 0% no-repeat padding-box;
            background: #EA0F8F 0% 0% no-repeat padding-box;
            border-radius: 3px;
            opacity: 1;
            outline: none;
            font-family: 'Omnes Regular';
            font-size: 18px;
          }
          .btn-talleres{
            height: 52px;
            width: 100%;
            background: var(--unnamed-color-0855c4) 0% 0% no-repeat padding-box;
            background: #0855C4 0% 0% no-repeat padding-box;
            border-radius: 3px;
            opacity: 1;
            font-family: 'Omnes Regular';
            font-size: 18px;
          }
          .contacto{
            border: 1px solid #A4A7BA;
            height: 82px;
            padding: 5px;
            font-size: 18px;
            color: #333333;
            display: flex;
            img{
              padding-left: 15px;
            }
            .text{
              font-family: 'Omnes Regular';
            }
            .text-numero{
              font-family: 'Omnes Medium';
            }
          }
          .confirmacion{
            font-family: 'Omnes Regular';
            font-size: 18px;
            color: #8F93B2;
            opacity: 1;
          }
          .vale{
            img{
              width: 100%;
            }
          }
        }
                
      }
    }
  }

</style>
