<template lang="pug">
  #preguntas-frecuentes
    section#banner-nuevo-preguntas
      BannerPreguntasFrecuentes
    section.preguntas
      b-container
        b-row
          b-col.mt-4.mb-3.mb-xs-2.mt-xl-5.mb-xl-4.text-center
            h3.omnes-semibold.text-secondary Las preguntas más frecuentes
        b-row.justify-content-md-center
          b-col
            b-row.justify-content-md-center
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/oficial/preguntas-frecuentes/cobertura" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Cuáles son las coberturas principales?
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/oficial/preguntas-frecuentes/cobertura" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Cuándo se considera pérdida total para un vehículo?
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/oficial/preguntas-frecuentes/asistencias" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Qué servicios incluye?
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/oficial/preguntas-frecuentes/inspeccion" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Cómo hago mi inspección? 
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/oficial/preguntas-frecuentes/siniestros" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Dónde puedo reportar un siniestro?
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/oficial/preguntas-frecuentes/que-pasa-si" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Qué pasa si ocurre un incidente y yo no soy el que maneja?
            b-row.justify-content-md-center
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/oficial/preguntas-frecuentes/que-pasa-si" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Qué pasa si choco contra un carro que no tiene seguro vehicular?
                
      b-container.preguntas-tema
        b-row
          b-col.mt-4.mb-3.mt-xl-5.mb-xl-4.text-center
            h3.omnes-semibold.text-secondary Preguntas por temas
        b-row.justify-content-md-center
          b-col

          b-row.justify-content-md-center

            b-col(xs="12" md="12" sm="12" xl="4" v-for="(item,key) in itemsMenu" :key="item.id") 
              div
                router-link(:to="'/oficial/'+item.to" )
                  div
                    img(v-bind:src="item.src" style="width:auto; height:auto; max-height: 47px; max-width: 44px;")
                    div.text-center
                      span.omnes-medium.text-secondary {{item.categoria}}
</template>

<script>
import BannerPreguntasFrecuentes from "@/components/is/common/BannerPreguntasFrecuentes";


export default {
  layout: "InterseguroHome",
   data() {
    return {
      itemsMenu: [
        {
          categoria : "Cobertura",
          body: [
              {
                preg: "¿Cuándo inicia mi cobertura?",
                resp: "Desde la confirmación de pago.",
                id: "pregunta1.1"
              },
              {
                preg: "¿Cuáles son las coberturas principales?",
                resp:
                  "Accidente de tránsito, pérdida total, robo o hurto, incendio, rotura de lunas, riesgos de la" +
                  "naturaleza, huelgas o vandalismo, accesorios, responsabilidad civil frente a ocupantes y" +
                  "terceros, invalidez permanente, gastos de curación, gastos de sepelio, muerte de ocupantes",
                id: "pregunta1.2"
              },
              {
                preg: "¿Cuándo se considera pérdida total para un vehículo? ",
                resp: "Cuando los daños superan el 75% del valor del carro.",
                id: "pregunta1.3"
              },
              {
                preg: "¿Hasta dónde llega mi cobertura?",
                resp: "Cuentas con cobertura nacional.",
                id: "pregunta1.4"
              },
              {
                preg: "¿Cuáles son los límites geográficos de las asistencias?",
                resp: "Chosica, Cieneguilla, Ancón y 300 km al Sur.",
                id: "pregunta1.5"
              }
          ],
          id: "accordeon1",
          to: "preguntas-frecuentes/cobertura",
          src: require("./../../../static/media/img/root/pf/cobertura.png")
        },
        {
          categoria: "Asistencias",
          body: [
            {
              preg: "¿Qué servicios incluye?",
              resp: "Chofer de reemplazo, asistencia mecánica, ambulancia, grúa, vehículo de reemplazo, asistencia legal. ",
              id: "pregunta2.1"
            },
            { 
              preg: "¿Cuántos choferes de reemplazo tengo?", resp: "Cinco",
              id: "pregunta2.2"
            },
            {
              preg: "¿Cuánto tiempo antes debo agendar mi chofer de reemplazo?",
              resp: "1 hora.",
              id: "pregunta2.3"
            }
          ],
          id: "accordeon2",
          to: "preguntas-frecuentes/asistencias",
          src: require("./../../../static/media/img/root/pf/asistencias.png")
        },
        {
          categoria: "Inspección",
          body: [
            {
              preg: "¿Cuántos días tengo para hacer mi inspección?",
              resp: "Diez. Puedes también hacer tu inspección los fines de semana y feriados.",
              id: "pregunta3.1"
            },
            {
              preg: "¿Cómo hago mi inspección?",
              resp: "Toda la inspección será digital (por Whatsapp), sin necesidad que alguien tenga que ir a tu casa. Enviando fotos y respondiendo dos preguntas sobre tu carro podrás acabar tu inspección en menos de 10 minutos",
              id: "pregunta3.2"
            },
            {
              preg: "¿En qué horarios puedo hacer mi inspección?",
              resp: "De lunes a viernes de 8:00am hasta las 21:00pm y los sábado y domingos de 10:00am a 19:00pm",
              id: "pregunta3.3"
            }
          ],
          id: "accordeon3",
          to: "preguntas-frecuentes/inspeccion",
          src: require("./../../../static/media/img/root/pf/inspeccion.png")
        },
        {
          categoria: "Pagos",
          body: [
            {
              preg: "¿Dónde puedo comprar el seguro vehicular?", resp: "Online." ,
              id: "pregunta4.1"
            },
            {
              preg: "¿El pago en cuotas tiene intereses?", resp: "No.",
              id: "pregunta4.2"
            },
            {
              preg: "¿Consideran mi edad para el precio de mi póliza?",
              resp: "No.",
              id: "pregunta4.3"
            },
            {
              preg: "¿Que pasa si ocurre un accidente y yo no soy el que maneja?",
              resp: "Te cubrimos, siempre y cuando el que maneje cuente con un brevete vigente y no haya tomado alcohol.",
              id: "pregunta4.4"
            }
          ],
          id: "accordeon4",
          to: "preguntas-frecuentes/pagos",
          src: require("./../../../static/media/img/root/pf/pagos.png")
        },
        {
          categoria: "Siniestros",
          body: [
            {
              preg: "¿Dónde puedo reportar un siniestro?",
              resp: "Llamarnos al (01) 500 0000.",
              id: "pregunta5.1"
            },
            {
              preg: "¿Cuantos días tengo para reportar un siniestro?",
              resp: "Tres si se trata de daños al vehículo (patrimoniales) y siete si se trata de daños personales (lesiones o fallecimiento).",
              id: "pregunta5.2"
            },
            {
              preg: "¿Puedo llevar mi carro a un taller que no esté en la lista de talleres afiliados?",
              resp: "Sí, el deducible varía en ese caso a $250.",
              id: "pregunta5.3"
            },
            {
              preg: "¿Dónde averiguo el estado de mi siniestro?",
              resp: "llámanos al 500 000.",
              id: "pregunta5.4"
            }
          ],
          id: "accordeon5",
          to: "preguntas-frecuentes/siniestros",
          src: require("./../../../static/media/img/root/pf/siniestros.png")
        },
        {
          categoria: "¿Qué pasa si...?",
          body: [
            {
              preg: "¿Qué pasa si ocurre un incidente y yo no soy el que maneja?",
              resp: "Igual lo cubrimos, siempre y cuando el que maneja cuente con un brevete vigente y no haya tomado alcohol. ",
              id: "pregunta6.1"
            },
            {
              preg: "¿Qué pasa si choco contra un carro que no tiene seguro vehicular?",
              resp: "Si es que tú eres responsable del incidente, cubrimos tu carro y el de la otra persona.",
              id: "pregunta6.2"
            },
            {
              preg: "¿Qué pasa con el seguro cuando vendo mi carro?",
              resp: "Si vendes tu carro y tienes que cancelar tu seguro, llámanos al 500 000. Si compras un carro nuevo, ya sabes dónde encontrarnos.",
              id: "pregunta6.3"
            },
            {
              preg: "¿Qué pasa si uso mi carro para brindar servicios de taxi, puedo asegurar mi carro?",
              resp: "Por el momento no.",
              id: "pregunta6.4"
            },
            {
              preg: "¿Qué pasa si tengo más preguntas, a dónde llamo?",
              resp: "Teléfono: 500 0000",
              id: "pregunta6.5"
            },
            {
              preg: "¿Qué pasa si mi carro es de alto riesgo? ¿Necesito GPS?",
              resp: "Sí.",
              id: "pregunta6.6"
            },
            {
              preg: "¿Qué pasa si quiero anular mi póliza?",
              resp: "Escríbenos o llámanos a: Teléfono: 500 0000",
              id: "pregunta6.4"
            }
          ],
          id: "accordeon6",
          to: "preguntas-frecuentes/que-pasa-si",
          src: require("./../../../static/media/img/root/pf/que_pasa_si.png")
        }
      ]
    };
  },
  created() {
    this.$nuxt.$emit("nro-cotizaciones-flag", { flag: true });
  },
  mounted() {
    this.PaginaVista()
  },
  components: {
    BannerPreguntasFrecuentes
  },
  methods: {
    PaginaVista(){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'pagina_vista',
            'page-url': '/vehicular/oficial/preguntas-frecuentes', 
            'page-title': 'oficial Preguntas frecuentes'
        });
    }
  }
};
</script>
<style lang="scss" >

.text-secondary {
    color: #0855c4 !important;
}

  #preguntas-frecuentes {
    padding-top: 75px;
    .container {
      max-width: 1170px;
    }
    
    .preguntas {
      margin-bottom: 3rem;
      a > div {
        display: flex;
        align-items: center;
        margin-top: 8px;
        margin-bottom: 8px;
        border-radius: 4.2px;
        font-size: 18px;
        box-shadow: 0 2px 6px 0 rgba(14, 90, 151, 0.5);
        padding: 10px;
        height: 68px;
        line-height: 18.2px;
      }
      a span {
        padding-left: 20px;
      }
    }

    .preguntas-tema {
      a > div {
        text-align: center;
        vertical-align: center;
        color: #0855C4;
        font-size: 20px;
        font-weight: 400;
        line-height: 15.97px;
        border-radius: 3.69px;
        box-shadow: 0 1px 3px 0 rgba(14, 90, 151, 0.5);
      }
    }

    .preguntas-genericas .rectangulo {
      box-shadow: none;
      border: 1px solid #0855c4;
    }
    h5.titulo {
      padding-bottom: 30px;
    }
    .dropdown-toggle, .dropdown-toggle:focus {
      box-shadow: none;
      border: none;
      background-image: none!important;
    }
    p {
      margin-bottom: 1rem;
    }
  }
</style>

