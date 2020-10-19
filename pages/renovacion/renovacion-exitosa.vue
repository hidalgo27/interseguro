<template>
    <div class="renovacion-exitosa">
        <b-container>
            <b-row class="d-flex  justify-content-center">
                <b-col cols="12" lg="6">
                    <div class="exitosa ">
                        <img style="width: 70px; margin-bottom: 28px;" src="../../static/media/interseguroVehicular_v2/success.png" alt="success">
                        <p><strong>La información de tu Seguro Vehicular se ha guardado correctamente</strong></p> <br>
                        <p>La renovación automática será el día <strong>{{this.fecha}}</strong></p> 
                        <p>Te llegará la póliza por correo ese día</p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    layout: "InterseguroHome",
    data() {
        return {
            fecha: ""
        }
    },
    mounted() {
        this.fecha = localStorage.getItem("fechaVigenciaRenovacion")
    },
}
</script>
<style lang="scss">
    .exitosa{
        padding: 24px;
        margin: 70px 0;
        max-width: 400px;
        width: 100%;
        margin: 70px auto;
        p{  
            line-height: 1.2;
            font-size: 20px;
            font-family: 'Omnes Regular';
        }
    }
</style>