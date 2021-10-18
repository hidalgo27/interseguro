<template>
  <section class="pagina-cotizador">
    <div class="container-fluid secccion-superior">

      <div class="container">
        <b-row class="mi-breadcrumb">
          <b-col cols="12" class="box-steps2">
            <ul class="steps2" style="display: inline-flex">
                <div class="steps2__item"><span>Pago</span></div>
                <div class="steps2__item steps2--active">Planes</div>
                <div class="steps2__item"><span>Mi carro</span></div>
                <li class="steps2--progressBar"></li>
              </ul>
          </b-col>
        </b-row>
      </div>

      <b-row align-h="center" class="text-center row-custom">
        <b-col cols="12">
          <p class="flujo-titulo" >Ingresa la suma asegurada</p>
        </b-col>
        <b-col cols="12" class="datos-carro">
          <div >
            <span style="margin-left: 5px"
              >{{ this.$store.state.common.objVehiculo.brand }}
            </span>
            <span style="margin-left: 5px"
              >{{ this.$store.state.common.objVehiculo.model }}
            </span>
            <span style="margin-left: 5px"
              >{{ this.$store.state.common.objVehiculo.modelYear }}
            </span>
            <a href=""><img src="./../../static/media/imagenes/cotizacion/edit-lapiz.svg" alt="" @click="volver($event)" style="width:15px; margin-left:10px"></a>
          </div>
        </b-col>
        <b-col cols="11" sm="8" md="6" lg="5" xl="4" class="col-custom">
          <b-row class="box-suma-asegurada">
              <b-col cols="6" class="pr-0 row-suma-asegurada">
                <b-input-group append="US$">
                  <b-form-input disabled></b-form-input>
                </b-input-group>
              </b-col>
              <b-col cols="6" class="pl-0 row-suma-asegurada">
                <b-input-group >
                  <b-form-input type="number" autofocus
                  step="100"
                  v-model="listCotizacion.vehicle.current"
                  :min="isMinimo"
                  :max="isMaximo"
                  @change="cambioInput()">
                  </b-form-input>
                  <!-- <b-input-group-append>
                    <img src="./../../static/media/imagenes/cotizacion/edit-lapiz.svg" alt="" style=" height: 24px; margin-top: 20px; width: 24px;">
                  </b-input-group-append> -->
                </b-input-group>
              </b-col>
            </b-row>
        </b-col> 
        <b-col cols="12" style="height: 20px; ">
          <div class="valores-minimo-maximo">
              Mín: US$ {{ listCotizacion.vehicle.minimum }}. / Máx: US$
              {{ listCotizacion.vehicle.maximum }}
            </div>
        </b-col>
      </b-row>
      <b-row class="d-block d-sm-none pb-4">
        <b-col cols="12" md="6" lg="6" xl="3" class="mb-2">
          <div class="fecha">
            <b-form-select @change="seleccionarFrecuencia()" v-model="selected" :options="options" ></b-form-select>
          </div>
        </b-col>
      </b-row>
    </div>
    <!--inicio desktop - frecuencia, fecha, mail -->
    <b-container class="d-none d-sm-block secccion-inferior">
      <b-row class="text-center planes" align-v="baseline">
        <b-col cols="12" md="6" lg="6" xl="4" class="mb-2">
          <p class="flujo-titulo-left">¡Edita y elige tu plan!</p>
        </b-col>
        <b-col cols="12" md="6" lg="6" xl="3" class="mb-2">
          <div class="frecuencia">
            <b-form-select style="border: none" @change="seleccionarFrecuencia()" v-model="selected" :options="options" ></b-form-select>
          </div>
        </b-col>
        <b-col cols="12" md="6" lg="6" xl="3" class="mb-2">
          <div @click="showModalInicioVigencia()" class="fecha">
            Fecha de inicio:
            <span style="display: inline-block; line-height: 1; outline: none; color: #007bff; line-height: 1; ">
              <span class="detalle-enlace" style="cursor: pointer; position: relative" v-if="this.fechaVigencia != ''">
                {{ this.fechaVigencia }}
              </span>
              <span style="cursor: pointer" v-else> Cambiar </span>
            </span>
          </div>
        </b-col>
        <b-col cols="12" md="6" lg="6" xl="2" class="mb-2">
          <div class="envia-cotizacion" @click="showModalEnviarEmail()">
            <span class="enviar-cotizacion">Enviar cotización</span>
          </div>
        </b-col>
      </b-row>

      <!--Planes desktop-->
      <b-row class="text-center planes-items" align-v="stretch">
        <b-col cols="12" md="12" lg="4" xl="4" class="mb-2 plan-item plan4 plata" >
          <!-- <div style="height: 40px" class="plan-recomendado"></div> -->
          <!-- <div class="plan-item plan4 plata" @click="seleccionarPLanDesktop(4)" v-bind:class="{ planInactivoDesktop: planInactivo }"> -->
            <b-row>
              <b-col cols="12">
                <div class="plan-not-head-normal">
                </div>
              </b-col>
            </b-row>
            <div class="detalle-plan">
              <div class="box-titulo">
                <p class="titulo-principal-planes">
                  Básico:
                  <span class="titulo-descripcion">Protección contra robo</span>
                </p>
              </div>
              <hr />
              <div class="monto-frecuencia">
                <span>US$</span>
                <span>{{ this.monto_pagar_plata }}</span>
              </div>
              <div class="monto-antes">
                <p>Antes US${{ this.monto_antes_plata }}</p>
              </div>
              <button type="button"  @click="continuar($event, 4)">
                <span >Continuar</span>
              </button>
              <div class="que-me-cubre" v-if="this.listaBasica.vehicle.gps == 'Y'">
                <div class="titulo">Importante:</div>
                <p class="que-me-cubre__item"  v-if="this.listaBasica.vehicle.gps == 'Y'">
                  <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                  <span style="margin-left: 5px" >
                    Tu auto necesita GPS
                    <span class="link-modal" href="javascript:void(0);" @click="showModalGPS()">
                      <a class="link-modal" href="javascript:void(0);">
                        Ver más
                      </a>
                    </span >
                  </span>
                </p>
              </div>
              <div class="que-me-cubre">
                <div class="titulo">Este plan incluye:</div>
                <p class="que-me-cubre__item">
                  <img
                    src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                    alt=""
                  /><span style="margin-left: 5px">Beneficios Interseguro</span>
                </p>
                <p class="que-me-cubre__item">
                  <img
                    src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                    alt=""
                  /><span style="margin-left: 5px">Central de emergencias</span>
                </p>
                <p class="que-me-cubre__item">
                  <img
                    src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                    alt=""
                  /><span style="margin-left: 5px">Responsabilidad Civil</span>
                </p>
                <p class="que-me-cubre__item">
                  <img
                    src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                    alt=""
                  /><span style="margin-left: 5px">Robo total</span>
                </p>
              </div>
            </div>
          <!-- </div> -->
        </b-col>
        <b-col cols="12" md="12" lg="4" xl="4" class="mb-2 plan-item plan6 oro" >
                <!-- <div style="height: 40px" class="plan-recomendado"></div> -->
                <!-- <div class="plan-item plan6 oro" @click="seleccionarPLanDesktop(6)" v-bind:class="{ planInactivoDesktop: planInactivo }" > -->
                  <b-row>
                    <b-col cols="12">
                      <div class="plan-not-head-normal">
                      </div>
                    </b-col>
                  </b-row>
                  <div class="detalle-plan">
                    <div class="box-titulo">
                      <p class="titulo-principal-planes">
                        Intermedio:
                        <span class="titulo-descripcion">Protección accidentes</span>
                      </p>
                    </div>
                    <hr />
                    <div class="monto-frecuencia">
                      <span>US$</span>
                      <span>{{ this.monto_pagar_oro }}</span>
                    </div>
                    <div class="monto-antes">
                      <p>Antes US${{ this.monto_antes_oro }}</p>
                    </div>

                    <button type="button"  @click="continuar($event, 6)">
                      <span >Continuar</span>
                    </button>

                    <div class="que-me-cubre" v-if="this.listaBasica.vehicle.gps == 'Y'">
                      <div class="titulo">Importante:</div>
                      <p class="que-me-cubre__item"  v-if="this.listaBasica.vehicle.gps == 'Y'">
                        <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                        <span style="margin-left: 5px" >
                          Tu auto necesita GPS
                          <span class="link-modal" href="javascript:void(0);" @click="showModalGPS()">
                            <a class="link-modal" href="javascript:void(0);">
                              Ver más
                            </a>
                          </span >
                        </span>
                      </p>
                    </div>

                    <div class="que-me-cubre">
                      <div class="titulo">Este plan incluye:</div>

                      <p class="que-me-cubre__item">
                        <img
                          src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                          alt=""
                        /><span style="margin-left: 5px">Beneficios Interseguro</span>
                      </p>
                      <p class="que-me-cubre__item">
                        <img
                          src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                          alt=""
                        /><span style="margin-left: 5px">Central de emergencias</span>
                      </p>
                      <p class="que-me-cubre__item">
                        <img
                          src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                          alt=""
                        /><span style="margin-left: 5px">Responsabilidad Civil</span>
                      </p>
                      <p class="que-me-cubre__item">
                        <img
                          src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                          alt=""
                        /><span style="margin-left: 5px">Robo total</span>
                      </p>
                      <p class="que-me-cubre__item">
                        <img
                          src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                          alt=""
                        /><span style="margin-left: 5px"
                          >Pérdida parcial por accidente</span
                        >
                      </p>
                      <p class="que-me-cubre__item">
                        <img
                          src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                          alt=""
                        /><span style="margin-left: 5px">Accidentes de ocupantes</span>
                      </p>
                    </div>
                  </div>
                <!-- </div> -->
        </b-col>
        <b-col cols="12" md="12" lg="4" xl="4" class="mb-2 plan-item plan3 black" >
          <!-- <div class="plan-item plan3 black" @click="seleccionarPLanDesktop(3)" v-bind:class="{ planInactivoDesktop: planInactivo }" > -->
            <b-row align-h="center">
              <b-col cols="10">
                  <div class="plan-recomendado-full d-flex">
                    <img src="@/static/media/imagenes/home/star-white.svg" alt="Start">
                    <span style="margin-left: 10px">MÁS VENDIDO</span>
                  </div>
              </b-col>
            </b-row>
            <div class="detalle-plan-select">
                <div class="box-titulo">
                  <p class="titulo-principal-planes">
                    Full: <span class="titulo-descripcion">Protección total</span>
                  </p>
                </div>
                <hr />
                <div class="monto-frecuencia">
                  <span>US$</span>
                  <span>{{ this.monto_pagar_black }}</span>
                </div>
                <div class="monto-antes">
                  <p>Antes US${{ this.monto_antes_black }}</p>
                </div>
                <button type="button"  @click="continuar($event, 3)">
                  <span >Continuar</span>
                </button>
                <div class="que-me-cubre">
                  <div class="titulo">Importante:</div>
                  <p class="que-me-cubre__item" v-if="this.listaBasica.vehicle.gps == 'Y'">
                    <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                    <span style="margin-left: 5px" >
                      Tu auto necesita GPS
                      <span class="link-modal" href="javascript:void(0);" @click="showModalGPS()">
                        <a class="link-modal" href="javascript:void(0);">
                          Ver más
                        </a>
                      </span >
                    </span>
                  </p>
                  <p class="que-me-cubre__item">
                    <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                    <span style="margin-left: 5px">Endosa tu crédito vehicular </span>
                    <template v-if="this.endosoSeleccionado.id == 0">
                      <span class="link-modal" v-b-modal.modalEntidadFinanciera2 @click="clickEnlace('entidad Financiera')" >
                        aquí
                      </span>
                    </template>
                    <template v-else>
                      <span class="link-modal" v-b-modal.modalEntidadFinanciera2 @click="clickEnlace('entidad Financiera')" >
                        {{ this.endosoSeleccionado.name }}
                      </span>
                    </template>
                  </p>
                </div>
                <div class="que-me-cubre">
                  <div class="titulo">Este plan incluye:</div>
                  <p class="que-me-cubre__item">
                    <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                    <span style="margin-left: 5px">Beneficios Interseguro</span>
                  </p>
                  <p class="que-me-cubre__item">
                    <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                    <span style="margin-left: 5px">Central de emergencias</span>
                  </p>
                  <p class="que-me-cubre__item">
                    <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                    <span style="margin-left: 5px">Responsabilidad Civil</span>
                  </p>
                  <p class="que-me-cubre__item">
                    <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                    <span style="margin-left: 5px">Robo total</span>
                  </p>
                  <p class="que-me-cubre__item">
                    <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                    <span style="margin-left: 5px" >Pérdida parcial por accidente</span >
                  </p>
                  <p class="que-me-cubre__item">
                    <img
                      src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                      alt=""
                    /><span style="margin-left: 5px">Accidentes de ocupantes</span>
                  </p>
                  <p class="que-me-cubre__item">
                    <img
                      src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                      alt=""
                    /><span style="margin-left: 5px">Accesorios musicales</span>
                  </p>
                  <p class="que-me-cubre__item">
                    <img
                      src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                      alt=""
                    /><span style="margin-left: 5px">Rotura de lunas</span>
                  </p>
                  <p class="que-me-cubre__item">
                    <img
                      src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                      alt=""
                    /><span style="margin-left: 5px"
                      >Desastres naturales, vandalismo, incendios.</span
                    >
                  </p>
                  <p class="que-me-cubre__item">
                    <img
                      src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                      alt=""
                    /><span style="margin-left: 5px"
                      >Pérdida total por accidente</span
                    >
                  </p>
                  <p class="que-me-cubre__item">
                    <img
                      src="./../../static/media/imagenes/cotizacion/check-lg.svg"
                      alt=""
                    /><span style="margin-left: 5px">Ausencia de control*</span>
                  </p>
                </div>
              </div>
          <!-- </div> -->
        </b-col>
      </b-row>
    </b-container>
    <!--fin desktop - frecuencia, fecha, mail -->

    <!--Planes mobile-->
    <b-container class="seccion seccion-planes d-block d-sm-none">
      <b-row class="justify-content-center" align-v="center">
        <b-col cols="7">
          <p class="flujo-titulo" style="margin-top:15px">Elige tu plan</p>          
        </b-col>
        <b-col cols="2" class="mr-1 pl-0">
          <div @click="showModalInicioVigencia()">            
            <img src="./../../static/media/imagenes/cotizacion/calendar.svg" alt="">
          </div>
        </b-col>
        <b-col cols="2" style="padding-right:72px">
          <div @click="showModalEnviarEmail()">
            <img src="./../../static/media/imagenes/cotizacion/mail.svg" alt="">
          </div>
        </b-col>
        <b-col cols="1">

        </b-col>
      </b-row>
      <b-row align-h="center" class="pt-4">
        <b-col cols="4" class="box-plan-basico">              
          <div class="v2-seleccion-planes">
            <div class="v2-seleccion-planes__item plan4 blue" @click="seleccionarPLan(4)" v-bind:class="{ planInactivo: planInactivo }">
                <p>BÁSICO</p>
            </div>
          </div>
        </b-col>
        <b-col cols="4" class="box-plan-full">
          <div class="v2-seleccion-planes" >
            <div class="v2-seleccion-planes__item plan3 blue justify-content-center" @click="seleccionarPLan(3)" v-bind:class="{ planInactivo: planInactivo }">
              <img src="@/static/media/imagenes/home/star-white.svg" alt="Start" style="margin-right:8px">
              <p>FULL</p>
            </div>
          </div>
        </b-col>
        <b-col cols="4" class="box-plan-medio">
          <div class="v2-seleccion-planes" >
            <div class="v2-seleccion-planes__item plan6 blue" @click="seleccionarPLan(6)" v-bind:class="{ planInactivo: planInactivo }">
                <p>MEDIO</p>
            </div>
          </div>
        </b-col>        
      </b-row>      

      <b-row align-h="center" class="text-center ">
        <b-col cols="12" md="12" lg="4" xl="4" class="mb-2 plan-item" >
            <div class="detalle-plan-select" v-if="this.planSeleccionado == 3">
              <div class="box-titulo">
                <div class="titulo-principal-planes">
                  <p  v-if="this.planSeleccionado == 4">
                    Protección contra robo
                  </p>
                  <p  v-if="this.planSeleccionado == 6">
                    Protección accidentes
                  </p>
                  <p  v-if="this.planSeleccionado == 3">
                    Protección total
                  </p>
                </div>
              </div>
              <hr />

              <div class="monto-frecuencia">
                <span>US$</span>
                <span>{{ this.monto_pagar }}</span>
              </div>
              <div class="monto-antes">
                <p>Antes US${{ this.monto_antes }}</p>
              </div>
              <div class="btn-cotizador"  @click="continuar($event, planSeleccionado)">
                <span >Continuar</span>
              </div>

              
              <div class="que-me-cubre">
                <div class="titulo-importante" v-if="this.listaBasica.vehicle.gps == 'Y' || this.$store.state.common.planSeleccionado == 3 || this.$store.state.common.planSeleccionado == 10">Importante:</div>
                <p class="que-me-cubre__item"  v-if="this.listaBasica.vehicle.gps == 'Y'">
                  <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                  <span style="margin-left: 5px" >
                    Tu auto necesita GPS
                    <span class="link-modal" href="javascript:void(0);" @click="showModalGPS()">
                      <a class="link-modal" href="javascript:void(0);">
                        Ver más
                      </a>
                    </span >
                  </span>
                </p>
                <p class="que-me-cubre__item" v-if="this.$store.state.common.planSeleccionado == 3 || this.$store.state.common.planSeleccionado == 10">
                  <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                  <span style="margin-left: 5px">Endosa tu crédito vehicular </span>
                  <template v-if="this.endosoSeleccionado.id == 0">
                    <span class="link-modal" v-b-modal.modalEntidadFinanciera2 @click="clickEnlace('entidad Financiera')" >
                      aquí
                    </span>
                  </template>
                  <template v-else>
                    <span class="link-modal" v-b-modal.modalEntidadFinanciera2 @click="clickEnlace('entidad Financiera')" >
                      {{ this.endosoSeleccionado.name }}
                    </span>
                  </template>
                </p>
              </div>

              <div class="que-me-cubre">
                <div class="titulo">Este plan incluye:</div>
                <p class="que-me-cubre__item">
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Beneficios Interseguro</b-col>
                   </b-row>
                </p>
                <p class="que-me-cubre__item">
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Central de emergencias</b-col>
                   </b-row>
                </p>
                <p class="que-me-cubre__item">
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Responsabilidad Civil</b-col>
                   </b-row>
                </p>
                <p class="que-me-cubre__item">
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Robo total</b-col>
                   </b-row>
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 6 || this.planSeleccionado == 3 || this.planSeleccionado == 10">
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Pérdida parcial por accidente</b-col>
                   </b-row>                     
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 6 || this.planSeleccionado == 10" >
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Accidentes de ocupantes</b-col>
                   </b-row>                     
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" >
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Accesorios musicales</b-col>
                   </b-row>                   
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" >
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Rotura de lunas</b-col>
                   </b-row>                     
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" >
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Desastres naturales, vandalismo, incendios.</b-col>
                   </b-row>                     
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" >
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Pérdida total por accidente</b-col>
                   </b-row>                     
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" >
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Ausencia de control*</b-col>
                   </b-row>                     
                </p>
              </div>
            </div>
            <div class="detalle-plan" v-if="this.planSeleccionado == 4 || this.planSeleccionado == 6">
              <div class="box-titulo">
                <div class="titulo-principal-planes">
                  <p v-if="this.planSeleccionado == 4">
                    Protección contra robo
                  </p>
                  <p v-if="this.planSeleccionado == 6">
                    Protección accidentes
                  </p>
                  <p v-if="this.planSeleccionado == 3">
                    Protección total
                  </p>
                </div>
              </div>
              <hr />

              <div class="monto-frecuencia">
                <span>US$</span>
                <span>{{ this.monto_pagar }}</span>
              </div>
              <div class="monto-antes">
                <p>Antes US${{ this.monto_antes }}</p>
              </div>
              <div class="btn-cotizador"  @click="continuar($event, planSeleccionado)">
                <span >Continuar</span>
              </div>
              <div class="que-me-cubre">
                <div class="titulo-importante" v-if="this.listaBasica.vehicle.gps == 'Y' || this.$store.state.common.planSeleccionado == 3 || this.$store.state.common.planSeleccionado == 10">Importante:</div>
                <p class="que-me-cubre__item"  v-if="this.listaBasica.vehicle.gps == 'Y'">
                  <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                  <span style="margin-left: 5px" >
                    Tu auto necesita GPS
                    <span class="link-modal" href="javascript:void(0);" @click="showModalGPS()">
                      <a class="detalle-enlace" href="javascript:void(0);">
                        {{this.listaBasica.vehicle.gps == "Y" ? "Ver más" : "NO"}}
                      </a>
                    </span >
                  </span>
                </p>
                <p class="que-me-cubre__item" v-if="this.$store.state.common.planSeleccionado == 3 || this.$store.state.common.planSeleccionado == 10">
                  <img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt="" />
                  <span style="margin-left: 5px">Endosa tu crédito vehicular </span>
                  <template v-if="this.endosoSeleccionado.id == 0">
                    <span class="link-modal" v-b-modal.modalEntidadFinanciera2 @click="clickEnlace('entidad Financiera')" >
                      aquí
                    </span>
                  </template>
                  <template v-else>
                    <span class="link-modal" v-b-modal.modalEntidadFinanciera2 @click="clickEnlace('entidad Financiera')" >
                      {{ this.endosoSeleccionado.name }}
                    </span>
                  </template>
                </p>
              </div>

              <div class="que-me-cubre">
                <div class="titulo">Este plan incluye:</div>
                <p class="que-me-cubre__item">
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Beneficios Interseguro</b-col>
                   </b-row>
                </p>
                <p class="que-me-cubre__item">
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Central de emergencias</b-col>
                   </b-row>
                </p>
                <p class="que-me-cubre__item">
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Responsabilidad Civil</b-col>
                   </b-row>
                </p>
                <p class="que-me-cubre__item">
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Robo total</b-col>
                   </b-row>
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 6 || this.planSeleccionado == 3 || this.planSeleccionado == 10">
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Pérdida parcial por accidente</b-col>
                   </b-row>                     
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 6 || this.planSeleccionado == 10" >
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Accidentes de ocupantes</b-col>
                   </b-row>                     
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" >
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Accesorios musicales</b-col>
                   </b-row>                   
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" >
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Rotura de lunas</b-col>
                   </b-row>                     
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" >
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Desastres naturales, vandalismo, incendios.</b-col>
                   </b-row>                     
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" >
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Pérdida total por accidente</b-col>
                   </b-row>                     
                </p>
                <p class="que-me-cubre__item" v-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" >
                  <b-row>
                     <b-col cols="1"><img src="./../../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                     <b-col >Ausencia de control*</b-col>
                   </b-row>                     
                </p>
              </div>
            </div>
        </b-col>
      </b-row>

    </b-container>

    <!--Modal e-mail-->
    <b-modal title="Bootstrap-Vue" hide-footer hide-header ref="modalEnviarEmail" id="modalEnviarEmail2" class="enviar-cotizacion">
      <img @click="hideModalEnviarEmail()" src="./../../static/media/img/root/close.png" width="30" alt="icon close" class="modal-close2" />
      <div class="box-mensajeEnviadoCotizacion" v-bind:class="{ mostrarMensajeEnviadoCotizacion: mostrarMensajeEnviadoCotizacion, }" >
        <p class="modal-subtitulo-mail">
          Ingresa tu correo para enviarte <br />
          la cotización y asegures tu carro <br />
          al mejor precio del mercado :)
        </p>
      </div>
      <div>
        <div>
          <b-form-input id="input-small" placeholder="Ejem. lperez@gmail.com" v-model="email" >
          </b-form-input>
        </div>
        <div class="box-btns">
          <button class="btn btn-mail" @click="enviarMail()">Enviar cotización</button>
        </div>
      </div>
    </b-modal>
    <!--Fin Modal e-mail-->

    <b-modal title="Bootstrap-Vue" hide-footer hide-header ref="modalNumeroCelular" id="modalNumeroCelular" >
      <div class="modal-content modal-root">
        <div class="modal-body">
          <div class="box-mensajeEnviado" v-bind:class="{ mostrarMensajeEnviado: mostrarMensajeEnviado }" >
            <img class="check-enviado" src="./../../static/media/img/root/check.png" alt="" />
            <p>
              ¡Listo! En breve recibirás el link de descarga al
              <span>{{ this.inputNumeroCelular }}</span>
            </p>
          </div>
          <div class="box-img">
            <img
              width="100"
              src="./../../static/media/img/root/descarga_modal.png"
              alt=""
            />
          </div>
          <div class="box-titulo">
            <p class="titulo">Recibe el link de descarga a tu celular</p>
          </div>
          <div class="box-input">
            <b-form-input
              class="telefono"
              type="tel"
              maxlength="9"
              v-model="inputNumeroCelular"
              :placeholder="placeholderNumeroCelular"
            ></b-form-input>
            <span class="enviar" @click="enviarNumeroCelular()">Enviar</span>
          </div>
          <div class="condiciones">
            <span
              >Al continuar acepto las
              <span
                class="enlaceTerminosCondiciones"
                @click="showModalTerminosCondiciones()"
                >Condiciones de Uso y Política de Privacidad.</span
              ></span
            >
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="modalRootCotizador"
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="modalRootCotizador"
      size="xl"
    >
      <div class="modal-content modal-rootCotizador">
        <img
          @click="hideModalRootCotizador()"
          src="./../../static/media/img/root/close.png"
          width="50"
          alt="icon close"
          class="img-close-modal"
        />
        <div class="modal-head">
          <div class="box-titulo">
            <p class>
              Paga hasta 50% menos <br />
              en tu Seguro Vehicular
            </p>
            <span>Según tu forma de conducir</span>
          </div>
          <div class="modal-divider"></div>
        </div>
        <div class="modal-body">
          <div class="modal-body__item">
            <div class="box-img">
              <img src="./../../static/media/img/root/descarga.png" alt="pasos gps" />
            </div>
            <div class="box-descripcion">
              <p class="titulo">Descarga el app</p>
              <p class="desc">Ahora tú tienes el control. Comienza en un minuto.</p>
            </div>
          </div>
          <div class="modal-body__item">
            <div class="box-img">
              <img src="./../../static/media/img/root/maneja.png" alt="pasos gps" />
            </div>
            <div class="box-descripcion">
              <p class="titulo">Manejo tu carro</p>
              <p class="desc">Vamos a medir tu habilidad de manejo desde el app.</p>
            </div>
          </div>
          <div class="modal-body__item">
            <div class="box-img">
              <img src="./../../static/media/img/root/ahorra.png" alt="pasos gps" />
            </div>
            <div class="box-descripcion">
              <p class="titulo">Ahorra</p>
              <p class="desc">Recibe tu cotización, elige tu plan y ¡estás protegido!</p>
              <span class="disclaimer-porcentaje d-none d-lg-block">
                * Solo aplica a los planes Oro y Black .
              </span>
            </div>
          </div>
          <span class="disclaimer-porcentaje d-lg-none">
            * Solo aplica a los planes Oro y Black .
          </span>
        </div>
        <div class="modal-footer" style="justify-content: center">
          <div class="box-btn d-flex justify-content-end box-btn-cotizador">
            <button
              type="submit"
              :disabled="isDisabled"
              @click="descargarApp($event)"
              class="btn box-btn__button d-block d-xl-none"
              style="animation: none"
            >
              DESCARGAR APP AHORA
            </button>
            <button
              type="submit"
              :disabled="isDisabled"
              @click="showModalNumeroCelular($event)"
              class="btn box-btn__button d-none d-xl-block"
              style="animation: none"
            >
              DESCARGAR APP AHORA
            </button>
          </div>
        </div>
        <div class="row"></div>
      </div>
    </b-modal>

    <!--Modal fecha inicio-->
    <b-modal title="Bootstrap-Vue" hide-footer hide-header ref="modalInicioVigencia" id="modalInicioVigencia2" >
      <img src="./../../static/media/img/root/close.png" width="30" alt="icon close" class="modal-close2" @click="hideModalInicioVigencia()" />
      <div class="modal-content fechaVigenciaCotizador">
        <p class="modal-titulo">
          Elige la fecha que iniciará <br />
          tu Seguro Vehicular
        </p>

        <div id="input-group-3" class="inicioVigencia">
          <div class="fechaCotizador">
            <datepicker
              class="mt-2"
              :inline="true"
              :disabledDates="state.disabledDates"
              id="fechaCustom"
              :full-month-name="true"
              :value="state.date"
              @selected="elegirFecha"
            ></datepicker>
          </div>
        </div>
        <div class="box-btns">
          <button class="btn btn-principal" @click="hideModalInicioVigencia()">
            CONFIRMAR
          </button>
        </div>
      </div>
    </b-modal>
    <!--Fin Modal fecha inicio-->

    <b-modal id="v2modalGPS" title="Bootstrap-Vue" hide-footer hide-header ref="v2modalGPS" >
      <img src="./../../static/media/img/root/close.png" width="30" alt="icon close" class="modal-close2" @click="hideModalGPS()" />
      <div class="d-block text-center v2modalGPS">
        <b-row align-h="center" >
           <b-col cols="12" class="v2modalGPS-header">
             <p class="d-none d-md-block">
               <img src="./../../static/media/imagenes/cotizacion/auto-modal-gps.svg" alt="" style="margin-right:30px">
               <span >Hola, tu {{ this.itemElegido.brand }} necesita un GPS</span>               
              </p>
              <b-row class="justify-content-center">
                <b-col class="d-md-none" cols="12" sm="10" md="8"> 
                  <b-row align-v="center">
                    <b-col cols="3">
                      <img src="./../../static/media/imagenes/cotizacion/auto-modal-gps.svg" alt="" style="margin-right:30px">
                    </b-col>
                    <b-col cols="9" class="text-left">
                      <p >Hola, tu {{ this.itemElegido.brand }} necesita un GPS</p>               
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>              
           </b-col>
           <b-col cols="12" sm="12" md="12" lg="10" xl="10"  class="v2modalGPS-body">
             <b-row>
               <b-col cols="12">
                 <span class="descripcion">
                  Por ser de Interseguro, podrás acceder a los mejores precios:
                </span>
               </b-col>
             </b-row>
             <!--Desktop-->
             <b-row >
               <b-col cols="12" sm="12" md="12" lg="6" xl="6" class="contenedor-box d-none d-md-block">
                 <b-row>
                   <b-col cols="12" class="box-empresa-soat">
                    <b-row>
                      <b-col cols="5" class="box-empresa-izq">
                        <b-row class="row-content">
                          <b-col cols="12" class="edificio">
                            <img src="./../../static/media/imagenes/cotizacion/empresa.svg" alt="">
                          </b-col>
                          <b-col cols="12">
                            <p class="label">Empresa:</p>
                          </b-col>
                          <b-col cols="12">
                            <p class="text">Protemax</p>
                          </b-col>
                        </b-row>

                      </b-col>
                      <b-col cols="7" class="box-empresa-der">
                        <b-row class="row-content">
                          <b-col cols="12">
                            <span class="label">Precio:</span><br>
                            <span class="text">US$ 150</span><br>
                            <span class="precio-antes">Antes US$ 250</span><br>
                            <span class="label">Contacto:</span><br>
                            <span class="text">(01) 618 1900</span> 
                          </b-col>
                        </b-row>                                        
                      </b-col>
                    </b-row>
                    </b-col>
                 </b-row>
               </b-col>
               <b-col cols="12" sm="12" md="12" lg="6" xl="6" class="contenedor-box d-none d-md-block">
                 <b-row>
                   <b-col cols="12" class="box-empresa-soat">
                    <b-row>
                      <b-col cols="5" class="box-empresa-izq">
                        <b-row class="row-content">
                          <b-col cols="12" class="edificio">
                            <img src="./../../static/media/imagenes/cotizacion/empresa.svg" alt="">
                          </b-col>
                          <b-col cols="12">
                            <p class="label">Empresa:</p>
                          </b-col>
                          <b-col cols="12">
                            <p class="text">Satellital Patrol</p>
                          </b-col>
                        </b-row>

                      </b-col>
                      <b-col cols="7" class="box-empresa-der">
                        <b-row class="row-content">
                          <b-col cols="12">
                            <span class="label">Precio:</span><br>
                            <span class="text">US$ 177</span><br>
                            <span class="precio-antes">Antes US$ 250</span><br>
                            <span class="label">Contacto:</span><br>
                            <span class="text">(01) 620 1111</span> 
                          </b-col>
                        </b-row>                                        
                      </b-col>
                    </b-row>
                    </b-col>
                 </b-row>
               </b-col>
               <b-col cols="12" sm="12" md="12" lg="6" xl="6" class="contenedor-box d-none d-md-block">
                 <b-row>
                   <b-col cols="12" class="box-empresa-soat">
                    <b-row>
                      <b-col cols="5" class="box-empresa-izq">
                        <b-row class="row-content">
                          <b-col cols="12" class="edificio">
                            <img src="./../../static/media/imagenes/cotizacion/empresa.svg" alt="">
                          </b-col>
                          <b-col cols="12">
                            <p class="label">Empresa:</p>
                          </b-col>
                          <b-col cols="12">
                            <p class="text">Tracklink Motor link</p>
                          </b-col>
                        </b-row>

                      </b-col>
                      <b-col cols="7" class="box-empresa-der">
                        <b-row class="row-content">
                          <b-col cols="12">
                            <span class="label">Precio:</span><br>
                            <span class="text">US$ 165</span><br>
                            <span class="precio-antes">Antes US$ 250</span><br>
                            <span class="label">Contacto:</span><br>
                            <span class="text">(01) 630 7575</span> 
                          </b-col>
                        </b-row>                                        
                      </b-col>
                    </b-row>
                    </b-col>
                 </b-row>
               </b-col>
               <b-col cols="12" sm="12" md="12" lg="6" xl="6" class="contenedor-box d-none d-md-block">
                 <b-row>
                   <b-col cols="12" class="box-empresa-soat">
                    <b-row>
                      <b-col cols="5" class="box-empresa-izq">
                        <b-row class="row-content">
                          <b-col cols="12" class="edificio">
                            <img src="./../../static/media/imagenes/cotizacion/empresa.svg" alt="">
                          </b-col>
                          <b-col cols="12">
                            <p class="label">Empresa:</p>
                          </b-col>
                          <b-col cols="12">
                            <p class="text">Protesegur</p>
                          </b-col>
                        </b-row>

                      </b-col>
                      <b-col cols="7" class="box-empresa-der">
                        <b-row class="row-content">
                          <b-col cols="12">
                            <span class="label">Precio:</span><br>
                            <span class="text">US$ 199</span><br>
                            <span class="precio-antes">Antes US$ 250</span><br>
                            <span class="label">Contacto:</span><br>
                            <span class="text">(01) 513 8686</span> 
                          </b-col>
                        </b-row>                                        
                      </b-col>
                    </b-row>
                    </b-col>
                 </b-row>
               </b-col>
               
             </b-row>
             <!--Mobile-->
             <b-row >
               <div class="d-md-none">
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
                  @sliding-end="onSlideEnd">
                    <b-carousel-slide img-blank style="background:#FFFFFF">                      
                        <b-row class="contenedor-box">
                          <b-col cols="12" class="box-empresa-soat">
                            <b-row>
                              <b-col cols="5" class="box-empresa-izq">
                                <b-row class="row-content">
                                  <b-col cols="12" class="edificio">
                                    <img src="./../../static/media/imagenes/cotizacion/empresa.svg" alt="">
                                  </b-col>
                                  <b-col cols="12">
                                    <p class="label">Empresa:</p>
                                  </b-col>
                                  <b-col cols="12">
                                    <p class="text">Protemax</p>
                                  </b-col>
                                </b-row>

                              </b-col>
                              <b-col cols="7" class="box-empresa-der">
                                <b-row class="row-content">
                                  <b-col cols="12">
                                    <span class="label">Precio:</span><br>
                                    <span class="text">US$ 150</span><br>
                                    <span class="precio-antes">Antes US$ 250</span><br>
                                    <span class="label">Contacto:</span><br>
                                    <span class="text">(01) 618 1900</span> 
                                  </b-col>
                                </b-row>                                        
                              </b-col>
                            </b-row>
                            </b-col>
                        </b-row>
                    </b-carousel-slide>
                    <b-carousel-slide img-blank style="background:#FFFFFF">
                      <b-row class="contenedor-box">
                        <b-col cols="12" class="box-empresa-soat">
                          <b-row>
                            <b-col cols="5" class="box-empresa-izq">
                              <b-row class="row-content">
                                <b-col cols="12" class="edificio">
                                  <img src="./../../static/media/imagenes/cotizacion/empresa.svg" alt="">
                                </b-col>
                                <b-col cols="12">
                                  <p class="label">Empresa:</p>
                                </b-col>
                                <b-col cols="12">
                                  <p class="text">Satellital Patrol</p>
                                </b-col>
                              </b-row>

                            </b-col>
                            <b-col cols="7" class="box-empresa-der">
                              <b-row class="row-content">
                                <b-col cols="12">
                                  <span class="label">Precio:</span><br>
                                  <span class="text">US$ 177</span><br>
                                  <span class="precio-antes">Antes US$ 250</span><br>
                                  <span class="label">Contacto:</span><br>
                                  <span class="text">(01) 620 1111</span> 
                                </b-col>
                              </b-row>                                        
                            </b-col>
                          </b-row>
                          </b-col>
                      </b-row>
                    </b-carousel-slide>
                    <b-carousel-slide img-blank style="background:#FFFFFF">
                      <b-row class="contenedor-box">
                        <b-col cols="12" class="box-empresa-soat">
                          <b-row>
                            <b-col cols="5" class="box-empresa-izq">
                              <b-row class="row-content">
                                <b-col cols="12" class="edificio">
                                  <img src="./../../static/media/imagenes/cotizacion/empresa.svg" alt="">
                                </b-col>
                                <b-col cols="12">
                                  <p class="label">Empresa:</p>
                                </b-col>
                                <b-col cols="12">
                                  <p class="text">Tracklink Motor link</p>
                                </b-col>
                              </b-row>

                            </b-col>
                            <b-col cols="7" class="box-empresa-der">
                              <b-row class="row-content">
                                <b-col cols="12">
                                  <span class="label">Precio:</span><br>
                                  <span class="text">US$ 165</span><br>
                                  <span class="precio-antes">Antes US$ 250</span><br>
                                  <span class="label">Contacto:</span><br>
                                  <span class="text">(01)630 7575</span> 
                                </b-col>
                              </b-row>                                        
                            </b-col>
                          </b-row>
                          </b-col>
                      </b-row>
                    </b-carousel-slide>
                    <b-carousel-slide img-blank style="background:#FFFFFF">
                      <b-row class="contenedor-box">
                        <b-col cols="12" class="box-empresa-soat">
                          <b-row>
                            <b-col cols="5" class="box-empresa-izq">
                              <b-row class="row-content">
                                <b-col cols="12" class="edificio">
                                  <img src="./../../static/media/imagenes/cotizacion/empresa.svg" alt="">
                                </b-col>
                                <b-col cols="12">
                                  <p class="label">Empresa:</p>
                                </b-col>
                                <b-col cols="12">
                                  <p class="text">Protesegur</p>
                                </b-col>
                              </b-row>

                            </b-col>
                            <b-col cols="7" class="box-empresa-der">
                              <b-row class="row-content">
                                <b-col cols="12">
                                  <span class="label">Precio:</span><br>
                                  <span class="text">US$ 199</span><br>
                                  <span class="precio-antes">Antes US$ 250</span><br>
                                  <span class="label">Contacto:</span><br>
                                  <span class="text">(01) 513 8686</span> 
                                </b-col>
                              </b-row>                                        
                            </b-col>
                          </b-row>
                          </b-col>
                      </b-row>
                    </b-carousel-slide>
                  </b-carousel>
               </div>
               
             </b-row>
             <b-row class="justify-content-center">
               <b-col cols="3" sm="2" md="2" lg="2" xl="2" class="mensaje">
                 <img src="./../../static/media/imagenes/cotizacion/modal-persona.svg" alt="">
                </b-col>
                <b-col cols="9" sm="10" md="10" lg="7" xl="7" align-self="center" class="m-0 p-0">
                  <p>Al finalizar la compra de tu Seguro Vehicular te ayudaremos con la compra de tu GPS.</p>
                </b-col>
             </b-row>
             <b-row class="justify-content-center">
               <b-col cols="9">
                 <hr>
               </b-col>
             </b-row>
             <b-row >
               <b-col class="pregunta">
                 <p>¿Ya tienes un GPS activo? </p>
               </b-col>
             </b-row>
             <b-row class="certificado">
               <b-col>
                 <p>Luego de la compra, envíanos el certificado.</p>
               </b-col>
             </b-row>
             <b-row class="boton">
               <b-col>
                 <b-button @click="hideModalGPS()"><span>Estoy deacuerdo</span></b-button>
               </b-col>
             </b-row>
           </b-col>
           <b-col cols="12" class="v2modalGPS-footer">
             <p>Tendrás 5 días para contratar tu GPS luego de la compra del Seguro Vehicular, <br> si no perderás la cobertura de Robo Total.</p>
           </b-col>
        </b-row>
      </div>
      
    </b-modal>

    <!--Modal entidad financiera-->
    <b-modal id="modalEntidadFinanciera2" title="Bootstrap-Vue" hide-footer hide-header ref="modalEntidadFinanciera2" >
      <img src="./../../static/media/img/root/close.png" width="30" alt="icon close" class="modal-close2" @click="hidemodalEntidadFinanciera()" />
      <!-- <div class="box-mensajeEnviadoEndosar" v-bind:class="{ mostrarMensajeEnviadoEndosar: mostrarMensajeEnviadoEndosar }" >
        <div class="endosar-item">
          <img width="80" class="check-enviado" src="./../../static/media/interseguroVehicular_v2/mensaje-enviado-cotizacion.png" alt="" />
          <p class="modal-titulo-endoso">
            Tu Seguro Vehicular se ha endosado correctamente al
            {{ this.endosoSeleccionado.name }}
          </p>
        </div>
      </div> -->
      <p class="modal-titulo">¿Dónde pediste tu crédito vehicular?</p>
      <div id="boxEndosoSesion" class="modalEntidadFinanciera endosoSesion">
        <div v-for="(item, index) in listaNuevaDeEndoso" :key="index">
          <div v-on:click="setearEntidadFinanciera(item)">
            <div id="endosoSesionItem" class="endosoItem">
              <span name="parent" v-bind:id="'entidad-' + item.id" class="endosoUncheck" v-bind:class="{ checked: ischecked }" ></span>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="box-btns">
        <button class="btn btn-principal" @click="seleccionarEntidadFinanciera()">
          Confirmar y Endosar Póliza
        </button>
      </div>
    </b-modal>
    <!--Fin Modal entidad financiera-->

    <!--Modal Abandono-->
    <!-- <b-modal id="leaveQuote2" class="leaveModal" size="lg" static centered hide-footer hide-header >
      <b-container>
        <b-row class="justify-content-center">
          <b-col class="text-center mb-3" cols="12">
            <img
              src="../../static/media/modal/leave-cotiza-2.png"
              alt="Abandonar Seguro Vehicular"
            />
          </b-col>
        </b-row>
        <b-row class="text-center">
          <b-col cols="12" class="mb-3">
            <h2><span>¿Lo vas a dejar pasar?</span></h2>
          </b-col>
          <b-col cols="12" class="mb-3">
            <h3 v-if="appDiscount == true">
              Elige un plan para tu {{ this.itemElegido.brand }} <br />
              desde ${{ this.listaBasica.policy.monthlyDiscount }} y maneja seguro
            </h3>
            <h3 v-else-if="this.nuevoProducto == true">
              Elige un plan para tu {{ this.itemElegido.brand }} <br />
              desde ${{ this.listaBasica.policy.monthlyCalculated }} y maneja seguro
            </h3>
            <h3 v-else>
              Elige un plan para tu {{ this.itemElegido.brand }} <br />
              desde ${{ this.listaBasica.policy.monthly }} y maneja seguro
            </h3>
          </b-col>
          <b-col cols="12" class="mb-2">
            <h3>Personaliza tu cotización en el siguiente paso</h3>
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col class="text-center mb-4" cols="12">
            <b-button @click="$nuxt.$emit('bv::hide::modal', 'leaveQuote2')"
              >QUIERO CONTINUAR</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </b-modal> -->

    <!--Modal campania-->
     <b-modal id="leaveQuote2" class="leaveModal2" static centered hide-footer hide-header >
        <b-container>
          <b-row class="justify-content-center">
            <b-col class="text-center mb-3" cols="12">
              <img class="img-verano"  src="../../static/media/img/campania/img-modal.svg" alt="">              
              <p class="mt-2 msj-modal">
                <strong class="name-client"> {{this.$store.state.common.objCliente.firstName}} </strong> <br> 
                <span class="white">¡Hot Sale Interseguro!  </span><br>
                <span class="white">Asegura tu auto HOY, y por hacerlo en Plan Full, </span><br>
                <span class="white">llévate  </span>
                <span class="yelow">una cuota gratis + vale de S/100 </span>                     
              </p>                
            </b-col>
          </b-row>
          
          <b-row class="justify-content-center">
            <b-col class="text-center mb-4" cols="12">
              <b-button @click="$nuxt.$emit('bv::hide::modal', 'leaveQuote2')">TERMINAR COMPRA</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-modal>

  </section>
</template>

<script>
import moment from "moment/moment.js";

var fechaActual = new Date();
const state = {
  date: new Date(),
  disabledDates: {
    to: new Date(Date.now() - 8640000),
    from: new Date(fechaActual.getTime() + 7.884e9),
  },
};

export default {
  layout: "InterseguroFlujo",
  data() {
    return {
      editDataExistente: false,
      flotanteCovid: true,
      opacityNone: false,
      urlpdf: "",
      mostrarMensajeEnviadoEndosar: false,
      mostrarMensajeEnviadoCotizacion: false,
      maximoImgDisabled: false,
      minimoImgDisabled: false,
      monto_pagar_plata: "",
      monto_antes_plata: "",
      monto_pagar_oro: "",
      monto_antes_oro: "",
      monto_pagar_black: "",
      monto_antes_black: "",
      valorSeleccionado: false,
      activarTooltip: false,
      activarTooltipDesktop: false,
      gps: "",
      frecuencia: "",
      planSeleccionado: 3,
      selected: 1,
      monto_pagar: "",
      monto_antes: "",
      options: [
        /* { value: null, text: "" }, */
        { value: "1", text: "Pago mensual (Sin intereses)" },
        { value: "2", text: "Pago Trimestral (Sin intereses)" },
        { value: "3", text: "Anual" },
      ],
      // placaUppercase: this.item.plateNumber,
      nuevoProducto: this.$store.state.common.nuevoProducto,
      mostrarMensajeEnviado: false,
      inputNumeroCelular: "",
      placeholderNumeroCelular: "Ingresa tu número de télefono",
      code_sku: "",
      auto_0k: false,
      cobertura_is: {
        name: "",
        price: "",
        category: "Seguro",
        brand: "Vehicular",
        variant: "",
        ammount: "",
        quota: "",
        discount: "",
        startDate: "",
        credit: "",
        sku: "",
      },
      /***********************EVALUAR ********************** */
      soatActive: 0,
      documento_steps2: "",
      flagElegirFecha: 0,
      monto_pagar_steps3: "",
      mostrarCapa: false,
      mostrarCapaGris: false,
      /******************************** */
      Condicionado_Particular: "",
      item: {
        plateNumber: "",
        email: "",
      },
      /* ************ LOADING CAPA OCULTA **********/
      viewBoxTransparent: false,
      loadinggss: false,
      color: "#00ADEE",
      size: "15px",
      /**************************** */
      ocultarItemsSeleccionados: false,
      mostrarItemMarca: false,
      mostrarItemAnio: false,
      mostrarItemModelo: false,
      mostrarLista: true,
      mostrarListaMarca: false,
      mostrarListaAnio: false,
      mostrarListaModelo: false,
      activadorItem: 0,
      ischecked: false,

      itemElegido: {
        brandId: "",
        brand: "",
        modelYear: "",
        model: "",
        modelId: "",
        remarketingId: "",
        assignedPrice: null,
        businessId: 1,
        discountType: "",
        assignedPrice: null,
      },
      /*LISTAS COTIZADOR SEGUNDA PANTALLA */
      planInactivo: false,
      listCotizacionTotal: {},
      listCotizacion: {
        policy: {
          risk: "",
          calculated: 0,
          annual: 0,
          quarterly: 0,
          monthly: 0,
        },
        deducible: 0,
        vehicle: {
          current: null,
          maximum: 0,
          minimum: 0,
        },
        adjust: 0,
        discount: {
          special: 0,
          annual: 0,
          quarterly: 0,
          monthly: 0,
          specialAmount: 0,
          annualAmount: 0,
          quarterlyAmount: 0,
          monthlyAmount: 0,
        },
      },
      listaBasica: {
        vehicle: {
          current: null,
          maximum: 0,
          minimum: 0,
          gps: "",
        },
        policy: {
          calculated: 0,
          annual: 0,
          quarterly: 0,
          monthly: 0,
          monthlyCalculated: 0,
        },
        vehicle: {},
      },
      listaMedia: {
        vehicle: {
          current: null,
          maximum: 0,
          minimum: 0,
        },
        policy: {
          calculated: 0,
          annual: 0,
          quarterly: 0,
          monthly: 0,
          monthlyCalculated: 0,
        },
      },
      listaFull: {
        vehicle: {
          current: null,
          maximum: 0,
          minimum: 0,
        },
        policy: {
          calculated: 0,
          annual: 0,
          quarterly: 0,
          monthly: 0,
          monthlyCalculated: 0,
        },
      },
      clonado: {
        policy: {
          risk: "",
          calculated: 0,
          annual: 0,
          quarterly: 0,
          monthly: 0,
        },
        deducible: 0,
        vehicle: {
          current: null,
          maximum: 0,
          minimum: 0,
        },
        adjust: 0,
        discount: {
          special: 0,
          annual: 0,
          quarterly: 0,
          monthly: 0,
          specialAmount: 0,
          annualAmount: 0,
          quarterlyAmount: 0,
          monthlyAmount: 0,
        },
      },

      /*************/
      planSeleccionado: 3,

      isDisabled: false,
      objIBK: 0,
      /*FIN SEGUNDA PANTALLA */
      /*************************** */

      sessionFields: {},
      objectVehicle: {},
      objSOAT: {},
      vehicleState: false,
      /* ************************* MODALES **********************/
      showModal: false,

      /* ************************* FECHA ************************/
      state: state,
      fechaVigencia: "",
      /* ************************* ENDOSO **********************/
      listaNuevaDeEndoso: [],
      endosoSeleccionado: {
        id: 0,
        name: "",
      },
      /* ********************** EMAIL MODAL *********************/
      isDisabledEnviarCorreo: false,
      email: "",
      objUtm: "",
      htmlModal: "",
      /* ********************** REMARKETING *********************/
      objRemarketing: {
        codigoRemarketing: "",
        producto: "",
        identificador: "",
        detalle: {
          correo: "",
          codigoVenta: "" /*codigoRemarketing*/,
          pantalla: "",
          datosCorreo: {
            url: "",
            plantilla: {},
            utm: {},
          },
          datosProducto: {
            placa: "",
            idMarca: "",
            marca: "",
            anio: "",
            idModelo: "",
            modelo: "",
            idUso: "",
            uso: "",
            valorComercial: "",
            pagoMensual: "",
            gps: "",
          },
          datosTitular: {
            numeroDocumento: "",
            nombre: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            correo: "",
            telefono: "",
          },
          remitente: {
            correoRemitente: "comunicaciones@interseguro.com.pe",
            correoRemitenteDisplay: "Interseguro",
          },
          datosPago: {
            idFrecuencia: "",
            fechaInicioSeguro: "",
          },
        },
      },
    };
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll);
      document.addEventListener("touchstart", this.handleScroll, {
        passive: true,
      });
    }
    //Carga instituciones financieras para endoso
    this.$store.dispatch("common/getFinancialInstitution").then((res) => {
      this.listEndoso = res.data.body;
      let arregloUno = [];
      arregloUno = this.listaNuevaDeEndoso
        .concat(this.listEndoso.banks)
        .concat(this.listEndoso.financial)
        .concat(this.listEndoso.cajas);
      this.listaNuevaDeEndoso = arregloUno;
    });
  },

  components: {
    Datepicker: () => import("vuejs-datepicker/dist/vuejs-datepicker"),
  },

  computed: {
    classPlan: function () {
      return this.planSeleccionado == 4
        ? "planPlata"
        : this.planSeleccionado == 3
        ? "planBlack"
        : this.planSeleccionado == 6
        ? "planOro"
        : "planNoSeleccionado";
      // return "uno"
    },
    appDiscount: function () {
      let appDiscount = this.$store.state.common.appDiscount;
      // return appDiscount
      return false;
    },
    placaUppercase: function () {
      let placa = this.item.plateNumber.toUpperCase();
      return placa;
    },
    isMinimo: function () {
      let decimal = this.clonado.vehicle.minimum / 100;
      let minimo = Math.ceil(decimal) * 100;
      return minimo;
      // return minimo.toLocaleString();
    },
    isMaximo: function () {
      let decimal = this.clonado.vehicle.maximum / 100;
      let maximo = Math.floor(decimal) * 100;
      return maximo;
      // return maximo.toLocaleString();
    },
  },
  methods: {
    contador() {
      // var flipdown2 = new FlipDown(1617080399, 'contadorCyber5').start()
    },
    volver(evt) {
      evt.preventDefault();      
      if (this.$store.state.common.businessId == 2) {
        this.$nuxt.$router.push({path: "/cotiza/cotizacion-interbank"});
      } else {
        this.editDataExistente = true;
        this.$store.commit('common/setEditDataExistente', this.editDataExistente )
        this.$nuxt.$router.push({path: "/cotizacion/seleccion"});
      }
      this.$store.commit("common/setItemElegido", {});
      this.$store.commit("common/setCurrent", null);
    },
    hideFlotante() {
      this.flotanteCovid = !this.flotanteCovid;
    },
    metodoFlotante() {
      this.$nuxt.$emit("bv::show::modal", "leaveQuote2");
    },
    hidemetodoFlotante() {
      this.$nuxt.$emit("bv::hide::modal", "leaveQuote2");
    },
    hideModalBlackWeek() {
      $nuxt.$emit("bv::hide::modal", "leaveBlackWeek");
    },
    handleScroll(eve) {
      if (window.scrollY >= 750) {
        this.opacityNone = true;
      } else {
        this.opacityNone = false;
      }
    },
    pagar_ahora() {
      this.primeraPantalla = false;
      window.scrollTo(0, 0);
    },
    clickCapaGris() {
      this.mostrarCapaGris = false;
      this.activarTooltipDesktop = false;
      this.activarTooltip = false;
    },
    showSumaAseguradaMobile() {
      this.mostrarCapaGris = true;
      this.activarTooltip = true;
    },
    showSumaAseguradaDesktop() {
      this.mostrarCapaGris = true;
      this.activarTooltipDesktop = true;
    },
    hideSumaAsegurada() {},
    showModalInicioVigencia() {
      this.$refs.modalInicioVigencia.show();
    },
    hideModalInicioVigencia() {
      this.$refs.modalInicioVigencia.hide();
    },
    showModalEnviarEmail() {
      this.mostrarMensajeEnviadoCotizacion = false;
      this.$refs.modalEnviarEmail.show();
    },
    hideModalEnviarEmail() {
      this.$refs.modalEnviarEmail.hide();
    },
    seleccionarFrecuencia() {
      if (this.selected == 1) {
        this.monto_pagar_plata = this.listaBasica.policy.monthly;
        this.monto_antes_plata = this.listaBasica.policy.monthlyCalculated;

        this.monto_pagar_oro = this.listaMedia.policy.monthly;
        this.monto_antes_oro = this.listaMedia.policy.monthlyCalculated;

        this.monto_pagar_black = this.listaFull.policy.monthly;
        this.monto_antes_black = this.listaFull.policy.monthlyCalculated;

        if (this.planSeleccionado == 3 || this.planSeleccionado == 10) {
          this.monto_pagar = this.listaFull.policy.monthly;
          this.monto_antes = this.listaFull.policy.monthlyCalculated;
          this.$store.commit("common/setMontoPagar", this.monto_pagar);
        } else if (this.planSeleccionado == 6) {
          this.monto_pagar = this.listaMedia.policy.monthly;
          this.monto_antes = this.listaMedia.policy.monthlyCalculated;
          this.$store.commit("common/setMontoPagar", this.monto_pagar);
        } else if (this.planSeleccionado == 4) {
          this.monto_pagar = this.listaBasica.policy.monthly;
          this.monto_antes = this.listaBasica.policy.monthlyCalculated;
          this.$store.commit("common/setMontoPagar", this.monto_pagar);
        } else {
        }
      } else if (this.selected == 2) {
        this.monto_pagar_plata = this.listaBasica.policy.quarterly;
        this.monto_antes_plata = this.listaBasica.policy.quarterlyCalculated;

        this.monto_pagar_oro = this.listaMedia.policy.quarterly;
        this.monto_antes_oro = this.listaMedia.policy.quarterlyCalculated;

        this.monto_pagar_black = this.listaFull.policy.quarterly;
        this.monto_antes_black = this.listaFull.policy.quarterlyCalculated;

        if (this.planSeleccionado == 3 || this.planSeleccionado == 10) {
          this.monto_pagar = this.listaFull.policy.quarterly;
          this.monto_antes = this.listaFull.policy.quarterlyCalculated;

          this.monto_pagar_mensual = this.listaFull.policy.quarterly;
          this.monto_antes_mensual = this.listaFull.policy.quarterlyCalculated;
          this.$store.commit("common/setMontoPagar", this.monto_pagar);
        } else if (this.planSeleccionado == 6) {
          this.monto_pagar = this.listaMedia.policy.quarterly;
          this.monto_antes = this.listaMedia.policy.quarterlyCalculated;
          this.$store.commit("common/setMontoPagar", this.monto_pagar);
        } else if (this.planSeleccionado == 4) {
          this.monto_pagar = this.listaBasica.policy.quarterly;
          this.monto_antes = this.listaBasica.policy.quarterlyCalculated;
          this.$store.commit("common/setMontoPagar", this.monto_pagar);
        } else {
        }
      } else if (this.selected == 3) {
        this.monto_pagar_plata = this.listaBasica.policy.annual;
        this.monto_antes_plata = this.listaBasica.policy.annualCalculated;

        this.monto_pagar_oro = this.listaMedia.policy.annual;
        this.monto_antes_oro = this.listaMedia.policy.annualCalculated;

        this.monto_pagar_black = this.listaFull.policy.annual;
        this.monto_antes_black = this.listaFull.policy.annualCalculated;

        // this.frecuencia = 'Anual'
        if (this.planSeleccionado == 3) {
          this.monto_pagar = this.listaFull.policy.annual;
          this.monto_antes = this.listaFull.policy.annualCalculated;
          this.$store.commit("common/setMontoPagar", this.monto_pagar);
        } else if (this.planSeleccionado == 6) {
          this.monto_pagar = this.listaMedia.policy.annual;
          this.monto_antes = this.listaMedia.policy.annualCalculated;
          this.$store.commit("common/setMontoPagar", this.monto_pagar);
        } else if (this.planSeleccionado == 4) {
          this.monto_pagar = this.listaBasica.policy.annual;
          this.monto_antes = this.listaBasica.policy.annualCalculated;
          this.$store.commit("common/setMontoPagar", this.monto_pagar);
        } else {
        }
      } else {
      }
    },

    seleccionarPLanDesktop(id) {
      id = id + "";
      this.planInactivo = true;

      if (this.planSeleccionado == id && this.valorSeleccionado) {
        console.log(id);
      } else {
        this.valorSeleccionado = true;
        /* let elemento1 = document.querySelectorAll(".plan-item");
        for (let index = 0; index < elemento1.length; index++) {
          elemento1[index].classList.remove("planActivoDesktop");
        } */
        /* setTimeout(() => {
          let arreglo = document.querySelectorAll(".plan" + id);
          for (let i = 0; i < arreglo.length; i++) {
            arreglo[i].classList.add("planActivoDesktop");
          }
          this.seleccionarFrecuencia();
        }, 250); */

        this.seleccionarFrecuencia();

        this.$store.commit("common/setPlanSeleccionado", id);
        this.planSeleccionado = id;
        this.detectarPLanSeleccionado();
      }
    },
    devolverMonto(lista) {},
    detectarPLanSeleccionado() {
      if (
        this.$store.state.common.planSeleccionado == 3 ||
        this.$store.state.common.planSeleccionado == 10
      ) {
        this.listCotizacion = this.listaFull;
        this.devolverMonto(this.listaFull);
        if (this.endosoSeleccionado.id != 0) {
          this.$store.commit("common/setPlanSeleccionado", 10);
        }
        this.cobertura_is.variant =
          "black $" + this.listCotizacion.policy.monthly + "/mes";
      } else if (this.$store.state.common.planSeleccionado == 6) {
        this.listCotizacion = this.listaMedia;
        this.cobertura_is.variant = "oro $" + this.listCotizacion.policy.monthly + "/mes";
        this.endosoSeleccionado = { id: 0, name: "" };
        this.$store.commit("common/setEntidadFinanciera", { id: 0, name: "" });
      } else if (this.$store.state.common.planSeleccionado == 4) {
        this.listCotizacion = this.listaBasica;
        this.endosoSeleccionado = { id: 0, name: "" };
        this.$store.commit("common/setEntidadFinanciera", { id: 0, name: "" });
        this.cobertura_is.variant =
          "plata $" + this.listCotizacion.policy.monthly + "/mes";
      } else {
      }
    },
    seleccionarPLan(id) {
      id = id + "";
      this.planInactivo = true;
      let elemento1 = document.querySelectorAll(".v2-seleccion-planes__item");
      for (let index = 0; index < elemento1.length; index++) {
        elemento1[index].classList.remove("planActivo");
      }
      setTimeout(() => {
        let arreglo = document.querySelectorAll(".plan" + id);
        for (let i = 0; i < arreglo.length; i++) {
          arreglo[i].classList.add("planActivo");
        }
        this.seleccionarFrecuencia();
      }, 250);
      this.$store.commit("common/setPlanSeleccionado", id);
      this.planSeleccionado = id;
      this.detectarPLanSeleccionado();
    },
    continuar(e, id) {
      e.stopPropagation();
      this.seleccionarPLanDesktop(id);
      this.$store.commit("common/setFrecuenciaPago", this.selected);
      this.cobertura_is.credit = this.endosoSeleccionado.name;
      this.cobertura_is.price = this.listCotizacion.policy.annual;
      this.cobertura_is.ammount = this.listCotizacion.vehicle.current;
      this.cobertura_is.quota = this.listCotizacion.policy.monthly;

      this.listCotizacion.policy.startDate = this.fechaVigencia;
      this.listCotizacion.paymentMethodId = this.selected;
      this.$store.state.common.listaCotizacion.paymentMethodId = this.selected;
      this.$store.commit("common/setObjectDigodat", this.cobertura_is);
      this.$store.commit("common/setItemElegido", this.itemElegido);      
      this.$store.commit("common/setListaCotizacion", this.listCotizacion);

      //console.log('item elegido .. '+this.itemElegido)
      //console.log('start date '+this.listCotizacion.policy.startDate);

      if (document.location.hostname == "www.interseguro.pe") {
        fbq("track", "ViewContent", {
          content_type: "product",
          product: "segurovehicular",
          content_ids: this.code_sku,
          plan_seleccionado: this.$store.state.common.planSeleccionado,
          endoso: this.endosoSeleccionado.name,
          anio: this.objectVehicle.modelYear,
          suma_asegurada: this.$store.state.common.current,
        });
      } else {
      }
      this.cotizador_datalayer("addToCart");
      this.$nuxt.$router.push("/cotizacion/documento");
    },
    getVehicle() {
      this.$store.dispatch("common/getVehicle", this.item).then((res) => {
        setTimeout(() => {
          if (res.data.code == 0) {
            this.objectVehicle = res.data.body;
            this.$store.commit("common/setObjVehiculo", res.data.body);
            this.mostrarCapa = false;
          } else {
          }
        }, 1000);
      });
    },
    hidemodalTerminosCondiciones() {
      this.$refs.modalTerminosCondiciones.hide();
    },
    showModalTerminosCondiciones() {
      this.$refs.modalTerminosCondiciones.show();
      this.$refs.modalNumeroCelular.hide();
    },
    showModalNumeroCelular() {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "cotizador_descargar_app",
        category: "UI :: Cotizador :: Popup",
        action: "Click boton",
        label: "Descargar app ahora",
      });
      this.$refs.modalRootCotizador.hide();
      this.$refs.modalNumeroCelular.show();
    },
    hideModalNumeroCelular() {
      this.$refs.modalNumeroCelular.hide();
    },
    enviarNumeroCelular() {
      if (this.inputNumeroCelular.length == 9) {
        this.$store
          .dispatch("common/enviarMsjCelular", this.inputNumeroCelular)
          .then((res) => {
            if (res.data.code == 0) {
              window.dataLayer = window.dataLayer || [];
              dataLayer.push({
                event: "cotizador_recibiras_msj_texto",
                category: "UI :: Cotizador :: Popup",
                action: "Descargar app ahora",
                label: "Popup descargar app",
              });
              this.mostrarMensajeEnviado = true;
              setTimeout(() => {
                this.mostrarMensajeEnviado = false;
                this.$refs.modalNumeroCelular.hide();
                this.inputNumeroCelular = "";
              }, 2000);
            } else {
              this.mostrarMensajeEnviado = true;
              this.inputNumeroCelular = "";
            }
          });
      } else {
        this.$swal({
          title: "Ok!",
          text: "Ingrese un número válido",
          type: "warning",
          showCancelButton: false,
          confirmButtonColor: "#2177CC",
          confirmButtonText: "OK",
        });
        this.inputNumeroCelular = "";
      }
    },
    descargarApp() {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "cotizador_descargar_app",
        category: "UI :: Cotizador :: Popup",
        action: "Click boton",
        label: "Descargar app ahora",
      });
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (
        userAgent.match(/iPad/i) ||
        userAgent.match(/iPhone/i) ||
        userAgent.match(/iPod/i)
      ) {
        window.location.replace(
          "https://apps.apple.com/pe/app/interseguro-vehicular/id1517921041?l=en"
        );
        return "iOS";
      } else if (userAgent.match(/Android/i)) {
        window.location.replace(
          "https://play.google.com/store/apps/details?id=pe.interseguro.intersegurovehicular&hl=es_PE"
        );
        return "Android";
      } else {
        return "unknown";
      }
    },
    /*************************************************************** */
    PaginaVista(app, valor) {
      let url = "";
      if (this.$store.state.common.nuevoProducto == true) {
        url = "/vehicular-app/cotizacion/cotizacion/";
      } else if (this.$store.state.common.nuevoProducto == false) {
        url = "/vehicular/cotizacion/cotizacion/";
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pagina_vista",
        "page-url": url,
        "page-title": "Cotizacion",
        datos_vehicular_encontrado: valor, // podria ser false
        ecommerce: {
          checkout: {
            actionField: { step: 2 }, // esto marca el segubdo paso en el embudo
          },
        },
      });
    },
    cotizador_datalayer(evento) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: evento,
        product: this.cobertura_is,
      });
    },
    /*************************************************************** */
    /******************* INGRESAR LETRA DE MARCA ******************* */
    clickIngresaLetra(e) {
      document.getElementById("ingresaLetraMarca").focus();
    },
    detectarkey(e) {
      var boxListaMarcas = document.getElementsByClassName("listas--box")[0];
      var valor = e.key.toUpperCase();

      let listaMarcas = this.listBrands.filter((item) => {
        return item.group == 2;
      });
      listaMarcas.forEach((element) => {
        if (element.name.charAt(0) == valor) {
          var resultado = listaMarcas.find(
            (elemento) => elemento.name.charAt(0) === valor + ""
          );
          var marcaId = document.getElementById(resultado.name);
          boxListaMarcas.scrollTo(0, marcaId.offsetTop - 27);
        } else {
        }
      });
    },
    /******************** FIN DETECTAR LETRA D EMARCA ******************* */
    enviarCorreo() {
      if (document.location.hostname == "www.interseguro.pe") {
        fbq("track", "Contact", {
          contactar_whatsapp: "ContactarCorreo",
        });
      } else {
      }
    },
    closeListon() {
      document.getElementById("liston-desktop").style.display = "none";
      this.$bus.$emit("updatingTest", 0);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "click_close_menu ",
        description: "Click en el boton de close en el header cotizador",
      });
    },
    mostrarItemSeleccionados() {
      this.mostrarItemMarca = true;
      this.mostrarItemAnio = true;
      this.mostrarItemModelo = true;
    },
    closeMarca() {
      this.mostrarItemMarca = false;
      this.mostrarItemAnio = false;
      this.mostrarItemModelo = false;
      this.mostrarMarca();
      this.primeraPantalla();
    },
    closeAnio() {
      this.mostrarItemMarca = true;
      this.mostrarItemAnio = false;
      this.mostrarItemModelo = false;
      this.mostrarAnio();
      this.primeraPantalla();
    },
    closeModelo() {
      this.mostrarItemMarca = true;
      this.mostrarItemAnio = true;
      this.mostrarItemModelo = false;
      this.mostrarModelo();
      this.primeraPantalla();
    },
    detalle() {
      if (this.activadorItem == 1) {
        this.mostrarListaMarca = true;
        this.mostrarListaAnio = false;
        this.mostrarListaModelo = false;
      } else if (this.activadorItem == 2) {
        this.mostrarListaMarca = false;
        this.mostrarListaAnio = true;
        this.mostrarListaModelo = false;
      }
      if (this.activadorItem == 3) {
        this.mostrarListaMarca = false;
        this.mostrarListaAnio = false;
        this.mostrarListaModelo = true;
      } else {
        this.mostrarListaMarca = false;
        this.mostrarListaAnio = false;
        this.mostrarListaModelo = false;
      }
    },
    resetearVehiculo() {
      this.mostrarModelo();
      this.ocultarItemsSeleccionados = false;
      this.mostrarItemModelo = false;
      this.seleccionarPLan(3);
      this.seleccionarPLanDesktop(3);
    },

    mostrarMarca() {
      this.mostrarListaMarca = true;
      this.mostrarListaAnio = false;
      this.mostrarListaModelo = false;
    },
    mostrarAnio() {
      this.mostrarListaMarca = false;
      this.mostrarListaAnio = true;
      this.mostrarListaModelo = false;
    },
    mostrarModelo() {
      this.getModelLocal();
      this.mostrarListaMarca = false;
      this.mostrarListaAnio = false;
      this.mostrarListaModelo = true;
      this.primeraPantalla();
    },

    seleccionaMarca(item) {
      this.mostrarItemMarca = true;
      this.itemElegido.brandId = item.id;
      this.itemElegido.brand = item.name;
      this.activadorItem = 1;
      this.mostrarAnio();
      this.objectVehicle.brandId = item.id;
      this.ocultarItemsSeleccionados = false;
    },
    seleccionaAnio(item) {
      this.mostrarItemAnio = true;
      this.objectVehicle.modelYear = item.id;
      this.itemElegido.modelYear = item.id;
      this.itemElegido.year = item.id;
      this.activadorItem = 2;
      this.mostrarModelo();
    },
    seleccionaModelo(item) {
      this.mostrarItemModelo = true;
      this.itemElegido.model = item.name;
      this.itemElegido.modelId = item.id;
      this.activadorItem = 4;
      this.ocultarItemsSeleccionados = true;
      this.detalle();
      this.validateCreateOrUpdateVehicle();
      this.cotizador_datalayer("detail");
    },
    primeraPantalla() {
      this.$store.commit("common/setItemElegido", {});
      this.$store.commit("common/setCurrent", null);
      this.activeBox_1 = false;

      if (this.$store.state.common.origenCliente == 2) {
        this.objectVehicle.modelId = -1;
        if (this.objectVehicle.modelId == -1) {
          this.objUtm = {
            1: "utm_campaign=remarketingCN_SOAT_D_1",
            2: "utm_campaign=remarketingCN_SOAT_D_2",
            3: "utm_campaign=remarketingCN_SOAT_D_3",
            4: "utm_campaign=remarketingCN_SOAT_D_4",
          };
          if (this.$store.state.common.businessId == 2) {
            this.objUtm = {
              1: "utm_campaign=IBK_remarketingCN_SOAT_D_1",
              2: "utm_campaign=IBK_remarketingCN_SOAT_D_2",
              3: "utm_campaign=IBK_remarketingCN_SOAT_D_3",
              4: "utm_campaign=IBK_remarketingCN_SOAT_D_4",
            };
          }
          this.remarketingv2(
            this.objSOAT.emailAddress != null
              ? this.objSOAT.emailAddress.toLowerCase()
              : "",
            0
          );
        }
      } else if (this.$store.state.common.origenCliente == 1) {
      }
    },

    segundaPantalla() {
      this.objectVehicle = this.$store.state.common.objVehiculo;      
      this.$store.commit("common/setCode_sku", this.code_sku);      

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "enviar_datos",
        content_ids: this.code_sku,
        "0km": this.auto_0k, // true / false
        make:
          this.itemElegido.brand != undefined
            ? this.itemElegido.brand.toUpperCase()
            : this.itemElegido.brand, // marca - string
        year: this.itemElegido.modelYear + "", // año - string
        model: this.itemElegido.model, // modelo - string
        uso: "Particular", // uso - string
      });
    },
    maximoImg() {
      if (this.clonado.vehicle.maximum > this.listCotizacion.vehicle.current) {
        this.maximoImgDisabled = false;
        this.minimoImgDisabled = false;
        this.listCotizacion.vehicle.current = this.listCotizacion.vehicle.current + 100;
        this.cambioInput();
      } else {
        this.maximoImgDisabled = true;
      }
    },
    minimoImg() {
      if (this.clonado.vehicle.minimum < this.listCotizacion.vehicle.current) {
        this.minimoImgDisabled = false;
        this.maximoImgDisabled = false;
        this.listCotizacion.vehicle.current = this.listCotizacion.vehicle.current - 100;
        this.cambioInput();
      } else {
        this.minimoImgDisabled = true;
      }
    },
    cambioInput(evt) {
      if (this.listCotizacion.vehicle.current > this.clonado.vehicle.maximum) {
        this.listCotizacion.vehicle.current = this.clonado.vehicle.maximum;
      } else if (this.listCotizacion.vehicle.current < this.clonado.vehicle.minimum) {
        this.listCotizacion.vehicle.current = this.clonado.vehicle.minimum;
      } else {
        this.$store.commit("common/setCurrent", this.listCotizacion.vehicle.current);
        this.itemElegido.assignedPrice = this.listCotizacion.vehicle.current;
        this.getCotizacion();
        this.isDisabled = false;
      }
    },
    validateCreateOrUpdateVehicle() {
      if (this.$store.state.common.vehicleState == 1) {
        this.updateVehicle();
        this.getVehicle();
      } else {
        this.createVehicle();
        this.getVehicle();
      }
    },
    validateVehicleExist(vehicleExistItem) {
      console.log("data", vehicleExistItem);
      if (
        vehicleExistItem.brandId != "" &&
        vehicleExistItem.brandId != null &&
        vehicleExistItem.brandId != undefined
      ) {
        this.itemElegido.brand = vehicleExistItem.brand;
        this.itemElegido.brandId = vehicleExistItem.brandId;
        this.mostrarItemMarca = true;
        if (vehicleExistItem.modelYear >= 2009) {
          this.itemElegido.modelYear = vehicleExistItem.modelYear;
          this.itemElegido.year = vehicleExistItem.modelYear;
          this.mostrarItemAnio = true;
          if (vehicleExistItem.modelId == -1) {
            this.mostrarModelo();
          } else {
            this.itemElegido.model = vehicleExistItem.model;
            this.mostrarItemModelo = true;
            this.activadorItem = 4;
            this.ocultarItemsSeleccionados = true;
            this.getCotizacion();
          }
        } else {
          this.mostrarAnio();
        }
      } else {
        this.mostrarListaMarca = true;
        this.mostrarMarca();
      }
    },
    createVehicle() {
      this.$store.dispatch("common/createVehicle", this.itemElegido).then((res) => {
        if (res.data.code == 0) {
          this.itemElegido.assignedPrice = null;
          this.clonado.vehicle.current = null;
          this.getCotizacion();
        } else {
        }
      });
    },
    updateVehicle() {
      this.$store.dispatch("common/updateVehicle", this.itemElegido).then((res) => {
        if (res.data.code == 0) {
          this.itemElegido.assignedPrice = null;
          this.clonado.vehicle.current = null;
          this.getCotizacion();
        } else {
        }
      });
    },
    getCotizacion() {
      this.$store.dispatch("common/getCotizacion", this.itemElegido).then((res) => {
        if (res.data.code == 0) {
          this.listCotizacionTotal = res.data.body;
          this.listaBasica = res.data.body.basic;
          this.listaMedia = res.data.body.medium;
          this.listaFull = res.data.body.allRisk;
          this.listCotizacion = res.data.body.allRisk;
          this.clonado = Object.assign({}, this.listCotizacion);
          this.$store.commit("common/setCurrent", this.listCotizacion.vehicle.current);
          this.cobertura_is.name =
            this.itemElegido.brand +
            " - " +
            this.itemElegido.model +
            " - " +
            this.itemElegido.modelYear;
          this.cobertura_is.discount = "10";
          this.cobertura_is.startDate = this.fechaVigencia;
          this.cobertura_is.credit = this.endosoSeleccionado.name;
          this.cobertura_is.price = this.listCotizacion.policy.annual;
          this.cobertura_is.ammount = this.listCotizacion.vehicle.current;
          this.cobertura_is.quota = this.listCotizacion.policy.monthly;
          this.segundaPantalla();
          this.seleccionarFrecuencia();
        } else if (res.data.code == 213) {
          this.$swal({
            title: "Oops...",
            text: res.data.message,
            type: "error",
            showCancelButton: false,
            confirmButtonColor: "#2177CC",
            confirmButtonText: "OK",
          });
          this.$nuxt.$router.push({ path: "/" });
        } else if (res.data.code === 200) {
          if (!this.htmlModal) {
            this.htmlModal = document.getElementById("imagePhone");
            this.htmlModal.style.display = "";
          }

          const goToVehicular = () => this.$nuxt.$router.back();

          // imagePhone.style.display = '';
          this.$swal({
            // title: "Oops...",
            html: this.htmlModal,
            // type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#2177CC",
            confirmButtonText: "OK",
          }).then(function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
              event: "placa_rechazada",
              category: "UI: Cotizador error",
              action: "error",
              label: "error en el servicio",
            });
            goToVehicular();
          });
        } else {
          this.$swal({
            title: "Oops...",
            text: res.data.message,
            type: "error",
            showCancelButton: false,
            confirmButtonColor: "#2177CC",
            confirmButtonText: "OK",
          });
        }
      });
    },
    getModelLocal() {
      this.$store.dispatch("common/getModelLocal", this.itemElegido).then((res) => {
        if (res.data.code == 0) {
          this.listModels = res.data.body;
        } else {
        }
      });
    },

    /* ******************************************* */
    //MODALES
    /* ******************************************* */
    showModalInicioVigencia() {
      this.$refs.modalInicioVigencia.show();
    },
    hideModalInicioVigencia() {
      this.$refs.modalInicioVigencia.hide();
    },
    showModalGPS() {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "show_gps",
        category: "UI: Cotizador gps",
        action: "click",
        label: "Tu auto necesita GPS",
      });
      this.$refs.v2modalGPS.show();
    },
    hideModalGPS() {
      this.$refs.v2modalGPS.hide();
    },
    showModalCompararPlanes() {
      this.$refs.modalCompararPlanes.show();
    },
    hideModalCompararPlanes() {
      this.$refs.modalCompararPlanes.hide();
    },

    showModalRootCotizador() {
      this.$refs.modalRootCotizador.show();
    },
    hideModalRootCotizador() {
      this.$refs.modalRootCotizador.hide();
    },
    hideModalEndoso() {
      this.$refs.hideModalEndoso.hide();
    },
    hidemodalEntidadFinanciera() {
      this.$refs.modalEntidadFinanciera2.hide();
      this.mostrarMensajeEnviadoEndosar = false;
    },
    seleccionarEntidadFinanciera() {
      this.mostrarMensajeEnviadoEndosar = true;
      setTimeout(() => {
        this.$refs.modalEntidadFinanciera2.hide();
        this.mostrarMensajeEnviadoEndosar = false;
      }, 1000);
    },
    hideModal() {
      this.showModal = false;
    },

    /* **************************************************
                  FECHA
      ****************************************************/
    elegirFecha(date) {
      state.date = date;
      this.fechaVigencia = moment(state.date).format("DD/MM/YYYY");
      this.listCotizacion.policy.startDate = this.fechaVigencia;
      this.$store.commit("common/setFechaVigencia", this.fechaVigencia);
      this.flagElegirFecha = 1;
      // localStorage.setItem("flagElegirFecha", 1)
    },

    clickEnlace(enlace) {
      console.log("Variable 2 mensaje " + this.mostrarMensajeEnviadoEndosar);
      let entidadFinanciera = JSON.parse(localStorage.getItem("financialInstitution"));
      if (entidadFinanciera) {
        if (entidadFinanciera.id > 0) {
          setTimeout(() => {
            var boxEndosoSesion = document.querySelector("#boxEndosoSesion");
            var endosoSesionItem = boxEndosoSesion.querySelector(
              "#entidad-" + entidadFinanciera.id
            );
            endosoSesionItem.classList.add("ischecked");
          }, 250);
        }
      }
    },

    /* **************************************************
                      ENTIDAD FINANCIERA
      ****************************************************/
    setearEntidadFinanciera(item) {
      if (document.getElementById("entidad-" + item.id).classList.contains("ischecked")) {
        document.getElementById("entidad-" + item.id).classList.remove("ischecked");
        this.$store.commit("common/setEntidadFinanciera", { id: 0, name: "" });

        this.endosoSeleccionado = 0;
        if (this.planSeleccionado == 3) {
          this.$store.commit("common/setPlanSeleccionado", 3);
          this.$store.commit("common/setEntidadFinanciera", {
            id: 0,
            name: "",
          });
        }
      } else {
        let ipt_general = document.getElementsByClassName("ischecked");
        for (let i = 0; i < ipt_general.length; i++) {
          ipt_general[i].classList.remove("ischecked");
        }
        document.getElementById("entidad-" + item.id).classList.add("ischecked");
        this.$store.commit("common/setEntidadFinanciera", item);
        this.endosoSeleccionado = item;
        if (this.planSeleccionado == 3) {
          this.$store.commit("common/setPlanSeleccionado", 10);
        }
      }
    },
    /* **************************************************
                      ENVIAR MAIL
      ****************************************************/
    enviarMail() {
      this.mostrarMensajeEnviadoCotizacion = true;
      if (this.email !== "") {
        this.isDisabledEnviarCorreo = true;

        this.listCotizacion.policy.startDate = this.fechaVigencia;
        this.listCotizacion.paymentMethodId = 3;
        this.$store.commit("common/setItemElegido", this.itemElegido);
        this.$store.commit("common/setListaCotizacion", this.listCotizacion);

        this.$store.commit("common/setEmail", this.email.trim().replace(/ /g, ""));
        this.objUtm = {
          1: "utm_campaign=remarketingSN_1",
          2: "utm_campaign=remarketingSN_2",
          3: "utm_campaign=remarketingSN_3",
          4: "utm_campaign=remarketingSN_4",
        };
        if (this.$store.state.common.businessId == 2) {
          this.objUtm = {
            1: "utm_campaign=IBK_remarketingSN_1",
            2: "utm_campaign=IBK_remarketingSN_2",
            3: "utm_campaign=IBK_remarketingSN_3",
            4: "utm_campaign=IBK_remarketingSN_4",
          };
        }
        this.remarketingv2(this.email.trim().replace(/ /g, ""), 2);
        setTimeout(() => {
          this.enviarMailing();
        }, 2000);
      }
    },
    remarketingv2(parametroEmail, parametroEnviarMail) {
      if (this.$store.state.common.businessId == 2) {
        this.objPlantilla = {
          1: "00-ibk-dias.html",
          2: "03-ibk-dias.html",
          3: "07-ibk-dias.html",
          4: "15-ibk-dias.html",
        };
      } else if (this.$store.state.common.nuevoProducto == true) {
        this.objPlantilla = {};
        this.objUtm = {};
      }

      this.objRemarketing = {
        codigoRemarketing: "",
        producto: this.$store.state.common.businessId,
        identificador: this.$store.state.common.plateNumber,
        detalle: {
          correo: parametroEmail,
          codigoVenta: this.$store.state.common.codeRmkt,
          enviarCorreo: parametroEnviarMail,
          pantalla: 1,
          datosCorreo: {
            url:
              process.env.URL +
              (this.$store.state.common.promocion == true
                ? "vehicular/promocion/"
                : this.$store.state.common.businessId == 1
                ? "vehicular"
                : "vehicular/interbank"),
            plantilla: this.objPlantilla,
            utm: this.objUtm,
          },
          datosProducto: {
            urlGlobal: this.$store.state.common.urlGlobal,
            marca: this.$store.state.common.itemElegido.brand,
            modelo: this.$store.state.common.itemElegido.model,
            planSeleccionado: this.planSeleccionado + "",
            valorComercial: this.listCotizacion.vehicle.current,
            pagoMensual: this.listCotizacion.policy.monthly,
            desde:
              localStorage.getItem("monthly") == null
                ? this.objectVehicle.minimumPolicyAmount
                : null,
            montoMensualBasico: this.listaBasica.policy.monthly,
            montoMensualMedio: this.listaMedia.policy.monthly,
            montoMensualFull: this.listaFull.policy.monthly,
            /*********************************************************/
            businessId: this.$store.state.common.businessId,
            idEndosoSeleccionado: this.endosoSeleccionado.id,
            endosoSeleccionado: this.endosoSeleccionado.name,
            placa: this.$store.state.common.plateNumber,
            anio: this.objectVehicle.modelYear,
            gps: this.listCotizacion.vehicle.gps,
            riesgo: this.listCotizacion.policy.risk,
            fechaInicio: this.$store.state.common.fechaVigencia,
            discountType: this.discountType,
            /******************************************************** */

            itemElegido: this.itemElegido,
            listCotizacion: this.listCotizacion,
            nuevoProducto: this.$store.state.common.nuevoProducto,
            /******************************************************** */
            /******************************************************** */
          },
          datosTitular: {
            numeroDocumento: this.objSOAT.documentNumber,
            nombre: this.objSOAT.firstName,
            apellidoPaterno: this.objSOAT.firstLastName,
            apellidoMaterno: this.objSOAT.secondLastName,
            telefono: this.objSOAT.phoneNumber,
            originDocumentNumber: this.$store.state.common.documentNumber,
            origenDatos: this.$store.state.common.origenCliente,
          },
          remitente: {
            correoRemitente: "comunicaciones@interseguro.com.pe",
            correoRemitenteDisplay: "Interseguro",
          },
          datosPago: {
            idFrecuencia: "",
            fechaInicioSeguro: "",
          },
        },
      };
      this.$store.dispatch("common/sendRemarketing", this.objRemarketing).then((res) => {
        if (res) {
          console.log("1");
          this.$store.commit(
            "common/setCodigoRemarketingGenerado",
            res.data.codigoRemarketing
          );
        }
      });
    },
    enviarMailing() {
      this.$store.commit("common/setEmail", this.email);
      this.$store
        .dispatch("common/enviarMailing")
        .then((res) => {
          this.mostrarMensajeEnviadoCotizacion = false;
          this.$nuxt.$router.push("/cotizacion/documento");
        })
        .catch(() => {
          this.mostrarMensajeEnviadoCotizacion = false;
        });
    },
    mouseLeave(e) {
      if (
        this.clonado.vehicle.current != null &&
        this.clonado.vehicle.current != undefined
      ) {
        if (this.$store.state.common.leaveMessage == 0) {
          if (e.clientX < 0 || e.clientY < 0) {
            this.$store.commit("common/setLeaveMessage", 1);
            this.$nuxt.$emit("bv::show::modal", "leaveQuote2");
          }
        }
      }
    },
  },

  mounted: function () {
    this.urlpdf = require("./../../static/media/documentos/resumenCoberturas.pdf");
    this.selected = this.$store.state.common.frecuenciaPago;
    this.nuevoProducto = this.$store.state.common.nuevoProducto;
    this.itemElegido.discountType = this.$store.state.common.discountType;
    //console.log('discountType .. '+this.itemElegido.discountType)
    //console.log('plan seleccionado  .. '+this.$store.state.common.planSeleccionado)

    this.objSOAT = this.$store.state.common.clienteSOAT;
    this.fechaVigencia = this.$store.state.common.fechaVigencia;
    if (this.$store.state.common.cuentasueldo == "Y") {
      this.discountType = "cta-sueldo";
    } else if (this.$store.state.common.tarjetaoh == "Y") {
      this.discountType = "tarjeta-oh";
    } else {
      this.discountType = "";
    }
    if (this.fechaVigencia == null || this.fechaVigencia == "null" || this.fechaVigencia == "" ) {
      let fecha = new Date();
      let dia = fecha.getDate();
      let mes = fecha.getMonth() + 1;
      let año = fecha.getFullYear();
      let inicioVigencia = dia + "/" + mes + "/" + año;
      this.fechaVigencia = inicioVigencia;
      this.$store.commit("common/setFechaVigencia", this.fechaVigencia);
    } else {
      this.fechaVigencia = this.$store.state.common.fechaVigencia;
    }


    let objJWT = JSON.parse(localStorage.getItem("jwt"));
    if (objJWT == null || objJWT == undefined) {
      this.$nuxt.$router.push("/");
    } else {
      this.itemElegido.assignedPrice = objJWT.common.current;
      this.item.plateNumber = objJWT.common.plateNumber;
      this.fechaVigencia = objJWT.common.fechaVigencia;
      this.documento_steps2 = objJWT.common.documentoLocal;

      /* DETECTAMOS SI PLA SELECCIONADO ESTA EN EL OBJ LOCAL */
      this.planSeleccionado = objJWT.common.planSeleccionado;
      if (
        objJWT.common.planSeleccionado == undefined ||
        objJWT.common.planSeleccionado == null
      ) {
        this.planSeleccionado = 3;
        this.$store.commit("common/setPlanSeleccionado", this.planSeleccionado);
        this.cobertura_is.variant =
          "black $" + this.listCotizacion.policy.monthly + "/mes";
        this.seleccionarPLan(this.planSeleccionado);
        this.seleccionarPLanDesktop(this.planSeleccionado);
      } else {
        this.seleccionarPLan(this.planSeleccionado);
        this.$store.commit("common/setPlanSeleccionado", this.planSeleccionado);
        this.seleccionarPLanDesktop(this.planSeleccionado);
      }
      /* FIN DE PLAN SELECCIONADO */

      /* DETECTAMOS SI ENDOSO DE SESION ESTA EN EL OBJ LOCAL */

      if (objJWT.common.entidadFinanciera.id != 0) {
        let entidadFinanciera = objJWT.common.entidadFinanciera;
        this.endosoSeleccionado = objJWT.common.entidadFinanciera;
        if (entidadFinanciera.id > 0) {
          this.endosoSeleccionado = objJWT.common.entidadFinanciera;
        }
      } else {
        this.$store.commit("common/setEntidadFinanciera", this.endosoSeleccionado);
      }
      /* FIN DE  ENDOSO DE SESION */
      // this.vehicleState = objJWT.common.vehicleState
      if (this.$store.state.common.plateNumber !== "") {
        if (this.$store.state.common.vehicleState == 1) {
          this.PaginaVista("", true);
          // this.objectVehicle = this.$store.state.common.objVehiculo
          this.validateVehicleExist(this.$store.state.common.objVehiculo);
        } else {
          this.PaginaVista("", false);
          this.mostrarListaMarca = true;
          this.mostrarMarca();
        }
        this.mostrarCapa = false;
        this.cotizador_datalayer("detail");
      } else {
      }
    }
    document.addEventListener("mouseleave", this.mouseLeave, { passive: true });
    //console.log('fecha vigencia '+this.fechaVigencia);
  },
  destroyed() {
    if (process.browser) {
      document.removeEventListener("mouseleave", this.mouseLeave, {
        passive: true,
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
