<template>
    <div>
        <main class="pago">
            <b-container>
                <b-row class="justify-content-center">
                    <b-col cols="12" lg="5" class="d-none" v-bind:class="{'d-block': primeraPantalla}">
                        <p class="resumen-tu-seguro" >Resumen de tu seguro vehicular</p>
                        <div class="mi-carro">
                            <p class="item-titulo">Mi carro</p>
                            <div class="carro-detalle">
                                <div class="detalle-item">
                                    <p>Placa:</p>
                                    <p>{{this.respuestaPlaca.plateNumber}}</p>
                                </div>
                                <div class="detalle-item">
                                    <p>Modelo:</p>
                                    <p>{{this.respuestaPlaca.model}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="datos-personales">
                            <p class="item-titulo">Mis datos personales</p>
                            <div class="datos-detalle">
                                <div class="detalle-item">
                                    <p>DNI:</p>
                                    <p>{{this.respuestaPlaca.client.documentNumber}}</p>
                                </div>
                                <div class="detalle-item">
                                    <p>Nombre:</p>
                                    <p>{{this.respuestaPlaca.client.firstName}} {{this.respuestaPlaca.client.firstLastName}}</p>
                                </div>
                                <div class="detalle-item">
                                    <p>Correo:</p>
                                    <p>{{this.cliente.emailAddress}}<img @click="showModalEditarCorreo()" class="edit_app" src="./../../static/media/img/root/edit_app.png" alt=""></p>
                                    
                                </div>
                                <div class="detalle-item">
                                    <p>Celular:</p>
                                    <p>{{this.cliente.phoneNumber}}<img @click="showModalEditarCelular()" class="edit_app" src="./../../static/media/img/root/edit_app.png" alt=""></p>
                                </div>
                            </div>
                        </div>
                        <div class="cotizacion">
                            <p class="item-titulo">Mi cotización</p>
                            <div class="detalle-item">
                                <p>Plan Elegido:</p>
                                <p>Black</p>
                            </div>
                            <div class="detalle-item">
                                <p>Fecha de inicio:</p>
                                <p>
                                    <span style="display: inline-block; line-height: 1; outline: none; color: #007bff;  line-height: 1;" @click="showModalInicioVigencia()">                      
                                        <span style="cursor: pointer; position: relative;" v-if="this.fechaVigencia != ''" @click="clickEnlace('Inicio Vigencia')">
                                            {{this.fechaVigencia}}
                                            <img @click="showModalInicioVigencia()" style="top: -3px" class="edit_app" src="./../../static/media/img/root/edit_app.png" alt="">
                                        </span>
                                        <span style="cursor: pointer;" v-else >
                                            Cambiar
                                        </span>                                        
                                    </span>
                                </p>
                            </div>
                            <div class="detalle-item">
                                <p>GPS:</p>
                                <p>{{}}</p>
                            </div>
                            <div class="detalle-item">
                                <p style="">¿Tienes un crédito?</p>
                                <p class="endozar-poliza  text-right"  href="javascript:void(0);" style="width: auto;">
                                    <template v-if="this.endosoSeleccionado.id == 0">                          
                                    <a style="display: inline-block; line-height: 1;color: #007bff; cursor: pointer; color:#454A6C"
                                        class="endozar-poliza"
                                        href="javascript:void(0);"
                                        @click="clickEnlace('entidad Financiera')"
                                        v-b-modal.modalEntidadFinanciera
                                        >No
                                        <img v-b-modal.modalEntidadFinanciera class="edit_app"  style="top: -3px"  src="./../../static/media/img/root/edit_app.png" alt="">
                                        </a>  
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
                        </div>
                        <div class="c-suma-asegurada">
                            <div class="detalle-item">
                                <p>Suma asegurada:</p>
                                <p><span class="monto-actual">$ {{this.clonado.vehicle.current}}</span></p>
                            </div>
                            <div class="cotizador__suma-asegurada--box">
                                <div class="box-range">
                                <div class="minimoImg"><span><i class="fa fa-minus-circle" aria-hidden="true"></i></span></div>
                                <b-form-input class="e-range" step="100" v-model="listCotizacion.vehicle.current" type="range" :min="isMinimo" :max="isMaximo" @change="cambioInput()"></b-form-input> 
                                <div class="maximoImg"><span><i class="fa fa-plus-circle" aria-hidden="true"></i></span></div>
                                </div>
                            </div>
                            <p class="monto-minimo-maximo"><span>Mínimo US${{isMinimo}}</span> <span>Máximo US$ {{isMaximo}}</span></p>
                        </div>
                        <div class="frecuencia-pago">
                            <p class="subtitulo">Frecuencia de pago: </p>
                            <div class="select">
                                <b-form-select @change="seleccionarFrecuencia()" v-model="selected" :options="options"></b-form-select>
                            </div>
                        </div>
                        <div class="monto-fecha">
                            <div class="box-monto-pago">
                                <p class="subtitulo">Monto de pago</p>
                                <div class="monto-frecuencia">
                                    <span>US$</span>
                                    <span class="monto">{{this.monto_pagar}}</span>
                                    <span>/trimestral</span>
                                </div>
                                <p class="antes">Antes ${{this.monto_antes}}</p>
                            </div>
                        </div>
                        <div class="enlaces">
                            <router-link to="">
                                Coberturas,
                            </router-link>
                            <router-link to="">
                                beneficios 
                            </router-link><span style="color: #0855C4">y</span> 
                            <router-link to="">
                                exclusiones
                            </router-link>
                        </div>
                        <div class="box-btns-fixed">
                            <b-button class="btn-principal  d-lg-none" @click="pagar_ahora()">IR A PAGAR AHORA</b-button>

                        </div>
                    </b-col>

                    <b-col cols="12" lg="5" class="d-none  d-lg-block" v-bind:class="{'d-block': !primeraPantalla}">
                        <div class="resumen" v-bind:class="{'d-none': primeraPantalla}">
                            <div class="resumen-desc">
                                <p>Resumen de tu seguro</p>
                                <p><strong>Placa</strong>: {{this.item.plateNumber}}</p>
                            </div>
                            <b-button class="btn-ver-resumen" @click="volver()">
                                VER RESUMEN
                            </b-button>
                        </div>
                        <div class="datos-tarjeta">
                            <p class="ingresa-datos">Ingresa los datos de tarjeta de <br> crédito o débito para los pagos</p>
                            <div class="panel-custom pt-3 pb-0">
                                    <b-row>                                        
                                        <b-col cols="12" class="box-ingresaTarjeta">
                                            <div class="card-interseguro">   
                                                <div class="form-group-custom">
                                                    <div class="input-group  iptGral editable  box-iptCard">
                                                        <!-- <img src="../../static/media/img/flujo/como-pagar/icon-tarjeta.png" class="icon-tarjeta"/> -->
                                                        <input placeholder="Número de la tarjeta" id="cardnumber" @keyup="addingBlankSpaces($event)"  v-model="objCardNumber.number" maxlength="19" type="tel" class="form-control iptGral__input  ipt-cartNumber"/>                                            
                                                        <img width="30" :src="creditCardImage" >
                                                    </div>
                                                </div>
                                                <div class="card-custom">
                                                    <div class="card-custom__date">
                                                        <div class="form-group-custom">                                                            
                                                            <div id="box-mes" class="input-group  iptGral editable">   
                                                                <!-- <img src="../../static/media/img/flujo/como-pagar/icon-mes.png" class="icon-mes"/> -->
                                                                <input  placeholder="MM" id="cardmes" class="form-control text-uppercase iptGral__input ipt-month"  maxlength="2" v-model="card.expiration_month" type="tel" name="name"/>
                                                            </div>
                                                            <div id="focusMES" class=" d-none">
                                                                Fecha de vencimiento de tu tarjeta.
                                                            </div>
                                                        </div>
                                                        <div class="form-group-custom  text-right-custom">
                                                            <div class="input-group  iptGral editable">
                                                                <input id="cardaño" placeholder="AA" class="form-control text-uppercase iptGral__input ipt-year"   maxlength="2"  v-model="expiration_year" type="tel" name="name"/>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-custom__cvv">
                                                        <div class="form-group-custom">
                                                            <div id="box-ccv" class="input-group  iptGral  editable"  @click="validCard()">
                                                                <!-- <img src="../../static/media/img/flujo/como-pagar/icon-ccv.png" class="icon-ccv"/>                                    -->
                                                                <input  placeholder="CVV" variant="custom" id="cardccv" class="form-control text-uppercase iptGral__input ipt-cvv" :disabled="isEnable"  :maxlength="this.numberTest"  v-model="card.cvv" type="tel" name="name"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div  id="focusCVV" >
                                                        <!-- <img class="img-fluid" :src="creditCardImageCvv" > -->
                                                    </div>
                                                </div>
                                                <br>

                                                <!-- :disabled='this.isDisabledPayment' -->
                                                <div class="box-btns">
                                                    <button class="btn btn-principal" @click="continuar">
                                                        <span>PAGAR ${{this.monto_pagar}}</span>
                                                    </button>
                                                </div>
                                                <p class="autorizo-envio">Autorizo el envío de la póliza electrónica <br> y comunicaciones de Interseguro a mi correo</p>
                                            </div>                    
                                        </b-col>
                                    </b-row>
                                </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>

            <b-modal
                id="modalEntidadFinanciera"
                title="Bootstrap-Vue"
                hide-footer
                hide-header
                ref="hidemodalEntidadFinanciera"
                >
                <img
                    @click="hidemodalEntidadFinanciera()"
                    src="./../../static/media/img/root/close.png"
                    width="30"
                    alt="icon close"
                    class="modal-close"
                />
                <div class="modalEntidadFinanciera" style="padding: 0 12px;">
                    <div class="modal-head">
                        <p class="modal-titulo">¿Dónde pediste tu crédito vehicular?</p>
                    </div>
                    <div class="modal-body">
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
                        <div class="box-btns  box-btnEndosoSesion">
                            <button class="btn btn-principal" @click="hidemodalEntidadFinanciera()">Confirmar y endosar póliza</button>
                        </div>
                    </div>
                    <div class="row"></div>
                </div>
            </b-modal>

            <b-modal
                title="Bootstrap-Vue"
                hide-footer
                hide-header
                ref="modalInicioVigencia"
                id="modalInicioVigencia"
                >
                <img
                        @click="hideModalInicioVigencia()"
                        src="./../../static/media/img/root/close.png"
                        width="30"
                        alt="icon close"
                        class="modal-close"
                    />
                <div class="fechaVigenciaCotizador">
                    <div class="modal-head">
                        <p class="modal-titulo">¿Cuándo inicia tu Seguro?</p>
                    </div>
                    <div class="modal-body">
                    <div>
                        <div id="input-group-3" class="inicioVigencia">
                        
                        <div class="fechaCotizador">                
                            <datepicker class="mt-2" :inline="true"  :disabledDates="state.disabledDates" id="fechaCustom" :full-month-name="true"   :value="state.date" @selected="elegirFecha" ></datepicker>
                        </div>
                        </div>
                        <!-- <div class="btn-inicioVigencia">
                            <button class="btn-confirmar" @click="hideModalInicioVigencia()">Confirmar</button>
                        </div> -->
                        <div class="box-btns">
                            <button class="btn  btn-principal  " @click="hideModalInicioVigencia()">GUARDAR</button>
                        </div>
                    </div>
                    </div>
                    <div class="row"></div>
                </div>
            </b-modal>

            <b-modal
                title="Bootstrap-Vue"
                hide-footer
                hide-header
                ref="modalEditarCorreo"
                id="modalEditarCorreo"
                >
                <img
                    @click="hideModalEditarCorreo()"
                    src="./../../static/media/img/root/close.png"
                    width="30"
                    alt="icon close"
                    class="modal-close"
                />
                <div class="modal-custom">
                    <div class="modal-head">
                        <p class="modal-titulo">Ingresa tu nuevo correo</p>
                    </div>
                    <div class="modal-body">
                    <div>
                        <div id="input-group-3">                        
                            <div class="fechaCotizador">                
                                <b-form-input id="input-small"  v-model="cliente.emailAddress"></b-form-input>
                            </div>
                        </div>
                        <div class="box-btns">
                            <button class="btn  btn-principal" @click="guardarCliente()">GUARDAR</button>
                        </div>
                    </div>
                    </div>
                </div>
            </b-modal>

            <b-modal
                title="Bootstrap-Vue"
                hide-footer
                hide-header
                ref="modalEditarCelular"
                id="modalEditarCelular"
                >
                <img
                    @click="hideModalEditarCelular()"
                    src="./../../static/media/img/root/close.png"
                    width="30"
                    alt="icon close"
                    class="modal-close"
                />
                <div class="modal-custom">
                    <div class="modal-head">
                        <p class="modal-titulo">Ingresa tu nuevo <br> numero de celular</p>
                    </div>
                    <div class="modal-body">
                        <div id="input-group-3">                        
                            <div class="fechaCotizador">
                                <b-form-input id="input-small"  v-model="cliente.phoneNumber"></b-form-input>
                            </div>
                        </div>
                        <div class="box-btns">
                            <button class="btn  btn-principal  " @click="guardarCliente()">GUARDAR</button>
                        </div>
                    </div>
                </div>
            </b-modal>
        </main>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import moment from "moment/moment.js"
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
    layout: "InterseguroHomeApp",
    data() {
        return {
            ischecked: false,
            usuarioCelular: '',
            state: state,
            fechaVigencia:'',
            listaNuevaDeEndoso: [],
            endosoSeleccionado: {
                id: 0,
                name: ''
            },
            cliente: {
                address: "",
                birthDate: "",
                documentNumber: "",
                documentType: "",
                emailAddress: "",
                firstLastName: "",
                firstName: "",
                id: '',
                intercorp: "",
                phoneNumber: "",
                secondLastName: ""
            },
            primeraPantalla: false,
            selected: 1,
            options: [
                { value: null, text: '' },
                { value: '1', text: 'Mensual (12 cuotas)' },
                { value: '2', text: 'Trimestral (4 cuotas)' },
                { value: '3', text: 'Anual (1 cuota)' },
            ],
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
            planSeleccionado:3,
            listaFull:{},
            listaMedia: {},
            item:{
                plateNumber:'', 
                email:''
            },
            respuestaPlaca:{
                client:{
                    address: "",
                    birthDate: "",
                    documentNumber: "",
                    documentType: "",
                    emailAddress: "",
                    firstLastName: "",
                    firstName: "",
                    id: 0,
                    intercorp: "",
                    phoneNumber: "",
                    secondLastName: ""
                }
            },
            itemElegido: {
                businessId: 1,
                discountType: "",
                modelYear: 0,
                remarketingId: 0,
                year: 0
            },

            objCardNumber:{
                number: ''
            },
            tamañoCCV:0,
            cvvcci:'CCV',
            card:{
                email: '',
                card_number:'',
                public_key: process.env.culqiPK,
                url: process.env.culquiURL,
                cvv:'',
                expiration_year: '',
                expiration_month: '',                    
            },
            monto_pagar: '',
            monto_antes: '',
            numberTest: '',
            checkDocs: false,
            baseUrlImage: '',
            creditCardImageCvv: '',
            creditCardImage: '',
            expirationDate: '',
            isDisabledPayment: false,
            isisplayNoneLoader: true,
            cardValitor: false,
            card_id:'',
            expiration_year: '',
        }
    },
    components:{
      Datepicker: () => import('vuejs-datepicker/dist/vuejs-datepicker')
    },
    computed: {
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

    created() {
        const fecha = new Date()
        const fechaEnNumeros = fecha.getTime()
        const aleatorio = Math.random() * (10000 - 0) + 0
        const aleatorioFinal = fechaEnNumeros + parseInt(aleatorio)
        const mailGenerado = 'test_' + aleatorioFinal.toString() + '@test.com'
        this.item.email = mailGenerado

        this.$store.dispatch('common/getFinancialInstitution').then((res)=>{
            this.listEndoso = res.data.body;
            let arregloUno = [];
            arregloUno = this.listaNuevaDeEndoso.concat(this.listEndoso.banks).concat(this.listEndoso.financial).concat(this.listEndoso.cajas);
            this.listaNuevaDeEndoso = arregloUno;
        })
        this.$store.commit('common/setAppdiscountURL', 1)  
    },
    mounted() {
        this.elegirFecha()
        this.primeraPantalla = true
        console.log("this.$route.params.placa",this.$route.params.placa)
        if (this.$route.params.placa.length == 6){
            this.item.plateNumber = this.$route.params.placa
            this.$store.commit('common/setPlateNumber', this.$route.params.placa)            
            this.$store.dispatch('common/getVehicle', this.item)
            .then((res) => {                
                if(res.data.code == 0){
                    this.respuestaPlaca = res.data.body
                    this.$store.commit('common/setDocumentoLocal', this.respuestaPlaca.client.documentNumber)
                    /*
                        LLAMADO A CLIENTE
                    */
                   this.$store.dispatch('common/getClient', {documentoLocal: this.respuestaPlaca.client.documentNumber, discountType: ''}).then((res)=>{
                       if(res.data.code == 0){
                           
                           this.cliente = res.data.body
                           
                           this.usuarioCelular = this.cliente.phoneNumber
                           this.usuarioCorreo = this.cliente.emailAddress
                           console.log("this.cliente", this.cliente.emailAddress)
                       }
                   })

                    this.itemElegido.modelYear =  this.respuestaPlaca.modelYear,
                    this.itemElegido.remarketingId = this.respuestaPlaca.remarketingId,
                    this.itemElegido.year = this.respuestaPlaca.modelYear
                    
                    this.$store.dispatch('common/getCotizacion', this.itemElegido)
                    .then((res) => {
                        if(res.data.code == 0){
                            this.$store.commit('common/setListaCotizacion', Object.assign({},res.data.body.allRisk))
                            this.listaMedia = res.data.body.medium
                            this.listaFull = res.data.body.allRisk
                            this.listCotizacion = res.data.body.allRisk
                            this.clonado = Object.assign({}, this.listCotizacion)
                            this.$store.commit('common/setCurrent', this.listCotizacion.vehicle.current)
                            this.seleccionarFrecuencia()
                        }
                    })
                }
            })
        }
    },
    methods: {
        showModalEditarCorreo(){
            this.$refs.modalEditarCorreo.show();
        },
        showModalEditarCelular(){
            this.$refs.modalEditarCelular.show();
        },
        hideModalEditarCorreo(){
            this.$refs.modalEditarCorreo.hide();
        },
        hideModalEditarCelular(){
            this.$refs.modalEditarCelular.hide();
        },
        showModalInicioVigencia() {
            this.$refs.modalInicioVigencia.show();
        },
        hideModalInicioVigencia() {
            this.$refs.modalInicioVigencia.hide();
        },
        guardarCliente() {
            this.hideModalEditarCelular()
            this.hideModalEditarCorreo()
            this.cliente.emailAddress = this.cliente.emailAddress
            this.cliente.phoneNumber = this.cliente.phoneNumber
            this.$store.dispatch('common/updateClient', this.cliente).then((res)=>{
                if (res.data.code == 0) {
                } else {
                }
            })

        },
        elegirFecha(date) {
            state.date = date
            this.fechaVigencia = moment(state.date).format("DD/MM/YYYY")
            this.listCotizacion.policy.startDate = this.fechaVigencia
            this.$store.commit('common/setFechaVigencia', this.fechaVigencia)
            this.flagElegirFecha = 1
            // localStorage.setItem("flagElegirFecha", 1)
        },
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
        hidemodalEntidadFinanciera() {
            this.$refs.hidemodalEntidadFinanciera.hide();
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
        seleccionarFrecuencia(){
            console.log("SELECTED",this.selected)
            if (this.selected == 1) {
                if (this.planSeleccionado == 3) {
                    this.monto_pagar = this.listaFull.policy.monthlyDiscount
                    this.monto_antes = this.listaFull.policy.monthlyCalculated
                }else if(this.planSeleccionado == 6){
                    this.monto_pagar = this.listaMedia.policy.monthlyDiscount
                    this.monto_antes = this.listaMedia.policy.monthlyCalculated
                }
                // this.monto_pagar = this.listCotizacion.policy
            }else if(this.selected == 2){
                if (this.planSeleccionado == 3) {
                    this.monto_pagar = this.listaFull.policy.quarterlyDiscount
                    this.monto_antes = this.listaFull.policy.quarterlyCalculated
                }else if(this.planSeleccionado == 6){
                    this.monto_pagar = this.listaMedia.policy.quarterlyDiscount
                    this.monto_antes = this.listaMedia.policy.quarterlyCalculated
                }
            }else if(this.selected == 3){
                if (this.planSeleccionado == 3) {
                    this.monto_pagar = this.listaFull.policy.annualDiscount
                    this.monto_antes = this.listaFull.policy.annualCalculated
                }else if(this.planSeleccionado == 6){
                    this.monto_pagar = this.listaMedia.policy.annualDiscount
                    this.monto_antes = this.listaMedia.policy.annualCalculated
                }
            }else if(this.selected == 4){
                if (this.planSeleccionado == 3) {
                    this.monto_pagar = this.listaFull.policy.twoYearsDiscount
                    this.monto_antes = this.listaMedia.policy.twoYearsCalculated
                }else if(this.planSeleccionado == 6){
                    this.monto_pagar = this.listaMedia.policy.twoYearsDiscount
                    this.monto_antes = this.listaMedia.policy.twoYearsCalculated
                }
            }else{}
        },
        pagar_ahora(){
            this.primeraPantalla = false
        },
        getCotizacion() {
            this.$store.dispatch('common/getCotizacion', this.itemElegido)
            .then((res) => {
                if (res.data.code == 0) {                 
                    this.listaMedia = res.data.body.medium
                    this.listaFull = res.data.body.allRisk
                    this.listCotizacion = res.data.body.allRisk
                    this.clonado = Object.assign({}, this.listCotizacion)
                    this.$store.commit('common/setCurrent', this.listCotizacion.vehicle.current)
                    this.seleccionarFrecuencia()
                }
            })
        },
        cambioInput(evt) {
            if (
                this.listCotizacion.vehicle.current < this.clonado.vehicle.maximum ||
                this.listCotizacion.vehicle.current > this.clonado.vehicle.minimum
            ) {
                this.$store.commit('common/setCurrent', this.listCotizacion.vehicle.current)
                this.itemElegido.assignedPrice = this.listCotizacion.vehicle.current
                this.getCotizacion()
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
                this.creditCardImage = require('./../../static/media/img/flujo/metodo-pago/' + cardType + '.png')
                this.creditCardImageCvv = require('./../../static/media/img/flujo/como-pagar/' + cardType+'cvv' + '.png')
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
        volver(){
            this.primeraPantalla = true
        },
        continuar (event) {
            event.preventDefault();               
                this.opacidad =true
                this.isDisabledPayment = false

                this.isDisabledPayment = true
                this.card.expiration_year = '20'+this.expiration_year
                this.card.email = this.$store.state.common.email
                this.$store.dispatch('payment/getTokenCulqi', this.card)
                .then((res) =>{
                    if (res.object === 'error') {
                        let errorDetectado = {
                            url : 'GET TOKEN CULQI',
                            page : 4,
                            message : 'ERROR CULQI',
                            objEnviado : this.card
                        }
                        this.$store.dispatch('common/eventoErrores', errorDetectado)
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
                        this.objCulqi = res
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
                                paymentMethodId: this.selected,
                                financialInstitution: this.$store.state.common.entidadFinanciera.id == 0 || this.$store.state.common.entidadFinanciera.id == null ? null : this.$store.state.common.entidadFinanciera.id
                            },
                            card: {
                                brand: this.objCulqi.iin.card_brand,
                                category: this.objCulqi.iin.card_category,
                                number: this.objCulqi.card_number,
                                type: this.objCulqi.iin.card_type
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
                                let errorDetectado = {
                                    url : 'EXECUTE',
                                    page : 4,
                                    message : 'CODE 100',
                                    objEnviado : this.objPaymentExecute
                                }
                                this.$store.dispatch('common/eventoErrores', errorDetectado)
                                this.opacidad =false
                                this.$swal({
                                    title: 'Oops...',
                                    text: res.body.message,
                                    type: 'error',
                                    showCancelButton: false,
                                    confirmButtonColor: '#2177CC',
                                    confirmButtonText: 'OK'
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
                    // let status = res.response.status
                    console.log(res)
                    let errorDetectado = {
                        url : 'https://secure.culqi.com/v2/tokens',
                        page : 4,
                        message : 'ERROR CULQI'+ res.message,
                        objEnviado : this.card
                    }

                    switch (status) {
                        case 500:
                            this.$store.dispatch('common/eventoErrores', errorDetectado)
                            break;
                        default:
                            this.$store.dispatch('common/eventoErrores', errorDetectado)
                            break;
                    }
                    
                        this.$swal({
                            title: 'Oops...',
                            text: res.message,
                            type: 'error',
                            showCancelButton: false,
                            confirmButtonColor: '#2177CC',
                            confirmButtonText: 'OK'
                        })
                })
            },
    },
}
</script>
<style lang="scss">
    main{
        padding-top: 120px;
        
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
            background-image: url("./../../static/media/img/flujo/cotizacion/tick.png");
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
            width: 40%;
            position: relative;
            z-index: 7;
            margin-left: -4px;
            left: -1px;
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
                    padding-left: 34px;
                }
            }
        }
        &__date{    
            width: 40%;
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
                        background: #fff;
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
</style>