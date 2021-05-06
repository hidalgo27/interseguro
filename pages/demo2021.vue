<template>
    <div class="demo2021" style="margin-top: 200px">
        <h1 @click="clickuno()">TITULO {{valor}}</h1>
        <br><br><br>
    </div>
</template>
<script>
export default {
    layout: "InterseguroHome",
    data() {
        return {
            valor: '',
        }
    },
    methods: {
        clickuno(){
            console.log("METODO DETECTADO")
            this.valor = "VALOR UNO"
        }
    },
    created() {
        console.log("CREATED")
    },
    mounted() {
        console.log("MOUNTED")
    },
}
</script>
<style lang="scss">
    
    .demo2021{
        div{
            background: red;
        }
        .hijo{
        }
    }
    
</style>