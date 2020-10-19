<template>
    <div class="renovacion-cancelada">
        <b-container>
            <b-row class="d-flex  justify-content-center">
                <b-col cols="12" lg="4">
                    <div class="cancelada">
                        <p class="pb-4"><strong>¡Hola!</strong></p>
                        <p class="pb-4">Tu póliza vehicular no se renovará automaticamente.
                            <br> <br> <br>
                            ¿Cambiaste de opinión?
                            </p> 
                        <div class="box btn">
                            <span @click="sirenovar()" style="border: 1px solid #0055c8; color: #0055c8; font-size: 18px; padding: 11px 20px;border-radius: 6px; cursor: pointer">
                            Ver mi seguro vehicular para renovar</span>
                        </div>
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
                objRenovacion:{},
                monto_pagar: "",
                objUpdatePolicy:{}
            }
        },
        methods: {
            //ACA TENEMOS UN PROBLEMA QUE PASA SI LA PLACA PARA NO RENOVA RNO ESTA EN EL LOCAL STORAGE
            sirenovar(){
                // if (this.$store.state.common.placaNoRenovar != '') {

                if (true) {
                    this.$store.dispatch('common/obtenerDatos', this.$store.state.common.placaNoRenovar).then((res) =>{
                        if (res.data.code == 0) {
                            this.objRenovacion = res.data.body

                            if (this.objRenovacion.priceModel.paymentMethodId == 1) {
                                this.monto_pagar = this.objRenovacion.priceModel.policy.monthly
                            }else if(this.objRenovacion.priceModel.paymentMethodId == 2){
                                this.monto_pagar = this.objRenovacion.priceModel.policy.quarterly
                            }else if(this.objRenovacion.priceModel.paymentMethodId == 3){
                                this.monto_pagar = this.objRenovacion.priceModel.policy.annual
                            }else if(this.objRenovacion.priceModel.paymentMethodId == 4){
                                this.monto_pagar = this.objRenovacion.priceModel.policy.twoYears
                            }
                            this.objUpdatePolicy.numeroPoliza = this.objRenovacion.policy.policyNumber
                            this.objUpdatePolicy.monto_pagar = this.monto_pagar
                            this.objUpdatePolicy.current = this.objRenovacion.priceModel.vehicle.current
                            this.objUpdatePolicy.payment = this.objRenovacion.priceModel.paymentMethodId
                            this.objUpdatePolicy.renew = "Y"

                            this.$store.dispatch('payment/updatePolicy', this.objUpdatePolicy).then((res) =>{
                                this.$nuxt.$router.push({path: "/renovacion"})
                            }).then((res)=>{
                                this.$nuxt.$router.push({path: "/renovacion"})
                            })
                        }
                    })
                }else{
                    this.$nuxt.$router.push({path: "/renovacion"})
                }
                
            }
        },
        mounted() {
            
        },
    }
</script>
<style lang="scss">
    .cancelada{
        padding: 24px;
        margin: 70px 0;
        min-width: 420px;
        width: 100%;
        p{  
            line-height: 1.2;
            font-size: 24px;
            font-family: 'Omnes Regular';
        }
    }
</style>