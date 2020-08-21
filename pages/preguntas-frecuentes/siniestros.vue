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
      TextoTab: "Siniestros", 
      imagenMenu: require("@/static/media/img/root/pf/siniestros.png"),
      regresarPrincipal: '/preguntas-frecuentes/',
      preguntas:  [
          {
            title: "¿Dónde puedo reportar un siniestro?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Puedes escribirnos por WhatsApp al 977 822 185 o llamarnos al 500 0000.</p>"],
            id: "pregunta7.1",
            identificador: "pregunta7.1"
          },
          {
            title: "¿Cuantos días tengo para reportar un siniestro?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Tres días si solo hay daños al vehículo y siete días si hubiesen lesiones a los ocupantes.</p>"],
            id: "pregunta7.2",
            identificador: "pregunta7.2"
          },
          {
            title:"¿Qué pasa si choqué con otro auto?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Si tu eres el responsable del incidente, cubirmos los gastos de reparación de tu auto y del tercero.</p>"],
            id: "pregunta7.3",
            identificador: "pregunta7.3"
          },
          {
            title: "¿Puedo llevar mi auto a un taller que no esté en la lista de talleres afiliados?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Si, puedes hacerlo, pero ten en cuenta que el deducible en ese caso sería $250 como mínimo.</p>"],
            id: "pregunta7.4",
            identificador: "pregunta7.4"
          },
          {
            title: "¿Cuánto tengo que pagar por taller?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Dependerá del taller al cual llevas tu auto y del valor del siniestro. Puedes revisar el detalle <a target='_blank' href='https://www.interseguro.pe/vehicular/cobertura/'>aquí</a>.</p>"],
            id: "pregunta7.5",
            identificador: "pregunta7.5"
          },
          {
            title: "¿Dónde averiguo el estado de mi siniestro?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Escríbenos por WhatsApp al 977822185.</p>"],
            id: "pregunta7.6",
            identificador: "pregunta7.6"
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
          title: "Inspección Vehicular",
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
