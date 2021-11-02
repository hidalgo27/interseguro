<template>
  <footer>
    <div class="bg-v-primary py-5 mt-5 text-white">
      <div class="container">
        <div class="row mt-1 align-items-center">
          <div class="col col-md-10">
            <fa icon="envelope" class="mb-0 mr-2 h6"></fa> segurovehicular@interseguro.com.pe
          </div>
          <div class="col-4 col-md-2">
            <img src="@/static/images/logos/logo_is_blanco.svg" alt="">
          </div>
        </div>
        <hr class="my-5 bg-white">
        <div class="row small">
          <div class="col-12 mb-30 mb-md-0 col-md-9">
            <div class="row">
              <div class="col-6 mb-30 mb-md-0 col-md">
                <p class="omnes-semibold mb-3">SEGURO VEHICULAR</p>
                <ul class="list-unstyled">
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="media/documentos/Condicionado_General.pdf">Condicionado General</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="media/documentos/Condicionado_Particular.pdf">Condicionado Particular</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="media/documentos/Coberturas_Adicionales.pdf">Cláusulas Adicionales</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="media/documentos/Resumen_Informativo.pdf">Resumen de Producto</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="media/documentos/Resolucion-SBS.pdf">Oficio SBS</a>
                  </li>
                  <li class="omnes-light mb-3">
<!--                    Cobertura-->
                    <nuxt-link class="text-white" rel="noopener" to="/cobertura/">Cobertura</nuxt-link>
                  </li>
                  <li class="omnes-light mb-3">
                    <nuxt-link class="text-white" rel="noopener" to="/exclusiones">Exclusiones</nuxt-link>
                  </li>
                  <li class="omnes-light mb-3">
                    <nuxt-link class="text-white" rel="noopener" to="/oficial/preguntas-frecuentes/">Preguntas frecuentes</nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="col-6 mb-30 mb-md-0 col-md">
                <p class="omnes-semibold mb-3">NOSOTROS</p>
                <ul class="list-unstyled">
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="https://www.interseguro.pe/informacion-financiera">Clasificación de Riesgos</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="http://asp403r.paperless.com.pe/FacturaInterseguro/">Comprobantes Electrónicos</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="https://www.interseguro.pe/gobierno-corporativo">Gobierno Corporativo</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="https://www.interseguro.pe/memoria-anual">Memoria Anual</a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <p class="omnes-semibold mb-3">SEGUROS</p>
                <ul class="list-unstyled">
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="https://www.interseguro.pe/otros-rentas">Rentas y Pensiones</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="https://www.interseguro.pe/otros-vida">Seguros de Vida</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="https://www.interseguro.pe/soat/">SOAT</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="https://www.interseguro.pe/viajes/">Viajes</a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md">
  <!--              <h3 class="h6 omnes-medium mb-3">NFORMACIÓN DE INTERÉS</h3>-->
                <p class="omnes-semibold mb-3">INFORMACIÓN DE INTERÉS</p>
                <ul class="list-unstyled">
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="https://www.interseguro.pe/asesorate/servicio-cliente">Servicio al Cliente</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="http://www.sbs.gob.pe/usuarios/">Portal del Usuario SBS</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="https://www.interseguro.pe/ayuda/transparencia/siniestros-rechazados">Siniestros Rechazados</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <a target="_blank" class="text-white" href="https://app.interseguro.com.pe/LibroReclamaciones/">Libro de Reclamaciones</a>
                  </li>
                  <li class="omnes-light mb-3">
                    <router-link class="text-white" to="/tyc">Promociones</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 mb-30 mb-md-0 col-md-3 text-left text-md-right">
            <p class="omnes-semibold mb-3">SÍGUENOS EN:</p>
            <a class="text-white" href="https://www.facebook.com/interseguro/"><fa :icon="faFacebook" class="h3 ml-3" /></a>
            <a class="text-white" href="https://www.interseguro.pe/blog/"><fa :icon="faBlogger" class="h3 ml-3" /></a>
            <a class="text-white" href="https://www.linkedin.com/company/interseguro-aseguradora/"><fa :icon="faLinkedin" class="h3 ml-3" /></a>
            <a class="text-white" href="https://www.instagram.com/interseguroperu/"><fa :icon="faInstagram" class="h3 ml-3" /></a>
            <p class="omnes-semibold mb-3">LLÁMANOS:</p>
            <span class="h4">(01) 500 0000</span>
          </div>
        </div>
      </div>
    </div>
    <div class="text-v-primary text-center py-4">
      Copyright © 2018 Interseguro. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script>
import { faFacebook, faBlogger, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default {
  name: "FooterPage",
  computed: {
    fas () {
      return fas
    },
    faFacebook () {
      return faFacebook
    },
    faBlogger () {
      return faBlogger
    },
    faLinkedin () {
      return faLinkedin
    },
    faInstagram () {
      return faInstagram
    },
  },
}
</script>

<style scoped>

</style>
