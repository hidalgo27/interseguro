<template>
  <div class="nuevo-home">
    <b-container class="client">
      <b-row>
        <b-col cols="12">
          <div class="section-title">
            <p>
              Más de 550,000 clientes ya protegen su auto <span>&nbsp;</span> con nosotros
            </p>
          </div>
        </b-col>
        <b-col cols="12">
          <div class="client-numbers">
            <div class="client-numbers__item">
              <img src="" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">+15,000</p>
                <p class="client-numbers__item--text">Cotizaciones diarias</p>
              </div>
            </div>
            <div class="client-numbers__item">
              <img src="" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">+ 3,000</p>
                <p class="client-numbers__item--text">+ 3,000</p>
              </div>
            </div>
            <div class="client-numbers__item">
              <img src="" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">+3,000</p>
                <p class="client-numbers__item--text">Siniestros atendidos</p>
              </div>
            </div>
            <div class="client-numbers__item">
              <img src="" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">25 min</p>
                <p class="client-numbers__item--text">Tiempo de llegada</p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="planes">
      <b-row>
        <b-col cols="12">
          <div class="section-title">
            <p>
              ¡Tenemos estos planes para ti!
            </p>
          </div>
        </b-col>

        <b-col cols="12" xs="12" md="8" lg="12" class="order-md-3">
            <div class="v2-planes">
              <div class="row  mb-4">
                <div class="col-12  col-lg-6">
                  <p class="v2-planes--titulo">
                    Selecciona tu plan
                  </p>
                </div>
              </div>

              <div class="v2-planes-desktop  row  d-none  d-lg-flex">
                
                <div class="col-4">
                  <div style="height: 40px;" class="plan-recomendado">
                    
                  </div>
                  <div class="v2-plan-item  plan4  plata  "  @click="seleccionarPLanDesktop(4)" v-bind:class="{planInactivoDesktop: planInactivo}">
                    <div class="plan-item  plan-plata">
                      PLAN PLATA
                    </div>
                    <div class="v2-detalle-plan" >
                      
                      <div class="box-monto-frecuencia">
                        <div class="v2-detalle-plan__suma  box-monto-pago">
                            <div class="monto-frecuencia">
                                <span>US$</span>
                                <span class="monto">12 AL MES</span>
                            </div>
                        </div>
                        
                      </div>                      
                      <div class="box-importante" style="height: 40px;">
                      </div>
                      <div class="que-me-cubre">
                        <div class="titulo">
                          Este plan incluye:
                        </div>
                        <p class="que-me-cubre__item">
                          Beneficios Interseguro
                        </p>
                        <p class="que-me-cubre__item" >
                          Central de emergencias
                        </p>
                        <p class="que-me-cubre__item" >
                          Responsabilidad Civil
                        </p>
                        <p class="que-me-cubre__item" >
                          Robo total
                        </p>
                      </div>
                      <div class="item-inferior">
                        <div class="box-btn">
                          <span class="continuar" @click="continuar($event,4)">CONTINUAR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-4">
                  <div style="height: 40px;" class="plan-recomendado">                    
                  </div>
                  <div class="v2-plan-item  plan6  oro   "  @click="seleccionarPLanDesktop(6)" v-bind:class="{planInactivoDesktop: planInactivo}">
                    <div class="plan-item  plan-oro">
                      PLAN ORO
                    </div>
                    <div class="v2-detalle-plan"> 
                      <div class="box-monto-frecuencia">
                        <div class="v2-detalle-plan__suma  box-monto-pago">
                            <div class="monto-frecuencia">
                                <span>US$</span>
                                <span class="monto">25 AL MES</span>
                            </div>
                        </div>
                        
                      </div>                      
                      <div class="que-me-cubre">
                        <div class="titulo">
                          Este plan incluye:
                        </div>
                        <p class="que-me-cubre__item">
                          Beneficios Interseguro
                        </p>
                        <p class="que-me-cubre__item">
                          Central de emergencias
                        </p>
                        <p class="que-me-cubre__item" >
                          Responsabilidad Civil
                        </p>
                        <p class="que-me-cubre__item" >
                          Robo total
                        </p>
                        <p class="que-me-cubre__item" >
                          Pérdida parcial por accidente
                        </p>
                        <p class="que-me-cubre__item" >
                          Accidentes de ocupantes
                        </p>
                      </div>
                      <div class="item-inferior">
                        <div class="box-btn">
                          <span class="continuar" @click="continuar($event,6)">CONTINUAR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-4">
                  <div style="height: 40px; " class="plan-recomendado">
                    <span>&#9733;	</span> MÁS VENDIDO
                  </div>
                  <div class="v2-plan-item   plan3  black   "  @click="seleccionarPLanDesktop(3)" v-bind:class="{planInactivoDesktop: planInactivo}">
                    <div class="plan-item  plan-black">
                      PLAN BLACK
                    </div>
                    <div class="v2-detalle-plan" > 
                      <div class="box-monto-frecuencia">
                        <div class="v2-detalle-plan__suma  box-monto-pago">
                            <div class="monto-frecuencia">
                                <span>US$</span>
                                <span class="monto">35 AL MES</span>
                            </div>
                        </div>
                        
                      </div>                      
                      <div class="box-importante">
                        <p class="titulo">Importante</p>
                      </div>
                      <div class="que-me-cubre">
                        <div class="titulo">
                          Este plan incluye:
                        </div>
                        <p class="que-me-cubre__item">
                          Beneficios Interseguro
                        </p>
                        <p class="que-me-cubre__item">
                          Central de emergencias
                        </p>
                        <p class="que-me-cubre__item" >
                          Responsabilidad Civil
                        </p>
                        <p class="que-me-cubre__item" >
                          Robo total
                        </p>
                        <p class="que-me-cubre__item" >
                          Pérdida parcial por accidente
                        </p>
                        <p class="que-me-cubre__item" >
                          Accidentes de ocupantes
                        </p>
                        <p class="que-me-cubre__item" >
                          Accesorios musicales
                        </p>
                        <p class="que-me-cubre__item" >
                          Rotura de lunas
                        </p>
                        <p class="que-me-cubre__item" >
                          Desastres naturales, vandalismo, incendios.
                        </p>
                        <p class="que-me-cubre__item" >
                          Pérdida total por accidente
                        </p>
                        <p class="que-me-cubre__item" >
                          Ausencia de control*
                        </p>
                      </div>
                      <div class="item-inferior">
                        <div class="box-btn">
                          <span class="continuar" @click="continuar($event,3)">CONTINUAR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="v2-seleccion-planes  d-lg-none">
                <div class="v2-seleccion-planes__item  plan4  plata" @click="seleccionarPLan(4)" v-bind:class="{planInactivo: planInactivo}">
                  <p>PLATA</p>
                  <p>US$ 12 AL MES</p>
                </div>
                <div class="v2-seleccion-planes__item planorito  plan6  oro" @click="seleccionarPLan(6)" v-bind:class="{planInactivo: planInactivo}">
                  <p>ORO</p>
                  <p>US$ 25 AL MES</p>
                </div>
                <div class="v2-seleccion-planes__item  plan3  black" @click="seleccionarPLan(3)" v-bind:class="{planInactivo: planInactivo}">
                  <p>BLACK</p>
                  <p>US$ 33 AL MES</p>
                </div>
                
              </div>

              <div class="v2-detalle-plan  d-lg-none" :class="classPlan"> 
                <div class="box-monto-frecuencia">
                  <div class="v2-detalle-plan__suma  box-monto-pago">
                      <div class="monto-frecuencia">
                          <span>US$</span>
                          <span class="monto">{{this.monto_pagar}}</span>
                      </div>
                      <p class="antes">Antes US${{this.monto_antes}}</p>
                  </div>
                </div>
                <div class="dto-cotizador">
                  <div class="flotante-dcto">
                    10%
                  </div>
                </div>
                <div class="que-me-cubre">
                        <div class="titulo">                          
                          Este plan incluye:
                        </div>
                        <p class="que-me-cubre__item">
                          Beneficios Interseguro
                        </p>
                        <p class="que-me-cubre__item" >
                          Central de emergencias
                        </p>
                        <p class="que-me-cubre__item" >
                          Responsabilidad Civil
                        </p>
                        <p class="que-me-cubre__item" >
                          Robo total
                        </p>
                        <p class="que-me-cubre__item " v-if="this.planSeleccionado == 6 || this.planSeleccionado == 3 || this.planSeleccionado == 10">
                          Pérdida parcial por accidente
                        </p>
                        <p class="que-me-cubre__item " v-if="this.planSeleccionado == 6 || this.planSeleccionado == 3 || this.planSeleccionado == 10">
                          Accidentes de ocupantes
                        </p>
                        <p class="que-me-cubre__item " v-if="this.planSeleccionado == 3 ||  this.planSeleccionado == 10">
                          Accesorios musicales
                        </p>
                        <p class="que-me-cubre__item " v-if="this.planSeleccionado == 3 ||  this.planSeleccionado == 10">
                          Rotura de lunas
                        </p>
                        <p class="que-me-cubre__item " v-if="this.planSeleccionado == 3 ||  this.planSeleccionado == 10">
                          Desastres naturales, vandalismo, incendios.
                        </p>
                        <p class="que-me-cubre__item " v-if="this.planSeleccionado == 3 ||  this.planSeleccionado == 10">
                          Pérdida total por accidente
                        </p>
                        <p class="que-me-cubre__item " v-if="this.planSeleccionado == 3 ||  this.planSeleccionado == 10">
                          Ausencia de control*
                        </p>

                        <p class="titulo  mt-4  mb-2   no-incluye-titulo" v-if="this.planSeleccionado == 4">
                          Este plan no incluye:
                        </p>

                        <p class="que-me-cubre__item   no-incluye" v-if="this.planSeleccionado == 4">
                          Pérdida parcial por accidente
                        </p>
                        <p class="que-me-cubre__item   no-incluye" v-if="this.planSeleccionado == 4">
                          Accidentes de ocupantes
                        </p>
                        <p class="titulo  mt-4  mb-2   no-incluye-titulo" v-if="this.planSeleccionado == 6">
                          Este plan no incluye:
                        </p>
                        <p class="que-me-cubre__item   no-incluye" v-if="this.planSeleccionado == 4 ||  this.planSeleccionado == 6">
                          Accesorios musicales
                        </p>
                        <p class="que-me-cubre__item   no-incluye" v-if="this.planSeleccionado == 4 ||  this.planSeleccionado == 6">
                          Rotura de lunas
                        </p>
                        <p class="que-me-cubre__item   no-incluye" v-if="this.planSeleccionado == 4 ||  this.planSeleccionado == 6">
                          Desastres naturales, vandalismo, incendios.
                        </p>
                        <p class="que-me-cubre__item   no-incluye" v-if="this.planSeleccionado == 4 ||  this.planSeleccionado == 6">
                          Pérdida total por accidente
                        </p>
                        <p class="que-me-cubre__item   no-incluye" v-if="this.planSeleccionado == 4 ||  this.planSeleccionado == 6">
                          Ausencia de control*
                        </p>
                </div>
              </div>

  

            </div>
        </b-col>
      </b-row>
      
    </b-container>

    <b-container>
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
              <img src="" alt="" class="beneficios__item--icon">
              <p class="beneficios__item--texto">
                Dscto de S/50 en atención médica covid-19 a domicilio
              </p>
            </div>
            <div class="beneficios__item">
              <img src="" alt="" class="beneficios__item--icon">
              <p class="beneficios__item--texto">
                Chofer de reemplazo Hasta 5 veces al año
              </p>
            </div>
            <div class="beneficios__item">
              <img src="" alt="" class="beneficios__item--icon">
              <p class="beneficios__item--texto">
                Auxilio mecánico Carga de batería, grúas y más
              </p>
            </div>
            <div class="beneficios__item">
              <img src="" alt="" class="beneficios__item--icon">
              <p class="beneficios__item--texto">
                Inspección digital en menos de 5 minutos y sin salir de casa
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
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
              <img src="@/static/media/seguroVehicular/home/elegirnos_mejor_precio.svg" alt="" class="elegirnos__item--icon">
              <div class="elegirnos--box">
                <p class="elegirnos__item--titulo">Mejor precio</p>
                <p class="elegirnos__item--text">Eliminamos a los brókers e intermediarios</p>
              </div>
            </div>
            <div class="elegirnos__item">
              <img src="@/static/media/seguroVehicular/home/elegirnos_somos_intercorp.svg" alt="" class="elegirnos__item--icon">
              <div class="elegirnos--box">
                <p class="elegirnos__item--titulo">Somos intercorp</p>
                <p class="elegirnos__item--text">El grupo económico más importante del país</p>
              </div>
            </div>
            <div class="elegirnos__item">
              <img src="@/static/media/seguroVehicular/home/elegirnos_100_online.svg" alt="" class="elegirnos__item--icon">
              <div class="elegirnos--box">
                <p class="elegirnos__item--titulo">100% online</p>
                <p class="elegirnos__item--text">Protege tu auto en solo 3 clics desde donde estés</p>
              </div>
            </div>
            <div class="elegirnos__item">
              <img src="@/static/media/seguroVehicular/home/elegirnos_siempre_contigo.svg" alt="" class="elegirnos__item--icon">
              <div class="elegirnos--box">
                <p class="elegirnos__item--titulo">Siempre contigo</p>
                <p class="elegirnos__item--text">Te brindamos atención 24/7</p>
              </div>
            </div>
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
      
    }
  },
}
</script>
