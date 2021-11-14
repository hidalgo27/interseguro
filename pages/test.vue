  <template>
<!--  <div class="nuevo-home" @scroll="handleScroll()">-->
  <div class="">
<!--    <section class="sticky-top bg-white">-->
<!--      <div class="container">-->
<!--        <nav class="navbar navbar-expand-lg navbar-light container px-0">-->
<!--          <a class="navbar-brand" href="#"> <img class="logo" src="@/static/media/img/home/logo.svg"></a>-->
<!--          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">-->
<!--            <span class="navbar-toggler-icon"></span>-->
<!--          </button>-->
<!--          <div class="collapse navbar-collapse" id="navbar1">-->
<!--            <ul class="navbar-nav ml-auto">-->
<!--              <li class="nav-item active">-->
<!--                <a class="nav-link" href="http://bootstrap-ecommerce.com">Home <span class="sr-only">(current)</span></a>-->
<!--              </li>-->
<!--              <li class="nav-item"><a class="nav-link" href="html-components.html"> Documentation </a></li>-->
<!--              <li class="nav-item dropdown">-->
<!--                <a class="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">  Dropdown  </a>-->
<!--                <ul class="dropdown-menu">-->
<!--                  <li><a class="dropdown-item" href="#"> Menu item 1</a></li>-->
<!--                  <li><a class="dropdown-item" href="#"> Menu item 2 </a></li>-->
<!--                </ul>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <a class="btn ml-2 btn-warning" href="http://bootstrap-ecommerce.com">Download</a></li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </nav>-->
<!--      </div>-->
<!--    </section>-->
    <nav-sticky></nav-sticky>
    <banner-blue-cart></banner-blue-cart>
    <section>
      <b-container>
        <b-row>
          <b-col cols="12" class="text-center">
            <h2 class="text-v-primary h1 text-h1 omnes-light my-5">Más de 550,000 clientes ya protegen <br> su auto con nosotros</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="3" class="mb-2 mb-md-0">
            <div class="border border-v-radius pl-3 pr-2 py-3 py-md-4 border-hover-line">
              <b-row align-v="center" class="no-gutters">
                <b-col cols="2" md="4" class="pr-3">
                  <img src="@/static/media/imagenes/home/cotizaciones.svg" alt="" class="w-100">
                </b-col>
                <b-col cols="9" md="8">
                  <h3 class="h3 omnes-medium text-v-gray-dark mb-0">+15,000</h3>
                  <p>Cotizaciones diarias</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="12" md="3" class="mb-2 mb-md-0">
            <div class="border border-v-radius pl-3 pr-2 py-3 py-md-4 border-hover-line">
              <b-row align-v="center" class="no-gutters">
                <b-col cols="3" md="4" class="pr-3">
                  <img src="@/static/media/imagenes/home/asistencia.svg" alt="" class="w-100">
                </b-col>
                <b-col cols="9" md="8">
                  <h3 class="h3 omnes-medium mb-0 text-v-gray-dark">+3,000</h3>
                  <p>Asistencias brindadas</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="12" md="3" class="mb-2 mb-md-0">
            <div class="border border-v-radius pl-3 pr-2 py-3 py-md-4 border-hover-line">
              <b-row align-v="center" class="no-gutters">
                <b-col cols="3" md="4" class="pr-3">
                  <img src="@/static/media/imagenes/home/siniestros.svg" alt="" class="w-100">
                </b-col>
                <b-col cols="9" md="8">
                  <h3 class="h3 omnes-medium mb-0 text-v-gray-dark">+3,000</h3>
                  <p>Siniestros atendidos</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="12" md="3" class="mb-2 mb-md-0">
            <div class="border border-v-radius pl-3 pr-2 py-3 py-md-4 border-hover-line">
              <b-row align-v="center" class="no-gutters">
                <b-col cols="3" md="4" class="pr-3">
                  <img src="@/static/media/imagenes/home/tiempo.svg" alt="" class="w-100">
                </b-col>
                <b-col cols="9" md="8">
                  <h3 class="h3 omnes-medium mb-0 text-v-gray-dark">25 min</h3>
                  <p>Tiempo de llegada</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

<!--    <section>-->
<!--      <div class="carousel-wrapper">-->
<!--        <client-only>-->
<!--          <carousel v-bind="options">-->
<!--            <slide>-->
<!--              hola-->
<!--            </slide>-->
<!--          </carousel>-->
<!--        </client-only>-->
<!--      </div>-->
<!--    </section>-->

    <section class="mb-5 mt-4">
      <b-container>
        <b-row align-h="center">
          <b-col cols="12" md="6">
            <client-only>
              <carousel v-bind="options">
                <slide v-for="item in listCategories">
                  <div class="bg-v-gray-light border-v-radius p-3">
                    <b-row align-h="center" align-v="center" class="no-gutters">
                      <b-col cols="3" md="2" class="mb-2 mb-md-0 pr-3">
                        <img :src="item.img" :alt="item.autor" class="w-100">
                      </b-col>
                      <b-col cols="9" md="10">
                        <p class="text-v-text">"{{item.testimonio}}</p>
                        <p class="omnes-medium">{{item.autor}}</p>
<!--                        <svg xmlns="http://www.w3.org/2000/svg" class="text-v-secondary" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-for="i in 5" :key="i" :class="{ 'text-v-gray-light': i > item.star}">-->
<!--                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />-->
<!--                        </svg>-->
                        <fa icon="star" class="text-v-secondary mb-0 mr-2 h6" v-for="i in 5" :key="i" :class="{ 'text-v-gray': i > item.star}"></fa>
                      </b-col>
                    </b-row>
                  </div>
<!--                  <b-row align-v="center" class="no-gutters border-v-radius bg-v-blue-light px-2 py-3">-->
<!--                    <b-col cols="12" md="2">-->
<!--                      <img :src="item.img" :alt="item.autor" class="w-100">-->
<!--                    </b-col>-->
<!--                    <b-col md="10" class="px-3">-->
<!--                      <p class="font-weight-normal text-v-text">"{{item.testimonio}}</p>-->
<!--                      <p class="font-weight-bold text-v-subtitle">{{item.autor}}</p>-->
<!--                    </b-col>-->
<!--                  </b-row>-->
                </slide>
              </carousel>
            </client-only>
          </b-col>
        </b-row>
      </b-container>
    </section>


    <b-container class="seccion-contenido d-none">
      <b-row class="content">
        <b-col cols="12" >
          <div class="section-title">
            <p class="d-none d-sm-block">Más de 550,000 clientes ya protegen <br> su auto con nosotros</p>
            <p class="d-block d-sm-none">Más de 550,000 clientes <br> ya protegen su auto <br> con nosotros</p>
          </div>
        </b-col>
      </b-row>
      <b-row class="content justify-content-center" cols="1" cols-sm="2" cols-md="2" cols-lg="4" align-v="stretch">
        <b-col cols="12">
          <div class="client-numbers">
            <div class="client-numbers__item">
              <img src="@/static/media/imagenes/home/cotizaciones.svg" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">+15,000</p>
                <p class="client-numbers__item--text">Cotizaciones diarias</p>
              </div>
            </div>
          </div>
        </b-col>

        <b-col cols="12">
          <div class="client-numbers">
            <div class="client-numbers__item">
              <img src="@/static/media/imagenes/home/asistencia.svg" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">+ 3,000</p>
                <p class="client-numbers__item--text">Asistencias brindadas</p>
              </div>
            </div>
          </div>
        </b-col>

        <b-col cols="12">
          <div class="client-numbers">
            <div class="client-numbers__item">
              <img src="@/static/media/imagenes/home/siniestros.svg" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">+3,000</p>
                <p class="client-numbers__item--text">Siniestros atendidos</p>
              </div>
            </div>
          </div>
        </b-col>

        <b-col cols="12">
          <div class="client-numbers">
            <div class="client-numbers__item">
              <img src="@/static/media/imagenes/home/tiempo.svg" alt="" class="client-numbers__item--icon">
              <div class="client-numbers--box">
                <p class="client-numbers__item--numbers">25 min</p>
                <p class="client-numbers__item--text">Tiempo de llegada</p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center content-medio">
        <b-col cols="12" sm="10" md="8" lg="6" xl="6">
          <div class="testimonios">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              img-width="492"
              img-height="112"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide img-blank v-for="(item, index) in listCategories" v-bind:key="index">
                <b-row align-v="center" style="height:100%">
                  <b-col cols="2" class="imagen-testimonio">
                    <img :src="item.img" alt="">
                  </b-col>
                  <b-col cols="10">
                    <p class="categoria text-testimonio pl-3" v-bind:class="'categoria-'+index" style="text-align:justify;">
                      {{item.testimonio}} <span>{{item.autor}}</span>
                    </p>
                  </b-col>
                  <!-- <b-col cols="12" v-if="item.star == 4" style="background-color: #FFFFFF">
                    <img class="img-start" src="./../static/media/imagenes/home/star-fucsia.svg"/>
                    <img class="img-start" src="./../static/media/imagenes/home/star-fucsia.svg"/>
                    <img class="img-start" src="./../static/media/imagenes/home/star-fucsia.svg"/>
                    <img class="img-start" src="./../static/media/imagenes/home/star-fucsia.svg"/>
                    <img class="img-start" src="./../static/media/imagenes/home/star-lead.svg"/>
                  </b-col>
                  <b-col cols="12" v-else-if="item.star == 5" style="background-color: #FFFFFF" class="col-start">
                    <img class="img-start" src="./../static/media/imagenes/home/star-fucsia.svg"/>
                    <img class="img-start" src="./../static/media/imagenes/home/star-fucsia.svg"/>
                    <img class="img-start" src="./../static/media/imagenes/home/star-fucsia.svg"/>
                    <img class="img-start" src="./../static/media/imagenes/home/star-fucsia.svg"/>
                    <img class="img-start" src="./../static/media/imagenes/home/star-fucsia.svg"/>
                  </b-col> -->
                </b-row>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
      </b-row>

      <b-row class="text-center row-start">
        <b-col class="stars">
          <img src="./../static/media/imagenes/home/star-fucsia.svg"/>
          <img src="./../static/media/imagenes/home/star-fucsia.svg"/>
          <img src="./../static/media/imagenes/home/star-fucsia.svg"/>
          <img src="./../static/media/imagenes/home/star-fucsia.svg"/>
          <img src="./../static/media/imagenes/home/star-lead.svg"/>
        </b-col>
      </b-row>
    </b-container>

    <section class="py-5 bg-light">
      <div class="container">
        <b-row>
          <b-col cols="12" class="text-center">
            <h2 class="text-v-primary text-h1 omnes-light h1 mb-4 mb-md-5">¡Tenemos estos planes para ti!</h2>
          </b-col>
        </b-row>
        <b-row class="mb-4 d-md-none no-gutters">
          <b-col>
            <button type="button" class="btn btn-v-primary btn-block position-relative" @click="plan(1)">
              Basico
              <span class="flecha-down position-absolute right-45 -bottom-45r" v-show="is_plan === 1"></span>
            </button>
          </b-col>
          <b-col class="mx-2">
            <button type="button" class="btn btn-v-primary btn-block" @click="plan(3)">
              Full
              <span class="flecha-down position-absolute right-45 -bottom-45r" v-show="is_plan === 3"></span>
            </button>
          </b-col>
          <b-col>
            <button type="button" class="btn btn-v-primary btn-block" @click="plan(2)">
              Intermedio
              <span class="flecha-down position-absolute right-45 -bottom-45r" v-show="is_plan === 2"></span>
            </button>
          </b-col>
        </b-row>
        <b-row class="pt-3">
          <b-col v-show="is_plan === 1 || is_plan === 4" cols="12" md="4" class="">
            <div class="card h-100 border-v-radius">
              <div class="card-body">
                <h6 class="card-title text-v-gray-dark text-center omnes-semibold">BÁSICO: <span class="omnes-light">Protección contra robo</span></h6>
                <hr>
                <div class="my-4 pt-2 text-center text-v-gray h5">
                  Desde <span class="h1 omnes-medium text-v-gray-dark">US$12</span> / mes
                </div>
                <p class="omnes-semibold mb-2 text-v-gray-dark">Este plan incluye:</p>
                <ul class="list-unstyled text-v-gray">
                  <li class="mb-1"><fa icon="check"></fa> Beneficios Interseguro</li>
                  <li class="mb-1"><fa icon="check"></fa> Central de emergencias</li>
                  <li class="mb-1"><fa icon="check"></fa> Responsabilidad Civil</li>
                  <li class="mb-1"><fa icon="check"></fa> Robo total</li>
                </ul>
              </div>
              <div class="card-footer text-center border-0 border-v-radius omnes-semibold text-v-primary">
                <!--                  <a href="/vehicular/coberturas/" class="btn-link omnes-semibold text-v-primary stretched-link">VER DATALLE <fa icon="arrow-right"></fa></a>-->
                <router-link to="/coberturas/" class="btn-link text-v-primary stretched-link omnes-semibold small">
                  VER DETALLE <fa icon="arrow-right"></fa>
                </router-link>
              </div>
            </div>
          </b-col>
          <b-col v-show="is_plan === 2 || is_plan === 4" cols="12" md="4" class="">
            <div class="card h-100 border-v-radius">
              <div class="card-body">
                <h6 class="card-title text-v-gray-dark text-center omnes-semibold">INTERMEDIO: <span class="omnes-light">Protección accidentes</span></h6>
                <hr>
                <div class="my-4 pt-2 text-center text-v-gray h5">
                  Desde <span class="h1 omnes-medium text-v-gray-dark">US$25</span> / mes
                </div>
                <p class="omnes-semibold mb-2 text-v-gray-dark">Este plan incluye:</p>
                <ul class="list-unstyled text-v-gray">
                  <li class="mb-1"><fa icon="check"></fa> Beneficios Interseguro</li>
                  <li class="mb-1"><fa icon="check"></fa> Central de emergencias</li>
                  <li class="mb-1"><fa icon="check"></fa> Responsabilidad Civil</li>
                  <li class="mb-1"><fa icon="check"></fa> Robo total</li>
                  <li class="mb-1"><fa icon="check"></fa> Pérdida parcial por accidente</li>
                  <li class="mb-1"><fa icon="check"></fa> Accidentes de ocupantes</li>
                </ul>
              </div>
              <div class="card-footer text-center border-0 border-v-radius">
                <!--                  <a href="/vehicular/coberturas/" class="btn-link omnes-semibold text-v-primary stretched-link">VER DATALLE <fa icon="arrow-right"></fa></a>-->
                <router-link to="/coberturas/" class="btn-link text-v-primary stretched-link omnes-semibold small">
                  VER DETALLE <fa icon="arrow-right"></fa>
                </router-link>
              </div>
            </div>
          </b-col>
          <b-col v-show="is_plan === 3 || is_plan === 4" cols="12" md="4" class="mt-4 mt-md-0">
            <div class="card h-100 border-v-radius border-2  border-v-primary position-relative shadow-sm">
              <div class="position-absolute w-100 px-4 -mt-40">
                <div class="bg-v-primary text-center text-white bottom-0 p-2 border-v-radius-top">
                  <fa icon="star" class="text-warning"></fa> ¡Plan recomendado!
                </div>
              </div>
              <div class="card-body">
                <h6 class="card-title text-v-gray-dark text-center omnes-semibold">FULL: <span class="omnes-light">Protección total</span></h6>
                <hr>
                <div class="my-4 pt-2 text-center text-v-gray h5">
                  Desde <span class="h1 omnes-medium text-v-gray-dark">US$33</span> / mes
                </div>
                <p class="omnes-semibold mb-2 text-v-gray-dark">Este plan incluye:</p>
                <ul class="list-unstyled text-v-gray">
                  <li class="mb-1"><fa icon="check"></fa> Beneficios Interseguro</li>
                  <li class="mb-1"><fa icon="check"></fa> Central de emergencias</li>
                  <li class="mb-1"><fa icon="check"></fa> Responsabilidad Civil</li>
                  <li class="mb-1"><fa icon="check"></fa> Robo total</li>
                  <li class="mb-1"><fa icon="check"></fa> Pérdida parcial por accidente</li>
                  <li class="mb-1"><fa icon="check"></fa> Accidentes de ocupantes</li>
                  <li class="mb-1"><fa icon="check"></fa> Accesorios musicales</li>
                  <li class="mb-1"><fa icon="check"></fa> Rotura de lunas</li>
                  <li class="mb-1"><fa icon="check"></fa> Desastres naturales, vandalismo, incendios.</li>
                  <li class="mb-1"><fa icon="check"></fa> Pérdida total por accidente</li>
                  <li class="mb-1"><fa icon="check"></fa> Ausencia de control*</li>
                </ul>
              </div>
              <div class="card-footer text-center border-0 border-v-radius omnes-semibold text-v-primary">
                <router-link to="/coberturas/" class="btn-link text-v-primary stretched-link omnes-semibold small">
                  VER DETALLE <fa icon="arrow-right"></fa>
                </router-link>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>

    <b-container fluid class="container-fluid d-none seccion-contenido">
      <b-container >
        <b-row class="content">
          <b-col cols="12">
            <div class="section-title">
              <p class="d-none d-lg-block">¡Elige el mejor plan para ti!</p>
              <!-- mobile -->
              <p class="d-block d-lg-none">¡Tenemos estos <br> planes para ti!</p>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="planes d-none">
        <!-- Inicio planes Desktop -->
        <b-row class="d-none  d-lg-flex" align-v="stretch">

          <b-col cols="4" class="pl-4 pr-4">
            <b-row style="height: 100%; ">
              <b-col cols="12">
                <div class="plan-not-head">
                </div>
              </b-col>
              <b-col class="box-plan-normal" cols="12">
                <b-row style="height: 100%; " class="detalle-plan">
                  <b-col align-self="start">
                    <b-row class="box-titulo">
                      <b-col>
                        <p class="titulo-principal">Básico: <span class="titulo-descripcion">Protección contra robo</span> </p>
                      </b-col>
                    </b-row>
                    <hr>
                    <b-row class="monto-frecuencia">
                      <b-col>
                        <p>Desde <span  class="monto">US$ 12</span>/mes</p>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col>
                        <div class="que-me-cubre">
                          <div class="titulo-box-planes">
                            Este plan incluye:
                          </div>

                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span>Beneficios Interseguro</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span>Central de emergencias</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span>Responsabilidad Civil</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span>Robo total</span>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="12" align-self="end">
                    <div class="detalle">
                      <router-link to="/coberturas/" class="ver-detalle"><span>Ver detalle </span> <img src="./../static/media/imagenes/home/row-rigth.svg" alt=""></router-link>
                    </div>
                  </b-col>

                </b-row>

              </b-col>

            </b-row>
          </b-col>

          <b-col cols="4" class="pl-4 pr-4">
            <b-row style="height: 100%; ">
              <b-col cols="12" >
                <div class="plan-not-head">
                </div>
              </b-col>
              <b-col class="box-plan-normal" cols="12">
                <b-row style="height: 100%; " class="detalle-plan">
                  <b-col align-self="start">
                    <b-row class="box-titulo">
                      <b-col>
                        <p class="titulo-principal">Intermedio: <span class="titulo-descripcion">Protección accidentes</span> </p>
                      </b-col>
                    </b-row>
                    <hr>
                    <b-row class="monto-frecuencia">
                      <b-col>
                        <p>Desde <span  class="monto">US$ 25</span>/mes</p>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col>
                        <div class="que-me-cubre">
                          <div class="titulo-box-planes">
                            Este plan incluye:
                          </div>

                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Beneficios Interseguro</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Central de emergencias</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Responsabilidad Civil</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Robo total</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Pérdida parcial por accidente</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Accidentes de ocupantes</span>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="12" align-self="end">
                    <div class="detalle">
                      <router-link to="/coberturas/" class="ver-detalle"><span>Ver detalle </span> <img src="./../static/media/imagenes/home/row-rigth.svg" alt=""></router-link>
                    </div>
                  </b-col>

                </b-row>

              </b-col>

            </b-row>
          </b-col>

          <b-col cols="4" class="pl-4 pr-4">
            <b-row style="height: 100%; ">
              <b-col cols="12" class="pl-4 pr-4">
                <div class="plan-recomendado d-flex justify-content-center">
                  <img src="@/static/media/imagenes/home/star-white.svg" alt="Start">
                  <span>¡Plan recomendado!</span>
                </div>
              </b-col>
              <b-col class="box-plan-recomendado" cols="12">
                <b-row style="height: 100%; " class="detalle-plan">
                  <b-col align-self="start">
                    <b-row class="box-titulo">
                      <b-col>
                        <p class="titulo-principal">Full: <span class="titulo-descripcion">Protección total</span> </p>
                      </b-col>
                    </b-row>
                    <hr>
                    <b-row class="monto-frecuencia">
                      <b-col>
                        <p>Desde <span  class="monto">US$ 33</span>/mes</p>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col>
                        <div class="que-me-cubre">
                          <div class="titulo-box-planes">
                            Este plan incluye:
                          </div>

                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Beneficios Interseguro</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Central de emergencias</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Responsabilidad Civil</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./..//static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Robo total</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Pérdida parcial por accidente</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Accidentes de ocupantes</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Accesorios musicales</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Rotura de lunas</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Desastres naturales, vandalismo, incendios.</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Pérdida total por accidente</span>
                          </div>
                          <div class="que-me-cubre__item">
                            <img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""><span >Ausencia de control*</span>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="12" align-self="end">
                    <div class="detalle">
                      <router-link to="/coberturas/" class="ver-detalle"><span>Ver detalle </span> <img src="./../static/media/imagenes/home/row-rigth.svg" alt=""></router-link>
                    </div>
                  </b-col>

                </b-row>

              </b-col>

            </b-row>
          </b-col>

        </b-row>


        <!-- Fin Desktop -->

        <!-- Inicio Planes Mobile -->
        <b-row class="d-block d-lg-none">
          <b-col cols="12">
            <b-row align-h="center">
              <b-col cols="4" class="pr-1 pl-1">
                <div class="v2-seleccion-planes" >
                  <div class="v2-seleccion-planes__item plan0 blue" @click="seleccionarPlan(0)" v-bind:class="{planInactivo: planInactivo}">
                    Básico
                  </div>
                </div>
              </b-col>
              <b-col cols="4" class="pr-1 pl-1">
                <div class="v2-seleccion-planes" v-if="planSeleccionado == 2">
                  <div class="v2-seleccion-planes__item plan2 blue planActivo planInacActivo" @click="seleccionarPlan(2)">
                    Full
                  </div>
                </div>
                <div class="v2-seleccion-planes" v-else>
                  <div class="v2-seleccion-planes__item plan2 blue" @click="seleccionarPlan(2)" v-bind:class="{planInactivo: planInactivo}">
                    Full
                  </div>
                </div>
              </b-col>
              <b-col cols="4" class="pr-1 pl-1">
                <div class="v2-seleccion-planes" >
                  <div class="v2-seleccion-planes__item plan1 blue" @click="seleccionarPlan(1)" v-bind:class="{planInactivo: planInactivo}">
                    Medio
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" v-if="planSeleccionado == 2">
            <b-row>
              <b-col cols="12" class="p-0">
                <div class="plan-recomendado d-flex justify-content-center">
                  <img src="@/static/media/imagenes/home/star-white.svg" alt="Start">
                  <span>¡Plan recomendado!</span>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="box-plan-recomendado" cols="12">
            <b-row style="height: 100%; " class="detalle-plan">
              <b-col align-self="start">
                <b-row class="box-titulo">
                  <b-col>
                    <p class="titulo-principal">{{planSeleccionado == 0 ? "Básico" : planSeleccionado == 1 ? "Medio" : "Full"}} :
                      <span class="titulo-descripcion">{{proteccion}}</span>
                    </p>
                  </b-col>
                </b-row>
                <hr>
                <b-row class="monto-frecuencia">
                  <b-col>
                    <p>Desde <span  class="monto">US$ {{precio}}</span>/mes</p>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col>
                    <div class="que-me-cubre">
                      <div class="titulo-box-planes">
                        Este plan incluye:
                      </div>

                      <div class="que-me-cubre__item" v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Beneficios Interseguro</b-col>
                        </b-row>
                      </div>
                      <div class="que-me-cubre__item" v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Central de emergencias</b-col>
                        </b-row>
                      </div>
                      <div class="que-me-cubre__item" v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Responsabilidad Civil</b-col>
                        </b-row>
                      </div>
                      <div class="que-me-cubre__item" v-if="planSeleccionado == 0 || planSeleccionado == 1 || planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Robo total</b-col>
                        </b-row>
                      </div>
                      <div class="que-me-cubre__item" v-if="planSeleccionado == 1 || planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Daños al vehículo por accidente</b-col>
                        </b-row>
                      </div>
                      <div class="que-me-cubre__item" v-if="planSeleccionado == 1 || planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Accidentes personales</b-col>
                        </b-row>
                      </div>
                      <div class="que-me-cubre__item" v-if="planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >ccesorios musicales</b-col>
                        </b-row>
                      </div>
                      <div class="que-me-cubre__item" v-if="planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Rotura de lunas</b-col>
                        </b-row>
                      </div>
                      <div class="que-me-cubre__item" v-if="planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Desastres naturales, vandalismo, incendios.</b-col>
                        </b-row>
                      </div>
                      <div class="que-me-cubre__item" v-if="planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >Pérdida total por accidente</b-col>
                        </b-row>
                      </div>
                      <div class="que-me-cubre__item" v-if="planSeleccionado == 2">
                        <b-row>
                          <b-col cols="1"><img src="./../static/media/imagenes/cotizacion/check-lg.svg" alt=""></b-col>
                          <b-col >usencia de control*</b-col>
                        </b-row>
                      </div>

                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="12" align-self="end">
                <div class="detalle">
                  <router-link to="/coberturas/" class="ver-detalle"><span>Ver detalle </span> <img src="./../static/media/imagenes/home/row-rigth.svg" alt=""></router-link>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <!-- Fin Mobile -->
      </b-container>
    </b-container>

    <section class="my-5">
      <b-container>
        <b-row>
          <b-col cols="12" class="text-center">
            <h2 class="omnes-light text-h1 text-v-primary h1 mb-5">Disfruta de los mejores beneficios por ser cliente</h2>
          </b-col>
        </b-row>

        <b-row class="row-cols-1">
          <b-col cols="12" md="6" class="mb-2 mb-md-4">
            <div class="card bg-hover-primary h-100 align-items-center">
              <div class="card-body align-items-center">
                <b-row align-h="center" class="my-0 my-md-3">
                  <b-col cols="3" md="4">
                    <img src="@/static/media/imagenes/home/beneficio-atencion.svg" alt="" class="w-100">
                  </b-col>
                  <b-col cols="9" md="8">
                    <p class="mb-2 d-none d-md-block"><b class="omnes-regular text-v-gray-dark">Atenciónes médica</b>, Descuentos y beneficios en Atención médica:</p>
                    <ul class="p-0 m-0 d-none d-md-block list-unstyled">
                      <li>Descuento de S/50 en atención médica covid-19 a domicilio</li>
                      <li>Descuento de S/40 en teleconsulta médica con especialista</li>
                    </ul>

                    <p class="d-block d-md-none">Chofer de reemplazo
                      <b class="omnes-regular d-block">Hasta 5 veces al año</b>
                    </p>

                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
          <b-col class="mb-2 mb-md-4" cols="12" md="3">
            <div class="card h-100 bg-hover-primary">
              <div class="card-body">
                <b-row align-h="center" align-v="center" class="">
                  <b-col cols="3" md="7" class="mb-md-4 pt-md-1">
                    <img src="@/static/media/imagenes/home/beneficio-chofer.svg" alt="" class="w-100">
                  </b-col>
                  <b-col cols="9" md="12" class="text-md-center">
                    <p class="d-block">Chofer de reemplazo
                      <b class="omnes-regular text-v-gray-dark d-block">Hasta 5 veces al año</b>
                    </p>
                  </b-col>
                </b-row>

              </div>
            </div>
          </b-col>
          <b-col class="mb-2 mb-md-4" cols="12" md="3">
            <div class="card h-100 bg-hover-primary">
              <div class="card-body">
                <b-row align-h="center" align-v="center" class="">
                  <b-col cols="3" md="7" class="mb-md-4 pt-md-1">
                    <img src="@/static/images/icons/llave-desarmador.png" alt="" class="w-100">
                  </b-col>
                  <b-col cols="9" md="12" class="text-md-center">
                    <p class="card-text d-block">Auxilio mecánico
                      <b class="omnes-regular text-v-gray-dark d-block">Carga de batería, grúas y más</b></p>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="row-cols-1 row-cols-md-4">
          <b-col class="mb-2 mb-md-0" cols="12" md="3">
            <div class="card h-100 bg-hover-primary">
              <div class="card-body">
                <b-row align-h="center" align-v="center" class="">
                  <b-col cols="3" md="7" class="mb-md-4 pt-md-1">
                    <img src="@/static/media/imagenes/home/beneficio-inspeccion.svg" alt="" class="w-100">
                  </b-col>
                  <b-col cols="9" md="12" class="text-md-center">
                    <p class="d-block">Inspección digital en menos <b class="omnes-regular text-v-gray-dark d-block">de 5 minutos y sin salir de casa</b></p>
                  </b-col>
                </b-row>

              </div>
            </div>
          </b-col>
          <b-col class="mb-2 mb-md-0" cols="12" md="3">
            <div class="card h-100 bg-hover-primary">
              <div class="card-body">
                <b-row align-h="center" align-v="center" class="">
                  <b-col cols="3" md="7" class="mb-md-4 pt-md-1">
                    <img src="@/static/media/imagenes/home/beneficio-diagnostico.svg" alt="" class="w-100">
                  </b-col>
                  <b-col cols="9" md="12" class="text-md-center">
                    <p class="d-block"><b class="omnes-regular text-v-gray-dark d-block">50% de dscto. en diagnóstico</b> previo a Revisión técnica</p>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
          <b-col class="mb-2 mb-md-0" cols="12" md="3">
            <div class="card h-100 bg-hover-primary">
              <div class="card-body">
                <b-row align-h="center" align-v="center" class="">
                  <b-col cols="3" md="7" class="mb-md-4 pt-md-1">
                    <img src="@/static/media/imagenes/home/beneficio-asistencia.svg" alt="" class="w-100">
                  </b-col>
                  <b-col cols="9" md="12" class="text-md-center">
                    <p class="d-block">Asistencias para <b class="omnes-regular text-v-gray-dark d-block">el hogar hasta por S/ 150</b></p>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="3">
            <div class="card h-100 bg-hover-primary">
              <div class="card-body">
                <b-row align-h="center" align-v="center" class="">
                  <b-col cols="3" md="7" class="mb-md-4 pt-md-1">
                    <img src="@/static/media/imagenes/home/beneficio-delivery.svg" alt="" class="w-100">
                  </b-col>
                  <b-col cols="9" md="12" class="text-md-center">
                    <p class="d-block"><b class="omnes-regular text-v-gray-dark d-block">Hasta 25% dscto. en</b> comida por delivery</p>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="my-5">
          <b-col class="text-center">
            <router-link to="/coberturas/" class="btn-link text-v-primary stretched-link omnes-medium">
              VER MÁS BENEFICIOS <fa icon="arrow-right"></fa>
            </router-link>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="my-5 bg-light py-5">
      <b-container>
        <b-row>
          <b-col cols="12" class="text-center">
            <h2 class="omnes-light text-v-primary h1 mb-4">¿Por qué deberían elegirnos?</h2>
          </b-col>
        </b-row>
        <b-row align-v="end" align-h="center">
          <b-col cols="10" md="3" class="mb-4 mb-md-4">
            <b-row align-h="center">
              <b-col cols="3" md="6" class="mb-0 mb-md-4">
                <img src="@/static/media/seguroVehicular/home/elegirnos_mejor_precio.svg" alt="" class="w-100">
              </b-col>
              <b-col cols="9" md="12" class="text-left text-md-center">
                <h5 class="omnes-medium text-v-gray-dark">Mejor precio</h5>
                <p>Eliminamos a los <br>brókers e intermediarios</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="10" md="3" class="mb-4 mb-md-4">
            <b-row align-h="center">
              <b-col cols="3" md="6" class="mb-0 mb-md-4">
                <img src="@/static/media/seguroVehicular/home/elegirnos_somos_intercorp.svg" alt="" class="w-100">
              </b-col>
              <b-col cols="9" md="12" class="text-left text-md-center">
                <h5 class="omnes-medium text-v-gray-dark">Somos Intercorp</h5>
                <p>El grupo económico <br> más importante del país</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="10" md="3" class="mb-4 mb-md-4">
            <b-row align-h="center">
              <b-col cols="3" md="6" class="mb-0 mb-md-4">
                <img src="@/static/media/seguroVehicular/home/elegirnos_100_online.svg" alt="" class="w-100">
              </b-col>
              <b-col cols="9" md="12" class="text-left text-md-center">
                <h5 class="omnes-medium text-v-gray-dark">100% online</h5>
                <p>Protege tu auto en solo 3 <br> clics desde donde estés</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="10" md="3" class="mb-4 mb-md-4">
            <b-row align-h="center">
              <b-col cols="3" md="6" class="mb-0 mb-md-4">
                <img src="@/static/media/seguroVehicular/home/elegirnos_siempre_contigo.svg" alt="" class="w-100">
              </b-col>
              <b-col cols="9" md="12" class="text-left text-md-center">
                <h5 class="omnes-medium text-v-gray-dark">Siempre contigo</h5>
                <p>Te brindamos <br> atención 24/7</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="my-5">
      <b-container>
        <b-row align-h="between">
          <b-col cols="12" lg="4">
            <div class="section-title">
              <h2 class="omnes-light text-v-primary h1 mb-4">¿Necesitas ayuda o
                tienes preguntas
                sobre nuestro
                seguro vehicular?</h2>
            </div>
          </b-col>
          <b-col class="" order="2" order-md="1" cols="12" lg="7">
            <div class="accordion" role="tablist">
              <hr>
              <div no-body class="px-2 border-bottom" v-for="(faq, index) in faqs" :key="faq.id" @click="active_collapse(index)" :class="[active_color === index ? 'bg-light' : 'bg-white']">
                <div header-tag="header" role="tab">
                  <div v-b-toggle="'accordion-'+index" class="position-relative m-0 py-4 h5" :class="[active_color === index ? 'text-v-primary omnes-medium' : 'text-v-gray']">
                    <span>{{ faq.title }}</span>
                    <span class="omnes-semibold position-absolute h2 right-0 bottom-11">
                      {{ active_color === index ? '+' : '-' }}
                    </span>
                  </div>
                </div>
                <b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel" :visible="index === 0">
                  <div class="pb-4">
                    {{ faq.description }}
                  </div>
                </b-collapse>
              </div>
            </div>

            <b-row class="mt-5 my-md-5">
              <b-col>
                <router-link to="/coberturas/" class="btn-link text-v-primary stretched-link omnes-medium">
                  VER MÁS PREGUNTAS <fa icon="arrow-right"></fa>
                </router-link>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="mb-5" order="1" order-md="2">
            <client-only>
              <carousel v-bind="options_help" :perPageCustom="[[768, 3], [1024, 3]]">
                <slide cols="12">
                    <b-card class="h-100 m-0 mr-md-3">
                      <b-row align-v="center" align-h="center" class="no-gutters">
                        <b-col cols="4" md="3" class="mb-3 mb-md-0">
                          <img src="@/static/media/imagenes/home/tiempo-emergencia.svg" class="w-100"/>
                        </b-col>
                        <b-col cols="12" md="9" class="p-0 pl-md-4 text-center text-md-left">
                          <h6 class="omnes-medium text-v-gray-dark d-block">¡Tengo una emergencia!</h6>
                          <p class="my-2 text-v-gray">¿tu carro acaba de sufrir un incidente? ¿te robaron?</p>
                          <p class="m-0 omnes-medium text-v-primary small">LLAMANOS: (01) 500 0000</p>
                        </b-col>
                      </b-row>
                    </b-card>
                </slide>
                <slide>

                    <b-card class="h-100 m-0 mx-md-3">
                      <b-row align-v="center" align-h="center" class="no-gutters">
                        <b-col cols="4" md="3" class="mb-3 mb-md-0">
                          <img src="@/static/media/imagenes/home/donde-llevo-carro.svg" class="w-100"/>
                        </b-col>
                        <b-col cols="12" md="9" class="p-0 pl-md-4 text-center text-md-left">
                          <h6 class="omnes-medium text-v-gray-dark d-block">¿Dónde llevo mi carro?</h6>
                          <p class="my-2 text-v-gray">Visita nuestra red de talleres afiliados</p>
                          <a href="https://www.interseguro.pe/vehicular/resources/Talleres_afiliados.pdf" target="_blank" class="m-0 small btn-link omnes-medium text-v-primary">
                            VER TALLERES AFILIADOS <fa icon="arrow-right"></fa>
                          </a>
                        </b-col>
                      </b-row>
                    </b-card>

                </slide>
                <slide>

                    <b-card class="h-100 m-0 ml-md-3">
                      <b-row align-v="center" align-h="center" class="no-gutters">
                        <b-col cols="4" md="3" class="mb-3 mb-md-0">
                          <img src="@/static/media/imagenes/home/necesito-asesor.svg" class="w-100"/>
                        </b-col>
                        <b-col cols="12" md="9" class="p-0 pl-md-4 text-center text-md-left">
                          <h6 class="omnes-medium text-v-gray-dark d-block">Necesito un asesor</h6>
                          <p class="my-2 text-v-gray">¿Necesitas ayuda o consulta de un asesor?</p>
                          <p class="m-0 omnes-medium text-v-primary small">LLAMANOS: (01) 500 0000</p>
                        </b-col>
                      </b-row>
                    </b-card>

                </slide>
              </carousel>
            </client-only>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <footer-page></footer-page>
  </div>
</template>
<script>
import BannerBlueCart from "../components/banners/banner-blue-cart";
import FooterPage from "../components/footers/FooterPage";
import NavSticky from "../components/nav/NavSticky";
// import { Carousel } from 'vue-carousel/src/Carousel.vue';
// import { Slide } from 'vue-carousel/src/Slide.vue';
// import "../assets/js/universal-parallax.js";
export default {
  components: {NavSticky, FooterPage, BannerBlueCart},
  layout: "InterseguroHomeNew",
  data() {
    return {
      options: {
        loop: true,
        perPage: 1,
        paginationEnabled: false,
        autoplayTimeout: 10000,
        autoplay: true,
        speed: 1000
      },
      options_help: {
        loop: true,
        perPage: 1,
        paginationEnabled: true,
        autoplayTimeout: 10000,
        autoplay: true,
        speed: 1000,
        paginationPadding: 5,
        minSwipeDistance: 12
      },
      is_plan: null,
      // slide: 0,
      active_color: 0,
      sliding: null,
      isOculto: true,
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      isVisible5: false,
      planInactivo: false,
      showLoader: true,


      // sizePulse: "45px",

      // slideBeneficios:0,
      slide:0,
      // flagCloseListon: 0,
      item:{
        email:''
      },
      // saveVehicle:{},
      // saveCliente:{},
      /************************************* */
      planSeleccionado: 2,
      proteccion: "Protección total",
      precio: 33,
      // listTest: [
      //   {
      //     precio : 12,
      //     proteccion : "Protección contra robo",
      //     plan: "Básico"
      //   },
      //   {
      //     precio : 25,
      //     proteccion : "Protección contra accidentes",
      //     plan: "Intermedio"
      //   },
      //   {
      //     precio : 33,
      //     proteccion : "Protección total",
      //     plan: "Full"
      //   }
      // ],
      listCategories:[
        {
          testimonio : "‘’Fue súper fácil contratar el seguro! Lo hice en minutos, sin ayuda de nadie y por un precio justo!‘’",
          autor : "Manuel Augusto",
          star : 5,
          img : require("./../static/media/imagenes/home/manuel_augusto.png")
        },
        {
          testimonio : "‘’Aún no he he tenido problemas con mi carro pero el nivel de respuesta hasta el momento ha sido rápido.‘’",
          autor : "Carolina Chavez",
          star : 5,
          img : require("./../static/media/imagenes/home/testimonio.png")
        },
        {
          testimonio : "‘’Aseguré mi carro en menos de 5 minutos! La información sobre la cobertura es concisa y simple de entender!‘’",
          autor : "Enrique Quispe",
          star : 4,
          img : require("./../static/media/imagenes/home/enrique_quispe.png")
        },
        {
          testimonio : "‘’Aseguré mi carro en menos de 5 minutos! La información sobre la cobertura es concisa y simple de entender!‘’",
          autor : "Enrique Quispe",
          star : 3,
          img : require("./../static/media/imagenes/home/enrique_quispe.png")
        },
      ],

      faqs:[
        {
          id: 0,
          title : "¿Cuándo inicia mi cobertura?",
          description : "Desde la confirmación de pago."
        },
        {
          id: 1,
          title : "¿Cómo hago mi inspección?",
          description : "Toda la inspección será digital (por Whatsapp), sin necesidad que alguien tenga que ir a tu casa. Enviando fotos y respondiendo dos preguntas sobre tu carro podrás acabar tu inspección en menos de 10 minutos"
        },
        {
          id: 2,
          title : "¿Qué pasa si ocurre un accidente y yo no soy el que maneja?",
          description : "Igual lo cubrimos, siempre y cuando el que maneja cuente con un brevete vigente y no haya tomado alcohol."
        },
        {
          id: 3,
          title : "¿Qué pasa si choco contra un carro que no tiene seguro vehicular?",
          description : "Si es que tú eres responsable del incidente, cubrimos tu carro y el de la otra persona."
        },
        {
          id: 4,
          title : "¿Qué pasa si ocurre un incidente y yo no soy el que maneja?",
          description : "Igual lo cubrimos, siempre y cuando el que maneja cuente con un brevete vigente y no haya tomado alcohol."
        },
      ],

    }
  },
  head: {
    title: 'Cotizar seguro vehicular en 2 pasos',
    meta: [
      { hid: 'description', name: 'description', content: "Cotizar seguro vehicular es muy fácil. Protege desde robo de piezas, choques hasta pérdida total.  Obtén auxilio mecánico a todo Perú desde $12 mensuales" },
    ],
    link: [{ rel: 'canonical', href: 'https://www.interseguro.pe/vehicular/' }],
    script:[
      { src: 'js/universal-parallax.js', body: true, type: 'text/javascript'},
      { innerHTML: 'new universalParallax().init({speed: 1.3});', body: true, type: 'text/javascript'}
    ]
  },

  methods: {
    isMobileDevice() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    },
    plan(id){
      this.is_plan = id;
    },
    active_collapse(id){
      this.active_color = id
      // console.log('hola peru'+id)
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    cotizar(){
      this.$nuxt.$router.push({
        path: "/cotizacion/placa"
      });
    },
    // handleScroll(eve) {
    //   const bannerHeight = 77;
    //   const newOffset = window.scrollY || window.pageYOffset;
    //   if (newOffset > bannerHeight) {
    //     if (newOffset > this.refOffset) {
    //       this.navbar = true;
    //     }else {
    //       this.navbar = false;
    //     }
    //     this.refOffset = newOffset;
    //   }
    //   if (window.scrollY >= 0) {
    //     // if(true){
    //     //   this.isOculto = false;
    //
    //     // }
    //     // console.log(eve)
    //   }
    //   if (window.scrollY >= 480) {
    //       this.btncotizar = true;
    //   } else {
    //     this.btncotizar = false;
    //   }
    // },
    PaginaVista() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pagina_vista",
        "page-url": "/vehicular/",
        "page-title": "Home",
        ecommerce: {
          checkout: {
            actionField: { step: 1 } // esto marca el primer paso en el embudo
          }
        }
      });
    },
    seleccionarPlan(id){
      this.planInactivo = true;
      let elemento1 = document.querySelectorAll(".v2-seleccion-planes__item")
      for (let index = 0; index < elemento1.length; index++) {
        elemento1[index].classList.remove("planActivo")
      }
      setTimeout(() => {
        let arreglo = document.querySelectorAll(".plan"+id)
        for (let i = 0; i < arreglo.length; i++) {
          arreglo[i].classList.add("planActivo")
        }
        this.seleccionarFrecuencia()
      }, 250);
      switch (id) {
        case 0:
          this.planSeleccionado = 0
          this.proteccion = "Protección contra robo"
          this.precio = 12
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
    },

    //
    // createMail () {
    //   const fecha = new Date()
    //   const fechaEnNumeros = fecha.getTime()
    //   const aleatorio = Math.random() * (10000 - 0) + 0
    //   const aleatorioFinal = fechaEnNumeros + parseInt(aleatorio)
    //   const mailGenerado = 'test_' + aleatorioFinal.toString() + '@test.com'
    //   this.item.email = mailGenerado
    //   this.$store.commit('common/setEmail', mailGenerado)
    // },

  },
  // created() {
  //   // this.createMail()
  //   if (process.browser) {
  //     window.addEventListener("scroll", this.handleScroll);
  //     document.addEventListener('touchstart', this.handleScroll, {passive: true});
  //   }
  // },
  // destroyed(){
  //   if (process.browser) {
  //     window.removeEventListener("scroll", this.handleScroll);
  //     document.addEventListener('touchstart', this.handleScroll, {passive: true});
  //   }
  // },
  mounted() {
    // if(this.isCampania){
    //   this.contador();
    // }
    this.$store.commit('common/resetState')
    // this.handleScroll()
    this.PaginaVista()

    if (this.isMobileDevice()){
      this.is_plan = 3
    }else{
      this.is_plan = 4
    }
  }
}
</script>
