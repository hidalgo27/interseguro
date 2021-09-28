<template>
  
  <div class="nuevo-home" @scroll="handleScroll()">
    <div class="banner content">
      <div class="banner-blue    d-xl-none"></div>
      <b-container>
        <b-row class="d-block d-xl-none banner-textos text-center" align-h="center">
          <b-col cols="12">
            <p class="titulo-mobile">Proteger tu auto no  <span><br></span> tiene porque ser caro.</p>
          </b-col> 
          <b-col cols="12">
            <p class="subtitulo">Todos nuestros planes con <span><br></span> <strong>10% de descuento anual.</strong></p>
          </b-col>         
        </b-row>

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
            <button type="button" >
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
          
      </b-container>
    </div>

    <b-container class="seccion-contenido">
      <b-row class="content">
        <b-col cols="12" >
          <div class="section-title">
            <p class="d-none d-sm-block">Más de 550,000 clientes ya protegen <br> su auto con nosotros</p>
            <p class="d-block d-sm-none">Más de 550,000 clientes <br> ya protegen su auto <br> con nosotros</p>            
          </div>
        </b-col>
      </b-row>
      <b-row class="content justify-content-center" cols="1" cols-sm="2" cols-md="2" cols-lg="4" align-v="stretch">
        <b-col cols="12">
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

        <b-col cols="12">
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

        <b-col cols="12">
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

        <b-col cols="12">
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
      <b-row class="justify-content-center content-medio">
        <b-col cols="12" sm="10" md="8" lg="6" xl="6">
            <div class="testimonios">
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                img-width="492"
                img-height="112"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <b-carousel-slide img-blank v-for="(item, index) in listCategories" v-bind:key="index">
                  <b-row align-v="center" style="height:100%">
                    <b-col cols="2" class="imagen-testimonio">
                      <img :src="item.img" alt="">
                    </b-col>
                    <b-col >
                      <p class="categoria text-testimonio pl-3" v-bind:class="'categoria-'+index" style="text-align:justify;">
                        {{item.testimonio}} <span>{{item.autor}}</span>
                      </p>
                    </b-col>
                  </b-row>
                </b-carousel-slide>
              </b-carousel>
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

    <b-container fluid class="container-fluid seccion-contenido">
      <b-container >
        <b-row class="content">
          <b-col cols="12">
            <div class="section-title">
              <p class="d-none d-lg-block">¡Elige el mejor plan para ti!</p>
              <!-- mobile -->
              <p class="d-block d-lg-none">¡Tenemos estos <br> planes para ti!</p>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="planes">        
        <!-- Inicio planes Desktop -->
        <b-row class="d-none  d-lg-flex" align-v="stretch">

          <b-col cols="4" class="pl-4 pr-4">
            <b-row style="height: 100%; ">
              <b-col cols="12">
                <div class="plan-not-head">
                </div>
              </b-col>
              <b-col class="box-plan-normal" cols="12">
                <b-row style="height: 100%; " class="detalle-plan">
                  <b-col align-self="start">
                    <b-row class="box-titulo">
                      <b-col>
                        <p class="titulo-principal">Básico: <span class="titulo-descripcion">Protección contra robo</span> </p>
                      </b-col>                    
                    </b-row>
                    <hr>
                    <b-row class="monto-frecuencia">
                      <b-col>
                        <p>Desde <span  class="monto">US$ 12</span>/mes</p>                        
                      </b-col>
                    </b-row>
                    
                    <b-row>
                      <b-col>
                        <div class="que-me-cubre">
                          <div class="titulo-box-planes">
                            Este plan incluye:
                          </div>
                          
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span>Beneficios Interseguro</span> 
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span>Central de emergencias</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span>Responsabilidad Civil</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span>Robo total</span>                        
                          </p>
                        </div>                      
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="12" align-self="end">
                    <div class="detalle">
                      <router-link to="" class="ver-detalle"><span>Ver detalle </span> <img src="./../static/media/imagenes/home/row-rigth.svg" alt=""></router-link>
                    </div>
                  </b-col>
                  
                </b-row>
                
              </b-col>

            </b-row>
          </b-col>

          <b-col cols="4" class="pl-4 pr-4">
            <b-row style="height: 100%; ">
              <b-col cols="12" >
                <div class="plan-not-head">
                </div>
              </b-col>
              <b-col class="box-plan-normal" cols="12">
                <b-row style="height: 100%; " class="detalle-plan">
                  <b-col align-self="start">
                    <b-row class="box-titulo">
                      <b-col>
                        <p class="titulo-principal">Intermedio: <span class="titulo-descripcion">Protección accidentes</span> </p>
                      </b-col>                    
                    </b-row>
                    <hr>
                    <b-row class="monto-frecuencia">
                      <b-col>
                        <p>Desde <span  class="monto">US$ 25</span>/mes</p>
                      </b-col>
                    </b-row>
                    
                    <b-row>
                      <b-col>
                        <div class="que-me-cubre">
                          <div class="titulo-box-planes">
                            Este plan incluye:
                          </div>
                          
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Beneficios Interseguro</span> 
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Central de emergencias</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Responsabilidad Civil</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Robo total</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Pérdida parcial por accidente</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Accidentes de ocupantes</span>                        
                          </p>
                        </div>                      
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="12" align-self="end">
                    <div class="detalle">
                      <router-link to="" class="ver-detalle"><span>Ver detalle </span> <img src="./../static/media/imagenes/home/row-rigth.svg" alt=""></router-link>
                    </div>
                  </b-col>
                  
                </b-row>
                
              </b-col>

            </b-row>
            <!-- <div class="detalle-plan">
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
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Beneficios Interseguro</span> 
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Central de emergencias</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Responsabilidad Civil</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Robo total</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Pérdida parcial por accidente</span>                        
                      </p>
                      <p class="que-me-cubre__item">
                        <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Accidentes de ocupantes</span>                        
                      </p>
                    </div>
                    <div class="detalle">
                      <router-link to="" class="ver-detalle"><span>Ver detalle </span> <img src="./../static/media/imagenes/home/row-rigth.svg" alt=""></router-link>
                    </div>
                </b-col>
              </b-row>
            </div> -->
          </b-col>

          <b-col cols="4" class="pl-4 pr-4">
            <b-row style="height: 100%; ">
              <b-col cols="12" class="pl-4 pr-4">
                <div class="plan-recomendado d-flex justify-content-center">
                  <img src="@/static/media/imagenes/home/star-white.svg" alt="Start">
                  <span>¡Plan recomendado!</span>
                </div>
              </b-col>
              <b-col class="box-plan-recomendado" cols="12">
                <b-row style="height: 100%; " class="detalle-plan">
                  <b-col align-self="start">
                    <b-row class="box-titulo">
                      <b-col>
                        <p class="titulo-principal">Full: <span class="titulo-descripcion">Protección total</span> </p>
                      </b-col>                    
                    </b-row>
                    <hr>
                    <b-row class="monto-frecuencia">
                      <b-col>
                        <p>Desde <span  class="monto">US$ 33</span>/mes</p> 
                      </b-col>
                    </b-row>
                    
                    <b-row>
                      <b-col>
                        <div class="que-me-cubre">
                          <div class="titulo-box-planes">
                            Este plan incluye:
                          </div>
                          
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Beneficios Interseguro</span> 
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Central de emergencias</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Responsabilidad Civil</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./..//static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Robo total</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Pérdida parcial por accidente</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Accidentes de ocupantes</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Accesorios musicales</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Rotura de lunas</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Desastres naturales, vandalismo, incendios.</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Pérdida total por accidente</span>                        
                          </p>
                          <p class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Ausencia de control*</span>                        
                          </p>
                        </div>                      
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="12" align-self="end">
                    <div class="detalle">
                      <router-link to="" class="ver-detalle"><span>Ver detalle </span> <img src="./../static/media/imagenes/home/row-rigth.svg" alt=""></router-link>
                    </div>
                  </b-col>
                  
                </b-row>
                
              </b-col>

            </b-row>
          </b-col>

        </b-row>
        
        
        <!-- Fin Desktop -->

        <!-- Inicio Planes Mobile -->
        <b-row class="d-block d-lg-none">
          <b-col cols="12">
            <b-row align-h="center">
              <b-col cols="4" class="pr-1 pl-1">
                <div class="v2-seleccion-planes" >
                  <div class="v2-seleccion-planes__item plan0 blue" @click="seleccionarPlan(0)" v-bind:class="{planInactivo: planInactivo}">
                      Básico
                  </div>
                </div>
              </b-col>
              <b-col cols="4" class="pr-1 pl-1">
                <div class="v2-seleccion-planes" v-if="planSeleccionado == 2">
                  <div class="v2-seleccion-planes__item plan2 blue planActivo planInacActivo" @click="seleccionarPlan(2)">
                      Full
                  </div>
                </div>
                <div class="v2-seleccion-planes" v-else>
                  <div class="v2-seleccion-planes__item plan2 blue" @click="seleccionarPlan(2)" v-bind:class="{planInactivo: planInactivo}">
                      Full
                  </div>
                </div>
              </b-col>
              <b-col cols="4" class="pr-1 pl-1">
                <div class="v2-seleccion-planes" >
                  <div class="v2-seleccion-planes__item plan1 blue" @click="seleccionarPlan(1)" v-bind:class="{planInactivo: planInactivo}">
                      Medio
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" v-if="planSeleccionado == 2">
            <b-row>
              <b-col cols="12" class="p-0">
                <div class="plan-recomendado d-flex justify-content-center">
                  <img src="@/static/media/imagenes/home/star-white.svg" alt="Start">
                  <span>¡Plan recomendado!</span>
                </div>
              </b-col>
            </b-row>            
          </b-col>
          <b-col class="box-plan-recomendado" cols="12">
            <b-row style="height: 100%; " class="detalle-plan">
              <b-col align-self="start">
                <b-row class="box-titulo">
                  <b-col>
                    <p class="titulo-principal">{{planSeleccionado == 0 ? "Básico" : planSeleccionado == 1 ? "Medio" : "Full"}} : 
                       <span class="titulo-descripcion">{{proteccion}}</span> 
                    </p>
                  </b-col>                    
                </b-row>
                <hr>
                <b-row class="monto-frecuencia">
                  <b-col>
                    <p>Desde <span  class="monto">US$ {{precio}}</span>/mes</p>                        
                  </b-col>
                </b-row>
                
                <b-row>
                  <b-col>
                    <div class="que-me-cubre">
                      <div class="titulo-box-planes">
                        Este plan incluye:
                      </div>
                      
                      <p class="que-me-cubre__item" v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Beneficios Interseguro</b-col>
                        </b-row> 
                      </p>
                      <p class="que-me-cubre__item" v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Central de emergencias</b-col>
                        </b-row>                       
                      </p>
                      <p class="que-me-cubre__item" v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Responsabilidad Civil</b-col>
                        </b-row>                        
                      </p>
                      <p class="que-me-cubre__item" v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Robo total</b-col>
                        </b-row>                       
                      </p>
                      <p class="que-me-cubre__item" v-if="planSeleccionado == 1 || planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Daños al vehículo por accidente</b-col>
                        </b-row>                       
                      </p>
                      <p class="que-me-cubre__item" v-if="planSeleccionado == 1 || planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Accidentes personales</b-col>
                        </b-row>                        
                      </p>
                      <p class="que-me-cubre__item" v-if="planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >ccesorios musicales</b-col>
                        </b-row>                        
                      </p>
                      <p class="que-me-cubre__item" v-if="planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Rotura de lunas</b-col>
                        </b-row>                       
                      </p>
                      <p class="que-me-cubre__item" v-if="planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Desastres naturales, vandalismo, incendios.</b-col>
                        </b-row>                                                
                      </p>
                      <p class="que-me-cubre__item" v-if="planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Pérdida total por accidente</b-col>
                        </b-row>                         
                      </p>
                      <p class="que-me-cubre__item" v-if="planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >usencia de control*</b-col>
                        </b-row>                        
                      </p>

                    </div>                      
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="12" align-self="end">
                <div class="detalle">
                  <router-link to="" class="ver-detalle"><span>Ver detalle </span> <img src="./../static/media/imagenes/home/row-rigth.svg" alt=""></router-link>
                </div>
              </b-col>              
            </b-row>            
          </b-col>
        </b-row>
        <!-- Fin Mobile -->
      </b-container>
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
      <b-container>
        <b-row align-v="end">
          <b-col cols="12">
            <div class="section-title">
                  <p>
                    ¿Por qué deberían elegirnos?
                  </p>
                </div>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="3" xl="3">
            <b-row class="elegirnos__item-inicial ">
              <b-col cols="4" lg="12" xl="12">
                <img src="@/static/media/seguroVehicular/home/elegirnos_mejor_precio.svg" alt="" >
              </b-col>
              <b-col cols="8" lg="12" xl="12" class="text-mobile">
                <p class="elegirnos__item--titulo">Mejor precio</p>
                <p class="elegirnos__item--text">Eliminamos a los brókers <span class="d-none  d-xl-inline"><br></span> e intermediarios</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="3" xl="3">
            <b-row class="elegirnos__item ">
              <b-col cols="4" lg="12" xl="12">
                <img src="@/static/media/seguroVehicular/home/elegirnos_somos_intercorp.svg" alt="" >
              </b-col>
              <b-col cols="8" lg="12" xl="12" class="text-mobile">
                <p class="elegirnos__item--titulo">Somos intercorp</p>
                <p class="elegirnos__item--text">El grupo económico más <span class="d-none  d-xl-inline"><br></span>  importante del país</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="3" xl="3">
            <b-row class="elegirnos__item ">
              <b-col cols="4" lg="12" xl="12">
                <img src="@/static/media/seguroVehicular/home/elegirnos_100_online.svg" alt="" >
              </b-col>
              <b-col cols="8" lg="12" xl="12" class="text-mobile">
                <p class="elegirnos__item--titulo">100% online</p>
                <p class="elegirnos__item--text">Protege tu auto en solo 3 <span class="d-none  d-xl-inline"><br></span>  clics desde donde estés</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="3" xl="3">
            <b-row class="elegirnos__item ">
              <b-col cols="4" lg="12" xl="12">
                <img src="@/static/media/seguroVehicular/home/elegirnos_siempre_contigo.svg" alt="">
              </b-col>
              <b-col cols="8" lg="12" xl="12" class="text-mobile">
                <p class="elegirnos__item--titulo">Siempre contigo</p>
                <p class="elegirnos__item--text">Te brindamos  <span class="d-none  d-xl-inline"><br></span> atención 24/7
                </p> 
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      
    </div>

    <b-container class="home-seccion  preguntas">
      <b-row>
        <b-col cols="12" lg="5">
          <div class="section-title">
            <p>¿Necesitas ayuda o <br class="d-none  d-xl-block"> tienes  preguntas <br class="d-none  d-xl-block"> sobre nuestro <br class="d-none  d-xl-block"> seguro vehicular?</p>
          </div>
        </b-col>
        <!-- dudas consultas mobile -->
        <b-col cols="12" class="d-block d-lg-none dudas-consultas">
          <div>
            <b-carousel
              id="carousel-2"
              v-model="slide"
              :interval="4000"
              
              indicators
              background="#ababab"
              img-width="768"
              img-height="480"
              style="background:#FFFFFF"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >             
              <b-carousel-slide img-blank style="background:#FFFFFF">
                <b-row align-v="center" class="text-center dudas-consultas__item">
                  <b-col cols="12" class="imagen">
                    <img src="@/static/media/imagenes/home/tiempo-emergencia.svg"/>
                  </b-col>
                  <b-col cols="12" class="titulo">
                    <p >¡Tengo una emergencia!</p>
                  </b-col> 
                  <b-col cols="12" class="text">
                    <p >¿tu carro acaba de chocar o sufrir un incidente? ¿te robaron?</p>
                  </b-col>
                  <b-col class="btn-llamar">
                    <button type="button" class="btn-home-cotizar" >
                      LLÁMANOS
                    </button>  
                  </b-col>           
                </b-row>
              </b-carousel-slide>
              <b-carousel-slide img-blank style="background:#FFFFFF">
                <b-row align-v="center" class="text-center dudas-consultas__item">
                  <b-col cols="12" class="imagen">
                    <img src="@/static/media/imagenes/home/donde-llevo-carro.svg"/>
                  </b-col> 
                  <b-col cols="12" class="titulo">
                    <p >¿Dónde llevo mi carro ?</p>
                  </b-col> 
                  <b-col cols="12" class="text">
                    <p >Visita nuestra red de talleres afiliados</p>
                  </b-col>
                  <b-col cols="12" class="link-talleres-afiliados">
                    <span>Ver talleres afiliados</span>
                  </b-col>             
                </b-row>
              </b-carousel-slide>
              <b-carousel-slide img-blank style="background:#FFFFFF">
                <b-row align-v="center" class="text-center dudas-consultas__item">
                  <b-col cols="12" class="imagen">
                    <img src="@/static/media/imagenes/home/necesito-asesor.svg"/>
                  </b-col> 
                  <b-col cols="12" class="titulo">
                    <p >¿Necesito un asesor</p>
                  </b-col> 
                  <b-col cols="12" class="text">
                    <p >Necesitas ayuda o consulta de un asesor?</p>
                  </b-col>
                  <b-col cols="12" class="btn-llamar">
                    <button type="button" class="btn-home-cotizar" >
                      LLÁMANOS
                    </button> 
                  </b-col>           
                </b-row>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
        <!-- <b-col cols="12" class="d-block d-lg-none dudas-consultas">
          <div>
            <carousel :perPageCustom="[[368, 1], [1024, 1]]" 
            :navigationEnabled="false" 
            :paginationEnabled="true">
            <slide class="dudas-consultas__item ">
              <b-row align-v="center" class="text-center dudas-consultas--box">
                <b-col cols="12" class="imagen">
                  <img src="@/static/media/imagenes/home/tiempo-emergencia.svg"/>
                </b-col>
                <b-col cols="12" class="titulo">
                  <p >¡Tengo una emergencia!</p>
                </b-col> 
                <b-col cols="12" class="text">
                  <p >¿tu carro acaba de chocar o sufrir un incidente? ¿te robaron?</p>
                </b-col>
                <b-col class="btn-llamar">
                  <button type="button" class="btn-home-cotizar" >
                    LLÁMANOS
                  </button>  
                </b-col>           
              </b-row>
            </slide>
            <slide class="dudas-consultas__item">
              <b-row align-v="center" class="text-center dudas-consultas--box" >
                <b-col cols="12" class="imagen">
                  <img src="@/static/media/imagenes/home/donde-llevo-carro.svg"/>
                </b-col> 
                <b-col cols="12" class="titulo">
                  <p >¿Dónde llevo mi carro ?</p>
                </b-col> 
                <b-col cols="12" class="text">
                  <p >Visita nuestra red de talleres afiliados</p>
                </b-col>
                <b-col cols="12" class="link-talleres-afiliados">
                  <span>Ver talleres afiliados</span>
                </b-col>            
              </b-row>
            </slide>
            <slide class="dudas-consultas__item">
              <b-row align-v="center" class="text-center dudas-consultas--box" >
                <b-col cols="12" class="imagen">
                  <img src="@/static/media/imagenes/home/necesito-asesor.svg"/>
                </b-col> 
                <b-col cols="12" class="titulo">
                  <p >¿Necesito un asesor</p>
                </b-col> 
                <b-col cols="12" class="text">
                  <p >Necesitas ayuda o consulta de un asesor?</p>
                </b-col>
                <b-col cols="12" class="btn-llamar">
                  <button type="button" class="btn-home-cotizar" >
                    LLÁMANOS
                  </button> 
                </b-col>            
              </b-row>
            </slide>
            
            </carousel>
                        
          </div>          
        </b-col> -->
        <!-- fin dudas consultas mobile -->
        <!--Preguntas-->
        <b-col cols="12" lg="7">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-x variant="info" class="d-flex title-1">
                  <span>¿Cuándo inicia mi cobertura?</span>
                  <strong v-if="isVisible1" aria-hidden="true" class="ml-auto icono-menos">-</strong>
                  <strong v-else aria-hidden="true" class="ml-auto icono-mas">+</strong>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-x" accordion="my-accordion" role="tabpanel" v-model="isVisible1" >
                <b-card-body>
                  <b-card-text>
                    Desde la confirmación de pago.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2 variant="info" class="d-flex title-1">
                  <span>¿Cómo hago mi inspección?</span>
                  <strong v-if="isVisible2" aria-hidden="true" class="ml-auto icono-menos">-</strong>
                  <strong v-else aria-hidden="true" class="ml-auto icono-mas">+</strong>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel" v-model="isVisible2" >
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
                <b-button block v-b-toggle.accordion-3 variant="info" class="d-flex title-2">
                  <span>¿Qué pasa si ocurre un accidente y yo no soy el que maneja?</span>
                  <strong v-if="isVisible3" aria-hidden="true" class="ml-auto icono-menos">-</strong>
                  <strong v-else aria-hidden="true" class="ml-auto icono-mas">+</strong>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel" v-model="isVisible3" >
                <b-card-body>
                  <b-card-text>Igual lo cubrimos, siempre y cuando el que maneja cuente con un brevete vigente y no haya tomado alcohol.</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-4 variant="info" class="d-flex title-3">
                  <span>¿Qué pasa si choco contra un carro que no tiene seguro vehicular?</span>
                  <strong v-if="isVisible4" aria-hidden="true" class="ml-auto icono-menos">-</strong>
                  <strong v-else aria-hidden="true" class="ml-auto icono-mas">+</strong>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel" v-model="isVisible4" >
                <b-card-body>
                  <b-card-text>Si es que tú eres responsable del incidente, cubrimos tu carro y el de la otra persona.</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1 card-personalizado">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-5 variant="info" class="d-flex title-2">
                  <span>¿Qué pasa si ocurre un incidente y yo no soy el que maneja?</span>
                  <strong v-if="isVisible5" aria-hidden="true" class="ml-auto icono-menos">-</strong>
                  <strong v-else aria-hidden="true" class="ml-auto icono-mas">+</strong>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel" v-model="isVisible5" >
                <b-card-body>
                  <b-card-text>Igual lo cubrimos, siempre y cuando el que maneja cuente con un brevete vigente y no haya tomado alcohol.</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

          </div>
        </b-col>
        <!--Fin Preguntas-->
      </b-row>

      <!-- Desktop -->
      <!-- class="d-none d-xl-block" -->
      <b-container class="d-none d-xl-block mt-4">
        <b-row align-v="strech">        
          <b-col cols="4" class="pl-4 pr-4">
            <b-row class="row-dudas">
              <b-col class="box-dudas">
                <b-row align-v="center">
                  <b-col cols="3">
                    <img src="@/static/media/imagenes/home/tiempo-emergencia.svg"/>
                  </b-col>
                  <b-col cols="9" class="pl-4">
                    <b-row>
                      <b-col cols="12" class="titulo">
                        ¡Tengo una emergencia!
                      </b-col>
                      <b-col cols="12" class="text">
                        ¿tu carro acaba de chocar o sufrir un incidente? ¿te robaron?
                      </b-col>
                      <b-col cols="12" align-self="end">
                        <span>Llamanos: (01) 500 0000</span>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="4" class="pl-4 pr-4">
            <b-row class="row-dudas">
              <b-col class="box-dudas">
                <b-row align-v="center">
                  <b-col cols="3">
                    <img src="@/static/media/imagenes/home/donde-llevo-carro.svg"/>
                  </b-col>
                  <b-col cols="9" class="pl-4">
                    <b-row>
                      <b-col cols="12" class="titulo">
                        ¿Dónde llevo mi carro ?
                      </b-col>
                      <b-col cols="12" class="text">
                        Visita nuestra red de talleres afiliados
                      </b-col>
                      <b-col cols="12" align-self="end">
                        <span>Ver talleres afiliados</span>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="4" class="pl-4 pr-4">
            <b-row class="row-dudas">
              <b-col class="box-dudas">
                <b-row align-v="center">
                  <b-col cols="3">
                    <img src="@/static/media/imagenes/home/necesito-asesor.svg"/>
                  </b-col>
                  <b-col cols="9" class="pl-4">
                    <b-row>
                      <b-col cols="12" class="titulo">
                        Necesito un asesor
                      </b-col>
                      <b-col cols="12" class="text">
                        ¿Necesitas ayuda o consulta de un asesor?
                      </b-col>
                      <b-col cols="12" align-self="end">
                        <span>Llamanos: (01) 500 0000</span>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>          
          </b-col>
        </b-row>
      </b-container>
      
      <!-- v-bind:class="{ oculto: isOculto }" -->
      <b-row class="d-block d-sm-none mt-4 box-btn-home-cotizar-flotante" v-bind:class="{ oculto: isOculto }">
        <b-col cols="6" class="mt-2">
          <span class="desde">Desde</span><br>
          <span class="monto">US$ 12</span>
          <span class="text">al mes</span>
            
        </b-col>
        <b-col cols="6">
          <button type="button" class="btn-home-cotizar-flotante" @click="cotizar()">
            COTIZAR
          </button>
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
      slide: 0,
      sliding: null,
      isOculto: true,
      isVisible1: true,
      isVisible2: true,
      isVisible3: true,
      isVisible4: true,
      isVisible5: true,
      planInactivo: false,
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
          testimonio : "‘’Fue facilísimo contratar el seguro, en comparación con la gestión tradicional.” ",
          autor : "Manuel Augusto",
          star : 5,
          img : require("./../static/media/imagenes/home/testimonio.png")
        },
        {
          testimonio : "‘’Aún no tengo un siniestro con mi carro, pero el nivel de respuesta hasta el momento ha sido rápido.",
          autor : "Carolina Chavez",
          star : 5,
          img : require("./../static/media/imagenes/home/testimonio.png")
        },
        {
          testimonio : "‘’La info que me enviaron sobre la cobertura era concisa y simple de entender!",
          autor : "Enrique Quispe",
          star : 4,
          img : require("./../static/media/imagenes/home/testimonio.png")
        },
      ],
    }
  },
  methods: {
    onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
    cotizar(){
        this.$nuxt.$router.push({
            path: "/cotizacion/placa"
        });
    },
    handleScroll(eve) {
      if (window.scrollY >= 480) {
          if(true){
              this.isOculto = false;
              this.contactanos = false;                   
          }
      } else {
          this.isOculto = true
          this.contactanos = true;
      }
    },
    seleccionarPlan(id){
      this.planInactivo = true;
      let elemento1 = document.querySelectorAll(".v2-seleccion-planes__item")
      for (let index = 0; index < elemento1.length; index++) {
        elemento1[index].classList.remove("planActivo")      
      }
      setTimeout(() => {
        let arreglo = document.querySelectorAll(".plan"+id)
        for (let i = 0; i < arreglo.length; i++) {
          arreglo[i].classList.add("planActivo")
        }
        this.seleccionarFrecuencia()
      }, 250);

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
    if (process.browser) {
        window.addEventListener("scroll", this.handleScroll);
        document.addEventListener('touchstart', this.handleScroll, {passive: true});
    }
  },
  destroyed(){
      if (process.browser) {
          window.removeEventListener("scroll", this.handleScroll);
          document.addEventListener('touchstart', this.handleScroll, {passive: true});
      }
  },
  mounted() {
    this.$store.commit('common/resetState')
    this.handleScroll()
  }
}
</script>
