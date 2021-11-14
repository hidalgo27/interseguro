<template>
  <footer>
    <div class="bg-v-primary py-md-5 mt-5 text-white">

      <div class="w-100 d-md-none">
        <div class="accordion" role="tablist">
          <hr>
          <div no-body class="px-2" v-for="(footer_title, index) in footer" :key="footer_title.id" @click="active_collapse_footer(index)" :class="[active_color_footer === index ? 'footer-collapse' : 'bg-v-primary']">
            <div header-tag="header" role="tab">
              <div v-b-toggle="'accordion-footer-'+index" class="position-relative m-0 py-4 h5" :class="[active_color_footer === index ? 'text-v-primary omnes-medium' : 'text-v-gray']">
                <h6 class="px-2 m-0 small text-white">{{ footer_title.title }}</h6>
                <div class="omnes-semibold position-absolute h2 right-0 bottom-11">
                  <template v-if="active_color_footer === index">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>
                  </template>
                  <template v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                  </template>
                </div>
              </div>
            </div>
            <b-collapse :id="'accordion-footer-'+index" accordion="accordion-footer" role="tabpanel" :visible="index === 0">
              <div class="pb-4 px-2 small" v-for="footer_link in footer_title.links">
                <a :href="footer_link.url" :target="footer_link.target" class="text-white">{{footer_link.name}}</a>
              </div>
            </b-collapse>
            <hr>
          </div>
          <a href="tel:015000000" class="h6 px-3 text-white d-md-none omnes-regular my-4 d-block"><span class=omnes-regular>LLAMANOS</span>: (01) 500 0000</a>
        </div>
      </div>

      <div class="container">
        <div class="row mt-1 align-items-center d-none d-md-flex">
          <div class="col col-md-10">
            <fa icon="envelope" class="mb-0 mr-2 h6"></fa> segurovehicular@interseguro.com.pe
          </div>
          <div class="col-4 col-md-2">
            <img src="@/static/images/logos/logo_is_blanco.svg" alt="">
          </div>
        </div>
        <hr class="my-5 bg-white d-none d-md-flex">
        <div class="row small">
          <div class="col-12 mb-md-0 col-md-9">
            <div class="row d-none d-md-flex">
              <div v-for="footer_title in footer" class="col-3">
                <p class="omnes-semibold mb-3">{{ footer_title.title }}</p>
                <ul class="list-unstyled">
                  <li class="omnes-light mb-3"  v-for="footer_link in footer_title.links">
                    <a target="_blank" class="text-white" href="media/documentos/Condicionado_General.pdf">{{footer_link.name}}</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <div class="col-12 mb-30 mb-md-0 col-md-3 text-left text-md-right">
            <p class="omnes-semibold d-none d-md-block text-md-right mb-3">SÍGUENOS EN:</p>
            <div class="my-md-0 text-center text-md-right">
              <div class="my-4 d-md-none">
                <!--                  <h5 class=""><span class=omnes-regular>LLAMANOS</span>: (01) 500 0000</h5>-->
                <fa icon="envelope" class="mb-0 mr-2 h6"></fa> segurovehicular@interseguro.com.pe
              </div>
              <a class="text-white" href="https://www.facebook.com/interseguro/"><fa :icon="faFacebook" class="h3 ml-3" /></a>
              <a class="text-white" href="https://www.interseguro.pe/blog/"><fa :icon="faBlogger" class="h3 ml-3" /></a>
              <a class="text-white" href="https://www.linkedin.com/company/interseguro-aseguradora/"><fa :icon="faLinkedin" class="h3 ml-3" /></a>
              <a class="text-white" href="https://www.instagram.com/interseguroperu/"><fa :icon="faInstagram" class="h3 ml-3" /></a>
            </div>
            <p class="omnes-semibold d-none text-md-right mt-md-4 d-md-block mb-3">LLÁMANOS:</p>
            <span class="h4 d-none omnes-light text-md-right d-md-block">(01) 500 0000</span>
          </div>
        </div>
      </div>


    </div>
    <div class="text-v-primary text-center small py-4">
      Copyright © 2018 Interseguro. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script>
import { faFacebook, faBlogger, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default {
  name: "FooterPage",
  data() {
    return {
      active_color_footer: 0,
      footer:[
        {
          id: 0,
          title: "SEGURO VEHICULAR",
          links : [
            {
              name: "Condicionado General",
              url: "media/documentos/Condicionado_General.pdf",
              target: '_blank'
            },
            {
              name: "Condicionado Particular",
              url: "media/documentos/Condicionado_Particular.pdf",
              target: '_blank'
            },
            {
              name: "Cláusulas Adicionales",
              url: "media/documentos/Coberturas_Adicionales.pdf",
              target: '_blank'
            },
            {
              name: "Resumen de Producto",
              url: "media/documentos/Resumen_Informativo.pdf",
              target: '_blank'
            },
            {
              name: "Oficio SBS",
              url: "media/documentos/Resolucion-SBS.pdf",
              target: '_blank'
            },
            {
              name: "Cobertura",
              url: "/cobertura/",
              target: ''
            },
            {
              name: "Exclusiones",
              url: "/exclusiones/",
              target: ''
            },
            {
              name: "Preguntas frecuentes",
              url: "/oficial/preguntas-frecuentes/",
              target: ''
            },
          ],
        },
        {
          id: 1,
          title: "NOSOTROS",
          links : [
            {
              name: "Clasificación de Riesgos",
              url: "https://www.interseguro.pe/informacion-financiera",
              target: '_blank'
            },
            {
              name: "Comprobantes Electrónicos",
              url: "http://asp403r.paperless.com.pe/FacturaInterseguro/",
              target: '_blank'
            },
            {
              name: "Gobierno Corporativo",
              url: "https://www.interseguro.pe/gobierno-corporativo",
              target: '_blank'
            },
            {
              name: "Memoria Anual",
              url: "https://www.interseguro.pe/memoria-anual",
              target: '_blank'
            },

          ],
        },
        {
          id: 2,
          title: "SEGUROS",
          links : [
            {
              name: "Rentas Pensiones",
              url: "https://www.interseguro.pe/otros-rentas",
              target: '_blank'
            },
            {
              name: "Seguros de Vida",
              url: "https://www.interseguro.pe/otros-vida",
              target: '_blank'
            },
            {
              name: "SOAT",
              url: "https://www.interseguro.pe/soat/",
              target: '_blank'
            },
            {
              name: "Viajes",
              url: "https://www.interseguro.pe/viajes/",
              target: '_blank'
            },
          ],
        },
        {
          id: 3,
          title: "INFORMACIÓN DE INTERÉS",
          links : [
            {
              name: "Servicio al Cliente",
              url: "https://www.interseguro.pe/asesorate/servicio-cliente",
              target: '_blank'
            },
            {
              name: "Portal del Usuario SBS",
              url: "http://www.sbs.gob.pe/usuarios/",
              target: '_blank'
            },
            {
              name: "Siniestros Rechazados",
              url: "https://www.interseguro.pe/ayuda/transparencia/siniestros-rechazados",
              target: '_blank'
            },
            {
              name: "Libro de Reclamaciones",
              url: "https://app.interseguro.com.pe/LibroReclamaciones/",
              target: '_blank'
            },
            {
              name: "Promociones",
              url: "/tyc",
              target: '_blank'
            }
          ]
        },
      ],
    }
  },
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
  methods: {
    active_collapse_footer(id){
      this.active_color_footer = id
    },
  }
}
</script>
