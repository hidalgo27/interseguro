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
    <div class="sticky-top bg-white">
      <div class="container">
      <b-navbar toggleable="lg" type="light" class="px-0">
        <b-navbar-brand href="#">
          <img src="@/static/images/logos/logo.svg" alt="">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>


          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
<!--            <b-nav-form>-->
<!--              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--            </b-nav-form>-->

            <b-navbar-nav right class="font-size-15">
<!--              <b-nav-item href="#">Link</b-nav-item>-->
              <nuxt-link class="mt-2 nav-link text-v-gray-dark omnes-medium"  to="/coberturas/">¿QUÉ ME CUBRE?</nuxt-link>
              <nuxt-link class="mt-2 nav-link text-v-gray-dark omnes-medium"  to="/como-lo-uso/">¿CÓMO LO USO?</nuxt-link>
<!--              <b-nav-item class="mt-2 omnes-medium text-v-gray-dark" href="https://www.interseguro.pe/vivemas">BENEFICIOS</b-nav-item>-->
              <a href="https://www.interseguro.pe/vivemas" class="nav-link mt-2 omnes-medium text-v-gray-dark">BENEFICIOS</a>
              <nuxt-link class="mt-2 nav-link text-v-gray-dark omnes-medium"  to="/oficial/preguntas-frecuentes">AYUDA Y PREGUNTAS</nuxt-link>
              <button type="button" @click="cotizar()" class="btn btn-sm rounded-lg ml-3 btn-v-secondary px-4 py-1 omnes-medium m-0">COTIZAR</button>
            </b-navbar-nav>

<!--            <b-nav-item-dropdown right>-->
<!--              &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
<!--              <template #button-content>-->
<!--                <em>User</em>-->
<!--              </template>-->
<!--              <b-dropdown-item href="#">Profile</b-dropdown-item>-->
<!--              <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
<!--            </b-nav-item-dropdown>-->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      </div>
    </div>
    <banner-blue-cart></banner-blue-cart>
    <section>
      <b-container>
        <b-row>
          <b-col cols="12" class="text-center">
            <h2 class="text-v-primary h1 my-5">Más de 550,000 clientes ya protegen <br> su auto con nosotros</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6" md="3" class="mb-4">
            <div class="border border-v-radius px-3 py-4 border-hover-line">
              <b-row align-h="center" align-v="center" class="no-gutters text-center">
                <b-col cols="4" md="4" class="mb-2 mb-md-0 pr-md-3">
                  <img src="@/static/media/imagenes/home/cotizaciones.svg" alt="" class="w-100">
                </b-col>
                <b-col cols="12" md="8">
                  <h3 class="h3 omnes-medium mb-0">+15,000</h3>
                  <p>Cotizaciones diarias</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="6" md="3" class="mb-4">
            <div class="border border-v-radius px-3 py-4 border-hover-line">
              <b-row align-h="center" align-v="center" class="no-gutters text-center">
                <b-col cols="4" md="4" class="mb-2 mb-md-0 pr-md-3">
                  <img src="@/static/media/imagenes/home/asistencia.svg" alt="" class="w-100">
                </b-col>
                <b-col cols="12" md="8">
                  <h3 class="h3 omnes-medium mb-0">+3,000</h3>
                  <p>Asistencias brindadas</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <div class="border border-v-radius px-3 py-4 border-hover-line">
              <b-row align-h="center" align-v="center" class="no-gutters text-center">
                <b-col cols="4" md="4" class="mb-2 mb-md-0 pr-md-3">
                  <img src="@/static/media/imagenes/home/siniestros.svg" alt="" class="w-100">
                </b-col>
                <b-col cols="12" md="8">
                  <h3 class="h3 omnes-medium mb-0">+3,000</h3>
                  <p>Siniestros atendidos</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <div class="border border-v-radius px-3 py-4 border-hover-line">
              <b-row align-h="center" align-v="center" class="no-gutters text-center">
                <b-col cols="4" md="4" class="mb-2 mb-md-0 pr-md-3">
                  <img src="@/static/media/imagenes/home/tiempo.svg" alt="" class="w-100">
                </b-col>
                <b-col cols="12" md="8">
                  <h3 class="h3 omnes-medium mb-0">25 min</h3>
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

    <section class="my-5">
      <b-container>
        <b-row align-h="center">
          <b-col cols="12" md="6">
            <client-only>
              <carousel v-bind="options">
                <slide v-for="item in listCategories">
                  <div class="bg-v-gray-light border-v-radius p-3">
                    <b-row align-h="center" align-v="center" class="no-gutters text-center">
                      <b-col cols="2" md="2" class="mb-2 mb-md-0 pr-md-3">
                        <img :src="item.img" :alt="item.autor" class="w-100">
                      </b-col>
                      <b-col cols="12" md="10">
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
            <h2 class="text-v-primary h1 mb-5">¡Elige el mejor plan para ti!</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="4" class="mb-4 mb-md-0">
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
          <b-col cols="12" md="4" class="mb-5 mb-md-0">
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
          <b-col cols="12" md="4" class="mt-3 mt-md-0">
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
            <h2 class="font-weight-normal text-v-primary h1 mb-5">Disfruta de los mejores beneficios por ser cliente</h2>
          </b-col>
        </b-row>

        <b-row class="mb-30 row-cols-1">
          <b-col cols="12" md="6" class="mb-30 mb-md-0">
            <div class="card bg-hover-primary h-100 align-items-center">
              <div class="card-body align-items-center">
                <b-row align-v="center" align-h="center" class="my-3">
                  <b-col cols="4" md="4">
                    <img src="@/static/media/imagenes/home/beneficio-atencion.svg" alt="" class="w-100">
                  </b-col>
                  <b-col cols="8" md="8">
                    <p class="mb-2"><b class="omnes-regular">Atenciónes médica</b>, Descuentos y beneficios en Atención médica:</p>
                    <ul class="p-0 pl-3 m-0">
                      <li>Descuento de S/50 en atención médica covid-19 a domicilio</li>
                      <li>Descuento de S/40 en teleconsulta médica con especialista</li>
                    </ul>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <div class="card h-100 bg-hover-primary">
              <div class="card-body text-center">
                <b-row align-h="center" class="mb-4 pt-1">
                  <b-col cols="9" md="7">
                    <img src="@/static/media/imagenes/home/beneficio-chofer.svg" alt="" class="w-100">
                  </b-col>
                </b-row>
                <p class="d-block">Chofer de reemplazo
                  <b class="omnes-regular d-block">Hasta 5 veces al año</b>
                </p>
              </div>
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <div class="card h-100 bg-hover-primary">
              <div class="card-body text-center">
                <b-row align-h="center" class="mb-4 pt-1">
                  <b-col cols="9" md="7">
                    <img src="@/static/images/icons/llave-desarmador.png" alt="" class="w-100">
                  </b-col>
                </b-row>
                <p class="card-text d-block">Auxilio mecánico
                  <b class="omnes-regular d-block">Carga de batería, grúas y más</b></p>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="row-cols-1 row-cols-md-4">
          <b-col class="mb-30 mb-md-0" cols="6" md="3">
            <div class="card h-100 bg-hover-primary">
              <div class="card-body text-center">
                <b-row align-h="center" class="mb-4 pt-1">
                  <b-col cols="9" md="7">
                    <img src="@/static/media/imagenes/home/beneficio-inspeccion.svg" alt="" class="w-100">
                  </b-col>
                </b-row>
                <p class="d-block">Inspección digital en menos <b class="omnes-regular d-block">de 5 minutos y sin salir de casa</b></p>
              </div>
            </div>
          </b-col>
          <b-col class="mb-30 mb-md-0" cols="6" md="3">
            <div class="card h-100 bg-hover-primary">
              <div class="card-body text-center">
                <b-row align-h="center" class="mb-4 pt-1">
                  <b-col cols="9" md="7">
                    <img src="@/static/media/imagenes/home/beneficio-diagnostico.svg" alt="" class="w-100">
                  </b-col>
                </b-row>
                <p class="d-block"><b class="omnes-regular d-block">50% de dscto. en diagnóstico</b> previo a Revisión técnica</p>
              </div>
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <div class="card h-100 bg-hover-primary">
              <div class="card-body text-center">
                <b-row align-h="center" class="mb-4 pt-1">
                  <b-col cols="9" md="7">
                    <img src="@/static/media/imagenes/home/beneficio-asistencia.svg" alt="" class="w-100">
                  </b-col>
                </b-row>
                <p class="d-block">Asistencias para <b class="omnes-regular d-block">el hogar hasta por S/ 150</b></p>
              </div>
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <div class="card h-100 bg-hover-primary">
              <div class="card-body text-center">
                <b-row align-h="center" class="mb-4 pt-1">
                  <b-col cols="9" md="7">
                    <img src="@/static/media/imagenes/home/beneficio-delivery.svg" alt="" class="w-100">
                  </b-col>
                </b-row>
                <p class="d-block"><b class="omnes-regular d-block">Hasta 25% dscto. en</b> comida por delivery</p>
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
            <h2 class="font-weight-normal text-v-primary h1 mb-4">¿Por qué deberían elegirnos?</h2>
          </b-col>
        </b-row>
        <b-row align-v="end">
          <b-col cols="6" md="3" class="mb-30 mb-md-0">
            <b-row align-h="center" class="mb-4">
              <b-col cols="7" md="6">
                <img src="@/static/media/seguroVehicular/home/elegirnos_mejor_precio.svg" alt="" class="w-100">
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                <h5 class="omnes-medium">Mejor precio</h5>
                <p>Eliminamos a los <br>brókers e intermediarios</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6" md="3" class="mb-30 mb-md-0">
            <b-row align-h="center" class="mb-4">
              <b-col cols="7" md="6">
                <img src="@/static/media/seguroVehicular/home/elegirnos_somos_intercorp.svg" alt="" class="w-100">
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                <h5 class="omnes-medium">Somos Intercorp</h5>
                <p>El grupo económico <br> más importante del país</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6" md="3">
            <b-row align-h="center" class="mb-4">
              <b-col cols="7" md="6">
                <img src="@/static/media/seguroVehicular/home/elegirnos_100_online.svg" alt="" class="w-100">
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                <h5 class="omnes-medium">100% online</h5>
                <p>Protege tu auto en solo 3 <br> clics desde donde estés</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6" md="3">
            <b-row align-h="center" class="mb-4">
              <b-col cols="7" md="6">
                <img src="@/static/media/seguroVehicular/home/elegirnos_siempre_contigo.svg" alt="" class="w-100">
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                <h5 class="omnes-medium">Siempre contigo</h5>
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
              <h2 class="font-weight-normal text-v-primary h1 mb-4">¿Necesitas ayuda o
                tienes preguntas
                sobre nuestro
                seguro vehicular?</h2>
            </div>
          </b-col>
          <b-col cols="12" lg="7">
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

            <b-row class="mt-5">
              <b-col>
                <router-link to="/coberturas/" class="btn-link text-v-primary stretched-link omnes-medium">
                  VER MÁS PREGUNTAS <fa icon="arrow-right"></fa>
                </router-link>
              </b-col>
            </b-row>

          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="my-5">
      <b-container>
        <b-row class="d-flex">
          <b-col cols="12" md="4" class="mb-30 mb-md-0">
            <b-card class="h-100">
              <b-row align-v="center" class="no-gutters">
                <b-col cols="3" md="3">
                  <img src="@/static/media/imagenes/home/tiempo-emergencia.svg" class="w-100"/>
                </b-col>
                <b-col cols="9" md="9" class="pl-4">
                  <h3 class="omnes-regular h5 d-block">¡Tengo una emergencia!</h3>
                  <p class="my-2 text-v-gray">¿tu carro acaba de sufrir un incidente? ¿te robaron?</p>
                  <p class="m-0 omnes-medium text-v-primary small">LLAMANOS: (01) 500 0000</p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col cols="6" md="4">
            <b-card class="h-100">
              <b-row align-v="center" align-h="center" class="no-gutters">
                <b-col cols="7" md="3" class="mb-3 mb-md-0">
                  <img src="@/static/media/imagenes/home/donde-llevo-carro.svg" class="w-100"/>
                </b-col>
                <b-col cols="12" md="9" class="p-0 pl-md-4 text-center text-md-left">
                  <h3 class="omnes-regular h5 d-block">¿Dónde llevo mi carro?</h3>
                  <p class="my-2 text-v-gray">Visita nuestra red de talleres afiliados</p>
                  <a href="https://www.interseguro.pe/vehicular/resources/Talleres_afiliados.pdf" target="_blank" class="m-0 small btn-link omnes-medium text-v-primary">
                    VER TALLERES AFILIADOS <fa icon="arrow-right"></fa>
                  </a>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col cols="6" md="4">
            <b-card class="h-100">
              <b-row align-v="center" align-h="center" class="no-gutters">
                <b-col cols="7" md="3" class="mb-3 mb-md-0">
                  <img src="@/static/media/imagenes/home/necesito-asesor.svg" class="w-100"/>
                </b-col>
                <b-col cols="12" md="9" class="p-0 pl-md-4 text-center text-md-left">
                  <h3 class="omnes-regular h5 d-block">Necesito un asesor</h3>
                  <p class="my-2 text-v-gray">¿Necesitas ayuda o consulta de un asesor?</p>
                  <p class="m-0 omnes-medium text-v-primary small">LLAMANOS: (01) 500 0000</p>
                </b-col>
              </b-row>
            </b-card>
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
// import { Carousel } from 'vue-carousel/src/Carousel.vue';
// import { Slide } from 'vue-carousel/src/Slide.vue';
// import "../assets/js/universal-parallax.js";
export default {
  components: {FooterPage, BannerBlueCart},
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
    //   if (window.scrollY >= 480) {
    //     if(true){
    //       this.isOculto = false;
    //       this.contactanos = false;
    //     }
    //   } else {
    //     this.isOculto = true
    //     this.contactanos = true;
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
  }
}
</script>
