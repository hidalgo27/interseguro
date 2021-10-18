<template>
    <header class="header-planes" @scroll="handleScroll()" >
        <!--Cintillo campaña-->
        <b-container fluid>
            <b-row id="liston-desktop">
                <!-- Liston Desktop -->
                <b-col class="liston d-none d-md-block" v-bind:class="{'d-none': flagCloseListon == 0  }" align-v="center" cols="12"  >
                    <b-row align-v="center">
                        <b-col class="logo-franja">
                            <img src="./../../static/media/img/campania/img-liston-desktop.svg" alt="">
                        </b-col>
                        <b-col>
                            <p class="text">                                
                                <span style="color: #ffffff">¡Hot Sale! </span>
                                <span style="color: #ffd527"> Llévate una cuota gratis y un vale de S/100 </span>
                                <span style="color: #ffffff"> por comprar en Plan Full </span> 
                            </p>
                        </b-col>
                        <b-col cols="3" class="box-contadador">
                            <div id="contadorCyberDesktop" class="flipdown"></div>
                        </b-col>
                    </b-row>
                </b-col>
                <!-- Liston Mobile -->
                <b-col class="liston d-md-none" v-bind:class="{'d-none': flagCloseListon == 0  }" align-v="center" cols="12"  >
                    <b-row align-v="center">
                        <!-- <b-col class="logo-franja">
                            <img src="./../../static/media/img/campania/img-liston-desktop.svg" alt="">
                        </b-col> -->
                        <b-col class="p-0">
                            <p class="text">
                                <span style="color: #ffd527"> 1 cuota gratis + vale de S/100 </span>
                                <span style="color: #ffffff"> por comprar en Plan Full </span> 
                            </p>
                        </b-col>
                        <b-col cols="6" class="box-contadador">
                            <div id="contadorCyberMobile" class="flipdown flipdownMobile" style="margin-top: 17px;"></div>
                        </b-col>
                    </b-row>
                </b-col>
                <div class="closeListon" @click="closeListon()" style="margin-top: -10px;">X</div>
                
            </b-row>
        </b-container>

        <div>
            <b-navbar>
                <b-navbar-nav>
                    <b-nav-item href="#" class="logo">
                        <nuxt-link :to="{ path: this.urlLocal = this.urlLocal != undefined ? this.urlLocal : '/' }" class="main-nav__logo">
                            <img src="../../static/media/img/home/logo.svg" class="main-nav__logo--iso d-none d-md-block" alt="seguros vehiculares">
                            <img src="./../../static/media/imagenes/home/logo-header-mobile.svg" class="main-nav__logo--iso img-flujo d-md-none" alt="seguros vehiculares">
                        </nuxt-link>
                    </b-nav-item>                    
                </b-navbar-nav>

                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto contacto">
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=51934792742&text=%C2%A1Hola%21+Vengo+de+la+Web+de+Seguro+Vehicular+y+quiero+m%C3%A1s+informaci%C3%B3n+sobre+el+seguro" rel="noopener" data-v-d5c59bf2="">                            
                            <img src="./../../static/media/imagenes/home/img-watsapp.svg" alt="Escribir algún contacto" class="img-whatsapp">
                        </a>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>


    </header>
</template>

<script>
export default {
    name: "navbar",
    props: [""],

    data(){
        return{
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
        this.contador()
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
        this.urlLocal = localStorage.getItem("urlLocal")
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
        this.handleScroll()
    },
    computed: {},
    methods:{
        
        contador(){
            var flipdown2 = new FlipDown(1634273999, 'contadorCyberDesktop').start()
            var flipdown = new FlipDown(1634273999, 'contadorCyberMobile').start()
        },
        closeListon(){
            document.getElementById("liston-desktop").style.display = "none"
            this.$store.commit('common/setFlagCloseListon', 0)
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
        right: 4px;
        height: 30px;
        top: 5px;
        border-radius: 45px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        font-size: 18px;
    }
    

    .liston-mobile{
        display: flex;
        align-items: center;
        &--parrafo{
            color: white;
            display: flex;
            align-items: center;
            font-size: 11px;
        }
        .img-liston{
            width: 175px;
            height: auto;
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

    
    @media (min-width: 768px){        
        .header-planes{
            background: white;
            height: 72px;
            position: fixed;
            width: 100%;
            margin: auto;
            top:0;
            z-index: 999;
            .navbar{
                height: 72px;
                background-color: #FFFFFF;
                border-bottom: 1px solid #DDE0EA; 
                .logo{
                    padding-left: 70px;
                }  
                .contacto{
                    padding-right: 70px;
                }             
            }            
        }
        .liston{
            display: flex;        
            flex-direction: column;
            background-image: url('./../../static/media/img/campania/banner-flujo-desktop.svg');
            height: 70px;
            padding-left: 70px;
            padding-right: 70px;          
            .logo-franja{
                display: flex;
                flex-direction: column;
                max-width: 150px;
                img{
                    width: 150px;
                    height: 70px;
                }
            }
            .text{
                padding-left: 20px;
                font-family: 'Omnes Medium' !important;
                text-align: left;
                font-size: 19px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: normal;
                color: #fff;
                
            }
            .box-contadador{
                max-width: 250px !important;
            }
            
            
        }
    }
 

    @media (max-width: 768px) { 
        .header-planes{
            background: white;
            height: 60px;
            position: fixed;
            width: 100%;
            margin: auto;
            top:0;
            z-index: 999;
            .navbar{
                height: 60px;
                background-color: #FFFFFF;
                border-bottom: 1px solid #DDE0EA;                
                .img-whatsapp{                    
                    width: 117px;
                    height: 36px;
                }
            }
            .navbar-expand .navbar-nav .nav-link  {
                padding: 0px;
            } 
        }
        .liston{
            display: flex;        
            flex-direction: column;
            background-image: url('./../../static/media/img/campania/banner-flujo-desktop.svg');
            height: 70px;
            padding-left: 10px;
            padding-right: 2px;          
            .logo-franja{
                display: flex;
                flex-direction: column;
                max-width: 150px;
                img{
                    width: 150px;
                    height: 70px;
                }
            }
            .text{
                padding-left: 10px;
                font-family: 'Omnes Medium' !important;
                text-align: left;
                font-size: 15px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: normal;
                color: #fff;
                
            }
            .box-contadador{
                padding: 0px;
                max-width: 185px !important;
            }
            
            
        }
    }
</style>