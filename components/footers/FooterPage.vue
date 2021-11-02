<template>
  <footer>
    <div class="bg-v-primary py-5 mt-5 text-white">
      <div class="container">
        <div class="row mt-1 align-items-center">
          <div class="col">
            <fa icon="envelope" class="mb-0 mr-2 h6"></fa> segurovehicular@interseguro.com.pe
          </div>
          <div class="col-2">
            <img src="@/static/images/logos/logo_is_blanco.svg" alt="">
          </div>
        </div>
        <hr class="my-5 bg-white">
        <div class="row small">
          <div class="col-9">
            <div class="row">
              <div class="col">
                <p class="omnes-semibold mb-3">SEGURO VEHICULAR</p>
                <ul class="list-unstyled">
                  <li class="omnes-light mb-3">
                    Condicionado General
                  </li>
                  <li class="omnes-light mb-3">
                    Condicionado Particular
                  </li>
                  <li class="omnes-light mb-3">
                    Cláusulas Adicionales
                  </li>
                  <li class="omnes-light mb-3">
                    Resumen de Producto
                  </li>
                  <li class="omnes-light mb-3">
                    Oficio SBS
                  </li>
                  <li class="omnes-light mb-3">
                    Cobertura
                  </li>
                  <li class="omnes-light mb-3">
                    Exclusiones
                  </li>
                  <li class="omnes-light mb-3">
                    Preguntas frecuentes
                  </li>
                </ul>
              </div>
              <div class="col">
                <p class="omnes-semibold mb-3">NOSOTROS</p>
                <ul class="list-unstyled">
                  <li class="omnes-light mb-3">
                    Clasificación de Riesgos
                  </li>
                  <li class="omnes-light mb-3">
                    Comprobantes Electrónicos
                  </li>
                  <li class="omnes-light mb-3">
                    Gobierno Corporativo
                  </li>
                  <li class="omnes-light mb-3">
                    Memoria Anual
                  </li>
                </ul>
              </div>
              <div class="col">
                <p class="omnes-semibold mb-3">SEGUROS</p>
                <ul class="list-unstyled">
                  <li class="omnes-light mb-3">
                    Rentas y Pensiones
                  </li>
                  <li class="omnes-light mb-3">
                    Seguros de Vida
                  </li>
                  <li class="omnes-light mb-3">
                    SOAT
                  </li>
                  <li class="omnes-light mb-3">
                    Viajes
                  </li>
                </ul>
              </div>
              <div class="col">
  <!--              <h3 class="h6 omnes-medium mb-3">NFORMACIÓN DE INTERÉS</h3>-->
                <p class="omnes-semibold mb-3">INFORMACIÓN DE INTERÉS</p>
                <ul class="list-unstyled">
                  <li class="omnes-light mb-3">
                    Servicio al Cliente
                  </li>
                  <li class="omnes-light mb-3">
                    Portal del Usuario SBS
                  </li>
                  <li class="omnes-light mb-3">
                    Siniestros Rechazados
                  </li>
                  <li class="omnes-light mb-3">
                    Libro de Reclamaciones
                  </li>
                  <li class="omnes-light mb-3">
                    Promociones
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col text-right">
            <p class="omnes-semibold mb-3">SÍGUENOS EN:</p>
            <fa :icon="faFacebook" class="h3 ml-3" />
            <fa :icon="faBlogger" class="h3 ml-3" />
            <fa :icon="faLinkedin" class="h3 ml-3" />
            <fa :icon="faInstagram" class="h3 ml-3" />
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
