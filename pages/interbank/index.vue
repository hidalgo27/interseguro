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
          <b-form-group>
            <p class="compra-online">Compra 100% online al mejor precio</p>
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
              class="menu-item__enlace  no-placa"
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

   

    <div class="home-clientes">
      <div class="home-clientes__titulo">
        <p>¿Qué dicen nuestros clientes?</p>
      </div>
      <div class="home-clientes__cuerpo">
        <b-carousel
          id="carousel-fade"
          class="carousel-clientes"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          he
          background="transparent"
          style="text-shadow: 1px 1px 2px #333; color: red;"
        >
          
          <!-- Slides with custom text -->
          <b-carousel-slide class="carousel-clientes__item" img-blank-color='transparent'>
            <div>
              "Fue facilísimo contratar el seguro, en comparación con la gestión tradicional."
              <br><br>Manuel Augusto
            </div>
          </b-carousel-slide>

          <b-carousel-slide class="carousel-clientes__item" img-blank-color='transparent'>
            <div>
              "Aún no tengo un siniestro con mi carro, pero el nivel de respuesta hasta el momento ha sido rápido."
              <br><br>Carolina Chavez
            </div>
          </b-carousel-slide>

          <b-carousel-slide class="carousel-clientes__item" img-blank-color='transparent'>
            <div>
              "La info que me enviaron sobre la cobertura era concisa y simple de entender!"
              <br><br>Enrique Quispe
            </div>
          </b-carousel-slide>

          <b-carousel-slide class="carousel-clientes__item" img-blank-color='transparent'>
            <div>
              "Muy fácil tomar el seguro: realizar la cotización es rápido y claro."
              <br><br>Jorge Castillo
            </div>
          </b-carousel-slide>

          <b-carousel-slide class="carousel-clientes__item" img-blank-color='transparent'>
            <div>
              "La comunicación es por WhatsApp y la inspección la hice al toque."
              <br><br>Claudia Portocarrero
            </div>
          </b-carousel-slide>

          <b-carousel-slide class="carousel-clientes__item" img-blank-color='transparent'>
            <div>
              "La atención ha sido rápida y efectiva, asegure mi carro en unos minutos y sin salir de mi casa."
              <br><br>Katherine Reategui
            </div>
          </b-carousel-slide>

        </b-carousel>
       
      </div>
    </div>

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
    layout: "InterbankHome",
      data () {
          return {
            valorIbk: 2,
            isDisabled: false,
            placaIsDisable: false,
            placa: "",
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
        if(this.$route.name == "pagogss-pagogss"){
          this.loadinggss = true
        }else{
          this.loadinggss = false
        }

      },
      methods: {
          resetearPlaca(eve) {
            eve.preventDefault();
            this.$store.dispatch('common/getcreateRemarketing', this.item.email).then(res  => {
              this.$store.commit('common/setCodeRmkt', res.data.body.id)
              this.$nuxt.$router.push({path: "/cotiza/cotizacion-sin-placa-interbank"})
            })
          },
          onSubmit() {

          },
          consultarPlaca(event, ms) {  
            if(this.item.plateNumber.length == 6){
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
            this.$store.dispatch('common/getVehicle', this.item)
            .then((res) =>{
              let respuesta = res.data.body
              /* Code 0 = > el servicio respondio correctamente */
              if (res.data.code == 0) {
                /* Existe en nuestra base de datos */
                if (respuesta.exists == true) {
                  this.$store.commit('common/setVehicleState', 1)
                  // this.$store.commit('common/setDocumentoLocal',res.data.body.client.documentNumber)
                  /* Tiene una poliza activa */
                  if (respuesta.activePolicy === true) {
                    this.$nuxt.$router.push({path: "/placa-registrada"})
                  } else {
                    this.$nuxt.$router.push("/cotiza/cotizacion-interbank")
                  }
                }else {                
                  this.$store.commit('common/setCodeRmkt', res.data.body.remarketingId)
                  this.$store.commit('common/setVehicleState', 0)
                  this.$nuxt.$router.push("/cotiza/cotizacion-interbank")
                }
              }else{

              }
            })

          },
      },
      computed: {
          
      },
      mounted () {
        this.$store.commit('common/setNuevoProducto', false)
        this.$store.commit('common/setDiscountType', '')
        this.$store.commit('common/setFlujoDetectado', 'Interbank')
        this.$store.commit('common/resetState')
       /************************************************************************ */
        /********************* CONFIGURACIONES GLOBALES************************* */
        /************************************************************************ */
        this.$store.commit('common/setCuentasueldo', 'N')
        this.$store.commit('common/setTarjetaoh', 'N')
        this.$store.commit('common/setBusinessId', 2)
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
        this.$store.commit('common/setLeaveMessage',0) 
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
    font-family: 'Omnes Medium';
  }
  .title-section-cyber{
    color: #053f8a;
    font-family: 'Omnes Medium';
    font-size: 36px;
    font-weight: 500;
  }
  
  .descuentos{
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    margin: auto;
    font-family: 'Omnes Medium';
    
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
      font-family: 'Omnes Medium';
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
      font-family: 'Omnes Medium';
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
