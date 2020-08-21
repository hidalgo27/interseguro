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
                    router-link(to="/preguntas-frecuentes/app-interseguro-vehicular" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Para que sirve el app de Interseguro Vehicular? 
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/preguntas-frecuentes/app-interseguro-vehicular" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Cómo cotizo mi seguro vehicular por el app Interseguro Vehicular?
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/preguntas-frecuentes/app-interseguro-vehicular" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Qué es lo que miden con el app Interseguro Vehicular?
            b-row.justify-content-md-center
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/preguntas-frecuentes/como-comprar-un-seguro-vehicular" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Cómo calculan el precio de mi Seguro Vehicular?
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/preguntas-frecuentes/ya-tengo-mi-seguro-vehicular-interseguro" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Tengo que renovar mi póliza?
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/preguntas-frecuentes/coberturas-de-seguro-vehicular" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Qué coberturas incluye el Seguro Vehciular?
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/preguntas-frecuentes/asistencias-de-seguro-vehicular" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Qué servicios o asistencias incluye mi Seguro Vehicular?
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/preguntas-frecuentes/inspeccion-vehicular" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Cómo hago la inspección vehicular?
                b-col(md="12" sm="12" xl="4")
                  div
                    router-link(to="/preguntas-frecuentes/siniestros" target="_self")
                      div.text-center
                        div.w-100.omnes-medium.text-secondary ¿Dónde puedo reportar un siniestro?
      b-container.preguntas-tema
        b-row
          b-col.mt-4.mb-3.mt-xl-5.mb-xl-4.text-center
            h3.omnes-semibold.text-secondary Preguntas por temas
        b-row.justify-content-md-center
          b-col

          b-row.justify-content-md-center

            b-col(xs="12" md="12" sm="12" xl="4" v-for="(item,key) in itemsMenu" :key="item.id") 
              div
                router-link(:to="'/preguntas-frecuentes/'+item.to" )
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
          categoria : "App Interseguro Vehicular",
          body: [
              {
                preg: "¿Para que sirve el app de Interseguro Vehicular?",
                resp: "Con el app de Interseguro Vehicular vamos a conocer tus hábitos de manejo. Luego, con esta información, te enviaremos una cotización para tu Seguro Vehicular que se ajuste a tu estilo de manejo.",
                id: "pregunta1.1"
              },
              {
                preg: "¿Cómo cotizo mi seguro vehicular por el app Interseguro Vehicular?",
                resp: ["1. Descarga nuestro App desde el PlayStore o AppStore. Encuéntranos como Interseguro Vehicular. <br> 2. Regístrate usando solo tu placa en menos de un minuto.<br> 3. Maneja como lo harías normalmente - no olvides llevar tu teléfono contigo. <br> 4. Desde tu celular recogeremos data sobre tus hábitos de manejo y luego de algunas semanas te enviaremos una cotización personalizada para tu Seguro Vehicular."],
                id: "pregunta1.2",
              },
              {
                preg: "¿Por qué descargar el app?",
                resp: "Este nuevo servicio te permite, sin costo adicional, conseguir un Seguro Vehicualr con un precio a tu medida. Si manejas bien, puedes conseguir un descuento de hasta 50%. Un Seguro Vehicular que premia a buenos conductores.",
                id: "pregunta1.2"
              },
              {
                preg: "¿Qué es lo que miden con el app?",
                resp: "Medimos una serie de patrones asociados a tus hábitos de manejo: velocidad, fuerza de frenado, rapidez en giros, distancia recorrida, horas de manejo y nivel de concentración.",
                id: "pregunta1.3"
              },
              {
                preg: "¿Tengo que descargar el app para comprar un Seguro Vehicular?",
                resp: "No es necesario. Si necesitas un Seguro Vehicular en menos de 3 minutos, puedes hacer la compra sin descargar el app; sin embargo, no podrás acceder a un descuento usando el app.",
                id: "pregunta1.4"
              },
              {
                preg: "¿Puedo cotizar un Seguro Vehicular sin descargar el app?",
                resp: "Si, puedes hacerlo cotizando aquí. Sin embargo, te recomendamos cotizar a través de nuestro app para que obtengas un precio más justo.",
                id: "pregunta1.5"
              },
              {
                preg: "¿El app tiene que estar abierto mientras manejo para que funcione?",
                resp: "No es necesario. Al ingresar por primera vez te solicitaremos permisos de ubicación y de movimiento que nos ayudarán a recoger data en todo momento para la cotización de tu Seguro Vehicular.",
                id: "pregunta1.6"
              },
              {
                preg: "¿El app va a consumir rápido mi batería del celular?",
                resp: "Hemos hecho un gran esfuerzo para asegurarnos de que nuestro app consuma muy poca batería extra. Es un pequeño precio a pagar por tener mejores descuentos en tu Seguro Vehicular desde tu celular.",
                id: "pregunta1.7"
              },
              {
                preg: "Si ya compré el Seguro Vehicular con el descuento del app, ¿tengo que seguir usándolo?",
                resp: "No es necesario. Con la información recogida para la cotización de tu Seguro Vehicular es suficiente para mantener el precio ofrecido por todo un año.",
                id: "pregunta1.8"
              },
              {
                preg: "¿Qué pasa si soy calificado como un mal conductor?",
                resp: ["Lamentablemente no te podremos asegurar pero no te preocupes, puedes revisar que otras alternativas hay en el mercado  <a target='_blank' href='https://comparabien.com.pe/seguros-vehiculares'>aquí</a>."],
                id: "pregunta1.9"
              },
              {
                preg: "¿Cómo identifican que soy el conductor y no el pasajero?",
                resp: "Usamos algoritmos para identificar patrones en los datos de ubicación y movimiento que recibimos de tu teléfono.",
                id: "pregunta1.10"
              },
              {
                preg: "No puedo evitar conducir hasta muy tarde, ¿esto afectará mi prueba?",
                resp: "Si bien recomendamos no manejar en horarios nocturnos, entendemos que algunas personas tienen que hacerlo. La buena noticia es que los horarios de manejo es uno de muchos factores que usamos para el cálculo de tu cotización, asi que mientras manejes prudentemente, aún te seguirías beneficiando.",
                id: "pregunta1.11"
              }
          ],
          id: "accordeon1",
          to: "app-interseguro-vehicular",
          src: require("./../../static/media/img/root/pf/app_is_vehicular.png")
        },
        {
          categoria: "Como comprar un Seguro Vehicular",
          body: [
            {
              preg: "¿Dónde puedo comprar mi seguro vehicular?",
              res:  ["Puedes hacerlo en nuestra página web. Haz clic <a target='_blank' href='/vehicular/'> aquí </a> para cotizar. Sin embargo, te recomendamos descargar el App Interseguro Vehicular para cotizar un precio a tu medida."],
              id: "pregunta2.1"
            },
            { preg: "¿Aseguran todos los autos?",
              resp: "Nuestro Seguro Vehicular solo aplica para autos de uso particular y con una antigüedad de hasta 10 años." ,
              id: "pregunta2.2"
            },
            {
              preg: "¿Puedo comprar mi Seguro Vehicular con fecha de inicio de vigencia posterior?",
              resp: "Si, tu eliges la fecha de inicio de tu cobertura para tu Seguro Vehicular antes de confirmar la compra de tu póliza.",
              id: "pregunta2.3"
            },
            {
              preg: "¿Hay diferencias en elegir pagos mensuales o anuales? ¿Cobran intereses?",
              resp: "No cobramos intereses. Puedes elegir la frecuencia de pago que más se ajuste a tus necesidades, el precio del Seguro Vehicular seguirá siendo el mismo.",
              id: "pregunta2.4"
            },
            {
              preg: "¿Que pasa si tengo un seguro vehicular vigente?",
              resp: "No te preocupes, cancelar tu seguro vehicular actual es fácil. Solo tienes que enviarle un correo a tu aseguradora solicitando la cancelación. Acá te dejamos una <a  target='_blank' href='https://www.interseguro.pe/vehicular/resources/v2/carta_anulacion.docx'>plantilla</a>  para que completes y la envíes. Luego, ya puedes comprar tu Seguro Vehicular Interseguro.",
              id: "pregunta2.5"
            },
            {
              preg: "¿Cómo calculan el precio de mi Seguro Vehicular?",
              resp: "Es en función al riesgo del modelo de tu auto y su antiguedad. Si quieres conseguir un mejor precio, te invitamos a que descargues nuestro App Interseguro Vehicular donde podrás alcanzar hasta un 50% de descuento.",
              id: "pregunta2.6"
            },
            {
              preg: "¿Mi edad influye en el cálculo del precio?",
              resp: "No, el precio detu Seguro Vehicular no varía en función a la edad del cliente.",
              id: "pregunta2.7"
            },
            {
              preg: "¿Qué pasa si mi carro es de alto riesgo?",
              resp: "Si tu carro es de algo riesgo lo podemos asegurar pero te solicitaremos la instalación de un dispositivo GPS.",
              id: "pregunta2.8"
            }
          ],
          id: "accordeon2",
          to: "como-comprar-un-seguro-vehicular",
          src: require("./../../static/media/img/root/pf/comprar_is_vehicular.png")
        },
        {
          categoria: "Ya tengo mi Seguro Vehicular Interseguro",
          body: [
            {
              preg: "¿Tengo que renovar mi póliza?",
              resp: ["No es necesario, nosotros nos encargamos. La póliza de tu Seguro Vehicular se renovará de manera automática al terminar la vigencia de la póliza actual."],
              id: "pregunta3.1"
            },
            {
              preg: "¿Que pasa con mi Seguro Vehicuilar si vendo mi carro?",
              resp:  "Si vendes tu carro y tienes que cancelar tu Seguro Vehicular, escríbenos al 977822185 o llámanos al 500 0000. Si compras un carro nuevo , ya sabes donde encontrarnos.",
              id: "pregunta3.2"
            },
            {
              preg: "¿Cómo cancelo la póliza de mi Seguro Vehicular?",
              resp: "Escríbenos por WhatsApp al 977822185 o llámanos al 500 0000. Nuestros asesores te guiarán para que puedas cancelar tu Seguro Vehicular sin inconvenientes.",
              id: "pregunta3.3"
            }
          ],
          id: "accordeon3",
          to: "ya-tengo-mi-seguro-vehicular-interseguro",
          src: require("./../../static/media/img/root/pf/tengo_is_vehicular.png")
        },
        {
          categoria: "Coberturas de Seguro Vehicular",
          body: [
            {
              preg: "¿Qué coberturas incluye el Seguro Vehciular?",
              resp: ["Nuestro Seguro Vehicular tiene varios planes. El más completo es contra Todo Riesgo e incluye coberturas de pérdida total por robo o choques. Puedes revisar el detalle de nuestras coberturas por plan <a target='_blank' href='/vehicular/cobertura'>aquí</a>."],
              id: "pregunta4.1"
            },
            {
              preg: "¿Hasta donde llega mi cobertura?",
              resp: "Tenemos cobertura a nivel nacional.",
              id: "pregunta4.2"
            },
            {
              preg: "¿Que pasa si choco contra un auto que no tiene seguro vehicular?",
              resp: "Si tu eres el responsable del incidente, cubrimos los gastos de reparación de tu auto y del tercero.",
              id: "pregunta4.3"
            },
            {
              preg: "¿Que pasa si ocurre un accidente y yo no soy el que maneja?",
              resp: "Te cubrimos, siempre y cuando el que maneje cuente con un brevete vigente y no haya tomado alcohol.",
              id: "pregunta4.4"
            },
            {
              preg: "¿Cuando se considera pérdida total para un vehículo?",
              resp: "Cuando los daños superan el 75% del valor del auto. Si tu carro vale US$ 20,000 y los daños son por US$ 15,000 o más, se considera pérdida total.",
              id: "pregunta4.5"
            }
          ],
          id: "accordeon4",
          to: "coberturas-de-seguro-vehicular",
          src: require("./../../static/media/img/root/pf/cobertura.png")
        },
        {
          categoria: "Asistencias de Seguro Vehicular",
          body: [
            {
              preg: "Asistencias de Seguro Vehicular",
              resp: [" Puedes ver el detalle de las asistencias  <a target='_blank' href='https://www.interseguro.pe/vehicular/cobertura/'>aquí</a>." ],
              id: "pregunta5.1"
            },
            {
              preg: "¿Hasta donde llegan las asistencias?",
              resp:  [" Puedes ver el límite de nuestras asistencias  <a target='_blank' href='https://www.interseguro.pe/vehicular/cobertura/'>aquí</a>." ],
              id: "pregunta5.2"
            },
            {
              preg: "¿Cuántos choferes de reemplazo incluye mi Seguro Vehicular?",
              resp: "Depende del plan que contrates. Nuestro plan más completo cuenta con 5 choferes de reemplazo al año. Puedes agregar choferes de reemplazo a tu plan por S/ 50.",
              id: "pregunta5.3"
            },
            {
              preg: "¿Cuánto tiempo antes debo agendar mi chofer de reemplazo?",
              resp: "Puedes solicitarlo hasta 2 horas antes.",
              id: "pregunta5.4"
            }
          ],
          id: "accordeon5",
          to: "asistencias-de-seguro-vehicular",
          src: require("./../../static/media/img/root/pf/asistencias.png")
        },
        {
          categoria: "Inspección Vehicular",
          body: [
            {
              preg: "¿Necesito hacer la inspección antes de asegurar el auto?",
              resp:"No es necesario hacerla antes de comprar tu seguro vehicular. Cuando termines la compra nosotros te contactaremos para realizar el proceso de inspección y verificar si tu auto está en condiciones de ser asegurado o no.",
              id: "pregunta6.1"
            },
            {
              preg: "¿Porque hacen una inspección? ¿Que buscan entender?",
              resp:"Nos sirve para validar que los datos del auto consignados en la compra sean correctos y que las características de tu auto están alineadas a las condiciones del producto (uso particular y antigüedad menor o igual a 10 años). También validamos las condiciones con las que se está asegurando tu auto.",
              id: "pregunta6.2"
            },
            {
              preg: "¿Cómo hago la inspección vehicular?",
              resp:"La inspección vehicular es digital (por Whatsapp); no es necesario que sea presencial a menos que lo solicites. Una vez concluida la compra te contactaremos por Whatsapp y te enviaremos un link donde podrás adjuntar fotos y responder algunas preguntas sobre tu auto. El proceso tarda 5 minutos. ",
              id: "pregunta6.3"
            },
            {
              preg: "¿Cómo coordino mi inspección vehicular?",
              resp:"Nosotros nos pondremos en contacto contigo al finalizar la compra de tu Seguro Vehicular.",
              id: "pregunta6.4"
            },
            {
              preg: "¿Cuántos días tengo para realizar mi inspección?",
              resp:"Tienes 15 días. Al ser digital, puedes hacer tu inspección los fines de semana y feriados.",
              id: "pregunta6.5"
            },
            {
              preg: "¿A qué hora puedo hacer mi inspección?",
              resp:"Puedes hacerlo a cualquier hora desde el link que te envíemos.",
              id: "pregunta6.6"
            },
            {
              preg: "¿Qué pasa si no hago la inspección?",
              resp:"Al no tener certeza de los datos consignados y las condiciones de tu auto, no te podremos asegurar.",
              id: "pregunta6.7"
            },
            {
              preg: "¿Qué pasa si no paso la inspección?",
              resp:"No podremos asegurar tu auto.",
              id: "pregunta6.8"
            },
            {
              preg: "¿Porque no podría pasar la inspección?",
              resp:"El auto no es de uso particular, tu carro está en condiciones muy bajas o tienes un historial con muchos siniestros.",
              id: "pregunta6.9"
            }
          ],
          id: "accordeon6",
          to: "inspeccion-vehicular",
          src: require("./../../static/media/img/root/pf/inspeccion.png")
        },
        
        {
          categoria: "Siniestros",
          body: [
            {
              preg: "¿Dónde puedo reportar un siniestro?",
              resp:"Puedes escribirnos por WhatsApp al 977 822 185 o llamarnos al 500 0000.",
              id: "pregunta7.1"
            },
            {
              preg: "¿Cuantos días tengo para reportar un siniestro?",
              resp:"Tres días si solo hay daños al vehículo y siete días si hubiesen lesiones a los ocupantes.",
              id: "pregunta7.2"
            },
            {
              preg:"¿Qué pasa si choqué con otro auto?",
              resp: "Si tu eres el responsable del incidente, cubirmos los gastos de reparación de tu auto y del tercero.",
              id: "pregunta7.3"
            },
            {
              preg: "¿Puedo llevar mi auto a un taller que no esté en la lista de talleres afiliados?",
              resp: "Si, puedes hacerlo, pero ten en cuenta que el deducible en ese caso sería $250 como mínimo.",
              id: "pregunta7.4"
            },
            {
              preg: "¿Cuánto tengo que pagar por taller?",
              resp: "Dependerá del taller al cual llevas tu auto y del valor del siniestro. Puedes revisar el detalle <a target='_blank' href='https://www.interseguro.pe/vehicular/cobertura/'>aquí</a>.",
              id: "pregunta7.5"
            },
            {
              preg: "¿Dónde averiguo el estado de mi siniestro?",
              resp: "Escríbenos por WhatsApp al 977822185.",
              id: "pregunta7.6"
            }
          ],
          id: "accordeon7",
          to: "siniestros",
          src: require("./../../static/media/img/root/pf/siniestros.png")
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
    BannerPreguntasFrecuentes
  },
  methods: {
    
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

