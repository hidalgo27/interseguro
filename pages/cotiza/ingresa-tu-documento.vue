<template >
  <section
    class="steps-box"
    v-bind:class="{
      'pt-sinBlack': this.$store.state.common.flagCloseListon == 0,
    }"
  >
    <b-container class="steps-plan">
      <b-row>
        <b-col cols="12" lg="8" class="m-auto">
          <div class="box-steps">
            <div class="backcotizacion" @click="volver($event)">
              <img
                width="35"
                src="../../static/media/img/flujo/cotizacion/back.svg"
                alt="volver"
              />
            </div>

            <ul class="steps" style="display: inline-flex">
              <template>
                <router-link
                  class="steps__item"
                  to="/cotiza/ingresa-tu-documento"
                  style="cursor: auto"
                  ><li></li
                ></router-link>
              </template>
              <template>
                <router-link
                  v-if="documento_steps2 != ''"
                  class="steps__item steps--active paso2"
                  to="/cotiza/ingresa-tu-documento"
                  ><li></li
                ></router-link>
                <router-link
                  v-else
                  class="steps__item steps--active paso2"
                  to="/cotiza/ingresa-tu-documento"
                  ><li></li
                ></router-link>
              </template>
              <template>
                <router-link class="steps__item paso1" to="/cotiza/cotizacion"
                  ><li></li
                ></router-link>
              </template>
              <li class="steps--progressBar"></li>
            </ul>

            <div v-if="this.planSeleccionado == 4" class="plan-titulo">
              <p class="roboTotal">PLAN SELECCIONADO: <span>PLATA </span></p>
            </div>
            <div v-else-if="this.planSeleccionado == 6" class="plan-titulo">
              <p class="semiFull">PLAN SELECCIONADO: <span>ORO </span></p>
            </div>
            <div
              v-else-if="
                this.planSeleccionado == 3 || this.planSeleccionado == 10
              "
              class="plan-titulo"
            >
              <p class="full">PLAN SELECCIONADO: <span> BLACK </span></p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row class="justify-content-center box-ingresaDocumento">
        <b-col cols="12" sm="10" md="12" class="pb-2">
          <p class="titulo-flujo">DATOS PERSONALES O DE LA EMPRESA</p>
        </b-col>

        <div class="maestra d-block d-lg-none">
          <b-col
            cols="12"
            class="mb-0 d-none"
            v-bind:class="{ mostrarDatosyCheckbox: mostrarDatosyCheckbox }"
            style="justify-content: center"
          >
            <div class="msgCompletaDatosInicialbase pt-0">
              <span
                class="msgCompletaDatosInicial pt-0"
                v-bind:class="{ msgCompletaDatos: msgCompletaDatos }"
              >
                Por favor completa los datos para continuar
              </span>
            </div>
          </b-col>
        </div>

        <b-col cols="12" lg="4" class="box-principal">
          <b-row>
            <b-col cols="12" v-bind:class="{ 'd-none': ocultarInputDocumento }">
              <b-row
                class="box-documento first-box justify-content-center"
                style="border-radius: 20px 20px 0 0"
              >
                <b-col cols="12">
                  <div class="box-documento__input">
                    <b-form-input
                      id="documento-identidad"
                      ref="myBtn"
                      name="ws_username"
                      v-on:focus.native="isIconDni = !isIconDni"
                      v-on:blur.native="placeholderDNI($event)"
                      @click.native="clearPlaceholderDNI($event)"
                      @keyup.native="delay($event, 300)"
                      class="input-vehicular form-control input-id"
                      maxlength="11"
                      autocomplete="on"
                      autofocus
                      type="tel"
                      v-model="itemElegido.documentoLocal"
                      required
                      placeholder="Ingresa tu DNI, CE o RUC"
                      style="text-transform: initial"
                    ></b-form-input>
                    <clip-loader
                      class="cliploader"
                      :loading="loading"
                      :color="color"
                      :size="size"
                    ></clip-loader>
                  </div>
                </b-col>
              </b-row>
              <!-- 
              <b-row class="d-flex justify-content-center">
                <div v-if="this.itemElegido.documentoLocal.length == 10">
                  <span style="font-size: 12px; color: rgb(214, 4, 17)"
                    >Ingrese un número de documento válido</span
                  >
                </div>
              </b-row> -->
            </b-col>

            <b-col cols="12" class="box-datos">
              <b-row style="background: white; border-radius: 0 0 24px 24px">
                <div>
                  <span
                    class="titulo-datosPersonales__editarCancelar"
                    @click="editarCancelar"
                    v-bind:class="{
                      mostrarEditarCancelar: mostrarEditarCancelar,
                    }"
                  >
                    {{ mostrarPrimerBox == true ? "Editar" : "Cerrar" }}

                    <img
                      class="flecha_edicion"
                      src="../../static/media/interseguroVehicular_v2/flecha_edicion.png"
                      alt="flecha_edicion"
                    />
                  </span>
                </div>
                <b-col
                  cols="12"
                  class="d-none"
                  v-bind:class="{
                    mostrarDatosPersonales: mostrarDatosPersonales,
                  }"
                >
                  <div class="d-none d-lg-flex">
                    <div
                      class="row boxUsuarioEncontrado"
                      v-bind:class="{ mostrarPrimerBox: mostrarPrimerBox }"
                    >
                      <ul>
                        <li>
                          <span>
                            {{ this.objClients.firstName }}&nbsp;{{
                              this.objClients.firstLastName
                            }}&nbsp;{{ this.objClients.secondLastName }}
                          </span>
                        </li>
                        <li>
                          <span>
                            {{ this.objClients.documentNumber }}
                          </span>
                        </li>

                        <li>
                          <span>
                            {{ this.objClients.phoneNumber }}
                          </span>
                        </li>
                        <li>
                          <span>
                            {{ this.objClients.emailAddress }}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <b-col
                    cols="12"
                    lg="8"
                    class="d-flex d-lg-none mt-2"
                    style="padding-left: 0"
                  >
                    <div
                      class="row boxUsuarioEncontrado"
                      v-bind:class="{ mostrarPrimerBox: mostrarPrimerBox }"
                    >
                      <ul>
                        <li>
                          <span> {{ this.objClients.firstName }}</span
                          >&nbsp;<span>{{ this.objClients.firstLastName }}</span
                          >&nbsp;<span
                            >{{ this.objClients.secondLastName }}
                          </span>
                        </li>
                        <li>
                          <span>
                            {{ this.objClients.documentNumber }}
                          </span>
                        </li>
                        <li>
                          <span>
                            {{ this.objClients.phoneNumber }}
                          </span>
                        </li>
                        <li>
                          <span>
                            {{ this.objClients.emailAddress }}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </b-col>
                </b-col>

                <div class="">
                  <b-row
                    class="second-box mt-2"
                    v-bind:class="{ mostrarSegundoBox: mostrarSegundoBox }"
                  >
                    <b-col cols="12">
                      <b-row
                        class="dni-ce"
                        v-bind:class="{ mostrarDni: mostrarDni }"
                      >
                        <div
                          class="capa"
                          v-bind:class="{ isOculto: isOculto }"
                        ></div>

                        <b-col cols="12" md="12" class="p-0">
                          <div class="form-group text-center mb-2 mt-3">
                            <b-form-input
                              id="nombre"
                              ref="nombre"
                              autocomplete="given-name"
                              name="firstName"
                              @keyup.native="validacionInput($event)"
                              @keydown.native="validacionInput($event)"
                              @keypress.native="validacionInput($event)"
                              v-on:focus.native="
                                isIconFirstName = !isIconFirstName
                              "
                              v-on:blur.native="
                                isIconFirstName = !isIconFirstName
                              "
                              class="input-vehicular iptGral__input iptClient form-control input-id"
                              autofocus
                              type="text"
                              v-model="objClients.firstName"
                              required
                              placeholder="Nombres"
                              v-on:keyup.enter="processTags('apellido-paterno')"
                            ></b-form-input>
                            <img
                              class="edit-input"
                              src="../../static/media/img/flujo/cotizacion/edit.png"
                              alt="icono primer apellido"
                            />
                          </div>
                        </b-col>

                        <b-col cols="12" class="p-0">
                          <div class="form-group text-center mb-2">
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
                              autofocus
                              type="text"
                              v-model="objClients.firstLastName"
                              required
                              placeholder="Apellido Paterno"
                              v-on:keyup.enter="processTags('apellido-materno')"
                            ></b-form-input>
                            <img
                              class="edit-input"
                              src="../../static/media/img/flujo/cotizacion/edit.png"
                              alt="icono apellido paterno"
                            />
                          </div>
                        </b-col>

                        <b-col cols="12" class="p-0">
                          <div class="form-group text-center mb-2">
                            <b-form-input
                              id="apellido-materno"
                              ref="apellido-materno"
                              name="lastName"
                              @keyup.native="validacionInput($event)"
                              v-on:focus.native="
                                isIconSecondLastName = !isIconSecondLastName
                              "
                              v-on:blur.native="
                                isIconSecondLastName = !isIconSecondLastName
                              "
                              class="input-vehicular iptGral__input iptClient form-control input-id"
                              autocomplete="additional-name"
                              autofocus
                              type="text"
                              v-model="objClients.secondLastName"
                              required
                              placeholder="Apellido Materno"
                              v-on:keyup.enter="
                                processTags('correo-electronico')
                              "
                            ></b-form-input>
                            <img
                              class="edit-input"
                              src="../../static/media/img/flujo/cotizacion/edit.png"
                              alt="icono apellido  materno"
                            />
                          </div>
                        </b-col>

                        <b-col cols="12" class="p-0">
                          <div class="form-group text-center mb-2">
                            <b-form-input
                              id="correo-electronico"
                              ref="correo-electronico"
                              name="email"
                              @keyup.native="
                                validacionInput($event);
                                validarEmail();
                              "
                              v-on:focus.native="
                                isIconEmailAddress = !isIconEmailAddress
                              "
                              v-on:blur.native="
                                isIconEmailAddress = !isIconEmailAddress
                              "
                              class="input-vehicular iptGral__input iptClient form-control input-id"
                              v-bind:class="{ errorInput: msgErrorEmail }"
                              autocomplete="on"
                              autofocus
                              type="email"
                              v-model="objClients.emailAddress"
                              required
                              placeholder="Correo Electrónico"
                              v-on:keyup.enter="processTags('celular')"
                            ></b-form-input>
                            <img
                              class="edit-input"
                              src="../../static/media/img/flujo/cotizacion/edit.png"
                              alt="icono email"
                            />
                          </div>
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

                        <b-col cols="12" class="p-0">
                          <div class="form-group text-center mb-2">
                            <b-form-input
                              id="celular"
                              ref="celular"
                              name="phone"
                              @keyup.native="validarCelular();validacionInput($event);"
                              v-on:focus.native="
                                isIconPhoneNumber = !isIconPhoneNumber
                              "
                              v-on:blur.native="
                                isIconPhoneNumber = !isIconPhoneNumber
                              "
                              class="input-vehicular iptGral__input iptClient form-control input-id"
                              autocomplete="tel"
                              v-bind:class="{ errorInput: msgErrorCelular }"
                              autofocus
                              type="tel"
                              v-model="objClients.phoneNumber"
                              required
                              maxlength="9"
                              placeholder="Celular"
                              v-on:keyup.enter="validarCelular($event)"
                            ></b-form-input>
                            <img
                              class="edit-input"
                              src="../../static/media/img/flujo/cotizacion/edit.png"
                              alt="icono celular"
                            />
                          </div>
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
                      </b-row>

                      <b-row
                        class="ruc"
                        v-bind:class="{ mostrarRuc: mostrarRuc }"
                      >
                        <div
                          class="capa"
                          v-bind:class="{ isOculto: isOculto }"
                        ></div>
                        <b-col cols="12" class="p-0">
                          <div class="form-group text-center mb-2">
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
                            <img
                              class="edit-input"
                              src="../../static/media/img/flujo/cotizacion/edit.png"
                              alt="icono rezon social"
                            />
                          </div>
                        </b-col>
                        <b-col cols="12" class="p-0">
                          <div class="form-group text-center mb-2">
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
                            <img
                              class="edit-input"
                              src="../../static/media/img/flujo/cotizacion/edit.png"
                              alt="icono direccion"
                            />
                          </div>
                        </b-col>
                        <b-col cols="12" class="p-0">
                          <div class="form-group text-center mb-2">
                            <b-form-input
                              id="celularEmpresa"
                              ref="celularEmpresa"
                              @keyup.native="
                                validarCelular();
                                validacionInput($event);
                              "
                              v-on:focus.native="
                                isIconPhoneNumber = !isIconPhoneNumber
                              "
                              v-on:blur.native="
                                isIconPhoneNumber = !isIconPhoneNumber
                              "
                              v-bind:class="{ errorInput: msgErrorCelular }"
                              class="input-vehicular iptGral__input iptRUC form-control input-id"
                              autocomplete="tel"
                              autofocus
                              type="tel"
                              v-model="objClients.phoneNumber"
                              required
                              maxlength="9"
                              placeholder="Celular"
                              v-on:keyup.enter="
                                processTags('correo-electronicoEmpresa')
                              "
                            ></b-form-input>
                            <img
                              class="edit-input"
                              src="../../static/media/img/flujo/cotizacion/edit.png"
                              alt="icono celular empresa"
                            />
                          </div>
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

                        <b-col cols="12" class="p-0">
                          <div class="form-group text-center mb-2">
                            <b-form-input
                              id="correo-electronicoEmpresa"
                              ref="correo-electronicoEmpresa"
                              @keyup.native="
                                validacionInput($event);
                                validarEmail();
                              "
                              v-bind:class="{ errorInput: msgErrorEmail }"
                              v-on:focus.native="
                                isIconEmailAddress = !isIconEmailAddress
                              "
                              v-on:blur.native="
                                isIconEmailAddress = !isIconEmailAddress
                              "
                              class="input-vehicular iptGral__input iptRUC form-control input-id"
                              autocomplete="on"
                              autofocus
                              type="text"
                              v-model="objClients.emailAddress"
                              required
                              placeholder="Correo Electrónico"
                            ></b-form-input>
                            <img
                              class="edit-input"
                              src="../../static/media/img/flujo/cotizacion/edit.png"
                              alt="icono email empresa"
                            />
                          </div>
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
                    </b-col>
                  </b-row>
                </div>
              </b-row>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12">
          <b-row class="justify-content-center box_aceptoTerminos">
            <b-col cols="12" lg="4">
              <b-row class="box-row">
                <b-col
                  cols="12"
                  class="p-0 box-row d-none"
                  v-bind:class="{
                    mostrarDatosyCheckbox: mostrarDatosyCheckbox,
                  }"
                >
                  <div class="checkbox-aux font-nunito check-ip mb-0">
                    <label class="col box-checkbox text-center">
                      <span class="checkbox-aux__descripcion pr-0">
                        Al continuar
                        <a
                          href="javascript:void(0);"
                          @click="eventoModalTerminosCondiciones()"
                          >acepto las Condiciones de Uso y Política de
                          Privacidad</a
                        >.
                      </span>
                    </label>
                  </div>
                </b-col>

                <div class="maestra d-none d-lg-block">
                  <b-col
                    cols="12"
                    class="mb-0 d-none"
                    v-bind:class="{
                      mostrarDatosyCheckbox: mostrarDatosyCheckbox,
                    }"
                  >
                    <div class="msgCompletaDatosInicialbase">
                      <span
                        class="msgCompletaDatosInicial"
                        v-bind:class="{ msgCompletaDatos: msgCompletaDatos }"
                      >
                        Por favor completa los datos para continuar
                      </span>
                    </div>
                  </b-col>
                </div>

                <b-col cols="12" class="pr-0">
                  <div class="box-btn">
                    <button
                      type="submit"
                      :disabled="isDisableButton"
                      @click="continuar($event)"
                      class="btn box-btn--dni box-btn__button"
                    >
                      continuar
                    </button>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-modal
        id="leaveBlackWeek"
        class="modal-blackWeek"
        static
        centered
        hide-footer
        hide-header
      >
        <b-container style="height: 100%">
          <b-row class="align-items-center" style="height: 100%">
            <b-col cols="12">
              <div class="banner-modal">
                <img
                  src="./../../static/media/modalBlackWeek/modal.svg"
                  alt=""
                />
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
              <b-button @click="hideModalBlackWeek()"
                >QUIERO CONTINUAR</b-button
              >
            </b-col>
          </b-row>
        </b-container>
      </b-modal>
      <b-modal
        id="modal1"
        ref="ingresaTuPlaca"
        title="Bootstrap-Vue"
        hide-footer
        hide-header
        size="lg"
      >
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

      <b-modal
        id="leaveDocument"
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
              <img class="img-verano" width="100%"  src="./../../static/media/img/campania/img-modal.svg" alt="">
              <p class="mt-3" style="max-width: 360px;">
                <strong style="color : #ffffff; font-size: 30px"> {{this.$store.state.common.objCliente.firstName}} </strong> <br> <br> 
               <span style="color : #ffffff; font-size: 18px">
                  ¡No dejes pasar esta super oportunidad! <br> Protege tu auto hoy y llévate la <br> <span style="color: #FFDD36;"> 2da cuota mensual gratis</span>
                </span>
              </p>
            </b-col>
          </b-row>
          
          <b-row class="justify-content-center">
            <b-col class="text-center mb-4" cols="12">
              <b-button @click="$nuxt.$emit('bv::hide::modal', 'leaveDocument')"
                >TERMINAR COMPRA</b-button
              >
            </b-col>
          </b-row>
        </b-container>
      </b-modal> 
      <!-- Modal de abandono -->
      <!-- <b-modal
        id="leaveDocument"
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
    </b-container>
  </section>
</template>

<style lang="scss" scoped>

@media screen and (max-width: 767px) {
  input,
  select,
  textarea {
    font-size: 16px;
  }
}
.modal-blackWeek {
  max-width: 472px;
  width: 100%;
  height: 509px;
  font-family: "Omnes Regular";
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  .banner-modal {
    img {
      width: 100%;
    }
  }
  h3 {
    font-size: 24px;
    color: #ffffff;
  }
  span {
    font-family: "Omnes Medium";
  }
  .btn {
    background-color: #ea0c90;
    color: white;
    height: 50px;
    width: 300px;
    line-height: 0.5;
    font-size: 16px;
    border-radius: 3px;
    border: none;
    &:hover {
      opacity: 0.7;
    }
  }
  p {
    color: #ffffff;
    font-size: 16px;
  }
  .modal-dialog {
    max-width: 472px;
    width: 100%;
    height: 509px;
  }
  .modal-content {
    max-width: 472px;
    width: 100%;
    height: 509px;
    background: url("./../../static/media/modalBlackWeek/fondo-modal.jpg");
  }
}
a.steps__item.paso2:after {
  content: "2" !important;
  background: #0754c4 !important;
  color: white !important;
  text-align: center;
  font-size: 14px;
}
a.steps__item.paso1:after {
  content: "1" !important;
  background: #0754c4 !important;
  color: white !important;
  text-align: center;
  font-size: 14px;
}
.steps-box {
  background: white;
  padding-top: 125px;
}
.edit-input {
  cursor: auto !important;
}
.box-principal {
  box-shadow: 0 2px 10px 0 rgba(0, 40, 80, 0.07);
  background: white;
  border-radius: 24px;
}
.maestra {
  width: 100%;
  span {
    text-align: center;
  }
}
.edit-input {
  position: absolute;
  right: 8px;
  width: 19px;
  cursor: pointer;
  z-index: 0;
}
#documento-identidad {
  padding-left: 12px;
}
.checkbox-aux
  label
  input[type="checkbox"]:checked
  + .checkbox-aux__span
  > .checkbox-aux__span--icon,
.radio
  label
  input[type="radio"]:checked
  + .checkbox-aux__span
  > .checkbox-aux__span--icon {
  content: url("../../static/media/img/check_white.png");
  position: absolute;
  width: 15px;
  height: 15px;
  left: 1px;
  top: 1px;
  z-index: 999;
}
.box-checkbox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
}
.steps-allRisk-box {
  padding-top: 0;
  margin-top: 70px;
  background: #f7f4fc;
}

.tabla_modal {
  td {
    border: 1px solid #666666;
  }
  tr {
    &:first-child {
      color: #263238;
      font-weight: bold;
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
    box-shadow: none !important;
  }
  .btn:focus {
    box-shadow: none !important;
  }
}
.mostrarDni {
  display: flex !important;
}
.msgCompletaDatosInicialbase {
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
  margin: 0;
  padding-top: 12px;
}
input:focus {
  border-bottom: #a5a5a9 2px solid;
}
.mostrarDatosPersonales {
  display: flex !important;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 28px;
}
.mostrarDatosyCheckbox {
  display: flex !important;
  align-items: center;
}
.mostrarEditarCancelar {
  display: flex !important;
  align-items: center;
}
.titulo-datosPersonales {
  position: relative;
  width: 100%;
  &__titulo {
    color: #0855c4;
    font-size: 16px;
    font-weight: 500;
    padding-left: 0;
    margin-top: 22px;
    margin-bottom: 8px;
  }
  &__editarCancelar {
    display: none;
    position: absolute;
    right: 16px;
    z-index: 99;
    border: 1px solid #0855c4;
    border-radius: 6px;
    padding: 0 4px 0 4px;
    text-align: left;
    color: #0855c4;
    font-size: 14px;
    top: 8px;
    cursor: pointer;
    img {
      width: 12px;
      margin-left: 11px;
    }
  }
}
.mostrar {
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
    display: inline-block;
    color: #484848;
    font-size: 17px;
    font-family: "Omnes Regular";
  }
}
.isUsuarioEncontrado {
  display: block !important;
}
.capa {
  background: #f7fafb94;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 5;
  left: 0;
}
.box-btn {
  margin: 4px 0 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  &:before {
    content: "";
    background: url("../../static/media/img/flujo/cotizacion/edit.png");
    height: 30px;
    width: 25px;
    position: absolute;
    right: 0;
    z-index: 0;
  }
  .icon-datos {
    position: absolute;
    margin-left: 8px;
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
    margin-top: 16px;
    background-color: #ea0c90;
    color: white;
    height: 45px;
    line-height: 0.5;
    font-size: 15px;
    width: 300px;
    border-radius: 3px;
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
  border-radius: 7px;
  padding: 16px 0 0 0;
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
    padding-left: 16px;
    a {
      color: #0055c8;
      font-weight: 500;
      letter-spacing: -0.25px;
    }
  }
}
.second-box {
  padding: 0px 12px 8px;
  background: #fff;
  border-radius: 10px 10px;
  display: none;
  .form-group {
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
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  height: 3rem;
}
.mostrarPrimerBox {
  display: flex !important;
}
.mostrarSegundoBox {
  display: flex !important;
  margin: 0;
}
.iptGral__input {
  padding-left: 6px;
}

@media (min-width: 768px) {

  .ml-2-mobile {
    margin-left: 8px;
  }
  .checkbox-aux {
    margin: auto;
  }
}
@media (min-width: 992px) {
  .modal-blackWeek {
    h3 {
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
  }
  .box_aceptoTerminos {
    margin-top: 16px;
  }
  .box-ingresaDocumento {
    margin: 0 -15px;
    .titulo-flujo {
      font-family: "Omnes Regular";
      font-size: 17px;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: 1px;
      color: #0754c4 !important;
      font-weight: 600;
    }
  }
  .box-btn {
    flex-direction: row;
    align-items: center;
  }
  .first-box {
    margin-top: 0px;
    border-radius: 7px 7px 0 0;
    .form-group {
      position: relative;
      display: flex;
      align-items: center;
    }
  }
  .mostrarDatosPersonales {
    margin-top: 0;
  }
  .second-box {
    padding: 0 16px;
  }
  .titulo-datosPersonales__editarCancelar {
    right: 16px;
  }
  .titulo-datosPersonales__titulo {
    padding-left: 16px;
  }
}
.box-datos {
  padding-top: 18px;
  padding-bottom: 10px;
}
@media (min-width: 990px) {
  .box-datos {
    .box-btn {
      padding-right: 16px;
    }
  }
}
@media (min-width: 1024px) {
  .steps-box {
    .steps-plan {
      background: transparent;
    }
  }
  .pr-lg-7 {
    padding-right: 7px;
  }
  .pl-lg-7 {
    padding-left: 7px !important;
  }
}
@media (min-width: 1200px) {
  .form-content__title {
    font-size: 24px;
  }
  .first-box {
    font-size: 16px;
    padding-bottom: 0px;
  }

  .iptGral__input {
    font-size: 15px;
  }
}
.iptGral__input.dni-segundo {
  background: #e2e2e2 !important;
  color: #7d7c7c !important;
}
select:focus,
textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {
  // border-color: #dcdcde;
  border: 1.5px solid #0855c4;
  background-image: none;
  box-shadow: none;
  padding-right: 0;
  // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #d9d9dc;
  outline: 0 none;
  // border-bottom: 1px solid #dcdcde;
}
.errorInput {
  border-color: #dc3545 !important;
}
.roboTotal {
  background: #b1b1b1;
}
.semiFull {
  background: #e6ac38;
}
.full {
  background: #27362d;
}
.leaveModal {
  .modal-content{
    background: #FFF188 !important;
  }
  .modal-lg {
    max-width: 660px;
  }
  font-family: "Omnes Regular";
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
    font-family: "Omnes Medium";
  }
  img {
    margin-top: 30px;
  }
  .btn {
    background-color: #ea0c90;
    color: white;
    height: 50px;
    width: 250px;
    line-height: 0.5;
    font-size: 16px;
    border-radius: 3px;
    border: none;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>


<script>
import modalTerminosCondiciones from "./../../components/modals/CondicionesUsoPoliticaPrivacidad";
export default {
  layout: "InterseguroFlujo",
  data() {
    return {
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
      documento_steps2: "",
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
      mostrarSegundoBox: false,
      mostrarPrimerBox: false,
      cuentaSueldo: null,
      urlDp: "",
      checkPoliticasPrivacidad: true,
      campoDocumentoInicial: null,
      camposRellenados: false,
      mostrarDatosPersonales: false,
      mostrar: false,
      mostrarDni: false,
      mostrarRuc: false,
      nombre: "",
      expirationDate: "",
      isUsuarioEncontrado: false,
      isSecondBox: false,
      todoCompleto: false,
      msgCompletaDatos: false,
      aceptaterminos: false,
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
      objVehicle: {
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
        this.validarClient()
      } else {
        this.isDisableButton = true;
        this.msgErrorEmail = true;
      }
    },
    validarCelular() {
      
      if (this.objClients.phoneNumber)
        if (
          this.objClients.phoneNumber.charAt(0) == 9 &&
          this.objClients.phoneNumber.length == 9
        ) {
          
          this.msgErrorCelular = false;
          this.validarClient()
        } else {
          this.isDisableButton = true;
          this.msgErrorCelular = true;
          
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
            this.$store.commit("common/setEmisionROOT", true);
            /*
              if(inputDate.getTime() ===  todaysDate.getTime()) {                 
                this.$store.commit('common/setEmisionROOT', true)
                this.$nuxt.$router.push({path: "/cotiza/descargar"})
                this.$nuxt.$router.push({path: "/cotiza/descargar"})
              }else{
                  this.$store.commit('common/setEmisionROOT', false)
                  this.$nuxt.$router.push({path: "/cotiza/como-pagar"})
              }
              */
            this.$store.commit("common/setObjCliente", this.objClients);
            // this.$nuxt.$router.push({ path: "/cotiza/descargar" });
            this.$nuxt.$router.push({ path: "/cotiza/como-pagar" });
          } else {
            this.$store.commit("common/setObjCliente", this.objClients);
            this.$store.commit("common/setEmisionROOT", false);
            this.$nuxt.$router.push({ path: "/cotiza/como-pagar" });
          }
        } else {
          this.$store.commit("common/setObjCliente", this.objClients);
          this.$nuxt.$router.push({ path: "/cotiza/como-pagar" });
          this.$store.commit("common/setEmisionROOT", false);
        }
      } else {
        this.$store.commit("common/setObjCliente", this.objClients);
        this.$nuxt.$router.push({ path: "/cotiza/como-pagar" });
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
      let fecha = new Date();
      let horaError =
        fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
      return horaError;
    },
    pago_datalayer(error_detectado) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "Errores",
        category: "ErroresPago",
        action: error_detectado + " Ocurrio a las " + this.horaError(),
        error_detectado: error_detectado + " Ocurrio a las " + this.horaError(),
      });
    },
    hideModal() {
      this.$refs.ingresaTuPlaca.hide();
    },
    detectar_documento() {
      this.itemElegido.documentoLocalSinEspacios = this.itemElegido.documentoLocal
        .replace(/[^0-9\s]/gi, "")
        .replace(/[_\s]/g, "");
      let documento = this.itemElegido.documentoLocalSinEspacios;
      // let tamaño = documento.length
      this.tamaño = documento.length;
      // return tamaño
    },
    validarCampos() {
      if (this.tamaño == 8 || this.tamaño == 9) {
        if (this.validarClient() && this.checkPoliticasPrivacidad == true) {
          this.aceptaterminos = false;
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
          this.aceptaterminos = true;
          this.$store.commit("common/setCheckgss", 0);
          this.isDisableButton = true;
          if (!this.validarClient()) {
            this.aceptaterminos = false;
          }
        }
      } else if (this.tamaño == 11) {
        if (this.validarRUC() && this.checkPoliticasPrivacidad == true) {
          this.aceptaterminos = false;
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
          this.aceptaterminos = true;
          this.$store.commit("common/setCheckgss", 0);
          this.isDisableButton = true;
          if (!this.validarRUC()) {
            this.aceptaterminos = false;
          }
        }
      } else {
      }
    },
    editarCancelar() {
      this.ocultarInputDocumento = !this.ocultarInputDocumento;
      this.mostrarPrimerBox = !this.mostrarPrimerBox;
      this.mostrarSegundoBox = !this.mostrarSegundoBox;
      this.mostrarDatosPersonales = !this.mostrarDatosPersonales;
      
      this.tamaño = this.objClients.documentNumber.length;
      
    },
    /*OBS CLICK ACAY SI NOO ES CUENTA SUELDO MODAL
    http://localhost:3000/vehicular/vehicular/cuentasueldo
   **** VOLVER CUANDO SI ES CUENTA SUELDO EN EL COTIZADOR CAMBIA EL MONTO
    */
    continuar(evt) {
      this.$store.state.common.listaCotizacion.policy.startDate = this.$store.state.common.fechaVigencia;
      // this.$store.state.common.listaCotizacion.paymentMethodId = 3
      this.isDisableButton = true;
      evt.preventDefault();
      this.detectar_documento();
      this.$store.commit("common/setObjectDigodat", this.cobertura_is);
      if (this.tamaño == 8 || this.tamaño == 9) {
        if (this.$store.state.common.clientState == 0) {
          this.createClient();
        } else if (this.$store.state.common.clientState == 1) {
          this.updateClient();
          // this.isDisableButton = false;
          // this.$store.commit('common/setEmail', this.objClients.emailAddress)
          // this.$store.commit('common/setDocumentLocal', this.itemElegido.documentoLocal)
          // this.$nuxt.$router.push({path: "/cotiza/como-pagar"})
        } else {
        }
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
      } else {this.$nuxt.$router.push({path: "/cotiza/cotizacion"});
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
          this.msgErrorEmail = false
          this.msgCompletaDatos = false;
          this.isDisableButton = false;
          return true;
        } else {
          
          this.msgCompletaDatos = true;
          this.msgErrorEmail = true
          this.isDisableButton = true;
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
          this.mostrarPrimerBox = false;
          this.mostrarSegundoBox = false;
          this.objClients.firstName = "";
          this.objClients.firstLastName = "";
          this.objClients.secondLastName = "";
          this.objClients.phoneNumber = "";
          this.objClients.emailAddress = "";
          this.objClients.address = "";
          this.mostrarDni = false;
          this.isUsuarioEncontrado = false;
          this.mostrarDatosyCheckbox = false;
          this.mostrarEditarCancelar = false;
        }
        if (this.tamaño >= 8) {
          var self = this;
          self.loading = true;

          self.mostrarDatosPersonales = false;
          self.msgCompletaDatos = false;

          self.isOculto = true;
          self.mostrarDni = false;
          self.mostrarRuc = true;

          if (self.tamaño == 8 || self.tamaño == 9) {
            self.getClient(1);
          } else if (self.tamaño == 10) {
            self.mostrarDatosPersonales = false;
            self.mostrarDatosyCheckbox = false;
            self.mostrarDni = false;
            self.mostrarRuc = false;
            self.loading = false;
            self.mostrarPrimerBox = false;
            self.mostrarSegundoBox = false;
            self.mostrarEditarCancelar = false;
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
    validarClienteVuex() {
      this.mostrarDatosPersonales = false;
      this.loading = false;
      this.isOculto = true;
      this.mostrarDni = true;
      this.mostrarRuc = false;
      if (this.estado_cliente == 1) {
        if (this.validarClient()) {
          this.ocultarInputDocumento = true;
          this.mostrarDatosPersonales = true;
          this.mostrarDatosyCheckbox = true;
          this.msgCompletaDatos = false;
          this.mostrar = true;
          this.mostrarPrimerBox = true;
          this.mostrarSegundoBox = false;
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
          this.aceptaterminos = false;
          this.msgCompletaDatos = true;
          this.mostrar = false;
          this.mostrarPrimerBox = false;
          this.mostrarSegundoBox = true;
          this.isSecondBox = true;
          this.isDisableButton = true;
        }
      } else {
        this.cobertura_is.personType = null;
        this.mostrarEditarCancelar = false;
        this.mostrarDatosPersonales = false;
        this.mostrarDatosyCheckbox = true;
        this.mostrarSegundoBox = true;
        this.mostrar = false;
        this.aceptaterminos = false;
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
      this.mostrarDni = false;
      this.mostrarRuc = true;
      if (this.estado_cliente == 1) {
        if (this.validarRUC()) {
          this.ocultarInputDocumento = true;
          this.mostrarEditarCancelar = true;
          this.mostrarDatosPersonales = true;
          this.mostrarDatosyCheckbox = true;
          this.msgCompletaDatos = false;
          this.mostrar = true;
          this.mostrarPrimerBox = true;
          this.mostrarSegundoBox = false;
          this.aceptaterminos = true;
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
          this.aceptaterminos = false;
          this.msgCompletaDatos = true;
          this.mostrar = false;
          this.mostrarPrimerBox = false;
          this.mostrarSegundoBox = true;
          this.isSecondBox = true;
          this.isDisableButton = true;
        }
      } else {
        this.cobertura_is.personType = null;
        this.mostrarEditarCancelar = false;
        this.mostrarDatosPersonales = false;
        this.mostrarDatosyCheckbox = true;
        this.mostrarSegundoBox = true;
        this.mostrar = false;
        this.aceptaterminos = false;
        this.msgCompletaDatos = true;
        this.cobertura_is.personType = null;
        this.cotizador_datalayer("checkout", 2);
      }
    },
    delay(event, ms) {
      this.isDisableButton = true;
      this.mostrarDatosPersonales = false;
      this.mostrarSegundoBox = false;
      this.mostrarPrimerBox = false;
      this.mostrarDatosyCheckbox = false;

      var self = this;
      clearTimeout(self.timer);
      self.timer = setTimeout(function () {
        self.validacionDocumento(event);
      }, ms);
    },
    validacionInput(event) {
      
      if ((this.tamaño == 8 || this.tamaño == 9) && !this.msgErrorEmail &&!this.msgErrorCelular) {
        
        this.isDisableButton = true;
        this.objClients.phoneNumber =
          this.objClients.phoneNumber != null || undefined
            ? this.objClients.phoneNumber
                .replace(/[^0-9\s]/gi, "")
                .replace(/[_\s]/g, "")
            : "";
        if (this.validarClient()) {
          
          this.msgCompletaDatos = false;
          
        } else {
          
          this.aceptaterminos = false;
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
            this.aceptaterminos = false;
          } else {
            this.aceptaterminos = true;
          }
        } else {
          this.aceptaterminos = false;
          this.msgCompletaDatos = true;
          this.isDisableButton = true;
        }
      }else{
        
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
              // setTimeout(() => {
              //   this.$refs.nombre.focus();
              // }, 500);
              this.validarClienteVuex();
            }, 500);
          } else if (parametro == 2) {
            setTimeout(() => {
              // setTimeout(() => {
              //   this.$refs["razon-social"].focus();
              // }, 500);
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
              // setTimeout(() => {
              //   this.$refs.nombre.focus();
              // }, 500);
              this.validarClienteVuex();
            }, 500);
          } else if (parametro == 2) {
            setTimeout(() => {
              // setTimeout(() => {
              //   this.$refs["razon-social"].focus();
              // }, 500);
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
      this.$store.commit(
        "common/setDocumentoLocal",
        this.itemElegido.documentoLocal
      );
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
      this.objVehicle = JSON.parse(localStorage.getItem("objVeh"));
      this.objRemarketing = {
        codigoRemarketing:
          this.$store.state.common.codigoRemarketingGenerado == null
            ? ""
            : this.$store.state.common.codigoRemarketingGenerado,
        producto: this.$store.state.common.businessId,
        identificador: this.$store.state.common.plateNumber.toUpperCase(),
        detalle: {
          correo: this.$store.state.common.email.trim().replace(/ /g, "").toLowerCase(),
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
            /******************************************************** */
            /******************************************************** */
            // idMarca: this.objectVehicle.brandId,
            // idModelo: this.objectVehicle.modelId,
            // idUso: 1,
            // uso: "particular",
            // valorCalculado: this.listCotizacion.policy.monthlyCalculated,
            // pagoTrimestral: this.listCotizacion.policy.quarterly,
            // pagoAnual: this.listCotizacion.policy.annual,
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
    
    this.fechaVigencia = this.$store.state.common.fechaVigencia;
    this.cobertura_is = this.$store.state.common.objectDigodat;
    this.cotizador_datalayer("checkout", 1);
    let objJWT = JSON.parse(localStorage.getItem("jwt"));
    if (objJWT == null || objJWT == undefined) {
      this.$nuxt.$router.push("/");
    } else {
      let objJWT = JSON.parse(localStorage.getItem("jwt"));
      this.documento_steps2 = objJWT.common.documentoLocal;
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
        } else if (objJWT.common.documentoLocal.length == 11) {
          this.getClient(2);
        } else {
        }
      }
    }

    this.aceptaterminos = true;

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

