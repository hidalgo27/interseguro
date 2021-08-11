<template>
  <div class="nuevo-home">
    <div class="banner">
      <div class="banner-blue    d-xl-none"></div>
      <div class="container">
        <b-row>

        </b-row>
        <div class="banner-textos  d-xl-none">         
          <p class="titulo-mobile">Proteger tu auto no  <span><br></span> tiene porque ser caro.</p>
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
            <button type="button" class="btn-home-cotizar" >
              COTIZAR
                <clip-loader class="cliploader" :loading="loading" :color="color" :size="size"></clip-loader>
            </button>
            <p class="numero_asegurados">
                
            </p>
            
            <p class="asegurados">
              <img src="./../static/media/imagenes/home/escudo.svg" alt="">
              <strong>Más de 2,000,000</strong> de asegurados
            </p>
            <p class="respaldo-intercorp">
              <span> Con el respaldo del grupo</span>
              <img src="./../static/media/img/home/respaldo-intercorp.svg" alt="respaldo_intercorp">
            </p>
          </div>
        </b-form>
        <div class="banner-textos  d-none  d-lg-inline-block">
          <p class="titulo">Todas las coberturas para <span><br></span> tu auto al mejor precio.</p>
          <p class="subtitulo">
            Compra hoy cualquiera de nuestros planes<span><br>con</span> <strong> 10% de descuento anual.</strong>
          </p>
        </div>

        <div class="fondo-banner d-none  d-lg-inline-block">
          
        </div>
        
      </div>
    </div>

    <b-container class="seccion-contenido">
      <b-row class="content">
        <b-col cols="12">
          <div class="section-title">
            <p>
              Más de 550,000 clientes ya protegen <br> su auto <span class="d-lg-none">&nbsp; &nbsp; &nbsp; &nbsp;</span> con nosotros
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row class="content">
        <b-col cols="3" class="pr-2 pl-2">
          <div class="client-numbers">
            <div class="client-numbers__item">
              <img src="@/static/media/imagenes/home/cotizaciones.svg" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">+15,000</p>
                <p class="client-numbers__item--text">Cotizaciones diarias</p>
              </div>
            </div>
          </div>
        </b-col>

        <b-col cols="3" class="pr-2 pl-2">
          <div class="client-numbers">
            <div class="client-numbers__item">
              <img src="@/static/media/imagenes/home/asistencia.svg" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">+ 3,000</p>
                <p class="client-numbers__item--text">Asistencias brindadas</p>
              </div>
            </div>
          </div>
        </b-col>

        <b-col cols="3" class="pr-2 pl-2">
          <div class="client-numbers">
            <div class="client-numbers__item">
              <img src="@/static/media/imagenes/home/siniestros.svg" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">+3,000</p>
                <p class="client-numbers__item--text">Siniestros atendidos</p>
              </div>
            </div>
          </div>
        </b-col>

        <b-col cols="3" class="pr-2 pl-2">
          <div class="client-numbers">
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
      <b-row class="justify-content-center row-comentario">
        <b-col cols="12" xl="6">
          <div class="testimonios">
            <carousel :perPageCustom="[[368, 1], [1024, 1]]" 
             :navigationEnabled="false" 
             :paginationEnabled="false">
              <slide>
                <img src="./../static/media/imagenes/home/testimonio.png"/>
                <p class="categoria" v-bind:class="'categoria-'+index">
                Fue facilísimo contratar el seguro, en comparación con la gestión tradicional” <strong>Rosario P. Gamarra</strong>
                </p>
              </slide>
              <slide v-for="(item, index) in listCategories" v-bind:key="index" >
                <img src="./../static/media/imagenes/home/testimonio.png"/>
                <p class="categoria" v-bind:class="'categoria-'+index">
                Fue facilísimo contratar el seguro, en comparación con la gestión tradicional” <strong>Rosario P. Gamarra</strong>
                </p>
              </slide>
            </carousel>
          </div>
        </b-col>
      </b-row>
      <b-row class="text-center row-start">
        <b-col class="stars"> 
          <img src="./../static/media/imagenes/home/star-fucsia.svg"/>
          <img src="./../static/media/imagenes/home/star-fucsia.svg"/>
          <img src="./../static/media/imagenes/home/star-fucsia.svg"/>
          <img src="./../static/media/imagenes/home/star-fucsia.svg"/>
          <img src="./../static/media/imagenes/home/star-lead.svg"/>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid class="container-fluid">
      <b-container class="titulo-plan">
        <b-row class="content">
          <b-col cols="12">
            <div class="section-title">
              <p class="d-none d-sm-block">¡Elige el mejor plan para ti!</p>
              <p class="d-block d-sm-none">¡Tenemos estos <br> planes para ti!</p>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="planes">        
        <!-- Inicio Desktop -->
        <b-row class="strecht d-none  d-lg-flex">

          <b-col cols="4" class="pl-1 pr-1">
            <div class="detalle-plan">
              <b-row align-h="center" class="box-titulo-normal">
                <div class="plan-not-head">
                </div>
              </b-row>
              <b-row class="box-plan-normal">
                <b-col>
                  <div class="box-titulo">
                      <p class="titulo-principal">Básico: <span class="titulo-descripcion">Protección contra robo</span> </p>                         
                  </div>
                  <hr>
                  <div class="monto-frecuencia">
                    Desde <span  class="monto">US$ 12</span><span>/mes</span>
                  </div>
                  
                  <b-row>
                    <b-col>
                      <div class="que-me-cubre">
                        <div class="titulo-box-planes">
                          Este plan incluye:
                        </div>
                        
                        <p class="que-me-cubre__item">
                          <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Beneficios Interseguro</span> 
                        </p>
                        <p class="que-me-cubre__item">
                          <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Central de emergencias</span>                        
                        </p>
                        <p class="que-me-cubre__item">
                          <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Responsabilidad Civil</span>                        
                        </p>
                        <p class="que-me-cubre__item">
                          <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Robo total</span>                        
                        </p>
                      </div>                      
                    </b-col>
                  </b-row>
                </b-col>
                <b-col align-self="end">
                  <div class="detalle">
                    <router-link to="" class="ver-detalle"><span>Ver detalle </span> <img src="./../static/media/imagenes/home/row-rigth.svg" alt=""></router-link>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>

          <b-col cols="4">
            <div class="detalle-plan">
              <b-row align-h="center" class="box-titulo-normal">
                <div class="plan-not-head">
                </div>
              </b-row>
              <b-row class="box-plan-normal">
                <b-col>
                  <div class="box-titulo">
                      <p class="titulo-principal">Intermedio: <span class="titulo-descripcion">Protección accidentes</span> </p>                         
                    </div>
                    <hr>
                    <div class="monto-frecuencia">
                      Desde <span  class="monto">US$ 25</span><span>/mes</span>
                    </div>

                    <div class="que-me-cubre">
                      <div class="titulo-box-planes">
                        Este plan incluye:
                      </div>
                      
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Beneficios Interseguro</span> 
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Central de emergencias</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Responsabilidad Civil</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Robo total</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Pérdida parcial por accidente</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Accidentes de ocupantes</span>                        
                      </p>
                    </div>
                    <div class="detalle">
                      <router-link to="" class="ver-detalle"><span>Ver detalle </span> <img src="./../static/media/imagenes/home/row-rigth.svg" alt=""></router-link>
                    </div>
                </b-col>
              </b-row>
            </div>
          </b-col>

          <b-col cols="4" class="pl-1 pr-1">
            <div class="detalle-plan">
              <b-row align-h="center" class="box-titulo-recomendado">
                <div class="plan-recomendado d-flex justify-content-center">
                  <img src="@/static/media/imagenes/home/star-white.svg" alt="Start">
                  <span>¡Plan recomendado!</span>
                </div>
              </b-row>
              <b-row class="box-plan-recomendado">
                <b-col>
                  <div class="box-titulo">
                      <p class="titulo-principal">Full: <span class="titulo-descripcion">Protección total</span> </p>                         
                    </div>
                    <hr>
                    <div class="monto-frecuencia">
                      Desde <span  class="monto">US$ 33</span><span>/mes</span>
                    </div>
                    <div class="que-me-cubre">
                      <div class="titulo-box-planes">
                        Este plan incluye:
                      </div>                      
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Beneficios Interseguro</span> 
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Central de emergencias</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Responsabilidad Civil</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./..//static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Robo total</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Pérdida parcial por accidente</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Accidentes de ocupantes</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Accesorios musicales</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Rotura de lunas</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Desastres naturales, vandalismo, incendios.</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Pérdida total por accidente</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span style="margin-left:5px">Ausencia de control*</span>                        
                      </p>
                    </div>
                    <div class="detalle">
                        <router-link to="" class="ver-detalle"><span>Ver detalle </span> <img src="./../static/media/imagenes/home/row-rigth.svg" alt=""></router-link>
                    </div>
                </b-col>
              </b-row>
            </div>
          </b-col>

        </b-row>
        
        
      <!-- Fin Desktop -->

      <!-- Inicio Mobile -->
      <b-row>
        <b-col cols="12">
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

          <div class="plan-recomendado   d-lg-none" v-if="planSeleccionado == 2">
            <img src="@/static/media/imagenes/home/star-white.svg" alt="" class="beneficios__item--icon">
            <span>¡Plan recomendado!</span>
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


        </b-col>
      </b-row>
      <!-- Fin Mobile -->
      </b-container>
    </b-container>

    <b-container>
      
    </b-container>

    <b-container class="home-seccion">
      <b-row>
        <b-col cols="12">
          <div class="section-title">
            <p>
              Disfruta de los mejores beneficios por ser cliente
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div class="beneficios">
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-atencion.svg" alt="" class="beneficios__item--icon">
                <div class="beneficios__item--texto">
                  <p class="d-block  d-xl-none">Dscto de S/50 en <strong>atención médica </strong>covid-19 a domicilio</p>
                  <p class="d-none  d-xl-block" style="padding-left: 24px;"><span class="titulo">Atenciónes médica,</span> <span class="descripcion">Descuentos <br> y beneficios en Atención médica:</span> </p>
                  <ul class="d-none  d-xl-block descripcion" style="text-align: left;">
                    <li>
                      <p>Descuento de S/50 en atención <br> médica covid-19 a domicilio</p>                       
                    </li>
                    <li>
                      <p>Descuento de S/40 en teleconsulta <br> médica con especialista</p>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-chofer.svg" alt="" class="beneficios__item--icon">
                <p class="beneficios__item--texto">
                  <span class="titulo">Chofer de reemplazo</span> <br> <span class="descripcion">Hasta 5 veces al año</span>
                </p>
              </div>
            </div>
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-auxilio.svg" alt="" class="beneficios__item--icon">
                <p class="beneficios__item--texto">
                  <span class="titulo">Auxilio mecánico</span> <span class="descripcion">Carga de <br> batería, grúas y más</span>
                </p>
              </div>
            </div>
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-inspeccion.svg" alt="" class="beneficios__item--icon">
                <p class="beneficios__item--texto">
                  <span class="titulo">Inspección digital</span> <span class="descripcion">en menos <br> de 5 minutos y sin salir de casa</span>
                </p>
              </div>
            </div>
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-diagnostico.svg" alt="" class="beneficios__item--icon">
                <p class="beneficios__item--texto">
                  <span class="descripcion">50% de dscto. en diagnóstico <br> previo a </span><span class="titulo">Revisión técnica</span>
                </p>
              </div>
            </div>
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-asistencia.svg" alt="" class="beneficios__item--icon">
                <p class="beneficios__item--texto">
                  <span class="titulo">Asistencias para <br> el hogar</span> <span class="descripcion">hasta por S/ 150</span>
                </p>
              </div>
            </div>
            <div class="beneficios__item">
              <div class="caja">
                <img src="@/static/media/imagenes/home/beneficio-delivery.svg" alt="" class="beneficios__item--icon">
                <p class="beneficios__item--texto">
                  <span class="descripcion">Hasta 25% dscto. en <br> </span><span class="titulo">comida por delivery</span>
                </p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="home-video">
        <div class="col-12">
          <p class="text-video">
            Mira nuestro video y descubre <br class="d-xl-none"> nuestro programa de beneficios <strong>VIVE+</strong> 
          </p>
          <div class="box2-btn">
            <a class="btn-azulVehicular ver-video" href="https://www.youtube.com/watch?v=Bff41WXOtak">VER VIDEO</a>
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

    <b-container class="home-seccion  preguntas">

    <div class="row  dudas-consultas d-block d-xl-none">
      <div class="col-12  col-lg-4">
        <div class="dudas-consultas__item">
          <carousel :perPageCustom="[[368, 1], [1024, 1]]" 
            :navigationEnabled="false" 
            :paginationEnabled="false">
            <slide class="slide-dudas">
              <img src="@/static/media/imagenes/home/tiempo-emergencia.svg"/>
              <div class="dudas-consultas--box">
                <p class="titulo">¡Tengo una emergencia!</p>
                <p>¿tu carro acaba de chocar o sufrir un incidente? ¿te robaron?</p>
                <span>Llamanos: (01) 500 0000</span>
              </div>
            </slide>

            <slide class="slide-dudas">
              <img src="@/static/media/imagenes/home/donde-llevo-carro.svg"/>
              <div class="dudas-consultas--box">
                <p  class="titulo">¿Dónde llevo mi carro ?</p>
                <p>Visita nuestra red de talleres afiliados</p>
                <span>Ver talleres afiliados</span>
              </div>
            </slide>

            <slide class="slide-dudas">
              <img src="@/static/media/imagenes/home/necesito-asesor.svg"/>
              <div class="dudas-consultas--box">
                <p  class="titulo">Necesito un asesor</p>
                <p>¿Necesitas ayuda o consulta de un asesor?</p>
                <span>Llamanos: (01) 500 0000</span>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>

    
    
      <b-row>
        <b-col cols="12" lg="5">
          <div class="section-title">
            <p>¿Necesitas ayuda o <br class="d-none  d-xl-block"> tienes  preguntas <br class="d-none  d-xl-block"> sobre nuestro <br class="d-none  d-xl-block"> seguro vehicular?</p>
          </div>
          
        </b-col>
        <b-col cols="12" lg="7">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1 variant="info">¿Cuándo inicia mi cobertura?</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>Desde la confirmación de pago.</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2 variant="info">¿Cómo hago mi inspección?</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    Toda la inspección será digital (por Whatsapp), sin necesidad que alguien tenga que ir a tu casa. 
                    Enviando fotos y respondiendo dos preguntas sobre tu carro podrás acabar tu inspección en menos de 10 minutos
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-3 variant="info">¿Qué pasa si ocurre un incidente y yo no soy el que maneja?</b-button>
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>Igual lo cubrimos, siempre y cuando el que maneja cuente con un brevete vigente y no haya tomado alcohol.</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-4 variant="info">¿Qué pasa si choco contra un carro que no tiene seguro vehicular?</b-button>
              </b-card-header>
              <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>Si es que tú eres responsable del incidente, cubrimos tu carro y el de la otra persona.</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

          </div>
        </b-col>
      </b-row>

      <div class="row  dudas-consultas d-none d-xl-flex">
        <div class="col-12  col-lg-4 pl-0">
          <div class="dudas-consultas__item">
            <img src="@/static/media/imagenes/home/tiempo-emergencia.svg"/>
            <div class="dudas-consultas--box">
              <p class="titulo">¡Teng una emergencia!</p>
              <p class="text">¿tu carro acaba de chocar o sufrir un incidente? ¿te robaron?</p>
              <span>Llamanos: (01) 500 0000</span>
            </div>
          </div>
        </div>
        <div class="col-12  col-lg-4">
          <div class="dudas-consultas__item">
            <img src="@/static/media/imagenes/home/donde-llevo-carro.svg"/>
            <div class="dudas-consultas--box">
              <p  class="titulo">¿Dónde llevo mi carro ?</p>
              <p class="text">Visita nuestra red de talleres afiliados</p>
              <span>Ver talleres afiliados</span>
            </div>
          </div>
        </div>
        <div class="col-12  col-lg-4 pr-0">
          <div class="dudas-consultas__item">
            <img src="@/static/media/imagenes/home/necesito-asesor.svg"/>
            <div class="dudas-consultas--box">
              <p  class="titulo">Necesito un asesor</p>
              <p class="text">¿Necesitas ayuda o consulta de un asesor?</p>
              <span>Llamanos: (01) 500 0000</span>
            </div>
          </div>
        </div>
      </div>
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
  },
  created() {
    this.createMail()
  },
  mounted() {
    this.$store.commit('common/resetState')
  }
}
</script>
