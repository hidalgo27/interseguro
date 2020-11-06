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
      TextoTab: "Ya tengo mi Seguro Vehicular Interseguro", 
      imagenMenu: require("@/static/media/img/root/pf/tengo_is_vehicular.png"),
      regresarPrincipal: '/preguntas-frecuentes/',
      preguntas:  [
          {
            title: "¿Tengo que renovar mi póliza?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>No es necesario, nosotros nos encargamos. La póliza de tu Seguro Vehicular se renovará de manera automática al terminar la vigencia de la póliza actual.</p>"],
            id: "pregunta3.1",
            identificador: "pregunta3.1"
          },
          {
            title: "¿Que pasa con mi Seguro Vehicuilar si vendo mi carro?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Si vendes tu carro y tienes que cancelar tu Seguro Vehicular, llámanos al (01) 500 0000. Si compras un carro nuevo , ya sabes donde encontrarnos.</p>"],
            id: "pregunta3.2",
            identificador: "pregunta3.2"
          },
          {
            title: "¿Cómo cancelo la póliza de mi Seguro Vehicular?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>llámanos al (01) 500 0000. Nuestros asesores te guiarán para que puedas cancelar tu Seguro Vehicular sin inconvenientes.</p>"],
            id: "pregunta3.3",
            identificador: "pregunta3.3"
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
