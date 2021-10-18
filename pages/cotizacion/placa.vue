<template>
  <section >
    <div class="container page-ingresa-placa">
      <b-row class="mi-breadcrumb">
          <b-col cols="12" class="box-steps2">
              <ul class="steps2" style="display: inline-flex">
                  <div class="steps2__item "><span>Pago</span></div>
                  <div class="steps2__item ">Planes</div>
                  <div class="steps2__item steps--active  paso1"><span>Mi carro</span></div>
                  <li class="steps2--progressBar" ></li>
              </ul>
          </b-col>
      </b-row>
      <b-row class="lista1 flujo-titulo">
        <b-col class="p-0 d-none d-sm-block" >
          <img src="./../../static/media/imagenes/seleccion/row-back.svg" alt="" @click="volver($event)" ><span>Ingresa tu placa</span>
        </b-col>
        <b-col class="d-block d-sm-none" >
            <span>Ingresa tu placa</span>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col cols="12" lg="6" xl="6" class="box-placa">
          <b-row align-v="center" class="row-general">
            <b-col cols="12" class="row-input">
              <b-form-input
                  id="vehicleModelPlate"
                  class="text-uppercase form-control"
                  @keyup.native="consultarPlaca($event,750)"
                  maxlength="6"
                  autocomplete="off"
                  type="text"
                  v-model="item.plateNumber"                    
                  required
                  placeholder="Ingresa tu Placa"
                  name="Placa"
                  aria-label="placa"                
                  autofocus
                ></b-form-input>
                <clip-loader class="cliploader" :loading="loading" :color="color" :size="size"></clip-loader>
            </b-col>            
          </b-row>
        </b-col>
      </b-row>
    </div>
  </section>  
</template>
<style lang="scss">
    $is-v-azul : #0855c4;
    $is-v-border: #CCD1DD;
    $is-v-gris-disabled: #82859D;
    
    .page-ingresa-placa{
      margin-top: 72px;
      min-height:calc(100vh - 72px - 124px);
      //campaña
      margin-top: 142px;
        .pantalla-actual{
            p{
                color: $is-v-azul;
                font-size: 36px;
                font-family: 'Omnes Regular';
                margin-bottom: 36px;
            }
        }
        .box-placa{
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            input{
                height: 52px;
                border: 1px solid $is-v-azul;
                //margin-bottom: 36px;
            }
            button{
                border: none;
                color: $is-v-gris-disabled;
                height: 52px;
                font-family: 'Omnes Medium';
                font-size: 19px;
                width: 100%;
            }
        }
    }


    @media (min-width: 992px) {
        .page-ingresa-placa{
            .box-placa{
              margin-top: 20px;
              border: 1px solid $is-v-border;
              padding: 50px;
              input{
                  
              }
            }
        }
    }
</style>

<script>
export default {
  layout: "InterseguroFlujo",
  data() {
    return {
      showLoader: true,
      loading: false,
      color: "#00ADEE",
      sizePulse: "45px",
      size: "30px",
      slideBeneficios:0,
      slide:0,
      flagCloseListon: 0,
      item:{
        plateNumber:'',
        email:''
      },
      saveVehicle:{},
      saveCliente:{},
      /************************************* */
      planSeleccionado: 2,
      proteccion: "Protección total",
      precio: 33,
      listTest: [
        {
          precio : 12,
          proteccion : "Protección contra robo",
          plan: "Básico"
        },
        {
          precio : 25,
          proteccion : "Protección contra accidentes",
          plan: "Intermedio"
        },
        {
          precio : 33,
          proteccion : "Protección total",
          plan: "Full"
        }
      ]
    }
  },
  methods: {
    volver: function(evt){
        evt.preventDefault();
        this.$nuxt.$router.push({path: "/"});
    },
    seleccionarPlan(id){
      switch (id) {
        case 0:
          this.planSeleccionado = 0
          this.proteccion = "Protección contra robo"
          this.precio = 12
          break;
        case 1:
          this.planSeleccionado = 1
          this.proteccion = "Protección contra accidentes"
          this.precio = 25
          break;
        case 2:
          this.planSeleccionado = 2
          this.proteccion = "Protección total"
          this.precio = 33
          break;
        default:
          break;
      }
    },
    pageContinue(){
      
      this.$nuxt.$router.push("/cotizacion/seleccion/")
    },
    consultarPlaca(event, ms) {  
      if(this.item.plateNumber.length == 6){
        this.loading = true
        this.isDisabled = true
        var self = this
        clearTimeout(self.timer)
        self.timer = setTimeout(function() {
          self.validacionInput(event)
        }, ms)
      }else{
        this.isDisabled =false
      }      
    },
    validacionInput(event) {
      this.item.plateNumber = this.item.plateNumber.replace(/[^a-z0-9\s]/gi, "").replace(/[_\s]/g, "");
      var longitudDePlaca = this.item.plateNumber.length;
      if (longitudDePlaca > 6) {
        this.item.plateNumber = this.item.plateNumber.slice(0, 6)
      } else if (longitudDePlaca == 6) {
        event.preventDefault()

        this.createMail()
        this.updateFields()
        this.getVehicle()  
      }
    },
    updateFields () {
      this.$store.commit('common/setPlateNumber', this.item.plateNumber)
      this.$store.commit('common/setEmail', this.item.email)
    },
    createMail () {
      const fecha = new Date()
      const fechaEnNumeros = fecha.getTime()
      const aleatorio = Math.random() * (10000 - 0) + 0
      const aleatorioFinal = fechaEnNumeros + parseInt(aleatorio)
      const mailGenerado = 'test_' + aleatorioFinal.toString() + '@test.com'
      this.item.email = mailGenerado
      this.$store.commit('common/setEmail', mailGenerado)
    },
    getVehicle () {
      this.item.plateNumber = this.item.plateNumber.toUpperCase();
      this.$store.dispatch('common/getVehicle', this.item)
      .then((res) =>{
        

        const respuesta = res.data.body;
        /* Code 0 = > el servicio respondio correctamente */
        if (res.data.code == 0) {
        
          if(respuesta.useType){
              const useType = respuesta.useType.toString().toLowerCase();
              if(useType === 'particular' || useType === 'escolar'){
                this.$store.commit('common/setAppDiscount', respuesta.appDiscount)
              }else{
                this.loading = false;
                window.dataLayer = window.dataLayer || [ ];
                dataLayer.push({
                    'event': 'auto_no_particular',
                    'category': 'UI: home error',
                    'action': 'error',
                    'label': 'error en el servicio de soat, auto no particular'
                })
                this.$swal({
                  // title: "Oops...",
                  html: `Lo sentimos, por el momento solo aseguramos autos de Uso Particular. 
                  La placa ${this.item.plateNumber} tiene un SOAT registrado con Uso 
                    ${String(useType).toUpperCase()}. Para mayor información contáctanos al <br>
                  <a style="color : #5b85c5" href="tel:015000000">(01)500-0000</a>`,
                  type: "warning",
                  showCancelButton: false,
                  confirmButtonColor: "#2177CC",
                  confirmButtonText: "OK",
                });
                return;
              };
          }else{
            this.$store.commit('common/setAppDiscount', respuesta.appDiscount)
          }
          

          if (respuesta.appDiscount == true) {
            this.$nuxt.$router.push({path: "/app/"+this.item.plateNumber})
          }else{
            /* Existe en nuestra base de datos */
              
              if (respuesta.exists == true) {
                this.$store.commit('common/setVehicleState', 1)
                if(respuesta.client.externalId > 0 ){
                  this.$store.commit('common/setOrigenCliente', 2)
                  this.$store.commit('common/setClienteSOAT', respuesta.client)
                  this.$store.commit('common/setDocumentoLocal', respuesta.client.documentNumber)
                  this.$store.commit('common/setEmail',res.data.body.client.emailAddress)
                  
                }else {
                  this.$store.commit('common/setOrigenCliente', 1)
                }
                /* Tiene una poliza activa */
                if (respuesta.activePolicy === true) {
                  this.$nuxt.$router.push({path: "/placa-registrada"})
                } else {             
                  this.loading = false
                  if (document.location.hostname == "www.interseguro.pe"){
                    fbq('track', 'CompleteResgistration');
                  }else{
                  }
                  this.$store.commit('common/setPantallaFlujo', 1)

                  this.$store.commit('common/setObjVehicle', respuesta )
                  console.log("RESPUESTA HOME ", respuesta)
                  this.pageContinue()
                }
              }else {
                if(respuesta.client.externalId > 0 ){
                  this.$store.commit('common/setOrigenCliente', 2)
                }else{
                  this.$store.commit('common/setOrigenCliente', 1)
                }          
                this.$store.commit('common/setCodeRmkt', res.data.body.remarketingId)
                this.$store.commit('common/setVehicleState', 0)
                this.loading = false
                if (document.location.hostname == "www.interseguro.pe"){
                  fbq('track', 'CompleteResgistration');
                }else{
                }
                this.$store.commit('common/setPantallaFlujo', 1)
                this.pageContinue()
              }
          }
          
          
        }
        
        else if(res.data.code === 307){
            this.loading = false;
            window.dataLayer = window.dataLayer || [ ];
            dataLayer.push({
                'event': 'auto_lista_negra',
                'category': 'UI: home error',
                'action': 'error',
                'label': 'error la placa esta en la lista negra'
            })
            this.$swal({
            // title: "Oops...",
            html: `Lo sentimos, por el momento no podemos asegurar el vehículo de placa ${this.item.plateNumber}. 
            Para mayor información contáctanos al <br><a style="color : #5b85c5" href="tel:015000000">(01)500-0000</a>`,
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#2177CC",
            confirmButtonText: "OK",
          });
        }
      })

    },
  },
  created() {
    this.createMail()
  },
}
</script>
