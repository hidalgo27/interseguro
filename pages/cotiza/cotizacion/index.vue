<template>
  <section class="page-cotizador"  @click="clickIngresaLetra($event)"  v-bind:class="{'pt-sinBlack':this.$store.state.common.flagCloseListon == 0}">
    <div class="capaOculta" v-bind:class="{mostrarCapa: mostrarCapa}">
      <clip-loader class="cliploader  clipgss" :loading="loadinggss" :color="color" :size="size"></clip-loader>
    </div>
    <div class="capaOcultaGris" @click="clickCapaGris" v-bind:class="{mostrarCapaGris: mostrarCapaGris}">
    </div>
    
    <b-container class="contenedor-personalizado  " >
      <b-row>
        <b-col cols="12" xl="12" class="m-auto">
            <div class="box-steps">
              <ul class="steps" style="display:inline-flex">
                <template>
                  <router-link class="steps__item " to="/cotiza/cotizacion"   style="cursor: auto;"><li></li></router-link>
                </template>              
                <template >
                  <span v-if="documento_steps2 != null" class="steps__item " @click="continuar" style="cursor: pointer;"></span>
                  <router-link v-else class="steps__item " to="/cotiza/cotizacion" style="cursor: auto;"><li></li></router-link>
                </template>
                <template >
                  <router-link  class="steps__item   steps--active  paso1" to="/cotiza/cotizacion"><li></li></router-link>                
                </template>                              
                  <li class="steps--progressBar"></li>                
              </ul>
            </div> 
        </b-col>  
      </b-row>  

     

    </b-container>

    <b-container class="contenedor-personalizado cotizador-2021">
      <b-row class="justify-content-center" style="position: relative;">
        <b-container >
          <b-row class="d-flex justify-content-center" >
            
            <b-col cols="11" lg="7" class="h-auto">   
              <div class="d-block  d-lg-none"  v-bind:class="{ocultarItemsSeleccionados: ocultarItemsSeleccionados}">
                
                <div class="itemElegido" v-bind:class="{mostrarItemMarca: mostrarItemMarca}">
                  <span>{{this.itemElegido.brand }}</span>
                  <div class="box-close" @click="closeMarca()"><img src="../../../static/v2_icon/close_bold.png" alt="x"></div>
                </div>
                <div class="itemElegido" v-bind:class="{mostrarItemAnio: mostrarItemAnio}">
                  <span>{{this.itemElegido.year }}</span>
                  <div class="box-close" @click="closeAnio()" ><img src="../../../static/v2_icon/close_bold.png" alt="x"></div>
                </div>
                <div class="itemElegido" v-bind:class="{mostrarItemModelo: mostrarItemModelo}">
                  <span>{{this.itemElegido.model }}</span>
                  <div class="box-close" @click="closeModelo()"><img  src="../../../static/v2_icon/close_bold.png" alt="x"></div>
                </div>
              </div>  

              <div class="activador  d-none  d-lg-block"  v-if="activeBox_2">
                <div class="itemElegido" v-bind:class="{mostrarItemMarca: mostrarItemMarca}">
                  <span>{{this.itemElegido.brand }}</span>
                  <div class="box-close" @click="closeMarca()"><img src="../../../static/v2_icon/close_bold.png" alt="x"></div>
                </div>
                <div class="itemElegido" v-bind:class="{mostrarItemAnio: mostrarItemAnio}">
                  <span>{{this.itemElegido.year }}</span>
                  <div class="box-close" @click="closeAnio()" ><img src="../../../static/v2_icon/close_bold.png" alt="x"></div>
                </div>
                <div class="itemElegido" v-bind:class="{mostrarItemModelo: mostrarItemModelo}">
                  <span>{{this.itemElegido.model }}</span>
                  <div class="box-close" @click="closeModelo()"><img  src="../../../static/v2_icon/close_bold.png" alt="x"></div>
                </div>
              </div>

              <div class="listas">
                <div class="lista1" v-bind:class="{mostrarListaMarca: mostrarListaMarca}">
                  

                  <p class="listas--titulo ">
                      Selecciona la marca
                    </p>
                  <div class="listas--box">
                    <div  class="item" v-for="(item, index) in listBrands" :key="index">                      
                      <p v-if="item.name == '----'" class="guiones" style="cursor: auto;">--------------</p>
                      <p :id="item.name" v-else @click="seleccionaMarca(item)">{{item.name}}</p>
                    </div>  
                  </div>
                  <div class="inputMarcaHide">
                    <input autocomplete="off" id="ingresaLetraMarca" class="ingresaLetraMarca" type="text" autofocus @keypress="detectarkey($event)">        
                  </div> 
                    
                </div>

                <div class="lista2" v-bind:class="{mostrarListaAnio: mostrarListaAnio}">
                    <p class="listas--titulo  mt-3  mb-3"> 
                      Seleciona el año
                    </p>
                    <div class="listas--box">
                      <div class="item" v-for="(item, index) in listYears" :key="index">                    
                        <p @click="seleccionaAnio(item)">{{item.name}}</p>
                      </div>
                  </div>             
                </div>

                <div class="lista2" v-bind:class="{mostrarListaModelo: mostrarListaModelo}">
                    <p class="listas--titulo   mt-3  mb-3">
                      Seleciona el modelo
                    </p>
                    <div class="listas--box">
                      <div class="item" v-for="(item, index) in listModels" :key="index">                    
                        <p @click="seleccionaModelo(item)">{{item.name}}</p>
                      </div>                 
                    </div> 
                </div>

              </div>
            </b-col>
          </b-row>
        </b-container>

        <!-- *************************************************************************************************** -->
        <!-- *******************************  COTIZADOR NUEVO  ***************************************** -->
        <!-- *************************************************************************************************** -->

      <b-container  v-bind:class="{activeBox_2: activeBox_2}" >
        <b-row class="justify-content-center  justify-content-md-start">
          <b-col xs="12"  md="6" lg="6"  class="order-md-2 d-lg-flex  justify-content-lg-end"  >
            <div class="v2-datos-carro">
              <div class="v2-carro-editar">
                <span class="v2-datos-editar">Datos de mi carro</span>                
              </div>
              <div class="v2-datos-carro__detalle">
                
                <div class="v2-datos-carro__detalle--placa">
                  <p>Mi placa </p>
                  <p class="campo">{{this.placaUppercase}}</p>
                </div>
                <div class="v2-datos-carro__detalle--modelo">
                  <p style="position: relative;">Mi modelo <img class="v2-editar" @click="resetearVehiculo()" src="./../../../static/media/interseguroVehicular_v2/editar.png" alt=""> </p>
                  <p class="mi-modelo-descripcion  campo">
                    {{this.itemElegido.brand }} {{this.itemElegido.model }} {{this.itemElegido.year }} 
                    
                  </p>
                </div>
              </div>
            </div>
          </b-col>

          <b-col xs="12" md="6" lg="6" class="order-md-1">
            <div class="v2-suma-asegurada">
              <div class="d-flex align-items-center      justify-content-center  justify-content-lg-start" style="padding: 42px 0 28px;">
               <span class="v2-suma-asegurada--titulo  mr-2"> Elige tu suma asegurada</span>
                <span @click="showSumaAseguradaMobile" class="tooltip-icon  d-md-none">?</span>
                <span @click="showSumaAseguradaDesktop" class="tooltip-icon  d-none  d-md-inline-flex">
                  ?
                  <div class="tooltip-suma-aseguradaDesktop" v-bind:class="{'d-flex' : activarTooltipDesktop}">
                    <div class="item">
                      <p class="tooltip-titulo">¿Qué es suma segurada?</p>
                        <p class="tooltip-descripcion">
                          Es el límite máximo de indemnización que te pagaremos en caso tengas un siniestro.
                           Generalmente este monto es el mismo o es muy cercano al valor comercial de tu carro. 

                          <strong>
                            ¡Ajústalo y mira cómo cambia el precio!
                          </strong>
                        </p>
                    </div>
                  </div>
                </span>
              </div>
              <div class="v2-valor-comercial">
                
                <!-- <div class="minimoImg" @click="minimoImg"><span>-</span></div> -->
                <button class="minimoImg" @click="minimoImg"  v-bind:class="{minimoImgDisabled : minimoImgDisabled}" :disabled="minimoImgDisabled">
                  <span>-</span>
                </button>
                  <div class="box-input" v-if="listCotizacion">
                    <div class="flotante-moneda">US$</div>
                    <b-form-input class="e-range" step="100" v-model="listCotizacion.vehicle.current" type="text" :min="isMinimo" :max="isMaximo" @change="cambioInput()"></b-form-input> 
                  </div>
                <button class="maximoImg" @click="maximoImg"  v-bind:class="{maximoImgDisabled : maximoImgDisabled}" :disabled="maximoImgDisabled">
                  <span>+</span>
                </button>
                <!-- <div class="maximoImg" @click="maximoImg"  v-bind:class="{maximoImgDisabled : maximoImgDisabled}"><span>+</span></div> -->
                <div class="tooltip-suma-asegurada" v-bind:class="{'d-flex' : activarTooltip}">
                  <div class="item">
                    <p class="tooltip-titulo">¿Qué es suma segurada?</p>
                      <p class="tooltip-descripcion">
                        Es el límite máximo de indemnización que te pagaremos en caso tengas un siniestro.
                           Generalmente este monto es el mismo o es muy cercano al valor comercial de tu carro. 

                          <strong>
                            ¡Ajústalo y mira cómo cambia el precio!
                          </strong>
                      </p>
                  </div>
                </div>
              </div>
              <div class="v2-valores-minimo-maximo">
                Mín: US$ {{listCotizacion.vehicle.minimum}}. / Máx: US$ {{listCotizacion.vehicle.maximum}}
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
                <div class="col-lg-6  d-none  d-lg-flex  align-items-center  justify-content-end">
                  <div class="fecha">                    
                    <div @click="showModalInicioVigencia()">
                      Fecha de inicio:
                        <span style="display: inline-block; line-height: 1; outline: none; color: #007bff;  line-height: 1;" >                      
                            <span class="detalle-enlace"  style="cursor: pointer; position: relative;" v-if="this.fechaVigencia != ''" >
                                {{this.fechaVigencia}}
                            </span>
                            <span style="cursor: pointer;" v-else >
                                Cambiar
                            </span>                                        
                        </span>
                    </div>
                  </div>
                  <div class="mail-fecha  mail-cotizador  m-0  ml-3" @click="showModalEnviarEmail()">                  
                    <span class="enviar-cotizacion">Enviar cotización</span>
                                  
                  </div> 
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
                                <span class="monto">{{this.monto_pagar_plata}}</span>
                            </div>
                            <p class="antes">Antes US${{this.monto_antes_plata}}</p>
                        </div>
                        <div class="v2-detalle-plan__box-frecuencia  select">
                          <b-form-select @change="seleccionarFrecuencia()" v-model="selected" :options="options"></b-form-select>
                        </div>
                      </div>
                      <div class="dto-cotizador">
                        <div class="flotante-dcto">
                         10%
                        </div>
                      </div>
                      <div class="box-importante">
                        <p class="titulo"  v-if="this.listaBasica.vehicle.gps == 'Y'">Importante</p>
                        <ul>
                          <li class="detalle-item">
                            <div class="item    pb-3">
                                <span  v-if="this.listaBasica.vehicle.gps == 'Y'" @click="showModalGPS()"> 
                                  <span class="mb-0 gps requiere-gps"  >
                                    <span class="symbol-point">&#11044;</span>Tu auto necesita GPS: <a class="detalle-enlace" href="javascript:void(0);">{{this.listaBasica.vehicle.gps == "Y" ? "Ver más" : "NO" }}</a>                                
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
                        <p class="que-me-cubre__item" >
                          Central de emergencias
                        </p>
                        <p class="que-me-cubre__item" >
                          Responsabilidad Civil
                        </p>
                        <p class="que-me-cubre__item" >
                          Robo total
                        </p>
                        <p class="titulo  mt-4  mb-2   no-incluye-titulo">
                          Este plan no incluye:
                        </p>
                        <p class="que-me-cubre__item   no-incluye" >
                          Pérdida parcial por accidente
                        </p>
                        <p class="que-me-cubre__item   no-incluye" >
                          Accidentes de ocupantes
                        </p>
                        <p class="que-me-cubre__item   no-incluye" >
                          Accesorios musicales
                        </p>
                        <p class="que-me-cubre__item   no-incluye" >
                          Rotura de lunas
                        </p>
                        <p class="que-me-cubre__item   no-incluye" >
                          Desastres naturales, vandalismo, incendios.
                        </p>
                        <p class="que-me-cubre__item   no-incluye" >
                          Pérdida total por accidente
                        </p>
                        <p class="que-me-cubre__item   no-incluye" >
                          Ausencia de control*
                        </p>
                      </div>
                      <div class="item-inferior">
                        <div class="descargar-detalle">
                          <!-- <a target="_blank" rel="noopener" v-bind:href="Condicionado_Particular">Descargar detalle de cobertura</a> -->
                          
                          <a v-bind:href="urlpdf" target="_blank" rel="noopener" >Descargar detalle de cobertura</a>
                        </div>
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
                                <span class="monto">{{this.monto_pagar_oro}}</span>
                            </div>
                            <p class="antes">Antes US${{this.monto_antes_oro}}</p>
                        </div>
                        <div class="v2-detalle-plan__box-frecuencia  select">
                          <b-form-select @change="seleccionarFrecuencia()" v-model="selected" :options="options"></b-form-select>
                        </div>
                      </div>
                      <div class="dto-cotizador">
                        <div class="flotante-dcto">
                         10%
                        </div>
                      </div>
                      <div class="box-importante">
                        <p class="titulo"  v-if="this.listaBasica.vehicle.gps == 'Y'">Importante</p>
                        <ul>
                          <li class="detalle-item">
                            <div class="item    pb-3">
                                <span  v-if="this.listaBasica.vehicle.gps == 'Y'" @click="showModalGPS()"> 
                                  <span class="mb-0 gps requiere-gps"  >
                                    <span class="symbol-point">&#11044;</span>Tu auto necesita GPS: <a class="detalle-enlace" href="javascript:void(0);">{{this.listaBasica.vehicle.gps == "Y" ? "Ver más" : "NO" }}</a>                                
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
                        <p class="titulo  mt-4  mb-2  no-incluye-titulo">
                          Este plan no incluye:
                        </p>
                        <p class="que-me-cubre__item    no-incluye" >
                          Accesorios musicales
                        </p>
                        <p class="que-me-cubre__item    no-incluye" >
                          Rotura de lunas
                        </p>
                        <p class="que-me-cubre__item    no-incluye" >
                          Desastres naturales, vandalismo, incendios.
                        </p>
                        <p class="que-me-cubre__item    no-incluye" >
                          Pérdida total por accidente
                        </p>
                        <p class="que-me-cubre__item    no-incluye" >
                          Ausencia de control*
                        </p>
                      </div>
                      <div class="item-inferior">
                        <div class="descargar-detalle">
                          <!-- <a target="_blank" rel="noopener" v-bind:href="Condicionado_Particular">Descargar detalle de cobertura</a> -->
                          <a v-bind:href="urlpdf" target="_blank" rel="noopener" >Descargar detalle de cobertura</a>
                        </div>
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
                                <span class="monto">{{this.monto_pagar_black}}</span>
                            </div>
                            <p class="antes">Antes US${{this.monto_antes_black}}</p>
                        </div>
                        <div class="v2-detalle-plan__box-frecuencia  select">
                          <b-form-select @change="seleccionarFrecuencia()" v-model="selected" :options="options"></b-form-select>
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
                              <p style="width: 208px;"><span class="symbol-point">&#11044;</span>Endosa tu crédito vehicular </p>
                              <p class="endozar-poliza  text-right"   style="width: auto;">
                                  <template v-if="this.endosoSeleccionado.id == 0">                          
                                    <span style="display: inline-block; cursor:outline: none;  pointer; text-align: left;"
                                      class="detalle-enlace"
                                      v-b-modal.modalEntidadFinanciera2
                                      @click="clickEnlace('entidad Financiera')"
                                      >Aquí
                                      </span>  
                                  </template>
                                  <template v-else>                         
                                    <span  style="display: inline-block;  outline: none;  line-height: 1; padding-bottom: 4px; cursor: pointer;"
                                    class="detalle-enlace"
                                        
                                        v-b-modal.modalEntidadFinanciera2
                                        @click="clickEnlace('entidad Financiera')"
                                    > {{this.endosoSeleccionado.name}}</span>   
                                  </template>
                              </p>
                            </div>
                          </li>
                          <li class="detalle-item">
                            <div class="item    pb-3">
                                <span href="javascript:void(0);" v-if="this.listaBasica.vehicle.gps == 'Y'" @click="showModalGPS()"> 
                                  <span class="mb-0 gps requiere-gps"  >
                                    <span class="symbol-point">&#11044;</span>Tu auto necesita GPS: <a class="detalle-enlace" href="javascript:void(0);">{{this.listaBasica.vehicle.gps == "Y" ? "Ver más" : "NO" }}</a>                                
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
                        <div class="descargar-detalle">
                          <a v-bind:href="urlpdf" target="_blank" rel="noopener" >Descargar detalle de cobertura</a>
                        </div>
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
                  <p>US$ {{this.listaBasica.policy.monthly}}</p>
                </div>
                <div class="v2-seleccion-planes__item planorito  plan6  oro" @click="seleccionarPLan(6)" v-bind:class="{planInactivo: planInactivo}">
                  <p>ORO</p>
                  <p>US$ {{this.listaMedia.policy.monthly}}</p>
                </div>
                <div class="v2-seleccion-planes__item  plan3  black" @click="seleccionarPLan(3)" v-bind:class="{planInactivo: planInactivo}">
                  <p>BLACK</p>
                  <p>US$ {{this.listaFull.policy.monthly}}</p>
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
                  <div class="v2-detalle-plan__box-frecuencia  select">
                    <b-form-select @change="seleccionarFrecuencia()" v-model="selected" :options="options"></b-form-select>
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
                      <div class="detalle-item" v-if="this.$store.state.common.planSeleccionado == 3 || this.$store.state.common.planSeleccionado == 10">
                        <p style="width: 208px;"><span class="symbol-point">&#11044;</span>Endosa tu crédito vehicular </p>
                        <p class="endozar-poliza  text-right"   style="width: auto;">
                            <template v-if="this.endosoSeleccionado.id == 0">                          
                              <span style="display: inline-block; outline: none;  cursor: pointer; text-align: left;"
                                class="detalle-enlace"
                                v-b-modal.modalEntidadFinanciera2
                                @click="clickEnlace('entidad Financiera')"
                                >Aquí
                                </span>  
                            </template>
                            <template v-else>                         
                              <span  style="display: inline-block;  outline: none;  line-height: 1; padding-bottom: 4px; cursor: pointer;"
                                class="detalle-enlace"
                                v-b-modal.modalEntidadFinanciera2
                                @click="clickEnlace('entidad Financiera')"
                              > {{this.endosoSeleccionado.name}}</span>   
                            </template>
                        </p>
                      </div>
                    </li>
                    <li class="detalle-item">
                      <div class="item    pb-3">
                          <span href="javascript:void(0);" v-if="this.listaBasica.vehicle.gps == 'Y'" @click="showModalGPS()"> 
                            <span class="mb-0 gps requiere-gps"  >
                              <span class="symbol-point">&#11044;</span>Tu auto necesita GPS: <a class="detalle-enlace" href="javascript:void(0);">{{this.listaBasica.vehicle.gps == "Y" ? "Ver más" : "NO" }}</a>                                
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
                <div class="descargar-detalle">
                  <a v-bind:href="urlpdf" target="_blank" rel="noopener" >Descargar detalle de cobertura</a>
                </div>
                <div class="d-flex   d-lg-none">
                  <div class="mail-fecha  mail-cotizador"  @click="showModalEnviarEmail()">                  
                    <span class="enviar-cotizacion">Enviar cotización</span>                                     
                  </div> 
                </div>
                <div class="d-flex   d-lg-none">
                  <div class="mail-fecha  boton-fecha"  @click="showModalInicioVigencia()">                  
                      <div class="detalle-item">
                        <p> Fecha de inicio:</p>
                        <p>
                            <span style="display: inline-block; line-height: 1; outline: none; color: #007bff;  line-height: 1;" >                      
                                <span class="detalle-enlace"  style="cursor: pointer; position: relative;" v-if="this.fechaVigencia != ''" >
                                    {{this.fechaVigencia}}
                                </span>
                                <span style="cursor: pointer;" v-else >
                                    Cambiar
                                </span>                                        
                            </span>
                        </p>
                    </div>
                  </div> 
                </div>
              </div>

              <div class="v2-comparar-planes  d-lg-none">
                <span @click="showModalCompararPlanes()"><img src="../../../static/media/img/comparar-planes.png"  class="mr-2" alt="B">COMPARAR PLANES</span> 
              </div>
              <div id="btnirapagar" class="box-btn " v-bind:class="{'opacityNone': opacityNone}">
                  <b-button  class="continuar  d-lg-none" @click="continuar($event, planSeleccionado)">CONTINUAR</b-button>
              </div>
              <div class="box-btns-fixed  box-btn " v-bind:class="{'d-none': opacityNone}">
                  <!-- <div class="flotante-covid-boton  d-md-none" v-if="flotanteCovid"  style="position: relative;">
                    <img
                      @click="hideFlotante()"
                      src="./../../../static/media/img/root/close.png"
                      width="50"
                      alt="icon close"
                      class="img-close "
                    />
                    <router-link to="/tyc"><img src="./../../../static/media/interseguroVehicular_v2/segunda-cuota.svg" alt=""></router-link>
                    <div class="box-contador" >
                      <div  class="example  d-md-flex">
                          <div id="contadorCyber5" class="flipdown">
                              
                          </div> 
                      </div>
                    </div>
                  </div> -->
                  <b-button class="continuar  d-lg-none mt-2" @click="continuar($event, planSeleccionado)">CONTINUAR</b-button>
              </div>
            </div>
            


          </b-col>
        </b-row>
        
        <b-row>

        </b-row>
      </b-container>


        <!-- *************************************************************************************************** -->
        <!-- *******************************  COTIZADOR NUEVO  ******************************************* -->
        <!-- *************************************************************************************************** -->

      </b-row>
    </b-container>
    <b-modal id="leaveBlackWeek" class=" modal-blackWeek"  static centered hide-footer hide-header>
            <b-container  style="height: 100%;">
                <b-row class="align-items-center" style="height: 100%;">
                    <b-col cols="12">
                        <div class="banner-modal">
                            <img src="./../../../static/media/img/campania/img-modal.svg" alt="">
                        </div>
                    </b-col>                  
                    <b-col cols="12" class="mb-2">
                        <p>Aprovecha esta oferta y participa en el <br> sorteo de  <strong>2 Smart TV 50" <br> y 3 Nintendo Switch + 2 juegos </strong></p>
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
            src="./../../../static/media/img/root/close.png"
            width="30"
            alt="icon close"
            class="modal-close"
        />
         <div class="box-mensajeEnviadoCotizacion" v-bind:class="{mostrarMensajeEnviadoCotizacion : mostrarMensajeEnviadoCotizacion}">
            <img width="80" class="check-enviado" src="./../../../static/media/interseguroVehicular_v2/mail.png" alt="">
            <p class="modal-titulo  modal-titulo-enviado"><strong>Hemos enviado tu cotización a tu correo. </strong> <br> No lo dudes y compra hoy al precio más bajo. </p>
          </div>

        <div class="modalEnviarEmail">
            <p class="modal-titulo">Recibe tu cotización en tu correo</p>
            
            <div class="fechaCotizador">
                <b-form-input id="input-small" placeholder="Ejem. lperez@gmail.com"  v-model="email"></b-form-input>
            </div>
            <div class="box-btns">
                <button class="btn  btn-principal  " @click="enviarMail()">ENVIAR</button>
            </div>
        </div>
    </b-modal>
    

      <div id="imagePhone" style="display:none" >
        <div class="phoneContent">
                 <a class="phoneS" style="color : #5b85c5" href="tel:015000000">
                  <img src="../../../static/media/interseguroVehicular_v2/telefono.svg" alt="telefono">
                 </a>
          </div>
      
                Tenemos problemas para cotizar tu placa. Por favor 
                 ponte en contacto con nosotros llamando al   
                 <a style="color : #5b85c5" href="tel:015000000">(01)500-0000</a>
                 y te ayudamos a seguir con la cotización.

        </div>
    
      <b-modal title="Bootstrap-Vue"
          hide-footer
          hide-header
          ref="modalCompararPlanes"
          id="modalCompararPlanes">
        <div class="modalCompararPlanes">
            <img class="modal-close" width="40" src="./../../../static/media/img/root/close.png" alt="" @click="hideModalCompararPlanes()">
            <div class="modal-body">
              <p class="mb-4  modal-titulo">COMPARAR PLANES</p>
              <table class="table-planes">
                <tbody>
                  <tr>
                    <td class="w180px" style="display: inline;">
                      </td>
                    <td class="table-planes__titulo  table-planes__robo"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">
                      <span class="plan-tab  plata">PLATA</span></td>
                    <td class="table-planes__titulo  table-planes__semifull"><span class="plan-tab  oro">ORO</span></td>
                    <td class="table-planes__titulo  table-planes__full"><span class="plan-tab  black">BLACK</span></td>
                  </tr>
                  <tr>
                    <td class="w180px">Responsabilidad Civil</td>
                    <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">&#x2714;	</td>
                    <td class="check-table">&#x2714;	</td>
                    <td class="check-table" style="color:#EA0F90">&#x2714;	</td>
                  </tr>
                  <tr>
                    <td class="w180px">Robo Total</td>
                    <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">&#x2714;	</td>
                    <td class="check-table">&#x2714;	</td>
                    <td class="check-table"  style="color:#EA0F90">&#x2714;	</td>
                  </tr>
                  <tr>
                    <td class="w180px">Pérdida Parcial <br> por Choque</td>
                    <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                    <td class="check-table">&#x2714;	</td>
                    <td class="check-table" style="color:#EA0F90">&#x2714;	</td>
                  </tr>
                  <tr>
                    <td class="w180px">Accidente de <br> Ocupantes</td>
                    <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                    <td class="check-table">&#x2714;	</td>
                    <td class="check-table" style="color:#EA0F90">&#x2714;	</td>
                  </tr>
                  <tr>
                    <td class="w180px">Pérdida total por  <br> Accidentes de tránsito</td>
                    <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                    <td class="check-table">	</td>
                    <td class="check-table" style="color:#EA0F90">&#x2714;	</td>
                  </tr>
                  <!-- <tr>
                    <td class="w180px">Accesorios Adicionales</td>
                    <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                    <td class="check-table">	</td>
                    <td class="check-table" style="color:#EA0F90">&#x2714;	</td>
                  </tr> -->
                  <tr>
                    <td class="w180px">Rotura de Lunas</td>
                    <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                    <td class="check-table">	</td>
                    <td class="check-table" style="color:#EA0F90">&#x2714;	</td>
                  </tr>
                  <tr>
                    <td class="w180px">Riesgos de naturaleza, vandalismo, incendios</td>
                    <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                    <td class="check-table">	</td>
                    <td class="check-table" style="color:#EA0F90">&#x2714;	</td>
                  </tr>
                  <tr>
                    <td class="w180px">Ausencia de Control <br>
                    <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                    <td class="check-table">	</td>
                    <td class="check-table" style="color:#EA0F90">&#x2714;	</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </b-modal>



   <b-modal title="Bootstrap-Vue"
          hide-footer
          hide-header
          ref="modalNumeroCelular"
          id="modalNumeroCelular">
        <div class="modal-content modal-root">
            <div class="modal-body">
              
              <div class="box-mensajeEnviado" v-bind:class="{mostrarMensajeEnviado : mostrarMensajeEnviado}">
                <img class="check-enviado" src="./../../../static/media/img/root/check.png" alt="">
                <p>¡Listo! En breve recibirás el link de descarga al <span>{{this.inputNumeroCelular}}</span></p>
              </div>                
                <div class="box-img">
                  <img width="100" src="./../../../static/media/img/root/descarga_modal.png" alt="">
                </div>
                <div class="box-titulo">
                  <p class="titulo">Recibe el link de descarga a tu celular</p>
                </div>
                <div class="box-input">
                  <b-form-input class="telefono" type="tel" maxlength="9" v-model="inputNumeroCelular" :placeholder="placeholderNumeroCelular"></b-form-input>
                  <span class="enviar" @click="enviarNumeroCelular()">Enviar</span>
                </div>
                <div class="condiciones">
                  <span>Al continuar acepto las <span class="enlaceTerminosCondiciones" @click="showModalTerminosCondiciones()">Condiciones de Uso y Política de Privacidad.</span></span>
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
            src="./../../../static/media/img/root/close.png"
            width="50"
            alt="icon close"
            class="img-close-modal "
          />
        <div class="modal-head">
          <div class="box-titulo">
            <p class>Paga hasta 50% menos <br> en tu Seguro Vehicular</p>
            <span>Según tu forma de conducir</span>
          </div>
          <div class="modal-divider"></div>
        </div>
        <div class="modal-body">
          <div class="modal-body__item">
            <div class="box-img">
              <img src="./../../../static/media/img/root/descarga.png" alt="pasos gps" />
            </div>
            <div class="box-descripcion">
              <p class="titulo">Descarga el app</p>
              <p class="desc"> Ahora tú tienes el control. 
                  Comienza en un minuto. </p>
            </div>
          </div>
          <div class="modal-body__item">
            <div class="box-img">
              <img src="./../../../static/media/img/root/maneja.png" alt="pasos gps" />
            </div>
            <div class="box-descripcion">
              <p  class="titulo">Manejo tu carro</p>
              <p class="desc">Vamos a medir tu habilidad 
                de manejo desde el app. </p>
            </div>
          </div>
          <div class="modal-body__item ">
            <div class="box-img">
              <img src="./../../../static/media/img/root/ahorra.png" alt="pasos gps" />
            </div>
            <div class="box-descripcion">
              <p  class="titulo">Ahorra</p>
              <p class="desc">
                Recibe tu cotización, 
                elige tu plan y ¡estás protegido! 
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
                >DESCARGAR APP AHORA</button>
                <button
                  type="submit"
                  :disabled="isDisabled"
                  @click="showModalNumeroCelular($event)"
                  class="btn box-btn__button  d-none d-xl-block"
                  style="animation: none"
                >DESCARGAR APP AHORA</button>
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
        <img class="close-modal" src="./../../../static/media/img/root/close.png" alt="" @click="hidemodalTerminosCondiciones()">
        <div class="modal-head">
          <div class="modal-divider"></div>
        </div>

        <div class="modal-description">
          <br>
          <h4 class="text-center">CONDICIONES DE USO Y POLÍTICA DE PRIVACIDAD</h4>
          <p
            style="border: 1px solid #666; padding: 12px;"
          >RECOMENDAMOS ENFÁTICAMENTE LEER ÍNTEGRAMENTE ESTE DOCUMENTO ANTES DE ACEPTARLO.</p>
          <span>Con este documento manifiesta usted que ha sido informado por INTERSEGURO COMPAÑÍA DE SEGUROS S.A respecto a lo siguiente:
            <br>
          </span>
          <br>1. Finalidad del tratamiento de sus datos personales.
          <br>2. Quiénes son o pueden ser los destinatarios de sus datos personales.
          <br>3. Existencia del banco de datos en que se almacenarán, así como la identidad y domicilio de su titular.
          <br>4. De ser el caso, del o de los encargados del tratamiento de sus datos personales.
          <br>5. El carácter obligatorio o facultativo de sus respuestas al formulario que se le proponga, en especial en cuanto a los datos sensibles.
          <br>6. La transferencia de sus datos personales.
          <br>7. Las consecuencias de proporcionar sus datos personales y de su negativa a hacerlo.
          <br>8. El tiempo durante el cual se conservan sus datos personales.
          <br>9. La posibilidad de ejercer los derechos que la ley le concede y los medios previstos para ello.
          <br>
          <br>
          <p class="text-center">QUÉ SON LAS CONDICIONES DE USO Y POLÍTICA DE PRIVACIDAD</p>

          <br>Las Condiciones de Uso y Política de Privacidad constituyen un contrato entre INTERSEGURO COMPAÑÍA DE SEGUROS S.A (En adelante “INTERSEGURO”) y el USUARIO.
          <br>
          <br>Las Condiciones de Uso y Política de Privacidad (en adelante, el “CONTRATO”) regulan las condiciones en que INTERSEGURO brindará información, enviará publicidad y orientará al USUARIO, de manera general, sobre sus productos y servicios actuales y futuros; y los productos y servicios actuales y futuros de las empresas de su grupo económico.
          <br>
          <br>El CONTRATO parte de la premisa de que usted, como USUARIO, se encuentra interesado en conocer y recibir información de los productos y servicios de INTERSEGURO y de las empresas de su grupo. Este interés se entenderá existente y manifestado por usted cuando acepte el CONTRATO y se comunique con nosotros a través de los formularios disponibles en los enlaces para los cuales resulta aplicable el CONTRATO. Por lo tanto, la aceptación de estas Condiciones de Uso y Política de Privacidad significará para todo efecto la formalización del CONTRATO entre el USUARIO e INTERSEGURO en los términos y alcances en que en este documento se describen.
          <br>
          <br>El CONTRATO es a título gratuito. INTERSEGURO no cobrará ni recibirá ninguna suma de dinero ni contraprestación material.
          <br>
          <br>El CONTRATO es un contrato de adhesión. Sus términos no son negociables. Pero el USUARIO tiene plena e irrestricta libertad de aceptarlo o rechazarlo en su integridad.
          <br>
          <br>El CONTRATO no obliga a contratar un producto o servicio por parte del USUARIO.
          <br>La POLÍTICA DE PRIVACIDAD que se encuentra en el apartado IV del CONTRATO y que forma parte integrante del CONTRATO establece los alcances y límites del tratamiento de datos personales que INTERSEGURO necesita realizar para ejecutar el CONTRATO y con posterioridad a su vigencia. Por lo tanto, dicho tratamiento de datos personales resulta esencial para tal ejecución. Al aceptar el CONTRATO, el USUARIO consentirá la realización de dicho tratamiento.
          <br>
          <br>
          <h4
            class="text-center"
          >REQUISITOS ESENCIALES PARA PODER ACEPTAR LAS CONDICIONES DE USO Y POLÍTICA DE PRIVACIDAD.</h4>
          <br>
          <span>Es requisito esencial para aceptar este CONTRATO que el USUARIO cumpla con los siguientes requisitos, debiendo abstenerse de aceptarlos si es que no reúne cualquiera o todos ellos:</span>
          <br>
          <br>1. Es mayor de edad, de acuerdo con la LEY o tiene capacidad civil suficiente conforme a la LEY, para emitir una manifestación y declaración de voluntad sin vicio que afecte su razonamiento y entendimiento.
          <br>2. Es hábil en el idioma español.
          <br>3. Ha leído íntegramente los T&C.
          <br>4. En caso de actuar como representante de un tercero, actúa y declara contando con legitimidad y facultades suficientes conforme a LEY.
          <br>
          <br>
          <br>INTERSEGURO, actuando con buena fe, parte de la premisa y presunción de que el USUARIO cumple con todas estas exigencias. Si no fuese así, el USUARIO será único, exclusivo y total responsable de cualquier riesgo o perjuicio que se cause a INTERSEGURO, al GRUPO o a terceros derivados del incumplimiento de estos requisitos, o actuando en ausencia de cualquiera de ellos.
          <br>
          <br>
          <h4 class="text-center">I. GLOSARIO</h4>Los siguientes términos, sea en plural o singular, tendrán el siguiente significado en el CONTRATO:
          <br>

          <br>1. BANCO DE DATO: Alude al banco de datos personales USUARIOS DE LA PAGINA WEB de titularidad de Interseguro que se encuentra debidamente registrado en el Registro Nacional de Datos Personales del Ministerio de Justicia, en donde se almacenará los DATOS PERSONALES.
          <br>2. CONTRATO: Significa el acuerdo de voluntades celebrada entre el USUARIO e INTERSEGURO y formalizado a través de la aceptación de las Condiciones de Uso y Política de Privacidad.
          <br>3. DATOS PERSONALES: Son los siguientes: a) Nombres y apellidos; b) N° DNI; c) Dirección del domicilio; d) Teléfono; e) Dirección de correo electrónico; f) Carné de Extranjería; g) Estado Civil; h) Fecha de Nacimiento; i) Número de tarjeta; j) Fecha de Vencimiento; k) CVV.
          <br>4. GRUPO: Se refiere, conjuntamente a todas las empresas del grupo económico INTERCORP, que son: Interbank, Interfondos, Intercorp Financial Services, Financiera Oh!, Inteligo SAB y las que se encuentren en el siguiente enlace http://www.intercorp.com.pe/empresas.html, cuyo número podría variar a futuro.
          <br>5. INTERSEGURO: Significa INTERSEGURO COMPAÑÍA DE SEGUROS S.A., identificado con R.U.C. N° 20382748566, con domicilio para todos los efectos legales en Avenida Javier Prado Este Nro 492, Interior 2601, Distrito San Isidro, Provincia Lima y Departamento de Lima, inscrita en la Partida Electrónica N° 11020565 del Registro de Personas Jurídicas de la Oficina Registral de Lima y Callao.
          <br>6. LEY: Ordenamiento jurídico de la República del Perú.
          <br>7. LPDP: Significa, conjuntamente, la Ley 29733, Ley de Protección de Datos Personales, su reglamento, el Decreto Supremo 003-2013-JUS, las disposiciones normativas que de cuando en cuando las modifiquen y cualquier disposición normativa del ordenamiento jurídico peruano que regule la materia de tratamiento de datos personales en la República del Perú.
          8. PARTES: Se refiere conjuntamente a INTERSEGURO y al USUARIO.
          <br>9. POLÍTICA DE PRIVACIDAD: Apartado IV del presente documento, que representa la forma en que INTERSEGURO realiza el tratamiento de sus DATOS PERSONALES.
          <br>10. PRODUCTOS Y SERVICIOS: Cualquier y todos los productos y/o servicios ofrecidos o comercializados por INTERSEGURO y/o por las empresas que conforman el GRUPO. Con fines meramente enunciativos, los PRODUCTOS Y SERVICIOS de INTERSEGURO comprenden el Seguro Obligatorio de Accidentes de Tránsito, Pólizas de Vida Individual, Pólizas de Rentas Vitalicias, Pólizas de Seguro Vehicular, Pólizas de Seguro de Viaje, entre otros.
          <br>11. USUARIO: Persona natural que accede, hace uso o se comunica con INTERSEGURO a través de cualquiera de los URL a las que hace referencia el término WEB.
          <br>12. WEB: Alude de modo general a la página web principal de INTERSEGURO https://www.interseguro.pe y a todas las páginas relacionadas a ésta, como subdominios o relacionadas al dominio principal. No incluye el Libro de Reclamaciones virtual de INTERSEGURO.
          <br>
          <br>
          <br>
          <H4 class="text-center">II. FINALIDAD DEL CONTRATO</H4>El CONTRATO tiene como finalidades:
          <br>

          <br>1. Facilitar el intercambio de comunicaciones entre INTERSEGURO y el USUARIO para recibir y/o brindar información, orientación, asesoría y publicidad sobre los PRODUCTOS Y SERVICIOS de INTERSEGURO y los de productos y servicios del GRUPO, tanto los actuales como los que se creen u ofrezcan a futuro.
          <br>2. Regular los derechos y compromisos de cada una de las PARTES en la ejecución del CONTRATO.
          <br>3. Establecer los alcances y límites del tratamiento de los DATOS PERSONALES necesarios para la ejecución de la presente relación contractual.
          <br>
          <br>
          <H4>III. SOBRE LAS COMUNICACIONES CON OCASIÓN DEL CONTRATO</H4>
          <br>Con miras a ejecutar las finalidades del CONTRATO, INTERSEGURO podrá y se encuentra autorizado, en relación a todas las WEB, para:
          <br>

          <br>1. Brindar información, asesoría y orientación al USUARIO sobre los PRODUCTOS Y SERVICIOS, tanto actuales como futuros.
          <br>2. Gestionar y coordinar visitas o reuniones entre el USUARIO y funcionarios, colaboradores, promotores, comercializadores y fuerza de ventas de INTERSEGURO y del GRUPO, así como para cursar invitaciones para eventos.
          <br>3. Facilitar al USUARIO y/o recibir del USUARIO los documentos que conforman la contratación de pólizas de seguros, tanto para fines orientativos como para la propia contratación de seguros (solicitudes de seguros, solicitudes-certificados, condiciones generales, condiciones particulares, condiciones especiales, cláusulas adicionales, endosos, convenios de pago de prima, pólizas virtuales, entre otros).
          <br>4. Permitir el intercambio y envío de información sobre los PRODUCTOS Y SERVICIOS del GRUPO, sea por parte de cualquiera de las empresas del GRUPO como por INTERSEGURO y por terceros a los cuales INTERSEGURO o el GRUPO contraten.
          <br>5. Enviar promociones y publicidad de los PRODUCTOS Y SERVICIOS de INTERSEGURO y de los del GRUPO, sea por parte de cualquiera de las empresas del GRUPO como por INTERSEGURO y por terceros a los cuales INTERSEGURO o el GRUPO contraten.
          <br>6. Contactar con el USUARIO a través de correos electrónicos, llamadas telefónicas, SMS, comunicaciones escritas, redes sociales, aplicaciones de chat para teléfonos, como el WhatsApp, sistemas de comunicación masiva (tales como Call Centers, E-mailing, y SMS masivos para las finalidades indicadas en los numerales anteriores).
          <br>
          <br>
          <br>INTERSEGURO se encuentra facultado más no obligado a brindar información sobre PRODUCTOS Y SERVICIOS del GRUPO.
          <br>
          <br>El USUARIO podrá, se encuentra facultado y permite:
          <br>
          <br>1. Solicitar a INTERSEGURO información y asesoría sobre los PRODUCTOS Y SERVICIOS.
          <br>2. Enviar información o documentos a INTERSEGURO
          <br>3. Solicitar cotizaciones de PRODUCTOS Y SERVICIOS y, eventualmente, contratarlos, en tanto lo permitan las exigencias normativas sectoriales.
          <br>
          <br>
          <h4 class="text-center">IV. POLÍTICA DE PRIVACIDAD</h4>
          <br>
          <br>Para poder cumplir con las finalidades señaladas en el apartado II anterior y en general con las acciones necesarias para ejecutar el CONTRATO, INTERSEGURO requiere realizar el tratamiento de los DATOS PERSONALES del USUARIO. La presente sección contiene los lineamientos que regulan el tratamiento de los DATOS PERSONALES (en adelante, la “POLÍTICA DE PRIVACIDAD”), la misma que se aplica en estricto cumplimiento de la LEY y, particularmente, de la LPDP, con la finalidad de asegurar un tratamiento de DATOS PERSONALES legítimo, arreglado a derecho, confidencial y seguro.
          <br>

          <br>INTERSEGURO se encuentra firmemente comprometido con realizar los mayores esfuerzos de gestión, administrativos, legales y tecnológicos para garantizar el tratamiento confidencial y seguro de los DATOS PERSONALES.
          <br>

          <br>Los alcances del tratamiento de los DATOS PERSONALES para ejecutar el CONTRATO son los siguientes:
          <br>

          <br>1. Los DATOS PERSONALES recopilados a través de cualquiera de los enlaces que conforman la web se almacenarán en el Banco de Datos USUARIOS DE LA PAGINA WEB de titularidad de INTERSEGURO.
          <br>2. Los DATOS PERSONALES serán tratados con la finalidad de ejecutar las prestaciones y obligaciones y derechos atribuidos tanto al USUARIO como a INTERSEGURO contenidos en el CONTRATO. Como se ha señalado en el numeral II del CONTRATO, entre estas finalidades se encuentra la de mantener informado, asesorar y ofrecer al USUARIO los PRODUCTOS Y SERVICIOS tanto actuales como futuros.
          <br>3. Como consecuencia de las finalidades descritas y en tanto progresivamente INTERSEGURO y el GRUPO podrán ir diseñando y ofreciendo nuevos PRODUCTOS Y SERVICIOS, los DATOS PERSONALES se almacenarán y tratarán hasta el momento en que el USUARIO revoque formalmente el consentimiento que nos otorgó para su tratamiento, conforme la LPDP se lo permite e INTERSEGURO garantiza.
          <br>4. INTERSEGURO ha implementado las medidas administrativas, legales y tecnológicas con la intención de ejecutar un tratamiento seguro y confidencial de los DATOS PERSONALES. No obstante, INTERSEGURO no puede garantizar que los DATOS PERSONALES se encuentren completamente libre de accesos y tratamientos no autorizados e ilícitos cometidos por terceros ajenos a INTERSEGURO, debido a riesgos naturales y los propios del entorno virtual. En tal sentido, debe entenderse para todo efecto que la implementación de estas medidas administrativas, legales y tecnológicas constituyen deberes de medios y no de resultados. Como consecuencia de ello, INTERSEGURO no se responsabiliza en caso de que se materialicen dichos riesgos y se genere algún tipo de daño o perjuicio al USUARIO. En dicho caso, la responsabilidad de INTERSEGURO se encuentra sujeta y limitada a los límites contenidos en el presente documento.
          <br>5. Para efectos del intercambio de comunicaciones y envío de comunicaciones con ocasión de la ejecución del CONTRATO, descrito en los numerales II y III del CONTRATO, INTERSEGURO podrá usar sistemas de comunicación masiva, tales como centrales de llamadas (Call Centers), centrales o sistemas de envíos de mails masivos (mailing) o SMS masivos. En caso de que INTERSEGURO decida valerse de terceros para estos fines, se realizará transferencia de DATOS PERSONALES a través de los encargos de tratamiento que correspondan, garantizando el tratamiento de los DATOS PERSONALES por parte de estos terceros conforme a los alcances y limitaciones del consentimiento brindado por el USUARIO a través del CONTRATO y cumpliendo con las exigencias de la LPDP.
          <br>6. La POLÍTICA DE PRIVACIDAD podrá ser modificada de cuando en cuando (a todas ellas, en adelante, las “MODIFICACIONES”). En tales casos, INTERSEGURO le enviará un mensaje a través del correo que nos ha facilitado. A través de dicho mensaje usted podrá acceder y conocer íntegramente las MODIFICACIONES. Recomendamos que revise detenidamente y cuidadosamente las MODIFICACIONES. Usted es libre de aceptarlas o no aceptarlas. Sin embargo, en caso de que no aceptación, INTERSEGURO podría verse impedido de ejecutar el CONTRATO, si es que las MODIFICACIONES fueran necesarias para continuar con su ejecución. En tal caso, INTERSEGURO no asumirá ninguna responsabilidad derivada de la falta de asesoría o información.
          <br>7. Al usar la WEB o inclusive al sólo acceder a la página central de INTERSEGURO (www.interseguro.pe) usted acepta que se podrán instalar cookies en su ordenador o dispositivo. Estas pueden ser necesarias para recopilar información relevante para la ejecución del CONTRATO. Las cookies ya no continuarán con su finalidad al vencer el plazo por el cual INTERSEGURO almacenará sus DATOS PERSONALES. Sin embargo, en dicho momento, las cookies no se desinstalarán automáticamente, siendo usted el USUARIO el único y exclusivo responsable y encargado de la desinstalación.
          <br>8. La siguiente lista muestra las cookies de terceros que se podrían instalar, los fines para los que se utilizan y los enlaces a páginas web donde se puede encontrar más información sobre las mismas:
          <br>
          <br>
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
                <td
                  rowspan="2"
                >Se utiliza para almacenar información de navegación (tiempo de conexión, sesiones con ID, tipo de dispositivo, navegador, sistema operativo, etc.).</td>
                <td>https://analytics.google.com/</td>
              </tr>
              <tr>
                <td></td>
                <td>Facebook Pixel</td>

                <td>https://facebook.com</td>
              </tr>
            </tbody>
          </table>
          <br>9. INTERSEGURO no gestiona cookies de terceros ni es responsable de ellas ni del tratamiento de datos personales que realizan. Al aceptar los T&C, usted acepta la instalación de las cookies de terceros. Recomendamos enfáticamente revisar con detenimiento y cuidado los enlaces incluidos en el cuadro anterior, antes de aceptar el CONTRATO.
          <br>10. INTERSEGURO garantiza el respeto de los derechos de los titulares de los DATOS PERSONALES consagrados en la LPDP, con la finalidad de que puedan ser ejercidos de la manera más amplia y sin costo alguno. Para tal fin, el USUARIO deberá enviar una comunicación al correo servicios@interseguro.com.pe o en la dirección Av. Paseo de la Republica Nro. 3071, San Isidro que deberá incluir todo lo siguiente: a) Nombres y apellidos, documento de identidad y sexo del USUARIO (Si se actúa a través de un representante legal, deberá acreditarse los documentos que acrediten dicha representación); b) Pedido concreto; c) Domicilio o dirección electrónica a donde se deberá responder; d) Fecha y firma de quien envía la solicitud; e) Documentos que sustenten la petición, de ser el caso.
          <br>11. INTERSEGURO no realiza tratamiento de DATOS PERSONALES de menores de edad. Si el USUARIO es menor de edad, deberá obtener la autorización previa de su padre, madre, tutor o representante legal y enviarla previamente a INTERSEGURO de forma física para acreditar la existencia del consentimiento previo.
          <br>12. Resultan aplicables a esta POLÍTICA DE PRIVACIDAD, de manera supletoria y complementaria, las disposiciones de la LPDP.
          <br>
          <br>Última actualización de las Condiciones de Uso y Política de Privacidad:
          22 de Mayo de 2019
          <br>
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
            src="./../../../static/media/img/root/close.png"
            width="30"
            alt="icon close"
            class="modal-close"
            @click="hideModalInicioVigencia()"
          />

      <div class="modal-content fechaVigenciaCotizador">
        <p class="modal-titulo">¿Cuándo inicia tu Seguro?</p>

          <div id="input-group-3" class="inicioVigencia">
            
            <div class="fechaCotizador">                
              <datepicker class="mt-2" :inline="true"  :disabledDates="state.disabledDates" id="fechaCustom" :full-month-name="true"   :value="state.date" @selected="elegirFecha" ></datepicker>
            </div>
          </div>
          <div class="box-btns">
            <button class="btn  btn-principal  " @click="hideModalInicioVigencia()">CONFIRMAR</button>
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
      src="./../../../static/media/img/root/close.png"
      width="30"
      alt="icon close"
      class="modal-close"
      @click="hideModalGPS()"
    />
      <div class="v2modalGPS">
        <div class="v2modalGPS__header">
          <img src="./../../../static/media/interseguroVehicular_v2/auto-gps.png" alt="">
          <div class="texto-header">
            <p class="titulo">Tu {{this.itemElegido.brand }} necesita un GPS, te ayudamos a contratarlo</p>
            <span class="descripcion">
              Por ser de Interseguro, podrás acceder a los mejores precios:
            </span>
          </div>
        </div>
        <div class="v2modalGPS__body">
          <div class="box-empresas">
            <div class="empresa-item">
              <div class="empresa-item__der">
                <img src="./../../../static/media/interseguroVehicular_v2/empresa.png" alt="">
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
                <img src="./../../../static/media/interseguroVehicular_v2/empresa.png" alt="">
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
                <img src="./../../../static/media/interseguroVehicular_v2/empresa.png" alt="">
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
                <img src="./../../../static/media/interseguroVehicular_v2/empresa.png" alt="">
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
            Al finalizar la compra de tu Seguro Vehicular te ayudaremos con la compra de tu GPS.
          </p>
          <p class="tienes-gps">
            ¿Ya tienes un GPS activo?
          </p>
          <p class="certificado">
             Luego de la compra, envíanos el certificado.
          </p>
        </div>
        <div class="v2modalGPS__footer">
          <p>Tendrás 5 días para contratar tu GPS luego <br> de la compra del Seguro Vehicular, si no perderás la cobertura de Robo Total.</p>
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
      src="./../../../static/media/img/root/close.png"
      width="30"
      alt="icon close"
      class="modal-close"
      @click="hidemodalEntidadFinanciera()"
    />
    <div class="box-mensajeEnviadoEndosar" v-bind:class="{mostrarMensajeEnviadoEndosar : mostrarMensajeEnviadoEndosar}">
        <div class="endosar-item">
          <img width="80" class="check-enviado" src="./../../../static/media/interseguroVehicular_v2/mensaje-enviado-cotizacion.png" alt="">
          <p class="modal-titulo-endoso">Tu Seguro Vehicular se ha endosado correctamente al {{this.endosoSeleccionado.name}}</p>
        </div>
    </div>

     <p class="modal-titulo">¿Dónde pediste tu crédito vehicular?</p>
      <div id="boxEndosoSesion"  class="modalEntidadFinanciera  endosoSesion">
        <div v-for="(item, index) in listaNuevaDeEndoso" :key="index">
          <div v-on:click="setearEntidadFinanciera(item)">
            <div id="endosoSesionItem" class="endosoItem">
              <span
                name="parent"
                v-bind:id="'entidad-' + item.id"
                class="endosoUncheck"
                v-bind:class="{ 'checked': ischecked }"
              ></span>
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="box-btns">
        <button class="btn  btn-principal  " @click="seleccionarEntidadFinanciera()">CONFIRMAR Y ENDOSAR</button>
      </div>
    </b-modal>

    <!-- Modal de abandono  -->
    <!-- <b-modal id="leaveQuote" class="leaveModal" size="lg" static centered hide-footer hide-header>
      <b-container>
        <b-row class="justify-content-center">
          <b-col class="text-center mb-3" cols="12">
            <img src="../../../static/media/modal/leave-cotiza.png" alt="Abandonar Seguro Vehicular">
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

 <!--  <b-modal id="leaveQuote2" class="leaveModal" size="lg" static centered hide-footer hide-header>
      <b-container>
        <b-row class="justify-content-center">
          <b-col class="text-center mb-3" cols="12">
            <img src="../../../static/media/modal/leave-cotiza-2.png" alt="Abandonar Seguro Vehicular">
          </b-col>
        </b-row>
        <b-row class="text-center">
          <b-col cols="12" class="mb-3">
            <h2><span>¿Lo vas a dejar pasar?</span></h2>
          </b-col>
          <b-col cols="12" class="mb-3">
            <h3 v-if="appDiscount == true">Elige un plan para tu {{this.itemElegido.brand}} <br> desde ${{this.listaBasica.policy.monthlyDiscount}} y maneja seguro</h3>
            <h3 v-else-if="this.nuevoProducto == true">Elige un plan para tu {{this.itemElegido.brand}} <br> desde ${{this.listaBasica.policy.monthlyCalculated}} y maneja seguro</h3>
            <h3 v-else>Elige un plan para tu {{this.itemElegido.brand}} <br> desde ${{this.listaBasica.policy.monthly}} y maneja seguro</h3>
          </b-col>
          <b-col cols="12" class="mb-2">
            <h3>Personaliza tu cotización en el siguiente paso</h3>
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col class="text-center mb-4" cols="12">
            <b-button @click="$nuxt.$emit('bv::hide::modal', 'leaveQuote2')">QUIERO CONTINUAR</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal> -->

     <b-modal
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
              <img class="img-verano" width="100%"  src="./../../../static/media/img/campania/img-modal.svg" alt="">              
              <p class="mt-3">
                <strong style="color : #ffffff; font-size: 30px"> {{this.$store.state.common.objCliente.firstName}} </strong> <br> <br>
                <span style="color : #ffffff; font-size: 18px">
                ¡Por pocos días! Paga solo 11 meses <br> por un seguro anual. Además, <br> aprovecha nuestro<span style="color: #FFDD36;"> 10% de dscto.</span>
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
      </b-modal>

  </section>
</template>

<script>
  import moment from "moment/moment.js"

  var fechaActual = new Date()
  const state = {
      date: new Date(),
      disabledDates: {
      to: new Date(Date.now() - 8640000),
      from: new Date(fechaActual.getTime() + 7.884e+9)
    }
  }

  export default {
    layout: 'InterseguroFlujo',
    data() {
      return {
        flotanteCovid: true,
        opacityNone: false,
        urlpdf:'',
        mostrarMensajeEnviadoEndosar: false,
        mostrarMensajeEnviadoCotizacion: false,
        maximoImgDisabled: false,
        minimoImgDisabled: false,
        monto_pagar_plata :'',
        monto_antes_plata :'',
            
        monto_pagar_oro :'',
        monto_antes_oro :'',

        monto_pagar_black :'',
        monto_antes_black :'',
        valorSeleccionado: false,
        activarTooltip: false,
        activarTooltipDesktop: false,
        gps:'',
        frecuencia: '',
        planSeleccionado:3,
        selected: 1,
        monto_pagar: '',
        monto_antes: '',
        options: [
            { value: null, text: '' },
            { value: '1', text: 'Mensual' },
            { value: '2', text: 'Trimestral' },
            { value: '3', text: 'Anual' },
        ],
        // placaUppercase: this.item.plateNumber,
        nuevoProducto: this.$store.state.common.nuevoProducto,
        mostrarMensajeEnviado: false,
        inputNumeroCelular: '',
        placeholderNumeroCelular: 'Ingresa tu número de télefono',
        code_sku: '',
        auto_0k: false,
        cobertura_is: {
          'name': '',
          'price': '',
          'category': 'Seguro',
          'brand': 'Vehicular',
          'variant': '',
          'ammount': '',
          'quota': '',
          'discount': '',
          'startDate': '',
          'credit' : '',
          'sku' : ''
        },
        /***********************EVALUAR ********************** */
        soatActive: 0,
        documento_steps2 : '',
        flagElegirFecha: 0,
        monto_pagar_steps3:'',
        mostrarCapa: false,
        mostrarCapaGris: false,
        /******************************** */
        Condicionado_Particular:'',
        item: {
          plateNumber: '',
          email: ''
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
          brandId:'',
          brand:'',
          modelYear: '',
          model: '',
          modelId:'',
          remarketingId:'',
          assignedPrice: null,
          businessId:1,
          discountType: '',
          assignedPrice: null
        },
        /*LISTAS COTIZADOR SEGUNDA PANTALLA */
        planInactivo: false,
        listCotizacionTotal:{},
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
            gps:''
          },
          policy: {
            calculated: 0,
            annual: 0,
            quarterly: 0,
            monthly: 0,
            monthlyCalculated: 0,
          },
          vehicle:{
            
          }
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
            monthlyCalculated: 0,
          },
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
            monthlyCalculated: 0,
          },
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
        planSeleccionado : 3,
        
        isDisabled: false,
        objIBK: 0,
        /*FIN SEGUNDA PANTALLA */
        /*************************** */
        listBrands:{},
        listYears: {},
        listModels:{},
        
        sessionFields:{},
        objectVehicle:{},
        objSOAT: {},
        vehicleState: false,
        /* ************************* MODALES **********************/
        showModal: false,

        /* ************************* FECHA ************************/
        state: state,
        fechaVigencia:'',
        /* ************************* ENDOSO **********************/
        listaNuevaDeEndoso: [],
        endosoSeleccionado: {
          id: 0,
          name: ''
        },
        /* ********************** EMAIL MODAL *********************/
        isDisabledEnviarCorreo: false,
        email: '',
        objUtm:'',
        htmlModal : '',
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
      }
    },
    created() {
  
      if (process.browser) {
        window.addEventListener("scroll", this.handleScroll);
        document.addEventListener('touchstart', this.handleScroll, {passive: true});
      }
      this.$store.dispatch('common/getBrand').then((res)=>{
        this.listBrands = res.data.body
      })      
      this.$store.dispatch('common/getYear').then((res)=>{
        this.listYears = res.data.body
      })
      this.$store.dispatch('common/getFinancialInstitution').then((res)=>{
        this.listEndoso = res.data.body;
        let arregloUno = [];
        arregloUno = this.listaNuevaDeEndoso.concat(this.listEndoso.banks).concat(this.listEndoso.financial).concat(this.listEndoso.cajas);
        this.listaNuevaDeEndoso = arregloUno;
      })
    },
    components:{
      Datepicker: () => import('vuejs-datepicker/dist/vuejs-datepicker')
    },
    computed: {
      classPlan: function(){
        return this.planSeleccionado == 4 ? 'planPlata' : this.planSeleccionado == 3 ? 'planBlack' : this.planSeleccionado == 6 ? 'planOro' : 'planNoSeleccionado'
        // return "uno"
      },
      appDiscount: function(){
        let appDiscount = this.$store.state.common.appDiscount
        // return appDiscount
        return false
      },
      placaUppercase: function(){
        let placa = this.item.plateNumber.toUpperCase()
        return placa
      },
      isMinimo: function() {
        let decimal = this.clonado.vehicle.minimum / 100
        let minimo = Math.ceil(decimal) * 100;
        return minimo
        // return minimo.toLocaleString();
      },
      isMaximo: function() {
        let decimal = this.clonado.vehicle.maximum / 100
        let maximo = Math.floor(decimal) * 100;
        return maximo
        // return maximo.toLocaleString();
      },
    },
    methods: {
      contador(){
            // var flipdown2 = new FlipDown(1617080399, 'contadorCyber5').start()
        },
      hideFlotante(){
        this.flotanteCovid = !this.flotanteCovid
      },
      metodoFlotante(){
        this.$nuxt.$emit('bv::show::modal','leaveQuote2')
      },
      hidemetodoFlotante(){
        this.$nuxt.$emit('bv::hide::modal','leaveQuote2')
      },
      hideModalBlackWeek(){
          $nuxt.$emit('bv::hide::modal', 'leaveBlackWeek')
      },
      handleScroll(eve) {
        if (window.scrollY >= 750) {
            this.opacityNone = true        

        } else {
            this.opacityNone = false
        }
      },
      pagar_ahora(){            
        this.primeraPantalla = false
        window.scrollTo(0,0)
      },
      clickCapaGris(){
        this.mostrarCapaGris = false
        this.activarTooltipDesktop = false
        this.activarTooltip = false
      },
      showSumaAseguradaMobile(){
        this.mostrarCapaGris = true
        this.activarTooltip = true
      },
      showSumaAseguradaDesktop() {     
        this.mostrarCapaGris = true   
        this.activarTooltipDesktop = true
      },
      hideSumaAsegurada() {
        
      },
      showModalInicioVigencia() {
        this.$refs.modalInicioVigencia.show();
      },
      hideModalInicioVigencia() {
        this.$refs.modalInicioVigencia.hide();
      },
      showModalEnviarEmail(){
        this.mostrarMensajeEnviadoCotizacion = false
        this.$refs.modalEnviarEmail.show();
      },
      hideModalEnviarEmail(){
        this.$refs.modalEnviarEmail.hide();
      },
      seleccionarFrecuencia(){
        if (this.selected == 1) {
            this.monto_pagar_plata = this.listaBasica.policy.monthly
            this.monto_antes_plata = this.listaBasica.policy.monthlyCalculated
            
            this.monto_pagar_oro = this.listaMedia.policy.monthly
            this.monto_antes_oro = this.listaMedia.policy.monthlyCalculated

            this.monto_pagar_black = this.listaFull.policy.monthly
            this.monto_antes_black = this.listaFull.policy.monthlyCalculated

            if (this.planSeleccionado == 3 || this.planSeleccionado == 10) {
                this.monto_pagar = this.listaFull.policy.monthly
                this.monto_antes = this.listaFull.policy.monthlyCalculated
                this.$store.commit('common/setMontoPagar',this.monto_pagar)
            }else if(this.planSeleccionado == 6){
                this.monto_pagar = this.listaMedia.policy.monthly
                this.monto_antes = this.listaMedia.policy.monthlyCalculated
                this.$store.commit('common/setMontoPagar',this.monto_pagar)
            }else if(this.planSeleccionado == 4){
                this.monto_pagar = this.listaBasica.policy.monthly
                this.monto_antes = this.listaBasica.policy.monthlyCalculated
                this.$store.commit('common/setMontoPagar',this.monto_pagar)
            }else{

            }
            
        }else if(this.selected == 2){
            this.monto_pagar_plata = this.listaBasica.policy.quarterly
            this.monto_antes_plata = this.listaBasica.policy.quarterlyCalculated
            
            this.monto_pagar_oro = this.listaMedia.policy.quarterly
            this.monto_antes_oro = this.listaMedia.policy.quarterlyCalculated

            this.monto_pagar_black = this.listaFull.policy.quarterly
            this.monto_antes_black = this.listaFull.policy.quarterlyCalculated

            if (this.planSeleccionado == 3 || this.planSeleccionado == 10) {
                this.monto_pagar = this.listaFull.policy.quarterly
                this.monto_antes = this.listaFull.policy.quarterlyCalculated

                this.monto_pagar_mensual = this.listaFull.policy.quarterly
                this.monto_antes_mensual = this.listaFull.policy.quarterlyCalculated
                this.$store.commit('common/setMontoPagar',this.monto_pagar)
            }else if(this.planSeleccionado == 6){
                this.monto_pagar = this.listaMedia.policy.quarterly
                this.monto_antes = this.listaMedia.policy.quarterlyCalculated
                this.$store.commit('common/setMontoPagar',this.monto_pagar)
            }else if(this.planSeleccionado == 4){
                this.monto_pagar = this.listaBasica.policy.quarterly
                this.monto_antes = this.listaBasica.policy.quarterlyCalculated
                this.$store.commit('common/setMontoPagar',this.monto_pagar)
            }else{}
        }else if(this.selected == 3){
            this.monto_pagar_plata = this.listaBasica.policy.annual
            this.monto_antes_plata = this.listaBasica.policy.annualCalculated
            
            this.monto_pagar_oro = this.listaMedia.policy.annual
            this.monto_antes_oro = this.listaMedia.policy.annualCalculated

            this.monto_pagar_black = this.listaFull.policy.annual
            this.monto_antes_black = this.listaFull.policy.annualCalculated
            
            // this.frecuencia = 'Anual'
            if (this.planSeleccionado == 3) {
                this.monto_pagar = this.listaFull.policy.annual
                this.monto_antes = this.listaFull.policy.annualCalculated
                this.$store.commit('common/setMontoPagar',this.monto_pagar)
            }else if(this.planSeleccionado == 6){
                this.monto_pagar = this.listaMedia.policy.annual
                this.monto_antes = this.listaMedia.policy.annualCalculated
                this.$store.commit('common/setMontoPagar',this.monto_pagar)
            }else if(this.planSeleccionado == 4){
                this.monto_pagar = this.listaBasica.policy.annual
                this.monto_antes = this.listaBasica.policy.annualCalculated
                this.$store.commit('common/setMontoPagar',this.monto_pagar)
            }else{}
        }else{}
      },
      
      seleccionarPLanDesktop(id){
        id = id+""
        this.planInactivo = true

        if (this.planSeleccionado == id && this.valorSeleccionado) {
          console.log(id)
        }else{
          this.valorSeleccionado = true
          let elemento1 = document.querySelectorAll(".v2-plan-item")
          for (let index = 0; index < elemento1.length; index++) {
            elemento1[index].classList.remove("planActivoDesktop")      
          }
          setTimeout(() => {
            let arreglo = document.querySelectorAll(".plan"+id)
            for (let i = 0; i < arreglo.length; i++) {
              arreglo[i].classList.add("planActivoDesktop")
            }
            this.seleccionarFrecuencia()
          }, 250);
          this.$store.commit('common/setPlanSeleccionado',id)
          this.planSeleccionado = id
          this.detectarPLanSeleccionado()
        }
        
      },
      devolverMonto(lista){
         
      },
      detectarPLanSeleccionado(){
        if(this.$store.state.common.planSeleccionado == 3 || this.$store.state.common.planSeleccionado == 10){        
          this.listCotizacion = this.listaFull
          this.devolverMonto(this.listaFull)
          if(this.endosoSeleccionado.id != 0){        
            this.$store.commit('common/setPlanSeleccionado',10)
          }
          this.cobertura_is.variant = "black $"+this.listCotizacion.policy.monthly+"/mes"
        }else if(this.$store.state.common.planSeleccionado == 6){            
            this.listCotizacion = this.listaMedia
            this.cobertura_is.variant = "oro $"+this.listCotizacion.policy.monthly+"/mes"
            this.endosoSeleccionado = {id:0, name: ''}
            this.$store.commit('common/setEntidadFinanciera', {id: 0, name:''})
        }else if(this.$store.state.common.planSeleccionado == 4){
            this.listCotizacion = this.listaBasica
            this.endosoSeleccionado = {id:0, name: ''}
            this.$store.commit('common/setEntidadFinanciera', {id: 0, name:''})
            this.cobertura_is.variant = "plata $"+this.listCotizacion.policy.monthly+"/mes"
        }else{}
      },
      seleccionarPLan(id){
        id = id+""
        this.planInactivo = true
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
        this.$store.commit('common/setPlanSeleccionado',id)
        this.planSeleccionado = id
        this.detectarPLanSeleccionado()
      },
      continuar(e,id) {
        console.log(id)
        //console.log('frecuencia .. '+this.selected)
        event.stopPropagation();
        this.seleccionarPLanDesktop(id)
        this.$store.commit('common/setFrecuenciaPago', this.selected)
        this.cobertura_is.credit = this.endosoSeleccionado.name
        this.cobertura_is.price = this.listCotizacion.policy.annual
        this.cobertura_is.ammount = this.listCotizacion.vehicle.current
        this.cobertura_is.quota = this.listCotizacion.policy.monthly

        this.listCotizacion.policy.startDate = this.fechaVigencia
        this.listCotizacion.paymentMethodId = this.selected
        this.$store.state.common.listaCotizacion.paymentMethodId = this.selected
        this.$store.commit('common/setObjectDigodat', this.cobertura_is)        
        this.$store.commit('common/setItemElegido', this.itemElegido)
        this.$store.commit('common/setListaCotizacion', this.listCotizacion)

        if (document.location.hostname == "www.interseguro.pe"){
          fbq('track', 'ViewContent', {
            content_type: 'product',
            product : 'segurovehicular',
            content_ids: this.code_sku, 
            plan_seleccionado: this.$store.state.common.planSeleccionado,
            endoso: this.endosoSeleccionado.name,
            anio: this.objectVehicle.modelYear,
            suma_asegurada: this.$store.state.common.current,
          });
        }else{
        }
        this.cotizador_datalayer('addToCart')
        this.$nuxt.$router.push('/cotiza/ingresa-tu-documento')

      },
      getVehicle(){
        this.$store.dispatch('common/getVehicle', this.item).then((res) =>{
          setTimeout(() => {
            if (res.data.code == 0) {
            this.objectVehicle = res.data.body
            this.$store.commit('common/setObjVehiculo', res.data.body)
            this.mostrarCapa = false
          }else{
            let errorDetectado = {
              url : 'getVehicle',
              page : 2,
              message : res.data.message,
              objEnviado : this.item
            }
            this.$store.dispatch('common/eventoErrores', errorDetectado)
          }
          }, 1000);
          
        })
      },
      hidemodalTerminosCondiciones() {
        this.$refs.modalTerminosCondiciones.hide()
      },
      showModalTerminosCondiciones() {
        this.$refs.modalTerminosCondiciones.show()
        this.$refs.modalNumeroCelular.hide()          
      },
      showModalNumeroCelular() {
        window.dataLayer = window.dataLayer || [ ];
        dataLayer.push({
            'event': 'cotizador_descargar_app',
            'category': 'UI :: Cotizador :: Popup',
            'action': 'Click boton',
            'label': 'Descargar app ahora'
        })
        this.$refs.modalRootCotizador.hide();
        this.$refs.modalNumeroCelular.show();
      },
      hideModalNumeroCelular () {
          this.$refs.modalNumeroCelular.hide();
      },
      enviarNumeroCelular(){
        if (this.inputNumeroCelular.length == 9) {
          this.$store.dispatch('common/enviarMsjCelular',this.inputNumeroCelular).then((res)=>{
          if (res.data.code == 0) {
              window.dataLayer = window.dataLayer || [ ];
              dataLayer.push({
                'event': 'cotizador_recibiras_msj_texto',
                'category': 'UI :: Cotizador :: Popup',
                'action': 'Descargar app ahora',
                'label': 'Popup descargar app'
              })
              this.mostrarMensajeEnviado = true
              setTimeout(() => {
                this.mostrarMensajeEnviado = false
                this.$refs.modalNumeroCelular.hide();
                this.inputNumeroCelular = ''
              }, 2000);
          }else{
            this.mostrarMensajeEnviado = true
            this.inputNumeroCelular = ''
          }
        })
        }else{
          this.$swal({
            title: "Ok!",
            text: "Ingrese un número válido",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#2177CC",
            confirmButtonText: "OK"
          })
          this.inputNumeroCelular = ''
        }
        
      },
      descargarApp() {
          window.dataLayer = window.dataLayer || [ ];
          dataLayer.push({
              'event': 'cotizador_descargar_app',
              'category': 'UI :: Cotizador :: Popup',
              'action': 'Click boton',
              'label': 'Descargar app ahora'
          })
          var userAgent = navigator.userAgent || navigator.vendor || window.opera;

          if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
          {
            window.location.replace("https://apps.apple.com/pe/app/interseguro-vehicular/id1517921041?l=en");
            return 'iOS';
          }
          else if( userAgent.match( /Android/i ) )
          {
            window.location.replace("https://play.google.com/store/apps/details?id=pe.interseguro.intersegurovehicular&hl=es_PE");
            return 'Android';
          }
          else
          {
            return 'unknown'; 
          }
      },
      /*************************************************************** */
      PaginaVista(app, valor) {
        let url = ""
        if (this.$store.state.common.nuevoProducto == true) {
          url = "/vehicular-app/cotiza/cotizacion/"
        }else if (this.$store.state.common.nuevoProducto == false){
          url = "/vehicular/cotiza/cotizacion/"
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
      cotizador_datalayer(evento){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: evento,
          product: this.cobertura_is
        })
      },
      /*************************************************************** */
      /******************* INGRESAR LETRA DE MARCA ******************* */
      clickIngresaLetra(e){      
        document.getElementById('ingresaLetraMarca').focus()
      },
      detectarkey(e){
        var boxListaMarcas = document.getElementsByClassName('listas--box')[0]      
        var valor = e.key.toUpperCase()
        
        let listaMarcas = this.listBrands.filter((item) =>{
          return item.group == 2
        })       
        listaMarcas.forEach(element => {
          if(element.name.charAt(0) == valor){
            var resultado = listaMarcas.find( elemento =>  elemento.name.charAt(0) === valor+'' );
            var marcaId = document.getElementById(resultado.name)
            boxListaMarcas.scrollTo(0 , marcaId.offsetTop -27 )
          }else{
          }
        })
      },
      /******************** FIN DETECTAR LETRA D EMARCA ******************* */
    enviarCorreo(){
      if (document.location.hostname == "www.interseguro.pe"){
        fbq('track', 'Contact', {
          contactar_whatsapp: 'ContactarCorreo'
        })
      }else{
      }            
     },
    closeListon(){
      document.getElementById("liston-desktop").style.display = "none"
      this.$bus.$emit('updatingTest', 0)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
          event: "click_close_menu ",
          description: "Click en el boton de close en el header cotizador"
      })
    },
      mostrarItemSeleccionados(){
        this.mostrarItemMarca = true
        this.mostrarItemAnio = true
        this.mostrarItemModelo = true
      },
      closeMarca(){
        this.mostrarItemMarca = false
        this.mostrarItemAnio = false
        this.mostrarItemModelo = false
        this.mostrarMarca()
        this.primeraPantalla()
      },
      closeAnio(){
        this.mostrarItemMarca = true
        this.mostrarItemAnio = false
        this.mostrarItemModelo = false
        this.mostrarAnio()
        this.primeraPantalla()
      },
      closeModelo(){
        this.mostrarItemMarca = true
        this.mostrarItemAnio = true
        this.mostrarItemModelo = false
        this.mostrarModelo()
        this.primeraPantalla()
      },
      detalle(){
        if(this.activadorItem == 1){
          this.mostrarListaMarca = true
          this.mostrarListaAnio = false
          this.mostrarListaModelo = false
        }else if(this.activadorItem == 2){
          this.mostrarListaMarca = false
          this.mostrarListaAnio = true
          this.mostrarListaModelo = false
        }if(this.activadorItem == 3){
          this.mostrarListaMarca = false
          this.mostrarListaAnio = false
          this.mostrarListaModelo = true
        }else{
          this.mostrarListaMarca = false
          this.mostrarListaAnio = false
          this.mostrarListaModelo = false
        }
      },
      resetearVehiculo(){
        this.activeBox_2 = true;            
        this.mostrarModelo()
        this.ocultarItemsSeleccionados = false
        this.mostrarItemModelo = false
        this.seleccionarPLan(3)
        this.seleccionarPLanDesktop(3)
      },
      

      mostrarMarca(){
        this.mostrarListaMarca = true
        this.mostrarListaAnio = false
        this.mostrarListaModelo = false
      },
      mostrarAnio(){      
        this.mostrarListaMarca = false
        this.mostrarListaAnio = true
        this.mostrarListaModelo = false
        
      },
      mostrarModelo(){
        this.getModelLocal()
        this.mostrarListaMarca = false
        this.mostrarListaAnio = false
        this.mostrarListaModelo = true
        this.primeraPantalla()
      },

      seleccionaMarca(item){
        this.mostrarItemMarca = true
        this.itemElegido.brandId = item.id
        this.itemElegido.brand = item.name
        this.activadorItem = 1
        this.mostrarAnio()
        this.objectVehicle.brandId = item.id
        this.ocultarItemsSeleccionados = false
      },
      seleccionaAnio(item){
        this.mostrarItemAnio = true
        this.objectVehicle.modelYear = item.id
        this.itemElegido.modelYear = item.id
        this.itemElegido.year = item.id
        this.activadorItem = 2
        this.mostrarModelo()
      },
      seleccionaModelo(item){
        this.mostrarItemModelo = true
        this.itemElegido.model = item.name
        this.itemElegido.modelId = item.id
        this.activadorItem = 4
        this.ocultarItemsSeleccionados = true
        this.detalle()
        this.validateCreateOrUpdateVehicle()
        this.cotizador_datalayer('detail')
      },
      primeraPantalla() {
        this.$store.commit('common/setItemElegido', {})
        this.$store.commit('common/setCurrent', null)
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
            if(this.$store.state.common.businessId == 2){
              this.objUtm = {
                "1": "utm_campaign=IBK_remarketingCN_SOAT_D_1",
                "2": "utm_campaign=IBK_remarketingCN_SOAT_D_2",
                "3": "utm_campaign=IBK_remarketingCN_SOAT_D_3",
                "4": "utm_campaign=IBK_remarketingCN_SOAT_D_4"
              }
            }
            this.remarketingv2(this.objSOAT.emailAddress != null ? this.objSOAT.emailAddress.toLowerCase(): "",0)
          }
          
        } else if (this.$store.state.common.origenCliente == 1) {
        }
        
      },

      segundaPantalla() {
        this.objectVehicle = this.$store.state.common.objVehiculo
        switch (this.itemElegido.brandId) {
          case 11:
            if (this.itemElegido.model.indexOf("AVEO") >= 0 ) {
              this.code_sku = "sku039"
            } else if(this.itemElegido.model.indexOf("CAPTIVA") >= 0 ) {
              this.code_sku = "sku040"
            }else if(this.itemElegido.model.indexOf("COBALT") >= 0 ) {
              this.code_sku = "sku041"
            }else if(this.itemElegido.model.indexOf("CRUZE") >= 0 ) {
              this.code_sku = "sku042"
            }else if(this.itemElegido.model.indexOf("EQUINOX") >= 0 ) {
              this.code_sku = "sku043"
            }else if(this.itemElegido.model.indexOf("SAIL") >= 0 ) {
              this.code_sku = "sku044"
            }else if(this.itemElegido.model.indexOf("SONIC") >= 0 ) {
              this.code_sku = "sku045"
            }else if(this.itemElegido.model.indexOf("SPARK") >= 0 ) {
              this.code_sku = "sku046"
            }else if(this.itemElegido.model.indexOf("PRISMA") >= 0 ) {
              this.code_sku = "sku047"
            }else if(this.itemElegido.model.indexOf("ASTRA ENJOY ") >= 0 ) {
              this.code_sku = "sku099"
            }else if(this.itemElegido.model.indexOf("COLORADO ") >= 0 ) {
              this.code_sku = "sku100"
            }else if(this.itemElegido.model.indexOf("LUV D-MAX") >= 0 ) {
              this.code_sku = "sku101"
            }else if(this.itemElegido.model.indexOf("N300") >= 0 ) {
              this.code_sku = "sku102"
            }else if(this.itemElegido.model.indexOf("N400") >= 0 ) {
              this.code_sku = "sku103"
            }else if(this.itemElegido.model.indexOf("ONIX") >= 0 ) {
              this.code_sku = "sku104"
            }else if(this.itemElegido.model.indexOf("OPTRA") >= 0 ) {
              this.code_sku = "sku105"
            }else if(this.itemElegido.model.indexOf("ORLANDO") >= 0 ) {
              this.code_sku = "sku106"
            }else if(this.itemElegido.model.indexOf("TRACKER") >= 0 ) {
              this.code_sku = "sku107"
            }else if(this.itemElegido.model.indexOf("TRAVERSE") >= 0 ) {
              this.code_sku = "sku108"
            }else if(this.itemElegido.model.indexOf("SPIN") >= 0 ) {
              this.code_sku = "sku109"
            }else if(this.itemElegido.model.indexOf("SUBURBAN") >= 0 ) {
              this.code_sku = "sku110"
            }else if(this.itemElegido.model.indexOf("TRAIBLAZER") >= 0 ) {
              this.code_sku = "sku111"
            }else if(this.itemElegido.model.indexOf("TAHOE") >= 0 ) {
              this.code_sku = "sku112"
            }else if(this.itemElegido.model.indexOf("SILVERADO") >= 0 ) {
              this.code_sku = "sku113"
            }else if(this.itemElegido.model.indexOf("GROOVE") >= 0 ) {
              this.code_sku = "sku114"
            }else if(this.itemElegido.model.indexOf("MALIBU") >= 0 ) {
              this.code_sku = "sku115"
            }else if(this.itemElegido.model.indexOf("VIVANT") >= 0 ) {
              this.code_sku = "sku116"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }
            break;
          case 32:
            if (this.itemElegido.model.indexOf("ACCEN") >= 0 ) {
              this.code_sku = "sku001"
            } else if(this.itemElegido.model.indexOf("CRETA") >= 0 ) {
              this.code_sku = "sku002"
            }else if(this.itemElegido.model.indexOf("ELANTRA") >= 0 ) {
              this.code_sku = "sku003"
            }else if(this.itemElegido.model.indexOf("GRAN") >= 0 ) {
              this.code_sku = "sku004"
            }else if(this.itemElegido.model.indexOf("I20") >= 0 ) {
              this.code_sku = "sku005"
            }else if(this.itemElegido.model.indexOf("NEW") >= 0 ) {
              this.code_sku = "sku006"
            }else if(this.itemElegido.model.indexOf("TUCSON") >= 0 ) {
              this.code_sku = "sku007"
            }else if(this.itemElegido.model.indexOf("SANTA FE") >= 0 ) {
              this.code_sku = "sku018"
            }else if(this.itemElegido.model.indexOf("ATOS") >= 0 ) {
              this.code_sku = "sku070"
            }else if(this.itemElegido.model.indexOf("AVANTE") >= 0 ) {
              this.code_sku = "sku071"
            }else if(this.itemElegido.model.indexOf("AZERA") >= 0 ) {
              this.code_sku = "sku072"
            }else if(this.itemElegido.model.indexOf("COUPE") >= 0 ) {
              this.code_sku = "sku073"
            }else if(this.itemElegido.model.indexOf("EON") >= 0 ) {
              this.code_sku = "sku074"
            }else if(this.itemElegido.model.indexOf("EQUUS") >= 0 ) {
              this.code_sku = "sku075"
            }else if(this.itemElegido.model.indexOf("H-1") >= 0 ) {
              this.code_sku = "sku076"
            }else if(this.itemElegido.model.indexOf("H-100") >= 0 ) {
              this.code_sku = "sku077"
            }else if(this.itemElegido.model.indexOf("I10") >= 0 ) {
              this.code_sku = "sku078"
            }else if(this.itemElegido.model.indexOf("I30") >= 0 ) {
              this.code_sku = "sku079"
            }else if(this.itemElegido.model.indexOf("I40") >= 0 ) {
              this.code_sku = "sku080"
            }else if(this.itemElegido.model.indexOf("SONATA") >= 0 ) {
              this.code_sku = "sku081"
            }else if(this.itemElegido.model.indexOf("VELOSTER") >= 0 ) {
              this.code_sku = "sku082"
            }else if(this.itemElegido.model.indexOf("VENUE") >= 0 ) {
              this.code_sku = "sku083"
            }else if(this.itemElegido.model.indexOf("VERACRUZ") >= 0 ) {
              this.code_sku = "sku084"
            }else if(this.itemElegido.model.indexOf("VERNA") >= 0 ) {
              this.code_sku = "sku05"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }
            break;
        
          case 39:
            if (this.itemElegido.model.indexOf("PICANTO") >= 0 ) {
              this.code_sku = "sku008"
            } else if(this.itemElegido.model.indexOf("RIO") >= 0 ) {
              this.code_sku = "sku009"
            }else if(this.itemElegido.model.indexOf("SPORTAGE") >= 0 ) {
              this.code_sku = "sku010"
            }else if(this.itemElegido.model.indexOf("CARENS") >= 0 ) {
              this.code_sku = "sku019"
            }else if(this.itemElegido.model.indexOf("SORENTO") >= 0 ) {
              this.code_sku = "sku020"
            }else if(this.itemElegido.model.indexOf("CADENZA") >= 0 ) {
              this.code_sku = "sku086"
            }else if(this.itemElegido.model.indexOf("CARNIVAL") >= 0 ) {
              this.code_sku = "sku087"
            }else if(this.itemElegido.model.indexOf("CERATO") >= 0 ) {
              this.code_sku = "sku088"
            }else if(this.itemElegido.model.indexOf("FORTE") >= 0 ) {
              this.code_sku = "sku089"
            }else if(this.itemElegido.model.indexOf("GRAND CARNIVAL") >= 0 ) {
              this.code_sku = "sku090"
            }else if(this.itemElegido.model.indexOf("K2") >= 0 ) {
              this.code_sku = "sku091"
            }else if(this.itemElegido.model.indexOf("K5") >= 0 ) {
              this.code_sku = "sku092"
            }else if(this.itemElegido.model.indexOf("MOHAVE") >= 0 ) {
              this.code_sku = "sku093"
            }else if(this.itemElegido.model.indexOf("OPTIMA") >= 0 ) {
              this.code_sku = "sku094"
            }else if(this.itemElegido.model.indexOf("QUORIS") >= 0 ) {
              this.code_sku = "sku095"
            }else if(this.itemElegido.model.indexOf("SELTOS") >= 0 ) {
              this.code_sku = "sku096"
            }else if(this.itemElegido.model.indexOf("SOLUTO") >= 0 ) {
              this.code_sku = "sku097"
            }else if(this.itemElegido.model.indexOf("SOUL") >= 0 ) {
              this.code_sku = "sku098"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }
            
            break;
          case 62:
            if (this.itemElegido.model.indexOf("YARIS") >= 0 ) {
              this.code_sku = "sku011"
            }else if(this.itemElegido.model.indexOf("COROLLA") >= 0 ) {
              this.code_sku = "sku021"
            }else if(this.itemElegido.model.indexOf("HILUX") >= 0 ) {
              this.code_sku = "sku022"
            }else if(this.itemElegido.model.indexOf("AVANZA") >= 0 ) {
              this.code_sku = "sku023"
            }else if(this.itemElegido.model.indexOf("4RUNNER") >= 0 ) {
              this.code_sku = "sku048"
            }else if(this.itemElegido.model.indexOf("AURIS") >= 0 ) {
              this.code_sku = "sku049"
            }else if(this.itemElegido.model.indexOf("AVENSIS") >= 0 ) {
              this.code_sku = "sku050"
            }else if(this.itemElegido.model.indexOf("CAMRY") >= 0 ) {
              this.code_sku = "sku051"
            }else if(this.itemElegido.model.indexOf("FJ CRUISER") >= 0 ) {
              this.code_sku = "sku052"
            }else if(this.itemElegido.model.indexOf("RAV4") >= 0 ) {
              this.code_sku = "sku053"
            }else if(this.itemElegido.model.indexOf("PRIUS") >= 0 ) {
              this.code_sku = "sku054"
            }else if(this.itemElegido.model.indexOf("RUSH") >= 0 ) {
              this.code_sku = "sku055"
            }else if(this.itemElegido.model.indexOf("86 GT") >= 0 ) {
              this.code_sku = "sku061"
            }else if(this.itemElegido.model.indexOf("AGYA") >= 0 ) {
              this.code_sku = "sku062"
            }else if(this.itemElegido.model.indexOf("ETIOS") >= 0 ) {
              this.code_sku = "sku063"
            }else if(this.itemElegido.model.indexOf("FORTUNER") >= 0 ) {
              this.code_sku = "sku064"
            }else if(this.itemElegido.model.indexOf("HIACE COMMUTER") >= 0 ) {
              this.code_sku = "sku065"
            }else if(this.itemElegido.model.indexOf("HIACE PANEL") >= 0 ) {
              this.code_sku = "sku065"
            }else if(this.itemElegido.model.indexOf("HIGHLANDER") >= 0 ) {
              this.code_sku = "sku066"
            }else if(this.itemElegido.model.indexOf("LAND CRUISER") >= 0 ) {
              this.code_sku = "sku067"
            }else if(this.itemElegido.model.indexOf("URBAN CRUISER 1.3") >= 0 ) {
              this.code_sku = "sku068"
            }else if(this.itemElegido.model.indexOf("ZELAS") >= 0 ) {
              this.code_sku = "sku069"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }
            
            break;
          case 64:
            if (this.itemElegido.model.indexOf("XC") >= 0 ) {
              this.code_sku = "sku026"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }            
            break;
          case 30:
            if (this.itemElegido.model.indexOf("PILOT") >= 0 ) {
              this.code_sku = "sku027"
            }else if(this.itemElegido.model.indexOf("WR-V") >= 0 ) {
              this.code_sku = "sku028"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }            
            break;
          case 61:
            if (this.itemElegido.model.indexOf("SWIFT") >= 0 ) {
              this.code_sku = "sku012"
            }else if(this.itemElegido.model.indexOf("SX4") >= 0 ) {
              this.code_sku = "sku024"
            }else if(this.itemElegido.model.indexOf("ALTO") >= 0 ) {
              this.code_sku = "sku117"
            }else if(this.itemElegido.model.indexOf("APV ") >= 0 ) {
              this.code_sku = "sku118"
            }else if(this.itemElegido.model.indexOf("BALENO") >= 0 ) {
              this.code_sku = "sku119"
            }else if(this.itemElegido.model.indexOf("CIAZ") >= 0 ) {
              this.code_sku = "sku120"
            }else if(this.itemElegido.model.indexOf("GRAND NOMADE") >= 0 ) {
              this.code_sku = "sku121"
            }else if(this.itemElegido.model.indexOf("GRAND VITARA") >= 0 ) {
              this.code_sku = "sku122"
            }else if(this.itemElegido.model.indexOf("IGNIS") >= 0 ) {
              this.code_sku = "sku123"
            }else if(this.itemElegido.model.indexOf("JIMNY") >= 0 ) {
              this.code_sku = "sku124"
            }else if(this.itemElegido.model.indexOf("KIZASHI") >= 0 ) {
              this.code_sku = "sku125"
            }else if(this.itemElegido.model.indexOf("S-CROSS") >= 0 ) {
              this.code_sku = "sku126"
            }else if(this.itemElegido.model.indexOf("S-Presso") >= 0 ) {
              this.code_sku = "sku127"
            }else if(this.itemElegido.model.indexOf("VITARA") >= 0 ) {
              this.code_sku = "sku128"
            }else if(this.itemElegido.model.indexOf("XL-7") >= 0 ) {
              this.code_sku = "sku129"
            }else if(this.itemElegido.model.indexOf("CELERIO 1.0") >= 0 ) {
              this.code_sku = "sku130"
            }else if(this.itemElegido.model.indexOf("ERTIGA") >= 0 ) {
              this.code_sku = "sku131"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }
            break;
          case 63:
            if (this.itemElegido.model.indexOf("GOL") >= 0 ) {
              this.code_sku = "sku029"
            }else if(this.itemElegido.model.indexOf("GOLF") >= 0 ) {
              this.code_sku = "sku030"
            }else if(this.itemElegido.model.indexOf("T-CROSS") >= 0 ) {
              this.code_sku = "sku031"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }
            break;
          case 8:
            if (this.itemElegido.model.indexOf("CS") >= 0 ) {
              this.code_sku = "sku032"
            }else if(this.itemElegido.model.indexOf("GRAND VAN") >= 0 ) {
              this.code_sku = "sku033"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }
            break;
          case 49:
            if (this.itemElegido.model.indexOf("ASX") >= 0 ) {
              this.code_sku = "sku013"
            }else if(this.itemElegido.model.indexOf("OUTLANDER") >= 0 ) {
              this.code_sku = "sku025"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }
            break;
          case 45:
            if (this.itemElegido.model.indexOf("CX") >= 0 ) {
              this.code_sku = "sku014"
            } else if(this.itemElegido.model.indexOf("MAZDA") >= 0 ) {
              this.code_sku = "sku015"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }
            break;
          case 33:
            if (this.itemElegido.model.indexOf("S2") >= 0 ) {
              this.code_sku = "sku035"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }
            break;
          case 54:
            if (this.itemElegido.model.indexOf("SANDERO") >= 0 ) {
              this.code_sku = "sku036"
            }else if(this.itemElegido.model.indexOf("DUSTER") >= 0 ) {
              this.code_sku = "sku142"
            }else if(this.itemElegido.model.indexOf("DUSTER OROCH") >= 0 ) {
              this.code_sku = "sku143"
            }else if(this.itemElegido.model.indexOf("KOLEOS") >= 0 ) {
              this.code_sku = "sku144"
            }else if(this.itemElegido.model.indexOf("LOGAN") >= 0 ) {
              this.code_sku = "sku145"
            }else if(this.itemElegido.model.indexOf("GRAND SCENIC") >= 0 ) {
              this.code_sku = "sku146"
            }else if(this.itemElegido.model.indexOf("FLUENCE 2.0") >= 0 ) {
              this.code_sku = "sku147"
            }else if(this.itemElegido.model.indexOf("CAPTUR") >= 0 ) {
              this.code_sku = "sku148"
            }else if(this.itemElegido.model.indexOf("KANGOO EXPRESS 1.9D RL") >= 0 ) {
              this.code_sku = "sku149"
            }else if(this.itemElegido.model.indexOf("MEGANE II") >= 0 ) {
              this.code_sku = "sku150"
            }else if(this.itemElegido.model.indexOf("MEGANE RS 2.0TURBO") >= 0 ) {
              this.code_sku = "sku151"
            }else if(this.itemElegido.model.indexOf("KWID") >= 0 ) {
              this.code_sku = "sku152"
            }else if(this.itemElegido.model.indexOf("STEPWAY 1.6") >= 0 ) {
              this.code_sku = "sku153"
            }else if(this.itemElegido.model.indexOf("SYMBOL 1.6") >= 0 ) {
              this.code_sku = "sku154"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }
            break;
          case 35:
            if (this.itemElegido.model.indexOf("KONECT") >= 0 ) {
              this.code_sku = "sku037"
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }
            break;
          
          case 50:
            if (this.itemElegido.model.indexOf("TIIDA") >= 0 ) {
              this.code_sku = "sku015"
            } else if(this.itemElegido.model.indexOf("VERSA") >= 0 ) {
              this.code_sku = "sku016"
            }else if(this.itemElegido.model.indexOf("X-TRAIL") >= 0 ) {
              this.code_sku = "sku034"
            }else if(this.itemElegido.model.indexOf("FRONTIER") >= 0 ) {
              this.code_sku = "sku056"
            }else if(this.itemElegido.model.indexOf("NAVARA") >= 0 ) {
              this.code_sku = "sku057"
            }else if(this.itemElegido.model.indexOf("PATROL") >= 0 ) {
              this.code_sku = "sku058"
            }else if(this.itemElegido.model.indexOf("QASHQAI") >= 0 ) {
              this.code_sku = "sku059"
            }else if(this.itemElegido.model.indexOf("PATHFINDER") >= 0 ) {
              this.code_sku = "sku132"
            }else if(this.itemElegido.model.indexOf("MARCH") >= 0 ) {
              this.code_sku = "sku133"
            }else if(this.itemElegido.model.indexOf("V16 1.6") >= 0 ) {
              this.code_sku = "sku134"
            }else if(this.itemElegido.model.indexOf("JUKE") >= 0 ) {
              this.code_sku = "sku135"
            }else if(this.itemElegido.model.indexOf("ALMERA") >= 0 ) {
              this.code_sku = "sku136"
            }else if(this.itemElegido.model.indexOf("ALMERA") >= 0 ) {
              this.code_sku = "sku137"
            }else if(this.itemElegido.model.indexOf("MURANO") >= 0 ) {
              this.code_sku = "sku138"
            }else if(this.itemElegido.model.indexOf("KICKS") >= 0 ) {
              this.code_sku = "sku139"
            }else if(this.itemElegido.model.indexOf("TEANA") >= 0 ) {
              this.code_sku = "sku140"
            }else if(this.itemElegido.model.indexOf("URVAN") >= 0 ) {
              this.code_sku = "sku141"
            }else if(this.itemElegido.model.indexOf("SENTRA") >= 0 ) {
              this.code_sku = "sku060"
            } else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }            
            break;
          default:
            this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            break          
        }
        this.$store.commit('common/setCode_sku', this.code_sku)
          if (this.$store.state.common.origenCliente == 2) {
            this.objectVehicle.modelId = -1;
            if (this.objectVehicle.modelId == -1) {
              this.objUtm = {
                "1": "utm_campaign=remarketingCN_SOAT_D_1",
                "2": "utm_campaign=remarketingCN_SOAT_D_2",
                "3": "utm_campaign=remarketingCN_SOAT_D_3",
                "4": "utm_campaign=remarketingCN_SOAT_D_4"
              };
              if(this.$store.state.common.businessId == 2){
                this.objUtm = {
                  "1": "utm_campaign=IBK_remarketingCN_SOAT_D_1",
                  "2": "utm_campaign=IBK_remarketingCN_SOAT_D_2",
                  "3": "utm_campaign=IBK_remarketingCN_SOAT_D_3",
                  "4": "utm_campaign=IBK_remarketingCN_SOAT_D_4"
                }
              }
              this.remarketingv2(this.objSOAT.emailAddress != null ? this.objSOAT.emailAddress.toLowerCase(): "",0)
            }
            
          } else if (this.$store.state.common.origenCliente == 1) {
          }
          
          this.activeBox_1 = true;
          this.activeBox_2 = false;
          // this.loading = false;
          // if(this.$store.state.common.origenCliente == 2){
          //     this.objSOAT = JSON.parse(localStorage.getItem("objSOAT"))
          //     if (this.objSOAT.emailAddress != undefined) {
          //     this.objUtm = {"1":"utm_campaign=remarketingCN_SOAT_1","2":"utm_campaign=remarketingCN_SOAT_2","3":"utm_campaign=remarketingCN_SOAT_3","4":"utm_campaign=remarketingCN_SOAT_4"}
          //     this.remarketingv2(this.objSOAT.emailAddress != null ? this.objSOAT.emailAddress.toLowerCase() : "",0)  
          //     }        
          // }else if(this.$store.state.common.origenCliente == 1){
          //     localStorage.setItem("objSOAT","")
          // }

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
          })
      },
      maximoImg() {
        if (this.clonado.vehicle.maximum > this.listCotizacion.vehicle.current) {
          this.maximoImgDisabled = false
          this.minimoImgDisabled = false
          this.listCotizacion.vehicle.current =
            this.listCotizacion.vehicle.current + 100;
          this.cambioInput();
        } else {
          this.maximoImgDisabled = true
        }
      },
      minimoImg() {
        if (this.clonado.vehicle.minimum < this.listCotizacion.vehicle.current) {
          this.minimoImgDisabled = false
          this.maximoImgDisabled = false
          this.listCotizacion.vehicle.current =
            this.listCotizacion.vehicle.current - 100;
          this.cambioInput();
        } else {
          this.minimoImgDisabled = true
        }
      },
      cambioInput(evt) {
        
        if (this.listCotizacion.vehicle.current > this.clonado.vehicle.maximum) {
          this.listCotizacion.vehicle.current = this.clonado.vehicle.maximum
        }else if(this.listCotizacion.vehicle.current < this.clonado.vehicle.minimum){
          this.listCotizacion.vehicle.current = this.clonado.vehicle.minimum
        } else {
          this.$store.commit('common/setCurrent', this.listCotizacion.vehicle.current)
          this.itemElegido.assignedPrice = this.listCotizacion.vehicle.current
          this.getCotizacion()
          this.isDisabled = false;
        }
      },
      validateCreateOrUpdateVehicle () {
        if(this.$store.state.common.vehicleState == 1){   
          this.updateVehicle()
          this.getVehicle()
        }else{
          this.createVehicle()
          this.getVehicle()
        }
      },
      validateVehicleExist (vehicleExistItem) {
        console.log("data", vehicleExistItem)
        if (vehicleExistItem.brandId != "" && vehicleExistItem.brandId != null && vehicleExistItem.brandId != undefined) {
          this.itemElegido.brand = vehicleExistItem.brand
          this.itemElegido.brandId = vehicleExistItem.brandId
          this.mostrarItemMarca = true
          if (vehicleExistItem.modelYear >= 2009) {
            this.itemElegido.modelYear = vehicleExistItem.modelYear;
            this.itemElegido.year = vehicleExistItem.modelYear;
            this.mostrarItemAnio = true
            if(vehicleExistItem.modelId == -1){
              this.mostrarModelo()
            }else{
              this.itemElegido.model = vehicleExistItem.model;
              this.mostrarItemModelo = true
              this.activadorItem = 4              
              this.ocultarItemsSeleccionados = true              
              this.getCotizacion()
            }
          }else{
            this.mostrarAnio()
          }
        }else{
          this.mostrarListaMarca = true
          this.mostrarMarca()
        }
      },
      createVehicle() {
        this.$store.dispatch('common/createVehicle', this.itemElegido).then((res)=>{
          if (res.data.code == 0) { 
            this.itemElegido.assignedPrice = null
            this.clonado.vehicle.current  = null
            this.getCotizacion()
          }else{
            let errorDetectado = {
              url : 'createVehicle',
              page : 2,
              message : res.data.message,
              objEnviado : this.itemElegido
            }
            this.$store.dispatch('common/eventoErrores', errorDetectado)
          }
          
        })
      },
      updateVehicle () {
        this.$store.dispatch('common/updateVehicle', this.itemElegido).then((res)=>{
          if (res.data.code == 0) { 
            this.itemElegido.assignedPrice = null
            this.clonado.vehicle.current  = null
            this.getCotizacion()
          }else{
            let errorDetectado = {
              url : 'updateVehicle',
              page : 2,
              message : res.data.message,
              objEnviado : this.itemElegido
            }
            this.$store.dispatch('common/eventoErrores', errorDetectado)
          }
          
        })
      },
      getCotizacion() {
          this.$store.dispatch('common/getCotizacion', this.itemElegido).then((res) => {
            if (res.data.code == 0) { 
              
              this.listCotizacionTotal = res.data.body
              this.listaBasica = res.data.body.basic
              this.listaMedia = res.data.body.medium
              this.listaFull = res.data.body.allRisk
              this.listCotizacion = res.data.body.allRisk
              this.clonado = Object.assign({}, this.listCotizacion)
              console.log("THIS.LISTCOTIZACION",this.listCotizacion)
              this.$store.commit('common/setCurrent', this.listCotizacion.vehicle.current)
              this.cobertura_is.name = this.itemElegido.brand + ' - ' + this.itemElegido.model + ' - ' + this.itemElegido.modelYear
              this.cobertura_is.discount = '10'
              this.cobertura_is.startDate = this.fechaVigencia
              
              this.cobertura_is.credit = this.endosoSeleccionado.name
              this.cobertura_is.price = this.listCotizacion.policy.annual
              this.cobertura_is.ammount = this.listCotizacion.vehicle.current
              this.cobertura_is.quota = this.listCotizacion.policy.monthly
              this.segundaPantalla()
              this.seleccionarFrecuencia()
            } else if (res.data.code == 213) {
              let errorDetectado = {
                url : 'getcotizacion',
                page : 2,
                message : res.data.message,
                objEnviado : this.itemElegido
              }                
              this.$store.dispatch('common/eventoErrores', errorDetectado)
              this.$swal({
                title: "Oops...",
                text: res.data.message,
                type: "error",
                showCancelButton: false,
                confirmButtonColor: "#2177CC",
                confirmButtonText: "OK"
              });
              this.$nuxt.$router.push({path: "/"})
              
              
            }
            else if(res.data.code === 200){
              if(!this.htmlModal){
                this.htmlModal = document.getElementById('imagePhone');
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
                window.dataLayer = window.dataLayer || [ ];
                dataLayer.push({
                    'event': 'placa_rechazada',
                    'category': 'UI: Cotizador error',
                    'action': 'error',
                    'label': 'error en el servicio'
                })
                goToVehicular();
              });
            } 
            else {
              let errorDetectado = {
                url : 'getcotizacion',
                page : 2,
                message : res.data.message,
                objEnviado : this.itemElegido
              }
              this.$store.dispatch('common/eventoErrores', errorDetectado)

              this.$swal({
                title: "Oops...",
                text: res.data.message,
                type: "error",
                showCancelButton: false,
                confirmButtonColor: "#2177CC",
                confirmButtonText: "OK"
              });              
            }
            
          })
        
      },
      getModelLocal() {
        this.$store.dispatch('common/getModelLocal', this.itemElegido).then((res) =>{
          if (res.data.code == 0) {
            this.listModels = res.data.body            
          }else{
            let errorDetectado = {
              url : 'getModelLocal',
              page : 2,
              message : res.data.message,
              objEnviado : this.itemElegido
            }
            this.$store.dispatch('common/eventoErrores', errorDetectado)
          }
        })
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
        window.dataLayer = window.dataLayer || [ ];
        dataLayer.push({
            'event': 'show_gps',
            'category': 'UI: Cotizador gps',
            'action': 'click',
            'label': 'Tu auto necesita GPS'
        })
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
      
      showModalRootCotizador(){
        this.$refs.modalRootCotizador.show();
      },
      hideModalRootCotizador(){
        this.$refs.modalRootCotizador.hide();
      },
      hideModalEndoso() {
        this.$refs.hideModalEndoso.hide();
      },
      hidemodalEntidadFinanciera() {
          this.$refs.modalEntidadFinanciera2.hide();
          this.mostrarMensajeEnviadoEndosar = false
        
      },
      seleccionarEntidadFinanciera() {
        this.mostrarMensajeEnviadoEndosar = true
        setTimeout(() => {
          this.$refs.modalEntidadFinanciera2.hide();
          this.mostrarMensajeEnviadoEndosar = false
        }, 5000);
        
      },
      hideModal() {
        this.showModal = false;
      },

      /* **************************************************
                  FECHA
      ****************************************************/
      elegirFecha(date) {
        state.date = date
        this.fechaVigencia = moment(state.date).format("DD/MM/YYYY")
        this.listCotizacion.policy.startDate = this.fechaVigencia
        this.$store.commit('common/setFechaVigencia', this.fechaVigencia)
        this.flagElegirFecha = 1
        // localStorage.setItem("flagElegirFecha", 1)
      },

      clickEnlace(enlace){
        let entidadFinanciera = JSON.parse(localStorage.getItem("financialInstitution"))
        if( entidadFinanciera){
          if (entidadFinanciera.id > 0) {
            setTimeout(() => {
              var boxEndosoSesion = document.querySelector("#boxEndosoSesion")
              var endosoSesionItem = boxEndosoSesion.querySelector('#entidad-'+entidadFinanciera.id)
              endosoSesionItem.classList.add("ischecked")
            }, 250);
          }            
        }
      },


      /* **************************************************
                      ENTIDAD FINANCIERA
      ****************************************************/
      setearEntidadFinanciera(item) {
        if (document.getElementById('entidad-'+item.id).classList.contains("ischecked")) {
          document.getElementById('entidad-'+item.id).classList.remove("ischecked");
          this.$store.commit('common/setEntidadFinanciera', {id: 0, name:''})

          this.endosoSeleccionado = 0
          if(this.planSeleccionado == 3){
            this.$store.commit('common/setPlanSeleccionado',3)
            this.$store.commit('common/setEntidadFinanciera', {id: 0, name:''})
          }
        } else {
          let ipt_general = document.getElementsByClassName("ischecked");
          for (let i = 0; i < ipt_general.length; i++) {
            ipt_general[i].classList.remove("ischecked")
          }
          document.getElementById('entidad-'+item.id).classList.add("ischecked")
          this.$store.commit('common/setEntidadFinanciera', item)
          this.endosoSeleccionado = item
          if(this.planSeleccionado == 3){
            this.$store.commit('common/setPlanSeleccionado',10)
          }
        }      
      },
      /* **************************************************
                      ENVIAR MAIL
      ****************************************************/
      enviarMail() {
        this.mostrarMensajeEnviadoCotizacion = true
        if (this.email !== "") {
          this.isDisabledEnviarCorreo = true
          
          this.listCotizacion.policy.startDate = this.fechaVigencia
          this.listCotizacion.paymentMethodId = 3
          this.$store.commit('common/setItemElegido', this.itemElegido)
          this.$store.commit('common/setListaCotizacion', this.listCotizacion)
          
          this.$store.commit('common/setEmail', this.email.trim().replace(/ /g, ""))
          this.objUtm = {
            "1": "utm_campaign=remarketingSN_1",
            "2": "utm_campaign=remarketingSN_2",
            "3": "utm_campaign=remarketingSN_3",
            "4": "utm_campaign=remarketingSN_4"
          }
          if(this.$store.state.common.businessId == 2){
            this.objUtm = {
              "1": "utm_campaign=IBK_remarketingSN_1",
              "2": "utm_campaign=IBK_remarketingSN_2",
              "3": "utm_campaign=IBK_remarketingSN_3",
              "4": "utm_campaign=IBK_remarketingSN_4"
            }
          }
          this.remarketingv2(this.email.trim().replace(/ /g, ""), 2)
            setTimeout(() => {
              this.enviarMailing()
            }, 2000);
        }
      },
      remarketingv2(parametroEmail, parametroEnviarMail) {
        if(this.$store.state.common.businessId == 2){
          this.objPlantilla = {
            "1": "00-ibk-dias.html",
            "2": "03-ibk-dias.html",
            "3": "07-ibk-dias.html",
            "4": "15-ibk-dias.html"
          }
        }else if(this.$store.state.common.nuevoProducto == true){
          this.objPlantilla = {}
          this.objUtm = {}
        }

        this.objRemarketing = {
          codigoRemarketing: "",
          producto: this.$store.state.common.businessId,
          identificador: this.$store.state.common.plateNumber.toUpperCase(),
          detalle: {
            correo: parametroEmail.toLowerCase(),
            codigoVenta: this.$store.state.common.codeRmkt,
            enviarCorreo: parametroEnviarMail,
            pantalla: 1,
            datosCorreo: {
              url: process.env.URL + (this.$store.state.common.promocion == true ? "vehicular/promocion/" : this.$store.state.common.businessId == 1 ? "vehicular" : "vehicular/interbank"),
              plantilla: this.objPlantilla,
              utm: this.objUtm
            },
            datosProducto: {
              urlGlobal : this.$store.state.common.urlGlobal,
              marca : this.$store.state.common.itemElegido.brand,
              modelo : this.$store.state.common.itemElegido.model,
              planSeleccionado : this.planSeleccionado+'',
              valorComercial : this.listCotizacion.vehicle.current,
              pagoMensual : this.listCotizacion.policy.monthly,
              desde : localStorage.getItem("monthly") == null
                ? this.objectVehicle.minimumPolicyAmount
                : null,
              montoMensualBasico:  this.listaBasica.policy.monthly,
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
              geolocalizacion: this.$store.state.common.geolocation 

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
        }
      this.$store.dispatch('common/sendRemarketing',this.objRemarketing).then((res) => {
        if (res) {
          console.log('1')
          this.$store.commit('common/setCodigoRemarketingGenerado', res.data.codigoRemarketing)
        }
        
      })
    },
      enviarMailing() {
        this.$store.commit('common/setEmail', this.email)
          this.$store.dispatch('common/enviarMailing').then((res) => {
            this.mostrarMensajeEnviadoCotizacion = false
            this.$nuxt.$router.push("/cotiza/ingresa-tu-documento")
          }).catch(()=>{
            this.mostrarMensajeEnviadoCotizacion = false
          })
      },
      mouseLeave(e) {
        if (this.clonado.vehicle.current != null && this.clonado.vehicle.current != undefined) {
          if (this.$store.state.common.leaveMessage == 0 ) {
            if (e.clientX < 0 || e.clientY < 0) {
              this.$store.commit('common/setLeaveMessage',1)
              this.$nuxt.$emit('bv::show::modal','leaveQuote2')
            }
          }
        }
      },
  },

  mounted: function () {

    this.urlpdf = require("./../../../static/media/documentos/resumenCoberturas.pdf")
      this.selected = this.$store.state.common.frecuenciaPago
      this.nuevoProducto = this.$store.state.common.nuevoProducto
      this.itemElegido.discountType = this.$store.state.common.discountType
      
      this.objSOAT = this.$store.state.common.clienteSOAT
      this.fechaVigencia =  this.$store.state.common.fechaVigencia
      if(this.$store.state.common.cuentasueldo == "Y"  ){
        this.discountType = "cta-sueldo"
      }else if (this.$store.state.common.tarjetaoh == "Y" ) {
        this.discountType = "tarjeta-oh"
      }else{
        this.discountType = ""
      }
      if(this.fechaVigencia == null || this.fechaVigencia == 'null' || this.fechaVigencia == ''){
        let fecha = new Date()
        let dia = fecha.getDate()
        let mes = fecha.getMonth()+1
        let año = fecha.getFullYear()
        let inicioVigencia = dia+'/'+mes+'/'+año
        this.fechaVigencia = inicioVigencia
        this.$store.commit('common/setFechaVigencia',this.fechaVigencia)
      }else{
        this.fechaVigencia = this.$store.state.common.fechaVigencia
      }
      let objJWT = JSON.parse(localStorage.getItem("jwt"))
      if (objJWT == null || objJWT == undefined) {
        this.$nuxt.$router.push("/")
      }else{
        this.itemElegido.assignedPrice = objJWT.common.current
        this.item.plateNumber = objJWT.common.plateNumber
        this.fechaVigencia = objJWT.common.fechaVigencia
        this.documento_steps2 = objJWT.common.documentoLocal
        
        /* DETECTAMOS SI PLA SELECCIONADO ESTA EN EL OBJ LOCAL */
        this.planSeleccionado = objJWT.common.planSeleccionado
        if (objJWT.common.planSeleccionado == undefined || objJWT.common.planSeleccionado == null) {
          this.planSeleccionado = 3
          this.$store.commit('common/setPlanSeleccionado',this.planSeleccionado)
          this.cobertura_is.variant = "black $"+this.listCotizacion.policy.monthly+"/mes"
          this.seleccionarPLan(this.planSeleccionado)
          this.seleccionarPLanDesktop(this.planSeleccionado)
        }else{
          this.seleccionarPLan(this.planSeleccionado)
          this.$store.commit('common/setPlanSeleccionado',this.planSeleccionado)          
          this.seleccionarPLanDesktop(this.planSeleccionado)
        }
        /* FIN DE PLAN SELECCIONADO */

        /* DETECTAMOS SI ENDOSO DE SESION ESTA EN EL OBJ LOCAL */

        if(objJWT.common.entidadFinanciera.id != 0){
          let entidadFinanciera = objJWT.common.entidadFinanciera
          this.endosoSeleccionado = objJWT.common.entidadFinanciera
          if (entidadFinanciera.id > 0) {        
            this.endosoSeleccionado = objJWT.common.entidadFinanciera
          }
        }else{
          this.$store.commit('common/setEntidadFinanciera', this.endosoSeleccionado)
        }
        /* FIN DE  ENDOSO DE SESION */
        // this.vehicleState = objJWT.common.vehicleState
        if (this.$store.state.common.plateNumber !== '') {
            if (this.$store.state.common.vehicleState == 1) {
              this.PaginaVista('',true)
              // this.objectVehicle = this.$store.state.common.objVehiculo
              this.validateVehicleExist(this.$store.state.common.objVehiculo)
            }else{
              this.PaginaVista('',false)
              this.mostrarListaMarca = true              
              this.mostrarMarca()
            }
            this.mostrarCapa = false
          this.cotizador_datalayer('detail')
        }else{
        }
        
      }
      document.addEventListener('mouseleave', this.mouseLeave, { passive: true})
    },
    destroyed() {
      if (process.browser) {
        document.removeEventListener('mouseleave', this.mouseLeave, { passive: true})
      }
    }
  }
</script>

<style lang="scss" scoped>
.cotizador-2021{
  .box-contador{
        position: absolute;
        bottom: 20px;
        right: 12px;
        .example{
            display: flex;
            align-items: center;
            margin-top: 1px;
        }
        p{
            color: #ffffff;
            font-size: 20px;
            padding-right: 24px;
        }
    }
}
.phoneContent{

    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding: 20px 0px;

    .phoneS{
    width: 100px;
      height: 100px;
      background: #0055c8;
      display: flex;
      justify-content: center;
      border-radius: 50px;
    }
    
}
.modal-blackWeek{
    max-width: 472px;
    width: 100%;
    height: 509px;
    font-family: 'Omnes Regular';
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    .banner-modal{
        img{
            width: 100%;
        }
    }
    h3 {
        font-size: 24px;
        color: #ffffff;
    }
    span {
        font-family: 'Omnes Medium';
    }
    .btn{
        background-color: #ea0c90;
        color: white;
        height: 50px;
        width: 300px;
        line-height: 0.5;
        font-size: 16px;
        border-radius: 3px;
        border: none;
        &:hover{
            opacity: .7;
        }
    }
    p{
        color: #ffffff;
        font-size: 16px;
    }
    .modal-dialog{
        max-width: 472px;
        width: 100%;
        height: 509px;
    }
    .modal-content{
        max-width: 472px;
        width: 100%;
        height: 509px;
        background: url('./../../../static/media/modalBlackWeek/fondo-modal.jpg');
    } 
}
.page-cotizador{
  background: white;
  //padding-top: 50px;
  padding-top: 120px;
  .img-close{
    position: absolute;
    right: -24px;
    top: -20px;
  }
  .flotante-covid{
    position: absolute;
    right: 0;
    z-index: 9;
    .gratis-prueba{
      width: 210px;
    }
    a{
      cursor: pointer;
      z-index: 99;
    }
    .img-close{
      position: absolute;
      right: -24px;
      top: -20px;
    }
    &__cuerpo{
      position: relative;
    }
    img{
      cursor: pointer;
    }
  }
}
.opacityNone{
    opacity: 1 !important;
}
button:focus{
  outline: none;
}
.v2modalGPS{
  &__header{
    display: flex;
    background: #0855c4;
    padding: 16px;
    justify-content: center;
    align-items: center;
    .texto-header{
      padding-left: 8px;
    }
    img{
      width: 79px;
    }
    .titulo{
      font-family: 'Omnes Medium';
      font-size: 18px;
      color: #ffffff; 
      margin-bottom: 8px;
    }
    .descripcion{
      font-family: 'Omnes Regular';
      font-size: 14px;
      color: #ffffff; 
    }
  }
  &__body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .box-empresas{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    p{
      text-align: center;
    }
    .certificado{
      color: #454A6C;
      font-family: 'Omnes Regular';
      font-size: 16px;
      margin-bottom: 24px;
    }
    .tienes-gps{
      color: #0855C4;
      font-family: 'Omnes Medium';
      font-size: 23px;
      margin-top: 36px;
    }
    .finalizar-compra{
      color: #EA0F90;
      font-family: 'Omnes Regular';
      font-size: 16px;
      margin-top: 24px;
    }
    .empresa-item{
      display: inline-flex;
      border: 1px solid #D5D5D5;
      border-radius: 3px;
      align-items: flex-start;
      padding-top: 16px;
      padding-left: 22px;
      padding-right: 22px;
      padding-top: 12px;
      padding-bottom: 12px;
      width: 296px;
      margin-top: 24px;
      img{
        width: 28px;
        height: auto;
        padding-top: 8px;
      }
      span{
        font-size: 11px;
        color: #454A6C;
        font-family: 'Omnes Regular';
      }
      p{
        font-size: 18px;
        color: #454A6C;
        font-family: 'Omnes Medium';
        text-align: left;
      }
      &__der{
        display: flex;
        flex-direction: column;
        width: 55%;
      }
      &__izq{
        display: flex;
        flex-direction: column;
        width: 45%;
      }
    }
  }
  &__footer{
    background: #EFF0F3;
    padding: 16px;
    p{
      color: #454A6C;
      font-size: 13px;
      font-family: 'Omnes Regular';
      text-align: center;
    }
  }
}
.box-mensajeEnviadoCotizacion, .box-mensajeEnviadoEndosar{
  position: absolute;
  background: white;
  width: 100%;
  left: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: none;
  height: 240px;
  .modal-titulo-enviado{
    color: #454A6C;
    font-size: 17px;
    font-family: 'Omnes Medium';
    margin: auto;
    width: 92%;
  }
}
.box-mensajeEnviadoEndosar{
  height: 346px;
  .endosar-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .modal-titulo-endoso{
      color: #0855C4;
      font-size: 24px;
      font-family: 'Omnes medium';
      text-align: center;
      margin: auto;
      margin-bottom: 24px;
      line-height: 35px;
      margin-top: 32px;
    }
  }
}
.mostrarMensajeEnviadoEndosar{
  display: flex;
}
.mostrarMensajeEnviadoCotizacion{
  display: flex;
}
.maximoImgDisabled {
    cursor: not-allowed !important;
}
.minimoImgDisabled {
    cursor: not-allowed !important;
}
.maximoImgDisabled{
  background: #9DA3B5 !important;
}
.minimoImgDisabled{
  background: #9DA3B5 !important;
}
.plan-recomendado{
    height: 40px;
    color: #EA0F8F;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
}

.v2-detalle-plan.planBlack{
  border-top: 5px solid #27362d;
}
.v2-detalle-plan.planOro{
  border-top: 5px solid #e6ac38;
}
.v2-detalle-plan.planPlata{
  border-top: 5px solid #b1b1b1;
}
.v2-planes{
  margin-top: 12px;
  .box-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      background: #ea0c90;
      color: #ffffff;
      height: 50px;
      width: 270px;
      display: inline-block;
      border-radius: 4px;
      font-size: 24px;
      font-family: 'Omnes regular';
      text-align: center;
      line-height: 50px;
      cursor: pointer;
    }
  }
  &--titulo{
    color: #0855C4;
    font-size: 25px;
    font-family: "Omnes Medium";
    text-align: center;
    padding: 24px 0;
  }
}
.v2-suma-asegurada{
  .tooltip-suma-aseguradaDesktop{
    p{
      color: white;
    }
      &:before{
        content: "";
        position: absolute;
        width: 18px;
        height: 10px;
        left: -36px;
        z-index: 0;
        text-align: center;
        align-items: center;
        color: white;
        line-height: 24px;
        background-size: 65%;
        background-repeat: no-repeat;
        background-position: center;
        border-right: 45px solid #44496b;
        border-top: 20px solid rgba(39, 54, 45, 0);
        border-left: 24px solid transparent;
        border-bottom: 20px solid transparent;
        top: 74px;
      }
      position: absolute;
      width: 100%;
      height: 280px;
      top: -40px;
      left: 312px;
      z-index: 999;
      padding: 32px;
      margin: auto;
      display: none;
      flex-direction: column;
      justify-content: center;
      
      .item{
        max-width: 310px;
        height: 280px;
        background: #44496B;
        padding: 24px;
      }
      .tooltip-titulo{
        font-size: 23px;
      }
      .tooltip-descripcion{
        font-size: 16px;
        font-family: 'Omnes Regular';
        margin-top: 12px;
      }
  }
  .tooltip-icon{
    background: #D0D6E0;
    color: white;
    font-size: 14px;
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
    text-align: center;
    justify-content: center;
  }
  &--titulo{
    color: #0855C4;
    font-size: 25px;
    font-family: "Omnes Medium";
    text-align: center;
  }
  .v2-valores-minimo-maximo{
    color: #454A6C;
    font-size: 11px;
    text-align: center;
    font-family: 'Omnes regular';
    margin-top: 8px;
  }
  .v2-valor-comercial{
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    .tooltip-suma-asegurada{
      &:before{
        content: "";
        position: absolute;
        width: 18px;
        height: 10px;
        left: calc(50% - 18px);
        z-index: 999;
        text-align: center;
        align-items: center;
        color: white;
        line-height: 24px;
        background-size: 65%;
        background-repeat: no-repeat;
        background-position: center;
        border-right: 18px solid transparent;
        border-top: 24px solid rgba(39,54,45,0);
        border-left: 18px solid transparent;
        border-bottom: 39px solid white;
        top: -28px;
      }
      position: absolute;
      width: 100%;
      height: 280px;
      top: 60px;
      left: 0;
      z-index: 999;
      padding: 32px;
      margin: auto;
      display: none;
      flex-direction: column;
      justify-content: center;
      
      .item{
        max-width: 310px;
        height: 280px;
        background: white;
        padding: 24px;
      }
      .tooltip-titulo{

      }
      .tooltip-descripcion{
        
      }
    }
    .e-range{
      text-align: center;
      width: 250px;
      margin: 0 12px;
      border: 1px solid #D5D5D5;
      height: 46px;
      color: #454A6C;
      font-size: 24px;
    }
    .box-input{
      position: relative;
      .flotante-moneda{
        height: 45px;
        width: 55px;
        position: absolute;
        font-size: 24px;
        line-height: 45px;
        left: 24px;
        color: #454A6C;
        font-family: 'Omnes Medium';
      }
    }
    .minimoImg, .maximoImg{
      background: #0855C4;
      width: 35px;
      height: 35px;
      border-radius: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 28px;
      cursor: pointer;
      border: none;
    }

  }
}
 
.v2-datos-carro{
  font-family: 'Omnes Regular';
  border: 1px solid #D5D5D5;
  padding: 14px 24px 0;
  .v2-carro-editar{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:before{
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      z-index: 0;
      bottom: 14px;
      right: 0;
      background: #D9D9D9;
    }
    span{
      &:nth-child(1){
        color: #454A6C;
        font-size: 18px;
        font-family: 'Omnes Medium';
        margin-bottom: 24px
      }
    }
    .v2-editar{
      position: relative;
      color: #0f67e6;
      font-size: 14px;
      font-family: "Omnes Semibold";      
      cursor: pointer;
      border: 1px solid #0f67e6;
      padding: 1px 6px;
      border-radius: 3px;
      letter-spacing: 0;
    }
  }
  &__detalle{    
    margin-bottom: 24px;
    display: flex;
    position: relative;
    &--modelo{
      padding-left: 24px;
      font-family: 'Omnes Regular';
      position: relative;
      &:before{
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        z-index: 0;
        top: 0;
        left: 0;
        background: #D9D9D9;
      }
    }
    &--placa{
      min-width: 80px;
      font-family: 'Omnes Regular';
      position: relative;
      
    }
    .mi-modelo-descripcion{
      width: auto;
      display: inline-block;
      color: #454A6C;
      font-size: 16px;
      position: relative;
    }
    p{
      
      color: #454A6C;
      font-size: 16px;
      display: flex;
    }
    span{
      display: inline-block;
      width: 78px;      
      min-width: 78px;

    }
    .v2-editar{
      position: relative;
      cursor: pointer;
      width: 14px;
      min-width: 14px;
      left: 12px;
      height: 15px;
      top: 2px;
    }
    .campo{
      font-family: 'Omnes Medium';
    }
  }
}

.v2-seleccion-planes{
  display: flex;
  justify-content: space-between;
  
  &__item{
    background: #EFF0F3;
    color: #B1B1B1;
    width: 100px;
    padding: 3px 0;
    p{
      font-size: 15px;
      color: #B1B1B1;
      text-align: center;
    }
  }
}
.v2-detalle-plan{
  margin-top: 12px;
  border-radius: 3px;
  border: 1px solid #D5D5D5;
  padding: 35px;
  .dto-cotizador{
    position: relative;
    .flotante-dcto{
      background: #EA0F90;
      color: #ffffff;
      font-family: "Omnes Regular";
      font-size: 25px;
      padding: 12px;
      position: absolute;
      right: -35px;
      top: 0px;
      border-radius: 4px 0 0 4px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .cuota-gratis-span{
        font-size: 16px;
        color: #ffffff;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .detalle-item{
    display: flex;
    align-items: center;
    .symbol-point{
      color: #EA0F90;
      font-size: 8px;
      margin-right: 8px;
      height: 16px;
      display: inline-block;
      line-height: 15px;
      vertical-align: middle;

    }
    .detalle-enlace{
      color: #0855c4;
      text-decoration: underline;
      font-size: 16px;
      font-family: 'Omnes medium';
      :focus{
        outline: none;
      }
    }
  }
  .box-monto-frecuencia{
    display: flex;
    padding-top: 24px;
  }
  
  .que-me-cubre{
    .titulo{
      margin-bottom: 24px;
      font-size: 20px;
      font-family: "Omnes Medium";
      color: #454A6C;
      position: relative;
      
    }
    
    &__item{
      margin: 1px 0;
      color: #454A6C;
      font-size: 16px;
      font-family: "Omnes regular";
      padding-left: 20px;
      position: relative;      
      &:before{
        content: "";        
        background: url("https://www.interseguro.pe/vehicular/resources/campania2020/check.png");
        background-size: contain;
        height: 11px;
        width: 11px;
        position: absolute;
        left: 0;
        top: 6px;
        background-repeat: no-repeat;
      }
    }
    .no-incluye-titulo{
      color: #7F839F;
    }
    .no-incluye{
      color: #7F839F;
      &:before{
        content: "x";
        background: transparent;      
        background-size: contain;
        height: 11px;
        width: 11px;
        position: absolute;
        left: 4px;
        top: 0px;
      }
    }
    
  }
  .box-importante{
    padding: 14px 0;
    margin-top: 32px;
    .titulo{
      font-size: 20px;
      font-family: "Omnes Medium";
      color: #454A6C;
      margin-bottom: 16px;
    }
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      p{
        color: #454A6C;
        font-size: 16px;
        font-family: "Omnes regular";
      }
    }
  }
  &__suma{
    width: 50%;
    .monto-frecuencia{
      color: #454A6C;
      font-family: "Omnes Medium";
      font-size: 30px;
    }
    .antes{
      font-family: "Omnes Regular";
      font-size: 18px;
      margin-top: 12px;
      text-decoration: line-through;
      -webkit-text-decoration-color: #ea0f90;
      text-decoration-color: #ea0f90;
    }
  }
  &__box-frecuencia{
    width: 50%;
    .custom-select{
      height: 45px;
      color: #454A6C;
      font-family: 'Omnes medium';
      font-size: 20px;
      width: 150px;
      cursor: pointer;
    }
  }
  
}
.v2-comparar-planes{
  margin: 36px 0;
  text-align: center;
  a{
    color: #454A6C;
    font-size: 16px;
    text-decoration: underline;
    font-family: "Omnes medium";
  }
}

.enlaceTerminosCondiciones{
  color: #0854c4;
  cursor: pointer;
}
.liston{
  background: #ff9200 !important;
  position: absolute;
  width: 100%;
  height: 56px;
  top: 0;
  position: fixed;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  .desktop_cotizador_liston{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 45px;
    padding: 0 45px 0 8px;
    font-size: 14px;
  }
  .closeListon{
    cursor: pointer;
    position: absolute;
    right: 4px;
    height: 30px;
    top: 5px;
    border-radius: 45px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 18px;
  }
}

.desktop_cotizador_mobile{
  display:  block;
}
.entidad_float{
  display: none;
  position: absolute;
  top: -10px;
  font-size: 12px;
  height: 70px;
  right: calc(-15vw + 2px);
  width: calc(100vw - 87vw);
  img{
    margin-right: 5px;
  }
}
.inputMarcaHide{
  overflow: hidden;
  height: 1px;
}
.ingresaLetraMarca{
  opacity: 0;
}
a.steps__item.paso1:after{
  content: "1" !important;
  background: #0754c4 !important;
  color: white !important;
  text-align: center;
  font-size: 14px;
}
.frase-cotizacion{
  font-size: 19px;
}
.ausencia-control-mobile{
  flex-direction: column;
  display: flex;
  .ausencia-control{
    margin-top: 2px;
    font-size: 11px;
  }
}
.ausencia-controlBox{
  flex-direction: column;
  .ausencia-control{
    margin-top: 5px;
    font-size: 12px;
  }
}
.ausencia-desktop{
  justify-content: center !important;
  flex-direction: column !important;
  height: 60px !important;
  align-items: flex-start !important;
}

.box-btn__button {
  margin-top: 16px;
  animation: shadow-pulse 1s infinite;
}
.contenedor-personalizado{
  background: #fff;
  position: relative;
}
.contenedor-2{
  padding-top: 4px;
  margin-top: 12px;
}
.contenedor-1{
  padding: 0 8px;
}

.bg-shadow{
  box-shadow: 0 2px 10px 0 rgba(0,40,80,0.07);
  background: white;
  border-radius: 24px;
  .borderNone{
    border: none !important;
  }
  .adicional{
    border-radius: 5px;
    border: 1px solid #15b3ff;
    position: relative;
    cursor: pointer;
    &__box{
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background: #15b3ff;
      left: 0;
      top: -28px;
      width: 100%;
      height: 32px;
      border-radius: 4px 4px 0 0;
      text-align: center;
      span{
        margin-right: 8px;
        font-family: 'Omnes Regular';
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.67;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
      }
    }
  }
}
.borderNone{
  border: none !important;
}
.adicionalMobile{
  border-radius: 5px;
  border: 1px solid #15b3ff;
  position: relative;
  width: 66%;
  cursor: pointer;
  .panel-planes__item{
    width: 50%;
    display: inline-block;
    margin-right: -4px;
  }
  &__box{
    position: absolute;
    background: #15b3ff;
    left: 0;
    top: -28px;
    width: 100%;
    height: 32px;
    border-radius: 4px 4px 0 0;
    text-align: center;
    
    span{
      
      font-family: 'Omnes Regular';
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
      font-size: 16px !important;
      line-height: 30px;
    }
  }
}
.descargar_cobertura{
  max-width: 131px;
}
.miAuto{
  .placa{
    font-family: 'Omnes Regular';
    font-weight: 600;
    
  }
  p{
    font-size: 17px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 1px;
    color: #0754c4 !important;
  }
}
.editar-vehiculo-desktop{
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
.card-cobertura .card-header a[data-v-614db64e]:not(:disabled):not(.disabled):active, .card-cobertura .card-header a:not(:disabled):not(.disabled).active[data-v-614db64e], .card-cobertura .card-header .show > a.dropdown-toggle[data-v-614db64e] {
    color: #fff;
    background-color: #0754c4;
}
.w180px{
  min-width: 150px;
  padding-left: 8px;
  padding-right: 4px;
  font-size: 12px;
}
.table-planes{
  .check-table{
    color: #696969;
    font-size: 22px;
    text-align: center;
  }
  &__titulo{
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    width: 60px;
    span{
      height: 20px;
      padding: 2px 4px;
      text-align: center;
      vertical-align: middle;
      display: inline-block;
      line-height: 17px;
      color: white;
      width: 50px;
    }
    span.plata{
      background-color: #b1b1b1;
    }
    span.oro{
      background-color: #e6ac38;
    }
    span.black{
      background-color: #27362d;
    }
  }
  &__robo{    
  }
  &__semifull{
  }
  &__full{
  }
  tbody{
    tr{
      height: 39px;
      &:nth-child(even){        
        background: #f0f2f6;
      }
    }
  }
}

.detallePlan-titulo{
  height: 56px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  flex-direction: column;
  p{
    font-family: 'Omnes Medium';
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 1px;
    color: #0754c4;
    text-transform: uppercase;
  }

}
.precioRegular{
  font-size: 14px !important;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.07px;
  color: #828282 !important;
  text-align: center;
  display: inline-block;
  width: 100%;
  margin-bottom: 5px;
}
.box-dto{  
  position: absolute;
  right: -12px;
  top: 10px;
  box-shadow: 0 2px 10px 0 rgba(0,40,80,0.07);  
  background: url('../../../static/media/img/cotizacion/dto_fondo.png');
  background-size: contain;
  background-repeat: no-repeat;
  img{
    max-width: 115px;
    width: 100%;
  }
  span{
    text-align: center;
    width: 130px;
    height: 22px;
    font-family: 'Omnes Medium';
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    color: #0855c4;
    display: inline-block;
  }
}
.planHover{
  max-width: 160px;
  margin: auto;
  cursor: pointer;
  &:hover{
    // box-shadow: 0 2px 4px 0 #363232;
      box-shadow: 0 2px 8px 0 #89adbf;
  }
}
.detallePlan.pt-45{
    padding-top: 45px;
}


.detallePlan{

  .check-planes{
    color: #696969;
    font-weight: 700;
  }
  .plan-item{     
    border-radius: 8px;
    overflow: hidden;
    &__header{
      height: 34px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    &__cuerpo{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 55px;
    }
  }
  &--item{
    display: flex;
    align-items: center;
  }
  &__lista{
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    // padding-top: 24px;
    position: relative;
    .planRecomendado{
      background: #0754c4;
      position: absolute;
      width: 100%;
      top: 0;
      height: 24px;
      p{
        font-family: 'Omnes Medium';
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.3px;
        text-align: center;
        color: #fece08;
      }
    } 
  }
  .lista-plan0{
    p{
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: 0.08px;
      padding: 0 12px;
    }    
  }
  .lista-plan3{
    &:after{
      background: #fece08;
      content: 'Plan recomendado ';
      height: 24px;
      color: #0754c4;
      position: absolute;
      top: 0;
      width: 100%;
      text-align: center;
      line-height: 24px;
      font-size: 13px;
    }
  }
  &--item{
    height: 40px;
    margin-right: 1px;
    p{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .descripcion{
      justify-content: flex-start;
    }
  }
  .detallePlan--item:nth-child(even){
    background-color: #f0f2f6;
  }
  .detallePlan--item3:nth-child(odd){
    background-color: #f0f2f6;
  }
  &__titulo{
    font-family: 'Omnes Medium';
    font-size: 32px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    .mes{
      font-family: 'Omnes Medium';
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: right;
      color: #ffffff;
    }
    .dolar{
      font-size: 16px;
      color: white;
    }
    
    .subtitulo{
      font-size: 18px;
    }
  }
}
.planInactivo{
  box-shadow: none;
}
.planActivo{
  background: #6B797F !important;
  position: relative;
  &:before{
    content: "";
    position: absolute;
    width: 20px;
    height: 10px;
    left: 39px;
    bottom: -19px;
    z-index: 9;
    text-align: center;
    align-items: center;
    color: white;
    line-height: 24px;
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: center;
  }
}
.roboTotal{
  border-radius: 2px; 
  
}
.semifull{
  height: 56px;
  border-radius: 2px;  
}
.full{
  height: 56px;
  border-radius: 2px;
  
}
.texto-seleccionaPlan{
  padding: 12px 0  4px;
  font-family: 'Omnes Medium';
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 0.09px;
  color: #0754c4;
}
.panel-planes{
  display: flex;
  width: 100%;
  
  &__item{
    padding: 4px;
    width: 33%;   
    
  }
  .item{
    width: 100%;
    height: 50px;
    border-radius: 8px;
    padding-top: 0;
    background: #EFF0F3;
  }
  p,span{
    font-size: 11px;
  }
  .plan-item{     
    border-radius: 3px;
    overflow: hidden;
    &__header{
      height: 26px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    &__cuerpo{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 16px;
    }
  }

  span{
    font-size: 18px;
  }
  .subtitulo{
    font-size: 12px;
    font-weight: bold;
  }
  .cuota{
    font-size: 24px;
  } 
}
.basico__monto-mensual, .semifull__monto-mensual, .full__monto-mensual{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  span{
    color: white !important;  
    
  }
}
.card-cobertura{
  width: 100%;
  .escudo_cobertura{
    position: absolute;
    left: 9px;
    width: 18px;
  }
  .flecha_cobertura{
    position: absolute;
    right: 9px;
    width: 18px;    
    background: url('../../../static/media/interseguroVehicular_v2/flecha_cobertura_cerrar.png');
    height: 18px;
    top: 9px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .collapsed{
    .flecha_cobertura{
      background: url('../../../static/media/interseguroVehicular_v2/flecha_cobertura_abrir.png');
      position: absolute;
      right: 9px;
      width: 18px;      
      height: 18px;
      top: 9px;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  .card-body{
    padding: 0;
  }
  .card-header{
    padding: 0;
    a{
      background-color: #0754c4;
      border: none;
    }
    a:not(:disabled):not(.disabled):active, a:not(:disabled):not(.disabled).active, .show > a.dropdown-toggle {
        color: #fff;
        background-color: #0754c4;
    }
  }
}
.capaOculta{
  background: #f7fafb;
  position: absolute;
  width: 100%;
  height: 450px;
  z-index: 999;
  display: none; 
  align-items: center;
  .v-spinner{
    background:  transparent !important;
    height: 450px !important;

  }
}
.capaOcultaGris{
    background: rgba(37, 39, 51, 0.74902);
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 999;
    display: none;
    align-items: center;
    top: 0;
}
.mostrarCapaGris{
  display: block !important;
}
.mostrarCapa{
    display: block;
  }
  .tomar-cuenta{
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.35px;
    color: #565656;
  }
  .descargar-detalle{
    margin: 24px 0;
    text-align: center;
    a{
      cursor: pointer;
      color: #454A6C;
      font-size: 16px;
      font-family: "Omnes medium";
      text-decoration: underline;
    }
  }
  .item-inferior{
    position: absolute;
    bottom: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    left: 0;
  }
  .mail-cotizador{
    &:hover{
    background: #0855c4;
    color: #ffffff;
  }
  }
  .boton-fecha{
    background-image: none !important;
    background-position-x: 0 !important;
    .detalle-item{
      justify-content: center;
    }
    p{
      width: auto;
    }
  }
.mail-fecha{
  justify-content: center;
  display: flex;
  align-items: center;
  color: #0855c4;
  border-radius: 4px;
  width: 240px;
  height: 46px;
  border: 1px solid #0855c4;
  margin: auto;
  margin-top: 24px;
  background-image: url(../../../static/media/interseguroVehicular_v2/mail-cotizador.svg);
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: right;
  background-position-x: 170px !important;
  transition: .5s;
  &:hover{
    background-color: #0855c4;
    background-image: url(./../../../static/v2_icon/email.png);
    background-repeat: no-repeat;
    background-size: 40px;
    background-position: right;
    background-position-x: 170px;
    transition: .5s
  }
  .enviar-cotizacion{
    position: relative;
    left: -15px;
  }
  .detalle-item{
    width: 100%;
  }
  img{
    width: 36px;
    height: auto;
  }
  p{
    font-family: "Omnes Medium";
    line-height: 1;  
    color: #0855c4;
    font-size: 14px;  
    padding-top: 4px;
    font-size: 16px;
    padding-left: 4px;  
  }
  
}

.ocultarItemsSeleccionados{
  display: none !important;
}
.datos-vehiculo-mobile{
  padding-top: 14px;
  .mi-carro{
    font-family: 'Omnes Regular';
    font-size: 22px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    color: #0754c4;
    padding-bottom: 8px;
  }
  .item{
    height: 22px;
    line-height: 22px;
    position: relative;
  }
  .flecha_edicion{
    width: 13px;  
    height: 7px;
    position: relative;
    top: -2px;
    left: 3px;
  }
  .editar-vehiculo{
    position: absolute;
    right: 8px;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #0754c4;
    border: 1px solid #0754c4;
    border-radius: 6px;
    padding: 2px 10px;
  }
}
.box-range{
  width: 80%;
  position: relative;
  z-index: 5;
  p{
    text-align: center;
  }
  input{
      margin: 0px !important;        
      padding-top: 0;
  }
}


/******************************************************************************************************* */
/******************************************************************************************************* */
/******************************************************************************************************* */
$height: 30px;
$thumb-height: 26px;
$track-height: 8px;

// colours
// $upper-color: #d8d8d8;
// $lower-color: #00ADEE;
// $thumb-color: #0055c8;
// $thumb-hover-color: #007bff;
$upper-color: #d8d8d8;
$lower-color: #00ADEE;
$thumb-color: #00ADEE;
$thumb-hover-color: #00ADEE;

$upper-background: linear-gradient(to bottom, $upper-color, $upper-color) 100% 50% / 100% $track-height no-repeat transparent;
$lower-background: linear-gradient(to bottom, $lower-color, $lower-color) 100% 50% / 100% $track-height no-repeat transparent;

// Webkit cannot style progress so we fake it with a long shadow
// on the thumb element
@function webkit-slider-thumb-shadow($i: 1) {
  $val: #{$i}px 0 0 -#{($thumb-height - $track-height) / 2} #{$upper-color};
  @if $i == 1 {
    @for $k from 2 through 1000 {
      $val: #{$val}, webkit-slider-thumb-shadow($k);
    }
  }
  @return $val;
}

.e-range {
  display: block;
  appearance: none;
  width: 100%;
  margin: 0;
  height: $height;
  overflow: hidden;
  cursor: pointer;
  background: #EFF0F3;
  border: none !important;
  &:focus {
    outline: none;
  }
}

// Webkit
.e-range::-webkit-slider-runnable-track {
  width: 100%;
  height: $height;
  background: $lower-background;
}

.e-range::-webkit-slider-thumb {
  position: relative;
  appearance: none;
  height: $thumb-height;
  width: $thumb-height;
  background: $thumb-color;
  border-radius: 100%;
  border: 0;
  top: 50%;
  margin-top: (-$thumb-height/2);
  box-shadow: webkit-slider-thumb-shadow();
  transition: background-color 150ms;
}

// Firefox
.e-range::-moz-range-track,
.e-range::-moz-range-progress {
  width: 100%;
  height: $height;
  background: $upper-background;
}

.e-range::-moz-range-progress {
  background: $lower-background;
}

.e-range::-moz-range-thumb {
  appearance: none;
  margin: 0;
  height: $thumb-height;
  width: $thumb-height;
  background: $thumb-color;
  border-radius: 100%;
  border: 0;
  transition: background-color 150ms;
}

// Internet Exploder
.e-range::-ms-track {
  width: 100%;
  height: $height;
  border: 0;
  // color needed to hide track marks
  color: transparent;
  background: transparent;
}

.e-range::-ms-fill-lower {
  background: $lower-background;
}

.e-range::-ms-fill-upper {
  background: $upper-background;
}

.e-range::-ms-thumb {
  appearance: none;
  height: $thumb-height;
  width: $thumb-height;
  background: $thumb-color;
  border-radius: 100%;
  border: 0;
  transition: background-color 150ms;
  // IE Edge thinks it can support -webkit prefixes
  top: 0;
  margin: 0;
  box-shadow: none;
}

.e-range:hover,
.e-range:focus {

  &::-webkit-slider-thumb {
    background-color: $thumb-hover-color;
  }
  &::-moz-range-thumb {
    background-color: $thumb-hover-color;
  }
  &::-ms-thumb {
    background-color: $thumb-hover-color;
  }
}



/******************************************************************************************************* */
/******************************************************************************************************* */
/******************************************************************************************************* */
.lista1, .lista2, .lista3{
  display: none;
  
}
.listas{
  &--box{   
    background: white;
    height: auto;
    max-height: 300px;
    overflow: scroll;
    border-radius: 8px;
    box-shadow: 0 2px 10px 0 rgba(0,40,80,0.07);
    &::-webkit-scrollbar {
      width: 8px;     /* Tamaño del scroll en vertical */
      height: 8px;    /* Tamaño del scroll en horizontal */      
    }
    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;
    }
    .item{
      height: 35px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      padding-left: 8px;
      font-size: 1rem;
      font-family: 'Omnes Medium';
      cursor: pointer;
      p{
        height: 35px;
        line-height: 35px;     
      }      
      &:hover{
        background: #f7fafb;
      }
    }  
  }
}
.mostrarListaMarca{
  display: block;
}
.mostrarListaAnio{
  display: block;
}
.mostrarListaModelo{
  display: block;
}
.mostrarItemMarca, .mostrarItemAnio, .mostrarItemModelo{
  display: inline-flex;  
}

.itemEndosoActivo {
  background: red;
}
.endosoSesion {
  height: 145px;
  overflow-y: scroll;
    padding: 0 24px;
  .endosoItem {
    display: flex;
    align-items: center;
  }
  .endosoUncheck {
    width: 15px;
    height: 15px;
    border: 1px solid gray;
    border-radius: 2px;
    background-size: contain;
  }
  .ischecked {
    background: #007bff;
    background-image: url("../../../static/media/img/flujo/cotizacion/tick.png");
    background-size: 75%;
    background-position: center;
    border: none;
    background-repeat: no-repeat;
  }
  label {
    width: 90%;
    display: inline-block;
    height: 35px;
    line-height: 35px;
  }
  div {
    height: 38px;
    cursor: pointer;
    &:hover {
      background: #f7f7f7;
    }
    span {
      padding-left: 12px;
      cursor: pointer;
      width: 100%;
      display: inline-block;
      line-height: 1px;
    }
  }
}
.box-btnEndosoSesion {
  text-align: center;
  padding: 20px 0px;
  button {
    background: white;
    padding: 8px 19px;
    font-size: 16px;
    border: 1px solid #ea0c90;
    color: #ea0c90;
    border-radius: 100px;
    transition: all 0.75s;
    &:hover {
      background: #ea0c90;
      color: white;
      transition: all 0.75s;
    }
  }
}
.endosoSesion::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

.endosoSesion::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.endosoSesion::-webkit-scrollbar-thumb {
  background-color: #4e4c4c;
  border: 2px solid #555555;
}
.steps-box {
  padding: 0px;
}
.box-campaniatv {
  .enlace-smarttv {
    font-size: 15px;
    color: #0855c4;
    font-weight: 500;
    text-decoration: underline;
  }
  .campaniatv-textos {
    color: #5fa9fc;
    font-family: 'Omnes Medium';
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    text-align: left;
  }
}
.requiere-gps {
  color: #454A6C;
  font-size: 16px;
  font-family: "Omnes regular";
  &:hover {
    cursor: pointer;
  }
}
.leaveModal{
  .img-close-modal{
        position: absolute;
    top: -91px;
    right: -46px;
    cursor: pointer;
  }
}
.modalCompararPlanes{
   .img-close-modal{
    position: absolute;
    top: -38px;
    right: -38px;
    cursor: pointer;
  }
  p{
    font-size: 24px;
    color: #454A6C;
    text-align: center;
  }
  .modal-content{
    border: none;
  }
}
.modal-rootCotizador{
  border: none;
  .img-close-modal{
    position: absolute;
    top: -38px;
    right: -38px;
    cursor: pointer;
  }
  .modal-head{
    // padding-top: 32px;
  }
  .modal-content{
    border: none;
  }
  .modal-body{
    display: flex;
    flex-direction: column;
    &__item{
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
    // .tercer-item{
    //   display: flex;
    //   flex-direction: column;
    // }
  }
  .box-titulo{
    p{
      text-shadow: 0 3px 6px rgba(8, 84, 196, 0.02);
      font-family: 'Omnes Medium';
      font-size: 24px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      text-align: center;
      color: #0854c4;
    }
    span{
      text-shadow: 0 3px 6px rgba(8, 84, 196, 0.02);
      display: inline-block;
      font-family: 'Omnes Regular';
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      text-align: center;
      color: #0854c4;
      width: 100%;
    }
  }
  .box-descripcion{
    padding-left: 12px;
    .titulo{
      font-family: 'Omnes Regular';
      font-size: 18px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.89;
      letter-spacing: normal;
      text-align: left;
      color: #14aded;
    }
    .desc{
      font-family: 'Omnes Regular';
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29;
      letter-spacing: normal;
      text-align: left;
      color: #454a6c;
    }
    
  }
  .disclaimer-porcentaje{
    font-family: 'Omnes Regular';
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    text-align: left;
    color: #454a6c;
    margin-top: 24px;
  }
  .box-img{
    img{
      height: 90px;
      width: auto;
      max-width: initial;
    }
  }
  .box-btn{
     button{
       width: 260px;
     }    
  }
}
.modal-gps,
.modal-endoso {
  position: relative;
  border: 0 !important;
  .modal-close {
    position: absolute;
    right: 0;
    top: 0;
    right: -42px;
    top: -49px;
    background: transparent !important;
  }
  .box-titulo {
    color: #00adee;
    font-family: 'Omnes Medium';
    font-size: 21.5px;
    font-weight: 600;
    letter-spacing: -0.31px;
    line-height: 26px;
    text-align: center;
    display: inline-block;
    display: flex;
    justify-content: center;
    position: relative;
    h2 {
      border: 2px solid #00adee;
      display: inline-block;
      position: relative;
      font-size: 28px;
      padding: 5px 25px;
    }
  }
  .modal-body {
    display: flex;
    margin-bottom: 0;
    padding-bottom: 0;
    flex-direction: column;
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .box-paso {
      color: #ea0c90;
      font-family: 'Omnes Medium';
      font-size: 15.74px;
      font-weight: 600;
      letter-spacing: -0.16px;
      line-height: 19px;
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Omnes Medium';
        font-size: 28px;
        font-weight: 600;
        line-height: 43px;
      }
    }
    .box-descripcion {
      color: #5e5e5e;
      font-family: 'Omnes Medium';
      font-size: 15.74px;
      font-weight: 500;
      line-height: 19px;
      text-align: center;
    }
  }
}

.modeloFaltante,
.marcaFaltante,
.añoFaltante {
  border: 1px solid #0855c4 !important;
}

.msg_atiguedad {
  display: none;
}
.modal-body {
  min-height: 180px;
}
.select_modelo {
  border: 2px solid #0855c4 !important;
  border-radius: 2px;
}
.is_disabled_marcaAno {
  display: none;
}
.box_capa {
  position: relative;
  width: 100%;
  margin: auto;
  text-align: center;
}
.capa_select {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #d7d7d77d;
  z-index: 9;
  height: 100%;
}
.msgMontoErroneo {
  visibility: hidden;
}

.is_oculto_textMarca {
  display: inline-block !important;
  opacity: 1 !important;
  transition: opacity 0s ease-in;
}
.año-fabricacion {
  opacity: 0;
  transition: opacity 0s ease-in;
  color: #0855c4;
  font-size: 13px;
  line-height: 14px !important;
  display: inline-block;
}
.oculto {
  display: none;
}
.box-btn {
  margin: 0px 0 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-weight: 500;
  margin: 16px 0;
  padding-bottom: 16px;
  &__backContinuar {
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &--dni {
    padding: 0 12px !important;
    width: 170px !important;
    font-size: 17px !important;
    font-family: 'Omnes Medium';
    &:disabled {
      background: #9b9b9b;
    }
  }
  .backcotizacion {
    color: #757575;
    cursor: pointer;
  }
  a {
    width: 80px;
    margin: 0;
  }
  span {
    display: inline-block;
    text-align: left;
  }
  button {
    display: inline-block;
    margin: 0;
    width: 80%;
    left: 10%;
    height: 45px;
    line-height: 45px;
    padding: 0;
    background: #ea0c90;
    color: white;
    font-size: 15px;
    font-family: 'Omnes Medium';
    border-radius: 3px;
  }
}
.box-btn__button.box-btn--back {
  padding-left: 0;
  padding: 0;
  width: 170px;
}
.form-content {
  &__title {
    font-size: 22px;
    text-align: center;
    width: 240px;
    margin: auto;
  }
}

.fa-check:before {
  color: white;
}

/**************************************************/
.box-input {
  // margin-bottom: 1rem;
  background: transparent;
  .input-vehicular {
    border: none;
    border: 1px solid #0855c4;
    border-radius: 0;
    font-size: 13px;
    background: transparent;
    width: 100%;
    border-radius: 4px;
  }
}
/********************************************************************
                    INICIO BOX COTIZACION 1
*********************************************************************/
.box-cotizacion1 {
  height: 345px;
  margin-bottom: 16px;
  position: absolute;
  z-index: 2;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  .box-select {
    background: #f7fafb;
    border-radius: 12px 12px 0 0;
    padding: 32px 24px;
    .titulo {
      color: #0855c4;
      font-size: 16px;
      font-weight: 600;
    }
  }
  .box-img {
    background: #e3eaf5;
    border-radius: 0 0 12px 12px;
    min-height: 200px;
    &__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      color: #0855c4;
      font-size: 20px;
      text-align: center;
      line-height: 20px;
      .img-logo {
        transform-style: preserve-3d;
        // animation: 5s rotacion infinite;
      }
      p {
        margin-top: 8px;
      }
    }
  }
}

.activeBox_1 {
  z-index: 1;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
}
/********************************************************************
                    FIN BOX COTIZACION 1
*********************************************************************/
/********************************************************************
                    INICIO BOX COTIZACION 2
*********************************************************************/
.checkbox-aux__span {
  position: relative;
  display: inline-block;
  border: 1px solid #a9a9a9;
  border-radius: 0.25em;
  width: 1em;
  height: 1em;
  float: left;
  margin-right: 0.3em;
  i {
    position: absolute;
    font-size: 14px;
  }
}
.box-cotizacion2 {
  position: relative;
  z-index: 3;
  opacity: 1;
  transition: opacity 1s ease-out;
  // min-height: 380px;
  .box-btn {
    margin-top: 18px;
    margin-bottom: 0;
  }
  .box-tooltip {
    position: relative;
    margin-bottom: 4px !important;
    &__valor-comercial {
      font-size: 15px;
      color: #0855c4;
      font-weight: 500;
      line-height: 20px;
      width: 100%;
      display: inline-block;
      word-spacing: 2px;
      font-weight: 600;
    }
    .valor-comercial-small {
      position: relative;
      font-size: 13px;
      width: 16px;
      background: transparent;
      height: 16px;
      display: inline-block;
      border-radius: 50%;
      text-align: center;
      line-height: 15px;
      color: #9e9e9e;
      font-weight: 600;
      border: 1px solid #9e9e9e;
      &:hover {
        cursor: pointer;
      }
    }
    #msg-valor {
      display: none;
      position: absolute;
      background: #002e75;
      color: white;
      bottom: 28px;
      width: 240px;
      padding: 8px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 500;
      left: 0;
    }
  }
  .box-range {
    width: 100%;
    position: relative;
    z-index: 5;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      width: 2px;
      height: 15px;
      right: 10%;
      bottom: -7px;
      background: red;
    }
    &:before {
      content: "";
      position: absolute;
      width: 2px;
      height: 15px;
      left: 10%;
      bottom: -7px;
      background: red;
    }
    .box-edit {
      position: relative;
      width: 100%;
      margin: auto;
      &:after {
        content: "$";
        width: 25px;
        position: absolute;
        top: 7px;
        font-size: 20px;
        left: 20%;
        color: #495057;
      }
      i {
        position: absolute;
        font-size: 22px;
        color: #757575;
        right: 12%;
        top: 25%;
      }
    }
    input {
      margin: auto;
      padding-top: 0;
      width: 80%;
      height: 45px;
      font-size: 22px;
      line-height: 24px;
      text-align: center;
      padding: 0;
      border: none;
      border-bottom: 2px solid red;
      border-radius: 0;
      position: relative;
      background: transparent;
      z-index: 9;
      &:hover {
        cursor: pointer;
      }
      &:focus {
        box-shadow: none;
      }
    }
  }



.cotizador{
  padding-bottom: 14px;
}
  .cotizacion {
    background: #e3eaf5;
    border-radius: 0 0 12px 12px;
    padding: 32px 24px;
    flex-direction: column;
    display: flex;
    &__dto {
      position: absolute;
      top: 0;
      right: 0;
      img {
        width: 94px;
        height: 94px;
      }
    }
    &__boxImg {
      display: flex;
      justify-content: center;

      img {
        width: 94px;
        height: 94px;
      }
    }
    .cotizacion-datos_dto {
      color: #818181;
      font-family: 'Omnes Medium';
      font-size: 15px;
      font-weight: 500;
      line-height: 17px;
      text-align: left;
      text-decoration: line-through;
    }
    .priceHead__head--detail {
      .checkbox-aux__descripcion {
        color: #666666;
        font-family: 'Omnes Medium';
        font-size: 10.8px;
        font-weight: 500;
        line-height: 11.7px;
        width: 135.17px;
        text-align: left;
        left: 45px;
      }
      .cobertura-enlace {
        color: #5e5e5e;
        font-family: 'Omnes Medium';
        font-size: 15px;
        font-weight: 500;
        line-height: 16px;
        text-align: left;
        margin-top: 16px;
        a {
          color: #0855c4;
          text-decoration: underline;
        }
      }
      .endoso {
        color: #5e5e5e;
        font-family: 'Omnes Medium';
        font-size: 15px;
        font-weight: 500;
        line-height: 16px;
        text-align: left;
        a {
          text-decoration: underline;
          color: #0855c4;
        }
      }
    }
    .text-endosar {
      font-size: 12px;
      padding-left: 4px;
      padding-top: 8px;
      display: flex;
      align-items: center;
      img {
        padding-right: 4px;
      }
    }
    .cotizacion-datos {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
      .etiqueta_dsct {
        position: absolute;
        right: 0;
        width: 50px;
      }
      &__item {
        display: flex;
        align-items: flex-end;
      }
      &__head {
        &--detail {
          margin-bottom: 24px;
        }
      }
      .monto-anual {
        color: #5fa9fc;
        font-family: 'Omnes Medium';
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        text-align: left;
      }
      .monto-mensual {
        font-size: 20px;
        font-family: 'Omnes Medium';
        font-size: 64px;
        font-weight: 900;
        color: #5fa9fc;
        margin-bottom: 0;
        text-align: left;
        line-height: 52px;
        display: inline-block;
        vertical-align: top;
        small {
          vertical-align: top;
          font-size: 48px !important;
          padding-top: 8px;
          margin-right: -10px;
        }
      }
      .text-mensual {
        display: inline-block;
        font-size: 18px;
        color: #5fa9fc !important;
      }
      .igv_anual {
        font-size: 16px;
      }

      .box-tooltip {
        position: relative;
        margin-bottom: 4px !important;
        &__gps {
          font-size: 15px;
          color: #0855c4;
          font-weight: 500;
          line-height: 20px;
          width: 100%;
          display: inline;
          word-spacing: 2px;
          font-weight: 600;
        }
        .gps-small {
          position: relative;
          font-size: 13px;
          width: 16px;
          background: transparent;
          height: 16px;
          display: inline-block;
          border-radius: 50%;
          text-align: center;
          line-height: 15px;
          color: #ea0c90;
          font-weight: 600;
          border: 1px solid #ea0c90;
        }
        #msg-valor {
          display: none;
          position: absolute;
          background: #002e75;
          color: white;
          bottom: 28px;
          width: 240px;
          padding: 8px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          left: 0;
        }
      }

      .gps {
        position: relative;
        color: #5e5e5e;
        font-family: 'Omnes Medium';
        font-size: 15px;
        font-weight: 500;
        line-height: 16px;
        text-align: left;
        strong {
          font-size: 17px;
        }
      }
    }
    .priceHead__head--detail {
      .cobertura {
        color: #616161;
      }
    }
    .incluye_igv {
      position: relative;
      display: block;
      color: #666666;
      font-family: 'Omnes Medium';
      font-size: 13px;
      font-weight: 500;
      line-height: 16px;
      text-align: left;
    }
  }
}
.todo-riesgo {
  background: #f7fafb;
  border-radius: 12px 12px 0 0;
  padding: 32px 24px;
  &__head {
    margin-bottom: 8px;
    .box-titulos {
      display: inline-block;
      &__titulo {
        color: #0855c4;
        font-size: 17px;
        font-weight: 600;
        display: inline-block;
        position: relative;
        &:after {
          position: absolute;
          height: 2px;
          width: 100%;
          background: #0855c4;
          left: 0;
          bottom: -4px;
        }
      }
      &__subtitulo {
        margin-bottom: 0;
        color: #666666;
        font-size: 16px;
      }
    }
    img {
      display: inline-block;
      padding-right: 8px;
    }
  }
  &__datosVehiculo {
    margin-bottom: 16px;
    p {
      margin-bottom: 0;
      color: #616161;
      line-height: 1 !important;
      font-size: 15px;
      font-weight: 500;
      padding-top: 4px;
      &:nth-child(1) {
        text-transform: uppercase;
      }
      &:nth-child(2) {
      }
      span {
        padding-top: 4px;
        color: #0855c4;
        font-size: 15px;
        text-decoration: underline;
      }
    }
  }
  .valorComercial {
    padding-top: 24px;
    .checkbox-aux label input[type="checkbox"]:checked + .checkbox-aux__span {
      background: #0855c4;
    }
    .checkbox-aux__descripcion {
      left: 35px;
    }
  }
  .box-msgMontos {
    width: 100%;
    text-align: center;
    opacity: 0;
    line-height: 12px;
    padding-top: 32px;
    &__text {
      padding-top: 4px;
      font-size: 14px;
      color: #c01010;
    }
  }
  .msgMontosActive {
    opacity: 1 !important;
    transition: all 0s ease-in;
  }

  &__subtitulo {
    color: #0855c4;
    font-size: 16px;
    font-weight: 600;
  }
  &__lista {
    padding-left: 0;
    li {
      list-style: none;
    }
  }
}

/********************************************************************
                  FIN COTIZACION BOX 2
*********************************************************************/

.activeBox_2 {
  z-index: 1;
  transition: opacity 0s ease-out;
  opacity: 0;
  position: absolute;
  display: none;
}

.detalle-marca {
  min-height: 26px;
  .span-alterno {
    font-size: 15px;
  }
  .placa {
    font-size: 20px;
  }
}
.btnTodoRiesgo {
  border: 1px solid #ea0c90;
  background: transparent !important;
  color: #ea0c90 !important;
  font-size: 14px;
  line-height: 1;
  display: flex;
  justify-content: center;
  padding: 12px 0;
  margin-right: 12px !important;
  padding: 0 8px !important;
  font-family: 'Omnes Medium';

  span {
    &:nth-child(1) {
      letter-spacing: 0;
    }
    display: block;
    padding-left: 4px;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 16px;
    text-align: center;
    font-family: 'Omnes Medium';
  }
  &:hover {
    background: white !important;
    color: #ea0c90 !important;
  }
}

/********************************************************************
                    MODAL ENVIAR CORREO
*********************************************************************/
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-close {
  position: absolute;
  right: -15px;
  top: -15px;
  z-index: 9999;
}

.modal-container__custom {
  position: relative;
  width: 92%;
  margin: 0px auto;
  padding: 0px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  .modal-close-cotizacion {
    font-family: 'Omnes Semibold';
    font-size: 30px;
    width: 40px;
    height: 40px;
    top: -16px;
    right: -10px;
    padding: 0;
    position: absolute;
    color: #006ab8;
    opacity: 1;
    border-radius: 50%;
    
    box-shadow: 1px 2px 20px 0 rgba(0, 0, 0, 0.6);
    text-align: center;
    line-height: 40px;
  }
  .btn-enviarModal {
    background: #ea0c90;
    color: white;
    width: 160px;
    height: 40px;
    line-height: 40px;
    border: none;
    border-radius: 3px;
  }
  .btn-continuarCompra {
    background: #ea0c90;
    color: white;
    width: 250px;
    height: 40px;
    line-height: 40px;
    border: none;
    border-radius: 3px;
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-body__custom {
  background-image: url("../../../static/media/img/flujo/cotizacion/modalFondo.PNG");
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0;
  height: 220px;
  background-size: auto;
  background-position-x: 50%;
  background-repeat: no-repeat;
  background-position-y: 50%;
  padding-bottom: 0;
  .text-modalEnviarMail {
    color: #4a4a4a;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    font-family: 'Omnes Medium';
    padding-bottom: 0;
    margin-bottom: 0;
  }
}
/********************************************************************
                    FIN MODAL ENVIAR CORREO
*********************************************************************/
.footerv2-desktop {
  margin-top: 40px;
}
.modal-footer {
  border-top: 0px solid transparent;
}
.footer-custom {
  padding: 0;
  padding: 0 8px 13px;
  width: 90%;
  margin: auto;
  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 70px;
    flex-direction: column;
  }
  .grupo-enviar {
    width: 100%;
    position: relative;
    input {
      width: 100%;
      margin: 8px 0;
      height: 40px;
      padding-left: 44px;
      &:focus {
        box-shadow: none;
      }
    }
    &:before {
      background: url(/vehicular/_nuxt/static/media/img/flujo/cotizacion/mail-icon.png);
      content: "";
      position: absolute;
      left: 9px;
      width: 27px;
      height: 20px;
      z-index: 9;
      background-size: contain;
      background-repeat: no-repeat;
      top: 18px;
    }
  }
  button {
    margin-bottom: 8px;
  }
  .form-group {
    margin: 0rem;
  }
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


/********************************************************************
                  MEDIA QUERYS                                      
*********************************************************************/
@keyframes listonFondo {
    0% {
        background: #ff9200;
    }

    100% {
        background: #e7ac38;
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

.box-btns-fixed{
  bottom: 0;
  margin: auto;
  padding-bottom: 12px;
  position: fixed;
  text-align: center;
  width: 80%;
  z-index: 999;
  left: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

@media screen and (max-width: 992px) {

  .planActivo.plata{
    background-color: #b1b1b1 !important;
    &:before{    
      border-right: 10px solid transparent;
      border-top: 10px solid #b1b1b1;
      border-left: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
    p{
      color: white !important;
    }
  }
  .planActivo.oro{
    background-color: #e6ac38 !important;
    &:before{    
      border-right: 10px solid transparent;
      border-top: 10px solid #e6ac38;
      border-left: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
    p{
      color: white !important;
    }
  }
  .planActivo.black{
    background-color: #27362d !important;
    &:before{    
      border-right: 10px solid transparent;
      border-top: 10px solid #27362d;
      border-left: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
    p{
      color: white !important;
    }
  }
}
@media screen and (min-width: 992px) {
  .modal-blackWeek{
    h3{
        font-size: 30px;
    }
    p{
        font-size: 20px;
    }
}
  .box-mensajeEnviadoCotizacion{
    .modal-titulo-enviado{
      font-size: 21px;
      line-height: 28px;
    }
  }
  
  .box-mensajeEnviadoEndosar{
    .endosar-item{
      .modal-titulo-endoso{
        font-size: 32px;
        line-height: 32px;
      }
    }
  }
.capaOcultaGris{
    background: transparent;
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 999;
    display: none;
    align-items: center;
    top: 0;
}
.v2modalGPS{
    &__header{
      .titulo{
        font-size: 22px;
      }
      .descripcion{
        font-size: 18px;
      }
    }
    &__body{
      .box-empresas{
        flex-direction: row;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        margin-top: 24px;
      }
      .empresa-item{
        margin: 8px;
      }
      .finalizar-compra{
        font-size: 18px;
      }
    }
  }
.planActivoDesktop.plata{
  border: 1px solid #b1b1b1;
}
.planActivoDesktop.oro{
  border: 1px solid #e6ac38;
}
.planActivoDesktop.black{
  border: 1px solid #333;
}
.planActivo.oro,.planActivo.plata,.planActivo.black{
  background: white !important;
}
.mail-cotizador{
  .mail{
    right: -16px;
    top: -80px;    
  }
}
.box-dto {
    right: -16px;
    top: -29px;
}
  .precioRegular{
    font-size: 14px !important;
  }
  .box-cotizacion1 .box-select {
    border-radius: 12px;
  }
  .modal-endoso,
  .modal-gps {
    .modal-body {
      flex-direction: row;
      &__item {
        width: 33, 3%;
      }
    }
  }
  .box-titulo {
    h2 {
      &:before {
        position: absolute;
        content: "";
        width: 100px;
        height: 2px;
        left: -100px;
        top: 20px;
        background: #00adee;
      }
      &:after {
        position: absolute;
        content: "";
        width: 100px;
        height: 2px;
        right: -100px;
        top: 20px;
        background: #00adee;
      }
    }
  }
  .todo-riesgo {
    border-radius: 12px 0 0 12px;
    .btnTodoRiesgo {
      font-size: 13px;
    }
  }
  .box-cotizacion2 {
    .cotizacion {
      border-radius: 0 12px 12px 0;
    }
  }
  .form-body {
    margin-top: 1.5rem;
  }
  .form-group {
    margin-top: 1rem;
  }

  .box-cotizacion1 {
    .box-img {
      border-radius: 0 12px 12px 0;
    }
  }
  .box-input {
    .input-vehicular {
      width: 175px;
    }
  }

  .modal-container__custom {
    border-radius: 5px;
    width: 530px !important;
    .footer-custom {
      border-radius: 0 0 20px 20px;
      &__box {
        flex-direction: row;
      }
    }
  }

  .footer-custom {
    button {
      margin-bottom: 0;
    }
  }
  .box-btn {
    &__backContinuar {
    }
  }

  .panel-planes{
    p,span{
      color: white;
    }

    .subtitulo{
      font-size: 15px;
    }
    .cuota{
      font-size: 32px;
    } 
  }




  
  .v2-suma-asegurada .v2-valor-comercial .box-input .flotante-moneda{
    left: 34px;
  }
  .v2-suma-asegurada{
    &--titulo{
      text-align: left;
    }
    .v2-valor-comercial{
      justify-content: flex-start;
      width: 340px;
      .e-range{
        width: 220px;
        padding-right: 32px;
        text-align: right;
      }
    }
    .v2-valores-minimo-maximo{
      width: 340px;
      text-align: left;
      left: 78px;
      position: relative;
    }
  }
  .v2-planes{
    margin-top: 32px;
    border-top: 1px solid #D5D5D5;
    padding-top: 20px;
    &--titulo{
      text-align: left;
    }
    .fecha{
      height: 45px;
      border: 1px solid #0854c4;
      width: 220px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #0854c4;
      border-radius: 4px;
      cursor: pointer;
      span{
        color: #0854c4;
      }
    }
  }
  .v2-detalle-plan{
    padding: 0px 24px 32px;
    margin-top: 0;
    height: 700px;
    .dto-cotizador{
      .flotante-dcto{
        right: -24px;
      }
    }
  }
  .v2-datos-carro{
    margin-top: 42px;
    width: 505px;
  }
  .v2-planes-desktop{
    .plan-item{
      height: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      font-family: 'Omnes regular';
      font-size: 20px;
    }
    .plan-black{
      background: #27362d;
    }
    .plan-oro{
      background: #e6ac38;
    }
    .plan-plata{
      background: #b1b1b1;
    }
  }




.v2-datos-carro{
    &__detalle{
      .v2-editar{
      }
    }
  }
  .contenedor-personalizado{
    background: transparent;
    
  }
  .detallePlan{
    .plan-item{
      &__header{
        height: 40px;
        span{
          font-size: 18px;
        }
      }
      &__cuerpo{
        color: #696969;
        font-size: 14px;
        height: 45px;
        span{
          font-size: 28px;
          color: #696969;
        }
      }
    }
  }
  .box-btn{
    margin: 0;
    padding: 12px 0;
    button{
      width: 200px;
    }
  }
}



@media (min-width: 1200px){
  .pt-5-desktop{
    padding-top: 50px !important;
  }
  .liston{
    display: flex;
    .desktop_cotizador_liston{
      font-size: 18px;
    }
    .closeListon{
    right: 9rem;
  }
  }
  .listonMobile{
    display: none;
  }
  .box-btn-cotizador{
    max-width: 83%;
    margin: auto;
  }
  .entidad_float{
    display: block;
  }
  .modal-rootCotizador{
    .img-close-modal{
    }
    .modal-head{
    }
    .modal-content{
    }
    .modal-body{
      flex-direction: row;      
      margin-bottom: 0;
      &__item{
        display: flex;
        align-items: flex-start;
        width: 33%;
      }
    }
    .box-titulo{
      p{
        font-size: 38px;
      }
      span{
        font-size: 28px;
      }
    }
    .box-descripcion{
      .titulo{
        font-size: 22px;
        margin-bottom: 12px;
      }

      .desc{
      }
      
    }
    .disclaimer-porcentaje{
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: left;
      color: #808080;
    }
    .box-img{
      img{
      }
    }
    .box-btn{
      button{
      }    
    }
  }
}
@media (min-width: 1366px){
  .desktop_cotizador_liston{
    display: block;
  }
  .desktop_cotizador_mobile{
    display:  none;
  }
  .entidad_float{
     right: calc(-17vw + 5px);
    width: calc(100vw - 85vw);
  }
}
.leaveModal {
  .modal-lg {
    max-width: 660px !important;
  }
  font-family: 'Omnes Regular';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  h2 {
    font-size: 32px;
    color: #0854c4;
  }
  h3 {
    font-size: 20px;
    color: #454a6c;
  }
  span {
    font-family: 'Omnes Medium';
  }
  img {
    margin-top: 30px;
  }
  .btn{
    background-color: #ea0c90;
    color: white;
    height: 50px;
    width: 300px;
    line-height: 0.5;
    font-size: 16px;
    border-radius: 3px;
    border: none;
    &:hover{
      opacity: .7;
    }
  }
  .form-control{
    display: initial;
    height: 50px;
    width: 300px;

  }
}
</style>
