<template>
    <section class="pagina-pagar">
        <!-- <div id="newModal" style="display:none" >
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

        </div>  -->  

        <b-container>
            <b-row class="mi-breadcrumb">
                <b-col cols="12" class="box-steps2">
                <ul class="steps2" style="display: inline-flex">
                    <div class="steps2__item steps2--active"><span>Pago</span></div>
                    <div class="steps2__item ">Planes</div>
                    <div class="steps2__item "><span>Mi carro</span></div>
                    <li class="steps2--progressBar" ></li> 
                    </ul>
                </b-col>
            </b-row>

            <!--Resumen Mobile-->
            <b-row class="d-flex  d-lg-none mobile box-resumen">
                <b-col cols="12">
                    <div class="accordion" role="tablist">
                        <b-card no-body class="mb-1 resumen">
                            <b-card-header header-tag="header" class="p-1" role="tab">                        
                                <b-row align-v="center">
                                    <b-col cols="auto" class="mr-auto">
                                        <p>VER RESUMEN</p>                                        
                                    </b-col>
                                    <b-col cols="auto">                                       
                                        <b-button class="btn-resumen" block v-b-toggle.accordion-proteccion @click="clicVerMas()" v-if="this.flagVerMas == 1">
                                            <span class="ver-mas">VER MÁS</span><img style="margin-left:5px" src="./../../static/media/imagenes/seleccion/ver-mas.svg" alt="">                                           
                                        </b-button>
                                        <b-button class="btn-resumen" block v-b-toggle.accordion-proteccion @click="clicVerMenos()" v-if="this.flagVerMenos == 1">
                                            <span class="ver-mas">VER MENOS</span>
                                            <img style="margin-left:5px" src="./../../static/media/imagenes/seleccion/ver-menos.svg" alt="">                                    
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
                                    <b-row align-v="center" align-h="between">
                                        <b-col cols="8">
                                            <p class="sub-titulo2">datos personales</p>
                                        </b-col>
                                        <b-col cols="4" class="text-right" >
                                            <b-button class="button-editar" @click="clicBtnEditar()" v-if="this.visibleBtnEditar == 1"><p class="p-0">EDITAR</p></b-button>
                                            <b-button class="button-cancelar" @click="guardarDatos($event)" v-else> <p class="p-0">GUARDAR</p></b-button>
                                        </b-col>                                        
                                    </b-row>
                                    <b-row class="view-datos" v-if="this.visibleBtnEditar == 1" align-v="center">
                                        <b-col cols="4">
                                            <p>
                                                <span class="label" v-if="this.$store.state.common.objCliente.documentType == 'DNI'">DNI</span>
                                                <span class="label" v-else-if="this.$store.state.common.objCliente.documentType == 'CE'">CE</span>
                                                <span class="label" v-else-if="this.$store.state.common.objCliente.documentType == 'RUC'">RUC</span>
                                            </p>                                           
                                        </b-col>
                                        <b-col cols="8">
                                            <p class="campo">{{this.$store.state.common.objCliente.documentNumber}}</p>
                                        </b-col>
                                        <b-col cols="4" class="row-final">
                                            <p>
                                                <span class="label" v-if="this.$store.state.common.objCliente.documentType == 'DNI' || this.$store.state.common.objCliente.documentType == 'CE'">Nombre</span>
                                                <span class="label" v-else-if="this.$store.state.common.objCliente.documentType == 'RUC'">Razón Social</span>
                                            </p>                                           
                                        </b-col>
                                        <b-col cols="8" class="row-final">
                                            <p><span class="campo">
                                                {{this.$store.state.common.objCliente.firstName}} {{this.$store.state.common.objCliente.firstLastName}} {{this.$store.state.common.objCliente.secondLastName}}
                                                </span>
                                            </p>
                                        </b-col>
                                        <b-col cols="4" class="row-final">
                                            <p class="label">Teléfono</p>                                            
                                        </b-col>
                                        <b-col cols="8" class="row-final">
                                            <p class="campo">{{this.$store.state.common.objCliente.phoneNumber}}</p>
                                        </b-col>
                                        <b-col cols="4" class="row-final">
                                            <p class="label">Correo</p>                                            
                                        </b-col>
                                        <b-col cols="8" class="row-final">
                                            <p class="campo">{{this.$store.state.common.objCliente.emailAddress}}</p>
                                        </b-col>                                          
                                    </b-row>
                                    <b-row class="edit-datos-pn" v-if="this.visibleBtnEditar == 0 && (this.$store.state.common.objCliente.documentType == 'DNI' || this.$store.state.common.objCliente.documentType == 'CE')" align-v="center">
                                        <b-col cols="4">
                                            <p><span class="label">DNI</span></p>
                                        </b-col>
                                        <b-col cols="8">
                                            <b-form-input id="documento-identidad" ref="myBtn" name="ws_username"
                                                        v-on:focus.native="isIconDni = !isIconDni"
                                                        v-on:blur.native="placeholderDNI($event)"
                                                        @click.native="clearPlaceholderDNI($event)"
                                                        @keyup.native="delay($event, 300)"
                                                        class="input-vehicular form-control input-id"
                                                        maxlength="11"
                                                        autocomplete="on"                                                        
                                                        type="tel"
                                                        v-model="itemElegidoPersona.documentoLocal"
                                                        required
                                                        placeholder="Numero de DNI, CE o RUC"
                                                        style="text-transform: initial">
                                            </b-form-input>
                                            <clip-loader  class="cliploader" :loading="loadingPersona" :color="color" :size="size" ></clip-loader>
                                        </b-col>
                                        <b-col cols="12">
                                            <b-row  align-v="center">
                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Nombre</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input id="nombre" ref="nombre" autocomplete="given-name" name="firstName"
                                                        @keyup.native="validacionInput($event)"
                                                        @keydown.native="validacionInput($event)"
                                                        @keypress.native="validacionInput($event)"
                                                        v-on:focus.native="isIconFirstName = !isIconFirstName"
                                                        v-on:blur.native="isIconFirstName = !isIconFirstName"
                                                        class="input-vehicular iptGral__input iptClient form-control input-id"                                                        
                                                        type="text"
                                                        v-model="objClients.firstName"
                                                        required
                                                        v-on:keyup.enter="processTags('apellido-paterno')">
                                                    </b-form-input>
                                                </b-col>
                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Apellido Paterno</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input
                                                        id="apellido-paterno"
                                                        ref="apellido-paterno"
                                                        autocomplete="family-name"
                                                        name="lastName"
                                                        @keyup.native="validacionInput($event)"
                                                        v-on:focus.native="isIconIconFirstLastName = !isIconIconFirstLastName"
                                                        v-on:blur.native="isIconIconFirstLastName = !isIconIconFirstLastName"
                                                        class="input-vehicular iptGral__input iptClient form-control input-id"                                                        
                                                        type="text"
                                                        v-model="objClients.firstLastName"
                                                        required
                                                        v-on:keyup.enter="processTags('apellido-materno')"
                                                    ></b-form-input>
                                                </b-col>

                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Apellido Materno</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input id="apellido-materno" ref="apellido-materno" name="lastName"
                                                        @keyup.native="validacionInput($event)"
                                                        v-on:focus.native="isIconSecondLastName = !isIconSecondLastName"
                                                        v-on:blur.native="isIconSecondLastName = !isIconSecondLastName"
                                                        class="input-vehicular iptGral__input iptClient form-control input-id"
                                                        autocomplete="additional-name"                                                        
                                                        type="text"
                                                        v-model="objClients.secondLastName"
                                                        required
                                                        v-on:keyup.enter="processTags('correo-electronico')"
                                                    ></b-form-input>
                                                </b-col>

                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Teléfono</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input id="celular" ref="celular" name="phone"
                                                        @keyup.native=" validarCelular(); validacionInput($event); "
                                                        v-on:focus.native="isIconPhoneNumber = !isIconPhoneNumber"
                                                        v-on:blur.native="isIconPhoneNumber = !isIconPhoneNumber"
                                                        class="input-vehicular iptGral__input iptClient form-control input-id"
                                                        autocomplete="tel"
                                                        v-bind:class="{ errorInput: msgErrorCelular }"                                                        
                                                        type="tel"
                                                        v-model="objClients.phoneNumber"
                                                        required
                                                        maxlength="9"
                                                        v-on:keyup.enter="validarCelular($event)"
                                                    ></b-form-input>
                                                </b-col>

                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Correo</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input id="correo-electronico" ref="correo-electronico" name="email"
                                                        @keyup.native=" validacionInput($event); validarEmail(); "
                                                        v-on:focus.native=" isIconEmailAddress = !isIconEmailAddress "
                                                        v-on:blur.native=" isIconEmailAddress = !isIconEmailAddress "
                                                        class="input-vehicular iptGral__input iptClient form-control input-id"
                                                        v-bind:class="{ errorInput: msgErrorEmail }"
                                                        autocomplete="on"                                                        
                                                        type="email"
                                                        v-model="objClients.emailAddress"
                                                        required
                                                        v-on:keyup.enter="processTags('celular')"
                                                    ></b-form-input>
                                                </b-col>
                                                
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row class="edit-datos-pj" v-if="this.visibleBtnEditar == 0 && this.$store.state.common.objCliente.documentType == 'RUC'" align-v="center">
                                        <b-col cols="4">
                                            <p><span class="label">RUC</span></p>
                                        </b-col>
                                        <b-col cols="8">
                                            <b-form-input id="documento-identidad" ref="myBtn" name="ws_username"
                                                        v-on:focus.native="isIconDni = !isIconDni"
                                                        v-on:blur.native="placeholderDNI($event)"
                                                        @click.native="clearPlaceholderDNI($event)"
                                                        @keyup.native="delay($event, 300)"
                                                        class="input-vehicular form-control input-id"
                                                        maxlength="11"
                                                        autocomplete="on"                                                        
                                                        type="tel"
                                                        v-model="itemElegidoPersona.documentoLocal"
                                                        required
                                                        placeholder="Numero de DNI, CE o RUC"
                                                        style="text-transform: initial">
                                            </b-form-input>
                                            <clip-loader  class="cliploader" :loading="loadingPersona" :color="color" :size="size" ></clip-loader>
                                        </b-col>
                                        <b-col cols="12">
                                            <b-row  align-v="center">
                                                <b-col cols="4" class="mt-3">
                                                        <p><span class="label">Razón Social</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                        <b-form-input
                                                            id="razon-social"
                                                            ref="razon-social"
                                                            @keyup.native="validacionInput($event)"
                                                            v-on:focus.native="isRazonSocial = !isRazonSocial"
                                                            v-on:blur.native="isRazonSocial = !isRazonSocial"
                                                            class="input-vehicular iptGral__input iptRUC form-control input-id"
                                                            autocomplete="on"                                                        
                                                            type="text"
                                                            v-model="objClients.firstName"
                                                            required
                                                            placeholder="Razón social"
                                                            v-on:keyup.enter="processTags('direccion')"
                                                        ></b-form-input>
                                                </b-col>
                                                <b-col cols="4" class="mt-3">
                                                        <p><span class="label">Dirección</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                        <b-form-input
                                                            id="direccion"
                                                            ref="direccion"
                                                            @keyup.native="validacionInput($event)"
                                                            v-on:focus.native="isDireccion = !isDireccion"
                                                            v-on:blur.native="isDireccion = !isDireccion"
                                                            class="input-vehicular iptGral__input iptRUC form-control input-id"
                                                            autocomplete="on"                                                        
                                                            type="text"
                                                            v-model="objClients.address"
                                                            required
                                                            placeholder="Dirección"
                                                            v-on:keyup.enter="processTags('celularEmpresa')"
                                                        ></b-form-input>
                                                </b-col>
                                                <b-col cols="4" class="mt-3">
                                                        <p><span class="label">Celular</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                        <b-form-input id="celularEmpresa" ref="celularEmpresa" @keyup.native=" validarCelular(); validacionInput($event); "
                                                            v-on:focus.native=" isIconPhoneNumber = !isIconPhoneNumber "
                                                            v-on:blur.native=" isIconPhoneNumber = !isIconPhoneNumber "
                                                            v-bind:class="{ errorInput: msgErrorCelular }"
                                                            class="input-vehicular iptGral__input iptRUC form-control input-id"
                                                            autocomplete="tel"                                                        
                                                            type="tel"
                                                            v-model="objClients.phoneNumber"
                                                            required
                                                            maxlength="9"
                                                            placeholder="Celular"
                                                            v-on:keyup.enter=" processTags('correo-electronicoEmpresa') "
                                                        ></b-form-input>
                                                </b-col>

                                                <b-col cols="4" class="mt-3">
                                                        <p><span class="label">Correo</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                        <b-form-input
                                                            id="correo-electronicoEmpresa"
                                                            ref="correo-electronicoEmpresa"
                                                            @keyup.native="validacionInput($event); validarEmail(); "
                                                            v-bind:class="{ errorInput: msgErrorEmail }"
                                                            v-on:focus.native=" isIconEmailAddress = !isIconEmailAddress "
                                                            v-on:blur.native=" isIconEmailAddress = !isIconEmailAddress "
                                                            class="input-vehicular iptGral__input iptRUC form-control input-id"
                                                            autocomplete="on"                                                        
                                                            type="text"
                                                            v-model="objClients.emailAddress"
                                                            required
                                                            placeholder="Correo Electrónico"
                                                        ></b-form-input>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                                                     
                                    <b-row align-v="center">
                                        <b-col cols="8">
                                            <p class="sub-titulo2">datos de mi póliza</p>
                                        </b-col>  
                                        <b-col cols="4" class="text-right" >
                                            <b-button class="button-editar" @click="editarPoliza($event)">EDITAR</b-button>
                                        </b-col>                                      
                                    </b-row>
                                    <b-row >
                                        <b-col cols="4" >
                                            <p class="label">Plan</p>                                            
                                        </b-col>
                                        <b-col cols="8">
                                            <p v-if="this.$store.state.common.planSeleccionado == 4" class="campo">Básico: Protección contra robo</p>
                                            <p v-if="this.$store.state.common.planSeleccionado == 6" class="campo">Intermedio: Protección accidentes</p>
                                            <p v-if="this.$store.state.common.planSeleccionado == 3 || this.$store.state.common.planSeleccionado == 10" class="campo">Full: Protección total</p>
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
                                            <p class="campo">{{this.$store.state.common.fechaVigencia}}</p>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </div>
                </b-col>
            </b-row>

            <b-row class="titulo-principal">
                <b-col cols="12">
                    <b-row class="lista1 flujo-titulo">
                        <b-col cols="2" class="d-block d-sm-none">
                            <a href=""><img src="./../../static/media/imagenes/seleccion/row-back.svg" alt="" @click="volver($event)"></a>
                        </b-col>
                        <b-col class="p-0  d-block d-sm-none" >
                            <span style=" margin-top: 4px; display: block; line-height: 30px; ">Ingresa tu tarjeta crédito <br> o débito </span>
                        </b-col>
                        <b-col class="p-0 d-none d-sm-block" >
                            <a href=""><img src="./../../static/media/imagenes/seleccion/row-back.svg" alt="" @click="volver($event)" ></a><span>Ingresa tu tarjeta crédito o débito</span>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row> 
            <b-row >
                <b-col cols="12" sm="12" md="12" lg="8" xl="8" class="metodo-pago__ingresatarjeta">
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
                                            maxlength="19" type="tel" class="form-control iptGral__input  ipt-cardNumber"
                                            autofocus/>
                                            
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
                                
                    </b-row>
                    <div class="referido">
                          <b-row>
                            <b-col cols="12" sm="10" md="12" >
                              <p class="pReferido">¿Un colaborador de Interseguro te recomendó este seguro?</p>
                            </b-col>
                            <b-col cols="12" lg="10">
                                <input placeholder="Ingresa el DNI del colaborador aquí"
                                   id="referidoDocumento" name="referidoDocumento" v-model="objReferido.documentNumber"
                                    arial-label="Ingresa el DNI del colaborador aquí" maxlength="11" type="tel" class="btnReferido"/>
                            </b-col>
                          </b-row>
                    </div>
                    <b-row class="text-center condiciones">
                                <b-col cols="12" style="left:10px">
                                    <input class="form-check-input" type="checkbox" @change="isTrueTerminos" v-model="checkDocs" id="checkDocs">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <template v-if="tabIndex == 1">
                                            <span v-if="gpsExiste == 'Y'" class="checkbox__descripcion">He leído y acepto
                                                <a href="javascript:void(0);"  v-b-modal.modal1> las condiciones de la póliza</a>
                                                y del <a href="javascript:void(0);" v-b-modal.modalgps>Sistema de Rastreo GPS</a>
                                            </span>
                                            <span v-else class="checkbox__descripcion">He leído y acepto
                                                <a href="javascript:void(0);"  v-b-modal.modal1> las condiciones de la póliza</a>  
                                            </span>
                                        </template>
                                        <template v-else>
                                            <span v-if="gpsExiste == 'Y'" class="checkbox__descripcion">He leído y acepto
                                                <a href="javascript:void(0);"  v-b-modal.modal1> las condiciones de la póliza</a>
                                                y del <a href="javascript:void(0);" v-b-modal.modalgps>Sistema de Rastreo GPS</a>
                                            </span>
                                            <span v-else class="checkbox__descripcion">He leído y acepto
                                                <a href="javascript:void(0);"  v-b-modal.modal1> las condiciones de la póliza</a>   
                                            </span>
                                        </template>
                                    </label>
                                </b-col>
                    </b-row>
                    <b-row class="justify-content-center">                                            
                        <b-col cols="12" sm="12" md="12" lg="6" xl="6" class="box-btn-pagar" style="left:35px;">                                                
                            <button type="button" @click="continuar" :disabled='this.isDisabledPayment'>
                                <span>PAGAR ${{this.monto_pagar}} </span>
                            </button>
                        </b-col>
                    </b-row>                            
                    <b-row class="text-center mt-1 tarjetas" >
                        <b-col cols="12">
                            <img src="../../static/media/img/flujo/metodo-pago/tarjetas.svg" alt="visa">
                        </b-col>
                    </b-row>
                    <b-row class="text-center mt-4 container-box-mensaje" align-h="center">                                
                        <b-col cols="12" class="box-messaje">
                            <img src="../../static/media/img/flujo/metodo-pago/tarjeta.svg" alt="">
                            <p>Tu compra es 100% segura. <br> Contamos con el respaldo del <b><span>Grupo Intercorp</span></b> </p>
                        </b-col>
                    </b-row>
                    <!-- <b-row class="justify-content-center d-block d-sm-none">                                            
                        <b-col cols="12" class="box-btn-pagar">                                                
                            <button type="submit" @click="continuar" class="btn-pagar" 
                                :disabled='this.isDisabledPayment'>
                                <span>PAGAR ${{this.monto_pagar}} </span>
                            </button>
                        </b-col>
                    </b-row> -->
                </b-col>
                <b-col cols="4">
                    <div class="resumen-proteccion d-none  d-lg-block">
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
                                <b-container>
                                    <b-row class="row-titulo">
                                        <b-col cols="8" >
                                            <p class="resumen-proteccion--subtitulo">DATOS PERSONALES</p>                                        
                                        </b-col>
                                        <b-col cols="4">
                                            <b-button class="button-editar" @click="clicBtnEditar()" v-if="this.visibleBtnEditar == 1">EDITAR</b-button>
                                            <b-button class="button-cancelar" @click="guardarDatos($event)" v-else>GUARDAR</b-button>
                                        </b-col>
                                    </b-row>
                                    <b-row class="view-datos" v-if="this.visibleBtnEditar == 1" align-v="center">
                                        <b-col cols="4" class="row-data" >
                                            <p>
                                                <span class="label" v-if="this.$store.state.common.objCliente.documentType == 'DNI'">DNI</span>
                                                <span class="label" v-else-if="this.$store.state.common.objCliente.documentType == 'CE'">CE</span>
                                                <span class="label" v-else-if="this.$store.state.common.objCliente.documentType == 'RUC'">RUC</span>
                                            </p>
                                        </b-col>
                                        <b-col cols="8" class="row-data">
                                            <p><span class="campo-minus">{{this.$store.state.common.objCliente.documentNumber}}</span></p>
                                        </b-col>
                                        <b-col cols="4" class="row-data">
                                            <p>
                                                <span class="label" v-if="this.$store.state.common.objCliente.documentType == 'DNI' || this.$store.state.common.objCliente.documentType == 'CE'">Nombre</span>
                                                <span class="label" v-else-if="this.$store.state.common.objCliente.documentType == 'RUC'">Razón Social</span>
                                            </p>
                                        </b-col>
                                        <b-col cols="8" class="row-data">
                                            <p><span class="campo-minus">
                                                {{this.$store.state.common.objCliente.firstName}} {{this.$store.state.common.objCliente.firstLastName}} {{this.$store.state.common.objCliente.secondLastName}}
                                                </span>
                                            </p>
                                        </b-col>
                                        <b-col cols="4" class="row-data">
                                            <p><span class="label">Teléfono</span></p>
                                        </b-col>
                                        <b-col cols="8" class="row-data">
                                            <p><span class="campo-minus">{{this.$store.state.common.objCliente.phoneNumber}}</span></p>
                                        </b-col>
                                        <b-col cols="4" class="row-data">
                                            <p><span class="label">Correo</span></p>
                                        </b-col>
                                        <b-col cols="8" class="row-data">
                                            <p><span class="campo-minus">{{this.$store.state.common.objCliente.emailAddress}}</span></p>
                                        </b-col>
                                    </b-row>
                                    <b-row class="edit-datos-pn" v-if="this.visibleBtnEditar == 0 && (this.$store.state.common.objCliente.documentType == 'DNI' || this.$store.state.common.objCliente.documentType == 'CE')" align-v="center">
                                        <b-col cols="4">
                                            <p><span class="label">DNI</span></p>
                                        </b-col>
                                        <b-col cols="8">
                                            <b-form-input id="documento-identidad" ref="myBtn" name="ws_username"
                                                        v-on:focus.native="isIconDni = !isIconDni"
                                                        v-on:blur.native="placeholderDNI($event)"
                                                        @click.native="clearPlaceholderDNI($event)"
                                                        @keyup.native="delay($event, 300)"
                                                        class="input-vehicular form-control input-id"
                                                        maxlength="11"
                                                        autocomplete="on"
                                                        
                                                        type="tel"
                                                        v-model="itemElegidoPersona.documentoLocal"
                                                        required
                                                        placeholder="Numero de DNI, CE o RUC"
                                                        style="text-transform: initial">
                                            </b-form-input>
                                            <clip-loader  class="cliploader" :loading="loadingPersona" :color="color" :size="size" ></clip-loader>
                                        </b-col>
                                        <b-col cols="12">
                                            <b-row  align-v="center">
                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Nombre</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input id="nombre" ref="nombre" autocomplete="given-name" name="firstName"
                                                        @keyup.native="validacionInput($event)"
                                                        @keydown.native="validacionInput($event)"
                                                        @keypress.native="validacionInput($event)"
                                                        v-on:focus.native="isIconFirstName = !isIconFirstName"
                                                        v-on:blur.native="isIconFirstName = !isIconFirstName"
                                                        class="input-vehicular iptGral__input iptClient form-control input-id"
                                                        
                                                        type="text"
                                                        v-model="objClients.firstName"
                                                        required
                                                        v-on:keyup.enter="processTags('apellido-paterno')">
                                                    </b-form-input>
                                                </b-col>
                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Apellido Paterno</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input
                                                        id="apellido-paterno"
                                                        ref="apellido-paterno"
                                                        autocomplete="family-name"
                                                        name="lastName"
                                                        @keyup.native="validacionInput($event)"
                                                        v-on:focus.native="
                                                        isIconIconFirstLastName = !isIconIconFirstLastName
                                                        "
                                                        v-on:blur.native="
                                                        isIconIconFirstLastName = !isIconIconFirstLastName
                                                        "
                                                        class="input-vehicular iptGral__input iptClient form-control input-id"
                                                        
                                                        type="text"
                                                        v-model="objClients.firstLastName"
                                                        required
                                                        v-on:keyup.enter="processTags('apellido-materno')"
                                                    ></b-form-input>
                                                </b-col>

                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Apellido Materno</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input id="apellido-materno" ref="apellido-materno" name="lastName"
                                                        @keyup.native="validacionInput($event)"
                                                        v-on:focus.native="isIconSecondLastName = !isIconSecondLastName"
                                                        v-on:blur.native="isIconSecondLastName = !isIconSecondLastName"
                                                        class="input-vehicular iptGral__input iptClient form-control input-id"
                                                        autocomplete="additional-name"
                                                        
                                                        type="text"
                                                        v-model="objClients.secondLastName"
                                                        required
                                                        v-on:keyup.enter="processTags('correo-electronico')"
                                                    ></b-form-input>
                                                </b-col>

                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Teléfono</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input id="celular" ref="celular" name="phone"
                                                        @keyup.native=" validarCelular(); validacionInput($event); "
                                                        v-on:focus.native="isIconPhoneNumber = !isIconPhoneNumber"
                                                        v-on:blur.native="isIconPhoneNumber = !isIconPhoneNumber"
                                                        class="input-vehicular iptGral__input iptClient form-control input-id"
                                                        autocomplete="tel"
                                                        v-bind:class="{ errorInput: msgErrorCelular }"
                                                        
                                                        type="tel"
                                                        v-model="objClients.phoneNumber"
                                                        required
                                                        maxlength="9"
                                                        v-on:keyup.enter="validarCelular($event)"
                                                    ></b-form-input>
                                                </b-col>
                                                <b-col cols="4" v-if="this.msgErrorCelular">
                                                </b-col>
                                                <b-col cols="6" v-if="this.msgErrorCelular">
                                                    <b-row class="d-flex justify-content-center pb-2">
                                                        <div>
                                                            <span style="font-size: 12px; color: rgb(214, 4, 17)" >Por favor ingresa un número de celular válido</span >
                                                        </div>
                                                    </b-row>
                                                </b-col>

                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Correo</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input id="correo-electronico" ref="correo-electronico" name="email"
                                                        @keyup.native=" validacionInput($event); validarEmail(); "
                                                        v-on:focus.native=" isIconEmailAddress = !isIconEmailAddress "
                                                        v-on:blur.native=" isIconEmailAddress = !isIconEmailAddress "
                                                        class="input-vehicular iptGral__input iptClient form-control input-id"
                                                        v-bind:class="{ errorInput: msgErrorEmail }"
                                                        autocomplete="on"
                                                        
                                                        type="email"
                                                        v-model="objClients.emailAddress"
                                                        required
                                                        v-on:keyup.enter="processTags('celular')"
                                                    ></b-form-input>
                                                </b-col>
                                                <b-col cols="4" v-if="this.msgErrorEmail">
                                                </b-col>
                                                <b-col cols="8" v-if="this.msgErrorEmail">
                                                    <b-row class="d-flex justify-content-center pb-2">
                                                        <div>
                                                            <span style="font-size: 12px; color: rgb(214, 4, 17)" >Por favor ingresa un email válido</span>
                                                        </div>
                                                    </b-row>
                                                </b-col>                                                    
                                                
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row class="edit-datos-pj" v-if="this.visibleBtnEditar == 0 && this.$store.state.common.objCliente.documentType == 'RUC'" align-v="center">
                                        <b-col cols="4">
                                            <p><span class="label">RUC</span></p>
                                        </b-col>
                                        <b-col cols="8">
                                            <b-form-input id="documento-identidad" ref="myBtn" name="ws_username"
                                                        v-on:focus.native="isIconDni = !isIconDni"
                                                        v-on:blur.native="placeholderDNI($event)"
                                                        @click.native="clearPlaceholderDNI($event)"
                                                        @keyup.native="delay($event, 300)"
                                                        class="input-vehicular form-control input-id"
                                                        maxlength="11"
                                                        autocomplete="on"                                                        
                                                        type="tel"
                                                        v-model="itemElegidoPersona.documentoLocal"
                                                        required
                                                        placeholder="Numero de DNI, CE o RUC"
                                                        style="text-transform: initial">
                                            </b-form-input>
                                            <clip-loader  class="cliploader" :loading="loadingPersona" :color="color" :size="size" ></clip-loader>
                                        </b-col>
                                        <b-col cols="12">
                                            <b-row  align-v="center">
                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Razón Social</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input
                                                        id="razon-social"
                                                        ref="razon-social"
                                                        @keyup.native="validacionInput($event)"
                                                        v-on:focus.native="isRazonSocial = !isRazonSocial"
                                                        v-on:blur.native="isRazonSocial = !isRazonSocial"
                                                        class="input-vehicular iptGral__input iptRUC form-control input-id"
                                                        autocomplete="on"                                                        
                                                        type="text"
                                                        v-model="objClients.firstName"
                                                        required
                                                        placeholder="Razón social"
                                                        v-on:keyup.enter="processTags('direccion')"
                                                    ></b-form-input>
                                                </b-col>
                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Dirección</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input
                                                        id="direccion"
                                                        ref="direccion"
                                                        @keyup.native="validacionInput($event)"
                                                        v-on:focus.native="isDireccion = !isDireccion"
                                                        v-on:blur.native="isDireccion = !isDireccion"
                                                        class="input-vehicular iptGral__input iptRUC form-control input-id"
                                                        autocomplete="on"                                                        
                                                        type="text"
                                                        v-model="objClients.address"
                                                        required
                                                        placeholder="Dirección"
                                                        v-on:keyup.enter="processTags('celularEmpresa')"
                                                    ></b-form-input>
                                                </b-col>
                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Celular</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input id="celularEmpresa" ref="celularEmpresa" @keyup.native=" validarCelular(); validacionInput($event); "
                                                        v-on:focus.native=" isIconPhoneNumber = !isIconPhoneNumber "
                                                        v-on:blur.native=" isIconPhoneNumber = !isIconPhoneNumber "
                                                        v-bind:class="{ errorInput: msgErrorCelular }"
                                                        class="input-vehicular iptGral__input iptRUC form-control input-id"
                                                        autocomplete="tel"                                                        
                                                        type="tel"
                                                        v-model="objClients.phoneNumber"
                                                        required
                                                        maxlength="9"
                                                        placeholder="Celular"
                                                        v-on:keyup.enter=" processTags('correo-electronicoEmpresa') "
                                                    ></b-form-input>
                                                </b-col>

                                                <b-col cols="4" class="mt-3">
                                                    <p><span class="label">Correo</span></p>
                                                </b-col>
                                                <b-col cols="8" class="mt-3">
                                                    <b-form-input
                                                        id="correo-electronicoEmpresa"
                                                        ref="correo-electronicoEmpresa"
                                                        @keyup.native="validacionInput($event); validarEmail(); "
                                                        v-bind:class="{ errorInput: msgErrorEmail }"
                                                        v-on:focus.native=" isIconEmailAddress = !isIconEmailAddress "
                                                        v-on:blur.native=" isIconEmailAddress = !isIconEmailAddress "
                                                        class="input-vehicular iptGral__input iptRUC form-control input-id"
                                                        autocomplete="on"                                                        
                                                        type="text"
                                                        v-model="objClients.emailAddress"
                                                        required
                                                        placeholder="Correo Electrónico"
                                                    ></b-form-input>
                                                </b-col>
                                                
                                            </b-row>
                                        </b-col>
                                    </b-row>

                                    <b-row class="row-titulo" >
                                        <b-col cols="8">
                                            <p class="resumen-proteccion--subtitulo">DATOS DE MI PÓLIZA</p>                                        
                                        </b-col>
                                        <b-col cols="4" >
                                            <b-button class="button-editar" @click="editarPoliza($event)">EDITAR</b-button>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="4" class="row-data">
                                            <p><span class="label">Plan</span></p>
                                        </b-col>
                                        <b-col cols="8" v-if="this.$store.state.common.planSeleccionado == 4" class="row-data">
                                            <p><span class="campo-minus">Básico: Protección contra robo</span></p>
                                        </b-col>
                                        <b-col cols="8" v-if="this.$store.state.common.planSeleccionado == 6" class="row-data">
                                            <p><span class="campo-minus">Intermedio: Protección accidentes</span></p>
                                        </b-col>
                                        <b-col cols="8" v-if="this.$store.state.common.planSeleccionado == 3 || this.$store.state.common.planSeleccionado == 10" class="row-data">
                                            <p><span class="campo-minus">Full: Protección total</span></p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="4" class="row-data">
                                            <p><span class="label">Cobertura</span></p>
                                        </b-col>
                                        <b-col cols="8" class="row-data">
                                            <p><span class="campo-minus">$ {{this.$store.state.common.listaCotizacion.vehicle.current}}</span></p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="4" class="row-data">
                                            <p><span class="label">Frecuencia</span></p>
                                        </b-col>
                                        <b-col cols="8" v-if="this.$store.state.common.frecuenciaPago == 1" class="row-data">
                                            <p><span class="campo-minus">Mensual</span></p>
                                        </b-col>
                                        <b-col cols="8" v-if="this.$store.state.common.frecuenciaPago == 2" class="row-data">
                                            <p><span class="campo-minus">Trimestral</span></p>
                                        </b-col>
                                        <b-col cols="8" v-if="this.$store.state.common.frecuenciaPago == 3" class="row-data">
                                            <p><span class="campo-minus">Anual</span></p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="4" class="row-data">
                                            <p><span class="label">F. de inicio</span></p>
                                        </b-col>
                                        <b-col cols="8" class="row-data">
                                            <p><span class="campo-minus">{{this.$store.state.common.fechaVigencia}}</span></p>
                                        </b-col>
                                    </b-row>
                                    <b-row class="datos-pago">
                                        <b-col cols="8">
                                            <p><span >MONTO FINAL A PAGAR:</span></p>
                                        </b-col>
                                        <b-col cols="4" class="total">
                                            <p><span class="monto-resumen">US$ {{this.monto_pagar}}</span></p>
                                        </b-col>
                                    </b-row>
                                </b-container>                                
                                
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

        <b-modal id="leavePayment" class="leaveModal2" size="lg"  static centered hide-footer hide-header>
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

        <!--Modal campania-->
     <!-- <b-modal id="leavePayment" class="leaveModal2" static centered hide-footer hide-header >
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
              <b-button @click="$nuxt.$emit('bv::hide::modal', 'leavePayment')">TERMINAR COMPRA</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-modal> -->

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
        layout: 'InterseguroFlujoNew',
        data(){
            return {
                isIconFirstName: false,
                isIconIconFirstLastName: false,
                isIconSecondLastName: false,
                isIconBirthDate: false,
                isIconPhoneNumber: false,
                isIconEmailAddress: false,
                isIconDni: false,
                isIconRuc: false,
                isDireccion: false,
                isRazonSocial: false,
                isIconPhoneNumber: false,

                msgErrorEmail: false,
                msgErrorCelular: false,
                visibleFormPN: 0,
                visibleFormPJ: 0,
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
                },
                /** busqueda de personas */
                objClients: {
                    address: "",
                    birthDate: "",
                    documentNumber: "",
                    documentType: "",
                    emailAddress: "",
                    externalId: "",
                    firstLastName: "",
                    firstName: "",
                    id: "",
                    intercorp: "",
                    phoneNumber: "",
                    secondLastName: "",
                },
                itemElegidoPersona: {
                    idCliente: 0,
                    documentNumber: "",
                    address: "",
                    documentoLocal: "",
                    discountType: "",
                    documentoLocalSinEspacios: "",
                    firstName: "",
                    firstLastName: "",
                    secondLastName: "",
                    phoneNumber: "",
                    emailAddress: "",
                    remarketingId: "",
                },
                tamaño: 0,
                campoDocumentoInicial: null,
                todoCompleto: false,
                loadingPersona: false,
                objReferido:{
                    documentNumber:''
                },
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
            clicBtnEditar(){                this.visibleBtnEditar = 0;
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
                            businessId: this.$store.state.common.businessId,
                            sellCode: this.$store.state.common.codeRmkt,
                            planId: this.$store.state.common.planSeleccionado,
                            channelId: 1,
                            plateNumber: this.$store.state.common.plateNumber,
                            documentNumber: this.$store.state.common.documentoLocal,
                            referredNumber: this.objReferido.documentNumber,
                            discountType: this.discountType,
                            policy: {
                                startDate: this.$store.state.common.fechaVigencia,
                                zeroKm: "N",
                                frequency: this.payment,
                                financialInstitution: this.$store.state.common.entidadFinanciera.id == 0 || this.$store.state.common.entidadFinanciera.id == null ? null : this.$store.state.common.entidadFinanciera.id,
                                calculated: this.listCotizacion.policy.calculated,
                                monthly: this.listCotizacion.policy.monthly,
                                monthlyDiscount: this.listCotizacion.policy.monthlyDiscount,
                                quarterly: this.listCotizacion.policy.quarterly,
                                quarterlyDiscount: this.listCotizacion.policy.quarterlyDiscount,
                                annual: this.listCotizacion.policy.annual,
                                annualDiscount: this.listCotizacion.policy.annualDiscount,
                                sumAssured: this.listCotizacion.vehicle.current,
                                discount: false,
                            },
                            digitalPayment: {
                                provider: "CULQI",
                                token: this.objCulqi.id
                            }
                        }
                        this.$store.dispatch('payment/paymentExecute', this.objPaymentExecute)
                        .then((res) =>{

                            if (res.code == 0) {
                                this.opacidad =false
                                // this.validarROOT()
                                this.$store.commit('common/setPolicy_id',res.body.policyId)
                                this.$nuxt.$router.push({path: '/cotiza/pago-procesado2'})
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

            validarEmail() {
                if (this.validate()) {
                    this.msgErrorEmail = false;
                } else {
                    this.isDisableButton = true;
                    this.msgErrorEmail = true;
                }
            },
            validateEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
            validate() {
                let email_local = this.objClients.emailAddress;
                if (this.validateEmail(email_local)) {
                    return true;
                } else {
                    return false;
                }
            },
            validarCelular() {
                
                if (this.objClients.phoneNumber)
                    if (
                    this.objClients.phoneNumber.charAt(0) == 9 &&
                    this.objClients.phoneNumber.length == 9
                    ) {
                    this.msgErrorCelular = false;
                    } else {
                    this.isDisableButton = true;
                    this.msgErrorCelular = true;
                }
            },

            validacionInput(event) {
                if (
                    (this.tamaño == 8 || this.tamaño == 9) &&
                    !this.msgErrorEmail &&
                    !this.msgErrorCelular
                ) {
                    this.isDisableButton = true;
                    this.objClients.phoneNumber =
                    this.objClients.phoneNumber != null || undefined
                        ? this.objClients.phoneNumber
                            .replace(/[^0-9\s]/gi, "")
                            .replace(/[_\s]/g, "")
                        : "";
                    if (this.validarClient()) {
                    
                    this.msgCompletaDatos = false;
                    if (this.checkPoliticasPrivacidad == true) {
                        this.isDisableButton = false;
                    } else {
                    }
                    } else {
                    this.msgCompletaDatos = true;

                    this.isDisableButton = true;
                    }
                } else if (
                    this.tamaño == 11 &&
                    !this.msgErrorEmail &&
                    !this.msgErrorCelular
                ) {
                    this.isDisableButton = true;
                    if (this.validarRUC()) {
                    this.msgCompletaDatos = false;
                    if (this.checkPoliticasPrivacidad == true) {
                        this.isDisableButton = false;
                    } else {
                    }
                    } else {
                    this.msgCompletaDatos = true;
                    this.isDisableButton = true;
                    }
                }
                },

            guardarDatos(evt) {
                this.clicBtnCancelar();
                //this.$store.state.common.listaCotizacion.policy.startDate = this.$store.state.common.fechaVigencia;
                //this.isDisableButton = true;
                evt.preventDefault();
                this.detectar_documento();
                //this.$store.commit("common/setObjectDigodat", this.cobertura_is);
                if (this.tamaño == 8 || this.tamaño == 9) {
                    if (this.$store.state.common.clientState == 0) {
                        this.createClient();
                    } else if (this.$store.state.common.clientState == 1) {
                        this.updateClient();
                    } else {}
                    this.$store.commit("common/setNumeroTelefono", this.objClients.phoneNumber);
                } else if (this.tamaño == 11) {
                    if (this.$store.state.common.clientState == 0) {
                        this.createRuc();
                        //this.como_pagar();
                    } else {
                        this.updateRuc();
                        this.isDisableButton = false;
                        this.$store.commit("common/setEmail", this.objClients.emailAddress);
                        //this.como_pagar();
                    }
                    this.$store.commit("common/setNumeroTelefono", this.objClients.phoneNumber);
                } else {
                }
                //this.pantalla = 3;
                /* if (this.objClients.validCtaSueldo == "N") {
                    this.$swal({
                    title: "Oops...",
                    text:
                        "¡No eres Cuenta Sueldo Interbank! Abre tu Cuenta Sueldo Interbank online y disfruta de un 15% de descuento en la compra de tu Seguro Vehicular.",
                    type: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#2177CC",
                    confirmButtonText: "OK",
                    });
                } */

                /* window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    event: "userData",
                    firstname: this.objClients.firstName,
                    lastname:
                    this.objClients.firstLastName + " " + this.objClients.secondLastName,
                    email: this.objClients.emailAddress,
                    phone: this.objClients.phoneNumber,
                    monto: localStorage.getItem("monthly"),
                }); */
            },
            
            volver (evt) {
                evt.preventDefault();
                this.$nuxt.$router.push("/cotizacion/documento");              
            },
            editarPoliza (evt) {
                evt.preventDefault();
                this.$nuxt.$router.push("/cotizacion/cotizacion");              
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
                    document.getElementById("focusTarjeta").style.display = "none"
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
                    "enviarCorreo":2,
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


            /* Busqueda de personas */
            clearPlaceholderDNI(eve) {
                eve.target.placeholder = "";
            },
            placeholderDNI(event) {
                this.isIconDni = !this.isIconDni;
                if (process.client) {
                    document.getElementById("documento-identidad").placeholder =
                    "Ingresa tu DNI, CE o RUC";
                }
            },
            delay(event, ms) {
                //this.isDisableButton = true;
                //this.mostrarDatosPersonales = false;
                //this.mostrarDatosyCheckbox = false;
                var self = this;
                clearTimeout(self.timer);
                self.timer = setTimeout(function () {
                    self.validacionDocumento(event);
                }, ms);
            },
            validacionDocumento(event) {
                console.log('in validacionDocumento....');
                this.procesar(event.target.value);
            },
            procesar(value) {
                this.detectar_documento();
                if (!isNaN(value) && this.campoDocumentoInicial !== value) {
                    this.campoDocumentoInicial = value;
                    if (this.tamaño < 8) {
                        this.todoCompleto = false;
                        this.loadingPersona = false;
                        this.objClients.firstName = "";
                        this.objClients.firstLastName = "";
                        this.objClients.secondLastName = "";
                        this.objClients.phoneNumber = "";
                        this.objClients.emailAddress = "";
                        this.objClients.address = "";
                    }
                    if (this.tamaño >= 8) {
                        var self = this;
                        self.loadingPersona = true;
                        self.msgCompletaDatos = false;
                        if (self.tamaño == 8 || self.tamaño == 9) {
                            self.getClient(1);
                        } else if (self.tamaño == 10) {
                            self.mostrarRuc = true;
                            self.loadingPersona = false;
                        } else if (self.tamaño == 11) {
                            self.getClient(2);
                        } else {
                            return false;
                        }
                    }
                } else {
                    return false;
                }
            },
            detectar_documento() {
                this.itemElegidoPersona.documentoLocalSinEspacios = this.itemElegidoPersona.documentoLocal
                    .replace(/[^0-9\s]/gi, "")
                    .replace(/[_\s]/g, "")
                let documento = this.itemElegidoPersona.documentoLocalSinEspacios
                this.tamaño = documento.length
            },
            getClient(parametro) {
                this.itemElegidoPersona.discountType = this.discountType;
                this.$store.dispatch("common/getClient", this.itemElegidoPersona).then((res) => {
                    if (res.data.code == 0) {
                        this.loadingPersona = true;
                        this.objClients = res.data.body;
                        this.$store.commit("common/setObjCliente", res.data.body);
                        this.idCliente = res.data.body.id;
                        this.loadingPersona = false;
                        this.$store.commit("common/setClientState", 1);
                        this.$store.commit("common/setClientStateGA", true);
                        this.estado_cliente = 1;
                        if (parametro == 1) {
                            setTimeout(() => {
                            this.validarClienteVuex();
                            }, 500);
                        } else if (parametro == 2) {
                            setTimeout(() => {
                            this.validarEmpresaVuex();
                            }, 500);
                        } else {
                        }
                    } else if (res.data.code == 201) {
                        this.$store.commit("common/setClientStateGA", false);
                        this.$store.commit("common/setClientState", 0);
                        this.estado_cliente = 0;
                        this.objClients = {};
                        if (parametro == 1) {
                            setTimeout(() => {
                            this.validarClienteVuex();
                            }, 500);
                        } else if (parametro == 2) {
                            setTimeout(() => {
                            this.validarEmpresaVuex();
                            }, 500);
                        }
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
            createClient() {
                this.$store.commit("common/setDocumentoLocal",this.itemElegidoPersona.documentoLocal);
                this.itemElegidoPersona = this.objClients;
                this.$store
                    .dispatch("common/createClient", this.itemElegidoPersona)
                    .then((res) => {
                    if (res.data.code == 0) {
                        //this.isDisableButton = false;
                        this.$store.commit("common/setEmail", this.objClients.emailAddress);
                        this.$store.commit("common/setClientState", 1);
                        //this.como_pagar();
                    } else {
                        this.$swal({
                        title: "Ups!",
                        text:
                            "Tenemos unos problemas vuelve a intentarlo en unos minutos.",
                        type: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#2177CC",
                        confirmButtonText: "OK",
                        });
                    }
                    });
            },
            updateClient() {
                this.$store.commit("common/setDocumentoLocal", this.itemElegidoPersona.documentoLocal);
                this.itemElegidoPersona = this.objClients;
                this.$store.dispatch("common/updateClient", this.itemElegidoPersona).then((res) => {
                    if (res.data.code == 0) {
                        console.log('Update exitoso ......')
                        //this.como_pagar();
                    } else {
                        this.$swal({
                        title: "Ups!",
                        text:
                            "Tenemos unos problemas vuelve a intentarlo en unos minutos.",
                        type: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#2177CC",
                        confirmButtonText: "OK",
                        });
                    }
                    });
            },
            updateRuc() {
                this.$store.commit("common/setDocumentoLocal", this.itemElegidoPersona.documentoLocal);
                this.itemElegidoPersona = this.objClients;
                this.$store.dispatch("common/updateRuc", this.itemElegidoPersona).then((res) => {
                    if (res.data.code == 0) {
                        //this.como_pagar();
                    } else {
                    this.$swal({
                        title: "Ups!",
                        text: "Tenemos unos problemas vuelve a intentarlo en unos minutos.",
                        type: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#2177CC",
                        confirmButtonText: "OK",
                    });
                    }
                });
            },

            createRuc() {
            this.$store.commit("common/setDocumentoLocal", this.itemElegidoPersona.documentoLocal);
            this.itemElegidoPersona = this.objClients;
            this.$store.dispatch("common/createRuc", this.itemElegidoPersona).then((res) => {
                if (res.data.code == 0) {
                    //this.isDisableButton = false;
                    this.$store.commit("common/setEmail", this.objClients.emailAddress);
                    this.$store.commit("common/setClientState", 1);
                } else {
                this.$swal({
                    title: "Ups!",
                    text: "Tenemos unos problemas vuelve a intentarlo en unos minutos.",
                    type: "error",
                    showCancelButton: false,
                    confirmButtonColor: "#2177CC",
                    confirmButtonText: "OK",
                });
                }
            });
            },
            validarClienteVuex() {
                //this.mostrarDatosPersonales = false;
                this.loadingPersona = false;
                //this.isOculto = true;
                this.mostrarRuc = false;
                if (this.estado_cliente == 1) {
                    if (this.validarClient()) {
                    //this.ocultarInputDocumento = true;
                    //this.mostrarDatosPersonales = true;
                    //this.mostrarDatosyCheckbox = true;
                    this.msgCompletaDatos = false;
                    //this.mostrar = true;
                    //this.mostrarEditarCancelar = true;
                    /* if (this.checkPoliticasPrivacidad == true) {
                        this.isDisableButton = false;
                    } else {
                        this.isDisableButton = true;
                    } */
                    this.cobertura_is.personType = "fisica";
                    this.cotizador_datalayer("checkout", 2);
                    } else {
                        //this.ocultarInputDocumento = false;
                        //this.mostrarDatosPersonales = false;
                        //this.mostrarDatosyCheckbox = true;
                        this.msgCompletaDatos = true;
                        //this.mostrar = false;
                        //this.isSecondBox = true;
                        //this.isDisableButton = true;
                    }
                } else {
                    this.cobertura_is.personType = null;
                    this.mostrarEditarCancelar = false;
                    this.mostrarDatosPersonales = false;
                    this.mostrarDatosyCheckbox = true;
                    this.mostrar = false;
                    this.msgCompletaDatos = true;
                    this.cobertura_is.personType = null;
                    this.cotizador_datalayer("checkout", 2);
                }
            },
            validarEmpresaVuex() {
                //this.mostrarDatosPersonales = false;
                this.msgCompletaDatos = false;
                this.loadingPersona = false;
                //this.isOculto = true;                
                this.mostrarRuc = true;
                if (this.estado_cliente == 1) {
                    if (this.validarRUC()) {
                        //this.ocultarInputDocumento = true;
                        //this.mostrarEditarCancelar = true;
                        //this.mostrarDatosPersonales = true;
                        //this.mostrarDatosyCheckbox = true;
                        this.msgCompletaDatos = false;
                        //this.mostrar = true;
                        this.cobertura_is.personType = "juridica";
                        this.cotizador_datalayer("checkout", 2);
                        /* if (this.checkPoliticasPrivacidad == true) {
                            this.isDisableButton = false;
                        } else {
                            this.isDisableButton = true;
                        } */
                    } else {
                        //this.ocultarInputDocumento = false;
                        //this.mostrarEditarCancelar = false;
                        //this.mostrarDatosPersonales = false;
                        //this.mostrarDatosyCheckbox = true;
                        this.msgCompletaDatos = true;
                        //this.mostrar = false;
                        //this.isSecondBox = true;
                        //this.isDisableButton = true;
                    }
                } else {
                    this.cobertura_is.personType = null;
                    this.mostrarEditarCancelar = false;
                    this.mostrarDatosPersonales = false;
                    this.mostrarDatosyCheckbox = true;
                    this.mostrar = false;
                    this.msgCompletaDatos = true;
                    this.cobertura_is.personType = null;
                    this.cotizador_datalayer("checkout", 2);
                }
            },
            validarClient() {
                var camposRellenados = true;
                if (process.client) {
                    let ipt_general = document.getElementsByClassName("iptClient");
                    for (let i = 0; i < ipt_general.length; i++) {
                        if (ipt_general[i].value.length <= 0) {
                            camposRellenados = false;
                            return false;
                        }
                    }
                    if (camposRellenados == true) {
                        if (
                            this.objClients.phoneNumber.charAt(0) == 9 &&
                            this.objClients.phoneNumber.length == 9
                        ) {
                            this.$store.commit("common/setCheckgss", 1);
                            this.$store.commit("common/setEmail", this.objClients.emailAddress);
                        }
                        this.msgCompletaDatos = false;
                        return true;
                    } else {
                        this.msgCompletaDatos = true;
                        this.$store.commit("common/setCheckgss", 0);
                        return false;
                    }
                }
            },
            validarRUC() {
                var camposRellenados = true;
                if (process.client) {
                    let ipt_general = document.getElementsByClassName("iptRUC");
                    for (let i = 0; i < ipt_general.length; i++) {
                        if (ipt_general[i].value.length <= 0) {
                            camposRellenados = false;
                            return false;
                        }
                    }
                    if (camposRellenados == true) {
                        if (
                            this.objClients.phoneNumber.charAt(0) == 9 &&
                            this.objClients.phoneNumber.length == 9
                        ) {
                            this.$store.commit("common/setCheckgss", 1);
                            this.$store.commit("common/setEmail", this.objClients.emailAddress);
                        }
                        return true;
                    } else {
                        return false;
                    }
                }
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

            this.urlLocal = localStorage.getItem("urlLocal");
            this.cobertura_is = this.$store.state.common.objectDigodat;
            
            this.cotizador_datalayer("checkout",3)
            let objJWT = JSON.parse(localStorage.getItem("jwt"));
            console.log('objJWT ... '+this.objJWT);
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

                /**Busqueda de persona */
                if (objJWT.common.documentoLocal) {
                    this.itemElegidoPersona.documentoLocal = objJWT.common.documentoLocal;
                    if (
                    objJWT.common.documentoLocal.length == 8 ||
                    objJWT.common.documentoLocal.length == 9
                    ) {
                    this.getClient(1);
                    } else if (objJWT.common.documentoLocal.length == 11) {
                    this.getClient(2);
                    } else {
                    }
                }
                
                
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
.referido{
    margin-left: auto;
    margin-right: auto;
    max-width: 266px;
    max-height: 165px;
    text-align: center;
    font-family: 'Omnes Regular';
    font-size: 16px;
    letter-spacing: 0px;
    color: #333333;
    opacity: 1;
    .btnReferido{
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 266px;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #B2B4C7;
    }
}
</style>
