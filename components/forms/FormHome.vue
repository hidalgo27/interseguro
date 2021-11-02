<template>
  <div class="position-relative">
<!--    <div class="position-absolute -mt-40 right-0 box-interseguro-left p-3 bg-v-primary text-white h6 shadow">-->
<!--      Desde US$ 12 al mes-->
<!--    </div>-->
    <b-form class="box-interseguro bg-white p-4 text-center position-relative">
      <h2 class="text-v-primary h5 mt-3 mb-4 omnes-medium"><span class="omnes-light">Cotizalo</span> desde Desde US$12 al mes</h2>
      <b-form-group label-for="placa">
        <b-form-input
          id="vehicleModelPlate"
          class="text-uppercase text-center form-control py-4"
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
      </b-form-group>
      <div class="box-btn-homeForm">
        <button
          type="button"
          class="btn btn-block btn-v-secondary position-relative p-3"
        >
          COTIZAR
          <client-only>
            <clip-loader class="cliploader position-absolute" :loading="loading" :color="color" :size="size"></clip-loader>
          </client-only>
        </button>
        <p class="no-tengo-placa"></p>
        <div class="row justify-content-center mt-4 mb-3">
          <div class="col-8">
            <div class="row no-gutters align-items-center">
              <div class="col-auto font-weight-light text-v-gray-dark small">Con el respaldo del grupo:</div>
              <div class="col-auto ml-2">
                <img src="@/static/media/img/home/respaldo-intercorp.svg" alt="respaldo_intercorp" class="w-100">
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "FormHome",
  data() {
    return {
      loading: false,
      color: "#00ADEE",
      size: "30px",
      item:{
        plateNumber:'',
        email:''
      },
    }
  },
  methods: {
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
        window.dataLayer = window.dataLayer || [ ];
        dataLayer.push({
          'event': 'detail',
          'product' : {
            'name': '',
            'category': 'Seguro',
            'brand': 'Vehicular',
            'variant': 'black $0/mes',
            'amount': '',
            'quota': '',
            'discount': '',
            'startDate': '',
            'credit': '',
            'sku': ''
          }
        })
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
                  this.$store.commit('common/setObjVehiculo', respuesta )
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
  }
}
</script>
