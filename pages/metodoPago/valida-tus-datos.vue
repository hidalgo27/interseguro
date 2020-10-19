<template>
    <section class="steps-box">
        <b-container>
            <b-row class="justify-content-center">
                <b-col cols="12" md="6" lg="6">
                    <ul class="steps">
                        <li class="steps__item">Pago</li>
                        <li class="steps__item">Tu información</li>
                        <li class="steps__item steps--active">Tu carro</li>
                        <li class="steps--progressBar"></li>
                    </ul>
                </b-col>
                <b-col cols="12"  sm="12">
                    <b-form class="form-horizontal  form-content">
                        <div class="text-center form-content__msg"></div>
                        <h2 class="text-center form-content__title text-uppercase">
                            <span class="tag-0">Confirma los</span>
                            <span class="tag-1">datos de tu carro</span>
                        </h2>

                        <b-row class="justify-content-center">
                            <b-col cols="12"  md="6">
                            <div class="form-body">

                                <b-row class="form-group">
                                    <span class="col col-form-label text-center text-uppercase info-title" >{{this.placa}}</span>
                                </b-row>

                                <b-row class="form-group justify-content-center">
                                    <b-col cols="12" md="6" class="  box-input" style="background: #b8c4ca38;">
                                        <label for="vehicleBrandId" class="form-label col-12 col-form-label label-completed-valida"><strong>Marca:</strong></label>

                                        <p>{{ this.objVehicle.brand}}</p>
                                    </b-col>

                                    <b-col cols="12" md="6" class="  box-input" style="background: #b8c4ca14;">
                                        <label for="vehicleModelYear" class="form-label col-12 col-form-label label-completed-valida"><strong>Año:</strong></label>
                                        <p>{{ this.objVehicle.modelYear}}</p>
                                    </b-col>
                                    
                                    
                                    <b-col cols="12" md="6" class="  box-input" style="background: #b8c4ca14;">
                                        <label for="vehicleModelId"  class="form-label col-12 col-form-label label-completed-valida"><strong>Modelo:</strong></label>
                                        <p>{{ this.objVehicle.model}}</p>
                                    </b-col>                                    
                                    
                                    <b-col cols="12" md="6" class="  box-input" style="background:  #b8c4ca38;">
                                        <label for="vehicleUseTypeId" class="form-label col-12 col-form-label label-completed-valida"><strong>Uso:</strong></label>
                                        <p>{{ this.objVehicle.useType}}</p>
                                    </b-col>     

  
                                </b-row>
                            </div>

                            <b-row class="box-btn justify-content-center">
                                <b-col cols="12" md="6">
                                    <button type="submit" @click="onSubmit"   class="box-btn__button box-btn--primary offset-3"  name="_eventId_next" >continuar
                                    </button>
                                    <a class="box-btn__button box-btn--back"  @click="volver" href="/cart.html?execution=e1s2&amp;_eventId=back">Volver </a>
                                </b-col>
                            </b-row>

                            <br>
                            
                        </b-col>
                        </b-row>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>

    </section>
</template>
<style lang="scss" scoped>
.steps-box{
    padding-top: 92px;
}
    .check-0km{
        label{
            position: relative;
        }
    }
    .oculto{
        display: none;
    }
    .label-completed-valida{
        padding-left: 0;
    }
</style>

<script>
    export default {
        layout: 'InterseguroHome',
        data () {
            return {   
                inputActive: true,         
                estado_vehicle_: true,
                listBrand:[],
                listModel:[],
                listModelId:[],
                listYear:[],
                listUses:[],
                placa:'',
                auto_0k:false,
                objVehicle: {}
                

            }
        },        
        props:["ipt_placa"],
        methods: {     

            volver (evt) {
                evt.preventDefault();
                this.$router.push('/metodoPago/save-card');               
            },
            
            onSubmit(evt){
                evt.preventDefault();
                this.$router.push('/metodoPago/actualizar-tarjeta') 
                    
            },


            getBrand () {
                return new Promise((resolve, reject) => {
                    this.$axios.get('provider/v1/other/brands')
                    .then(res => {
                        if (res) {
                            this.listBrand = res.data.body;
                        resolve(res)
                        } else {
                            reject(res)
                        }
                    })
                    .catch(err => {
                        reject(err)
                    })
                })
            },
            getModelLocal () {
                return new Promise((resolve, reject) => {
                    this.$axios.post('provider/v1/other/models-available/'+this.objVehicle.brandId+'/'+this.objVehicle.modelYear)
                    .then(res => {
                        if (res) {     
                            this.listModel = res.data.body;
                            for (let index = 0; index < this.listModel.length; index++) {                                
                                this.listModelId.push(this.listModel[index].id)                    
                            }                           
                            
                        resolve(res)
                        } else {
                        reject(res)
                        }
                    })
                    .catch(err => {
                        reject(err)
                    })
                })
            },
            getYear () {
                return new Promise((resolve, reject) => {
                    this.$axios.get('provider/v1/other/years')
                    .then(res => {
                        if (res) {     
                            this.listYear = res.data.body
                            resolve(res)
                        } else {
                            reject(res)
                        }
                    })
                    .catch(err => {
                        reject(err)
                    })
                })
            },
            getUses () {
                return new Promise((resolve, reject) => {
                    this.$axios.get('provider/v1/other/uses')
                    .then(res => {
                        if (res) {     
                            this.listUses = res.data.body
                        resolve(res)
                        } else {
                        reject(res)
                        }
                    })
                    .catch(err => {
                        reject(err)
                    })
                })
            },
            PaginaVista(){
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'pagina_vista',
                    'page-url': '/vehicular/metodo-pago/valida-tus-datos', 
                    'page-title': 'Valida-Tus-Datos'
                });
            } 

        },

        mounted: function () {
            this.placa = localStorage.getItem("placa")
            this.objVehicle = JSON.parse(localStorage.getItem("objVeh"))
            if (localStorage.getItem("objVeh") !== null) {                
                this.objVehicle = JSON.parse(localStorage.getItem("objVeh"))
                this.objVehicle.modelId = null
            
            }

            this.getModelLocal()
            this.getBrand()
            this.getYear()
            this.getUses()
            this.PaginaVista()
        },
        computed:{

        }
    }
</script>

