<template>
    <div class="pageNotFound">
        <div class="container  pageNotFound__izq">
                <div class="loSentimos">
                    <div class="loSentimos--texto">
                        <p class="titulo">
                            Lo sentimos
                        </p>
                        <p class="descripcion">
                            No hemos podido encontrar la página que buscas. 
                        </p>
                        <p class=" d-none d-lg-block"><span class="ir-al-home">Ir al Home</span></p>
                    </div>
                    <div class="loSentimos--img">
                        <img src="./../static/media/img/pagenotfound/404.png" alt="404">
                    </div>
                </div>
            
        </div>
        <div class="container pageNotFound__der">
            <p class="buenaNoticia">La buena noticia es que todos nuestros planes siguen con 10% DE DESCUENTO.</p>
            <p class="d-lg-none"><span class="ir-al-home">Ir al Home</span></p>
            <p class="otros-enlaces">Aquí tienes otros enlaces que también pueden servirte de ayuda:</p>

            <ul>
                <li><router-link to="/cobertura">Coberturas</router-link></li>
                <li><router-link to="/como-lo-uso">¿Cómo lo uso?</router-link></li>
                <li><router-link to="/oficial/preguntas-frecuentes">Preguntas frecuentes</router-link></li>
                <!-- <router-link to="/cobertura">¿Cómo cambiarme a Interseguro?</router-link> -->
                <!-- <router-link to="/cobertura">Condicionado General</router-link> -->
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
    .pageNotFound{
        padding-top: 70px;
        padding-bottom: 30px;
        display: flex;
        flex-direction: column;
        p{
            color: #454a6c;
        }
        &__izq{
            display: flex;

        }
        &__der{
            
            margin: auto;
            ul{ 
                max-width: 320px;               
                list-style: none;
                width: 100%;
                margin: 0;
                padding: 0;
                margin-top: 12px;
                li{
                    text-decoration: none;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                    a{
                        font-size: 16px;
                        font-weight: 500;
                        font-stretch: normal;
                        font-style: normal;
                        letter-spacing: normal;                        
                        color: #454a6c;
                        text-decoration: underline;
                    }
                }
            }
            p{
                text-align: center;
                margin: auto;
                margin-top: 12px;
            }
            .ir-al-home{
                border-color: #ea0c90 !important;
                background-color: #ea0c90 !important;
                max-width: 360px;
                width: 100%;
                margin: auto;
                position: relative;
                color: white;
                padding: 8px 32px;
                display: inline-block;
                height: 40px;
                line-height: initial;
                font-size: 20px;
            }
        }
        .loSentimos{
            display: flex;
            flex-direction: column;
            &--img{
                img{
                    width: 100%;
                }
            }
            &--texto{
                .titulo{
                    font-size: 24px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.25;
                    letter-spacing: -1px;
                    text-align: center;
                    color: #0855c4;
                }
                .descripcion{
                    font-size: 20px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    letter-spacing: -0.21px;
                    text-align: center;
                    color: #454a6c !important;
                    max-width: 300px;
                    margin: auto;
                    width: 100%;
                    margin-top: 8px;
                }
            }
        }
    }

    @media (min-width: 1024px) {
        .pageNotFound{
            padding-top: 100px;
            p{
                font-size: 18px;
            }
            &__izq{
                
                .ir-al-home{
                    border-color: #ea0c90 !important;
                    background-color: #ea0c90 !important;
                    max-width: 360px;
                    margin: auto;
                    position: relative;
                    color: white;
                    padding: 8px 32px;
                    display: inline-block;
                    height: 40px;
                    line-height: initial;
                    font-size: 20px;
                    width: 230px;
                    text-align: center;
                    margin-top: 24px;
                    cursor: pointer;
                }
            }
            &__der{
                p{
                    margin-top: 24px;
                }
                .buenaNoticia{
                    text-align: left;
                }
                .otros-enlaces{
                    margin-top: 4px;
                    text-align: left;
                }
                ul{                
                    li{
                        text-align: left;
                        a{                          
                            margin-top: 10px;
                            display: inline-block;
                            text-decoration: underline;
                        }
                    }
                }
                p{
                }
                .ir-al-home{
                    width: 240px;
                }
            }
            .loSentimos{
                width: 100%;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                &--img{
                    img{
                        width: 92%;
                    }
                }
                &--texto{
                    width: 450px;
                    .titulo{
                        text-align: left;
                        font-size: 4.2rem;
                        margin: 0;
                    }
                    .descripcion{
                        font-family: 'Omnes Regular';
                        margin: 0;
                        text-align: left;
                        font-size: 2.0rem;
                        max-width: 92%;
                        line-height: 1;
                        margin-top: 12px;
                    }
                }
            }
        }
    }
</style>
<script>

export default {
    layout: 'InterseguroWeb',
    data() {
        return {
            
        }
    },
    mounted() {

    },
}
</script>