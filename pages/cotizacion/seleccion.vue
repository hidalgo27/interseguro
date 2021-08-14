<template>
    <div class="pagina-seleccion">
        <div class="container"> 
            <b-row class="row_custom">
                <b-col cols="12" xl="12" class="m-auto">
                    <div class="box-steps">
                        <ul class="steps" style="display:inline-flex">
                            <div class="steps__item ">
                                Pago
                            </div>
                            <div class="steps__item ">
                                Planes
                            </div>
                            <div class="steps__item steps--active  paso1">
                                Mi carro
                            </div>
                            <li class="steps--progressBar" ></li> 
                            <!-- 
                            <template>
                                <router-link class="steps__item " to="/cotizacion/seleccion"   style="cursor: auto;"><li>pago</li></router-link>
                            </template>              
                            <template >
                                <span v-if="documento_steps2 != null" class="steps__item " @click="continuar" style="cursor: pointer;"></span>
                                <router-link v-else class="steps__item " to="/cotiza/cotizacion" style="cursor: auto;"><li>Planes</li></router-link>
                            </template>
                            <template >
                                <router-link  class="steps__item   steps--active  paso1" to="/cotiza/cotizacion"><li>Mi carro</li></router-link>                
                            </template>                              
                            <li class="steps--progressBar"></li>  
                            -->              
                        </ul>
                    </div> 
                </b-col>  
            </b-row>  


            <div class="row row_custom">
                <!-- resumen mobile -->
                <b-row class="d-flex  d-lg-none">
                        <b-col cols="12">
                            <div class="accordion" role="tablist">
                                <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button block v-b-toggle.accordion-proteccion >Ver resumen</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-proteccion" visible accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>
                        </b-col>
                </b-row>
            </div> 
            <div class="row row_custom"> 
                <div class="col-12  col-xl-8">
                    <b-row  class="d-flex justify-content-center">
                        <b-col cols="11" lg="9" class="h-auto">
                            <div class="lista1" v-bind:class="{mostrarListaMarca: mostrarListaMarca}">                                                            
                                <p class="flujo-titulo  mb-4">
                                    <img src="./../../static/media/imagenes/seleccion/row-back.svg" alt="" @click="volver2($event)"> 
                                    <span style="margin-left:10px">Selecciona la marca</span> 
                                </p>
                            </div>
                            <div class="lista2" v-bind:class="{mostrarListaAnio: mostrarListaAnio}">
                                <p class="flujo-titulo  mb-4">
                                    <img src="./../../static/media/imagenes/seleccion/row-back.svg" alt="" @click="volver2($event)">
                                    <span style="margin-left:10px">Seleciona el año</span> 
                                </p>
                            </div> 
                            <div class="lista3" v-bind:class="{mostrarListaModelo: mostrarListaModelo}">
                                <p class="flujo-titulo  mb-4">
                                    <img src="./../../static/media/imagenes/seleccion/row-back.svg" alt="" @click="volver2($event)">
                                    <span style="margin-left:10px">Seleciona el modelo</span> 
                                </p> 
                            </div>                                 
                        </b-col>                            
                    </b-row>  
                </div>
                   
            </div>          
            <div class="row row_custom">
                <div class="col-12  col-xl-8">
                    <b-row class="d-flex justify-content-center" >
                        <b-col cols="11" lg="9" class="h-auto">   
                            
                            <div class="listas">
                                <div class="lista1" v-bind:class="{mostrarListaMarca: mostrarListaMarca}">                                       
                                    <div class="box-lista">
                                        <div class="box-input">
                                            <b-form-input v-model="filterBrand" type="text" 
                                            autocomplete="off" placeholder="Buscar la marca" v-on:keyup="filterBrands">
                                            </b-form-input>
                                        </div>
                                        <div class="listas--box">
                                            <div  class="item" v-for="(item, index) in listBrands" :key="index" @click="seleccionaMarca(item)">                      
                                                <p v-if="item.name == '----'" class="guiones" style="cursor: auto;">--------------</p>
                                                <p :id="item.name" v-else>{{item.name}}</p>
                                            </div>  
                                        </div>
                                    </div>
                                    
                                    
                                </div>

                                <div class="lista2" v-bind:class="{mostrarListaAnio: mostrarListaAnio}">
    
                                    <!-- <p class="flujo-titulo  mb-4">Seleciona el año</p> -->
                                    <div class="box-lista">
                                        <div class="listas--box">
                                            <div class="item" v-for="(item, index) in listYears" :key="index" @click="seleccionaAnio(item)">                    
                                                <p>{{item.name}}</p>
                                            </div>
                                        </div> 
                                    </div>                                                
                                </div>

                                <div class="lista2" v-bind:class="{mostrarListaModelo: mostrarListaModelo}">
                                    <!-- <p class="flujo-titulo  mb-4">Seleciona el modelo</p> -->
                                    <div class="box-lista">
                                        <div class="listas--box">
                                            <div class="item" v-for="(item, index) in listModels" :key="index" @click="seleccionaModelo(item)">                    
                                                <p>{{item.name}}</p>
                                            </div>                 
                                        </div>
                                    </div>
                                     
                                </div>

                            </div>
                        </b-col>
                    </b-row>
                </div>
                <div class="col-12  col-lg-4">
                    <div class="resumen-proteccion  d-none  d-lg-block">                        
                        <div class="resumen-proteccion__cabecera">
                            <p>RESUMEN DE TU PROTECCIÓN</p>
                        </div>
                        <div class="resumen-proteccion__cuerpo">
                            <div class="datos-carro">
                                <h3 class="resumen-proteccion--subtitulo">DATOS DE TU CARRO</h3>
                                <div class="datos-carro--detalle">
                                    <p><span class="campo">Mi Placa</span><span style="text-transform:uppercase">{{this.$store.state.common.plateNumber}}</span></p>
                                    <p class="marca" v-bind:class="{mostrarResumenMarca: mostrarResumenMarca}"><span class="campo" >Marca</span><span>{{this.$store.state.common.objVehiculo.brand}}</span></p>
                                    <p class="anio" v-bind:class="{mostrarResumenAnio: mostrarResumenAnio}"><span class="campo">Año</span><span>{{this.$store.state.common.objVehiculo.modelYear}}</span></p>
                                    <p class="modelo" v-bind:class="{mostrarResumenModelo: mostrarResumenModelo}"><span class="campo">Modelo</span><span>{{this.$store.state.common.objVehiculo.model}}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        layout: "InterseguroFlujo",
        data() {
            return {
                filterBrand : '',
                /* NUEVOS */
                anioActual: 0,
                objVehiculo: {},
                /*********************************/
                mostrarItemMarca: false,
                mostrarItemAnio: false,
                mostrarItemModelo: false,
                mostrarLista: true,
                mostrarListaMarca: false,
                mostrarListaAnio: false,
                mostrarListaModelo: false,
                activadorItem: 0,
                mostrarResumenMarca: false,
                mostrarResumenAnio: false,
                mostrarResumenModelo: false,
                listitemElegido:{},
                listBrands:{},
                listBrandsOrigin:{},
                listBrandsTemp:{},
                listYears: {},
                listModels:{},
                listEndorsements: [],
                itemElegido: {
                    brandId:'',
                    brand:'',
                    modelYear: '',
                    model: '',
                    modelId:'',
                    remarketingId:'',
                    assignedPrice: null,
                    businessId:1,
                    discountType: '',
                    assignedPrice: null
                },
            }
        },
        created() {
            this.anioActual = new Date().getFullYear()
            console.log("CREATED")
            
            this.$store.dispatch('common/getYear').then((res)=>{
                this.listYears = res.data.body
                console.log("LISTA DE AÑOS",this.listYears)
            })
            this.$store.dispatch('common/getFinancialInstitution').then((res)=>{
                this.listEndoso = res.data.body
                let arregloUno = []
                arregloUno = this.listEndorsements.concat(this.listEndoso.banks).concat(this.listEndoso.financial).concat(this.listEndoso.cajas)
                this.listEndorsements = arregloUno
            })
        },
        methods: {
            volver2: function(evt){
                evt.preventDefault();
                this.$nuxt.$router.push({path: "/"});
            },
            filterBrands(){
                console.log('filter brands ...')
                this.listBrands = this.listBrandsOrigin;
                let regExp = new RegExp(this.filterBrand, "i");
                this.listBrands = this.listBrands.filter(obj => {
                    return regExp.test(obj.name);
                }) 
            },
            continuarAlCotizador(){
                this.$nuxt.$router.push("/cotizacion/cotizacion")
            },
            volver(){
                this.$nuxt.$router.push("/cotizacion/placa")
            },
            async getModelLocal(brandId, year) {
                await this.$store.dispatch('common/getModelLocal', {brandId:brandId, year:year}).then((res) =>{
                    if (res.data.code == 0) {
                        this.listModels = res.data.body            
                    }
                })
            },
            detalle(){
                if(this.activadorItem == 1){
                    this.mostrarListaMarca = true
                    this.mostrarListaAnio = false
                    this.mostrarListaModelo = false
                }else if(this.activadorItem == 2){
                    this.mostrarListaMarca = false
                    this.mostrarListaAnio = true
                    this.mostrarListaModelo = false
                }if(this.activadorItem == 3){
                    this.mostrarListaMarca = false
                    this.mostrarListaAnio = false
                    this.mostrarListaModelo = true
                }else{
                    this.mostrarListaMarca = false
                    this.mostrarListaAnio = false
                    this.mostrarListaModelo = false
                }
            },
            mostrarMarca(){
                this.mostrarListaMarca = true
                this.mostrarListaAnio = false
                this.mostrarListaModelo = false
            },
            mostrarAnio(){      
                this.mostrarListaMarca = false
                this.mostrarListaAnio = true
                this.mostrarListaModelo = false
                
            },
            mostrarModelo(){
                this.getModelLocal(this.itemElegido.brandId, this.itemElegido.modelYear)
                this.mostrarListaMarca = false
                this.mostrarListaAnio = false
                this.mostrarListaModelo = true
            },

            seleccionaMarca(item){
                this.mostrarItemMarca = true
                this.itemElegido.brandId = item.id
                this.itemElegido.brand = item.name
                this.activadorItem = 1
                this.mostrarAnio()
                this.mostrarResumenMarca = true
                this.$store.commit('common/setObjVehiculo', this.itemElegido )
            },
            seleccionaAnio(item){
                this.mostrarItemAnio = true
                this.itemElegido.modelYear = item.id
                this.itemElegido.year = item.id
                this.activadorItem = 2
                this.mostrarResumenAnio = true
                this.mostrarModelo()
                this.$store.commit('common/setObjVehiculo', this.itemElegido )
            },
            seleccionaModelo(item){
                this.mostrarItemModelo = true
                this.itemElegido.model = item.name
                this.itemElegido.modelId = item.id
                this.activadorItem = 4
                this.mostrarResumenModelo = true
                this.detalle()
                this.validateCreateOrUpdateVehicle()
                this.$store.commit('common/setObjVehiculo', this.itemElegido )
            },
            validateCreateOrUpdateVehicle () {
                if(this.$store.state.common.vehicleState == 1){   
                    this.updateVehicle()
                }else{
                    this.createVehicle()
                }
            },
            createVehicle() {
                this.$store.dispatch('common/createVehicle', this.itemElegido).then((res)=>{
                if (res.data.code == 0) { 
                    this.itemElegido.assignedPrice = null
                    this.continuarAlCotizador()
                }else{

                }
                
                })
            },
            updateVehicle () {
                this.$store.dispatch('common/updateVehicle', this.itemElegido).then((res)=>{
                    if (res.data.code == 0) { 
                    this.itemElegido.assignedPrice = null
                    this.continuarAlCotizador()
                    }else{

                    }
                    
                })
            },
        },
        async mounted() {
            console.log("MOUNTED..")
            this.objVehiculo = this.$store.state.common.objVehiculo
            await this.$store.dispatch('common/getBrand').then((res)=>{
                this.listBrands = res.data.body
                this.listBrandsOrigin = res.data.body
                console.log("MODELOS", this.listBrands)
            })

            if (this.objVehiculo.exists == true) {
                if (this.objVehiculo.brandId > 0) {
                    if (this.listBrands.filter(item => item.id == this.objVehiculo.brandId)) {
                        this.itemElegido.brandId = this.objVehiculo.brandId
                        this.itemElegido.brand = this.objVehiculo.brand
                        if (this.objVehiculo.modelYear >= this.anioActual-11) {
                            this.itemElegido.year = this.objVehiculo.modelYear
                            await this.getModelLocal(this.objVehiculo.brandId,this.objVehiculo.modelYear)
                            if(this.objVehiculo.modelId == -1){
                                this.mostrarModelo()
                            }
                            if (this.listModels.filter(item => item.id == this.objVehiculo.modelId)) {
                                console.log("if")
                                this.continuarAlCotizador()
                            }else{
                                console.log("else")
                            }
                        }else{
                            this.mostrarAnio()
                            console.log("NO ESTA EN EL RANGO 10 AÑOS")
                        }
                    }else{
                        this.mostrarAnio()
                        console.log("funcionalidad pendiente ")
                    }
                }else{
                    this.mostrarMarca()
                }
            }else if (this.objVehiculo.exists == false) {
                this.mostrarMarca()
            }else{
                this.mostrarMarca()
                console.log("TRUE /  FALSE")
            }
            
        },
    }
</script>
