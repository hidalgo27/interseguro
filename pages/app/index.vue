<template>
<div class="is-intro">

  <div class="is-intro-inner">
    <div class="contenedor-desktop">
      <div class="caja">
        <div class="caja1">
          <div class="caja-izquierda">
            <img src="../../static/media/app/logo-interseguro-app.png" width="280px"/>
            <div style="height: 50px"></div>
            <div class="titulo" > Descarga el app de tu Seguro Vehicular</div>
            <div style="height: 10px"></div>
            <div class="detalle"> Conoce todos tus beneficios y descubre una nueva experiencia digital</div>
            <div style="height: 50px"></div>

            <transition
              name="top"
              mode="out-in"
            >
              <div v-if="!mensajeEnviado" style="width: 100%; height: 80px;">
                <div style="display: flex; flex-direction: row; align-items: center" key="enviar">
                  <div class="tel" >+51</div>
                  <div> <b-input class="input" type="tel" maxlength="9" v-model="inputNumeroCelular" placeholder="Escribe tu número de teléfono" ></b-input> </div>
                  <div> <b-button class="is-button" size="lg" :disabled="loadingButton" @click="enviarNumeroCelular">
                    <div style="display: flex; width: 100%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                    ">
                      <b-spinner small type="grow" style="margin-right: 5px" v-if="loadingButton"></b-spinner>
                      <div style="height: 21px;" v-if="!loadingButton">Enviar link</div>
                      <div style="height: 21px;" v-else>Enviando...</div>
                    </div>
                  </b-button> </div>
                </div>
              </div>
              <div v-else key="enviado" style="width: 100%; height: 80px;">
                <b-alert show variant="light" style="color: #245fff; width: 100%; font-size: 18px; text-align: center" >
                  ¡Listo! El link fue enviado, revisa tus mensajes y descarga el app 🤩 ✔
                </b-alert>
                <b-link @click="reenviarNumeroCelular" style="text-decoration: underline; color: white; font-size: 16px" >
                  ¿No te llego el link? Vuelve a enviar aquí
                </b-link>
              </div>

            </transition>

          </div>
        </div>
        <div class="caja2">
          <div style="width: 100%; display: flex; justify-content: end">
            <img src="../../static/media/app/imagen-app.png" class="imagen"/>
          </div>
        </div>
      </div>
      <div class="footerv2-app">
        <div style="font-size: 28px" class="footer-texto">
          Llévalo siempre contigo ❤️
        </div>
      </div>
    </div>
    <div class="contenedor-mobile">
      <div class="caja">
        <div class="caja-mobile">
          <div class="caja-izquierda">
            <img src="../../static/media/app/logo-interseguro-app.png" width="180px"/>
            <div style="height: 70px"></div>
            <div class="titulo" > Descarga el app de tu Seguro Vehicular</div>
            <div style="height: 10px"></div>
            <div class="detalle"> Conoce todos tus beneficios y descubre una nueva experiencia digital</div>
            <div style="height: 30px"></div>
            <transition
              name="top"
              mode="out-in"
            >
              <div v-if="!mensajeEnviado" >
                <div class="caja-input">
                  <div style="width: 280px; position: relative; display: flex; justify-content: center; align-items: center">
                    <div class="tel" >+51</div>
                    <div > <b-input class="input" type="tel" maxlength="9" v-model="inputNumeroCelular" placeholder="Número de teléfono"></b-input> </div>
                  </div>
                </div>
                <div style="height: 20px"></div>
                <div style="width: 280px; position: relative; display: flex; justify-content: center; align-items: center">
                  <div> <b-button class="is-button" size="lg" :disabled="loadingButton" @click="enviarNumeroCelular">
                    <div style="display: flex; width: 100%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                    ">
                      <b-spinner small type="grow" style="margin-right: 5px" v-if="loadingButton"></b-spinner>
                      <div style="height: 21px;" v-if="!loadingButton">Enviar link</div>
                      <div style="height: 21px;" v-else>Enviando...</div>
                    </div>
                  </b-button> </div>
                </div>
              </div>
              <div v-else key="enviado" style="width: 280px; text-align: center">
                <b-alert show variant="light" style="color: #245fff; width: 100%; font-size: 16px; text-align: center" >
                  ¡Listo! El link fue enviado, revisa tus mensajes y descarga el app 🤩
                </b-alert>
                <b-link @click="reenviarNumeroCelular" style="text-decoration: underline; color: white; font-size: 14px" >
                  ¿No te llego el link? Vuelve a enviar aquí
                </b-link>
              </div>
            </transition>

          </div>
        </div>
      </div>
      <div class="footerv2-app-mobile">
        <div class="footer-texto">
          Llévalo siempre contigo ❤️
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "index.vue",
  data () {
    return {
      loadingButton: false,
      mensajeEnviado: false,
      inputNumeroCelular:'',
    }
  },
  methods:{
    enviarNumeroCelular(){

      this.loadingButton = true;

      if (this.inputNumeroCelular.length == 9) {
        this.$store.dispatch('common/enviarMsjCelular',this.inputNumeroCelular).then((res)=>{
          if (res.data.code == 0) {
            this.mensajeEnviado = true;
          }else{
            this.$swal({
              title: "Ups!",
              text: "Tenemos algunos problemas, vuelvo a intentarlo mas tarde",
              type: "warning",
              showCancelButton: false,
              confirmButtonColor: "#2177CC",
              confirmButtonText: "OK"
            })
            this.inputNumeroCelular = ''
          }

          this.loadingButton = false;
        })
      }else{
        this.$swal({
          title: "Ups!",
          text: "Ingrese un número válido",
          type: "warning",
          showCancelButton: false,
          confirmButtonColor: "#2177CC",
          confirmButtonText: "OK"
        })
        this.inputNumeroCelular = ''
        this.loadingButton = false;
      }
    },
    reenviarNumeroCelular(){

      this.$store.dispatch('common/enviarMsjCelular',this.inputNumeroCelular).then((res)=>{
        if (res.data.code == 0) {
          this.$swal({
            title: "Listo!",
            text: "Mensaje reenviado con éxito",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: "#2177CC",
            confirmButtonText: "OK"
          })
          this.mensajeEnviado = true;
        }else{
          this.$swal({
            title: "Ups!",
            text: "Tenemos algunos problemas, vuelvo a intentarlo mas tarde",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#2177CC",
            confirmButtonText: "OK"
          })
          this.inputNumeroCelular = ''
        }

      })

    },

  }
}
</script>

<style lang="scss" scoped>

.slide-fade-enter-active {
  transition: all .10s ease-in-out;
}
.slide-fade-leave-active {
  transition: all .10s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  transition: all .10s ease-in-out;
  opacity: 0;
}

.top-enter-active, .top-leave-active { transition: 0.8s; }
.top-enter, .top-leave-to { opacity: 0; transform: translate3d(0, -8px, 0); }
.top-move { opacity: 0.8; transition: 0.8s; }

@media(max-width: 1024px){
  .contenedor-mobile{
    //max-width: 900px;
    //background: #00ADEE;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    z-index: 1;
    //background: greenyellow;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
  .contenedor-desktop{
    display: none;
  }
}

@media(min-width: 1025px){

  .contenedor-mobile{
    display: none;
  }

  .contenedor-desktop{
    //max-width: 900px;
    //background: #00ADEE;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    z-index: 1;
    //background: greenyellow;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

}

.is-intro {
  width: 100%;
  height: 100vh;
  position: relative;
  background: white;
}

.is-intro-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(to left top, #37173e 20%, #1e1f35);
  padding: 100px 0 0;
  position: relative;
  min-height: 600px;
}


.caja{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80%;
}

.caja1{
  display: flex;
  position: relative;
  //margin-left: 120px;
  //background: #00aded;
  height: auto;
  width: 70%;
  align-items: center;
  justify-content: center;

  .caja-izquierda{
    //background: #9c5eff;
    //max-width: 350px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    max-width: 600px;
  }

  .titulo{
      font-family: "Omnes SemiBold";
      width: 400px;
      font-size: 40px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.24;
      letter-spacing: normal;
      text-align: left;
      color: #fff;

  }

  .detalle{
    font-family: "Omnes medium";
    padding-right: 80px;

    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  }

  .tel{
    font-family: "Omnes medium";
    font-size: 30px;
    margin-right: 5px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  }

  .is-button{
    color: white;
    background-color: #df0e89;
    font-size: 18px;
    width: 209px;
    height: 50px;
    margin-left: 20px;
  }

  .input{
    width: 280px;
    height: 50px;
    font-size: 18px;
    text-align: center;
    margin-left: 10px;
    padding-top: 12px;
  }

}

.caja2{
  display: flex;
  //background: red;
  position: relative;
  height: auto;
  width: 40%;
  align-items: center;
  justify-content: flex-end;
}


.caja-mobile{
  display: flex;
  position: relative;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;

  .caja-izquierda{
    //background: #9c5eff;
    //max-width: 350px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .titulo{
    font-family: "Omnes SemiBold";
    width: 300px;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: normal;
    text-align: center;
    color: #fff;

  }

  .detalle{
    font-family: "Omnes medium";
    max-width: 320px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
  }

  .caja-input{
    display: flex;
    flex-direction: row;
    align-items: center
  }

  .tel{
    position: absolute;
    left: 0;
    font-family: "Omnes medium";
    font-size: 20px;
    margin-right: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    padding-top: 5px;
    color: #fff;
  }

  .is-button{
    color: white;
    background-color: #df0e89;
    font-size: 18px;
    width: 209px;
    height: 50px;

  }

  .input{
    //width: 190px;
    height: 50px;
    font-size: 18px;
    text-align: center;
    padding-top: 12px;
  }

}

.btn-secondary:not(:disabled):not(.disabled):active{
  color: #fff;
  background-color: #ab0265;
  border-color: #ab0265;
}

.imagen{
  width: 100%;
  max-width: 650px;
}

.footerv2-app{

  text-align: center;
  //opacity: 0;
  transform: translate(-50%, -100%);
  position: absolute;
  left: 50%;
  bottom: 20px;

  .footer-texto{
    font-family: "Omnes Medium";
    font-size: 30px;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.67;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  }


}


.footerv2-app-mobile{

  text-align: center;
  transform: translate(-50%, -100%);
  position: absolute;
  left: 50%;
  bottom: 40px;

  .footer-texto{
    width: 190px;
    text-align: center;
    //background: #00ADEE;
    font-family: "Omnes Medium";
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.67;
    letter-spacing: normal;
    color: #fff;
  }


}

.footer-app {
  display: flex;
  //background: #00bb31;
  position: relative;
  height: 20%;
  width: 100%;

  .footer-texto{
    font-family: "Omnes Medium";
    font-size: 30px;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.67;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  }

}

</style>
