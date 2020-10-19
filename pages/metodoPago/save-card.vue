<template>
   <section class="steps-box">       
        <b-container>
            <b-row  class="justify-content-center">
                <b-col cols="12" md="6" lg="6">
                    <ul class="steps">
                        <li class="steps__item">Pago</li>
                        <li class="steps__item">Tu información</li>
                        <li class="steps__item steps--active">Tu carro</li>
                        <li class="steps--progressBar"></li>
                    </ul>
                </b-col>
                <b-col cols="12" sm="10" md="10" lg="10">
                    <div class="img-form">
                        <img src="../../static/media/img/bp-car.svg" alt="icon step ingresa tu placa">
                    </div>
                    <b-form  class="form-horizontal form-content">

                        <h2 class="mb-4 text-center form-content__title text-uppercase">
                            <span class="tag-1">Empecemos,<br></span>
                            <span class="tag-0">completa tus Datos</span>
                        </h2>
                        <div class="form-body">
                            <b-row class="justify-content-center">
                                
                                <b-col  cols="12"  sm="6" md="5" lg="12" class="box-input">                                   
                                    <b-row  class="justify-content-center">
                                        
                                        <b-col  cols="12"  sm="6" md="6" lg="5">
                                            <b-form-group label="" label-for="placa">
                                                <b-form-input id="vehicleModelPlate" class="text-left input-vehicular text-uppercase  form-control" @keyup.native="validacionInput" maxlength="6" autocomplete="off"
                                                            type="text"
                                                            v-model="placa"
                                                            required
                                                            placeholder="Placa"
                                                            name="Placa" aria-label="Placa"
                                                            >
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>                                        
                                    </b-row>
                                </b-col>                                
                            </b-row>
                        </div>
                        <b-row class="box-btn row  justify-content-center">
                            <b-col cols="12" md="5">
                                <button type="submit" @click="onSubmit" 
                                class="box-btn__button box-btn--primary offset-3" 
                                :disabled='isDisabled'>CONTINUAR</button>
                            </b-col>                           
                        </b-row>
                    </b-form>  

                <div>    
                </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>

export default {
    layout: 'InterseguroHome',
    data () {
        return {            
            placa: "",
            estado_vehicle: 0,
            checkplaca: false,
            isDisabled: true,
            objVehicle:{},
        };
    },
    methods: {     
        hideModal(){
            this.$refs.ingresaTuPlaca.hide()
        },
        getVehicle () {
            return new Promise((resolve, reject) => {
                this.$axios.post('provider/v1/vehicle/plate/card/' + this.placa.toUpperCase())
                .then(res => {                        
                        if(res.data.code == 0){ 
                            this.objVehicle = res.data.body  
                            localStorage.setItem("policyId", res.data.body.policyId) 
                            if(this.objVehicle.activePolicy === true){
                                localStorage.setItem('objVeh', JSON.stringify(this.objVehicle))                                       
                                this.$router.push('/metodoPago/valida-tus-datos')                        
                                resolve(res)      
                            }else{
                                this.$swal({
                                    title: 'Oops...',
                                    text: "Tu póliza no esta activa",
                                    type: 'warning',
                                    showCancelButton: false,
                                    confirmButtonColor: '#2177CC',
                                    confirmButtonText: 'OK'
                                }) 
                                reject(res) 
                            }                                                                              
                        }else if(res.data.code == 201){     
                            this.$swal({
                                    title: 'Oops...',
                                    text: res.data.message,
                                    type: 'error',
                                    showCancelButton: false,
                                    confirmButtonColor: '#2177CC',
                                    confirmButtonText: 'OK'
                                })                                           
                            reject(res)       
                        } else{
                            this.$swal({
                                title: 'Oops...',
                                text: res.data.message,
                                type: 'error',
                                showCancelButton: false,
                                confirmButtonColor: '#2177CC',
                                confirmButtonText: 'OK'
                            }) 
                            reject(res)       
                        }                                              
                    })
                .catch(err => {
                    reject(err)
                })
            })
        },
        validacionInput(event){
            if ( this.placa.length == 6) {
                 this.isDisabled = false
            }else{
                this.isDisabled = true
            }            
        },
        onSubmit (evt) {
            evt.preventDefault()
            localStorage.setItem('placa', this.placa)
            this.getVehicle()
            .then(()=>{                      
            })
            .catch((err)=>{
            })            
            
        },
        PaginaVista(){
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'pagina_vista',
                'page-url': '/vehicular/metodoPago/save-card', 
                'page-title': 'Save Card'
            });
        }        
    },
    mounted () {  
        this.PaginaVista()   
    }
};
</script>
<style lang="scss" >
.steps-box{
    padding-top: 92px;
}

.check-ip .checkbox-aux__descripcion {
    top: 0px;
    padding-right: 43px;
}
.modal-datosPersonales{
    border: 0 !important;
    .btn-secondary{
        background: white;
        border: none;
        position: relative;
        height: 26px;
    }
    img{
        position: absolute;
        right: 0;
        top: -10px;
    }
    .modal-description{
        text-align: justify;
    }
    .btn-secondary:focus,  .btn-secondary:not(:disabled):not(.disabled).active:focus {
        box-shadow: none !important;
    }
    .btn:focus {
        box-shadow: none !important;
    }

}
.modal-personal-title{
    text-align: center;
}
@media (min-width: 768px) {
    .check-ip .checkbox-aux__descripcion {
        padding-right: 60px;
    }
  
 
}
</style>
