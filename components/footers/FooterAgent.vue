<template>
  <div>

    <!-- <div class="writeme" data-v-d5c59bf2="" v-if="urllocal">
      <a target="_blank" href="https://api.whatsapp.com/send?phone=51934792742&text=%C2%A1Hola%21+Vengo+de+la+Web+de+Seguro+Vehicular+y+quiero+m%C3%A1s+informaci%C3%B3n+sobre+el+seguro" rel="noopener" data-v-d5c59bf2="">
        <img src="./../../static/media/interseguroVehicular_v2/whatsapp.png" alt="Escribir algún contacto" class="call d-lg-none" style="width:50px;border-radius: 50px;" data-v-d5c59bf2="">
      <img src="./../../static/media/interseguroVehicular_v2/chat-whatsapp.svg" alt="Escribir algún contacto" class="call d-none d-lg-block" data-v-d5c59bf2="">
      </a>
    </div> -->

    <section class="footerv2 d-block d-md-none">
      <div class="footerv2__acordeon">
        
        <div role="tablist">
            <b-card no-body>
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block href="#" v-b-toggle.accordion-1>SEGURO VEHICULAR</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body class="acordeon-boxLista">
                <b-card-text>
                  <ul class="acordeon-ul">
                    <li class="acordeon-lista">
                      <a target="_blank" rel="noopener" v-bind:href="urlCondicionado">Condicionado General</a>
                    </li>
                    <li class="acordeon-lista">
                      <a target="_blank" rel="noopener" v-bind:href="urlParticular">Condicionado Particular</a>
                    </li>
                    <li class="acordeon-lista">
                      <a target="_blank" rel="noopener" v-bind:href="urlCoberturaAdicional">Cláusulas Adicionales</a>
                    </li>
                    <li class="acordeon-lista">
                      <a target="_blank" rel="noopener" v-bind:href="urlInformativo">Resumen de Producto</a>
                    </li>
                    <li class="acordeon-lista">
                      <a target="_blank" rel="noopener" v-bind:href="ResolucionSBS">Oficio SBS</a>
                    </li>
                    <li class="acordeon-lista">
                      <nuxt-link target="_blank" rel="noopener" class="acordeon-enlace" to="/cobertura/">Cobertura</nuxt-link>
                    </li>
                    <li class="acordeon-lista">
                      <nuxt-link
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        to="/exclusiones"
                      >Exclusiones</nuxt-link>
                    </li>
                    <li class="acordeon-lista">
                      <nuxt-link
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        to="/oficial/preguntas-frecuentes/"
                      >Preguntas frecuentes</nuxt-link>
                    </li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          

          <b-card no-body>
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block href="#" v-b-toggle.accordion-2>NOSOTROS</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body class="acordeon-boxLista">
                <b-card-text>
                  <ul class="acordeon-ul">
                    <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="https://www.interseguro.pe/informacion-financiera"
                      >Clasificación de Riesgos</a>
                    </li>
                    <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="http://asp403r.paperless.com.pe/FacturaInterseguro/"
                      >Comprobantes Electrónicos</a>
                    </li>
                    <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="https://www.interseguro.pe/gobierno-corporativo"
                      >Gobierno Corporativo</a>
                    </li>
                    <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="https://www.interseguro.pe/memoria-anual"
                      >Memoria Anual</a>
                    </li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body>
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block href="#" v-b-toggle.accordion-3>SEGUROS</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body class="acordeon-boxLista">
                <b-card-text>
                  <ul class="acordeon-ul">
                    <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="https://www.interseguro.pe/otros-rentas"
                      >Rentas y Pensiones</a>
                    </li>
                    <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="https://www.interseguro.pe/otros-vida"
                      >Seguros de Vida</a>
                    </li>
                    <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="https://www.interseguro.pe/soat/"
                      >SOAT</a>
                    </li>
                    <li class="acordeon-lista">
                      <nuxt-link target="_blank" rel="noopener" class="acordeon-enlace" to="/">Vehicular</nuxt-link>
                    </li>
                    <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="https://www.interseguro.pe/viajes/"
                      >Viajes</a>
                    </li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body>
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block href="#" v-b-toggle.accordion-4>INFORMACIÓN DE INTERÉS</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body class="acordeon-boxLista">
                <b-card-text>
                  <ul class="acordeon-ul">
                    <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="https://www.interseguro.pe/asesorate/servicio-cliente"
                      >Servicio al Cliente</a>
                    </li>
                    <!-- <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="https://www.interseguro.pe/asesorate/enlaces-interes"
                      >Enlaces de Interés</a>
                    </li> -->
                    <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="http://www.sbs.gob.pe/usuarios/"
                      >Portal del Usuario SBS</a>
                    </li>
                    <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="https://www.interseguro.pe/ayuda/transparencia/siniestros-rechazados "
                      >Siniestros Rechazados</a>
                    </li>
                    <li class="acordeon-lista">
                      <a
                        target="_blank" rel="noopener"
                        class="acordeon-enlace"
                        href="https://app.interseguro.com.pe/LibroReclamaciones/"
                      >Libro de Reclamaciones</a>
                    </li>
                    <li class="acordeon-lista">
                      <router-link target="_blank" class="acordeon-enlace" to="/tyc">Promociones</router-link>
                    </li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>

      <div class="footerv2__acordeonContacto acordeonContacto">
        <div class="acordeonContacto__item correo">
          <span>
            <img src="../../static/media/interseguroVehicular_v2/email.png" alt="email">
          </span>
          <span>segurovehicular@interseguro.com.pe</span>
        </div>

        <div class="acordeonContacto__item telefono">
          <span>
            <img src="../../static/media/interseguroVehicular_v2/telefono.svg" alt="telefono">
          </span>
          <span>
            <span>
              Llámanos
              <br>(01) 500 0000
            </span>
          </span>
        </div>
      </div>
      <div class="footerv2__redesSociales">
        <p>Síguenos en:</p>
        <div class="box-redes">
          <span>
            <a href="https://www.instagram.com/interseguroperu/"><img src="../../static/media/interseguroVehicular_v2/instagram.png" alt="instagram"></a>            
          </span>
          <span>
            <a href="https://www.facebook.com/interseguro/"><img src="../../static/media/interseguroVehicular_v2/facebook.png" alt="facebook"></a>            
          </span>
          <span>
            <a href="https://www.interseguro.pe/blog/"><img src="../../static/media/interseguroVehicular_v2/blog.png" alt="blog"></a>            
          </span>
          <span>
            <a href="https://www.linkedin.com/company/interseguro-aseguradora/"><img src="../../static/media/interseguroVehicular_v2/linkedin.png" alt="linkedin"></a>            
          </span>
        </div>
      </div>
      <div class="footerv2__derechos">
        <p class="text-center">Copyright © 2018 Interseguro. Todos los derechos reservados.</p>
      </div>
    </section>

    <div class="footerv2-desktop d-none d-md-block">
      <div class="footerv2-d">
        <div class="superior">
          <div class="superior__email">
            <span>
              <img src="../../static/media/interseguroVehicular_v2/email.png" alt="email">
            </span>
            <span>segurovehicular@interseguro.com.pe</span>
          </div>
          <div class="superior__logo">
            <img src="../../static/media/interseguroVehicular_v2/logo_blanco.png" alt="logo_blanco" class="mb-2">
            <div class="box-tarjetas">
              <span><img src="../../static/media/interseguroVehicular_v2/visa.png" alt="visa"></span>
              <span><img src="../../static/media/interseguroVehicular_v2/mastercard.png" alt="mastercard"></span>
              <span><img src="../../static/media/interseguroVehicular_v2/amex.png" alt="amex"></span>
              <span v-if="this.businessId == 1"><img src="../../static/media/interseguroVehicular_v2/dinners.png" alt="dinners"></span>
            </div>
          </div>
        </div>
        <div class="medio d-flex d-lg-none">
          <div class="medio__contacto  mt-3">

            <div class="llamanos">
              <span>
                <img src="../../static/media/interseguroVehicular_v2/llamanos.png" alt="email">
              </span>
              <span>
                Llámanos
                <br>(01) 500 0000
              </span>
            </div>
          </div>
          <div class="medio__redes">
            <p>Síguenos en:</p>
            <div class="box-redes">
              <span>
                <a href="https://www.instagram.com/interseguroperu/"><img src="../../static/media/interseguroVehicular_v2/instagram.png" alt="instagram"></a>            
              </span>
              <span>
                <a href="https://www.facebook.com/interseguro/"><img src="../../static/media/interseguroVehicular_v2/facebook.png" alt="facebook"></a>            
              </span>
              <span>
                <a href="https://www.interseguro.pe/blog/"><img src="../../static/media/interseguroVehicular_v2/blog.png" alt="blog"></a>            
              </span>
              <span>
                <a href="https://www.linkedin.com/company/interseguro-aseguradora/"><img src="../../static/media/interseguroVehicular_v2/linkedin.png" alt="linkedin"></a>            
              </span>
            </div>
          </div>
        </div>
        <div class="inferior">
          <div class="inferior__item">
            <p>SEGURO VEHICULAR</p>
            <ul>
              <li>
                <a v-bind:href="urlCondicionado" target="_blank" rel="noopener">Condicionado General</a>
              </li>
              <li>
                <a v-bind:href="urlParticular" target="_blank" rel="noopener">Condicionado Particular</a>
              </li>
              <li>
                <a v-bind:href="urlCoberturaAdicional" target="_blank" rel="noopener">Cláusulas Adicionales</a>
              </li>
              <li>
                <a v-bind:href="urlInformativo" target="_blank" rel="noopener">Resumen de Producto</a>
              </li>
              <li>
                <a v-bind:href="ResolucionSBS" target="_blank" rel="noopener">Oficio SBS</a>
              </li>
              <li>
                <nuxt-link class to="/cobertura/">Cobertura</nuxt-link>
              </li>
              <li>
                <nuxt-link class to="/exclusiones">Exclusiones</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/oficial/preguntas-frecuentes/">Preguntas frecuentes</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="inferior__item">
            <p>NOSOTROS</p>
            <ul>
              <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="https://www.interseguro.pe/informacion-financiera"
                >Clasificación de Riesgos</a>
              </li>
              <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="http://asp403r.paperless.com.pe/FacturaInterseguro/"
                >Comprobantes Electrónicos</a>
              </li>
              <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="https://www.interseguro.pe/gobierno-corporativo"
                >Gobierno Corporativo</a>
              </li>
              <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="https://www.interseguro.pe/memoria-anual"
                >Memoria Anual</a>
              </li>
            </ul>
          </div>
          <div class="inferior__item">
            <p>SEGUROS</p>
            <ul>
              <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="https://www.interseguro.pe/otros-rentas"
                >Rentas y Pensiones</a>
              </li>
              <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="https://www.interseguro.pe/otros-vida"
                >Seguros de Vida</a>
              </li>
              <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="https://www.interseguro.pe/soat/"
                >SOAT</a>
              </li>
              <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="https://www.interseguro.pe/viajes/"
                >Viajes</a>
              </li>
            </ul>
          </div>
          <div class="inferior__item">
            <p>INFORMACIÓN DE INTERÉS</p>
            <ul>
              <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="https://www.interseguro.pe/asesorate/servicio-cliente"
                >Servicio al Cliente</a>
              </li>
              <!-- <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="https://www.interseguro.pe/asesorate/enlaces-interes"
                >Enlaces de Interés</a>
              </li> -->
              <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="http://www.sbs.gob.pe/usuarios/"
                >Portal del Usuario SBS</a>
              </li>
              <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="https://www.interseguro.pe/ayuda/transparencia/siniestros-rechazados "
                >Siniestros Rechazados</a>
              </li>
              <li class="acordeon-lista">
                <a
                  target="_blank" rel="noopener"
                  class="acordeon-enlace"
                  href="https://app.interseguro.com.pe/LibroReclamaciones/"
                >Libro de Reclamaciones</a>
              </li>
              <li class="acordeon-lista">
                <router-link target="_blank" class="acordeon-enlace" to="/tyc">Promociones</router-link>
              </li>
            </ul>
          </div>
          <div class="inferior__item d-none d-lg-block" style="width: 26%;">
            <div class="medio">
              <div class="medio__redes">
                <p>Síguenos en:</p>
                <div class="box-redes">
                  <span>
                    <a href="https://www.instagram.com/interseguroperu/"><img src="../../static/media/interseguroVehicular_v2/instagram.png" alt="instagram"></a>            
                  </span>
                  <span>
                    <a href="https://www.facebook.com/interseguro/"><img src="../../static/media/interseguroVehicular_v2/facebook.png" alt="facebook"></a>            
                  </span>
                  <span>
                    <a href="https://www.interseguro.pe/blog/"><img src="../../static/media/interseguroVehicular_v2/blog.png" alt="blog"></a>            
                  </span>
                  <span>
                    <a href="https://www.linkedin.com/company/interseguro-aseguradora/"><img src="../../static/media/interseguroVehicular_v2/linkedin.png" alt="linkedin"></a>            
                  </span>
                </div>
              </div>
              <div class="medio__contacto  mt-3">


                <div class="llamanos">
                  <span>
                    Llámanos
                    <br>(01) 500 0000
                  </span>
                  <span>
                    <img src="../../static/media/interseguroVehicular_v2/llamanos.png" alt="email">
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="derechos">
        <p class="text-center">Copyright © 2018 Interseguro. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urllocal: false,
      urlCondicionado: "",
      urlParticular: "",
      urlpdf: "",
      urlInformativo: "",
      urlNotaTecnica: "",
      ResolucionSBS: "",
      urlCobertura: "",
      urlCoberturaAdicional: "",
      urlExclusiones: "",
      PoliticaGPS: "",
      businessId: "",
    };
  },
  created() {
    this.$nuxt.$on('whatsapp', ({wapp}) => {
      this.urllocal = wapp.valor
    })
  },
  mounted() {
    


    this.businessId = this.$store.state.common.businessId
    this.urlCondicionado = require("./../../static/media/documentos/Condicionado_General.pdf");
    this.urlParticular = require("./../../static/media/documentos/Condicionado_Particular.pdf");
    this.urlpdf = require("./../../static/media/documentos/FAQs.pdf");
    this.urlInformativo = require("./../../static/media/documentos/Resumen_Informativo.pdf");
    this.urlNotaTecnica = require("./../../static/media/documentos/Nota_tecnica.pdf");
    this.ResolucionSBS = require("./../../static/media/documentos/Resolucion-SBS.pdf");
    this.urlCobertura = require("./../../static/media/documentos/Coberturas.pdf");
    this.urlCoberturaAdicional = require("./../../static/media/documentos/Coberturas_Adicionales.pdf")
    this.urlExclusiones = require("./../../static/media/documentos/Exclusiones.pdf");
    this.PoliticaGPS = require("./../../static/media/documentos/Politica_GPS_Interseguro.pdf");

    
    
  }
};
</script>
<style lang="scss" scoped>
.acordeon-boxLista {
  margin: 0;
  padding: 0;
  .card-text {
    margin-bottom: 0;
  }
  .acordeon-ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #f3f3f3;
      padding-left: 24px;
      a {
        color: #707070;
      }
    }
  }
  .acordeon-enlace {
  }
}
.footerv2-desktop {
  background: #0055c8;
  position: relative;
  .derechos {
    height: 42px;
    line-height: 42px;
    background: white;
    p {
      margin-bottom: 0;
    }
  }
}
.footerv2-d {
  background: #0055c8;
  .superior {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 24px 24px 24px;
    color: white;
    border-bottom: 1px solid white;
    .box-tarjetas {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        margin-right: 8px;
      }
    }
    &__logo {
      padding-right: 12px;
    }
  }
  .medio {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 24px 24px 24px;
    color: white;

    &__contacto {
      display: flex;
      flex-direction: row;
      .whatsapp,
      .llamanos {
        display: flex;
        padding-right: 24px;
        a{
          color: white;
        }
        img {
          padding-right: 8px;
        }
      }
    }
  }
  .inferior {
    display: flex;
    padding: 0 24px;
    .medio {
      &__contacto {
        flex-direction: column;
        .whatsapp {
          margin-top: 24px;
          margin-bottom: 24px;
        }
      }
    }
    &__item {
      width: 25%;
      p {
        color: white;
        font-size: 15px;
        font-weight: 600;
      }
      ul {
        padding: 0;
        margin: 0;
        li {
          list-style: none;
          padding-bottom: 16px;
          a {
            color: white;
            font-size: 13px;
            font-weight: 400;
          }
        }
      }
    }
  }
}
.footerv2 {
  background: #0855C4;
  &__acordeon {
    background: #0855C4;
    .btn {
      border: 0 !important;
      border-radius: 0 !important;
      text-align: left;
      height: 55px;
      line-height: 55px;
    }
    .card-header {
      border: 0 !important;
    }
    .card {
      border-bottom: 1px solid white !important;
    }
    .btn-secondary:not(:disabled):not(.disabled):active,
    .btn-secondary:not(:disabled):not(.disabled).active,
    .show > .btn-secondary.dropdown-toggle {
      color: #fff;
      background-color: #0855C4;
      border-color: #0855C4;
    }
    .btn-secondary {
      color: #fff;
      background-color: #0855C4;
      border-color: #0855C4;
    }
  }
  .acordeonContacto {
    &__item {
      min-height: 50px;
      display: flex;
      align-items: center;
      padding: 12px 0;
      padding-left: 16px;
      span img {
        padding-right: 12px;
      }
      span {
        color: white;
      }
    }
  }
  &__redesSociales {
    p {
      text-align: center;
      font-size: 16px;
      color: white;
    }
    .box-redes {
      display: flex;
      justify-content: center;
      padding-bottom: 12px;
      span {
        padding: 12px;
        padding-bottom: 0;
      }
    }
  }
  &__derechos {
    background: white;
    color: #5e5e5e;
    font-size: 11px;
    text-align: center;
    height: 35px;
    line-height: 35px;
  }
}

@media (min-width: 768px) {
  .footerv2-desktop {
    .medio {
      margin-bottom: 12px;
    }
  }
}

@media (min-width: 1024px) {
  .footerv2-d {
    .superior {
      .box-tarjetas {
      }
      &__logo {
        padding-right: 32px;
      }
    }
  }
  .footerv2-desktop {
    .superior {
      padding-left: 8%;
      padding-right: 8%;
    }
    .inferior {
      display: flex;
      padding-top: 34px;
      padding-bottom: 34px;
      padding-left: 8%;
      padding-right: 8%;
      &__item {
        width: 18%;
      }
      .medio {
        flex-direction: column;
      }
      .medio__contacto {
        .whatsapp {
          justify-content: flex-end;
          text-align: right;
          padding-right: 0;
          img {
            margin-left: 12px;
          }
        }
        .llamanos {
          justify-content: flex-end;
          text-align: right;
          padding-right: 0;
          img {
            margin-left: 12px;
          }
        }
      }
      .medio__redes {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        p {
          text-align: right;
        }
      }
    }
  }
}
@media (min-width: 1330px) {
  .footerv2-d {
    .superior {
      padding-left: 10%;
      padding-right: 10%;
    }
    .inferior {

    }
    .medio {
      display: flex;
      align-items: flex-end;
    }
  }
}
</style>

