<template>
  <section class="steps-box">
    <b-container class="box-container">
      <b-row class="justify-content-center">

        <section>

          <div><h2 class="actualiza-tus-datos">Actualiza tus datos de pago</h2></div>
          <!-- <div class="box-plate-number">

             <div id="plateNumber" class="box-input">
              <b-form-input
                id="txtPlateNumber"
                class="plate-number"
                v-model="plateNumber"
                @keyup.native="delay($event,750)"
                placeholder="Ingresa tu placa"
                autocomplete="off"
                maxlength="6"
                :disabled="flagProcesoFinalizado"
              >
              </b-form-input>
            </div>

          </div> -->

          <div class="datos-cliente" v-if="!flagDisabledAll">
            <b-col class="nombre">{{objClient.firstName+' '+objClient.firstLastName+' '+objClient.secondLastName}}</b-col>
            <b-col class="modelo">{{objVehicle.model}}</b-col>
            <b-col class="deuda">Monto: $ {{objVehicle.debt}}</b-col>
          </div>

          <div style="max-width: 386px; min-height: 325px;">

            <div class="tab">
              <button id="btnCard" class="tablinks text-button-tarjeta card_disabled" v-on:click="metodoPago($event, 'tabTarjeta', 'btnPay')" :disabled="isEnableTarjeta" >Tarjeta</button>
              <button id="btnPay" class="tablinks pago-efectivo_disabled" v-on:click="metodoPago($event, 'tabPagoEfectivo', 'btnCard')" :disabled="isEnablePagoEfectvo" ></button>
            </div>

            <div id="tabTarjeta" class="tabcontent" >

              <div v-if="!flagProcesoFinalizado">

                <div class="box-tarjeta-info">
                  <div class="box-tarjeta-info1">
                    <label id="label1" class="info1 disabled" >Ingresa tu tarjeta</label>
                    <label id="label2" class="info2 disabled" >Débito o crédito</label>
                  </div>

                  <div class="box-tarjeta-info2">
                    <label id="label3" class="compra-tranquilo disabled">Compra tranquilo en Interseguro</label>
                  </div>
                  <div class="box-tarjeta-info3" v-if="!flagDisabledAll">
                    <img src="../../static/media/img/pagoEfectivo/candado.png" height="21" width="15"/>
                  </div>
                  <div class="box-tarjeta-info3" v-else>
                    <img src="../../static/media/img/pagoEfectivo/candado_disabled.png" height="21" width="15"/>
                  </div>

                </div>

                <div class="box-card">

                  <b-row class="box-number-card">
                    <b-col >
                      <input
                        id="cardnumber"
                        @keyup="addingBlankSpaces($event)"
                        v-model="objCardNumber.number"
                        maxlength="19"
                        type="tel"
                        class="form-control ipt-cartNumber"
                        :disabled="flagDisabledAll"
                        placeholder="Número de Tarjeta"
                      >
                      <div class="box-card-img">
                        <img width="25" :src="creditCardImage">
                      </div>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col style="margin: 15px 0 0 0;">

                      <b-form-input
                        id="cardmes"
                        @keyup.native="validacionInputFecha($event)"
                        autocomplete="off"
                        autofocus
                        type="tel"
                        v-model="expirationCard"
                        maxlength="5"
                        placeholder="MM/AA"
                        :disabled="flagDisabledAll"
                      ></b-form-input>

                    </b-col>
                    <b-col style="margin: 15px 0 0 0;">
                      <div class="form-group-custom">
                        <div id="cvv" class="box-cvv help_disabled" @click="validCard()">
                          <input
                            variant="custom"
                            id="cardccv"
                            class="form-control text-uppercase ipt-cvv "
                            :disabled="flagDisabledAll"
                            @keyup="keyUpCard()"
                            @focus="focusCVV()"
                            @blur="blurCVV"
                            :maxlength="this.numberTest"
                            v-model="card.cvv"
                            autocomplete="off"
                            type="tel"
                            name="name"
                            placeholder="CVV"
                          >
                        </div>
                      </div>
                    </b-col>
                  </b-row>


                </div>

                <b-row style="margin: 15px 0 0 0;">
                  <b-col style="text-align: center; position: relative; ">
                    <button
                      id="btnActualizar"
                      type="submit"
                      @click="continuar"
                      class="btn-actualizar-tarjeta"
                      :disabled="isEnableTerminar">
                      Actualizar Tarjeta
                    </button>
                    <b-spinner id="spinner" class="spinner spinner-pos" small type="grow"></b-spinner>
                    <a class="box-btn__button box-btn--back" @click="volver" href>Volver</a>
                  </b-col>
                </b-row>

              </div>
              <div v-else>

                <b-row style="justify-content: center;" >
                  <img src="../../static/media/img/pagoEfectivo/checkConfirmation.png" height="133" width="133"/>
                </b-row>

                <div class="tus-datos-de-pago">
                  <div class="datos-pago">Tus datos de pago fueron actualizados correctamente. Ma&ntilde;ana intentaremos realizar el cobro del monto pendiente.</div>
                </div>
                <a class="box-btn__button box-btn--back" @click="volver" href>Volver</a>
              </div>

              <div id="focusCVV">
                <img class="img-fluid" :src="creditCardImageCvv">
              </div>

            </div>

            <div id="tabPagoEfectivo" class="tabcontent">

              <b-row style="margin: 15px 0 0 0;">
                <b-col style="text-align: center"> <label class="codigo-de-pago">Código de Pago</label> </b-col>
              </b-row>

              <div v-if="!flagProcesoFinalizado">

                <b-row style="margin: 15px 0 0 0;">
                  <b-col class="descripcion-pagoefectivo">
                    <p class="al-generar-tu-codigo">
                      Al generar tu código de pago se te otorgaran 48 horas para
                      finalizar esta compra, debes acercarte a pagar con el código de pago que se te otorgara a la
                      entidad bancaria que mejor se te acomode.
                    </p>
                  </b-col>
                </b-row>
                <b-row style="margin: 15px 0 0 0;">
                  <b-col style="text-align: center; ">
                    <button class="button-pago-efectivo" v-on:click="generatePagoEfectivo()" :disabled="flagDisabledAll">
                      Generar Código
                    </button>
                    <b-spinner id="spinner2" class="spinner spinner-pos" small type="grow"></b-spinner>
                  </b-col>
                </b-row>
                <b-row style="margin: 15px 0 0 0;">
                  <b-col class="pie-pago-efectivo">
                    <p class="nota-pago-efectivo">
                      Nota: El código de pago (CIP) es solo informativo y no una
                      constancia de pago confirmado hasta la realización del mismo a través de los canales autorizados
                    </p>
                  </b-col>
                </b-row>

              </div>
              <div v-else>

                <div class="box-pago-informacion">
                  <div class="box-pago-info1">
                    <label class="fecha-hasta">Código válido hasta:</label>
                  </div>
                  <div class="box-pago-info2">
                    <label class="fecha-hasta">Monto:</label>
                  </div>
                  <div class="box-pago-info3">
                    <label class="detalle-hasta">{{expirationDate}}</label>
                  </div>
                  <div class="box-pago-info4">
                    <label class="detalle-hasta">$ {{objPagoEfectivo.amount/100}}</label>
                  </div>

                </div>

                <b-row>
                  <b-col class="col-box-code">
                    <div class="box-label-code" >
                      <label class="label-code">{{objPagoEfectivo.payment_code}}</label>
                    </div>
                  </b-col>
                </b-row>

                <b-row style="margin: 15px 0 0 0; text-align: center;">
                  <b-col class="label-envio-correo">
                    <img src="../../static/media/img/pagoEfectivo/correo.png" height="12" width="12"/>
                    Toda la información se envió a tu correo:
                  </b-col>
                </b-row>
                <b-row style="text-align: center;">
                  <b-col class="label-envio-correo">{{this.objClient.emailAddress}}</b-col>
                </b-row>
                <a class="box-btn__button box-btn--back" @click="volver" href>Volver</a>
              </div>

            </div>

          </div>

        </section>

      </b-row>

    </b-container>
  </section>
</template>

<script>
    import {validationMixin} from "vuelidate";
    // import DateDropdown from "vue-date-dropdown";
    import ClipLoader from "vue-spinner/src/ClipLoader.vue";

    let cardNumber;
    export default {
        layout: "InterseguroHome",
        data() {
            return {
                currency: "USD",
                text: "",
                plateNumber: "",
                flagDisabledAll: true,
                isDisabledPayment: true,
                isDisabled: false,
                isDisabledPagoEfectivo: false,
                objVehicle: {},
                objClient: {},
                objPagoEfectivo: {},
                flagDatosCliente: false,
                flagTarjetaActualizada:false,
                flagPagoEfectivoGenerado:false,
                flagProcesoFinalizado:false,
                expirationCard:"",
                expirationDate:"",



                numberValidation: {
                    isValid: ''
                },
                creditCardImageCvv: '',
                urlCondicionado: "",
                color: "#00ADEE",
                color1: "#00ADEE",
                size: "45px",
                margin: "2px",
                radius: "2px",
                nombreCliente: "",
                objCardNumber: {
                    number: ""
                },
                loading: true,
                numberTest: 0,
                cvvcci: "CCV",
                checkDocs: false,
                baseUrlImage: "",
                creditCardImage: "",
                isisplayNoneLoader: true,
                nroDocumento: "",
                cardValitor: false,
                card_id: "",
                expiration_year: "",
                card: {
                    email: "",
                    card_number: "",
                    public_key: process.env.culqiPK,
                    url: process.env.culquiURL,
                    secure: "true",
                    cvv: "",
                    expiration_year: "",
                    expiration_month: "",
                    fingerprint: 162191035,
                    method: "js"
                },
                objCulqui: {},
                cardCompleto: true
            };
        },
        components: {
            ClipLoader
        },
        computed: {
            isEnable: function(){
                return this.cardCompleto;
            },
            isEnableTarjeta() {
                return this.flagDisabledAll || this.flagPagoEfectivoGenerado;
            },
            isEnablePagoEfectvo() {
                return this.flagDisabledAll || this.isDisabledPagoEfectivo || this.flagTarjetaActualizada;
            },
            isEnableTerminar(){
                // return this.flagDisabledAll || this.isDisabledPayment;
                return this.flagDisabledAll;
            }
        },
        methods: {
            activarEfecto() {
                var spinner = document.querySelector('#spinner');
                spinner.style.display = "inline-block";

                var spinner2 = document.querySelector('#spinner2');
                spinner2.style.display = "inline-block";
            },
            desactivarEfecto() {
                var spinner = document.querySelector('#spinner');
                spinner.style.display = "none";

                var spinner2 = document.querySelector('#spinner2');
                spinner2.style.display = "none";
            },
            delay(event, ms) {
                if (this.plateNumber.length === 6) {
                    this.isDisabled = true;
                    var self = this;
                    clearTimeout(self.timer);
                    self.timer = setTimeout(function () {
                        self.validacionInput(event);
                    }, ms);
                } else {
                    this.limpiarTarjeta();

                    document.getElementById("plateNumber").classList.remove("check");

                    document.getElementById('btnCard').classList.remove('active');
                    document.getElementById('btnCard').classList.remove('card');
                    document.getElementById('btnCard').classList.add('card_disabled');

                    document.getElementById('btnPay').classList.remove('active');
                    document.getElementById('btnPay').classList.remove('pago-efectivo');
                    document.getElementById('btnPay').classList.add('pago-efectivo_disabled');

                    document.getElementById("tabPagoEfectivo").style.display = "none";
                    document.getElementById("tabTarjeta").style.display = "block";

                    document.getElementById('cvv').classList.remove('help');
                    document.getElementById('cvv').classList.add('help_disabled');

                    document.getElementById('label1').classList.add('disabled');
                    document.getElementById('label2').classList.add('disabled');
                    document.getElementById('label3').classList.add('disabled');
                    document.getElementById('btnActualizar').classList.remove('btn-actualizar');
                    this.creditCardImage = ''
                    this.creditCardImageCvv = ''


                    this.isDisabled = false;
                    this.flagDisabledAll = true;
                    this.isDisabledPayment = true;
                }
            },
            limpiarTarjeta(){
                this.objCardNumber.number= '';
                this.expirationCard='';
                this.card.expiration_year='';
                this.card.expiration_month='';
                this.card.cvv='';
            },
            validacionInput(event) {
                this.plateNumber = this.plateNumber.replace(/[^a-z0-9\s]/gi, "").replace(/[_\s]/g, "");
                var longitudDePlaca = this.plateNumber.length;
                if (longitudDePlaca > 6) {
                    this.plateNumber = this.plateNumber.slice(0, 6);
                } else if (longitudDePlaca === 6) {
                    event.preventDefault();
                    // this.mostrarMensaje = "";
                    // this.isDisabledMsg = true;
                    // this.loading = true;
                    // this.isDisabled = true;
                    // localStorage.setItem("placa", this.placa);
                    // localStorage.setItem("email", this.email);

                    this.getClientTarjetaHector()
                        .then(() => {
                            // if (localStorage.getItem("objPoliza") !== null) {
                            //     localStorage.setItem("objPoliza", JSON.stringify(this.objPoliza));
                            //     localStorage.setItem("objVeh", JSON.stringify(this.objVehicle));
                            // }
                        });

                    this.isDisabled = false;
                }
            },
            validacionInputFecha(event) {
                var str = event.target.value;
                let charCode = event.which ? event.which : event.keyCode;

                if (str.length === 1) {
                    if (
                        str !== "0" &&
                        str !== "1" &&
                        event.keyCode !== 8
                    ) {
                        this.expirationCard = "0" + str + "/";
                    }
                } else if (str.length === 2 || str.length === 3 || str.length === 4) {
                    if (event.keyCode !== 8) {
                        this.expirationCard = this.expirationCard
                            .replace(/\W/gi, "")
                            .replace(/(.{2})/g, "$1/");
                    }
                }

                if (str.length == 5 && str.search("/") == 2 ) {

                    var res = str.split("/");

                    if (this.cardValitor) {
                        let mes = res[0].length;
                        let año = res[1].length;
                        let ccv = document.querySelector("#cardccv").value.length;

                        if (mes == 2 && año == 2 ) {
                            document.getElementById("cardccv").focus();

                            if(ccv > 2){
                                this.isDisabledPayment = false;
                            } else{
                                this.isDisabledPayment = true;
                            }

                        } else {
                            this.isDisabledPayment = true;
                        }
                    }
                } else {
                    this.isDisabledPayment = true;
                }

            },

            getClientTarjetaHector() {
                return new Promise((resolve, reject) => {
                    this.$axios
                        .post(
                            "provider/v1/client/vehicle/" + this.plateNumber
                        )
                        .then(res => {
                            if (res.data.code === 0) {
                                this.flagDisabledAll = false;

                                this.objVehicle = res.data.body;
                                this.objClient = res.data.body.client;
                                this.card.email = this.objClient.emailAddress;
                                this.nroDocumento = this.objClient.documentNumber;

                                //document.getElementById("plateNumber").classList.add("check");

                                document.getElementById('btnCard').classList.remove('card_disabled');
                                document.getElementById('btnCard').classList.add('card');
                                document.getElementById('btnCard').classList.add('active');

                                document.getElementById('cvv').classList.remove('help_disabled');
                                document.getElementById('cvv').classList.add('help');

                                document.getElementById('label1').classList.remove('disabled');
                                document.getElementById('label2').classList.remove('disabled');
                                document.getElementById('label3').classList.remove('disabled');
                                document.getElementById('cvv').classList.add('help');

                                document.getElementById('btnActualizar').classList.add('btn-actualizar');

                                if (this.objVehicle.debt === 0){
                                    this.isDisabledPagoEfectivo = true;
                                } else {
                                    this.isDisabledPagoEfectivo = false;
                                }

                                resolve(res);


                            } else {
                                this.flagDisabledAll = true;

                                document.getElementById('btnCard').classList.remove('active');
                                document.getElementById('btnCard').classList.remove('card');
                                document.getElementById('btnCard').classList.add('card_disabled');

                                document.getElementById('btnPay').classList.remove('active');
                                document.getElementById('btnPay').classList.remove('pago-efectivo');
                                document.getElementById('btnPay').classList.add('pago-efectivo_disabled');

                                document.getElementById('cvv').classList.remove('help');
                                document.getElementById('cvv').classList.add('help_disabled');

                                document.getElementById('label1').classList.add('disabled');
                                document.getElementById('label2').classList.add('disabled');
                                document.getElementById('label3').classList.add('disabled');
                                document.getElementById('btnActualizar').classList.remove('btn-actualizar');

                                this.creditCardImage = ''
                                this.creditCardImageCvv = ''

                                reject(res);
                            }
                        })
                        .catch(err => {
                            reject(err);
                            this.isisplayNoneLoader = true;
                        });
                });
            },

            generatePagoEfectivo() {

                this.activarEfecto();

                return new Promise((resolve, reject) => {
                    this.$axios
                        .post(
                            "culqi/v1/order/", {
                                plate_number: this.plateNumber,
                                amount: this.objVehicle.debt,
                                currency_code: this.currency,
                                description: "Deuda de póliza vehicular"
                            }
                        )
                        .then(res => {
                            if (res.data.code === 0) {
                                this.flagPagoEfectivoGenerado = true;
                                this.flagProcesoFinalizado = true;
                                this.objPagoEfectivo = res.data.body;

                                this.convertirUnixADate(this.objPagoEfectivo.expiration_date);

                                document.getElementById("tabTarjeta").disabled = true;

                                resolve(res);
                            } else {
                                this.desactivarEfecto();

                                this.$swal({
                                    title: "Oops...",
                                    text: "Ocurrió un error inesperado.",
                                    type: "error",
                                    showCancelButton: false,
                                    confirmButtonColor: "#2177CC",
                                    confirmButtonText: "OK"
                                });
                                // reject(res);
                            }
                        })
                        .catch(err => {
                            //reject(err);
                            this.desactivarEfecto();
                            this.$swal({
                                title: "Oops...",
                                text: "Ocurrió un error inesperado.",
                                type: "error",
                                showCancelButton: false,
                                confirmButtonColor: "#2177CC",
                                confirmButtonText: "OK"
                            });
                            // this.isisplayNoneLoader = true;
                        });
                });
            },

            convertirUnixADate(unixDate){

                let date = new Date(unixDate*1000);

                var optionsDate = { dateStyle: 'medium'};
                var optionsHour = { timeStyle:'short', hour12:true};

                this.expirationDate = date.toLocaleDateString('es-PE', optionsDate) + ' - ' + date.toLocaleDateString('es-PE', optionsHour);

            },

            disabledAll(){

                document.getElementById("tabTarjeta___BV_tab_button__").disabled = true;

            },
            uppercase(obj){
                obj.value = obj.value.toUpperCase();
            },
            /*******************************************************************************************
             *****************************AQUI TERMINA LO DE HECTOR****************************************
             *******************************************************************************************/

            volver(evt) {
                evt.preventDefault();
                this.$nuxt.$router.push({
                    path: "/metodoPago/valida-tus-datos"
                });
            },

            hideModalAutoorizacionPoliza() {
                this.$refs.hideModalAutoorizacionPoliza.hide();
            },

            getClientTarjeta() {
                return new Promise((resolve, reject) => {
                    this.$axios
                        .get(
                            "provider/v1/client/client-card/" + localStorage.getItem("placa")
                        )
                        .then(res => {
                            if (res.data.code == 0) {
                                this.objClient = res.data.body;
                                this.card.email = this.objClient.email;
                                this.nroDocumento = this.objClient.documentNumber;
                                resolve(res);
                            } else if (res.data.code == 201) {
                                reject(res);
                            } else {
                                reject(res);
                            }
                        })
                        .catch(err => {
                            reject(err);
                            this.isisplayNoneLoader = true;
                        });
                });
            },

            getTokenCulqi(elemento) {
                return new Promise((resolve, reject) => {
                    this.$axios
                        .post('https://secure.culqi.com/v2/tokens', elemento, {
                            headers: {'Authorization': 'Bearer ' + process.env.culqiPK}
                        })
                        .then(res => {
                            if (res) {
                                this.objCulqui = res.data;
                                resolve(res);
                            } else {
                                this.$swal({
                                    title: "Oops...",
                                    text: res.data,
                                    type: "error",
                                    showCancelButton: false,
                                    confirmButtonColor: "#2177CC",
                                    confirmButtonText: "OK"
                                });
                            }
                        })
                        .catch(err => {
                            this.isisplayNoneLoader = true;
                            reject(err);
                        });
                });
            },

            getCard() {
                return new Promise((resolve, reject) => {
                    this.$axios
                        .post("culqi/v1/cards", {
                            customer_id: this.nroDocumento,
                            details: {
                                card_brand: this.objCulqui.iin.card_brand,
                                card_category: this.objCulqui.iin.card_category,
                                card_number: this.objCulqui.card_number,
                                card_type: this.objCulqui.iin.card_type,
                                card_bank : this.objCulqui.iin.issuer.name
                            },
                            token_id: this.objCulqui.id,
                            policyId:  localStorage.getItem("policyId")
                        })
                        .then(res => {
                            if (res.data.code == 0) {
                                this.card_id = res.data.body.id;
                                this.isisplayNoneLoader = true;
                                // this.$nuxt.$router.push({
                                //     path: "/metodoPago/change-card"
                                // });
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
                                this.isisplayNoneLoader = true;
                                reject(err);
                            }
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
            },
            /*******************************************************************************************
             *  ****************************INGRESA TU TARJETA*****************************************
             *******************************************************************************************/
            focusCVV() {
                if (process.client) {
                    document.getElementById("focusCVV").style.display = "block";
                }
            },
            blurCVV() {
                if (process.client) {
                    document.getElementById("focusCVV").style.display = "none";
                }
            },
            focusMES() {
                // document.getElementById("focusMES").style.display = "flex"
            },
            blurMES() {
                if (process.client) {
                    document.getElementById("focusMES").style.display = "none";
                }
            },
            focusTarjeta() {
                if (process.client) {
                    document.getElementById("focusTarjeta").style.display = "flex";
                }
            },
            blurTarjeta() {
                if (process.client) {
                    document.getElementById("focusTarjeta").style.display = "none";
                }
            },
            addingBlankSpaces(ev) {
                let valid = require('card-validator')
                cardNumber = ev.target.value
                let numberValidation = valid.number(cardNumber.replace(/ /g, ''))
                this.numberValidation = valid.number(cardNumber.replace(/ /g, ''))
                //this.tipoTarjetaDatalayer = numberValidation.card.type
                if (numberValidation.card !== null) {

                    this.numberTest = numberValidation.card.code.size
                    this.cvvcci = numberValidation.card.code.name
                    let cardType = numberValidation.card.type !== 'american-express' ? numberValidation.card.type : 'amex'
                    this.creditCardImage = require('../../static/media/img/pagoEfectivo/' + cardType + '.png')
                    this.creditCardImageCvv = require('../../static/media/img/flujo/como-pagar/' + cardType + 'cvv' + '.png')
                } else {
                    this.creditCardImage = ''
                    this.creditCardImageCvv = ''
                }
                if (ev.keyCode !== 8) {
                    this.objCardNumber.number = this.objCardNumber.number.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
                }
                this.card.card_number = cardNumber.split(" ").join("");
                if (numberValidation.isValid) {
                    this.cardCompleto = false
                    this.cardValitor = true;

                    let mes = document.querySelector("#cardmes").value.length
                    let ccv = document.querySelector("#cardccv").value.length

                    if (numberValidation.card.code.name == "CVV" || numberValidation.card.code.name == "CVC" ) {
                        if (process.client) {
                            if (mes == 5 && ccv == 3) {
                                this.isDisabledPayment = false
                            }
                        }

                    } else if (numberValidation.card.code.name == "CID") {
                        if (mes == 2 && año == 2 && ccv == 3) {
                            this.isDisabledPayment = false
                        }
                    }
                    if (process.client) {
                        document.querySelector("#cardmes").focus()
                    }

                } else {
                    this.isDisabledPayment = true
                    this.cardCompleto = true
                }
            },
            continuar(evt) {
                evt.preventDefault();
                var res = this.expirationCard.split("/");

                this.card.expiration_month = res[0];
                this.card.expiration_year = "20" + res[1];
                // TODO
                let objVeh = JSON.parse(localStorage.getItem("objVeh"))
                if(objVeh != null || objVeh != undefined) {
                  console.log(objVeh.client.emailAddress);
                  this.card.email = objVeh.client.emailAddress;
                }

                this.isisplayNoneLoader = false;


                if(!this.isDisabledPayment) {

                    this.activarEfecto();

                    this.isDisabledPayment = true;

                    this.getTokenCulqi(this.card).then(res => {
                        this.getCard()
                            .then((res) => {
                                this.flagTarjetaActualizada=true;
                                this.flagProcesoFinalizado = true;
                                document.getElementById("tabPagoEfectivo").disabled = true;

                            })
                            .catch((res) => {
                                this.desactivarEfecto()
                                this.$swal({
                                    title: "Oops...",
                                    text: "Ocurrió un error inesperado",
                                    type: "error",
                                    showCancelButton: false,
                                    confirmButtonColor: "#2177CC",
                                    confirmButtonText: "OK"
                                });
                            });
                    })
                        .catch(err => {
                            this.desactivarEfecto()
                            this.$swal({
                                title: "Oops...",
                                text: "Ocurrió un error inesperado",
                                type: "error",
                                showCancelButton: false,
                                confirmButtonColor: "#2177CC",
                                confirmButtonText: "OK"
                            });
                        });

                    // ;

                } else {
                    this.$swal({
                        title: "Oops...",
                        text: "Por favor, corrija los datos de su tarjeta",
                        type: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#2177CC",
                        confirmButtonText: "OK"
                    });
                }


            },

            keyUpCard() {
                let str = document.querySelector("#cardmes").value;

                if (str.length == 5 && str.search("/") == 2 ) {

                    var res = str.split("/");


                    if (this.cardValitor) {
                        let mes = res[0].length;
                        let año = res[1].length;
                        let ccv = document.querySelector("#cardccv").value.length;
                        if (mes == 2 && año == 2 && ccv > 2) {

                            this.isDisabledPayment = false;
                        } else {
                            this.isDisabledPayment = true;
                        }
                    }
                } else {
                    this.isDisabledPayment = true;
                }

            },
            validCard() {
                if (!this.flagDisabledAll && !this.numberValidation.isValid) {
                    this.$swal({
                        title: "Oops...",
                        text: "Debe ser una tarjeta válida",
                        type: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#2177CC",
                        confirmButtonText: "OK"
                    });
                }
            },
            PaginaVista() {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "pagina_vista",
                    "page-url": "/vehicular/metodoPago/registrar-tarjeta",
                    "page-title": "Registrar Tarjeta"
                });
            },
            metodoPago(evt, pago, tabDisabled) {

                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");

                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }

                if(tabDisabled === 'btnCard'){

                    document.getElementById(tabDisabled).classList.remove('card');
                    document.getElementById(tabDisabled).classList.add('card_disabled');
                    document.getElementById(evt.target.id).classList.remove('pago-efectivo_disabled');
                    document.getElementById(evt.target.id).classList.add('pago-efectivo');
                }else{

                    document.getElementById(tabDisabled).classList.remove('pago-efectivo');
                    document.getElementById(tabDisabled).classList.add('pago-efectivo_disabled');
                    document.getElementById(evt.target.id).classList.remove('card_disabled');
                    document.getElementById(evt.target.id).classList.add('card');
                }

                document.getElementById(pago).style.display = "block";
                evt.currentTarget.className += " active";


            }
        },
        validations: {
            payment: {
                card_number: {
                    mustBeCreditCard: cardNumber => {
                        let valid = require("card-validator");
                        let numberValidation = valid.number(cardNumber.replace(/ /g, ""));
                        if (numberValidation.isPotentiallyValid && numberValidation.isValid) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            }
        },
        mounted: function () {
            this.urlCondicionado = require("./../../static/media/documentos/Condicionado_General.pdf");
            document.getElementById("tabTarjeta").style.display = "block";

            var spinner = document.querySelector('#spinner');
            spinner.style.display = "none";
            var spinner2 = document.querySelector('#spinner2');
            spinner2.style.display = "none";

            this.plateNumber = localStorage.getItem("placa");
            this.getClientTarjetaHector();

        }
    };
</script>


<style lang="scss">


  .spinner-pos{
    position: absolute;
    right: 70px;
    top: 10px;
    background-color: #FFFFFF;
  }

  #tabTarjeta button:focus{
    outline: 1px dotted;
  }
  #tabTarjeta button:active{
    background-color: #ec249ae0;
  }
  #tabPagoEfectivo button:focus{
    outline: 1px dotted;
  }

  #tabPagoEfectivo button:active{
    background-color: #ec249ae0;
  }

  .box-container{
    min-height: 500px;
  }
  .img_tab{
    border: solid;
    background-image: url("../../static/media/visa.png");
  }

  input::placeholder { /* Recent browsers */
    text-transform: none;
  }


  /* Style the tab */
  .tab {
    overflow: hidden;
    display: flex;
    justify-content: center;
    position:relative;
  }

  /* Style the buttons inside the tab */
  .tab button {
    background-color: inherit;
    float: left;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;
    /*border: 0.7px solid rgba(7, 84, 196, 0.52);*/
    border: 1px solid #B9B9B9;
    border-radius: 8px;
    width: 121px;
    height: 64px;
    margin: 14px;
    position: relative;
  }

  /* Change background color of buttons on hover */
  .tab button:hover {
    /*background-color: #ddd;*/
  }

  /* Create an active/current tablink class */
  .tab button.active {
    border:1px solid #0855C4;
    color: #0855C4;
  }

  /* Style the tab content */
  .tabcontent {
    display: none;
    position: relative;
    padding: 6px 12px;
    border-top: none;
  }

  /* Style the close button */
  .topright {
    float: right;
    cursor: pointer;
    font-size: 28px;
  }

  .topright:hover {color: red;}

  .actualiza-tus-datos {
    color: #0855C4;
    font-family: 'Omnes Medium';
    font-size: 16px;
    font-weight: 500;
    line-height: 15px;
    text-align: center;
  }

  .box-number-card{
    text-align: center;
    padding-bottom: 5px;
    display: flex;
    position: relative;
  }

  .box-card-img{
    position: absolute;
    right: 27px;
    top: 4px;
  }

  .box-plate-number{
    display: flex;
    justify-content: center;
    padding-top: 10px;
    .plate-number{
      background-color: #FFFFFF;
      /*border: 0.7px solid rgba(7, 84, 196, 0.52);*/
      border: 1px solid #0855C4;
      border-radius: 29.5px;
      width: 227px;
      height: 36px;
      text-align: center;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 400;
      line-height: 19px;
      color: #a6a6a6;
      display: inline-block;

    }
    .box-input{
      width: 227px;
      height: 36px;
      position: relative;
    }
  }

  .text-uppercase{
    text-transform: uppercase;
  }

  .check::after{
    content: url('../../static/media/img/pagoEfectivo/checkSmall.png');
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 8px;

  }

  .help::after{
    content: url('../../static/media/img/pagoEfectivo/help.svg');
    width: 13px;
    height: 13px;
    position: absolute;
    right: 15px;
    top: 8px;
  }

  .help_disabled::after{
    content: url('../../static/media/img/pagoEfectivo/help_disabled.svg');
    width: 13px;
    height: 13px;
    position: absolute;
    right: 15px;
    top: 8px;
  }

  .disabled{
    color: #ced4da !important;
  }

  #tabTarjeta button:disabled{
    background-color: #AAAAAA;
  }

  .btn-actualizar{
    background-color: #EA0C90;
  }

  input.form-control:focus {
    border-color:rgba(7, 84, 196, 0.52);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px #005bff6b;
    color: #a6a6a6;
    z-index: none;
  }

  input.form-control:disabled {
    border: 1px solid #ced4da;
    background-color: #FFFFFF;
  }


  .datos-cliente{
    text-align: center;
    padding-top: 9px;
    padding-bottom: 15px;
  }

  .nombre{
    color: rgba(7, 84, 196, 0.52);
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    font-weight: bold;
  }

  .modelo{
    color: rgba(7, 84, 196, 0.62);
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
  }

  .deuda{
    color: rgba(7, 84, 196, 0.58);
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
    text-align: center;
  }

  .text-button-tarjeta{
    font-size: 13px !important;
    text-align: center !important;
    padding-top: 35px !important;
    padding-left: 43px !important;
    color: #B9B9B9;
    position: relative;
    display: flex;
  }

  .text-disabled{
    color: #B9B9B9;
  }


  .card::after{
    content: url('../../static/media/img/pagoEfectivo/card.png');
    width: 20px;
    height: 20px;
    position: absolute;
    right: 50px;
    top: 12px;
  }

  .pago-efectivo::after{
    content: url('../../static/media/img/pagoEfectivo/pagoefectivo.png');
    width: 100px;
    height: 44px;
    position: absolute;
    right: 9px;
    top: 10px;
  }


  .card_disabled::after{
    content: url('../../static/media/img/pagoEfectivo/card_disabled2.png');
    width: 20px;
    height: 20px;
    position: absolute;
    right: 50px;
    top: 12px;
  }

  .pago-efectivo_disabled::after{
    content: url('../../static/media/img/pagoEfectivo/pagoefectivo_disabled.png');
    width: 100px;
    height: 44px;
    position: absolute;
    right: 9px;
    top: 10px;
  }


  .codigo-de-pago {
    color: #0855C4;
    font-size: 18px;
    font-weight: 600;
    line-height: 19px;
    text-align: center;
  }

  .descripcion-pagoefectivo{
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .al-generar-tu-codigo {
    color: #4E4E4E;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.19px;
    line-height: 14px;
    width: 376px;
    text-align: center;
  }

  .button-pago-efectivo {
    background-color: #EA0C90;
    border-radius: 18px;
    width: 311px;
    height: 36px;
    color: #FFFFFF;
    &focus{
      outline:none;
    }

  }


  .pie-pago-efectivo{
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .nota-pago-efectivo {
    color: #719CD5;
    font-size: 11px;
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.16px;
    line-height: 14px;
    width: 262px;
    text-align: center;
  }


  /*Pago efectivo procesado*/

  .box-fecha-hasta{
    text-align: center;
  }

  .fecha-hasta{
    color: #0855C4;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.16px;
    line-height: 14px;
  }

  .detalle-hasta{
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.16px;
    line-height: 14px;
    color: #888888;
  }

  .box-resumen{
    display: flex;
    justify-content: center;
  }
  .box-resumen-row{
    margin: 5px 0px 0px;
    text-align: center;
    width: 400px;
  }

  .col-box-code{
    text-align: center;
    justify-content: center;
    display: flex;
  }

  .box-label-code{
    border: 1px solid #0855C4;
    border-radius: 40px;
    width: 360px;
    height: 36px;
    position: relative;
  }

  .label-code{
    letter-spacing: 5px;
    padding-top: 5px;
    color: #8e8e8e;
    font-weight: bold;
  }

  .label-envio-correo{
    color: #00D256;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.19px;
    line-height: 16px;
  }

  input[type]{
    border: 1px solid #0855C4;
    border-radius: 18px;
    height: 36px;
    text-align: center;
    color: #a6a6a6;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
  }

  .card-information{
    padding-top: 10px;
    padding-bottom: 20px;
  }

  .info1{
    color: #0855C4;
    font-size: 18px;
    font-weight: 600;
    line-height: 19px;
    text-align: left;
  }

  .info2{
    color: #8bade4;
    font-size: 15px;
    font-weight: 600;
    text-align: left;
  }

  .compra-tranquilo {
    color: #00D256;
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    text-align: right;
    padding-right: 10px;
  }

  .box-tarjeta-info{
    display: flex;
    width: auto;
    height: 50px;
    margin-top: 15px;
    margin-bottom: 20px;
    label{
      margin:0;
    }
  }

  .box-tarjeta-info1{
    width: 50%;
  }
  .box-tarjeta-info2{
    width: 45%;
    padding-left: 40px;
    display: flex;
    position: relative;
    align-items: center;
  }
  .box-tarjeta-info3{
    width: 5%;
    display: flex;
    position: relative;
    align-items: center;
  }

  .btn-actualizar-tarjeta {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    background-color: #EA0C90;
    border-radius: 18px;
    width: 267px;
    height: 36px;
  }

  .box-pago-informacion{
    display: flex;
    width: auto;
    height: 40px;
    margin-top: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    text-align: center;
    label{
      margin:0;
    }
  }

  .box-pago-info1{
    width: 70%;
    height: 10px;
  }

  .box-pago-info2{
    width: 15%;
    height: 10px;
  }

  .box-pago-info3{
    width: 70%;
    height: 10px;
  }

  .box-pago-info4{
    width: 15%;
    height: 10px;
  }

  .box-card{
    text-align: center;
    padding-bottom: 5px;
  }

  .tus-datos-de-pago {
    color: #00D256;
    font-size: 17px;
    font-weight: 400;
    line-height: 23px;
    text-align: center;
    width: auto;
  }

  .datos-pago{
    padding-top: 30px;
  }

  .box-cvv{
    position:relative;
  }
  /*******************************************************************************************************************************************/


  #card-body {
    width: 500px;
  }

  .card-header {
    display: flex;
    justify-content: center;
  }


  .steps-box {
    padding-top: 92px;
  }

  .montoTachado {
    color: #a7a7a7;
    text-decoration: line-through;
    font-weight: 500;
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
    font-weight: 500;
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
    color: #00ADEE;
    font-weight: 600;
    border: 1px solid #00ADEE;
  }

  .contenedor-custom {
    padding: 0;
  }

  .btn-movil {
    position: sticky;
    bottom: 5px;
    z-index: 100;
    width: 100%;
    height: 50px;
    display: flex;
    background: transparent;

    &__volver {
      width: 80px;
      border-radius: 5px 0 0 5px;
      border: none;

      i {
        color: #263238;
      }
    }

    &__pagar {
      position: relative;
      width: 100%;
      padding: 0;
      margin: 0;
      border-radius: 0 5px 5px 0;
      opacity: 1 !important;

      &:disabled {
        background: #777777;
      }
    }
  }

  .boxtitulo {
    width: 100%;

    &__dto5 {
      position: absolute;
      top: 10px;
      right: 4px;
    }

    &__principal {
      color: #0855c4;
      font-size: 18px;
      margin: 0;
      line-height: 1;
      font-weight: bold;
      line-height: 24px;
    }

    &__secundario {
      color: #616161;
      font-size: 14px;
      line-height: 15px;
      display: inline-block;
      margin: 0;
      padding-top: 8px;
    }
  }

  .metodo-pago {
    border-radius: 20px;
    margin: 0 16px;
    margin-bottom: 24px;

    .imgs {
      padding-top: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .msg-alterno {
      color: #0bd360;
      font-size: 13px;
      line-height: 16px;

      font-weight: 600;
    }

    .cliploader {
      background: transparent;
    }


    .spinner-tarjeta {
      position: relative;
      height: 50px;
    }

    .spinner-descripcion {
      font-size: 11px;
      text-align: center;
      margin-bottom: 0;
    }

    .iptGral__input {
      text-align: center;
    }

    .panel-custom {
      // padding: 18px;
      // margin: 0 -15px;
      .text-secundario {
        font-size: 14px;
        color: #3b3131;
        width: 100%;
        display: inline-block;
      }

      .text-secundario__movil {
        color: #3b3131;
      }
    }

    &__comoPagar {
      padding: 24px 16px;
      border-radius: 16px 16px 0 0;
    }

    &__ingresatarjeta {
      padding: 24px 16px 12px;
      border-radius: 16px;

      .boxtitulo {
        &__secundario {
          color: #0bd360;
        }
      }

      .checkbox-aux__span {
        width: 18px;
        height: 18px;
      }

      .checkbox-aux__span--icon {
        font-size: 14px;
        position: absolute;
      }

      .checkbox-aux__descripcion {
        margin-left: -12px;
        width: 86%;
      }
    }
  }

  .fechaVigencia {
    display: block;
    position: relative;
    flex-direction: column;

    .text-inicio {
      padding-right: 15px;
      color: #0855c4;
      font-weight: bold;
    }

    img {
      position: absolute;
      right: 15px;
      width: 24px;
      z-index: 9;
      bottom: 22px;
    }

    #fechaCustom {
      text-align: center;
      color: #263238;
      font-size: 18px;
      border: white;
      border-bottom: 2px solid #263238;
      margin-bottom: 15px;
      box-shadow: none;
      position: relative;
      z-index: 9;
      background: transparent;
      width: 100%;
    }

    .vdp-datepicker__calendar {
      background: #4c96b9;
      left: 0px;
      border-radius: 10px;
      color: white;
      border: 2px solid #328eb9;
    }
  }

  #filter {
    label {
      text-transform: initial;
    }
  }

  #monthly-radio:checked ~ #filter .monthly .igv_aux1,
  #quarterly-radio:checked ~ #filter .quarterly .igv_aux2,
  #annual-radio:checked ~ #filter .annual .igv_aux3 {
    display: block !important;
    font-weight: 500;
  }

  .igv_aux {
    display: none;
  }

  #inicioVigencia {
    height: 45px;
    width: 200px;
    text-align: center;
    border: 2px solid #9e9e9e57;
    border-radius: 5px;
    color: #757575;
  }

  #inicioVigencia:focus {
    border: 2px solid #9e9e9e57;
    box-shadow: none;
  }

  .texto-inferior {
    font-size: 18px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    .metodo-pago {
      &__comoPagar {
        // padding: 4px 15px;
        padding: 32px 28px;
      }

      &__ingresatarjeta {
        // padding: 4px 15px;
        padding: 32px 28px;
      }
    }
    .btn-movil {
      display: none;
    }
    .fechaVigencia {
      display: flex;

      .text-inicio {
        padding-right: 15px;
      }
    }
  }

  /****************************************************************
      ************************INGRESA TU TARJETA***********************
      ****************************************************************/
  #focusCVV {
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

    img {
      width: 100%;
    }
  }

  #focusMES {
    position: absolute;
    left: 15px;
    display: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #005ea1;
    border-radius: 5px;
    overflow: hidden;
    width: 170px;
    height: 85px;
    bottom: 110px;
    padding: 5px;
    color: white;
    z-index: 99;

    img {
      width: 100%;
    }
  }

  #focusTarjeta {
    position: absolute;
    left: 15px;
    display: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    background: #005ea1;
    border-radius: 5px;
    overflow: hidden;
    width: 280px;
    height: 100px;
    bottom: 180px;
    padding: 5px;
    color: white;
    z-index: 99;
    font-size: 14px;

    img {
      width: 100%;
    }
  }

  .modal-confirmaTusDatos {
    border: 0 !important;
    padding: 8px 24px;

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

  .error-gral {
    background: red;
    width: 100%;
    text-align: center;
    padding-top: 15px;
    height: 40px;
    display: none;
  }

  .error-card {
    background: red;
    width: 100%;
    text-align: center;
    padding-top: 15px;
    height: 40px;
    display: none;
  }

  .box-checkbox {
    display: flex;
    align-items: center;
  }

  .box-iptCard {
    position: relative;

    img {
      position: absolute;
      right: 0;
      z-index: 99;
      padding-top: 8px;
    }
  }

  .isActivePayment {
    display: none;
  }



  .card-interseguro {
    border-radius: 5px;

    .form-label.col-form-label.label-completed {
      padding-left: 0;
      padding-bottom: 0;
    }

    .subtitulo {
      color: #0bd360;
    }

    label {
      color: #0855c4;
    }

    .slash-symbol {
      position: relative;

      label {
        position: absolute;
        bottom: -4px;
        z-index: 99;
        font-size: 26px;
        padding-bottom: 0;
        color: #0855c4;
      }
    }

    .ipt-month {
      width: 40px;
      padding: 0 0px 0px 4px;
    }

    .ipt-year {
      width: 65px;
      padding: 0 5px 0 0;
    }

    .ipt-cvv {
      width: 60px;
      padding: 0 0 0 8px;
    }

    .text-right-custom {
      text-align: right;

      label {
        padding-right: 0;
        padding-bottom: 0;
      }
    }

  }

  .card-custom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;

    &__date {
      display: flex;
      flex-wrap: wrap;

      .form-group-custom {
        &:nth-child(2) {
          width: 30%;
        }

        &:nth-child(4) {
          width: 30%;
        }
      }
    }
  }

  .modal-personal-title {
    font-family: 'Omnes Medium';
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
  }

  .modal-description {
    text-align: left;
    font-family: 'Omnes Medium';
    font-size: 16px;
    font-weight: 300;
    color: #373737;
    border: 0;
    margin-top: 10px;
  }

  .modal-personal-title {
    font-family: 'Omnes Medium';
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
  }

  .cart-button-download {
    border: solid 1px #0bd360;
    outline: 0;
    padding: 15px 24px 15px 43px;
    margin: 0.5rem auto;
    border-radius: 6px;
    text-transform: uppercase;
    font-family: 'Omnes Medium';
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 900;
    text-align: center;
    cursor: pointer;
    color: #0bd360;
    // background: url(../../static/media/img/download-icon.svg) no-repeat 10px 14px;
  }

  @media (min-width: 992px) {
    .metodo-pago {
      &__comoPagar {
        // padding: 4px 15px;
        border-radius: 20px 0 0 20px;
      }

      &__ingresatarjeta {
        // padding: 4px 15px;
        padding: 32px 28px;
      }
    }
    .contenedor-custom {
      padding: 0 15px;
    }

    .metodo-pago {
      margin: 0;
      margin-top: 16px;
    }
    #focusCVV {
      right: -160px;
      bottom: 70px;

      img {
        width: 100%;
      }
    }
    #focusMES {
      left: -147px;
      bottom: 45px;

      img {
        width: 100%;
      }
    }
    #focusTarjeta {
      left: -270px;
      bottom: 112px;

      img {
        width: 100%;
      }
    }
  }
</style>
