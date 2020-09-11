<template>
    <section class="placa-registrada">
        <b-container>
                <b-row class="justify-content-center">
                    <div class="col-12 col-md-10">
                        <form class="form-horizontal  form-content" >
                            <div class="descripcion-bold text-center">¡Hola!</div>
                            <h2 class="mb-4 text-center form-content__title text-uppercase align-center">
                                <span class="tag-0">TU CARRO YA ESTÁ  </span>
                                <span class="tag-1">PROTEGIDO POR NOSOTROS</span>

                            </h2>
                            <h3 class="text-center  info-title">{{this.placa}}</h3>
                            <div class="col-12 col-md-10 offset-md-1">
                                <div class="form-body">

                                    <div class="form-group row">
                                        <div class="col-10 offset-1 col-md-6 offset-md-3 on-boarding  ">
                                            <img src="../static/media/img/congrats-car.png" alt="placa registrada" width="100%">
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-10 offset-1 col-md-8 offset-md-2 on-boarding">
                                            <div class="text-center step-message">Si tienes alguna duda sobre cómo usar tu seguro, no dudes en escribirnos por Whatsapp al <a data-action="share/whatsapp/share" href="https://api.whatsapp.com/send?phone=51977822185&amp;text=Hola%20shielDev,%20quiero%20agendar%20una%20reunión." target="_black">977 822 185.</a></div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </form>
                    </div>
                </b-row>
            </b-container>
    </section>
</template>
<script>
export default {
    layout: 'InterseguroHome',
  data() {
    return {
        placa:  ''
    };
  },
  mounted() {
      this.placa = this.$store.state.common.plateNumber.toUpperCase()
      this.PaginaVista()
  },
  methods: {
    PaginaVista(){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'pagina_vista',
            'page-url': '/vehicular/cotiza/placa-registrada', 
            'page-title': 'Placa Registrada'
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.placa-registrada{
    padding-top: 140px;
}
.descripcion-bold{
    font-family: 'omnes' ;
    font-size: 26px;
    font-weight: bold;
}
.info-title{
    color: #0BD360;
    font-weight: bold;
    font-size: 24px;
    font-family: 'omnes' ;
}
</style>
