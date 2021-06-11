<template>
  <div class="nuevo-home">
    <div class="banner">
      <div class="banner-blue"></div>
      <div class="banner-textos">
        <p class="titulo">Proteger tu auto no <span><br></span> tiene porque ser caro.</p>
        <p class="subtitulo">
          Todos nuestros planes con <span><br></span> <strong>10% de descuento anual.</strong>
        </p>
      </div>
      <b-form class="formCotizador">                         
        <div class="formCotizador__msg">
          Desde US$ 12 al mes
        </div>
        <h1>Cotiza tu seguro vehicular ahora</h1>
        <b-form-group>
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
            class="btn-home-cotizar"
          >
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
    <b-container class="home-seccion  client">
      <b-row>
        <b-col cols="12">
          <div class="section-title">
            <p>
              Más de 550,000 clientes ya protegen su auto <span class="d-lg-none">&nbsp; &nbsp; &nbsp; &nbsp;</span> con nosotros
            </p>
          </div>
        </b-col>
        <b-col cols="12">
          <div class="client-numbers">
            <div class="client-numbers__item">
              <img src="@/static/media/imagenes/home/cotizaciones.svg" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">+15,000</p>
                <p class="client-numbers__item--text">Cotizaciones diarias</p>
              </div>
            </div>
            <div class="client-numbers__item">
              <img src="@/static/media/imagenes/home/asistencia.svg" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">+ 3,000</p>
                <p class="client-numbers__item--text">Asistencias brindadas</p>
              </div>
            </div>
            <div class="client-numbers__item">
              <img src="@/static/media/imagenes/home/siniestros.svg" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">+3,000</p>
                <p class="client-numbers__item--text">Siniestros atendidos</p>
              </div>
            </div>
            <div class="client-numbers__item">
              <img src="@/static/media/imagenes/home/tiempo.svg" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">25 min</p>
                <p class="client-numbers__item--text">Tiempo de llegada</p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="home-seccion">
      <b-row>
        <b-col cols="12">
          <div class="testimonios">
            <carousel :perPageCustom="[[368, 1], [1024, 1]]" :perPage="4" :navigationEnabled="true" :paginationEnabled="false">
              <slide v-for="(item, index) in listCategories" v-bind:key="index" >
                <img :src="item.img"/>
                <p class="categoria" v-bind:class="'categoria-'+index">
                {{item.testimonio}}
                </p>
              </slide>
            </carousel>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <div class="box-planes">
      <b-container class="home-seccion">
        <b-row>
          <b-col cols="12">
            <div class="section-title">
              <p>
                ¡Elige el mejor plan para ti!
              </p>
            </div>
          </b-col>
          <b-col cols="12">
            <div class="seccion-planes" >
              <div class="seccion-planes__head   d-lg-none">
                <div class="plan-item" @click="seleccionarPlan(0)">
                  <p>Básico</p>
                </div>
                <div class="plan-item" @click="seleccionarPlan(2)">
                  <p>Full</p>
                </div>
                <div class="plan-item" @click="seleccionarPlan(1)">
                  <p>Medio</p>
                </div>
              </div>
              <div class="seccion-planes__body   d-lg-none">
                <div class="planes-detalle">
                  <p class="plan-nombre"><strong>{{planSeleccionado == 0 ? "Básico" : planSeleccionado == 1 ? "Medio" : "Full"}} : </strong>{{proteccion}}</p>
                  <p class="plan-monto">
                    <span class="omnes-regular">Desde </span> <span> US$ {{precio}}</span><span>AL MES</span>
                  </p>
                  <p class="plan-incluye">Este plan incluye: </p>
                  <ul>
                    <li  v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                      Beneficios Interseguro
                    </li>
                    <li  v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                      Central de emergencias
                    </li>
                    <li  v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                      Responsabilidad Civil
                    </li>
                    <li  v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                      Robo total
                    </li>
                    <li  v-if="planSeleccionado == 1 || planSeleccionado == 2">
                      Daños al vehículo por accidente
                    </li>
                    <li  v-if="planSeleccionado == 1 || planSeleccionado == 2">
                      Accidentes personales
                    </li>
                    <li v-if="planSeleccionado == 2">
                      Accesorios musicales
                    </li>
                    <li v-if="planSeleccionado == 2">
                      Rotura de lunas
                    </li>
                    <li v-if="planSeleccionado == 2">
                      Desastres naturales, vandalismo, incendios.
                    </li>
                    <li v-if="planSeleccionado == 2">
                      Pérdida total por accidente
                    </li>
                    <li v-if="planSeleccionado == 2">
                      Ausencia de control*
                    </li>
                  </ul>
                  <router-link to="" class="ver-detalle">Ver detalle <img src="" alt=""></router-link>
                </div>
              </div>

              <div class="seccion-planes__body  d-none  d-lg-flex">
                <div class="planes-detalle" v-for="(item, index) in listTest" :key="index">
                  <p class="plan-nombre"><strong>{{item.plan}} </strong>{{item.proteccion}} </p>
                  <p class="plan-monto">
                    <span>Desde </span> <span> US$ {{item.precio}}</span> <span>AL MES</span>
                  </p>
                  <p class="plan-incluye">Este plan incluye: </p>
                  <ul>
                    <li  v-if="index == 0 || index == 1 || index == 2">
                      Beneficios Interseguro
                    </li>
                    <li  v-if="index == 0 || index == 1 || index == 2">
                      Central de emergencias
                    </li>
                    <li  v-if="index == 0 || index == 1 || index == 2">
                      Responsabilidad Civil
                    </li>
                    <li  v-if="index == 0 || index == 1 || index == 2">
                      Robo total
                    </li>
                    <li  v-if="index == 1 || index == 2">
                      Daños al vehículo por accidente
                    </li>
                    <li  v-if="index == 1 || index == 2">
                      Accidentes personales
                    </li>
                    <li v-if="index == 2">
                      Accesorios musicales
                    </li>
                    <li v-if="index == 2">
                      Rotura de lunas
                    </li>
                    <li v-if="index == 2">
                      Desastres naturales, vandalismo, incendios.
                    </li>
                    <li v-if="index == 2">
                      Pérdida total por accidente
                    </li>
                    <li v-if="index == 2">
                      Ausencia de control*
                    </li>
                  </ul>
                  <router-link to="" class="ver-detalle">Ver detalle <img src="" alt=""></router-link>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <b-container class="home-seccion">
      <b-row>
        <b-col cols="12">
          <div class="section-title">
            <p>
              Disfruta de los mejores beneficios por ser cliente
            </p>
          </div>
        </b-col>
        <b-col cols="12">
          <div class="beneficios">
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-dcto.svg" alt="" class="beneficios__item--icon">
                <div class="beneficios__item--texto">
                  <p class="d-block  d-xl-none">Dscto de S/50 en <strong>atención médica </strong>covid-19 a domicilio</p>
                  <p class="d-none  d-xl-block" style="padding-left: 24px;"><strong>Atenciónes médica,</strong> Descuentos <br> y beneficios en Atención médica:</p>
                  <ul class="d-none  d-xl-block" style="text-align: left;">
                    <li>
                      Descuento de S/50 en atención <br> médica covid-19 a domicilio 
                    </li>
                    <li>
                      Descuento de S/40 en teleconsulta <br> médica con especialista
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-chofer.svg" alt="" class="beneficios__item--icon">
                <p class="beneficios__item--texto">
                  <strong>Chofer de reemplazo</strong> <br> Hasta 5 veces al año
                </p>
              </div>
            </div>
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-auxilio.svg" alt="" class="beneficios__item--icon">
                <p class="beneficios__item--texto">
                  <strong>Auxilio mecánico</strong> Carga de <br> batería, grúas y más
                </p>
              </div>
            </div>
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-inspeccion.svg" alt="" class="beneficios__item--icon">
                <p class="beneficios__item--texto">
                  <strong>Inspección digital</strong> en menos <br> de 5 minutos y sin salir de casa
                </p>
              </div>
            </div>
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-diagnostico.svg" alt="" class="beneficios__item--icon">
                <p class="beneficios__item--texto">
                  50% de dscto. en diagnóstico <br> previo a <strong>Revisión técnica</strong>
                </p>
              </div>
            </div>
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-asistencia.svg" alt="" class="beneficios__item--icon">
                <p class="beneficios__item--texto">
                  <strong>Asistencias para <br> el hogar</strong> hasta por S/ 150
                </p>
              </div>
            </div>
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-auxilio.svg" alt="" class="beneficios__item--icon">
                <p class="beneficios__item--texto">
                Hasta 25% dscto. en <br> <strong>comida por delivery</strong>
                </p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="home-video">
      <b-row>
        <div class="col-12">
          <p class="text-video">
            Mira nuestro video y descubre <br> nuestro programa de beneficios VIVE+
          </p>
          <div class="box2-btn">
            <button class="btn-azulVehicular ver-video">VER VIDEO</button>
          </div>
        </div>
      </b-row>
    </b-container>

    <div class="elegirnos">
      <b-container class="home-seccion ">
        <b-row>
          <b-col cols="12">
            <div class="section-title">
              <p>
                ¿Por qué deberían elegirnos?
              </p>
            </div>
          </b-col>
          <b-col cols="12">
            <div class="elegirnos">
              <div class="elegirnos__item">
                <div class="box-img">
                  <img src="@/static/media/seguroVehicular/home/elegirnos_mejor_precio.svg" alt="" class="elegirnos__item--icon">
                </div>
                <div class="elegirnos--box">
                  <p class="elegirnos__item--titulo">Mejor precio</p>
                  <p class="elegirnos__item--text">Eliminamos a los brókers <span class="d-none  d-xl-inline"><br></span> e intermediarios</p>
                </div>
              </div>
              <div class="elegirnos__item">
                <div class="box-img">
                  <img src="@/static/media/seguroVehicular/home/elegirnos_somos_intercorp.svg" alt="" class="elegirnos__item--icon">
                </div>
                <div class="elegirnos--box">
                  <p class="elegirnos__item--titulo">Somos intercorp</p>
                  <p class="elegirnos__item--text">El grupo económico más <span class="d-none  d-xl-inline"><br></span>  importante del país</p>
                </div>
              </div>
              <div class="elegirnos__item">
                <div class="box-img">
                  <img src="@/static/media/seguroVehicular/home/elegirnos_100_online.svg" alt="" class="elegirnos__item--icon">
                </div>
                <div class="elegirnos--box">
                  <p class="elegirnos__item--titulo">100% online</p>
                  <p class="elegirnos__item--text">Protege tu auto en solo 3 <span class="d-none  d-xl-inline"><br></span>  clics desde donde estés</p>
                </div>
              </div>
              <div class="elegirnos__item">
                <div class="box-img">
                  <img src="@/static/media/seguroVehicular/home/elegirnos_siempre_contigo.svg" alt="" class="elegirnos__item--icon">
                </div>
                <div class="elegirnos--box">
                  <p class="elegirnos__item--titulo">Siempre contigo</p>
                  <p class="elegirnos__item--text">Te brindamos  <span class="d-none  d-xl-inline"><br></span> atención 24/7</p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <b-container class="home-seccion">
      <b-row>
        <b-col cols="12" lg="5">
          <div class="section-title">
            <p>¿Necesitas ayuda o tienes preguntas sobre nuestro seguro vehicular?</p>
          </div>
          
        </b-col>
        <b-col cols="12" lg="7">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.acc-1 class="tab-personalizado">¿Cuándo inicia mi cobertura?</b-button>
              </b-card-header>
              <b-collapse id="acc-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>Desde la confirmación de pago.</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.acc-2 class="tab-personalizado">¿Cómo hago mi inspección?</b-button>
              </b-card-header>
              <b-collapse id="acc-2" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>Desde la confirmación de pago.</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.acc-3 class="tab-personalizado">¿Qué pasa si ocurre un incidente y yo no soy el que maneja?</b-button>
              </b-card-header>
              <b-collapse id="acc-3" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>Desde la confirmación de pago.</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.acc-4 class="tab-personalizado">¿Qué pasa si choco contra un carro que no tiene seguro vehicular?</b-button>
              </b-card-header>
              <b-collapse id="acc-4" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>Desde la confirmación de pago.</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.acc-5 class="tab-personalizado">¿Qué pasa si ocurre un incidente y yo no soy el que maneja</b-button>
              </b-card-header>
              <b-collapse id="acc-5" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>Desde la confirmación de pago.</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

          </div>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>
<style lang="scss">
  
</style>
<script>
export default {
  layout: "InterseguroHome",
  data() {
    return {
      item:{
        plateNumber:'',
        email:''
      },
      loading: false,
      color: "#00C450",
      sizePulse: "45px",
      size: "30px",
      /************************************* */
      planSeleccionado: "Full",
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
      ],
      listCategories:[
        {
          testimonio : "‘’Fue facilísimo contratar el seguro, en comparación con la gestión tradicional” Rosario P. Gamarra",
          star : 5,
          img : require("./../static/media/imagenes/home/testimonio.png")
        },
        {
          testimonio : "‘’Fue facilísimo contratar el seguro, en comparación con la gestión tradicional” Rosario P. Gamarra",
          star : 5,
          img : require("./../static/media/imagenes/home/testimonio.png")
        },
      ],
    }
  },
  methods: {
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
    }
  },
  created() {
    
  },
}
</script>
