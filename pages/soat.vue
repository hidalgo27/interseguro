<template>
    <div class="productos-is">
        <div class="container">
            <div class="row  productos-is__bienvenido">
                <div class="col-12">
                    <p class="productos-is__bienvenido--titulo">
                        ¡Bienvenido a Interseguro!
                    </p>
                    <p class="productos-is__bienvenido--subtitulo">
                        Elige el seguro que quieres cotizar hoy
                    </p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12    col-md-10  col-xl-9">
                    <div class="row">
                        <div class="col-12  col-md-6">
                            <a  class="productos-is--enlace" target="_blank" href="https://www.interseguro.pe/vehicular/?utm_source=google&utm_medium=search&utm_campaign=experimento_landing">
                                <div class="productos-is-item">
                                    <div class="productos-is-item--boxImg">
                                        <img class="productos-is-item--imgvehicular" src="./../static/productos-is/vehicular.svg" alt="">
                                    </div>
                                    
                                    <p class="productos-is-item--titulo">
                                        SEGURO VEHICULAR
                                    </p>
                                    <div class="productos-is-item--btn">COTIZAR</div>
                                    <p class="productos-is-item--precio">
                                        Desde <span class="monto">US$ 12</span> / MES
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div class="col-12  col-md-6">
                            <a  class="productos-is--enlace" target="_blank" href="https://www.interseguro.pe/soat?utm_source=google&utm_medium=search&utm_campaign=experimento_landing">
                                <div class="productos-is-item  productos-is-soat">
                                    <div class="productos-is-item--boxImg">
                                        <img class="productos-is-imgsoat" src="./../static/productos-is/soat.svg" alt="">
                                    </div>
                                    
                                    <p class="productos-is-item--titulo">
                                        SOAT
                                    </p>
                                    <div class="productos-is-item--btn">COTIZAR</div>
                                    <p class="productos-is-item--precio">
                                        Desde <span class="monto">S/ 53</span>
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-custom  is-enNumeros">            
            <p class="is-enNumeros--titulo">
                Interseguro en números
            </p>            
            <div class="is-enNumeros__lista">
                <div class="is-enNumeros__lista--item">
                    <img src="./../static/productos-is/clientes.svg" alt="">
                    <div class="is-enNumeros--datos">
                        <p class="is-enNumeros--numeros">+450,000</p>
                        <p class="is-enNumeros--texto">Clientes asegurados</p>
                    </div>
                </div>
                <div class="is-enNumeros__lista--item">
                    <img src="./../static/productos-is/asistencias.svg" alt="">
                    <div class="is-enNumeros--datos">
                        <p class="is-enNumeros--numeros">+3,000</p>
                        <p class="is-enNumeros--texto">Asistencias brindadas</p>
                    </div>
                </div>
                <div class="is-enNumeros__lista--item">
                    <img src="./../static/productos-is/cotizaciones.svg" alt="">
                    <div class="is-enNumeros--datos">
                        <p class="is-enNumeros--numeros">+6,000</p>
                        <p class="is-enNumeros--texto">Cotizaciones diarias</p>
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
            
        }
    },
}
</script>
<style lang="scss">
    
    .productos-is{
        padding-top: 80px;
        background-color: #EFF2FA;
        a{
            text-decoration: none;
        }
        &--enlace{
            display: inline-block;
            transition: all 0.75s;
            width: 100%;
            &:hover{
                box-shadow: 3px 4px 5px #bfbdbd61;
                transition: all 0.75s;
            }
        }
        &__bienvenido{
            &--titulo{
                color: #0854C4;
                font-family: 'Omnes Medium';
                text-align: center;
                font-size: 26px;
            }
            &--subtitulo{
                color: #454A6C;
                font-family: 'Omnes Medium';
                text-align: center;
                font-size: 16px;
            }
        }
        
        .productos-is-item{
            background: white;
            padding: 24px 0 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width: 210px;
            }
            &--titulo{
                color: #454A6C;
                font-family: 'Omnes SemiBold';
                margin-top: 20px;
            }
            &--btn{
                background: #EA0F8F;
                color: #fff;
                height: 49px;
                width: 260px;
                text-align: center;
                line-height: 49px;
                font-size: 17px;
                font-family: 'Omnes Medium';
            }
            &--precio{
                color: #0854C4;
                margin-top: 14px;
                font-family: 'Omnes Medium';
                margin-top: 24px;
                .monto{
                    font-family: 'Omnes SemiBold';
                    font-size: 26px;
                }
            }
        }
        .productos-is-soat{
            margin-top: 18px;
            img{
                width: 100px;
            }
        }
    }
    .is-enNumeros{
        margin-top: 36px;
        background: #fff;
        padding-top: 32px;
        padding-bottom: 32px;
        padding-left: 12px;
        padding-right: 12px;
        &--titulo{
            color: #0854C4;
            font-family: 'Omnes Medium';
            text-align: center;
            font-size: 26px;
            padding-bottom: 20px;
        }
        &__lista{
            background: #EFF2FA;
            border: 1px solid #CAD6FA;
            display: flex;
            flex-direction: column;            
            padding: 16px 0;
            align-items: center;
            padding: 24px 0;
            &--item{
                display: flex;
                width: 300px;
                position: relative;
                
                img{
                    margin-right: 12px;
                    width: 70px;
                }
                &:nth-child(1){
                    // padding: 24px 0;
                    // content: "";
                    // height: 70px;
                    // width: 1px;
                    // background: #BBC8E8;
                    // position: absolute;
                    // right: 30px;
                    &:after{
                        content: "";
                        height: 1px;
                        width: 100%;
                        background: #BBC8E8;
                        position: absolute;
                        right: 0px;
                        bottom: -15px;
                    }
                }
                &:nth-child(2){
                    padding: 32px 0;
                    &:after{
                        content: "";
                        height: 1px;
                        width: 100%;
                        background: #BBC8E8;
                        position: absolute;
                        right: 0px;
                        bottom: 15px;
                    }
                }
                &:nth-child(3){
                    // padding: 24px 0;
                }
            }            
        }
        &--datos{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        &--numeros{
            color: #454A6C;
            font-family: 'Omnes SemiBold';
            font-size: 33px;
            padding: 0;
            margin: 0;
        }
        &--texto{
            color: #454A6C;
            font-family: 'Omnes Medium';
            font-size: 16px;
            padding: 0;
            margin: 0;
        }
    }
    @media (min-width: 992px) {
        .productos-is{
            &--enlace{
                width: 100%;
                max-width: 280px;
            }
            &__bienvenido{
                margin-bottom: 30px;
                &--titulo{
                    font-size: 36px;
                    margin-bottom: 24px;
                }
                &--subtitulo{
                    font-size: 22px;
                }
            }
            
            .productos-is-item{
                width: 363px;
                height: 351px;
                &--boxImg{
                    height: 120px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                img{
                    width: 226px;
                }
                &--titulo{
                    margin-top: 20px;
                }
                &--btn{
                }
                &--precio{
                }
            }
            .productos-is-soat{
                margin-top: 0px;
                img{
                    width: 85px;
                }
            }
        }
        .is-enNumeros{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &--titulo{
                font-size: 34px;
            }
            &__lista{
                max-width: 1047px;
                width: 100%;
                flex-direction: row;
                justify-content: center;
                padding: 2px 0;
                &--item{
                    img{
                    }
                    // content: "";
                    // height: 1px;
                    // width: 100%;
                    // background: #BBC8E8;
                    // position: absolute;
                    // right: 0px;
                    // bottom: -15px;
                    &:nth-child(1){
                        &::after{
                            content: "";
                            height: 70px;
                            width: 1px;
                            background: #BBC8E8;
                            position: absolute;
                            right: 30px;
                            top: 0;
                        }
                    }
                    &:nth-child(2){
                        padding: 32px 0;
                        &:after{
                            content: "";
                            height: 70px;
                            width: 1px;
                            background: #BBC8E8;
                            position: absolute;
                            right: 30px;
                            top: 32px;
                        }
                    }
                    &:nth-child(3){
                        // padding: 24px 0;
                    }
                }            
            }
            &--datos{
            }
            &--numeros{
            }
            &--texto{
            }
        }
    }
    @media (min-width: 1200px) {
        .productos-is{
            &--enlace{
                max-width: 363px;
            }
        }
    }
</style>