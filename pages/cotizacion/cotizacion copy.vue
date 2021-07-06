<template>
    <div>
        <div class="container  contenedor-principal  page-suma-asegurada">
            <div class="row">
                <div class="col-12">
                    <div class="box-steps">

                    </div>
                </div>
            </div>
            <b-row>
                <b-col>
                    <pre>{{this.listaBasica.policy.monthly}}</pre>
                </b-col>
            </b-row>
            <div class="row justify-content-center">
                <div class="col-12  col-lg-4">
                    <div class="suma-asegurada">
                        <p>Ingresa la suma asegurada</p>
                        <div class="datos-carro">
                            <span>{{this.$store.state.common.objVehicle.brand}}</span>
                            <span>{{this.$store.state.common.objVehicle.model}}</span>
                            <span>{{this.$store.state.common.objVehicle.modelYear}}</span>
                            <span>LAPIZ</span>
                        </div>
                        
                    </div>
                </div>
                <b-col cols="12">
                    <b-row>
                        <b-col cols="4">
                            <p>¡Edita y elige tu plan!</p>
                        </b-col>
                        <b-col cols="8">
                            <b-row>
                                <b-col cols="4">
                                    <div class="v2-detalle-plan__box-frecuencia  select">
                                        <b-form-select  v-model="selected" :options="options"></b-form-select>
                                    </div>
                                </b-col>
                                <b-col cols="4">

                                </b-col>
                                <b-col cols="4">

                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="12">
                    <div class="seccion-planes" >
                        <div class="seccion-planes__head   d-lg-none">


                            <div class="planes-detalle" v-for="(item, index) in listCotizacionTotal" :key="index">

                                

                                <div class="plan-item" @click="seleccionarPlan(index)">
                                    <p class="plan-nombre">{{index}} </p>
                                </div>

                 
                            </div>
                        </div>
  
                        <div class="seccion-planes__body   d-lg-none">
                            <div class="planes-detalle">
                                <p class="plan-nombre"><strong>{{planSeleccionado == 0 ? "Básico" : planSeleccionado == 1 ? "Medio" : "Full"}} : </strong>{{proteccion}}</p>

                                <p class="plan-monto">
                                     {{listCotizacionTotal.basic.policy.monthly}}
                                </p>
                                
 

                                <p class="plan-incluye">Este plan incluye: </p>
                                <ul>
                                    <li  v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                                    Beneficios Interseguro
                                    </li>
                                    <li  v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                                    Central de emergencias
                                    </li>
                                    <li  v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                                    Responsabilidad Civil
                                    </li>
                                    <li  v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                                    Robo total
                                    </li>
                                    <li  v-if="planSeleccionado == 1 || planSeleccionado == 2">
                                    Daños al vehículo por accidente
                                    </li>
                                    <li  v-if="planSeleccionado == 1 || planSeleccionado == 2">
                                    Accidentes personales
                                    </li>
                                    <li v-if="planSeleccionado == 2">
                                    Accesorios musicales
                                    </li>
                                    <li v-if="planSeleccionado == 2">
                                    Rotura de lunas
                                    </li>
                                    <li v-if="planSeleccionado == 2">
                                    Desastres naturales, vandalismo, incendios.
                                    </li>
                                    <li v-if="planSeleccionado == 2">
                                    Pérdida total por accidente
                                    </li>
                                    <li v-if="planSeleccionado == 2">
                                    Ausencia de control*
                                    </li>
                                </ul>
                                <router-link to="" class="ver-detalle">Ver detalle <img src="" alt=""></router-link>
                            </div>
                        </div>
    
                        <div class="seccion-planes__body  d-none  d-lg-flex">
                            <div class="planes-detalle" v-for="(item, index) in listCotizacionTotal" :key="index">
                                <!-- <div class="plan-recomendado" v-if="index == 2">
                                    <img src="@/static/media/imagenes/home/star-white.svg" alt="" class="beneficios__item--icon">
                                    <span>¡Plan recomendado!</span>
                                </div> -->
                                <p class="plan-nombre"><strong>{{item.plan}} </strong>{{item.proteccion}} </p>
                                <p class="plan-monto" v-if="selected ==1">
                                    <span>Desde </span> <span> US$ {{item.policy.monthly}}</span> <span>AL MES</span>
                                    <br>
                                    <span>antes </span> <span> US$ {{item.policy.monthlyCalculated}}</span> <span>AL MES</span>
                                </p>
                                <p class="plan-monto" v-if="selected ==2">
                                    <span>Desde </span> <span> US$ {{item.policy.quarterly}}</span> <span>AL MES</span>
                                    <br>
                                    <span>antes </span> <span> US$ {{item.policy.quarterlyCalculated}}</span> <span>AL MES</span>
                                </p>
                                <p class="plan-monto" v-if="selected ==3">
                                    <span>Desde </span> <span> US$ {{item.policy.annual}}</span> <span>AL MES</span>
                                    <br>
                                    <span>antes </span> <span> US$ {{item.policy.annualCalculated}}</span> <span>AL MES</span>
                                </p>
                                <div class="continuar">
                                    <button>
                                        CONTINUAR
                                    </button>
                                </div>
                                <p class="plan-incluye">Este plan incluye: </p>
                                <ul>
                                    <li  v-if="index == 0 || index == 1 || index == 2">
                                    Beneficios Interseguro
                                    </li>
                                    <li  v-if="index == 0 || index == 1 || index == 2">
                                    Central de emergencias
                                    </li>
                                    <li  v-if="index == 0 || index == 1 || index == 2">
                                    Responsabilidad Civil
                                    </li>
                                    <li  v-if="index == 0 || index == 1 || index == 2">
                                    Robo total
                                    </li>
                                    <li  v-if="index == 1 || index == 2">
                                    Daños al vehículo por accidente
                                    </li>
                                    <li  v-if="index == 1 || index == 2">
                                    Accidentes personales
                                    </li>
                                    <li v-if="index == 2">
                                    Accesorios musicales
                                    </li>
                                    <li v-if="index == 2">
                                    Rotura de lunas
                                    </li>
                                    <li v-if="index == 2">
                                    Desastres naturales, vandalismo, incendios.
                                    </li>
                                    <li v-if="index == 2">
                                    Pérdida total por accidente
                                    </li>
                                    <li v-if="index == 2">
                                    Ausencia de control*
                                    </li>
                                </ul>
                                <router-link to="" class="ver-detalle">Ver detalle <img src="" alt=""></router-link>
                            </div>
                        </div>
                    </div>
                </b-col>
            </div>
            <div class="row">
                <nuxt-link to="documento" @click="continuar()">CONTINUAR</nuxt-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    $is-v-azul : #0855c4;
    $is-v-border: #CCD1DD;
    $is-v-gris-disabled: #82859D;
    .contenedor-principal{
        margin-top: 120px;
    }
    .page-suma-asegurada{
        .seccion-planes{
            .plan-recomendado{
                background: $is-v-azul;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-size: 17px;
                font-family: 'Omnes Medium';
                border-radius: 3px 3px 0 0;
                img{
                    margin-right: 12px;
                }
            }
            &__head{
                margin-bottom: 12px;
                display: flex;
                justify-content: space-between;
                .plan-item{
                    width: 110px;
                    text-align: center;
                    background-color: #E5E8EF;
                    color: #454A6C;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
            &__body{
                .planes-detalle{
                    border: 2px solid $is-v-azul;
                    padding-bottom: 1.7rem;
                    background-color: #fff;
                }
                .plan-monto{
                    font-size: 1.5rem;
                    text-align: center;
                    color: $is-v-azul;
                    padding: 16px 0;
                }
                .plan-incluye{
                    color: #454A6C;
                    font-family: 'Omnes SemiBold';
                    padding-left: 1.5rem;
                }
                .plan-nombre{
                    text-align: center;
                    font-size: 1.25rem;
                    font-family: 'Omnes Regular';
                    padding: 16px 0;
                    position: relative;
                    &:after{
                        background-color: #DDE0E9;
                        bottom: 0;
                        content: "";                
                        height: 1px;
                        left: 15%;
                        position: absolute;
                        width: 70%; 
                    }
                }
                ul{
                    padding-top: 14px;
                    padding-left: 1.5rem;
                    li{
                        list-style: none;
                        font-family: 'Omnes Regular';
                        font-size: 1rem;
                    }
                }
                .ver-detalle{
                    text-align: center;
                    display: inline-block;
                    width: 100%;
                    cursor: pointer;
                }
            }
            .active{
                border: 2px solid $is-v-azul;
            }
        }
        .pantalla-actual{
            p{
                color: $is-v-azul;
                font-size: 36px;
                font-family: 'Omnes Regular';
                margin-bottom: 36px;
            }
        }
        
    }
    @media (min-width: 600px) {
        .page-suma-asegurada{
            .seccion-planes{
                .plan-recomendado{
                    width: 261px;
                    margin: auto;
                    position: absolute;
                    top: -36px;
                    display: flex;
                    justify-content: center;
                    left: 51px;
                }
                &__body{
                    .planes-detalle{
                        border: none;
                        border: 1px solid #CCD1DD;
                        &:last-child{
                            border: $is-v-azul 2px solid
                        }
                    }
                }
            }
        }
    }
    @media (min-width: 1024px) {
        .page-suma-asegurada{
            .seccion-planes{
                &__body{
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    .plan-nombre{
                        font-size: 1.2rem;
                    }
                    .planes-detalle{
                        width: 360px;
                        height: 560px;
                    }
                    .planes-detalle{
                        position: relative;
                    }
                    .plan-incluye{
                        padding-left: 2rem;
                    }
                    ul{
                        padding-left: 2rem;
                        li{
                            line-height: 20px;
                        }
                    }
                    .ver-detalle{
                        position: absolute;
                        bottom: 24px;
                        font-size: 1.125rem !important;
                    }
                }
            }
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                planSeleccionado: 2,
                proteccion: "Protección total",
                precio: 33,
                /********************************************** */
                itemElegido: {
                    brandId:'',
                    brand:'',
                    modelYear: '',
                    model: '',
                    modelId:'',
                    remarketingId:'',
                    assignedPrice: null,
                    businessId:1,
                    discountType: '',
                    assignedPrice: null
                },
                gps:'',
                frecuencia: '',
                planSeleccionado:3,
                selected: 1,
                monto_pagar: '',
                monto_antes: '',

                maximoImgDisabled: false,
                minimoImgDisabled: false,
                monto_pagar_plata :'',
                monto_antes_plata :'',            
                monto_pagar_oro :'',
                monto_antes_oro :'',
                monto_pagar_black :'',
                monto_antes_black :'',
                valorSeleccionado: false,
                activarTooltip: false,
                activarTooltipDesktop: false,
                listCotizacionTotal:{},
                listCotizacionMovil:{},
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

                options: [
                    { value: null, text: '' },
                    { value: '1', text: 'Mensual' },
                    { value: '2', text: 'Trimestral' },
                    { value: '3', text: 'Anual' },
                ],
                listTest: [
                    {
                        precio: "",
                        precioAntes: "",
                        proteccion : "Protección contra robo",
                        plan: "Básico",
                    },
                    {
                        precio: "",
                        precioAntes: "",
                        proteccion : "Protección contra accidentes",
                        plan: "Intermedio",
                    },
                    {
                        precio: "",
                        precioAntes: "",
                        proteccion : "Protección total",
                        plan: "Full",

                    }
                ],
                /******************/
                
            }
        },
        methods: {

            getCotizacion() {
                console.log("GET COTIZACION");
                this.$store.dispatch('common/getCotizacion', this.itemElegido).then((res) => {
                    if (res.data.code == 0) { 
                    
                    this.listCotizacionTotal = res.data.body

                    this.listCotizacion = res.data.body.allRisk
                    this.clonado = Object.assign({}, this.listCotizacion)
                    this.$store.commit('common/setCurrent', this.listCotizacion.vehicle.current)

                    } else if (res.data.code == 213) {
                    
                    this.$swal({
                        title: "Oops...",
                        text: res.data.message,
                        type: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#2177CC",
                        confirmButtonText: "OK"
                    });
                    this.$nuxt.$router.push({path: "/"})
                    
                    
                    }
                    else if(res.data.code === 200){
                    if(!this.htmlModal){
                        this.htmlModal = document.getElementById('imagePhone');
                        this.htmlModal.style.display = "";
                    }

                    const goToVehicular = () => this.$nuxt.$router.back();

                    // imagePhone.style.display = '';
                    this.$swal({
                        // title: "Oops...",
                        html: this.htmlModal,
                        // type: "warning",
                        showCancelButton: false,
                        confirmButtonColor: "#2177CC",
                        confirmButtonText: "OK",
                        
                    }).then(function () {
                        window.dataLayer = window.dataLayer || [ ];
                        dataLayer.push({
                            'event': 'placa_rechazada',
                            'category': 'UI: Cotizador error',
                            'action': 'error',
                            'label': 'error en el servicio'
                        })
                        goToVehicular();
                    });
                    } 
                    else {
                    

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
            },
            seleccionarPlan(id){
                switch (id) {
                    case 0:
                    this.planSeleccionado = 0
                    this.proteccion = "Protección contra robo"
                    this.precio = this.
                    break;
                    case 1:
                    this.planSeleccionado = 1
                    this.proteccion = "Protección contra accidentes"
                    this.precio = 25
                    break;
                    case 2:
                    this.planSeleccionado = 2
                    this.proteccion = "Protección total"
                    this.precio = 33
                    break;
                    default:
                    break;
                }
                this.listCotizacionMovil = this.listCotizacionTotal.id
            },
            continuar(e,id) {
                e.stopPropagation();
                this.$store.commit('common/setFrecuenciaPago', this.selected)


                this.listCotizacion.policy.startDate = this.fechaVigencia
                this.listCotizacion.paymentMethodId = this.selected
                this.$store.state.common.listaCotizacion.paymentMethodId = this.selected
                this.$store.commit('common/setItemElegido', this.itemElegido)
                this.$store.commit('common/setListaCotizacion', this.listCotizacion)

               
                this.cotizador_datalayer('addToCart')
                this.$nuxt.$router.push('/cotiza/documento')

            },
        },
        created() {
            
        },
        mounted() {
            this.getCotizacion()
        },

    }
</script>