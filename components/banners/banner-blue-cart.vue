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

    <section class="text-white text-center py-5 position-relative">
      <div class="parallax" data-parallax-image="images/pista-blue.jpg"></div>

      <div class="container mt-2">
        <div class="row">
          <div class="col-5">
            <form-home></form-home>
          </div>
          <div class="col pl-5 text-left">
            <h3 class="h1 omnes-light">Proteger tu auto no <br> tiene por que ser caro.</h3>
            <p class="h4 omnes-light">¡Si compras en plan anual te damos <br> 10% de descuento!</p>
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
          </div>
        </div>
      </div>
      <div class="position-absolute right-10r bottom-2r">
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
