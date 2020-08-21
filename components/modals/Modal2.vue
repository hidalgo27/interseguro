<template>
     <b-modal v-bind:id="'modal-' + obj2.id"  :ref="''+obj2.id" class="modal-vue" hide-footer hide-header size="lg">
        <b-container>
            <b-row class="justify-content-center"> 

                <b-col class="d-flex justify-content-end">
                    <b-btn class="mt-3" @click="hideModal(obj2)" style="background: white; border: none;">
                        <img src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b5f46206abb673bc5374fdb_icon-close.svg"
                                    width="40" alt="icon close" class="image-9">
                    </b-btn>
                </b-col>
                <b-col cols="12"></b-col>
                <b-col cols="4" class="d-flex justify-content-center">
                    <img v-bind:src=obj2.url width="150" v-bind:alt="obj2.titulo" class="image-8">
                </b-col>
                <b-col cols="12"></b-col>
                <b-col>
                    <h2 class="text-center span-primario">{{obj2.titulo}}</h2>
                    <div class="linea-divisora-modal linea-divisora-2"></div>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="mg-t25">
                    <div class="box-modal2-p" v-for="(item, index) in obj2.detalles" :key="index">
                        <img src="../../static/media/img/icon-dont.svg" width="25" alt="icon close">                       
                            <p class="paragraph-11  modal2-item-p"> {{item.descripcion}}<br></p>
                        </div>
                </b-col>
            </b-row>
        </b-container>
    </b-modal>
</template>
<script>
  import '@/assets/css/_variables.scss'
    export default {
        props:["obj2"],
        data() {
            return {
            };
        },
        methods:{
            hideModal(obj2){
                let objid2 = obj2.id
                this.$refs[objid2].hide()
            }
        },
        computed: {},
    }

</script>
