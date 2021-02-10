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
  layout: "InterseguroHome",
   data() {
    return {
      TextoTab: "Pagos", 
      imagenMenu: require("@/static/media/img/root/pf/pagos.png"),
      regresarPrincipal: '/oficial/preguntas-frecuentes/',
      preguntas: [
        {
          title: "¿Dónde puedo comprar el seguro vehicular?", 
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Online.</p>"],
          id: "pregunta4.1",
          identificador: "pregunta4.1"
        },
        {
          title: "¿El pago en cuotas tiene intereses?", 
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>No.</p>"],
          id: "pregunta4.2",
          identificador: "pregunta4.2"
        },
        {
          title: "¿Consideran mi edad para el precio de mi póliza?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>No.</p>"],
          id: "pregunta4.3",
          identificador: "pregunta4.3"
        },
        {
          title: "¿Que pasa si ocurre un accidente y yo no soy el que maneja?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Te cubrimos, siempre y cuando el que maneje cuente con un brevete vigente y no haya tomado alcohol.</p>"],
          id: "pregunta4.4",
          identificador: "pregunta4.4"
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
