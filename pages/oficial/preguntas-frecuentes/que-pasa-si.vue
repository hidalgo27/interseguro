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
      TextoTab: "¿Qué pasa si...?",
      imagenMenu: require("@/static/media/img/root/pf/que_pasa_si.png"),
      regresarPrincipal: '/oficial/preguntas-frecuentes/',
      preguntas: [
        {
          title: "¿Qué pasa si ocurre un incidente y yo no soy el que maneja?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Igual lo cubrimos, siempre y cuando el que maneja cuente con un brevete vigente y no haya tomado alcohol.</p>"],
          id: "pregunta6.1",
          identificador: "pregunta6.1"
        },
        {
          title: "¿Qué pasa si choco contra un carro que no tiene seguro vehicular?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Si es que tú eres responsable del incidente, cubrimos tu carro y el de la otra persona.</p>"],
          id: "pregunta6.2",
          identificador: "pregunta6.2"
        },
        {
          title: "¿Qué pasa con el seguro cuando vendo mi carro?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Si vendes tu carro y tienes que cancelar tu seguro, llámanos al 500 000. Si compras un carro nuevo, ya sabes dónde encontrarnos.</p>"],
          id: "pregunta6.3",
          identificador: "pregunta6.3"
        },
        {
          title: "¿Qué pasa si uso mi carro para brindar servicios de taxi, puedo asegurar mi carro?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Por el momento no. </p>"],
          id: "pregunta6.4",
          identificador: "pregunta6.4"
        },
        {
          title: "¿Qué pasa si tengo más preguntas, a dónde llamo?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Teléfono: 500 0000 </p>"],
          id: "pregunta6.5",
          identificador: "pregunta6.5"
        },
        {
          title: "¿Qué pasa si mi carro es de alto riesgo? ¿Necesito GPS?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Sí. </p>"],
          id: "pregunta6.6",
          identificador: "pregunta6.6"
        },
        {
          title: "¿Qué pasa si quiero anular mi póliza?",
          respuesta: ["<p class='parrafo omnes-medium  pb-2'>Escríbenos o llámanos a: Teléfono: 500 0000 <br>Recuerda que, bajo la cláusula de derecho de arrepentimiento, si decides anular tu póliza luego de los primeros 15 días calendario de haber hecho la compra, tienes derecho a la devolución del total de la prima pagada. <br> En caso la anulación se de después de dicho tiempo, la devolución de prima será únicamente sobre los días de seguro contratados pero no gozados. <br>La devolución se realizará como máximo en 30 días calendario desde la solicitud. </p>"],
          id: "pregunta6.7",
          identificador: "pregunta6.7"
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
  head: {
    title: 'Seguro vehicular: ¿Qué pasa si...?',
    meta: [
      { hid: 'description', name: 'description', content: "¿Qué pasa con tu seguro vehicular si...? Conoce coberturas y exclusiones de tu seguro vehicular y casos frecuentes para resolver tus dudas" },
    ],
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
