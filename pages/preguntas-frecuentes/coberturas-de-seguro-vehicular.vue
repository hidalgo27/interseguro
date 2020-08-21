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
      TextoTab: "Coberturas de Seguro Vehicular", 
      imagenMenu: require("@/static/media/img/root/pf/cobertura.png"),
      regresarPrincipal: '/preguntas-frecuentes/',
      preguntas:  [
          {
            title: "¿Qué coberturas incluye el Seguro Vehciular?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Nuestro Seguro Vehicular tiene varios planes. El más completo es contra Todo Riesgo e incluye coberturas de pérdida total por robo o choques. Puedes revisar el detalle de nuestras coberturas por plan <a target='_blank' href='https://www.interseguro.pe/vehicular/cobertura'>aquí</a>.</p>"],
            id: "pregunta4.1",
            identificador: "pregunta4.1"
          },
          {
            title: "¿Hasta donde llega mi cobertura?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Tenemos cobertura a nivel nacional.</p>"],
            id: "pregunta4.2",
            identificador: "pregunta4.2"
          },
          {
            title: "¿Que pasa si choco contra un auto que no tiene seguro vehicular?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Si tu eres el responsable del incidente, cubrimos los gastos de reparación de tu auto y del tercero.</p>"],
            id: "pregunta4.3",
            identificador: "pregunta4.3"
          },
          {
            title: "¿Que pasa si ocurre un accidente y yo no soy el que maneja?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Te cubrimos, siempre y cuando el que maneje cuente con un brevete vigente y no haya tomado alcohol.</p>"],
            id: "pregunta4.4",
            identificador: "pregunta4.4"
          },
          {
            title: "¿Cuando se considera pérdida total para un vehículo?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Cuando los daños superan el 75% del valor del auto. Si tu carro vale US$ 20,000 y los daños son por US$ 15,000 o más, se considera pérdida total.</p>"],
            id: "pregunta4.5",
            identificador: "pregunta4.5"
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
