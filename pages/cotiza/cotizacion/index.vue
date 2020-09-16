<template>
  <section class="page-cotizador" style="background: #f7f4fc;" @click="clickIngresaLetra($event)" >
    <div class="capaOculta" v-bind:class="{mostrarCapa: mostrarCapa}">
      <clip-loader class="cliploader  clipgss" :loading="loadinggss" :color="color" :size="size"></clip-loader>
    </div>
    
    <b-container class="contenedor-personalizado" >
      <b-row>
        <b-col cols="12" xl="10" class="m-auto">
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

    <b-container class="contenedor-personalizado">
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

        <b-container class="d-none  d-md-block">
          <b-row v-bind:class="{activeBox_2: activeBox_2}"  >
            <b-col cols="12" xl="9" class="m-auto  bg-shadow  pb-3" >
              <b-row>
                <div class="miAuto  w-100  pt-3">
                  <p class="pl-3 pb-2 placa">MI CARRO </p>
                  <span class="pl-3  item">Placa: <strong>{{ this.placaUppercase }}</strong></span>
                </div>
                
                <b-col cols="7" style="border-right: 3px solid #f8fafb">
                  <div class="activador  d-none  d-lg-block"  >
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

                  <div class="cotizador__suma-asegurada">
                      <p class="suma-asegurada">SUMA ASEGURADA </p>                      
                      <div class="cotizador__suma-asegurada--box">
                        <div class="box-range">             
                          <p> <span class="monto-actual">$ {{this.clonado.vehicle.current}}</span></p>                                   
                          <div class="minimoImg"><span><i @click="minimoImg" class="fa fa-minus-circle" aria-hidden="true"></i></span></div>
                          <b-form-input class="e-range" step="100" v-model="listCotizacion.vehicle.current" type="range" :min="isMinimo" :max="isMaximo" @change="cambioInput()"></b-form-input> 
                          <div class="maximoImg"><span><i @click="maximoImg" class="fa fa-plus-circle" aria-hidden="true"></i></span></div>
                        </div>                      
                      </div>                   
                  </div>                        
                </b-col>
                <b-col cols="5">
                  <div class="mail-cotizador" @click="showModal = showModal != undefined ? true : true">                          
                    <div class="mail"  @click="enviarCorreo">                          
                        <img src="../../../static/v2_icon/email.png" alt="email">                         
                      <div>
                        <p>Enviar</p>
                      </div>
                    </div>
                  </div> 
                  <p class="tomar-cuenta  mb-3">A TOMAR EN CUENTA</p>                  
                  <div class="item  pb-2">
                    <span>Fecha de inicio del seguro: </span>
                    <span style="display: inline-block; line-height: 1; outline: none; color: #007bff;  line-height: 1; padding-bottom: 4px;" @click="showModalInicioVigencia()">                      
                      <span style="cursor: pointer;" v-if="this.fechaVigencia != ''" @click="clickEnlace('Inicio Vigencia')">
                        {{this.fechaVigencia}}
                      </span>
                      <span style="cursor: pointer;" v-else >
                        Cambiar
                      </span>
                    </span>
                  </div>

                  <template v-if="this.planSeleccionado == 3  || this.planSeleccionado == 10">
                    <div class="item  credito-vehicular  pb-2" v-if="this.objectVehicle.modelYear>2013" style="position: relative;">
                      <div class="entidad_float" >
                        <div style="display: flex;align-items: center;" v-bind:class="{'d-none': objIBK == 0}">
                          <img width="12" src="./../../../static/media/flecha_endoso.png" alt="flecha_endoso">
                          <span>
                            Elige la entidad financiera <br>
                            a la cual quieres endosar tu póliza
                          </span>
                        </div>
                      </div>
                      <span style="display: inline-block; line-height: 1; padding-bottom: 4px;">¿Tienes un crédito vehicular? </span>
                      <p class="endozar-poliza  text-right"  href="javascript:void(0);" style="width: auto;">
                        <template v-if="this.endosoSeleccionado.id == 0">                          
                          <a style="display: inline-block; line-height: 1;color: #007bff; cursor: pointer;"
                            class="endozar-poliza"
                              href="javascript:void(0);"
                              @click="clickEnlace('entidad Financiera')"
                              v-b-modal.modalEntidadFinanciera
                            >Endosa aquí</a>  
                        </template>
                        <template v-else>                         
                          <span  style="display: inline-block; line-height: 1; outline: none; color: #007bff;  line-height: 1; padding-bottom: 4px; cursor: pointer;"
                          class="endozar-poliza"
                            href="javascript:void(0);"
                            v-b-modal.modalEntidadFinanciera
                            @click="clickEnlace('entidad Financiera')"
                          > {{this.endosoSeleccionado.name}}</span>   
                        </template>                            
                      </p>
                    </div>
                  </template>
                  <template v-else>
                    <div class="pb-3    pb-2" v-if="this.objectVehicle.modelYear>2013 && this.planSeleccionado != 3">
                      Recuerda que debes seleccionar el Plan Black si deseas endosar tu póliza
                    </div>
                  </template>
                            
                  <div class="item    pb-3">
                    <span> 
                      <a href="javascript:void(0);" v-if="this.listaBasica.vehicle.gps == 'Y'" @click="showModalGPS()"> 
                        <span class="mb-0 gps requiere-gps"  >
                          Requiere GPS: {{this.listaBasica.vehicle.gps == "Y" ? "SI" : "NO" }}                                
                        </span>
                      </a>
                    </span>
                  </div>

                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>

        

        <b-container class="mt-4  d-none  d-lg-block" >
          <b-row v-bind:class="{activeBox_2: activeBox_2}">
            <b-col cols="12" xl="9" class="bg-shadow  m-auto  pt-5  pb-3">
              <b-row>
                <b-col cols="4"  v-bind:class="{'pt-4': this.nuevoProducto == false}">
                  <div class="detallePlan pt-45" >
                    <div class="detallePlan-titulo">
                      <p>
                        selecciona tu plan
                        <br>
                        
                      </p>
                      <p><a target="_blank" rel="noopener" v-bind:href="Condicionado_Particular">
                        <img class="descargar_cobertura  mt-3" src="../../../static/media/interseguroVehicular_v2/descargar_cobertura.png" alt="descargar_cobertura">
                        </a></p>
                    </div>
                    <div class="detallePlan--lista  lista-plan0" style="">
                      <div class="detallePlan--item" style="height: 25px;">
                        <p class="descripcion"></p>
                      </div>
                      <div class="detallePlan--item">
                        <p class="descripcion">Responsabilidad Civil</p>
                      </div>
                      <div class="detallePlan--item">
                        <p class="descripcion">Robo Total</p>
                      </div>
                      <div class="detallePlan--item">
                        <p class="descripcion">Pérdida Parcial por Accidentes de Tránsito</p>
                      </div>
                      <div class="detallePlan--item">
                        <p class="descripcion">Accidente de Ocupantes</p>
                      </div>
                      <div class="detallePlan--item">
                        <p class="descripcion">Pérdida Total por Accidentes de Tránsito</p>
                      </div>
                      <div class="detallePlan--item">
                        <p class="descripcion">Accesorios Adicionales</p>
                      </div>
                      <div class="detallePlan--item">
                        <p class="descripcion">Rotura de Lunas</p>
                      </div>
                      <div class="detallePlan--item">
                        <p class="descripcion">Riesgos de naturaleza, vandalismo, incendios</p>
                      </div>
                      <div class="detallePlan--item  ausencia-controlBox" style="height: 60px">
                        <p class="descripcion ausencia-desktop">
                          <span>Ausencia de Control</span>
                          <span class="ausencia-control">
                            <img width="14" src="../../../static/media/img/exclamacion.png" alt="exclamacion">
                              Solo aplica en caso quieras endosar tu póliza a una entidad financiera
                            </span> 
                        </p>
                      </div>
                      
                    </div>
                  </div>
                </b-col>
                <b-col cols="8">
                  <div class="box-dto" v-if="this.nuevoProducto == false && appDiscount == false"><span>15% DE DESCUENTO</span></div>
                  <b-row  class="justify-content-center">
                    <b-col cols="4"  lg="4"  class="pt-3" v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">

                      <span class="precioRegular" v-if="this.nuevoProducto == false">P.Regular: ${{this.listaBasica.policy.monthlyCalculated}}</span>
                      <div class="planHover  detallePlan  plan4" @click="seleccionarPLan(4)" v-bind:class="{planInactivo: planInactivo}">
                        <div class="detallePlan__titulo plan-item basico-item">
                          <div class="plan-item__header  basico-item__header">
                            <span>PLATA</span>
                          </div>
                          <div class="plan-item__cuerpo" v-if="appDiscount == true">
                            <span  class="cuota">${{this.listaBasica.policy.monthlyDiscount}}</span>/MES
                          </div>
                          <div class="plan-item__cuerpo" v-else-if="this.nuevoProducto == true">
                            <span  class="cuota">${{this.listaBasica.policy.monthlyCalculated}}</span>/MES
                          </div>
                          <div class="plan-item__cuerpo" v-else>
                            <span  class="cuota">${{this.listaBasica.policy.monthly}}</span>/MES
                          </div>
                        </div>                      
                        <div class="detallePlan__lista">
                          <div class="detallePlan--item" style="height: 25px;">
                            <p class="check-planes"></p>
                          </div>
                          <div class="detallePlan--item">
                            <p class="check-planes">&#x2714;	</p>
                          </div>
                          <div class="detallePlan--item"><p class="check-planes">&#x2714;	</p></div>
                          <div class="detallePlan--item"></div>
                          <div class="detallePlan--item"></div>
                          <div class="detallePlan--item"></div>
                          <div class="detallePlan--item"></div>
                          <div class="detallePlan--item"></div>
                          <div class="detallePlan--item"></div>
                          <div class="detallePlan--item"></div>
                        </div>
                      </div>
                    </b-col>

                    <b-col class="adicional  pt-3  pb-4"  cols="8"  lg="8" v-bind:class="{'borderNone': this.$store.state.common.nuevoProducto  == false}">
                      <div class="adicional__box" v-if="this.$store.state.common.nuevoProducto == true"  @click="showModalRootCotizador()">
                        <span>Ahorra hasta 50% adicional </span>
                        <img src="../../../static/media/img/root/flecha_siguiente_cotizador.png" alt="">
                      </div>
                      <div class="row">
                        <b-col cols="6"  lg="6">
                          <span class="precioRegular" v-if="this.nuevoProducto == false">P.Regular: ${{this.listaMedia.policy.monthlyCalculated}}</span>
                          <div class="planHover  detallePlan  plan6" @click="seleccionarPLan(6)" v-bind:class="{planInactivo: planInactivo}">
                            
                            <div class="detallePlan__titulo plan-item semifull-item">
                              <div class="plan-item__header  semifull-item__header">
                                <span>ORO</span>
                              </div>
                              <div class="plan-item__cuerpo" v-if="appDiscount == true">
                                <span  class="cuota">${{this.listaMedia.policy.monthlyDiscount}}</span>/MES
                              </div>
                              <div class="plan-item__cuerpo" v-else-if="this.nuevoProducto == true">
                                <span  class="cuota">${{this.listaMedia.policy.monthlyCalculated}}</span>/MES
                              </div>
                              <div class="plan-item__cuerpo" v-else>
                                <span class="cuota">${{this.listaMedia.policy.monthly}}</span>/MES
                              </div>
                            </div>

                            <div class="detallePlan__lista">
                              <div class="detallePlan--item" style="height: 25px;">
                                <p class="check-planes"></p>
                              </div>
                              <div class="detallePlan--item">
                                <p class="check-planes">&#x2714;	</p>
                              </div>
                              <div class="detallePlan--item">
                                <p class="check-planes">&#x2714;	</p>
                              </div>
                              <div class="detallePlan--item">
                                <p class="check-planes">&#x2714;	</p>
                              </div>
                              <div class="detallePlan--item"><p class="check-planes">&#x2714;	</p></div>
                              <div class="detallePlan--item"></div>
                              <div class="detallePlan--item"></div>
                              <div class="detallePlan--item"></div>
                              <div class="detallePlan--item"></div>
                              <div class="detallePlan--item"></div>
                            </div>
                          </div>
                        </b-col>
                        <b-col cols="6"  lg="6">
                          <span class="precioRegular" v-if="this.nuevoProducto == false">P.Regular: ${{this.listaFull.policy.monthlyCalculated}}</span>
                          <div class="planHover  detallePlan plan3"  @click="seleccionarPLan(3)" v-bind:class="{planInactivo: planInactivo}">

                            <div class="detallePlan__titulo plan-item full-item">
                              <div class="plan-item__header  full-item__header">
                                <span>BLACK</span>
                              </div>
                              <div class="plan-item__cuerpo" v-if="appDiscount == true">
                                <span  class="cuota">${{this.listaFull.policy.monthlyDiscount}}</span>/MES
                              </div>
                              <div class="plan-item__cuerpo" v-else-if="this.nuevoProducto == true">
                                <span  class="cuota">${{this.listaFull.policy.monthlyCalculated}}</span>/MES
                              </div>
                              <div class="plan-item__cuerpo" v-else>
                                <span class="cuota">${{this.listaFull.policy.monthly}}</span>/MES
                              </div>
                            </div>

                            <div class="detallePlan__lista  lista-plan3">
                              <div class="detallePlan--item" style="height: 25px;">
                                <p class="check-planes"></p>
                              </div>
                              <div class="detallePlan--item">
                                <p class="check-planes">&#x2714;	</p>
                              </div>
                              <div class="detallePlan--item">
                                <p class="check-planes">&#x2714;	</p>
                              </div>
                              <div class="detallePlan--item">
                                <p class="check-planes">&#x2714;	</p>
                              </div>
                              <div class="detallePlan--item">
                                <p class="check-planes">&#x2714;	</p>
                              </div>
                              <div class="detallePlan--item">
                                <p class="check-planes">&#x2714;	</p>
                              </div>
                              <div class="detallePlan--item">
                                <p class="check-planes">&#x2714;	</p>
                              </div>
                              <div class="detallePlan--item">
                                <p class="check-planes">&#x2714;	</p>
                              </div>
                              <div class="detallePlan--item">
                                <p class="check-planes">&#x2714;	</p>
                              </div>
                              <div class="detallePlan--item">
                                <p class="check-planes">&#x2714;	</p>
                              </div>
                            </div>
                          </div>
                        </b-col>   
                      </div>   
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row style="position: fixed;
                        left: 0;
                        width: 100vw;
                        background: #fff;
                        z-index: 999;
                        bottom: 0;
                        -webkit-box-shadow: 0 -2px 4px 0 rgba(71,71,71,.1);
                        box-shadow: 0 -2px 4px 0 rgba(71,71,71,.1);"   v-bind:class="{activeBox_2: activeBox_2}">
            <b-col class="m-auto" cols="10" style="max-width: 1140px;">
              <div class="box-btn  d-flex  justify-content-end  box-btn-cotizador">
                <p class="frase-cotizacion"> ¡Estás a dos pasos de asegurar tu <strong>{{this.itemElegido.brand}}</strong>!</p>
                <button
                    type="submit"
                    :disabled="isDisabled"
                    @click="continuar($event)"
                    class="btn box-btn__button"
                  >continuar</button>
              </div>
            </b-col>
          </b-row>
        </b-container>

        <b-container class="d-block  d-md-none" >
          <b-row class="d-flex justify-content-center cotizador" v-bind:class="{activeBox_2: activeBox_2}">
            <b-col cols="11" lg="6" >
              <b-row>
                <b-col cols="12" class="b-white">
                  <b-row  class="contenedor-primario">
                    <b-col cols="12">
                      <div class="datos-vehiculo-mobile d-block  d-lg-none">
                        <div>
                          <p class="mi-carro">MI CARRO</p>
                        </div>
                        <div>
                          <p class="item">
                            {{this.placaUppercase }}
                            <span @click="resetearVehiculo()" class="editar-vehiculo">Editar 
                              <img class="flecha_edicion" src="../../../static/media/interseguroVehicular_v2/flecha_edicion.png" alt="flecha_edicion">
                              </span> 
                             </p>
                        </div>
                        <div>
                          <p class="item">{{this.itemElegido.brand }} {{this.itemElegido.year }} </p>
                        </div>                        
                        <div>
                          <p class="item">{{this.itemElegido.model }}</p>
                        </div>
                        <div class="mail-cotizador" @click="showModal = showModal != undefined ? true : true">                          
                          <div class="mail"   @click="enviarCorreo">                          
                              <img src="../../../static/v2_icon/email.png" alt="email">                         
                            <div>
                              <p>Enviar</p>
                            </div>
                          </div>
                        </div> 
                        
                      </div>
                    </b-col>
                    
                    <b-col cols="12" lg="8">
                      <div class="cotizador__suma-asegurada">
                          <p class="suma-asegurada">SUMA ASEGURADA</p>                      
                          <div class="cotizador__suma-asegurada--box">
                            <div class="box-range">             
                              <p> <span class="monto-actual">$ {{this.listCotizacion.vehicle.current}}</span></p>                                   
                              <div class="minimoImg"><span><i @click="minimoImg" class="fa fa-minus-circle" aria-hidden="true"></i></span></div>
                              <b-form-input class="e-range" step="100" v-model="listCotizacion.vehicle.current" type="range" :min="isMinimo" :max="isMaximo" @change="cambioInput()"></b-form-input> 
                              <div class="maximoImg"><span><i @click="maximoImg" class="fa fa-plus-circle" aria-hidden="true"></i></span></div>
                            </div>                      
                          </div>                   
                      </div> 
                      
                    </b-col>

                    <b-col cols="4" class="d-none  d-lg-flex  pr-0  pl-0">
                      <div class="mail-cotizador" @click="showModal = showModal != undefined ? true : true">                        
                        <div class="mail"   @click="enviarCorreo">                          
                            <img src="../../../static/v2_icon/email.png" alt="email">                         
                          <div>
                            <p>Enviar</p>
                          </div>
                        </div>
                      </div> 
                    </b-col>
                  </b-row>
                </b-col>

                <br>

                <b-col  class="d-none">
                  <b-row>              
                    <b-card no-body class="card-cobertura  mt-2">                      
                      <b-card-header header-tag="header" role="tab">
                        <b-button block href="#" v-b-toggle.accordion-9 variant="info">
                          ¿Qué me cubre?
                          <div class="flecha_cobertura">
                          
                          </div>

                          
                          
                        </b-button>
                      </b-card-header>
                      <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <table class="table-planes">
                            <tbody>
                              <tr>
                                <td class="w180px" style="display: inline;">
                                  <a target="_blank" rel="noopener" v-bind:href="Condicionado_Particular">
                                    <img class="descargar_cobertura  mt-3" src="../../../static/media/interseguroVehicular_v2/descargar_cobertura.png" alt="descargar_cobertura">
                                  </a>
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
                                <td class="check-table">&#x2714;	</td>
                              </tr>
                              <tr>
                                <td class="w180px">Robo Total</td>
                                <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">&#x2714;	</td>
                                <td class="check-table">&#x2714;	</td>
                                <td class="check-table">&#x2714;	</td>
                              </tr>
                              <tr>
                                <td class="w180px">Pérdida Parcial <br> por Choque</td>
                                <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                                <td class="check-table">&#x2714;	</td>
                                <td class="check-table">&#x2714;	</td>
                              </tr>
                              <tr>
                                <td class="w180px">Accidente de <br> Ocupantes</td>
                                <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                                <td class="check-table">&#x2714;	</td>
                                <td class="check-table">&#x2714;	</td>
                              </tr>
                              <tr>
                                <td class="w180px">Pérdida Total <br> por Choque</td>
                                <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                                <td class="check-table">	</td>
                                <td class="check-table">&#x2714;	</td>
                              </tr>
                              <tr>
                                <td class="w180px">Accesorios Adicionales</td>
                                <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                                <td class="check-table">	</td>
                                <td class="check-table">&#x2714;	</td>
                              </tr>
                              <tr>
                                <td class="w180px">Rotura de Lunas</td>
                                <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                                <td class="check-table">	</td>
                                <td class="check-table">&#x2714;	</td>
                              </tr>
                              <tr>
                                <td class="w180px">Riesgos de naturaleza, vandalismo, incendios</td>
                                <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                                <td class="check-table">	</td>
                                <td class="check-table">&#x2714;	</td>
                              </tr>
                              <tr>
                                <td class="w180px">Ausencia de Control <br>
                                <span class="ausencia-control"><img width="16" src="../../../static/media/img/exclamacion.png" alt="exclamacion">   Solo aplica en caso quieras endosar tu póliza a una entidad financiera</span> </td>
                                <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                                <td class="check-table">	</td>
                                <td class="check-table">&#x2714;	</td>
                              </tr>
                            </tbody>
                          </table>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </b-row>
                </b-col>

                <b-col  cols="12" class="contenedor-secundario  mt-2  d-none">
                  <div class="lista">
                    <div class="item">
                      <span>Fecha de inicio del seguro: </span>
                      <span style="display: inline-block; line-height: 1; outline: none; color: #007bff;  line-height: 1; padding-bottom: 4px;" @click="showModalInicioVigencia()">
                        
                        <span style="cursor: pointer;" v-if="this.fechaVigencia != ''" @click="clickEnlace('Inicio Vigencia')">
                          {{this.fechaVigencia}}
                        </span>
                        <span style="cursor: pointer;" v-else >
                          Cambiar
                        </span>
                      </span>
                    </div>
                    <template v-if="this.planSeleccionado == 3 || this.planSeleccionado == 10">
                      <div class="item" v-if="this.objectVehicle.modelYear>2013">
                      <span style="display: inline-block; width: 66%; line-height: 1; padding-bottom: 4px;">¿Tienes un crédito vehicular? </span>
                      <p class="endozar-poliza  text-right" onclick="ga('send', 'event', 'suscripcion', 'clic', 'blog', 0);" href="javascript:void(0);" >
                        <template v-if="this.endosoSeleccionado.id == 0">                          
                          <a style="display: inline-block; line-height: 1;color: #007bff; cursor: pointer;"
                            class="endozar-poliza"
                              href="javascript:void(0);"
                              @click="clickEnlace('entidad Financiera')"
                              v-b-modal.modalEntidadFinanciera
                            >Endosa aquí</a>  
                        </template>
                        <template v-else>                         
                          <span  style="display: inline-block; line-height: 1; outline: none; color: #007bff;  line-height: 1; padding-bottom: 4px; cursor: pointer;"
                          class="endozar-poliza"
                            href="javascript:void(0);"
                            v-b-modal.modalEntidadFinanciera
                            @click="clickEnlace('entidad Financiera')"
                          > {{this.endosoSeleccionado.name}}</span>   
                        </template>                            
                      </p>
                    </div>
                    </template>
                    <template v-else>
                    <div class="pb-3    pb-2" v-if="this.objectVehicle.modelYear>2013 && this.planSeleccionado != 3">
                      <div class="item">
                        Recuerda que debes seleccionar el Plan Black si deseas endosar tu póliza
                      </div>                      
                    </div>
                  </template>
                    

                    <div class="item"  v-if="this.listaBasica.vehicle.gps == 'Y'">
                      <span>Requiere GPS:</span>
                      <a href="javascript:void(0);"  @click="showModalGPS()"> 
                        <span class="mb-0 gps requiere-gps"  >
                            {{this.listaBasica.vehicle.gps == "Y" ? "SI" : "NO" }}                                
                        </span>
                      </a>
                      
                    </div>

                      
                  </div>
                </b-col>

                <b-col cols="12 pr-0 "  class="d-none">
                  <div class="box-btn">
                    <span
                      class="backcotizacion d-none d-lg-block"
                      @click="resetearVehiculo($event)"
                    >
                      <img
                        width="35"
                        src="../../../static/media/img/flujo/cotizacion/back.svg"
                        alt
                      />
                    </span>
                    <span
                      class="backcotizacion d-md-block d-lg-none"
                      @click="resetearVehiculo($event)"
                    >
                    </span>

                    <button   v-bind:class="{'d-none': activeBox_2}"
                      type="submit"
                      :disabled="isDisabled"
                      @click="continuar($event)"
                      class="btn box-btn__button "
                    >continuar</button>
                  </div>
                </b-col>

              </b-row>
            </b-col>
          </b-row>
        </b-container>

      </b-row>
    </b-container>

    <div class="conatenedor-personalizado  contenedor-1    d-lg-none" v-bind:class="{activeBox_2: activeBox_2}">
      <b-col cols="12">

        <b-row>
          <b-col cols="12"  md="9" style="position: relative;">
            <p class="texto-seleccionaPlan">SELECCIONA TU PLAN</p>
            <div class="box-dto" v-if="this.nuevoProducto == false"><span>15% DE DESCUENTO</span></div>
          </b-col>
        </b-row>
        <b-row>
          <div class="panel-planes  mobile  mt-4">
            <div class="panel-planes__item  mt-2"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">
                <p  v-if="this.nuevoProducto == false"><span class="precioRegular">P.Regular: ${{this.listaBasica.policy.monthlyCalculated}}</span></p>
                <div class="item  basico  planHover  detallePlan  plan4" @click="seleccionarPLan(4)" v-bind:class="{planInactivo: planInactivo}">
                  <div class="plan-item  basico-item">
                    <div class="plan-item__header  basico-item__header">
                      <span>PLATA</span>
                    </div>
                    <div class="plan-item__cuerpo" v-if="appDiscount == true">
                      <span  class="cuota">${{this.listaBasica.policy.monthlyDiscount}}</span>/MES
                    </div>
                    <div class="plan-item__cuerpo" v-else-if="this.nuevoProducto == true">
                      <span  class="cuota">${{this.listaBasica.policy.monthlyCalculated}}</span>/MES
                    </div>
                    <div class="plan-item__cuerpo" v-else >
                      <span class="cuota">${{this.listaBasica.policy.monthly}}</span>/MES
                    </div>
                  </div>
                </div>
            </div>
            <div class="adicionalMobile  pt-2  pb-2"  v-bind:class="{'borderNone': this.$store.state.common.nuevoProducto  == false}">
              <div class="adicionalMobile__box" v-if="this.$store.state.common.nuevoProducto == true"   @click="showModalRootCotizador()">
                <span class="pr-3">Ahorra hasta 50% adicional </span>
                <img src="../../../static/media/img/root/flecha_siguiente_cotizador.png" alt="">
              </div>
              <div class="panel-planes__item">
                <p  v-if="this.nuevoProducto == false"><span class="precioRegular">P.Regular: ${{this.listaMedia.policy.monthlyCalculated}}</span></p>
                <div class="item  semifull  planHover  detallePlan  plan6"  @click="seleccionarPLan(6)" v-bind:class="{planInactivo: planInactivo}">
                    <div class="plan-item  semifull-item">
                      <div class="plan-item__header  semifull-item__header">
                        <span>ORO</span>
                      </div>
                      <div class="plan-item__cuerpo" v-if="appDiscount == true">
                        <span  class="cuota">${{this.listaMedia.policy.monthlyDiscount}}</span>/MES
                      </div>
                      <div class="plan-item__cuerpo" v-else-if="this.nuevoProducto == true">
                        <span  class="cuota">${{this.listaMedia.policy.monthlyCalculated}}</span>/MES
                      </div>
                      <div class="plan-item__cuerpo" v-else >
                        <span class="cuota">${{this.listaMedia.policy.monthly}}</span>/MES
                      </div>
                    </div>
                </div>
              </div>
              <div class="panel-planes__item" >
                <p  v-if="this.nuevoProducto == false"><span class="precioRegular">P.Regular: ${{this.listaFull.policy.monthlyCalculated}}</span></p>
                <div class="item  full  planHover  detallePlan plan10 plan3" @click="seleccionarPLan(3)" v-bind:class="{planInactivo: planInactivo}">
                    <div class="plan-item  full-item">
                      <div class="plan-item__header  full-item__header">
                        <span>BLACK</span>
                      </div>
                      <div class="plan-item__cuerpo" v-if="appDiscount == true">
                        <span  class="cuota">${{this.listaFull.policy.monthlyDiscount}}</span>/MES
                      </div>
                      <div class="plan-item__cuerpo" v-else-if="this.nuevoProducto == true">
                        <span  class="cuota">${{this.listaFull.policy.monthlyCalculated}}</span>/MES
                      </div>
                      <div class="plan-item__cuerpo" v-else >
                        <span class="cuota">${{this.listaFull.policy.monthly}}</span>/MES                        
                      </div>
                    </div>
                </div>
              </div>
            </div>
            
          </div>
        </b-row>
      </b-col>

      <b-col>
        <b-row>              
          <b-card no-body class="card-cobertura  mt-2">                      
            <b-card-header header-tag="header" role="tab">
              <b-button block href="#" v-b-toggle.accordion-9 variant="info">
                ¿Qué me cubre?
                <div class="flecha_cobertura">
                
                </div>

                
                
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <table class="table-planes">
                  <tbody>
                    <tr>
                      <td class="w180px" style="display: inline;">
                        <a target="_blank" rel="noopener" v-bind:href="Condicionado_Particular">
              <img class="descargar_cobertura  mt-3" src="../../../static/media/interseguroVehicular_v2/descargar_cobertura.png" alt="descargar_cobertura">
              </a>
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
                      <td class="check-table">&#x2714;	</td>
                    </tr>
                    <tr>
                      <td class="w180px">Robo Total</td>
                      <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">&#x2714;	</td>
                      <td class="check-table">&#x2714;	</td>
                      <td class="check-table">&#x2714;	</td>
                    </tr>
                    <tr>
                      <td class="w180px">Pérdida Parcial por Choque</td>
                      <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                      <td class="check-table">&#x2714;	</td>
                      <td class="check-table">&#x2714;	</td>
                    </tr>
                    <tr>
                      <td class="w180px">Accidente de <br> Ocupantes</td>
                      <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                      <td class="check-table">&#x2714;	</td>
                      <td class="check-table">&#x2714;	</td>
                    </tr>
                    <tr>
                      <td class="w180px">Pérdida Total por Choque</td>
                      <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                      <td class="check-table">	</td>
                      <td class="check-table">&#x2714;	</td>
                    </tr>
                    <tr>
                      <td class="w180px">Accesorios Adicionales</td>
                      <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                      <td class="check-table">	</td>
                      <td class="check-table">&#x2714;	</td>
                    </tr>
                    <tr>
                      <td class="w180px">Rotura de Lunas</td>
                      <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                      <td class="check-table">	</td>
                      <td class="check-table">&#x2714;	</td>
                    </tr>
                    <tr>
                      <td class="w180px">Riesgos de naturaleza, vandalismo, incendios</td>
                      <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                      <td class="check-table">	</td>
                      <td class="check-table">&#x2714;	</td>
                    </tr>
                    <tr>
                      <td class="w180px ">
                        <div class="ausencia-control-mobile">
                          <span>Ausencia de Control</span>
                          <span class="ausencia-control">
                            <img width="14" src="../../../static/media/img/exclamacion.png" alt="exclamacion">
                            Solo aplica en caso quieras endosar tu póliza a una entidad financiera
                          </span>
                        </div>
                        
                      </td>
                      <td class="check-table"   v-bind:class="{'d-none': this.clonado.vehicle.current > 35000}">	</td>
                      <td class="check-table">	</td>
                      <td class="check-table">&#x2714;	</td>
                    </tr>
                  </tbody>
                </table>
              </b-card-body>
            </b-collapse>
          </b-card>
        </b-row>
      </b-col>

    </div>

    <div class="container    contenedor-personalizado  contenedor-2  d-lg-none">
      <b-col  cols="12" class="contenedor-secundario  mt-2"   v-bind:class="{activeBox_2: activeBox_2}">
        <div class="lista">
          <div class="item">
            <span>Fecha de inicio del seguro: </span>
            <span style="display: inline-block; line-height: 1; outline: none; color: #007bff;  line-height: 1; padding-bottom: 4px;" @click="showModalInicioVigencia()">
              
              <span style="cursor: pointer;" v-if="this.fechaVigencia != ''" @click="clickEnlace('Inicio Vigencia')">
                {{this.fechaVigencia}}
              </span>
              <span style="cursor: pointer;" v-else >
                Cambiar
              </span>
            </span>
          </div>
          <template v-if="this.planSeleccionado == 3  || this.planSeleccionado == 10">
            <div class="item" v-if="this.objectVehicle.modelYear>2013">
            <span style="display: inline-block; width: 66%; line-height: 1; padding-bottom: 4px;">¿Tienes un crédito vehicular? </span>
            <p class="endozar-poliza  text-right" onclick="ga('send', 'event', 'suscripcion', 'clic', 'blog', 0);" href="javascript:void(0);" >
              <template v-if="this.endosoSeleccionado.id == 0">                          
                <a style="display: inline-block; line-height: 1;color: #007bff; cursor: pointer;"
                  class="endozar-poliza"
                    href="javascript:void(0);"
                    @click="clickEnlace('entidad Financiera')"
                    v-b-modal.modalEntidadFinanciera
                  >Endosa aquí</a>  
              </template>
              <template v-else>                         
                <span  style="display: inline-block; line-height: 1; outline: none; color: #007bff;  line-height: 1; padding-bottom: 4px; cursor: pointer;"
                class="endozar-poliza"
                  href="javascript:void(0);"
                  v-b-modal.modalEntidadFinanciera
                  @click="clickEnlace('entidad Financiera')"
                > {{this.endosoSeleccionado.name}}</span>   
              </template>                            
            </p>
          </div>
          </template>
          <template v-else>
          <div class="pb-3    pb-2" v-if="this.objectVehicle.modelYear>2013 && this.planSeleccionado != 3">
            <div class="item">
              Recuerda que debes seleccionar el Plan Black si deseas endosar tu póliza
            </div>                      
          </div>
        </template>
          

          <div class="item"  v-if="this.listCotizacion.vehicle.gps == 'Y'">
            <span>Requiere GPS:</span>
            <a href="javascript:void(0);"  @click="showModalGPS()"> 
              <span class="mb-0 gps requiere-gps"  >
                  {{this.listCotizacion.vehicle.gps == "Y" ? "SI" : "NO" }}                                
              </span>
            </a>
          </div>

            
        </div>
      </b-col>

      <b-col cols="12 pr-0 ">
        <div class="box-btn">
          <span
            class="backcotizacion d-none " v-bind:class="{ 'd-lg-block': activeBox_2 }"
            @click="resetearVehiculo($event)"
          >
            <img
              width="35"
              src="../../../static/media/img/flujo/cotizacion/back.svg"
              alt
            />
          </span>
          <span
            class="backcotizacion d-md-block d-lg-none"
            @click="resetearVehiculo($event)"
          >
          </span>

          <button   v-bind:class="{'d-none': activeBox_2}"
            type="submit"
            :disabled="isDisabled"
            @click="continuar($event)"
            class="btn box-btn__button "
          >continuar</button>
        </div>
      </b-col>
    </div>


    <div>
      <div v-if="showModal">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container modal-container__custom">
                <span class="modal-close  modal-close-cotizacion" @click="hideModal">
                  x
                </span>
                <div class="modal-body modal-body__custom">
                  <p
                    class="text-modalEnviarMail"
                  >Recibe la cotización a tu correo personal.</p>
                </div>

                <div class="modal-footer footer-custom">
                  <div class="footer-custom__box">
                    <b-form-group
                      id="grupo-enviar"
                      label-for="enviar-modal"
                      class="grupo-enviar"
                    >
                      <b-form-input
                        id="enviar-modal"
                        type="text"
                        required
                        v-model="email"
                        placeholder="Ejem. lperez@gmail.com"
                      ></b-form-input>
                    </b-form-group>
                    <button
                      :disabled="isDisabledEnviarCorreo" 
                      class="modal-default-button btn-enviarModal"
                      @click="enviarMail()"
                    >ENVIAR</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

   <b-modal title="Bootstrap-Vue"
          hide-footer
          hide-header
          ref="modalNumeroCelular"
          id="modalNumeroCelular">
        <div class="modal-content modal-root">
            <img class="img-close-modal" src="./../../../static/media/img/root/close.png" alt="" @click="hideModalNumeroCelular()">
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
      id="modalgps"
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="modalGPS"
      size="lg"
    >
      <div class="modal-content modal-gps">
        <b-btn
          class="mt-3 modal-close"
          @click="hideModalGPS()"
          style="background: white; border: none;"
        >
          <img
            src="./../../../static/media/img/root/close.png"
            width="40"
            alt="icon close"
            class="image-9"
          />
        </b-btn>
        <div class="modal-head">
          <div class="box-titulo">
            <h2 class>PASOS PARA CONSEGUIR MI GPS</h2>
          </div>
          <div class="modal-divider"></div>
        </div>
        <div class="modal-body">
          <div class="modal-body__item">
            <div class="box-img">
              <img src="../../../static/media/img/flujo/cotizacion/paso1_gps.svg" alt="pasos gps" />
            </div>
            <div class="box-paso">
              <p>1</p>
            </div>
            <div class="box-descripcion">
              <p>Protemax te contactará para programar el día y hora de la instalación del GPS.</p>
            </div>
          </div>
          <div class="modal-body__item">
            <div class="box-img">
              <img src="../../../static/media/img/flujo/cotizacion/paso2_gps.svg" alt="pasos gps" />
            </div>
            <div class="box-paso">
              <p>2</p>
            </div>
            <div class="box-descripcion">
              <p>Irán a tu casa o al lugar coordinado para instalar el dispositivo en tu carro.</p>
            </div>
          </div>
          <div class="modal-body__item">
            <div class="box-img">
              <img src="../../../static/media/img/flujo/cotizacion/paso3_gps.svg" alt="pasos gps" />
            </div>
            <div class="box-paso">
              <p>3</p>
            </div>
            <div class="box-descripcion">
              <p>
                Contamos con una oferta por lanzamiento donde
                <strong>te regalamos $50</strong> para la compra de tu GPS (precio regular $200, precio con nosotros $150). Podrás hacer el pago ahí mismo con efectivo o tarjeta.
              </p>
            </div>
          </div>
        </div>
        <div class="row"></div>
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
      id="modalInicioVigencia"
    >
      <div class="modal-content fechaVigenciaCotizador">
        <b-btn
          class="mt-3 modal-close"
          @click="hideModalInicioVigencia()"
          style="background: transparent; border: none;"
        >
          <img
            src="./../../../static/media/img/root/close.png"
            width="30"
            alt="icon close"
            class="image-9"
          />
        </b-btn>
        <div class="modal-head">
          <div class="box-titulo">
            <p class="text-inicio">¿Cuándo inicia tu Seguro?</p>
            <span class="center"></span>
          </div>
          <div class="modal-divider"></div>
        </div>
        <div class="modal-body">
          <div>
            <div id="input-group-3" class="inicioVigencia">
              
              <div class="fechaCotizador">                
                <datepicker class="mt-2" :inline="true"  :disabledDates="state.disabledDates" id="fechaCustom" :full-month-name="true"   :value="state.date" @selected="elegirFecha" ></datepicker>
              </div>
            </div>
            <div class="btn-inicioVigencia">
              <button class="btn-confirmar" @click="hideModalInicioVigencia()">Confirmar</button>
            </div>
          </div>
        </div>
        <div class="row"></div>
      </div>
    </b-modal>

    <b-modal
      id="modalEntidadFinanciera"
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="hidemodalEntidadFinanciera"
    >
      <div class="modal-content modalEntidadFinanciera">
        <b-btn
          class="mt-3 modal-close"
          @click="hidemodalEntidadFinanciera()"
          style="background: transparent; border: none;"
        >
          <img
            src="./../../../static/media/img/root/close.png"
            width="30"
            alt="icon close"
            class="image-9"
          />
        </b-btn>
        <div class="modal-head">
          <div class="box-titulo">
            <p class="endosar-titulo">¿Dónde pediste tu crédito vehicular?</p>
            <span class="center"></span>
          </div>
          <div class="modal-divider"></div>
        </div>
        <div class="modal-body">
          <div>
            <div id="boxEndosoSesion" class="endosoSesion">
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
            <div class="box-btnEndosoSesion">
              <button @click="hidemodalEntidadFinanciera()">Confirmar y endosar póliza</button>
            </div>
          </div>
        </div>
        <div class="row"></div>
      </div>
    </b-modal>

    <!-- Modal de abandono  -->
    <b-modal id="leaveQuote" class="leaveModal" size="lg" static centered hide-footer hide-header>
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
    </b-modal>

    <b-modal id="leaveQuote2" class="leaveModal" size="lg" static centered hide-footer hide-header>
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
      from: new Date(fechaActual.getTime() + 3.888e+9)
    }
  }

  export default {
    layout: 'InterseguroHomeCotizacion',
    data() {
      return {
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
          'credit' : ''
        },
        /***********************EVALUAR ********************** */
        soatActive: 0,
        documento_steps2 : '',
        flagElegirFecha: 0,
        monto_pagar_steps3:'',
        mostrarCapa: false,
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
              correoRemitente: "segurovehicular@interseguro.com.pe",
              correoRemitenteDisplay: "Interseguro Vehicular"
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
      },
      seleccionarPLan(id){
        this.planInactivo = true
        let elemento1 = document.querySelectorAll(".detallePlan")
        for (let index = 0; index < elemento1.length; index++) {
          elemento1[index].classList.remove("planActivo")      
        }
        setTimeout(() => {
          let arreglo = document.querySelectorAll(".plan"+id)
          for (let i = 0; i < arreglo.length; i++) {
            arreglo[i].classList.add("planActivo")
          }
        }, 250);
        this.$store.commit('common/setPlanSeleccionado',id)
        this.planSeleccionado = id
        this.detectarPLanSeleccionado()
      },
      detectarPLanSeleccionado(){
        if(this.$store.state.common.planSeleccionado == 3 || this.$store.state.common.planSeleccionado == 10){        
          this.listCotizacion = this.listaFull          
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
            }else{
              this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            }            
            break;
          default:
            this.code_sku = this.itemElegido.brand + " - " + this.itemElegido.model
            break

          
        }
        console.log("this.code_sku",this.code_sku)
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
          this.listCotizacion.vehicle.current =
            this.listCotizacion.vehicle.current + 10;
          this.cambioInput();
        } else {
        }
      },
      minimoImg() {
        if (this.clonado.vehicle.minimum < this.listCotizacion.vehicle.current) {
          this.listCotizacion.vehicle.current =
            this.listCotizacion.vehicle.current - 10;
          this.cambioInput();
        } else {
        }
      },
      cambioInput(evt) {
        if (
          this.listCotizacion.vehicle.current > this.clonado.vehicle.maximum ||
          this.listCotizacion.vehicle.current < this.clonado.vehicle.minimum
        ) {
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
              this.$store.commit('common/setCurrent', this.listCotizacion.vehicle.current)
              this.cobertura_is.name = this.itemElegido.brand + ' - ' + this.itemElegido.model + ' - ' + this.itemElegido.modelYear
              this.cobertura_is.discount = '10'
              this.cobertura_is.startDate = this.fechaVigencia
              
              this.cobertura_is.credit = this.endosoSeleccionado.name
              this.cobertura_is.price = this.listCotizacion.policy.annual
              this.cobertura_is.ammount = this.listCotizacion.vehicle.current
              this.cobertura_is.quota = this.listCotizacion.policy.monthly
              this.segundaPantalla()
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
              
              
            } else {
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
      continuar() {
        
        this.cobertura_is.credit = this.endosoSeleccionado.name
        this.cobertura_is.price = this.listCotizacion.policy.annual
        this.cobertura_is.ammount = this.listCotizacion.vehicle.current
        this.cobertura_is.quota = this.listCotizacion.policy.monthly

        this.listCotizacion.policy.startDate = this.fechaVigencia
        this.listCotizacion.paymentMethodId = 3

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
        this.$refs.modalGPS.show();
      },
      hideModalGPS() {
        this.$refs.modalGPS.hide();
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
        this.$refs.hidemodalEntidadFinanciera.hide();
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
          identificador: this.$store.state.common.plateNumber,
          detalle: {
            correo: parametroEmail,
            codigoVenta: this.$store.state.common.codeRmkt,
            enviarCorreo: parametroEnviarMail,
            pantalla: 1,
            datosCorreo: {
              url: process.env.URL + (this.$store.state.common.businessId == 1 ? "vehicular" : "vehicular/interbank"),
              plantilla: this.objPlantilla,
              utm: this.objUtm
            },
            datosProducto: {
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
              correoRemitente: "segurovehicular@interseguro.com.pe",
              correoRemitenteDisplay: "Interseguro Vehicular"
            },
            datosPago: {
              idFrecuencia: "",
              fechaInicioSeguro: ""
            }
          }
        }
      this.$store.dispatch('common/sendRemarketing',this.objRemarketing).then((res) => {
        if (res) {
          this.$store.commit('common/setCodigoRemarketingGenerado', res.data.codigoRemarketing)
        }
        
      })
    },
    enviarMailing() {
      this.$store.commit('common/setEmail', this.email)
        this.$store.dispatch('common/enviarMailing').then((res) => {
          this.$nuxt.$router.push("/cotiza/ingresa-tu-documento")
        })        
      },
    mouseLeave(e) {
      if (this.clonado.vehicle.current != null && this.clonado.vehicle.current != undefined) {
        if (this.$store.state.common.leaveMessage == 0) {
          if (e.clientX < 0 || e.clientY < 0) {
            this.$store.commit('common/setLeaveMessage',1)
            let num = this.$store.state.common.plateNumber.slice(-1)
            if (num % 2 == 0) {
              this.$nuxt.$emit('bv::show::modal','leaveQuote2')
            } else {
              this.$nuxt.$emit('bv::show::modal','leaveQuote')
            }
          }
        }
      }
    },
    },
    mounted: function () {
      
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
        }else{
          this.$store.commit('common/setPlanSeleccionado',this.planSeleccionado)          
          this.seleccionarPLan(this.planSeleccionado)
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
.page-cotizador{
  // padding-top:  110px;
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
@keyframes shadow-pulse {
    0% {
        box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.11);
    }

    100% {
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.11);
    }
}

@keyframes shadow-pulse-big {
    0% {
        box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.11);
    }

    100% {
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.11);
    }
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
}
.card-cobertura .card-header a[data-v-614db64e]:not(:disabled):not(.disabled):active, .card-cobertura .card-header a:not(:disabled):not(.disabled).active[data-v-614db64e], .card-cobertura .card-header .show > a.dropdown-toggle[data-v-614db64e] {
    color: #fff;
    background-color: #0754c4;
}
.w180px{
  min-width: 200px;
  padding-left: 8px;
  padding-right: 4px;

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
    background-color: #ffffff;
    &__header{
      height: 34px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &:before{
        content: "";        
        height: 22px;
        width: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        bottom: -14px;
        left: 0;
        position: absolute;
      } 
    }
    &__cuerpo{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 55px;
    }
  }
  .basico-item{
    &__header{
      background: #b1b1b1;
      &:before{
        background-image: url(../../../static/media/img/cotizacion/plata.png);
        bottom: -10px;
      }
    }
  }
  .semifull-item{
    &__header{
      background: #e6ac38;
      &:before{
        background-image: url(../../../static/media/img/cotizacion/oro.png);
        bottom: -6px;
      }
    }
  }
  .full-item{
    &__header{
      background: #27362d;
      &:before{
        background-image: url(../../../static/media/img/cotizacion/black.png);
        bottom: -6px;
      }
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
  box-shadow: 0 3px 6px 0 #15b3ffa3;
  position: relative;
  &:before{
    content: "";
    background-image: url(../../../static/media/img/root/check_planes_cotizador.png);
    position: absolute;
    width: 32px;
    height: 24px;
    right: -10px;
    top: -10px;
    border-radius: 50%;
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
    height: 88px;
    border-radius: 8px;
    padding-top: 0;
  }
  p,span{
    font-size: 11px;
  }
  .plan-item{     
    border-radius: 8px;
    overflow: hidden;
    background-color: #ffffff;
    &__header{
      height: 34px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &:before{
        content: "";        
        height: 18px;
        width: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        bottom: -14px;
        left: 0;
        position: absolute;
      } 
    }
    &__cuerpo{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 55px;
    }
  }
  .basico-item{
    &__header{
      background: #b1b1b1;
      &:before{
        background-image: url(../../../static/media/img/cotizacion/plata.png);
        bottom: -10px;
      }
    }
  }
  .semifull-item{
    &__header{
      background: #e6ac38;
      &:before{
        background-image: url(../../../static/media/img/cotizacion/oro.png);
        bottom: -6px;
      }
    }
  }
  .full-item{
    &__header{
      background: #27362d;
      &:before{
        background-image: url(../../../static/media/img/cotizacion/black.png);
        bottom: -6px;
      }
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
.mail-cotizador{
  box-shadow: 0 2px 10px 0 rgba(0,40,80,0.07);
  cursor: pointer;
  .mail{
    background: #0855c4;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    right: -12px;
    top: -24px;
    color: white;
    padding: 3px 12px;
    border-radius: 4px;
    img{
      width: 26px;
      height: auto;
    }
    p{
      line-height: 1;  
      color: white;
      font-size: 14px;  
      padding-top: 4px;
      padding-left: 4px;  
    }
  }
}
.dto-cotizador{
  position: absolute;
  right: 0;
  top: 20px;
  background: #00adee;
  padding: 5px;
  border-radius: 4px 0 0 4px;
  color: white;
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
    .box-min-max{
        display: flex;
        justify-content: space-between;
        position: relative;        
        color: #002e75;
        font-size: 14px;
        font-weight: 600; 
        width: 84%;
    }
    .minimoImg{
        position: absolute;
        top: 2px;
        left: -7px;
        z-index: 99;
        i{
            color: #002e75;
            font-size: 24px;
        }
    }
    .maximoImg{
        position: absolute;
        top: 2px;
        right: -7px;
        z-index: 99;
        i{
            color: #002e75;
            font-size: 24px;
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
  border: 3px solid white;
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
    border-bottom: 1px solid #6c6c6c29;
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
  &:hover {
    cursor: pointer;
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
    width: 100%;
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
  margin-bottom: 1rem;
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
    .minimoImg {
      position: absolute;
      top: 4px;
      left: 0;
      z-index: 99;
      display: flex;
      align-items: center;
      background: transparent;
      border-radius: 2px;
      height: 28px;
      align-items: center;
      padding: 2px;
      &__text {
        color: #fff;
        font-size: 16px;
        line-height: 14px;
      }
      span {
        display: flex;
        justify-content: center;
      }
      &__monto {
        font-size: 13px;
        color: red;
      }
    }
    .maximoImg {
      position: absolute;
      top: 4px;
      right: 0;
      z-index: 99;
      display: flex;
      align-items: center;
      background: transparent;
      color: red;
      height: 28px;
      border-radius: 2px;
      padding: 2px;
      &__text {
        color: #ffff;
        font-size: 16px;
        line-height: 14px;
      }
      span {
        display: flex;
        justify-content: center;
      }
      &__monto {
        font-size: 13px;
        color: red;
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
@media screen and (min-width: 992px) {
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
    &__item{ 
    }
    .item{
    }
    p,span{
      color: white;
    }
    .basico{      
        
    }
    .semifull{
    }
    .full{
    }
    span{
    }
    .subtitulo{
      font-size: 15px;
    }
    .cuota{
      font-size: 32px;
    } 
  }
}

@media (min-width: 1024px) {
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
