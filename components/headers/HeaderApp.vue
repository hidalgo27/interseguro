<template>
    <header class="header-planes" @scroll="handleScroll()" >
        <div id="liston-desktop" class="liston" v-bind:class="{'d-none': flagCloseListon == 0  }">
            <p>Llévate un vale de consumo de <strong>S/ 100</strong> por la compra de tu Seguro Vehicular en <strong>plan Black</strong> y con una frecuencia de pago anual.</p>
            <div class="closeListon" @click="closeListon()">X</div>
        </div>
        <div class="menu-nav">
            <div class="menu-nav__izq">
                <nuxt-link :to="{ path: this.urlLocal = this.urlLocal != undefined ? this.urlLocal : '/' }" class="main-nav__logo">
                    <img src="../../static/media/interseguroVehicular_v2/logo.png" class="main-nav__logo--iso" alt="seguros vehiculares">
                    <img src="../../static/media/interseguroVehicular_v2/logo.png" class="main-nav__logo--full" alt="intersguro seguro vehicular">
                </nuxt-link>
            </div>
            <div class="menu-nav__der">
                <div id="capa" style="display: none;"></div>
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
    props: [""],

    data(){
        return{
        nuevoProducto: false,
            flagCloseListon: 0,
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
        if (localStorage.getItem("flagCloseListon") == 0) {
            this.flagCloseListon = 0
            localStorage.setItem("flagCloseListon", 0)
        }else if  (localStorage.getItem("flagCloseListon") == 1) {           
            this.flagCloseListon = 1
            localStorage.setItem("flagCloseListon", 1)
        }else{
            localStorage.setItem("flagCloseListon", 1)
            this.flagCloseListon = 1
        }
        setTimeout(() => {
            this.urlLocal = localStorage.getItem("urlLocal")
        }, 250)
        setTimeout(() => {
            if(this.$store.state.common.cuentasueldo == 'Y'){
                this.tarjetaoh = false        
                this.baseIS = true
                this.cuentaSueldo = true
            } else if(this.$store.state.common.tarjetaoh == 'Y'){
                this.cuentaSueldo = false
                this.baseIS = true
                this.tarjetaoh = true
            } else{
                this.tarjetaoh = false
                this.cuentaSueldo = false
                this.baseIS = false
            }
        },0);
        this.handleScroll()
    },
    computed: {},
    methods:{
        closeListon(){
            document.getElementById("liston-desktop").style.display = "none"
            this.flagCloseListon = 0            
            localStorage.setItem("flagCloseListon", 0)
             this.$bus.$emit('updatingTest2', 0) 
        },
        enlaceTest(){
            var div = document.getElementById("capa")
            div.style.display = "none";
            document.getElementById("main-menu").style.display = "none"
            document.getElementById("nav-checkbox").checked = false
        },
        close(eve) {
            this.ocultarBanner = true
        },
        handleScroll(eve) {
            if (window.scrollY >= 600) {
                if(true){
                    this.isOculto = false
                    this.contactanos = false;                    
                }
            } else {
                this.isOculto = true
                this.contactanos = true;
            }
        },
        cotizarTop(e) {
            localStorage.setItem("focusActive",1)
            e.preventDefault();
            if (process.client) {
                window.scrollTo(0,0)
            }
            this.$nuxt.$router.push({
                path: "/"
            });
        },
        showHide(e) {
            if (process.client) {
                e.preventDefault();
                var div = document.getElementById("capa")
                document.getElementById("main-menu").style.display = "flex"
                div.style.display = "block"
            }
        },
        closeNav(e){
            if (process.client) {
                e.preventDefault();
                var div = document.getElementById("capa")
                document.getElementById("main-menu").style.display = "none"
                div.style.display = "none"
            }
        }
    },
    created(){
    setTimeout(()=>{
        this.nuevoProducto = this.$store.state.common.nuevoProducto
        },1000)
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
    .closeListon{
        
        cursor: pointer;
        position: absolute;
        right: 20px;
        height: 30px;
        top: 5px;
        background: #ff9200;
        border-radius: 45px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        border-radius: 20px;
        border: 1px solid #fff;
        font-size: 18px;

    }
    .liston{
        background: #ff9200;
        width: 100%;
        height: 40px;
        left: 0;
        justify-content: center;
        align-items: center;
        padding: 0 51px 0 8px;
        display: flex;
        p{
            text-align: center;
            font-size: 14px;;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.3;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
            font-family: 'omnesregular';
        }        
    }
.footer-menu{
    flex-direction: column;
    width: 70%;
    p{
        margin-bottom: 12px;
        color: white;
    }
    &__redes{
        display: flex;
        padding-bottom: 12px;
        justify-content: space-between;
        img{
            width: 40px !important;
        }
    }
}
#nav-checkbox{
    display: none !important;
}
.main-nav__menu{
    padding-top: 70px;
    ul{
        border-bottom: 2px solid white;
        padding-left: 0;
    }
    .box-logo{
        img{
            height: 45px;
            width: auto !important;
        }
    }
    .box-close{
        position: absolute;
        right: 16px;
        top: 44px;
        img{
            width: 28px !important;
        }
    }
    .menu-item__enlace{
        color: white;
        text-transform: uppercase;
        font-size: 1.4rem;
    }
}
@keyframes shadow-pulse {
    0% {
        box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.11);
    }

    100% {
        box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.11);
    }
}

@keyframes shadow-pulse-big {
    0% {
        box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.11);
    }

    100% {
        box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.11);
    }
}
.telefono-desktop-img{
    img{
        width: 28px;

    }
}
.wapp-desktop-img{
    img{
        width: 28px !important;
    }
    
}
.box-cotiza a {
  animation: shadow-pulse 1s infinite;
}
    .oculto{
        display: none !important;
    }
    .header-planes{
        background: white;
        height: 68px;
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
            border-bottom: 1px solid #0855c4;
            .nav-contacto{
                display: flex;
                .telefono_custom{
                    width: 40px;
                }
                img{
                    width: 20px;
                }
                span{
                    color: #0855c4;
                    font-size: 14px;
                }
            }
            &__izq{
                height: 68px;
                display: flex;
                justify-content: space-between;
                padding-left: 15px;
                border-bottom: 1px solid white;
                background: white;
            }
            &__der{
                background: #f3f3f3;
                height: 68px;
                display: none;
                
                ul{
                    text-align: center;
                    padding-left: 0px;
                    margin-bottom: 0;
                    display: flex;
                    list-style: none;
                    align-items: center;
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
            font-size: 16px;
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
                p{
                    height: 50px;
                    overflow: hidden;
                }
            }
        }
        .campaniatv-home.tarjetaoh{
            background: #d2232a;
        }
        .campaniatv-home{
            background: #000;
            background-repeat: repeat-x;
            background-size: contain;
            display: flex;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px; 
            top: 50px;
            .campania-lado-der{
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
                font-family: Omnes;
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
    @media (min-width: 768px){
        .footer-menu{
            width: 30%;
            &__redes{
                img{
                }
            }
        }
    }
    @media (min-width: 992px){
        .footer-menu{
            width: 25%;
            &__redes{
                img{
                }
            }
        }
        .box-logo{
            text-align: center;
        }
         .header-planes{
            .menu-nav{
                .nav-contacto{
                    .telefono{
                    }
                    .whatsapp{
                    }
                }
                &__izq{
                    padding-left: 45px;            
                }
            }
         }
    }
    @media (min-width: 1024px){
         .header-planes{
            .menu-nav{
                &__izq{
                    padding-left: 65px;            
                }
            }
         }
    }
    @media (min-width: 1200px){
        .liston{
          display: flex;
          p{
              font-size: 18px;
          }
          .closeListon{
                right: 9rem;
            }
        }
        
        .header-planes{
            .menu-nav{
                flex-direction: row;
                justify-content: space-between;
                .nav-contacto{
                    .telefono{
                        width: 120px;
                    }
                    .whatsapp{
                        width: 120px;
                    }
                }
                &__izq{
                    flex-basis: auto;
                    padding-left: 65px;            
                }
                &__der{
                    background: white;
                    flex-grow: 1;
                    display: flex;
                    padding-right: 65px;
                    ul{
                        justify-content: flex-end;
                        li{
                            width: auto;
                            margin-left: 0;
                            margin-right: 16px;
                            a{
                                font-size: 1rem;
                                color: #454a6c;
                            }
                            &:hover{
                                a{
                                    transition: all 0.5s;
                                    color: #0855c4;
                                }
                            }
                        }
                    }
                }
            }
        }
        .header-planes{
            .menu-nav{
                width: 100%;
                margin: auto;
                
                &__der{
                    ul{
                        li{
                            a{

                            }
                            &:hover{
                                a{
                                    transition: all 0.5s;
                                    color: #0855c4;
                                }
                            }
                        }
                    }
                }
            }
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
    @media (min-width: 1440px){
        .header-planes{
            .menu-nav{
                &__izq{
                    padding-left: 128px;            
                }
                &__der{
                    padding-right: 128px;            
                }
            }
            
        }
    }
</style>