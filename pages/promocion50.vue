<template>
  <div class="home">
    <div class="boxHome-banner">      
      <div  class="home-banner"  v-bind:class="{'pt-4': flagCloseListon == 1  }">
        <div class="home-banner__izq">
          <div class="box-formCotizador">
            <p class="titulo-formulario">
                <img class="img-form" src="./../static/media/img/home/img-form.png" alt="banner">
              Manejar tranquilo <br> ahora es más fácil</p>
            <b-form class="formCotizador">
                         
              <div class="formCotizador__msg">
                Desde US$ 12 al mes
              </div>
              <h1 class="">Cotiza tu seguro vehicular ahora</h1>
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
                    <clip-loader class="cliploader" :loading="loading" :color="color" :size="size"></clip-loader>
                </button>
                <p class="no-tengo-placa" @click="resetearPlaca($event)">Todavía no tengo placa</p>
                <p class="respaldo-intercorp">
                  <span> Con el respaldo del grupo</span>
                  <img src="./../static/media/img/home/respaldo-intercorp.svg" alt="respaldo_intercorp">
                </p>
              </div>
            </b-form>
          </div>
        </div>
        <div class="home-banner__der">
          <div class="box-titulo">
            <p class="title-banner">
              Manejar tranquilo <br> ahora es más fácil
            </p>
          </div>
        </div>
      </div>
    </div>


    <div class="home-pasos">
      <div class="home-pasos__titulo">
      </div>

      <div class="home-pasos__beneficios">
        <div class="home-pasos__planes--titulo">
          <p class="como-funciona">¿Cómo funciona? </p>
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
          <div class="pasos__item">
            <div class="pasos__item--img">
              <img src="./../static/media/img/home/candado.png" alt="candado">            
            </div>
            <div class="pasos__item--desc">
              <p class="titulo">Paga</p>
              <p class="descripcion">¡Listo! <br> Ya estás asegurado</p>
            </div>          
          </div>
        </div>
        <p v-b-modal.modalHomeVideo class="parrafo-video" @click="pago_datalayer('CLICK_VIDEO')">
            <img width="26" src="./../static/media/img/home/play.png" alt="mira el video">
            Mira el video
          </p>
          <div class="home-pasos__planes--titulo   pt-lg-3 d-block">
          <p>¡Nuevo! Tenemos 3 planes </p>
          
        </div>
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

    <div class="home-beneficios2">
      <div class="home-beneficios2__titulo">
        <p>Estamos para lo que necesites</p>
      </div>
      <div class="home-beneficios2__cuerpo  beneficios  d-none  d-lg-flex">
        <div class="beneficios__item">
          <div class="img-box">
            <img src="./../static/media/img/home/choferes.png" alt="choferes">
          </div>
          <br>
          <p  class="">Hasta <span>5 choferes <br> de reemplazo</span> al año </p>
        </div>
        <div class="beneficios__item">
          <div class="img-box">
            <img src="./../static/media/img/home/gruas.png" alt="gruas">
          </div>
          <br>
          <p  class="">Vamos a rescatarte <br> donde estés <span>hasta 2 veces <br> al mes</span> </p>
        </div>
        <div class="beneficios__item">
          <div class="img-box">
            <img src="./../static/media/img/home/mecanico.png" alt="mecanico">
          </div>
          <br>          
          <p  class=""><span>Te auxiliamos rápido,</span> <br> fallas eléctricas y mecánicas </p>
        </div>
        <div class="beneficios__item">
          <div class="img-box">
            <img src="./../static/media/img/home/dcto.png" alt="dcto">
          </div>
          <br>
          
          <p  class=""><span>Descuentos increíbles</span> </p>
        </div>
      </div>

      <div class="home-beneficios2__cuerpoMobile    d-block  d-lg-none">
        <b-carousel
          id="carousel-fade"
          class="carousel-beneficios"
          v-model="slideBeneficios"
          :interval="4000"
          controls
          indicators
          he
          background="transparent"
          style="text-shadow: 1px 1px 2px #333; color: red;"
        >

          <b-carousel-slide class="carousel-beneficios__item" img-blank-color='transparent'>
            <div>
              <div class="img-box">
                <img src="./../static/media/img/home/choferes.png" alt="choferes">
              </div>
              <br>
              <p><strong class="item">Hasta 5 choferes de reemplazo al año</strong> </p>
            </div>
          </b-carousel-slide>

          <b-carousel-slide class="carousel-beneficios__item" img-blank-color='transparent'>
            <div>
              <div class="img-box" >
                <img src="./../static/media/img/home/gruas.png" alt="gruas">
              </div>
              <br>
              <p><strong>Vamos a rescatarte <br> donde estés hasta 2 veces <br> al mes</strong> </p>   
            </div>
          </b-carousel-slide>

          <b-carousel-slide class="carousel-beneficios__item" img-blank-color='transparent'>
            <div>
              <div class="img-box">
                <img src="./../static/media/img/home/mecanico.png" alt="mecanico">
              </div>
              <br>
              <p><strong>Te auxiliamos rápido, <br> fallas eléctricas y mecánicas</strong></p>
            </div>
          </b-carousel-slide>

          <b-carousel-slide class="carousel-beneficios__item" img-blank-color='transparent'>
            <div>
              <div class="img-box">
                <img src="./../static/media/img/home/dcto.png" alt="dcto">
              </div>
              <br>
              <p><strong>Descuentos increíbles</strong></p>
              
            </div>
          </b-carousel-slide> 
        </b-carousel>
      </div>
    </div>

    <div class="home-talleres">
      <div class="home-talleresBox">
        <div class="home-talleres__desc">
          <p class="d-block  d-md-none"><strong> Repara tu auto </strong> <br> en nuestra red de talleres</p>
          <p class="d-none  d-md-block"><strong> Repara tu auto </strong> <br> en nuestra red <br> de talleres</p>
        </div>
        <div class="home-talleres__boxBtn  d-block  d-lg-none">
          <a class="btn-talleres" target="_blank" href="https://www.google.com/maps/d/u/0/viewer?mid=13NFmWBG7859lYz_z_2ZluRQaDaTH9Hi9&amp;hl=es&amp;ll=-12.109991959196146%2C-77.03860524421464&amp;z=12">TALLERES AFILIADOS</a>
        </div>
        <div class="home-talleres__img">
          <img src="./../static/media/img/home/talleres.png" alt="talleres">
        </div>
        <div class="home-talleres__btn  d-none  d-lg-block">
          <a class="btn-talleres" target="_blank" href="https://www.google.com/maps/d/u/0/viewer?mid=13NFmWBG7859lYz_z_2ZluRQaDaTH9Hi9&amp;hl=es&amp;ll=-12.109991959196146%2C-77.03860524421464&amp;z=12">TALLERES AFILIADOS</a>
        </div>
      </div>
    </div>
     
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
  export default {
    layout: "InterseguroListon",
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
      },
      methods: {
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
          onSubmit() {

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
                this.$store.commit('common/setAppDiscount', respuesta.appDiscount)
                if (respuesta.appDiscount == true) {
                  this.$nuxt.$router.push({path: "/app/"+this.item.plateNumber})
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
                
                
              }else{

              }
            })

          },
      },
      computed: {
          
      },
      mounted () {
        
        localStorage.setItem("urlLocal", "/promocion50")
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
        if(url == "/vehicular/" || url == "/vehicular" || url == "/testvehicular/" || url == "/testvehicular"){
          setTimeout(() => {
            localStorage.setItem("urlLocal", "/")
          }, 150);
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

<style lang="scss" scope>

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
  .home{
    font-size: 16px;
    background-color: #fff;   
    .boxHome-banner{      
      background-color:  rgba(8,85,196,.1);
      position: relative;
      height: 296px;
      
      .home-banner{
        margin: auto;
        background-repeat: no-repeat;
        background-size: 700px;
        background-position-y: bottom;
        background-position-x: right;
        display: flex;
        align-items: center;
        height: 100%;
        flex-direction: column;
        &__izq{
          margin-top: 24px;
          padding-top: 68px !important;
          height: 500px;
          display: flex;
          align-items: flex-start;
          width: 90%;
          border-bottom: 1px solid white !important;
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
        padding-top: 18px;
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
      padding:2rem 1.5rem;
      max-width: 438px;
      width: 100%;
      height: 314px;
      border-radius: 3rem 0 3rem 0;
      background: #fff;
      box-shadow: -3px 4px 12px -1px #ccc;
      position: relative;
      margin: auto;      
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
        background-color: #0855c4!important;
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
    
    .home-pasos{
      background-color: #fff;
      padding-top: 230px;
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
          color: #454a6c!important;          
        }
        .como-funciona{
          padding: 16px 0;
          font-size: 1.3rem;
          font-family: 'Omnes Regular';
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
              background-image: url(../static/media/img/home/plata_dto.png);
            } 
            &:after{
              background-image: url(../static/media/img/home/plata.png);
              bottom: -9px;
            }            
          }
        }
        .oro{        
          .plan--cabecera{  
            background-color: #e6ac38;
            &:before{
              background-image: url(../static/media/img/home/oro_dto.png);
            }
            &:after{
              background-image: url(../static/media/img/home/oro.png);
            } 
          }
        }
        .black{        
          .plan--cabecera{  
            background-color: #27362d;
            &:before{
              background-image: url(../static/media/img/home/black_dto.png);
            }
            &:after{
              background-image: url(../static/media/img/home/black.png);
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
            content: "";
            position: absolute;
            bottom: -8px;
            width: 100%;
            height: 28px;
            background-size: contain;
            background-repeat: no-repeat;
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
    .home-talleres{
      background-color: #f1f7ff;
      padding-top: 18px;
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
    .home-clientes{
      &__titulo{
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
          height: 25px;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.6;
          letter-spacing: normal;
          text-align: center;
          color: #00adee;

        }
      }
      &__cuerpo{
        background-image: linear-gradient(118deg, #00adee 1%, #1faca6 100%);
        height: 300px;
        .carousel-clientes{
          height: 300px !important;
          &__item{
            height: 300px !important;
            .carousel-caption {
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              div{
                font-size: 18px;
                font-stretch: normal;
                font-style: italic;
                line-height: 1;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;
                font-weight: 400;
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
      padding: 18px 0 36px 0;
      background: white;
      .carousel-beneficios{
        height: 300px !important;
        &__item{
          height: 300px !important;          
          .carousel-caption {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-shadow: none !important;
            div{
              .img-box{
                width: 148px;
                height: 148px;
                background-color: rgba(126,179,255,0.1);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: auto;
              }
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
      &__titulo{
        p{
          font-size: 22px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.59;
          letter-spacing: normal;
          text-align: center;
          color: #696969;
        }
      }
      .beneficios{
        display: flex;
        justify-content: center;
        padding: 0 12%;
        margin: auto;
        &__item{
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 25%;
          &:hover{
            img{
              transition: all 0.5s;
              transform: scale(1.2);
            }
            span{
              transition: all 0.5s;
              font-weight: 500;
              font-family: 'Omnes Medium';
            }
          }
          .img-box{
            width: 148px;
            height: 148px;
            background-color: rgba(126,179,255,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          img{
            width: 125px;
          }
          p{
            transition: all .75s;
            font-size: 18px;
            font-weight: 400;
            font-family: 'Omnes Regular';
            font-stretch: 400;
            font-style: normal;
            line-height: 0.89;
            letter-spacing: normal;
            text-align: center;
            color: #696969;            
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
    .home{
      .boxHome-banner{      
        background-color:  rgba(8,85,196,.1);
        height: auto;
        .home-banner{
          flex-direction: row;
          padding-left: 45px;
          min-height: 580px;
          &__izq{
            padding-top: 68px !important;
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
            padding-top: 68px !important;
            height: calc(85vh);
            display: flex;
            -webkit-box-align: center;
            background-size: 90%;
            background-image: url(/vehicular/_nuxt/static/media/interseguroVehicular_v2/banner_img.svg);
            background-repeat: no-repeat;
            background-position-y: bottom;
            background-position-x: right;
            width: 100%;
            align-items: flex-start;
            .box-titulo{
              padding-top: 150px;
              padding-left: 24px;
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
        height: 360px;
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
          background-color: #0855c4 !important;
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
    }
  }
  @media (min-width: 1024px) {
    .home{
      .home-banner{
        padding-left: 65px;
      }
      .home-pasos{
        padding-top: 0;
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
              right: 0;
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
      .home-clientes{
        &__titulo{
          height: 70px;
          p{
            font-size: 32px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 0.76;
            letter-spacing: normal;
            text-align: left;
            color: #696969;
          }
        }
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
    .home{
      .boxHome-banner{        
        .home-banner{
          background-image: url(./../static/media/interseguroVehicular_v2/banner_img.svg);
          background-size: 50%;
          padding: 0 1.5rem;
          padding-left: 65px;
          &__der{
            background: transparent;
            margin-left: 0;
            padding-left: 1rem;
            align-items: center;
            p{
              font-size: 2.6rem;
            }
            .box-titulo{
              padding: 0;
            }
          }
        }
      }
      .formCotizador{
        height: 360px;
        margin-top: 40px;
      }

      .home-pasos{
        padding-top: 0;        
        .pasos{
          width: 100%;
          max-width: 1200px;
          &__item{
            padding-bottom: 10px;
          }
        }
        &__planes{
          &--titulo{
            .como-funciona{
              padding: 18px 0;
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
          margin-top: 20px;
          padding: 0 10%;
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
        &__titulo{
          height: 83px;
          p{
            font-size: 42px;
          }
        }
        .carousel-beneficios{
          &__item{
            .carousel-caption{
              div{
                img{
                  width: 84px;
                }
              }
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
    .home{
      .home-pasos{
        padding-top: 0;
        .planes{
          padding: 0 10%;
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
    .home{
      .boxHome-banner{              
        .home-banner{
          background-image: url(./../static/media/interseguroVehicular_v2/banner_img.svg);
          background-size: 50%;
          padding-left: 128px;
          max-width: 1440px;
          &__der{
            background: transparent ;
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
    .home{
      .boxHome-banner{              
        .home-banner{
          padding-left: 0;
          &__der{
            background: transparent ;
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
    .home{
        .boxHome-banner{
          .home-banner{
            &__izq{
              height: calc(100vh - 290px);
              min-height: 580px;
            }
            &__der{
              height: calc(100vh - 290px);
              min-height: 580px;
            }
          }
        }
    }
  }
</style>