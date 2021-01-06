<template>
    <div class="renovacion2021">
        
        <div class="renovacion-data" >
            <div class="renovacion-head" v-if="this.objRenovacion">
                <pre>
                    <!-- {{this.objRenovacion}} -->
                </pre>
                <p><span>{{this.objRenovacion.client.firstName}},</span> manejar tranquilo nunca fue tan fácil</p>
                <span class="subtitulo">Tu seguro vehicular se renovará automáticamente</span>
            </div>
            <div class="renovacion-body">
                <div class="renovacion-body--item  renovacion-body__carro  carro">
                    <img class="carro--img  d-none  d-lg-block" src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt="">
                    <div class="carro--datos">
                        <h3>
                            <img width="40" class="carro--img  d-block  d-lg-none" src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt=""> 
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
                    <img class="nueva-poliza--img  d-none  d-lg-block" src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt="">
                    <div class="nueva-poliza--datos">
                        <h3>
                            <img width="40" class="carro--img  d-block  d-lg-none" src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt=""> 
                            Tu nueva póliza</h3>
                        <div class="nueva-poliza">
                            <div class="nueva-poliza--item  plan">
                                <p class="item-titulo">Plan:</p>
                                <p class="item-descripcion">Plata</p>
                            </div>
                            <div class="nueva-poliza--item  vigencia-poliza">
                                <p class="item-titulo">Vigencia de póliza:</p>
                                <p  class="item-descripcion"><span>{{this.objRenovacion.policy.fromDate}}</span>-<span>{{this.objRenovacion.policy.toDate}}</span></p>
                            </div>
                            <div class="nueva-poliza--item  suma-asegurada">
                                <p class="item-titulo">Suma asegurada:</p>
                                <div class="box-input">
                                    <!-- <div class="flotante-moneda">US$</div> -->
                                    <b-form-input class="e-range" step="100" v-model="listCotizacion.vehicle.current" type="text" @change="cambioInput()"></b-form-input> 
                                </div>
                                
                            </div>
                            <div class="nueva-poliza--item  cuota">
                                <p class="item-titulo">Cuota:</p>
                                <p  class="item-descripcion" v-if="this.selected == 1">$ {{ this.listCotizacion.policy.monthly}}  </p>
                                <p  class="item-descripcion" v-else-if="this.selected == 2">$ {{ this.listCotizacion.policy.quarterly}}  </p>
                                <p  class="item-descripcion" v-else-if="this.selected == 3">$ {{ this.listCotizacion.policy.annual}}  </p>
                                <p  class="item-descripcion" v-else-if="this.selected == 4">$ {{ this.listCotizacion.policy.twoYears}}  </p>
                                <p v-else></p>
                            </div>
                            <div class="nueva-poliza--item  frecuencia-pago">
                                <div class="frecuencia-pago">
                                    <p class="item-titulo">Frecuencia de pago: </p>
                                    <div class="select">
                                        <b-form-select @change="seleccionarFrecuencia()" v-model="selected" :options="options"></b-form-select>
                                    </div>
                                </div>
                            </div>
                            <div class="nueva-poliza--item  gps">
                                <p class="item-titulo">GPS:</p>
                                <p  class="item-descripcion" v-if="this.objRenovacion.policy.gps == 'Y'">SI</p>
                                <p  class="item-descripcion" v-else-if="this.objRenovacion.policy.gps == 'N'">NO</p>
                                <p v-else></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="renovacion-body--item  renovacion-body__carro  medio-pago">
                    <img class="medio-pago--img  d-none  d-lg-block" src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt="">
                    <div class="medio-pago--datos">
                        <h3>
                            <img width="40" class="medio-pago--img  d-block  d-lg-none" src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt=""> 
                            Medio de pago</h3>
                        <div class="medio-pago">
                            <p class="item-titulo">El cobro se realizará a tu tarjeta afiliada</p>
                            <p class="tarjeta">
                                <span>VISA</span>{{this.objRenovacion.card.number}}
                            </p>
                            <button class="boton-secundario">
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
                <button class="boton-secundario">Por ahora prefiero no renovar</button>
                <button class="boton-principal">GUARDAR Y RENOVAR</button>
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
                    <img src="" alt="">
                    <p class="titulo">
                        Chofer de reemplazo
                    </p>
                    <p class="descripcion">
                        Puedes usarlo hasta 5 veces al año y sin hacer pagos adicionales
                    </p>
                </div>
                <div class="renovacion-info__beneficios--item">
                    <img src="" alt="">
                    <p class="titulo">
                        Grúas
                    </p>
                    <p class="descripcion">
                        Si no puedes mover tu auto, nosotros nos encargamos de llevarlo a su destino
                    </p>
                </div>
                <div class="renovacion-info__beneficios--item">
                    <img src="" alt="">
                    <p class="titulo">
                        Asistencia mecánica
                    </p>
                    <p class="descripcion">
                        ¿Tu carro no arranca? Llegamos a donde estés en menos de 25 minutos
                    </p>
                </div>
                <div class="renovacion-info__beneficios--item">
                    <img src="" alt="">
                    <p class="titulo">
                        Vivemás
                    </p>
                    <p class="descripcion">
                        Forma parte de nuestro programa de beneficios que incluye descuentos para el mantenimiento de tu auto. Para mayor información ingresa a la página web de Vivemás.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

    .renovacion2021{
        max-width: 1200px;
        button{
            &:focus{
                outline: none;
            }
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
        margin: auto;
        .renovacion-ctas{
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                height: 45px;
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
                width: 50px;
            }
            .vigencia-poliza, .frecuencia-pago{
                width: 145px;
            }
            .suma-asegurada, .gps{
                width: 115px;
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
                        left: -8px;
                        top: 0;
                    }
                }
                
            }
            .box-input{
                position: relative;
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
            padding: 16px;
            margin-bottom: 24px;
            border-radius: 3px;
            h3{
                color: #0855C4;
                font-size: 18px;
                font-family: 'Omnes Medium';
            }
        }
    }
    .renovacion-data {
        padding: 0 8px;
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
                margin: auto;
                padding: 16px;
                margin-bottom: 24px;
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

    @media (min-width: 1024px){
        .renovacion-head{
            max-width: 940px;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 32px;
            
            p{
                font-size: 33px;
            }
            span.subtitulo{
                color: #454A6C;
                font-size: 24px;
                font-family: 'Omnes Medium';
            }
        }
        .renovacion2021{
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

            .nueva-poliza{
                span{
                }
                .plan, .cuota, .gps{
                    width: 80px;
                }
                .vigencia-poliza, .frecuencia-pago, .suma-asegurada,{
                    width: 190px;
                }
                &--item{
                    
                }
                .box-input{
                    .flotante-moneda{
                    }
                }
            }
            .texto-renovacion {
            }
            .medio-pago{
                .tarjeta{
                    display: inline-block;
                }
            }
        }
        .renovacion-ctas{
            margin: 32px 0;
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
                }
                .item-descripcion{
                    font-size: 16px;
                    font-family: 'Omnes SemiBold';
                    color: #454A6C;
                }
                h3{
                    font-size: 22px;
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
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            placa: 'D3H239',
            gps:'',
            frecuencia: '',
            isDisabled: false,
            selected: 1,
            monto_pagar: '',
            monto_antes: '',
            options: [
                { value: null, text: '' },
                { value: '1', text: 'Mensual (12 cuotas)' },
                { value: '2', text: 'Trimestral (4 cuotas)' },
                { value: '3', text: 'Anual (1 cuota)' },
            ],
            planSeleccionado : 3,
            selected: 1,
            objRenovacion:{
                "priceModel": {
                    "policy": {
                    "twoYears": '',
                    "annual": '',
                    "quarterly": '',
                    "monthly": '',
                    "twoYearsDiscount": '',
                    "annualDiscount": '',
                    "quarterlyDiscount": '',
                    "monthlyDiscount": '',
                    "discount": true
                    },
                    "deducible": '',
                    "vehicle": {
                    "current": '',
                    "maximum": '',
                    "minimum": '',
                    "gps": "N"
                    },
                    "paymentMethodId": 1,
                    "discount": {
                    "annual": 0,
                    "quarterly": 0,
                    "monthly": 0,
                    "annualAmount": 0,
                    "quarterlyAmount": 0,
                    "monthlyAmount": 0
                    }
                },
                "client": {
                    "firstName": "",
                    "firstLastName": "",
                    "secondLastName": "",
                    "documentNumber": "",
                    "email": ""
                },
                "vehicle": {
                    "brandName": "",
                    "modelName": "",
                    "plateNumber": "",
                    "modelYear": ''
                },
                "policy": {
                    "policyId": '',
                    "policyNumber": '',
                    "intercorp": '',
                    "fromDate": '',
                    "toDate": '',
                    "frequencyId": '',
                    "frequency": '',
                    "gps": "N",
                    "policyAmount": '',
                    "renew": ''
                },
                "card": {
                    "brand": '',
                    "number": ''
                }
            },
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
            listaBasica: {
                vehicle: {
                    current: null,
                    maximum: 0,
                    minimum: 0,
                    gps:''
                },
                policy: {
                    calculated: 0,
                    annual: 0,
                    quarterly: 0,
                    monthly: 0,
                    monthlyCalculated: 0,
                },
                vehicle:{
                    
                }
                },
            listaMedia: {
                vehicle: {
                    current: null,
                    maximum: 0,
                    minimum: 0
                },
                policy: {
                    calculated: 0,
                    annual: 0,
                    quarterly: 0,
                    monthly: 0,
                    monthlyCalculated: 0,
                },
            },
            listaFull: {
                vehicle: {
                    current: null,
                    maximum: 0,
                    minimum: 0
                },
                policy: {
                    calculated: 0,
                    annual: 0,
                    quarterly: 0,
                    monthly: 0,
                    monthlyCalculated: 0,
                },
            },
        }
    },
    methods: {
        obtenerDatos(){
            this.$store.commit('common/setPlateNumber', this.placa)
            this.$store.dispatch('common/obtenerDatos', this.placa).then((res) =>{          
                if (res.data.code == 0) {
                    this.objRenovacion = res.data.body
                    this.$store.commit('common/setFechaVigenciaRenovacion', this.objRenovacion.policy.fromDate)
                    if (this.objRenovacion.policy.renew == "Y") {
                            this.$store.commit('common/setPlacaNoRenovar', '')
                            this.$store.commit('payment/setNumeroPoliza',this.objRenovacion.policy.policyNumber)
                            // this.itemElegido.year = this.objRenovacion.vehicle.modelYear
                            // this.itemElegido.assignedPrice = this.objRenovacion.priceModel.vehicle.current
                            this.listCotizacion = this.objRenovacion.priceModel
                            this.clonado = Object.assign({}, this.listCotizacion);
                            // this.$store.dispatch('common/getCotizacion', this.itemElegido).then((res) => {
                            //     this.listCotizacion = res.data.body.allRisk
                            //     this.mostrarPrimeraPantalla = false
                            //     this.mostrarSegundaPantalla = true
                            //     this.clonado = Object.assign({}, this.listCotizacion);
                            //     this.obtenerMonto()   
                            // }
                        // )                                             
                    }else if (this.objRenovacion.policy.renew == "N") {
                        this.$store.commit('common/setPlacaNoRenovar', this.placa)
                        this.$nuxt.$router.push({path: "/renovacion/renovacion-cancelada"})
                    } else {
                    }
                } 
            })
        },
        seleccionarFrecuencia(){
            if (this.selected == 1) {
                this.frecuencia = 'Mensual'
                if (this.planSeleccionado == 3) {
                    this.monto_pagar = this.listaFull.policy.monthlyDiscount
                    this.monto_antes = this.listaFull.policy.monthlyCalculated
                }else if(this.planSeleccionado == 6){
                    this.monto_pagar = this.listaMedia.policy.monthlyDiscount
                    this.monto_antes = this.listaMedia.policy.monthlyCalculated
                }
                // this.monto_pagar = this.listCotizacion.policy
            }else if(this.selected == 2){
                this.frecuencia = 'Trimestral'
                if (this.planSeleccionado == 3) {
                    this.monto_pagar = this.listaFull.policy.quarterlyDiscount
                    this.monto_antes = this.listaFull.policy.quarterlyCalculated
                }else if(this.planSeleccionado == 6){
                    this.monto_pagar = this.listaMedia.policy.quarterlyDiscount
                    this.monto_antes = this.listaMedia.policy.quarterlyCalculated
                }
            }else if(this.selected == 3){
                this.frecuencia = 'Anual'
                if (this.planSeleccionado == 3) {
                    this.monto_pagar = this.listaFull.policy.annualDiscount
                    this.monto_antes = this.listaFull.policy.annualCalculated
                }else if(this.planSeleccionado == 6){
                    this.monto_pagar = this.listaMedia.policy.annualDiscount
                    this.monto_antes = this.listaMedia.policy.annualCalculated
                }
            }else if(this.selected == 4){
                this.frecuencia = 'Bianual'
                if (this.planSeleccionado == 3) {
                    this.monto_pagar = this.listaFull.policy.twoYearsDiscount
                    this.monto_antes = this.listaMedia.policy.twoYearsCalculated
                }else if(this.planSeleccionado == 6){
                    this.monto_pagar = this.listaMedia.policy.twoYearsDiscount
                    this.monto_antes = this.listaMedia.policy.twoYearsCalculated
                }
            }else{}
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
            evt.preventDefault()
            alert("HOLA")
            // if (this.listCotizacion.vehicle.current > this.clonado.vehicle.maximum) {
            // this.listCotizacion.vehicle.current = this.clonado.vehicle.maximum
            // }else if(this.listCotizacion.vehicle.current < this.clonado.vehicle.minimum){
            // this.listCotizacion.vehicle.current = this.clonado.vehicle.minimum
            // } else {
            // this.$store.commit('common/setCurrent', this.listCotizacion.vehicle.current)
            // this.getCotizacion()
            // this.isDisabled = false;
            // }
        },
    },
    computed: {
      isMinimo: function() {
        let decimal = this.clonado.vehicle.minimum / 100
        let minimo = Math.ceil(decimal) * 100;
        return minimo
        // return minimo.toLocaleString();
      },
      isMaximo: function() {
        let decimal = this.clonado.vehicle.maximum / 100
        let maximo = Math.floor(decimal) * 100;
        return maximo
        // return maximo.toLocaleString();
      },
    },
    mounted() {
        this.obtenerDatos()
    },
}
</script>
