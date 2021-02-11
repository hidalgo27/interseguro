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
import BannerPreguntasFrecuentes from "@/components/is/common/BannerPreguntasFrecuentesIbk";
import nuevoTextLinks from "@/components/is/common/TextLinksRenovadoIbk";
import { preguntasFrecuentesGenerico } from 'preguntas-frecuentes-viajes'

export default {
    name: "App",
  layout: "InterbankHome",
   data() {
    return {
      TextoTab: "Siniestros", 
      imagenMenu: require("@/static/media/img/root/pf/siniestros.png"),
      regresarPrincipal: '/oficial/preguntas-frecuentes/',
      preguntas: [
        {
          title: "¿Dónde puedo reportar un siniestro?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Puedes llamarnos al (01) 500 0000.</p>"],
          id: "pregunta5.1",
          identificador: "pregunta5.1"
        },
        {
          title: "¿Cuantos días tengo para reportar un siniestro?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Tres si se trata de daños al vehículo (patrimoniales) y siete si se trata de daños personales (lesiones o fallecimiento).</p>"],
          id: "pregunta5.2",
          identificador: "pregunta5.2"
        },
        {
          title: "¿Puedo llevar mi carro a un taller que no esté en la lista de talleres afiliados?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Sí, el deducible varía en ese caso a $250.</p>"],
          id: "pregunta5.3",
          identificador: "pregunta5.3"
        },
        {
          title: "¿Dónde averiguo el estado de mi siniestro?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Llámanos al 500 000</p>"],
          id: "pregunta5.4",
          identificador: "pregunta5.4"
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
.main{
  padding-top: 75px;
}
    @media screen and (max-width: 540px) {
    .reducirespaciadosection {
      margin-top: 18px;
    }

    }
</style>
