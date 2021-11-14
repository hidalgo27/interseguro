<template>
  <div>
<!--    <header class="bg-header-top py-5">-->
<!--      <div class="container mt-2">-->
<!--        <div class="row no-gutters align-items-center">-->
<!--          <div class="col-5 mr-5">-->
<!--            <form-home></form-home>-->
<!--          </div>-->
<!--          <div class="col pl-5">-->
<!--&lt;!&ndash;            <img src="@/static/media/img/campania/banner-home-desktop.svg" alt="" class="w-100">&ndash;&gt;-->
<!--            <div class="row mt-4 justify-content-center">-->
<!--              <div class="col-auto">-->
<!--                <div class="row align-items-center no-gutters">-->
<!--                  <div class="col-auto mr-3">-->
<!--                    <p class="text-white font-italic" style="font-family: 'Omnes Medium';">La oferta termina en : </p>-->
<!--                  </div>-->
<!--                  <div  class="col-auto d-none d-md-flex">-->
<!--                    <countdown></countdown>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </header>-->

    <section class="bg-header-top text-white text-center py-4 py-md-5 position-relative">
<!--      <div class="parallax" data-parallax-image=" "></div>-->

      <b-container>
        <b-row>
          <b-col md="5" order="2" order-md="1">
            <form-home></form-home>
          </b-col>
          <b-col class="pl-md-5 pl-0 text-center text-md-left" order-md="2">
            <h3 class="h1 text-h1 omnes-regular">Proteger tu auto no <br> tiene por que ser caro.</h3>
            <p class="h4 text-h5 omnes-light my-3 my-md-0">¡Si compras en plan anual te damos <br> 10% de descuento!</p>

          </b-col>
        </b-row>
      </b-container>
      <div class="position-absolute car-right-position bottom-2r d-none d-md-flex">
        <img src="@/static/images/vehiculo.png" alt="" class="w-75">
      </div>

    </section>

  </div>
</template>
<script>
import Countdown from "../widgets/countdown";
import FormHome from "../forms/FormHome";
export default {
  components: {FormHome, Countdown},
  data() {
    return {
      isCampania: true,
    }
  }
}
</script>
