<template>
  <section class="steps-box">
    <b-container>
      <b-row class="justify-content-center">
        <b-col class="mb-3" cols="12" lg="12">
          <h2 class="text-center form-content__title step-title text-uppercase">
            <span class="tag-0">Actualiza </span>
            <span class="tag-1">tu tarjeta</span>
          </h2>
        </b-col>

        <b-col cols="11" lg="7" class="metodo-pago__ingresatarjeta" style="background: #DEE9F6">
          <div class="panel-custom">
            <b-row>
              <b-col cols="12" md="12">
                <div class="boxtitulo">
                  <p class="boxtitulo__principal">Ingresa tu tarjeta de débito o crédito</p>
                  <p class="boxtitulo__principal"></p>
                </div>
              </b-col>
              <b-col cols="12" md="12">
                <div class="imgs" style="padding-bottom:10px;">
                  <div class="tarjetas">
                    <span>
                      <img
                        width="25"
                        src="../../static/media/img/flujo/metodo-pago/visa.png"
                        alt="visa"
                      >
                    </span>
                    <span>
                      <img
                        width="25"
                        src="../../static/media/img/flujo/metodo-pago/mastercard.png"
                        alt="mastercard"
                      >
                    </span>
                    <span>
                      <img
                        width="23"
                        src="../../static/media/img/flujo/metodo-pago/american.png"
                        alt="amex"
                      >
                    </span>
                    <span>
                      <img
                        width="25"
                        src="../../static/media/img/flujo/metodo-pago/dinners.png"
                        alt="dinners"
                      >
                    </span>
                  </div>
                </div>
              </b-col>
              <b-col cols="12" md="12"></b-col>
            </b-row>
          </div>
          <div class="panel-custom pt-3 pb-0">
            <b-row>
              <b-col cols="12" sm="11">
                <form class="card-interseguro">
                  <div class="form-group-custom">
                    <label class="form-label col-form-label label-completed">Número de la tarjeta</label>
                    <div
                      id="focusTarjeta"
                    >Luego de ingresar los datos de tu tarjeta y darle clic al botón de pagar, estarás asegurado automáticamente con nosotros. Una persona de Interseguro te contactará.</div>
                    <div class="input-group iptGral editable box-iptCard">
                      <input
                        @focus="focusTarjeta"
                        @blur="blurTarjeta"
                        id="cardnumber"
                        @keyup="addingBlankSpaces($event)"
                        v-model="objCardNumber.number"
                        maxlength="19"
                        type="tel"
                        class="form-control text-uppercase iptGral__input ipt-cartNumber"
                      >
                      <img width="30" :src="creditCardImage">
                      <span class="error-card">error momentaneo</span>
                    </div>
                  </div>
                  <div class="card-custom">
                    <div class="card-custom__date">
                      <div class style="width: 100%;">
                        <label
                          class="form-label col-form-label label-completed"
                        >Fecha de vencimiento</label>
                      </div>
                      <div class="form-group-custom">
                        <div class="input-group iptGral editable">
                          <input
                            @focus="focusMES"
                            @blur="blurMES"
                            id="cardmes"
                            class="form-control text-uppercase iptGral__input ipt-month"
                            @keyup="keyUpMes()"
                            maxlength="2"
                            v-model="card.expiration_month"
                            type="tel"
                            name="name"
                          >
                        </div>
                        <div id="focusMES">Fecha de vencimiento de tu tarjeta.</div>
                      </div>
                      <div class="form-group-custom slash-symbol">
                        <label>/</label>
                      </div>
                      <div class="form-group-custom text-right-custom">
                        <div class="input-group iptGral editable">
                          <input
                            id="cardaño"
                            class="form-control text-uppercase iptGral__input ipt-year"
                            @keyup="keyUpCard()"
                            maxlength="2"
                            v-model="expiration_year"
                            type="tel"
                            name="name"
                          >
                        </div>
                      </div>
                    </div>
                    <div class="card-custom__cvv">
                      <div class="form-group-custom">
                        <label class="form-label col-form-label label-completed">CCV</label>
                        <div class="input-group iptGral editable" @click="validCard()">
                          <input
                            @focus="focusCVV"
                            @blur="blurCVV"
                            variant="custom"
                            id="cardccv"
                            class="form-control text-uppercase iptGral__input ipt-cvv"
                            :disabled="isEnable"
                            @keyup="keyUpCard()"
                            :maxlength="this.numberTest"
                            v-model="card.cvv"
                            type="tel"
                            name="name"
                          >
                        </div>
                      </div>
                    </div>
                    <div id="focusCVV">
                      <img class="img-fluid" :src="creditCardImageCvv">
                    </div>
                  </div>
                  <div class="error-gral">Error momentáneo</div>
                  <br>
                </form>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" md="12" lg="4">
          <div class="checkbox-aux font-nunito">
            <label class="col box-checkbox" id="show-modal">
              <input type="checkbox" @change="isTrueTerminos" v-model="checkDocs" id="checkDocs">
              <span class="checkbox-aux__span">
                <i class="checkbox-aux__span--icon fa fa-check"></i>
              </span>
              <span class="checkbox-aux__descripcion">
                <a href="javascript:void(0);" v-b-modal.modal1>He leído y acepto</a>
                las condiciones de la póliza
              </span>
            </label>
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center" v-bind:class="{ isActivePayment: isisplayNoneLoader }">
        <b-col cols="12" md="12" lg="6">
          <b-row>
            <b-col cols="3">
              <clip-loader :loading="loading" :color="color" :size="size"></clip-loader>
            </b-col>
            <b-col cols="9">
              <h4>Estamos realizando los cambios</h4>
              <p>Tomará unos segundos</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="box-btn justify-content-center">
        <b-col cols="12" md="6" lg="4">
          <button
            type="submit"
            @click="continuar"
            class="btn box-btn__button box-btn--primary offset-3"
            :disabled="this.isDisabledPayment"
          >CONFIRMAR</button>
          <a class="box-btn__button box-btn--back" @click="volver" href>Volver</a>
        </b-col>
      </b-row>

      <div>
        <b-modal
          id="modal1"
          title="Bootstrap-Vue"
          hide-footer
          hide-header
          ref="hideModalAutoorizacionPoliza"
          size="lg"
        >
          <div class="modal-content modal-confirmaTusDatos">
            <b-btn
              class="mt-3 btn-secondary"
              @click="hideModalAutoorizacionPoliza()"
              style="background: white; border: none;"
            >
              <img
                src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b5f46206abb673bc5374fdb_icon-close.svg"
                width="40"
                alt="icon close"
                class="image-9"
              >
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
              <br>
              <br>Certifico que las respuestas y declaraciones realizadas en este sitio web son verídicas y que se ajustan
              a la realidad y de no serlo, cualquier declaración falsa hecha por el Contratante, voluntaria o
              involuntariamente, invalida esta solicitud y libera de toda responsabilidad y compromiso indemnizatorio
              a
              Interseguro Compañía de Seguros, quedando el seguro emitido en virtud de esta solicitud nulo y sin
              efecto.
            </p>
            <div class="row">
              <button
                class="cart-button-download col-6 offset-3"
                type="button"
                id="button-download"
              >
                <a v-bind:href="urlCondicionado" target="_blank" rel="noopener">Condicionado General</a>
              </button>
            </div>
          </div>
        </b-modal>
      </div>
    </b-container>
  </section>
</template>

<script>
import { validationMixin } from "vuelidate";
// import DateDropdown from "vue-date-dropdown";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
let cardNumber;
export default {
  layout: "InterseguroHome",
  data() {
    return {
      numberValidation:{
        isValid:''
      },
      creditCardImageCvv: '',
      urlCondicionado: "",
      color: "#00ADEE",
      color1: "#00ADEE",
      size: "45px",
      margin: "2px",
      radius: "2px",
      objClient: {},
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
      expirationDate: "",
      isDisabledPayment: true,
      isisplayNoneLoader: true,
      nroDocumento: "",
      cardValitor: false,
      plateNumber: "",
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
  computed:{
      isEnable: function(){
          return this.cardCompleto;                
      },
  },
  methods: {
    volver(evt) {
      evt.preventDefault();
      this.$nuxt.$router.push({
        path: "/metodoPago/valida-tus-datos"
      });
    },

    hideModalAutoorizacionPoliza() {
      this.$refs.hideModalAutoorizacionPoliza.hide();
    },

    isTrueTerminos() {
      if (process.client) {
        if (this.cardValitor) {
          let mes = document.querySelector("#cardmes").value.length;
          let año = document.querySelector("#cardaño").value.length;
          let ccv = document.querySelector("#cardccv").value.length;
          if (
            mes == 2 &&
            año == 2 &&
            ccv == this.numberTest &&
            this.checkDocs == true
          ) {
            this.isDisabledPayment = false;
          } else {
            this.isDisabledPayment = true;
          }
        }
      }
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
          .post('https://secure.culqi.com/v2/tokens', elemento,{
            headers: { 'Authorization': 'Bearer '+process.env.culqiPK }
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
              card_type: this.objCulqui.iin.card_type
            },
            token_id: this.objCulqui.id,
            policyId:  localStorage.getItem("policyId")
          })
          .then(res => {
            if (res.data.code == 0) {
              this.card_id = res.data.body.id;
              this.isisplayNoneLoader = true;
              this.$nuxt.$router.push({
                path: "/metodoPago/change-card"
              });
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
    addingBlankSpaces (ev) {
                let valid = require('card-validator')
                cardNumber = ev.target.value
                let numberValidation = valid.number(cardNumber.replace(/ /g, ''))
                this.numberValidation = valid.number(cardNumber.replace(/ /g, ''))
                //this.tipoTarjetaDatalayer = numberValidation.card.type
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
    continuar(evt) {
      evt.preventDefault();
      this.isDisabledPayment = true;
      this.card.expiration_year = "20" + this.expiration_year;
      this.isisplayNoneLoader = false;
      this.getTokenCulqi(this.card).then(res => {
          this.getCard()
          .then((res)=>{})
          .catch((res)=>{
          });
        })
        .catch(err => console.log("ERROR", err));
    },

    keyUpMes() {
      let mes = document.querySelector("#cardmes").value.length;
      if (mes == 2) {
        document.getElementById("cardaño").focus();
        if (this.cardValitor) {
          let mes = document.querySelector("#cardmes").value.length;
          let año = document.querySelector("#cardaño").value.length;
          let ccv = document.querySelector("#cardccv").value.length;
          if (mes == 2 && año == 2 && ccv > 2 && this.checkDocs == true) {
            this.isDisabledPayment = false;
          } else {
            this.isDisabledPayment = true;
          }
        }
      } else {
        this.isDisabledPayment = true;
      }
    },
    keyUpCard() {
      let año = document.querySelector("#cardaño").value.length;
      if (año == 2) {
        document.getElementById("cardccv").focus();
      }
      if (this.cardValitor) {
        let mes = document.querySelector("#cardmes").value.length;
        let año = document.querySelector("#cardaño").value.length;
        let ccv = document.querySelector("#cardccv").value.length;
        if (mes == 2 && año == 2 && ccv > 2 && this.checkDocs == true) {
          this.isDisabledPayment = false;
        } else {
          this.isDisabledPayment = true;
        }
      }
    },
    validCard() {
      if (!this.numberValidation.isValid) {
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
  mounted: function() {
    this.plateNumber = localStorage.getItem("placa");
    this.urlCondicionado = require("./../../static/media/documentos/Condicionado_General.pdf");
    this.PaginaVista();
    this.getClientTarjeta();
  }
};
</script>


<style lang="scss">
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
  .box-btn__button {
    height: 50px;
    line-height: 50px;
    padding: 0;
  }
  .box-btn__button.enlace-back {
    text-transform: capitalize;
    color: #616161;
    position: relative;
    text-align: left;
    padding-left: 32px;
    font-weight: 500;
    img {
      position: absolute;
      left: 0;
      top: 12px;
    }
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
    background: #f7fafb;
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

#button-download a {
  color: #0bd360;
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
.card-interseguro,
#cardnumber,
#cardmes,
#cardaño,
#cardccv {
  background: #dee9f6 !important;
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
input.form-control.text-uppercase.iptGral__input:focus {
  box-shadow: none;
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
  .iptGral__input {
    color: #616161;
    font-size: 20px;
    padding-left: 12px;
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
    right: -147px;
    bottom: 45px;
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

