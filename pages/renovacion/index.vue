<template>
    <div>  
        <div class="capadecarga" v-bind:class="{ 'opacidad': opacidad }">
            <img src="../../static/media/interseguroVehicular_v2/carga.gif" alt="capa de carga para loading">            
        </div>
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
            <b-container>
                <b-row> 
                    <b-col cols="12">
                        <div class="card-banner">
                        </div>
                    </b-col>
                </b-row>                
            </b-container>    
            <b-container> 
                <b-row class="d-flex  justify-content-center">
                    <b-col cols="12" lg="6">
                        <div class="card-datos__titulo">
                            <p class="card-datos--titulo">{{this.objRenovacion.client.firstName}}, manejar tranquilo nunca fue tan fácil</p>  
                            <p class="card-datos--subtitulo">Tu seguro vehicular se renovará automáticamente</p>                      
                        </div>
                        <div class="card-datos ">
                            <div class="card-datos__icon">
                                <div class="box-icon">
                                    <img class="d-none  d-lg-flex" src="../../static/media/img/bp-car.svg" alt="icon step ingresa tu placa">
                                </div>
                            </div>                            
                            <div class="card-datos__detalle">
                                <p>Placa: <strong>{{this.objRenovacion.vehicle.plateNumber}}</strong>&nbsp;&nbsp; |&nbsp;&nbsp; Año: <strong>{{this.objRenovacion.vehicle.modelYear}}</strong></p>
                                <div class="card-datos__detalle--auto">
                                    <p>Marca: <strong>{{this.objRenovacion.vehicle.brandName}}</strong> &nbsp;&nbsp;|&nbsp;&nbsp; Modelo: <strong>{{this.objRenovacion.vehicle.modelName}}</strong> </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-valorComercial  bg-white  mt-3">
                            <p class="titulo-seccion">Tu seguro vehicular</p>

                            <p class="mb-2"> Vigencia de póliza: <span> {{this.objRenovacion.policy.fromDate}}</span>-<span> {{this.objRenovacion.policy.toDate}}</span></p>
                            <div><span class="check">&#10095;</span> Suma asegurada :  <span class="monto-actual">$ {{listCotizacion.vehicle.current}}</span>
                                <div class="caja-oculta">
                                    <div v-if="!mostrarValorComercial">
                                        <span class="cambiar" @click="cambiarValor">Cambiar</span>
                                    </div>
                                    <div v-else>
                                        <span class="guardar" @click="guardarValor">Guardar</span>
                                    </div>
                                </div>
                            </div>

                            <div class="card-valorComercial--box">
                                <div class="box-range">                                    
                                    <div v-if="mostrarValorComercial">
                                        <div class="box-range">            
                                            <b-form-input class="e-range" step="100" v-model="listCotizacion.vehicle.current" type="range" :min="isMinimo" :max="isMaximo" @change="cambioInput()"></b-form-input> 
                                        </div>
                                        <!-- <b-form-input class="e-range" step="100" v-model="listCotizacion.vehicle.current" type="range" :min="isMinimo" :max="isMaximo" @change="cambioInput()"></b-form-input>  -->
                                    </div>
                                    
                                </div>                        
                            </div>
                            
                            <div class="card-valorComercial--prima">
                                <!-- <p v-if="this.listCotizacion.policy !== undefined">Cuota $ {{ this.listCotizacion.policy.annual == undefined ? this.cuota : this.listCotizacion.policy.annual}} </p> -->
                                <p v-if="this.payment == 1"><span class="check">&#10095;</span> Cuota: <span style="color: #1296ff">$ {{ this.listCotizacion.policy.monthly}} </span> </p>
                                <p v-else-if="this.payment == 2"><span class="check">&#10095;</span> Cuota: <span style="color: #1296ff">$ {{ this.listCotizacion.policy.quarterly}} </span> </p>
                                <p v-else-if="this.payment == 3"><span class="check">&#10095;</span> Cuota: <span style="color: #1296ff">$ {{ this.listCotizacion.policy.annual}} </span> </p>
                                <p v-else-if="this.payment == 4"><span class="check">&#10095;</span> Cuota: <span style="color: #1296ff">$ {{ this.listCotizacion.policy.twoYears}} </span> </p>
                                <p v-else></p>
                            </div>

                            <div class="card-frecuenciaPago ">
                                <p v-if="this.payment == 1"><span class="check">&#10095;</span> Frecuencia de pago :  <span class="monto-actual">Mensual</span></p>
                                <p v-else-if="this.payment == 2"><span class="check">&#10095;</span> Frecuencia de pago :  <span class="monto-actual">Trimestral</span></p>
                                <p v-else-if="this.payment == 3"><span class="check">&#10095;</span> Frecuencia de pago :  <span class="monto-actual">Anual</span></p>
                                <p v-else-if="this.payment == 4"><span class="check">&#10095;</span> Frecuencia de pago :  <span class="monto-actual">Plan 2 años</span></p>
                                <input type="radio" id="monthly-radio" class="input-radioButon" v-model="payment" name="priceInformation" value="1">
                                <input type="radio" id="quarterly-radio" class="input-radioButon" v-model="payment" name="priceInformation" value="2">
                                <input type="radio" id="annual-radio"  class="input-radioButon" v-model="payment" name="priceInformation"  value="3">
                                <input type="radio" id="biannual-radio"  class="input-radioButon" v-model="payment" name="priceInformation"  value="4">
                                <div id="filter" v-if="mostrarFrecuenciaPago">
                                    <b-card no-body>                                                
                                        <b-tabs v-model="tabIndex" pills card class="planesRenovaciones-tabs">                                        
                                            <b-tab title="Plan 1 año" class="plan-uno  pt-0">
                                                
                                                <b-col cols="12">
                                                    <label for="monthly-radio" class="filter-label monthly radio-button" @click="radioComoPagar($event)">                                                    
                                                        <div class="d-flex align-items-center">
                                                            <span class="filter-icon"></span>                                                       
                                                            <div>
                                                                <span class="radio-buttons__text-price">Mensual</span><span> (12 cuotas)</span>
                                                                <div class="precios" >
                                                                    <span>$&nbsp;{{listCotizacion.policy.monthly}}</span>                                                         
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>                                            
                                                </b-col>
                                                <b-col cols="12">
                                                    <label for="quarterly-radio" class="filter-label quarterly radio-button"  @click="radioComoPagar($event)">                                                    
                                                        <div class="d-flex align-items-center">
                                                            <span class="filter-icon"></span>
                                                            <div>
                                                                <span class="radio-buttons__text-price">Trimestral</span><span> (4 cuotas)</span>    
                                                                <div class="precios">
                                                                    <span>$&nbsp;{{listCotizacion.policy.quarterly}}</span>                                                       
                                                                </div>
                                                            </div>                                                                 
                                                        </div>
                                                    </label>
                                                </b-col>
                                                <b-col cols="12">
                                                    <label for="annual-radio" class="filter-label annual radio-button"  @click="radioComoPagar($event)">                                                    
                                                        <div class="d-flex align-items-center">
                                                            <span class="filter-icon"></span>
                                                            <div>
                                                                <span class="radio-buttons__text-price">Anual </span><span> (1 cuota)</span>
                                                                <div class="precios">
                                                                    <span>$&nbsp;{{listCotizacion.policy.annual}}</span>                              
                                                                </div>
                                                            </div>
                                                        </div>                                                        
                                                    </label>
                                                </b-col>
                                            </b-tab>
                                            <b-tab title="Plan 2 años" class="plan-dos">                                                        
                                                <b-col cols="12">
                                                    <label for="biannual-radio" class="filter-label biannual radio-button"  @click="radioComoPagar($event)">                                                    
                                                        <div class="label-bianual">
                                                            <div class="d-flex align-items-center">
                                                                <span class="filter-icon"></span>
                                                                <div>
                                                                    <span class="radio-buttons__text-price">Plan 2 años&nbsp;(1 cuota) + SmartTV</span>
                                                                    <div class="precios">
                                                                        <span>$&nbsp;{{listCotizacion.policy.twoYears}}</span>                                                          
                                                                    </div>
                                                                </div> 
                                                            </div>                                                       
                                                        </div>
                                                    </label>
                                                </b-col>
                                            </b-tab>
                                        </b-tabs>
                                    </b-card>
                                </div>
                                <div class="caja-oculta">
                                    <div v-if="!mostrarFrecuenciaPago">
                                        <span class="cambiar" @click="cambiarFrecuencia">Cambiar</span>
                                    </div>
                                    <div v-else>
                                        <span class="guardar" @click="guardarFrecuencia">Guardar</span>
                                    </div>
                                </div>    
                            </div>
                        </div>   
                         
                        <div class="card-gpsEndoso  bg-white">                            
                            <div class="card-gpsEndoso--prima">
                                <p v-if="this.objRenovacion.policy.gps == 'N'"> <span class="check">&#10095;</span> NO Requiere GPS</p>
                                <p v-else> <span class="check">&#10095;</span> Requiere GPS</p>
                                <p v-if="this.objRenovacion.policy.financialInstitutionId != '0' && this.objRenovacion.policy.financialInstitutionId != null"> <span class="check">&#10095;</span> Endoso de sesion de terceros con {{this.objRenovacion.policy.financialInstitution}}</p>
                                
                            </div>
                        </div>

                        <div class="card-pago ">
                            <div class="card-pago__tarjeta">
                                <p class="titulo-seccion">Recuerda</p>
                                <p>El cobro se realizará a tu tarjeta afiliada</p>
                                <p>
                                    {{this.objRenovacion.card.brand}}
                                    <span>{{this.objRenovacion.card.number}}</span> <br>
                                    <span style="border: 1px solid white;
                                                border-radius: 4px;
                                                padding: 1px 6px;
                                                margin-top: 4px;
                                                display: inline-block;
                                                text-decoration: none;" @click="actualizarTarjeta()">Actualizar</span>
                                </p>
                            </div>
                            
                        </div>
                        <div class="card-pago__contacto  mt-3">
                            <p>¿Tienes dudas? 
                                <span>Llámanos (01)500 0000.</span>
                            </p>
                        </div>
                        <div class="card-btn">
                            <button @click="continuar2($event, 'Y')">Guardar y renovar</button>
                            <span>Por ahora prefiero <span to="/renovacion/renovacion-cancelada" style="text-decoration: underline; cursor: pointer;" @click="norenovar()">no renovar</span></span>
                            
                        </div>
                        
                    </b-col>
                    
                    <b-col cols="12" lg="4" style="padding: 0 42px">
                        <div class="aside-box"  style="background: #f7fafb;">
                            <div class="card-aside">
                                <p>¿Por qué nuestros <br> clientes renuevan?</p>
                            </div>
                            <div class="cobertura-aside">
                                <div class="cobertura-aside__list">
                                    <div class="item">
                                        <div class="box-img">
                                            <img src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt="icon_mprecio">
                                        </div>
                                        <p>El mejor precio</p>
                                    </div>
                                    <div class="item">
                                        <div class="box-img">
                                            <img src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_24_7.png" alt="icon_24_7">
                                        </div>
                                        <p>Disponibles 24/7</p>
                                    </div>
                                    <div class="item">
                                        <div class="box-img">
                                            <img src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_chofer.png" alt="icon_chofer">
                                        </div>
                                        <p>5 choferes <br> de reemplazo</p>
                                    </div>
                                    <div class="item">
                                        <div class="box-img">
                                            <img src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_cobertura.png" alt="icon_cobertura">
                                        </div>
                                        <p>Cobertura completa</p>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </b-col>

                </b-row>
            </b-container>
        </div>
        <b-modal id="modalRenovarPoliza" title="Bootstrap-Vue" hide-footer hide-header ref="modalRenovarPoliza" size="md">
            <div class="modal-content  modal-confirmaTusDatos">
                <div class="modal-custom">
                    <p>Tu información detu Seguro Vehicular se ha  guardado correctamente </p>
                </div>
            </div>
        </b-modal>
        <b-modal id="modalActualizarTarjeta" title="Bootstrap-Vue" hide-footer hide-header ref="modalActualizarTarjeta" size="md">
            <div class=" modal-confirmaTusDatos">
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
                        <!-- <button type="submit" @click="continuar" class="btn box-btn__button box-btn--primary" :disabled='this.isDisabledPayment'> -->
                        <button type="submit" @click="continuar" class="btn box-btn__button box-btn--primary" >
                            <span style="">ACTUALIZAR</span>                            
                        </button>
                    </div>
                </div>
            </div>
        </b-modal>

    </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
    
var cardNumber;
export default {
    layout: "InterseguroHome",
    data() {
        return {
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
                assignedPrice: null,
                
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
    methods: {
        norenovar(){
            this.$store.commit('common/setPlacaNoRenovar',this.objRenovacion.vehicle.plateNumber)

            this.objUpdatePolicy.numeroPoliza = this.objRenovacion.policy.policyNumber
            this.objUpdatePolicy.monto_pagar = this.monto_pagar
            this.objUpdatePolicy.current = this.clonado.vehicle.current
            this.objUpdatePolicy.payment = this.payment
            this.objUpdatePolicy.renew = "N"

            this.$store.dispatch('payment/updatePolicy', this.objUpdatePolicy)
            .then((res) =>{
                this.$nuxt.$router.push({path: "/renovacion/renovacion-cancelada"})
                this.opacidad = false
            }).catch((err)=>{
                this.opacidad = false                    
            })
        },
        cambioInput(evt) {
            if (this.listCotizacion.vehicle.current > this.clonado.vehicle.maximum || this.listCotizacion.vehicle.current < this.clonado.vehicle.minimum) {                
            } else {
                this.itemElegido.assignedPrice = this.listCotizacion.vehicle.current
                this.$store.dispatch('common/getCotizacion', this.itemElegido).then((res) => {
                    this.msgMontos = "";
                    this.msgMontosActive = false;
                    this.clonado.policy.risk = this.listCotizacion.policy.risk;
                    this.clonado.policy.calculated = this.listCotizacion.policy.calculated;
                    this.clonado.policy.annual = this.listCotizacion.policy.annual;
                    this.clonado.policy.quarterly = this.listCotizacion.policy.quarterly;
                    this.clonado.policy.monthly = this.listCotizacion.policy.monthly;                    
                    this.clonado.vehicle.current = this.listCotizacion.vehicle.current;
                    this.clonado.vehicle.minimum = this.clonado.vehicle.minimum;
                    this.clonado.vehicle.maximum = this.clonado.vehicle.maximum;
                    this.isEnableNext = false;
                    this.obtenerMonto() 
                })
                this.isDisabled = false;
            }
        },
        cambiarValor(){
            this.mostrarValorComercial = true
        },
        cambiarFrecuencia(){
            this.mostrarFrecuenciaPago = true
        },
        guardarValor(){
            this.mostrarValorComercial = false
        },
        guardarFrecuencia(){
            this.mostrarFrecuenciaPago = false
        },
        metodoPrueba(){
            this.objUpdatePolicy.numeroPoliza = this.objRenovacion.policy.policyNumber
            this.objUpdatePolicy.monto_pagar = this.monto_pagar
            this.objUpdatePolicy.current = this.clonado.vehicle.current
            this.objUpdatePolicy.payment = this.payment
            this.objUpdatePolicy.renew = "Y"
            this.$store.dispatch('payment/updatePolicy', this.objUpdatePolicy)
            .then((res) =>{
                this.obtenerDatos()
                this.opacidad = false
            }).catch((err)=>{
                this.opacidad = false                    
            })
        },
        radioComoPagar(event){            
            var self = this
            setTimeout(function(){
                if(self.payment == 1){
                    self.monto_pagar = self.listCotizacion.policy.monthlyDiscount > 0 ? self.listCotizacion.policy.monthlyDiscount : self.listCotizacion.policy.monthly
                    self.listCotizacion.paymentMethodId = self.payment
                    self.metodoPrueba()
                }else if(self.payment == 2){
                    self.monto_pagar =  self.listCotizacion.policy.quarterlyDiscount > 0 ? self.listCotizacion.policy.quarterlyDiscount : self.listCotizacion.policy.quarterly
                    self.listCotizacion.paymentMethodId = self.payment
                    self.metodoPrueba()
                }else if(self.payment == 3){
                    self.monto_pagar = self.listCotizacion.policy.annualDiscount > 0 ? self.listCotizacion.policy.annualDiscount : self.listCotizacion.policy.annual
                    self.listCotizacion.paymentMethodId = self.payment
                    self.metodoPrueba()
                }else if(self.payment == 4){
                    if(self.listCotizacion.discount.intercorp == 5){
                        self.monto_pagar = self.listCotizacion.policy.twoYearsDiscount > 0 ? self.listCotizacion.policy.twoYearsDiscount : self.listCotizacion.policy.twoYearsDiscount
                    }else{
                        self.monto_pagar = self.listCotizacion.policy.twoYears > 0 ? self.listCotizacion.policy.twoYears : self.listCotizacion.policy.twoYears
                    }         
                    self.listCotizacion.paymentMethodId = self.payment
                    self.metodoPrueba()             
                }else{
                    self.isDisableButton = true
                }
                
            }, 300);

            
        },
        continuar2 (evt, parametro) {
                evt.preventDefault();
                this.opacidad = true
                this.listCotizacion.policy.startDate = this.$store.state.common.fechaVigenciaRenovacion
                this.listCotizacion.paymentMethodId = this.payment
                this.objUpdatePolicy.numeroPoliza = this.objRenovacion.policy.policyNumber
                this.objUpdatePolicy.monto_pagar = this.monto_pagar
                this.objUpdatePolicy.current = this.clonado.vehicle.current
                this.objUpdatePolicy.payment = this.payment
                this.objUpdatePolicy.renew = "Y"
                this.$store.dispatch('payment/updatePolicy', this.objUpdatePolicy)
                .then((res) =>{
                    this.$nuxt.$router.push({path: "/renovacion/renovacion-exitosa"})
                    this.opacidad = false 
                }).catch((err)=>{
                    this.opacidad = false                    
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
                    this.$store.commit('common/setFechaVigenciaRenovacion', this.objRenovacion.policy.fromDate)
                    if (this.objRenovacion.policy.renew == "Y") {
                            this.$store.commit('common/setPlacaNoRenovar', '')
                            this.$store.commit('payment/setNumeroPoliza',this.objRenovacion.policy.policyNumber)
                            this.itemElegido.year = this.objRenovacion.vehicle.modelYear
                            this.itemElegido.assignedPrice = this.objRenovacion.priceModel.vehicle.current
                            this.$store.dispatch('common/getCotizacion', this.itemElegido).then((res) => {
                                this.listCotizacion = res.data.body.allRisk
                                this.mostrarPrimeraPantalla = false
                                this.mostrarSegundaPantalla = true
                                this.clonado = Object.assign({}, this.listCotizacion);
                                this.obtenerMonto()   
                            }
                        )                                             
                    }else if (this.objRenovacion.policy.renew == "N") {
                        this.$store.commit('common/setPlacaNoRenovar', this.placa)
                        this.$nuxt.$router.push({path: "/renovacion/renovacion-cancelada"})
                    } else {
                    }
                } 
            })
        },
        actualizarTarjeta(){
            this.$refs.modalActualizarTarjeta.show()
        },
        continuar(evt) {
            this.opacidad = true
            evt.preventDefault()
            this.isDisabledPayment = true
            this.card.expiration_year = "20" + this.expiration_year
            this.card.email = this.objRenovacion.client.email
            this.isisplayNoneLoader = false
            this.$store.dispatch('payment/getTokenCulqi', this.card).then((res) =>{
                    this.objCulqi = res
                    this.objCard = res.iin
                    this.objCard.policyId = this.objRenovacion.policy.policyId
                    this.objCard.customer_id = this.objRenovacion.client.documentNumber
                    this.objCard.id = this.objCulqi.id
                    this.objCard.card_number = this.objCulqi.card_number
                    this.$store.dispatch('payment/getCard', this.objCard).then((res) =>{
                            this.objUpdatePolicy.numeroPoliza = this.objRenovacion.policy.policyNumber
                            this.objUpdatePolicy.monto_pagar = this.monto_pagar
                            this.objUpdatePolicy.current = this.clonado.vehicle.current
                            this.objUpdatePolicy.payment = this.payment
                            this.objUpdatePolicy.renew = "Y"
                            this.isisplayNoneLoader = false;
                            this.$refs.modalActualizarTarjeta.hide()
                            this.$swal({
                                title: '¡Listo!',
                                text: 'Tu tarjeta se actualizó correctamente',
                                type: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#2177CC',
                                confirmButtonText: 'OK'
                            })
                            this.opacidad = false
                            this.$store.dispatch('payment/updatePolicy', this.objUpdatePolicy).then((res) =>{
                                    this.obtenerDatos()
                                }
                            )
                        }
                    ).catch(()=>{
                        this.opacidad = false
                        this.$refs.modalActualizarTarjeta.hide()
                    })
                }
            )
        }
    },
    mounted() {        
        this.mostrarPrimeraPantalla = true
        this.mostrarSegundaPantalla = false
    }
}
</script>
<style lang="scss" scope>
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
        background: #f7fafb !important;
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