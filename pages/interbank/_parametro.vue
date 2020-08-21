<template>
  <div @load="hjs(event)">

    
    <clip-loader class="cliploader  clipgss" :loading="loadinggss" :color="color" :size="size"></clip-loader>
    <section class="portada2  portada2_ibk" v-bind:class="{clasePadreIbk: this.valorIbk == 2}">
      <div class="portada2__form">
        
        <div class="form-cotizador">
          <div class="form-cotizador__msg">
            Desde US$ 36 x mes
          </div>
          <div class="seguro-vehicular seguro-vehicular-ibk">
            <img src="../../static/media/interseguroVehicular_v2/seguro-vehicular.svg" alt="seguro-vehicular">
          </div>
          <p class="compra-online">Compra 100% online al mejor precio</p>
          <b-form-group>
            <b-form-input
              id="vehicleModelPlate"
              class="text-uppercase form-control"
              @keyup.native="delay($event,750)"              
              maxlength="6"
              autocomplete="off"
              type="text"
              v-model="placa"
              required
              placeholder="Ingresa tu Placa"
              name="Placa"
              aria-label="placa"
              :disabled="this.placaIsDisable"
              autofocus
            ></b-form-input>
          </b-form-group>
          <div class="bcotizar">
            <button
              type="button"
              @click="onSubmit"
              class="box-btn__button box-btn--primary offset-3"
              :disabled="isDisabled"
            >
              Continuar
              <clip-loader class="cliploader" :loading="loading" :color="color" :size="size"></clip-loader>
            </button>
            <a
              class="menu-item__enlace no-placa"
              style="color: #0855c4"
              href
              @click="resetearPlaca($event)"
            >Todavía no tengo placa</a>
          </div>
        </div>
      </div>
      <div class="maneja">
        <p>Maneja tranquilo</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estamos para protegerte</p>
      </div>
    </section>


    <section id="beneficios" class="beneficios">
      <b-container class="beneficios-ibk" style="z-index: 99;">
        <div class="section-header">
          <h3 class="title-principal title-section-home text-center">
            Beneficios Únicos
          </h3>
        </div>
        <div class="section-body">
          <div class="home-beneficios">
            <div class="home-beneficios__item beneficios-item ">
              <div class="beneficios-item__img">
                <img src="../../static/media/interseguroVehicular_v2/choferes.png" alt="icon">
              </div>
              <div class="beneficios-item__titulo">
                <h4>Hasta 5 choferes</h4>
              </div>
              <div class="beneficios-item__texto">
                <p>
                  de reemplazo al año ¡Gratis!
                </p>
              </div>
            </div>
            <div class="home-beneficios__item beneficios-item">
              <div class="beneficios-item__img">
                <img src="../../static/media/interseguroVehicular_v2/gruas.png" alt="icon">
              </div>
              
                <div class="beneficios-item__titulo">
                  <h4>Vamos a rescatarte</h4>
                </div>
                <div class="beneficios-item__texto">
                  <p>donde estés hasta 2 veces al mes.</p>
                </div>
              
            </div>
            <div class="home-beneficios__item beneficios-item">
              <div class="beneficios-item__img">
                <img src="../../static/media/interseguroVehicular_v2/asistencia.png" alt="icon">
              </div>
              
                <div class="beneficios-item__titulo">
                  <h4>¿Tu carro falló?</h4>
                </div>
                <div class="beneficios-item__texto">
                  <p>Te auxiliamos rápido, fallas eléctricas y mecánicas.</p>
                </div>
              
            </div>
            <div class="home-beneficios__item beneficios-item">
              <div class="beneficios-item__img">
                <img src="../../static/media/interseguroVehicular_v2/descuentos.png" alt="icon">
              </div>
              
                <div class="beneficios-item__titulo">
                  <h4>Accede a descuentos</h4>
                </div>
                <div class="beneficios-item__texto">
                  <p>increíbles con nuestro programa Vive+.</p>
                </div>
              
            </div>
          </div>
        </div>
        <div class="row d-flex  justify-content-center">
          <router-link to="/cobertura/" class="btn-beneficios"> Quiero ver más</router-link>
          
        </div>
      </b-container>
    </section>

    <!-- <section id="cyberInterseguro" class="cyberInterseguro">
      <b-container>
        <div class="section-header">
          <h3 class="title-principal title-section-cyber  text-center">
            Las mejores ofertas por Verano
          </h3>          
        </div>
        <div class="section-body  row  justify-content-center  d-flex  d-lg-none">
          <div class="col-sm-6  col-lg-4">
            <a href="#">
              <div class="descuentos__item">
                <img src="../../static/media/interseguroVehicular_v2/cyber_verano.gif" alt="CYBER">
              </div>
            </a>
          </div>
        </div>

        <div class="section-body row  justify-content-center  d-none  d-lg-flex">
          <div class="col-lg-3">
            <a href="#">
              <div class="descuentos__item">
                <img src="../../static/media/interseguroVehicular_v2/cyber_1.jpg" alt="CYBER">
                <div class="descuentos__descripcion">
                  <p>Compra en cualquier plan y protégete contra los malos conductores</strong></p>
                </div>
              </div>
            </a>
          </div>
          
          <div class="col-lg-3">
            <a href="#">
              <div class="descuentos__item">
                <img src="../../static/media/interseguroVehicular_v2/cyber_2.jpg" alt="CYBER">
                <div class="descuentos__descripcion">
                  <p v-if="this.$route.params.parametro == 'tarjetaoh' || this.$route.params.parametro == 'cuentasueldo'"> ¡Aprovecha el <strong>15% de descuento </strong>  en todo Seguro Vehicular!</p>
                  <p v-else> ¡Aprovecha el <strong>15% DE DESCUENTO </strong>  en todo Seguro Vehicular!</p>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-3">
            <a href="#">
              <div class="descuentos__item">
                <img src="../../static/media/interseguroVehicular_v2/cyber_3.jpg" alt="CYBER">
                <div class="descuentos__descripcion">
                  <p>Compra en plan 1 año y participa por <strong>1 año de gasolina gratis</strong></p>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-3">
            <a href="#">
              <div class="descuentos__item">
                <img src="../../static/media/interseguroVehicular_v2/cyber_4.jpg" alt="CYBER">
                <div class="descuentos__descripcion">
                  <p>Compra en plan 2 años</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </b-container>
    </section> -->

    <section id="elegir" class="section elegir" style="background: #f7fafb !important">
      <b-container>
        <div class="section-header">
          <h3 class="title-principal title-section-home">
            ¿Por qué elegirnos?            
          </h3>          
        </div>
        <div class="section-body">
          <div class="home-beneficios">
            <div class="home-beneficios__item beneficios-item ">              
              <div class="beneficios-item__titulo">
                <img src="../../static/media/interseguroVehicular_v2/icon_respaldo_intercorp.png" alt="somos intercorp">
                <h4>Somos Intercorp</h4>
              </div>
              <div class="beneficios-item__texto">
                <p>
                 El grupo económico más grande del país.
                </p>
              </div>
            </div>
            <div class="home-beneficios__item beneficios-item">              
                <div class="beneficios-item__titulo">
                  <img src="../../static/media/interseguroVehicular_v2/despidete_papeleo.png" alt="despidete del papeleo">
                  <h4>Despídete del papeleo</h4>
                </div>
                <div class="beneficios-item__texto">
                  <p>Compra tu póliza 100% online y en 3 minutos.</p>
                </div>
              
            </div>
            <div class="home-beneficios__item beneficios-item">
                <div class="beneficios-item__titulo">
                  <img src="../../static/media/interseguroVehicular_v2/disponible_24_7.png" alt="disponibles 24 a 7">
                  <h4>Disponibles 24/7</h4>
                </div>
                <div class="beneficios-item__texto">
                  <p>WhatsApp o teléfono siempre disponibles.</p>
                </div>
              
            </div>
            <div class="home-beneficios__item beneficios-item">
                <div class="beneficios-item__titulo">
                  <img src="../../static/media/interseguroVehicular_v2/precio_accesible.png" alt="precio accesible">
                  <h4>Precio accesible</h4>
                </div>
                <div class="beneficios-item__texto">
                  <p>Tarifas competitivas para proteger lo que más valoras.</p>
                </div>
              
            </div>
          </div>
        </div>
      </b-container>
    </section>

   

    <section id="clientes" style="background: #fff !important">
      <b-container>
        <div class="section-body">
          <div class="testimonios">
            <div class="section-header">
              <h3 class="title-principal title-section-home text-center">
                ¿Qué dicen nuestros clientes?
                <span class="title-magenta"></span>
              </h3>
            </div>
            <div data-animation="slide"  data-duration="500" class="slider w-slider testimonios__body">
              <div class="w-slider-mask" id="w-slider-mask">
                <div class="slide-2 w-slide">
                
                  <carousel
                    :per-page="1"
                    class="carousel"
                    :autoplay-timeout="4000"
                    :mouseDrag="true"
                    :loop="true"
                    :autoplay="true"
                    :navigationEnabled="true"
                    :autoplayDirection="'left'"
                    :spacePadding=4
                    :paginationEnabled="true"
                    navigationNextLabel="<i class='fa fa-chevron-right'></i>"
                    navigationPrevLabel="<i class='fa fa-chevron-left'></i>"
                    :perPageCustom="[[480, 1], [768, 2], [992, 2], [1200, 3]]"
                    paginationColor="#ccc"
                    paginationActiveColor="#00ADEE">
                  
                    <slide v-for="(item, index) in listatestimonios" :key="index" class="slide testimonios__body--item">                    
                      <div class="testimonios-slide">

                        <div class="testimonios-slide__descripcion">
                          <p class="parrafo">{{item.descripcion}}</p>
                        </div>

                        <div class="testimonios-slide__usuario">
                          <div class="usuario-nombre">
                            <span class="primer-nombre">{{item.nombre}} {{item.apellido}}</span>
                            <span>
                              <img src="../../static/media/interseguroVehicular_v2/estrella_amarilla.svg" alt="estrella_amarilla">
                              <img src="../../static/media/interseguroVehicular_v2/estrella_amarilla.svg" alt="estrella_amarilla">
                              <img src="../../static/media/interseguroVehicular_v2/estrella_amarilla.svg" alt="estrella_amarilla">
                              <template v-if="item.id == '5'">                                    
                                <img src="../../static/media/interseguroVehicular_v2/estrella_amarilla.svg" alt="estrella_amarilla">
                                <img src="../../static/media/interseguroVehicular_v2/estrella_amarilla.svg" alt="estrella_amarilla">
                              </template>
                              <template v-else-if="item.id == '4.5'">
                                <img src="../../static/media/interseguroVehicular_v2/estrella_amarilla.svg" alt="estrella_amarilla">
                                <img src="../../static/media/interseguroVehicular_v2/media_estrella.svg" alt="estrella_amarilla">
                              </template>
                              <template v-else-if="item.id == '4'">
                                <img src="../../static/media/interseguroVehicular_v2/estrella_amarilla.svg" alt="estrella_amarilla">
                                <img src="../../static/media/interseguroVehicular_v2/estrella_gris.svg" alt="estrella_amarilla">
                              </template>
                              <template v-else-if="item.id == '3.5'">
                                <img src="../../static/media/interseguroVehicular_v2/media_estrella.svg" alt="estrella_amarilla">
                                <img src="../../static/media/interseguroVehicular_v2/estrella_gris.svg" alt="estrella_amarilla">
                              </template>
                            </span>
                          </div>
                        </div>
                        
                      </div>
                      
                    </slide>
                    
                  </carousel>
                  
                </div>
              </div>
            </div>                
          </div>
        </div>
      </b-container>
    </section>

    <section id="talleres" class="talleres" style="background: #f7fafb !important">
      <b-container fluid class="container-talleres">
        <div class="section-header  d-sm-none">
          <h3 class="title-principal title-section-home">
            Talleres Afiliados
          </h3>
          <p>Encuentra la relación y ubicación de <br> nuestros talleres afiliados</p>
        </div>
        <div class="section-body">
          <div class="mapa d-none  d-sm-flex">
            <img   src="../../static/media/interseguroVehicular_v2/talleres.png" alt="talleres">

          </div>
          <div class="contenido">
            <div class="section-header d-none d-sm-block">
              <h3 class="title-principal title-section-home">
                Talleres Afiliados
              </h3>
              <p>Encuentra la relación y ubicación de <br> nuestros talleres afiliados</p>
            </div>
            <div class="box-btns">
              <b-button class="talleres-cercanos">
                <a target="_black" href="https://www.google.com/maps/d/u/0/viewer?mid=13NFmWBG7859lYz_z_2ZluRQaDaTH9Hi9&hl=es&ll=-12.109991959196146%2C-77.03860524421464&z=12">Ver talleres más cercanos</a>
              </b-button>
            </div>
            
          </div>
        </div>
      </b-container>
    </section>   


    <b-modal  
      id="modalcampaniatv"
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="modalcampaniatv"
      class="modalcampaniatv"
      size="lg">
      <div class="modal-content">
        <b-btn class="mt-3 modal-close"
          @click="hideModalcampaniatv()"
          style="border: none;">
          <img  src="../../static/media/img/flujo/cotizacion/modal-close.svg"
            width="40"
            alt="icon close"
            class="image-9">
        </b-btn>
        <div class="modal-head">
          <div class="box-titulo">
            <h2>LLÉVATE UN SMART TV 4K <br> UHD SAMSUNG 55"</h2>
          </div>
          <div class="modal-divider"></div>
        </div>
        <div class="modal-body">
          <div class="modal-body__item">
            <div class="box-img">
              <img src="../../static/media/img/flujo/cotizacion/paso1_tv.png" alt="paso 1 tv">
            </div>
            <div class="box-text">
              <div class="box-descripcion">
                <p>Elige la opción "Plan 2 años" en la compra de tu seguro vehicular. </p>
              </div>
            </div>
          </div>
          <div class="modal-body__item">
            <div class="box-img">
              <img src="../../static/media/img/flujo/cotizacion/paso2_tv.png" alt="paso 2 tv">
            </div>
            <div class="box-text">
              <div class="box-descripcion">
                <p>Luego realiza la evaluación vehicular de manera digital.</p>
              </div>
            </div>
          </div>
          <div class="modal-body__item">
            <div class="box-img">
              <img src="../../static/media/img/flujo/cotizacion/paso3_tv.png" alt="paso 3 tv">
            </div>
            <!-- <div class="box-text">
              <div class="box-descripcion">
                <p><strong>¡El delivery de la Smart TV está incluído!</strong>
                    Nos contactaremos contigo en las siguientes 48h para coordinar la entrega. </p>
              </div>
            </div> -->
          </div>
        </div>
        <div @click="hideModalcampaniatv()" class="modal-footer">
          COTIZAR AHORA
        </div>
      </div>
    </b-modal>
    
  </div>
  
</template>

<script>
  export default {
    layout: "InterseguroParametro",
      data () {
          return {
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
      components: {},
      created() {
        this.$bus.$on('updatingTest2',(e)=>{
          this.flagCloseListon = e
        })
      },
      methods: {
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
          onSubmit() {

          },
          resetearPlaca(eve) {
            eve.preventDefault();
            this.$store.dispatch('common/getcreateRemarketing', item.email).then(res  => {
              this.createMail()
              this.$store.commit('common/setCodeRmkt', res.data.body.remarketingId)
              this.$nuxt.$router.push({path: "/cotiza/cotizacion-sin-placa"})
            })
          },
          consultarPlaca(event, ms) {  
            if(this.item.plateNumber.length == 6){
              this.loading = true
              this.isDisabled = true
              var self = this;
              clearTimeout(self.timer);
              self.timer = setTimeout(function() {
                self.validacionInput(event);
              }, ms);
            }else{
              this.isDisabled =false
            }      
          },
          validacionInput(event) {
            this.item.plateNumber = this.item.plateNumber.replace(/[^a-z0-9\s]/gi, "").replace(/[_\s]/g, "");
            var longitudDePlaca = this.item.plateNumber.length;
            if (longitudDePlaca > 6) {
              this.item.plateNumber = this.item.plateNumber.slice(0, 6);
            } else if (longitudDePlaca == 6) {
              event.preventDefault();
              // this.mostrarMensaje = "";
              // this.isDisabledMsg = true;
              // this.loading = true;
              // this.isDisabled = true;
              // localStorage.setItem("placa", this.placa.toUpperCase());
              // localStorage.setItem("email", this.email);

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
          },
          getVehicle () {
            this.$store.dispatch('common/getVehicle', this.item)
            .then((res) =>{
              let respuesta = res.data.body
              /* Code 0 = > el servicio respondio correctamente */
              if (res.data.code == 0) {
                /* Existe en nuestra base de datos */                
                if (respuesta.exists == true) {
                  this.$store.commit('common/setVehicleState', 1)
                  if(respuesta.client != undefined ){
                    this.$store.commit('common/setOrigenCliente', 2)
                    this.$store.commit('common/setClienteSOAT', respuesta.client)
                    this.$store.commit('common/setDocumentoLocal', respuesta.client.documentNumber)
                    this.$store.commit('common/setEmail',res.data.body.client.emailAddress)
                  }
                  /* Tiene una poliza activa */
                  if (respuesta.activePolicy === true) {
                    this.$nuxt.$router.push({path: "/placa-registrada"})
                  } else {             
                    this.loading = false       
                    this.$nuxt.$router.push("/cotiza/cotizacion/")
                  }
                }else {                
                  this.$store.commit('common/setCodeRmkt', res.data.body.remarketingId)
                  this.$store.commit('common/setVehicleState', 0)
                  this.loading = false
                  this.$nuxt.$router.push("/cotiza/cotizacion/")
                }
              }else{

              }
            })
          },
          
      },
      mounted () {
        
        this.$store.commit('common/setNuevoProducto', false)
        this.$store.commit('common/setFlujoDetectado', 'Interbank - parametros')
        this.$store.commit('common/resetState')
        this.$store.commit('common/setBusinessId', 1)
        /************************************************************************ */
        /********************* CONFIGURACIONES GLOBALES************************* */
        /************************************************************************ */
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
        if(url == "/vehicular/" || url == "/vehicular"){
          localStorage.setItem("urlLocal", "/")
        }
        /************************************************************************ */
        /************************************************************************ */
        /************************************************************************ */

        
        // let objJWT = JSON.parse(localStorage.setItem("jwt",{}))

        /* RESET DE ESTADOS */        
        if (localStorage.getItem("flagCloseListon") == 0) {
            this.flagCloseListon = 0
            localStorage.setItem("flagCloseListon", 0)
        }else if  (localStorage.getItem("flagCloseListon") == 1) {           
            this.flagCloseListon = 1
            localStorage.setItem("flagCloseListon", 1)
        }else{
            localStorage.setItem("flagCloseListon", 1)
            this.flagCloseListon = 1
        }
        this.createMail()

        /************************************************************************ */
        /********************* COMPROBAMOS EL PARAMETRO ************************* */
        /************************************************************************ */
        

        if (this.$route.params.parametro.length == 6){
          this.PaginaVista()
          this.$store.dispatch('common/getDataRmkt', this.$route.params.parametro)
            .then((res) =>{
              if(res.data.codigoRespuesta == "01"){              
                let respuesta = res.data.detalle
                
                this.$store.commit('common/setCodeRmkt',respuesta.codigoVenta)
                this.$store.commit('common/setPlateNumber',respuesta.datosProducto.placa)
                this.$store.commit('common/setCurrent',respuesta.datosProducto.valorComercial)
                this.$store.commit('common/setEmail',respuesta.correo)
                this.$store.commit('common/setFechaVigencia', respuesta.datosProducto.fechaInicio)
                this.$store.commit('common/setPlanSeleccionado', respuesta.datosProducto.planSeleccionado)
                this.$store.commit('common/setItemElegido', respuesta.datosProducto.itemElegido)                 
                this.$store.commit('common/setIBusinessId', respuesta.datosProducto.businessId)
                this.$store.commit('common/setEntidadFinanciera', {
                  id: respuesta.datosProducto.idEndosoSeleccionado, 
                  name: respuesta.datosProducto.endosoSeleccionado
                })

                let rmktItem = {
                  plateNumber: this.$store.state.common.plateNumber,
                  email: this.$store.state.common.email
                }
                this.$store.dispatch('common/getVehicle', rmktItem)
                  .then((ress) => {
                    if (ress.data.code == 0) {
                      if (ress.data.body.activePolicy === true) {
                        this.$nuxt.$router.push({path: "/placa-registrada"})
                      } else {
                        if (res.data.detalle.pantalla == 1) {
                          this.$nuxt.$router.push("/cotiza/cotizacion/")
                        } else if (res.data.detalle.pantalla == 2) {
                          this.$store.commit('common/setDocumentoLocal', respuesta.datosTitular.numeroDocumento)
                        } else if (res.data.detalle.pantalla == 3) {
                          this.$store.commit('common/setDocumentoLocal', respuesta.datosTitular.numeroDocumento)
                          this.$store.commit('common/setNumeroTelefono', respuesta.datosTitular.numeroTelefono)
                          this.$store.commit('common/setFrecuenciaPago', respuesta.datosPago.idFrecuencia)
                          this.$nuxt.$router.push("/cotiza/como-pagar/")
                        }
                      }
                    }
                  })
                
              } 
            })
        }else{
          if (this.$route.params.parametro == 'cuentasueldo/' || this.$route.params.parametro == 'cuentasueldo') {
            
            this.$store.commit('common/setCuentasueldo', 'Y')
            this.$store.commit('common/setTarjetaoh', 'N')
            
            this.PaginaVista()
          }else if(this.$route.params.parametro == 'tarjetaoh/' || this.$route.params.parametro == 'tarjetaoh'){
            this.$store.commit('common/setCuentasueldo', 'N')
            this.$store.commit('common/setTarjetaoh', 'Y')
            this.PaginaVista()
          }else{

          }
        }
      }
      
  }
</script>

<style lang="scss" scoped>
.banderaSlider{
  position: absolute;
  top: 0;
  right: 10%;
  background: url('../../static/media/interseguroVehicular_v2/slider_bandera.png');
  width: 187px;
  height: 169px;
  background-size: contain;
}
.bannerSlider{
  width: 440px;
  display: flex;
  align-items: center;
  height: 100%;
  .VueCarousel-pagination{
    display: flex;
    justify-content: flex-start;
    .VueCarousel-dot-container{
      margin: 0;
    }
  }
  &__item{
    .item{
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        color: white;
        font-size: 23px;
        padding-right: 32px;
        line-height: 1.2;
      }
      img{
        max-height: 125px;
        width: auto;
        max-width: 125px;
      }
    }
  }
}
.cyberInterseguro{
  // background: url("../../static/media/interseguroVehicular_v2/ladrillos.jpg");
  padding-top: 46px !important;
  padding-bottom: 46px !important;
  a{
    text-decoration: none;
    color: #053f8a;
    font-family: "omnesregular";
  }
  .title-section-cyber{
    color: #053f8a;
    font-family: "omnes";
    font-size: 36px;
    font-weight: 500;
  }
  
  .descuentos{
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    margin: auto;
    font-family: "omnesregular";
    
    &__descripcion{
      padding: 12px 12px 0 12px; 
      font-size: 16px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        text-align: center;
      }
    }
    &__item{
      overflow: hidden;
      box-shadow: 0 8px 22px 0 rgba(35, 45, 65, 0.18);
      border-radius: 5px;
      margin: 24px;
      img{
        width: 100%;
      }
    }
  }
}
.campania_cyber{
  
  .exampleMobile{
      position: relative;
      z-index: 99;
      margin-top: 12px;
  }
}
.campaniatv-home-mobile {
    position: fixed;
    bottom: 0;
    background: #1e1e1e;
    color: white;
    width: 100%;
    z-index: 99;
    // background: url("../../static/media/interseguroVehicular_v2/banner_mobile_cyber.jpg");
    height: 90px;
    justify-content: flex-end;
    align-items: center;
    &__texto{
      width: 45%;
      font-family: "omnes";
      font-size: 16px;
    }
}
.campania_cyber .campaniatv-home__body{
  display: flex;
  justify-content: flex-end;
}
  .talleres{
    p{
      color: #787878;
      font-family: "omnesregular";
      font-size: 17px;
      padding: 12px 0;
    }
  }
  .respaldo-intercorp{
    color: gray;
    font-size: 12px;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 4px 0;
    justify-content: center;
    span{
      margin-right: 8px;
    }    
    img{
      height: 14px;
    }
  }
  .btn-beneficios{
    border: 1px solid #EA0C90;
    background: white;
    padding: 12px 22px;
    border-radius: 22px;
    margin: 14px 0 42px;
    color: #EA0C90;
    font-weight: 500;
    font-size: 18px;
    &:hover{
      text-decoration: none;
      transition: .50s;
      background: #EA0C90;
      color: white;
    }
  }
  .v-spinner{
    right: 0;
  }
  .clipgss{
    background: white;
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
  }
  .title-section-home{
    color : #00ADEE !important;
  }





  .ui-container {
  width: 600px;
  height: 400px;
  overflow:hidden;
  position:relative;
  scroll-behavior:smooth;
}
.ui-items{
  width:calc( 600px *  4);
  height:100%;
  display:flex;
  flex-wrap:nowrap;
}
.ui-items .ui-item{
  width: 600px;
  height:400px;
  padding:1.5em;
  background-color: #36a5ff;
  background-size:cover;
  color:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
}

.ui-items .ui-item span{
  text-align:center;
  font-size:24px;
  position:relative;
  font-family:"lato";
  background-image:linear-gradient(to right,#fff,#fff);
  background-size: 0% 100%;
  background-position: 0% 100%;
  background-repeat:no-repeat;
}

.ui-buttons{
  display:inline-block;
  position:sticky;
  left:50%;
  bottom:10px;
  transform:translateX(-50%);
}

.ui-buttons a{
  display:inline-block;
  border-radius:50%;
  width:15px;
  height:15px;
  background-color: #fff;
  transition:transform 0.1s;
  pointer-events:auto;
}

/* => animation <= */
.ui-items .ui-item:target{
  animation:opacity 500ms cubic-bezier(.65,.05,.36,1) ;
}

.ui-items .ui-item:target span{
  animation:move 1500ms cubic-bezier(.65,.05,.36,1) 100ms; 
}
/* => end animation <= */


a:active {
  outline:none;
  background-color: #777;
  transform:scale(1.4);
}

/* for the item itself */
@keyframes opacity {
  0%{opacity:0}
  100%{opacity:1}
}

/* for the item's text */
@keyframes move {
  0%{
    left:-50%;
    background-size: 100% 100%;
  }
  30%{
  left:0%;
}
  100%{
   background-size: 0% 100%;
  background-position: 0% 100%;
  }
}

.portada2 {
    margin-top: 70px !important
}
</style>
