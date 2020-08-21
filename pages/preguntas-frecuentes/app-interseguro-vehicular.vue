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
      TextoTab: "App Interseguro Vehicular", 
      imagenMenu: require("@/static/media/img/root/pf/app_is_vehicular.png"),
      regresarPrincipal: '/preguntas-frecuentes/',
      preguntas:  [
          {
            title: "¿Para que sirve el app de Interseguro Vehicular?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Con el app de Interseguro Vehicular vamos a conocer tus hábitos de manejo. Luego, con esta información, te enviaremos una cotización para tu Seguro Vehicular que se ajuste a tu estilo de manejo.</p>"],
            id: "pregunta1.1",
            identificador:   "pregunta1.1"
          },
          {
            title: "¿Cómo cotizo mi seguro vehicular por el app Interseguro Vehicular?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>1. Descarga nuestro App desde el PlayStore o AppStore. Encuéntranos como Interseguro Vehicular. <br> 2. Regístrate usando solo tu placa en menos de un minuto.<br> 3. Maneja como lo harías normalmente - no olvides llevar tu teléfono contigo. <br> 4. Desde tu celular recogeremos data sobre tus hábitos de manejo y luego de algunas semanas te enviaremos una cotización personalizada para tu Seguro Vehicular.</p>"],
            
            id: "pregunta1.2",
            identificador:   "pregunta1.2"
          },
          {
            title: "¿Por qué descargar el app?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Este nuevo servicio te permite, sin costo adicional, conseguir un Seguro Vehicualr con un precio a tu medida. Si manejas bien, puedes conseguir un descuento de hasta 50%. Un Seguro Vehicular que premia a buenos conductores.</p>"],
            id: "pregunta1.2",
            identificador:   "pregunta1.12"
          },
          {
            title: "¿Qué es lo que miden con el app?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Medimos una serie de patrones asociados a tus hábitos de manejo: velocidad, fuerza de frenado, rapidez en giros, distancia recorrida, horas de manejo y nivel de concentración.</p>"],
            id: "pregunta1.3",
            identificador:   "pregunta1.3"
          },
          {
            title: "¿Tengo que descargar el app para comprar un Seguro Vehicular?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>No es necesario. Si necesitas un Seguro Vehicular en menos de 3 minutos, puedes hacer la compra sin descargar el app; sin embargo, no podrás acceder a un descuento usando el app.</p>"],
            id: "pregunta1.4",
            identificador:   "pregunta1.4"
          },
          {
            title: "¿Puedo cotizar un Seguro Vehicular sin descargar el app?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Si, puedes hacerlo cotizando aquí. Sin embargo, te recomendamos cotizar a través de nuestro app para que obtengas un precio más justo.</p>"],
            id: "pregunta1.5",
            identificador:   "pregunta1.5"
          },
          {
            title: "¿El app tiene que estar abierto mientras manejo para que funcione?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>No es necesario. Al ingresar por primera vez te solicitaremos permisos de ubicación y de movimiento que nos ayudarán a recoger data en todo momento para la cotización de tu Seguro Vehicular.</p>"],
            id: "pregunta1.6",
            identificador:   "pregunta1.6"
          },
          {
            title: "¿El app va a consumir rápido mi batería del celular?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Hemos hecho un gran esfuerzo para asegurarnos de que nuestro app consuma muy poca batería extra. Es un pequeño precio a pagar por tener mejores descuentos en tu Seguro Vehicular desde tu celular.</p>"],
            id: "pregunta1.7",
            identificador:   "pregunta1.7"
          },
          {
            title: "Si ya compré el Seguro Vehicular con el descuento del app, ¿tengo que seguir usándolo?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>No es necesario. Con la información recogida para la cotización de tu Seguro Vehicular es suficiente para mantener el precio ofrecido por todo un año.</p>"],
            id: "pregunta1.8",
            identificador:   "pregunta1.8"
          },
          {
            title: "¿Qué pasa si soy calificado como un mal conductor?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Lamentablemente no te podremos asegurar pero no te preocupes, puedes revisar que otras alternativas hay en el mercado  <a target='_blank' href='https://comparabien.com.pe/seguros-vehiculares'>aquí</a>.</p>"],
            id: "pregunta1.9",
            identificador:   "pregunta1.9"
          },
          {
            title: "¿Cómo identifican que soy el conductor y no el pasajero?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Usamos algoritmos para identificar patrones en los datos de ubicación y movimiento que recibimos de tu teléfono.</p>"],
            id: "pregunta1.10",
            identificador:   "pregunta1.10"
          },
          {
            title: "No puedo evitar conducir hasta muy tarde, ¿esto afectará mi prueba?",
            respuesta: ["<p class='parrafo omnes-medium  pb-2'>Si bien recomendamos no manejar en horarios nocturnos, entendemos que algunas personas tienen que hacerlo. La buena noticia es que los horarios de manejo es uno de muchos factores que usamos para el cálculo de tu cotización, asi que mientras manejes prudentemente, aún te seguirías beneficiando.</p>"],
            id: "pregunta1.11",
            identificador:   "pregunta1.11"
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
          title: "Inspeccion Vehicular",
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
