<template>
    <div>
        <section class="cobertura-1">
            <b-container class="">
                <div class="section-header  pd-b16">
                    <h1 class="section-header__title">Un plan completo <span class="span-primario">todo riesgo</span></h1>
                    <h3 class="section-header__parrafo  text-center"><strong>Para que manejar tu carro no sea una preocupación.<br> Cobertura  a<span class="span-primario"> nivel nacional.</span> </strong></h3>
                </div>
            
                <div class="section-body">
                    <h4 class="section-body__title-2">Daños a <span class="span-primario">tu carro</span></h4>
                    <div class="divider-primario"></div>
                    <div class="section-detalle">
                    <b-row class="justify-content-center">

                        <b-col cols="12" sm="4"  v-for="(item, index) in ListDanosAtuCarro" :key="index">
                            <div class="cobertura-1-item aa" v-bind:class="'index'">
                                <img v-bind:src=item.url width="150" v-bind:alt="item.titulo" class="image">
                                <h3 class="cobertura-1-item__title"><strong>{{item.titulo}}</strong></h3>
                                <div class="cobertura-1__box  item-box">
                                    <div class="cobertura-1__box">                                                                        
                                        <b-btn v-b-modal="'modal-' + item.id" class="item-box__enlace">
                                            <div  class="item-box__enlace--detalle" @click="verDetalleCobertura(item)">Ver detalle</div>                                  
                                            <img src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b5f462007bc3e7e6b9c9ee4_icon-plus.svg"   width="23" alt="Daños a tu carro" class="image-7">
                                        </b-btn>
                                    </div>
                                </div>
                                <modal1-is :obj1="item"></modal1-is>
                            </div>
                        </b-col>

                    </b-row>
                    </div>
                    
                    <h4 class="section-body__title-2  danos-personas">Daños a <span class="span-primario">otras personas</span></h4>
                    <div class="divider-primario"></div>
                    <div class="section-detalle">
                    <b-row class="justify-content-center">
                        <b-col cols="12" sm="4"  v-for="(item, index) in ListDanosAOtrasPersonas" :key="index">
                            <div class="cobertura-1-item"><img v-bind:src=item.url width="150" v-bind:alt="item.titulo" class="image">
                                <h3 class="cobertura-1-item__title">{{item.titulo}}</h3>
                                <div class="cobertura-1__box">
                                    <b-btn v-b-modal="'modal-' + item.id" class="item-box__enlace">
                                        <div  class="item-box__enlace--detalle" @click="verDetalleCobertura(item)">Ver detalle</div>                                  
                                        <img src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b5f462007bc3e7e6b9c9ee4_icon-plus.svg"   width="23" alt="icon ver detalle" class="image-7">
                                    </b-btn>
                                </div>
                                <modal1-is :obj1="item"></modal1-is>
                            </div>
                        </b-col>
                    </b-row>
                    </div>


                </div>
            </b-container>  
        </section>
        <section id="servicios" class="cobertura-2  section">
            <b-container>
                <div class="section-header">
                    <h2 class="section-header__title">Servicios <span class="span-secundario">incluidos</span></h2>
                </div>
                <div class="section-body">
                    <div data-animation="slide" data-duration="500" class="slider w-slider" >
                        <div class="w-slider-mask" id="w-slider-mask">
                            <div class="slide-2 w-slide">
                            <div class="section-detalle">

                                <carousel   :per-page="1" class="carousel" :mouseDrag="true"
                                                                    :navigationEnabled="true"
                                                                    navigationNextLabel="<i class='fa fa-chevron-right'></i>"
                                                                    navigationPrevLabel="<i class='fa fa-chevron-left'></i>"
                                                                    :perPageCustom="[[480, 1], [768, 2] , [992, 3]]" 
                                                                    paginationColor="#ccc" paginationActiveColor="#00ADEE">
                                                                    
                                        <slide v-for="(item, index) in ListServiciosIncluidos" :key="index" class="slide">                                        
                                            <div class="section__item--box  cobertura-2-item">
                                                <div class="item--box">
                                                    <img v-bind:src=item.url  width="100" v-bind:alt="item.titulo" class="image-17">
                                                    <h6 class="cobertura-2-item__title">{{item.titulo}}</h6>
                                                    <div class="cobertura-2-item__boxtiempo">
                                                        <div class="cobertura-2-item__boxtiempo--text">{{item.tiempo}}</div>
                                                    </div>
                                                    <div class="cobertura-2-item__linearDivider"></div>
                                                    <p class="cobertura-2-item__incluye">{{item.descripcion}}</p>
                                                    <div class="cobertura-2-item__linearDivider"></div>
                                                    <div class="cobertura-2-item__exclusiones clearfix">
                                                        <img src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b61ff30a5fc3a0a7fd10df0_icon-dont.svg" width="20" alt="icon close"
                                                        class="image-23">
                                                        <p class="cobertura-2-item__exclusiones--parrafo">{{item.noincluye}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide>                                    
                                </carousel>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </b-container>
        </section>
        <section class="cobertura-2_1  section" style="background: #e0f3ff">
            <b-container>
                <b-row>
                    <b-col cols=12 lg="6">
                        <div class="section-header">
                            <h2 class="section-header__title text-left" style="font-size: 32px;">¿Hasta dónde llegan nuestros <br> <span class="span-secundario">servicios y asistencias?</span></h2>
                            <p class="span-primario">*El resto de las zonas es via reembolso</p>
                        </div>

                        <div class="contenedor">
                            <b-tabs>
                                <b-tab active>
                                    <template slot="title" class="title-tab tab_uno" >
                                        <img src="../static/media/img/gruas_mecanico.png" class="main-nav__logo--iso" alt="icon logo intersguro vehicular" name="seguro-vehicular">
                                        <p class="tab_uno" >Grúas y auxilio <br> Mecánico</p>
                                    </template>
                                    <div class="box-tab" style="background: white;">
                                        <div class="box-tab__item">
                                            <p class="point">Sur</p>
                                            <p class="point-desc">Km 100 Panamerica Sur </p>
                                        </div>
                                        <div class="box-tab__item">
                                            <p class="point">Este</p>
                                            <p class="point-desc">KM 33 Carretera central - plaza central Chosica</p>
                                        </div>
                                        <div class="box-tab__item">
                                            <p class="point">Sureste</p>
                                            <p class="point-desc">Óvalo de Cieneguilla</p>
                                        </div>
                                        <div class="box-tab__item">
                                            <p class="point">Oeste</p>
                                            <p class="point-desc">Ventanilla</p>
                                        </div>
                                        <div class="box-tab__item">
                                            <p class="point">Norte</p>
                                            <p class="point-desc">Km 48 Panamerica Norte (Peaje Ancón)</p>
                                        </div>
                                        <div class="box-tab__item">
                                            <p class="point">Noreste</p>
                                            <p class="point-desc">San Juan de Lurigancho (Av. Próceres de la Independencia con Av. Del Parque)</p>
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab >
                                    <template slot="title" class="title-tab">
                                        <img src="../static/media/img/chofer_reemplazo.png" class="main-nav__logo--iso" alt="icon logo intersguro vehicular">
                                        <p>Chofer de <br> reemplazo</p>
                                        
                                    </template>
                                    <div class="box-tab" style="background: white;">
                                        <div class="box-tab__item">
                                            <p class="point">Sur</p>
                                            <p class="point-desc">Asia boulevard </p>
                                        </div>
                                        <div class="box-tab__item">
                                            <p class="point">Este</p>
                                            <p class="point-desc">KM 33 Carretera central - plaza central Chosica</p>
                                        </div>
                                        <div class="box-tab__item">
                                            <p class="point">Sureste</p>
                                            <p class="point-desc">Óvalo de Cieneguilla</p>
                                        </div>
                                        <div class="box-tab__item">
                                            <p class="point">Oeste</p>
                                            <p class="point-desc">Ventanilla</p>
                                        </div>
                                        <div class="box-tab__item">
                                            <p class="point">Norte</p>
                                            <p class="point-desc">Km 48 Panamerica Norte (Peaje Ancón)</p>
                                        </div>
                                        <div class="box-tab__item">
                                            <p class="point">Noreste</p>
                                            <p class="point-desc">San Juan de Lurigancho (Av. Próceres de la Independencia con Av. Del Parque)</p>
                                        </div>
                                    </div>
                                </b-tab>
                            </b-tabs>


                        </div>
                    </b-col>
                    <b-col cols=12 lg="6">
                        <div class="box-mapa">
                            <img class="brujula" src="../static/media/img/brujula.png" alt="brujula">
                            <img height="550" src="../static/media/img/mapa.png" alt="mapa">
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <section id="nomecubre" class="cobertura-3  section" ref="nomecubre">
            <b-container>
            <div class="section-header">
                <h3 class="section-header__title">Lo que <span class="span-primario">no cubrimos</span></h3>
                <h3 class="section-header__subtitle  text-center pd-b16">Las cosas claras desde el principio</h3>

            </div>
            <div class="section-body">
                <b-row class="justify-content-center">
                    <b-col cols="12" sm="6"  md="3" v-for="(item, index) in ListNoCubrimos" :key="index" >
                        <div class="cobertura-3-item  d_flex_column">
                        <img v-bind:src=item.url height="100" v-bind:alt="item.titulo" class="image">
                        <div class="cobertura-3-item__title">{{item.titulo}}</div>
                        <div class="cobertura-3-item__detalle">
                            <b-btn v-b-modal="'modal-' + item.id" class="item-box__enlace w-inline-block clearfix">
                                <div  class="item-box__enlace--detalle" @click="verDetalleNoMeCubre(item)">Ver detalle</div>                                  
                                <img src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b5f462007bc3e7e6b9c9ee4_icon-plus.svg"   width="23" alt="icon ver detalle" class="image-7">
                            </b-btn>
                        </div>
                        
                        </div>
                        <modal2-is :obj2="item"></modal2-is>
                    </b-col>
                </b-row>
            </div>
            </b-container>
        </section>
    </div>
</template>
<style lang="scss">
    .cobertura-2_1{
        .box-mapa{
            display: none;
        }
        .contenedor{
            padding-right: 0px;
        }
        .section-header__title {
            line-height: 1;
        }
        ul{
            border: 0;
            margin-top: 48px;
        }
        .brujula{
            position: absolute;
            height: 70px;
            right: 175px;
            top: 0;
        }
        .point-desc{
            padding-left: 8px;
            width: 350px;
            font-size: 13px;
        }
        .nav-item{
            margin: 0;
            padding: 0;
            .main-nav__logo--iso{
                width: 30px;
            }
            &:nth-child(1){
                a{
                    width: 150px;
                    padding-left: 10px;
                }
            }
            &:nth-child(2){
                a{                    
                    width: 150px;
                    padding-left: 40px;
                    &:before{
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        border-right: 0;
                        border-top: 63px solid transparent;
                        border-left: 35px solid #e6e6e6;
                        left: -2px;
                        z-index: 9;
                        height: 65px;  
                    }
                    &:after{
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        border-right: 0;
                        border-top: 63px solid transparent;
                        border-left: 35px solid #e6e6e6;
                        right: -32px;
                        z-index: 9;
                        height: 65px;  
                    }
                }
            }
            p{
                padding-left: 8px;
            }
        }
        .box-tab{
            .main-nav__logo--iso{
                position: relative;
                width: 30px;
            }
            &__item{
                height: 48px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border-bottom: 2px solid #C1C1C1;
                color: #7F7F7F;
                
                .point{
                    border-right: 2px solid #C1C1C1;
                    width: 100px;
                    justify-content: center;
                    color: #5E5E5E;
                }
                
                p{
                    margin: 0;
                    height: 40px;
                    display: flex;
                    align-items: center;   
                    margin-bottom: 0;                                     
                }
                &:last-child{
                    border-bottom: none;
                }
            }
        }
        .nav-tabs .nav-link {
            background: #e6e6e6;
            color: #7F7F7F;
            height: 65px;
            font-size: 14px;
            line-height: 1;
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            position: relative;
            border: 0;
            
        }
        .nav-tabs .nav-link.active {
            background: white;
            &:after{
                content: "";
                position: absolute;
                width: 0;
                height: 0;
                border-right: 0;
                border-top: 63px solid transparent;
                border-left: 35px solid #ffffff;
                border-bottom: 0 solid #ffffff;
                right: -33px;
                z-index: 999;
                height: 65px;   
            }
        }
        p{
            align-items: center;  
            margin-bottom: 0;                                      
        }
    }
    .VueCarousel-navigation--disabled {
        opacity: 0 !important;
        cursor: default;
    }
    .carousel{        
        .slide{
            padding: 0 4px;
        }
    }
    .modal-body{
        min-height: 600px;
    }
    .mg-t25{
        margin-top: 25px;
    }
    .box-iconModal{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box-modal2-p{
        min-height: 55px;
        border-bottom: 1px solid #BDBDBD;
        display: flex;
        align-items: center;
        img{
            margin-right: 10px;
        }      
    }
    
    
    .modal-vue{
        padding-right: 0;
        color: #373737;
        font-size: 14px;
    }
    .paragraph-11{
        font-size: 16px;
    }
    .linea-divisora-modal{
        display: block;
        width: 10%;
        height: 2px;
        margin-right: auto;
        margin-left: auto;
        padding-right: 0px;
        padding-left: 0px;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-color: #0BD360;
    }
    .linea-divisora-2{
        background-color: #373737;
    }

    .section__item--box{        
        background: transparent;
        padding: 0 8px;
        .item--box{
            height: 500px;
            background: white;
        }
    }
    .w-slider{
        height: auto;
    }
    .VueCarousel-navigation-button{
        display: none;
    }
    @media (min-width: 768px) {
        .cobertura-2_1{
            .contenedor{
                width: 80%;
                margin: auto;
            }
        }
        .carousel{
            .slide{
                padding: 0 8px;
            }
        }
        .section__item--box{
            .item--box{
                height: 480px;
                background: white;
            }
        }
    }
    @media (min-width: 992px) {
        
        .cobertura-2_1{
            .box-mapa{
                display: block;
            }
            .contenedor{
                width: 100%;
                margin: auto;
            }
        }
        .carousel{
            .slide{
                padding: 0 12px;
            }
        }
        .section__item--box{    
            .item--box{
                height: auto;
            }
        }
        .VueCarousel-navigation-button{
            display: initial;
        }
    }
    @media (min-width: 1024px) {
        .cobertura-2_1{
            .box-tab{
                border-radius: 0 5px 5px 0;
            }
            .contenedor{
                width: 85%;
                margin-left: 0;
            }
        }

    }
    @media (min-width: 1200px){
        .cobertura-2_1{
            .contenedor {
                width: 75%;
                margin-left: 0;
            }
            .nav-item:nth-child(1) a{
                width: 160px
            }
            .nav-item:nth-child(2) a{
                width: 160px
            }
            .point-desc{
                font-size: 15px;
                padding-right: 8px;
            }
            .nav-tabs{
                .nav-link{
                    font-size: 16px;
                }
            }
        } 
    }
</style>

<script>
import Modal2 from '@/components/modals/modal2'
import Modal1 from '@/components/modals/modal1'
export default {
    layout: 'InterseguroWeb',
    data: () => ({  
        name: "main",
        ListDanosAtuCarro: [
            {
                id: 101,
                titulo: "ACCIDENTE DE TRÁNSITO",
                url: require("../static/media/img/accident01.svg"),
                descripcion:'Si tu carro sufre daños por un choque o accidente involuntario.',
                cuantoCubrimos:[
                    {detalle:'Valor asegurado del carro.'}
                ],
                pagoMinimo:[
                    {detalle:'- En Taller Preferente: $150.'},
                    {detalle:'- En Taller Concesionario: $200.'},
                    {detalle:'- En Taller No Afiliado a Interseguro: $300'}
                ],
                pagoMaximo:[
                    {detalle:'- En Taller Preferente: 10% del Monto a indemnizar.'},
                    {detalle:'- En Taller Concesionario: 15% del Monto a indemnizar.'},
                    {detalle:'- En Taller No Afiliado a Interseguro: 20% del Monto a indemnizar.'}
                ]
            },
            {
                id: 102,
                titulo: "PÉRDIDA TOTAL",
                descripcion: 'Si por un accidente o por robo pierdes tu carro, estás cubierto.',
                url: require("../static/media/img/accident02.svg"),
                cuantoCubrimos:[
                    {detalle:'Valor asegurado del carro.'}
                ],
                pagoMinimo:[
                    {detalle:'No tienes que pagar nada.'},
                ],
                pagoMaximo:[
                    {detalle:'Ninguno.'},
                ]
            },
            {
                id: 103,
                titulo: "ROBO O HURTO",
                descripcion: 'Si te roban algunas partes o todo el carro, el equipo de música original y cualquier accesorio adicional registrado. Incluso las llaves hasta en una ocasión.',
                url: require("../static/media/img/accident08.svg"),
                cuantoCubrimos:[
                    {detalle:'Valor asegurado del carro.'}
                ],
                pagoMinimo:[
                    {detalle:'$150.'},
                ],
                pagoMaximo:[
                    {detalle:'15% del monto a indemnizar'},
                ]
            },
            {
                id: 104,
                titulo: "RESPONSABILIDAD CIVIL - TERCEROS",
                url: require("../static/media/img/responsabilidad_civil.svg"),
                descripcion:'Todo daño material o personal ocasionado a un tercero (persona u objeto) que no sea un ocupante del carro.',
                cuantoCubrimos:[
                    {detalle:'Frente a terceros: Hasta $150,000.'},
                ],
                pagoMinimo:[
                    {detalle:'$150.'}
                ],
                pagoMaximo:[
                    {detalle:'10% del monto a indemnizar.'}
                ]
            },
            
            {
                id: 105,
                titulo: "ROTURA DE LUNAS",
                url: require("../static/media/img/rotura_lunas.svg"),
                descripcion: 'Si rompieron una o más de tus lunas, sean nacionales o importadas, están cubiertas.',
                cuantoCubrimos:[
                    {detalle:'Valor asegurado del carro.'}
                ],
                pagoMinimo:[
                    {detalle:'Nacionales: Sin deducible.'},
                    {detalle:'Importadas: $150.'},
                ],
                pagoMaximo:[
                    {detalle:'Importadas: 10% del monto a indemnizar.'},
                ]
            },
            {
                id: 106,
                titulo: "RIESGOS DE LA NATURALEZA",
                url: require("../static/media/img/riesgos_naturaleza.svg"),
                descripcion:'Si tu carro sufre daños debido a un desastre natural, como un terremoto, temblor, huaico, u otros.',
                cuantoCubrimos:[
                    {detalle:'Valor asegurado del carro.'}
                ],
                pagoMinimo:[
                    {detalle:'$200.'},
                ],
                pagoMaximo:[
                    {detalle:'20% del monto a indemnizar.'},
                ]
            },
            {
                id: 107,
                titulo: "HUELGAS O VANDALISMO",
                url: require("../static/media/img/huelgas_vandalismo.svg"),
                descripcion:'Si tu carro se ve dañado durante una huelga o alteraciones del orden público, incluso cuando estos fueron ocasionados por las autoridades; o casos de terrorismo. También si alguien daña tu carro intencionalmente.',
                cuantoCubrimos:[
                    {detalle:'Valor asegurado del carro.'}
                ],
                pagoMinimo:[
                    {detalle:'- En Taller Preferente: $150.'},
                    {detalle:'- En Taller Concesionario: $200.'},
                    {detalle:'- En Taller No Afiliado a Interseguro: $300.'}
                ],
                pagoMaximo:[
                    {detalle:'- En Taller Preferente: 10% del Monto a indemnizar.'},
                    {detalle:'- En Taller Concesionario: 15% del Monto a indemnizar.'},
                    {detalle:'- En Taller No Afiliado a Interseguro: 20% del Monto a indemnizar.'}
                ]
            },
            {
                id: 108,
                titulo: "ACCESORIOS",
                url: require("../static/media/img/accesorios.svg"),
                descripcion:'Cubrimos el equipo musical original que esté instalado en tu carro, así como otros accesorios adicionales que hayan sido verificados durante la inspección.',
                cuantoCubrimos:[
                    {detalle:'$1,500.'}
                ],
                pagoMinimo:[
                    {detalle:'$150.'},
                ],
                pagoMaximo:[
                    {detalle:'10% del monto a indemnizar.'},
                ]
            },
            {
                id: 109,
                titulo: "INCENDIO",
                url: require("../static/media/img/incendio.svg"),
                descripcion: 'Si tu carro es dañado por fuego tras un accidente o una causa ajena a ti.',
                cuantoCubrimos:[
                    {detalle:'Valor asegurado del carro.'}
                ],
                pagoMinimo:[
                    {detalle:'- En Taller Preferente: $150.'},
                    {detalle:'- En Taller Concesionario: $200.'},
                    {detalle:'- En Taller No Afiliado a Interseguro: $300.'}
                ],
                pagoMaximo:[
                    {detalle:'- En Taller Preferente: 10% del Monto a indemnizar.'},
                    {detalle:'- En Taller Concesionario: 15% del Monto a indemnizar.'},
                    {detalle:'- En Taller No Afiliado a Interseguro: 20% del Monto a indemnizar.'}
                ]
            }
        ],
        ListDanosAOtrasPersonas: [
            {
                id: 201,
                titulo: "RESPONSABILIDAD CIVIL - OCUPANTES",
                url: require("../static/media/img/responsabilidad_ocupantes.svg"),
                descripcion:'Todo daño ocasionado a los ocupantes del vehículo; máximo hasta 5 ocupantes.',
                cuantoCubrimos:[
                    {detalle:'Frente a ocupantes: Hasta $10,000 por persona, máximo 5 ocupantes.'},
                ],
                pagoMinimo:[
                    {detalle:'$150.'}
                ],
                pagoMaximo:[
                    {detalle:'10% del monto a indemnizar.'}
                ]
            },
            {
                id: 202,
                titulo: "ACCIDENTES DE OCUPANTES",
                url: require("../static/media/img/accidentes_ocupantes.svg"),
                descripcion:'Cubrimos los gastos de curación, sepelio, invalidez permanente y muerte de hasta 5 ocupantes. Se pagará máximo el número de ocupantes que indica la tarjeta de propiedad. Si al momento del accidente iban más personas en tu carro, se dividirá el monto total entre ese número de personas.',
                cuantoCubrimos:[
                    {detalle:'- Hasta $20,000 por ocupante en caso de muerte o invalidez permanente.'},
                    {detalle:'- Hasta $4,000 por ocupante en gastos de curación.'},
                    {detalle:'- Hasta $1,000 por ocupante en gastos de sepelio. '}
                ],
                pagoMinimo:[
                    {detalle:'Ninguno.'}
                ],
                pagoMaximo:[
                    {detalle:'Ninguno.'}
                ]
            },
            
        ],

        ListNoCubrimos: [
          {
            id: 300,    
            titulo: "SI TE PORTAS MAL",
            url: require("../static/media/img/exclusion-01.svg"),
            detalles:[
                {descripcion:'Si manejaste ebrio o bajo el efecto de drogas, sustancias alucinógenas, legales o no.'},
                {descripcion:'Si huiste del lugar del accidente y dañan tu carro, a menos que sea para evitar el accidente.'},
                {descripcion:'Si manejaron tu carro sin tener brevete, o si lo tenían vencido o suspendido. '},
                {descripcion:'Si tu carro se daña porque participaste activamente en peleas o alteraciones del orden público.'},
                {descripcion:'Si tu carro sufre daños porque cometiste una infracción a las normas de tránsito.'},                
            ]
          },
          {
            id: 301,  
            titulo: "SOBRE LO QUE LLEVAS",
            url: require("../static/media/img/exclusion-02.svg"),
            detalles:[
                {descripcion:'Si llevabas mercadería o insumos inflamables, corrosivos o explosivos.'},
                {descripcion:'Si causan daños a los remolques, casas rodantes o furgones acoplados a tu carro. Tampoco si se lastiman o mueren las personas que iban dentro, ni las cosas que se dañen.'},
                {descripcion:'Si tu carro se daña porque estabas remolcando otro carro.'},
                {descripcion:'Si tu carro estaba siendo transportado por una grúa que no es nuestra.'},
                {descripcion:'Si tu carro se daña porque participaste activamente en peleas o alteraciones del orden público.'},     
                {descripcion:'Si los animales, personas u objetos que llevabas en tu carro lo dañan; así como los daños que causen a terceros.'},                
            ]
          },
          {
            id: 302,    
            titulo: "SOBRE LO QUE DAÑAS",
            url: require("../static/media/img/exclusion-08.svg"),
            detalles:[
                {descripcion:'Si se dañan tus propiedades o propiedades bajo tu control, no cubrimos esas reparaciones.'},
                {descripcion:'Si se dañan la capota de lona o los accesorios, piezas o partes de descapotables.'},
                {descripcion:'Si se dañan los neumáticos o cámaras, a menos que sea debido a un accidente cubierto.'}             
            ]
          },
          {
            id: 303,  
            titulo: "ALGUIEN LLEVA TU CARRO",
            url: require("../static/media/img/exclusion-06.svg"),
            detalles:[
                {descripcion:'Si tu carro se daña cuando lo remolcan o lo transporta una grúa que no sea nuestra. Por favor, evita transportarlo con otros medios que no sean nuestros.'},
                {descripcion:'Si hay daños causados a otras personas cuando robaron tu carro, salvo si te lastimaron a ti o a las personas que iban contigo justo antes del robo.'},          
            ]
          },
          {
            id: 304,  
            titulo: "DESGASTE O MAL USO",
            url: require("../static/media/img/exclusion-04.svg"),
            detalles:[
                {descripcion:'Si tu carro sufre daños causados por desgaste, sobrecarga, mal uso, falla mecánica, falta de uso o falta de mantenimiento.'},
                {descripcion:'Si realizaste una instalación eléctrica defectuosa o incorrecta.'},
                {descripcion:'Si los daños se deben a reparaciones o cambios de piezas sin autorización de Interseguro, que no nos permitan saber cuáles fueron las causas del accidente.'}
            ]
          },
          {
            id: 305,  
            titulo: "CASOS EXTREMOS",
            url: require("../static/media/img/exclusion-03.svg"),
            detalles:[
                {descripcion:'Si los daños a tu carro sucedieron porque se proclamó un estado de sitio o alguna autoridad decidió confiscar, expropiar, nacionalizar o destruir bienes.'},
                {descripcion:'Si los daños fueron causados debido a una guerra, civil o internacional.'},
                {descripcion:'Si fueron causados por una reacción o radiación nuclear, o contaminación radioactiva.'}             
            ]
          },
        //   {
        //     id: 306,  
        //     titulo: "RESPONSABILIDADES",
        //     url: require("../static/media/img/exclusion-05.svg"),
        //     detalles:[
        //         {descripcion:'Si debido a un accidente tienes algún gasto relacionado a responsabilidades contractuales o penales, como por ejemplo, gastos judiciales o fianzas, esos gastos no están cubiertos.'},
        //     ]
        //   },
          {
            id: 307,  
            titulo: "OTROS",
            url: require("../static/media/img/exclusion-07.svg"),
            detalles:[
                {descripcion:'Si los daños ocurrieron cuando usaste tu carro como taxi, colectivo, auto de instrucción, movilidad escolar, para arrendamiento o cualquier otro uso comercial, solo aseguramos uso particular.'},
                {descripcion:'Si los daños ocurrieron cuando tu carro iba por zonas que no están destinadas al paso de vehículos, a menos que sean trayectos obligados.'},
                {descripcion:'Si los daños no son causados de forma accidental.'}             
            ]
          }
        ],
        ListServiciosIncluidos:[
            {
                titulo: 'Choferes de reemplazo',
                url: require("../static/media/img/service-chofer.svg"),
                descripcion: 'Ofrecemos hasta 5 choferes de reemplazo. Y si necesitas más, agrega cada chofer extra por S/50.',
                tiempo: '5 al año',
                noincluye: 'No incluye el pago de peaje, gasolina ni parqueo.'
            },
            {
                titulo: 'Grúas',
                url: require("../static/media/img/service-grua.svg"),
                descripcion: 'Incluye los daños que le puedan pasar a tu carro dentro de los límites de asistencia. De lo contrario, cubrimos hasta $250 por evento.',
                tiempo: 'Hasta 2 por mes',
                noincluye: 'No incluye vehículos con peso mayor a 1.8 toneladas.'
            },
            {
                titulo: 'Asistencias mecánicas',
                url: require("../static/media/img/service-mecanico.svg"),
                descripcion: 'Incluye fallas eléctricas, fallas mecánicas, carga de batería, cambio de llantas y olvido de las llaves dentro de tu carro.',
                tiempo: 'Ilimitadas',
                noincluye: 'No incluye fallas mayores ni materiales o repuestos.'
            },
            {
                titulo: 'Vehículos de reemplazo',
                url: require("../static/media/img/service-replacecar.svg"),
                descripcion: 'Tendrás 15 días acumulables al año en caso tengas un accidente de tránsito con tu carro; y 30 días acumulables al año si te lo roban. Costo: $100 por evento.',
                tiempo: 'Hasta 30 días',
                noincluye: ''
            },
            {
                titulo: 'Ambulancias',
                url: require("../static/media/img/service-ambulance.svg"),
                descripcion: 'Cuentas con ambulancias ilimitadas dentro de los límites de asistencia. De lo contrario, cubrimos hasta $250 por evento, vía reembolso.',
                tiempo: 'Ilimitadas',
                noincluye: ''
            },
            {
                titulo: 'Asistencia Legal',
                url: require("../static/media/img/service-judge.svg"),
                descripcion: 'Si necesitas asistencia jurídica debido a un accidente de tránsito con tu carro, te haremos un reembolso de hasta $250 por evento.',
                tiempo: '3 al año',
                noincluye: ''
            },
        ]
  }),
  components: {
    'modal2-is': Modal2,
    'modal1-is': Modal1,
  },

    methods:{
        verDetalleCobertura(item){
            var itemNew = item.titulo
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                // 'event': itemNew.replace(/\s/g, "_"),
                'event': 'ver_detalle_cobertura',
                'nombre_detalle': item.titulo // enviar strings de detalles
            });
        },
        verDetalleNoMeCubre(item){
            var itemNew = item.titulo
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'ver_detalle_no_me_cubre',
                'nombre_detalle': item.titulo // enviar strings de detalles
            });
        },
        PaginaVista(){
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'pagina_vista',
                'page-url': '/vehicular/cobertura', 
                'page-title': 'Cobertura'
            });
        }
    },
    mounted: function() {
        this.PaginaVista();
        var check = document.getElementById("nav-checkbox")
        check.checked = false
    } 
}
</script>