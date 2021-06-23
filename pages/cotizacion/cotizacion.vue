<template>
    <div>
        <div class="container  contenedor-principal  page-suma-asegurada">
            <div class="row">
                <div class="col-12">
                    <div class="box-steps">

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12  col-lg-12">
                    <div class="pantalla-actual">
                        <p>LUCHIN, <br class="d-lg-none"> Ingresa la suma asegurada</p>
                        <span>{{}}</span>
                    </div>
                </div>
                <b-col cols="12">
                    <div class="seccion-planes" >
                        <div class="seccion-planes__head   d-lg-none">
                            <div class="plan-item" @click="seleccionarPlan(0)">
                            <p>Básico</p>
                            </div>
                            <div class="plan-item" @click="seleccionarPlan(2)">
                            <p>Full</p>
                            </div>
                            <div class="plan-item" @click="seleccionarPlan(1)">
                            <p>Medio</p>
                            </div>
                        </div>
                        <!-- <div class="plan-recomendado   d-lg-none" v-if="planSeleccionado == 2">
                            <img src="@/static/media/imagenes/home/star-white.svg" alt="" class="beneficios__item--icon">
                            <span>¡Plan recomendado!</span>
                        </div> -->
                        <div class="seccion-planes__body   d-lg-none">
                            <div class="planes-detalle">
                                <p class="plan-nombre"><strong>{{planSeleccionado == 0 ? "Básico" : planSeleccionado == 1 ? "Medio" : "Full"}} : </strong>{{proteccion}}</p>
                                <p class="plan-monto">
                                    <span class="omnes-regular">Desde </span> <span> US$ {{precio}}</span><span>AL MES</span>
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
                            <div class="planes-detalle" v-for="(item, index) in listTest" :key="index">
                                <!-- <div class="plan-recomendado" v-if="index == 2">
                                    <img src="@/static/media/imagenes/home/star-white.svg" alt="" class="beneficios__item--icon">
                                    <span>¡Plan recomendado!</span>
                                </div> -->
                                <p class="plan-nombre"><strong>{{item.plan}} </strong>{{item.proteccion}} </p>
                                <p class="plan-monto">
                                    <span>Desde </span> <span> US$ {{item.precio}}</span> <span>AL MES</span>
                                </p>
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
                listTest: [
                    {
                    precio : 12,
                    proteccion : "Protección contra robo",
                    plan: "Básico"
                    },
                    {
                    precio : 25,
                    proteccion : "Protección contra accidentes",
                    plan: "Intermedio"
                    },
                    {
                    precio : 33,
                    proteccion : "Protección total",
                    plan: "Full"
                    }
                ],
                /******************/
                
            }
        },
        methods: {
            
        },
        created() {
            
        },

    }
</script>