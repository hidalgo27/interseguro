<template>
  <div>
    <section class="contactanos">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="section-header pd-b16">
              <h3 class="section-header__title">Contáctate con 
                <span class="span-primario"> nosotros</span>
              </h3>
              
            </div>
          </b-col>

          <b-col cols="12" lg="6">
            <div>
              <img class="img_contactanos" src="../static/media/img/contactanos.png" alt="Contactanos Seguro Vehicular" name="Contactate-Seguro-Vehicular">
            </div>
          </b-col>
          <b-col cols="12" lg="6">
            <ul>
              <li>
                <div>
                  <p><img width="30" src="../static/media/img/contact-icon-call-verde.svg" alt="Contactate Seguro Vehicular"><span class="tag-1">500-0000</span></p>
                </div>
              </li>
              <li>
                <div>
                  <p><img width="30" src="../static/media/img/contact-icon-whatsapp-green.svg" alt="Whatsapp Interseguro Vehicular"><span class="tag-1">977 822 185</span></p>
                </div>
              </li>
              <li>
                <div>
                  <p><img width="30" src="../static/media/img/email_verde.svg" alt="email Interseguro Vehicular"><span class="tag-1">segurovehicular@interseguro.com.pe</span></p>
                </div>
              </li>
            </ul>
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
  .contactanos{
    padding-top: 75px;
    min-height: 500px;
    .img_contactanos{
      margin: 2rem 0rem;
      width: 100%;
    }
    .tag-1{
      color: #0855c4;
      font-size: 18px;
      line-height: 18px;
      padding-left: 8px;
    }
    .tag-2{
      color: aqua;
    }
  }
  ul{
    border-radius: 8px;    
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    li{
      list-style: none;
      div{
          padding-bottom: 12px;
      }
      p{
        display: flex;
        align-items: center;
      }
    }
  }
</style>
