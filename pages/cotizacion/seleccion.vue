<template>
    <div class="pagina-seleccion">
        <div class="container"> 
            <b-row class="mi-breadcrumb">
                <b-col cols="12" class="box-steps">
                    <ul class="steps" style="display: inline-flex">
                        <div class="steps__item "><span>Pago</span></div>
                        <div class="steps__item ">Planes</div>
                        <div class="steps__item steps--active  paso1"><span>Mi carro</span></div>
                        <li class="steps--progressBar" ></li>
                    </ul>
                </b-col>
            </b-row>
            <!--Resumen Mobile-->
            <b-row class="d-flex  d-lg-none mobile box-resumen">
                <b-col cols="12">
                    <div class="accordion" role="tablist">
                        <b-card no-body class="mb-1 resumen">
                            <b-card-header header-tag="header"  role="tab">                        
                                <b-row align-v="center">
                                    <b-col cols="auto" class="mr-auto">
                                        <p>VER RESUMEN</p>                                        
                                    </b-col>
                                    <b-col cols="auto">                                       
                                        <b-button class="btn-resumen" block v-b-toggle.accordion-proteccion @click="clicVerMas()" v-if="this.flagVerMas == 1">
                                            <span class="ver-mas">VER MÁS</span><img style="margin-left:5px" src="./../../static/media/imagenes/seleccion/ver-mas.svg" alt="">                                           
                                        </b-button>
                                        <b-button class="btn-resumen" block v-b-toggle.accordion-proteccion @click="clicVerMenos()" v-if="this.flagVerMenos == 1">
                                            <span class="ver-mas">VER MENOS</span>
                                            <img style="margin-left:5px" src="./../../static/media/imagenes/seleccion/ver-menos.svg" alt="">                                    
                                        </b-button>
                                    </b-col>
                                </b-row>                               
                            </b-card-header>
                            <b-collapse id="accordion-proteccion" accordion="my-accordion" role="tabpanel" class="body-resumen">
                                <b-card-body class="datos">
                                    <b-row>
                                    <b-col>
                                        <p class="sub-titulo">datos de tu carro</p>
                                    </b-col>                                        
                                    </b-row>
                                    <b-row >
                                        <b-col cols="4">
                                            <p class="label">Mi placa</p>                                            
                                        </b-col>
                                        <b-col cols="6">
                                            <p class="campo">{{this.$store.state.common.plateNumber}}</p>
                                        </b-col>
                                        <b-col cols="2">
                                            <a href=""><img src="./../../static/media/img/root/pencil-edit-blue.svg" alt="" @click="editarPlaca($event)"></a>
                                        </b-col>
                                    </b-row>
                                    <b-row class="row-final">
                                        <b-col cols="4" class="marca" v-bind:class="{mostrarResumenMarca: mostrarResumenMarca}">
                                            <p class="label">Marca</p>                                            
                                        </b-col>
                                        <b-col cols="6" class="marca" v-bind:class="{mostrarResumenMarca: mostrarResumenMarca}">
                                            <p class="campo">{{this.$store.state.common.objVehiculo.brand}}</p>
                                        </b-col>
                                        <b-col cols="2" class="marca" v-bind:class="{mostrarResumenMarca: mostrarResumenMarca}">
                                            <img src="./../../static/media/img/root/pencil-edit-blue.svg" alt="" @click="editarMarca($event)">
                                        </b-col>
                                    </b-row>
                                    <b-row class="row-final">
                                        <b-col cols="4" v-bind:class="{mostrarResumenAnio: mostrarResumenAnio}" class="anio">
                                            <p class="label">Año</p>                                            
                                        </b-col>
                                        <b-col cols="6" v-bind:class="{mostrarResumenAnio: mostrarResumenAnio}" class="anio">
                                            <p class="campo">{{this.$store.state.common.objVehiculo.modelYear}}</p>
                                        </b-col>
                                        <b-col cols="2" class="anio" v-bind:class="{mostrarResumenAnio: mostrarResumenAnio}">
                                            <img src="./../../static/media/img/root/pencil-edit-blue.svg" alt="" @click="editarAnio($event)">
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </div>
                </b-col>
            </b-row>  

            <b-row class="titulo-principal" >
                <b-col cols="12">
                    <b-row class="lista1 flujo-titulo" v-bind:class="{mostrarListaMarca: mostrarListaMarca}">
                        <b-col>
                            <a href=""><img src="./../../static/media/imagenes/seleccion/row-back.svg" alt="" @click="volver($event)" ></a><span>Selecciona la marca</span>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="12">
                    <b-row class="listaDos flujo-titulo" v-bind:class="{mostrarListaAnio: mostrarListaAnio}">
                        <b-col>
                            <a href=""><img src="./../../static/media/imagenes/seleccion/row-back.svg" alt="" @click="editarMarca($event)" ></a><span>Seleciona el año</span>
                        </b-col>
                    </b-row>                     
                </b-col>
                <b-col cols="12">
                    <b-row class="lista3 flujo-titulo" v-bind:class="{mostrarListaModelo: mostrarListaModelo}">
                        <b-col>
                            <a href=""><img src="./../../static/media/imagenes/seleccion/row-back.svg" alt="" @click="editarAnio($event)" ></a><span>Seleciona el modelo</span>
                        </b-col>
                    </b-row>
                </b-col>          
            </b-row>

            <b-row class="box-contenedor">
                <b-col cols="12" sm="12" md="12" lg="8" xl="8">
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
                        <div class="listaDos" v-bind:class="{mostrarListaAnio: mostrarListaAnio}">
                            <div class="box-lista">
                                <div class="listas--box">
                                    <div class="item" v-for="(item, index) in listYears" :key="index" @click="seleccionaAnio(item)">                    
                                        <p>{{item.name}}</p>
                                    </div>
                                </div> 
                            </div>                                                
                        </div>
                        <div class="lista3" v-bind:class="{mostrarListaModelo: mostrarListaModelo}">                            
                            <div class="box-lista">
                                <div class="box-input">
                                    <b-form-input v-model="filterModel" type="text" 
                                    autocomplete="off" placeholder="Buscar el modelo" v-on:keyup="filterModels">
                                    </b-form-input>
                                </div>
                                <div class="listas--box">
                                    <div class="item" v-for="(item, index) in listModels" :key="index" @click="seleccionaModelo(item)">                    
                                        <p>{{item.name}}</p>
                                    </div>                 
                                </div>
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-col cols="4">
                    <div class="resumen-proteccion  d-none  d-lg-block">                        
                        <div class="resumen-proteccion__cabecera">
                            <b-row class="titulo1">
                                <b-col cols="12">RESUMEN DE TU PROTECCIÓN</b-col>
                            </b-row>
                        </div>
                        <div class="resumen-proteccion__cuerpo">
                            <div class="datos-carro">  
                                <b-container>
                                    <b-row class="row-titulo">
                                        <b-col cols="12" >
                                            <p class="resumen-proteccion--subtitulo">DATOS DE TU CARRO</p>                                        
                                        </b-col>
                                    </b-row>
                                    <b-row class="row-data">
                                        <b-col cols="4" >
                                            <p><span class="label">Mi Placa</span></p>
                                        </b-col>
                                        <b-col cols="6">
                                            <p><span class="campo-mayus">{{this.$store.state.common.plateNumber}}</span></p>
                                        </b-col>
                                        <b-col cols="2">
                                            <a href=""><img src="./../../static/media/img/root/pencil-edit-blue.svg" alt="" @click="editarPlaca($event)"></a>
                                        </b-col>
                                    </b-row>
                                    <b-row class="row-data">
                                        <b-col cols="4" class="marca" v-bind:class="{mostrarResumenMarca: mostrarResumenMarca}">
                                            <p><span class="label">Marca</span></p>
                                        </b-col>
                                        <b-col cols="6" class="marca" v-bind:class="{mostrarResumenMarca: mostrarResumenMarca}">
                                            <p><span class="campo-mayus">{{this.$store.state.common.objVehiculo.brand}}</span></p>
                                        </b-col>
                                        <b-col cols="2" class="marca" v-bind:class="{mostrarResumenMarca: mostrarResumenMarca}">
                                            <img src="./../../static/media/img/root/pencil-edit-blue.svg" alt="" @click="editarMarca($event)">
                                        </b-col>
                                    </b-row>
                                    <b-row class="row-data">
                                        <b-col cols="4" class="anio" v-bind:class="{mostrarResumenAnio: mostrarResumenAnio}">
                                            <p><span class="label">Año</span></p>
                                        </b-col>
                                        <b-col cols="6" class="anio" v-bind:class="{mostrarResumenAnio: mostrarResumenAnio}">
                                            <p><span class="campo-mayus">{{this.$store.state.common.objVehiculo.modelYear}}</span></p>
                                        </b-col>
                                        <b-col cols="2" class="anio" v-bind:class="{mostrarResumenAnio: mostrarResumenAnio}">
                                            <img src="./../../static/media/img/root/pencil-edit-blue.svg" alt="" @click="editarAnio($event)">
                                        </b-col>
                                    </b-row>
                                </b-container>  
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
            
        </div>
    </div>
</template>
<script>
    export default {
        layout: "InterseguroFlujo",
        data() {
            return {
                editDataExistente : false,
                flagVerMas: 1,
                flagVerMenos: 0,
                filterBrand : '',
                filterModel : '',
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
                //mostrarResumenModelo: false,
                listitemElegido:{},
                listBrands:{},
                listBrandsOrigin:{},
                listBrandsTemp:{},
                listYears: {},
                listModels:{},
                listModelsOrigin:{},
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
            editarPlaca(evt) {
                evt.preventDefault();
                this.volver();
            },
            editarMarca(evt) {
                evt.preventDefault();
                this.$nuxt.$router.push({path: "/cotizacion/seleccion"});
                this.mostrarMarca();
                this.mostrarResumenMarca = false;
                this.mostrarResumenAnio = false;                
            },
            editarAnio(evt) {
                evt.preventDefault();
                this.$nuxt.$router.push({path: "/cotizacion/seleccion"});
                this.mostrarAnio();
                this.mostrarResumenMarca = true;
                this.mostrarResumenAnio = false;                
            },
            clicVerMas(){
                this.flagVerMas = 0;
                this.flagVerMenos = 1;
            },
            clicVerMenos(){
                this.flagVerMas = 1;
                this.flagVerMenos = 0;
            },
            filterBrands(){
                console.log('filter brands ...')
                this.listBrands = this.listBrandsOrigin;
                let regExp = new RegExp(this.filterBrand, "i");
                this.listBrands = this.listBrands.filter(obj => {
                    return regExp.test(obj.name);
                }) 
            },
            filterModels(){
                console.log('filter models ...')
                this.listModels = this.listModelsOrigin;
                let regExp = new RegExp(this.filterModel, "i");
                this.listModels = this.listModels.filter(obj => {
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
                        this.listModelsOrigin =  res.data.body          
                    }
                })
            },
            /* detalle(){
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
            }, */
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
                //this.mostrarResumenModelo = true
                //this.detalle()
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
            console.log("MOUNTED SELECCION..")
            this.objVehiculo = this.$store.state.common.objVehiculo
            this.editDataExistente = this.$store.state.common.editDataExistente;
            await this.$store.dispatch('common/getBrand').then((res)=>{
                this.listBrands = res.data.body
                this.listBrandsOrigin = res.data.body
                //console.log("MODELOS", this.listBrands)
            })

            if (this.objVehiculo.exists == true) {
                //console.log('Existe Hehiculo ...');
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
                                //console.log("if")
                                if(this.editDataExistente){
                                    this.mostrarMarca();
                                }else{
                                    this.continuarAlCotizador();
                                }
                                
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
