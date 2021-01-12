<template>
    <div class="renovacion2021">
        <div class="capaOcultaGris" @click="clickCapaGris" v-bind:class="{mostrarCapaGris: mostrarCapaGris}">
        </div>
        <div class="renovacion-data" >
            <div class="renovacion-head" v-if="this.objRenovacion">
                <p><span>{{this.objRenovacion.client.firstName}},</span> manejar tranquilo nunca fue tan fácil</p>
                <span class="subtitulo">Tu seguro vehicular se renovará automáticamente</span>
            </div>
            <div class="renovacion-body">
                <div class="renovacion-body--item  renovacion-body__carro  carro">
                    <img class="carro--img  d-none  d-lg-block" src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt="">
                    <div class="carro--datos">
                        <h3>
                            <img width="40" class="carro--img  d-block  d-lg-none" src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt=""> 
                            Tu carro</h3>
                        <div class="placa-modelo">
                            <div class="placa">
                                <p class="item-titulo">Placa:</p>
                                <p class="item-descripcion">{{this.objRenovacion.vehicle.plateNumber}}</p>
                            </div>
                            <div class="modelo">
                                <p class="item-titulo">Modelo:</p>
                                <p class="item-descripcion">{{this.objRenovacion.vehicle.brandName}} {{this.objRenovacion.vehicle.modelName}}  {{this.objRenovacion.vehicle.modelYear}}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="renovacion-body--item  renovacion-body__nueva-poliza  nueva-poliza">
                    <img class="nueva-poliza--img  d-none  d-lg-block" src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt="">
                    <div class="nueva-poliza--datos">
                        <h3>
                            <img width="40" class="carro--img  d-block  d-lg-none" src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt=""> 
                            Tu nueva póliza</h3>
                        <div class="nueva-poliza">
                            <div class="nueva-poliza--item  plan">
                                <p class="item-titulo">Plan:</p>
                                <p class="item-descripcion">Plata</p>
                            </div>
                            <div class="nueva-poliza--item  vigencia-poliza">
                                <p class="item-titulo">Vigencia de póliza:</p>
                                <p  class="item-descripcion"><span>{{this.objRenovacion.policy.fromDate}}</span>-<span>{{this.objRenovacion.policy.toDate}}</span></p>
                            </div>
                            <div class="nueva-poliza--item  suma-asegurada">

                                <p class="item-titulo">Suma asegurada:

                                    <span id="tooltip-target-1"  class="tooltip-icon ">
                                        ?
                                    </span>
                                    
                                    <b-tooltip target="tooltip-target-1" triggers="hover">
                                        Puedes editar la suma asegurada de tu póliza siempre que el valor se encuentre entre US$ MIN y US$ MAX
                                    </b-tooltip>

                                </p>
                                <div class="box-input">
                                    <!-- <div class="flotante-moneda">US$</div> -->
                                    <b-form-input class="e-range" step="100" v-model="listCotizacion.vehicle.current" type="text" @change="cambioInput()"></b-form-input> 
                                </div>
                                <div class="tooltip-suma-asegurada" v-bind:class="{'d-flex' : activarTooltip}">
                                    <div class="item">
                                        <p class="tooltip-titulo">¿Qué es suma segurada?</p>
                                        <p class="tooltip-descripcion">
                                            Puedes editar la suma asegurada de tu póliza siempre que el valor se encuentre entre US$ MIN y US$ MAX
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="nueva-poliza--item  cuota">
                                <p class="item-titulo">Cuota:
                                    <span id="tooltip-target-2"  class="tooltip-icon ">
                                        ?
                                    </span>
                                    
                                    <b-tooltip target="tooltip-target-2" triggers="hover">
                                        Puedes editar la suma asegurada de tu póliza siempre que el valor se encuentre entre US$ MIN y US$ MAX
                                    </b-tooltip>
                                </p>
                                <p  class="item-descripcion" v-if="this.selected == 1">$ {{ this.listCotizacion.policy.monthly}}  </p>
                                <p  class="item-descripcion" v-else-if="this.selected == 2">$ {{ this.listCotizacion.policy.quarterly}}  </p>
                                <p  class="item-descripcion" v-else-if="this.selected == 3">$ {{ this.listCotizacion.policy.annual}}  </p>
                                <p  class="item-descripcion" v-else-if="this.selected == 4">$ {{ this.listCotizacion.policy.twoYears}}  </p>
                                <p v-else></p>
                            </div>
                            <div class="nueva-poliza--item  frecuencia-pago">
                                <div class="frecuencia-pago">
                                    <p class="item-titulo">Frecuencia de pago: </p>
                                    <div class="seleccion">

                                    </div>
                                    <div class="select">
                                        <b-form-select @change="seleccionarFrecuencia()" :value="selected" :options="options"></b-form-select>
                                        <div class="select-item">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="nueva-poliza--item  gps">
                                <p class="item-titulo">GPS:</p>
                                <p  class="item-descripcion" v-if="this.objRenovacion.policy.gps == 'Y'">SI</p>
                                <p  class="item-descripcion" v-else-if="this.objRenovacion.policy.gps == 'N'">NO</p>
                                <p v-else></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="renovacion-body--item  renovacion-body__carro  medio-pago">
                    <img class="medio-pago--img  d-none  d-lg-block" src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt="">
                    <div class="medio-pago--datos">
                        <h3>
                            <img width="40" class="medio-pago--img  d-block  d-lg-none" src="https://www.interseguro.pe/vehicular/resources/v2/mail/renovacion/icon_mprecio.png" alt=""> 
                            Medio de pago</h3>
                        <div class="medio-pago">
                            <p class="item-titulo">El cobro se realizará a tu tarjeta afiliada</p>
                            <p class="tarjeta">
                                <span>{{this.objRenovacion.card.brand}}</span>{{this.objRenovacion.card.number}}
                                
                            </p>
                            <button class="boton-secundario" @click="actualizarTarjeta()">
                                ACTUALIZAR MEDIO DE PAGO
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <p class="texto-renovacion">
                Si has actualizado alguna de las condiciones de la póliza, <span>recuerda hacer click en Guardar y Renovar para que tu póliza se renueve con estas condiciones.</span>
            </p>

            <div class="renovacion-ctas">
                <button class="boton-secundario"  @click="norenovar()">Por ahora prefiero no renovar</button>
                <button class="boton-principal" @click="continuar2()">GUARDAR Y RENOVAR</button>
            </div>

            <p class="texto-tienes-dudas">
                <span>¿Aún tienes dudas? </span><br> Llámanos al (01) 500-0000 para ayudarte
            </p>

        </div>

        

        <div class="renovacion-info">
            <h3 class="renovacion-info--titulo">
                Recuerda que tienes estos beneficios adicionales
            </h3>
            <div class="renovacion-info__beneficios">
                <div class="renovacion-info__beneficios--item">
                    <img src="" alt="">
                    <p class="titulo">
                        Chofer de reemplazo
                    </p>
                    <p class="descripcion">
                        Puedes usarlo hasta 5 veces al año y sin hacer pagos adicionales
                    </p>
                </div>
                <div class="renovacion-info__beneficios--item">
                    <img src="" alt="">
                    <p class="titulo">
                        Grúas
                    </p>
                    <p class="descripcion">
                        Si no puedes mover tu auto, nosotros nos encargamos de llevarlo a su destino
                    </p>
                </div>
                <div class="renovacion-info__beneficios--item">
                    <img src="" alt="">
                    <p class="titulo">
                        Asistencia mecánica
                    </p>
                    <p class="descripcion">
                        ¿Tu carro no arranca? Llegamos a donde estés en menos de 25 minutos
                    </p>
                </div>
                <div class="renovacion-info__beneficios--item">
                    <img src="" alt="">
                    <p class="titulo">
                        Vivemás
                    </p>
                    <p class="descripcion">
                        Forma parte de nuestro programa de beneficios que incluye descuentos para el mantenimiento de tu auto. Para mayor información ingresa a la página web de Vivemás.
                    </p>
                </div>
            </div>
        </div>

        <b-modal id="modalActualizarTarjeta" title="Bootstrap-Vue" hide-footer hide-header ref="modalActualizarTarjeta" size="md">
            <div class=" modal-confirmaTusDatos">
                <div class="modal-custom">
                    <div class="panel-custom pt-3 pb-0">
                        <div class="datos-tarjeta">
                            <p class="texto-ingresa-tarjeta">INGRESA TU TARJETA</p>
                            <p class="texto-pago-online">Pago online 100% seguro</p>
                            <div class="panel-custom pt-4 pb-0">
                                    <b-row>                                        
                                        <b-col cols="12" class="box-ingresaTarjeta">
                                            <div class="card-interseguro">   
                                                <div class="form-group-custom">
                                                    <div class="input-group  iptGral editable  box-iptCard">
                                                        <input placeholder="Número de la tarjeta" id="cardnumber" @keyup="addingBlankSpaces($event)"  v-model="objCardNumber.number" maxlength="19" type="tel" class="form-control iptGral__input  ipt-cardNumber"/>                                            
                                                        <img width="30" :src="creditCardImage" >
                                                    </div>
                                                </div>
                                                <div class="card-custom">
                                                    <div class="card-custom__date"  @click="focusMesAnio()" v-bind:class="{'activeFocus':activeFocus}">
                                                        
                                                        <div class="form-group-custom">                                                            
                                                            <div id="box-mes" class="input-group  iptGral editable">   
                                                                <input @keyup="keyUpMes()" @blur="activeFocus = !activeFocus" placeholder="MM" id="cardmes" class="form-control text-uppercase iptGral__input ipt-month"  maxlength="2" v-model="card.expiration_month" type="tel" name="name"/>
                                                            </div>
                                                            <div id="focusMES" class=" d-none">
                                                                Fecha de vencimiento de tu tarjeta.
                                                            </div>
                                                        </div>
                                                        <div class="form-group-custom  text-right-custom">
                                                            <div class="input-group  iptGral editable" >
                                                                <input @keyup="keyUpCard()" @blur="activeFocus = !activeFocus" id="cardaño" placeholder="AA" class="form-control text-uppercase iptGral__input ipt-year"   maxlength="2"  v-model="expiration_year" type="tel" name="name"/>

                                                            </div>
                                                        </div>
                                                        <img v-if="activeFocus" class="img-activefocus" src="./../../static/media/img/root/calendar.svg" alt="">
                                                        <img v-else class="img-activefocus" src="./../../static/media/img/root/calendar.png" alt="">
                                                    </div>
                                                    <div class="card-custom__cvv">
                                                        <div class="form-group-custom">
                                                            <div id="box-ccv" class="input-group  iptGral  editable"  @click="validCard()">
                                                                <input @keyup="keyUpCard()" placeholder="CVV" variant="custom" id="cardccv" class="form-control text-uppercase iptGral__input ipt-cvv" :disabled="isEnable"  :maxlength="this.numberTest"  v-model="card.cvv" type="tel" name="name"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div  id="focusCVV" >
                                                        <!-- <img class="img-fluid" :src="creditCardImageCvv" > -->
                                                    </div>
                                                </div>
                                                <div class="tarjetas-aceptadas  pt-3">
                                                    <span>
                                                        <!-- <img height="28" src="./../../static/media/img/root/tarjetas-aceptadas.svg" alt="visa"> -->
                                                    </span>
                                                </div>

                                                <div class="metodo_pago_img"  style=" padding-bottom:10px;">
                                                    <img width="165" src="./../../static/media/img/root/metodo_pago.png" alt="amex">
                                                </div>
                                            </div>                    
                                        </b-col>
                                    </b-row>
                                </div>
                        </div>
                        <!-- <button type="submit" @click="continuar" class="btn box-btn__button box-btn--primary" :disabled='this.isDisabledPayment'> -->
                        <button type="submit" @click="continuar" class="btn box-btn__button box-btn--primary" >
                            <span style="">ACTUALIZAR</span>                            
                        </button>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<style lang="scss" scope>

    .texto-ingresa-tarjeta{
        color: #0855C4;
        font-size: 22px;
        font-family: 'Omnes Medium';
        text-align: center;
    }
    .texto-pago-online{
        color: #454A6C;
        font-size: 14px;
        font-family: 'Omnes Medium';
        text-align: center;
    }
    .card-custom{
        display: flex;
        justify-content: space-between;
        max-width: 440px;
        
        &__cvv{
            max-width: 220px;
            width: 50%;
            position: relative;
            z-index: 7;
            box-sizing: content-box;
            #box-ccv{
                position: relative;
                display: flex;
                align-items: center;
                .icon-ccv{
                    position: absolute;
                    width: 18px;
                    left: 0;
                    padding-top: 0;
                    margin-left: 6px;
                    z-index: 9;        
                }
                input{
                    padding-left: 34px;
                }
            }
        }
        &__date.activeFocus{
            border: 1px solid #0855c4;
        }
        &__date{    
            max-width: 220px;
            width: 50%;
            display: inline-flex;
            .form-group-custom{
                &:nth-child(1){
                    width: 92px;
                }
                &:nth-child(2){
                    width: 70%;
                }
                &:nth-child(4){
                    width: 50%;
                }
                
                #box-mes{
                    position: relative;
                    display: flex;
                    align-items: center;
                    .icon-mes{                    
                        position: absolute;
                        width: 18px;
                        left: 0;
                        padding-top: 0;
                        margin-left: 6px;
                        z-index: 9;
                    }
                    &:after{
                        width: 5px;
                        height: 46px;
                        background: #fff;
                        content: "/";
                        top: 1px;
                        right: -2px;
                        position: absolute;
                        z-index: 99;
                        font-size: 17px;
                        line-height: 44px;
                        color: #d3ddef;
                    }
                }
            }
        }
    }
    
    
    .iptGral.editable .iptGral__input {
        padding-left: 30px;
        max-width: 460px;
        height: 48px;
        border: 1px solid #D1D1D1 !important;
        box-shadow: none;
        line-height: 48px;
    }
    .iptGral.editable ::placeholder {
        color: #D1D1D1 !important;        
    }
    .box-iptCard{
        position: relative;
        display: flex;
        align-items: center;
        img{
            position: absolute;
            right: 0;
            z-index: 99;
            padding-top: 8px;
            right: 8px;

        }
        .icon-tarjeta{
            position: absolute;
            width: 18px;
            left: 0;
            padding-top: 0;
            margin-left: 6px;
        }
        .ipt-cardNumber{            
            background-image: url("./../../static/media/img/root/tarjeta.svg");
            background-repeat: no-repeat;
            background-position-x: 12px;
            background-position-y: 14px;
            background-size: 35px;
            padding-top: 4px;
            padding-bottom: 5px;
        }
        .ipt-cardNumber:focus {
            background-image: url("./../../static/media/img/root/tarjeta_focus.svg");
            border: 1.5px solid #0855c4!important;
            box-shadow: none;
        }
        
    }
    .card-interseguro{
        border-radius: 5px;
        width: 100%;
        max-width: 440px;
        .form-label.col-form-label.label-completed{
            padding-left: 0;
            padding-bottom: 0;
        }
        .subtitulo{
            color: #0BD360;
        }
        label{
            color: #0855c4;
        }
        .slash-symbol{
            position: relative;
            label{
                position: absolute;
                bottom: -4px;
                z-index: 99;
                font-size: 26px;
                padding-bottom: 0;
                color:#0855c4;
            }
        }
        .ipt-month{
            width: 40px;
            padding-right: 8px !important;
            // background-image: url("./../../static/media/img/root/calendar.png");
            background-repeat: no-repeat;
            background-position-x: 12px;
            background-position-y: 14px;
            background-size: 35px;
            padding-top: 4px;
            padding-bottom: 5px;
            text-align: left !important;
            padding-left: 41px !important;
        }
        .ipt-month:focus {
            // background-image: url("./../../static/media/img/root/calendar.svg");
            box-shadow: none;
        }
        
        .img-activefocus{
            position: absolute;
            z-index: 9;
            width: 20px;
            left: 29px;
        }
        
        .ipt-year{
            width: 65px;
            padding: 0 5px 0 0;
            text-align: left !important;
            padding-left: 0 !important;
            padding-left: 6px !important;
        }
        .ipt-cvv{
            width: 60px;
            padding: 0 0 0 8px;
            background-image: url("./../../static/media/img/root/ccv.png");
            background-repeat: no-repeat;
            background-position-x: 12px;
            background-position-y: 14px;
            background-size: 35px;
            padding-top: 4px;
            padding-bottom: 5px;
        }
        #box-ccv .ipt-cvv:focus {
            background-image: url("./../../static/media/img/root/cvv_focus.png");
            border: 1.5px solid #0855c4 !important;
            box-shadow: none;
        }
        .text-right-custom{
            text-align: right;
            label{
                padding-right: 0;
                padding-bottom: 0;
            }
        }
        .iptGral__input{
            color: #616161;
            font-size: 20px;
        }
    }
    .metodo_pago_img{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img{
            height: 22px;
            width: auto;
        }
    }
        
    .card-custom__date{
        align-items: center;
    }

    .renovacion2021{            

        /*  ************************************************************************************ */
            /*  ************************************************************************************ */
            /*  ************************************************************************************ */
        button{
            &:focus{
                outline: none;
            }
        }
        .capaOcultaGris{
            background: rgba(37, 39, 51, 0.74902);
            position: fixed;
            width: 100%;
            height: 100vh;
            z-index: 999;
            display: none;
            align-items: center;
            top: 0;
        }
        .mostrarCapaGris{
            display: block !important;
        }
        .tooltip-suma-asegurada{
            &:before{
                content: "";
                position: absolute;
                width: 18px;
                height: 10px;
                left: calc(50% - 18px);
                z-index: 999;
                text-align: center;
                align-items: center;
                color: white;
                line-height: 24px;
                background-size: 65%;
                background-repeat: no-repeat;
                background-position: center;
                // border-right: 18px solid transparent;
                // border-top: 24px solid rgba(39,54,45,0);
                // border-left: 18px solid transparent;
                // border-bottom: 39px solid white;
                border-top: 18px solid transparent;
                border-bottom: 18px solid transparent;
                border-left: 24px solid #ffffff;
                top: -28px;
            }
            position: absolute;
            width: 270px;
            height: 170px;
            top: 0;
            right: 0;
            z-index: 999;
            padding: 32px;
            margin: auto;
            display: none;
            flex-direction: column;
            justify-content: center;
            background: white;
            .tooltip-titulo{

            }
            .tooltip-descripcion{
                
            }
            }
        .tooltip-suma-aseguradaDesktop{
            p{
                color: white;
            }
            &:before{
                content: "";
                position: absolute;
                width: 18px;
                height: 10px;
                left: -36px;
                z-index: 0;
                text-align: center;
                align-items: center;
                color: white;
                line-height: 24px;
                background-size: 65%;
                background-repeat: no-repeat;
                background-position: center;
                border-right: 45px solid #44496b;
                border-top: 20px solid rgba(39, 54, 45, 0);
                border-left: 24px solid transparent;
                border-bottom: 20px solid transparent;
                top: 74px;
            }
            position: absolute;
            width: 100%;
            height: 280px;
            top: -40px;
            left: 312px;
            z-index: 999;
            padding: 32px;
            margin: auto;
            display: none;
            flex-direction: column;
            justify-content: center;
            
            .item{
                max-width: 310px;
                height: 280px;
                background: #44496B;
                padding: 24px;
            }
            .tooltip-titulo{
                font-size: 23px;
            }
            .tooltip-descripcion{
                font-size: 16px;
                font-family: 'Omnes Regular';
                margin-top: 12px;
            }
        }
        .tooltip-icon{
            background: #D0D6E0;
            color: white;
            font-size: 14px;
            width: 20px;
            height: 20px;
            display: inline-block;
            border-radius: 50%;
            text-align: center;
            justify-content: center;
        }
        .boton-secundario{
            border: 1px solid #EA0F8F;
            height: 40px;
            color: #EA0F8F;
            border-radius: 3px;
            background: #ffffff;
        }
        .boton-principal{
            background: #EA0F8F;
            color: #ffffff;
            border-radius: 3px;
            box-shadow: none;
            border: none;
        }
        margin: auto;
        .renovacion-ctas{
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                height: 45px;
            }
        }
        .texto-renovacion, .texto-tienes-dudas{
            color: #454A6C;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            font-family: 'Omnes Regular';

        }
        .texto-renovacion{
            max-width: 300px;
            margin: auto;
        }
        .texto-tienes-dudas{
            max-width: 300px;
            margin: auto;
            span{
                font-family: 'Omnes Medium';
            }
        }
        .carro{
            .placa-modelo{
                display: flex;
                .placa{
                    width: 90px;
                }
                .modelo{
                    width: 100%;
                    padding-left: 16px;
                }
                &--titulo{
                    color: #454A6C;
                    font-size: 13px;
                    font-family: 'Omnes Regular';
                }
                &--descripcion{
                    color: #454A6C;
                    font-size: 14px;
                    font-family: 'Omnes SemiBold';
                }
            }
        }
        .nueva-poliza{
            display: flex;
            flex-wrap: wrap;
            span{
                font-size: 13px;
            }
            .plan, .cuota{
                width: 50px;
            }
            .vigencia-poliza, .frecuencia-pago{
                width: 145px;
            }
            .suma-asegurada, .gps{
                width: 115px;
            }
            &--item{
                position: relative;
                &:nth-child(2), &:nth-child(5), &:nth-child(3), &:nth-child(6){
                    &:after{
                        content: "";
                        position: absolute;
                        height: 50px;
                        width: 1px;
                        background: #D2D7D9;
                        left: -8px;
                        top: 0;
                    }
                }
                
            }
            .box-input{
                position: relative;
                .flotante-moneda{
                    height: 45px;
                    width: 55px;
                    position: absolute;
                    font-size: 24px;
                    line-height: 45px;
                    left: 24px;
                    color: #454A6C;
                    font-family: 'Omnes Medium';
                }
            }
        }
    }
    .renovacion-head{
        p{
            color: #0855C4;
            font-size: 25px;
            text-align: center;
            line-height: 28px;
        }
        span.subtitulo{
            text-align: center;
            color: #454A6C;
            font-size: 15px;
            font-family: 'Omnes Medium';
        }
    }
    .renovacion-body{
        &--item{
            border: 1px solid #D5D5D5;
            padding: 16px;
            margin-bottom: 24px;
            border-radius: 3px;
            h3{
                color: #0855C4;
                font-size: 18px;
                font-family: 'Omnes Medium';
            }
        }
    }
    .renovacion-data {
        padding: 0 8px;
        max-width: 1200px;
        margin: auto; 
    }
    .renovacion-info{
        padding-top: 32px;
        padding-bottom: 32px;
        background: #EDEFF8;
        h3{
            color: #0855C4;
            font-size: 25px;
            text-align: center;
        }
        &__beneficios{
            &--item{
                background: #ffffff;
                width: 310px;
                margin: auto;
                padding: 16px;
                margin-bottom: 24px;
                .titulo{
                    color: #454A6C;
                    font-size: 20px;
                    text-align: center;
                }
                .descripcion{
                    color: #454A6C;
                    font-size: 16px;
                    text-align: center;
                }
            }
        }
    }

    @media (min-width: 768px) {
        .card-custom__date .form-group-custom:nth-child(1) {
            width: 94px;
            position: relative;
        }
        .card-custom__date .form-group-custom:nth-child(2) {
            width: initial;
            position: relative;
        }
    }
    @media (min-width: 1200px) {
        .card-interseguro{
            width: 440px;
        }
        .card-custom__date .form-group-custom:nth-child(1) {
            width: 94px;
            position: relative;
        }
        .card-custom__date .form-group-custom:nth-child(2) {
            width: initial;
            position: relative;
        }

        

    }

    @media (min-width: 1024px){
        .renovacion-head{
            max-width: 940px;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 32px;            
            p{
                font-size: 33px;
            }
            span.subtitulo{
                color: #454A6C;
                font-size: 24px;
                font-family: 'Omnes Medium';
            }
        }
        .renovacion2021{
            .texto-renovacion{
                max-width: 750px;
                font-size: 18px;
                line-height: 27px;
            }
            .texto-tienes-dudas{
                font-size: 18px;
                max-width: 750px;
                margin-bottom: 42px;
            }

            .nueva-poliza{
                .plan, .cuota, .gps{
                    width: 80px;
                }
                .vigencia-poliza, .frecuencia-pago, .suma-asegurada{
                    width: 190px;
                }
            }
            .medio-pago{
                .tarjeta{
                    display: inline-block;
                }
            }
        }
        .renovacion-ctas{
            margin: 32px 0;
        }
        .renovacion-body{
            max-width: 980px;
            margin: auto;
            &--item{                
                display: flex;
                align-items: center;
                img{
                    margin: 0 32px;
                }
                .item-titulo{
                    font-size: 16px;
                    font-family: 'Omnes Regular';
                    position: relative;
                }
                .item-descripcion{
                    font-size: 16px;
                    font-family: 'Omnes SemiBold';
                    color: #454A6C;
                }
                h3{
                    font-size: 22px;
                }
            }
            
        }
        .renovacion-info{
            &__beneficios{
                margin: auto;
                margin-top: 32px;
                display: flex;
                max-width: 800px;
                flex-wrap: wrap;
            }
        }
    }

</style>

<script>
import Modal2 from '@/components/modals/modal2'
import FadeLoader from '@/components/loaders/FadeLoader'
import { validationMixin } from 'vuelidate'
import moment from "moment/moment.js"
var cardNumber;
var fechaActual = new Date()
const state = {
    date: new Date(),
    disabledDates: {
        to: new Date(Date.now() - 8640000),
        from: new Date(fechaActual.getTime() + 3.888e+9)
    }
};
export default {
    data() {
        return {
            objUpdatePolicy:{
                card_id:'',
            },
            numberTest: '',
            activeFocus : false,
            objCard:{
                policyId:'',
                customer_id:'',
                bin: "",
                card_brand: "",
                card_category: "",
                card_type: "",
                id:''
            },
            objCardNumber:{
                number: ''
            },
            
            numberValidation:{
                isValid:''
            },

            tamañoCCV:0,
            cvvcci:'CCV',
            checkDocs: false,
            creditCardImageCvv: '',
            creditCardImage: '',
            expirationDate: '',
            isDisabledPayment: false,
            isisplayNoneLoader: true,
            cardValitor: false,
            card_id:'',
            expiration_year: '',
            card:{
                email: '',
                card_number:'',
                public_key: process.env.culqiPK,
                url: process.env.culquiURL,
                cvv:'',
                expiration_year: '',
                expiration_month: '',                    
            },
            tipoTarjetaDatalayer:'',
            objCulqi:{},

            activarTooltip: false,
            activarTooltipDesktop: false,
            mostrarCapaGris: false,
            placa: 'PEPO02',
            gps:'',
            frecuencia: '',
            isDisabled: false,
            selected: 1,
            monto_pagar: '',
            monto_antes: '',
            options: [
                
            ],
            planSeleccionado : 3,
            selected: 1,
            objRenovacion:{
                "priceModel": {
                    "policy": {
                    "twoYears": '',
                    "annual": '',
                    "quarterly": '',
                    "monthly": '',
                    "twoYearsDiscount": '',
                    "annualDiscount": '',
                    "quarterlyDiscount": '',
                    "monthlyDiscount": '',
                    "discount": true
                    },
                    "deducible": '',
                    "vehicle": {
                    "current": '',
                    "maximum": '',
                    "minimum": '',
                    "gps": "N"
                    },
                    "paymentMethodId": 1,
                    "discount": {
                    "annual": 0,
                    "quarterly": 0,
                    "monthly": 0,
                    "annualAmount": 0,
                    "quarterlyAmount": 0,
                    "monthlyAmount": 0
                    }
                },
                "client": {
                    "firstName": "",
                    "firstLastName": "",
                    "secondLastName": "",
                    "documentNumber": "",
                    "email": ""
                },
                "vehicle": {
                    "brandName": "",
                    "modelName": "",
                    "plateNumber": "",
                    "modelYear": ''
                },
                "policy": {
                    "policyId": '',
                    "policyNumber": '',
                    "intercorp": '',
                    "fromDate": '',
                    "toDate": '',
                    "frequencyId": '',
                    "frequency": '',
                    "gps": "N",
                    "policyAmount": '',
                    "renew": ''
                },
                "card": {
                    "brand": '',
                    "number": ''
                }
            },
            clonado: {
                policy: {
                    risk: "",
                    calculated: 0,
                    annual: 0,
                    quarterly: 0,
                    monthly: 0
                },
                deducible: 0,
                vehicle: {
                    current: null,
                    maximum: 0,
                    minimum: 0
                },
                adjust: 0,
                discount: {
                    special: 0,
                    annual: 0,
                    quarterly: 0,
                    monthly: 0,
                    specialAmount: 0,
                    annualAmount: 0,
                    quarterlyAmount: 0,
                    monthlyAmount: 0
                }
            },
            listCotizacion: {
                policy: {
                    risk: "",
                    calculated: 0,
                    annual: 0,
                    quarterly: 0,
                    monthly: 0
                },
                deducible: 0,
                vehicle: {
                    current: 0,
                    maximum: 0,
                    minimum: 0
                },
                adjust: 0,
                discount: {
                    special: 0,
                    annual: 0,
                    quarterly: 0,
                    monthly: 0,
                    specialAmount: 0,
                    annualAmount: 0,
                    quarterlyAmount: 0,
                    monthlyAmount: 0
                }
            },
            listaBasica: {
                vehicle: {
                    current: null,
                    maximum: 0,
                    minimum: 0,
                    gps:''
                },
                policy: {
                    calculated: 0,
                    annual: 0,
                    quarterly: 0,
                    monthly: 0,
                    monthlyCalculated: 0,
                },
                vehicle:{
                    
                }
                },
            listaMedia: {
                vehicle: {
                    current: null,
                    maximum: 0,
                    minimum: 0
                },
                policy: {
                    calculated: 0,
                    annual: 0,
                    quarterly: 0,
                    monthly: 0,
                    monthlyCalculated: 0,
                },
            },
            listaFull: {
                vehicle: {
                    current: null,
                    maximum: 0,
                    minimum: 0
                },
                policy: {
                    calculated: 0,
                    annual: 0,
                    quarterly: 0,
                    monthly: 0,
                    monthlyCalculated: 0,
                },
            },
        }
    },
    validations: {
        payment: {
            card_number: {
                mustBeCreditCard: cardNumber => {
                let valid = require('card-validator')
                let numberValidation = valid.number(cardNumber.replace(/ /g, ''))
                if (numberValidation.isPotentiallyValid && numberValidation.isValid) {
                    return true
                } else {
                    return false
                }
                }
            },
        }
    },
    methods: {
        continuar(evt) {
            this.opacidad = true
            evt.preventDefault()
            this.isDisabledPayment = true
            this.card.expiration_year = "20" + this.expiration_year
            this.card.email = this.objRenovacion.client.email
            this.isisplayNoneLoader = false
            this.$store.dispatch('payment/getTokenCulqi', this.card).then((res) =>{
                    this.objCulqi = res
                    this.objCard = res.iin
                    this.objCard.policyId = this.objRenovacion.policy.policyId
                    this.objCard.customer_id = this.objRenovacion.client.documentNumber
                    this.objCard.id = this.objCulqi.id
                    this.objCard.card_number = this.objCulqi.card_number
                    this.$store.dispatch('payment/getCard', this.objCard).then((res) =>{
                        console.log("RES",res)
                            this.objUpdatePolicy.numeroPoliza = this.objRenovacion.policy.policyNumber
                            this.objUpdatePolicy.monto_pagar = this.monto_pagar
                            this.objUpdatePolicy.current = this.clonado.vehicle.current
                            this.objUpdatePolicy.payment = this.payment
                            this.objUpdatePolicy.renew = "Y"
                            this.isisplayNoneLoader = false;
                            this.$refs.modalActualizarTarjeta.hide()
                            
                            this.$store.dispatch('payment/updatePolicy', this.objUpdatePolicy).then((res) =>{
                                console.log("RES",res)
                                    this.obtenerDatos()
                                }
                            )
                            console.log("RES 2")
                        }
                    ).catch(()=>{
                        this.opacidad = false
                        this.$refs.modalActualizarTarjeta.hide()
                    })
                }
            )
        },
        continuar2 (evt) {
                console.log("parametro")
                evt.preventDefault();
                // this.opacidad = true
                this.listCotizacion.policy.startDate = this.$store.state.common.fechaVigenciaRenovacion
                this.listCotizacion.paymentMethodId = this.payment
                this.objUpdatePolicy.numeroPoliza = this.objRenovacion.policy.policyNumber
                this.objUpdatePolicy.monto_pagar = this.monto_pagar
                this.objUpdatePolicy.current = this.clonado.vehicle.current
                this.objUpdatePolicy.payment = this.payment
                this.objUpdatePolicy.renew = "Y"
                console.log("parametro", this.objUpdatePolicy)
                this.$store.dispatch('payment/updatePolicy', this.objUpdatePolicy)
                .then((res) =>{
                    // this.$nuxt.$router.push({path: "/renovacion/renovacion-exitosa"})
                    this.opacidad = false 
                }).catch((err)=>{
                    this.opacidad = false                    
                })

        },
        focusMesAnio(){
            this.activeFocus = true
        },
        addingBlankSpaces(ev) {
            console.log("-1")
            let valid = require('card-validator')
            cardNumber = ev.target.value
            let numberValidation = valid.number(cardNumber.replace(/ /g, ''))
            this.numberValidation = valid.number(cardNumber.replace(/ /g, ''))
            console.log("0")
            if (numberValidation.card !== null) {
                console.log("IF1")
                this.numberTest = numberValidation.card.code.size
                this.cvvcci = numberValidation.card.code.name
                let cardType = numberValidation.card.type !== 'american-express' ? numberValidation.card.type : 'amex'
                this.creditCardImage = require('../../static/media/img/flujo/metodo-pago/' + cardType + '.png')
                this.creditCardImageCvv = require('../../static/media/img/flujo/como-pagar/' + cardType+'cvv' + '.png')
            } else {
                console.log("ELSE")
                this.creditCardImage = ''
                this.creditCardImageCvv = ''
            }
            if (ev.keyCode !== 8) {
                console.log("8")
                this.objCardNumber.number = this.objCardNumber.number.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')               
            }
            this.card.card_number = cardNumber.split(" ").join("");
            if(numberValidation.isValid){
                console.log("ISVALID")
                this.cardCompleto = false
                this.cardValitor = true;
                if(numberValidation.card.code.name == "CVV" || numberValidation.card.code.name == "CVC" && this.checkDocs == true){
                    if(process.client){
                        let mes = document.querySelector("#cardmes").value.length
                        let año = document.querySelector("#cardaño").value.length
                        let ccv = document.querySelector("#cardccv").value.length
                        if(mes == 2 && año == 2 && ccv == 3 ){
                            this.isDisabledPayment = false
                        }
                    }
                    
                }else if(numberValidation.card.code.name == "CID"){
                    if(mes == 2 && año == 2 && ccv == 3 ){
                        this.isDisabledPayment = false
                    }
                }
                if (process.client) {
                    document.getElementById('cardmes').focus()
                }
                
            }else{
                this.isDisabledPayment = true
                this.cardCompleto = true
            }
        },            
        keyUpMes(){
            let mes = document.querySelector("#cardmes").value.length
            if(mes == 2){
                document.getElementById('cardaño').focus()
                if(this.cardValitor){
                    let mes = document.querySelector("#cardmes").value.length
                    let año = document.querySelector("#cardaño").value.length
                    let ccv = document.querySelector("#cardccv").value.length
                    if(mes == 2 && año == 2 && ccv > 2 && this.checkDocs == true){                
                        this.isDisabledPayment = false
                    }else{
                        this.isDisabledPayment = true
                    }
                }
            }else{
                this.isDisabledPayment = true
            }
        },
        keyUpCard(){
            let año = document.querySelector("#cardaño").value.length
            if(año == 2){
                document.getElementById('cardccv').focus()
            }
            if(this.cardValitor){
                let mes = document.querySelector("#cardmes").value.length
                let año = document.querySelector("#cardaño").value.length
                let ccv = document.querySelector("#cardccv").value.length
                if(mes == 2 && año == 2 && ccv > 2 && this.checkDocs == true){                
                    this.isDisabledPayment = false
                }else{
                    this.isDisabledPayment = true
                }
            }
        },
        validCard(){
                if(!this.numberValidation.isValid){
                    this.$swal({
                    title: 'Oops...',
                    text: 'Debe ser una tarjeta válida',
                    type: 'error',
                    showCancelButton: false,
                    confirmButtonColor: '#2177CC',
                    confirmButtonText: 'OK'
                })
            }
        },
        actualizarTarjeta(){
            this.$refs.modalActualizarTarjeta.show()
        },
        clickCapaGris(){
            this.mostrarCapaGris = false
            this.activarTooltipDesktop = false
            this.activarTooltip = false
        },
        showSumaAseguradaMobile(){
            this.mostrarCapaGris = true
            this.activarTooltip = true
        },
        showSumaAseguradaDesktop() {     
            this.mostrarCapaGris = true   
            this.activarTooltipDesktop = true
        },
        obtenerDatos(){
            this.$store.commit('common/setPlateNumber', this.placa)
            this.$store.dispatch('common/obtenerDatos', this.placa).then((res) =>{          
                if (res.data.code == 0) {
                    this.objRenovacion = res.data.body
                    this.$store.commit('common/setFechaVigenciaRenovacion', this.objRenovacion.policy.fromDate)
                    if (this.objRenovacion.policy.renew == "Y") {
                            this.$store.commit('common/setPlacaNoRenovar', '')
                            this.$store.commit('payment/setNumeroPoliza',this.objRenovacion.policy.policyNumber)
                            // this.itemElegido.year = this.objRenovacion.vehicle.modelYear
                            // this.itemElegido.assignedPrice = this.objRenovacion.priceModel.vehicle.current
                            this.listCotizacion = this.objRenovacion.priceModel
                            this.clonado = Object.assign({}, this.listCotizacion);
                            // this.$store.dispatch('common/getCotizacion', this.itemElegido).then((res) => {
                            //     this.listCotizacion = res.data.body.allRisk
                            //     this.mostrarPrimeraPantalla = false
                            //     this.mostrarSegundaPantalla = true
                            //     this.clonado = Object.assign({}, this.listCotizacion);
                            //     this.obtenerMonto()   
                            // }
                        // )
                        this.options = [
                            { value: null, text: '' },
                            { value: 'MENSUAL' , text: 'Mensual (12 cuotas)'+this.listCotizacion.policy.monthly },
                            { value: '2', text: 'Trimestral (4 cuotas)'+this.listCotizacion.policy.quarterly },
                            { value: '3', text: 'Anual (1 cuota)'+this.listCotizacion.policy.annual },
                        ]
                    }else if (this.objRenovacion.policy.renew == "N") {
                        this.$store.commit('common/setPlacaNoRenovar', this.placa)
                        this.$nuxt.$router.push({path: "/renovacion/renovacion-cancelada"})
                    } else {
                    }
                } 
            })
        },
        seleccionarFrecuencia(){
            if (this.selected == 1) {
                this.frecuencia = 'Mensual'
                if (this.planSeleccionado == 3) {
                    this.monto_pagar = this.listaFull.policy.monthlyDiscount
                    this.monto_antes = this.listaFull.policy.monthlyCalculated
                }else if(this.planSeleccionado == 6){
                    this.monto_pagar = this.listaMedia.policy.monthlyDiscount
                    this.monto_antes = this.listaMedia.policy.monthlyCalculated
                }
                // this.monto_pagar = this.listCotizacion.policy
            }else if(this.selected == 2){
                this.frecuencia = 'Trimestral'
                if (this.planSeleccionado == 3) {
                    this.monto_pagar = this.listaFull.policy.quarterlyDiscount
                    this.monto_antes = this.listaFull.policy.quarterlyCalculated
                }else if(this.planSeleccionado == 6){
                    this.monto_pagar = this.listaMedia.policy.quarterlyDiscount
                    this.monto_antes = this.listaMedia.policy.quarterlyCalculated
                }
            }else if(this.selected == 3){
                this.frecuencia = 'Anual'
                if (this.planSeleccionado == 3) {
                    this.monto_pagar = this.listaFull.policy.annualDiscount
                    this.monto_antes = this.listaFull.policy.annualCalculated
                }else if(this.planSeleccionado == 6){
                    this.monto_pagar = this.listaMedia.policy.annualDiscount
                    this.monto_antes = this.listaMedia.policy.annualCalculated
                }
            }else if(this.selected == 4){
                this.frecuencia = 'Bianual'
                if (this.planSeleccionado == 3) {
                    this.monto_pagar = this.listaFull.policy.twoYearsDiscount
                    this.monto_antes = this.listaMedia.policy.twoYearsCalculated
                }else if(this.planSeleccionado == 6){
                    this.monto_pagar = this.listaMedia.policy.twoYearsDiscount
                    this.monto_antes = this.listaMedia.policy.twoYearsCalculated
                }
            }else{}
        },
        getCotizacion() {
            this.$store.dispatch('common/getCotizacion', this.itemElegido)
            .then((res) => {
                if (res.data.code == 0) {                 
                    this.listaMedia = res.data.body.medium
                    this.listaFull = res.data.body.allRisk
                    this.listCotizacion = res.data.body.allRisk
                    this.clonado = Object.assign({}, this.listCotizacion)
                    this.$store.commit('common/setCurrent', this.listCotizacion.vehicle.current)
                    this.seleccionarFrecuencia()
                }
            })
        },
        cambioInput(evt) {
            evt.preventDefault()
            alert("HOLA")
            // if (this.listCotizacion.vehicle.current > this.clonado.vehicle.maximum) {
            // this.listCotizacion.vehicle.current = this.clonado.vehicle.maximum
            // }else if(this.listCotizacion.vehicle.current < this.clonado.vehicle.minimum){
            // this.listCotizacion.vehicle.current = this.clonado.vehicle.minimum
            // } else {
            // this.$store.commit('common/setCurrent', this.listCotizacion.vehicle.current)
            // this.getCotizacion()
            // this.isDisabled = false;
            // }
        },
    },
    computed: {
        isEnable: function(){
            return this.cardCompleto;                
        },
        isMinimo: function() {
            let decimal = this.clonado.vehicle.minimum / 100
            let minimo = Math.ceil(decimal) * 100;
            return minimo
            // return minimo.toLocaleString();
        },
        isMaximo: function() {
            let decimal = this.clonado.vehicle.maximum / 100
            let maximo = Math.floor(decimal) * 100;
            return maximo
            // return maximo.toLocaleString();
        },
    },
    mounted() {
        this.obtenerDatos()
    },
}
</script>
