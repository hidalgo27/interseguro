<template lang="pug">
  <div id="app">
    .main(style="background-color: #FFFFFF")
    section#banner-nuevo-preguntas
    BannerPreguntasFrecuentesIbk
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
import BannerPreguntasFrecuentesIbk from "@/components/is/common/BannerPreguntasFrecuentesIbk";
import nuevoTextLinks from "@/components/is/common/TextLinksRenovadoIbk";
import { preguntasFrecuentesGenerico } from 'preguntas-frecuentes-viajes'

export default {
    name: "App",
  layout: "InterbankHome",
   data() {
    return {
      TextoTab: "Cobertura", 
      imagenMenu: require("@/static/media/img/root/pf/cobertura.png"),
      regresarPrincipal: '/oficial/preguntas-frecuentes/',
      preguntas:  [
          {
            title: "¿Cuándo inicia mi cobertura?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Desde la confirmación de pago.</p>"],
            id: "pregunta1.1",
            identificador: "pregunta1.1"
          },
          {
            title: "¿Cuáles son las coberturas principales?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Accidente de tránsito, pérdida total, robo o hurto, incendio, rotura de lunas, riesgos de la"+
              "naturaleza, huelgas o vandalismo, accesorios, responsabilidad civil frente a ocupantes y" +
              "terceros, invalidez permanente, gastos de curación, gastos de sepelio, muerte de ocupantes. </p>"],
            id: "pregunta1.2",
            identificador: "pregunta1.2"
          },
          {
            title: "¿Cuándo se considera pérdida total para un vehículo? ",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Cuando los daños superan el 75% del valor del carro.</p>"],
            id: "pregunta1.3",
            identificador: "pregunta1.3"
          },
          {
            title: "¿Hasta dónde llega mi cobertura?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Cuentas con cobertura nacional.</p>"],
            id: "pregunta1.4",
            identificador: "pregunta1.4"
          },
          {
            title: "¿Cuáles son los límites geográficos de las asistencias?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Chosica, Cieneguilla, Ancón y 300 km al Sur.</p>"],
            id: "pregunta1.5",
            identificador: "pregunta1.5"
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
    BannerPreguntasFrecuentesIbk,
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
