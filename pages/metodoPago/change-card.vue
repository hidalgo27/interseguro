<template>
  <section class="steps-box">
    <b-container>
      <b-row>
        <div class="col-12 col-md-10 offset-md-1">
          <form class="form-horizontal form-content" id="culqi-cart-form">
            <h2 class="mb-4 text-center form-content__title text-uppercase align-center">
              <span class="tag-0">Felicidades</span>
            </h2>
            <div class="text-center step-message">Tu tarjeta ha sido actualizada con éxito</div>
            <div class="col-12 col-md-10 offset-md-1">
              <div class="form-body">
                <div class="form-group row">
                  <div class="col-10 offset-1 col-md-6 offset-md-3 on-boarding">
                    <h3 class="on-boarding-thank-message text-center">Tu carro ya está protegido.</h3>
                    <img
                      class="carro-protegido"
                      src="../../static/media/img/congrats-car.png"
                      alt="carro protegido"
                    >
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-10 offset-1 col-md-6 offset-md-3 on-boarding"></div>
                </div>
                <div class="form-group row">
                  <div class="col-10 offset-1 col-md-8 offset-md-4 on-boarding"></div>
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
  layout: "InterseguroWeb",
  data() {
    return {};
  },
  mounted: function() {
    this.PaginaVista();
    localStorage.removeItem("policyId")
  },
  computed: {},
  methods: {
    PaginaVista() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pagina_vista",
        "page-url": "/vehicular/cotiza/change-card",
        "page-title": "Change Card"
      });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.steps-box{
    margin-top: 92px;
}
#buttonSummary a:hover {
  color: #0056b3 !important;
}
.on-boarding-thank-message {
  font-family: "omnes";
  font-size: 20px;
  font-weight: 300;
}
.cart-final-btn {
  border: solid 1px #002e75;
  outline: 0;
  padding: 15px 32px 15px 32px;
  margin: 0.5rem auto;
  border-radius: 6px;
  text-transform: uppercase;
  font-family: "omnes";
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 900;
  text-align: center;
  cursor: pointer;
  color: #002e75;
  // background: url(../../static/media/img/download-icon.svg) no-repeat 10px 14px;
}
.carro-protegido {
  width: 100%;
}
</style>
