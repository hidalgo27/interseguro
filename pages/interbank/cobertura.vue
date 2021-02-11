<template>
    <div class="v2-cobertura-ibk">
        <!-- Mobile Version -->
        <section  class="cobertura-mobile d-block d-md-none">
            <!-- <b-container> -->
                <div class="section-header">
                    <br><br><br>
                    <h1 class="section-header__title">Revisa nuestras coberturas y elige tu plan </h1>
                </div>
                <div class="accordion-tab" role="tablist">
                    <!-- Responsabilidad Civil -->
                    <b-card no-body class="accordion-tab__blue">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-1 class="d-flex">
                                <p>Responsabilidad Civil</p>
                                <img v-if="isVisibleRC" aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-top.png"/>
                                <img v-else aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-down.png"/>
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel" v-model="isVisibleRC">
                            <b-card-body>
                                <b-card-text>
                                    <p>
                                        <strong>Frente a ocupantes</strong>
                                        <br>
                                        <br>Si ocasionas daños a personas que estaban dentro del carro al momento del accidente.
                                        <br>
                                        <br>Cubrimos hasta: US$ 10,000 por ocupante, máximo 5 ocupantes  
                                        <br>
                                        <br>Pago mínimo : $150
                                        <br>Pago máximo: 10% del monto a indemnizar
                                        <br>
                                        <br>
                                        <strong>Frente a terceros</strong>
                                        <br>
                                        <br>Si ocasionas daños a personas que estaban fuera del carro al momento del accidente.
                                        <br>
                                        <br>Cubrimos hasta: US$ 150,000
                                        <br>
                                        <br>Pago mínimo : $150
                                        <br>Pago máximo: 10% del monto a indemnizar
                                        <br>
                                        <br><span>Cobertura en:</span>
                                        <br>
                                    </p>
                                    <img src="../../static/media/img/cobertura/cobertura-all.png"/>
                                    <br><br>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- Robo total -->
                    <b-card no-body class="accordion-tab__white">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-2 class="d-flex">
                                <p>Robo total</p>
                                <img v-if="isVisibleRT" aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-top.png"/>
                                <img v-else aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-down.png"/>
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel" v-model="isVisibleRT">
                            <b-card-body>
                                <b-card-text>
                                    <p>
                                        Si te roban el carro por completo.
                                        <br>
                                        <br>Cubrimos hasta: Valor asegurado del carro   
                                        <br>
                                        <br><span>Cobertura en:</span>
                                        <br>
                                    </p>
                                    <img src="../../static/media/img/cobertura/cobertura-all.png"/>
                                    <br><br>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- Pérdida parcial por choque  -->
                    <b-card no-body class="accordion-tab__blue">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-3 class="d-flex">
                                <p>Pérdida parcial por choque</p>
                                <img v-if="isVisiblePP" aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-top.png"/>
                                <img v-else aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-down.png"/>
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel" v-model="isVisiblePP">
                            <b-card-body>
                                <b-card-text>
                                    <p>
                                        Si tu carro sufre daños por un choque o accidente involuntario.
                                        <br>
                                        <br>Cubrimos hasta: 75% del valor asegurado del carro
                                        <br>
                                        <br>Pago mínimo : $150
                                        <br>Pago máximo: 10% del monto a indemnizar
                                        <br>
                                        <br><span>Cobertura en:</span>
                                        <br>
                                    </p>
                                    <img src="../../static/media/img/cobertura/cobertura-two.png"/>
                                    <br><br>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- Accidente de Ocupantes -->
                    <b-card no-body class="accordion-tab__white">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-4 class="d-flex">
                                <p>Accidente de Ocupantes</p>
                                <img v-if="isVisibleAO" aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-top.png"/>
                                <img v-else aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-down.png"/>
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel" v-model="isVisibleAO">
                            <b-card-body>
                                <b-card-text>
                                    <p>
                                        Si las personas que estaban dentro del carro sufren una lesión leve o grave al momento del accidente.
                                        <br>
                                        <br>
                                        <strong>Muerte de Ocupantes</strong>
                                        <br>
                                        <br>Si los ocupantes fallecen debido a un accidente.
                                        <br>
                                        <br>Cubrimos hasta:  $20,000 por ocupante, máximo 5 ocupantes
                                        <br>
                                        <br>
                                        <strong>Invalidez Permanente</strong>
                                        <br>
                                        <br>Si los ocupantes sufren de invalidez permanente debido a un accidente.
                                        <br>
                                        <br>Cubrimos hasta: US$ 20,000 por ocupante, máximo 5 ocupantes
                                        <br>
                                        <br>
                                        <strong>Gastos de Curación</strong>
                                        <br>
                                        <br>Si los ocupantes tienen que asumir gastos médicos debido a un accidente.
                                        <br>
                                        <br>Cubrimos hasta: $4,000 por ocupante, máximo 5 ocupantes
                                        <br>
                                        <br>
                                        <strong>Gastos de Sepelio</strong>
                                        <br>
                                        <br>Si hay gastos de sepelio que asumir debido a un accidente.
                                        <br>
                                        <br>Cubrimos hasta: $ 1,000 por ocupante, máximo 5 ocupantes
                                        <br>
                                        <br><span>Cobertura en:</span>
                                        <br>
                                    </p>
                                    <img src="../../static/media/img/cobertura/cobertura-two.png"/>
                                    <br><br>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- Pérdida Total por Choque -->
                    <b-card no-body class="accordion-tab__blue">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-5 class="d-flex">
                                <p>Pérdida Total por Choque</p>
                                <img v-if="isVisiblePT" aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-top.png"/>
                                <img v-else aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-down.png"/>
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel" v-model="isVisiblePT">
                            <b-card-body>
                                <b-card-text>
                                    <p>
                                        Si tu carro sufre daños irreparables por un choque o accidente involuntario.
                                        <br>
                                        <br>Cubrimos hasta: Valor asegurado del carro
                                        <br>
                                        <br><span>Cobertura en:</span>
                                        <br>
                                    </p>
                                    <img src="../../static/media/img/cobertura/cobertura-one.png"/>
                                    <br><br>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- Accesorios -->
                    <b-card no-body class="accordion-tab__white">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-6 class="d-flex">
                                <p>Accesorios</p>
                                <img v-if="isVisibleA" aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-top.png"/>
                                <img v-else aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-down.png"/>
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel" v-model="isVisibleA">
                            <b-card-body>
                                <b-card-text>
                                    <p>
                                        Si los accesorios de tu carro son robados o dañados en un accidente.
                                        <br>
                                        <br>Cubrimos hasta:  $1500
                                        <br>
                                        <br>Pago mínimo : $150
                                        <br>Pago máximo: 10% del monto a indemnizar
                                        <br>
                                        <br><span>Cobertura en:</span>
                                        <br>
                                    </p>
                                    <img src="../../static/media/img/cobertura/cobertura-one.png"/>
                                    <br><br>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- Rotura de Lunas -->
                    <b-card no-body class="accordion-tab__blue">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-7 class="d-flex">
                                <p>Rotura de Lunas</p>
                                <img v-if="isVisibleRL" aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-top.png"/>
                                <img v-else aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-down.png"/>
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel" v-model="isVisibleRL">
                            <b-card-body>
                                <b-card-text>
                                    <p>
                                        Si rompieron una o más de tus lunas.
                                        <br>
                                        <br>Cubrimos hasta: Valor asegurado del carro  
                                        <br>
                                        <br>Pago mínimo : $0 nacionales, $150 internacionales
                                        <br>Pago máximo: 10% del monto a indemnizar
                                        <br>
                                        <br><span>Cobertura en:</span>
                                        <br>
                                    </p>
                                    <img src="../../static/media/img/cobertura/cobertura-one.png"/>
                                    <br><br>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- Ausencia de Control -->
                    <b-card no-body class="accordion-tab__white">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-8 class="d-flex">
                                <p>Ausencia de Control</p>
                                <img v-if="isVisibleAC" aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-top.png"/>
                                <img v-else aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-down.png"/>
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel" v-model="isVisibleAC">
                            <b-card-body>
                                <b-card-text>
                                    <p>
                                        Si tuviste un accidente manejando en vías no autorizadas, bajo los efectos de drogas y/o alcohol, o habiendo cometido infracciones declaradas como "Muy Grave" o "Grave" por el Reglamento Nacional de Tránsito.
                                        <br>
                                        <br>Cubrimos hasta: Daños al carro por el valor asegurado del mismo; Hasta US$ 50,000 por Responsabilidad Civil 
                                        <br>
                                        <br>Pago mínimo : $150
                                        <br>Pago máximo: 10% del monto a indemnizar
                                        <br>
                                        <br><span>Cobertura en:</span>
                                        <br>
                                    </p>
                                    <img src="../../static/media/img/cobertura/cobertura-one.png"/>
                                    <br><br>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- Otros Riesgos -->
                    <b-card no-body class="accordion-tab__blue">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-9 class="d-flex">
                                <p>Otros Riesgos</p>
                                <img v-if="isVisibleOR" aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-top.png"/>
                                <img v-else aria-hidden="true" class="ml-auto" src="../../static/media/img/cobertura/arrow-down.png"/>
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel" v-model="isVisibleOR">
                            <b-card-body>
                                <b-card-text>
                                    <p>
                                        <strong>Huelgas o Vandalismo</strong>
                                        <br>
                                        <br>Si alguien daña tu carro intencionalmente o de manera accidental.
                                        <br>
                                        <br>Cubrimos hasta: Valor asegurado del carro
                                        <br>
                                        <br>Pago mínimo : $150
                                        <br>Pago máximo: 10% del monto a indemnizar
                                        <br>
                                        <br>
                                        <strong>Incendio</strong>
                                        <br>
                                        <br>Si tu carro es dañado por fuego debido a un accidente ajeno a ti.
                                        <br>
                                        <br>Cubrimos hasta: Valor asegurado del carro
                                        <br>
                                        <br>Pago mínimo : $150
                                        <br>Pago máximo: 10% del monto a indemnizar
                                        <br>
                                        <br>
                                        <strong>Riesgos de la naturaleza</strong>
                                        <br>
                                        <br>Si tu carro sufre daños debido a un desastre natural.
                                        <br>
                                        <br>Cubrimos hasta: Valor asegurado del carro
                                        <br>
                                        <br>Pago mínimo : $200
                                        <br>Pago máximo: 20% del monto a indemnizar
                                        <br>
                                        <br><span>Cobertura en:</span>
                                        <br>
                                    </p>
                                    <img src="../../static/media/img/cobertura/cobertura-one.png"/>
                                    <br><br>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            <!-- </b-container> -->
                <div class="section-header">
                    <h1 class="section-header__title">Beneficios adicionales</h1>
                </div>
                <div class="benefit-tab">
                    <div class="benefit-tab__blue  d-flex">
                        <p>Grúa</p>
                        <a class="ml-auto" ref="javascript:void(0);" v-b-modal.modalgam>Más información</a>
                    </div>
                    <div class="benefit-tab__white  d-flex">
                        <p>Choferes de reemplazo</p>
                        <a class="ml-auto" ref="javascript:void(0);" v-b-modal.modalcr>Más información</a>
                    </div>
                    <div class="benefit-tab__blue  d-flex">
                        <p>Asistencia mecánica </p>
                        <a class="ml-auto" ref="javascript:void(0);" v-b-modal.modalam>Más información</a>
                    </div>
                    <div class="benefit-tab__white  d-flex">
                        <p>Vehículo de reemplazo</p>
                        <a class="ml-auto" ref="javascript:void(0);" v-b-modal.modalvr>Más información</a>
                    </div>
                    <div class="benefit-tab__blue  d-flex">
                        <p>Ambulancias</p>
                        <a class="ml-auto" ref="javascript:void(0);" v-b-modal.modala>Más información</a>
                    </div>
                    <div class="benefit-tab__white  d-flex">
                        <p>Asistencia legal</p>
                        <a class="ml-auto" ref="javascript:void(0);" v-b-modal.modalal>Más información</a>
                    </div>
                </div>
        </section>
        
        <section class="cobertura-desktop-ibk d-none d-md-block   pb-5">
            <div>
                <div class="section-header  detalle-coberturas">
                    <p class="section-header__title  mt-3">Revisa nuestras coberturas y elige tu plan </p>
                </div>
                <div class="coverage-detail">
                    <table class="tcobertura">
                        <thead class="tcobertura__cabecera">
                            <tr align="center">
                                <td><p class="texto-titulo">Coberturas</p></td>                                
                                <td><p class="texto-titulo">¿Hasta cuánto podemos cubrir?</p></td>
                                <td><p class="texto-titulo" style="width: 128px">Pago mínimo</p></td>
                                <td><p class="texto-titulo"  style="width: 128px">Pago máximo</p></td>
                                <td class="plata">PLATA</td>
                                <td class="oro">ORO</td>
                                <td class="black">BLACK</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="background-color: #EBFBF1;">
                                <td rowspan="2" class="texto-izq">Responsabilidad Civil
                                    <!-- <div>
                                        <span id="disabled-wrapper" class="d-inline-block" tabindex="0">
                                            <b-button variant="transparent" style="pointer-events: none;" disabled><img src="../../static/media/img/cobertura/info.png"/></b-button>
                                        </span>
                                        <b-tooltip target="disabled-wrapper">Se incluyen todos los que hayan sido observados durante la inspección vehicular. (ejm: radio, aros, gps, etc)</b-tooltip>
                                    </div> -->
                                </td>
                                
                                <td><p><strong>Frente a Ocupantes:</strong><br><span>$10,000 por ocupante. Máximo 5 ocupantes</span></p></td>
                                <td align="center" rowspan="2"><p><span>$150</span></p></td>
                                <td align="center" rowspan="2"><p><span>%10 del monto a<br>indemnizar</span></p></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr style="background-color: #EBFBF1;">
                                <td><p><strong>Frente a Terceros:</strong><br><span>Hasta $150000</span></p></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr>
                                <td class="texto-izq">Robo total</td>
                                <td><p><strong>Si te roban el carro por completo.</strong><br><span>Cubrimos hasta: Valor total asegurado del carro</span></p></td>
                                <td align="center"><p><span>-</span></p></td>
                                <td align="center"><p><span>-</span></p></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr style="background-color: #EBFBF1;">
                                <td class="texto-izq">Pérdida parcial por choques</td>
                                
                                <td><p><strong>Si tu carro sufre daños por un choque o<br>accidente involuntario.</strong><br><span>Hasta 75% del valor asegurado del carro.</span></p></td>
                                <td align="center" colspan="2" style="padding: 0; border: none;">
                                    <table class="minitabla"  border="0">
                                        <tr>
                                            <td colspan="2" class="minitabla__titulo">En taller preferente</td>                                            
                                        </tr>
                                        <tr>
                                            <td style="width: calc(49% - 0px);">$150</td>
                                            <td style="width: calc(49% - 0px);">10% del monto a indemnizar</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"  class="minitabla__titulo">En taller concesionario</td>                                            
                                        </tr>
                                        <tr>
                                            <td style="width: calc(49% - 0px);">$200</td>
                                            <td style="width: calc(49% - 0px);">15% del monto a indemnizar</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"  class="minitabla__titulo">En taller no afiliado a Interseguro</td>                                            
                                        </tr>
                                        <tr>
                                            <td style="width: calc(49% - 0px);">$300</td>
                                            <td style="width: calc(49% - 0px);">20% del monto a indemnizar</td>
                                        </tr>
                                    </table>
                                </td>
                                <!-- <td align="center"><p><span>%10 del monto a<br>indemnizar</span></p></td> -->
                                <td align="center"></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr>
                                <td rowspan="4" class="texto-izq">Accidentes de ocupantes</td>                                
                                <td><p><strong>Muerte de ocupantes</strong><br>
                                <span>$20,000 por ocupante, máximo 5 ocupantes</span></p></td>
                                <td align="center"><p><span>-</span></p></td>
                                <td align="center"><p><span>-</span></p></td>
                                <td align="center"></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr>
                                <td><p><strong>Invalidez permanente</strong><br><span>$20,000 por ocupante, máximo 5 ocupantes</span></p></td>
                                <td align="center"><p><span>-</span></p></td>
                                <td align="center"><p><span>-</span></p></td>
                                <td align="center"></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr>
                                <td><p><strong>Gastos de curación</strong><br><span>$4,000 por ocupante, máximo 5 ocupantes</span></p></td>
                                <td align="center"><p><span>-</span></p></td>
                                <td align="center"><p><span>-</span></p></td>
                                <td align="center"></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr>
                                <td><p><strong>Gastos sepelio</strong><br><span>$1,000 por ocupante, máximo 5 ocupantes</span></p></td>
                                <td align="center"><p><span>-</span></p></td>
                                <td align="center"><p><span>-</span></p></td>
                                <td align="center"></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr style="background-color: #EBFBF1;">
                                <td class="texto-izq">Pérdida total por choques</td>
                                <td><p><strong>Si tu carro sufre daños irreparables<br>por un choque o accidente involuntario.</strong><br><span>Cubrimos hasta: Valor total asegurado del carro</span></p></td>
                                <td align="center"><p><span>-</span></p></td>
                                <td align="center"><p><span>-</span></p></td>
                                <td align="center"></td>
                                <td align="center"></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr>
                                <td class="texto-izq">Accesorios</td>
                                <td><p   style="max-width: 420px;"><strong>Si los accesorios de tu carro son robados<br>
                                o dañados en un accidente</strong><br>
                                <span>Cubrimos hasta: $1500</span><br>
                                <span class="ausencia-control">
                                    <img width="14" src="../../static/media/img/exclamacion.png" alt="">Se incluyen todos los que hayan sido observados durante
                                        la inspección vehicular. (ejm: radio, aros, gps, etc)</span></p></td>
                                <td align="center"><p><span>$150</span></p></td>
                                <td align="center"><p><span>%10 del monto a<br>indemnizar</span></p></td>
                                <td align="center"></td>
                                <td align="center"></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr style="background-color: #EBFBF1;">
                                <td class="texto-izq">Rotura de lunas</td>
                                <td><p><strong>Si rompieron una o más de tus lunas.</strong><br><span>Cubrimos hasta: Valor total asegurado del carro</span><br>
                                 <span class="ausencia-control">
                                    <img width="14" src="../../static/media/img/exclamacion.png" alt="">Las lunas importadas se atienden vía reembolso</span>
                                 
                                </p></td>
                                <td align="center"><p><span>Nacionales : $0</span> <br> <span>Importadas: $150</span></p></td>
                                <td align="center"><p><span>%10 del monto a<br>indemnizar</span></p></td>
                                <td align="center"></td>
                                <td align="center"></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr>
                                <td rowspan="3" class="texto-izq">Riesgos de naturaleza<br>vandalismo, entre otros</td>
                                <td><p><strong>Incendio</strong><br><span>Cubrimos hasta: Valor total asegurado del carro</span></p></td>
                                <td align="center" colspan="2" style="padding: 0; border: none;">
                                    <table class="minitabla"  border="0">
                                        <tr>
                                            <td colspan="2" class="minitabla__titulo">En taller preferente</td>                                            
                                        </tr>
                                        <tr>
                                            <td style="width: calc(49% - 0px);">$150</td>
                                            <td style="width: calc(49% - 0px);">10% del monto a indemnizar</td>
                                        </tr>
                                    </table>
                                </td>
                                <td align="center"></td>
                                <td align="center"></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr>
                                <td><p><strong>Huelgas o vandalismo</strong><br><span>Cubrimos hasta: Valor total asegurado del carro</span></p></td>
                                <td align="center" colspan="2" style="padding: 0; border: none;">
                                    <table class="minitabla"  border="0">
                                        <tr>
                                            <td colspan="2" class="minitabla__titulo">En taller preferente</td>                                            
                                        </tr>
                                        <tr>
                                            <td style="width: calc(49% - 0px);">$150</td>
                                            <td style="width: calc(49% - 0px);">10% del monto a indemnizar</td>
                                        </tr>
                                    </table>
                                </td>
                                <td align="center"></td>
                                <td align="center"></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr>
                                <td><p><strong>Riesgos de la naturaleza</strong><br><span>Cubrimos hasta: Valor total asegurado del carro</span></p></td>
                                <td align="center" colspan="2" style="padding: 0; border: none;">
                                    <table class="minitabla"  border="0">
                                        <tr>
                                            <td colspan="2" class="minitabla__titulo">En taller preferente</td>                                            
                                        </tr>
                                        <tr>
                                            <td style="width: calc(49% - 0px);">$200</td>
                                            <td style="width: calc(49% - 0px);">10% del monto a indemnizar</td>
                                        </tr>
                                    </table>
                                </td>
                                
                                <td align="center"></td>
                                <td align="center"></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                            <tr style="background-color: #EBFBF1;">
                                <td class="texto-izq">
                                    <div class="ausencia-control-mobile">
                                    <span>Ausencia de Control</span>
                                    <span class="ausencia-control" style="max-width: 250px;">
                                        <img width="14" src="../../static/media/img/exclamacion.png" alt="">
                                        Solo aplica en caso quieras endosar tu póliza a una entidad financiera
                                    </span>
                                    </div>
                                </td>
                                <td><p style="min-width: 300px; max-width: 370px;"><span><strong>Si tuviste un accidente manejando en vías
                                    no autorizadas, bajo los efectos de drogas y/o
                                    alcohol, o habiendo cometido infracciones
                                    declaradas como "Muy Grave" o
                                    "Grave" por el Reglamento Nacional de Tránsito</strong></span><br>
                                    <span class="ausencia-control" style="max-width: 250px;">
                                        <img width="14" src="../../static/media/img/exclamacion.png" alt="">
                                        Daños al carro por el valor asegurado del mismo;
                                        Hasta $ 50,000 por Responsabilidad Civil.
                                    </span>
                                    </p></td>
                                <td align="center"><p><span>$150</span></p></td>
                                <td align="center"><p><span>10% del monto a indemnizar</span></p></td>
                                <td align="center"></td>
                                <td align="center"></td>
                                <td align="center"><img src="../../static/media/img/cobertura/check.png"/></td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="pt-2">
                        <span  class="ausencia-control" style="font-size: 14px; font-family: 'Omnes Medium'; font-weight:600; display: block !important;">
                            *En pick-ups aumenta el deducible a 15% en talleres preferentes, a 20% en concesionarios y a 25% en talleres no afiliados con un pago mínimo de $200, $250 y $350 en talleres preferentes, concesionarios y no afiliados respectivamente.
                        </span>
                    </p>
                </div>
            </div>
            
           
        </section>

        <section class="servicios-tranquilidad  d-none  d-lg-block   pb-5">
            <div class="section-servicios">
                <div class="section-header">
                    <h1 class="section-header__title">Nuetros servicios adicionales</h1>
                </div>
                <div class="coverage-tab">
                    <b-tabs content-class="mt-3" justified >
                        <b-tab title="Grúa" active>
                            <b-container>
                                <b-row>
                                    <b-col>
                                        <h4>¿Cuántos servicios de grúa incluye cada plan?</h4>
                                        <br>
                                        <img src="../../static/media/img/cobertura/incluye-grua.png">
                                        <br>
                                        <span>* El servicio es hasta los límites de la asistencia. <br> De excederse se cubren hasta $250 por evento vía reembolso.</span> <br>
                                        <span>** Puedes usar el servicio de grúa máximo 2 veces al mes.</span>
                                    </b-col>
                                    <b-col>
                                        <h4>¿Hasta donde llegan  nuestros servicio de grúas?</h4>
                                        <div class="tab-servicios">                                           
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
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-tab>
                        <b-tab title="Choferes de Reemplazo">
                            <b-container>
                                <b-row>
                                    <b-col>
                                        <h4>¿Cuántos choferes incluye cada plan?</h4>
                                        <br>
                                        <img src="../../static/media/img/cobertura/incluye-chofer.png">
                                        <br>
                                        <br>
                                        <span>*Si necesitas chóferes adicionales, agrega uno adicional a tu plan <br> por S/ 50.aplica para todos los planes.</span>
                                        <br> <span> ** No incluye gastos en gasolina, peaje ni estacionamientos.</span>
                                    </b-col>
                                    <b-col>
                                        <h4>¿Hasta donde llegan  nuestros servicio de grúas?</h4>
                                        <div class="tab-servicios">                                           
                                            <div class="box-tab" style="background: white;">
                                                <div class="box-tab__item">
                                                    <p class="point">Sur</p>
                                                    <p class="point-desc">Asia Boulevard </p>
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
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-tab>
                        <b-tab title="Asistencia mecánica">
                            <b-container>
                                <b-row>
                                    <b-col>
                                        <p>Incluye fallas eléctricas, fallas mecánicas, cargas de batería, cambio de llantas  y olvido de las llaves dentro del carro</p>
                                        <br>
                                        <img src="../../static/media/img/cobertura/incluye-asistencia.png">
                                        <br>
                                        <br>
                                        <span>* No incluye fallas mayores ni materiales o repuestos.</span>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-tab>
                        <b-tab title="Vehículo de reemplazo">
                            <b-container>
                                <b-row>
                                    <b-col>
                                        <p>Todos los planes incluyen un vehículo de reemplazo. Son 15 días acumulables al año en caso de choque y 30 días en caso de robo.</p>
                                        <br>
                                        <span>* El uso de vehículos de reemplazo tiene un costo de $100</span>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-tab>
                        <b-tab title="Ambulancias">
                            <b-container>
                                <b-row>
                                    <b-col>
                                        <p>Servicio de ambulancias dentro de los límites de la asistencia. De excederse se cubren hasta $250 por evento vía reembolso. </p>
                                        <br>
                                        <img src="../../static/media/img/cobertura/incluye-ambulancia.png">
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-tab>
                        <b-tab title="Asistencia legal">
                            <b-container>
                                <b-row>
                                    <b-col>
                                        <p>Si necesitas asistencia jurídica debido a un accidente de tránsito.</p>
                                        <br>
                                        <img src="../../static/media/img/cobertura/incluye-legal.png">
                                    </b-col>
                                </b-row>
                            </b-container>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
            
        </section>
        
        <section id="nomecubre" class="cobertura-3" ref="nomecubre">
            <div class="cobertura-desktop-ibk">
                <div class="section-header">
                    <h1 class="section-header__title">Revisa lo que los seguros vehiculares no cubren</h1>
                </div>
                <div class="section-body">
                    <b-row class="justify-content-center">
                        <b-col cols="12" sm="6"  md="3" class="mb-5" v-for="(item, index) in ListNoCubrimos" :key="index" >
                            <div class="cobertura-3-item__title  mb-2">{{item.titulo}}</div>
                            <div class="cobertura-3-item  d_flex_column">
                            <div class="cobertura-icon">
                                <img v-bind:src=item.url height="100" v-bind:alt="item.titulo" class="image">
                            </div>
                            <div class="cobertura-3-item__detalle">
                                <b-btn v-b-modal="'modal-' + item.id" class="item-box__enlace w-inline-block clearfix">
                                    <div  class="item-box__enlace--detalle" @click="verDetalleNoMeCubre(item)">Ver más</div>                                  
                                </b-btn>
                            </div>
                            
                            </div>
                            <modal2-is :obj2="item"></modal2-is>
                        </b-col>
                    </b-row>
                </div>
            </div>
            
        </section>

        <section>
            <b-container>
                <!-- Grúa -->
                <div>
                    <b-modal id="modalgam" title="Bootstrap-Vue" hide-footer hide-header ref="hideModalGAM" size="lg">
                        <div class="modal-coverage">
                            <div class="d-flex justify-content-end col" style="padding-right: 0px;">
                                <b-btn class="mt-3" @click="hideModalGAM()" style="background: white; border: none;">
                                    <img src="../../static/media/img/cobertura/x.png" alt="icon close"/>
                                </b-btn>
                            </div>
                            <div class="modal-description">
                                <p>
                                    <strong>Grúa</strong>
                                    <br>
                                    <br>¿Cuántos servicios de grúa incluye cada plan?
                                    <br>
                                    <br><img src="../../static/media/img/cobertura/incluye-grua.png"/>
                                    <br>
                                    <br>¿Hasta donde llega  nuestro servicio de grúas?
                                    <br>
                                    <br>
                                </p>
                                <div class="tab-servicios">                                           
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
                                </div>
                                <br><span>* El servicio es hasta los límites de la asistencia. De excederse se cubren hasta $250 por evento vía reembolso</span>
                            </div>
                        </div>
                    </b-modal>
                </div>
                <!-- Choferes de reemplazo -->
                <div>
                    <b-modal id="modalcr" title="Bootstrap-Vue" hide-footer hide-header ref="hideModalCR" size="lg">
                        <div class="modal-coverage">
                            <div class="d-flex justify-content-end col" style="padding-right: 0px;">
                                <b-btn class="mt-3" @click="hideModalCR()" style="background: white; border: none;">
                                    <img src="../../static/media/img/cobertura/x.png" alt="icon close"/>
                                </b-btn>
                            </div>
                            <div class="modal-description">
                                <p>
                                    <strong>Choferes de reemplazo</strong>
                                    <br>
                                    <br>¿Cuántos choferes incluye cada plan?
                                    <br>
                                    <br><img src="../../static/media/img/cobertura/incluye-chofer.png"/>
                                    <br>
                                    <br>¿Hasta donde llegan nuestro servicio de choferes de reemplazo?
                                    <br>
                                    <br>
                                </p>
                                <div class="tab-servicios">                                           
                                    <div class="box-tab" style="background: white;">
                                        <div class="box-tab__item">
                                            <p class="point">Sur</p>
                                            <p class="point-desc">Asia boulevard</p>
                                        </div>
                                        <div class="box-tab__item">
                                            <p class="point">Este</p>
                                            <p class="point-desc">KM 33 Carretera central - Plaza central Chosica</p>
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
                                </div>
                                <br><span>*Si necesitas choferes adicionales, agrega uno adicional a tu plan por S/ 50. Aplica para todos los planes.</span>
                                <br>
                                <br><span>** No incluye gastos en gasolina, peaje ni estacionamientos.</span>
                            </div>
                        </div>
                    </b-modal>
                </div>            
                <!-- Asistencia mecánica -->
                <div>
                    <b-modal id="modalam" title="Bootstrap-Vue" hide-footer hide-header ref="hideModalAM" size="lg">
                        <div class="modal-coverage">
                            <div class="d-flex justify-content-end col" style="padding-right: 0px;">
                                <b-btn class="mt-3" @click="hideModalAM()" style="background: white; border: none;">
                                    <img src="../../static/media/img/cobertura/x.png" alt="icon close"/>
                                </b-btn>
                            </div>
                            <div class="modal-description">
                                <p>
                                    <strong>Asistencia mecánica</strong>
                                    <br>
                                    <br>Incluye fallas eléctricas, fallas mecánicas, cargas de batería, cambio de llantas  y olvido de las llaves dentro del carro
                                    <br>
                                    <br>¿Cuántos choferes incluye cada plan?
                                    <br>
                                    <br><img src="../../static/media/img/cobertura/incluye-asistencia.png"/>
                                    <br>
                                    <br><span>* No incluye fallas mayores ni materiales o repuestos.</span>
                                </p>
                            </div>
                        </div>
                    </b-modal>
                </div>
                <!-- Vehículo de reemplazo -->
                <div>
                    <b-modal id="modalvr" title="Bootstrap-Vue" hide-footer hide-header ref="hideModalVR" size="lg">
                        <div class="modal-coverage">
                            <div class="d-flex justify-content-end col" style="padding-right: 0px;">
                                <b-btn class="mt-3" @click="hideModalVR()" style="background: white; border: none;">
                                    <img src="../../static/media/img/cobertura/x.png" alt="icon close"/>
                                </b-btn>
                            </div>
                            <div class="modal-description">
                                <p>
                                    <strong>Vehículo de reemplazo</strong>
                                    <br>
                                    <br>Todos los planes incluyen un vehículo de reemplazo. Son 15 días acumulables al año en caso de choque y 30 días en caso de robo.
                                    <br>
                                    <br><span>* El uso de vehículos de reemplazo tiene un costo de $100</span>
                                </p>
                            </div>
                        </div>
                    </b-modal>
                </div>                
                <!-- Ambulancias -->
                <div>
                    <b-modal id="modala" title="Bootstrap-Vue" hide-footer hide-header ref="hideModalA" size="lg">
                        <div class="modal-coverage">
                            <div class="d-flex justify-content-end col" style="padding-right: 0px;">
                                <b-btn class="mt-3" @click="hideModalA()" style="background: white; border: none;">
                                    <img src="../../static/media/img/cobertura/x.png" alt="icon close"/>
                                </b-btn>
                            </div>
                            <div class="modal-description">
                                <p>
                                    <strong>Ambulancias</strong>
                                    <br>
                                    <br>Incluye ambulancias dentro de los límites de la asistencia. De excederse se cubren hasta $250 por evento vía reembolso
                                    <br>
                                    <br>¿Cuántos servicios de ambulancia incluye cada plan?
                                    <br>
                                    <br><img src="../../static/media/img/cobertura/incluye-ambulancia.png"/>
                                    <br>
                                    <br>¿Hasta donde llega  nuestro servicio de grúas?
                                    <br>
                                    <br><span>* No incluye fallas mayores ni materiales o repuestos.</span>
                                </p>
                            </div>
                        </div>
                    </b-modal>
                </div>
                <!-- Asistencia legal -->
                <div>
                    <b-modal id="modalal" title="Bootstrap-Vue" hide-footer hide-header ref="hideModalAL" size="lg">
                        <div class="modal-coverage">
                            <div class="d-flex justify-content-end col" style="padding-right: 0px;">
                                <b-btn class="mt-3" @click="hideModalAL()" style="background: white; border: none;">
                                    <img src="../../static/media/img/cobertura/x.png" alt="icon close"/>
                                </b-btn>
                            </div>
                            <div class="modal-description">
                                <p>
                                    <strong>Asistencia legal</strong>
                                    <br>
                                    <br>Si necesitas asistencia jurídica debido a un accidente de tránsito.
                                    <br>
                                    <br>¿Cuántas veces puedo usar este servicio?
                                    <br>
                                    <br><img src="../../static/media/img/cobertura/incluye-legal.png"/>
                                    <br>
                                    <br><span>* Hasta $250 por evento, se atiende vía reembolso</span>
                                </p>
                            </div>
                        </div>
                    </b-modal>
                </div>
            </b-container>
        </section>

    </div>
</template>

<style lang="scss" scope>

.ausencia-control-mobile{
  flex-direction: column;
  display: flex;
  .ausencia-control{
    font-size: 11px;
  }
}
.ausencia-control{
    color: #979696;
}

.tab-servicios{
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
.v2-cobertura-ibk{
    background: #f7f4fc;
    padding-top: 100px;
    p,div{
        margin: 0;
    }
    .detalle-coberturas{
        padding: 24px 0;
    }
    .servicios-tranquilidad{
        font-family: 'Omnes Medium';        
        background: #fff;
        .tab-content{
            padding-top: 12px;
        }
        .section-servicios{
            max-width: 1140px;
            margin: auto;
        }
        .section-header{
            padding: 24px 0;
        }
        .coverage-tab{
            color: #505050;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.08;
            letter-spacing: normal;
            .nav-tabs .nav-link {
                font-family: 'Omnes Regular';
                font-size: 22px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1;
                letter-spacing: normal;
                text-align: center;
                color: #838383;
                height: 65px;
                line-height: 1;
                display: inline-block;
                width: 100%;
                vertical-align: middle;
            }
            .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
                color: #00C450;
                background-color: #fff;
                border-color: #00C450 #00C450 #fff;
                font-family: 'Omnes Medium';
                font-size: 22px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1;
                letter-spacing: normal;
                color: #00C450;
                text-align: center;
                border-right: 2px solid;
                border-left: 2px solid;
                border-top: 2px solid;
            }
            .nav-tabs .nav-item a{
                border-bottom: 2px solid #00C450;
                text-align: center;
            }
        }
    }
    .cobertura-3{
        box-shadow: 0 -9px 10px 0 rgba(0, 0, 0, 0.04);
        background-color: #fcfcfc;
        .section-header{  
            &__title {
                font-size: 22px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: normal;
                text-align: center;
                color: #696969;
            }
        }
        .cobertura-3-item{
            width: 180px !important;
            height: 180px !important;
            border-radius: 200px !important;
            background-color: #F1F7FF;
            margin-left: auto;
            margin-right: auto;
            .cobertura-icon{
                width: 100px;
                height: 85px;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    height: 66px;
                    width: auto;
                }
            }
            &__title{
                font-family: 'Omnes Regular';
                color: #505050;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.35;
                letter-spacing: normal;
                text-align: center;
                
            }
            .item-box{
                &__enlace{
                    background: transparent;
                    &--detalle{
                        text-decoration: underline;
                        font-size: 20px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.55;
                        letter-spacing: normal;
                        text-align: left;
                        color: #00C450;
                        font-family: 'Omnes Regular';
                    }
                }
            }
        }
    }
}
.tcobertura{
    width: 100%;
    background: white;
    &__cabecera{
    }
    thead{
        tr{
            height: 47px;
            p{
                color: #696969;
            }
        }
        .plata{
            background: #b1b1b1;
            color: white;
            width: 75px;
        }
        .oro{
            background: #e6ac38;
            color: white;
            width: 75px;
        }
        .black{
            background: #27362d;
            color: white;
            width: 75px;
        }
        .texto-titulo{
            font-family: 'Omnes Medium';
            font-size: 20px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: normal;
            text-align: center;
            color: #696969;
        }
    }
    tbody{
        .texto-izq{
            font-family: 'Omnes Medium';
            font-size: 20px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.25;
            letter-spacing: 0.11px;
            text-align: left;
            color: #505050;
        }
    }
}
.cobertura-mobile{
    font-family: 'Omnes Medium';
    .section-header{ 
        &__title {
            font-size: 22px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            text-align: center;
            color: #505050;
        }
    }
    .accordion-tab{
        .btn {
            height: 57px;
            color: #505050;
            // background-color: #f1f7ff;
            line-height: 55px;
            text-align: left;
            border: 0;
            border-radius: 0;
            p{
                line-height: 45px;
            }
            img{
                margin-top: auto;
                margin-bottom: auto;
                width: 15px;
                height: 10px;
            }
        }
        .card-header {
            border: 0;
        }
        .card-text{
            color: #5e5e5e;
            font-size: 15px;
            text-align: center;
            p{
                text-align: left;
                strong{
                    color: #0855c4;
                }
                span{
                    font-size: 14px;
                }
            }
        }
        .btn-secondary:not(:disabled):not(.disabled):active,
        .btn-secondary:not(:disabled):not(.disabled).active,
        .show > .btn-secondary.dropdown-toggle {
            color: #505050;
        }
        &__blue{
            .btn-secondary:not(:disabled):not(.disabled):active,
            .btn-secondary:not(:disabled):not(.disabled).active,
            .show > .btn-secondary.dropdown-toggle {
                background-color: #f1f7ff;
            }
            .btn-secondary {
                background-color: #f1f7ff;
            }
        }
        &__white{
            .btn-secondary:not(:disabled):not(.disabled):active,
            .btn-secondary:not(:disabled):not(.disabled).active,
            .show > .btn-secondary.dropdown-toggle {
                background-color: #f8f8f8;
            }
            .btn-secondary {
                background-color: #f8f8f8;
            }
        }
    }
    .benefit-tab{
        color: #5e5e5e;
        font-family: 'Omnes Medium';
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        font-size: 18px;
        div{
            height: 53px;
            padding-left: 12px;
            padding-right: 12px;
            line-height: 50px;
        }
        a{
            font-size: 14px;
            color: #0497ce;
            text-decoration-line: underline;
        }
        &__blue{
            background-color: #f1f7ff;
        }
        &__white{
            background-color: #f8f8f8;
        }
    }
    .modal-coverage{
        display: flex;
        flex-direction: column;
        margin-top: -15px;
        .btn-secondary {
            background: white;
            border: none;
            position: relative;
            height: 26px;
            img{
                position: absolute;
                right: 10px;
            }
        }
        .modal-description{
            font-family: 'Omnes Medium';
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.25;
            letter-spacing: normal;
            strong{
                font-size: 22px;
                color: #0855c4;
                font-weight: 600;
                line-height: 1;
            }
            p{
                font-size: 16px;
            }
            span{
                font-size: 12px;
            }
            table{
                border-collapse: separate;
                border-spacing: 15px;
            }
        }
        .btn-secondary:focus,
        .btn-secondary:not(:disabled):not(.disabled).active:focus {
            box-shadow: none;
        }
        .btn:focus {
            box-shadow: none;
        }
    }
}
.servicios-tranquilidad{
    .section-header{  
        &__title {
            font-size: 44px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            text-align: center;
            color: #505050;
        }
    }
}
.cobertura-desktop-ibk{
    font-family: 'Omnes Medium';
    max-width: 1140px;
    margin: auto !important;
    .minitabla{
        padding: 0; 
        margin: 0;    
        width: 100%;
        td{
            font-size: 14px;
            text-align: center;
        }
        &__titulo{
            background: #00C450;
            text-align: center;
            color: #ffffff;
            font-size: 15px;
        }
        
    }
    .section-header{
        padding: 24px 0;
        &__title {
            font-size: 44px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            text-align: center;
            color: #505050;
        }
    }
    .coverage-detail{
        table{
            margin-right: auto;
            margin-left: auto;
            font-size: 18px;
            border: 0.2px solid #EBFBF1;
            // border-collapse: collapse;
            h1{
                font-size: 20px;
                font-weight: 500;
                color: #696969;
            }
            .tcobertura__cabecera{
                p{
                color: #333333;
                }
            }
            p{
                color: #696969;
                font-family: 'Omnes Medium';
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: 0.07px;
                strong{
                    font-size: 14px;
                    color: #00C450;
                }
                span{
                    font-size: 14px;
                }
            }
            td{
                padding-left: 10px;
                padding-right: 10px;
                border-left: 0.2px solid #EBFBF1; 
                border-right: 0.2px solid #EBFBF1;
            }
        }
    }
    
}




.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: transparent;
    border-color: transparent !important;
}
.btn-secondary:focus, .btn-secondary.focus {
    color: #fff;
    background-color: transparent;
    border-color: transparent !important;
    box-shadow: none !important;
}
.btn-secondary {
    background-color: transparent;
    border-color: transparent !important;
    box-shadow: none !important;
}

@media (min-width: 1200px) {
    .cobertura-3{
        .cobertura-3-item{
            &__title{
                font-size: 26px;
                font-weight: 500;
            }
        }
        .section-header{
            &__title{
                font-size: 44px;
            }
        }
    }
}
</style>

<script>
import Modal2 from '@/components/modals/modal2'
export default {
    layout: 'InterbankHome',
    data() {
        return {
            isVisibleRC: false,
            isVisibleRT: false,
            isVisiblePP: false,
            isVisibleAO: false,
            isVisiblePT: false,
            isVisibleA:  false,
            isVisibleRL: false,
            isVisibleAC: false,
            isVisibleOR: false,
            ListNoCubrimos: [
                {
                    id: 300,    
                    titulo: "Si te portas mal",
                    url: require("../../static/media/img/ibk/cobertura/si-te-portas-mal.svg"),
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
                    titulo: "Sobre lo que llevas",
                    url: require("../../static/media/img/ibk/cobertura/sobre-lo-que-llevas.svg"),
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
                    titulo: "Sobre lo que dañas",
                    url: require("../../static/media/img/ibk/cobertura/lo-que-danias.svg"),
                    detalles:[
                        {descripcion:'Si se dañan tus propiedades o propiedades bajo tu control, no cubrimos esas reparaciones.'},
                        {descripcion:'Si se dañan la capota de lona o los accesorios, piezas o partes de descapotables.'},
                        {descripcion:'Si se dañan los neumáticos o cámaras, a menos que sea debido a un accidente cubierto.'}             
                    ]
                },
                {
                    id: 303,  
                    titulo: "Alguien lleva tu carro",
                    url: require("../../static/media/img/ibk/cobertura/alguien-lleva-tu-carro.svg"),
                    detalles:[
                        {descripcion:'Si tu carro se daña cuando lo remolcan o lo transporta una grúa que no sea nuestra. Por favor, evita transportarlo con otros medios que no sean nuestros.'},
                        {descripcion:'Si hay daños causados a otras personas cuando robaron tu carro, salvo si te lastimaron a ti o a las personas que iban contigo justo antes del robo.'},          
                    ]
                },
                {
                    id: 304,  
                    titulo: "Desgaste o mal uso",
                    url: require("../../static/media/img/ibk/cobertura/desgaste.svg"),
                    detalles:[
                        {descripcion:'Si tu carro sufre daños causados por desgaste, sobrecarga, mal uso, falla mecánica, falta de uso o falta de mantenimiento.'},
                        {descripcion:'Si realizaste una instalación eléctrica defectuosa o incorrecta.'},
                        {descripcion:'Si los daños se deben a reparaciones o cambios de piezas sin autorización de Interseguro, que no nos permitan saber cuáles fueron las causas del accidente.'}
                    ]
                },
                {
                    id: 305,  
                    titulo: "Casos extremos",
                    url: require("../../static/media/img/ibk/cobertura/casos-extremos.svg"),
                    detalles:[
                        {descripcion:'Si los daños a tu carro sucedieron porque se proclamó un estado de sitio o alguna autoridad decidió confiscar, expropiar, nacionalizar o destruir bienes.'},
                        {descripcion:'Si los daños fueron causados debido a una guerra, civil o internacional.'},
                        {descripcion:'Si fueron causados por una reacción o radiación nuclear, o contaminación radioactiva.'}             
                    ]
                },
                {
                    id: 307,  
                    titulo: "Otros",
                    url: require("../../static/media/img/ibk/cobertura/otros.svg"),
                    detalles:[
                        {descripcion:'Si los daños ocurrieron cuando usaste tu carro como taxi, colectivo, auto de instrucción, movilidad escolar, para arrendamiento o cualquier otro uso comercial, solo aseguramos uso particular.'},
                        {descripcion:'Si los daños ocurrieron cuando tu carro iba por zonas que no están destinadas al paso de vehículos, a menos que sean trayectos obligados.'},
                        {descripcion:'Si los daños no son causados de forma accidental.'}             
                    ]
                }
            ]       
        }
    },
    components:{
        'modal2-is': Modal2
    },
    methods:{
        hideModalGAM(){
            this.$refs.hideModalGAM.hide()
        },
        hideModalCR(){
            this.$refs.hideModalCR.hide()
        },
        hideModalAM(){
            this.$refs.hideModalAM.hide()
        },
        hideModalVR(){
            this.$refs.hideModalVR.hide()
        },
        hideModalA(){
            this.$refs.hideModalA.hide()
        },
        hideModalAL(){
            this.$refs.hideModalAL.hide()
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
            })
        }
    },
    mounted: function(){
        if (document.location.hostname == "www.interseguro.pe"){
            fbq('track', 'ViewContent', {
                ViewContentcobertura: 'ViewContentcobertura'
            })
        }else{
        }
        
        this.PaginaVista()
    }
}
</script>
