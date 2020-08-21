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
      TextoTab: "Inspección Vehicular", 
      imagenMenu: require("@/static/media/img/root/pf/inspeccion.png"),
      regresarPrincipal: '/preguntas-frecuentes/',
      preguntas:  [
          {
            title: "¿Necesito hacer la inspección antes de asegurar el auto?",
            respuesta:["<p class='parrafo omnes-medium  pb-2'>No es necesario hacerla antes de comprar tu seguro vehicular. Cuando termines la compra nosotros te contactaremos para realizar el proceso de inspección y verificar las condiciones de tu auto.</p>"],
            id: "pregunta6.1",
            identificador: "pregunta6.1"
          },
          {
            title: "¿Porque hacen una inspección? ¿Que buscan entender?",
            respuesta:["<p class='parrafo omnes-medium  pb-2'>Nos sirve para validar que los datos del auto consignados en la compra sean correctos y que las características de tu auto están alineadas a las condiciones del producto (uso particular y antigüedad menor o igual a 10 años). También validamos las condiciones con las que se está asegurando tu auto.</p>"],
            id: "pregunta6.2",
            identificador: "pregunta6.2"
          },
          {
            title: "¿Cómo hago la inspección vehicular?",
            respuesta:["<p class='parrafo omnes-medium  pb-2'>La inspección vehicular es digital (por Whatsapp); no es necesario que sea presencial a menos que lo solicites. Una vez concluida la compra te contactaremos por Whatsapp y te enviaremos un link donde podrás adjuntar fotos y responder algunas preguntas sobre tu auto. El proceso tarda 5 minutos. </p>"],
            id: "pregunta6.3",
            identificador: "pregunta6.3"
          },
          {
            title: "¿Cómo coordino mi inspección vehicular?",
            respuesta:["<p class='parrafo omnes-medium  pb-2'>Nosotros nos pondremos en contacto contigo al finalizar la compra de tu Seguro Vehicular.</p>"],
            id: "pregunta6.4",
            identificador: "pregunta6.4"
          },
          {
            title: "¿Cuántos días tengo para realizar mi inspección?",
            respuesta:["<p class='parrafo omnes-medium  pb-2'>Tienes 15 días. Al ser digital, puedes hacer tu inspección los fines de semana y feriados.</p>"],
            id: "pregunta6.5",
            identificador: "pregunta6.5"
          },
          {
            title: "¿A qué hora puedo hacer mi inspección?",
            respuesta:["<p class='parrafo omnes-medium  pb-2'>Puedes hacerlo a cualquier hora desde el link que te envíemos.</p>"],
            id: "pregunta6.6",
            identificador: "pregunta6.6"
          },
          {
            title: "¿Qué pasa si no hago la inspección?",
            respuesta:["<p class='parrafo omnes-medium  pb-2'>Al no tener certeza de los datos consignados y las condiciones de tu auto, no te podremos asegurar.</p>"],
            id: "pregunta6.7",
            identificador: "pregunta6.7"
          },
          {
            title: "¿Qué pasa si no paso la inspección?",
            respuesta:["<p class='parrafo omnes-medium  pb-2'>No podremos asegurar tu auto.</p>"],
            id: "pregunta6.8",
            identificador: "pregunta6.8"
          },
          {
            title: "¿Porque no podría pasar la inspección?",
            respuesta:["<p class='parrafo omnes-medium  pb-2'>El auto no es de uso particular, tu carro está en condiciones muy bajas o tienes un historial con muchos siniestros.</p>"],
            id: "pregunta6.9",
            identificador: "pregunta6.9"
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
