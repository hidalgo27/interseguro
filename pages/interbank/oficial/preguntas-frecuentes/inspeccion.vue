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
      TextoTab: "Inspección", 
      imagenMenu: require("@/static/media/img/root/pf/inspeccion.png"),
      regresarPrincipal: '/oficial/preguntas-frecuentes/',
      preguntas: [
        {
          title: "¿Cuántos días tengo para hacer mi inspección?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'> Diez. Puedes también hacer tu inspección los fines de semana y feriados. </p>"],
          id: "pregunta3.1",
          identificador: "pregunta3.1"
        },
        {
          title: "¿Cómo hago mi inspección?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'> Toda la inspección será digital (por Whatsapp), sin necesidad que alguien tenga que ir a tu casa. Enviando fotos y respondiendo dos preguntas sobre tu carro podrás acabar tu inspección en menos de 10 minutos </p>"],
          id: "pregunta3.2",
          identificador: "pregunta3.2"
        },
        {
          title: "¿En qué horarios puedo hacer mi inspección?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'> De lunes a viernes de 8:00am hasta las 21:00pm y los sábado y domingos de 10:00am a 19:00pm </p>"],
          id: "pregunta3.3",
          identificador: "pregunta3.3"
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
