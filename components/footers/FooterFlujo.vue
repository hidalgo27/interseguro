<template>
  <div>
    <div class="writeme" data-v-d5c59bf2="" v-if="urllocal">
      <a target="_blank" href="https://api.whatsapp.com/send?phone=51934792742&text=%C2%A1Hola%21+Vengo+de+la+Web+de+Seguro+Vehicular+y+quiero+m%C3%A1s+informaci%C3%B3n+sobre+el+seguro" rel="noopener" data-v-d5c59bf2="">
        <img src="./../../static/media/imagenes/home/img-watsapp.svg" alt="Escribir algún contacto" class="call d-lg-none" style="width:50px;border-radius: 50px;" data-v-d5c59bf2="">
      <img src="./../../static/media/imagenes/home/img-watsapp.svg" alt="Escribir algún contacto" class="call d-none d-lg-block" data-v-d5c59bf2="">
      </a>
    </div>
    <section>
      <b-container fluid class="banner-footer">
        <b-row class="text-center" align-v="center">
          <b-col cols="12">
            <p>Con el respaldo del grupo:  <img src="./../../static/media/img/home/logo-inercorp-footer.svg" alt=""></p>
          </b-col>
        </b-row>
      </b-container>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  mounted() {
      
  }
};
</script>
<style lang="scss" scoped>
.banner-footer{
  background: #0055c8;
  height: 124px;
  color: #FFFFFF;
  p{
    padding-top: 50px;
    font-family: 'Omnes Regular';
    font-size: 16px;

  }
  img{
    padding-left: 10px;
  }
}


@media (max-width: 768px) {
  .banner-footer{
    background: #0055c8;
    height: 90px;
    color: #FFFFFF;
    p{
      padding-top: 35px;
      font-family: 'Omnes Regular';
      font-size: 14px;

    }
    img{
      padding-left: 10px;
      width: 98px;
    }
  }
}

</style>

