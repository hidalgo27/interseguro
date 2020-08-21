<template>
  <div>
    <section class="contactanos">
      <b-container>
        <b-row>
          <b-col cols="12" lg="12">
            <div class="contenido-texto  d-block  d-lg-none">
                <h3>¡te vamos a extrañar!</h3>
                <p class="subtitulo">La cancelación de tu suscripción fue exitosa.</p>                
            </div>
            <div class="contactanos__body">
                <div class="contenido-texto  d-none  d-lg-flex">
                    <h3>¡te vamos a extrañar!</h3>
                    <p class="subtitulo">La cancelación de tu suscripción fue exitosa.</p>
                    <p  class="parrafo">Recuerda que siempre estamos constantemente informando sobre novedades, ofertas, descuentos y nuevos beneficios para nuestros clientes.</p>
                </div>
            </div>

             <div class="contenido-texto  d-block  d-lg-none">
                <p class="parrafo">Recuerda que siempre estamos constantemente informando sobre novedades, ofertas, descuentos y nuevos beneficios para nuestros clientes.</p>
            </div>

            
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
    layout: "InterseguroHome",
    data() {
      return {
        codigoRemarketing: ""
      }
    },
    methods: {
      remarketingv2(){
        this.$store.dispatch('common/getVehicle', this.codigoRemarketing)
            .then((res) =>{
              resolve(response)
        })
      },
    },
    mounted() {      
      if(this.$route.params.code){
        this.codigoRemarketing = this.$route.params.code
        this.remarketingv2()
      }else{
        this.$nuxt.$router.push("/");
      }
      
    },
};
</script>
<style lang="scss" scoped>
  .contactanos{
    padding-top: 92px;
    min-height: 590px;
    &__body{
        background: url("../../static/media/interseguroVehicular_v2/unsubscribe.png");
        height: 100%;
        max-height: 500px;
        background-repeat: no-repeat;
        display: flex;
        justify-content: flex-end;
        background-size: contain;        
    }
    .contenido-texto{
        width: 100%;
        h3{
            color: #ea0c90;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: -0.06px;
            line-height: 40px;
            text-align: center;             
            text-transform: uppercase;
            width: 100%;
        }
        .parrafo{
            color: #5E5E5E;
            font-size: 16px;
            font-weight: 400;
            text-align: center;
            margin-bottom: 54px;
        }
        .subtitulo{
            color: #5E5E5E;
            font-size: 20px;
            font-weight: 600;
            letter-spacing: -0.03px;
            width: 80%;
            margin: auto;
            margin-bottom: 24px;
            text-align: center;
        }
    }
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
  @media (min-width: 768px) {
    .contactanos{
        &__body{
            background-position-x: center;
        }
    }  
  }
  @media (min-width: 1024px) {
    .contactanos{
        &__body{
            width: 100%;   
            height: 420px;  
            background-position-x: left;
        }
        .contenido-texto{
            width: 55%;
            padding-top: 18px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            h3{
                color: #ea0c90;
                font-size: 30px;
                font-weight: 600;
                letter-spacing: -0.06px;
                line-height: 40px;
                text-align: left; 
                text-transform: uppercase;
            }
            .parrafo{
                color: #5E5E5E;
                font-size: 18px;
                font-weight: 400;
                line-height: 21px;
                width: 473px;
                text-align: left;
                width: 90%;
            }
            .subtitulo{
                color: #5E5E5E;
                font-size: 20px;
                font-weight: 600;
                letter-spacing: -0.03px;                
                margin: 0;
                margin-bottom: 12px;
                text-align: left;
            }
        }
      }
    
  }
</style>
