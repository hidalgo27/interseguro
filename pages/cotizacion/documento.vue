<template >
  <section class="pagina-documento">
    <b-container>
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
                                    <p class="label">Mi placa</p>                                            
                                </b-col>
                                <b-col cols="8">
                                    <p class="campo">{{this.$store.state.common.plateNumber}}</p>
                                </b-col>
                            </b-row>
                            <b-row class="row-final">
                                <b-col cols="4" class="marca" v-bind:class="{mostrarResumenMarca: mostrarResumenMarca}">
                                    <p class="label">Marca</p>                                            
                                </b-col>
                                <b-col cols="8" class="marca" v-bind:class="{mostrarResumenMarca: mostrarResumenMarca}">
                                    <p class="campo">{{this.$store.state.common.objVehiculo.brand}}</p>
                                </b-col>
                            </b-row>
                            <b-row class="row-final">
                                <b-col cols="4" v-bind:class="{mostrarResumenAnio: mostrarResumenAnio}" class="anio">
                                    <p class="label">Año</p>                                            
                                </b-col>
                                <b-col cols="8" v-bind:class="{mostrarResumenAnio: mostrarResumenAnio}" class="anio">
                                    <p class="campo">{{this.$store.state.common.objVehiculo.modelYear}}</p>
                                </b-col>
                            </b-row>
                            <b-row class="row-final">
                                <b-col cols="4" v-bind:class="{mostrarResumenModelo: mostrarResumenModelo}" class="modelo">
                                    <p class="label">Modelo</p>                                            
                                </b-col>
                                <b-col cols="8" v-bind:class="{mostrarResumenModelo: mostrarResumenModelo}" class="modelo">
                                    <p class="campo">{{this.$store.state.common.objVehiculo.model}}</p>
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
                <b-col class="p-0 d-block d-sm-none">
                  <span style=" margin-top: 6px; display: block; line-height: 26px; ">Completa tus datos personales </span>
                </b-col>
                <b-col class="p-0 d-none d-sm-block">
                  <a href=""> <img src="./../../static/media/imagenes/seleccion/row-back.svg" alt="" @click="volver($event)" ></a><span>Completa tus datos personales</span>
                </b-col>
            </b-row>
        </b-col>
      </b-row>
      
      <b-row class="box-ingresaDocumento">
        <b-col cols="12" sm="12" md="12" lg="8" xl="8" class="box-principal">
          <b-row class="busqueda">
            <b-col cols="12">
              <b-form-input id="documento-identidad" ref="myBtn" name="ws_username"
                v-on:focus.native="isIconDni = !isIconDni"
                v-on:blur.native="placeholderDNI($event)"
                @click.native="clearPlaceholderDNI($event)"
                @keyup.native="delay($event, 300)"
                class="input-vehicular form-control input-id iptGral__input "
                maxlength="11"
                autocomplete="on"
                autofocus
                type="tel"
                v-model="itemElegido.documentoLocal"
                required
                placeholder="Numero de DNI, CI o RUC"
                style="text-transform: initial">
              </b-form-input>
              <clip-loader
                      class="cliploader"
                      :loading="loading"
                      :color="color"
                      :size="size"
                    ></clip-loader>
            </b-col>
          </b-row>
          <b-row class="box-persona-natural" v-bind:class="{ ocultarFormPN: ocultarFormPN }">            
            <b-col cols="12" class="mt-4">
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
                placeholder="Nombre completo"
                v-on:keyup.enter="processTags('apellido-paterno')">
              </b-form-input>
            </b-col>
            <b-col cols="6" class="mt-4">
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
                placeholder="Apellido Paterno"
                v-on:keyup.enter="processTags('apellido-materno')"
              ></b-form-input>
            </b-col>
            <b-col cols="6" class="mt-4">
              <b-form-input id="apellido-materno" ref="apellido-materno" name="lastName"
                @keyup.native="validacionInput($event)"
                v-on:focus.native="isIconSecondLastName = !isIconSecondLastName"
                v-on:blur.native="isIconSecondLastName = !isIconSecondLastName"
                class="input-vehicular iptGral__input iptClient form-control input-id"
                autocomplete="additional-name"                
                type="text"
                v-model="objClients.secondLastName"
                required
                placeholder="Apellido Materno"
                v-on:keyup.enter="processTags('correo-electronico')"
              ></b-form-input>
            </b-col>
            <b-col cols="12" class="mt-4">
              <p class="mensaje">Por estos medios te enviaremos tu póliza al terminar tu compra</p>
            </b-col>
            <b-col cols="6" class="mt-4">
              <b-row>
                <b-col cols="12">
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
                  placeholder="Correo Electrónico"
                  v-on:keyup.enter="processTags('celular')"
                ></b-form-input>
                </b-col>
                <b-col v-if="this.msgErrorEmail">
                  <span style="font-size: 12px; color: rgb(214, 4, 17)" >Por favor ingresa un email válido</span>
                </b-col>
              </b-row>
            </b-col>            
            <b-col cols="6" class="mt-4">
              <b-row>
                <b-col cols="12">
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
                  placeholder="Teléfono"
                  v-on:keyup.enter="validarCelular($event)"
                ></b-form-input>
                </b-col>
                <b-col v-if="this.msgErrorCelular" cols="12">
                  <span style="font-size: 12px; color: rgb(214, 4, 17)" >Por favor ingresa un número de celular válido</span>
                </b-col>
              </b-row>
            </b-col>  
            
          </b-row>
          <b-row class="box-persona-juridica ruc" v-bind:class="{ mostrarRuc: mostrarRuc }">
            <b-col cols="12" class="mt-4">
              <b-form-input
                id="razon-social"
                ref="razon-social"
                @keyup.native="validacionInput($event)"
                v-on:focus.native="isRazonSocial = !isRazonSocial"
                v-on:blur.native="isRazonSocial = !isRazonSocial"
                class="input-vehicular iptGral__input iptRUC form-control input-id"
                autocomplete="on"
                autofocus
                type="text"
                v-model="objClients.firstName"
                required
                placeholder="Razón social"
                v-on:keyup.enter="processTags('direccion')"
              ></b-form-input>
            </b-col>
            <b-col cols="12" class="mt-4">
              <b-form-input
                id="direccion"
                ref="direccion"
                @keyup.native="validacionInput($event)"
                v-on:focus.native="isDireccion = !isDireccion"
                v-on:blur.native="isDireccion = !isDireccion"
                class="input-vehicular iptGral__input iptRUC form-control input-id"
                autocomplete="on"
                autofocus
                type="text"
                v-model="objClients.address"
                required
                placeholder="Dirección"
                v-on:keyup.enter="processTags('celularEmpresa')"
              ></b-form-input>
            </b-col>
            <b-col cols="12" class="mt-4">
              <b-form-input id="celularEmpresa" ref="celularEmpresa" @keyup.native=" validarCelular(); validacionInput($event); "
                v-on:focus.native=" isIconPhoneNumber = !isIconPhoneNumber "
                v-on:blur.native=" isIconPhoneNumber = !isIconPhoneNumber "
                v-bind:class="{ errorInput: msgErrorCelular }"
                class="input-vehicular iptGral__input iptRUC form-control input-id"
                autocomplete="tel"
                autofocus
                type="tel"
                v-model="objClients.phoneNumber"
                required
                maxlength="9"
                placeholder="Celular"
                v-on:keyup.enter=" processTags('correo-electronicoEmpresa') "
              ></b-form-input>
            </b-col>
            <b-col v-if="this.msgErrorCelular">
              <b-row class="d-flex justify-content-center pb-2">
                <div>
                  <span
                    style="font-size: 12px; color: rgb(214, 4, 17)"
                    >Por favor ingresa un número de celular
                    válido</span
                  >
                </div>
              </b-row>
            </b-col>
            <b-col cols="12" class="mt-4">
              <b-form-input
                id="correo-electronicoEmpresa"
                ref="correo-electronicoEmpresa"
                @keyup.native="validacionInput($event); validarEmail(); "
                v-bind:class="{ errorInput: msgErrorEmail }"
                v-on:focus.native=" isIconEmailAddress = !isIconEmailAddress "
                v-on:blur.native=" isIconEmailAddress = !isIconEmailAddress "
                class="input-vehicular iptGral__input iptRUC form-control input-id"
                autocomplete="on"
                autofocus
                type="text"
                v-model="objClients.emailAddress"
                required
                placeholder="Correo Electrónico"
              ></b-form-input>
            </b-col>
            <b-col v-if="this.msgErrorEmail">
              <b-row class="d-flex justify-content-center pb-2">
                <div>
                  <span
                    style="font-size: 12px; color: rgb(214, 4, 17)"
                    >Por favor ingresa un email válido</span
                  >
                </div>
              </b-row>
            </b-col>
          </b-row>
          <b-row class="politicas mt-4">
            <b-col cols="12">
              <p>Al continuar, acepto las
                <a href="javascript:void(0);" @click="eventoModalTerminosCondiciones()" style="text-decoration:underline; color:#383C5A">
                  Condiciones de Uso y Política de Privacidad
                </a>
              </p>
            </b-col>            
          </b-row>
          <b-row class="mt-4 msgCompletaDatosInicial" v-bind:class="{ msgCompletaDatos: msgCompletaDatos }">
            <b-col cols="12">
                <span >
                  Por favor completa los datos para continuar
                </span>
            </b-col>
          </b-row>
          <b-row class="mt-4 mb-4">
            <b-col cols="12" lg="6">
              <button type="button" :disabled="isDisableButton" @click="continuar($event)">
                  Ir a pagar
              </button>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="4">
          <div class="resumen-proteccion d-none  d-lg-block">
              <div class="resumen-proteccion__cabecera">
                <b-row class="titulo1">
                    <b-col cols="12">RESUMEN DE TU PROTECCIÓN</b-col>
                </b-row>
              </div>
              <div class="resumen-proteccion__cuerpo">
                  <div class="datos-carro">
                      <b-container>
                          <b-row class="row-titulo">
                              <b-col cols="12" >
                                  <p class="resumen-proteccion--subtitulo">DATOS DE TU CARRO</p>                                        
                              </b-col>
                          </b-row>
                          <b-row>
                              <b-col cols="4" class="row-data">
                                  <p><span class="label">Mi carro</span></p>
                              </b-col>
                              <b-col cols="8" class="row-data">
                                  <p><span class="campo-mayus">{{this.$store.state.common.objVehiculo.brand}}  {{this.$store.state.common.objVehiculo.model}}  {{this.$store.state.common.objVehiculo.modelYear}}</span></p>
                              </b-col>
                          </b-row>
                          <b-row class="row-titulo">
                              <b-col cols="12" class="row-data">
                                  <p class="resumen-proteccion--subtitulo">DATOS DE MI PÓLIZA</p>                                        
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
                      </b-container>
                      
                  </div>
              </div>
          </div>
        </b-col>

      </b-row>

      <b-modal id="modal1" ref="ingresaTuPlaca" title="Bootstrap-Vue" hide-footer hide-header size="lg" >
        <div class="modal-content modal-datosPersonales">
          <b-btn
            class="mt-3"
            @click="hideModal()"
            style="background: white; border: none"
          >
            <img
              src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b5f46206abb673bc5374fdb_icon-close.svg"
              width="40"
              alt="icon close"
              class="image-9"
            />
          </b-btn>
          <modalTerminosCondiciones></modalTerminosCondiciones>

        </div>
      </b-modal>


      <!--Modal Abandono-->
      
    <!-- <b-modal id="leaveDocument" class="leaveModal" size="lg" static centered hide-footer hide-header >
        <b-container>
          <b-row class="justify-content-center">
            <b-col class="text-center mb-3" cols="12">
              <img
                src="../../static/media/modal/leave-datos.png"
                alt="Abandonar Seguro Vehicular"
              />
            </b-col>
          </b-row>
          <b-row class="text-center">
            <b-col cols="12" class="mb-3">
              <h2 v-if="this.planSeleccionado == 4">
                <span>¡Buena elección!</span> <br />
                Tu auto estará <br />
                protegido en caso lo roben
              </h2>
              <h2 v-if="this.planSeleccionado == 6">
                <span>¡Buena elección!</span> <br />
                Has elegido el plan <br />
                perfecto para tu
                {{ this.$store.state.common.itemElegido.brand }}
              </h2>
              <h2
                v-if="this.planSeleccionado == 3 || this.planSeleccionado == 10"
              >
                <span>¡Buena elección!</span> <br />
                Has elegido el plan que te <br />
                protege contra Todo Riesgo
              </h2>
            </b-col>
            <b-col cols="12" class="mb-3">
              <h3>
                No lo dejes pasar, protege tu
                {{ this.$store.state.common.itemElegido.brand }} <br />
                hoy por solo ${{ this.$store.state.common.montoPagar }}.
              </h3>
            </b-col>
            <b-col cols="12" class="mb-2">
              <h3>Continúa tu cotización en el siguiente paso.</h3>
            </b-col>
          </b-row>
          <b-row class="justify-content-center">
            <b-col class="text-center mb-4" cols="12">
              <b-button @click="$nuxt.$emit('bv::hide::modal', 'leaveDocument')"
                >QUIERO CONTINUAR</b-button
              >
            </b-col>
          </b-row>
        </b-container>
      </b-modal> -->

    <!--Modal campania-->
     <b-modal id="leaveDocument" class="leaveModal2" static centered hide-footer hide-header >
        <b-container>
          <b-row class="justify-content-center">
            <b-col class="text-center mb-3" cols="12">
              <img class="img-verano"  src="../../static/media/img/campania/img-modal-full.svg" alt="">              
              <p class="mt-2 msj-modal">
                <strong class="name-client"> {{this.$store.state.common.objCliente.firstName}} </strong> <br> 
                <span class="white">Asegura tu auto HOY y paga solo 11 meses  </span><br>
                <span class="white">por un año de cobertura. Además, por comprar </span><br>
                <span class="white">en Plan Black,  </span>
                <span class="yelow">gana un vale de S/100  </span>                     
              </p>                
            </b-col>
          </b-row>
          
          <b-row class="justify-content-center">
            <b-col class="text-center mb-4" cols="12">
              <b-button @click="$nuxt.$emit('bv::hide::modal', 'leaveDocument')">TERMINAR COMPRA</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-modal>

    </b-container>
  </section>
</template>


<script>
  import modalTerminosCondiciones from "./../../components/modals/CondicionesUsoPoliticaPrivacidad";
  export default {
  layout: "InterseguroFlujoNew",
  data() {
    return {
      flagVerMas: 1,
      flagVerMenos: 0,
      fechaVigencia: "",
      idCliente: 0,
      codigoRemarketingGenerado: "",
      listCotizacion: null,
      itemElegido: {
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
      } /***************************************** */,
      cobertura_is: {
        personType: "",
        content_ids:""
      },
      monto_pagar_steps3: "",
      ocultarInputDocumento: false,
      planSeleccionado: 0,
      objError: {
        page: "",
        flow: "",
        path: "",
        messageError: "",
        documentNumber: "",
        plateNumber: "",
        detail: {
          objServicio: {
            nombre: "",
            tipo: "",
            ruta: "",
            msj: "",
            solucion: "",
          },
          objCliente: {
            documento: "",
            nombre: "",
            celular: "",
            correo: "",
          },
          objAuto: {
            placa: "",
            marca: "",
            modelo: "",
            anio: "",
            valorComercial: "",
          },
        },
      },
      endosoSeleccionado: {},
      mostrarDatosyCheckbox: false,
      mostrarEditarCancelar: false,
      cuentaSueldo: null,
      urlDp: "",
      checkPoliticasPrivacidad: true,
      campoDocumentoInicial: null,
      camposRellenados: false,
      mostrarDatosPersonales: false,
      mostrar: false,
      mostrarRuc: false,
      mostrarFormPN: false,
      ocultarFormPN: false,
      nombre: "",
      expirationDate: "",

      isSecondBox: false,
      todoCompleto: false,
      msgCompletaDatos: false,
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
      estado_cliente: 0,
      isDisableButton: true,
      tamaño: 0,
      documento: {
        tipo: "",
        numero: "",
      },
      documentoLocal: "",
      size: "25px",
      checkDocs: true,
      isOculto: false,

      loading: false,
      color: "#00ADEE",
      timer: null,
      objVehiculo: {
        brand: "",
        brandId: 0,
        model: "",
        modelId: 0,
        modelYear: 0,
        plateNumber: "",
      },
      objRemarketing: "",
      abjVehicleSelect: {},
      /**************************************************************
       * *********************** REMARKETING ************************
       * ***********************************************************/
      pantalla: 2,
      objPlantilla: {
        1: "00-dias.html",
        2: "03-dias.html",
        3: "07-dias.html",
        4: "15-dias.html",
      },
      objUtm: {
        1: "utm_campaign=remarketingCN_1",
        2: "utm_campaign=remarketingCN_2",
        3: "utm_campaign=remarketingCN_3",
        4: "utm_campaign=remarketingCN_4",
      },
      msgErrorEmail: false,
      msgErrorCelular: false,
    };
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
    eventoModalTerminosCondiciones() {
      this.$refs.ingresaTuPlaca.show();
    },
    /* ************************************************************** */
    hideModalBlackWeek() {
      $nuxt.$emit("bv::hide::modal", "leaveBlackWeek");
    },
    PaginaVista() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pagina_vista",
        "page-url": "/vehicular/cotiza/ingresa-tu-documento",
        "page-title": "Ingresa Tu Documento",
        ecommerce: {
          checkout: {
            actionField: { step: 3 }, // esto marca el primer paso en el embudo
          },
        },
      });
    },
    PaginaVistaNuevoProducto() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pagina_vista",
        "page-url": "/vehicular-app/cotiza/ingresa-tu-documento/",
        "page-title": "Ingresa Tu Documento",
      });
    },
    validarEmail() {
      if (this.validate()) {
        this.msgErrorEmail = false;
      } else {
        this.isDisableButton = true;
        this.msgErrorEmail = true;
      }
    },
    validarCelular() {      
      if (this.objClients.phoneNumber)
        if (this.objClients.phoneNumber.charAt(0) == 9 && this.objClients.phoneNumber.length == 9 ) {
          this.msgErrorCelular = false;
          this.mostrarColBlanco = false          
        } else {
          this.isDisableButton = true;
          this.msgErrorCelular = true;
          this.mostrarColBlanco = true;          
        }
    },
    como_pagar() {
      if (document.location.hostname == "www.interseguro.pe") {
        fbq("track", "AddToCart");
      } else {
      }

      this.$store.commit(
        "common/setNumeroTelefono",
        this.objClients.phoneNumber
      );
      this.remarketingv2();
      this.validarROOT();
    },
    validarROOT() {
      if (this.$store.state.common.nuevoProducto == true) {
        if (
          this.$store.state.common.planSeleccionado == 6 ||
          this.$store.state.common.planSeleccionado == 3
        ) {
          if (this.$store.state.common.entidadFinanciera.id == 0) {
            let respuesta = this.fechaVigencia.split("/");
            let inputDate = Date.parse(
              respuesta[2] + "/" + respuesta[1] + "/" + respuesta[0]
            );
            inputDate = new Date(inputDate);
            let fecha = new Date();
            let dia = fecha.getDate();
            let mes = fecha.getMonth() + 1;
            let año = fecha.getFullYear();
            let fechaActual = año + "/" + mes + "/" + dia;
            let todaysDate = Date.parse(fechaActual);
            todaysDate = new Date(fechaActual);
            this.$store.commit("common/setEmisionROOT", true)
            this.$store.commit("common/setObjCliente", this.objClients)
            this.$nuxt.$router.push({ path: "/cotiza/descargar" })
          } else {
            this.$store.commit("common/setObjCliente", this.objClients)
            this.$store.commit("common/setEmisionROOT", false)
            this.$nuxt.$router.push({ path: "/cotizacion/pagar" })
          }
        } else {
          this.$store.commit("common/setObjCliente", this.objClients)
          this.$nuxt.$router.push({ path: "/cotizacion/pagar" })
          this.$store.commit("common/setEmisionROOT", false)
        }
      } else {
        this.$store.commit("common/setObjCliente", this.objClients)
        this.$nuxt.$router.push({ path: "/cotizacion/pagar" })
      }
    },
    cotizador_datalayer(evento, step_valor) {
      this.cobertura_is.content_ids =  this.$store.state.common.code_sku
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: evento,
        step: step_valor,
        product: this.cobertura_is,
      });
    },
    horaError() {
      let fecha = new Date()
      let horaError = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds()
      return horaError
    },
   
    hideModal() {
      this.$refs.ingresaTuPlaca.hide()
    },
    detectar_documento() {
      this.itemElegido.documentoLocalSinEspacios = this.itemElegido.documentoLocal
        .replace(/[^0-9\s]/gi, "")
        .replace(/[_\s]/g, "")
      let documento = this.itemElegido.documentoLocalSinEspacios
      this.tamaño = documento.length
    },
    validarCampos() {
      if (this.tamaño == 8 || this.tamaño == 9) {
        if (this.validarClient() && this.checkPoliticasPrivacidad == true) {
          this.isDisableButton = false;
          this.remarketingv2();
          if (
            this.objClients.phoneNumber.charAt(0) == 9 &&
            this.objClients.phoneNumber.length == 9
          ) {
            this.$store.commit("common/setCheckgss", 1);
            this.$store.commit("common/setEmail", this.objClients.emailAddress);
          }
        } else {
          this.$store.commit("common/setCheckgss", 0);
          this.isDisableButton = true;
        }
      } else if (this.tamaño == 11) {
        if (this.validarRUC() && this.checkPoliticasPrivacidad == true) {
          this.isDisableButton = false;
          this.remarketingv2();
          if (
            this.objClients.phoneNumber.charAt(0) == 9 &&
            this.objClients.phoneNumber.length == 9
          ) {
            this.$store.commit("common/setCheckgss", 1);
            this.$store.commit("common/setEmail", this.objClients.emailAddress);
          }
        } else {
          this.$store.commit("common/setCheckgss", 0);
          this.isDisableButton = true;
        }
      } else {
      }
    },
    editarCancelar() {
      this.ocultarInputDocumento = !this.ocultarInputDocumento;
      this.mostrarDatosPersonales = !this.mostrarDatosPersonales;
      
      this.tamaño = this.objClients.documentNumber.length;
      
    },

    continuar(evt) {
      this.$store.state.common.listaCotizacion.policy.startDate = this.$store.state.common.fechaVigencia;
      this.isDisableButton = true;
      evt.preventDefault();
      this.detectar_documento();
      this.$store.commit("common/setObjectDigodat", this.cobertura_is);
      if (this.tamaño == 8 || this.tamaño == 9) {
        if (this.$store.state.common.clientState == 0) {
          this.createClient();
        } else if (this.$store.state.common.clientState == 1) {
          this.updateClient();
        } else {}
        this.$store.commit(
          "common/setNumeroTelefono",
          this.objClients.phoneNumber
        );
      } else if (this.tamaño == 11) {
        if (this.$store.state.common.clientState == 0) {
          this.createRuc();
          this.como_pagar();
        } else {
          this.updateRuc();
          this.isDisableButton = false;
          this.$store.commit("common/setEmail", this.objClients.emailAddress);
          this.como_pagar();
        }
        this.$store.commit(
          "common/setNumeroTelefono",
          this.objClients.phoneNumber
        );
      } else {
      }
      this.pantalla = 3;
      // this.remarketingv2()
      if (this.objClients.validCtaSueldo == "N") {
        this.$swal({
          title: "Oops...",
          text:
            "¡No eres Cuenta Sueldo Interbank! Abre tu Cuenta Sueldo Interbank online y disfruta de un 15% de descuento en la compra de tu Seguro Vehicular.",
          type: "warning",
          showCancelButton: false,
          confirmButtonColor: "#2177CC",
          confirmButtonText: "OK",
        });
      }

      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "userData",
        firstname: this.objClients.firstName,
        lastname:
          this.objClients.firstLastName + " " + this.objClients.secondLastName,
        email: this.objClients.emailAddress,
        phone: this.objClients.phoneNumber,
        monto: localStorage.getItem("monthly"),
      });
    },
    volver(evt) {
      evt.preventDefault();
      if (this.$store.state.common.businessId == 2) {
        this.$nuxt.$router.push({path: "/cotiza/cotizacion-interbank"});
      } else {this.$nuxt.$router.push({path: "/cotizacion/cotizacion"});
      }
    },
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
    validar() {
      var camposRellenados = true;
      if (process.client) {
        let ipt_general = document.getElementsByClassName("iptGral__input");
        for (let i = 0; i < ipt_general.length; i++) {
          if (ipt_general[i].value.length <= 0) {
            camposRellenados = false;
            return false;
          }
        }
        if (camposRellenados == true) {
          return true;
        } else {
          return false;
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

    validacionDocumento(event) {
      this.procesar(event.target.value);
    },
    procesar(value) {
      this.detectar_documento();
      if (!isNaN(value) && this.campoDocumentoInicial !== value) {
        this.campoDocumentoInicial = value;
        this.isOculto = false;

        if (this.tamaño < 8) {
          this.todoCompleto = false;
          this.loading = false;
          this.isOculto = false;

          this.objClients.firstName = "";
          this.objClients.firstLastName = "";
          this.objClients.secondLastName = "";
          this.objClients.phoneNumber = "";
          this.objClients.emailAddress = "";
          this.objClients.address = "";
          this.mostrarDatosyCheckbox = false;
          this.mostrarEditarCancelar = false;

          self.ocultarFormPN = false;
          self.mostrarRuc = false;
        }
        if (this.tamaño >= 8) {
          var self = this;
          self.loading = true;

          self.mostrarDatosPersonales = false;
          self.msgCompletaDatos = false;

          self.ocultarFormPN = false;
          //self.isOculto = true;
          //self.mostrarRuc = true;

          if (self.tamaño == 8 || self.tamaño == 9) {
            self.getClient(1);
          } else if (self.tamaño == 10) {
            self.mostrarDatosPersonales = false;
            self.mostrarDatosyCheckbox = false;
            self.mostrarRuc = true;
            self.loading = false;
            self.mostrarEditarCancelar = false;
            self.ocultarFormPN = true;
          } else if (self.tamaño == 11) {
            self.ocultarFormPN = true;
            self.mostrarRuc = true;
            self.getClient(2);
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    },
    validarClienteVuex() {
      this.mostrarDatosPersonales = false;
      this.loading = false;
      this.isOculto = true;
      this.mostrarRuc = false;
      if (this.estado_cliente == 1) {
        if (this.validarClient()) {
          this.ocultarInputDocumento = true;
          this.mostrarDatosPersonales = true;
          this.mostrarDatosyCheckbox = true;
          this.msgCompletaDatos = false;
          this.mostrar = true;
          this.mostrarEditarCancelar = true;
          if (this.checkPoliticasPrivacidad == true) {
            this.isDisableButton = false;
          } else {
            this.isDisableButton = true;
          }
          this.cobertura_is.personType = "fisica";
          this.cotizador_datalayer("checkout", 2);
        } else {
          this.ocultarInputDocumento = false;
          this.mostrarDatosPersonales = false;
          this.mostrarDatosyCheckbox = true;
          this.msgCompletaDatos = true;
          this.mostrar = false;
          this.isSecondBox = true;
          this.isDisableButton = true;
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
      this.mostrarDatosPersonales = false;
      this.msgCompletaDatos = false;
      this.loading = false;
      this.isOculto = true;
      
      this.mostrarRuc = true;
      if (this.estado_cliente == 1) {
        if (this.validarRUC()) {
          this.ocultarInputDocumento = true;
          this.mostrarEditarCancelar = true;
          this.mostrarDatosPersonales = true;
          this.mostrarDatosyCheckbox = true;
          this.msgCompletaDatos = false;
          this.mostrar = true;
          this.cobertura_is.personType = "juridica";
          this.cotizador_datalayer("checkout", 2);
          if (this.checkPoliticasPrivacidad == true) {
            this.isDisableButton = false;
          } else {
            this.isDisableButton = true;
          }
        } else {
          this.ocultarInputDocumento = false;
          this.mostrarEditarCancelar = false;
          this.mostrarDatosPersonales = false;
          this.mostrarDatosyCheckbox = true;
          this.msgCompletaDatos = true;
          this.mostrar = false;
          this.isSecondBox = true;
          this.isDisableButton = true;
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
    delay(event, ms) {
      this.isDisableButton = true;
      this.mostrarDatosPersonales = false;

      this.mostrarDatosyCheckbox = false;

      var self = this;
      clearTimeout(self.timer);
      self.timer = setTimeout(function () {
        self.validacionDocumento(event);
      }, ms);
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
    processTags(nextInputToFocus) {
      this.$refs[nextInputToFocus].focus();
    },
    capitalize(a) {
      return a.charAt(0).toUpperCase() + a.slice(1);
    },
    getClient(parametro) {
      this.itemElegido.discountType = this.discountType;
      this.$store.dispatch("common/getClient", this.itemElegido).then((res) => {
        if (res.data.code == 0) {
          this.loading = true;
          this.objClients = res.data.body;
          this.$store.commit("common/setObjCliente", res.data.body);
          this.idCliente = res.data.body.id;
          this.loading = false;
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
    updateClient() {
      this.$store.commit(
        "common/setDocumentoLocal",
        this.itemElegido.documentoLocal
      );
      this.itemElegido = this.objClients;
      this.$store
        .dispatch("common/updateClient", this.itemElegido)
        .then((res) => {
          if (res.data.code == 0) {
            this.como_pagar();
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
      this.$store.commit(
        "common/setDocumentoLocal",
        this.itemElegido.documentoLocal
      );
      this.itemElegido = this.objClients;
      this.$store.dispatch("common/updateRuc", this.itemElegido).then((res) => {
        if (res.data.code == 0) {
          this.como_pagar();
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
      this.$store.commit(
        "common/setDocumentoLocal",
        this.itemElegido.documentoLocal
      );
      this.itemElegido = this.objClients;
      this.$store.dispatch("common/createRuc", this.itemElegido).then((res) => {
        if (res.data.code == 0) {
          this.isDisableButton = false;
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
    createClient() {
      this.$store.commit("common/setDocumentoLocal",this.itemElegido.documentoLocal);
      this.itemElegido = this.objClients;
      this.$store
        .dispatch("common/createClient", this.itemElegido)
        .then((res) => {
          if (res.data.code == 0) {
            this.isDisableButton = false;
            this.$store.commit("common/setEmail", this.objClients.emailAddress);
            this.$store.commit("common/setClientState", 1);
            this.como_pagar();
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
    PaginaVista() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pagina_vista",
        "page-url": "/vehicular/cotiza/ingresa-tu-documento",
        "page-title": "Ingresa Tu Documento",
        ecommerce: {
          checkout: {
            actionField: { step: 3 }, // esto marca el primer paso en el embudo
          },
        },
      });
    },
    remarketingv2() {
      if (this.$store.state.common.businessId == 2) {
        this.objPlantilla = {
          1: "00-ibk-dias.html",
          2: "03-ibk-dias.html",
          3: "07-ibk-dias.html",
          4: "15-ibk-dias.html",
        };
        this.objUtm = {
          1: "utm_campaign=IBK_remarketingCN_1",
          2: "utm_campaign=IBK_remarketingCN_2",
          3: "utm_campaign=IBK_remarketingCN_3",
          4: "utm_campaign=IBK_remarketingCN_4",
        };
      } else if (this.$store.state.common.nuevoProducto == true) {
        this.objPlantilla = {};
        this.objUtm = {};
      }
      this.abjVehicleSelect = JSON.parse(
        localStorage.getItem("abjVehicleSelect")
      );
      this.objVehiculo = JSON.parse(localStorage.getItem("objVeh"));
      this.objRemarketing = {
        codigoRemarketing:
          this.$store.state.common.codigoRemarketingGenerado == null
            ? ""
            : this.$store.state.common.codigoRemarketingGenerado,
        producto: this.$store.state.common.businessId,
        identificador: this.$store.state.common.plateNumber,
        detalle: {
          correo: this.$store.state.common.email.trim().replace(/ /g, ""),
          codigoVenta: this.$store.state.common.codeRmkt,
          pantalla: this.pantalla,
          enviarCorreo: 0,
          datosCorreo: {
            url:
              process.env.URL +
              (this.$store.state.common.businessId == 1
                ? "vehicular"
                : "vehicular/interbank"),
            plantilla: this.objPlantilla,
            utm: this.objUtm,
          },
          datosProducto: {
            marca: this.$store.state.common.itemElegido.brand,
            modelo: this.$store.state.common.itemElegido.model,
            planSeleccionado: this.planSeleccionado + "",
            valorComercial: this.$store.state.common.current,
            pagoMensual: this.listCotizacion.policy.monthly,
            desde: null,
            /*********************************************************/
            businessId: this.$store.state.common.businessId,
            idEndosoSeleccionado: this.endosoSeleccionado.id,
            endosoSeleccionado: this.endosoSeleccionado.name,
            placa: this.$store.state.common.plateNumber,
            anio: this.$store.state.common.itemElegido.modelYear,
            gps: this.listCotizacion.vehicle.gps,
            riesgo: this.listCotizacion.policy.risk,
            fechaInicio: this.$store.state.common.fechaVigencia,
            discountType: this.discountType,
            /******************************************************** */
            itemElegido: this.$store.state.common.itemElegido,
            listCotizacion: this.$store.state.common.listaCotizacion,
            nuevoProducto: this.$store.state.common.nuevoProducto,
          },
          datosTitular: {
            numeroDocumento: this.$store.state.common.documentoLocal,
            nombre: this.objClients.firstName,
            apellidoPaterno: this.objClients.firstLastName,
            apellidoMaterno: this.objClients.secondLastName,
            telefono: this.objClients.phoneNumber,
            originDocumentNumber: localStorage.getItem("originDocumentNumber"),
            origenDatos: localStorage.getItem("origenDatos"),
          },
          remitente: {
            correoRemitente: "comunicaciones@interseguro.com.pe",
            correoRemitenteDisplay: "Interseguro",
          },
          datosPago: {
            idFrecuencia: 1,
            fechaInicioSeguro: "",
          },
        },
      };
      this.$store
        .dispatch("common/sendRemarketing", this.objRemarketing)
        .then((res) => {
          if (res) {
            this.$store.commit(
              "common/setCodigoRemarketingGenerado",
              res.data.codigoRemarketing
            );
          }
        });
    },
    mouseLeave(e) {
      if (this.$store.state.common.leaveMessage == 0 ) {
        
        if (e.clientX < 0 || e.clientY < 0) {
          
          this.$store.commit("common/setLeaveMessage", 1);
          this.$nuxt.$emit("bv::show::modal", "leaveDocument");
        }
      }
    },
  },
  components: {
    modalTerminosCondiciones,
  },
  mounted: function () {
    //console.log("this.$store.state.common.objVeh",this.$store.state.common.objVehiculo.brand)
    this.fechaVigencia = this.$store.state.common.fechaVigencia;
    console.log('fecha vigencia '+this.fechaVigencia);
    this.cobertura_is = this.$store.state.common.objectDigodat;
    this.cotizador_datalayer("checkout", 1);
    let objJWT = JSON.parse(localStorage.getItem("jwt"));
    if (objJWT == null || objJWT == undefined) {
      this.$nuxt.$router.push("/");
    } else {
      let objJWT = JSON.parse(localStorage.getItem("jwt"));
      this.planSeleccionado = objJWT.common.planSeleccionado;
      this.listCotizacion = this.$store.state.common.listaCotizacion;

      if (this.$store.state.common.cuentasueldo === "Y") {
        this.discountType = "cta-sueldo";
      } else if (this.$store.state.common.tarjetaoh == "Y") {
        this.discountType = "tarjeta-oh";
      } else {
        this.discountType = "";
      }

      if (objJWT.common.documentoLocal) {
        this.itemElegido.documentoLocal = objJWT.common.documentoLocal;
        if (
          objJWT.common.documentoLocal.length == 8 ||
          objJWT.common.documentoLocal.length == 9
        ) {
          this.getClient(1);
          this.ocultarFormPN = false;
          this.mostrarRuc = false
        } else if (objJWT.common.documentoLocal.length == 11) {
          this.getClient(2);
          this.mostrarRuc = true
          this.ocultarFormPN = true;
        } else {
        }
      }
    }

    if (objJWT.common.entidadFinanciera !== null) {
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

    if (this.$store.state.common.cuentasueldo == "Y") {
      this.discountType = "cta-sueldo";
    } else if (this.$store.state.common.tarjetaoh == "Y") {
      this.discountType = "tarjeta-oh";
    } else {
      this.discountType = "";
    }
    this.urlCondicionado = require("../../static/media/documentos/Condicionado_General.pdf");
    if (localStorage.getItem("documentoLocal") !== null) {
      if (process.browser) {
        this.itemElegido.documentoLocal = window.localStorage.getItem(
          "documentoLocal"
        );
        this.procesar(localStorage.getItem("documentoLocal"));
      }
    }
    if (this.$store.state.common.nuevoProducto) {
      this.PaginaVistaNuevoProducto();
    } else {
      this.PaginaVista();
    }

    document.addEventListener("mouseleave", this.mouseLeave, { passive: true });
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

