<template>
    <header class="header-planes" @scroll="handleScroll()" >

        <div class="menu-nav">
            <div class="menu-nav__izq">
                <nuxt-link :to="{ path: '/interbank/' }" class="main-nav__logo">
                    <img src="../../static/media/interseguroVehicular_v2/logo-ibk.png" class="main-nav__logo--iso" alt="seguros vehiculares">
                    <img src="../../static/media/interseguroVehicular_v2/logo-ibk.png" class="main-nav__logo--full" alt="intersguro seguro vehicular">
                </nuxt-link>
                <div class="nav-contacto  d-flex  d-lg-none">                
                    <div class="telefono">   
                        <a style="text-decoration: none;" href="tel:015000000">               
                            <img src="../../static/media/img/home/telefono.png" alt="email">
                        </a>
                    </div>
                </div>
            </div>
            <div class="menu-nav__der">

                <ul>
                    <li class="" @click="enlaceTest()">
                        <nuxt-link class=""  to="/interbank/cobertura/">¿Qué me cubre?</nuxt-link>
                    </li>        
                    <li class="" @click="enlaceTest()">
                        <nuxt-link class=""  to="/interbank/como-lo-uso/">¿Cómo lo uso?</nuxt-link>
                    </li>
                    <li class="" @click="enlaceTest()">
                        <nuxt-link class="" to="/interbank/oficial/preguntas-frecuentes/"> Preguntas frecuentes</nuxt-link>
                    </li>
                    <div v-if="this.contactanos" class="nav-contacto  d-none  d-lg-flex">
                        <div class="telefono">
                            <span><img src="../../static/media/img/home/telefono.png" alt="email"></span>
                            <span class="ml-2">Llámanos<br>(01)500 0000</span>
                        </div>
                    </div>

                    <div id="btn-cotizaHead"  class="box-cotiza  oculto"  v-bind:class="{ ocultoAcctivador: isOculto }">
                    </div>

                </ul>
            </div>
        </div>
        <div v-if="this.cuentaSueldo" class="campaniatv-home  d-none  d-lg-block" v-bind:class="{ cuentaSueldo: cuentaSueldo, tarjetaoh: tarjetaoh  }">
            <div class="campaniatv-home__texto">
                <div class="campania-lado-izq">
                    <h2>15% de descuento con cuenta sueldo</h2>
                </div>
                <div class="campania-lado-der">
                    <img class="logo-interbank" src="../../static/media/img/Interbank.png" alt="logo interbank">
                </div>        
            </div>
        </div>

        <div v-if="this.tarjetaoh" class="campaniatv-home  d-none  d-lg-block" v-bind:class="{ cuentaSueldo: cuentaSueldo, tarjetaoh: tarjetaoh  }">
            <div class="campaniatv-home__texto">
                <div class="campania-lado-izq">
                    <h2>15% de descuento con tarjetaoh!</h2>
                </div>
                <div class="campania-lado-der">
                    <img  class="logo-tarjetaoh" src="../../static/media/img/oh.png" alt="logo tarjeta oh">
                </div>        
            </div>
        </div>


    </header>
</template>

<script>
export default {
    name: "navbar",
    data(){
        return{
            contactanos: true,
            isOculto: true,
            urlLocal: "",
            ocultarBanner:false,
            cuentaSueldo: false,
            tarjetaoh: false,
            baseIS: false,
        }
    },
    mounted(){
        this.urlLocal = localStorage.getItem("urlLocal");
        setTimeout(() => {
            if(localStorage.getItem("cuentasueldo") !== null){
                this.tarjetaoh = false        
                this.baseIS = true
                this.cuentaSueldo = true
            } else if(localStorage.getItem("tarjetaoh") !== null){
                this.cuentaSueldo = false
                this.baseIS = true
                this.tarjetaoh = true
            } else{
                this.tarjetaoh = false
                this.cuentaSueldo = false
                this.baseIS = false
            }
        },0);
    },
    computed: {},
    methods:{
        close(eve) {
            this.ocultarBanner = true
        },
        handleScroll(eve) {
            if (window.scrollY >= 600) {
                if(window.window.innerWidth >= 768){
                    document.querySelector(".ocultoAcctivador").classList.remove("oculto");
                    this.contactanos = false;                    
                }
            } else {
                document.querySelector(".ocultoAcctivador").classList.add("oculto");
                this.contactanos = true;
            }
        },
        cotizarTop(e) {
            e.preventDefault();
            if (process.client) {
                window.scrollTo(0,0)
            }
            this.$nuxt.$router.push({
                path: "/interbank"
            });
        },
        enlaceTest(){
        },
        showHide(e) {
            if (process.client) {
                e.preventDefault();
                var div = document.getElementById("capa")
                if(document.getElementById("nav-checkbox").checked == true){
                    document.getElementById("main-menu").style.display = "flex"
                    div.style.display = "block";
                }else{
                    document.getElementById("main-menu").style.display = "none"
                    div.style.display = "none";
                }
            }
        }
    },
    created(){
        if (process.browser) {
            window.addEventListener("scroll", this.handleScroll);
            document.addEventListener('touchstart', this.handleScroll, {passive: true});
        }
    },
    destroyed(){
        if (process.browser) {
            window.removeEventListener("scroll", this.handleScroll);
            document.addEventListener('touchstart', this.handleScroll, {passive: true});
        }
    }
}
</script>

<style lang="scss" scoped>
.header-planes .menu-nav__der ul li {
    font-family: 'Geometria Medium';
}
    .header-planes{
        background: white;
        height: 100px;
        position: fixed;
        width: 100%;
        margin: auto;
        top:0;
        z-index: 999;
        border-bottom: 1px solid #d4d4d4;
        .menu-nav{
            display: flex;
            flex-direction: column;
            position: relative;
            .nav-contacto{
                display: flex;
                .telefono {
                    margin-right: 37px;
                }
                .whatsapp{
                    margin-right: 25px;
                    margin-left: 20px;
                }
                img{
                    width: 18px;
                }
                div{
                    display: flex;
                    align-items: center;
                }
                span{
                    color: #0855c4;
                    font-size: 14px;
                }
            }
            &__izq{
                height: 49px;
                display: flex;
                justify-content: space-between;
                padding: 0 12px;
            }
            &__der{
                background: #f3f3f3;
                height: 49px;
                ul{
                    text-align: center;
                    padding-left: 0px;
                    margin-bottom: 0;
                    display: flex;
                    list-style: none;
                    align-items: center;
                    height: 50px;
                    width: 100%;
                    li{
                        text-decoration: none;
                        width: 33%;
                        margin-left: 20px;
                        margin-right: 20px;
                        a{
                            font-size: 13px;
                            font-weight: 500;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 0.77;
                            letter-spacing: normal;
                            text-align: left;
                            color: #696969;
                        }
                        &:hover{
                            a{
                                transition: all 0.5s;
                                // font-weight: 900;
                                color: #0855c4;
                            }
                        }
                    }
                }
            }            
        }
        .btn-cotiza a {
            border: 2px solid #EA0C90 !important;
            background: #EA0C90;
            color: #fff;
            border-radius: 3px;
            font-size: 20px;
            &:hover{
                background: #d6058b;
                text-decoration: none;
            }
        }
        .logo-interbank{
            width: 200px;
            right: 19%;
            bottom: 8px;
        }
        .logo-tarjetaoh{
            width: 58px;
            right: 19%;
            bottom: 8px;
        }
        .campaniatv-home.cuentaSueldo{
            background: #00bb31;
            .campania-lado-der{
                // border-bottom: 50px solid #039228;
                p{
                    height: 50px;
                    overflow: hidden;
                }
            }
        }
        .campaniatv-home.tarjetaoh{
            background: #d2232a;
            .campania-lado-der{
                // border-bottom: 50px solid #ed1d23;
            }
        }
        // .baseIS{
        //     display: none !important;
        // }
        .campaniatv-home{
            background: #000;
            background-repeat: repeat-x;
            background-size: contain;
            display: flex;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px; // Other
            top: 50px;
            .campania-lado-der{
                // border-bottom: 50px solid #0e50b1; // Other
                height: 50px;
                line-height: 40px;
                border-left: 50px solid transparent;
                width: 55%;
                color: #FFFFFF;
                font-size: 29px;
                font-weight: 500;
                text-align: left;
                text-transform: uppercase;
            }
            .campania-lado-izq{
                width: 61%;
                text-align: right;
                overflow: hidden;
                height: 50px;
            }
            h2{
                color: #FFFFFF;
                font-family: 'Omnes Medium';
                font-weight: 600;
                text-align: left;
                margin-bottom: 0;
                padding-left: 5%;
                padding-bottom: 0;
                display: inline-block;
                height: 50px;
                line-height: 50px;
                word-spacing: 2px;
                font-weight: 500;
            }
        }
    }
    
    // @media (min-width: 990px){
    //     .campaniatv-home{
    //         .campania-lado-izq{
    //             width: 45%;
    //         }
    //     }
    // }
    @media (min-width: 1024px){
        .header-planes{
            height: 50px;
            .menu-nav{
                flex-direction: row;
                justify-content: space-between;
                .nav-contacto{
                    .telefono{
                        width: 132px;
                    }
                    .whatsapp{
                        width: 132px;
                    }
                }
                &__izq{
                    flex-basis: auto;
                    width: 340px;
                }
                &__der{
                    background: white;
                    flex-grow: 1;
                    ul{
                        li{
                            a{
                                font-size: 14px;
                                color: #505050;
                            }
                            &:hover{
                                a{
                                    transition: all 0.5s;
                                    // font-weight: 900;
                                    color: #0855c4;
                                }
                            }
                        }
                    }
                }
            }
            // .campaniatv-home{
            //     .campania-lado-izq{
            //         width: 45%;
            //     }
            // }
        }
    }
    @media (min-width: 1200px){
        .header-planes{
            height: 50px;
            .menu-nav{
                width: 90%;
                margin: auto;

                &__izq{
                    width: 450px;
                }
                &__der{
                    ul{
                        li{
                            a{

                            }
                            &:hover{
                                a{
                                    transition: all 0.5s;
                                    // font-weight: 900;
                                    color: #0855c4;
                                }
                            }
                        }
                    }
                }
            }

            // .campaniatv-home{
            //     .campania-lado-izq{
            //         padding-left: 0%;
            //         width: 50%;
            //     }
            //     .campania-lado-der{
            //         width: 50%;
            //     }
            // }
        }
    }
    @media (min-width: 1366px){
        .header-planes{
            .campaniatv-home{
                .campania-lado-izq{
                    padding-left: 0%;
                    width: 55%;
                }
                .campania-lado-der{
                    width: 45%;
                }
            }
        }
    }
    @media (max-width: 1200px){
        .header-planes{
            .menu-nav{
                &__der{
                    .btn-cotiza{
                        display: none;
                    }
                }
            }
        }
    }
</style>