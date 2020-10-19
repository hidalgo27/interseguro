<template>
    <div>
        <section class="section s como-lo-uso">
            <b-container>
            <div class="section-header">
                <h1 class="section-header__title">Cómo <span class="span-primario">lo uso</span></h1>
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
                                2.</span> Mándanos un mensaje por Whatsapp al 977822185 contando lo sucedido.<br>‍<br>
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
                            salvo.<br>‍<br><span class="span-number">2.</span> Llámanos al (01) 500 0000 o mándanos un mensaje por Whatsapp
                            al 977822185 contando lo sucedido<br>‍<br><span class="span-number">3.</span> Si el otro carro involucrado
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
                                salvo.<br>‍<br><span class="span-number">2.</span> Mándanos un mensaje por Whatsapp al 977822185 contando
                                lo sucedido.<br>‍<br><span class="span-number">3.</span> Llámanos al (01) 500 0000 o mándanos un mensaje
                                por Whatsapp al 977822185 contando lo sucedido.<br>‍<br><span class="span-number">4.</span> Una persona del
                                equipo llegará a ayudarte inmediatamente.<br>‍<br><span class="span-number">5.</span> Te ayudamos
                                a presentar una denuncia policial en la comisaría que corresponda y a pasar el dosaje etílico de ser necesario.
                                <br>‍<br><span class="span-number">6.</span> Si pasan 30 días de haber presentado la denuncia y tu carro
                                aparece, te ayudamos a recuperarlo en la comisaría que corresponda y llevamos tu carro al taller.<br>‍<br><span
                                class="rem text-span-15"> Recuerda que con nosotros tienes vehículos de reemplazo que puedes usar hasta por 30 días.</span></p>
                        </div>
                    </tab>
                    <tab name="Asistencia mecánica y otros servicios" >
                        <div>
                            <h2 class="tabs-content__panel--title  text-center"><strong>Asistencia mecánica y otros servicios</strong></h2>
                            <p class="tabs-content__panel--parrafo"><span class="span-number">1. </span>Mándanos un mensaje por Whatsapp
                                al 977822185.
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
                    <h3 class="section-header__title ">¿Necesitas más <span class="span-primario">ayuda?</span></h3>
                    <h3 class="section-header__subtitle  pd-b16">Aquí te damos algunas respuestas</h3>
                    <h3 class="section-header__parrafo  pd-t16">
                    <strong class="bold-text-6">Estas son las consultas más frecuentes que recibimos. Si tienes alguna otra, escríbenos
                        por  </strong>                        
                    <span class="text-span-16">
                        <strong class="span-primario">Whatsapp al 
                            <a href="https://api.whatsapp.com/send?phone=51977822185&amp;text=Hola!%20Como%20te%20puedo%20ayudar?" target="_blank" rel="noopener"> 977 822 185</a>
                        </strong>  o<strong class="span-primario"> llámanos al <a href="tel:015000000" class="span-primario">500 0000</a></strong>
                        <!-- <strong  class="span-primario" ><a target="_black" class="main-nav__contact--icon main-nav__contact--icon--whatsapp" data-action="share/whatsapp/share" href="https://api.whatsapp.com/send?phone=51977822185&amp;text=Hola%20Interseguro,%20quiero%20agendar%20una%20reunión.">977822185</a></strong> -->
                        </span><strong class="bold-text-6">.

                        </strong>
                    </h3>
                </div>
                <nuxt-link class="button"  to="/oficial/preguntas-frecuentes">ver Preguntas frecuentes</nuxt-link>
                
            </b-container>
        </section>
    </div>
</template>
<script>
export default {
    layout: 'InterseguroHome',
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
        this.urlpdf = "require('../static/media/documentos/FAQs.pdf')"
        this.PaginaVista()
        // var check = document.getElementById("nav-checkbox")
        // check.checked = false

        var div = document.getElementById("capa")
    
    }
}
</script>
<style lang="scss">
.como-lo-uso{
    padding-bottom: 0; 
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
    border-bottom-color: #00ADEE;
    background-color: #00ADEE1a;
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
    border-bottom-color: #00ADEE;
    background-color: #00ADEE1a;
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
    .darkbg {
        padding-top: 5%;
    }
    .tabs-content__panel--parrafo {
        font-size: 16px;
    }
}

</style>
