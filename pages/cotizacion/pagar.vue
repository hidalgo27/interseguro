<template>
    <section class="pagina-pagar" v-bind:class="{'pt-sinBlack':this.$store.state.common.flagCloseListon == 0}">
        <div id="newModal" style="display:none" >
            <div class="phoneContent">
                 <a class="phoneS" style="color : #5b85c5" href="tel:015000000">
                  <img src="./../../static/media/interseguroVehicular_v2/cardImage.svg" alt="telefono">
                 </a>
            </div>
            <br>
            <p style="color : #0855C4; font-size : '23px'">Error en el pago</p>
            <br>
            <p style="color: #454A6C;
                font-family: 'Omnes Regular';
                opacity: 1;">{{textErrModal}}
            <br>{{textErrModalTwo}}</p>

        </div>   

        <b-container>
            <b-row class="mi-breadcrumb">
                <b-col cols="12" class="box-steps">
                <ul class="steps" style="display: inline-flex">
                    <div class="steps__item steps--active">Pago</div>
                    <div class="steps__item ">Planes</div>
                    <div class="steps__item ">Mi carro</div>
                    <li class="steps--progressBar" ></li> 
                    </ul>
                </b-col>
            </b-row>

            <!--Resumen Mobile-->
            <b-row class="d-flex  d-lg-none mobile box-resumen">
                <b-col cols="12">
                    <div class="accordion" role="tablist">
                        <b-card no-body class="mb-1 resumen">
                            <b-card-header header-tag="header" class="p-1" role="tab">                        
                                <b-row>
                                    <b-col cols="auto" class="mr-auto p-6" align-self="center">
                                        <p>VER RESUMEN</p>                                        
                                    </b-col>
                                    <b-col cols="auto" class="p-6" align-self="center" style="vertical-align: middle;">                                       
                                        <b-button block v-b-toggle.accordion-proteccion @click="clicVerMas()" v-if="this.flagVerMas == 1">
                                        <b-row align-v="center">
                                            VER MÁS 
                                            <img style="margin-left:5px" src="./../../static/media/imagenes/seleccion/ver-mas.svg" alt="">
                                        </b-row> 
                                        </b-button>
                                        <b-button block v-b-toggle.accordion-proteccion @click="clicVerMenos()" v-if="this.flagVerMenos == 1">
                                        <b-row align-v="center">                                    
                                            VER MENOS 
                                            <img style="margin-left:5px" src="./../../static/media/imagenes/seleccion/ver-mas.svg" alt="">                                    
                                        </b-row>                                   
                                        </b-button>
                                    </b-col>
                                </b-row>                               
                            </b-card-header>
                            <b-collapse id="accordion-proteccion" accordion="my-accordion" role="tabpanel" class="body-resumen">
                                <b-card-body class="datos">
                                    <b-row>
                                        <b-col>
                                            <p class="sub-titulo">datos de tu carro</p>
                                        </b-col>                                        
                                    </b-row>
                                    <b-row >
                                        <b-col cols="4">
                                            <p class="label">Mi carro</p>                                            
                                        </b-col>
                                        <b-col cols="8">
                                            <p class="campo">{{this.$store.state.common.objVehiculo.brand}} {{this.$store.state.common.objVehiculo.model}} {{this.$store.state.common.objVehiculo.modelYear}}</p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col>
                                            <p class="sub-titulo2">datos personales</p>
                                        </b-col>                                        
                                    </b-row>
                                    <b-row >
                                        <b-col cols="4">
                                            <p class="label">DNI</p>                                            
                                        </b-col>
                                        <b-col cols="8">
                                            <p class="campo">{{this.$store.state.common.objCliente.documentNumber}}</p>
                                        </b-col>
                                    </b-row>
                                    <b-row class="row-final">
                                        <b-col cols="4">
                                            <p class="label">Nombre</p>                                            
                                        </b-col>
                                        <b-col cols="8">
                                            <p class="campo">{{this.$store.state.common.objCliente.firstName}}</p>
                                        </b-col>
                                    </b-row>
                                    <b-row class="row-final">
                                        <b-col cols="4">
                                            <p class="label">Teléfono</p>                                            
                                        </b-col>
                                        <b-col cols="8">
                                            <p class="campo">{{this.$store.state.common.objCliente.phoneNumber}}</p>
                                        </b-col>
                                    </b-row>
                                    <b-row class="row-final">
                                        <b-col cols="4">
                                            <p class="label">Correo</p>                                            
                                        </b-col>
                                        <b-col cols="8">
                                            <p class="campo">{{this.$store.state.common.objCliente.emailAddress}}</p>
                                        </b-col>
                                    </b-row>                                    
                                    <b-row>
                                        <b-col>
                                            <p class="sub-titulo2">datos de mi póliza</p>
                                        </b-col>                                        
                                    </b-row>
                                    <b-row >
                                        <b-col cols="4" >
                                            <p class="label">Plan</p>                                            
                                        </b-col>
                                        <b-col cols="8">
                                            <p v-if="this.planSeleccionado == 4" class="campo">Básico: Protección contra robo</p>
                                            <p v-if="this.planSeleccionado == 6" class="campo">Intermedio: Protección accidentes</p>
                                            <p v-if="this.planSeleccionado == 3" class="campo">Full: Protección total</p>
                                        </b-col>
                                    </b-row>
                                    <b-row class="row-final">
                                        <b-col cols="4">
                                            <p class="label">Cobertura</p>                                            
                                        </b-col>
                                        <b-col cols="8">
                                            <p class="campo">$ {{this.$store.state.common.listaCotizacion.vehicle.current}}</p>
                                        </b-col>
                                    </b-row>
                                    <b-row class="row-final">
                                        <b-col cols="4">
                                            <p class="label">Frecuencia</p>                                            
                                        </b-col>
                                        <b-col cols="8">
                                            <p v-if="this.$store.state.common.frecuenciaPago == 1" class="campo">Mensual</p>
                                            <p v-if="this.$store.state.common.frecuenciaPago == 2" class="campo">Trimestral</p>
                                            <p v-if="this.$store.state.common.frecuenciaPago == 3" class="campo">Anual</p>
                                        </b-col>
                                    </b-row>
                                    <b-row class="row-final">
                                        <b-col cols="4">
                                            <p class="label">F. de inicio</p>                                            
                                        </b-col>
                                        <b-col cols="8">
                                            <p class="campo">{{this.$store.state.common.listaCotizacion.policy.startDate}}</p>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </div>
                </b-col>
            </b-row>

            <b-row class="flujo-titulo">
                <b-col cols="12">
                    <div class="lista1 ">                        
                        <b-avatar button @click="volver($event)" src="./../../static/media/imagenes/seleccion/row-back.svg" class="d-none  d-lg-inline-block"></b-avatar>
                        Ingresa tu tarjeta crédito o débito                        
                    </div>
                </b-col>
            </b-row>          
            
            <b-row>                
                <b-col cols="12" sm="12" md="12" lg="8" xl="8" class="mt-4">
                    <div class="metodo-pago">
                        <b-row class="justify-content-center">
                            <b-col cols="12" lg="12"  class="metodo-pago__ingresatarjeta" style="position: relative;"> 
                                <b-row>                                       
                                    <b-col cols="12" class="box-ingresaTarjeta">
                                        <form class="card-interseguro">   
                                            <div class="form-group-custom">                                                        
                                                <div id="focusTarjeta">
                                                    Luego de pagar, estarás asegurado automáticamente con nosotros. Una persona de Interseguro te contactará.
                                                </div>
                                                <div class="input-group  iptGral editable  box-iptCard">
                                                    <input @focus="focusTarjeta" @blur="blurTarjeta" placeholder="Número de tarjeta" 
                                                    id="cardnumber" name="cardnumber" @keyup="addingBlankSpaces($event)" v-model="objCardNumber.number" 
                                                    aria-label="Número de tarjeta" autocomplete="cc-number"
                                                    aria-describedby="numberDocumentFeedback"
                                                    maxlength="19" type="tel" class="form-control iptGral__input  ipt-cardNumber"/>
                                                    
                                                    <img width="30" :src="creditCardImage" >
                                                    
                                                </div>
                                            </div>
                                            <div class="card-custom">
                                                <div class="card-custom__date">
                                                    <div class="form-group-custom">                                                            
                                                        <div id="box-mes" class="input-group  iptGral editable">   
                                                            <input @focus="focusMES" @blur="blurMES" placeholder="MM" id="cardmes" autocomplete="cc-exp-mes"
                                                             class="form-control text-uppercase iptGral__input ipt-month" @keyup="keyUpMes()" maxlength="2"
                                                              v-model="card.expiration_month" type="tel" name="cardmes"/>
                                                        </div>
                                                        <div id="focusMES">
                                                            Fecha de vencimiento de tu tarjeta.
                                                        </div>
                                                    </div>
                                                    <div class="form-group-custom  text-right-custom">
                                                        <div class="input-group  iptGral editable">
                                                            <input id="cardaño" placeholder="AA"  autocomplete="cc-exp-año" class="form-control text-uppercase iptGral__input ipt-year" @keyup="keyUpCard()"  maxlength="2"  v-model="expiration_year" type="tel" name="name"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-custom__cvv">
                                                    <div class="form-group-custom">
                                                        <div id="box-ccv" class="input-group  iptGral  editable"  @click="validCard()">
                                                            <input @focus="focusCVV" @blur="blurCVV" placeholder="CVV" variant="custom"  
                                                            id="cardccv" autocomplete="cc-csc" class="form-control text-uppercase iptGral__input ipt-cvv"
                                                            aria-describedby="numberFeedback"
                                                             :disabled="isEnable" @keyup="keyUpCard()" :maxlength="this.numberTest"  v-model="card.cvv" type="tel" name="cardccv"/>
                                                        </div>
                                                    </div>     
                                                </div>  
                                                <div  id="focusCVV" >
                                                    <img class="img-fluid" :src="creditCardImageCvv" >
                                                </div>  
                                            </div>
                                            <br>
                                        </form>                    
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col cols="12" class="text-center">
                                        <b-row v-bind:class="{ isActivePayment: isisplayNoneLoader }">
                                            <b-col cols="12">
                                                <div class="spinner-tarjeta">
                                                    <clip-loader class="cliploader" :loading="loading" :color="color" :size="size"></clip-loader>
                                                </div>
                                            </b-col>
                                            <b-col cols="12">
                                                <p class="spinner-descripcion">Estamos procesando tu pago</p>
                                            </b-col>                    
                                        </b-row>
                                    </b-col>
                                    
                                    <b-col cols="12" class="text-center">
                                        <div class="checkbox-aux font-nunito">                                                    
                                            <label  class="box-checkbox"  id="show-modal">
                                                <input type="checkbox"  @change="isTrueTerminos" v-model="checkDocs" id="checkDocs">
                                                <span class=checkbox-aux__span>
                                                    <i class="checkbox-aux__span--icon fa fa-check"></i>
                                                </span>
                                                <template v-if="tabIndex == 1">
                                                    <span v-if="gpsExiste == 'Y'" class="checkbox-aux__descripcion">He leído y acepto
                                                        <a href="javascript:void(0);"  v-b-modal.modal1> las condiciones de la póliza</a>
                                                        y del <a href="javascript:void(0);" v-b-modal.modalgps>Sistema de Rastreo GPS</a>
                                                    </span>
                                                    <span v-else class="checkbox-aux__descripcion">He leído y acepto
                                                        <a href="javascript:void(0);"  v-b-modal.modal1> las condiciones de la póliza</a>  
                                                    </span>
                                                </template>
                                                <template v-else>
                                                    <span v-if="gpsExiste == 'Y'" class="checkbox-aux__descripcion">He leído y acepto
                                                        <a href="javascript:void(0);"  v-b-modal.modal1> las condiciones de la póliza</a>
                                                        y del <a href="javascript:void(0);" v-b-modal.modalgps>Sistema de Rastreo GPS</a>
                                                    </span>
                                                    <span v-else class="checkbox-aux__descripcion">He leído y acepto
                                                        <a href="javascript:void(0);"  v-b-modal.modal1> las condiciones de la póliza</a>   
                                                    </span>
                                                </template>
                                            </label>
                                        </div> 
                                    </b-col>
                                </b-row>

                                <b-row class="justify-content-center">                                            
                                    <b-col cols="6">                                                
                                        <button type="submit" @click="continuar" class="btn box-btn__button box-btn--primary" 
                                            :disabled='this.isDisabledPayment'>
                                            <span>PAGAR ${{this.monto_pagar}} </span>
                                        </button>
                                    </b-col>
                                </b-row>
                                <b-row class="text-center mt-4">
                                    <b-col cols="12">
                                        <img src="../../static/media/img/flujo/metodo-pago/tarjetas.svg" alt="visa">
                                    </b-col>
                                </b-row>
                                <b-row class="text-center mt-4" align-h="center">
                                    <b-col cols="6" class="box-messaje">
                                        <p>Tu compra es 100% segura. Contamos con el respaldo del <b><span style="color:#0855C4">Grupo Intercorp</span></b> </p>
                                    </b-col>
                                </b-row>
                                
                            </b-col>

                        </b-row>

                    </div>
                </b-col>
                
                <b-col cols="12" sm="12" md="12" lg="4" xl="4" class="mt-4">
                    <div class="resumen-proteccion">
                        <div class="resumen-proteccion__cabecera pb-3">
                            <p>RESUMEN DE TU PROTECCIÓN</p>
                            <div class="desc-resumen">
                                <span>{{this.$store.state.common.objVehiculo.brand}}</span>
                                <span>{{this.$store.state.common.objVehiculo.model}}</span>
                                <span>{{this.$store.state.common.objVehiculo.modelYear}}</span>
                            </div>
                        </div>

                        <div class="resumen-proteccion__cuerpo box-resumen">
                            <div class="datos-personales">                                
                                <!-- <h3 class="resumen-proteccion--subtitulo">DATOS PERSONALES 
                                    <button type="submit" @click="editarDatosPersonales()"><span>EDITAR</span></button>
                                </h3> -->
                                <div class="sub-titulo d-flex">
                                    <b-row>
                                        <b-col cols="8" >
                                            <p class="resumen-proteccion--subtitulo">DATOS PERSONALES</p>                                        
                                        </b-col>
                                        <b-col cols="4">
                                            <b-button @click="clicBtnEditar()" v-if="this.visibleBtnEditar == 1">EDITAR</b-button>
                                            <b-button @click="clicBtnCancelar()" v-if="this.visibleBtnCancelar == 1">CANCELAR</b-button>
                                        </b-col>
                                    </b-row>
                                </div>
                                <div class="view-datos" v-if="this.visibleBtnEditar == 1">
                                    <b-row>
                                        <b-col cols="4">
                                            <p class="label">DNI</p>
                                        </b-col>
                                        <b-col cols="8">
                                            <p><span>{{this.$store.state.common.objCliente.documentNumber}}</span></p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="4">
                                            <p class="campo">Nombre</p>
                                        </b-col>
                                        <b-col cols="8">
                                            <p><span>{{this.$store.state.common.objCliente.firstName}}</span></p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="4">
                                            <p class="campo">Teléfono</p>
                                        </b-col>
                                        <b-col cols="8">
                                            <p><span>{{this.$store.state.common.objCliente.phoneNumber}}</span></p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="4">
                                            <p class="campo">Correo</p>
                                        </b-col>
                                        <b-col cols="8">
                                            <p><span>{{this.$store.state.common.objCliente.emailAddress}}</span></p>
                                        </b-col>
                                    </b-row>
                                </div>
                                <div class="edit-datos" v-if="this.visibleBtnEditar == 0">
                                    <b-row>
                                        <b-col cols="4">
                                            <p class="label">DNI mostrado</p>
                                        </b-col>
                                        <b-col cols="8">
                                            <p><span>{{this.$store.state.common.objCliente.documentNumber}}</span></p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="4">
                                            <p class="campo">Nombre</p>
                                        </b-col>
                                        <b-col cols="8">
                                            <p><span>{{this.$store.state.common.objCliente.firstName}}</span></p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="4">
                                            <p class="campo">Teléfono</p>
                                        </b-col>
                                        <b-col cols="8">
                                            <p><span>{{this.$store.state.common.objCliente.phoneNumber}}</span></p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="4">
                                            <p class="campo">Correo</p>
                                        </b-col>
                                        <b-col cols="8">
                                            <p><span>{{this.$store.state.common.objCliente.emailAddress}}</span></p>
                                        </b-col>
                                    </b-row>
                                </div> 
                                
                            </div>

                            <!-- <div class="edit-datos-personales">
                                <b-col cols="12" lg="8" class="box-principal">
                                    <b-row>
                                        <b-col cols="12">
                                            <div class="box-documento  mt-5">
                                                <b-form-input id="documento-identidad" ref="myBtn" name="ws_username"
                                                v-on:focus.native="isIconDni = !isIconDni"
                                                v-on:blur.native="placeholderDNI($event)"
                                                @click.native="clearPlaceholderDNI($event)"
                                                @keyup.native="delay($event, 300)"
                                                class="input-vehicular form-control input-id"
                                                maxlength="11"
                                                autocomplete="on"
                                                autofocus
                                                type="tel"
                                                v-model="this.$store.state.common.objCliente.documentNumber"
                                                required
                                                placeholder="Numero de DNI, CI o RUC"
                                                style="text-transform: initial">
                                                </b-form-input>
                                            </div>
                                        </b-col>
                                    </b-row>
                                    </b-col>
                            </div> -->

                            <div class="datos-poliza">
                                <h3 class="resumen-proteccion--subtitulo">DATOS DE MI PÓLIZA</h3>
                                <div v-if="this.planSeleccionado == 4" class="plan-titulo">
                                    <p><span class="campo">Plan</span> <span>Básico: Protección contra robo</span></p>
                                </div>
                                <div v-else-if="this.planSeleccionado == 6" class="plan-titulo">
                                    <p><span class="campo">Plan</span> <span>Intermedio: Protección accidentes</span></p>
                                </div>
                                <div v-else-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" class="plan-titulo">
                                    <p><span class="campo">Plan</span> <span>Full: Protección total</span></p>                      
                                </div>

                                <p><span class="campo">Cobertura</span> <span>$ {{this.$store.state.common.listaCotizacion.vehicle.current}}</span></p>

                                <div v-if="this.$store.state.common.frecuenciaPago == 1" class="plan-titulo">
                                    <p><span class="campo">Frecuencia</span> <span>Mensual</span></p>                      
                                </div>
                                <div v-if="this.$store.state.common.frecuenciaPago == 2" class="plan-titulo">
                                    <p><span class="campo">Frecuencia</span> <span>Trimestral</span></p>                      
                                </div>
                                <div v-if="this.$store.state.common.frecuenciaPago == 3" class="plan-titulo">
                                    <p><span class="campo">Frecuencia</span> <span>Anual</span></p>                      
                                </div>
                                
                                <p><span class="campo">F. de inicio </span><span>{{this.$store.state.common.listaCotizacion.policy.startDate}}</span></p>
                            </div>

                            <div class="datos-pago">
                                <p class="total">
                                    MONTO FINAL A PAGAR: <span class="monto-resumen">US$ {{this.monto_pagar}}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>

        <b-modal id="modal1" title="Bootstrap-Vue" hide-footer hide-header ref="hideModalAutoorizacionPoliza" size="lg">
            <div class="modal-content  modal-confirmaTusDatos">
                <b-btn class="mt-3 btn-secondary" @click="hideModalAutoorizacionPoliza()"  style="background: white; border: none;">
                    <img src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b5f46206abb673bc5374fdb_icon-close.svg" width="40" alt="icon close" class="image-9">
                </b-btn>
                <div class="modal-head">
                    <div class="row">
                        <h2 class="modal-personal-title col-8 offset-2">
                            <span class="tag-0">Declaración jurada</span>
                            <span class="tag-2">del contratante</span>
                        </h2>
                    </div>
                    <div class="modal-divider"></div>
                </div>
                <p class="modal-description">
                    Declaro que tengo conocimiento y acepto las Condiciones Generales, Particulares y Cláusulas Adicionales relacionadas con la Póliza de Seguros de Interseguro Compañía de Seguros S.A. (en adelante, Interseguro).
                    <br><br>
                    A su vez, declaro que brindaré las facilidades del caso para coordinar que mi vehículo pase por el proceso de inspección correspondiente y que, de no hacerlo, entiendo que Interseguro podrá proceder con la anulación de mi póliza conforme a lo indicado en los términos del contrato.
                    <br><br>
                    Asimismo, manifiesto que el automóvil asegurado bajo la presente póliza existe y, según corresponda, cumple con los siguientes criterios:
                    <br><br>
                    <ul style="list-style: none;">
                        <li>
                            <strong>a)</strong> es 0 Kilómetros y/o,
                        </li>
                        <li>
                            <strong>b)</strong> siendo usado, se encuentra en óptimas condiciones para su uso ordinario, buena conservación y aspecto. Asimismo, declara que el vehículo asegurado no ha sido adquirido producto de un salvamento, y,
                        </li>
                        <li>
                            <strong>c)</strong> Es de uso particular.
                        </li>
                    </ul>
                    Certifico que las respuestas y declaraciones realizadas en este sitio web son verídicas y que se ajustan a la realidad y, de no serlo, cualquier declaración falsa o inexacta hecha por el Contratante respecto al estado del vehículo o a su uso, voluntaria o involuntariamente, invalida esta solicitud y libera de toda responsabilidad y compromiso indemnizatorio a Interseguro, quedando el seguro emitido en virtud de esta solicitud nulo y sin efecto.
                    <br><br>
                    El mecanismo de comunicación por el que Interseguro enviará la póliza electrónica, endosos futuros, cartas y/u otra documentación será el correo electrónico declarado por el Contratante.
                    <br><br>
                    Finalmente, autorizo a que se realicen -de acuerdo a la periodicidad escogida- cargos de forma automática por el concepto de prima de Seguro Vehicular contratado en mi tarjeta de crédito o débito declarada.
                </p>
                
            </div>
        </b-modal>

        <div class="capadecarga" v-bind:class="{ 'opacidad': opacidad }">
            <img src="../../static/media/interseguroVehicular_v2/carga.gif" alt="capa de carga para loading">            
        </div>


        <b-modal id="leavePayment" class="leaveModal" size="lg"  static centered hide-footer hide-header>
            <b-container>
                <b-row class="justify-content-center">
                    <b-col class="text-center mb-3" cols="12">
                        <img src="../../static/media/modal/leave-pago.png" alt="Abandonar Seguro Vehicular">
                    </b-col>
                </b-row>
                <b-row class="text-center">
                    <b-col cols="12" class="mb-3">
                        <h2><span>¡Estás a un paso de asegurar tu <br> {{this.$store.state.common.itemElegido.brand}} por ${{parseDecimal(parseFloat(this.$store.state.common.current)) }}!</span></h2>
                    </b-col>
                    <b-col cols="12" class="mb-2">
                        <h3>Por tan solo ${{this.$store.state.common.listaCotizacion.policy.monthly}} mensuales estás protegiendo tu auto <br> hasta por un monto de ${{parseDecimal(parseFloat(this.$store.state.common.current))}}</h3>
                    </b-col>
                </b-row>
                <b-row class="justify-content-center">
                    <b-col class="text-center mb-4" cols="12">
                        <b-button @click="$nuxt.$emit('bv::hide::modal', 'leavePayment')">QUIERO TERMINAR MI COMPRA</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </b-modal>

    </section>
</template>

<script>

import { validationMixin } from 'vuelidate'
    
    var cardNumber;
    var fechaActual = new Date()
    const state = {
        date: new Date(),
        disabledDates: {
            to: new Date(Date.now() - 8640000),
            from: new Date(fechaActual.getTime() + 3.888e+9)
        }
    };
    export default {
        layout: 'InterseguroFlujo',
        data(){
            return {
                flagVerMas: 1,
                flagVerMenos: 0,
                visibleBtnEditar: 1,
                visibleBtnCancelar: 0,
                indeterminate: true,
                editarDatos : false,
                htmlModal : '',
                textErrModal : '',
                textErrModalTwo : '',
                flotanteCovid: true,
                valeAgora: false,
                urlLocal:'',
                cobertura_is:{
                    plan:'',
                    content_ids:''
                },
                frecuenciaPago:0,
                itemElegido: {
                    year: '',
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
                objPaymentExecute:{},
                documento_steps2 : '',
                monto_pagar_steps3 : '',
                planSeleccionado: 0,
                pruebabandera:true,
                contadorNoTeVayas: 0,
                endosoSeleccionado: {},
                discountType: '',
                opacidad:false,            
                isEnableURL: true,
                registrogss:"",
                urlCompartir: '',
                urlCompartirWhatsApp: "",
                capa_planes: true,
                tabIndex: 0,
                campaniaTV: '1',
                gpsExiste:"",
                numberTest:'',
                // es: es,
                state: state,
                fechaVigencia: '',
                vModelExample: null,
                loading:true,
                loadingPulse: true,
                color: '#00ADEE',
                sizePulse: '45px',
                zeroKm:  'N',                                
                margin: '2px',
                radius: '2px',
                payment: 1,
                //pendiente el volver atras
                listCotizacion:{
                    'policy':{
                        'discount':false
                    },
                    'financialInstitution':''

                },
                payment_datalayer:'',
                isDisableButton: false,
                documentoLocal:'',
                policy_id:'',
                objPagoProcesado:{
                    "id":null,
                    "monto":null
                },
                monto_pagar: null,
                cardCompleto:true,
                size: '45px',
                objClient:{},
                nombreCliente:'',
                objCardNumber:{
                    number: ''
                },
                
                tamañoCCV:0,
                cvvcci:'CCV',
                checkDocs: false,
                baseUrlImage: '',
                creditCardImageCvv: '',
                creditCardImage: '',
                expirationDate: '',
                isDisabledPayment: true,
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
                objVehicleSelect:{},
                numberValidation:{
                    isValid:''
                },
                objCulqi:{},
                businessId : "",
                objPlantilla : {
                    "1":"00-dias.html",
                    "2":"03-dias.html",
                    "3":"07-dias.html",
                    "4":"15-dias.html"
                },
                objUtm: {
                    "1":"utm_campaign=remarketingCN_1",
                    "2":"utm_campaign=remarketingCN_2",
                    "3":"utm_campaign=remarketingCN_3",
                    "4":"utm_campaign=remarketingCN_4"
                }
            }
        },
        methods: {
            clicVerMas(){
                this.flagVerMas = 0;
                this.flagVerMenos = 1;
            },
            clicVerMenos(){
                this.flagVerMas = 1;
                this.flagVerMenos = 0;
            },
            clicBtnEditar(){
                this.visibleBtnEditar = 0;
                this.visibleBtnCancelar = 1;
            },
            clicBtnCancelar(){
                this.visibleBtnEditar = 1;
                this.visibleBtnCancelar = 0;
            },
            hidemetodoFlotante(){
                this.$nuxt.$emit('bv::hide::modal','leavePayment')
            },
            metodoFlotante(){
                this.$nuxt.$emit('bv::show::modal','leavePayment')
            },

            cotizador_datalayer(evento,step_valor){
                this.cobertura_is.content_ids =  this.$store.state.common.code_sku
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: evento,
                    step: step_valor,
                    product: this.cobertura_is,
                });
            },
            /* *********************************************************************************** */
            PaginaVista(e){
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'pagina_vista',
                    'page-url': '/vehicular/cotiza/como-pagar', 
                    'page-title': 'Como Pagar',
                    'dni-encontrado': this.$store.state.common.clientStateGA, // true of false
                    'ecommerce': {
                        'checkout': {
                            'actionField': {'step': 4}, // esto marca el primer paso en el embudo
                        }
                    }
                });
            },
            PaginaVistaNuevoProducto() {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "pagina_vista",
                    "page-url": "/vehicular-app/cotiza/como-pagar/",
                    "page-title": "como pagar",
                });
            },
            /* *********************************************************************************** */
            validarROOT(){
                if(this.$store.state.common.planSeleccionado == 6 || this.$store.state.common.planSeleccionado == 4){
                    if(!this.$store.state.common.entidadFinanciera.id > 0){
                        let inputDate = Date.parse(this.fechaVigencia)
                        inputDate = new Date(this.fechaVigencia)
                        
                        let fecha = new Date()
                        let dia = fecha.getDate()
                        let mes = fecha.getMonth()+1
                        let año = fecha.getFullYear()
                        let fechaActual = dia+'/'+mes+'/'+año
                        
                        let todaysDate = Date.parse(fechaActual)
                        todaysDate = new Date(fechaActual)

                        if(inputDate.getTime() ===  todaysDate.getTime()) {
                            if (this.$store.state.common.frecuenciaPago == 1) {
                                this.$store.commit('common/setEmisionROOT', true)
                            } else {
                                this.$store.commit('common/setEmisionROOT', false)
                            }
                        }else{
                            this.$store.commit('common/setEmisionROOT', false)
                        }
                    }else{
                        this.$store.commit('common/setEmisionROOT', false)
                    }
                }else{
                    this.$store.commit('common/setEmisionROOT', false)
                }
            },
            onCopy: function (e) {      
                this.isEnableURL = false;
                var self = this;
                setTimeout(function() {
                    self.isEnableURL = true;
                }, 1800);    
            },
            copyURL(event) {     
                e.preventDefault();
                this.isEnableURL = true;
                var copyText  = document.getElementById("copyText");
                copyText.select();
                document.execCommand("copy");
                var self = this;
                setTimeout(function() {
                    self.isEnableURL = true;
                }, 1800);
                },
            mostrarTooltip(){
                if(process.client){
                    document.getElementById("msg-valor").style.display = "block"
                }
                
            },
            ocultarTooltip(){
                if(process.client){
                    document.getElementById("msg-valor").style.display = "none"
                }
            },
            continuar(evt) {                
                this.opacidad =true
                this.isDisabledPayment = false
                evt.preventDefault();

                this.isDisabledPayment = true
                this.card.expiration_year = '20'+this.expiration_year
                this.card.email = this.$store.state.common.email
                this.$store.dispatch('payment/getTokenCulqi', this.card)
                .then((res) =>{
                    if (res.object === 'error') {

                        this.$swal({
                            title: 'Oops...',
                            text: res.data.user_message,
                            type: 'error',
                            showCancelButton: false,
                            confirmButtonColor: '#2177CC',
                            confirmButtonText: 'OK'
                        })
                        this.opacidad =false
                    }else{
                        this.objCulqi = res;
                        this.objPaymentExecute = {
                            tokenId: this.objCulqi.id,
                            planId: this.$store.state.common.planSeleccionado,
                            plateNumber: this.$store.state.common.plateNumber,
                            documentNumber: this.$store.state.common.documentoLocal,
                            remarketingId: this.$store.state.common.codeRmkt,
                            referredDocumentNumber:null,
                            discountType: this.discountType,
                            businessId: this.$store.state.common.businessId,
                            details: {
                                policy: {
                                    riskName: this.listCotizacion.policy.riskName,
                                    risk: this.listCotizacion.policy.risk,
                                    calculated: this.listCotizacion.policy.calculated,
                                    twoYears: this.listCotizacion.policy.twoYears,
                                    annual: this.listCotizacion.policy.annual,
                                    quarterly: this.listCotizacion.policy.quarterly,
                                    monthly: this.listCotizacion.policy.monthly,
                                    twoYearsDiscount: this.listCotizacion.policy.twoYearsDiscount,
                                    annualDiscount: this.listCotizacion.policy.annualDiscount,
                                    quarterlyDiscount: this.listCotizacion.policy.quarterlyDiscount,
                                    monthlyDiscount: this.listCotizacion.policy.monthlyDiscount,
                                    discount: false,
                                    startDate: this.$store.state.common.fechaVigencia
                                },
                                vehicle: {
                                    current: this.listCotizacion.vehicle.current,
                                    maximum: this.listCotizacion.vehicle.maximum,
                                    minimum: this.listCotizacion.vehicle.minimum,
                                    gps: this.listCotizacion.vehicle.gps
                                },
                                zeroKm: "N",
                                paymentMethodId: this.payment,
                                financialInstitution: this.$store.state.common.entidadFinanciera.id == 0 || this.$store.state.common.entidadFinanciera.id == null ? null : this.$store.state.common.entidadFinanciera.id
                            },
                            card: {
                                brand: this.objCulqi.iin.card_brand,
                                category: this.objCulqi.iin.card_category,
                                number: this.objCulqi.card_number,
                                type: this.objCulqi.iin.card_type,
                                bank : this.objCulqi.iin.issuer.name
                            }
                        }
                        this.$store.dispatch('payment/paymentExecute', this.objPaymentExecute)
                        .then((res) =>{

                            if (res.code == 0) {
                                this.opacidad =false
                                // this.validarROOT()
                                this.$store.commit('common/setPolicy_id',res.body.policyId)
                                this.$nuxt.$router.push({path: '/cotiza/pago-procesado'})
                            }else if(res.code == 100){
           
                                this.opacidad =false
                                const messageErr = JSON.parse(JSON.parse(res.body).body);


                                const showMessageErr = () => {
                                    const err = messageErr.decline_code;
                                    this.textErrModalTwo = '';
                                    if(err == 'stolen_card'){
                                        return 'Tu tarjeta está vencida. Por favor verifica la fecha de vencimiento e ingrésala correctamente. De lo contrario, te recomendamos usar otro medio de pago.'
                                    }else if( err == 'lost_card'){
                                        return 'El pago ha sido rechazado por la entidad emisora de tu tarjeta. Por favor contáctate con el banco para conocer el motivo. Para completar tu compra puedes ingresar otro medio de pago.'
                                    }else if( err == 'insufficient_funds'){
                                        return 'Tu tarjeta no tiene fondos suficientes para realizar la compra. Por favor verifica los fondos de tu tarjeta o realiza la compra con otro medio de pago.'
                                    }else if( err == 'contact_issuer' || err =='issuer_decline_operation' || err == 'invalid_card' || err == 'fraudulent'){
                                        return 'El pago ha sido rechazado por la entidad emisora de tu tarjeta. Por favor contáctate con el banco para conocer el motivo. Para completar tu compra puedes ingresar otro medio de pago.'
                                    }else if( err == 'incorrect_cvv'){
                                        return 'El código de seguridad (CVV) es incorrecto. Por favor verifica los dígitos e ingrésalos correctamente. De lo contrario, te recomendamos usar otro medio de pago.'
                                    }else if( err == 'issuer_not_available'){
                                        return 'El pago no pudo ser procesado. Por favor intenta nuevamente en unos minutos. Si el problema persiste, te recomendamos usar otro medio de pago.'
                                    }else if( err == 'processing_error'){
                                        this.textErrModalTwo = '(01) 500-0000 para darte una solución. De lo contrario, puedes volver a intentar usando otro medio de pago.';
                                        return 'El pago no pudo ser procesado. Por favor contáctanos al '
                                    }else {
                                        this.textErrModalTwo = '(01) 500-0000 para darte una solución. De lo contrario, puedes volver a intentar usando otro medio de pago.';
                                        return 'El pago no pudo ser procesado. Por favor contáctanos al '
                                    }
                                };

                                this.textErrModal = showMessageErr();
                                if(!this.htmlModal){
                                    this.htmlModal = document.getElementById('newModal');
                                    this.htmlModal.style.display = "";
                                }

                                this.$swal({
                                    // title: 'Oops...',
                                    html: this.htmlModal,
                                    text: showMessageErr(),
                                    // type: 'error',
                                    customClass: 'swal-buttonx',
                                    showCloseButton: true,
                                    confirmButtonColor: '#EA0C90',
                                    confirmButtonText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  OK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' 
                                })
                            }else{
                                this.opacidad =false
                                this.$swal({
                                    title: 'Oops...',
                                    text: res.message,
                                    type: 'error',
                                    showCancelButton: false,
                                    confirmButtonColor: '#2177CC',
                                    confirmButtonText: 'OK'
                                })
                            }
                            
                        })
                    }
                    
                }).catch((res)=>{
                    this.opacidad =false
                    let status = res.response.status
                    
                   
                    this.textErrModal = 'El pago ha sido rechazado por la entidad emisora de tu tarjeta. Por favor contáctate con el banco para conocer el motivo. Para completar tu compra puedes ingresar otro medio de pago.';
                    if(!this.htmlModal){
                        this.htmlModal = document.getElementById('newModal');
                        this.htmlModal.style.display = "";
                    }
                       this.$swal({
                                    // title: 'Oops...',
                                    html: this.htmlModal,
                                    // type: 'error',
                                    customClass: 'swal-buttonx',
                                    showCloseButton: true,
                                    confirmButtonColor: '#EA0C90',
                                    confirmButtonText: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  OK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' 
                        })
                })
            },
            
            volver (evt) {
                evt.preventDefault();
                this.$nuxt.$router.push("/cotizacion/documento");              
            },
            
            comoPagarDatalayer(){
                if(this.frecuenciaPago == 1){
                    this.frecuenciaPago_datalayer ='mensual'
                }else if(this.frecuenciaPago == 2){
                    this.frecuenciaPago_datalayer ='trimestral'
                }else if(this.frecuenciaPago == 3){
                    this.frecuenciaPago_datalayer = 'annual'
                }else if(this.frecuenciaPago == 4){
                    this.frecuenciaPago_datalayer = 'biannual '
                }
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'como_pagar',
                    'cuota': this.frecuenciaPago_datalayer, // mensual, trimestral, annual (string)
                    'ecommerce': {
                        'checkout_option': { // nota el cambio aqui en codigo "checkout_option"
                            'actionField': {
                                'option':this.frecuenciaPago_datalayer
                            }, // 4to paso en el embudo. En el option enviar tipo de cuota.
                        }
                    }
                });
            },            

            focusCVV(){      
                if(process.client){  
                    document.getElementById("focusCVV").style.display = "block"
                }
            },
            blurCVV(){        
                if(process.client){
                    document.getElementById("focusCVV").style.display = "none"
                }
            },
            focusMES(){        
                // document.getElementById("focusMES").style.display = "flex"
            },
            blurMES(){ 
                if(process.client){       
                    document.getElementById("focusMES").style.display = "none"
                }
            }, 
            focusTarjeta(){  
                if(process.client){      
                    document.getElementById("focusTarjeta").style.display = "flex"
                }
            },
            blurTarjeta(){    
                if(process.client){    
                    document.getElementById("focusTarjeta").style.display = "none"
                }
            },           

            hideModalAutoorizacionPoliza(){
                this.$refs.hideModalAutoorizacionPoliza.hide()
            },
            hideModalgps(){
                this.$refs.hideModalgps.hide()
            },
            

            isTrueTerminos(ev){
                if(process.client){
                    if(this.cardValitor){                        
                        let mes = document.querySelector("#cardmes").value.length
                        let año = document.querySelector("#cardaño").value.length
                        let ccv = document.querySelector("#cardccv").value.length
                        if(mes == 2 && año == 2 &&  ccv > 2 && this.checkDocs == true){                
                            this.isDisabledPayment = false
                        }else{
                            this.isDisabledPayment = true
                        }
                    }
                }
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
                    this.isDisabledPayment = true
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
                            this.isDisabledPayment = true
                        }
                    }
                }else{
                    this.isDisabledPayment = true
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
                        this.isDisabledPayment = true
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
            remarketingv2(){
                if (this.$store.state.common.businessId == 2){
                    this.objPlantilla = {
                    "1":"00-ibk-dias.html",
                    "2":"03-ibk-dias.html",
                    "3":"07-ibk-dias.html",
                    "4":"15-ibk-dias.html"
                    }
                    this.objUtm = {
                    "1": "utm_campaign=IBK_remarketingCN_1",
                    "2": "utm_campaign=IBK_remarketingCN_2",
                    "3": "utm_campaign=IBK_remarketingCN_3",
                    "4": "utm_campaign=IBK_remarketingCN_4"
                    }
                }else if(this.$store.state.common.nuevoProducto == true){
                    this.objPlantilla = {}
                    this.objUtm = {}
                }
                this.abjVehicleSelect = JSON.parse(localStorage.getItem("abjVehicleSelect"))
                this.objVehicle = JSON.parse(localStorage.getItem("objVeh"))
                this.objRemarketing = {
                    "codigoRemarketing": this.$store.state.common.codigoRemarketingGenerado == null ? "" : this.$store.state.common.codigoRemarketingGenerado,
                    "producto": this.$store.state.common.businessId,
                    "identificador": this.$store.state.common.plateNumber,
                    "detalle": {
                    "correo": this.$store.state.common.email.trim().replace(/ /g,''),
                    "codigoVenta": this.$store.state.common.codeRmkt,
                    "pantalla": 3,
                    "enviarCorreo":0,
                    "datosCorreo":{
                        "url": process.env.URL+ (this.$store.state.common.businessId == 1 ? "vehicular" : "vehicular/interbank"),
                        "plantilla": this.objPlantilla,
                        "utm": this.objUtm
                    },
                    "datosProducto": {
                        marca : this.$store.state.common.itemElegido.brand,
                        modelo : this.$store.state.common.itemElegido.model,
                        planSeleccionado : this.$store.state.common.planSeleccionado,
                        valorComercial : this.$store.state.common.current,
                        pagoMensual : this.$store.state.common.listaCotizacion.policy.monthly,

                        businessId: this.$store.state.common.businessId,
                        idEndosoSeleccionado: this.endosoSeleccionado.id,
                        endosoSeleccionado: this.endosoSeleccionado.name,
                        placa: this.$store.state.common.plateNumber,              
                        anio: this.$store.state.common.itemElegido.modelYear,
                        gps: this.$store.state.common.listaCotizacion.vehicle.gps,
                        riesgo: this.$store.state.common.listaCotizacion.policy.risk,
                        fechaInicio: this.$store.state.common.fechaVigencia,
                        
                        itemElegido: this.$store.state.common.itemElegido,
                        listCotizacion: this.$store.state.common.listaCotizacion,
                        nuevoProducto: this.$store.state.common.nuevoProducto                

                    },
                    "datosTitular": {
                        "numeroDocumento": this.$store.state.common.documentoLocal,
                        "nombre": this.$store.state.common.objCliente.firstName,
                        "apellidoPaterno": this.$store.state.common.objCliente.firstLastName,
                        "apellidoMaterno": this.$store.state.common.objCliente.secondLastName,
                        "telefono": this.$store.state.common.objCliente.phoneNumber,
                        "originDocumentNumber": localStorage.getItem("originDocumentNumber"),
                        "origenDatos": localStorage.getItem("origenDatos"),
                    },
                    "remitente": {
                        "correoRemitente": "comunicaciones@interseguro.com.pe",
                        "correoRemitenteDisplay": "Interseguro"
                    },
                    "datosPago": {
                        "idFrecuencia": this.payment,
                        "fechaInicioSeguro": ""
                    }
                }
            }
            this.$store.dispatch('common/sendRemarketing',this.objRemarketing).then((res) => {
              if (res) {
                this.$store.commit('common/setCodigoRemarketingGenerado', res.data.codigoRemarketing)
              }        
            })
          },
          mouseLeave(e) {
              if (this.$store.state.common.leaveMessage == 0) {
                  if (e.clientX < 0 || e.clientY < 0) {
                        this.$store.commit('common/setLeaveMessage',1)
                        this.$nuxt.$emit('bv::show::modal','leavePayment')
                        // if (this.$store.state.common.planSeleccionado == "3" || this.$store.state.common.planSeleccionado == "10") {
                        //     this.$nuxt.$emit('bv::show::modal','leavePayment')
                        // }else{
                        //     this.$nuxt.$emit('bv::show::modal','leavePayment')
                        // }
                  }
              }
          },
          parseDecimal(number) {
              return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },

          editarDatosPersonales(){
              this.editarDatos = true;
              console.log('editar datos personales '+this.editarDatos);
          },
        },
        computed:{
            appDiscount: function(){
                let appDiscount = this.$store.state.common.appDiscount
                return appDiscount
            },
            isEnable: function(){
                return this.cardCompleto;                
            },
        },
        validations: {
            payment: {
            card_number: {
                mustBeCreditCard: cardNumber => {
                let valid = require('card-validator')
                let numberValidation = valid.number(cardNumber.replace(/ /g, ''))
                if (numberValidation.isPotentiallyValid && numberValidation.isValid) {
                    return true
                } else {
                    return false
                }
                }
            },

            }
        },
        mounted: function () {
            // if(localStorage.getItem('activoAgora')){
            //     this.valeAgora = true
            // }
            
            // this.contador()

            this.urlLocal = localStorage.getItem("urlLocal")
            this.cobertura_is = this.$store.state.common.objectDigodat
            
            this.cotizador_datalayer("checkout",3)
            let objJWT = JSON.parse(localStorage.getItem("jwt"))
            if (objJWT == null || objJWT == undefined) {
                this.$nuxt.$router.push("/")
            }else{
                let objJWT = JSON.parse(localStorage.getItem("jwt"))
                this.itemElegido.assignedPrice = this.$store.state.common.current
                this.itemElegido.year = this.$store.state.common.itemElegido.year
                this.$store.dispatch('common/getCotizacion', this.itemElegido).then((res) => {
                    if (res.data.code == 0) {
                        if (this.$store.state.common.planSeleccionado == 4) {
                          this.$store.commit('common/setListaCotizacion', res.data.body.basic)
                        }else if(this.$store.state.common.planSeleccionado == 6){
                          this.$store.commit('common/setListaCotizacion', res.data.body.medium)
                        }else if (this.$store.state.common.planSeleccionado == 3 || this.$store.state.common.planSeleccionado == 10) {
                          this.$store.commit('common/setListaCotizacion', res.data.body.allRisk)
                        }else{
                          this.$store.commit('common/setListaCotizacion', res.data.body.allRisk)
                        }
                        this.listCotizacion = this.$store.state.common.listaCotizacion

                        this.planSeleccionado = objJWT.common.planSeleccionado
                        // this.vehicleState = objJWT.common.vehicleState                
                        
                        this.payment = objJWT.common.frecuenciaPago
                        this.businessId = this.$store.state.common.businessId
                        if (this.payment > 0 ) {
                            if(this.payment == 1){
                                this.monto_pagar = this.listCotizacion.policy.monthlyDiscount > 0 ? this.listCotizacion.policy.monthlyDiscount : this.listCotizacion.policy.monthly                                
                            }else if(this.payment == 2){
                                this.monto_pagar =  this.listCotizacion.policy.quarterlyDiscount > 0 ? this.listCotizacion.policy.quarterlyDiscount : this.listCotizacion.policy.quarterly                             
                            }else if(this.payment == 3){
                                this.monto_pagar = this.listCotizacion.policy.annualDiscount > 0 ? this.listCotizacion.policy.annualDiscount : this.listCotizacion.policy.annual   
                            }else{
                                this.isDisableButton = true
                            } 
                        }

                        if(this.$store.state.common.cuentasueldo == "Y"  ){
                            this.discountType = "cta-sueldo"
                        }else if (this.$store.state.common.tarjetaoh == "Y" ) {
                            this.discountType = "tarjeta-oh"
                        }else{
                            this.discountType = ""
                        }
                        this.$store.state.common.listaCotizacion.paymentMethodId = this.$store.state.common.frecuenciaPago
                    }
                })
                
                
            }

            /* DETECTAMOS SI ENDOSO DE SESION ESTA EN EL OBJ LOCAL */

            if(objJWT.common.entidadFinanciera !== null){      
                let entidadFinanciera = objJWT.common.entidadFinanciera
                this.endosoSeleccionado = objJWT.common.entidadFinanciera
                if (entidadFinanciera.id > 0) {        
                this.endosoSeleccionado = objJWT.common.entidadFinanciera
                }
            }else{
                this.$store.commit('common/setEntidadFinanciera', this.endosoSeleccionado)
            }
            /* FIN DE  ENDOSO DE SESION */

            if(this.$store.state.common.nuevoProducto){
                this.PaginaVistaNuevoProducto();
            }else{
                this.PaginaVista();
            }
            this.fechaVigencia = this.$store.state.common.fechaVigencia
    
            this.remarketingv2()
            // this.validarROOT()
            document.addEventListener('mouseleave', this.mouseLeave, { passive: true})
        },
        destroyed() {
            if (process.browser) {
                document.removeEventListener('mouseleave', this.mouseLeave, { passive: true})
            }
        }
    }
</script>

<style lang="scss" scope>
    .pagina-pagar{
        padding-top: 80px;
        padding-bottom: 80px;
        .resumen-proteccion{
            .datos-personales{
                .datos-personales-card{
                    border:none;
                    .card-body{
                        padding: 0;
                    }
                }
            }
        }
    }

    .box-messaje{
        //max-width: 394px;
        overflow: hidden;
        background: #F9F9FB;
        height: 78px;
        display: flex;
        align-items: center;
        background-color: #DCE0EA;
    }
    
    .mi-carro{
        font-size: 16px;
        color: #383C5A;
        font-family: 'Omnes SemiBold';
    }

    .capadecarga{
        display: none;
    }

    .metodo-pago{
        /* display: flex;
        flex-direction: column;
        align-items: center; */
        border: 1px solid #CCD1DD;
        border-radius: 3px;
        opacity: 1;        
        .imgs{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .msg-alterno{
            font-size: 13px;
            line-height: 16px;            
            font-weight: 500;
            color: #0855c4;
        }
        .cliploader{
            background: transparent;
        }
        .box-btn__button{
            height: 50px;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .pago_seguro{
                color: #fff;
                font-size: 11px;
                text-transform: initial;
            }
        }
        .box-btn__button.enlace-back{
            text-transform: capitalize;
            color: #616161;
            position: relative;
            text-align: left;
            padding-left: 32px;
            font-weight: 500;
            img{
                position: absolute;
                left: 0;
                top: 12px;
            }
        }
        .spinner-tarjeta{
            position: relative;
            height: 50px;
        }
        .spinner-descripcion{
            font-size: 11px;
            text-align: center;
            margin-bottom: 0;
        }
        .iptGral__input{
            text-align: center;
        }
        .panel-custom{
            // padding: 18px;
            // margin: 0 -15px;
            .text-secundario{
                font-size: 14px;
                color: #3b3131;
                width: 100%;
                display: inline-block;
            }
            .text-secundario__movil{
                color: #3b3131;
            }
        }
        &__comoPagar{
            padding: 0px 16px;
        }  
        &__ingresatarjeta{
            padding: 24px 16px 12px;
            border-radius: 0 0 16px 16px;
            .box-ingresaTarjeta{
                padding: 18px 15px 0 15px;
            }
            .boxtitulo{
                &__secundario{
                    color: #0BD360;
                }
            }
            .checkbox-aux__span {
                width: 18px;
                height: 18px;
            }  
            .checkbox-aux__span--icon{
                font-size: 14px;
                position: absolute;
            }     
            .checkbox-aux__descripcion{
                margin-left: -12px;
                width: 86%;
                a{
                    color: #0855C4;
                }
            }
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

    #button-download a{
        color: #0BD360;
    }
    .modal-confirmaTusDatos{
        border: 0 !important;
        padding: 8px 24px;
        .btn-secondary{
            background: white;
            border: none;
            position: relative;
            height: 26px;
        }
        img{
            position: absolute;
            right: 0;
            top: -10px;
        }
        .modal-description{
            text-align: justify;
        }
        .btn-secondary:focus,  .btn-secondary:not(:disabled):not(.disabled).active:focus {
            box-shadow: none !important;
        }
        .btn:focus {
            box-shadow: none !important;
        }
    }
    
    .card-interseguro, #cardnumber, #cardmes, #cardaño,#cardccv{
        border-radius: 4px;
    }

    .isActivePayment{
        display: none;
    }
    input.form-control.text-uppercase.iptGral__input:focus {
        box-shadow: none;
    }
    
    .iptGral.editable .iptGral__input {
        padding-left: 38px;
        max-width: 460px;
        height: 48px;
        border: 1px solid #D1D1D1 !important;
        box-shadow: none;
        line-height: 1;
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
        max-width: 440px;
        margin: auto;
        .form-label.col-form-label.label-completed{
            padding-left: 0;
            padding-bottom: 0;
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
        .ipt-month{
            width: 40px;
            padding-right: 8px !important;
            background-image: url("./../../static/media/img/root/calendar.png");
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
            background-image: url("./../../static/media/img/root/calendar.svg");
            box-shadow: none;
        }
        
        .img-activefocus{
            position: absolute;
            z-index: 9;
            width: 20px;
            left: 29px;
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

    .card-custom{
        display: flex;
        justify-content: space-between;
        max-width: 440px;
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
                    padding-left: 38px;
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
    .card-custom__date{
        align-items: center;
    }
    .modal-description {
        text-align: left;
        font-family: 'Omnes Medium';
        font-size: 16px;
        font-weight: 300;
        color: #373737;
        border: 0;
    }
    .modal-personal-title {
        font-family: 'Omnes Medium';
        font-size: 24px;
        font-weight: 900;
        text-align: center;
        
    }
    .leaveModal {
        font-family: 'Omnes Regular';
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: center;
        .modal-lg {
            max-width: 660px;
        }
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
    }
   
    @media (min-width: 768px) {
        .leaveModal {
            .img-verano{
                max-width: 380px;
            }
        }
        .metodo-pago{            
            &__comoPagar{
                padding: 22px 28px;
            }  
            &__ingresatarjeta{
                padding: 22px 28px;
            }
        }
        .card-custom__date .form-group-custom:nth-child(1) {
            width: 94px;
            position: relative;
        }
        .card-custom__date .form-group-custom:nth-child(2) {
            width: initial;
            position: relative;
        }
    }
    
    @media (min-width: 992px) {


        .metodo-pago{     
                   
            &__comoPagar{                
                border-radius: 5px 5px 0 0;
            }  
            &__ingresatarjeta{
                border-radius:  0 5px  5px 0;
                padding: 22px 28px;
            }
        }
        
       
        #focusCVV{
            right: -147px;
            bottom: 45px;
            img{
                width: 100%;
            }
        }
        #focusMES{
            left: -147px;
            bottom: 45px;
            img{
                width: 100%;
            }
        }
        #focusTarjeta{
            left: -110px;
            bottom: 63px;
            img{
                width: 100%;
            }
        }
        
    }
   
    @media (min-width: 1024px){
        

        .planes-tabs .nav-pills .nav-link, .planes-tabs .nav-pills .show > .nav-link {
            font-weight: 500;
        }
    }
    @media (min-width: 1200px) {
        .card-interseguro{
            width: 100%;
        }
        .card-custom__date .form-group-custom:nth-child(1) {
            width: 112px;
            position: relative;
        }
        .card-custom__date .form-group-custom:nth-child(2) {
            width: initial;
            position: relative;
        }
    }

</style>

