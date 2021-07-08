<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12  col-xl-8">
                    <b-container >
                        <b-row class="d-flex justify-content-center" >
                            <b-col cols="11" lg="7" class="h-auto">   
                            <div class="d-block  d-lg-none"  v-bind:class="{ocultarItemsSeleccionados: ocultarItemsSeleccionados}">
                                <div class="itemElegido" v-bind:class="{mostrarItemMarca: mostrarItemMarca}">
                                <span>{{this.itemElegido.brand }}</span>
                                <div class="box-close" @click="closeMarca()"><img src="./../../static/media/imagenes/seleccion/close.png" alt="x"></div>
                                </div>
                                <div class="itemElegido" v-bind:class="{mostrarItemAnio: mostrarItemAnio}">
                                <span>{{this.itemElegido.year }}</span>
                                <div class="box-close" @click="closeAnio()" ><img src="./../../static/media/imagenes/seleccion/close.png" alt="x"></div>
                                </div>
                                <div class="itemElegido" v-bind:class="{mostrarItemModelo: mostrarItemModelo}">
                                <span>{{this.itemElegido.model }}</span>
                                <div class="box-close" @click="closeModelo()"><img  src="./../../static/media/imagenes/seleccion/close.png" alt="x"></div>
                                </div>
                            </div>  


                            <div class="listas">
                                <div class="lista1" v-bind:class="{mostrarListaMarca: mostrarListaMarca}">
                                

                                <p class="listas--titulo ">
                                    <img src="" alt="<">Selecciona la marca
                                </p>
                                <div class="listas--box">
                                    <div  class="item" v-for="(item, index) in listBrands" :key="index">                      
                                    <p v-if="item.name == '----'" class="guiones" style="cursor: auto;">--------------</p>
                                    <p :id="item.name" v-else @click="seleccionaMarca(item)">{{item.name}}</p>
                                    </div>  
                                </div>
                                <div class="inputMarcaHide">
                                    <input autocomplete="off" id="ingresaLetraMarca" class="ingresaLetraMarca" type="text" autofocus @keypress="detectarkey($event)">        
                                </div> 
                                    
                                </div>

                                <div class="lista2" v-bind:class="{mostrarListaAnio: mostrarListaAnio}">
                                    <p class="listas--titulo  mt-3  mb-3"> 
                                        <img src="" alt="<">Seleciona el año
                                    </p>
                                    <div class="listas--box">
                                    <div class="item" v-for="(item, index) in listYears" :key="index">                    
                                        <p @click="seleccionaAnio(item)">{{item.name}}</p>
                                    </div>
                                </div>             
                                </div>

                                <div class="lista2" v-bind:class="{mostrarListaModelo: mostrarListaModelo}">
                                    <p class="listas--titulo   mt-3  mb-3">
                                        <img src="" alt="<">Seleciona el modelo
                                    </p>
                                    <div class="listas--box">
                                    <div class="item" v-for="(item, index) in listModels" :key="index">                    
                                        <p @click="seleccionaModelo(item)">{{item.name}}</p>
                                    </div>                 
                                    </div> 
                                </div>

                            </div>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
                <div class="col-12  col-lg-4">
                    <div class="resumen">
                        <p>RESUMEN DE TU PROTECCION</p>
                        <div class="resumen-datos-carro">
                            <p>DATOS DE TU CARRO</p>
                            <p class="placa">Mi placa <span> {{this.$store.state.common.plateNumber}}</span> <span @click="volver()">LAPIZ</span></p>
                            <p class="placa">Marca <span> {{this.itemElegido.brand}}</span></p>
                            <p class="placa">Año <span> {{this.itemElegido.year}}</span></p>
                            <p class="placa">Modelo <span> {{this.itemElegido.model}}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            /* NUEVOS */
            anioActual: 0,
            objVehiculo: {},
            /*********************************/
            ocultarItemsSeleccionados: false,
            mostrarItemMarca: false,
            mostrarItemAnio: false,
            mostrarItemModelo: false,
            mostrarLista: true,
            mostrarListaMarca: false,
            mostrarListaAnio: false,
            mostrarListaModelo: false,
            activadorItem: 0,
            listitemElegido:{},
            listBrands:{},
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
        getCotizacion(){
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
            this.ocultarItemsSeleccionados = false
        },
        seleccionaAnio(item){
            this.mostrarItemAnio = true
            this.itemElegido.modelYear = item.id
            this.itemElegido.year = item.id
            this.activadorItem = 2
            this.mostrarModelo()
        },
        seleccionaModelo(item){
            this.mostrarItemModelo = true
            this.itemElegido.model = item.name
            this.itemElegido.modelId = item.id
            this.activadorItem = 4
            this.ocultarItemsSeleccionados = true
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
                this.getCotizacion()
            }else{

            }
            
            })
        },
        updateVehicle () {
            this.$store.dispatch('common/updateVehicle', this.itemElegido).then((res)=>{
                if (res.data.code == 0) { 
                this.itemElegido.assignedPrice = null
                this.getCotizacion()
                }else{

                }
                
            })
        },
    },
    async mounted() {
        this.objVehiculo = this.$store.state.common.objVehiculo
        await this.$store.dispatch('common/getBrand').then((res)=>{
            this.listBrands = res.data.body
            console.log("MODELOS", this.listModels)
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
                            this.getCotizacion()
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
<style lang="scss">
    .lista1, .lista2, .lista3{
        display: none;
        
    }
    .listas{
        &--box{   
            background: white;
            height: auto;
            max-height: 300px;
            overflow: scroll;
            border-radius: 8px;
            box-shadow: 0 2px 10px 0 rgba(0,40,80,0.07);
            &::-webkit-scrollbar {
            width: 8px;     /* Tamaño del scroll en vertical */
            height: 8px;    /* Tamaño del scroll en horizontal */      
            }
            &::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 4px;
            }
            .item{
            height: 35px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
            padding-left: 8px;
            font-size: 1rem;
            font-family: 'Omnes Medium';
            cursor: pointer;
            p{
                height: 35px;
                line-height: 35px;     
            }      
            &:hover{
                background: #f7fafb;
            }
            }  
        }
    }
    .mostrarListaMarca{
        display: block;
    }
    .mostrarListaAnio{
        display: block;
    }
    .mostrarListaModelo{
        display: block;
    }
    .mostrarItemMarca, .mostrarItemAnio, .mostrarItemModelo{
        display: inline-flex;  
    }

</style>