<template>
  <div class="home  home-is" v-bind:class="{'mt-5': this.$store.state.common.flagCloseListon == 0  }">
    <fade-loader v-if="showLoader"></fade-loader>
    <!--
    <div class="boxHome-banner">
      <div  class="home-banner"  >
        <div class="home-banner__izq">
          <div class="box-formCotizador">
            <p class="titulo-formulario">
                <img class="img-form" src="./../static/media/img/home/img-form.png" alt="banner">
                Manejar tranquilo <br> ahora es más fácil
            </p>
            <b-form class="formCotizador">
              <div class="formCotizador__msg">
                Desde US$ 12 al mes
              </div>
              <h1>Cotiza tu seguro vehicular ahora</h1>
              <b-form-group label-for="placa">
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
              </b-form-group>
              <div class="box-btn-homeForm">
                <button
                  type="button"
                  @click="onSubmit"
                  class="btn-home-cotizar">
                  COTIZAR
                    <clip-loader class="cliploader" :loading="loading" :color="color" :size="size"></clip-loader>
                </button>
                <p class="no-tengo-placa"></p>
                <p class="respaldo-intercorp">
                  <span> Con el respaldo del grupo</span>
                  <img src="./../static/media/img/home/respaldo-intercorp.svg" alt="respaldo_intercorp">
                </p>
              </div>
            </b-form>
          </div>
        </div>
        <div class="home-banner__der">
          <div class="box-titulo  ml-5">
            <p class="title-banner">
              Manejar tranquilo <br> ahora es más fácil
            </p>
            <p  v-b-modal.modalHomeVideo  style="cursor: pointer;font-family: 'Omnes Regular';font-size: 20px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: 1.25;letter-spacing: normal;color: #454A6C;display: flex;align-items: center;margin-top: 12px;">
              <span style="background: transparent;border: 1px solid #454A6C;margin-right: 12px;border-radius: 28px;width: 28px;height: 28px;display: flex;justify-content: center;align-items: center;color: #454A6C;font-size: 15px;text-align: center;padding-left: 4px;">&#9658;</span>  <span class="efecto-enlace" > Mira el video</span>
            </p>
          </div>

        </div>
      </div>
    </div>
     -->
    <!--Habilitar  en campaña-->
    <div class="boxHome-banner">
      <div  class="home-banner"  >
        <div class="home-banner__izq">
          <div class="box-formCotizador">
            <div class="mt-4 box-img-campania  d-flex  justify-content-center  d-lg-none">
              <img src="./../static/media/img/campania/banner-home-mobile.svg" alt="" style="width: 100%; ">
            </div>
            <p class="d-flex  d-md-none" style="margin-left: 14px;color: rgb(255, 255, 255);font-family: 'Omnes Medium';font-style: italic;font-size: 16px;margin-bottom: -8px;margin-top: 4px;">La oferta termina en : </p>
            <div class="mb-3  box-flotante-covid  d-flex  d-md-none " style="position: relative;justify-content: flex-start;position: relative;top: 9px;left: 12px;">
              <div class="box-contador"  >
                <div  class="example  d-md-flex">
                    <div id="contadorCyberMobile" class="flipdown" style="width: 178px !important;">
                    </div>
                </div>
              </div>
            </div>
            <b-form class="formCotizador">
              <div class="formCotizador__msg">
                Desde US$ 12 al mes
              </div>
              <h1>Cotiza tu seguro vehicular ahora</h1>
              <b-form-group label-for="placa">
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
              </b-form-group>
              <div class="box-btn-homeForm">
                <button
                  type="button"
                  @click="onSubmit"
                  class="btn-home-cotizar"
                >
                  COTIZAR
                  <no-ssr>
                    <clip-loader class="cliploader" :loading="loading" :color="color" :size="size"></clip-loader>
                  </no-ssr>
                </button>
                <p class="no-tengo-placa"></p>
                <p class="respaldo-intercorp">
                  <span> Con el respaldo del grupo</span>
                  <img src="./../static/media/img/home/respaldo-intercorp.svg" alt="respaldo_intercorp">
                </p>
              </div>
            </b-form>
          </div>
        </div>
        <div class="home-banner__der" >


            <div class="box-contador" >
              <img src="./../static/media/img/campania/banner-home-desktop.svg" alt="" style="margin-left: 70px;margin-top: 55px;width: 500px;">
              <p style="margin-left: 136px;color: rgb(255, 255, 255);font-family: 'Omnes Medium';font-style: italic;font-size: 18px;padding-top: 46px;">La oferta termina en : </p>
              <div  class="example  d-none  d-md-flex"
              style="flex-direction: column;align-items: flex-end;justify-content: flex-end;position: relative;top: -62px;right: 10px;">
                  <div id="contadorCyberDesktop" class="flipdown" style="width: 268px !important;">

                  </div>
              </div>
            </div>

        </div>
      </div>
    </div>

    <div class="home-pasos" >
      <div class="home-pasos__titulo">
      </div>

      <div class="home-pasos__beneficios">
        <div class="home-pasos__planes--titulo">
          <p class="como-funciona">Es fácil, en solo 3 pasos</p>
        </div>

        <div class="home-pasos__cuerpo   pasos">
          <div class="pasos__item">
            <div class="pasos__item--img">
              <img src="./../static/media/img/home/lupa.png" alt="lupa">
            </div>
            <div class="pasos__item--desc">
              <p class="titulo">Cotiza</p>
              <p class="descripcion">Ingresa tu placa <br> y selecciona tu carro</p>
            </div>
            <div class="pasos__item--flecha  d-none  d-lg-block">
              <img src="./../static/media/img/home/flecha_der.png" alt="flecha der">
            </div>
          </div>
          <div class="pasos__item">
            <div class="pasos__item--img">
              <img src="./../static/media/img/home/flecha.png" alt="flecha">
            </div>
            <div class="pasos__item--desc">
              <p class="titulo">Elige</p>
              <p class="descripcion">Tenemos 3 planes para ti</p>
            </div>
            <div class="pasos__item--flecha  d-none  d-lg-block">
              <img src="./../static/media/img/home/flecha_der.png" alt="flecha der">
            </div>
          </div>
          <div class="pasos__item  pb-0">
            <div class="pasos__item--img">
              <img src="./../static/media/img/home/candado.png" alt="candado">
            </div>
            <div class="pasos__item--desc">
              <p class="titulo">Paga</p>
              <p class="descripcion">¡Listo! <br> Ya estás asegurado</p>
            </div>
          </div>
        </div>

        <div class="home-pasos__planes--titulo   pt-2   d-block">
          <p class="nuevos-planes">¡Elige tu plan! </p>
        </div>

        <div class="home-pasos__planes  planes">
          <div class="planes__item">
            <div class="plata  plan">
              <div class="plan--cabecera">
                <p>PLATA</p>
              </div>
              <div class="plan--cuerpo">
                <p><span class="check">&#10004;</span> <span>Responsabilidad Civil frente a terceros hasta $150,000</span></p>
                <br>
                <p><span class="check">&#10004;</span> <span>Robo Total - Te devolvemos el valor de tu carro</span></p>
                <p style="width: 100%"><nuxt-link class=""  to="/cobertura/">Ver detalle</nuxt-link></p>
              </div>
            </div>
          </div>
          <div class="planes__item">
            <div class="oro  plan">
              <div class="plan--cabecera">
                <p>ORO</p>
              </div>
              <div class="plan--cuerpo">
                <p class="incluye"><span>&#43;</span> Incluye PLAN PLATA</p>
                <br>
                <p><span class="check">&#10004;</span> <span>Pérdida parcial en caso choques hasta por el 75% del valor de tu carro</span></p>
                <br>
                <p><span class="check">&#10004;</span> <span>Accidente de Ocupantes</span></p>
                <p style="width: 100%"><nuxt-link class=""  to="/cobertura/">Ver detalle</nuxt-link></p>
              </div>
            </div>
          </div>
          <div class="planes__item">
            <div class="black  plan">
              <div class="plan--cabecera">
                <p>BLACK</p>
              </div>
              <div class="plan--cuerpo">
                <p class="incluye"><span>&#43;</span> Incluye PLAN ORO</p>
                <br>
                <p><span class="check">&#10004;</span> <span>Pérdida total en caso choques por el valor total de tu carro</span> </p>
                <br>
                <p><span class="check">&#10004;</span> <span>Accesorios adicionales hasta por $1,500</span></p>
                <br>
                <p><span class="check">&#10004;</span> <span>Protección frente a riegos de naturaleza, incendios y huelgas</span></p>
                <br>
                <p><span class="check">&#10004;</span> <span>Hasta 5 choferes de reemplazo al año</span></p>
                <p style="width: 100%"><nuxt-link class=""  to="/cobertura/">Ver detalle</nuxt-link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-beneficios2  p-47px">
      <div class="home-beneficios2__titulo">
        <p>Disfruta de nuestros increíbles beneficios </p>
      </div>
      <div class="home-beneficios2__cuerpo  beneficios2 d-lg-flex">
        <div class="beneficios2__item">
          <div class="img-box">
            <img src="./../static/media/img/root/inspeccion.png" alt="choferes">
          </div>
          <div class="beneficios-desc">
            <p class="beneficios-titulo">Inspección Digital </p>

            <p  class="">Desde tu celular <br> y en solo 5 minutos <span></span></p>
          </div>

        </div>
        <div class="beneficios2__item">
          <div class="img-box">
            <img src="./../static/media/img/root/chofer.png" alt="gruas">
          </div>
          <div class="beneficios-desc">
            <p class="beneficios-titulo">
              Chofer de reemplazo
            </p>
            <p  class="">Hasta 5 choferes <br> de reemplazo al año  <span></span> </p>
          </div>

        </div>
        <div class="beneficios2__item">
          <div class="img-box">
            <img src="./../static/media/img/root/auxilio.png" alt="mecanico">
          </div>
          <div class="beneficios-desc">
            <p class="beneficios-titulo">
              Auxilio mecánico
            </p>
            <p  class=""><span></span> Te ayudamos en donde estés <br>hasta 2 veces al mes  </p>
          </div>
        </div>
        <div class="beneficios2__item">
          <div class="img-box">
            <img src="./../static/media/img/root/vivemas.png" alt="">
          </div>
          <div class="beneficios-desc">
            <p class="beneficios-titulo">
              Programa de beneficios
            </p>
            <p  class=""><span></span> Descuentos en miles <br> de establecimientos </p>
          </div>
        </div>
      </div>
    </div>

    <div class="home-talleres  mt-lg-4">
      <div class="home-talleresBox">
        <div class="home-talleres__desc">
          <p class="d-block  d-md-none"><strong> Repara tu auto </strong> <br> en nuestra red de talleres</p>
          <p class="d-none  d-md-block"><strong> Repara tu auto </strong> <br> en nuestra red <br> de talleres</p>
        </div>
        <div class="home-talleres__boxBtn  d-block  d-lg-none">
          <a class="btn-talleres" target="_blank" href="https://www.interseguro.pe/vehicular/resources/Talleres_afiliados.pdf">TALLERES AFILIADOS</a>
        </div>
        <div class="home-talleres__img">
          <img src="./../static/media/img/home/talleres.png" alt="talleres">
        </div>
        <div class="home-talleres__btn  d-none  d-lg-block">
          <a class="btn-talleres" target="_blank" href="https://www.interseguro.pe/vehicular/resources/Talleres_afiliados.pdf">TALLERES AFILIADOS</a>
        </div>
      </div>
    </div>

      <div class="home-clientes2 p-47px d-none  d-lg-flex">
        <div class="box-titulo">
          <p class="titulo-clientes">¿Qué dicen nuestros clientes?</p>
        </div>

        <div class="box-total">
          <div class="box-slider">
            <img class="escudo-cliente" src="./../static/media/img/root/clientes.png" alt="">
            <p class="cliente">Manuel Augusto</p>
            <!-- <p class="ahorro">---</p> -->
            <p class="descripcion">‘’Fue facilísimo contratar el seguro, en comparación con la gestión tradicional.‘’</p>
          </div>
          <div class="box-slider">
            <img class="escudo-cliente" src="./../static/media/img/root/clientes.png" alt="">
            <p class="cliente">Carolina Chavez</p>
            <!-- <p class="ahorro">---</p> -->
            <p class="descripcion">‘’Aún no tengo un siniestro con mi carro, pero el nivel de respuesta hasta el momento ha sido rápido.‘’</p>
          </div>
          <div class="box-slider">
            <img class="escudo-cliente" src="./../static/media/img/root/clientes.png" alt="">
            <p class="cliente">Enrique Quispe</p>
            <!-- <p class="ahorro">---</p> -->
            <p class="descripcion">‘’La info que me enviaron sobre la cobertura era concisa y simple de entender!"‘’</p>
          </div>
        </div>
    </div>

    <div class="home-clientes">
       <div class="clientes-slider    d-block  d-lg-none">
        <div class="box-titulo">
          <p>¿Qué dicen nuestros clientes?</p>
        </div>
        <b-carousel
          id="carousel-fade"
          class="carousel-clientes"
          v-model="slideBeneficios"
          :interval="4000"
          controls
          indicators
          he
          background="transparent"
          style="text-shadow: 1px 1px 2px #333; color: red;"
        >

          <b-carousel-slide class="carousel-clientes__item" img-blank-color='transparent'>
            <div>
              <div class="box-slider">
                <img class="escudo-cliente" src="./../static/media/img/root/clientes.png" alt="">
                <p class="cliente">Manuel Augusto</p>
                <!-- <p class="ahorro">---</p> -->
                <p class="descripcion">‘’Fue facilísimo contratar el seguro, en comparación con la gestión tradicional.‘’</p>
              </div>
            </div>
          </b-carousel-slide>

          <b-carousel-slide class="carousel-clientes__item" img-blank-color='transparent'>
            <div>
              <div class="box-slider">
                <img class="escudo-cliente" src="./../static/media/img/root/clientes.png" alt="">
                <p class="cliente">Carolina Chavez</p>
                <!-- <p class="ahorro">---</p> -->
                <p class="descripcion">‘’Aún no tengo un siniestro con mi carro, pero el nivel de respuesta hasta el momento ha sido rápido.‘’</p>
              </div>
            </div>
          </b-carousel-slide>

          <b-carousel-slide class="carousel-clientes__item" img-blank-color='transparent'>
            <div>
              <div class="box-slider">
                <img class="escudo-cliente" src="./../static/media/img/root/clientes.png" alt="">
                <p class="cliente">Enrique Quispe</p>
                <!-- <p class="ahorro">---</p> -->
                <p class="descripcion">‘’La info que me enviaron sobre la cobertura era concisa y simple de entender!"‘’</p>
              </div>
            </div>
          </b-carousel-slide>

        </b-carousel>
      </div>
     </div>


    <b-modal
      id="modalHomeVideo"
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="hidemodalHomeVideo"
    >
      <div class="modal-content modalHomeVideo">
        <div class="modal-body">
          <div>
            <div class="close" @click="hidemodalHomeVideo()">
              X
            </div>
            <div id="etiqueton" class="endosoSesion">
              <iframe width="560" height="450" src="https://www.youtube.com/embed/BNkYOo4SGyg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div class="row"></div>
      </div>
    </b-modal>

  </div>
</template>
<script>


import FadeLoader from '@/components/loaders/FadeLoader'
  export default {
    layout: "InterseguroHome",
      data () {
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
            saveCliente:{}
          }
      },
      components: {
        'fade-loader': FadeLoader
      },
      head: {
        title: 'Cotizar seguro vehicular en 2 pasos',
        meta: [
          { hid: 'description', name: 'description', content: "Cotizar seguro vehicular es muy fácil. Protege desde robo de piezas, choques hasta pérdida total.  Obtén auxilio mecánico a todo Perú desde $12 mensuales" },
        ],
        link: [{ rel: 'canonical', href: 'https://www.interseguro.pe/vehicular/' }],
      },
      created() {
        this.showLoader = true
      },
      methods: {
        onSubmit(){
        },
        contador(){
            var flipdown2 = new FlipDown(1634878799, 'contadorCyberDesktop').start()
            var flipdown = new FlipDown(1634878799, 'contadorCyberMobile').start()
        },
        pago_datalayer(error_detectado){
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
              event:'Errores',
              category: 'ErroresPago',
              action: error_detectado,
              error_detectado: error_detectado
          });
        },
        hidemodalHomeVideo() {
          this.$refs.hidemodalHomeVideo.hide();
        },
        PaginaVista() {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "pagina_vista",
            "page-url": "/vehicular/",
            "page-title": "Home",
            ecommerce: {
              checkout: {
                actionField: { step: 1 } // esto marca el primer paso en el embudo
              }
            }
          });
        },
          resetearPlaca(eve) {
            eve.preventDefault();
            this.$store.dispatch('common/getcreateRemarketing', this.item.email).then(res  => {
              this.$store.commit('common/setCodeRmkt', res.data.body.id)
              this.$nuxt.$router.push({path: "/cotiza/cotizacion-sin-placa"})
            })
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

              this.getGeolocation()
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
                    if(useType === 'particular' || useType === 'escolar' || useType === 'Personal'){
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
                  if (respuesta.activePolicy === true) {
                        this.$nuxt.$router.push({path: "/placa-registrada"})
                  }else{
                    this.$nuxt.$router.push({path: "/app/"+this.item.plateNumber})
                  }

                }else{
                  /* Existe en nuestra base de datos */
                    this.$store.commit('common/setObjVehiculo', res.data.body)
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
                        this.$nuxt.$router.push("/cotiza/cotizacion/")
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
                      this.$nuxt.$router.push("/cotiza/cotizacion/")
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
          getGeolocation () {
            this.$store.dispatch('common/getGeolocationUser')
            .then(res => {
              const respuesta = res.data
              this.$store.commit('common/setGeolocation',respuesta)
            })
          },
      },
      computed: {

      },
      mounted () {
        this.contador()
        this.$store.commit('common/setUrlGlobal', 'vehicular/promocion/')
        this.$store.commit('common/setPromocion', true)
        localStorage.setItem("urlLocal", "/promocion")

        this.$store.commit('common/setFlagCloseListon', 1)
        this.$store.commit('common/setPromocion', false)

        // this.$store.commit('common/resetState')
        this.$store.commit('common/setNuevoProducto', false)
        this.$store.commit('common/setBusinessId', 1)
        this.$store.commit('common/setFechaVigencia', '')
        this.$store.commit('common/setPlanSeleccionado', 3)
        this.$store.commit('common/setEntidadFinanciera', {id: 0,name: ''})
        this.$store.commit('common/setCodigoRemarketingGenerado', '')
        this.$store.commit('common/setObjectDigodat', {})
        this.$store.commit('common/setItemElegido', {})
        this.$store.commit('common/setCurrent', null)
        this.$store.commit('common/setFlujoDetectado', 'interseguro')
        this.PaginaVista()

        /************************************************************************ */
        /********************* CONFIGURACIONES GLOBALES************************* */
        /************************************************************************ */

        this.$store.commit('common/setDiscountType', '')
        this.$store.commit('common/setCuentasueldo', 'N')
        this.$store.commit('common/setTarjetaoh', 'N')
        this.$store.commit('common/setBusinessId', 1)
        this.showLoader = false
        // this.$store.commit('common/setObjVehiculo', {})
        // let objJWT = JSON.parse(localStorage.setItem("jwt",{}))
        if (document.location.hostname == "www.interseguro.pe"){
          window.criteo_q = window.criteo_q || [];
          window.criteo_q.push(
            { event: "setAccount", account: 64802}, // You should never update this line
            { event: "setEmail", email: "" }, // Can be an empty string
            { event: "setSiteType", type: /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d"},
            { event: "viewBasket", item: [{id: "Home-vehicular", price: "", quantity: 1 }]}
          )
        }
        var url = window.location.pathname
        if(url == "/vehicular/" || url == "/vehicular" || url == "/vehicular/" || url == "/vehicular"){
          setTimeout(() => {
            localStorage.setItem("urlLocal", "/")
          }, 150);
        }
        /************************************************************************ */
        /************************************************************************ */
        /************************************************************************ */


        // let objJWT = JSON.parse(localStorage.setItem("jwt",{}))

        /* RESET DE ESTADOS */
        // if (localStorage.getItem("flagCloseListon") == 0) {
        //     this.flagCloseListon = 0
        //     localStorage.setItem("flagCloseListon", 0)
        // }else if  (localStorage.getItem("flagCloseListon") == 1) {
        //     this.flagCloseListon = 1
        //     localStorage.setItem("flagCloseListon", 1)
        // }else{
        //     localStorage.setItem("flagCloseListon", 1)
        //     this.flagCloseListon = 1
        // }
        this.createMail()
        this.$store.commit('common/setLeaveMessage',0);
        this.showLoader = false
        console.log("HOME BASE")
      }
  }
</script>

<style lang="scss" scope>
.omnes-medium{
  font-family: 'Omnes Medium';
}
.flipdown .rotor-group-heading:before {
    font-size: 9px !important;
    height: 15px !important;
    line-height: 15px !important;
}
  .listonMobile{
    position: relative;
    img{
        right: 0;
        position: absolute;
        width: 32px;
        animation: listonMobile 1s infinite;
        top: -30px;
    }
    p{
        text-align: center;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.3;
        letter-spacing: normal;
        text-align: center;
        color: #003aad;
        padding: 0;
        margin: 0;
        padding-top: 6px;
    }
  }
  #main-menu{
    display: none;
  }
  p:focus{
    outline: none;
  }
  .modalHomeVideo{
    iframe{
      height: 315px;
      width: 100%;
    }
    .close{
      position: absolute;
      right: -4px;
      top: -10px;
      background: white;
      z-index: 999;
      opacity: 1;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #2b3a41;
      cursor: pointer;
    }
  }

@keyframes updown{
    0%{ transform: translateY(0) }
    50%{ transform: translateY(-4px) }
}
@keyframes listonFondo {
    0% {
        background: #D8E8FA;
    }

    100% {
        background: #B1D4F7;
    }
}
@keyframes listonMobile {
    0% {
        width: 28px;
    }

    100% {
        width: 32px;
    }
}


  div, p, img{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
    &:hover{
      text-decoration: none;
    }
  }
  .home-is{
    //margin-top: 115px;
    margin-top: 60px;
    font-size: 16px;
    background-color: #fff;
    .home-pasos{
      background-color: #fff;
      //padding-top: 130px;
      //pasos mobile campaña
      padding-top: 280px;
      padding-bottom: 48px;
      .parrafo-video{
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.97;
        letter-spacing: normal;
        text-align: center;
        color: #0667ba !important;
        animation: updown 1.5s ease 0s infinite;
        font-family: 'Omnes Regular';
        cursor: pointer;
        img{
          position: relative;
          top: -7px;
        }
      }
      &__planes--titulo{
        p{
          opacity: 1;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: -0.21px;
          text-align: center;
        }
        .como-funciona{
          font-family: 'Omnes Medium';
          padding-bottom: 16px;
          font-size: 1.3rem;
          font-size: 26px;
          line-height: 1.27;
          text-align: center;
          color: #0854c4;
          max-width: 300px;
          margin: auto;
          padding-bottom: 42px;
        }
        .nuevos-planes{
          font-family: 'Omnes Medium';
          font-size: 1.3rem;
          font-size: 26px;
          line-height: 1.27;
          text-align: center;
          color: #0854c4;
          margin: auto;
        }
        span{
          font-size: 22px;
          letter-spacing: -0.23px;
          color: #00adee;
        }
      }
      .pasos{
        &__item{
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          position: relative;
          padding-bottom: 32px;
          padding-left: 18%;
          &--img{
            img{
              width: 70px;
            }
          }
          &--desc{
            padding-left: 16px;
            .titulo{
              color: #00aded;
              font-size: 20px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.25;
              text-align: left;
              display: flex;
              align-items: center;
            }
            .descripcion{
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1;
              letter-spacing: normal;
              text-align: left;
              color: #505050;
            }
          }
          &--flecha{
            img{
              width: 14px;
            }
          }
        }
      }
      .planes{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 20px;
        padding-top: 34px;
        &__item{
          width: 100%;
          margin-bottom: 48px;
          max-width: 380px;
        }
        .plata, .oro, .black{
          .plan--cabecera{
            height: 45px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .plata{
          .plan--cabecera{
            background-color: #b1b1b1;
            &:before{
              background-image: url(./../static/media/img/home/plata_dto.png);
            }
            &:after{
              background-image: url(./../static/media/img/home/plata.png);
              bottom: -9px;
            }
          }
        }
        .oro{
          .plan--cabecera{
            background-color: #e6ac38;
            &:before{
              background-image: url(./../static/media/img/home/oro_dto.png);
            }
            &:after{
              background-image: url(./../static/media/img/home/oro.png);
            }
          }
        }
        .black{
          .plan--cabecera{
            background-color: #27362d;
            &:before{
              background-image: url(./../static/media/img/home/black_dto.png);
            }
            &:after{
              background-image: url(./../static/media/img/home/black.png);
            }
          }
        }
      }
      .plan{
        border-radius: 9px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        min-height: 175px;
        position: relative;
        &--cabecera{
          text-align: center;
          position: relative;
          &:after{
          }
          &:before{
            content: "";
            position: absolute;
            top: -26px;
            width: 150px;
            height: 32px;
            left: -5px;
            background-size: contain;
            background-repeat: no-repeat;
          }
        }
        &--cuerpo{
          padding: 20px 0;
          p{
            height: 32px;
            font-size: 16px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: -0.16px;
            text-align: left;
            color: #696969;
            width: 85%;
            margin: auto;
            display: flex;
            align-items: center;
            span:nth-child(2){
              padding-left: 8px;
            }
          }
          a{
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.75;
            letter-spacing: normal;
            text-align: center;
            color: #ea0b90;
            text-decoration: underline;
            width: 100%;
            text-align: center;
            display: inline-block;
            position: absolute;
            bottom: 16px;
            font-family: 'Omnes Regular';
          }
        }
      }
    }
    .boxHome-banner{
      position: relative;
      height: 296px;
      background: #e6eef9;
      //background campaña
      background: url('./../static/media/img/campania/fondo-home-desktop.svg');
      //background: #0857c5;

      .home-banner{
        margin: auto;
        background-repeat: no-repeat;
        background-size: 700px;
        background-position-y: bottom;
        background-position-x: right;
        // background-position: right;
        display: flex;
        align-items: center;
        height: 100%;
        flex-direction: column;
        &__izq{
          // margin-top: 24px;
          // padding-top: 68px !important;
          height: 500px;
          display: flex;
          align-items: flex-start;
          width: 90%;
          //border-bottom: 1px solid white !important;

          input{
            max-width: 360px;
            width: 100%;
            height: 51px;
            margin: 0 auto!important;
            text-align: center;
          }
          button{
            color: white !important;
            border-color: #ea0c90 !important;
            background-color: #ea0c90 !important;
            width: 360px;
            height: 51px;
          }
          .no-tengo-placa{
            font-size: 1rem;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.25;
            letter-spacing: normal;
            text-align: center;
            color: #0854c4;
            margin: 10px 0;
            cursor: pointer;
          }
          .respaldo-intercorp{
            font-size: .938rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.33;
            letter-spacing: normal;
            text-align: center;
            color: #494a49;
            span{
              top: 2px;
              position: relative;
            }
          }
        }
        &__der{
          padding-top: 68px !important;
          height: auto;
          display: none;
          align-items: center;
          .box-contador{
            .example{
              display: flex;
              align-items: center;
              margin-top: 32px;
            }
            p{
              color: #ffffff;
              font-size: 20px;
              padding-right: 24px;
            }
          }
          .efecto-enlace{
            &:hover{
              text-decoration: underline;
            }
          }
          p{
            font-family: 'Omnes Medium';
            font-size: 2.8rem;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.25;
            letter-spacing: -1px;
            text-align: left;
            color: #0855c4;
          }
        }
      }
    }

    .box-formCotizador{
      width: 100%;
      padding: 0;
      .titulo-formulario{
        font-size: 1.5rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: center;
        color: #003aad;
        margin-top: 25px;
        padding: 0;
        margin: auto;
        padding-top: 60px;
        padding-bottom: 28px;
        position: relative;
        max-width: 438px;
        width: 100%;
        .img-form{
          position: absolute;
          bottom: -32px;
          left: 7px;
          z-index: 0;
          height: 82px;
          display: none;
          img{
            height: 82px;
          }
        }
      }
    }
    .formCotizador{
      padding:2rem 1.5rem 1rem 1.5rem;
      max-width: 438px;
      width: 100%;
      height: 260px;
      border-radius: 3rem 0 3rem 0;
      background: #fff;
      box-shadow: -3px 4px 12px -1px #ccc;
      position: relative;
      margin: auto;
      margin-top: 0;
      h1{
        font-family: 'Omnes Medium';
        font-size: 1.1rem;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: center;
        color: #003aad;
        margin-top: 25px;
        margin: 0;
        padding: 0;
        padding-top: 8px;
        padding-bottom: 18px;
      }
      &__msg{
        padding: 7px 14px;
        position: absolute;
        right: -1rem;
        top: -1rem;
        border-radius: 8px 0 8px 0;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,.19);
        background-color: #003aad!important;
        color: white !important;
        font-family: 'Omnes Medium';
      }
      .box-btn-homeForm{
        button{
          border-color: #ea0c90!important;
          background-color: #ea0c90!important;
          max-width: 360px;
          width: 100%;
          height: 51px;
          margin: 0 auto!important;
          position: relative;
        }
      }
    }
    .cliploader{
      width: 100%;
      right: 0;
      height: 51px;
      top: 0px;
    }
    .carousel-indicators li {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }


    .home-talleres{
      background-color: #f1f7ff;
      padding-top: 42px;
      padding-bottom: 42px;
      .home-talleresBox{
        background-color: #f1f7ff;
        width: 100%;
        margin: auto;
      }
      &__desc{
        p{
          text-shadow: 0 3px 6px rgba(62, 135, 240, 0.08);
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.09;
          letter-spacing: normal;
          text-align: center;
          color: #01adee;
        }
      }
      &__boxBtn{
        text-align: center;
        margin-top: 16px;
        margin-bottom: 24px;
      }
      .btn-talleres{
        border-radius: 2px;
        background-color: #f1f7ff;
        color:#ea0b90;
        border: 1px solid #ea0b90;
        display: inline-block;
        height: 49px;
        width: 220px;
        line-height: 49px;
        font-size: 18px;
        text-align: center;
        transition: all .75s;
        &:hover{
          background-color: #ea0b90;
          color:#f1f7ff;
          border: 1px solid #f1f7ff;
          transition: all .75s
        }
      }
    }
    .home-clientes2{
      max-width: 80%;
      margin: auto;
      flex-direction: column;
      .box-titulo{
        margin-bottom: 48px;
      }
      .titulo-clientes{
        font-size: 36px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.89;
        letter-spacing: normal;
        text-align: center;
        color: #0854c4;
      }
      .box-total{
        margin-top: 32px;
        display: flex;
        justify-content: space-around;
      }
      .box-slider{
        padding: 0 30px;
        position: relative;
        display: flex;
        align-items: flex-start;
        width: 300px;
        height: 240px;
        border-radius: 12px;
        border: solid 0.8px #0854c4;
        flex-direction: column;
        justify-content: center;
        .escudo-cliente{
          position: absolute;
          top: -12px;
          width: 24px;
          left: calc(159px - 28px);
        }
        .cliente{
          font-family: 'Omnes Medium';
          font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.11;
          letter-spacing: normal;
          text-align: left;
          color: #555555;
        }
        .ahorro{
          margin-top: 4px;
          height: 18px;
          font-family: 'Omnes Medium';
          font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.11;
          letter-spacing: normal;
          text-align: left;
          color: #0854c4;
        }
        .descripcion{
          margin-top: 8px;
          font-family: 'Omnes Medium';
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.25;
          letter-spacing: normal;
          text-align: left;
          color: #555555;
        }
      }
    }
    .home-clientes{
      padding-top: 24px;
      .box-slider{
        padding: 0 30px;
        position: relative;
        display: flex;
        align-items: flex-start;
        width: 300px;
        height: 240px;
        border-radius: 12px;
        border: solid 0.8px #0854c4;
        flex-direction: column;
        justify-content: center;
        .escudo-cliente{
          position: absolute;
          top: -12px;
          width: 24px;
          left: calc(159px - 12px);
        }
        .cliente{
          font-family: 'Omnes Medium';
          font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.11;
          letter-spacing: normal;
          text-align: left;
          color: #555555;
        }
        .ahorro{
          margin-top: 4px;
          height: 18px;
          font-family: 'Omnes Medium';
          font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.11;
          letter-spacing: normal;
          text-align: left;
          color: #0854c4;
        }
        .descripcion{
          margin-top: 8px;
          font-family: 'Omnes Medium';
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.25;
          letter-spacing: normal;
          text-align: left;
          color: #555555;
        }
      }
      .box-titulo{
        p{
          font-family: 'Omnes Medium';
          font-size: 26px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.23;
          letter-spacing: normal;
          text-align: center;
          color: #0854c4;
        }
      }
      .carousel-clientes{
        height: 300px !important;
        margin-top: 24px;
        .box-slider{
          padding: 0 30px;
          position: relative;
          display: flex;
          align-items: flex-start;
          width: 308px;
          height: 240px;
          border-radius: 12px;
          border: solid 0.8px #0854c4;
          flex-direction: column;
          justify-content: center;
          .escudo-cliente{
            position: absolute;
            top: -12px;
            width: 24px;
            left: calc(159px - 12px);
          }
          .cliente{
            font-family: 'Omnes Medium';
            font-size: 18px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.11;
            letter-spacing: normal;
            text-align: left;
            color: #555555;
          }
          .ahorro{
            margin-top: 4px;
            height: 18px;
            font-family: 'Omnes Medium';
            font-size: 18px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.11;
            letter-spacing: normal;
            text-align: left;
            color: #0854c4;
          }
          .descripcion{
            margin-top: 8px;
            font-family: 'Omnes Medium';
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.25;
            letter-spacing: normal;
            text-align: left;
            color: #555555;
          }
        }
        &__item{
          height: 300px !important;
          .carousel-caption {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-shadow: none !important;
            div{
              img{
                width: 110px;
              }
              p{
                transition: all .75s;
                font-size: 18px;
                font-weight: 400;
                font-stretch: 400;
                font-style: normal;
                line-height: 0.89;
                letter-spacing: normal;
                text-align: center;
                color: #696969;
                font-family: 'Omnes Regular';
              }
            }
          }
        }
      }
    }
    .home-talleres{
      &__img{
        img{
          height: 100%;
          width: 100%;
        }
      }
    }
    .home-beneficios2{
      background-color: #f7fbff;
      padding-top: 42px;
      &__titulo{
        margin-bottom: 40px;
      }
      .box-titulo{
        p{
          font-family: 'Omnes Medium';
          font-size: 26px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.23;
          letter-spacing: normal;
          text-align: left;
          color: #0854c4;
        }
      }

      &__titulo{
        p{
          font-family: 'Omnes Medium';
          font-size: 26px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1;
          letter-spacing: normal;
          text-align: center;
          color: #0854c4;
        }
      }
      .beneficios2{
        display: flex;
        justify-content: center;
        margin: auto;
        flex-direction: column;
        align-items: center;
        &__item{
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          max-width: 320px;
          margin: auto;
          margin-bottom: 32px;
          .img-box {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 80px;
              img{
                width: 100%;
                padding: 0 10px;
              }
          }
          .beneficios-desc{
            width: 240px;
            margin-top: 12px;
          }
          .beneficios-titulo{
            font-size: 20px;
            font-family: 'Omnes Medium';
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.2;
            letter-spacing: normal;
            color: #454A6C;
          }
          &:hover{
            img{
              transition: all 0.5s;
            }
            span{
              transition: all 0.5s;
              font-weight: 500;
              font-family: 'Omnes Medium';
            }
          }
          img{
            width: 100px;
          }
          p{
            transition: all .75s;
            font-size: 18px;
            font-weight: 400;
            font-family: 'Omnes Regular';
            font-stretch: 400;
            font-style: normal;
            line-height: 1.2;
            letter-spacing: normal;
            text-align: left;
            color: #454A6C;
          }
        }
      }
    }
  }
  #vehicleModelPlate{
    font-family: 'Omnes Regular';
    font-size: 18.5px;
    color: #495057;
  }
  #vehicleModelPlate:focus {
    border-color: #0855c4 !important;
    border-width: 1.5px !important;
  }

  @media (min-width: 992px) {
    .home-is{
      //margin-top: 50px;
      margin-top: 0px;
      .home-beneficios2{
        &__titulo{
          p{
            font-size: 36px;
            color: #0854c4;
          }
        }
        .beneficios2{
          flex-direction: row;
          flex-wrap: wrap;
          &__item{
            width: 50%;
          }
        }
      }
      .boxHome-banner{
        //background-color:  rgba(8,85,196,.1);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: auto;
        height: 485px;
        .home-banner{
          flex-direction: row;
          padding-left: 45px;
          //min-height: 445px;
          min-height: 485px;

          &__izq{
            // padding-top: 68px !important;
            height: calc(85vh);
            display: flex;
            align-items: center;
            width: auto;
            input{
              width: 360px;
              height: 51px;
              margin: 0 auto!important;
              text-align: center;
            }
            button{
              color: white !important;
              border-color: #ea0c90!important;
              background-color: #ea0c90!important;
              width: 360px;
              height: 51px;
            }
            .no-tengo-placa{
              font-family: 'Omnes Medium';
              font-size: 1rem;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.25;
              letter-spacing: normal;
              text-align: center;
              color: #0854c4;
              margin: 24px 0;
            }
            .respaldo-intercorp{
              font-size: .938rem;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.33;
              letter-spacing: normal;
              text-align: center;
              color: #494a49;
              font-family: 'Omnes Regular';
            }
          }
          &__der{
            padding-top: 50px !important;
            height: calc(85vh);
            display: flex;
            -webkit-box-align: center;
            background-size: 90%;
            //mostrar Automovil
            //background-image: url("./../static/media/interseguroVehicular_v2/banner_img.svg");
            background-repeat: no-repeat;
            background-position-y: bottom;
            background-position-x: right;
            width: 100%;
            // justify-content: flex-start;
            align-items: flex-start;
            // flex-direction: column;
            // padding-left: 32px;
            .box-titulo{
              padding-top: 150px;
              padding-left: 24px;
              position: relative;
            }
            p{
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.25;
              letter-spacing: -1px;
              text-align: left;
              color: #0855c4;
            }
          }
        }
      }
      .box-formCotizador{
        padding: 0;
        .titulo-formulario{
          display: none;
        }
      }
      .formCotizador{
        padding: 2.375rem;
        width: 438px;
        height: 300px;
        border-radius: 3rem 0 3rem 0;
        background: #fff;
        box-shadow: -3px 4px 12px -1px #ccc;
        position: relative;

        h1{
          font-size: 1.35rem;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.25;
          letter-spacing: normal;
          text-align: center;
          color: #003aad;

        }
        &__msg{
          padding: 7px 0;
          position: absolute;
          right: -1rem;
          top: -1rem;
          border-radius: 8px 0 8px 0;
          box-shadow: 0 4px 4px 0 rgba(0,0,0,.19);
          background-color: #003aad !important;
          color: white !important;
          width: 220px;
          height: 40px;
          text-align: center;
          font-size: 1.4rem;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.25;
          letter-spacing: -0.4px;
          color: #ffffff;
        }
        .box-btn-homeForm{
          button{
            border-color: #ea0c90!important;
            background-color: #ea0c90!important;
            max-width: 360px;
            width: 100%;
            height: 51px;
            margin: 0 auto!important;
            border: none;
          }
        }

      }

      .home-pasos{
        padding-top: 42px;
        .nuevos-planes{
          padding: 28px 0 40px;
        }
        &__beneficios{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pasos{
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width: 80%;
          margin: auto;
          align-items: flex-start;
          &__item{
            margin: initial;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            width: 33%;
            padding-left: 0;
            justify-content: center;
            max-width: 314px !important;
            padding-bottom: 0;
            &--flecha{
              position: absolute;
              right: -24px;
            }
            &--desc{
              .titulo{
                text-align: left;
                font-size: 25px;
              }
              .descripcion{
                text-align: left;
                font-size: 18px;
                margin-top: 8px;
                max-width: 260px;
              }
              .descargar-ahora{
                text-align: left;
              }
            }
          }

        }
        .planes{
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 5%;
          justify-content: space-around;
          align-items: flex-end;
          &__item{
            max-width: 270px;
            .black{
              .plan--cuerpo{
               padding-top: 8px;
              }
            }
            .oro{
              .plan--cuerpo{
                padding-top: 8px;
              }
            }
          }
        }
        .plan--cuerpo{
          p{
            height: auto;
            width: 74%;
            span{
              font-size: 15px;
            }
            .check{
              font-weight: 600;
              color: #696969 !important;
            }
          }
          .incluye{
            font-size: 19px;
            span{
              color: #00adee;
              font-size: 26px;
              font-weight: 600;
              padding-right: 3px;
            }
          }
        }
        &__planes{
          &--titulo{
            p{
              text-align: left;
              font-size: 2.4rem;
            }
          }
        }
        .plata{
          min-height: 330px;
        }
        .oro{
          min-height: 360px;
        }
        .black{
          min-height: 390px;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .home-is{
      .home-banner{
        padding-left: 65px;
        min-height: 548px;
      }
      .home-beneficios2{
          padding-top: 48px;
          padding-bottom: 48px;
      }
      .home-pasos{
        &__beneficios{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pasos{
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width: 80%;
          margin: auto;
          &__item{
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 33%;
            padding-left: 0;
            justify-content: center;
            &--flecha{
              position: absolute;
            }
          }

        }
        .planes{
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 5%;
          justify-content: space-around;
          align-items: flex-end;
          &__item{
            max-width: 270px;
            .black{
              .plan--cuerpo{
               padding-top: 8px;
              }
            }
            .oro{
              .plan--cuerpo{
                padding-top: 8px;
              }
            }
          }
        }
        .plan--cuerpo{
          p{
            height: auto;
            width: 74%;
            span{
              font-size: 15px;
            }
            .check{
              font-weight: 600;
              color: #696969 !important;
            }
          }
          .incluye{
            font-size: 19px;
            span{
              color: #00adee;
              font-size: 26px;
              font-weight: 600;
              padding-right: 3px;
            }
          }
        }
        &__planes{
          &--titulo{
            p{
              font-size: 2.4rem;
            }
          }
        }
        .plata{
          min-height: 330px;
        }
        .oro{
          min-height: 360px;
        }
        .black{
          min-height: 390px;
        }
      }

      .home-talleres{
        background-color: #fff;
        .home-talleresBox{
          background-color: #f1f7ff;
          width: 90%;
          border-radius: 12px;
          display: flex;
          align-items: center;
        }
        &__img{
          img{
            height: 184px;
            width: inherit;
          }
        }
        &__desc{
          p{
            text-align: left;
            padding-left: 30px;
          }
        }
        .btn-talleres{
          height: 44px;
          line-height: 44px;
          width: 220px;
        }
      }
      .home-clientes2{
        padding-top: 48px;
        padding-bottom: 48px;
      }
      .home-pasos .plan--cabecera:after {
        bottom: -15px !important;
      }
      .home-pasos .planes .black .plan--cabecera:after {
        bottom: -8px !important;
      }
    }
  }
  @media (min-width: 1200px) {
    .listonMobile{
      display: none;
    }
    .modalHomeVideo{
      iframe{
        height: 450px;
        width: 700px;
      }
    }
    .home-is{
      .boxHome-banner{
        .home-banner{
          //background-image: url(./../static/media/interseguroVehicular_v2/banner_img.svg);
          // background-size: 50%;
          background-size: contain;
          padding: 0 1.5rem;
          padding-left: 65px;
          &__der{
            padding-top: 50px !important;
            margin-left: 0;
            padding-left: 1rem;
            align-items: center;
            p{
              font-size: 2.6rem;
            }
            .box-titulo{
              padding: 0;
              .box-contador{
                position: relative;
                left: calc(530px - 417px);
                bottom: -60px;
                width: 530px;
                //top: 42px;
              }
            }
          }
        }
        /* .box-contador{
            position: relative;
            top: 42px;
          } */
      }

      .formCotizador{
        height: 300px;
        margin-top: 40px;
      }

      .home-pasos{
        .pasos{
          width: 100%;
          max-width: 1200px;
          justify-content: space-between;
          &__item{
            max-width: 360px !important;
          }
        }
        &__planes{
          &--titulo{
            .como-funciona{
              font-size: 36px;
              max-width: 100%;
            }
            .nuevos-planes{
              font-size: 36px;
              max-width: 100%;
            }
            span{
              font-size: 44px;
            }
            p{
              font-size: 28px;
            }
          }
        }
        .planes{
          padding: 0 !important;
          width: 94%;
          max-width: 1200px;
          &__item{
            max-width: 310px !important;
          }
        }
        .plan{
          min-height: 330px;
          &--cabecera{
            &:after{
              bottom: -9px;
            }
            p{
              font-size: 31px;
            }
          }
          &--cuerpo{
            p{
              height: auto;
              width: 74%;
              span{
                font-size: 18px;
              }
              .check{
                font-weight: 600;
                color: #696969 !important;
              }
            }
            .incluye{
              font-size: 19px;
              span{
                color: #00adee;
                font-size: 30px;
                font-weight: 600;
              }
            }
          }
        }

        .plata{
          min-height: 330px;
        }
        .oro{
          min-height: 360px;
        }
        .black{
          min-height: 390px;
        }
      }

      .home-talleres{
        padding: 0 10%;
        .home-talleresBox{
          width: 94%;
        }
      }
      .home-clientes{
        &__titulo{
          height: 83px;
          p{
            font-size: 42px;
          }
        }
      }
      .home-beneficios2{
          padding-top: 48px;
          padding-bottom: 48px;
        .beneficios2{
          max-width: 1200px;
          flex-direction: row;
          padding: 0;
          margin-top: 20px;
          &__item{
            margin-bottom: 0;
            width: 25%;
            flex-direction: column;
            .beneficios-titulo{
              font-size: 25px;
              margin: 8px 0;
            }
            .img-box{
              width: initial;
              height: 110px;
            }

          }
          .beneficios-desc{
            width: initial;
            p{
              text-align: center;
            }
          }
        }
      }
    }
    .home .home-clientes__cuerpo .carousel-clientes__item .carousel-caption div{
      font-size: 39px;
    }
    .home .home-clientes__cuerpo {
      height: 483px;
    }
    .home .home-clientes__cuerpo .carousel-clientes {
      height: 483px !important;
    }
    .home .home-clientes__cuerpo .carousel-clientes__item .carousel-caption {
      align-items: flex-end;
    }
    .carousel-caption {
      top: 20px;
    }
    .home .home-pasos .planes .oro .plan--cabecera:after {
      bottom: -12px !important;
    }
  }

  @media (min-width: 1366px) {
    .home-is{
      .home-pasos{
        padding-top: 42px;
        .planes{
          padding: 0 !important;
          width: 100%;
          max-width: 1200px;
        }
      }
      .home-talleres{
        .home-talleresBox{
          width: 82%;
        }
      }
    }
  }

  select:focus, textarea:focus, input[type="text"]:focus, input[type="password"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="date"]:focus, input[type="month"]:focus, input[type="time"]:focus, input[type="week"]:focus, input[type="number"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="color"]:focus, .uneditable-input:focus {
    box-shadow: none;
    outline: 0 none;
  }
  @media (min-width: 1440px) {
    .home-is{
      .boxHome-banner{
        .home-banner{
          padding-left: 128px;
          max-width: 1440px;
          &__der{
            margin-left: 0;
            padding-left: 3rem;
            p{
              font-size: 3rem;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1900px) {
    .home-is{
      .boxHome-banner{
        .home-banner{
          padding-left: 0;
          &__der{
            margin-left: 0;
            padding-left: 3rem;
            p{
              font-size: 3rem;
            }
          }
        }
      }
    }
  }

  @media (min-height: 768px) and (min-width: 992px){
    .home-is{
        .boxHome-banner{
          background-position: center;
          background-repeat: no-repeat;
          .home-banner{
            // &__izq{
            //   height: calc(100vh - 290px);
            //   min-height: 580px;
            // }
            // &__der{
            //   height: calc(100vh - 290px);
            //   min-height: 580px;
            // }
          }
        }
    }
  }
</style>
