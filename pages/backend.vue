<template>
  <section class="section_backend">
    <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="6" v-bind:class="{ oculto : !isActive }">
          <div class="login">
            <h2 class="text-center">Login Backend</h2>
            <b-form>
              <b-form-group label="Ingrese su Usuario">
                <b-form-input class="input_backend" type="text" v-model="user.name" required></b-form-input>
              </b-form-group>

              <b-form-group label="Ingrese su Contraseña:">
                <b-form-input class="input_backend" type="password" v-model="user.pass" required></b-form-input>
              </b-form-group>

              <b-row class="box-btn row justify-content-center">
                <b-col cols="12" md="5">
                  <button
                    class="box-btn__button box-btn--primary offset-3"
                    type="submit"
                    @click="onLogin"
                  >CONTINUAR</button>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </b-col>

        <b-col cols="6" v-bind:class="{ oculto : isActive }">
          <h2 class="text-center">Actualizar datos de la póliza</h2>
          <b-form>
            <b-form-group class="grupo-form" id="exampleInputGroup2" >
              <label>Número de Póliza:</label>
              <b-form-input
                id="exampleInput2"
                class="input_backend"
                @keyup.native="validacionInputGeneral($event)"
                @keydown.native="validacionInputGeneral($event)"
                @keypress.native="validacionInputGeneral($event)"
                type="tel"
                v-model="form.poliza"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group class="grupo-form" id="exampleInputGroup3">
              <label for="">VIN:</label>
              <b-form-input
                id="exampleInput3"
                class="input_backend"
                type="text"
                @keyup.native="validacionInputGeneral($event)"
                @keydown.native="validacionInputGeneral($event)"
                @keypress.native="validacionInputGeneral($event)"
                v-model="form.vin"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group class="grupo-form" id="exampleInputGroup4" >
              <label for="">Color:</label>
              <b-form-input
                id="exampleInput4"
                class="input_backend"
                type="text"
                @keyup.native="validacionInputGeneral($event)"
                @keydown.native="validacionInputGeneral($event)"
                @keypress.native="validacionInputGeneral($event)"
                v-model="form.color"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group class="grupo-form" id="exampleInputGroup5">
              <label for="">Dirección:</label>
              <b-form-input
                id="exampleInput5"
                class="input_backend"
                type="text"
                v-model="form.address"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group class="grupo-form" id="exampleInputGroup6">
              <label for="">Sexo:</label>
              <b-form-select v-model="gender" class="mb-3">
                <option :value="null">Sexo</option>
                <option value="2">Masculino</option>
                <option value="1">Femenino</option>
              </b-form-select>
            </b-form-group>

            

            <b-form-group class="grupo-form" id="exampleInputGroup6">
              <label for="">Fecha de nacimiento o Fecha de constitución:</label>
              <b-form-input
                id="fecha-nacimiento"
                @keyup.native="validacionInput($event)"
                class="input_backend input-vehicular iptGral__input iptClient form-control input-id"
                autocomplete="off"
                autofocus
                type="tel"
                v-model="form.birthDate"                
                maxlength="10"
                placeholder="dd/mm/aaaa"
              ></b-form-input>
            </b-form-group>

            <b-form-group class="grupo-form" id="exampleInputGroup3">
              <label for="">Motor:</label>
              <b-form-input
                id="exampleInput3"
                class="input_backend"
                type="text"
                @keyup.native="validacionInputGeneral($event)"
                @keydown.native="validacionInputGeneral($event)"
                @keypress.native="validacionInputGeneral($event)"
                v-model="form.motor"
                required
              ></b-form-input>
            </b-form-group>


            <b-form-group class="grupo-form" id="exampleInputGroup3">
              <label for="">Placa:</label>
              <b-form-input
                id="exampleInput3"
                class="input_backend"
                type="text"
                maxlength="6"
                @keyup.native="validacionInputGeneral($event)"
                @keydown.native="validacionInputGeneral($event)"
                @keypress.native="validacionInputGeneral($event)"
                v-model="form.placa"
                required
              ></b-form-input>
            </b-form-group>


            <b-form-group class="grupo-form" id="exampleInputGroup3">
              <label for="">Documento:</label>
              <b-form-input
                id="exampleInput3"
                class="input_backend"
                type="text"
                @keyup.native="validacionInputGeneral($event)"
                @keydown.native="validacionInputGeneral($event)"
                @keypress.native="validacionInputGeneral($event)"
                v-model="form.documento"
                required
              ></b-form-input>
            </b-form-group>

            <b-row class="box-btn row justify-content-center">
              <b-col cols="12" md="5">
                <button
                  class="box-btn__button box-btn--primary offset-3"
                  type="submit"
                  :disabled="isdisabled"
                  @click="onSubmit"
                >CONTINUAR</button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<style lang="scss" scoped>
.grupo-form  {
  div{
    display: flex;
    background: green;
  }    
  label{
    width: 220px;
    display: inline-block;
  }
  
}
.main-nav {
  margin-bottom: 50px;
}
.login {
  height: 500px;
}
.section_backend {
  margin-top: 80px;
  h2 {
    color: #0d47a1;
    padding-bottom: 24px;
  }
}
.input_backend {
  border: 1px solid #ced4da;
  border-radius: 0;
  height: 45px;
  &:focus {
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0) inset, 0 0 1px #4ec4ff;
  }
}
.oculto {
  display: none;
}
</style>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  layout: "InterseguroHome",
  data() {
    return {
      isdisabled: false,
      gender: null,
      loading: false,
      color: "#00ADEE",
      size: "45px",
      valor: "",
      poliza: true,
      user: {
        name: "",
        pass: ""
      },
      form: {
        poliza: "",
        vin: "",
        color: "",
        address: "",
        birthDate: "",
        motor: "",
        placa: "",
        documento: ""
      },
      itemElegido:{
        poliza: "",
        vin: "",
        color: "",
        address: "",
        birthDate: "",
        motor: "",
        placa: "",
        documento: ""
      }
    };
  },
  components: {
    PulseLoader
  },
  methods: {
    // this.objClients.phoneNumber = this.objClients.phoneNumber != null || undefined ? this.objClients.phoneNumber.replace(/[^0-9\s]/gi, '').replace(/[_\s]/g, '') : ""
    // [^a-z\s]
    validacionInputGeneral(event) {
      this.form.poliza =
        this.form.poliza != null || undefined
          ? this.form.poliza.replace(/[^0-9\s]/gi, "").replace(/[_\s]/g, "")
          : "";
      this.form.vin =
        this.form.vin != null || undefined
          ? this.form.vin.replace(/[^A-Za-z0-9\s]/gi, "").replace(/[_\s]/g, "")
          : "";
      this.form.color =
        this.form.color != null || undefined
          ? this.form.color.replace(/[^A-Za-z\s]/gi, "")
          : "";
    },
    getbackend() {
      this.itemElegido.vin = this.form.vin,
      this.itemElegido.color = this.form.color,
      this.itemElegido.address = this.form.address,
      this.itemElegido.birthDate = this.form.birthDate,
      this.itemElegido.gender = this.gender,
      this.itemElegido.engineNumber = this.form.motor,
      this.itemElegido.plateNumber = this.form.placa,
      this.itemElegido.documentNumber = this.form.documento,
      this.itemElegido.poliza = this.form.poliza
      setTimeout(() => {
        this.$store.dispatch('common/getbackend',this.itemElegido)
      .then((res) => {
        if (res.data.code == 0) {
          this.isdisabled = false
              this.listCotizacion = res.data.body;
              this.$swal({
                title: "Listo!",
                text: res.data.message,
                type: "success",
                showCancelButton: false,
                confirmButtonColor: "#2177CC",
                confirmButtonText: "OK"
              });
              this.form.poliza = "";
              this.form.vin = "";
              this.form.color = "";
              this.form.address = "";
              this.gender= null
              this.loading = false;
              this.poliza = true;
              this.form.motor = "";
              this.form.placa = "";
              this.form.documento = "";
              this.loading = false;
            } else {
              this.$swal({
                title: "Oops...",
                text: res.data.message,
                type: "error",
                showCancelButton: false,
                confirmButtonColor: "#2177CC",
                confirmButtonText: "OK"
              });
              this.loading = false;
            }
      })
      .catch(()=>{
        this.isdisabled = false
        this.loading = false;
      })
      }, 0)
    },
    validacionInput(event) {
      var str = event.target.value;
      let charCode = event.which ? event.which : event.keyCode;
      if (str.length === 1) {
        if (
          str !== "0" &&
          str !== "1" &&
          str !== "2" &&
          str !== "3" &&
          event.keyCode !== 8
        ) {
          this.form.birthDate = "0" + str + "/";
        }
      } else if (str.length === 2) {
        if (event.keyCode !== 8) {
          this.form.birthDate = this.form.birthDate
            .replace(/\W/gi, "")
            .replace(/(.{2})/g, "$1/");
        }
      } else if (
        (str.length === 4 || str.length === 5) &&
        event.keyCode !== 8
      ) {
        if (str.length === 4) {
          let arrayMonth = str.split("/");
          if (arrayMonth[1] !== "0" && arrayMonth[1] !== "1") {
            this.form.birthDate =
              arrayMonth[0] + "/" + "0" + arrayMonth[1] + "/";
          }
        } else {
          this.form.birthDate = str + "/";
        }
      }
    },
    onSubmit(eve) {
      this.isdisabled = true
        this.loading = true;
        eve.preventDefault();
        this.getbackend()
    },
    // documenta codigo
    onLogin(eve) {
      eve.preventDefault();
      if (this.user.name == "admin" && this.user.pass == "qu4l1t4t2019!") {
        this.poliza = false;
      } else {
        this.$swal({
          title: "Oops...",
          text: "Datos Incorrectos",
          type: "error",
          showCancelButton: false,
          confirmButtonColor: "#2177CC",
          confirmButtonText: "OK"
        });
      }
    }
  },

  mounted: function() {},
  computed: {
    isActive: function() {
      return this.poliza;
    }
  }
};
</script>

