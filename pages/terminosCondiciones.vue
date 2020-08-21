<template>
  <div>
    <section class="terminos">
      <b-container>
        <b-row>
          <b-col cols="12"  class="d-block  d-lg-none">
            <div class="section-header  pd-b16">
              <h3 class="section-header__title  pb-0  mb-0">
                <span class="span-cyan"> TERMINOS Y CONDICIONES</span>
              </h3>
              <p class="mt-0  pt-0">Referidos e invitados </p>
            </div>
          </b-col>

          <b-col cols="12" lg="6">
            <div>
              <img class="img_tyc" src="../static/media/interseguroVehicular_v2/terminos_y_condiciones.png" alt="Contactanos Seguro Vehicular" name="Contactate-Seguro-Vehicular">
            </div>
            <div class="section-header  pd-b16  d-none  d-lg-block">
              <h3 class="section-header__title  pb-0  mb-0">
                <span class="span-cyan"> TERMINOS Y CONDICIONES</span>
              </h3>
              <p class="mt-0  pt-0">Referidos e invitados </p>
            </div>
          </b-col>
          <b-col cols="12" lg="6">
            <div class="steps-tyc  d-none  d-lg-flex">
              <div class="steps-tyc__item  flecha">
                <img src="../static/media/interseguroVehicular_v2/tyc_item1.png" alt="tyc_item">
                <p>Invita a tus amigos a comprar su Seguro Vehicular con tu link</p>
              </div>
              <div class="steps-tyc__item  flecha">
                <img src="../static/media/interseguroVehicular_v2/tyc_item2.png" alt="tyc_item">
                <p>Tus amigos compran un Seguro Vehicular usando tu link</p>
              </div>
              <div class="steps-tyc__item">
                <img src="../static/media/interseguroVehicular_v2/tyc_item3.png" alt="tyc_item">
                <p>¡Te regalamos dos entradas al cine y un combo gigante por su compra!</p>
              </div>
            </div>
            <div class="lista-tyc">
              <p>· Promoción válida hasta el 28/02/18. </p>
              <p>· Solo recibirán entradas gratis los clientes cuyo link haya sido utilizado por sus referidos para la compra de un Seguro Vehicular con nosotros.</p>
              <p>· Promoción válida solo para los Seguros Vehiculares entregados en Lima.</p>
              <p>· Los pagos solo pueden ser de forma online. </p>
              <p>· El cliente recibirá un correo con la entrada gratis cuando la persona referida haya comprado su Seguro Vehicular con nosotros. </p>
              <p>· Cada cliente podrá ganar un maximo de 10 entradas gratis. </p>
              <p>· No acumulable con otros descuentos y promociones.</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'InterseguroWeb',
  data(){

  },

};
</script>
<style lang="scss" scoped>
  .terminos{
    .lista-tyc{
      padding: 24px 0;
      p{
        margin-bottom: 4px;
        color: #5E5E5E;
      }
    }
    .flecha{
      position: relative;
      &:after{
        content: "";
        width: 8px;
        height: 25px;
        position: absolute;
        background: url(../static/media/interseguroVehicular_v2/tyc_flecha.png);
        background-repeat: no-repeat;
        right: 0;
        top: 25px;
      }
    }
    .steps-tyc{
      display: flex;
      background-color: rgba(7, 84, 196, 0.05);
      border-radius: 15px;
      padding: 24px 12px;
      font-size: 12px;
      &__item{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding: 0 18px;
        color: #0855C4;
      }
    }
    .section-header{
      h3{
        color: #ea0c90;
        font-weight: 600;
        font-size: 23px;
        font-family: omnessemibold
      }
      p{
        text-align: center;
        color: #5E5E5E;
        font-size: 17px;
        font-family: omnes;
      }
    }
    padding-top: 75px;
    min-height: 500px;
    .img_tyc{
      margin: 2rem 0rem;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    .terminos{
      .section-header{
        h3{
          text-align: left;
        }
        p{
          text-align: left;
        }
      }
    }
  }

</style>
