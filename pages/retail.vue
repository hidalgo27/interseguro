<template>
    <main class="mb-5">
        <section class="pt-4" >
            <b-container>
                <b-row class="d-flex  justify-content-center">
                    <b-col cols="12" sm="10" md="10" lg="10">
                        
                        <form class="form-horizontal form-content ">
                            <div class="text-center form-content__msg"></div>
                            <h2 class="mt-4  mb-0 text-center form-content__title text-uppercase">
                                <div class="img-form" style="margin-bottom:5px">
                                    <img src="../static/media/img/bp-car.svg" alt="icon step ingresa tu placa">
                                </div>
                                <span class="tag-1">Empecemos,<br></span>
                                <span class="tag-0">completa tus Datos</span>
                            </h2>
                        </form>
                    </b-col>
                    <b-col cols="4" class="pt-3 pb-0">
                        <b-form-input id="vehicleModelPlate"
                                      class="text-uppercase form-control" 
                                      style="border:1px solid #333333; box-shadow:3px 3px 8px #616161a3"
                                      @keyup.native="delay($event,750)"
                                      maxlength="6"
                                      autocomplete="off"
                                      type="text"
                                      v-model="placa"
                                      required
                                      name="Placa"
                                      aria-label="placa"
                                      placeholder="Placa"
                                      autofocus>
                        </b-form-input>
                    </b-col> 
                </b-row>
                <br>
                <b-row class="d-flex  justify-content-center">
                    <b-col cols="3" class="box-input d-flex justify-content-center pt-3 pb-0">
                        <select id="marca"
                                @change="updateModel($event)"
                                class="input-vehicular"
                                v-bind:class="{marcaFaltante: this.objVehicle.brandId == -1 }"
                                v-model="objVehicle.brandId"
                                style="background:#fff">
                            <option disabled :value="-1 || null">Marca</option>
                            <option
                                v-for="(option, index) in listBrand"
                                :key="index"
                                v-bind:value="option.id"
                                v-bind:class="{'grupo1' : option.group == 1}">{{ option.name }}</option>
                        </select>
                    </b-col>
                    <b-col cols="3" class="box-input d-flex justify-content-center pt-3 pb-0">
                        <select id="año"
                                @change="updateModel($event)"
                                class="input-vehicular"
                                v-bind:class="{añoFaltante:this.objVehicle.añoFaltante == -1 || this.objVehicle.modelYear < 2008}"
                                v-model="objVehicle.modelYear"
                                style="background:#fff">
                            <option disabled :value="-1 || null">Año</option>
                            <option
                                v-for="(option, index) in listYear"
                                :key="index"
                                v-bind:value="option.id">{{ option.name }}</option>
                            <option
                                v-bind:class="{ msg_atiguedad : msg_atiguedad }"
                                disabled>Solo cubrimos 11 años de antigüedad.</option>
                        </select>
                    </b-col>
                    <b-col cols="3" class="box-input d-flex justify-content-center pt-3 pb-0">
                        <select id="modelo"
                                class="input-vehicular"
                                @change="validarSelect"
                                v-bind:class="{modeloFaltante:this.objVehicle.modelId == -1}"
                                v-model="objVehicle.modelId"
                                style="background:#fff"
                                :disabled="this.objVehicle.modelYear >= 2008 ? false : true">
                            <option disabled :value="-1 || null">Modelo</option>
                            <option
                                v-for="(option, index) in listModel"
                                :key="index"
                                v-bind:value="option.id">{{ option.name }}</option>
                        </select>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <section class="pt-4">
            <b-container style="background:#ffffff; border-radius:12px; box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px; padding-bottom:10px; padding-left:23px; padding-right:23px">
                <b-row>
                    <b-col cols="12" class="b-white">
                        <div id="show-modal" class="mail-float" role="button" v-on:click="showModal = showModal != undefined ? true : true">
                            <img src="../static/media/img/flujo/cotizacion/email.png" alt="">
                            <span>Recibe tu cotización</span>
                        </div>
                        

                        <div>
                            <div v-if="showModal">
                                <transition name="modal">
                                    <div class="modal-mask">
                                        <div class="modal-wrapper">
                                            <div class="modal-container modal-container__custom">
                                                <span class="modal-close  modal-close-cotizacion" @click="hideModalCotizacion">x</span>
                                                <div class="modal-body modal-body__custom">
                                                    <p class="text-modalEnviarMail">Recibe la cotización a tu correo personal.</p>
                                                </div>
                                                <div class="modal-footer footer-custom">
                                                    <div class="footer-custom__box">
                                                        <b-form-group id="grupo-enviar"
                                                                      label-for="enviar-modal"
                                                                      class="grupo-enviar">
                                                            <b-form-input id="enviar-modal"
                                                                          type="text"
                                                                          required
                                                                          v-model="objClients.emailAddress"
                                                                          placeholder="Ejem. lperez@gmail.com"></b-form-input>
                                                        </b-form-group>
                                                        <clip-loader class="cliploader" :loading="loading" :color="color" :size="size"></clip-loader>
                                                        <button :disabled="isDisabledEnviarCorreo" 
                                                                class="modal-default-button btn-enviarModal"
                                                                @click="enviarMail()">ENVIAR</button>
                                                  </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </div>


                        <form class="form-horizontal form-content ">
                            <div class="text-center form-content__msg"></div>
                            <h2 class="mt-4  mb-0 text-center form-content__title text-uppercase">
                                <span class="tag-1">Tu seguro vehicular</span>
                            </h2>
                        </form>
                    </b-col>
                    <b-col cols="6">
                        <div class="box-cotizacion2">
                            <b-row id="car-price">
                                <b-col cols="12"
                                        class="text-left valorComercial">
                                    <p class="box-tooltip mb-4">
                                        <span class="titulo-datosPersonales__titulo">
                                            Verifica tu suma asegurada
                                        </span>
                                    </p>
                                </b-col>
                                <b-col cols="12">
                                    <div class="box-range">
                                        <div class="box-edit">
                                            <b-form-input v-model="listCotizacion.vehicle.current"
                                                          type="tel"
                                                          maxlength="5"
                                                          :min="clonado.vehicle.minimum"
                                                          :max="clonado.vehicle.maximum"
                                                          @keyup.native="delayCotizacion($event,1000)"></b-form-input>
                                            <i class="fa fa-pencil" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div class="box-range box-range__min-max">
                                        <div class="minimoImg">
                                            <span class="minimoImg__text"></span>
                                            <span class="minimoImg__monto">$ {{isMinimo}}</span>
                                        </div>
                                        <div class="maximoImg">
                                            <span class="maximoImg__text"></span>
                                            <span class="maximoImg__monto">$ {{isMaximo}}</span>
                                        </div>
                                    </div>
                                    
                                </b-col>   

                                <b-col cols="12" class="text-left pt-5">
                                    <div class="box-msgMontos"
                                         v-bind:class="{msgMontosActive : msgMontosActive}">
                                        <span class="box-msgMontos__text">{{this.msgMontos}}</span>
                                    </div>
                                    <div class="box-gps" v-if="this.objVehicle.modelyear>=2016">
                                        <p class="mb-0 gps  requiere-gps">
                                            GPS:
                                            {{this.listCotizacion.vehicle.gps == "Y" ? "Requiere" : "No Requiere" }}
                                        </p>
                                    </div>
                                    <div class="box-gps" v-else>
                                        <p class="mb-0 gps requiere-gps" v-if="this.listCotizacion.vehicle.gps == 'Y'">
                                            GPS:
                                            {{this.listCotizacion.vehicle.gps == "Y" ? "Requiere" : "No Requiere" }}
                                        </p>
                                    </div>
                                </b-col>
                            
                            </b-row>
                        </div>
                    </b-col>
                    <b-col cols="6">
                        <div class="box-cotizacion2">
                            <div class="cotizacion">
                                <div class="cotizacion-datos">
                                    <div class="cotizacion-datos_dto">
                                        <span>$ {{this.listCotizacion.policy.monthlyCalculated}} /MES</span>
                                    </div>
                                    <div class="cotizacion-datos__item">
                                        <span class="monto-mensual">
                                            <small>$</small>
                                            {{this.listCotizacion.policy.monthly}}
                                        </span>
                                        <span class="text-mensual">/ MES</span>
                                    </div>
                                    <div class="cotizacion-datos__item">
                                        <span class="monto-anual">
                                            Anual: $
                                            {{this.listCotizacion.policy.annual}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <section class="pt-4">
            <b-container style="background:#ffffff; border-radius:12px; box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px; padding-bottom:10px; padding-left:23px; padding-right:23px">
                <b-row class="justify-content-center box-ingresaDocumento">      
                    <b-col cols="12" sm="10" md="12" class="pb-2">
                        <form class="form-horizontal form-content ">
                            <div class="text-center form-content__msg"></div>
                            <h2 class="mt-4  mb-0 text-center form-content__title text-uppercase">
                                <span class="tag-1">Ingresa tus datos</span>
                            </h2>
                        </form>
                    </b-col>
                    <div class="maestra  d-block d-lg-none">
                        <b-col cols="12" class="mb-0  d-none"  v-bind:class="{mostrarDatosyCheckbox :mostrarDatosyCheckbox}"  style="justify-content: center">
                            <div class="msgCompletaDatosInicialbase  pt-0" >                    
                                <span class="msgCompletaDatosInicial  pt-0" v-bind:class="{ msgCompletaDatos: msgCompletaDatos}">
                                    Por favor  completa los datos para continuar
                                </span>
                            </div>
                        </b-col>
                    </div>

                    <!--<div class="box-cotizacion2">-->
                        <b-col cols="12" lg="8">
                            <b-row class="box-row first-box justify-content-center ">
                                <b-col cols="12" lg="4" class="mb-2">
                                    <div class="form-group text-center mb-1 row">
                                        <template v-if="this.longitudDocumento <= 10">
                                            <img class="icon-datos"
                                                 v-bind:class="{isIconDni : isIconDni}"
                                                 width="28"
                                                 src="../static/media/img/flujo/ingresa-documento/dni_gris.png"
                                                 alt="visa" />
                                            <img class="icon-datos"
                                                 v-bind:class="{isIconDni : !isIconDni}"
                                                 width="28"
                                                 src="../static/media/img/flujo/ingresa-documento/dni_gris.png"
                                                 alt="visa" />
                                        </template>
                                        <template v-else>
                                            <img class="icon-datos"
                                                 v-bind:class="{isIconDni : isIconDni}"
                                                 width="22"
                                                 src="../static/media/img/flujo/ingresa-documento/ruc_gris.png"
                                                 alt="visa" />
                                            <img class="icon-datos"
                                                 v-bind:class="{isIconDni : !isIconDni}"
                                                 width="22"
                                                 src="../static/media/img/flujo/ingresa-documento/ruc_gris.png"
                                                 alt="visa" />
                                        </template>   
                                        <b-form-input
                                            id="documento-identidad"
                                            ref="myBtn"
                                            name="ws_username"
                                            v-on:focus.native="isIconDni = !isIconDni"
                                            v-on:blur.native="placeholderDNI($event)"
                                            @click.native="clearPlaceholderDNI($event)"
                                            @keyup.native="delayDocumento($event,300)"
                                            class="input-vehicular form-control input-id"
                                            maxlength="11"
                                            autocomplete="on"
                                            autofocus
                                            type="tel"
                                            v-model="documentoLocal"
                                            required
                                            placeholder="Ingresa tu DNI, CE o RUC"
                                            style="text-transform: initial"></b-form-input>
                                        <clip-loader class="cliploader" :loading="loading" :color="color" :size="size"></clip-loader>
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row  class="d-flex  justify-content-center">
                                <div v-if="this.documentoLocal.length ==10">
                                    <span style="font-size: 12px; color: rgb(214, 4, 17);">Ingrese un número de documento válido</span>
                                </div>
                            </b-row>
                        </b-col>

                        <template>
                            <b-col cols="12" lg="7">
                                <b-row>
                                    <b-col class="d-none col-sm-12  col-lg-3 " v-bind:class="{mostrarDatosyCheckbox :mostrarDatosyCheckbox}" style="padding-left: 0; align-items: flex-start;">
                                        <div class="titulo-datosPersonales__titulo" v-if="this.documentoLocal.length == 11">Datos de la empresa</div>
                                        <div class="titulo-datosPersonales__titulo" v-else>Datos personales</div>                    
                                    </b-col>
                                    <div>
                                        <span class="titulo-datosPersonales__editarCancelar" @click="editarCancelar" v-bind:class="{mostrarEditarCancelar :mostrarEditarCancelar}">
                                            {{mostrarPrimerBox == true ?"Editar":"Cerrar"}}
                                            <img  src="../static/media/img/flujo/ingresa-documento/editar.png"/>
                                        </span>
                                    </div>
                                    <b-col cols="12" lg="6" class="d-none"  v-bind:class="{mostrarDatosPersonales :mostrarDatosPersonales}">
                                        <div class=" d-none d-lg-flex">
                                            <div class="row boxUsuarioEncontrado" v-bind:class="{mostrarPrimerBox: mostrarPrimerBox}">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            {{this.objClients.firstName}} </span><span> {{this.objClients.firstLastName}} </span><span>{{this.objClients.secondLastName}}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            {{this.objClients.emailAddress}}
                                                        </span>
                                                    </li>  
                                                    <li>
                                                        <span>
                                                            {{this.objClients.phoneNumber}}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>                    
                                        <b-col cols="12" lg="8" class="d-flex d-lg-none  mt-2" style="padding-left: 0;">
                                            <div class="row  boxUsuarioEncontrado " v-bind:class="{mostrarPrimerBox: mostrarPrimerBox}">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            {{this.objClients.firstName}} </span><span> {{this.objClients.firstLastName}} </span><span>{{this.objClients.secondLastName}}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            {{this.objClients.emailAddress}}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            {{this.objClients.phoneNumber}}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </b-col>
                                    </b-col>
                                    <div class="">
                                        <b-row class="second-box  mt-2" v-bind:class="{ mostrarSegundoBox: mostrarSegundoBox }">                  
                                            <b-col cols="12">
                                                <b-row class="dni-ce" v-bind:class="{ mostrarDni: mostrarDni }">
                                                    <div class="capa" v-bind:class="{ isOculto: isOculto }"></div>
                                                    <b-col cols="12" md="12"  class="p-0">
                                                        <div class="form-group text-center mb-2">
                                                            <b-form-input id="nombre"
                                                                          autocomplete="given-name"
                                                                          name="firstName"
                                                                          @keyup.native="validacionInputDocumento($event)"
                                                                          @keydown.native="validacionInputDocumento($event)"
                                                                          @keypress.native="validacionInputDocumento($event)"
                                                                          v-on:focus.native="isIconFirstName = !isIconFirstName"
                                                                          v-on:blur.native="isIconFirstName = !isIconFirstName"
                                                                          class="input-vehicular iptGral__input iptClient form-control input-id"
                                                                          autofocus
                                                                          type="text"
                                                                          v-model="objClients.firstName"
                                                                          required
                                                                          placeholder="Nombres"></b-form-input>
                                                            <img class="edit-input" src="../static/media/img/flujo/cotizacion/edit.png" alt="icono primer apellido">
                                                        </div>
                                                    </b-col>
                                                    <b-col cols="12" md="6"  class="p-0">
                                                        <div class="form-group text-center mb-2">
                                                            <b-form-input id="apellido-paterno"
                                                                              autocomplete="additional-name"
                                                                              name="lastName"
                                                                              @keyup.native="validacionInputDocumento($event)"
                                                                              v-on:focus.native="isIconIconFirstLastName = !isIconIconFirstLastName"
                                                                              v-on:blur.native="isIconIconFirstLastName = !isIconIconFirstLastName"
                                                                              class="input-vehicular iptGral__input iptClient form-control input-id"                        
                                                                              autofocus
                                                                              type="text"
                                                                              v-model="objClients.firstLastName"
                                                                              required
                                                                              placeholder="Apellido paterno"></b-form-input>
                                                            <img class="edit-input" src="../static/media/img/flujo/cotizacion/edit.png" alt="icono apellido paterno">
                                                        </div>
                                                    </b-col>
                                                    <b-col cols="12" md="6"  class="p-0   pl-lg-7">
                                                        <div class="form-group text-center mb-2 ">
                                                            <b-form-input id="apellido-materno"
                                                                          name="lastName"
                                                                          @keyup.native="validacionInputDocumento($event)"
                                                                          v-on:focus.native="isIconSecondLastName = !isIconSecondLastName"
                                                                          v-on:blur.native="isIconSecondLastName = !isIconSecondLastName"
                                                                          class="input-vehicular iptGral__input iptClient form-control input-id"
                                                                          autocomplete="family-name"
                                                                          autofocus
                                                                          type="text"
                                                                          v-model="objClients.secondLastName"
                                                                          required
                                                                          placeholder="Apellido Materno"></b-form-input>
                                                            <img class="edit-input" src="../static/media/img/flujo/cotizacion/edit.png" alt="icono apellido  materno">
                                                        </div>
                                                    </b-col>
                                                    <b-col cols="12" md="6"  class="p-0">
                                                        <div class="form-group text-center mb-2">
                                                                <b-form-input id="correo-electronico"
                                                                              name="email"
                                                                              @keyup.native="validacionInputDocumento($event)"
                                                                              v-on:focus.native="isIconEmailAddress = !isIconEmailAddress"
                                                                              v-on:blur.native="isIconEmailAddress = !isIconEmailAddress"
                                                                              class="input-vehicular iptGral__input iptClient form-control input-id"
                                                                              autocomplete="on"
                                                                              autofocus
                                                                              type="email"
                                                                              v-model="objClients.emailAddress"
                                                                              required
                                                                              placeholder="Correo Electrónico"></b-form-input>
                                                                <img class="edit-input" src="../static/media/img/flujo/cotizacion/edit.png" alt="icono email">
                                                        </div>
                                                    </b-col>
                                                    <b-col cols="12" md="6"  class="p-0   pl-lg-7" >
                                                        <div class="form-group text-center mb-2 ">
                                                            <b-form-input id="celular"
                                                                          name="phone"
                                                                          @keyup.native="validacionInputDocumento($event)"
                                                                          v-on:focus.native="isIconPhoneNumber = !isIconPhoneNumber"
                                                                          v-on:blur.native="isIconPhoneNumber = !isIconPhoneNumber"
                                                                          class="input-vehicular iptGral__input iptClient form-control input-id"
                                                                          autocomplete="tel"
                                                                          autofocus
                                                                          type="tel"
                                                                          v-model="objClients.phoneNumber"
                                                                          required
                                                                          maxlength="9"
                                                                          placeholder="Celular"></b-form-input>
                                                            <img class="edit-input" src="../static/media/img/flujo/cotizacion/edit.png" alt="icono celular">
                                                        </div>
                                                    </b-col>
                                                </b-row>
                                                <b-row class="ruc" v-bind:class="{ mostrarRuc: mostrarRuc }">
                                                    <div class="capa" v-bind:class="{ isOculto: isOculto }"></div>
                                                    <b-col cols="12" md="6"  class="p-0">
                                                        <div class="form-group text-center mb-2 pr-lg-7">
                                                            <b-form-input id="razon-social"
                                                                          @keyup.native="validacionInputDocumento($event)"
                                                                          v-on:focus.native="isRazonSocial = !isRazonSocial"
                                                                          v-on:blur.native="isRazonSocial = !isRazonSocial"
                                                                          class="input-vehicular iptGral__input iptRUC form-control input-id"
                                                                          autocomplete="on"
                                                                          autofocus
                                                                          type="text"
                                                                          v-model="objClients.firstName"
                                                                          required
                                                                          placeholder="Razón social"></b-form-input>
                                                            <img class="edit-input" src="../static/media/img/flujo/cotizacion/edit.png" alt="icono rezon social">
                                                        </div>
                                                    </b-col>
                                                    <b-col cols="12" md="6" class="p-0">
                                                        <div class="form-group text-center mb-2  pl-lg-7">
                                                            <b-form-input id="direccion"
                                                                          @keyup.native="validacionInputDocumento($event)"
                                                                          v-on:focus.native="isDireccion = !isDireccion"
                                                                          v-on:blur.native="isDireccion = !isDireccion"
                                                                          class="input-vehicular iptGral__input iptRUC form-control input-id"
                                                                          autocomplete="on"
                                                                          autofocus
                                                                          type="text"
                                                                          v-model="objClients.address"
                                                                          required
                                                                          placeholder="Dirección"></b-form-input>
                                                            <img class="edit-input" src="../static/media/img/flujo/cotizacion/edit.png" alt="icono direccion">
                                                        </div>
                                                    </b-col>
                                                    <b-col cols="12" md="6" class="p-0">
                                                        <div class="form-group text-center mb-2  pr-lg-7">
                                                            <b-form-input id="celularEmpresa"
                                                                          @keyup.native="validacionInputDocumento($event)"
                                                                          v-on:focus.native="isIconPhoneNumber = !isIconPhoneNumber"
                                                                          v-on:blur.native="isIconPhoneNumber = !isIconPhoneNumber"
                                                                          class="input-vehicular iptGral__input iptRUC form-control input-id"
                                                                          autocomplete="on"
                                                                          autofocus
                                                                          type="tel"
                                                                          v-model="objClients.phoneNumber"
                                                                          required
                                                                          maxlength="9"
                                                                          placeholder="Celular"></b-form-input>
                                                            <img class="edit-input" src="../static/media/img/flujo/cotizacion/edit.png" alt="icono celular empresa">
                                                        </div>
                                                    </b-col>
                                                    <b-col cols="12" md="6" class="p-0">
                                                        <div class="form-group text-center mb-2  pl-lg-7">
                                                            <b-form-input id="correo-electronicoEmpresa"
                                                                          @keyup.native="validacionInputDocumento($event)"
                                                                          v-on:focus.native="isIconEmailAddress = !isIconEmailAddress"
                                                                          v-on:blur.native="isIconEmailAddress = !isIconEmailAddress"
                                                                          class="input-vehicular iptGral__input iptRUC form-control input-id"
                                                                          autocomplete="on"
                                                                          autofocus
                                                                          type="text"
                                                                          v-model="objClients.emailAddress"
                                                                          required
                                                                          placeholder="Correo Electrónico"></b-form-input>
                                                            <img class="edit-input" src="../static/media/img/flujo/cotizacion/edit.png" alt="icono email empresa">
                                                        </div>
                                                    </b-col>                      
                                                </b-row>
                                            </b-col>
                                        </b-row>            
                                    </div>
                                    <div class="maestra d-none d-lg-block">
                                        <b-col cols="12" class="mb-0  d-none  "  v-bind:class="{mostrarDatosyCheckbox :mostrarDatosyCheckbox}" >
                                            <div class="msgCompletaDatosInicialbase" >                    
                                                <span class="msgCompletaDatosInicial" v-bind:class="{ msgCompletaDatos: msgCompletaDatos}">
                                                    Por favor  completa los datos para continuar
                                                </span>
                                            </div>
                                        </b-col>
                                    </div>
                                </b-row>
                            </b-col>
                        </template>
                    <!--</div>-->
                </b-row>
            </b-container>
        </section>

        <section class="pt-4">
            <b-container style="background:#ffffff; border-radius:12px; box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px;">
                <b-row>
                    <b-col cols="6">
                        <div class="box-cotizacion2">
                            <b-row id="car-price">
                                <b-col cols="12" class="text-left valorComercial">
                                    <p class="box-tooltip mb-4">
                                        <span class="titulo-datosPersonales__titulo">
                                            Fecha de inicio
                                        </span>
                                    </p>
                                    <b-form-input id="fechaCustom"
                                                  style="border:1px solid #333333;" 
                                                  type="date"
                                                  required
                                                  v-model="fechaInicio"
                                                  @change="elegirFecha">
                                    </b-form-input>
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>  
                    <b-col cols="6">
                        <div class="box-cotizacion2">
                            <b-row id="car-price">
                                <b-col cols="12" class="text-left valorComercial">
                                    <p class="box-tooltip mb-4">
                                        <span class="titulo-datosPersonales__titulo">
                                           ¿Tienes un crédito vehicular? Endosar:
                                        </span>
                                    </p>
                                </b-col>
                                <b-col cols="12" class="box-input d-flex justify-content-center pb-0">
                                    <select id="endoso"
                                            class="input-vehicular"
                                            style="background:#fff; height:calc(1.5em + 0.75rem + 2px)"
                                            v-model="endoso">
                                        <option value="-1">Ninguno</option>
                                        <option
                                            v-for="(option, index) in listaNuevaDeEndoso"
                                            :key="index"
                                            v-bind:value="option.id">{{option.name}}</option>
                                    </select>


                                </b-col>
                            </b-row>
                        </div>
                    </b-col>                     
                </b-row>
            </b-container>
        </section>

        <section class="pt-4">
            <b-container style="background:#ffffff; border-radius:12px; box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px;">
                <div class="metodo-pago" >
                    <b-row>
                        <b-col cols="6">
                            <form class="form-horizontal form-content ">
                                <div class="text-center form-content__msg"></div>
                                <h2 class="mt-4  mb-0 text-center form-content__title text-uppercase">
                                    <span class="tag-1">Elige tu plan</span>
                                </h2>
                            </form>
                            <b-row>
                                <b-col cols="12">
                                    <div class="panel-custom  pt-2  pb-3">
                                        <input type="radio" 
                                               id="monthly-radio" 
                                               class="input-radioButon" 
                                               v-model="payment" 
                                               name="priceInformation.model.paymentMethodId" 
                                               value="1"/>  
                                        <input type="radio" 
                                               id="quarterly-radio" 
                                               class="input-radioButon" 
                                               v-model="payment" 
                                               name="priceInformation.model.paymentMethodId" 
                                               value="2"/>                                        
                                        <input type="radio" 
                                               id="annual-radio"  
                                               class="input-radioButon" 
                                               v-model="payment" 
                                               name="priceInformation.model.paymentMethodId" 
                                               value="3"/>                                      
                                        <input type="radio" 
                                               id="biannual-radio"  
                                               class="input-radioButon" 
                                               v-model="payment" 
                                               name="priceInformation.model.paymentMethodId" 
                                               value="4"/>

                                        <b-row id="filter" 
                                               style="padding-left: 12px;" 
                                               class="filter" 
                                               v-if="listCotizacion.discount !== undefined">

                                            <b-col cols=12 style="text-transform:none">
                                                <label for="monthly-radio" class="filter-label monthly radio-button" @click="radioComoPagar($event)">
                                                    <div class="d-flex align-items-center">
                                                        <span class="filter-icon"></span>
                                                        <div style="color:#616161">
                                                            <span class="radio-buttons__text-price">Mensual</span><span> (12 cuotas)</span>
                                                            <div class="precios" style="color:#616161" v-if="listCotizacion.discount.intercorp == 5">
                                                                <span>$&nbsp;{{listCotizacion.policy.monthlyDiscount}}</span>
                                                                <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.monthlyCalculated}}</span> 
                                                            </div>
                                                            <div class="precios" style="color:#616161" v-else-if="listCotizacion.discount.intercorp == 0 && listCotizacion.discount.special == 10">
                                                                <span>$&nbsp;{{listCotizacion.policy.monthly}}</span>
                                                                <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.monthlyCalculated}}</span>                                                             
                                                            </div>                                                            
                                                            <div class="precios" style="color:#616161" v-else-if="listCotizacion.discount.intercorp == 0 && listCotizacion.discount.special == 15">
                                                                <span>$&nbsp;{{listCotizacion.policy.monthly}}</span>
                                                                <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.monthlyCalculated}}</span>                                                             
                                                            </div>
                                                            <div class="precios" style="color:#616161" v-else>
                                                                <span>$&nbsp;{{listCotizacion.policy.monthly}}</span>
                                                                <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.monthlyCalculated}}</span>                                                           
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </b-col>

                                            <b-col cols=12 style="text-transform:none">
                                                <label for="quarterly-radio" class="filter-label quarterly radio-button" @click="radioComoPagar($event)">
                                                    <div class="d-flex align-items-center">
                                                        <span class="filter-icon"></span>
                                                        <div style="color:#616161">
                                                            <span class="radio-buttons__text-price">Trimestral</span><span> (4 cuotas)</span>                                                        
                                                            <div class="precios" style="color:#616161" v-if="listCotizacion.discount.intercorp == 5">
                                                                <span>$&nbsp;{{listCotizacion.policy.quarterlyDiscount}}</span>
                                                                <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.quarterlyCalculated}}</span> 
                                                            </div>
                                                            <div class="precios" style="color:#616161" v-else-if="listCotizacion.discount.intercorp == 0 && listCotizacion.discount.special == 10">
                                                                <span>$&nbsp;{{listCotizacion.policy.quarterly}}</span>
                                                                <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.quarterlyCalculated}}</span>                                                             
                                                            </div>                                                            
                                                            <div class="precios" style="color:#616161" v-else-if="listCotizacion.discount.intercorp == 0 && listCotizacion.discount.special == 15">
                                                                <span>$&nbsp;{{listCotizacion.policy.quarterly}}</span>
                                                                <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.quarterlyCalculated}}</span>                                                             
                                                            </div>
                                                            <div class="precios" style="color:#616161" v-else>
                                                                <span>$&nbsp;{{listCotizacion.policy.quarterly}}</span>
                                                                <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.quarterlyCalculated}}</span>                                                           
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </b-col>

                                            <b-col cols=12 style="text-transform:none">
                                                <label for="annual-radio" class="filter-label annual radio-button" @click="radioComoPagar($event)">
                                                    <div class="d-flex align-items-center">
                                                        <span class="filter-icon"></span>
                                                        <div style="color:#616161">
                                                            <span class="radio-buttons__text-price">Anual </span><span> (1 cuota)</span>
                                                            <div class="precios" style="color:#616161" v-if="listCotizacion.discount.intercorp == 5">
                                                                <span>$&nbsp;{{listCotizacion.policy.annualDiscount}}</span>
                                                                <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.annualCalculated}}</span> 
                                                                <!-- <span>+ GiftCard S/ 150 Oechsle</span> -->
                                                            </div>
                                                            <div class="precios" style="color:#616161" v-else-if="listCotizacion.discount.intercorp == 0 && listCotizacion.discount.special == 10">
                                                                <span>$&nbsp;{{listCotizacion.policy.annual}}</span>
                                                                <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.annualCalculated}}</span>
                                                                <!-- <span>+ GiftCard S/ 150 Oechsle</span>                                                              -->
                                                            </div>                                                            
                                                            <div class="precios" style="color:#616161" v-else-if="listCotizacion.discount.intercorp == 0 && listCotizacion.discount.special == 15">
                                                                <span>$&nbsp;{{listCotizacion.policy.annual}}</span>
                                                                <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.annualCalculated}}</span> 
                                                                <!-- <span>+ GiftCard S/ 150 Oechsle</span>                                                             -->
                                                            </div>
                                                            <div class="precios" style="color:#616161" v-else>
                                                                <span>$&nbsp;{{listCotizacion.policy.annual}}</span>
                                                                <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.annualCalculated}}</span> 
                                                                <!-- <span>+ GiftCard S/ 150 Oechsle</span>                                                           -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </b-col>

                                            <b-col cols=12 style="text-transform:none">
                                                <label for="biannual-radio" class="filter-label biannual radio-button" @click="radioComoPagar($event)">
                                                    <div class="label-bianual">
                                                        <div class="d-flex align-items-center">
                                                            <span class="filter-icon"></span>
                                                            <div style="color:#616161">
                                                                <span class="radio-buttons__text-price">Plan 2 años&nbsp;(1 cuota)</span>
                                                                <div class="precios" style="color:#616161" v-if="listCotizacion.discount.intercorp == 5">
                                                                    <span>$&nbsp;{{listCotizacion.policy.twoYearsDiscount}}</span>
                                                                    <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.twoYearsCalculated}}</span> <br>
                                                                </div>
                                                                <div class="precios" style="color:#616161" v-else-if="listCotizacion.discount.intercorp == 0 && listCotizacion.discount.special == 10">
                                                                    <span>$&nbsp;{{listCotizacion.policy.twoYears}}</span>
                                                                    <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.twoYearsCalculated}}</span> <br>                                                            
                                                                </div>                                                            
                                                                <div class="precios" style="color:#616161" v-else-if="listCotizacion.discount.intercorp == 0 && listCotizacion.discount.special == 15">
                                                                    <span>$&nbsp;{{listCotizacion.policy.twoYears}}</span>
                                                                    <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.twoYearsCalculated}}</span> <br>                                                            
                                                                </div>
                                                                <div class="precios" style="color:#616161" v-else>
                                                                    <span>$&nbsp;{{listCotizacion.policy.twoYears}}</span>
                                                                    <span class="montoTachado" >$&nbsp;{{listCotizacion.policy.twoYearsCalculated}}</span> <br>                                                          
                                                                </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </label>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col cols="6" class="metodo-pago__ingresatarjeta">
                            <form class="form-horizontal form-content ">
                                <div class="text-center form-content__msg"></div>
                                <h2 class="mt-4  mb-0 text-center form-content__title text-uppercase">
                                    <span class="tag-1">Ingresa tu tarjeta de débito o crédito</span>
                                </h2>
                            </form>
                            <div class="panel-custom pt-3 pb-0">
                                <b-row>
                                    <b-col cols="12">
                                        <form class="card-interseguro">   
                                            <div class="form-group-custom">                                                        
                                                <div class="input-group  iptGral box-iptCard">
                                                    <img src="../static/media/img/flujo/como-pagar/icon-tarjeta.png" class="icon-tarjeta"/>
                                                    <input placeholder="Número de la tarjeta" id="cardnumber" @keyup="addingBlankSpaces($event)" v-model="objCardNumber.number" maxlength="19" type="tel" class="form-control  ipt-cartNumber" style="border: 1px solid #333333;"/>                                            
                                                    <img width="30" :src="creditCardImage"/>
                                                    <span class="error-card">error momentaneo</span>
                                                </div>
                                            </div>
                                            <div class="card-custom">
                                                <div class="card-custom__date">
                                                    <div class="form-group-custom">                                                            
                                                        <div id="box-mes" class="input-group  iptGral">   
                                                            <img src="../static/media/img/flujo/como-pagar/icon-mes.png" class="icon-mes"/>
                                                            <b-form-input @focus="focusMES" @blur="blurMES" placeholder="MM" id="cardmes" class="form-control text-uppercase ipt-month" @keyup="keyUpMes()" maxlength="2" v-model="card.expiration_month" type="tel" name="name" style="border: 1px solid #333333;"/>
                                                        </div>
                                                        <div id="focusMES">
                                                            Fecha de vencimiento de tu tarjeta.
                                                        </div>
                                                    </div>
                                                    <div class="form-group-custom  text-right-custom">
                                                        <div class="input-group  iptGral">
                                                            <b-form-input id="cardaño" placeholder="AA" class="form-control text-uppercase ipt-year" @keyup="keyUpCard()"  maxlength="2"  v-model="expiration_year" type="tel" name="name" style="border: 1px solid #333333;"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-custom__cvv">
                                                    <div class="form-group-custom">
                                                        <div id="box-ccv" class="input-group  iptGral"  @click="validCard()">
                                                            <img src="../static/media/img/flujo/como-pagar/icon-ccv.png" class="icon-ccv"/>                                   
                                                            <b-form-input @focus="focusCVV" @blur="blurCVV" placeholder="CVV" variant="custom" id="cardccv" class="form-control text-uppercase ipt-cvv" :disabled="isEnable" @keyup="keyUpCard()" :maxlength="this.numberTest"  v-model="card.cvv" type="tel" name="name" style="border: 1px solid #333333;"/>
                                                        </div>
                                                    </div>     
                                                </div>  
                                                <div  id="focusCVV" >
                                                    <img class="img-fluid" :src="creditCardImageCvv" >
                                                </div>  
                                            </div>
                                            <div class="error-gral">Error momentáneo</div>                 
                                        </form>                    
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </section>

        <section>
            <b-container>
                <b-row class="justify-content-center">
                    <b-col cols="12" class="text-center">
                    </b-col>
                </b-row>
            </b-container>
        </section>
        
        <section>
            <b-container>
                <b-row class="justify-content-center">
                    <b-col cols="6"  class="text-center">
                        <button type="submit" 
                                @click="continuar" 
                                class="btn box-btn__button box-btn--primary" 
                                :disabled='this.isDisabledPayment'>
                                <span>PAGAR ${{this.monto_pagar}}</span>                 
                        </button>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <br>

        <section>
            <b-container>
                <b-row class="justify-content-center">
                    <b-col cols="12" class="text-center">
                        <label>
                            <span>
                                
                                <div v-if="this.listCotizacion.vehicle.gps == 'Y'">
                                    Acepto las <a href="javascript:void(0);"  v-b-modal.modalusopolitica>Condiciones de Uso y Política de Privacidad</a>
                                    <br>, las <a href="javascript:void(0);"  v-b-modal.modalpoliza>Condiciones de la Póliza</a>
                                    <br>y del <a href="javascript:void(0);" v-b-modal.modalgps>Sistema de Rastreo GPS</a>.
                                </div>
                                <div v-else>
                                    Acepto las <a href="javascript:void(0);"  v-b-modal.modalusopolitica>Condiciones de Uso y Política de Privacidad</a>
                                    <br>y las <a href="javascript:void(0);"  v-b-modal.modalpoliza>Condiciones de la Póliza</a>.
                                </div>
                                <br>
                                Autorizo el envío de la póliza electrónica <br> y comunicación de Inteseguro a mi correo.
                            </span>
                        </label>
                    </b-col>
                </b-row>
            </b-container>
            <b-container>
                <div>
                    <b-modal id="modalusopolitica" title="Bootstrap-Vue" hide-footer hide-header ref="hideModal" size="lg">
                        <div class="modal-content modal-datosPersonales">
                            <b-btn class="mt-3" @click="hideModal()" style="background: white; border: none;">
                                <img src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b5f46206abb673bc5374fdb_icon-close.svg" width="40" alt="icon close" class="image-9"/>
                            </b-btn>
                            <div class="modal-head">
                                <div class="modal-divider"></div>
                            </div>
                            <div class="modal-description">
                                <br>
                                <h4 class="text-center">CONDICIONES DE USO Y POLÍTICA DE PRIVACIDAD</h4>
                                <p style="border: 1px solid #666; padding: 12px;">RECOMENDAMOS ENFÁTICAMENTE LEER ÍNTEGRAMENTE ESTE DOCUMENTO ANTES DE ACEPTARLO.</p>
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
                                <h4 class="text-center">REQUISITOS ESENCIALES PARA PODER ACEPTAR LAS CONDICIONES DE USO Y POLÍTICA DE PRIVACIDAD.</h4>
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
                                <br>8. PARTES: Se refiere conjuntamente a INTERSEGURO y al USUARIO.
                                <br>9. POLÍTICA DE PRIVACIDAD: Apartado IV del presente documento, que representa la forma en que INTERSEGURO realiza el tratamiento de sus DATOS PERSONALES.
                                <br>10. PRODUCTOS Y SERVICIOS: Cualquier y todos los productos y/o servicios ofrecidos o comercializados por INTERSEGURO y/o por las empresas que conforman el GRUPO. Con fines meramente enunciativos, los PRODUCTOS Y SERVICIOS de INTERSEGURO comprenden el Seguro Obligatorio de Accidentes de Tránsito, Pólizas de Vida Individual, Pólizas de Rentas Vitalicias, Pólizas de Seguro Vehicular, Pólizas de Seguro de Viaje, entre otros.
                                <br>11. USUARIO: Persona natural que accede, hace uso o se comunica con INTERSEGURO a través de cualquiera de los URL a las que hace referencia el término WEB.
                                <br>12. WEB: Alude de modo general a la página web principal de INTERSEGURO https://www.interseguro.pe y a todas las páginas relacionadas a ésta, como subdominios o relacionadas al dominio principal. No incluye el Libro de Reclamaciones virtual de INTERSEGURO.
                                <br>
                                <br>
                                <br>
                                <h4 class="text-center">II. FINALIDAD DEL CONTRATO</h4>El CONTRATO tiene como finalidades:
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
                                            <td rowspan="2">Se utiliza para almacenar información de navegación (tiempo de conexión, sesiones con ID, tipo de dispositivo, navegador, sistema operativo, etc.).</td>
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
                </div>
                <div>
                    <b-modal id="modalpoliza" title="Bootstrap-Vue" hide-footer hide-header ref="hideModalAutoorizacionPoliza" size="lg">
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
                                Declaro que tengo conocimiento y acepto las Condiciones Generales, Particulares, Especiales y Cláusulas
                                Adicionales relacionadas con la Póliza de Seguros de Interseguro Compañía de Seguros.
                                <br><br>
                                Certifico que las respuestas y declaraciones realizadas en este sitio web son verídicas y que se ajustan
                                a la realidad y de no serlo, cualquier declaración falsa hecha por el Contratante, voluntaria o
                                involuntariamente, invalida esta solicitud y libera de toda responsabilidad y compromiso indemnizatorio
                                a
                                Interseguro Compañía de Seguros, quedando el seguro emitido en virtud de esta solicitud nulo y sin
                                efecto.
                                <br><br>
                                El Contratante otorga su consentimiento para que su Póliza de seguro electrónica, endosos futuros, cartas y/u otra documentación, sean enviados vía correo electrónico desde el dominio @interseguro. Todas aquellos documentos y comunicaciones se entenderán por recibidos en la casilla de correo electrónica declarada por el Contratante, a través de la confirmación del servidor de destino. La póliza contendrá una firma digital y una contraseña de acceso para visualizar el documento, ello garantizará la autenticidad e integridad del documento, de acuerdo con lo estipulado en la Ley N° 27269 - Ley de Firmas y Certificados Digitales. Asimismo, declara conocer las medidas de seguridad que debe adoptar para la recepción de los citados documentos, las ventajas y riesgos asociados a esta modalidad de envío, garantiza haber suministrado un correo electrónico válido en la Solicitud de Seguro, el cual mantendrá activo y con espacio suficiente para recibir la Póliza y se comprometen a informar su nuevo correo electrónico, en caso sea dado de baja o desee modificar la cuenta de correo declarada. 
                            </p>
                            <div class="row"></div>
                        </div>
                    </b-modal>
                </div>
                <div>
                    <b-modal id="modalgps" title="Bootstrap-Vue" hide-footer hide-header ref="hideModalgps" size="lg">
                        <div class="modal-content  modal-confirmaTusDatos">
                            <b-btn class="mt-3 btn-secondary" @click="hideModalgps()"  style="background: white; border: none;">
                                <img src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b5f46206abb673bc5374fdb_icon-close.svg" width="40" alt="icon close" class="image-9">
                            </b-btn>
                            <div class="modal-head">
                                <div class="row">
                                    <h2 class="modal-personal-title col-8 offset-2">
                                        <span class="tag-0">CONDICIONES DEL SERVICIO DE RASTREO</span>
                                    </h2>
                                </div>
                                <div class="modal-divider"></div>
                            </div>
                            <p class="modal-description">
                               El cliente autoriza expresamente a que PROTEMAX pueda entregar a INTERSEGURO, el historial del recorrido del vehículo, 
                               el estado de la batería del vehículo, el reporte del kilometraje por periodo y acumulado del vehículo, el Reporte 
                               histórico de recorrido, el Reporte gráfico de posiciones, la ubicación en tiempo real, el reporte de alerta de velocidad máxima,
                                batería baja y botón de pánico del vehículo  que tiene instalado el dispositivo GPS, siempre y cuando este lo solicite formalmente,
                                 con la finalidad de que sea adjuntado en el Expediente del siniestro reportado. Por su parte PROTEMAX será el único responsable
                                  por la entrega de la información solicitada respecto el vehículo de EL CLIENTE a INTERSEGURO.
                            </p>
                        </div>
                    </b-modal>
                </div>
            </b-container>
        </section>

    </main>
</template>

<style lang="scss">
    main{
        margin-top: 140px;
        //background: #e3eaf5
        background: #f7fafb
    }
    .mail-float{
        position: absolute;
        right: -27px;
        top: -20px;
        background: #0855c4;
        width: 149px;
        height: 42px;
        font-size: 16px;
        color: white;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 0 4px;
        border-radius: 6px;
        img{
            width: 50px;
            padding: 0 8px;
        }
        span{
            line-height: 1;
        }
    }
    .box-input {
        margin-bottom: 1rem;
        background: transparent;
        .input-vehicular {
            border: none;
            border: 1px solid #333333;
            border-radius: 0;
            font-size: 1rem;
            background: transparent;
            width: 100%;
            border-radius: 4px;
        }
    }
    .box-cotizacion2 {
        padding: 15px;
        position: relative;
        z-index: 3;
        opacity: 1;
        transition: opacity 1s ease-out;
        min-height: 100px;
        width: 100%;
        .box-btn {
            margin-top: 18px;
            margin-bottom: 0;
        }
        .box-tooltip {
            position: relative;
            margin-bottom: 4px !important;
            &__valor-comercial {
                font-size: 15px;
                color: #333333;
                //font-weight: 500;
                line-height: 20px;
                width: 100%;
                display: inline-block;
                word-spacing: 2px;
                //font-weight: 600;
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
                //font-weight: 600;
                border: 1px solid #9e9e9e;
                &:hover{
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
                //font-weight: 500;
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
                background: #333333;
            }
            &:before {
                content: "";
                position: absolute;
                width: 2px;
                height: 15px;
                left: 10%;
                bottom: -7px;
                background: #333333;
            }
            .box-edit {
                position: relative;
                width: 100%;
                margin: auto;
                &:after{
                    content: "$";
                    width: 20px;
                    position: absolute;
                    top: 12px;
                    font-size: 20px;
                    left: 32%;
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
                border-bottom: 2px solid #333333;
                border-radius: 0;
                position: relative;
                background: transparent;
                z-index: 9;
                &:hover{
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
                    color: #333333;
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
                color: #333333;
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
                    color: #333333;
                }
            }
        }
        .cotizacion {
            border-radius: 0 0 12px 12px;
            padding: 32px 24px;
            flex-direction: column;
            display: flex;
            &__dto{
                position: absolute;
                top: 0;
                right: 0;
                img{
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
            .cotizacion-datos_dto{
                color: #818181;
                font-family: "omnesregular";
                font-size: 15px;
                //font-weight: 500;
                line-height: 17px;
                text-align: left;
                text-decoration: line-through;
            }
            .priceHead__head--detail {
                .checkbox-aux__descripcion {
                    color: #666666;
                    font-family: "omnesregular";
                    font-size: 10.8px;
                    //font-weight: 500;
                    line-height: 11.7px;
                    width: 135.17px;
                    text-align: left;
                    left: 45px;
                }
                .cobertura-enlace {
                    color: #5e5e5e;
                    font-family: "omnesregular";
                    font-size: 15px;
                    //font-weight: 500;
                    line-height: 16px;
                    text-align: left;
                    margin-top: 16px;
                    a {
                        color: #333333;
                        text-decoration: underline;
                    }
                }
                .endoso {
                    color: #5e5e5e;
                    font-family: "omnesregular";
                    font-size: 15px;
                    //font-weight: 500;
                    line-height: 16px;
                    text-align: left;
                    a{
                        text-decoration: underline;
                        color: #333333;
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
                .etiqueta_dsct{
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
                    color: #00ADEE;
                    font-family: "omnesregular";
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 19px;
                    text-align: left;
                }
                .monto-mensual {
                    font-size: 20px;
                    font-family: "omnesregular";
                    font-size: 57px;
                    font-weight: 900;
                    color: #00ADEE;
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
                    color: #00ADEE !important;
                }
                .igv_anual {
                    font-size: 16px;
                }
                .box-tooltip {
                    position: relative;
                    margin-bottom: 4px !important;
                    &__gps {
                        font-size: 15px;
                        color: #333333;
                        //font-weight: 500;
                        line-height: 20px;
                        width: 100%;
                        display: inline;
                        word-spacing: 2px;
                        //font-weight: 600;
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
                        //font-weight: 600;
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
                        //font-weight: 500;
                        left: 0;
                    }
                }
                .gps {
                    position: relative;
                    color: #5e5e5e;
                    font-family: "omnesregular";
                    font-size: 15px;
                    //font-weight: 500;
                    line-height: 16px;
                    text-align: left;
                    strong{
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
                font-family: "omnesregular";
                font-size: 13px;
                //font-weight: 500;
                line-height: 16px;
                text-align: left;
            }
        }
    }
    .valorComercial {
        padding-top: 10px;
        .checkbox-aux label input[type="checkbox"]:checked + .checkbox-aux__span {
            background: #333333;
        }
        .checkbox-aux__descripcion {
            left: 35px;
        }
    }
    .maestra{
        width: 100%;
        span{
            text-align: center;
        }
    }
    .edit-input{
        position: absolute;
        right: 8px;
        width: 19px;
        cursor: pointer;
        z-index: 0;
    }
    #documento-identidad{
        padding-left: 38px;  
    }
    .checkbox-aux label input[type="checkbox"]:checked + .checkbox-aux__span > .checkbox-aux__span--icon,
    .radio label input[type="radio"]:checked + .checkbox-aux__span > .checkbox-aux__span--icon{
        content: url('../static/media/img/check_white.png');
        position: absolute;
        width: 15px;
        height: 15px;
        left: 1px;
        top: 1px;
        z-index: 999;
    }
    .box-checkbox{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0;
    }
    .steps-box {
        padding-top: 0;
        margin-top: 70px;
    }
    .tabla_modal {
        td {
            border: 1px solid #666666;
        }
        tr {
            &:first-child {
                color: #263238;
                //font-weight: bold;
                background: #bdbdbd;
            }
            td {
                &:nth-child(1) {
                    width: 15%;
                }
                &:nth-child(2) {
                    width: 15%;
                }
                &:nth-child(3) {
                    width: 40%;
                }
            }
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
        .modal-close-cotizacion{
            font-family: 'omnessemibold';
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
            background: #fff;
            box-shadow: 1px 2px 20px 0 rgba(0, 0, 0, 0.6);
            text-align: center;
            line-height: 40px;
        }
        .btn-enviarModal {
            background: #EA0C90;
            color: white;
            width: 160px;
            height: 40px;
            line-height: 40px;
            border: none;
            border-radius: 3px;
        }
        .btn-continuarCompra {
            background: #EA0C90;
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
        background-image: url("../static/media/img/flujo/cotizacion/modalFondo.PNG");
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
            font-family: 'omnesregular';
            padding-bottom: 0;
            margin-bottom: 0;
        }
    }
    /********************************************************************
                        FIN MODAL ENVIAR CORREO
    *********************************************************************/
    .footerv2-desktop{
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
                &:focus{
                    box-shadow: none;
                }
            }
            &:before{
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
    .modal-datosPersonales {
        border: 0 !important;
        .modal-personal-title {
            text-align: center;
        }
        .btn-secondary {
            background: white;
            border: none;
            position: relative;
            height: 26px;
        }
        img {
            position: absolute;
            right: 0;
            top: -10px;
        }
        .modal-description {
            text-align: justify;
        }
        .btn-secondary:focus,
        .btn-secondary:not(:disabled):not(.disabled).active:focus {
            box-shadow: none;
        }
        .btn:focus {
            box-shadow: none;
        }
    }
    .mostrarDni {
        display: flex !important;
    }
    .msgCompletaDatosInicialbase{
        color: red;
        font-size: 13px;
        text-align: center;
        padding-bottom: 4px;
        width: 100%;
    }
    .msgCompletaDatosInicial {
        color: red;
        font-size: 12px;
        text-align: center;
        display: none;
        padding-top: 12px;
        padding-bottom: 4px;
    }
    .msgCompletaDatos {
        display: inline-block !important;
    }
    .aceptaterminos {
        display: inline-block !important;
    }
    .mostrarRuc {
        display: flex !important;
    }
    .dni-ce {
        display: none;
    }
    .ruc {
        display: none;
    }
    .isIconFirstName,
    .isIconIconFirstLastName,
    .isIconSecondLastName,
    .isIconBirthDate,
    .isIconPhoneNumber,
    .isIconEmailAddress,
    .isIconDni,
    .isRazonSocial,
    .isDireccion,
    .isIconRuc {
        display: none;
    }
    .box-ingresaDocumento {
        margin: 1%;
    }
    input:focus {
        border-bottom: #a5a5a9 2px solid;
    }
    .mostrarDatosPersonales {
        display: flex !important;
    }
    .mostrarDatosyCheckbox{
        display: flex !important;
        align-items: center;
    }
    .mostrarEditarCancelar{
        display: flex !important;
        align-items: center;
    }
    .titulo-datosPersonales {
        position: relative;
        width: 100%;
        margin: 12px 0;
        &__titulo {
            color: #00ADEE;
            font-size: 16px;
            //font-weight: 500;
            padding-left: 0;
        }
        &__editarCancelar {
            display: none;
            position: absolute;
            right: 0;
            z-index: 99;
            border: 1px solid #333333;
            border-radius: 6px;
            padding: 0 4px 0 4px;
            text-align: left;
            color: #333333;
            font-size: 14px;
            cursor: pointer;
            img{
                width: 12px;
                margin-left: 11px;
            }
        }
    }
    .mostrar{
        display: flex;
        align-items: center;
    }
    .boxUsuarioEncontrado {
        display: none;
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        span {
            &:nth-child(1) {
                display: inline-block;
                font-size: 16px;
            }
        }
    }
    .isUsuarioEncontrado {
        display: block !important;
    }
    .capa {
        background: #ffffff;
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 5;
        left: 0;
    }
    .box-btn {
        margin: 32px 0 12px 0;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        a {
            width: 80px;
            margin: 0;
        }
        button {
            margin: 0;
        }
    }
    .box-btn__button.box-btn--back {
        padding-left: 0;
        padding: 0;
    }   
    .isOculto {
        display: none;
    }
    .form-group {
        position: relative;
        padding: 0px;
        &:before{
            content: "";
            background: url("../static/media/img/flujo/cotizacion/edit.png");
            height: 30px;
            width: 25px;
            position: absolute;
            right: 0;
            z-index: 0;
        }
        .icon-datos {
            position: absolute;
            left: 8px;
        }
    }   
    .pd_b50 {
        padding-bottom: 50px !important;
    }
    .v-spinner {
        width: 35px;
        height: 35px;
        position: absolute;
        right: 20px;
        top: 4px;
        background: transparent;
    }
    .box-row {
        position: relative;
        .box-btn--dni {
            background-color: #ea0c90;
            color: white;
            height: 45px;
            line-height: 0.5;
            font-size: 15px;
            width: 170px;
            &:disabled {
                background: #9b9b9b;
            }
        }   
        input {
            background: transparent !important;
            &:focus {
                box-shadow: none;
                outline: 0 none;
            }
        }
    }
    .first-box {
        background: #fff;
        border-radius: 10px 10px 0 0;
        .form-group {
            position: relative;
            display: flex;
            align-items: center;
        }
    }
    .checkbox-aux {
        margin-top: 16px;
        padding-top: 0px;
        &__descripcion {
            position: relative;
            line-height: 12px;
            padding-top: 0px;
            font-size: 12px;
            left: 0;
                a {
                    color: #333333;
                    //font-weight: 500;
                    letter-spacing: -0.25px;    
                }
        }
    }
    .second-box {
        padding: 0 16px;
        background: #fff;
        border-radius: 0 0 10px 10px;
        display: none;
        .form-group{
            display: flex;
            align-items: center;
        }
        .checkbox-aux__descripcion {
            width: 310px;
            font-size: 14px;
        }
        .box-autoriza {
            height: 60px;
            margin: 5px 0;
            position: relative;
        }
    }
    .input-id {
        text-align: left;
        border-radius: 4px;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #333333;
        border-radius: .25rem;
    }
    .mostrarPrimerBox {
        display: flex !important;
    }
    .mostrarSegundoBox {
        display: flex !important;
    }
    .iptGral__input {
        padding-left: 6px;
    }
    .form-content__title {
        font-size: 17px;
        .titulo-flujo{
            text-transform: none;
            color: #333;
            font-size: 20px;
            //font-weight: 800;
            font-family: "omnesregular";
        }
    }
    .iptGral__input.dni-segundo{
        background: #e2e2e2 !important;
        color: #7d7c7c !important;
    }
    select:focus, textarea:focus, input[type="text"]:focus, input[type="password"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="date"]:focus, input[type="month"]:focus, input[type="time"]:focus, input[type="week"]:focus, input[type="number"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="color"]:focus, .uneditable-input:focus {
        border-color: #dcdcde;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #d9d9dc;
        outline: 0 none;
        border-bottom: 1px solid #dcdcde;
    }
    .btn:hover {
        color: #fff;
        text-decoration: none;
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
    }
    .copiar-enlace{
        display: inline-block;
        padding: 4px 16px;
        border: 2px solid #333333;
        border-radius: 14px;
        color: #333333;
        width: 340px;
        overflow: hidden;
        height: 30px;
    }
    .dnone{
        display: none;
    }
    .btn-copy{
        position: relative;
    }
    .msg-copy{
        position: absolute;
        right: -19px;
        top: -24px;
        font-size: 12px;
        width: 89px;
        background: #0055C8;
        border-radius: 5px;
        color: white;
    }
    .pago-procesado {
        padding-top: 140px;
        .content{
            background-color: rgba(7, 84, 196, 0.05);
        }  
    }
    .checkbox-aux label input[type="checkbox"]:checked + .checkbox-aux__span > .checkbox-aux__span--icon,
    .radio label input[type="radio"]:checked + .checkbox-aux__span > .checkbox-aux__span--icon{
        content: url('../static/media/img/check_white.png');
        position: absolute;
        width: 15px;
        height: 15px;
        left: 1px;
        top: 1px;
        z-index: 999;
    }
    .card{
        border: none;
        background: #fff;
        width: 100%;
    }
    .planes-tabs{
        border: none;
        a{
            font-family: "omnesregular" !important;
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
            color: #333333;
            background-color: rgba(0, 170, 255, 0.10000000149011612);
            border-bottom: 2px solid #333333;
        }
    }
    .cliploader {
        right: 0;   
    }    
    .montoTachado{
        color: #A7A7A7; text-decoration:line-through; font-weight: 500;
        font-size: 13px;
    }
    #msg-valor {
        display: none;
        position: absolute;
        background: #002e75;
        color: white;
        bottom: 25px;
        left: -118px;
        width: 240px;
        padding: 8px;
        border-radius: 8px;
        font-size: 12px;
        //font-weight: 500;
        z-index: 9;
    }
    .info_detalle {
        position: relative;
        font-size: 15px;
        width: 18px;
        background: transparent;
        height: 18px;
        display: inline-block;
        border-radius: 50%;
        text-align: center;
        line-height: 17px;
        color: #333333;
        //font-weight: 600;
        border: 1px solid #00ADEE;
    }
    .contenedor-custom{
        padding: 0;
    }
    .btn-movil{
        position: sticky;
        bottom: 5px;
        z-index: 100;
        width: 100%;
        height: 50px;
        display: flex; 
        background: transparent;
        &__volver{ 
            width: 80px;
            border-radius: 5px 0 0 5px;
            border: none;
            i{
                color: #333;
            }
        }
        &__pagar{
            position: relative;
            width: 100%;
            padding: 0;
            margin: 0;
            border-radius: 0 5px 5px 0;
            opacity: 1 !important;
            &:disabled{
                background: #777777;
            }
        }
    }
    .boxtitulo{
        width: 100%;
        &__dto5{
            position: absolute;
            top: 10px;
            right: 4px;
            z-index: 9;
        }
        &__principal{
            color: #333333;
            font-size: 16px;
            margin: 0;
            line-height: 1;
            //font-weight: bold;
            line-height: 24px;
        }
        &__secundario{
            color: #616161;
            font-size: 14px;
            line-height: 15px;
            display: inline-block;
            margin: 0;
            padding-top: 8px;
        }
    }
    .metodo-pago{
        border-radius: 20px;
        margin: 0 16px;
        margin-bottom: 24px;
        .imgs{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .msg-alterno{
            font-size: 13px;
            line-height: 16px;            
            //font-weight: 500;
            color: #333333;
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
            width: 210px;
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
            //font-weight: 500;
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
            padding: 24px 16px;
            border-radius: 16px 16px 0 0;
        }  
        &__ingresatarjeta{
            padding: 0px 16px 12px;
            border-radius: 0 0 16px 16px;            
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
                    color: #333333;
                }
            }
        }
    }
    .fechaVigencia{
        display: block;
        position: relative;
        flex-direction: column;
        .text-inicio{
            padding-right: 15px;
            color: #333333;
            //font-weight: bold;
        }
        img{
            position: absolute;
            left: 20px;
            width: 24px;
            z-index: 9;
            bottom: 22px;
        }
        #fechaCustom{
            color: #333333;
            font-size: 16px;
            padding: 5px;
            border: 1px solid #333333;
            margin-bottom: 15px;
            //font-weight: 500;
            box-shadow: none;
            position: relative;
            z-index: 9;
            background: transparent;
            width: 80%;
            padding-left: 40px;
            border-radius: 4px;
        }
        .vdp-datepicker__calendar {
            background: #ffffff;
            left: 0px;
            border-radius: 10px;
            color: #6c757d;
            border: 1px solid #dde1e2;
        }
        .vdp-datepicker__calendar .cell.selected {
            background: #0055c8;
            color: white;
        }
        .vdp-datepicker__calendar .cell.selected:hover {
            background: #0055c8;
            color: white;
        }
    }
    #filter{
        label{
            text-transform: initial;
        }
    }
    #monthly-radio:checked ~ #filter .monthly .igv_aux1, #quarterly-radio:checked ~ #filter .quarterly .igv_aux2, #annual-radio:checked ~ #filter .annual .igv_aux3, #biannual-radio:checked ~ #filter .biannual .igv_aux4{
        display: block !important;
        //font-weight: 500;
    }
    .igv_aux{
        display: none;
    }
    #inicioVigencia{
        height: 45px;
        width: 200px;
        text-align: center;
        border: 2px solid #9e9e9e57;
        border-radius: 5px;
        color: #757575;
    }
    #inicioVigencia:focus{
        border: 2px solid #9e9e9e57;
        box-shadow: none;
    }
    .texto-inferior{
        font-size: 18px;
        //font-weight: 500;
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
    .error-gral{
        background: red;
        width: 100%;
        text-align: center;
        padding-top: 15px;
        height: 40px;
        display: none;
    }
    .error-card{
        background: red;
        width: 100%;
        text-align: center;
        padding-top: 15px;
        height: 40px;
        display: none;
    }
    .card-interseguro, #cardnumber, #cardmes, #cardaño,#cardccv{
        background: #ffffff !important;
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
    .box-checkbox{
        display: flex;
        align-items: center;
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
    .isActivePayment{
        display: none;
    }
    input.form-control.text-uppercase.iptGral__input:focus {
        box-shadow: none;
    }
    .card-interseguro{
        border-radius: 5px;
        .form-label.col-form-label.label-completed{
            padding-left: 0;
            padding-bottom: 0;
        }
        .subtitulo{
            color: #0BD360;
        }
        label{
            color: #333333;
        }
        .slash-symbol{
            position: relative;
            label{
                position: absolute;
                bottom: -4px;
                z-index: 99;
                font-size: 26px;
                padding-bottom: 0;
                color:#333333;
            }
        }
        .ipt-month{
            width: 40px;
            padding: 0 0px 0px 4px;
        }
        .ipt-year{
            width: 65px;
            padding: 0 5px 0 0;
        }
        .ipt-cvv{
            width: 60px;
            padding: 0 0 0 8px;
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
        width: 100%;
        margin-top: 16px;
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
                        height: 36px;
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
    .modal-personal-title {
        font-family: "omnes" ;
        font-size: 24px;
        //font-weight: 900;
        text-align: center;
    }
    .modal-description {
        text-align: left;
        font-family: "omnes" ;
        font-size: 16px;
        //font-weight: 300;
        color: #373737;
        border: 0;
        margin-top: 10px;
    }
    .cart-button-download {
        border: solid 1px #0BD360;
        outline: 0;
        padding: 15px 24px 15px 43px;
        margin: .5rem auto;
        border-radius: 6px;
        font-family: "omnesregular" ;
        font-size: 16px;
        letter-spacing: 1px;
        //font-weight: 900;
        text-align: center;
        cursor: pointer;
        color: #0BD360;
    }
    @media (min-width: 768px) {
        .metodo-pago{            
            &__comoPagar{
                padding: 22px 28px;
            }  
            &__ingresatarjeta{
                padding: 0px 28px;
            }
        }
        .btn-movil{
            display: none;
        }
        .fechaVigencia{
            display: flex;
            .text-inicio{
                padding-right: 15px;
            }
        }
    }
    @media (min-width: 992px) {
        .metodo-pago{
            &__comoPagar{
                border-radius: 20px 0 0 20px;
            }  
            &__ingresatarjeta{
                border-radius:  0 20px  20px 0;
                padding: 0px 28px;
            }
        }
        .contenedor-custom{
            padding: 0 15px;
        } 
        .metodo-pago{
            margin: 0;
            margin-top: 16px;
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
            left: -239px;
            bottom: 63px;
            img{
                width: 100%;
            }
        }
    }
    @media (min-width: 990px){
        .steps-box {
            margin-top: 120px;
        }
    }
    @media (min-width: 1024px){
        .steps-box {
            padding-top: 0;
            margin-top: 140px;
        }
    }
</style>

<script>
import moment from "moment/moment.js";
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
    layout: "InterseguroHome",
    data(){
        return {

            isDisabledEnviarCorreo: false,
            showModal: false,
            objSOAT: {},
            objUtm:{},
            
            policy_id:'',
            objPagoProcesado:{
                "id":null,
                "monto":null
            },
            state: state,
            fechaVigencia:this.date,
            fechaInicio: "",

            listEndoso:[],
            listaNuevaDeEndoso:[],
            endoso:-1,

            placa: '',
            msgMontosActive: false,
            remarketingId: null,
            estado_vehicle:0,

            listModel:{},
            listYear: [],
            listBrand: [],
            msg_atiguedad: true,

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
                    current: 0,
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
            msgMontos: "",

            mostrarSegundoBox:false,
            mostrarPrimerBox:false,
            mostrarDni: false,
            mostrarRuc: false,
            isOculto: false,

            documentoLocal: "",
            msgCompletaDatos: false,
            mostrarEditarCancelar: false,
            mostrarDatosyCheckbox: false,
            mostrarDatosPersonales: false,    
            size: "25px",        
            color: "#333333",
            loading: false,
            longitudDocumento: 0,
            

            endosoSeleccionado: {},
            isIconFirstName: false,
            isIconIconFirstLastName: false,
            isIconSecondLastName: false,
            isIconBirthDate: false,
            isIconPhoneNumber: false,
            isIconEmailAddress: false,
            isIconFirstName: false,
            isIconDni: false,
            isIconRuc: false,
            isDireccion: false,
            isRazonSocial: false,
            objClients: [],
            /**************************************************************
             * ************************ VEHICULO ************************
             * ***********************************************************/
            objVehicle: {
            brandId: null,
            modelId: null,
            modelYear: null,
            useTypeId: null
            },
            objVehicleSelect: {
                marca: "",
                modelo: "",
                riesgo: ""
            },
            /**************************************************************
             * ************************ COTIZACION ************************
             * ***********************************************************/
            listCotizacion: {
                policy: {
                    risk: "",
                    calculated: 0,
                    annual: 0,
                    quarterly: 0,
                    monthly: 0,
                    twoYears: 0
                },
                deducible: 0,
                vehicle: {
                    current: 0,
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
                },
                paymentMethodId: 0
            },
            /**************************************************************
             * ************************ TARJETA ***************************
             * ***********************************************************/
            cardCompleto:true,
            checkDocs: true,
            tamañoCCV:0,
            cvvcci:'CCV',
            cardValitor: false,
            objCulqui:{},
            card_id:'',
            monto_pagar: null,
            isDisabledPayment: false,
            payment: null,
            objCardNumber:{
                number: ''
            },
            creditCardImageCvv: '',
            creditCardImage: '',
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
            numberTest:'',
        }
    },
    computed:{
        isMinimo: function() {
            let minimo = this.clonado.vehicle.minimum
            return minimo.toLocaleString()
        },
        isMaximo: function() {
            let maximo = this.clonado.vehicle.maximum
            return maximo.toLocaleString()
        },
        isEnable: function(){
            return this.cardCompleto;                
        }
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
    methods:{
        delayCotizacion(event, ms) {
            var self = this                                 
            clearTimeout(self.timer)
            self.timer = setTimeout(function () {
                self.cambioInput()
            }, ms )
        },
        delayDocumento(event, ms) {
            this.mostrarDatosPersonales = false
            this.mostrarSegundoBox = false
            this.mostrarPrimerBox = false
            this.mostrarDatosyCheckbox = false
            var self = this;
            clearTimeout(self.timer);
            self.timer = setTimeout(function() {
                self.validacionDocumento(event);
            }, ms);
        },
        delay(event, ms) {
            localStorage.removeItem("monthlyCalculated")
            localStorage.removeItem("current")
            localStorage.removeItem("monthly")
            localStorage.removeItem("quarterly")
            localStorage.removeItem("annual")
            localStorage.removeItem("gps")
            localStorage.removeItem("objPoliza")
            localStorage.removeItem("email")
            localStorage.removeItem("monto_pagar")
            localStorage.removeItem("campaniaTV")
            if(this.placa.length == 6){
                var self = this;
                clearTimeout(self.timer);
                self.timer = setTimeout(function() {
                self.validacionInput(event);
                }, ms);
            } 
        },
        getFinancialInstitution() {
            return new Promise((resolve, reject) => {
                this.$axios
                .get("provider/v1/other/financial-institution")
                .then(res => {
                    if (res) {
                        this.listEndoso = res.data.body                                
                        let arregloUno = []
                        arregloUno = this.listaNuevaDeEndoso.concat(this.listEndoso.banks).concat(this.listEndoso.financial).concat(this.listEndoso.cajas)
                        this.listaNuevaDeEndoso = arregloUno
                        resolve(res)
                    } else {
                        reject(res)
                    }
                })
                .catch(err => {
                    reject(err)
                })
            })
        },
        elegirFecha(date) {
            // let dia = this.fechaInicio.substring(8,10);
            // let mes = this.fechaInicio.substring(5,7);
            // let año = this.fechaInicio.substring(0,4);
            // let inicioVigencia = dia+'/'+mes+'/'+año;
            // this.fechaVigencia = inicioVigencia
            // this.listCotizacion.policy.startDate = this.fechaVigencia
            state.date = date
            this.fechaVigencia = moment(state.date).format("DD/MM/YYYY")
            this.listCotizacion.policy.startDate = this.fechaVigencia
            localStorage.setItem("fechaInicio", this.fechaVigencia)
        },
        getcreateRemarketing() {
            return new Promise((resolve, reject) => {
                this.$axios.post("/provider/v1/vehicle/create-remarketing", {
                    email: this.email
                })
                .then(res => {
                    if (res) {
                        this.remarketingId = res.data.body.id;
                    resolve(res);
                    } else {
                    reject(res);
                    }
                })
                .catch(err => {
                    reject(err);
                });
            });
        },
        maximoImg() {
            if (this.clonado.vehicle.maximum > this.listCotizacion.vehicle.current) {
                this.listCotizacion.vehicle.current =
                this.listCotizacion.vehicle.current + 10
                this.cambioInput()
            } else {
            }
        },
        minimoImg() {
            if (this.clonado.vehicle.minimum < this.listCotizacion.vehicle.current) {
                this.listCotizacion.vehicle.current =
                this.listCotizacion.vehicle.current - 10
                this.cambioInput()
            } else {
            }
        },
        radioComoPagar(event){
            var self = this
            this.ingresarDocumento()
            setTimeout(function(){ 
                if(self.payment == 1){
                    self.monto_pagar = self.listCotizacion.policy.monthlyDiscount > 0 ? self.listCotizacion.policy.monthlyDiscount : self.listCotizacion.policy.monthly
                    localStorage.setItem("monto_pagar",self.payment)
                    localStorage.setItem("campaniaTV",0)
                }else if(self.payment == 2){
                    self.monto_pagar =  self.listCotizacion.policy.quarterlyDiscount > 0 ? self.listCotizacion.policy.quarterlyDiscount : self.listCotizacion.policy.quarterly
                    localStorage.setItem("monto_pagar",self.payment)
                    localStorage.setItem("campaniaTV",0)
                }else if(self.payment == 3){
                    self.monto_pagar = self.listCotizacion.policy.annualDiscount > 0 ? self.listCotizacion.policy.annualDiscount : self.listCotizacion.policy.annual
                    localStorage.setItem("monto_pagar",self.payment)
                    localStorage.setItem("campaniaTV",0)
                }else if(self.payment == 4){
                    if(self.listCotizacion.discount.intercorp == 5){
                        self.monto_pagar = self.listCotizacion.policy.twoYearsDiscount > 0 ? self.listCotizacion.policy.twoYearsDiscount : self.listCotizacion.policy.twoYearsDiscount
                        localStorage.setItem("monto_pagar",self.payment)
                        localStorage.setItem("campaniaTV",1) 
                    }else{
                        self.monto_pagar = self.listCotizacion.policy.twoYears > 0 ? self.listCotizacion.policy.twoYears : self.listCotizacion.policy.twoYears
                        localStorage.setItem("monto_pagar",self.payment)
                        localStorage.setItem("campaniaTV",1) 
                    }
                }else{
                    self.isDisableButton = true
                }
                self.campaniaTV = localStorage.getItem("campaniaTV") 
                self.getClient(localStorage.getItem("documentoLocal")).then(()=>{                        
                    
                }) 
            }, 300);
        },
        ingresarDocumento(){
            if(this.longitudDocumento == 8 || this.longitudDocumento == 9){
                if (this.estado_cliente == 0){
                    this.createClient()
                } else {
                    this.updateClient()
                }
            } else {
                if (this.estado_cliente == 0){
                    this.createRuc()
                } else {
                    this.updateRuc()
                }
            }
        },

        updateClient() {
            return new Promise((resolve, reject) => {
                this.$axios
                .put("provider/v1/client/", {
                    firstName: this.capitalize(this.objClients.firstName),
                    firstLastName: this.capitalize(this.objClients.firstLastName),
                    secondLastName: this.capitalize(this.objClients.secondLastName),
                    phoneNumber: this.objClients.phoneNumber,
                    emailAddress: this.objClients.emailAddress.trim().replace(/ /g,''),
                    documentNumber: this.documentoLocal,
                    remarketingId: this.remarketingId
                })
                .then(res => {
                    if (res.data.code == 0) {
                        resolve(res);
                    } else {
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
                .catch(function(error) {});
            });
        },
        updateRuc() {
            return new Promise((resolve, reject) => {
                this.$axios
                .put("provider/v1/client/", {
                    firstName: this.capitalize(this.objClients.firstName),
                    address: this.objClients.address,
                    phoneNumber: this.objClients.phoneNumber,
                    emailAddress: this.objClients.emailAddress.trim().replace(/ /g,'') ,
                    documentNumber: this.documentoLocal,
                    remarketingId: this.remarketingId
                })
                .then(res => {
                    if (res.data.code == 0) {
                        resolve(res);
                    } else {
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
                .catch(function(error) {});
            });
        },
        createRuc() {
            return new Promise((resolve, reject) => {
                this.$axios
                .post("provider/v1/client/", {
                    firstName: this.capitalize(this.objClients.firstName),
                    address: this.objClients.address,
                    phoneNumber: this.objClients.phoneNumber,
                    emailAddress: this.objClients.emailAddress.trim().replace(/ /g,''),
                    documentNumber: this.documentoLocal,
                    remarketingId: this.remarketingId
                })
                .then(res => {
                    if (res.data.code == 0) {
                        resolve(res);
                    } else {
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
                .catch(function(error) {});
            });
        },
        createClient() {
            return new Promise((resolve, reject) => {
                this.$axios
                .post("provider/v1/client/", {
                    firstName: this.capitalize(this.objClients.firstName),
                    firstLastName: this.capitalize(this.objClients.firstLastName),
                    secondLastName: this.capitalize(this.objClients.secondLastName),
                    phoneNumber: this.objClients.phoneNumber,
                    emailAddress: this.objClients.emailAddress.trim().replace(/ /g,''),
                    documentNumber: this.documentoLocal,
                    remarketingId : this.remarketingId
                })
                .then(res => {
                    if (res.data.code == 0) {
                        resolve(res);
                    } else {
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
                .catch(function(error) {});
            });
        },
        capitalize(a) {
            return a.charAt(0).toUpperCase() + a.slice(1);
        },

        cambioInput(evt) {
            this.isEnableNext = true
            if (this.listCotizacion.vehicle.current > this.clonado.vehicle.maximum ||
                this.listCotizacion.vehicle.current < this.clonado.vehicle.minimum) {
                this.msgMontos = "El monto ingresado esta fuera del rango permitido"
                this.msgMontosActive = true
                var self = this
                this.isDisabled = true
            } else {
                //localStorage.setItem("current", this.listCotizacion.vehicle.current)
                this.getCotizacion(this.listCotizacion.vehicle.current).then(() => {
                    this.msgMontos = ""
                    this.msgMontosActive = false
                    this.clonado.policy.risk = this.listCotizacion.policy.risk
                    this.clonado.policy.calculated = this.listCotizacion.policy.calculated
                    this.clonado.policy.annual = this.listCotizacion.policy.annual
                    this.clonado.policy.quarterly = this.listCotizacion.policy.quarterly
                    this.clonado.policy.monthly = this.listCotizacion.policy.monthly
                    this.clonado.deducible = this.listCotizacion.deducible
                    this.clonado.vehicle.current = this.listCotizacion.vehicle.current
                    this.clonado.vehicle.minimum = this.clonado.vehicle.minimum
                    this.clonado.vehicle.maximum = this.clonado.vehicle.maximum
                    this.clonado.adjust = this.listCotizacion.adjust
                    localStorage.setItem("objPoliza", JSON.stringify(this.clonado))
                    this.isEnableNext = false
                })
              this.isDisabled = false
            }
        },
        validacionDocumento(event) {      
            this.procesar(event.target.value);
        },
        procesar(value) {      
            this.documentoLocalSinEspacios = this.documentoLocal
              .replace(/[^0-9\s]/gi, "")
              .replace(/[_\s]/g, "");

            if (!isNaN(value) && this.campoDocumentoInicial !== value) {
              this.campoDocumentoInicial = value;
              this.isOculto = false;
              let documento = this.documentoLocalSinEspacios;
              let tamaño = documento.length;
              this.longitudDocumento = tamaño;
                if(tamaño < 8) {
                    this.todoCompleto = false;
                    this.loading = false
                    this.isOculto = false
                    this.mostrarPrimerBox = false   
                    this.mostrarSegundoBox = false         
                    this.objClients.firstName = ""
                    this.objClients.firstLastName = ""
                    this.objClients.secondLastName = ""
                    this.objClients.phoneNumber = ""
                    this.objClients.emailAddress = ""
                    this.objClients.address = ""
                    this.mostrarDni = false
                    this.isUsuarioEncontrado = false
                    this.mostrarDatosyCheckbox = false
                    this.mostrarEditarCancelar = false
                }
                if (tamaño >= 8) {                
                    var self = this;
                    self.loading = true;
                    tamaño = documento.length;
                    if (tamaño == 8 || tamaño == 9) {
                        self.getClient().then(() => {
                            self.mostrarDatosPersonales = false    
                            self.loading = false;
                            self.isOculto = true;
                            self.mostrarDni = true;
                            self.mostrarRuc = false;
                            if(self.estado_cliente == 1){
                                if (self.validarClient()) {
                                    self.mostrarDatosPersonales = true
                                    self.mostrarDatosyCheckbox = true
                                    self.msgCompletaDatos = false
                                    self.mostrar = true  
                                    self.mostrarPrimerBox = true  
                                    self.mostrarSegundoBox = false    
                                    self.mostrarEditarCancelar = true                    
                                    if(self.checkPoliticasPrivacidad == true){
                                        self.isDisableButton = false                    
                                    }else{
                                        self.isDisableButton = true                     
                                    }
                                } else {
                                    self.mostrarDatosPersonales = false
                                    self.mostrarDatosyCheckbox = true
                                    self.aceptaterminos = false
                                    self.msgCompletaDatos = true
                                    self.mostrar = false
                                    self.mostrarPrimerBox = false
                                    self.mostrarSegundoBox = true
                                    self.isSecondBox = true;
                                    self.isDisableButton = true;
                                }
                            }else{
                                self.mostrarEditarCancelar = false
                                self.mostrarDatosPersonales = false
                                self.mostrarDatosyCheckbox = true
                                self.mostrarSegundoBox = true
                                self.mostrar = false
                                self.aceptaterminos = false
                                self.msgCompletaDatos = true
                            }
                        }).catch((res)=>{});
                    } else if (tamaño == 10) {
                        self.mostrarDatosPersonales = false
                        self.mostrarDatosyCheckbox = false
                        self.mostrarDni = false;
                        self.mostrarRuc = false;
                        self.loading = false;
                        self.mostrarPrimerBox = false   
                        self.mostrarSegundoBox = false 
                        self.mostrarEditarCancelar = false
                    } else if (tamaño == 11) {            
                        self.getClient().then(() => {
                        self.mostrarDatosPersonales = false
                        self.msgCompletaDatos = false            
                        self.loading = false;
                        self.isOculto = true;
                        self.mostrarDni = false;
                        self.mostrarRuc = true;
                        if(self.estado_cliente == 1){              
                            if (self.validarRUC()) {
                                self.mostrarEditarCancelar = true
                                self.mostrarDatosPersonales = true
                                self.mostrarDatosyCheckbox = true
                                self.msgCompletaDatos = false
                                self.mostrar = true  
                                self.mostrarPrimerBox = true  
                                self.mostrarSegundoBox = false  
                                self.aceptaterminos = true
                                if(self.checkPoliticasPrivacidad == true){
                                    self.isDisableButton = false
                                }else{
                                    self.isDisableButton = true
                                }
                            } else {
                                self.mostrarEditarCancelar = false
                                self.mostrarDatosPersonales = false
                                self.mostrarDatosyCheckbox = true
                                self.aceptaterminos = false
                                self.msgCompletaDatos = true
                                self.mostrar = false
                                self.mostrarPrimerBox = false
                                self.mostrarSegundoBox = true
                                self.isSecondBox = true;
                                self.isDisableButton = true;
                            }
                        }else{
                            self.mostrarEditarCancelar = false
                            self.mostrarDatosPersonales = false
                            self.mostrarDatosyCheckbox = true
                            self.mostrarSegundoBox = true
                            self.mostrar = false
                            self.aceptaterminos = false
                            self.msgCompletaDatos = true
                        }
                    }).catch((res)=>{});
                    } else {
                        return false;
                    }
                } 
            } else {
                return false;
            }
        },
        continuar (evt) {                
            //this.opacidad =true
            //this.isDisabledPayment = false
            //evt.preventDefault();
            //localStorage.setItem("check_payment",this.payment)                
            this.listCotizacion.zeroKm = this.zeroKm
            this.listCotizacion.paymentMethodId = this.payment
            this.listCotizacion.policy.startDate = this.fechaVigencia
            //localStorage.setItem('objPoliza', JSON.stringify(this.listCotizacion))
            if (this.endosoSeleccionado.id != undefined  || this.endosoSeleccionado.id != null) {
                let endosoSeleccionado = this.endosoSeleccionado
                this.listCotizacion.financialInstitution = endosoSeleccionado.id
            }             
            this.createPolicy().then((res)=>{
                if (res.data.code == 0) {
                    this.objPagoProcesado.id = this.policy_id
                    this.objPagoProcesado.monto = this.listCotizacion.policy.annual
                    this.isDisabledPayment = true
                    this.card.expiration_year = '20'+this.expiration_year
                    this.card.email = this.objClients.emailAddress
                    this.isisplayNoneLoader = false; 
          
                        this.getTokenCulqi(this.card).then((res)=>{
                            if (res.data.object === 'error') {
                                this.$swal({
                                    title: 'Oops...',
                                    text: res.data.user_message,
                                    type: 'error',
                                    showCancelButton: false,
                                    confirmButtonColor: '#2177CC',
                                    confirmButtonText: 'OK'
                                })
                                this.isisplayNoneLoader = true
                            }else{
                                this.getClient(this.documentoLocal).then(()=>{
                                    this.getCard().then(()=>{
                                        this.createEnrollment().then(() =>{
                                            this.comoPagarDatalayer()
                                            localStorage.removeItem('anio');
                                            localStorage.removeItem('current');
                                            localStorage.removeItem('estado_cliente');
                                            localStorage.removeItem('estado_cliente_ga');
                                            localStorage.removeItem('estado_vehicle');
                                            localStorage.removeItem('monto_pagar');
                                            localStorage.removeItem('objVeh');
                                            localStorage.removeItem('placa');
                                            localStorage.removeItem('remarketing');  
                                            localStorage.removeItem('annual');
                                            localStorage.removeItem('monthly');
                                            localStorage.removeItem('monthlyCalculated');                                              
                                            localStorage.removeItem('quarterly');
                                            localStorage.removeItem('objPoliza');
                                            localStorage.removeItem('originDocumentNumber');
                                            localStorage.removeItem('email');
                                            //this.nombreCliente = this.objClient.firstName
                                            this.objPagoProcesado.id = this.policy_id
                                            this.objPagoProcesado.monto = this.listCotizacion.policy.annual  
                                            this.getPagoProcesado().then(() => {
                                                this.$swal({
                                                    title: "OK",
                                                    text: "PAGO REALIZADO - POLIZA: " + this.transaccion["policyNumber"],
                                                    type: "success",
                                                    showCancelButton: false,
                                                    confirmButtonColor: "#2177CC",
                                                }).then(()=>{
                                                    location.reload(true);
                                                });
                                            });
                                        });
                                    })
                                })
                                
                            }            
                        })
                }else{      
                    this.opacidad =false                  
                    this.$swal({
                        title: 'Oops...',
                        text: res.data.message,
                        type: 'error',
                        showCancelButton: false,
                        confirmButtonColor: '#2177CC',
                        confirmButtonText: 'OK'
                    })         
                }                    
            })    

        },
        comoPagarDatalayer(){
            if(this.payment == 1){
                this.payment_datalayer ='mensual'
            }else if(this.payment == 2){
                this.payment_datalayer ='trimestral'
            }else if(this.payment == 3){
                this.payment_datalayer = 'annual'
            }else if(this.payment == 4){
                this.payment_datalayer = 'biannual '
            }
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'como_pagar',
                'cuota': this.payment_datalayer, // mensual, trimestral, annual (string)
                'ecommerce': {
                    'checkout_option': { // nota el cambio aqui en codigo "checkout_option"
                        'actionField': {
                            'option':this.payment_datalayer
                        }, // 4to paso en el embudo. En el option enviar tipo de cuota.
                    }
                }
            });
        },
        getCard (item) {
            return new Promise((resolve, reject) => {
            this.$axios.post('culqi/v1/cards', {
                "customer_id": this.documentoLocal,
                "details": {                        
                    "card_brand": this.objCulqui.iin.card_brand,
                    "card_category": this.objCulqui.iin.card_category,
                    "card_number": this.objCulqui.card_number,                        
                    "card_type": this.objCulqui.iin.card_type,                        
                },
                "token_id":  this.objCulqui.id,
                "policyId":  this.policy_id
            }).then(res => {
                    if (res.data.code == 0) {
                        this.card_id = res.data.body.id;
                        resolve(res)
                    }else{
                        this.opacidad =false                            
                        this.isisplayNoneLoader = true   
                    }
                })
                .catch(err => {
                    this.opacidad =false
                    this.$swal({
                        title: 'Oops...',
                        text: err.data.message,
                        type: 'error',
                        showCancelButton: false,
                        confirmButtonColor: '#2177CC',
                        confirmButtonText: 'OK'
                    })                
                    reject(err)                        
                })
            })
        },
        getPagoProcesado() {
            return new Promise((resolve, reject) => {
                this.$axios
                .get("manage/v1/policy/details/" + this.objPagoProcesado.id)
                .then(res => {
                    if (res.data.code == 0) {
                    this.transaccion = res.data.body;
                    resolve(res);
                    } else {
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
                .catch(err => {
                    reject(err);
                });
            });
        },
        getTokenCulqi (item) {
            return new Promise((resolve, reject) => {
            this.$axios.post('https://secure.culqi.com/v2/tokens', item,{
                    headers: { 'Authorization': 'Bearer '+process.env.culqiPK }
                })
                .then(res => {
                    if (res) {
                        this.objCulqui = res.data;
                        resolve(res)
                    } else {
                        this.opacidad =false        
                        this.$swal({
                            title: 'Oops...',
                            text: res.data.merchant_message,
                            type: 'error',
                            showCancelButton: false,
                            confirmButtonColor: '#2177CC',
                            confirmButtonText: 'OK'
                        })            
                        reject(res)
                    }
                })
                .catch (err => {
                    this.opacidad =false
                    this.$swal({
                        title: 'Oops...',
                        text: "Tenemos un problema, intente nuevamente en unos minutos",
                        type: 'error',
                        showCancelButton: false,
                        confirmButtonColor: '#2177CC',
                        confirmButtonText: 'OK'
                    })    
                    this.isisplayNoneLoader = true

                })
            })
        },
        createEnrollment() {
            return new Promise((resolve, reject) => {
                this.$axios.put('culqi/v1/charges/payment/enrollment', {                
                    "card_id": this.card_id,                
                    "policy_id": this.policy_id,
                    "quota_number": 1,
                    "remarketingId":this.remarketingId,
                    "originDocumentNumber": this.originDocumentNumber,
                    "twoYearsAccept": this.campaniaTV == 1 ? "Y" : "N",
                    "discountType":this.discountType,
                    "businessId": localStorage.getItem("businessId")
                }).then(res => {
                    if (res.data.code == 0) {
                        resolve(res)
                    }else {
                        this.opacidad =false
                        this.$swal({
                        title: 'Oops...',
                        text: res.data.message,
                        type: 'error',
                        showCancelButton: false,
                        confirmButtonColor: '#2177CC',
                        confirmButtonText: 'OK'
                    }) 
                    this.isisplayNoneLoader = true   
                    }
                })
                .catch(err => {
                    reject(err)
                })
            })
        },
        createPolicy () {                
            return new Promise((resolve, reject) => {
            this.$axios.post('manage/v1/policy/payment/'+ this.placa.toUpperCase()+'/'+ this.documentoLocal, this.listCotizacion)                
                .then(res => {
                    if(res){
                         if (res.data.code == 0) {
                            this.policy_id = res.data.body.id;
                            //localStorage.setItem("producto",this.policy_id)
                            resolve(res)
                        }else{
                            this.$swal({
                                title: 'Oops...',
                                text: res.data.message,
                                type: 'error',
                                showCancelButton: false,
                                confirmButtonColor: '#2177CC',
                                confirmButtonText: 'OK'
                            })                            
                        }          
                    }else{
                        reject(err)
                    } 
                })
                .catch(err => { 
                    this.opacidad =false
                    reject(err)
                })
            })
        },
        validacionInput(event) {
            this.placa = this.placa.replace(/[^a-z0-9\s]/gi, "").replace(/[_\s]/g, "");
            var longitudDePlaca = this.placa.length;
            if (longitudDePlaca > 6) {
                this.placa = this.placa.slice(0, 6);
            } else if (longitudDePlaca == 6) {
                event.preventDefault();
                this.getVehicle()
                .then(() => {
                    this.getBrand()
                    this.getYear()
                    this.getUses()
                    this.objVehicle.brandId = -1
                    this.objVehicle.modelYear = -1
                    this.objVehicle.modelId = -1
                });
            }
        },
        validacionInputDocumento(event) {  
            if (this.longitudDocumento == 8 || this.longitudDocumento == 9) {
                this.objClients.phoneNumber = this.objClients.phoneNumber != null || undefined 
                    ? this.objClients.phoneNumber.replace(/[^0-9\s]/gi, "").replace(/[_\s]/g, "")
                    : "";
                if (this.validarClient()){
                    this.msgCompletaDatos = false
                    if(this.checkPoliticasPrivacidad == true) {
                        this.isDisableButton = false;
                        this.aceptaterminos = false
                    }else{
                        this.aceptaterminos = true
                    }
                } else {
                    this.aceptaterminos = false
                    this.msgCompletaDatos = true    
                    this.isDisableButton = true
                }
            } else if (this.longitudDocumento == 11) {
                if (this.validarRUC()){
                    this.msgCompletaDatos = false
                    if (this.checkPoliticasPrivacidad == true) {
                        this.isDisableButton = false;
                        this.aceptaterminos = false
                    }else{
                        this.aceptaterminos = true
                    }          
                } else {
                    this.aceptaterminos = false
                    this.msgCompletaDatos = true
                    this.isDisableButton = true;
                }
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
                    if(this.objClients.phoneNumber.charAt(0)==9 && this.objClients.phoneNumber.length == 9){
                        //localStorage.setItem("checkgss", 1)
                        localStorage.setItem("email", this.objClients.emailAddress)
                    }
                    this.msgCompletaDatos = false
                    return true;
                } else {
                    this.msgCompletaDatos = true
                    //localStorage.setItem("checkgss", 0)
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
                    if(this.objClients.phoneNumber.charAt(0)==9 && this.objClients.phoneNumber.length == 9){
                        //localStorage.setItem("checkgss", 1)
                        localStorage.setItem("email", this.objClients.emailAddress)
                    } 
                    return true;
                } else {
                    return false;
                }
            }
        },
        getClient() {
            return new Promise((resolve, reject) => {
                this.$axios
                .get("provider/v1/client/" + this.documentoLocal+"?discountType="+this.discountType )
                .then(res => {
                    if (res.data.code == 0) {
                        this.objClients = res.data.body;
                        this.estado_cliente = 1;
                        if(this.objClients.emailAddress  != null ){
                            this.objClients.emailAddress = this.objClients.emailAddress.trim().replace(/ /g,'')
                        }
                        //localStorage.setItem("estado_cliente", this.estado_cliente);
                        //localStorage.setItem("estado_cliente_ga", 1);
                        if(res.data.body.validCtaSueldo == "N"){
                            localStorage.removeItem("cuentasueldo",)
                        }else if(res.data.body.validCtaSueldo == "Y"){
                            localStorage.setItem("cuentasueldo","Y")
                        }else{}
                        resolve(res);
                    } else if (res.data.code == 201) {              
                        this.estado_cliente = 0;
                        //localStorage.setItem("estado_cliente_ga", 0);
                        this.objClients = {};
                        //localStorage.setItem("estado_cliente", this.estado_cliente);
                        resolve(res);
                    } else {
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
                .catch(err => {
                  reject(err);
                });
            });
        },
        getVehicle() {
            return new Promise((resolve, reject) => {
                this.$axios
                .post("provider/v1/vehicle/plate/" + this.placa.toUpperCase(), {
                    email: this.email
                })
                .then(res => {
                    if (res.data.code == 0) {
                        if (res.data.body.exists == false) {
                            this.estado_vehicle = 0;
                            resolve(res);
                        } else {
                            this.objVehicle = res.data.body
                            this.estado_vehicle = 1
                            if (this.objVehicle.activePolicy === true) {
                                this.$nuxt.$router.push({path: "/placa-registrada"})
                            } else {
                                this.objVehicle = res.data.body
                            }
                            resolve(res);
                        }
                    } else {
                        this.$swal({
                            title: "Oops...",
                            text: res.data.message,
                            type: "error",
                            showCancelButton: false,
                            confirmButtonColor: "#2177CC",
                            confirmButtonText: "OK"
                        })
                    }
                })
                .catch(err => {
                    this.$swal({
                        title: "",
                        text: err.message,
                        type: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#2177CC",
                        confirmButtonText: "OK"
                    });
                    reject(err)
                });
            });
        },
        getBrand() {
            return new Promise((resolve, reject) => {
                this.$axios
                .get("provider/v1/other/brand/group")
                .then(res => {
                    if(res){
                        this.listBrand = res.data.body
                        resolve(res)
                    } else {
                        reject(res)
                    }
                })
                .catch(err => {
                    reject(err)
                })
            })
        },
        getYear() {
            return new Promise ((resolve, reject) => {
                this.$axios
                .get("provider/v1/other/years")
                .then(res => {
                    if(res){
                        this.listYear = res.data.body
                        resolve(res)
                    } else {
                        reject(err)
                    }
                })
                .catch(err =>{
                    reject(err)
                })
            })

        },
        ocultarTooltip() {
            document.getElementById("msg-valor").style.display = "none"
        },
        mostrarTooltip() {
            document.getElementById("msg-valor").style.display = "block"
        },
        getUses() {
            return new Promise ((resolve,reject) => {
                this.$axios
                .get("provider/v1/other/uses")
                .then(res => {
                    if (res) {
                        this.listUses = res.data.body
                        resolve(res)
                    } else {
                        reject(res)
                    }
                })
                .catch(err => {
                    reject(err)
                })
            })
        },
        getCotizacion(current = null) {
            return new Promise((resolve, reject) => {
                this.remarketingId = this.remarketingId == null ? "" : this.remarketingId
                this.discountType = this.discountType == null ? "" : this.discountType
                let url = current == null
                    ? "provider/v2/policy/price-plans/" + this.placa +"/" + this.objVehicle.modelYear +"?remarketingId=" + this.remarketingId
                    : "provider/v2/policy/price-plans/" + this.placa + "/" + this.objVehicle.modelYear +"?assignedPrice=" + current + "&remarketingId=" + this.remarketingId;
                this.$axios
                  .get(url + "&discountType=" + this.discountType + "&businessId=" + localStorage.getItem("businessId"))
                  .then(res => {
                    if (res.data.code == 0) {
                        this.listCotizacion = res.data.body.allRisk
                        if (this.listCotizacion.policy.risk == "Riesgo Foreigner") {
                            this.objVehicleSelect.riesgo = this.listCotizacion.policy.risk
                        } else {
                            this.objVehicleSelect.riesgo = this.listCotizacion.policy.risk
                        }
                        localStorage.setItem("monthlyCalculated",this.listCotizacion.policy.monthlyCalculated)
                        localStorage.setItem("current", this.listCotizacion.vehicle.current )
                        localStorage.setItem("monthly", this.listCotizacion.policy.monthly )
                        localStorage.setItem("quarterly", this.listCotizacion.policy.quarterly )
                        localStorage.setItem("annual", this.listCotizacion.policy.annual )
                        localStorage.setItem("gps", this.listCotizacion.vehicle.gps )
                        resolve(res)
                    } else if (res.data.code == 213) {
                        this.$swal({
                            title: "Oops...",
                            text: res.data.message,
                            type: "error",
                            showCancelButton: false,
                            confirmButtonColor: "#2177CC",
                            confirmButtonText: "OK"
                        })
                        this.$nuxt.$router.push({
                            path: '/',
                        })
                    } else {
                        this.$swal({
                            title: "Oops...",
                            text: res.data.message,
                            type: "error",
                            showCancelButton: false,
                            confirmButtonColor: "#2177CC",
                            confirmButtonText: "OK"
                        })
                    }
                })
                .catch(err => {
                    reject(err)
                })
            })
        },
        updateModel(e) {
            if (this.objVehicle.brandId != -1 && this.objVehicle.modelYear != -1) {
                this.getModelLocal().then(() => {})
            } else {
            }
            this.listModelBrand()
        },
        getModelLocal() {
            return new Promise ((resolve, reject) => {
                this.$axios
                .post("provider/v1/other/models-available/" + this.objVehicle.brandId + "/" + this.objVehicle.modelYear)
                .then(res => {
                    if(res) {
                        this.listModel = res.data.body
                        for(let index = 0; index < this.listModel.length; index++) {
                            this.listModelId.push(this.listModel[index].id)
                        }
                        resolve(res)
                    } else {
                        reject(res)
                    }
                })
                .catch(err => {
                    if (this.listModel == undefined) {
                        this.$swal({
                            title: "Oops...",
                            text: `Por el momento no podemos asegurar ese modelo`,
                            type: "warning",
                            showCancelButton: false,
                            confirmButtonColor: "#2177CC",
                            confirmButtonText: "OK"
                        })
                    }
                    reject(err)
                })
            })
        },
        listModelBrand() {
            for (var i = 0; i < this.listBrand.length; i++) {
                if (this.listBrand[i].id === this.objVehicle.brandId) {
                    this.objVehicle.brand = this.listBrand[i].name
                    this.objVehicleSelect.marca = this.objVehicle.brand
                }
            }
            for (var i = 0; i < this.listModel.length; i++) {
                if (this.listModel[i].id === this.objVehicle.modelId) {
                    this.objVehicle.model = this.listModel[i].name
                    this.objVehicleSelect.modelo = this.objVehicle.model
                }
            }
        },
        editarCancelar() {
            this.mostrarPrimerBox = !this.mostrarPrimerBox;
            this.mostrarSegundoBox = !this.mostrarSegundoBox;
        },
        clearPlaceholderDNI(eve) {
            eve.target.placeholder = "";
        },
        placeholderDNI(event) {
            this.isIconDni = !this.isIconDni;
            if (process.client) {
                document.getElementById("documento-identidad").placeholder = "Ingresa tu DNI, CE o RUC";
            }
        },
        updateVehicle() {
            return new Promise((resolve, reject) => {
                this.$axios
                .put("provider/v1/vehicle", {
                    brandId: this.objVehicle.brandId,
                    modelId: this.objVehicle.modelId,
                    modelYear: this.objVehicle.modelYear,
                    useTypeId: 1,
                    plateNumber: this.placa
                })
                .then(function(response) {
                    resolve(response)
                })
                .catch(function(error) {})
            })
        },
        validarSelect() {
            if (this.objVehicle.modelId !== null) {
                this.is_border_marcaAno = false
                this.modeloFaltante = false
                this.isDisabled = false
            } else {
                this.isDisabled = true
                this.is_border_marcaAno = true
                this.modeloFaltante = true
            }

            if (this.objVehicle.brandId !== null &&
                this.objVehicle.modelId &&
                this.objVehicle.modelYear !== null) {
                if (this.estado_vehicle == 1) {
                    this.updateVehicle().then(() => {
                        (this.objVehicle.brandId = this.objVehicle.brandId),
                        (this.objVehicle.modelId = this.objVehicle.modelId),
                        (this.objVehicle.modelYear = this.objVehicle.modelYear),
                        (this.objVehicle.plateNumber = this.placa)
                        this.getCotizacion().then(() => {
                            this.clonado = Object.assign({}, this.listCotizacion)
                        })
                    })
                } else {
                    this.createVehicle().then(() => {
                        (this.objVehicle.brandId = this.objVehicle.brandId),
                        (this.objVehicle.modelId = this.objVehicle.modelId),
                        (this.objVehicle.modelYear = this.objVehicle.modelYear),
                        (this.objVehicle.plateNumber = this.placa)
                        this.getCotizacion().then(() => {
                            this.estado_vehicle = 1
                            this.clonado = Object.assign({}, this.listCotizacion) 
                        })
                    })
                }
                this.isEnableNext = false
            } else {
                this.isEnableNext = true
            }
            this.listModelBrand()
        },
        createVehicle() {
            return new Promise((resolve, reject) => {
                this.$axios
                .post("provider/v1/vehicle", {
                    brandId: this.objVehicle.brandId,
                    modelId: this.objVehicle.modelId,
                    modelYear: this.objVehicle.modelYear,
                    useTypeId: 1,
                    plateNumber: this.placa
                })
                .then(function(response) {
                      resolve(response)
                })
                .catch(function(error) {})
            })
        },
        blurCVV(){        
            if(process.client){
                document.getElementById("focusCVV").style.display = "none"
            }
        },
        focusCVV(){      
            if(process.client){  
                document.getElementById("focusCVV").style.display = "block"
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
        focusMES(){},
        blurMES(){ 
            if(process.client){       
                document.getElementById("focusMES").style.display = "none"
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
                this.creditCardImage = require('../static/media/img/flujo/metodo-pago/' + cardType + '.png')
                this.creditCardImageCvv = require('../static/media/img/flujo/como-pagar/' + cardType+'cvv' + '.png')
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
        enviarMail() {
            if(this.objClients.emailAddress !== ""){
                this.isDisabledEnviarCorreo = true
                this.objUtm = {"1":"utm_campaign=retail_cotización"}
                this.remarketingv2(this.objClients.emailAddress.trim().replace(/ /g,''), 1).then(()=>{
                    this.enviarMailing().then(() => {  
                        //this.$nuxt.$router.push("/cotiza/ingresa-tu-documento");
                    })
                })          
            }    
        },
        remarketingv2(parametro, enviarCorreo){
            this.objRemarketing = {
                "codigoRemarketing": "",
                "producto": 1,
                "identificador":this.placa.toUpperCase(),
                "detalle": {
                    "correo": parametro,
                    "codigoVenta": this.remarketingId,
                    "enviarCorreo": enviarCorreo,
                    "pantalla": 0,
                    "datosCorreo":{
                        "url": process.env.URL+ (localStorage.getItem("businessId") == 1 ? "vehicular" : "vehicular/interbank"),
                        "plantilla": this.objPlantilla,
                        "utm": this.objUtm
                    },
                    "datosProducto": {
                        "placa": this.placa,
                        "idMarca": this.objVehicle.brandId,
                        "marca": this.objVehicle.brand,
                        "anio": this.objVehicle.modelYear,
                        "idModelo": this.objVehicle.modelId,
                        "modelo": this.objVehicle.model,
                        "idUso": 1,
                        "uso": "particular",
                        "valorComercial": this.listCotizacion.vehicle.current,
                        "pagoMensual": this.listCotizacion.policy.monthly,
                        "gps": this.listCotizacion.vehicle.gps,
                        "pagoTrimestral":this.listCotizacion.policy.quarterly,
                        "pagoAnual":this.listCotizacion.policy.annual,
                        "valorCalculado":this.listCotizacion.policy.monthlyCalculated,
                        "idEndosoSeleccionado": this.endosoSeleccionado.id,
                        "endosoSeleccionado": this.endosoSeleccionado.name,
                        "riesgo": this.listCotizacion.policy.risk,
                        "businessId": localStorage.getItem("businessId")
                    },
                    "datosTitular": {
                        "numeroDocumento": this.objSOAT.documentNumber,
                        "nombre": this.objSOAT.firstName,
                        "apellidoPaterno": this.objSOAT.firstLastName,
                        "apellidoMaterno": this.objSOAT.secondLastName,
                        "telefono": this.objSOAT.phoneNumber,
                        "originDocumentNumber": this.originDocumentNumber,
                        "origenDatos":localStorage.getItem("origenDatos"),
                    },
                    "remitente": {
                        "correoRemitente": "segurovehicular@interseguro.com.pe",
                        "correoRemitenteDisplay": "Interseguro Vehicular"
                    },
                    "datosPago": {
                        "idFrecuencia": "",
                        "fechaInicioSeguro": ""
                    }
                }
            }
            return new Promise((resolve, reject) => {
                this.$axios
                .post(process.env.url_remarketing+"digital-api/api/v2/sesiones/activaciones", this.objRemarketing)
                .then(function(response) {
                  localStorage.setItem("remarketingGenerado",response.data.codigoRemarketing)            
                  resolve(response)
                })
                .catch(function(error) {})
            })
        },
        enviarMailing() {
            return new Promise((resolve, reject) => {
                this.$axios
                .post("manage/v1/email/price-to-client/" + this.placa.toUpperCase() + "/" + localStorage.getItem("businessId"), {
                    email: this.objClients.emailAddress
                })
                .then(function(response) {
                    resolve(response)
                })
                .catch(function(error) {})
            })
        },
        hideModal(){
            this.$refs.hideModal.hide()
        },
        hideModalAutoorizacionPoliza(){
            this.$refs.hideModalAutoorizacionPoliza.hide()
        },
        hideModalgps(){
            this.$refs.hideModalgps.hide()
        },
        hideModalCotizacion() {
            this.showModal = false
        },
    },
    mounted(){
        localStorage.setItem("businessId",1)
        var url = window.location.pathname
        var fecha, fechaEnNumeros, aleatorio, aleatorioFinal
        var fecha = new Date()
        var fechaEnNumeros = fecha.getTime()
        var aleatorio = Math.random() * (10000 - 0) + 0
        var aleatorioFinal = fechaEnNumeros + parseInt(aleatorio)
        var mailGenerado = "test_"+aleatorioFinal.toString() + "@test.com"
        this.email = mailGenerado
        this.getcreateRemarketing()
        this.getFinancialInstitution()
    }
}
</script>