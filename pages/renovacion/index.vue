<template>
    <div>
        <fade-loader v-if="showLoader"></fade-loader>

        <div class="renovaciones" v-if="mostrarPrimeraPantalla"> 
            
            <b-container>
                <b-row class="d-flex justify-content-center"> 
                    <b-col>
                        <div class="img-form">
                            <img src="../../static/media/img/bp-car.svg" alt="icon step ingresa tu placa">
                        </div>
                    </b-col>
                    <b-col cols="12">
                        <div class="card-placa">
                            <div class="card-placa__titulo">
                                <p class="text-center">Ingresa tu placa</p>
                            </div>
                            <div class="card-placa__input">                                
                                 <b-form-input
                                    class="text-uppercase card-placa__input"
                                    @keyup.native="delay($event,750)"                                    
                                    maxlength="6"
                                    autocomplete="off"
                                    type="text"
                                    v-model="placa"
                                    required
                                    placeholder="BBC123"
                                    name="Placa"
                                    aria-label="placa"
                                    autofocus></b-form-input>
                            </div>
                        </div>
                    </b-col>
                    <b-col cols="12" md="4">
                        <button type="submit"  class="box-btn__button box-btn--primary  card-placa__btn">
                            CONTINUAR
                        </button>
                    </b-col>  
                </b-row>                
            </b-container>                
        </div>        
        <div class="renovaciones" v-if="mostrarSegundaPantalla">
            <div class="renovacion2021">
                <!-- <div class="capaOcultaGris" @click="clickCapaGris" v-bind:class="{mostrarCapaGris: mostrarCapaGris}">
                </div> -->
                <div class="renovacion-data" >
                    <div class="renovacion-head" v-if="this.objRenovacion">
                        <p><span>{{this.objRenovacion.client.firstName}},</span> manejar tranquilo nunca fue tan fácil</p>
                        <span class="subtitulo">Tu seguro vehicular se renovará automáticamente</span>
                    </div>
                    <div class="renovacion-body">
                        <div class="renovacion-body--item  renovacion-body__carro  carro">
                            <div class="box-icon-seccion d-none  d-lg-flex">
                                <img class="carro--img  " src="./../../static/media/img/renovacion/tu-carro.png" alt="">
                            </div>
                            <div class="carro--datos">
                                <h3>
                                    <img width="40" class="carro--img  d-block  d-lg-none" src="./../../static/media/img/renovacion/tu-carro.png" alt=""> 
                                    Tu carro</h3>
                                <div class="placa-modelo">
                                    <div class="placa">
                                        <p class="item-titulo">Placa:</p>
                                        <p class="item-descripcion">{{this.objRenovacion.vehicle.plateNumber}}</p>
                                    </div>
                                    <div class="modelo">
                                        <p class="item-titulo">Modelo:</p>
                                        <p class="item-descripcion">{{this.objRenovacion.vehicle.brandName}} {{this.objRenovacion.vehicle.modelName}}  {{this.objRenovacion.vehicle.modelYear}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="renovacion-body--item  renovacion-body__nueva-poliza  nueva-poliza">
                            <div class="box-icon-seccion d-none  d-lg-flex">
                                <img class="nueva-poliza--img  d-none  d-lg-block" src="./../../static/media/img/renovacion/nueva-poliza.png" alt="">
                            </div>
                            
                            <div class="nueva-poliza--datos">
                                <h3>
                                    <img width="40" class="carro--img  d-block  d-lg-none" src="./../../static/media/img/renovacion/nueva-poliza.png" alt=""> 
                                    Tu nueva póliza</h3>
                                <div class="nueva-poliza">
                                    <div class="nueva-poliza--item  plan">
                                        <p class="item-titulo">Plan:<span id="tooltip-plan"  class="tooltip-icon ">
                                                ?
                                            </span>
                                            
                                            <b-tooltip target="tooltip-plan" triggers="hover">
                                                Para cambiar el plan de tu Seguro Vehicular por favor comunícate con nuestro equipo de atención al cliente al (01) 500-0000
                                            </b-tooltip>
                                        </p>
                                       <p class="item-descripcion" v-if="objRenovacion.policy.planId ==  undefined">Todo riesgo</p>
                                        <p class="item-descripcion" v-else-if="objRenovacion.policy.planId ==  3 || objRenovacion.policy.planId == 10">Black</p>
                                        <p class="item-descripcion" v-else-if="objRenovacion.policy.planId ==  4">Plata</p>
                                        <p class="item-descripcion" v-else-if="objRenovacion.policy.planId ==  6">Oro</p>
                                    </div>
                                    <div class="nueva-poliza--item  vigencia-poliza">
                                        <p class="item-titulo">Vigencia de póliza:</p>
                                        <p  class="item-descripcion"><span>{{this.objRenovacion.policy.fromDate}}</span>-<span>{{this.objRenovacion.policy.toDate}}</span></p>
                                    </div>
                                    <div class="nueva-poliza--item  suma-asegurada">

                                        <p class="item-titulo">Suma asegurada:

                                            <span id="tooltip-suma-asegurada"  class="tooltip-icon ">
                                                ?
                                            </span>
                                            
                                            <b-tooltip target="tooltip-suma-asegurada" triggers="hover">
                                                Puedes editar la suma asegurada de tu póliza siempre que el valor se encuentre entre US$ {{this.listCotizacion.vehicle.minimum}} y US$ {{this.listCotizacion.vehicle.maximum}}
                                            </b-tooltip>

                                        </p>
                                        <div class="box-input">
                                            <!-- <div class="flotante-moneda">US$</div> -->
                                            <img class="edit-suma-asegurada" v-bind:class="{'d-none' : ocultarSumaAsegurada}" src="./../../static/media/img/renovacion/edit.png" alt="">
                                            <b-form-input class="e-range" v-bind:class="{'inputSumaAsegurada' : ocultarSumaAsegurada}" step="100" v-model="listCotizacion.vehicle.current" type="text" @blur="ocultarSumaAsegurada = false" @focus="ocultarSumaAsegurada = true" @change="cambioInput()"></b-form-input> 
                                            <div v-if="alertaMonto" style="font-size: 11px;color: red; position: relative; height: 30px;">
                                                <span class="error-suma-asegurada" >
                                                    Por favor ingresa un valor entre US$ {{this.listCotizacion.vehicle.minimum}} y US$ {{this.listCotizacion.vehicle.maximum}}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="tooltip-suma-asegurada" v-bind:class="{'d-flex' : activarTooltip}">
                                            <div class="item">
                                                <p class="tooltip-titulo">¿Qué es suma segurada?</p>
                                                <p class="tooltip-descripcion">
                                                    Puedes editar la suma asegurada de tu póliza siempre que el valor se encuentre entre US$ MIN y US$ MAX
                                                </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="divisor  d-lg-none" style="height: 20px; width: 100%;">

                                    </div>
                                    <div class="nueva-poliza--item  cuota">
                                        <p class="item-titulo">Cuota:
                                            
                                        </p>
                                        <p  class="item-descripcion" v-if="this.payment == 1">$ {{ this.listCotizacion.policy.monthly}}  </p>
                                        <p  class="item-descripcion" v-else-if="this.payment == 2">$ {{ this.listCotizacion.policy.quarterly}}  </p>
                                        <p  class="item-descripcion" v-else-if="this.payment == 3">$ {{ this.listCotizacion.policy.annual}}  </p>
                                        <p  class="item-descripcion" v-else-if="this.payment == 4">$ {{ this.listCotizacion.policy.twoYears}}  </p>
                                        <p v-else></p>
                                    </div>
                                    <div class="nueva-poliza--item  frecuencia-pago">
                                        <div class="frecuencia-pago">
                                            <p class="item-titulo">Frecuencia de pago: </p>
                                            
                                            <p @click="cambiarFrecuencia"  class="d-none  d-lg-block" v-if="this.payment == 1"> <span class="monto-actual">Mensual</span><img class="edit-frecuenciaPago" v-bind:class="{'d-none' : mostrarFrecuenciaPago}" src="./../../static/media/img/renovacion/edit.png" alt=""></p>
                                            <p @click="cambiarFrecuencia"  class="d-none  d-lg-block" v-else-if="this.payment == 2"> <span class="monto-actual">Trimestral</span><img class="edit-frecuenciaPago" v-bind:class="{'d-none' : mostrarFrecuenciaPago}" src="./../../static/media/img/renovacion/edit.png" alt=""></p>
                                            <p @click="cambiarFrecuencia"  class="d-none  d-lg-block" v-else-if="this.payment == 3"> <span class="monto-actual">Anual</span><img class="edit-frecuenciaPago" v-bind:class="{'d-none' : mostrarFrecuenciaPago}" src="./../../static/media/img/renovacion/edit.png" alt=""></p>
                                            <p @click="cambiarFrecuencia"  class="d-none  d-lg-block" v-else-if="this.payment == 4"> <span class="monto-actual">Plan 2 años</span><img class="edit-frecuenciaPago" v-bind:class="{'d-none' : mostrarFrecuenciaPago}" src="./../../static/media/img/renovacion/edit.png" alt=""></p>

                                            <p @click="showModalCambiarFrecuencia"  class="d-block  d-lg-none" v-if="this.payment == 1"> <span class="monto-actual">Mensual</span><img v-bind:class="{'d-none' : mostrarFrecuenciaPago}" src="./../../static/media/img/renovacion/edit.png" alt=""></p>
                                            <p @click="showModalCambiarFrecuencia"  class="d-block  d-lg-none" v-else-if="this.payment == 2"> <span class="monto-actual">Trimestral</span><img v-bind:class="{'d-none' : mostrarFrecuenciaPago}" src="./../../static/media/img/renovacion/edit.png" alt=""></p>
                                            <p @click="showModalCambiarFrecuencia"  class="d-block  d-lg-none" v-else-if="this.payment == 3"> <span class="monto-actual">Anual</span><img v-bind:class="{'d-none' : mostrarFrecuenciaPago}" src="./../../static/media/img/renovacion/edit.png" alt=""></p>
                                            <p @click="showModalCambiarFrecuencia"  class="d-block  d-lg-none" v-else-if="this.payment == 4"> <span class="monto-actual">Plan 2 años</span><img v-bind:class="{'d-none' : mostrarFrecuenciaPago}" src="./../../static/media/img/renovacion/edit.png" alt=""></p>
                                            
                                            <input type="radio" id="monthly-radio" class="input-radioButon" v-model="payment" name="priceInformation" value="1">
                                            <input type="radio" id="quarterly-radio" class="input-radioButon" v-model="payment" name="priceInformation" value="2">
                                            <input type="radio" id="annual-radio"  class="input-radioButon" v-model="payment" name="priceInformation"  value="3">
                                            <input type="radio" id="biannual-radio"  class="input-radioButon" v-model="payment" name="priceInformation"  value="4">
                                            <div id="filter" v-if="mostrarFrecuenciaPago">
                                                <div class="frecuencia-select">                                                
                                                    <div class="frecuencia-select--item">
                                                        <label for="monthly-radio" class="filter-label monthly radio-button" @click="radioComoPagar($event)">                                                    
                                                            <div class="d-flex align-items-center">
                                                                                                                       
                                                                <div>
                                                                    <span class="radio-buttons__text-price">Mensual</span><span> (12 cuotas)</span>
                                                                    <div class="precios" >
                                                                        <span>$&nbsp;{{listCotizacion.policy.monthly}}</span>                                                         
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>                                            
                                                    </div>
                                                    <div class="frecuencia-select--item">
                                                        <label for="quarterly-radio" class="filter-label quarterly radio-button"  @click="radioComoPagar($event)">                                                    
                                                            <div class="d-flex align-items-center">
                                                                
                                                                <div>
                                                                    <span class="radio-buttons__text-price">Trimestral</span><span> (4 cuotas)</span>    
                                                                    <div class="precios">
                                                                        <span>$&nbsp;{{listCotizacion.policy.quarterly}}</span>                                                       
                                                                    </div>
                                                                </div>                                                                 
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div class="frecuencia-select--item">
                                                        <label for="annual-radio" class="filter-label annual radio-button"  @click="radioComoPagar($event)">                                                    
                                                            <div class="d-flex align-items-center">
                                                                
                                                                <div>
                                                                    <span class="radio-buttons__text-price">Anual </span><span> (1 cuota)</span>
                                                                    <div class="precios">
                                                                        <span>$&nbsp;{{listCotizacion.policy.annual}}</span>                              
                                                                    </div>
                                                                </div>
                                                            </div>                                                        
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <!-- <div class="select">
                                                <b-form-select @change="seleccionarFrecuencia()" :value="selected" :options="options"></b-form-select>
                                                <div class="select-item">
                                                    
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="nueva-poliza--item  gps">
                                        <p class="item-titulo">GPS:
                                            <span id="tooltip-gps"  class="tooltip-icon ">
                                                ?
                                            </span>
                                            
                                            <b-tooltip target="tooltip-gps" triggers="hover">
                                                Para que puedas contar con nuestra cobertura es necesario que instales un servicio de GPS que nos permitirá rastrear tu auto en caso de robo.
                                            </b-tooltip>
                                        </p>
                                        <p  class="item-descripcion" v-if="this.objRenovacion.policy.gps == 'Y'">SI</p>
                                        <p  class="item-descripcion" v-else-if="this.objRenovacion.policy.gps == 'N'">NO</p>
                                        <p v-else></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="renovacion-body--item  renovacion-body__carro  medio-pago">
                            <div class="box-icon-seccion  d-none  d-lg-flex">
                                <img class="medio-pago--img  d-none  d-lg-block" src="./../../static/media/img/renovacion/tarjeta.png" alt="">
                            </div>
                            
                            <div class="medio-pago--datos">
                                <h3>
                                    <img width="40" class="medio-pago--img  d-block  d-lg-none" src="./../../static/media/img/renovacion/tarjeta.png" alt=""> 
                                    Medio de pago</h3>
                                <div class="medio-pago">
                                    <p class="item-titulo  mb-3">El cobro se realizará a tu tarjeta afiliada
                                        <span id="tooltip-tarjeta-afiliada"  class="tooltip-icon ">
                                            ?
                                        </span>
                                        
                                        <b-tooltip target="tooltip-tarjeta-afiliada" triggers="hover">
                                            Las cuotas de tu nueva póliza serán cargadas a la tarjeta ya afiliada. Si deseas actualizarla, puedes hacerlo haciendo clic en Actualizar medio de pago.
                                        </b-tooltip>
                                    </p>
                                    <p class="tarjeta">
                                        <span>{{this.objRenovacion.card.brand}}</span>{{this.objRenovacion.card.number}}
                                        
                                    </p>
                                    <button class="ml-lg-3  mt-3  mt-lg-0 boton-secundario" @click="actualizarTarjeta()">
                                        ACTUALIZAR MEDIO DE PAGO
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p class="texto-renovacion">
                        Si has actualizado alguna de las condiciones de la póliza, <span>recuerda hacer click en Guardar y Renovar para que tu póliza se renueve con estas condiciones.</span>
                    </p>

                    <div class="renovacion-ctas">
                        <button class="boton-secundario"  @click="norenovar()">Por ahora prefiero no renovar</button>
                        <button class="boton-principal" style="padding: 8px 24px;" @click="continuar2($event, 'Y')">GUARDAR Y RENOVAR</button>
                    </div>

                    <div class="box-btns-fixed  box-btn " v-bind:class="{'d-none': opacityNone}">
                        <b-button class="boton-principal  d-lg-none" style="padding: 8px 24px;" @click="continuar($event, planSeleccionado)">GUARDAR Y RENOVAR</b-button>
                    </div>

                    <p class="texto-tienes-dudas">
                        <span>¿Aún tienes dudas? </span><br> Llámanos al (01) 500-0000 para ayudarte
                    </p>

                </div>

                

                <div class="renovacion-info">
                    <h3 class="renovacion-info--titulo">
                        Recuerda que tienes estos beneficios adicionales
                    </h3>
                    <div class="renovacion-info__beneficios">
                        <div class="renovacion-info__beneficios--item">
                            <img width="143" src="./../../static/media/img/renovacion/chofer-reemplazo.png" alt="">
                            <p class="titulo">
                                Chofer de reemplazo
                            </p>
                            <p class="descripcion">
                                Puedes usarlo hasta 5 veces al año y sin hacer pagos adicionales
                            </p>
                        </div>
                        <div class="renovacion-info__beneficios--item">
                            <img width="143" src="./../../static/media/img/renovacion/gruas.png" alt="">
                            <p class="titulo">
                                Grúas
                            </p>
                            <p class="descripcion">
                                Si no puedes mover tu auto, nosotros nos encargamos de llevarlo a su destino
                            </p>
                        </div>
                        <div class="renovacion-info__beneficios--item">
                            <img width="143" src="./../../static/media/img/renovacion/asistencia-mecanica.png" alt="">
                            <p class="titulo">
                                Asistencia mecánica
                            </p>
                            <p class="descripcion">
                                ¿Tu carro no arranca? Llegamos a donde estés en menos de 25 minutos
                            </p>
                        </div>
                        <div class="renovacion-info__beneficios--item">
                            <img width="143" src="./../../static/media/img/renovacion/vivemas.png" alt="">
                            <p class="titulo">
                                Vivemás
                            </p>
                            <p class="descripcion">
                                Forma parte de nuestro programa de beneficios que incluye descuentos para el mantenimiento de tu auto. Para mayor información ingresa a la página web de <a style="color: #0055c8" href="https://www.interseguro.pe/vivemas/index.php/usuario">Vivemás</a>.
                            </p>
                        </div>
                    </div>
                </div>
                

                <b-modal id="modalCambiarFrecuencia" title="Bootstrap-Vue" hide-footer hide-header ref="modalCambiarFrecuencia" size="md">
                    <img class="close-modal" src="./../../static/media/img/renovacion/close-modal.png" alt="" @click="hideModalCambiarFrecuencia()">
                    <div class="modalCambiarFrecuencia">
                        <input type="radio" id="monthly-radio" class="input-radioButon" v-model="payment" name="priceInformation" value="1">
                        <input type="radio" id="quarterly-radio" class="input-radioButon" v-model="payment" name="priceInformation" value="2">
                        <input type="radio" id="annual-radio"  class="input-radioButon" v-model="payment" name="priceInformation"  value="3">
                        <input type="radio" id="biannual-radio"  class="input-radioButon" v-model="payment" name="priceInformation"  value="4">
                        <div id="filter" style="position:  !important;">
                            <div class="frecuencia-select">                                                
                                <div class="frecuencia-select--item">
                                    <label for="monthly-radio" class="filter-label monthly radio-button" @click="radioComoPagar($event)">                                                    
                                        <div class="d-flex align-items-center">
                                                                                                    
                                            <div>
                                                <span class="radio-buttons__text-price">Mensual</span><span> (12 cuotas)</span>
                                                <div class="precios" >
                                                    <span>$&nbsp;{{listCotizacion.policy.monthly}}</span>                                                         
                                                </div>
                                            </div>
                                        </div>
                                    </label>                                            
                                </div>
                                <div class="frecuencia-select--item">
                                    <label for="quarterly-radio" class="filter-label quarterly radio-button"  @click="radioComoPagar($event)">                                                    
                                        <div class="d-flex align-items-center">
                                            
                                            <div>
                                                <span class="radio-buttons__text-price">Trimestral</span><span> (4 cuotas)</span>    
                                                <div class="precios">
                                                    <span>$&nbsp;{{listCotizacion.policy.quarterly}}</span>                                                       
                                                </div>
                                            </div>                                                                 
                                        </div>
                                    </label>
                                </div>
                                <div class="frecuencia-select--item">
                                    <label for="annual-radio" class="filter-label annual radio-button"  @click="radioComoPagar($event)">                                                    
                                        <div class="d-flex align-items-center">
                                            
                                            <div>
                                                <span class="radio-buttons__text-price">Anual </span><span> (1 cuota)</span>
                                                <div class="precios">
                                                    <span>$&nbsp;{{listCotizacion.policy.annual}}</span>                              
                                                </div>
                                            </div>
                                        </div>                                                        
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-modal>

                <b-modal id="modalNoRenovar" title="Bootstrap-Vue" hide-footer hide-header ref="modalNoRenovar" size="md">
                    <img class="close-modal" src="./../../static/media/img/renovacion/close-modal.png" alt="" @click="hideModalNoRenovar()">
                    <div class="hemos-recibido-comentario" v-if="comentariosEnviados">
                        <img class="exitosa-img" src="./../../static/media/img/renovacion/tarjeta-aceptada.png" alt="">
                        <p>Hemos recibido tu comentario <br>
                             ¡Muchas gracias!</p>
                    </div>
                    <div class="modalNoRenovar" v-if="!comentariosEnviados">
                            <img  src="./../../static/media/img/renovacion/cara-triste.png" alt="" class="mb-4">
                            <p class="modalNoRenovar--titulo  mb-3">¡Estamos tristes porque te vas!</p>
                            <p class="modalNoRenovar--parrafo    mb-3">
                                Gracias por este año donde nos elegiste <br> para proteger tu auto. <br><br> Del 1 al 5 que tan bien calificarías el <br> servicio brindado:
                            </p>
                            <div class="box-estrellas">
                                <form>
                                    <p class="clasificacion">
                                        <input id="radio1" type="radio" name="estrellas" value="5"><!--
                                        --><label @click="calificar(5)" for="radio1">★</label><!--
                                        --><input id="radio2" type="radio" name="estrellas" value="4"><!--
                                        --><label @click="calificar(4)" for="radio2">★</label><!--
                                        --><input id="radio3" type="radio" name="estrellas" value="3"><!--
                                        --><label @click="calificar(3)" for="radio3">★</label><!--
                                        --><input id="radio4" type="radio" name="estrellas" value="2"><!--
                                        --><label @click="calificar(2)" for="radio4">★</label><!--
                                        --><input id="radio5" type="radio" name="estrellas" value="1"><!--
                                        --><label @click="calificar(1)" for="radio5">★</label>
                                    </p>
                                </form>
                                <!-- <img  @click="calificar(1)" v-bind:class="{}" class="estrella-img" src="./../../static/media/img/renovacion/estrella-sinfondo.png" alt="">
                                <img  @click="calificar(2)" v-bind:class="{}" class="estrella-img" src="./../../static/media/img/renovacion/estrella-sinfondo.png" alt="">
                                <img  @click="calificar(3)" v-bind:class="{}" class="estrella-img" src="./../../static/media/img/renovacion/estrella-sinfondo.png" alt="">
                                <img  @click="calificar(4)" v-bind:class="{}" class="estrella-img" src="./../../static/media/img/renovacion/estrella-sinfondo.png" alt="">
                                <img  @click="calificar(5)" v-bind:class="{}" class="estrella-img" src="./../../static/media/img/renovacion/estrella-sinfondo.png" alt=""> -->
                            </div>
                            <div class="tu-opinion-negativa" v-if="opinionNegativa">
                                <p  class="modalNoRenovar--parrafo  mb-3">
                                    Cuéntanos, ¿Por qué decides no <br> renovar tu Seguro Vehicular?:
                                </p>
                                <b-form-textarea
                                    class="mb-3"
                                    id="textarea"
                                    v-model="textNorenovar"
                                    placeholder=""
                                    rows="3"
                                    max-rows="6"
                                    ></b-form-textarea>
                                <div class="box-btn-renovaciones">
                                    <button type="submit" @click="enviarCalificacion()" class="btn-primario-renovaciones" >
                                        <span style="">ENVIAR</span>                            
                                    </button>
                                </div>
                            </div>
                            <div class="tu-opinion-positiva" v-if="opinionPositiva">
                                <p  class="modalNoRenovar--parrafo  mb-3">
                                    Cuéntanos, ¿Por qué decides no <br> renovar tu Seguro Vehicular?:
                                </p>
                                <b-form-group v-slot="{ ariaDescribedby }">
                                    <b-form-radio class="radio-norenovar  mb-2" v-model="selectedNoRenovar" :aria-describedby="ariaDescribedby" name="some-radios" @change="selectNoRenovar()"  value="Vendí mi auto">Vendí mi auto</b-form-radio>
                                    <b-form-radio class="radio-norenovar  mb-2" v-model="selectedNoRenovar" :aria-describedby="ariaDescribedby" name="some-radios" @change="selectNoRenovar()"  value="No puedo pagarlo">No puedo pagarlo</b-form-radio>
                                    <b-form-radio class="radio-norenovar  mb-2" v-model="selectedNoRenovar" :aria-describedby="ariaDescribedby" name="some-radios" @change="selectNoRenovar()"  value="Voy a comprar con otra empresa">Voy a comprar con otra empresa</b-form-radio>
                                    <b-form-radio class="radio-norenovar  mb-2" v-model="selectedNoRenovar" :aria-describedby="ariaDescribedby" name="some-radios" @change="selectNoRenovar()"  value="Manejo bien, no lo necesito">Manejo bien, no lo necesito</b-form-radio>
                                    <b-form-radio class="radio-norenovar  mb-2" v-model="selectedNoRenovar" :aria-describedby="ariaDescribedby" name="some-radios" @change="noRenovarCheckbox()" value="otros">Otros</b-form-radio>
                                </b-form-group>
                                <div class="box-btn-renovaciones">
                                    <button type="submit" @click="enviarCalificacion()" class="btn-primario-renovaciones" >
                                        <span style="">ENVIAR</span>                            
                                    </button>
                                </div>
                                
                            </div>
                    </div>
                </b-modal>

                <b-modal id="modalActualizarTarjeta" title="Bootstrap-Vue" hide-footer hide-header ref="modalActualizarTarjeta" size="md">
                    <img class="close-modal" src="./../../static/media/img/renovacion/close-modal.png" alt="" @click="hideModalActualizarTarjeta()">
                    <div class="modal-actualizar-tarjeta">
                        <div class="respuesta-culqi  exitosa" v-if="respuestaculqiexitosa">
                            <img class="exitosa-img" src="./../../static/media/img/renovacion/tarjeta-aceptada.png" alt="">
                            <p>¡Listo! Hemos actualizado de manera conforme la tarjeta afiliada a tu Seguro Vehicular para tu nueva póliza.</p>
                        </div>
                        <div class="respuesta-culqi  fallida" v-if="respuestaculqifallida">
                            <img class="fallida-img" src="./../../static/media/img/renovacion/tarjeta-rechazada.png" alt="">
                            <p>¡Lo sentimos! No hemos podido actualizar la tarjeta afiliada a tu Seguro Vehicular. Te sugerimos ponerte en contacto con tu banco o afiliar otra tarjeta.</p>
                        </div>
                        <div class="modal-custom">
                            <div class="datos-tarjeta">
                                <p class="texto-ingresa-tarjeta">INGRESA TU TARJETA</p>
                                <p class="texto-pago-online">Pago online 100% seguro</p>
                                
                                <div class="card-interseguro">   
                                    <div class="form-group-custom">
                                        <div class="input-group  iptGral editable  box-iptCard">
                                            <input placeholder="Número de la tarjeta" id="cardnumber" @keyup="addingBlankSpaces($event)"  v-model="objCardNumber.number" maxlength="19" type="tel" class="form-control iptGral__input  ipt-cardNumber"/>                                            
                                            <img width="30" :src="creditCardImage" >
                                        </div>
                                    </div>
                                    <div class="card-custom">
                                        <div class="card-custom__date" style="position: relative;"  v-bind:class="{'activeFocus':activeFocus}">
                                            
                                            <div class="form-group-custom">                                                            
                                                <div id="box-mes" class="input-group  iptGral editable">   
                                                    <input @keyup="keyUpMes()" @blur="activeFocus = !activeFocus" placeholder="MM" id="cardmes" class="form-control text-uppercase iptGral__input ipt-month"  maxlength="2" v-model="card.expiration_month" type="tel" name="name"/>
                                                </div>
                                                <div id="focusMES" class=" d-none">
                                                    Fecha de vencimiento de tu tarjeta.
                                                </div>
                                            </div>
                                            <div class="form-group-custom  text-right-custom">
                                                <div class="input-group  iptGral editable" >
                                                    <input @keyup="keyUpCard()" @blur="activeFocus = !activeFocus" id="cardaño" placeholder="AA" class="form-control text-uppercase iptGral__input ipt-year"   maxlength="2"  v-model="expiration_year" type="tel" name="name"/>

                                                </div>
                                            </div>
                                            <img v-if="activeFocus" class="img-activefocus" src="./../../static/media/img/root/calendar.svg" alt="">
                                            <img v-else class="img-activefocus" src="./../../static/media/img/root/calendar.png" alt="">
                                        </div>
                                        <div class="card-custom__cvv">
                                            <div class="form-group-custom">
                                                <div id="box-ccv" class="input-group  iptGral  editable"  @click="validCard()">
                                                    <input @keyup="keyUpCard()" placeholder="CVV" variant="custom" id="cardccv" class="form-control text-uppercase iptGral__input ipt-cvv" :disabled="isEnable"  :maxlength="this.numberTest"  v-model="card.cvv" type="tel" name="name"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div  id="focusCVV" >
                                            <!-- <img class="img-fluid" :src="creditCardImageCvv" > -->
                                        </div>
                                    </div>

                                    <div class="metodo_pago_img" >
                                        <img width="165" src="./../../static/media/img/root/metodo_pago.png" alt="amex">
                                    </div>
                                </div>
                            </div>
                            <div class="box-btn-renovaciones">
                                <button type="submit" @click="continuar" class="btn-primario-renovaciones" :disabled='this.isDisabledPayment'>
                                    <span  v-bind:class="{'d-none': estamosProcesandoTuPago}">ACTUALIZAR</span>
                                    <span class="msj-procesando-pago  parpadea" v-bind:class="{'msj-procesando-pag-activo': estamosProcesandoTuPago}">Estamos procesando tu solicitud ...</span>                            
                                </button>
                            </div>
                        </div>
                    </div>
                </b-modal>
            </div>
            <b-container>
                <b-row> 
                    <b-col cols="12">
                        <div class="card-banner">
                        </div>
                    </b-col>
                </b-row>                
            </b-container>    

        </div>

        <b-modal id="modalRenovarPolizaExitosa" title="Bootstrap-Vue" hide-footer hide-header ref="modalRenovarPolizaExitosa" size="md">
            <img class="close-modal" src="./../../static/media/img/renovacion/close-modal.png" alt="" @click="hideModalRenovarPolizaExitosa()">
            <div class="modal-renovarPolizaExitosa">
                <img class="exitosa-img" src="./../../static/media/img/renovacion/poliza-exitosa.png" alt="">
                <p>¡Listo! Hemos actualizado de manera conforme la tarjeta afiliada a tu Seguro Vehicular para tu nueva póliza.</p>
            </div>
        </b-modal>

        <!-- <b-modal id="modalActualizarTarjeta" title="Bootstrap-Vue" hide-footer hide-header ref="modalActualizarTarjeta" size="md">
            <div class=" modalNoRenovar">
                <div class="modal-custom">
                    <div class="panel-custom pt-3 pb-0">
                        <form class="card-interseguro">   
                            <div class="form-group-custom">                                                        
                                <div id="focusTarjeta">
                                    Luego de pagar, estarás asegurado automáticamente con nosotros. Una persona de Interseguro te contactará.
                                </div>
                                <div class="input-group  iptGral editable  box-iptCard">
                                    <img src="../../static/media/img/flujo/como-pagar/icon-tarjeta.png" class="icon-tarjeta"/>
                                    <input  placeholder="Número de la tarjeta" id="cardnumber" @keyup="addingBlankSpaces($event)" v-model="objCardNumber.number" maxlength="19" type="tel" class="form-control iptGral__input  ipt-cartNumber"/>                                            
                                    <img width="30" :src="creditCardImage" >
                                </div>
                            </div>
                            <div class="card-custom">
                                <div class="card-custom__date">
                                    <div class="form-group-custom">                                                            
                                        <div id="box-mes" class="input-group  iptGral editable">   
                                            <img src="../../static/media/img/flujo/como-pagar/icon-mes.png" class="icon-mes"/>
                                            <input placeholder="MM" id="cardmes" class="form-control text-uppercase iptGral__input ipt-month" @keyup="keyUpMes()" maxlength="2" v-model="card.expiration_month" type="tel" name="name"/>
                                        </div>
                                        <div id="focusMES">
                                            Fecha de vencimiento de tu tarjeta.
                                        </div>
                                    </div>
                                    <div class="form-group-custom  text-right-custom">
                                        <div class="input-group  iptGral editable">
                                            <input id="cardaño" placeholder="AA" class="form-control text-uppercase iptGral__input ipt-year" @keyup="keyUpCard()"  maxlength="2"  v-model="expiration_year" type="tel" name="name"/>

                                        </div>
                                    </div>
                                </div>
                                <div class="card-custom__cvv">
                                    <div class="form-group-custom">
                                        <div id="box-ccv" class="input-group  iptGral  editable"  @click="validCard()">
                                            <img src="../../static/media/img/flujo/como-pagar/icon-ccv.png" class="icon-ccv"/>                                   
                                            <input  placeholder="CVV" variant="custom" id="cardccv" class="form-control text-uppercase iptGral__input ipt-cvv" :disabled="isEnable" @keyup="keyUpCard()" :maxlength="this.numberTest"  v-model="card.cvv" type="tel" name="name"/>
                                        </div>
                                    </div>     
                                </div>  
                                <div  id="focusCVV" >
                                    <img class="img-fluid" :src="creditCardImageCvv" >
                                </div>  
                            </div>                
                            <br>
                        </form>
                        <button type="submit" @click="continuar" class="btn-primario-renovaciones" >
                            <span style="">ACTUALIZAR</span>                            
                        </button>
                    </div>
                </div>
            </div>
        </b-modal> -->

    </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import FadeLoader from '@/components/loaders/FadeLoader'
var cardNumber;
export default {
    layout: "InterseguroHome",
    data() {
        return {
            showLoader: false,
            opacityNone: false,
            comentariosEnviados: false,
            alertaMonto:false,
            ocultarSumaAsegurada: false,
            objComentario:{},
            textNorenovar: '',
            selectedNoRenovar: '',
            opinionNegativa: false,
            opinionPositiva: false,
            activarTooltip: false,
            activarTooltipDesktop: false,
            selected:1,
            activeFocus : false,
            options: [],
            respuestaculqiexitosa: false,
            respuestaculqifallida: false,

            estamosProcesandoTuPago: false,
            itemElegido: {
                brandId:'',
                brand:'',
                modelYear: '',
                model: '',
                modelId:'',
                remarketingId:'',
                assignedPrice:null,
                businessId:1,
                discountType: '',
                
            },
            
            opacidad: false,
            monto_pagar:"",
            mostrarPrimeraPantalla: true,
            mostrarSegundaPantalla: false,
            placa:"",
            objRenovacion: {
                "priceModel": {
                    "policy": {
                        "riskName": "",
                        "risk": "",
                        "calculated": 0,
                        "twoYears": 0,
                        "annual": 0,
                        "quarterly": 0,
                        "monthly": 0,
                        "twoYearsDiscount": 0,
                        "annualDiscount": 0,
                        "quarterlyDiscount": 0,
                        "monthlyDiscount": 0,
                        "annualCalculated": 0,
                        "quarterlyCalculated": 0,
                        "monthlyCalculated": 0,
                        "twoYearsCalculated": 0,
                        "discount": false
                    },
                    "deducible": 150,
                    "vehicle": {
                        "current": 0,
                        "maximum": 0,
                        "minimum": 0,
                        "gps": ""
                    },
                    "minimumAdjust": 10,
                    "maximumAdjust": 15,
                    "discount": {
                        "special": 10,
                        "annual": 0,
                        "quarterly": 0,
                        "monthly": 0,
                        "intercorp": 0,
                        "annualAmount": 0,
                        "quarterlyAmount": 0,
                        "monthlyAmount": 0
                    }
                },
                "client": {
                    "firstName": "",
                    "firstLastName": "",
                    "secondLastName": "",
                    "documentNumber":""
                },
                "vehicle": {
                    "brandName": "",
                    "modelName": "",
                    "plateNumber": "",
                    "modelYear": 0
                },
                "policy": {
                    "policyNumber": '',
                    "intercorp": "",
                    "fromDate": "",
                    "toDate": "",
                    "frequencyId": 0,
                    "frequency": "",
                    "gps": ""
                },
                "card": {
                    "brand": "",
                    "number": ""
                }
            },
            listCotizacion:{},
            clonado:{
                "vehicle":{
                    "current":0
                }
            },
            cuota: "",
            tabIndex: 0,
            payment: 1,
            mostrarValorComercial: false,
            mostrarFrecuenciaPago: false,
            cardCompleto:true,
            size: '45px',
            objClient:{},
            nombreCliente:'',
            /*************************************/
            numberTest:'',
            isEnableURL: true,
            objCard:{
                policyId:'',
                customer_id:'',
                bin: "",
                card_brand: "",
                card_category: "",
                card_type: "",
                id:''
            },
            objCardNumber:{
                number: ''
            },                
            tamañoCCV:0,
            cvvcci:'CCV',
            checkDocs: false,
            creditCardImageCvv: '',
            creditCardImage: '',
            expirationDate: '',
            isDisabledPayment: false,
            isisplayNoneLoader: true,
            cardValitor: false,
            card_id:'',
            expiration_year: '',
            card:{
                email: '',
                card_number:'',
                public_key: process.env.culqiPK,
                url: process.env.culquiURL,
                cvv:'',
                expiration_year: '',
                expiration_month: '',                    
            },
            tipoTarjetaDatalayer:'',
            objCulqi:{},
            objUpdatePolicy:{
                card_id:'',
            },
            objVehicleSelect:{},
            numberValidation:{
                isValid:''
            },
        }
    },
    validations: {
        payment: {
            card_number: {
                mustBeCreditCard: cardNumber => {
                    let valid = require('card-validator')
                    // let numberValidation = valid.number(cardNumber.replace(/ /g, ''))
                    let numberValidation = valid.number(cardNumber)
                    if (numberValidation.isPotentiallyValid && numberValidation.isValid) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        }
    },
    computed: {
        isEnable: function(){
            return this.cardCompleto;                
        },
        isMinimo: function() {
            let decimal = this.clonado.vehicle.minimum / 100
            let minimo = Math.ceil(decimal) * 100;
            return minimo
        },
        isMaximo: function() {
            let decimal = this.clonado.vehicle.maximum / 100
            let maximo = Math.floor(decimal) * 100;
            return maximo
        },
    },
    components:{
        'fade-loader': FadeLoader,
    },
    methods: {
        handleScroll(eve) {
        if (window.scrollY >= 335) {
            this.opacityNone = true        

        } else {
            this.opacityNone = false
        }
      },
        enviarCalificacion(){

            this.objComentario.documentoLocal = this.objRenovacion.client.documentNumber
            this.objComentario.comentario = this.textNorenovar
            this.$store.dispatch('common/getComentarios', this.objComentario).then((res) => {                
                this.comentariosEnviados = true
                setTimeout(() => {
                    this.hideModalNoRenovar()
                    this.$nuxt.$router.push({path: "/renovacion/renovacion-cancelada"})
                }, 3000);

            })
        },
        selectNoRenovar(){
            this.objComentario.comentario = this.selectedNoRenovar
        },
        noRenovarCheckbox(){
            this.opinionPositiva = false;
            this.opinionNegativa = true;
        },
        calificar(id){
            
            this.objComentario.estrellas = id+""
            if (id > 3) {
                this.selectedNoRenovar = ''
                this.opinionNegativa = false;
                this.opinionPositiva = true;
            }else if(id <=3){
                this.opinionPositiva = false;
                this.opinionNegativa = true;
            }
        },
        norenovar(){
            this.comentariosEnviados = false
            this.opinionPositiva = false;
            this.opinionNegativa = false;
            this.$store.commit('common/setPlacaNoRenovar',this.objRenovacion.vehicle.plateNumber)
            this.objUpdatePolicy.numeroPoliza = this.objRenovacion.policy.policyNumber
            this.objUpdatePolicy.monto_pagar = this.monto_pagar
            this.objUpdatePolicy.current = this.clonado.vehicle.current
            this.objUpdatePolicy.payment = this.payment
            this.objUpdatePolicy.renew = "N"

            this.$store.dispatch('payment/updatePolicy', this.objUpdatePolicy)
            .then((res) =>{
                this.showModalNoRenovar()
                // this.opacidad = false
            }).catch((err)=>{
                // this.opacidad = false                    
            })
        },
        cambioInput(evt) {
            if (this.listCotizacion.vehicle.current > this.clonado.vehicle.maximum) {
                this.listCotizacion.vehicle.current = this.clonado.vehicle.maximum
                this.alertaMonto = true
            }else if(this.listCotizacion.vehicle.current < this.clonado.vehicle.minimum){
                this.alertaMonto = true
                this.listCotizacion.vehicle.current = this.clonado.vehicle.minimum
            } else {
                this.ocultarSumaAsegurada = true
                if (this.listCotizacion.vehicle.current > this.clonado.vehicle.maximum || this.listCotizacion.vehicle.current < this.clonado.vehicle.minimum) {   
                } else {
                    this.itemElegido.assignedPrice = this.listCotizacion.vehicle.current
                    this.$store.dispatch('common/getCotizacionRenovacion', this.itemElegido).then((res) => {
                        // this.msgMontos = "";
                        // this.msgMontosActive = false;
                        //REVISAR DESPUES EL CALL
                        if (this.objRenovacion.policy.planId == 4){
                            this.listCotizacion = res.data.body.basic
                        } else if (this.objRenovacion.policy.planId == 6){
                            this.listCotizacion = res.data.body.medium
                        } else {
                            this.listCotizacion = res.data.body.allRisk    
                        }
                        this.clonado.policy.risk = this.listCotizacion.policy.risk;
                        this.clonado.policy.calculated = this.listCotizacion.policy.calculated;
                        this.clonado.policy.annual = this.listCotizacion.policy.annual;
                        this.clonado.policy.quarterly = this.listCotizacion.policy.quarterly;
                        this.clonado.policy.monthly = this.listCotizacion.policy.monthly;                    
                        this.clonado.vehicle.current = this.listCotizacion.vehicle.current;
                        this.clonado.vehicle.minimum = this.clonado.vehicle.minimum;
                        this.clonado.vehicle.maximum = this.clonado.vehicle.maximum;
                        // this.isEnableNext = false;
                        this.obtenerMonto() 
                    })
                    this.isDisabled = false;
                }
            }

            
        },
        cambiarValor(){
            this.mostrarValorComercial = true
        },
        cambiarFrecuencia(){
            this.mostrarFrecuenciaPago = true
        },
        showModalCambiarFrecuencia(){
            this.$refs.modalCambiarFrecuencia.show()
        },
        hideModalCambiarFrecuencia(){
            this.$refs.modalCambiarFrecuencia.hide()
        },
        guardarValor(){
            this.mostrarValorComercial = false
        },
        guardarFrecuencia(){
            this.mostrarFrecuenciaPago = false
        },

        radioComoPagar(event){            
            var self = this
            self.hideModalCambiarFrecuencia()
            setTimeout(function(){
                if(self.payment == 1){
                    self.monto_pagar = self.listCotizacion.policy.monthlyDiscount > 0 ? self.listCotizacion.policy.monthlyDiscount : self.listCotizacion.policy.monthly
                    self.listCotizacion.paymentMethodId = self.payment
                }else if(self.payment == 2){
                    self.monto_pagar =  self.listCotizacion.policy.quarterlyDiscount > 0 ? self.listCotizacion.policy.quarterlyDiscount : self.listCotizacion.policy.quarterly
                    self.listCotizacion.paymentMethodId = self.payment
                }else if(self.payment == 3){
                    self.monto_pagar = self.listCotizacion.policy.annualDiscount > 0 ? self.listCotizacion.policy.annualDiscount : self.listCotizacion.policy.annual
                    self.listCotizacion.paymentMethodId = self.payment
                }else{
                    self.isDisableButton = true
                }
                self.mostrarFrecuenciaPago = false
            }, 300);

            
        },
        showModalRenovarPolizaExitosa(){
            this.$refs.modalRenovarPolizaExitosa.show()
        },
        hideModalRenovarPolizaExitosa(){
            this.$refs.modalRenovarPolizaExitosa.hide()
        },
        continuar2 (evt, parametro) {
                evt.preventDefault();
                this.showLoader = true
                this.listCotizacion.policy.startDate = this.$store.state.common.fechaVigenciaRenovacion
                this.listCotizacion.paymentMethodId = this.payment
                this.objUpdatePolicy.numeroPoliza = this.objRenovacion.policy.policyNumber
                this.objUpdatePolicy.monto_pagar = this.monto_pagar
                this.objUpdatePolicy.current = this.clonado.vehicle.current
                this.objUpdatePolicy.payment = this.payment
                this.objUpdatePolicy.renew = "Y"
                this.$store.dispatch('payment/updatePolicy', this.objUpdatePolicy)
                .then((res) =>{        
                    this.showModalRenovarPolizaExitosa()           
                    setTimeout(() => {
                        this.hideModalRenovarPolizaExitosa()
                        this.$nuxt.$router.push({path: "/renovacion/renovacion-exitosa"})
                    }, 4000);
                    this.showLoader = false 
                }).catch((err)=>{
                    this.showLoader = false                    
                })

        },
        addingBlankSpaces (ev) {
            let valid = require('card-validator')
            cardNumber = ev.target.value
            let numberValidation = valid.number(cardNumber.replace(/ /g, ''))
            this.numberValidation = valid.number(cardNumber.replace(/ /g, ''))
            if (numberValidation.card !== null) {
                
                this.numberTest = numberValidation.card.code.size
                this.cvvcci = numberValidation.card.code.name
                let cardType = numberValidation.card.type !== 'american-express' ? numberValidation.card.type : 'amex'
                this.creditCardImage = require('../../static/media/img/flujo/metodo-pago/' + cardType + '.png')
                this.creditCardImageCvv = require('../../static/media/img/flujo/como-pagar/' + cardType+'cvv' + '.png')
            } else {
                this.creditCardImage = ''
                this.creditCardImageCvv = ''
            }
            if (ev.keyCode !== 8) {
                this.objCardNumber.number = this.objCardNumber.number.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')               
            }
            this.card.card_number = cardNumber.split(" ").join("");
            if(numberValidation.isValid){
                this.cardCompleto = false
                this.cardValitor = true;
                if(numberValidation.card.code.name == "CVV" || numberValidation.card.code.name == "CVC" && this.checkDocs == true){
                    if(process.client){
                        let mes = document.querySelector("#cardmes").value.length
                        let año = document.querySelector("#cardaño").value.length
                        let ccv = document.querySelector("#cardccv").value.length
                        if(mes == 2 && año == 2 && ccv == 3 ){
                            this.isDisabledPayment = false
                        }
                    }
                    
                }else if(numberValidation.card.code.name == "CID"){
                    if(mes == 2 && año == 2 && ccv == 3 ){
                        this.isDisabledPayment = false
                    }
                }
                if (process.client) {
                    document.getElementById('cardmes').focus()
                }
                
            }else{
                // this.isDisabledPayment = true
                this.cardCompleto = true
            }
        },            
        keyUpMes(){
            let mes = document.querySelector("#cardmes").value.length
            if(mes == 2){
                document.getElementById('cardaño').focus()
                if(this.cardValitor){
                    let mes = document.querySelector("#cardmes").value.length
                    let año = document.querySelector("#cardaño").value.length
                    let ccv = document.querySelector("#cardccv").value.length
                    if(mes == 2 && año == 2 && ccv > 2 && this.checkDocs == true){                
                        this.isDisabledPayment = false
                    }else{
                        // this.isDisabledPayment = true
                    }
                }
            }else{
                // this.isDisabledPayment = true
            }
        },
        keyUpCard(){
            let año = document.querySelector("#cardaño").value.length
            if(año == 2){
                document.getElementById('cardccv').focus()
            }
            if(this.cardValitor){
                let mes = document.querySelector("#cardmes").value.length
                let año = document.querySelector("#cardaño").value.length
                let ccv = document.querySelector("#cardccv").value.length
                if(mes == 2 && año == 2 && ccv > 2 && this.checkDocs == true){                
                    this.isDisabledPayment = false
                }else{
                    // this.isDisabledPayment = true
                }
            }
        },
        validCard(){
                if(!this.numberValidation.isValid){
                    this.$swal({
                    title: 'Oops...',
                    text: 'Debe ser una tarjeta válida',
                    type: 'error',
                    showCancelButton: false,
                    confirmButtonColor: '#2177CC',
                    confirmButtonText: 'OK'
                })
            }
        },
        delay(){
            let placas = ['UNI200','A7W082','ALV353','D8G504','D3S377','ANH399','ABB554','AFL665','BEP357','F7R680','F5E321',
                'ALZ505','F1U161','F4C236','C1Q472','D1T007','P1N189','ASL642','ALC572','F6Z616','AHO423','ALY571',
                'D5O544','BAJ632','F8Q010','AMI645','ALB594','D0X108','ABT402','F7V564','B0O223','C7Q414','AUF117','D4K265','AUS522',
                'ACC539','AEC363','ADQ690','B9B426','ADU483','ABK032','C0P308','D4C362','ACF272','C8E414','F6T289','B6H173','B9U205','AMH699','ADO538',
                'C7Q510','F4K525','AKP207','C2N052','AMS470','ANS621','AYS105','ATT030','AMU026','BHJ599','F1O532','F6N574','AAC664','B1L251']
            if(this.placa.length == 6){
                if (placas.find(element => element == this.placa.toUpperCase())) {
                    localStorage.setItem("renovacionEnero", this.placa.toUpperCase());
                    this.$nuxt.$router.push({path: "/renovacionEnero"})                        
                }else{                        
                    this.obtenerDatos()
                }                
            }
        },
        obtenerMonto(){
            var self = this
            setTimeout(() => {
               self.payment = self.objRenovacion.policy.frequencyId
                if(self.payment == 1){
                    self.monto_pagar = self.listCotizacion.policy.monthlyDiscount > 0 ? self.listCotizacion.policy.monthlyDiscount : self.listCotizacion.policy.monthly
                }else if(self.payment == 2){
                    self.monto_pagar =  self.listCotizacion.policy.quarterlyDiscount > 0 ? self.listCotizacion.policy.quarterlyDiscount : self.listCotizacion.policy.quarterly
                }else if(self.payment == 3){
                    self.monto_pagar = self.listCotizacion.policy.annualDiscount > 0 ? self.listCotizacion.policy.annualDiscount : self.listCotizacion.policy.annual
                }else if(self.payment == 4){
                    if(self.listCotizacion.discount.intercorp == 5){
                        self.monto_pagar = self.listCotizacion.policy.twoYearsDiscount > 0 ? self.listCotizacion.policy.twoYearsDiscount : self.listCotizacion.policy.twoYearsDiscount
                    }else{
                        self.monto_pagar = self.listCotizacion.policy.twoYears > 0 ? self.listCotizacion.policy.twoYears : self.listCotizacion.policy.twoYears
                    }                        
                }
            }, 300);
        },

        obtenerDatos(){
            this.$store.commit('common/setPlateNumber', this.placa)
            this.$store.dispatch('common/obtenerDatos', this.placa).then((res) =>{          
                if (res.data.code == 0) {
                    this.objRenovacion = res.data.body
                    console.log(this.objRenovacion.policy.planId)
                    this.$store.commit('common/setFechaVigenciaRenovacion', this.objRenovacion.policy.fromDate)
                    if (this.objRenovacion.policy.renew == "Y") {
                            this.$store.commit('common/setPlacaNoRenovar', '')
                            this.$store.commit('payment/setNumeroPoliza',this.objRenovacion.policy.policyNumber)
                            this.itemElegido.year = this.objRenovacion.vehicle.modelYear
                            this.itemElegido.assignedPrice = this.objRenovacion.priceModel.vehicle.current
                            this.$store.dispatch('common/getCotizacionRenovacion', this.itemElegido)
                            .then((res) => {
                                if (this.objRenovacion.policy.planId == 4){
                                    this.listCotizacion = res.data.body.basic
                                } else if (this.objRenovacion.policy.planId == 6){
                                    this.listCotizacion = res.data.body.medium
                                } else {
                                    this.listCotizacion = res.data.body.allRisk    
                                }
                                this.mostrarPrimeraPantalla = false
                                this.mostrarSegundaPantalla = true
                                this.clonado = Object.assign({}, this.listCotizacion);
                                this.obtenerMonto()   
                                }
                            ).catch((res) =>{
                            })
                    }else if (this.objRenovacion.policy.renew == "N") {
                        this.$store.commit('common/setPlacaNoRenovar', this.placa)
                        this.$nuxt.$router.push({path: "/renovacion/renovacion-cancelada"})
                    } else {
                        console.log("Obtener Datos No entontrados")
                    }
                } 
            })
        },
        actualizarTarjeta(){
            this.$refs.modalActualizarTarjeta.show()
        },

        
        hideModalActualizarTarjeta(){
            this.estamosProcesandoTuPago = false
            this.respuestaculqiexitosa = false
            this.respuestaculqifallida = false
            this.$refs.modalActualizarTarjeta.hide()
        },

        showModalNoRenovar(){
            this.$refs.modalNoRenovar.show()
        },
        hideModalNoRenovar(){
            this.opinionPositiva = false;
            this.opinionNegativa = false;
            this.$refs.modalNoRenovar.hide()
        },
        continuar(evt) {    
            this.estamosProcesandoTuPago = true        
            evt.preventDefault()
            this.isDisabledPayment = true
            this.card.expiration_year = "20" + this.expiration_year
            this.card.email = this.objRenovacion.client.email
            this.isisplayNoneLoader = false
            this.$store.dispatch('payment/getTokenCulqi', this.card)
            .then((res) =>{
                this.objCulqi = res
                this.objCard = res.iin
                this.objCard.policyId = this.objRenovacion.policy.policyId
                this.objCard.customer_id = this.objRenovacion.client.documentNumber
                this.objCard.id = this.objCulqi.id
                this.objCard.card_number = this.objCulqi.card_number
                this.$store.dispatch('payment/getCard', this.objCard).then((res) =>{
                    this.isDisabledPayment = false
                    this.respuestaculqiexitosa = true
                    this.objUpdatePolicy.numeroPoliza = this.objRenovacion.policy.policyNumber
                    this.objUpdatePolicy.monto_pagar = this.monto_pagar
                    this.objUpdatePolicy.current = this.clonado.vehicle.current
                    this.objUpdatePolicy.payment = this.payment
                    this.objUpdatePolicy.renew = "Y"
                    this.isisplayNoneLoader = false;
                    
                    setTimeout(() => {
                        this.hideModalActualizarTarjeta()
                    }, 5000);
                    
                    this.estamosProcesandoTuPago = false
                    this.$store.dispatch('payment/updatePolicy', this.objUpdatePolicy).then((res) =>{
                            this.obtenerDatos()
                        }
                    )
                }).catch(()=>{
                    this.isDisabledPayment = false
                    this.respuestaculqifallida = true                        
                    setTimeout(() => {
                        this.hideModalActualizarTarjeta()
                    }, 5000);
                })
            }).catch(()=>{
                this.isDisabledPayment = false
                this.respuestaculqifallida = true
                setTimeout(() => {
                    this.hideModalActualizarTarjeta()
                }, 5000);
            })
        }
    },
    mounted() {       
        if (process.browser) {
            window.addEventListener("scroll", this.handleScroll);
            document.addEventListener('touchstart', this.handleScroll, {passive: true});
        }
        this.mostrarPrimeraPantalla = true
        this.mostrarSegundaPantalla = false
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'pagina_vista',
            'page-url': '/vehicular/renovacion', 
            'page-title': 'renovacion'
        })
    }
}
</script>
<style lang="scss" scope>
$height: 30px;
$thumb-height: 13px;
$track-height: 8px;

// colours
$upper-color: #d8d8d8;
$lower-color: #d8d8d8;
$thumb-color: #0055c8;
$thumb-hover-color: #007bff;

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

.modal .modal-content {
        display: flex;
        min-width: 338px;
        min-height: 425px;
        .msj-procesando-pago {
            display: none;
            font-size: 14px;
            font-family: 'Omnes Medium';
            color: #ffffff;
        }
        .msj-procesando-pag-activo{
            display: block;
        }
        .parpadea {
            
            animation-name: parpadeo;
            animation-duration: 3s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;

            -webkit-animation-name:parpadeo;
            -webkit-animation-duration: 3s;
            -webkit-animation-timing-function: linear;
            -webkit-animation-iteration-count: infinite;
        }

        @-moz-keyframes parpadeo{  
            0% { opacity: 1.0; }
            50% { opacity: 0.3; }
            100% { opacity: 1.0; }
        }

        @-webkit-keyframes parpadeo {  
            0% { opacity: 1.0; }
            50% { opacity: 0.3; }
            100% { opacity: 1.0; }
        }

        @keyframes parpadeo {  
            0% { opacity: 1.0; }
            50% { opacity: 0.3; }
            100% { opacity: 1.0; }
        }
        .box-btn-renovaciones{
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .btn-primario-renovaciones{
            width: 285px;
            height: 45px;
            margin: auto;
            padding: 0;
            background-color: #ea0c90;
            color: white;
            border-radius: 3px;
            outline: none;
            box-shadow: none;
            border: none;
        }
    }
#modalCambiarFrecuencia{
    .modal-content {
        display: flex;
        min-width: 338px;
        min-height: 214px !important;
    }
    #filter{
        position: relative;
        background: white;
        padding: 0;
        z-index: 9;
        border: none;
        width: 226px;
        height: 143px;
        top: 5px;
        left: 28px;
    }
    label span{
        color: #454A6C;
    }
    .frecuencia-select--item{
        width: 220px;
        border-bottom: 1px solid #70707036;
    }
}
.opacityNone{
    opacity: 1 !important;
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
}
    .box-estrellas{
        #form {
            width: 250px;
            margin: 0 auto;
            height: 50px;
        }

        #form p {
            text-align: center;
        }

        #form label {
            font-size: 20px;
        }

        input[type="radio"] {
            display: none;
        }

        label {
            color: grey;
        }

        .clasificacion {
            direction: rtl;
            unicode-bidi: bidi-override;
            font-size: 34px;
        }

        label:hover,
        label:hover ~ label {
        color: orange;
            }

        input[type="radio"]:checked ~ label {
            color: orange;
        }
    }
    .modalNoRenovar{
        display: flex;
        flex-direction: column;
        align-items: center;
        &--titulo{
            color: #0855C4;
            font-size: 22px;
            font-family: 'Omnes Medium';
            width: 200px;
            text-align: center;
        }
        &--parrafo{
            color: #454A6C;
            font-size: 16px;
            font-family: 'Omnes Medium';
            text-align: center;
        }
        .tu-opinion-positiva{
            margin-top: 4px;
        }
    }
    .modal .modal-content {
        display: flex;
        min-width: 338px;
        min-height: 425px;
        .box-btn-renovaciones{
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .btn-primario-renovaciones{
            width: 285px;
            height: 45px;
            margin: auto;
            padding: 0;
            background-color: #ea0c90;
            color: white;
            border-radius: 3px;
            outline: none;
            box-shadow: none;
            border: none;
        }
    }
    
    .modal-renovarPolizaExitosa{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 352px;
        /* background: red; */
        justify-content: center;
        img{
        }
        p{
            text-align: center;
            font-size: 22px;
            font-family: 'Omnes Medium';
            color: #0855c4;
            margin-top: 32px;
        }
    }
    .modal-actualizar-tarjeta{
        .estamos-procesando-tuPago{
            color: red;
            font-size: 15px;
            text-align: center;
        }
        .btn-actualizar-tarjeta{
            width: 285px;
            height: 45px;
            margin: auto;
            padding: 0;
            background-color: #ea0c90;
            color: white;
            border-radius: 3px;
            outline: none;
            box-shadow: none;
            border: none;
        }
        .texto-pago-online{
            margin: 20px 0;
        }
        .metodo_pago_img{
            margin: 20px 0;
        }
    }
    #filter{
        position: absolute;
        background: white;
        padding: 0;
        z-index: 9;
        border: 1px solid #0855C4;
        width: 226px;
        height: 143px;
        .precios{
            display: inline-block;
        }
        .radio-button {
            padding-left: 8px;
            padding-top: 8px;
            height: 35px;
        }
    }
    .close-modal{
        position: absolute;
        top: -25px;
        right: -17px;
        z-index: 9999;
        cursor: pointer;
    }
    .respuesta-culqi{
        position: absolute;
        background: #ffffff;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 14px;
        img{
        }
        p{
            text-align: center;
            font-size: 22px;
            font-family: 'Omnes Medium';
            color: #0855c4;
            margin-top: 32px;
        }
    }
    .texto-ingresa-tarjeta{
        color: #0855C4;
        font-size: 22px;
        font-family: 'Omnes Medium';
        text-align: center;
    }
    .texto-pago-online{
        color: #454A6C;
        font-size: 14px;
        font-family: 'Omnes Medium';
        text-align: center;
    }
    .card-custom{
        display: flex;
        justify-content: space-between;
        max-width: 318px;        
        &__cvv{
            max-width: 220px;
            width: 50%;
            position: relative;
            z-index: 7;
            box-sizing: content-box;
            #box-ccv{
                position: relative;
                display: flex;
                align-items: center;
                .icon-ccv{
                    position: absolute;
                    width: 18px;
                    left: 0;
                    padding-top: 0;
                    margin-left: 6px;
                    z-index: 9;        
                }
                input{
                    padding-left: 40px;
                }
            }
        }
        &__date.activeFocus{
            border: 1px solid #0855c4;
        }
        &__date{    
            max-width: 220px;
            width: 50%;
            display: inline-flex;
            .form-group-custom{
                &:nth-child(1){
                    width: 92px;
                }
                &:nth-child(2){
                    width: 70%;
                }
                &:nth-child(4){
                    width: 50%;
                }
                
                #box-mes{
                    position: relative;
                    display: flex;
                    align-items: center;
                    .icon-mes{                    
                        position: absolute;
                        width: 18px;
                        left: 0;
                        padding-top: 0;
                        margin-left: 6px;
                        z-index: 9;
                    }
                    &:after{
                        width: 5px;
                        height: 46px;
                        background: #fff;
                        content: "/";
                        top: 1px;
                        right: -2px;
                        position: absolute;
                        z-index: 99;
                        font-size: 17px;
                        line-height: 44px;
                        color: #d3ddef;
                    }
                }
            }
        }
    }
    
    
    .iptGral.editable .iptGral__input {
        padding-left: 40px;
        max-width: 318px;
        height: 48px;
        border: 1px solid #D1D1D1 !important;
        box-shadow: none;
        line-height: 48px;
    }
    .iptGral.editable ::placeholder {
        color: #D1D1D1 !important;        
    }
    .box-iptCard{
        position: relative;
        display: flex;
        align-items: center;
        img{
            position: absolute;
            right: 0;
            z-index: 99;
            padding-top: 8px;
            right: 8px;

        }
        .icon-tarjeta{
            position: absolute;
            width: 18px;
            left: 0;
            padding-top: 0;
            margin-left: 6px;
        }
        .ipt-cardNumber{            
            background-image: url("./../../static/media/img/root/tarjeta.svg");
            background-repeat: no-repeat;
            background-position-x: 12px;
            background-position-y: 14px;
            background-size: 35px;
            padding-top: 4px;
            padding-bottom: 5px;
        }
        .ipt-cardNumber:focus {
            background-image: url("./../../static/media/img/root/tarjeta_focus.svg");
            border: 1.5px solid #0855c4!important;
            box-shadow: none;
        }
        
    }
    .card-interseguro{
        border-radius: 5px;
        width: 100%;
        max-width: 318px;
        margin: auto; 
        .form-label.col-form-label.label-completed{
            padding-left: 0;
            padding-bottom: 0;
        }
        .subtitulo{
            color: #0BD360;
        }
        label{
            color: #0855c4;
        }
        .slash-symbol{
            position: relative;
            label{
                position: absolute;
                bottom: -4px;
                z-index: 99;
                font-size: 26px;
                padding-bottom: 0;
                color:#0855c4;
            }
        }
        .ipt-month{
            width: 40px;
            padding-right: 8px !important;
            // background-image: url("./../../static/media/img/root/calendar.png");
            background-repeat: no-repeat;
            background-position-x: 12px;
            background-position-y: 14px;
            background-size: 35px;
            padding-top: 4px;
            padding-bottom: 5px;
            text-align: left !important;
            padding-left: 41px !important;
        }
        .ipt-month:focus {
            // background-image: url("./../../static/media/img/root/calendar.svg");
            box-shadow: none;
        }
        
        .img-activefocus{
            position: absolute;
            z-index: 9;
            width: 20px;
            left: 13px;
        }
        
        .ipt-year{
            width: 65px;
            padding: 0 5px 0 0;
            text-align: left !important;
            padding-left: 0 !important;
            padding-left: 6px !important;
        }
        .ipt-cvv{
            width: 60px;
            padding: 0 0 0 8px;
            background-image: url("./../../static/media/img/root/ccv.png");
            background-repeat: no-repeat;
            background-position-x: 12px;
            background-position-y: 14px;
            background-size: 35px;
            padding-top: 4px;
            padding-bottom: 5px;
        }
        #box-ccv .ipt-cvv:focus {
            background-image: url("./../../static/media/img/root/cvv_focus.png");
            border: 1.5px solid #0855c4 !important;
            box-shadow: none;
        }
        .text-right-custom{
            text-align: right;
            label{
                padding-right: 0;
                padding-bottom: 0;
            }
        }
        .iptGral__input{
            color: #616161;
            font-size: 20px;
        }
    }
    .metodo_pago_img{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 22px;
            width: auto;
        }
    }
    
    .tooltip-inner {
        color: #fff;
        background-color: #454A6C;
        padding: 15px;
        font-family: 'Omnes Regular';
    }
    .arrow:before, .bs-tooltip-top .arrow:before {
        top: 0;
        border-width: .4rem .4rem 0;
        border-top-color: #454A6C;
    }
    .arrow:before, .bs-tooltip-bottom .arrow:before {
        bottom: 0;
        border-width: 0 .4rem .4rem;
        border-bottom-color: #454A6C;
    }
    .card-custom__date{
        align-items: center;
    }

    .renovacion2021{
        color: #454A6C;
        
/***************************************************************************************************
*******************************************
************************************************************************************************** */
    .box-range{
        width: 65%;
        position: relative;
        z-index: 5;
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

    .inputSumaAsegurada{
        background: red;
    }

    .inputSumaAsegurada{
        border: 1px solid #0855C4;
        background: #ffffff;
        width: 145px;
        height: 36px;
    }

    .e-range {
        background: transparent;
        display: block;
        appearance: none;
        width: 117px !important;
        margin: 0;
        height: $height;
        overflow: hidden;
        border: none;
        height: 36px;
        cursor: pointer;
        z-index: 99;
        position: relative;
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
.e-range::-webkit-range-track,
.e-range::-webkit-range-progress {
  width: 100%;
  height: $height;
  background: $upper-background;
}
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
        button{
            &:focus{
                outline: none;
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
        .tooltip-suma-asegurada{
            position: absolute;
            width: 270px;
            height: 170px;
            top: 0;
            right: 0;
            z-index: 999;
            padding: 32px;
            margin: auto;
            display: none;
            flex-direction: column;
            justify-content: center;
            background: white;
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
                // border-right: 18px solid transparent;
                // border-top: 24px solid rgba(39,54,45,0);
                // border-left: 18px solid transparent;
                // border-bottom: 39px solid white;
                border-top: 18px solid transparent;
                border-bottom: 18px solid transparent;
                border-left: 24px solid #ffffff;
                top: -28px;
            }
        }
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
            width: 13px;
            height: 13px;
            display: inline-block;
            border-radius: 50%;
            text-align: center;
            justify-content: center;
            font-size: 10px !important;
            cursor: pointer;
        }
        .boton-secundario{
            border: 1px solid #EA0F8F;
            height: 40px;
            color: #EA0F8F;
            border-radius: 3px;
            background: #ffffff;
        }
        .boton-principal{
            background: #EA0F8F;
            color: #ffffff;
            border-radius: 3px;
            box-shadow: none;
            border: none;
        }
        
        .renovacion-ctas{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 35px 0;
            button{
                height: 45px;
            }
            .boton-secundario{
                margin-bottom: 24px;
            }
        }
        .texto-renovacion, .texto-tienes-dudas{
            color: #454A6C;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            font-family: 'Omnes Regular';

        }
        .texto-renovacion{
            max-width: 300px;
            margin: auto;
        }
        .texto-tienes-dudas{
            max-width: 300px;
            margin: auto;
            margin-bottom: 35px;
            span{
                font-family: 'Omnes Medium';
            }
        }
        .carro{
            .placa-modelo{
                display: flex;
                .placa{
                    width: 90px;
                }
                .modelo{
                    width: 100%;
                    padding-left: 16px;
                }
                &--datos{
                    
                }
                &--titulo{
                    color: #454A6C;
                    font-size: 13px;
                    font-family: 'Omnes Regular';
                }
                &--descripcion{
                    color: #454A6C;
                    font-size: 14px;
                    font-family: 'Omnes SemiBold';
                }
            }
        }
        .nueva-poliza{
            display: flex;
            flex-wrap: wrap;
            span{
                font-size: 13px;
            }
            .plan, .cuota{
                width: 60px;
            }
            .vigencia-poliza, .frecuencia-pago{
                width: 155px;
                padding-left: 2px;
            }
            .frecuencia-pago{
                p{
                    position: relative;
                }
                cursor: pointer;
            }
            .edit-frecuenciaPago{
                position: absolute;
                right: 24px;
                top: 2px;
            }
            .frecuencia-select--item{
                &:hover span{
                    color: #0855C4;
                }
            }
            .suma-asegurada, .gps{
                width: 120px;
                padding-left: 2px;
            }
            &--item{
                position: relative;
                &:nth-child(2), &:nth-child(5), &:nth-child(3), &:nth-child(6){
                    &:after{
                        content: "";
                        position: absolute;
                        height: 50px;
                        width: 1px;
                        background: #D2D7D9;
                        left: -5px;
                        top: 0;
                    }
                }
                .monto-actual{
                    width: 100px;
                    display: inline-block;
                }
                
            }
            .box-input{
                position: relative;
                .error-suma-asegurada{
                    position: absolute;
                    left: initial;
                    width: 127px;
                    color: red;
                    font-size: 10px;
                    right: 0px;
                    text-align: right;
                    
                }
                .edit-suma-asegurada{
                    position: absolute;
                    right: 0;
                    top: 8px;
                }
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
        }
        .medio-pago{
            .tarjeta{
                text-transform: uppercase;
                font-size: 14px;
                color: #0855C4;
            }
        }
    }
    .renovacion-head{
        p{
            color: #0855C4;
            font-size: 25px;
            text-align: center;
            line-height: 28px;
        }
        span.subtitulo{
            text-align: center;
            color: #454A6C;
            font-size: 15px;
            font-family: 'Omnes Medium';
        }
    }
    .renovacion-body{
        &--item{
            border: 1px solid #D5D5D5;
            padding: 16px 8px;
            margin-bottom: 24px;
            border-radius: 3px;
            &:last-child{
                margin-bottom: 35px;
            }
            .box-icon-seccion{
                width: 142px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            h3{
                padding-left: 8px;
                color: #0855C4;
                font-size: 18px;
                font-family: 'Omnes Medium';
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                img{
                    margin-right: 8px;
                }
            }
            .item-descripcion{
                font-family: 'Omnes Semibold';
                font-size: 14px;
                color: #454A6C;
            }
            .item-titulo{
                font-size: 13px;
            }
        }
    }
    .renovacion-data {
        padding: 0 8px;
        max-width: 1200px;
        margin: auto; 
    }
    .renovacion-info{
        padding-top: 32px;
        padding-bottom: 32px;
        background: #EDEFF8;
        h3{
            color: #0855C4;
            font-size: 25px;
            text-align: center;
        }
        &__beneficios{
            &--item{
                background: #ffffff;
                width: 310px;
                height: 340px;
                margin: auto;
                padding: 16px;
                margin-bottom: 24px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                .titulo{
                    color: #454A6C;
                    font-size: 20px;
                    text-align: center;
                }
                .descripcion{
                    color: #454A6C;
                    font-size: 16px;
                    text-align: center;
                }
            }
        }
    }

    @media (min-width: 768px) {
        .card-custom__date .form-group-custom:nth-child(1) {
            width: 94px;
            position: relative;
        }
        .card-custom__date .form-group-custom:nth-child(2) {
            width: initial;
            position: relative;
        }
    }
    

    @media (min-width: 992px){
        
        .modal .modal-content {
            display: flex;
            min-width: 465px;
            min-height: 305px;
        }
        .close-modal{
            right: -30px;
        }
        .renovacion-head{
            max-width: 940px;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 32px;            
            p{
                font-size: 33px;
                line-height: 62px;
            }
            span.subtitulo{
                color: #454A6C;
                font-size: 24px;
                font-family: 'Omnes Medium';
            }
        }
        .renovacion2021{
            
            .nueva-poliza{
                .box-input{
                    .error-suma-asegurada{
                        position: absolute;
                        right: initial;
                        left: -79px;
                        width: 318px;
                        color: red;
                        font-size: 11px;
                    }
                }
                .plan, .cuota, .gps{
                    width: 80px;
                }
                .vigencia-poliza, .frecuencia-pago, .suma-asegurada{
                    width: 170px;
                }
                .cuota{
                    width: 92px;
                }
                &--item{
                    &:nth-child(2), &:nth-child(5), &:nth-child(3), &:nth-child(6){
                        &:after{
                            left: -14px;
                        }
                    }
                    
                }
            }
            .tooltip-icon {
                color: #ffffff !important;
                width: 16px;
                height: 16px;
                margin-left: 4px;
                font-size: 13px;
                line-height: 16px;
                font-family: 'Omnes Regular' !important;
            }
            .texto-renovacion{
                max-width: 750px;
                font-size: 18px;
                line-height: 27px;
            }
            .texto-tienes-dudas{
                font-size: 18px;
                max-width: 750px;
                margin-bottom: 42px;
            }

            .medio-pago{
                .tarjeta{                    
                    display: inline-block;
                    
                }
            }
            .renovacion-ctas{
                flex-direction: row;
                align-items: center;
                .boton-secundario {
                    margin-bottom: 0px;
                    margin-right: 24px;
                }
            }
        }
        
        .renovacion-body{
            max-width: 980px;
            margin: auto;
            &--item{                
                display: flex;
                align-items: center;
                img{
                    margin: 0 32px;
                }
                .item-titulo{
                    font-size: 16px;
                    font-family: 'Omnes Regular';
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .item-descripcion{
                    font-size: 16px;
                    font-family: 'Omnes SemiBold';
                    color: #454A6C;
                }
                h3{
                    font-size: 22px;
                    padding-left: 0;
                }
            }
            
        }
        .renovacion-info{
            &__beneficios{
                margin: auto;
                margin-top: 32px;
                display: flex;
                max-width: 800px;
                flex-wrap: wrap;
                &--item{
                    .descripcion{
                        height: 160px;
                    }
                    .titulo{
                        height: 50px;
                        line-height: 50px;
                    }
                }
            }
        }
        
    }

    @media (min-width: 1200px) {
        .card-interseguro{
            width: 440px;
        }
        .card-custom__date .form-group-custom:nth-child(1) {
            width: 94px;
            position: relative;
        }
        .card-custom__date .form-group-custom:nth-child(2) {
            width: initial;
            position: relative;
        }

        .renovacion2021{
            .e-range{
                width: 85% !important;
                font-size: 16px;
                font-family: 'Omnes Semibold';
            }
            .renovacion-info{
                &--titulo{
                    font-size: 33px;
                }
            }
            .nueva-poliza{
                span{
                    font-family: 'Omnes Semibold';
                    font-size: 15px;
                    color: #454A6C;
                }
                .vigencia-poliza{
                    width: 200px;
                }
            }
        }
        

    }

    @media (min-width: 1366px) {
        .renovacion2021{
            .renovacion-info{
                
                &__beneficios{
                    max-width: 1240px;
                    flex-wrap: nowrap;
                    &--item{
                        width: 280px;
                        height: 416px;
                    }
                }
            }
        }
        

    }

    .capadecarga{
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        z-index: 999;
        background: #cae1f9f0;
        display: none;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        opacity: 0;
        transition: visibility 1s, opacity 1s linear;        
        img{
            max-width: 500px;
            width: 100%;
        }
    }
    .opacidad{        
        display: flex;
        visibility: visible;
        opacity: 1;
        z-index: 9999;
    }
    p, div{
        margin: 0;
        padding: 0;
        color: #000000de;
    }
    .radio-button div{
        color: #000000de;
    }
    p{
        line-height: 1.5;
        word-spacing: 1px; 
    }
    #modalActualizarTarjeta .modal-body {
        min-height: 260px;
    }
    #modalRenovarPoliza .modal-body {
        min-height: 260px;
    }
    .card-interseguro, #cardnumber, #cardmes, #cardaño,#cardccv{
        border-radius: 4px;
    }
    #cardmes{
        border-radius: 4px 0 0 4px;
        text-align: right;
        padding-right: 10px;

    }
    #cardaño{
        border-radius:  0 4px 4px 0;
        padding-left: 10px;
    }
    #box-ccv{
        position: relative;
        display: flex;
        align-items: center;
        .icon-ccv{
            position: absolute;
            width: 18px;
            left: 0;
            padding-top: 0;
            margin-left: 6px;
            z-index: 9;        
        }
        input{
            padding-left: 34px;
        }
    }
    .card-custom{
        display: flex;
        justify-content: space-between;
        width: 100%;
        &__cvv{
            width: 50%;
            position: relative;
            z-index: 7;
            margin-left: -4px;
            left: -1px;
            box-sizing: content-box;
        }
        &__date{    
            width: 50%;
            display: flex;
            .form-group-custom{
                &:nth-child(1){
                    width: 50%;
                }
                &:nth-child(2){
                    width: 50%;
                }
                &:nth-child(4){
                    width: 50%;
                }
                
                #box-mes{
                    position: relative;
                    display: flex;
                    align-items: center;
                    .icon-mes{                    
                        position: absolute;
                        width: 18px;
                        left: 0;
                        padding-top: 0;
                        margin-left: 6px;
                        z-index: 9;
                    }
                    &:after{
                        width: 5px;
                        height: 45px;
                        background: #f7fafb;
                        content: "/";
                        top: 1px;
                        right: -2px;
                        position: absolute;
                        z-index: 99;
                        font-size: 17px;
                        line-height: 34px;
                    }
                }
            }
        }
    }
    .ipt-cartNumber{
        padding-left: 34px;
    }
    .box-iptCard{
        position: relative;
        display: flex;
        align-items: center;
        img{
            position: absolute;
            right: 0;
            z-index: 99;
            padding-top: 8px;
            right: 8px;

        }
        .icon-tarjeta{
            position: absolute;
            width: 18px;
            left: 0;
            padding-top: 0;
            margin-left: 6px;
        }
        
    }
    #focusCVV{
        position: absolute;
        right: 15px;
        display: none;
        border-radius: 5px;
        overflow: hidden;
        width: 170px;
        height: 115px;
        bottom: 105px;
        // background: #005EA1;
        z-index: 99;
        img{
            width: 100%;
        }
    }
    #focusMES{
        position: absolute;
        left: 15px;
        display: none;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #005EA1;
        border-radius: 5px;
        overflow: hidden;
        width: 170px;
        height: 85px;
        bottom: 110px;
        padding: 5px;
        color: white;
        z-index: 99;
        img{
            width: 100%;
        }
    }
    #focusTarjeta{
        position: absolute;
        left: 15px;
        display: none;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #005EA1;
        border-radius: 5px;
        overflow: hidden;
        width: 249px;
        height: 70px;
        bottom: 180px;
        padding: 5px;
        color: white;
        z-index: 99;
        font-size: 13px;
        img{
            width: 100%;
        }
    }
    .planesRenovaciones-tabs{
        border: none;
        a{
            font-family: omnes !important;
        }
        .tab-pane:focus{
            outline: 0px;
        }
        ul{
            justify-content: center;
        }
        .tab-pane{
            padding-left: 0;
        }
        .card-header{
            background: #fff;
            font-size: 16px;
            border: none;
            width: 100%;
            justify-content: center;
        }
        .nav-pills .nav-link, .nav-pills .show > .nav-link {
            color: #9b9b9b;
            border-bottom: 2px solid #9b9b9b;
            margin-right: 10px;
            font-size: 14px;
            text-transform: capitalize;
        }
        .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
            color: #0855c4;
            background-color: rgba(0, 170, 255, 0.10000000149011612);
            border-bottom: 2px solid #0855c4;
        }
    }
    .radio-button div {
        color: #616161;
    }
    .card-btn {
        padding: 8px 0;        
    }
    .card-btn button {
        width: 280px !important;
    }
</style>