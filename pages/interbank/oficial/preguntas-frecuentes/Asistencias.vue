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
import nuevoTextLinks from "@/components/is/common/TextLinksRenovado2";
import { preguntasFrecuentesGenerico } from 'preguntas-frecuentes-viajes'

export default {
  name: "App",
  layout: "InterbankHome",
   data() {
    return {
      TextoTab: "Asistencias", 
      imagenMenu: require("@/static/media/img/root/pf/asistencias.png"),
      regresarPrincipal: '/oficial/preguntas-frecuentes/',
      preguntas:  [
          {
            title: "¿Qué servicios incluye?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Chofer de reemplazo, asistencia mecánica, ambulancia, grúa, vehículo de reemplazo, asistencia legal. </p>"],
            id: "pregunta2.1",
            identificador: "pregunta2.1"
          },
          { 
            title: "¿Cuántos choferes de reemplazo tengo?", 
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Cinco</p>"],
            id: "pregunta2.2",
            identificador: "pregunta2.2"
          },
          {
            title: "¿Cuánto tiempo antes debo agendar mi chofer de reemplazo?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>1 hora.</p>"],
            id: "pregunta2.3",
            identificador: "pregunta2.3"
          }
        ],
      
      itemsMenu: [
        {
          title : "Asistencias",          
          id: "accordeon1",
          to: "inspeccion"
        },
        {
          title : "Cobertura",          
          id: "accordeon2",
          to: "cobertura"
        },
        {
          title : "Inspección",          
          id: "accordeon3",
          to: "inspeccion"
        },
        {
          title : "Pagos",          
          id: "accordeon4",
          to: "pagos"
        },
        {
          title : "Que pasa si",          
          id: "accordeon5",
          to: "que-pasa-si"
        },
        {
          title : "Siniestros",          
          id: "accordeon6",
          to: "siniestros"
        },
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
body{
  background: red;
}
  .main{
    padding-top: 75px;
  }
    @media screen and (max-width: 540px) {
    .reducirespaciadosection {
      margin-top: 18px;
    }

    }
</style>
