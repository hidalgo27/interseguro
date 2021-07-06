<template>
  <section class="page-cotizador">
    <b-container class="">
      <b-row class="justify-content-center" style="position: relative;">
        <!-- *************************************************************************************************** -->
        <!-- *******************************  COTIZADOR NUEVO  ***************************************** -->
        <!-- *************************************************************************************************** -->

        <b-container>
          <b-row class="justify-content-center">
            <b-col xs="12" lg="4">
              <div class="v2-suma-asegurada">
                  <div class="suma-asegurada">
                    <p>Ingresa la suma asegurada</p>
                    <div class="datos-carro">
                      <span>{{
                        this.$store.state.common.objVehicle.brand
                      }}</span>
                      <span>{{
                        this.$store.state.common.objVehicle.model
                      }}</span>
                      <span>{{
                        this.$store.state.common.objVehicle.modelYear
                      }}</span>
                      <span>LAPIZ</span>
                    </div>
                  </div>
                <div class="v2-valor-comercial">
                  <div class="box-input" v-if="listCotizacion">
                    <div class="flotante-moneda">US$</div>
                    <b-form-input
                      class="e-range"
                      step="100"
                      v-model="listCotizacion.vehicle.current"
                      type="text"
                      :min="isMinimo"
                      :max="isMaximo"
                      @change="cambioInput()"
                    ></b-form-input>
                  </div>
                </div>

                <div class="v2-valores-minimo-maximo">
                  Mín: US$ {{ listCotizacion.vehicle.minimum }}. / Máx: US$
                  {{ listCotizacion.vehicle.maximum }}
                </div>
              </div>
            </b-col>

            <b-col xs="12" md="8" lg="12" class="order-md-3">
              <div class="v2-planes">
                <div class="row  mb-4">
                  <div class="col-12  col-lg-6">
                    <p class="v2-planes--titulo">
                      Selecciona tu plan
                    </p>
                  </div>
                  <div
                    class="col-lg-6  d-none  d-lg-flex  align-items-center  justify-content-end"
                  >
                    <div class="v2-detalle-plan__box-frecuencia  select">
                      <b-form-select
                        @change="seleccionarFrecuencia()"
                        v-model="selected"
                        :options="options"
                      ></b-form-select>
                    </div>
                    <div class="fecha">
                      <div @click="showModalInicioVigencia()">
                        Fecha de inicio:
                        <span
                          style="display: inline-block; line-height: 1; outline: none; color: #007bff;  line-height: 1;"
                        >
                          <span
                            class="detalle-enlace"
                            style="cursor: pointer; position: relative;"
                            v-if="this.fechaVigencia != ''"
                          >
                            {{ this.fechaVigencia }}
                          </span>
                          <span style="cursor: pointer;" v-else>
                            Cambiar
                          </span>
                        </span>
                      </div>
                    </div>
                    <div
                      class="mail-fecha  mail-cotizador  m-0  ml-3"
                      @click="showModalEnviarEmail()"
                    >
                      <span class="enviar-cotizacion">Enviar cotización</span>
                    </div>
                  </div>
                </div>

                <div class="v2-planes-desktop  row  d-none  d-lg-flex">
                  <div class="col-4">
                    <div style="height: 40px;" class="plan-recomendado"></div>
                    <div
                      class="v2-plan-item  plan4  plata  "
                      @click="seleccionarPLanDesktop(4)"
                      v-bind:class="{ planInactivoDesktop: planInactivo }"
                    >
                      <div class="plan-item  plan-plata">
                        PLAN PLATA
                      </div>
                      <div class="v2-detalle-plan">
                        <div class="box-monto-frecuencia">
                          <div class="v2-detalle-plan__suma  box-monto-pago">
                            <div class="monto-frecuencia">
                              <span>US$</span>
                              <span class="monto">{{
                                this.monto_pagar_plata
                              }}</span>
                            </div>
                            <p class="antes">
                              Antes US${{ this.monto_antes_plata }}
                            </p>
                          </div>
                        </div>
                        <div class="dto-cotizador">
                          <div class="flotante-dcto">
                            10%
                          </div>
                        </div>
                        <div class="box-importante" style="height: 40px;"></div>
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
                          <p class="que-me-cubre__item">
                            Responsabilidad Civil
                          </p>
                          <p class="que-me-cubre__item">
                            Robo total
                          </p>
                          <p class="titulo  mt-4  mb-2   no-incluye-titulo">
                            Este plan no incluye:
                          </p>
                          <p class="que-me-cubre__item   no-incluye">
                            Pérdida parcial por accidente
                          </p>
                          <p class="que-me-cubre__item   no-incluye">
                            Accidentes de ocupantes
                          </p>
                          <p class="que-me-cubre__item   no-incluye">
                            Accesorios musicales
                          </p>
                          <p class="que-me-cubre__item   no-incluye">
                            Rotura de lunas
                          </p>
                          <p class="que-me-cubre__item   no-incluye">
                            Desastres naturales, vandalismo, incendios.
                          </p>
                          <p class="que-me-cubre__item   no-incluye">
                            Pérdida total por accidente
                          </p>
                          <p class="que-me-cubre__item   no-incluye">
                            Ausencia de control*
                          </p>
                        </div>
                        <div class="item-inferior">
                          <div class="descargar-detalle">
                            <!-- <a target="_blank" rel="noopener" v-bind:href="Condicionado_Particular">Descargar detalle de cobertura</a> -->

                            <a
                              v-bind:href="urlpdf"
                              target="_blank"
                              rel="noopener"
                              >Descargar detalle de cobertura</a
                            >
                          </div>
                          <div class="box-btn">
                            <span
                              class="continuar"
                              @click="continuar($event, 4)"
                              >CONTINUAR</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-4">
                    <div style="height: 40px;" class="plan-recomendado"></div>
                    <div
                      class="v2-plan-item  plan6  oro   "
                      @click="seleccionarPLanDesktop(6)"
                      v-bind:class="{ planInactivoDesktop: planInactivo }"
                    >
                      <div class="plan-item  plan-oro">
                        PLAN ORO
                      </div>
                      <div class="v2-detalle-plan">
                        <div class="box-monto-frecuencia">
                          <div class="v2-detalle-plan__suma  box-monto-pago">
                            <div class="monto-frecuencia">
                              <span>US$</span>
                              <span class="monto">{{
                                this.monto_pagar_oro
                              }}</span>
                            </div>
                            <p class="antes">
                              Antes US${{ this.monto_antes_oro }}
                            </p>
                          </div>
                        </div>
                        <div class="dto-cotizador">
                          <div class="flotante-dcto">
                            10%
                          </div>
                        </div>
                        <div class="box-importante">
                          <p
                            class="titulo"
                            v-if="this.listaBasica.vehicle.gps == 'Y'"
                          >
                            Importante
                          </p>
                          <ul>
                            <li class="detalle-item">
                              <div class="item    pb-3">
                                <span
                                  v-if="this.listaBasica.vehicle.gps == 'Y'"
                                  @click="showModalGPS()"
                                >
                                  <span class="mb-0 gps requiere-gps">
                                    <span class="symbol-point">&#11044;</span>Tu
                                    auto necesita GPS:
                                    <a
                                      class="detalle-enlace"
                                      href="javascript:void(0);"
                                      >{{
                                        this.listaBasica.vehicle.gps == "Y"
                                          ? "Ver más"
                                          : "NO"
                                      }}</a
                                    >
                                  </span>
                                </span>
                              </div>
                            </li>
                            <li>
                              <div class="detalle-item" v-if="this.gps == true">
                                <p>GPS:</p>
                                <p>SI</p>
                              </div>
                            </li>
                          </ul>
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
                          <p class="que-me-cubre__item">
                            Responsabilidad Civil
                          </p>
                          <p class="que-me-cubre__item">
                            Robo total
                          </p>
                          <p class="que-me-cubre__item">
                            Pérdida parcial por accidente
                          </p>
                          <p class="que-me-cubre__item">
                            Accidentes de ocupantes
                          </p>
                          <p class="titulo  mt-4  mb-2  no-incluye-titulo">
                            Este plan no incluye:
                          </p>
                          <p class="que-me-cubre__item    no-incluye">
                            Accesorios musicales
                          </p>
                          <p class="que-me-cubre__item    no-incluye">
                            Rotura de lunas
                          </p>
                          <p class="que-me-cubre__item    no-incluye">
                            Desastres naturales, vandalismo, incendios.
                          </p>
                          <p class="que-me-cubre__item    no-incluye">
                            Pérdida total por accidente
                          </p>
                          <p class="que-me-cubre__item    no-incluye">
                            Ausencia de control*
                          </p>
                        </div>
                        <div class="item-inferior">
                          <div class="descargar-detalle">
                            <!-- <a target="_blank" rel="noopener" v-bind:href="Condicionado_Particular">Descargar detalle de cobertura</a> -->
                            <a
                              v-bind:href="urlpdf"
                              target="_blank"
                              rel="noopener"
                              >Descargar detalle de cobertura</a
                            >
                          </div>
                          <div class="box-btn">
                            <span
                              class="continuar"
                              @click="continuar($event, 6)"
                              >CONTINUAR</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-4">
                    <div style="height: 40px; " class="plan-recomendado">
                      <span>&#9733; </span> MÁS VENDIDO
                    </div>
                    <div
                      class="v2-plan-item   plan3  black   "
                      @click="seleccionarPLanDesktop(3)"
                      v-bind:class="{ planInactivoDesktop: planInactivo }"
                    >
                      <div class="plan-item  plan-black">
                        PLAN BLACK
                      </div>
                      <div class="v2-detalle-plan">
                        <div class="box-monto-frecuencia">
                          <div class="v2-detalle-plan__suma  box-monto-pago">
                            <div class="monto-frecuencia">
                              <span>US$</span>
                              <span class="monto">{{
                                this.monto_pagar_black
                              }}</span>
                            </div>
                            <p class="antes">
                              Antes US${{ this.monto_antes_black }}
                            </p>
                          </div>
                        </div>
                        <div class="dto-cotizador">
                          <div class="flotante-dcto">
                            10%
                          </div>
                        </div>
                        <div class="box-importante">
                          <p class="titulo">Importante</p>
                          <ul>
                            <li>
                              <div class="detalle-item">
                                <p style="width: 208px;">
                                  <span class="symbol-point">&#11044;</span
                                  >Endosa tu crédito vehicular
                                </p>
                                <p
                                  class="endozar-poliza  text-right"
                                  style="width: auto;"
                                >
                                  <template
                                    v-if="this.endosoSeleccionado.id == 0"
                                  >
                                    <span
                                      style="display: inline-block; cursor:outline: none;  pointer; text-align: left;"
                                      class="detalle-enlace"
                                      v-b-modal.modalEntidadFinanciera2
                                      @click="clickEnlace('entidad Financiera')"
                                      >Aquí
                                    </span>
                                  </template>
                                  <template v-else>
                                    <span
                                      style="display: inline-block;  outline: none;  line-height: 1; padding-bottom: 4px; cursor: pointer;"
                                      class="detalle-enlace"
                                      v-b-modal.modalEntidadFinanciera2
                                      @click="clickEnlace('entidad Financiera')"
                                    >
                                      {{ this.endosoSeleccionado.name }}</span
                                    >
                                  </template>
                                </p>
                              </div>
                            </li>
                            <li class="detalle-item">
                              <div class="item    pb-3">
                                <span
                                  href="javascript:void(0);"
                                  v-if="this.listaBasica.vehicle.gps == 'Y'"
                                  @click="showModalGPS()"
                                >
                                  <span class="mb-0 gps requiere-gps">
                                    <span class="symbol-point">&#11044;</span>Tu
                                    auto necesita GPS:
                                    <a
                                      class="detalle-enlace"
                                      href="javascript:void(0);"
                                      >{{
                                        this.listaBasica.vehicle.gps == "Y"
                                          ? "Ver más"
                                          : "NO"
                                      }}</a
                                    >
                                  </span>
                                </span>
                              </div>
                            </li>
                            <li>
                              <div class="detalle-item" v-if="this.gps == true">
                                <p>GPS:</p>
                                <p>SI</p>
                              </div>
                            </li>
                          </ul>
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
                          <p class="que-me-cubre__item">
                            Responsabilidad Civil
                          </p>
                          <p class="que-me-cubre__item">
                            Robo total
                          </p>
                          <p class="que-me-cubre__item">
                            Pérdida parcial por accidente
                          </p>
                          <p class="que-me-cubre__item">
                            Accidentes de ocupantes
                          </p>
                          <p class="que-me-cubre__item">
                            Accesorios musicales
                          </p>
                          <p class="que-me-cubre__item">
                            Rotura de lunas
                          </p>
                          <p class="que-me-cubre__item">
                            Desastres naturales, vandalismo, incendios.
                          </p>
                          <p class="que-me-cubre__item">
                            Pérdida total por accidente
                          </p>
                          <p class="que-me-cubre__item">
                            Ausencia de control*
                          </p>
                        </div>
                        <div class="item-inferior">
                          <div class="descargar-detalle">
                            <a
                              v-bind:href="urlpdf"
                              target="_blank"
                              rel="noopener"
                              >Descargar detalle de cobertura</a
                            >
                          </div>
                          <div class="box-btn">
                            <span
                              class="continuar"
                              @click="continuar($event, 3)"
                              >CONTINUAR</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="v2-seleccion-planes  d-lg-none">
                  <div
                    class="v2-seleccion-planes__item  plan4  plata"
                    @click="seleccionarPLan(4)"
                    v-bind:class="{ planInactivo: planInactivo }"
                  >
                    <p>PLATA</p>
                    <p>US$ {{ this.listaBasica.policy.monthly }}</p>
                  </div>
                  <div
                    class="v2-seleccion-planes__item planorito  plan6  oro"
                    @click="seleccionarPLan(6)"
                    v-bind:class="{ planInactivo: planInactivo }"
                  >
                    <p>ORO</p>
                    <p>US$ {{ this.listaMedia.policy.monthly }}</p>
                  </div>
                  <div
                    class="v2-seleccion-planes__item  plan3  black"
                    @click="seleccionarPLan(3)"
                    v-bind:class="{ planInactivo: planInactivo }"
                  >
                    <p>BLACK</p>
                    <p>US$ {{ this.listaFull.policy.monthly }}</p>
                  </div>
                </div>

                <div class="v2-detalle-plan  d-lg-none" :class="classPlan">
                  <div class="box-monto-frecuencia">
                    <div class="v2-detalle-plan__suma  box-monto-pago">
                      <div class="monto-frecuencia">
                        <span>US$</span>
                        <span class="monto">{{ this.monto_pagar }}</span>
                      </div>
                      <p class="antes">Antes US${{ this.monto_antes }}</p>
                    </div>
                  </div>
                  <div class="dto-cotizador">
                    <div class="flotante-dcto">
                      10%
                    </div>
                  </div>
                  <div class="box-importante">
                    <p class="titulo">Importante</p>
                    <ul>
                      <li>
                        <div
                          class="detalle-item"
                          v-if="
                            this.$store.state.common.planSeleccionado == 3 ||
                              this.$store.state.common.planSeleccionado == 10
                          "
                        >
                          <p style="width: 208px;">
                            <span class="symbol-point">&#11044;</span>Endosa tu
                            crédito vehicular
                          </p>
                          <p
                            class="endozar-poliza  text-right"
                            style="width: auto;"
                          >
                            <template v-if="this.endosoSeleccionado.id == 0">
                              <span
                                style="display: inline-block; outline: none;  cursor: pointer; text-align: left;"
                                class="detalle-enlace"
                                v-b-modal.modalEntidadFinanciera2
                                @click="clickEnlace('entidad Financiera')"
                                >Aquí
                              </span>
                            </template>
                            <template v-else>
                              <span
                                style="display: inline-block;  outline: none;  line-height: 1; padding-bottom: 4px; cursor: pointer;"
                                class="detalle-enlace"
                                v-b-modal.modalEntidadFinanciera2
                                @click="clickEnlace('entidad Financiera')"
                              >
                                {{ this.endosoSeleccionado.name }}</span
                              >
                            </template>
                          </p>
                        </div>
                      </li>
                      <li class="detalle-item">
                        <div class="item    pb-3">
                          <span
                            href="javascript:void(0);"
                            v-if="this.listaBasica.vehicle.gps == 'Y'"
                            @click="showModalGPS()"
                          >
                            <span class="mb-0 gps requiere-gps">
                              <span class="symbol-point">&#11044;</span>Tu auto
                              necesita GPS:
                              <a
                                class="detalle-enlace"
                                href="javascript:void(0);"
                                >{{
                                  this.listaBasica.vehicle.gps == "Y"
                                    ? "Ver más"
                                    : "NO"
                                }}</a
                              >
                            </span>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="detalle-item" v-if="this.gps == true">
                          <p>GPS:</p>
                          <p>SI</p>
                        </div>
                      </li>
                    </ul>
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
                    <p class="que-me-cubre__item">
                      Responsabilidad Civil
                    </p>
                    <p class="que-me-cubre__item">
                      Robo total
                    </p>
                    <p
                      class="que-me-cubre__item "
                      v-if="
                        this.planSeleccionado == 6 ||
                          this.planSeleccionado == 3 ||
                          this.planSeleccionado == 10
                      "
                    >
                      Pérdida parcial por accidente
                    </p>
                    <p
                      class="que-me-cubre__item "
                      v-if="
                        this.planSeleccionado == 6 ||
                          this.planSeleccionado == 3 ||
                          this.planSeleccionado == 10
                      "
                    >
                      Accidentes de ocupantes
                    </p>
                    <p
                      class="que-me-cubre__item "
                      v-if="
                        this.planSeleccionado == 3 ||
                          this.planSeleccionado == 10
                      "
                    >
                      Accesorios musicales
                    </p>
                    <p
                      class="que-me-cubre__item "
                      v-if="
                        this.planSeleccionado == 3 ||
                          this.planSeleccionado == 10
                      "
                    >
                      Rotura de lunas
                    </p>
                    <p
                      class="que-me-cubre__item "
                      v-if="
                        this.planSeleccionado == 3 ||
                          this.planSeleccionado == 10
                      "
                    >
                      Desastres naturales, vandalismo, incendios.
                    </p>
                    <p
                      class="que-me-cubre__item "
                      v-if="
                        this.planSeleccionado == 3 ||
                          this.planSeleccionado == 10
                      "
                    >
                      Pérdida total por accidente
                    </p>
                    <p
                      class="que-me-cubre__item "
                      v-if="
                        this.planSeleccionado == 3 ||
                          this.planSeleccionado == 10
                      "
                    >
                      Ausencia de control*
                    </p>

                    <p
                      class="titulo  mt-4  mb-2   no-incluye-titulo"
                      v-if="this.planSeleccionado == 4"
                    >
                      Este plan no incluye:
                    </p>

                    <p
                      class="que-me-cubre__item   no-incluye"
                      v-if="this.planSeleccionado == 4"
                    >
                      Pérdida parcial por accidente
                    </p>
                    <p
                      class="que-me-cubre__item   no-incluye"
                      v-if="this.planSeleccionado == 4"
                    >
                      Accidentes de ocupantes
                    </p>
                    <p
                      class="titulo  mt-4  mb-2   no-incluye-titulo"
                      v-if="this.planSeleccionado == 6"
                    >
                      Este plan no incluye:
                    </p>
                    <p
                      class="que-me-cubre__item   no-incluye"
                      v-if="
                        this.planSeleccionado == 4 || this.planSeleccionado == 6
                      "
                    >
                      Accesorios musicales
                    </p>
                    <p
                      class="que-me-cubre__item   no-incluye"
                      v-if="
                        this.planSeleccionado == 4 || this.planSeleccionado == 6
                      "
                    >
                      Rotura de lunas
                    </p>
                    <p
                      class="que-me-cubre__item   no-incluye"
                      v-if="
                        this.planSeleccionado == 4 || this.planSeleccionado == 6
                      "
                    >
                      Desastres naturales, vandalismo, incendios.
                    </p>
                    <p
                      class="que-me-cubre__item   no-incluye"
                      v-if="
                        this.planSeleccionado == 4 || this.planSeleccionado == 6
                      "
                    >
                      Pérdida total por accidente
                    </p>
                    <p
                      class="que-me-cubre__item   no-incluye"
                      v-if="
                        this.planSeleccionado == 4 || this.planSeleccionado == 6
                      "
                    >
                      Ausencia de control*
                    </p>
                  </div>
                  <div class="descargar-detalle">
                    <a v-bind:href="urlpdf" target="_blank" rel="noopener"
                      >Descargar detalle de cobertura</a
                    >
                  </div>
                  <div class="d-flex   d-lg-none">
                    <div
                      class="mail-fecha  mail-cotizador"
                      @click="showModalEnviarEmail()"
                    >
                      <span class="enviar-cotizacion">Enviar cotización</span>
                    </div>
                  </div>
                  <div class="d-flex   d-lg-none">
                    <div
                      class="mail-fecha  boton-fecha"
                      @click="showModalInicioVigencia()"
                    >
                      <div class="detalle-item">
                        <p>Fecha de inicio:</p>
                        <p>
                          <span
                            style="display: inline-block; line-height: 1; outline: none; color: #007bff;  line-height: 1;"
                          >
                            <span
                              class="detalle-enlace"
                              style="cursor: pointer; position: relative;"
                              v-if="this.fechaVigencia != ''"
                            >
                              {{ this.fechaVigencia }}
                            </span>
                            <span style="cursor: pointer;" v-else>
                              Cambiar
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="v2-comparar-planes  d-lg-none">
                  <span @click="showModalCompararPlanes()"
                    ><img
                      src="../../static/media/img/comparar-planes.png"
                      class="mr-2"
                      alt="B"
                    />COMPARAR PLANES</span
                  >
                </div>
                <div
                  id="btnirapagar"
                  class="box-btn "
                  v-bind:class="{ opacityNone: opacityNone }"
                >
                  <b-button
                    class="continuar  d-lg-none"
                    @click="continuar($event, planSeleccionado)"
                    >CONTINUAR</b-button
                  >
                </div>
                <div
                  class="box-btns-fixed  box-btn "
                  v-bind:class="{ 'd-none': opacityNone }"
                >
                  <!-- <div class="flotante-covid-boton  d-md-none" v-if="flotanteCovid"  style="position: relative;">
                    <img
                      @click="hideFlotante()"
                      src="./../../static/media/img/root/close.png"
                      width="50"
                      alt="icon close"
                      class="img-close "
                    />
                    <router-link to="/tyc"><img src="./../../static/media/interseguroVehicular_v2/segunda-cuota.svg" alt=""></router-link>
                    <div class="box-contador" >
                      <div  class="example  d-md-flex">
                          <div id="contadorCyber5" class="flipdown">
                              
                          </div> 
                      </div>
                    </div>
                  </div> -->
                  <b-button
                    class="continuar  d-lg-none mt-2"
                    @click="continuar($event, planSeleccionado)"
                    >CONTINUAR</b-button
                  >
                </div>
              </div>
            </b-col>
          </b-row>

          <b-row> </b-row>
        </b-container>

        <!-- *************************************************************************************************** -->
        <!-- *******************************  COTIZADOR NUEVO  ******************************************* -->
        <!-- *************************************************************************************************** -->
      </b-row>
    </b-container>
    <b-modal
      id="leaveBlackWeek"
      class=" modal-blackWeek"
      static
      centered
      hide-footer
      hide-header
    >
      <b-container style="height: 100%;">
        <b-row class="align-items-center" style="height: 100%;">
          <b-col cols="12">
            <div class="banner-modal">
              <img src="./../../static/media/modalBlackWeek/modal.svg" alt="" />
            </div>
          </b-col>
          <b-col cols="12" class="mb-2">
            <p>
              Aprovecha esta oferta y participa en el <br />
              sorteo de
              <strong
                >2 Smart TV 50" <br />
                y 3 Nintendo Switch + 2 juegos
              </strong>
            </p>
          </b-col>
          <b-col class="text-center mb-4" cols="12">
            <b-button @click="hideModalBlackWeek()">QUIERO CONTINUAR</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
    <b-modal
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="modalEnviarEmail"
      id="modalEnviarEmail"
    >
      <img
        @click="hideModalEnviarEmail()"
        src="./../../static/media/img/root/close.png"
        width="30"
        alt="icon close"
        class="modal-close"
      />
      <div
        class="box-mensajeEnviadoCotizacion"
        v-bind:class="{
          mostrarMensajeEnviadoCotizacion: mostrarMensajeEnviadoCotizacion
        }"
      >
        <img
          width="80"
          class="check-enviado"
          src="./../../static/media/interseguroVehicular_v2/mail.png"
          alt=""
        />
        <p class="modal-titulo  modal-titulo-enviado">
          <strong>Hemos enviado tu cotización a tu correo. </strong> <br />
          No lo dudes y compra hoy al precio más bajo.
        </p>
      </div>

      <div class="modalEnviarEmail">
        <p class="modal-titulo">Recibe tu cotización en tu correo</p>

        <div class="fechaCotizador">
          <b-form-input
            id="input-small"
            placeholder="Ejem. lperez@gmail.com"
            v-model="email"
          ></b-form-input>
        </div>
        <div class="box-btns">
          <button class="btn  btn-principal  " @click="enviarMail()">
            ENVIAR
          </button>
        </div>
      </div>
    </b-modal>

    <div id="imagePhone" style="display:none">
      <div class="phoneContent">
        <a class="phoneS" style="color : #5b85c5" href="tel:015000000">
          <img
            src="../../static/media/interseguroVehicular_v2/telefono.svg"
            alt="telefono"
          />
        </a>
      </div>

      Tenemos problemas para cotizar tu placa. Por favor ponte en contacto con
      nosotros llamando al
      <a style="color : #5b85c5" href="tel:015000000">(01)500-0000</a>
      y te ayudamos a seguir con la cotización.
    </div>

    <b-modal
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="modalCompararPlanes"
      id="modalCompararPlanes"
    >
      <div class="modalCompararPlanes">
        <img
          class="modal-close"
          width="40"
          src="./../../static/media/img/root/close.png"
          alt=""
          @click="hideModalCompararPlanes()"
        />
        <div class="modal-body">
          <p class="mb-4  modal-titulo">COMPARAR PLANES</p>
          <table class="table-planes">
            <tbody>
              <tr>
                <td class="w180px" style="display: inline;"></td>
                <td
                  class="table-planes__titulo  table-planes__robo"
                  v-bind:class="{
                    'd-none': this.clonado.vehicle.current > 35000
                  }"
                >
                  <span class="plan-tab  plata">PLATA</span>
                </td>
                <td class="table-planes__titulo  table-planes__semifull">
                  <span class="plan-tab  oro">ORO</span>
                </td>
                <td class="table-planes__titulo  table-planes__full">
                  <span class="plan-tab  black">BLACK</span>
                </td>
              </tr>
              <tr>
                <td class="w180px">Responsabilidad Civil</td>
                <td
                  class="check-table"
                  v-bind:class="{
                    'd-none': this.clonado.vehicle.current > 35000
                  }"
                >
                  &#x2714;
                </td>
                <td class="check-table">&#x2714;</td>
                <td class="check-table" style="color:#EA0F90">&#x2714;</td>
              </tr>
              <tr>
                <td class="w180px">Robo Total</td>
                <td
                  class="check-table"
                  v-bind:class="{
                    'd-none': this.clonado.vehicle.current > 35000
                  }"
                >
                  &#x2714;
                </td>
                <td class="check-table">&#x2714;</td>
                <td class="check-table" style="color:#EA0F90">&#x2714;</td>
              </tr>
              <tr>
                <td class="w180px">
                  Pérdida Parcial <br />
                  por Choque
                </td>
                <td
                  class="check-table"
                  v-bind:class="{
                    'd-none': this.clonado.vehicle.current > 35000
                  }"
                ></td>
                <td class="check-table">&#x2714;</td>
                <td class="check-table" style="color:#EA0F90">&#x2714;</td>
              </tr>
              <tr>
                <td class="w180px">
                  Accidente de <br />
                  Ocupantes
                </td>
                <td
                  class="check-table"
                  v-bind:class="{
                    'd-none': this.clonado.vehicle.current > 35000
                  }"
                ></td>
                <td class="check-table">&#x2714;</td>
                <td class="check-table" style="color:#EA0F90">&#x2714;</td>
              </tr>
              <tr>
                <td class="w180px">
                  Pérdida total por <br />
                  Accidentes de tránsito
                </td>
                <td
                  class="check-table"
                  v-bind:class="{
                    'd-none': this.clonado.vehicle.current > 35000
                  }"
                ></td>
                <td class="check-table"></td>
                <td class="check-table" style="color:#EA0F90">&#x2714;</td>
              </tr>
              <!-- <tr>
                    <td class="w180px">Accesorios Adicionales</td>
                    <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                    <td class="check-table">	</td>
                    <td class="check-table" style="color:#EA0F90">&#x2714;	</td>
                  </tr> -->
              <tr>
                <td class="w180px">Rotura de Lunas</td>
                <td
                  class="check-table"
                  v-bind:class="{
                    'd-none': this.clonado.vehicle.current > 35000
                  }"
                ></td>
                <td class="check-table"></td>
                <td class="check-table" style="color:#EA0F90">&#x2714;</td>
              </tr>
              <tr>
                <td class="w180px">
                  Riesgos de naturaleza, vandalismo, incendios
                </td>
                <td
                  class="check-table"
                  v-bind:class="{
                    'd-none': this.clonado.vehicle.current > 35000
                  }"
                ></td>
                <td class="check-table"></td>
                <td class="check-table" style="color:#EA0F90">&#x2714;</td>
              </tr>
              <tr>
                <td class="w180px">Ausencia de Control <br /></td>
                <td
                  class="check-table"
                  v-bind:class="{
                    'd-none': this.clonado.vehicle.current > 35000
                  }"
                ></td>
                <td class="check-table"></td>
                <td class="check-table" style="color:#EA0F90">&#x2714;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </b-modal>

    <b-modal
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="modalNumeroCelular"
      id="modalNumeroCelular"
    >
      <div class="modal-content modal-root">
        <div class="modal-body">
          <div
            class="box-mensajeEnviado"
            v-bind:class="{ mostrarMensajeEnviado: mostrarMensajeEnviado }"
          >
            <img
              class="check-enviado"
              src="./../../static/media/img/root/check.png"
              alt=""
            />
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
          class="img-close-modal "
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
              <img
                src="./../../static/media/img/root/descarga.png"
                alt="pasos gps"
              />
            </div>
            <div class="box-descripcion">
              <p class="titulo">Descarga el app</p>
              <p class="desc">
                Ahora tú tienes el control. Comienza en un minuto.
              </p>
            </div>
          </div>
          <div class="modal-body__item">
            <div class="box-img">
              <img
                src="./../../static/media/img/root/maneja.png"
                alt="pasos gps"
              />
            </div>
            <div class="box-descripcion">
              <p class="titulo">Manejo tu carro</p>
              <p class="desc">
                Vamos a medir tu habilidad de manejo desde el app.
              </p>
            </div>
          </div>
          <div class="modal-body__item ">
            <div class="box-img">
              <img
                src="./../../static/media/img/root/ahorra.png"
                alt="pasos gps"
              />
            </div>
            <div class="box-descripcion">
              <p class="titulo">Ahorra</p>
              <p class="desc">
                Recibe tu cotización, elige tu plan y ¡estás protegido!
              </p>
              <span class="disclaimer-porcentaje d-none  d-lg-block">
                * Solo aplica a los planes Oro y Black .
              </span>
            </div>
          </div>
          <span class="disclaimer-porcentaje  d-lg-none">
            * Solo aplica a los planes Oro y Black .
          </span>
        </div>
        <div class="modal-footer" style="justify-content: center;">
          <div class="box-btn  d-flex  justify-content-end  box-btn-cotizador">
            <button
              type="submit"
              :disabled="isDisabled"
              @click="descargarApp($event)"
              class="btn box-btn__button   d-block d-xl-none"
              style="animation: none"
            >
              DESCARGAR APP AHORA
            </button>
            <button
              type="submit"
              :disabled="isDisabled"
              @click="showModalNumeroCelular($event)"
              class="btn box-btn__button  d-none d-xl-block"
              style="animation: none"
            >
              DESCARGAR APP AHORA
            </button>
          </div>
        </div>
        <div class="row"></div>
      </div>
    </b-modal>

    <b-modal
      id="modalTerminosCondiciones"
      ref="modalTerminosCondiciones"
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      size="lg"
    >
      <div class="modal-content modalTerminosCondiciones">
        <img
          class="close-modal"
          src="./../../static/media/img/root/close.png"
          alt=""
          @click="hidemodalTerminosCondiciones()"
        />
        <div class="modal-head">
          <div class="modal-divider"></div>
        </div>

        <div class="modal-description">
          <br />
          <h4 class="text-center">
            CONDICIONES DE USO Y POLÍTICA DE PRIVACIDAD
          </h4>
          <p style="border: 1px solid #666; padding: 12px;">
            RECOMENDAMOS ENFÁTICAMENTE LEER ÍNTEGRAMENTE ESTE DOCUMENTO ANTES DE
            ACEPTARLO.
          </p>
          <span
            >Con este documento manifiesta usted que ha sido informado por
            INTERSEGURO COMPAÑÍA DE SEGUROS S.A respecto a lo siguiente:
            <br />
          </span>
          <br />1. Finalidad del tratamiento de sus datos personales. <br />2.
          Quiénes son o pueden ser los destinatarios de sus datos personales.
          <br />3. Existencia del banco de datos en que se almacenarán, así como
          la identidad y domicilio de su titular. <br />4. De ser el caso, del o
          de los encargados del tratamiento de sus datos personales. <br />5. El
          carácter obligatorio o facultativo de sus respuestas al formulario que
          se le proponga, en especial en cuanto a los datos sensibles. <br />6.
          La transferencia de sus datos personales. <br />7. Las consecuencias
          de proporcionar sus datos personales y de su negativa a hacerlo.
          <br />8. El tiempo durante el cual se conservan sus datos personales.
          <br />9. La posibilidad de ejercer los derechos que la ley le concede
          y los medios previstos para ello.
          <br />
          <br />
          <p class="text-center">
            QUÉ SON LAS CONDICIONES DE USO Y POLÍTICA DE PRIVACIDAD
          </p>

          <br />Las Condiciones de Uso y Política de Privacidad constituyen un
          contrato entre INTERSEGURO COMPAÑÍA DE SEGUROS S.A (En adelante
          “INTERSEGURO”) y el USUARIO.
          <br />
          <br />Las Condiciones de Uso y Política de Privacidad (en adelante, el
          “CONTRATO”) regulan las condiciones en que INTERSEGURO brindará
          información, enviará publicidad y orientará al USUARIO, de manera
          general, sobre sus productos y servicios actuales y futuros; y los
          productos y servicios actuales y futuros de las empresas de su grupo
          económico.
          <br />
          <br />El CONTRATO parte de la premisa de que usted, como USUARIO, se
          encuentra interesado en conocer y recibir información de los productos
          y servicios de INTERSEGURO y de las empresas de su grupo. Este interés
          se entenderá existente y manifestado por usted cuando acepte el
          CONTRATO y se comunique con nosotros a través de los formularios
          disponibles en los enlaces para los cuales resulta aplicable el
          CONTRATO. Por lo tanto, la aceptación de estas Condiciones de Uso y
          Política de Privacidad significará para todo efecto la formalización
          del CONTRATO entre el USUARIO e INTERSEGURO en los términos y alcances
          en que en este documento se describen.
          <br />
          <br />El CONTRATO es a título gratuito. INTERSEGURO no cobrará ni
          recibirá ninguna suma de dinero ni contraprestación material.
          <br />
          <br />El CONTRATO es un contrato de adhesión. Sus términos no son
          negociables. Pero el USUARIO tiene plena e irrestricta libertad de
          aceptarlo o rechazarlo en su integridad.
          <br />
          <br />El CONTRATO no obliga a contratar un producto o servicio por
          parte del USUARIO. <br />La POLÍTICA DE PRIVACIDAD que se encuentra en
          el apartado IV del CONTRATO y que forma parte integrante del CONTRATO
          establece los alcances y límites del tratamiento de datos personales
          que INTERSEGURO necesita realizar para ejecutar el CONTRATO y con
          posterioridad a su vigencia. Por lo tanto, dicho tratamiento de datos
          personales resulta esencial para tal ejecución. Al aceptar el
          CONTRATO, el USUARIO consentirá la realización de dicho tratamiento.
          <br />
          <br />
          <h4 class="text-center">
            REQUISITOS ESENCIALES PARA PODER ACEPTAR LAS CONDICIONES DE USO Y
            POLÍTICA DE PRIVACIDAD.
          </h4>
          <br />
          <span
            >Es requisito esencial para aceptar este CONTRATO que el USUARIO
            cumpla con los siguientes requisitos, debiendo abstenerse de
            aceptarlos si es que no reúne cualquiera o todos ellos:</span
          >
          <br />
          <br />1. Es mayor de edad, de acuerdo con la LEY o tiene capacidad
          civil suficiente conforme a la LEY, para emitir una manifestación y
          declaración de voluntad sin vicio que afecte su razonamiento y
          entendimiento. <br />2. Es hábil en el idioma español. <br />3. Ha
          leído íntegramente los T&C. <br />4. En caso de actuar como
          representante de un tercero, actúa y declara contando con legitimidad
          y facultades suficientes conforme a LEY.
          <br />
          <br />
          <br />INTERSEGURO, actuando con buena fe, parte de la premisa y
          presunción de que el USUARIO cumple con todas estas exigencias. Si no
          fuese así, el USUARIO será único, exclusivo y total responsable de
          cualquier riesgo o perjuicio que se cause a INTERSEGURO, al GRUPO o a
          terceros derivados del incumplimiento de estos requisitos, o actuando
          en ausencia de cualquiera de ellos.
          <br />
          <br />
          <h4 class="text-center">I. GLOSARIO</h4>
          Los siguientes términos, sea en plural o singular, tendrán el
          siguiente significado en el CONTRATO:
          <br />

          <br />1. BANCO DE DATO: Alude al banco de datos personales USUARIOS DE
          LA PAGINA WEB de titularidad de Interseguro que se encuentra
          debidamente registrado en el Registro Nacional de Datos Personales del
          Ministerio de Justicia, en donde se almacenará los DATOS PERSONALES.
          <br />2. CONTRATO: Significa el acuerdo de voluntades celebrada entre
          el USUARIO e INTERSEGURO y formalizado a través de la aceptación de
          las Condiciones de Uso y Política de Privacidad. <br />3. DATOS
          PERSONALES: Son los siguientes: a) Nombres y apellidos; b) N° DNI; c)
          Dirección del domicilio; d) Teléfono; e) Dirección de correo
          electrónico; f) Carné de Extranjería; g) Estado Civil; h) Fecha de
          Nacimiento; i) Número de tarjeta; j) Fecha de Vencimiento; k) CVV.
          <br />4. GRUPO: Se refiere, conjuntamente a todas las empresas del
          grupo económico INTERCORP, que son: Interbank, Interfondos, Intercorp
          Financial Services, Financiera Oh!, Inteligo SAB y las que se
          encuentren en el siguiente enlace
          http://www.intercorp.com.pe/empresas.html, cuyo número podría variar a
          futuro. <br />5. INTERSEGURO: Significa INTERSEGURO COMPAÑÍA DE
          SEGUROS S.A., identificado con R.U.C. N° 20382748566, con domicilio
          para todos los efectos legales en Avenida Javier Prado Este Nro 492,
          Interior 2601, Distrito San Isidro, Provincia Lima y Departamento de
          Lima, inscrita en la Partida Electrónica N° 11020565 del Registro de
          Personas Jurídicas de la Oficina Registral de Lima y Callao. <br />6.
          LEY: Ordenamiento jurídico de la República del Perú. <br />7. LPDP:
          Significa, conjuntamente, la Ley 29733, Ley de Protección de Datos
          Personales, su reglamento, el Decreto Supremo 003-2013-JUS, las
          disposiciones normativas que de cuando en cuando las modifiquen y
          cualquier disposición normativa del ordenamiento jurídico peruano que
          regule la materia de tratamiento de datos personales en la República
          del Perú. 8. PARTES: Se refiere conjuntamente a INTERSEGURO y al
          USUARIO. <br />9. POLÍTICA DE PRIVACIDAD: Apartado IV del presente
          documento, que representa la forma en que INTERSEGURO realiza el
          tratamiento de sus DATOS PERSONALES. <br />10. PRODUCTOS Y SERVICIOS:
          Cualquier y todos los productos y/o servicios ofrecidos o
          comercializados por INTERSEGURO y/o por las empresas que conforman el
          GRUPO. Con fines meramente enunciativos, los PRODUCTOS Y SERVICIOS de
          INTERSEGURO comprenden el Seguro Obligatorio de Accidentes de
          Tránsito, Pólizas de Vida Individual, Pólizas de Rentas Vitalicias,
          Pólizas de Seguro Vehicular, Pólizas de Seguro de Viaje, entre otros.
          <br />11. USUARIO: Persona natural que accede, hace uso o se comunica
          con INTERSEGURO a través de cualquiera de los URL a las que hace
          referencia el término WEB. <br />12. WEB: Alude de modo general a la
          página web principal de INTERSEGURO https://www.interseguro.pe y a
          todas las páginas relacionadas a ésta, como subdominios o relacionadas
          al dominio principal. No incluye el Libro de Reclamaciones virtual de
          INTERSEGURO.
          <br />
          <br />
          <br />
          <H4 class="text-center">II. FINALIDAD DEL CONTRATO</H4>El CONTRATO
          tiene como finalidades:
          <br />

          <br />1. Facilitar el intercambio de comunicaciones entre INTERSEGURO
          y el USUARIO para recibir y/o brindar información, orientación,
          asesoría y publicidad sobre los PRODUCTOS Y SERVICIOS de INTERSEGURO y
          los de productos y servicios del GRUPO, tanto los actuales como los
          que se creen u ofrezcan a futuro. <br />2. Regular los derechos y
          compromisos de cada una de las PARTES en la ejecución del CONTRATO.
          <br />3. Establecer los alcances y límites del tratamiento de los
          DATOS PERSONALES necesarios para la ejecución de la presente relación
          contractual.
          <br />
          <br />
          <H4>III. SOBRE LAS COMUNICACIONES CON OCASIÓN DEL CONTRATO</H4>
          <br />Con miras a ejecutar las finalidades del CONTRATO, INTERSEGURO
          podrá y se encuentra autorizado, en relación a todas las WEB, para:
          <br />

          <br />1. Brindar información, asesoría y orientación al USUARIO sobre
          los PRODUCTOS Y SERVICIOS, tanto actuales como futuros. <br />2.
          Gestionar y coordinar visitas o reuniones entre el USUARIO y
          funcionarios, colaboradores, promotores, comercializadores y fuerza de
          ventas de INTERSEGURO y del GRUPO, así como para cursar invitaciones
          para eventos. <br />3. Facilitar al USUARIO y/o recibir del USUARIO
          los documentos que conforman la contratación de pólizas de seguros,
          tanto para fines orientativos como para la propia contratación de
          seguros (solicitudes de seguros, solicitudes-certificados, condiciones
          generales, condiciones particulares, condiciones especiales, cláusulas
          adicionales, endosos, convenios de pago de prima, pólizas virtuales,
          entre otros). <br />4. Permitir el intercambio y envío de información
          sobre los PRODUCTOS Y SERVICIOS del GRUPO, sea por parte de cualquiera
          de las empresas del GRUPO como por INTERSEGURO y por terceros a los
          cuales INTERSEGURO o el GRUPO contraten. <br />5. Enviar promociones y
          publicidad de los PRODUCTOS Y SERVICIOS de INTERSEGURO y de los del
          GRUPO, sea por parte de cualquiera de las empresas del GRUPO como por
          INTERSEGURO y por terceros a los cuales INTERSEGURO o el GRUPO
          contraten. <br />6. Contactar con el USUARIO a través de correos
          electrónicos, llamadas telefónicas, SMS, comunicaciones escritas,
          redes sociales, aplicaciones de chat para teléfonos, como el WhatsApp,
          sistemas de comunicación masiva (tales como Call Centers, E-mailing, y
          SMS masivos para las finalidades indicadas en los numerales
          anteriores).
          <br />
          <br />
          <br />INTERSEGURO se encuentra facultado más no obligado a brindar
          información sobre PRODUCTOS Y SERVICIOS del GRUPO.
          <br />
          <br />El USUARIO podrá, se encuentra facultado y permite:
          <br />
          <br />1. Solicitar a INTERSEGURO información y asesoría sobre los
          PRODUCTOS Y SERVICIOS. <br />2. Enviar información o documentos a
          INTERSEGURO <br />3. Solicitar cotizaciones de PRODUCTOS Y SERVICIOS
          y, eventualmente, contratarlos, en tanto lo permitan las exigencias
          normativas sectoriales.
          <br />
          <br />
          <h4 class="text-center">IV. POLÍTICA DE PRIVACIDAD</h4>
          <br />
          <br />Para poder cumplir con las finalidades señaladas en el apartado
          II anterior y en general con las acciones necesarias para ejecutar el
          CONTRATO, INTERSEGURO requiere realizar el tratamiento de los DATOS
          PERSONALES del USUARIO. La presente sección contiene los lineamientos
          que regulan el tratamiento de los DATOS PERSONALES (en adelante, la
          “POLÍTICA DE PRIVACIDAD”), la misma que se aplica en estricto
          cumplimiento de la LEY y, particularmente, de la LPDP, con la
          finalidad de asegurar un tratamiento de DATOS PERSONALES legítimo,
          arreglado a derecho, confidencial y seguro.
          <br />

          <br />INTERSEGURO se encuentra firmemente comprometido con realizar
          los mayores esfuerzos de gestión, administrativos, legales y
          tecnológicos para garantizar el tratamiento confidencial y seguro de
          los DATOS PERSONALES.
          <br />

          <br />Los alcances del tratamiento de los DATOS PERSONALES para
          ejecutar el CONTRATO son los siguientes:
          <br />

          <br />1. Los DATOS PERSONALES recopilados a través de cualquiera de
          los enlaces que conforman la web se almacenarán en el Banco de Datos
          USUARIOS DE LA PAGINA WEB de titularidad de INTERSEGURO. <br />2. Los
          DATOS PERSONALES serán tratados con la finalidad de ejecutar las
          prestaciones y obligaciones y derechos atribuidos tanto al USUARIO
          como a INTERSEGURO contenidos en el CONTRATO. Como se ha señalado en
          el numeral II del CONTRATO, entre estas finalidades se encuentra la de
          mantener informado, asesorar y ofrecer al USUARIO los PRODUCTOS Y
          SERVICIOS tanto actuales como futuros. <br />3. Como consecuencia de
          las finalidades descritas y en tanto progresivamente INTERSEGURO y el
          GRUPO podrán ir diseñando y ofreciendo nuevos PRODUCTOS Y SERVICIOS,
          los DATOS PERSONALES se almacenarán y tratarán hasta el momento en que
          el USUARIO revoque formalmente el consentimiento que nos otorgó para
          su tratamiento, conforme la LPDP se lo permite e INTERSEGURO
          garantiza. <br />4. INTERSEGURO ha implementado las medidas
          administrativas, legales y tecnológicas con la intención de ejecutar
          un tratamiento seguro y confidencial de los DATOS PERSONALES. No
          obstante, INTERSEGURO no puede garantizar que los DATOS PERSONALES se
          encuentren completamente libre de accesos y tratamientos no
          autorizados e ilícitos cometidos por terceros ajenos a INTERSEGURO,
          debido a riesgos naturales y los propios del entorno virtual. En tal
          sentido, debe entenderse para todo efecto que la implementación de
          estas medidas administrativas, legales y tecnológicas constituyen
          deberes de medios y no de resultados. Como consecuencia de ello,
          INTERSEGURO no se responsabiliza en caso de que se materialicen dichos
          riesgos y se genere algún tipo de daño o perjuicio al USUARIO. En
          dicho caso, la responsabilidad de INTERSEGURO se encuentra sujeta y
          limitada a los límites contenidos en el presente documento. <br />5.
          Para efectos del intercambio de comunicaciones y envío de
          comunicaciones con ocasión de la ejecución del CONTRATO, descrito en
          los numerales II y III del CONTRATO, INTERSEGURO podrá usar sistemas
          de comunicación masiva, tales como centrales de llamadas (Call
          Centers), centrales o sistemas de envíos de mails masivos (mailing) o
          SMS masivos. En caso de que INTERSEGURO decida valerse de terceros
          para estos fines, se realizará transferencia de DATOS PERSONALES a
          través de los encargos de tratamiento que correspondan, garantizando
          el tratamiento de los DATOS PERSONALES por parte de estos terceros
          conforme a los alcances y limitaciones del consentimiento brindado por
          el USUARIO a través del CONTRATO y cumpliendo con las exigencias de la
          LPDP. <br />6. La POLÍTICA DE PRIVACIDAD podrá ser modificada de
          cuando en cuando (a todas ellas, en adelante, las “MODIFICACIONES”).
          En tales casos, INTERSEGURO le enviará un mensaje a través del correo
          que nos ha facilitado. A través de dicho mensaje usted podrá acceder y
          conocer íntegramente las MODIFICACIONES. Recomendamos que revise
          detenidamente y cuidadosamente las MODIFICACIONES. Usted es libre de
          aceptarlas o no aceptarlas. Sin embargo, en caso de que no aceptación,
          INTERSEGURO podría verse impedido de ejecutar el CONTRATO, si es que
          las MODIFICACIONES fueran necesarias para continuar con su ejecución.
          En tal caso, INTERSEGURO no asumirá ninguna responsabilidad derivada
          de la falta de asesoría o información. <br />7. Al usar la WEB o
          inclusive al sólo acceder a la página central de INTERSEGURO
          (www.interseguro.pe) usted acepta que se podrán instalar cookies en su
          ordenador o dispositivo. Estas pueden ser necesarias para recopilar
          información relevante para la ejecución del CONTRATO. Las cookies ya
          no continuarán con su finalidad al vencer el plazo por el cual
          INTERSEGURO almacenará sus DATOS PERSONALES. Sin embargo, en dicho
          momento, las cookies no se desinstalarán automáticamente, siendo usted
          el USUARIO el único y exclusivo responsable y encargado de la
          desinstalación. <br />8. La siguiente lista muestra las cookies de
          terceros que se podrían instalar, los fines para los que se utilizan y
          los enlaces a páginas web donde se puede encontrar más información
          sobre las mismas:
          <br />
          <br />
          <table class="tabla_modal" style="width: 100%;">
            <tbody>
              <tr>
                <td>Tipo de Cookie</td>
                <td>Proveedor o Titular</td>
                <td>Para qué se utiliza</td>
                <td>Enlace de Referencia</td>
              </tr>
              <tr>
                <td>Terceros</td>
                <td>Google Analytics</td>
                <td rowspan="2">
                  Se utiliza para almacenar información de navegación (tiempo de
                  conexión, sesiones con ID, tipo de dispositivo, navegador,
                  sistema operativo, etc.).
                </td>
                <td>https://analytics.google.com/</td>
              </tr>
              <tr>
                <td></td>
                <td>Facebook Pixel</td>

                <td>https://facebook.com</td>
              </tr>
            </tbody>
          </table>
          <br />9. INTERSEGURO no gestiona cookies de terceros ni es responsable
          de ellas ni del tratamiento de datos personales que realizan. Al
          aceptar los T&C, usted acepta la instalación de las cookies de
          terceros. Recomendamos enfáticamente revisar con detenimiento y
          cuidado los enlaces incluidos en el cuadro anterior, antes de aceptar
          el CONTRATO. <br />10. INTERSEGURO garantiza el respeto de los
          derechos de los titulares de los DATOS PERSONALES consagrados en la
          LPDP, con la finalidad de que puedan ser ejercidos de la manera más
          amplia y sin costo alguno. Para tal fin, el USUARIO deberá enviar una
          comunicación al correo servicios@interseguro.com.pe o en la dirección
          Av. Paseo de la Republica Nro. 3071, San Isidro que deberá incluir
          todo lo siguiente: a) Nombres y apellidos, documento de identidad y
          sexo del USUARIO (Si se actúa a través de un representante legal,
          deberá acreditarse los documentos que acrediten dicha representación);
          b) Pedido concreto; c) Domicilio o dirección electrónica a donde se
          deberá responder; d) Fecha y firma de quien envía la solicitud; e)
          Documentos que sustenten la petición, de ser el caso. <br />11.
          INTERSEGURO no realiza tratamiento de DATOS PERSONALES de menores de
          edad. Si el USUARIO es menor de edad, deberá obtener la autorización
          previa de su padre, madre, tutor o representante legal y enviarla
          previamente a INTERSEGURO de forma física para acreditar la existencia
          del consentimiento previo. <br />12. Resultan aplicables a esta
          POLÍTICA DE PRIVACIDAD, de manera supletoria y complementaria, las
          disposiciones de la LPDP.
          <br />
          <br />Última actualización de las Condiciones de Uso y Política de
          Privacidad: 22 de Mayo de 2019
          <br />
        </div>
      </div>
    </b-modal>

    <b-modal
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="modalInicioVigencia"
      id="modalInicioVigencia2"
    >
      <img
        src="./../../static/media/img/root/close.png"
        width="30"
        alt="icon close"
        class="modal-close"
        @click="hideModalInicioVigencia()"
      />

      <div class="modal-content fechaVigenciaCotizador">
        <p class="modal-titulo">¿Cuándo inicia tu Seguro?</p>

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
          <button
            class="btn  btn-principal  "
            @click="hideModalInicioVigencia()"
          >
            CONFIRMAR
          </button>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="v2modalGPS"
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="v2modalGPS"
    >
      <img
        src="./../../static/media/img/root/close.png"
        width="30"
        alt="icon close"
        class="modal-close"
        @click="hideModalGPS()"
      />
      <div class="v2modalGPS">
        <div class="v2modalGPS__header">
          <img
            src="./../../static/media/interseguroVehicular_v2/auto-gps.png"
            alt=""
          />
          <div class="texto-header">
            <p class="titulo">
              Tu {{ this.itemElegido.brand }} necesita un GPS, te ayudamos a
              contratarlo
            </p>
            <span class="descripcion">
              Por ser de Interseguro, podrás acceder a los mejores precios:
            </span>
          </div>
        </div>
        <div class="v2modalGPS__body">
          <div class="box-empresas">
            <div class="empresa-item">
              <div class="empresa-item__der">
                <img
                  src="./../../static/media/interseguroVehicular_v2/empresa.png"
                  alt=""
                />
                <span>Empresa:</span>
                <p>Protemax</p>
              </div>
              <div class="empresa-item__izq">
                <span>Precio:</span>
                <p>US$150</p>
                <!-- <span class="precio-antes">250</span> -->
                <span>Contacto:</span>
                <p>(01) 618 1900</p>
              </div>
            </div>

            <div class="empresa-item">
              <div class="empresa-item__der">
                <img
                  src="./../../static/media/interseguroVehicular_v2/empresa.png"
                  alt=""
                />
                <span>Empresa:</span>
                <p>Satellital Patrol</p>
              </div>
              <div class="empresa-item__izq">
                <span>Precio:</span>
                <p>US$177</p>
                <!-- <span class="precio-antes">250</span> -->
                <span>Contacto:</span>
                <p>(01) 620 1111</p>
              </div>
            </div>

            <div class="empresa-item">
              <div class="empresa-item__der">
                <img
                  src="./../../static/media/interseguroVehicular_v2/empresa.png"
                  alt=""
                />
                <span>Empresa:</span>
                <p>Tracklink Motor link</p>
              </div>
              <div class="empresa-item__izq">
                <span>Precio:</span>
                <p>US$165</p>
                <!-- <span class="precio-antes">250</span> -->
                <span>Contacto:</span>
                <p>(01) 630 7575</p>
              </div>
            </div>

            <div class="empresa-item">
              <div class="empresa-item__der">
                <img
                  src="./../../static/media/interseguroVehicular_v2/empresa.png"
                  alt=""
                />
                <span>Empresa:</span>
                <p>Prosegur</p>
              </div>
              <div class="empresa-item__izq">
                <span>Precio:</span>
                <p>US$199</p>
                <!-- <span class="precio-antes">250</span> -->
                <span>Contacto:</span>
                <p>(01) 513 8686</p>
              </div>
            </div>
          </div>
          <p class="finalizar-compra">
            Al finalizar la compra de tu Seguro Vehicular te ayudaremos con la
            compra de tu GPS.
          </p>
          <p class="tienes-gps">
            ¿Ya tienes un GPS activo?
          </p>
          <p class="certificado">
            Luego de la compra, envíanos el certificado.
          </p>
        </div>
        <div class="v2modalGPS__footer">
          <p>
            Tendrás 5 días para contratar tu GPS luego <br />
            de la compra del Seguro Vehicular, si no perderás la cobertura de
            Robo Total.
          </p>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="modalEntidadFinanciera2"
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="modalEntidadFinanciera2"
    >
      <img
        src="./../../static/media/img/root/close.png"
        width="30"
        alt="icon close"
        class="modal-close"
        @click="hidemodalEntidadFinanciera()"
      />
      <div
        class="box-mensajeEnviadoEndosar"
        v-bind:class="{
          mostrarMensajeEnviadoEndosar: mostrarMensajeEnviadoEndosar
        }"
      >
        <div class="endosar-item">
          <img
            width="80"
            class="check-enviado"
            src="./../../static/media/interseguroVehicular_v2/mensaje-enviado-cotizacion.png"
            alt=""
          />
          <p class="modal-titulo-endoso">
            Tu Seguro Vehicular se ha endosado correctamente al
            {{ this.endosoSeleccionado.name }}
          </p>
        </div>
      </div>

      <p class="modal-titulo">¿Dónde pediste tu crédito vehicular?</p>
      <div id="boxEndosoSesion" class="modalEntidadFinanciera  endosoSesion">
        <div v-for="(item, index) in listaNuevaDeEndoso" :key="index">
          <div v-on:click="setearEntidadFinanciera(item)">
            <div id="endosoSesionItem" class="endosoItem">
              <span
                name="parent"
                v-bind:id="'entidad-' + item.id"
                class="endosoUncheck"
                v-bind:class="{ checked: ischecked }"
              ></span>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="box-btns">
        <button
          class="btn  btn-principal  "
          @click="seleccionarEntidadFinanciera()"
        >
          CONFIRMAR Y ENDOSAR
        </button>
      </div>
    </b-modal>

    <!-- Modal de abandono  -->
    <!-- <b-modal id="leaveQuote" class="leaveModal" size="lg" static centered hide-footer hide-header>
      <b-container>
        <b-row class="justify-content-center">
          <b-col class="text-center mb-3" cols="12">
            <img src="../../static/media/modal/leave-cotiza.png" alt="Abandonar Seguro Vehicular">
          </b-col>
        </b-row>
        <b-row class="text-center">
          <b-col cols="12" class="mb-3">
            <h2><span>¿Aún lo estás pensando?</span></h2>
          </b-col>
          <b-col cols="12" class="mb-3">
            <h3 v-if="appDiscount == true">Protege tu {{this.itemElegido.brand}} con los mejores <br> precios, desde ${{this.listaBasica.policy.monthlyDiscount}}. </h3>
            <h3 v-else-if="this.nuevoProducto == true">Protege tu {{this.itemElegido.brand}} con los mejores <br> precios, desde ${{this.listaBasica.policy.monthlyCalculated}}. </h3>
            <h3 v-else>Protege tu {{this.itemElegido.brand}} con los mejores <br> precios, desde ${{this.listaBasica.policy.monthly}}. </h3>
          </b-col>
          <b-col cols="12" class="mb-2">
            <h3>Retoma tu cotización en cualquier momento</h3>
          </b-col>
          <b-col cols="12">
            <b-form-group>
              <b-form-input class="text-center" type="text" required v-model="email" placeholder="Ingresa tu correo electrónico"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col class="text-center mb-4" cols="12">
            <b-button @click="enviarMail()">ENVIAR COTIZACIÓN A MI CORREO</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal> -->

    <b-modal
      id="leaveQuote2"
      class="leaveModal"
      size="lg"
      static
      centered
      hide-footer
      hide-header
    >
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
              desde ${{ this.listaBasica.policy.monthlyDiscount }} y maneja
              seguro
            </h3>
            <h3 v-else-if="this.nuevoProducto == true">
              Elige un plan para tu {{ this.itemElegido.brand }} <br />
              desde ${{ this.listaBasica.policy.monthlyCalculated }} y maneja
              seguro
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
    </b-modal>

    <!-- <b-modal
        id="leaveQuote2"
        class="leaveModal"
        static
        centered
        hide-footer
        hide-header
      >
        <b-container>
          <b-row class="justify-content-center">
            <b-col class="text-center mb-3" cols="12">
              <img class="img-verano" width="100%"  src="./../../static/media/interseguroVehicular_v2/cuponazo.svg" alt="">
              <p class="mt-3">
                <strong style="color : #ffffff; font-size: 30px"> {{this.$store.state.common.objCliente.firstName}} </strong> <br> <br> 
               <span style="color : #ffffff; font-size: 18px">
                   ¡Aprovecha los últimos días de Cyber! Protege tu auto <span style="color: #FFDD36;">con 15% de dscto.</span> y llévate la <span style="color: #FFDD36;">2da cuota mensual gratis</span>
                </span>
              </p>
            </b-col>
          </b-row>
          
          <b-row class="justify-content-center">
            <b-col class="text-center mb-4" cols="12">
              <b-button @click="$nuxt.$emit('bv::hide::modal', 'leaveQuote2')"
                >TERMINAR COMPRA</b-button
              >
            </b-col>
          </b-row>
        </b-container>
      </b-modal> -->
  </section>
</template>

<script>
import moment from "moment/moment.js";

var fechaActual = new Date();
const state = {
  date: new Date(),
  disabledDates: {
    to: new Date(Date.now() - 8640000),
    from: new Date(fechaActual.getTime() + 7.884e9)
  }
};

export default {
  // layout: "InterseguroFlujo",
  data() {
    return {
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
        { value: null, text: "" },
        { value: "1", text: "Mensual" },
        { value: "2", text: "Trimestral" },
        { value: "3", text: "Anual" }
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
        sku: ""
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
        email: ""
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
        assignedPrice: null
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
          monthly: 0
        },
        deducible: 0,
        vehicle: {
          current: null,
          maximum: 0,
          minimum: 0
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
          monthlyAmount: 0
        }
      },
      listaBasica: {
        vehicle: {
          current: null,
          maximum: 0,
          minimum: 0,
          gps: ""
        },
        policy: {
          calculated: 0,
          annual: 0,
          quarterly: 0,
          monthly: 0,
          monthlyCalculated: 0
        },
        vehicle: {}
      },
      listaMedia: {
        vehicle: {
          current: null,
          maximum: 0,
          minimum: 0
        },
        policy: {
          calculated: 0,
          annual: 0,
          quarterly: 0,
          monthly: 0,
          monthlyCalculated: 0
        }
      },
      listaFull: {
        vehicle: {
          current: null,
          maximum: 0,
          minimum: 0
        },
        policy: {
          calculated: 0,
          annual: 0,
          quarterly: 0,
          monthly: 0,
          monthlyCalculated: 0
        }
      },
      clonado: {
        policy: {
          risk: "",
          calculated: 0,
          annual: 0,
          quarterly: 0,
          monthly: 0
        },
        deducible: 0,
        vehicle: {
          current: null,
          maximum: 0,
          minimum: 0
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
          monthlyAmount: 0
        }
      },

      /*************/
      activeBox_2: true,
      planSeleccionado: 3,

      isDisabled: false,
      objIBK: 0,
      /*FIN SEGUNDA PANTALLA */
      /*************************** */
      listBrands: {},
      listYears: {},
      listModels: {},

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
        name: ""
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
            utm: {}
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
            gps: ""
          },
          datosTitular: {
            numeroDocumento: "",
            nombre: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            correo: "",
            telefono: ""
          },
          remitente: {
            correoRemitente: "comunicaciones@interseguro.com.pe",
            correoRemitenteDisplay: "Interseguro"
          },
          datosPago: {
            idFrecuencia: "",
            fechaInicioSeguro: ""
          }
        }
      }
    };
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll);
      document.addEventListener("touchstart", this.handleScroll, {
        passive: true
      });
    }
    this.$store.dispatch("common/getBrand").then(res => {
      this.listBrands = res.data.body;
    });
    this.$store.dispatch("common/getYear").then(res => {
      this.listYears = res.data.body;
    });
    this.$store.dispatch("common/getFinancialInstitution").then(res => {
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
    Datepicker: () => import("vuejs-datepicker/dist/vuejs-datepicker")
  },
  computed: {
    classPlan: function() {
      return this.planSeleccionado == 4
        ? "planPlata"
        : this.planSeleccionado == 3
        ? "planBlack"
        : this.planSeleccionado == 6
        ? "planOro"
        : "planNoSeleccionado";
      // return "uno"
    },
    appDiscount: function() {
      let appDiscount = this.$store.state.common.appDiscount;
      // return appDiscount
      return false;
    },
    placaUppercase: function() {
      let placa = this.item.plateNumber.toUpperCase();
      return placa;
    },
    isMinimo: function() {
      let decimal = this.clonado.vehicle.minimum / 100;
      let minimo = Math.ceil(decimal) * 100;
      return minimo;
      // return minimo.toLocaleString();
    },
    isMaximo: function() {
      let decimal = this.clonado.vehicle.maximum / 100;
      let maximo = Math.floor(decimal) * 100;
      return maximo;
      // return maximo.toLocaleString();
    }
  },
  methods: {
    contador() {
      // var flipdown2 = new FlipDown(1617080399, 'contadorCyber5').start()
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
        let elemento1 = document.querySelectorAll(".v2-plan-item");
        for (let index = 0; index < elemento1.length; index++) {
          elemento1[index].classList.remove("planActivoDesktop");
        }
        setTimeout(() => {
          let arreglo = document.querySelectorAll(".plan" + id);
          for (let i = 0; i < arreglo.length; i++) {
            arreglo[i].classList.add("planActivoDesktop");
          }
          this.seleccionarFrecuencia();
        }, 250);
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
        this.cobertura_is.variant =
          "oro $" + this.listCotizacion.policy.monthly + "/mes";
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
      console.log(id);
      event.stopPropagation();
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

      if (document.location.hostname == "www.interseguro.pe") {
        fbq("track", "ViewContent", {
          content_type: "product",
          product: "segurovehicular",
          content_ids: this.code_sku,
          plan_seleccionado: this.$store.state.common.planSeleccionado,
          endoso: this.endosoSeleccionado.name,
          anio: this.objectVehicle.modelYear,
          suma_asegurada: this.$store.state.common.current
        });
      } else {
      }
      this.cotizador_datalayer("addToCart");
      this.$nuxt.$router.push("/cotizacion/documento");
    },
    getVehicle() {
      this.$store.dispatch("common/getVehicle", this.item).then(res => {
        setTimeout(() => {
          if (res.data.code == 0) {
            this.objectVehicle = res.data.body;
            this.$store.commit("common/setObjVehiculo", res.data.body);
            this.mostrarCapa = false;
          } else {
            let errorDetectado = {
              url: "getVehicle",
              page: 2,
              message: res.data.message,
              objEnviado: this.item
            };
            this.$store.dispatch("common/eventoErrores", errorDetectado);
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
        label: "Descargar app ahora"
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
          .then(res => {
            if (res.data.code == 0) {
              window.dataLayer = window.dataLayer || [];
              dataLayer.push({
                event: "cotizador_recibiras_msj_texto",
                category: "UI :: Cotizador :: Popup",
                action: "Descargar app ahora",
                label: "Popup descargar app"
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
          confirmButtonText: "OK"
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
        label: "Descargar app ahora"
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
        url = "/vehicular-app/cotiza/cotizacion/";
      } else if (this.$store.state.common.nuevoProducto == false) {
        url = "/vehicular/cotiza/cotizacion/";
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pagina_vista",
        "page-url": url,
        "page-title": "Cotizacion",
        datos_vehicular_encontrado: valor, // podria ser false
        ecommerce: {
          checkout: {
            actionField: { step: 2 } // esto marca el segubdo paso en el embudo
          }
        }
      });
    },
    cotizador_datalayer(evento) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: evento,
        product: this.cobertura_is
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

      let listaMarcas = this.listBrands.filter(item => {
        return item.group == 2;
      });
      listaMarcas.forEach(element => {
        if (element.name.charAt(0) == valor) {
          var resultado = listaMarcas.find(
            elemento => elemento.name.charAt(0) === valor + ""
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
          contactar_whatsapp: "ContactarCorreo"
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
        description: "Click en el boton de close en el header cotizador"
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
      this.activeBox_2 = true;
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
      this.activeBox_2 = true;

      if (this.$store.state.common.origenCliente == 2) {
        this.objectVehicle.modelId = -1;
        if (this.objectVehicle.modelId == -1) {
          this.objUtm = {
            "1": "utm_campaign=remarketingCN_SOAT_D_1",
            "2": "utm_campaign=remarketingCN_SOAT_D_2",
            "3": "utm_campaign=remarketingCN_SOAT_D_3",
            "4": "utm_campaign=remarketingCN_SOAT_D_4"
          };
          if (this.$store.state.common.businessId == 2) {
            this.objUtm = {
              "1": "utm_campaign=IBK_remarketingCN_SOAT_D_1",
              "2": "utm_campaign=IBK_remarketingCN_SOAT_D_2",
              "3": "utm_campaign=IBK_remarketingCN_SOAT_D_3",
              "4": "utm_campaign=IBK_remarketingCN_SOAT_D_4"
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
      // switch (this.itemElegido.brandId) {
      //   case 11:
      //     if (this.itemElegido.model.indexOf("AVEO") >= 0 ) {
      //       this.code_sku = "sku039"
      //     } else if(this.itemElegido.model.indexOf("CAPTIVA") >= 0 ) {
      //       this.code_sku = "sku040"
      //     }else if(this.itemElegido.model.indexOf("COBALT") >= 0 ) {
      //       this.code_sku = "sku041"
      //     }else if(this.itemElegido.model.indexOf("CRUZE") >= 0 ) {
      //       this.code_sku = "sku042"
      //     }else if(this.itemElegido.model.indexOf("EQUINOX") >= 0 ) {
      //       this.code_sku = "sku043"
      //     }else if(this.itemElegido.model.indexOf("SAIL") >= 0 ) {
      //       this.code_sku = "sku044"
      //     }else if(this.itemElegido.model.indexOf("SONIC") >= 0 ) {
      //       this.code_sku = "sku045"
      //     }else if(this.itemElegido.model.indexOf("SPARK") >= 0 ) {
      //       this.code_sku = "sku046"
      //     }else if(this.itemElegido.model.indexOf("PRISMA") >= 0 ) {
      //       this.code_sku = "sku047"
      //     }else if(this.itemElegido.model.indexOf("ASTRA ENJOY ") >= 0 ) {
      //       this.code_sku = "sku099"
      //     }else if(this.itemElegido.model.indexOf("COLORADO ") >= 0 ) {
      //       this.code_sku = "sku100"
      //     }else if(this.itemElegido.model.indexOf("LUV D-MAX") >= 0 ) {
      //       this.code_sku = "sku101"
      //     }else if(this.itemElegido.model.indexOf("N300") >= 0 ) {
      //       this.code_sku = "sku102"
      //     }else if(this.itemElegido.model.indexOf("N400") >= 0 ) {
      //       this.code_sku = "sku103"
      //     }else if(this.itemElegido.model.indexOf("ONIX") >= 0 ) {
      //       this.code_sku = "sku104"
      //     }else if(this.itemElegido.model.indexOf("OPTRA") >= 0 ) {
      //       this.code_sku = "sku105"
      //     }else if(this.itemElegido.model.indexOf("ORLANDO") >= 0 ) {
      //       this.code_sku = "sku106"
      //     }else if(this.itemElegido.model.indexOf("TRACKER") >= 0 ) {
      //       this.code_sku = "sku107"
      //     }else if(this.itemElegido.model.indexOf("TRAVERSE") >= 0 ) {
      //       this.code_sku = "sku108"
      //     }else if(this.itemElegido.model.indexOf("SPIN") >= 0 ) {
      //       this.code_sku = "sku109"
      //     }else if(this.itemElegido.model.indexOf("SUBURBAN") >= 0 ) {
      //       this.code_sku = "sku110"
      //     }else if(this.itemElegido.model.indexOf("TRAIBLAZER") >= 0 ) {
      //       this.code_sku = "sku111"
      //     }else if(this.itemElegido.model.indexOf("TAHOE") >= 0 ) {
      //       this.code_sku = "sku112"
      //     }else if(this.itemElegido.model.indexOf("SILVERADO") >= 0 ) {
      //       this.code_sku = "sku113"
      //     }else if(this.itemElegido.model.indexOf("GROOVE") >= 0 ) {
      //       this.code_sku = "sku114"
      //     }else if(this.itemElegido.model.indexOf("MALIBU") >= 0 ) {
      //       this.code_sku = "sku115"
      //     }else if(this.itemElegido.model.indexOf("VIVANT") >= 0 ) {
      //       this.code_sku = "sku116"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;
      //   case 32:
      //     if (this.itemElegido.model.indexOf("ACCEN") >= 0 ) {
      //       this.code_sku = "sku001"
      //     } else if(this.itemElegido.model.indexOf("CRETA") >= 0 ) {
      //       this.code_sku = "sku002"
      //     }else if(this.itemElegido.model.indexOf("ELANTRA") >= 0 ) {
      //       this.code_sku = "sku003"
      //     }else if(this.itemElegido.model.indexOf("GRAN") >= 0 ) {
      //       this.code_sku = "sku004"
      //     }else if(this.itemElegido.model.indexOf("I20") >= 0 ) {
      //       this.code_sku = "sku005"
      //     }else if(this.itemElegido.model.indexOf("NEW") >= 0 ) {
      //       this.code_sku = "sku006"
      //     }else if(this.itemElegido.model.indexOf("TUCSON") >= 0 ) {
      //       this.code_sku = "sku007"
      //     }else if(this.itemElegido.model.indexOf("SANTA FE") >= 0 ) {
      //       this.code_sku = "sku018"
      //     }else if(this.itemElegido.model.indexOf("ATOS") >= 0 ) {
      //       this.code_sku = "sku070"
      //     }else if(this.itemElegido.model.indexOf("AVANTE") >= 0 ) {
      //       this.code_sku = "sku071"
      //     }else if(this.itemElegido.model.indexOf("AZERA") >= 0 ) {
      //       this.code_sku = "sku072"
      //     }else if(this.itemElegido.model.indexOf("COUPE") >= 0 ) {
      //       this.code_sku = "sku073"
      //     }else if(this.itemElegido.model.indexOf("EON") >= 0 ) {
      //       this.code_sku = "sku074"
      //     }else if(this.itemElegido.model.indexOf("EQUUS") >= 0 ) {
      //       this.code_sku = "sku075"
      //     }else if(this.itemElegido.model.indexOf("H-1") >= 0 ) {
      //       this.code_sku = "sku076"
      //     }else if(this.itemElegido.model.indexOf("H-100") >= 0 ) {
      //       this.code_sku = "sku077"
      //     }else if(this.itemElegido.model.indexOf("I10") >= 0 ) {
      //       this.code_sku = "sku078"
      //     }else if(this.itemElegido.model.indexOf("I30") >= 0 ) {
      //       this.code_sku = "sku079"
      //     }else if(this.itemElegido.model.indexOf("I40") >= 0 ) {
      //       this.code_sku = "sku080"
      //     }else if(this.itemElegido.model.indexOf("SONATA") >= 0 ) {
      //       this.code_sku = "sku081"
      //     }else if(this.itemElegido.model.indexOf("VELOSTER") >= 0 ) {
      //       this.code_sku = "sku082"
      //     }else if(this.itemElegido.model.indexOf("VENUE") >= 0 ) {
      //       this.code_sku = "sku083"
      //     }else if(this.itemElegido.model.indexOf("VERACRUZ") >= 0 ) {
      //       this.code_sku = "sku084"
      //     }else if(this.itemElegido.model.indexOf("VERNA") >= 0 ) {
      //       this.code_sku = "sku05"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;

      //   case 39:
      //     if (this.itemElegido.model.indexOf("PICANTO") >= 0 ) {
      //       this.code_sku = "sku008"
      //     } else if(this.itemElegido.model.indexOf("RIO") >= 0 ) {
      //       this.code_sku = "sku009"
      //     }else if(this.itemElegido.model.indexOf("SPORTAGE") >= 0 ) {
      //       this.code_sku = "sku010"
      //     }else if(this.itemElegido.model.indexOf("CARENS") >= 0 ) {
      //       this.code_sku = "sku019"
      //     }else if(this.itemElegido.model.indexOf("SORENTO") >= 0 ) {
      //       this.code_sku = "sku020"
      //     }else if(this.itemElegido.model.indexOf("CADENZA") >= 0 ) {
      //       this.code_sku = "sku086"
      //     }else if(this.itemElegido.model.indexOf("CARNIVAL") >= 0 ) {
      //       this.code_sku = "sku087"
      //     }else if(this.itemElegido.model.indexOf("CERATO") >= 0 ) {
      //       this.code_sku = "sku088"
      //     }else if(this.itemElegido.model.indexOf("FORTE") >= 0 ) {
      //       this.code_sku = "sku089"
      //     }else if(this.itemElegido.model.indexOf("GRAND CARNIVAL") >= 0 ) {
      //       this.code_sku = "sku090"
      //     }else if(this.itemElegido.model.indexOf("K2") >= 0 ) {
      //       this.code_sku = "sku091"
      //     }else if(this.itemElegido.model.indexOf("K5") >= 0 ) {
      //       this.code_sku = "sku092"
      //     }else if(this.itemElegido.model.indexOf("MOHAVE") >= 0 ) {
      //       this.code_sku = "sku093"
      //     }else if(this.itemElegido.model.indexOf("OPTIMA") >= 0 ) {
      //       this.code_sku = "sku094"
      //     }else if(this.itemElegido.model.indexOf("QUORIS") >= 0 ) {
      //       this.code_sku = "sku095"
      //     }else if(this.itemElegido.model.indexOf("SELTOS") >= 0 ) {
      //       this.code_sku = "sku096"
      //     }else if(this.itemElegido.model.indexOf("SOLUTO") >= 0 ) {
      //       this.code_sku = "sku097"
      //     }else if(this.itemElegido.model.indexOf("SOUL") >= 0 ) {
      //       this.code_sku = "sku098"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }

      //     break;
      //   case 62:
      //     if (this.itemElegido.model.indexOf("YARIS") >= 0 ) {
      //       this.code_sku = "sku011"
      //     }else if(this.itemElegido.model.indexOf("COROLLA") >= 0 ) {
      //       this.code_sku = "sku021"
      //     }else if(this.itemElegido.model.indexOf("HILUX") >= 0 ) {
      //       this.code_sku = "sku022"
      //     }else if(this.itemElegido.model.indexOf("AVANZA") >= 0 ) {
      //       this.code_sku = "sku023"
      //     }else if(this.itemElegido.model.indexOf("4RUNNER") >= 0 ) {
      //       this.code_sku = "sku048"
      //     }else if(this.itemElegido.model.indexOf("AURIS") >= 0 ) {
      //       this.code_sku = "sku049"
      //     }else if(this.itemElegido.model.indexOf("AVENSIS") >= 0 ) {
      //       this.code_sku = "sku050"
      //     }else if(this.itemElegido.model.indexOf("CAMRY") >= 0 ) {
      //       this.code_sku = "sku051"
      //     }else if(this.itemElegido.model.indexOf("FJ CRUISER") >= 0 ) {
      //       this.code_sku = "sku052"
      //     }else if(this.itemElegido.model.indexOf("RAV4") >= 0 ) {
      //       this.code_sku = "sku053"
      //     }else if(this.itemElegido.model.indexOf("PRIUS") >= 0 ) {
      //       this.code_sku = "sku054"
      //     }else if(this.itemElegido.model.indexOf("RUSH") >= 0 ) {
      //       this.code_sku = "sku055"
      //     }else if(this.itemElegido.model.indexOf("86 GT") >= 0 ) {
      //       this.code_sku = "sku061"
      //     }else if(this.itemElegido.model.indexOf("AGYA") >= 0 ) {
      //       this.code_sku = "sku062"
      //     }else if(this.itemElegido.model.indexOf("ETIOS") >= 0 ) {
      //       this.code_sku = "sku063"
      //     }else if(this.itemElegido.model.indexOf("FORTUNER") >= 0 ) {
      //       this.code_sku = "sku064"
      //     }else if(this.itemElegido.model.indexOf("HIACE COMMUTER") >= 0 ) {
      //       this.code_sku = "sku065"
      //     }else if(this.itemElegido.model.indexOf("HIACE PANEL") >= 0 ) {
      //       this.code_sku = "sku065"
      //     }else if(this.itemElegido.model.indexOf("HIGHLANDER") >= 0 ) {
      //       this.code_sku = "sku066"
      //     }else if(this.itemElegido.model.indexOf("LAND CRUISER") >= 0 ) {
      //       this.code_sku = "sku067"
      //     }else if(this.itemElegido.model.indexOf("URBAN CRUISER 1.3") >= 0 ) {
      //       this.code_sku = "sku068"
      //     }else if(this.itemElegido.model.indexOf("ZELAS") >= 0 ) {
      //       this.code_sku = "sku069"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }

      //     break;
      //   case 64:
      //     if (this.itemElegido.model.indexOf("XC") >= 0 ) {
      //       this.code_sku = "sku026"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;
      //   case 30:
      //     if (this.itemElegido.model.indexOf("PILOT") >= 0 ) {
      //       this.code_sku = "sku027"
      //     }else if(this.itemElegido.model.indexOf("WR-V") >= 0 ) {
      //       this.code_sku = "sku028"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;
      //   case 61:
      //     if (this.itemElegido.model.indexOf("SWIFT") >= 0 ) {
      //       this.code_sku = "sku012"
      //     }else if(this.itemElegido.model.indexOf("SX4") >= 0 ) {
      //       this.code_sku = "sku024"
      //     }else if(this.itemElegido.model.indexOf("ALTO") >= 0 ) {
      //       this.code_sku = "sku117"
      //     }else if(this.itemElegido.model.indexOf("APV ") >= 0 ) {
      //       this.code_sku = "sku118"
      //     }else if(this.itemElegido.model.indexOf("BALENO") >= 0 ) {
      //       this.code_sku = "sku119"
      //     }else if(this.itemElegido.model.indexOf("CIAZ") >= 0 ) {
      //       this.code_sku = "sku120"
      //     }else if(this.itemElegido.model.indexOf("GRAND NOMADE") >= 0 ) {
      //       this.code_sku = "sku121"
      //     }else if(this.itemElegido.model.indexOf("GRAND VITARA") >= 0 ) {
      //       this.code_sku = "sku122"
      //     }else if(this.itemElegido.model.indexOf("IGNIS") >= 0 ) {
      //       this.code_sku = "sku123"
      //     }else if(this.itemElegido.model.indexOf("JIMNY") >= 0 ) {
      //       this.code_sku = "sku124"
      //     }else if(this.itemElegido.model.indexOf("KIZASHI") >= 0 ) {
      //       this.code_sku = "sku125"
      //     }else if(this.itemElegido.model.indexOf("S-CROSS") >= 0 ) {
      //       this.code_sku = "sku126"
      //     }else if(this.itemElegido.model.indexOf("S-Presso") >= 0 ) {
      //       this.code_sku = "sku127"
      //     }else if(this.itemElegido.model.indexOf("VITARA") >= 0 ) {
      //       this.code_sku = "sku128"
      //     }else if(this.itemElegido.model.indexOf("XL-7") >= 0 ) {
      //       this.code_sku = "sku129"
      //     }else if(this.itemElegido.model.indexOf("CELERIO 1.0") >= 0 ) {
      //       this.code_sku = "sku130"
      //     }else if(this.itemElegido.model.indexOf("ERTIGA") >= 0 ) {
      //       this.code_sku = "sku131"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;
      //   case 63:
      //     if (this.itemElegido.model.indexOf("GOL") >= 0 ) {
      //       this.code_sku = "sku029"
      //     }else if(this.itemElegido.model.indexOf("GOLF") >= 0 ) {
      //       this.code_sku = "sku030"
      //     }else if(this.itemElegido.model.indexOf("T-CROSS") >= 0 ) {
      //       this.code_sku = "sku031"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;
      //   case 8:
      //     if (this.itemElegido.model.indexOf("CS") >= 0 ) {
      //       this.code_sku = "sku032"
      //     }else if(this.itemElegido.model.indexOf("GRAND VAN") >= 0 ) {
      //       this.code_sku = "sku033"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;
      //   case 49:
      //     if (this.itemElegido.model.indexOf("ASX") >= 0 ) {
      //       this.code_sku = "sku013"
      //     }else if(this.itemElegido.model.indexOf("OUTLANDER") >= 0 ) {
      //       this.code_sku = "sku025"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;
      //   case 45:
      //     if (this.itemElegido.model.indexOf("CX") >= 0 ) {
      //       this.code_sku = "sku014"
      //     } else if(this.itemElegido.model.indexOf("MAZDA") >= 0 ) {
      //       this.code_sku = "sku015"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;
      //   case 33:
      //     if (this.itemElegido.model.indexOf("S2") >= 0 ) {
      //       this.code_sku = "sku035"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;
      //   case 54:
      //     if (this.itemElegido.model.indexOf("SANDERO") >= 0 ) {
      //       this.code_sku = "sku036"
      //     }else if(this.itemElegido.model.indexOf("DUSTER") >= 0 ) {
      //       this.code_sku = "sku142"
      //     }else if(this.itemElegido.model.indexOf("DUSTER OROCH") >= 0 ) {
      //       this.code_sku = "sku143"
      //     }else if(this.itemElegido.model.indexOf("KOLEOS") >= 0 ) {
      //       this.code_sku = "sku144"
      //     }else if(this.itemElegido.model.indexOf("LOGAN") >= 0 ) {
      //       this.code_sku = "sku145"
      //     }else if(this.itemElegido.model.indexOf("GRAND SCENIC") >= 0 ) {
      //       this.code_sku = "sku146"
      //     }else if(this.itemElegido.model.indexOf("FLUENCE 2.0") >= 0 ) {
      //       this.code_sku = "sku147"
      //     }else if(this.itemElegido.model.indexOf("CAPTUR") >= 0 ) {
      //       this.code_sku = "sku148"
      //     }else if(this.itemElegido.model.indexOf("KANGOO EXPRESS 1.9D RL") >= 0 ) {
      //       this.code_sku = "sku149"
      //     }else if(this.itemElegido.model.indexOf("MEGANE II") >= 0 ) {
      //       this.code_sku = "sku150"
      //     }else if(this.itemElegido.model.indexOf("MEGANE RS 2.0TURBO") >= 0 ) {
      //       this.code_sku = "sku151"
      //     }else if(this.itemElegido.model.indexOf("KWID") >= 0 ) {
      //       this.code_sku = "sku152"
      //     }else if(this.itemElegido.model.indexOf("STEPWAY 1.6") >= 0 ) {
      //       this.code_sku = "sku153"
      //     }else if(this.itemElegido.model.indexOf("SYMBOL 1.6") >= 0 ) {
      //       this.code_sku = "sku154"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;
      //   case 35:
      //     if (this.itemElegido.model.indexOf("KONECT") >= 0 ) {
      //       this.code_sku = "sku037"
      //     }else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;

      //   case 50:
      //     if (this.itemElegido.model.indexOf("TIIDA") >= 0 ) {
      //       this.code_sku = "sku015"
      //     } else if(this.itemElegido.model.indexOf("VERSA") >= 0 ) {
      //       this.code_sku = "sku016"
      //     }else if(this.itemElegido.model.indexOf("X-TRAIL") >= 0 ) {
      //       this.code_sku = "sku034"
      //     }else if(this.itemElegido.model.indexOf("FRONTIER") >= 0 ) {
      //       this.code_sku = "sku056"
      //     }else if(this.itemElegido.model.indexOf("NAVARA") >= 0 ) {
      //       this.code_sku = "sku057"
      //     }else if(this.itemElegido.model.indexOf("PATROL") >= 0 ) {
      //       this.code_sku = "sku058"
      //     }else if(this.itemElegido.model.indexOf("QASHQAI") >= 0 ) {
      //       this.code_sku = "sku059"
      //     }else if(this.itemElegido.model.indexOf("PATHFINDER") >= 0 ) {
      //       this.code_sku = "sku132"
      //     }else if(this.itemElegido.model.indexOf("MARCH") >= 0 ) {
      //       this.code_sku = "sku133"
      //     }else if(this.itemElegido.model.indexOf("V16 1.6") >= 0 ) {
      //       this.code_sku = "sku134"
      //     }else if(this.itemElegido.model.indexOf("JUKE") >= 0 ) {
      //       this.code_sku = "sku135"
      //     }else if(this.itemElegido.model.indexOf("ALMERA") >= 0 ) {
      //       this.code_sku = "sku136"
      //     }else if(this.itemElegido.model.indexOf("ALMERA") >= 0 ) {
      //       this.code_sku = "sku137"
      //     }else if(this.itemElegido.model.indexOf("MURANO") >= 0 ) {
      //       this.code_sku = "sku138"
      //     }else if(this.itemElegido.model.indexOf("KICKS") >= 0 ) {
      //       this.code_sku = "sku139"
      //     }else if(this.itemElegido.model.indexOf("TEANA") >= 0 ) {
      //       this.code_sku = "sku140"
      //     }else if(this.itemElegido.model.indexOf("URVAN") >= 0 ) {
      //       this.code_sku = "sku141"
      //     }else if(this.itemElegido.model.indexOf("SENTRA") >= 0 ) {
      //       this.code_sku = "sku060"
      //     } else{
      //       this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     }
      //     break;
      //   default:
      //     this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
      //     break
      // }
      this.$store.commit("common/setCode_sku", this.code_sku);
      // if (this.$store.state.common.origenCliente == 2) {
      //   this.objectVehicle.modelId = -1;
      //   if (this.objectVehicle.modelId == -1) {
      //     this.objUtm = {
      //       "1": "utm_campaign=remarketingCN_SOAT_D_1",
      //       "2": "utm_campaign=remarketingCN_SOAT_D_2",
      //       "3": "utm_campaign=remarketingCN_SOAT_D_3",
      //       "4": "utm_campaign=remarketingCN_SOAT_D_4"
      //     };
      //     if(this.$store.state.common.businessId == 2){
      //       this.objUtm = {
      //         "1": "utm_campaign=IBK_remarketingCN_SOAT_D_1",
      //         "2": "utm_campaign=IBK_remarketingCN_SOAT_D_2",
      //         "3": "utm_campaign=IBK_remarketingCN_SOAT_D_3",
      //         "4": "utm_campaign=IBK_remarketingCN_SOAT_D_4"
      //       }
      //     }
      //     this.remarketingv2(this.objSOAT.emailAddress != null ? this.objSOAT.emailAddress.toLowerCase(): "",0)
      //   }

      // } else if (this.$store.state.common.origenCliente == 1) {
      // }

      this.activeBox_1 = true;
      this.activeBox_2 = false;

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
        uso: "Particular" // uso - string
      });
    },
    maximoImg() {
      if (this.clonado.vehicle.maximum > this.listCotizacion.vehicle.current) {
        this.maximoImgDisabled = false;
        this.minimoImgDisabled = false;
        this.listCotizacion.vehicle.current =
          this.listCotizacion.vehicle.current + 100;
        this.cambioInput();
      } else {
        this.maximoImgDisabled = true;
      }
    },
    minimoImg() {
      if (this.clonado.vehicle.minimum < this.listCotizacion.vehicle.current) {
        this.minimoImgDisabled = false;
        this.maximoImgDisabled = false;
        this.listCotizacion.vehicle.current =
          this.listCotizacion.vehicle.current - 100;
        this.cambioInput();
      } else {
        this.minimoImgDisabled = true;
      }
    },
    cambioInput(evt) {
      if (this.listCotizacion.vehicle.current > this.clonado.vehicle.maximum) {
        this.listCotizacion.vehicle.current = this.clonado.vehicle.maximum;
      } else if (
        this.listCotizacion.vehicle.current < this.clonado.vehicle.minimum
      ) {
        this.listCotizacion.vehicle.current = this.clonado.vehicle.minimum;
      } else {
        this.$store.commit(
          "common/setCurrent",
          this.listCotizacion.vehicle.current
        );
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
      this.$store
        .dispatch("common/createVehicle", this.itemElegido)
        .then(res => {
          if (res.data.code == 0) {
            this.itemElegido.assignedPrice = null;
            this.clonado.vehicle.current = null;
            this.getCotizacion();
          } else {
            let errorDetectado = {
              url: "createVehicle",
              page: 2,
              message: res.data.message,
              objEnviado: this.itemElegido
            };
            this.$store.dispatch("common/eventoErrores", errorDetectado);
          }
        });
    },
    updateVehicle() {
      this.$store
        .dispatch("common/updateVehicle", this.itemElegido)
        .then(res => {
          if (res.data.code == 0) {
            this.itemElegido.assignedPrice = null;
            this.clonado.vehicle.current = null;
            this.getCotizacion();
          } else {
            let errorDetectado = {
              url: "updateVehicle",
              page: 2,
              message: res.data.message,
              objEnviado: this.itemElegido
            };
            this.$store.dispatch("common/eventoErrores", errorDetectado);
          }
        });
    },
    getCotizacion() {
      this.$store
        .dispatch("common/getCotizacion", this.itemElegido)
        .then(res => {
          if (res.data.code == 0) {
            this.listCotizacionTotal = res.data.body;
            this.listaBasica = res.data.body.basic;
            this.listaMedia = res.data.body.medium;
            this.listaFull = res.data.body.allRisk;
            this.listCotizacion = res.data.body.allRisk;
            this.clonado = Object.assign({}, this.listCotizacion);
            this.$store.commit(
              "common/setCurrent",
              this.listCotizacion.vehicle.current
            );
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
            let errorDetectado = {
              url: "getcotizacion",
              page: 2,
              message: res.data.message,
              objEnviado: this.itemElegido
            };
            this.$store.dispatch("common/eventoErrores", errorDetectado);
            this.$swal({
              title: "Oops...",
              text: res.data.message,
              type: "error",
              showCancelButton: false,
              confirmButtonColor: "#2177CC",
              confirmButtonText: "OK"
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
              confirmButtonText: "OK"
            }).then(function() {
              window.dataLayer = window.dataLayer || [];
              dataLayer.push({
                event: "placa_rechazada",
                category: "UI: Cotizador error",
                action: "error",
                label: "error en el servicio"
              });
              goToVehicular();
            });
          } else {
            let errorDetectado = {
              url: "getcotizacion",
              page: 2,
              message: res.data.message,
              objEnviado: this.itemElegido
            };
            this.$store.dispatch("common/eventoErrores", errorDetectado);

            this.$swal({
              title: "Oops...",
              text: res.data.message,
              type: "error",
              showCancelButton: false,
              confirmButtonColor: "#2177CC",
              confirmButtonText: "OK"
            });
          }
        });
    },
    getModelLocal() {
      this.$store
        .dispatch("common/getModelLocal", this.itemElegido)
        .then(res => {
          if (res.data.code == 0) {
            this.listModels = res.data.body;
          } else {
            let errorDetectado = {
              url: "getModelLocal",
              page: 2,
              message: res.data.message,
              objEnviado: this.itemElegido
            };
            this.$store.dispatch("common/eventoErrores", errorDetectado);
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
        label: "Tu auto necesita GPS"
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
      }, 5000);
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
      let entidadFinanciera = JSON.parse(
        localStorage.getItem("financialInstitution")
      );
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
      if (
        document
          .getElementById("entidad-" + item.id)
          .classList.contains("ischecked")
      ) {
        document
          .getElementById("entidad-" + item.id)
          .classList.remove("ischecked");
        this.$store.commit("common/setEntidadFinanciera", { id: 0, name: "" });

        this.endosoSeleccionado = 0;
        if (this.planSeleccionado == 3) {
          this.$store.commit("common/setPlanSeleccionado", 3);
          this.$store.commit("common/setEntidadFinanciera", {
            id: 0,
            name: ""
          });
        }
      } else {
        let ipt_general = document.getElementsByClassName("ischecked");
        for (let i = 0; i < ipt_general.length; i++) {
          ipt_general[i].classList.remove("ischecked");
        }
        document
          .getElementById("entidad-" + item.id)
          .classList.add("ischecked");
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

        this.$store.commit(
          "common/setEmail",
          this.email.trim().replace(/ /g, "")
        );
        this.objUtm = {
          "1": "utm_campaign=remarketingSN_1",
          "2": "utm_campaign=remarketingSN_2",
          "3": "utm_campaign=remarketingSN_3",
          "4": "utm_campaign=remarketingSN_4"
        };
        if (this.$store.state.common.businessId == 2) {
          this.objUtm = {
            "1": "utm_campaign=IBK_remarketingSN_1",
            "2": "utm_campaign=IBK_remarketingSN_2",
            "3": "utm_campaign=IBK_remarketingSN_3",
            "4": "utm_campaign=IBK_remarketingSN_4"
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
          "1": "00-ibk-dias.html",
          "2": "03-ibk-dias.html",
          "3": "07-ibk-dias.html",
          "4": "15-ibk-dias.html"
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
            utm: this.objUtm
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
            nuevoProducto: this.$store.state.common.nuevoProducto
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
            origenDatos: this.$store.state.common.origenCliente
          },
          remitente: {
            correoRemitente: "comunicaciones@interseguro.com.pe",
            correoRemitenteDisplay: "Interseguro"
          },
          datosPago: {
            idFrecuencia: "",
            fechaInicioSeguro: ""
          }
        }
      };
      this.$store
        .dispatch("common/sendRemarketing", this.objRemarketing)
        .then(res => {
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
        .then(res => {
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
    }
  },

  mounted: function() {
    this.getCotizacion();
    this.urlpdf = require("./../../static/media/documentos/resumenCoberturas.pdf");
    this.selected = this.$store.state.common.frecuenciaPago;
    this.nuevoProducto = this.$store.state.common.nuevoProducto;
    this.itemElegido.discountType = this.$store.state.common.discountType;

    this.objSOAT = this.$store.state.common.clienteSOAT;
    this.fechaVigencia = this.$store.state.common.fechaVigencia;
    if (this.$store.state.common.cuentasueldo == "Y") {
      this.discountType = "cta-sueldo";
    } else if (this.$store.state.common.tarjetaoh == "Y") {
      this.discountType = "tarjeta-oh";
    } else {
      this.discountType = "";
    }
    if (
      this.fechaVigencia == null ||
      this.fechaVigencia == "null" ||
      this.fechaVigencia == ""
    ) {
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
        this.$store.commit(
          "common/setEntidadFinanciera",
          this.endosoSeleccionado
        );
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
  },
  destroyed() {
    if (process.browser) {
      document.removeEventListener("mouseleave", this.mouseLeave, {
        passive: true
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
