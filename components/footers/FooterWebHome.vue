<template>
<section class="footer  home-2 ">
      <b-container>
        <b-row>
          <div class="col-12  col-sm-4">
            <img src="../../static/media/img/IS-logo.svg" width="160" alt="logo interseguro vehicular" class="image-19" style="margin-bottom: 16px;">
            <p class="footer--txt">Av. Paseo de la República 3071,
              <br>San Isidro. Lima - Perú.
            </p>
            <p class="footer--txt">© Copyright - All Rights Reserved Interseguro 2018</p>
            <div class="imgs"  style=" padding-bottom:10px;">
                <span><img width="30" src="../../static/media/img/visa.svg" alt="Asegura tu auto"></span>
                <span><img width="30" src="../../static/media/img/mastercard.svg" alt="mastercard seguro vehicular"></span>
                <span><img width="30" src="../../static/media/img/amex.png" alt="amex seguro vehicular"></span>
                <span v-if="this.businessId == 1"><img width="60" src="../../static/media/img/dinners.svg" alt="dinners seguro vehicular"></span>
            </div>
          </div>
          <div class="col-12  col-sm-2  lista-enlacesFooter">
            <div><a v-bind:href="urlCobertura" target="_blank" rel="noopener" class="menu-item__enlace">Cobertura</a></div>
            <div><nuxt-link class="menu-item__enlace"  to="/exclusiones">Exclusiones</nuxt-link></div>
            <div><nuxt-link class="menu-item__enlace"  :to="{ path: '/cobertura#servicios'}">Servicios</nuxt-link></div>
            <div><nuxt-link class="menu-item__enlace"  :to="{ path: '/quienes-somos'}">Quiénes somos</nuxt-link></div>
            <div><a class="menu-item__enlace"  href="https://www.google.com/maps/d/u/0/viewer?mid=13NFmWBG7859lYz_z_2ZluRQaDaTH9Hi9&hl=es&ll=-12.109991959196146%2C-77.03860524421466&z=12">Talleres</a></div>
            
          </div>
          <div class="col-12  col-sm-3 lista-enlacesFooter">
            <!-- <div><nuxt-link class="menu-item__enlace"  to="/condicionado-general">Condicionado General</nuxt-link></div> -->
            <div><a v-bind:href="urlCondicionado" target="_blank" rel="noopener" class="menu-item__enlace">Condicionado General</a></div>
            <div><a v-bind:href="urlParticular" target="_blank" rel="noopener" class="menu-item__enlace">Condicionado Particular</a></div>
            <div><a v-bind:href="urlCoberturaAdicional" target="_blank" rel="noopener" class="menu-item__enlace">Cláusulas Adicionales</a></div>
            <div><nuxt-link class="menu-item__enlace"  to="/oficial/preguntas-frecuentes/">Preguntas frecuentes</nuxt-link></div>
            <div><a v-bind:href="urlInformativo" target="_blank" rel="noopener" class="menu-item__enlace">Resumen de Producto</a></div>
            <div><a v-bind:href="ResolucionSBS" target="_blank" rel="noopener" class="menu-item__enlace">Oficio SBS</a></div>
            <div><a v-bind:href="PoliticaGPS" target="_blank" rel="noopener" class="menu-item__enlace">Política GPS</a></div>
          </div>
          <div class="col-12  col-sm-3">
            <p class="footer--txt footer--subtitle">¿Necesitas usar tu seguro o hacer una consulta?</p>
            
            <div class="footer-whatsapp">              
              <p class="mg-b0">Escríbenos por Whatsapp:</p>
              <div class="footer-number">
                <a style="color: white" href="https://api.whatsapp.com/send?phone=51977822185&amp;text=Hola!%20Como%20te%20puedo%20ayudar?" target="_blank" rel="noopener">
                <img src="../../static/media/img/contact-icon-whatsapp-white.svg" height="35" alt="whatsapp vehicular Interseguro" class="image-20">
                <span>977 822 185</span>
                </a>
                
              </div>
            </div>
            <div class="footer-telefono">              
              <p class="pd-t16  mg-b0">LLámanos al:</p>
              <div class="footer-number">
                <img src="../../static/media/img/contact-icon-call-white.svg" height="35" alt="contacto seguro vehicular" class="image-20">
                <span>500-0000</span>
              </div>
            </div>

          </div>
        </b-row>
      </b-container>
    </section>
</template>

<script>
export default {
  data () {
    return { 
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
    }
  },
  mounted(){
    this.businessId = this.$store.state.common.businessId
    this.urlCondicionado = require("./../../static/media/documentos/Condicionado_General.pdf")
    this.urlParticular = require("./../../static/media/documentos/Condicionado_Particular.pdf")
    this.urlpdf = require("./../../static/media/documentos/FAQs.pdf")
    this.urlInformativo = require("./../../static/media/documentos/Resumen_Informativo.pdf")
    this.urlNotaTecnica = require("./../../static/media/documentos/Nota_tecnica.pdf")
    this.ResolucionSBS = require("./../../static/media/documentos/Resolucion-SBS.pdf")
    this.urlCobertura = require("./../../static/media/documentos/Coberturas.pdf")
    this.urlCoberturaAdicional = require("./../../static/media/documentos/Coberturas_Adicionales.pdf")
    this.urlExclusiones = require("./../../static/media/documentos/Exclusiones.pdf")
    this.PoliticaGPS = require("./../../static/media/documentos/Politica_GPS_Interseguro.pdf")
    
      
    
  }
}
</script>
<style lang="scss" scoped>
li{
    list-style: none; 
}
.lista-enlacesFooter{
  div{
    padding: 5px;
    color: #535D66;
    a{
      color: #535D66;
      &:hover{
        color: #00ADEE;
        text-decoration: none;
      }
    }
  }
}
</style>

