<template>
    <div>
        <section class="section s como-lo-uso">
            <b-container>
            <div class="section-header">
                <h1 class="section-header__title">Cómo lo uso</h1>
                <h3 class="section-header__parrafo">
                <strong class="bold-text-6">Nosotros nos haremos cargo cuando las cosas se pongan difíciles. Si algo pasa mientras
                    manejas, sigue estos pasos según tu caso:</strong>
                </h3>
            </div>

            <div class="section-body  tabs-comoLosUso">
                <tabs  :options="{ useUrlFragment: false }" @clicked="tabClicked" @changed="tabChanged">
                    <tab name="Chocaste y no hay heridos" active>
                        <div>
                            <h2 class="tabs-content__panel--title  text-center"><strong>Chocaste y no hay heridos</strong></h2>
                            <p class="tabs-content__panel--parrafo">
                                <span class="span-number">
                                1.
                                </span>Asegúrate de estar en un lugar seguro.<br>‍<br><span class="span-number">
                                2.</span> Llámanos al (01) 500 0000 .<br>‍<br>
                                <span class="span-number">
                                3.</span> Te indicaremos qué pasos debes seguir según tu caso. <br>‍<br><span class="span-number">4.</span>
                                No siempre será necesario que alguien vaya al lugar del incidente,  pero si lo necesitas alguien del equipo estará
                                listo para llegar a donde estés.<br>‍<br><span class="span-number">5.</span>
                                Según cómo esté tu carro, te indicaremos los talleres afiliados donde puedes dejarlo o te mandaremos una grúa.
                                <br>‍<br><span class="span-number">6.</span> El taller nos avisará cuando tu carro haya sido ingresado, no
                                necesitas hacerlo tú.<br>‍<br><span class="span-number">7.</span>Nos encargamos de monitorear el arreglo de tu carro y te avisaremos apenas esté listo.
                            </p>
                        </div>
                    </tab>
                    <tab name="Chocaste y hay heridos" >
                        <div>
                            <h2 class="tabs-content__panel--title  text-center"><strong>Chocaste y hay heridos</strong></h2>
                            <p class="tabs-content__panel--parrafo"><span class="span-number">1. </span>Tranquilo, asegúrate de estar a
                            salvo.<br>‍<br><span class="span-number">2.</span> Llámanos al (01) 500 0000 contando lo sucedido<br>‍<br><span class="span-number">3.</span> Si el otro carro involucrado
                            tiene seguro, tendrá que llamarlos.<br>‍<br><span class="span-number">4.</span> Una persona del equipo
                         irá al lugar del accidente, espérala ahí a menos que te indiquemos lo contrario.<br>‍<br><span class="span-number">5.</span>
                            Te acompañaremos a realizar los trámites de la comisaría; como la Denuncia Policial, el dosaje etílico, entre
                            otros.<br>‍<br><span class="span-number">6.</span> Cuando las coordinaciones estén terminadas, te enviaremos
                            la info de los talleres afiliados más cercanos a ti. Si lo necesitas, te mandaremos una grúa.<br>‍<br><span
                            class="span-number">7.</span> El taller nos avisará cuando tu carro haya sido ingresado, no necesitas hacerlo
                            tú.<br><br><span class="span-number">8.</span>
                            Nos encargamos de monitorear el arreglo de tu carro y te avisaremos apenas esté listo.<br></p>
                        </div>
                    </tab>
                    <tab name="Me robaron el carro">
                        <div>
                            <h2 class="tabs-content__panel--title  text-center"><strong>Me robaron el carro</strong></h2>
                            <p class="tabs-content__panel--parrafo"><span class="span-number">1. </span>Tranquilo, asegúrate de estar a
                                salvo.<br>‍<br><span class="span-number">2.</span> Llámanos al (01) 500 0000 <br> <br> <span class="span-number"> 3.</span> Una persona del
                                equipo llegará a ayudarte inmediatamente.<br>‍<br><span class="span-number">4.</span> Te ayudamos
                                a presentar una denuncia policial en la comisaría que corresponda y a pasar el dosaje etílico de ser necesario.
                                <br>‍<br><span class="span-number">5.</span> Si pasan 30 días de haber presentado la denuncia y tu carro
                                aparece, te ayudamos a recuperarlo en la comisaría que corresponda y llevamos tu carro al taller.<br>‍<br><span
                                class="rem text-span-15"> Recuerda que con nosotros tienes vehículos de reemplazo que puedes usar hasta por 30 días.</span></p>
                        </div>
                    </tab>
                    <tab name="Asistencia mecánica y otros servicios" >
                        <div>
                            <h2 class="tabs-content__panel--title  text-center"><strong>Asistencia mecánica y otros servicios</strong></h2>
                            <p class="tabs-content__panel--parrafo"><span class="span-number">1. </span>Llámanos al (01) 500 0000 
                                <br>‍<br><span class="span-number">2.</span> Cuéntanos lo que necesitas, y envíanos tu ubicación por Whatsapp.<br>‍<br><span
                                class="span-number">3.</span> Te guiamos por el proceso. <br>‍</p>
                        </div>
                    </tab>
                   

                </tabs>
            </div>



            </b-container>
        </section>

        <section class="section  darkbg">
            <b-container>
                <div class="section-header">
                    <h3 class="section-header__title ">¿Necesitas más ayuda?</h3>
                    <h3 class="section-header__subtitle  pd-b16">Aquí te damos algunas respuestas</h3>
                    <h3 class="section-header__parrafo  pd-t16">
                    <strong class="bold-text-6">Estas son las consultas más frecuentes que recibimos. Si tienes alguna otra, </strong>                        
                    <span class="text-span-16">  llámanos al <a href="tel:015000000" >500 0000</a>
                        </span>
                    </h3>
                </div>
                <nuxt-link class="button  btn-ibk"  to="/interbank/oficial/preguntas-frecuentes">ver Preguntas frecuentes</nuxt-link>
                
            </b-container>
        </section>

        <div class="section">
            <b-container>
                <div class="section-header pd-b32">
                <h3 class="section-header__title">
                    ¿INTERESADO EN CAMBIARTE
                    <br>PERO YA TIENES SEGURO?
                </h3>
                <P class="text-center">Si tus pagos son mensuales, ¡puedes cambiarte!</P>
                </div>
                <div class="section-body pd-t16">
                <b-row>
                    <b-col cols="12" lg="6" class="step01 pd-b16">
                    <div class="box-img img-step1 pd-b16">
                        <img
                        
                        src="./../../static/media/img/ibk/uno.svg"
                        alt="Cambiar Seguro Vehicular"
                        name="Cambiar-Seguro-Vehicular"
                        width="50"
                        class="image-29  mr-2"
                        >
                        <h2 class="heading-7">Ten a la mano la siguiente información:</h2>
                    </div>

                    <div class="descripcion">
                        <ul class="steplist w-list-unstyled">
                        <li class="list-item">
                            <div class="text-block-8">Tu número de DNI o CE</div>
                        </li>
                        <li class="list-item">
                            <div class="text-block-8">Número de póliza de tu seguro actual</div>
                        </li>
                        </ul>
                        <p class="paragraph-7">
                        Normalmente, el número de póliza está en la parte superior de la primera página de
                        tu póliza.
                        </p>
                    </div>
                    </b-col>

                    <b-col cols="12" lg="6" class="step02 pd-b16">
                    <div class="box-img img-step2 pd-b16">
                        <img src="./../../static/media/img/ibk/dos.svg" width="50" alt="icon step 2"  class="mr-2">
                        <h2 class="heading-7">Envía un correo a tu aseguradora o corredor</h2>
                    </div>

                    <div class="row">
                        <div class="steptxt col-12">
                        <p class="paragraph-7 descripcion pd-b16">
                            Puedes descargar esta plantilla, llenarla con tus datos y enviarla para anular tu
                            póliza:
                        </p>
                        </div>
                    </div>
                    </b-col>
                    <b-col class="pd-t16">
                    <a href="https://www.interseguro.pe/vehicular/resources/mail/cambiateInterseguro/Carta_Cancelacio%CC%81n_de_Seguro.pdf" target="_blank" rel="noopener" class="button  btn-ibk">Descargar plantilla</a>
                    </b-col>
                </b-row>
                </div>
            </b-container>
            </div>
            <div class="section cambio">
            <b-container>
                <h3 class="section-header__subtitle text-center">¡Y listo!</h3>
                <br>
                <p class="section-header__parrafo listo text-center pd-b16">
                Luego de enviar el correo, no sigas con los pagos mensuales,
                de forma que la póliza se anulará automáticamente. Al recibir confirmación de la aseguradora, ya estás listo para comprar tu seguro con nosotros.
                </p>
            </b-container>
            </div>
    </div>
</template>
<script>
export default {
    layout: 'InterbankHome',
    props: [''],
    data () {
        return {
            urlpdf: "",
        }
    },
  
    methods: {
        tabClicked (selectedTab) {
        },
        tabChanged (selectedTab) {
        },
        PaginaVista(){
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'pagina_vista',
                'page-url': '/vehicular/como-lo-uso', 
                'page-title': 'Como Lo Uso'
            });
        }

    },

    mounted: function () {
        if (document.location.hostname == "www.interseguro.pe"){
            fbq('track', 'ViewContent', {
                ViewContentmododeuso: 'ViewContentmododeuso'
            })
        }else{
        }
        this.urlpdf = require('./../../static/media/documentos/FAQs.pdf')
        this.PaginaVista()
        // var check = document.getElementById("nav-checkbox")
        // check.checked = false

        var div = document.getElementById("capa")
    
    }
}
</script>
<style lang="scss" scope>

.heading-7{
    font-family: 'Geometria Medium';
    font-size: 20px;
}
.section-header__title {
    color: #333333;
    font-family: 'Geometria Medium';
    font-size: 24px;
}
.section-header__parrafo{
    font-family: 'Montserrat Medium';
}
.section-header__subtitle {
    font-family: 'Montserrat Regular';
    color: #333;
    font-size: 16px;
    text-align: center;
}
.section-header__parrafo strong {
    font-family: 'Montserrat Regular';

}
ul.steplist.w-list-unstyled {
    padding-left: 56px;
}

.cambio{
    background: #EBFBF1;
    color: #00C450;
    p{
        color: #00C450;
    }
    h3{
        color: #00C450;
    }
}
.btn-ibk{
    background: #00C450;
    border-radius: 4px;
    font-family: 'Geometria Medium';
    font-weight: normal;
    &:hover{
        color: #fff;
    }
}
.section-header__title {
    color: #333333;
}

.como-lo-uso .span-number {
    color: #00C450;
}

.como-lo-uso{
    padding-bottom: 0; 
    padding-top: 120px;
    p{
        color: #333333;
    }
}
.tabs-content__panel--parrafo{
    padding-top: 24px;
    font-size: 14px;
}
.tabs-component {
  margin: 4em 0;
    a:hover {
        color: #333;
        text-decoration: none;
    }
    li{
        text-decoration: none;
    }
}
.with-shape-second{
    padding-top: 0; 
}
.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
  padding-inline-start: 0px;
  padding-left: 0;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
    z-index: 2;
    transform: translateY(0);
    border-bottom-color: #00C450;
    background-color: #EBFBF1;
    color: #333
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {
  .tabs-component-tab {
    margin-right: .5em;
    transform: translateY(2px);
    transition: transform .3s ease;
    font-size: 14px;
    cursor: pointer;
    margin-right: 2px;
    margin-left: 2px;
    border-bottom: 3px solid #e1e1e1;
    background-color: #fafafc;
  }

  .tabs-component-tab.is-active {
    z-index: 2;
    transform: translateY(0);
    border-bottom-color: #00C450;
    background-color: #00C4501a;
    color: #333;
    left: 0;    
    
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
}

.tabs-component-panel{
    padding-top: 50px
}
@media (min-width: 992px){
    .section-header__subtitle {
        font-family: 'Geometria Bold';
        color: #333;
    }
    .section-header__title {
        color: #333333;
        font-family: 'Geometria Medium';
        font-size: 44px;
    }
    .como-lo-uso{
        padding-top: 120px;
    }
    .darkbg {
        padding-top: 5%;
    }
    .tabs-content__panel--parrafo {
        font-size: 16px;
    }
    .heading-7{
        font-size: 26px;
    }
}

</style>
