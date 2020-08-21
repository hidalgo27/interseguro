<template lang="pug">
  <div id="app">
    .main(style="background-color: #FFFFFF")
    section#banner-nuevo-preguntas
      BannerPreguntasFrecuentes
    section.mg-top-bot.reducirespaciadosection
      b-container
        b-row.centrar
          b-col.ocultar-div(sm="12" md="4" style="padding-bottom: 30px")
            nuevoTextLinks
          b-col.sinborde(sm="12" md="8")   
            preguntasFrecuentesGenerico(  
              :preguntas="preguntas"
              :itemsMenu="itemsMenu"
              :imagenMenu="imagenMenu"
              :regresarPrincipal="regresarPrincipal"
              :nombrepagina="TextoTab")
  </div>
</template>

<script>
import BannerPreguntasFrecuentes from "@/components/is/common/BannerPreguntasFrecuentes";
import nuevoTextLinks from "@/components/is/common/TextLinksRenovado";
import { preguntasFrecuentesGenerico } from 'preguntas-frecuentes-viajes'

export default {
    name: "App",
  layout: "InterseguroHome",
   data() {
    return {
      TextoTab: "Asistencias de Seguro Vehicular", 
      imagenMenu: require("@/static/media/img/root/pf/asistencias.png"),
      regresarPrincipal: '/preguntas-frecuentes/',
      preguntas:  [
          {
            title: "¿Qué servicios o asistencias incluye mi Seguro Vehicular?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Puedes ver el detalle de las asistencias  <a target='_blank' href='https://www.interseguro.pe/vehicular/cobertura/asistencias'>aquí</a>.</p>" ],
            id: "pregunta5.1",
            identificador: "pregunta5.1"
          },
          {
            title: "¿Hasta donde llegan las asistencias?",
            respuesta:  ["<p class='parrafo omnes-medium  pb-2'>Puedes ver el límite de nuestras asistencias  <a target='_blank' href='https://www.interseguro.pe/vehicular/cobertura/asistencias'>aquí</a>.</p>" ],
            id: "pregunta5.2",
            identificador: "pregunta5.2"
          },
          {
            title: "¿Cuántos choferes de reemplazo incluye mi Seguro Vehicular?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Depende del plan que contrates. Nuestro plan más completo cuenta con 5 choferes de reemplazo al año. Puedes agregar choferes de reemplazo a tu plan por S/ 50.</p>"],
            id: "pregunta5.3",
            identificador: "pregunta5.3"
          },
          {
            title: "¿Cuánto tiempo antes debo agendar mi chofer de reemplazo?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Puedes solicitarlo hasta 2 horas antes.</p>"],
            id: "pregunta5.4",
            identificador: "pregunta5.4"
          }
        ],
      
      itemsMenu: [
        {
          title : "App Interseguro Vehicular",          
          id: "accordeon1",
          to: "app-interseguro-vehicular"
        },
        {
          title: "Como comprar un Seguro Vehicular",          
          id: "accordeon2",
          to: "como-comprar-un-seguro-vehicular"
        },
        {
          title: "Ya tengo mi Seguro Vehicular Interseguro",          
          id: "accordeon3",
          to: "ya-tengo-mi-seguro-vehicular-interseguro"
        },
        {
          title: "Coberturas de Seguro Vehicular",
          id: "accordeon4",
          to: "coberturas-de-seguro-vehicular"
        },
        {
          title: "Asistencias de Seguro Vehicular",
          id: "accordeon5",
          to: "asistencias-de-seguro-vehicular"
        },
        {
          title: "Inspeccion-vehicular",
          id: "accordeon6",
          to: "inspeccion-vehicular"
        },
        
        {
          title: "Siniestros",
          id: "accordeon7",
          to: "siniestros"
        }
      ]
    };
  },
  created() {
    this.$nuxt.$emit("nro-cotizaciones-flag", { flag: true });
  },
  mounted() {
    
  },
  components: {
    preguntasFrecuentesGenerico,
    BannerPreguntasFrecuentes,
    nuevoTextLinks
  },
  methods: {
    
  }
};
</script>

<style scoped>
.main{
  padding-top: 75px;
}
    @media screen and (max-width: 540px) {
    .reducirespaciadosection {
      margin-top: 18px;
    }

    }
</style>
