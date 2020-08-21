<template>
    <b-modal v-bind:id="'modal-' + obj1.id" :ref="''+obj1.id" class="modal-vue" hide-footer hide-header size="lg">
        <b-container>
            <b-row class="justify-content-center"> 
                <b-col class="d-flex justify-content-end">
                    <b-btn class="mt-3" @click="hideModal(obj1)"  style="background: white; border: none;">
                        <img src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b5f46206abb673bc5374fdb_icon-close.svg"
                                    width="40" alt="icon close" class="image-9">
                    </b-btn>

                </b-col>
                <b-col cols="12"></b-col>
                <b-col cols="4"  class="d-flex justify-content-center">
                    <img v-bind:src=obj1.url width="150" v-bind:alt="obj1.titulo" class="image-8">
                </b-col>
                <b-col cols="12"></b-col>
                <b-col>
                    <h2 class="text-center">{{obj1.titulo}}</h2>
                    <div class="linea-divisora-modal"></div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <p class="paragraph-11 text-center">{{obj1.descripcion}}<br>&zwj;<br></p>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-row>
                        <b-col cols="2" class="offset-2  box-iconModal">
                            <img src="../../static/media/img/cash.svg" width="35" alt="cobertura Seguro Vehicular" class="image-27">
                        </b-col>
                        <b-col cols="8">
                            <p class="paragraph-11"><strong>Hasta cuánto podemos cubrir:</strong><br></p>
                            <p class="paragraph-11"  v-for="(item, index) in obj1.cuantoCubrimos" :key="index">{{item.detalle}} <br></p>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col cols="2" class="offset-2  box-iconModal">
                            <img src="../../static/media/img/pago-minimo.svg" width="35" alt="icon minimo" class="image-27">
                        </b-col>
                        <b-col cols="8">
                            <p class="paragraph-11"><strong>Pago Mínimo:</strong><br></p>
                            <p class="paragraph-11"  v-for="(item, index) in obj1.pagoMinimo" :key="index">{{item.detalle}} <br></p>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col  cols="2" class="offset-2  box-iconModal">
                            <img src="../../static/media/img/pago-maximo.svg" width="35" alt="icon maximo" class="image-27">
                        </b-col>
                        <b-col  cols="8">
                            <p class="paragraph-11"><strong>Pago Máximo:</strong><br></p>
                            <p class="paragraph-11"  v-for="(item, index) in obj1.pagoMaximo" :key="index">{{item.detalle}} <br></p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </b-modal> 
</template>

<script>
  import '@/assets/css/_variables.scss'
    export default {
        props:["obj1"],
        data() {
            return {
            };
        },
        methods:{
            hideModal(obj1){
                let objid = obj1.id
                this.$refs[objid].hide()
            }
        },
        computed: {},
    }

</script>
