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
      TextoTab: "Como comprar un Seguro Vehicular", 
      imagenMenu: require("@/static/media/img/root/pf/comprar_is_vehicular.png"),
      regresarPrincipal: '/preguntas-frecuentes/',
      preguntas:  [
          {
            title: "¿Dónde puedo comprar mi seguro vehicular?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Puedes hacerlo en nuestra página web. Haz clic <a target='_blank' href='https://www.interseguro.pe/vehicular/'>aquí</a> para cotizar. Sin embargo, te recomendamos descargar el App Interseguro Vehicular para cotizar un precio a tu medida.</p>"],
            id: "pregunta2.1",
            identificador: "pregunta2.1"
          },
          { title: "¿Aseguran todos los autos?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Nuestro Seguro Vehicular solo aplica para autos de uso particular y con una antigüedad de hasta 10 años.</p>"],
            id: "pregunta2.2",
            identificador: "pregunta2.2"
          },
          {
            title: "¿Puedo comprar mi Seguro Vehicular con fecha de inicio de vigencia posterior?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Si, tu eliges la fecha de inicio de tu cobertura para tu Seguro Vehicular antes de confirmar la compra de tu póliza.</p>"],
            id: "pregunta2.3",
            identificador: "pregunta2.3"
          },
          {
            title: "¿Hay diferencias en elegir pagos mensuales o anuales? ¿Cobran intereses?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>No cobramos intereses. Puedes elegir la frecuencia de pago que más se ajuste a tus necesidades, el precio del Seguro Vehicular seguirá siendo el mismo.</p>"],
            id: "pregunta2.4",
            identificador: "pregunta2.4"
          },
          {
            title: "¿Que pasa si tengo un seguro vehicular vigente?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>No te preocupes, cancelar tu seguro vehicular actual es fácil. Solo tienes que enviarle un correo a tu aseguradora solicitando la cancelación. Acá te dejamos una <a target='_blank' href='https://www.interseguro.pe/vehicular/resources/v2/carta_anulacion.docx'>plantilla</a>  para que completes y la envíes. Luego, ya puedes comprar tu Seguro Vehicular Interseguro.</p>"],
            id: "pregunta2.5",
            identificador: "pregunta2.5"
          },
          {
            title: "¿Cómo calculan el precio de mi Seguro Vehicular?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Es en función al riesgo del modelo de tu auto y su antiguedad. Si quieres conseguir un mejor precio, te invitamos a que descargues nuestro App Interseguro Vehicular donde podrás alcanzar hasta un 50% de descuento.</p>"],
            id: "pregunta2.6",
            identificador: "pregunta2.6"
          },
          {
            title: "¿Mi edad influye en el cálculo del precio?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>No, el precio detu Seguro Vehicular no varía en función a la edad del cliente.</p>"],
            id: "pregunta2.7",
            identificador: "pregunta2.7"
          },
          {
            title: "¿Qué pasa si mi carro es de alto riesgo?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Si tu carro es de algo riesgo lo podemos asegurar pero te solicitaremos la instalación de un dispositivo GPS.</p>"],
            id: "pregunta2.8",
            identificador: "pregunta2.8"
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
