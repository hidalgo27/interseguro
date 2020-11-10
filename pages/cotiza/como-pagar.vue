<template>
    <section class="steps-box">
    <b-container class="steps-plan">
      <b-row>
        <b-col cols="12" lg="8" class=" m-auto">
          <div class="box-steps">
            <div class="backcotizacion " @click="volver($event)">
              <img width="35" src="../../static/media/img/flujo/cotizacion/back.svg" alt="volver">
            </div>
          
            <ul class="steps" style="display: inline-flex">
              <template>
                <router-link  v-if="monto_pagar_steps3 != undefined "  class="steps__item  steps--active  paso3" to="/cotiza/como-pagar"><li></li></router-link>
                <router-link v-else class="steps__item  steps--active  paso3" to="/cotiza/ingresa-tu-documento"  style="cursor: auto;"><li></li></router-link>
              </template>              
              <template >
                <router-link v-if="documento_steps2 != ''" class="steps__item  paso2" to="/cotiza/ingresa-tu-documento"><li></li></router-link>
                <router-link v-else class="steps__item   paso2" to="/cotiza/ingresa-tu-documento"><li></li></router-link>
              </template>
              <template >
                <router-link  class="steps__item  paso1" to="/cotiza/cotizacion"><li></li></router-link>                
              </template>
                <li class="steps--progressBar"></li>
            </ul>

            <div v-if="this.planSeleccionado == 4" class="plan-titulo">
              <p class="roboTotal">PLAN SELECCIONADO: <span>PLATA </span></p>
            </div>
             <div v-else-if="this.planSeleccionado == 6" class="plan-titulo">
              <p class="semiFull">PLAN SELECCIONADO: <span>ORO </span></p>
            </div>
             <div v-else-if="this.planSeleccionado == 3 || this.planSeleccionado == 10" class="plan-titulo">
              <p class="full">PLAN SELECCIONADO: <span> BLACK </span></p>
            </div>
          </div> 
        </b-col>  
      </b-row>  
    </b-container>  
        <b-container class="contenedor-custom  mb-4">
            
            <b-row class="justify-content-center" style="position: relative;">
                <div class="liston-agora" v-if="this.valeAgora == true && this.$store.state.common.planSeleccionado == '3' || this.$store.state.common.planSeleccionado == '10'  ">
                    <div>
                        <span class="titulo">TARJETA DE REGALO </span><span class="para-ti">¡PARA TI!</span>
                    </div>
                    <p class="subtitulo">Vale S/ 100 de Agora</P>
                </div>
                <b-col cols="12" md="8">
                    
                    <div class="metodo-pago">
                        <b-row class="justify-content-center">
                            <b-col cols="12" lg="7"  class="metodo-pago__ingresatarjeta">
                                <div class="panel-custom">
                                    <b-row>
                                        <b-col cols="12" md="12">
                                            <div class="boxtitulo">
                                                <p class="boxtitulo__principal texto-candado">INGRESA TU TARJETA <img class="img-candado" src="../../static/media/img/candado.png" alt="candado"> <span v-if="this.businessId == 2">Interbank</span> </p>
                                                <p class="boxtitulo__principal"></p>
                                            </div>
                                        </b-col>
                                        <b-col cols="12" md="12">                                            
                                            <div class="imgs">
                                                <span class="msg-alterno">Pago online 100% seguro</span>
                                                <div class="tarjetas">
                                                    <span><img width="25" src="../../static/media/img/flujo/metodo-pago/visa.png" alt="visa"></span>
                                                    <span><img width="25" src="../../static/media/img/flujo/metodo-pago/mastercard.png" alt="mastercard"></span>
                                                    <span><img width="23" src="../../static/media/img/flujo/metodo-pago/american.png" alt="amex"></span>
                                                    <span v-if="this.businessId == 1"><img width="25" src="../../static/media/img/flujo/metodo-pago/dinners.png" alt="dinners"></span>
                                                </div>
                                                
                                            </div>
                                            
                                        </b-col>                                         
                                    </b-row>
                                </div>
                                <div class="panel-custom pt-3 pb-0">
                                    <b-row>                                        
                                        <b-col cols="12" class="box-ingresaTarjeta">
                                            <form class="card-interseguro">   
                                                <div class="form-group-custom">                                                        
                                                    <div id="focusTarjeta">
                                                        Luego de pagar, estarás asegurado automáticamente con nosotros. Una persona de Interseguro te contactará.
                                                    </div>
                                                    <div class="input-group  iptGral editable  box-iptCard">
                                                        <img src="../../static/media/img/flujo/como-pagar/icon-tarjeta.png" class="icon-tarjeta"/>
                                                        <input @focus="focusTarjeta" @blur="blurTarjeta" placeholder="Número de la tarjeta" id="cardnumber" @keyup="addingBlankSpaces($event)" v-model="objCardNumber.number" maxlength="19" type="tel" class="form-control iptGral__input  ipt-cartNumber"/>                                            
                                                        <img width="30" :src="creditCardImage" >
                                                        <span class="error-card">error momentaneo</span>
                                                    </div>
                                                </div>
                                                <div class="card-custom">
                                                    <div class="card-custom__date">
                                                        <div class="form-group-custom">                                                            
                                                            <div id="box-mes" class="input-group  iptGral editable">   
                                                                <img src="../../static/media/img/flujo/como-pagar/icon-mes.png" class="icon-mes"/>
                                                                <input @focus="focusMES" @blur="blurMES" placeholder="MM" id="cardmes" class="form-control text-uppercase iptGral__input ipt-month" @keyup="keyUpMes()" maxlength="2" v-model="card.expiration_month" type="tel" name="name"/>
                                                            </div>
                                                            <div id="focusMES">
                                                                Fecha de vencimiento de tu tarjeta.
                                                            </div>
                                                        </div>
                                                        <div class="form-group-custom  text-right-custom">
                                                            <div class="input-group  iptGral editable">
                                                                <input id="cardaño" placeholder="AA" class="form-control text-uppercase iptGral__input ipt-year" @keyup="keyUpCard()"  maxlength="2"  v-model="expiration_year" type="tel" name="name"/>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-custom__cvv">
                                                        <div class="form-group-custom">
                                                            <div id="box-ccv" class="input-group  iptGral  editable"  @click="validCard()">
                                                                <img src="../../static/media/img/flujo/como-pagar/icon-ccv.png" class="icon-ccv"/>                                   
                                                                <input @focus="focusCVV" @blur="blurCVV" placeholder="CVV" variant="custom" id="cardccv" class="form-control text-uppercase iptGral__input ipt-cvv" :disabled="isEnable" @keyup="keyUpCard()" :maxlength="this.numberTest"  v-model="card.cvv" type="tel" name="name"/>
                                                            </div>
                                                        </div>     
                                                    </div>  
                                                    <div  id="focusCVV" >
                                                        <img class="img-fluid" :src="creditCardImageCvv" >
                                                    </div>  
                                                </div>
                                                <div class="error-gral">Error momentáneo</div>                 
                                                <br>
                                            </form>                    
                                        </b-col>
                                    </b-row>
                                </div>
                                <div class="panel-custom pt-0">
                                    <b-row>
                                        <b-col cols="12" md="12">
                                            <div class="checkbox-aux font-nunito">
                                                <label  class="box-checkbox"  id="show-modal">
                                                    <input type="checkbox"  @change="isTrueTerminos" v-model="checkDocs" id="checkDocs">
                                                    <span class=checkbox-aux__span>
                                                        <i class="checkbox-aux__span--icon fa fa-check"></i>
                                                    </span>

                                                    <template v-if="tabIndex == 1">
                                                        <span v-if="gpsExiste == 'Y'" class="checkbox-aux__descripcion">He leído y acepto
                                                            <a href="javascript:void(0);"  v-b-modal.modal1> las condiciones de la póliza</a>
                                                            y del <a href="javascript:void(0);" v-b-modal.modalgps>Sistema de Rastreo GPS</a>
                                                        </span>

                                                        <span v-else class="checkbox-aux__descripcion">He leído y acepto
                                                            <a href="javascript:void(0);"  v-b-modal.modal1> las condiciones de la póliza</a>  
                                                        </span>
                                                    </template>
                                                    <template v-else>
                                                        <span v-if="gpsExiste == 'Y'" class="checkbox-aux__descripcion">He leído y acepto
                                                            <a href="javascript:void(0);"  v-b-modal.modal1> las condiciones de la póliza</a>
                                                            y del <a href="javascript:void(0);" v-b-modal.modalgps>Sistema de Rastreo GPS</a>
                                                        </span>

                                                        <span v-else class="checkbox-aux__descripcion">He leído y acepto
                                                            <a href="javascript:void(0);"  v-b-modal.modal1> las condiciones de la póliza</a>   
                                                        </span>
                                                    </template>

                                                </label>
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <b-row  class="text-center justify-content-center">
                                        <b-col cols="12" lg="5"  class="text-center">
                                            <b-row v-bind:class="{ isActivePayment: isisplayNoneLoader }">
                                                <b-col cols="12">
                                                    <div class="spinner-tarjeta">
                                                        <clip-loader class="cliploader" :loading="loading" :color="color" :size="size"></clip-loader>
                                                    </div>
                                                </b-col>
                                                <b-col cols="12">
                                                    <p class="spinner-descripcion">Estamos procesando tu pago</p>
                                                </b-col>                    
                                            </b-row>
                                        </b-col>
                                    
                                        <b-col cols="12" lg="12" class="pt-3 ">
                                            <b-row class="justify-content-center">
                                                
                                                <b-col cols="10" class="text-center">
                                                    
                                                    <button type="submit" @click="continuar" class="btn box-btn__button box-btn--primary" 
                                                        :disabled='this.isDisabledPayment'>
                                                        <span>PAGAR ${{this.monto_pagar}}</span>                                                        
                                                    </button>


                                                </b-col>
                                                <b-col cols="12">
                                                    <span class="text-secundario  text-center " style="font-size:12px">Autorizo el envío de la póliza electrónica <br> y comunicaciones de Interseguro a mi correo.</span>
                                                </b-col>

                                                
                                            </b-row>
                                        </b-col>                                            
                                    </b-row>
                                </div>
                            </b-col>

                        </b-row>

                    </div>
                    
                    
                </b-col>            
            </b-row>
        </b-container>
        <b-container>        
            <div>
                <b-modal id="modal1" title="Bootstrap-Vue" hide-footer hide-header ref="hideModalAutoorizacionPoliza" size="lg">
                    <div class="modal-content  modal-confirmaTusDatos">
                        <b-btn class="mt-3 btn-secondary" @click="hideModalAutoorizacionPoliza()"  style="background: white; border: none;">
                            <img src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b5f46206abb673bc5374fdb_icon-close.svg" width="40" alt="icon close" class="image-9">
                        </b-btn>
                        <div class="modal-head">
                            <div class="row">
                                <h2 class="modal-personal-title col-8 offset-2">
                                    <span class="tag-0">Declaración jurada</span>
                                    <span class="tag-2">del contratante</span>
                                </h2>
                            </div>
                            <div class="modal-divider"></div>
                        </div>
                        <p class="modal-description">
                            Declaro que tengo conocimiento y acepto las Condiciones Generales, Particulares, Especiales y Cláusulas
                            Adicionales relacionadas con la Póliza de Seguros de Interseguro Compañía de Seguros.
                            <br><br>
                            Asimismo, autorizo a que se realicen - de acuerdo a la periodicidad escogida - cargos de forma automática por el concepto de prima de Seguro Vehicular contratado en mi tarjeta de crédito o débito declarada.
                            <br><br>
                            Certifico que las respuestas y declaraciones realizadas en este sitio web son verídicas y que se ajustan
                            a la realidad y de no serlo, cualquier declaración falsa hecha por el Contratante, voluntaria o
                            involuntariamente, invalida esta solicitud y libera de toda responsabilidad y compromiso indemnizatorio
                            a
                            Interseguro Compañía de Seguros, quedando el seguro emitido en virtud de esta solicitud nulo y sin
                            efecto.
                            <br><br>
                            El Contratante otorga su consentimiento para que su Póliza de seguro electrónica, endosos futuros, cartas y/u otra documentación, sean enviados vía correo electrónico desde el dominio @interseguro. Todas aquellos documentos y comunicaciones se entenderán por recibidos en la casilla de correo electrónica declarada por el Contratante, a través de la confirmación del servidor de destino. La póliza contendrá una firma digital y una contraseña de acceso para visualizar el documento, ello garantizará la autenticidad e integridad del documento, de acuerdo con lo estipulado en la Ley N° 27269 - Ley de Firmas y Certificados Digitales. Asimismo, declara conocer las medidas de seguridad que debe adoptar para la recepción de los citados documentos, las ventajas y riesgos asociados a esta modalidad de envío, garantiza haber suministrado un correo electrónico válido en la Solicitud de Seguro, el cual mantendrá activo y con espacio suficiente para recibir la Póliza y se comprometen a informar su nuevo correo electrónico, en caso sea dado de baja o desee modificar la cuenta de correo declarada. 
                        </p>
                        <div class="row">
                        
                        </div>
                        
                    </div>
                </b-modal>
            </div>

            <div>
                <b-modal id="modalgps" title="Bootstrap-Vue" hide-footer hide-header ref="hideModalgps" size="lg">
                    <div class="modal-content  modal-confirmaTusDatos">
                        <b-btn class="mt-3 btn-secondary" @click="hideModalgps()"  style="background: white; border: none;">
                            <img src="https://uploads-ssl.webflow.com/5b29b333e01a7071fadb2f1c/5b5f46206abb673bc5374fdb_icon-close.svg" width="40" alt="icon close" class="image-9">
                        </b-btn>
                        <div class="modal-head">
                            <div class="row">
                                <h2 class="modal-personal-title col-8 offset-2">
                                    <span class="tag-0">CONDICIONES DEL SERVICIO DE RASTREO</span>
                                </h2>
                            </div>
                            <div class="modal-divider"></div>
                        </div>
                        <p class="modal-description">
                           El cliente autoriza expresamente a que PROTEMAX pueda entregar a INTERSEGURO, el historial del recorrido del vehículo, 
                           el estado de la batería del vehículo, el reporte del kilometraje por periodo y acumulado del vehículo, el Reporte 
                           histórico de recorrido, el Reporte gráfico de posiciones, la ubicación en tiempo real, el reporte de alerta de velocidad máxima,
                            batería baja y botón de pánico del vehículo  que tiene instalado el dispositivo GPS, siempre y cuando este lo solicite formalmente,
                             con la finalidad de que sea adjuntado en el Expediente del siniestro reportado. Por su parte PROTEMAX será el único responsable
                              por la entrega de la información solicitada respecto el vehículo de EL CLIENTE a INTERSEGURO.
                        </p>
                        
                        
                    </div>
                </b-modal>

            </div>
        </b-container>
        <div class="capadecarga" v-bind:class="{ 'opacidad': opacidad }">
            <img src="../../static/media/interseguroVehicular_v2/carga.gif" alt="capa de carga para loading">            
        </div>

        <b-modal id="leavePaymentPromocion" class="leaveModal" size="lg"  static centered hide-footer hide-header>
            <b-container>
                <b-row class="justify-content-center">
                    <b-col class="text-center mb-3" cols="12">
                        <img src="../../static/media/modal/leave-pago.png" alt="Abandonar Seguro Vehicular">
                    </b-col>
                </b-row>
                <b-row class="text-center">
                    <b-col cols="12" class="mb-3">
                        <h2><span>PROMOCION ¡Estás a un paso de asegurar tu <br> {{this.$store.state.common.itemElegido.brand}} por ${{parseDecimal(parseFloat(this.$store.state.common.current)) }}!</span></h2>
                    </b-col>
                    <b-col cols="12" class="mb-2">
                        <h3>Por tan solo ${{this.$store.state.common.listaCotizacion.policy.monthly}} mensuales estás protegiendo tu auto <br> hasta por un monto de ${{parseDecimal(parseFloat(this.$store.state.common.current))}}</h3>
                    </b-col>
                </b-row>
                <b-row class="justify-content-center">
                    <b-col class="text-center mb-4" cols="12">
                        <b-button @click="$nuxt.$emit('bv::hide::modal', 'leavePaymentPromocion')">QUIERO TERMINAR MI COMPRA</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </b-modal>

        <b-modal id="leavePayment" class="leaveModal" size="lg"  static centered hide-footer hide-header>
            <b-container>
                <b-row class="justify-content-center">
                    <b-col class="text-center mb-3" cols="12">
                        <img src="../../static/media/modal/leave-pago.png" alt="Abandonar Seguro Vehicular">
                    </b-col>
                </b-row>
                <b-row class="text-center">
                    <b-col cols="12" class="mb-3">
                        <h2><span>¡Estás a un paso de asegurar tu <br> {{this.$store.state.common.itemElegido.brand}} por ${{parseDecimal(parseFloat(this.$store.state.common.current)) }}!</span></h2>
                    </b-col>
                    <b-col cols="12" class="mb-2">
                        <h3>Por tan solo ${{this.$store.state.common.listaCotizacion.policy.monthly}} mensuales estás protegiendo tu auto <br> hasta por un monto de ${{parseDecimal(parseFloat(this.$store.state.common.current))}}</h3>
                    </b-col>
                </b-row>
                <b-row class="justify-content-center">
                    <b-col class="text-center mb-4" cols="12">
                        <b-button @click="$nuxt.$emit('bv::hide::modal', 'leavePayment')">QUIERO TERMINAR MI COMPRA</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </b-modal>
        <b-modal id="leavePaymentAgora" class="modal-agora" size="lg"  static centered hide-footer hide-header>
            <b-container>
                
                <b-row class="text-center">
                    <b-col cols="12" class="mb-3">
                        <h2><strong>¡POR TIEMPO LIMITADO!</strong></h2>
                    </b-col>
                </b-row>
                <b-row class="justify-content-center">
                    <b-col class="text-center mb-3" cols="12">
                        <img width="254" src="../../static/media/interseguroVehicular_v2/agora.png" alt="Abandonar Seguro Vehicular">
                    </b-col>
                </b-row>
                <b-row>                    
                    <b-col cols="12" class="mb-2">
                        <h3><strong>{{this.$store.state.common.objCliente.firstName}}</strong>, <br> Te regalamos un <strong>vale de S/100 en Agora <br></strong> por comprar tu Seguro Vehicular</h3>
                    </b-col>
                </b-row>
                <b-row class="justify-content-center">
                    <b-col class="text-center mb-4" cols="12">
                        <b-button @click="enviarParametroAgora()">IR A PAGAR</b-button>
                    </b-col>
                </b-row>
                <b-row>                    
                    <b-col cols="12" class="mb-2">
                        <p>Agora es el nuevo medio de pago de Intercorp, lo podrás <br> usar para pagar Spotify, Plaza Vea y más.</p>
                    </b-col>
                </b-row>
            </b-container>
        </b-modal>
         
    </section>
</template>

<script>

import { validationMixin } from 'vuelidate'
    
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
        layout: 'InterseguroFlujo',
        data(){
            return {
                valeAgora: false,
                urlLocal:'',
                cobertura_is:{
                    plan:''
                },
                frecuenciaPago:0,
                itemElegido: {
                    year: '',
                    brandId:'',
                    brand:'',
                    modelYear: '',
                    model: '',
                    modelId:'',
                    remarketingId:'',
                    assignedPrice:null,
                    businessId:1,
                    discountType: '',
                },
                objPaymentExecute:{},
                documento_steps2 : '',
                monto_pagar_steps3 : '',
                planSeleccionado: 0,
                pruebabandera:true,
                contadorNoTeVayas: 0,
                objError:{
                    "page":'',
                    "flow":'',
                    "path":'',
                    "messageError": '',
                    "documentNumber":'',
                    "plateNumber": '',
                    "detail":{
                    "objServicio":{
                        "nombre":'',
                        "tipo": '',
                        "ruta": '',
                        "msj": '',
                        "solucion": ''
                    },
                    "objCliente":{
                        "documento": '',
                        "nombre":'',
                        "celular": '',
                        "correo": ''
                    },
                    "objAuto":{
                        "placa": '',
                        "marca": '',
                        "modelo": '',
                        "anio": '',
                        "valorComercial": ''
                    }
                    }
                },
                endosoSeleccionado: {},
                discountType: '',
                opacidad:false,            
                isEnableURL: true,
                registrogss:"",
                urlCompartir: '',
                urlCompartirWhatsApp: "",
                capa_planes: true,
                tabIndex: 0,
                campaniaTV: '1',
                gpsExiste:"",
                numberTest:'',
                // es: es,
                state: state,
                fechaVigencia: '',
                vModelExample: null,
                loading:true,
                loadingPulse: true,
                color: '#00ADEE',
                sizePulse: '45px',
                zeroKm:  'N',                                
                margin: '2px',
                radius: '2px',
                payment: 1,
                //pendiente el volver atras
                listCotizacion:{
                    'policy':{
                        'discount':false
                    },
                    'financialInstitution':''

                },
                payment_datalayer:'',
                isDisableButton: false,
                documentoLocal:'',
                policy_id:'',
                objPagoProcesado:{
                    "id":null,
                    "monto":null
                },
                monto_pagar: null,
                /**************************************************************
                 * ********************INGRESA TU TARJETA *********************
                 * ***********************************************************/
                cardCompleto:true,
                size: '45px',
                objClient:{},
                nombreCliente:'',
                objCardNumber:{
                    number: ''
                },
                
                tamañoCCV:0,
                cvvcci:'CCV',
                checkDocs: false,
                baseUrlImage: '',
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
                objVehicleSelect:{},
                numberValidation:{
                    isValid:''
                },
                objCulqi:{},
                /**************************************************************
                 * *********************** REMARKETING ************************
                 * ***********************************************************/
                businessId : "",
                objPlantilla : {
                    "1":"00-dias.html",
                    "2":"03-dias.html",
                    "3":"07-dias.html",
                    "4":"15-dias.html"
                },
                objUtm: {
                    "1":"utm_campaign=remarketingCN_1",
                    "2":"utm_campaign=remarketingCN_2",
                    "3":"utm_campaign=remarketingCN_3",
                    "4":"utm_campaign=remarketingCN_4"
                }
            }
        },
        methods: {
            enviarParametroAgora(){
                this.valeAgora = true,
                localStorage.setItem('activoAgora', true)
                setTimeout(() => {
                    this.remarketingv2()
                }, 0);
                $nuxt.$emit('bv::hide::modal', 'leavePaymentAgora')
            },
            cotizador_datalayer(evento,step_valor){
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: evento,
                    step: step_valor,
                    product: this.cobertura_is,
                });
            },
            /* *********************************************************************************** */
            PaginaVista(e){
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'pagina_vista',
                    'page-url': '/vehicular/cotiza/como-pagar', 
                    'page-title': 'Como Pagar',
                    'dni-encontrado': this.$store.state.common.clientStateGA, // true of false
                    'ecommerce': {
                        'checkout': {
                            'actionField': {'step': 4}, // esto marca el primer paso en el embudo
                        }
                    }
                });
            },
            PaginaVistaNuevoProducto() {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "pagina_vista",
                    "page-url": "/vehicular-app/cotiza/como-pagar/",
                    "page-title": "como pagar",
                });
            },
            /* *********************************************************************************** */
            validarROOT(){
                if(this.$store.state.common.planSeleccionado == 6 || this.$store.state.common.planSeleccionado == 4){
                    if(!this.$store.state.common.entidadFinanciera.id > 0){
                        let inputDate = Date.parse(this.fechaVigencia)
                        inputDate = new Date(this.fechaVigencia)
                        
                        let fecha = new Date()
                        let dia = fecha.getDate()
                        let mes = fecha.getMonth()+1
                        let año = fecha.getFullYear()
                        let fechaActual = dia+'/'+mes+'/'+año
                        
                        let todaysDate = Date.parse(fechaActual)
                        todaysDate = new Date(fechaActual)

                        if(inputDate.getTime() ===  todaysDate.getTime()) {
                            if (this.$store.state.common.frecuenciaPago == 1) {
                                this.$store.commit('common/setEmisionROOT', true)
                            } else {
                                this.$store.commit('common/setEmisionROOT', false)
                            }
                        }else{
                            this.$store.commit('common/setEmisionROOT', false)
                        }
                    }else{
                        this.$store.commit('common/setEmisionROOT', false)
                    }
                }else{
                    this.$store.commit('common/setEmisionROOT', false)
                }
            },
            onCopy: function (e) {      
                this.isEnableURL = false;
                var self = this;
                setTimeout(function() {
                    self.isEnableURL = true;
                }, 1800);    
            },
            copyURL(event) {     
                e.preventDefault();
                this.isEnableURL = true;
                var copyText  = document.getElementById("copyText");
                copyText.select();
                document.execCommand("copy");
                var self = this;
                setTimeout(function() {
                    self.isEnableURL = true;
                }, 1800);
                },
            mostrarTooltip(){
                if(process.client){
                    document.getElementById("msg-valor").style.display = "block"
                }
                
            },
            ocultarTooltip(){
                if(process.client){
                    document.getElementById("msg-valor").style.display = "none"
                }
            },
            continuar(evt) {                
                this.opacidad =true
                this.isDisabledPayment = false
                evt.preventDefault();

                this.isDisabledPayment = true
                this.card.expiration_year = '20'+this.expiration_year
                this.card.email = this.$store.state.common.email
                this.$store.dispatch('payment/getTokenCulqi', this.card)
                .then((res) =>{
                    if (res.object === 'error') {
                        let errorDetectado = {
                            url : 'GET TOKEN CULQI',
                            page : 4,
                            message : 'ERROR CULQI',
                            objEnviado : this.card
                        }
                        this.$store.dispatch('common/eventoErrores', errorDetectado)
                        this.$swal({
                            title: 'Oops...',
                            text: res.data.user_message,
                            type: 'error',
                            showCancelButton: false,
                            confirmButtonColor: '#2177CC',
                            confirmButtonText: 'OK'
                        })
                        this.opacidad =false
                    }else{
                        this.objCulqi = res
                        this.objPaymentExecute = {
                            tokenId: this.objCulqi.id,
                            planId: this.$store.state.common.planSeleccionado,
                            plateNumber: this.$store.state.common.plateNumber,
                            documentNumber: this.$store.state.common.documentoLocal,
                            remarketingId: this.$store.state.common.codeRmkt,
                            referredDocumentNumber:null,
                            discountType: this.discountType,
                            businessId: this.$store.state.common.businessId,
                            details: {
                                policy: {
                                    riskName: this.listCotizacion.policy.riskName,
                                    risk: this.listCotizacion.policy.risk,
                                    calculated: this.listCotizacion.policy.calculated,
                                    twoYears: this.listCotizacion.policy.twoYears,
                                    annual: this.listCotizacion.policy.annual,
                                    quarterly: this.listCotizacion.policy.quarterly,
                                    monthly: this.listCotizacion.policy.monthly,
                                    twoYearsDiscount: this.listCotizacion.policy.twoYearsDiscount,
                                    annualDiscount: this.listCotizacion.policy.annualDiscount,
                                    quarterlyDiscount: this.listCotizacion.policy.quarterlyDiscount,
                                    monthlyDiscount: this.listCotizacion.policy.monthlyDiscount,
                                    discount: false,
                                    startDate: this.$store.state.common.fechaVigencia
                                },
                                vehicle: {
                                    current: this.listCotizacion.vehicle.current,
                                    maximum: this.listCotizacion.vehicle.maximum,
                                    minimum: this.listCotizacion.vehicle.minimum,
                                    gps: this.listCotizacion.vehicle.gps
                                },
                                zeroKm: "N",
                                paymentMethodId: this.payment,
                                financialInstitution: this.$store.state.common.entidadFinanciera.id == 0 || this.$store.state.common.entidadFinanciera.id == null ? null : this.$store.state.common.entidadFinanciera.id
                            },
                            card: {
                                brand: this.objCulqi.iin.card_brand,
                                category: this.objCulqi.iin.card_category,
                                number: this.objCulqi.card_number,
                                type: this.objCulqi.iin.card_type
                            }
                        }
                        this.$store.dispatch('payment/paymentExecute', this.objPaymentExecute)
                        .then((res) =>{
                            if (res.code == 0) {
                                this.opacidad =false
                                // this.validarROOT()
                                this.$store.commit('common/setPolicy_id',res.body.policyId)
                                this.$nuxt.$router.push({path: '/cotiza/pago-procesado'})
                            }else if(res.code == 100){
                                let errorDetectado = {
                                    url : 'EXECUTE',
                                    page : 4,
                                    message : 'CODE 100',
                                    objEnviado : this.objPaymentExecute
                                }
                                this.$store.dispatch('common/eventoErrores', errorDetectado)
                                this.opacidad =false
                                this.$swal({
                                    title: 'Oops...',
                                    text: res.body.message,
                                    type: 'error',
                                    showCancelButton: false,
                                    confirmButtonColor: '#2177CC',
                                    confirmButtonText: 'OK'
                                })
                            }else{
                                this.opacidad =false
                                this.$swal({
                                    title: 'Oops...',
                                    text: res.message,
                                    type: 'error',
                                    showCancelButton: false,
                                    confirmButtonColor: '#2177CC',
                                    confirmButtonText: 'OK'
                                })
                            }
                            
                        })
                    }
                    
                }).catch((res)=>{
                    this.opacidad =false
                    let status = res.response.status
                    
                    let errorDetectado = {
                        url : 'https://secure.culqi.com/v2/tokens',
                        page : 4,
                        message : 'ERROR CULQI'+ res.message,
                        objEnviado : this.card
                    }

                    switch (status) {
                        case 500:
                            this.$store.dispatch('common/eventoErrores', errorDetectado)
                            break;
                        default:
                            this.$store.dispatch('common/eventoErrores', errorDetectado)
                            break;
                    }
                    
                        this.$swal({
                            title: 'Oops...',
                            text: res.message,
                            type: 'error',
                            showCancelButton: false,
                            confirmButtonColor: '#2177CC',
                            confirmButtonText: 'OK'
                        })
                })
            },
            
            volver (evt) {
                evt.preventDefault();
                this.$nuxt.$router.push("/cotiza/ingresa-tu-documento");              
            },
            
            comoPagarDatalayer(){
                if(this.frecuenciaPago == 1){
                    this.frecuenciaPago_datalayer ='mensual'
                }else if(this.frecuenciaPago == 2){
                    this.frecuenciaPago_datalayer ='trimestral'
                }else if(this.frecuenciaPago == 3){
                    this.frecuenciaPago_datalayer = 'annual'
                }else if(this.frecuenciaPago == 4){
                    this.frecuenciaPago_datalayer = 'biannual '
                }
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'como_pagar',
                    'cuota': this.frecuenciaPago_datalayer, // mensual, trimestral, annual (string)
                    'ecommerce': {
                        'checkout_option': { // nota el cambio aqui en codigo "checkout_option"
                            'actionField': {
                                'option':this.frecuenciaPago_datalayer
                            }, // 4to paso en el embudo. En el option enviar tipo de cuota.
                        }
                    }
                });
            },            

            

            /*******************************************************************************************
             *  ****************************INGRESA TU TARJETA*****************************************
            *******************************************************************************************/
            focusCVV(){      
                if(process.client){  
                    document.getElementById("focusCVV").style.display = "block"
                }
            },
            blurCVV(){        
                if(process.client){
                    document.getElementById("focusCVV").style.display = "none"
                }
            },
            focusMES(){        
                // document.getElementById("focusMES").style.display = "flex"
            },
            blurMES(){ 
                if(process.client){       
                    document.getElementById("focusMES").style.display = "none"
                }
            }, 
            focusTarjeta(){  
                if(process.client){      
                    document.getElementById("focusTarjeta").style.display = "flex"
                }
            },
            blurTarjeta(){    
                if(process.client){    
                    document.getElementById("focusTarjeta").style.display = "none"
                }
            },           

            hideModalAutoorizacionPoliza(){
                this.$refs.hideModalAutoorizacionPoliza.hide()
            },
            hideModalgps(){
                this.$refs.hideModalgps.hide()
            },
            

            isTrueTerminos(){
                if(process.client){
                    if(this.cardValitor){                        
                        let mes = document.querySelector("#cardmes").value.length
                        let año = document.querySelector("#cardaño").value.length
                        let ccv = document.querySelector("#cardccv").value.length
                        if(mes == 2 && año == 2 &&  ccv > 2 && this.checkDocs == true){                
                            this.isDisabledPayment = false
                        }else{
                            this.isDisabledPayment = true
                        }
                    }
                }
            },

            addingBlankSpaces (ev) {
                let valid = require('card-validator')
                cardNumber = ev.target.value
                let numberValidation = valid.number(cardNumber.replace(/ /g, ''))
                this.numberValidation = valid.number(cardNumber.replace(/ /g, ''))
                //this.tipoTarjetaDatalayer = numberValidation.card.type
                if (numberValidation.card !== null) {
                    
                    this.numberTest = numberValidation.card.code.size
                    this.cvvcci = numberValidation.card.code.name
                    let cardType = numberValidation.card.type !== 'american-express' ? numberValidation.card.type : 'amex'
                    this.creditCardImage = require('../../static/media/img/flujo/metodo-pago/' + cardType + '.png')
                    this.creditCardImageCvv = require('../../static/media/img/flujo/como-pagar/' + cardType+'cvv' + '.png')
                } else {
                    this.creditCardImage = ''
                    this.creditCardImageCvv = ''
                }
                if (ev.keyCode !== 8) {
                    this.objCardNumber.number = this.objCardNumber.number.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')               
                }
                this.card.card_number = cardNumber.split(" ").join("");
                if(numberValidation.isValid){
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
            remarketingv2(){
                if (this.$store.state.common.businessId == 2){
                    this.objPlantilla = {
                    "1":"00-ibk-dias.html",
                    "2":"03-ibk-dias.html",
                    "3":"07-ibk-dias.html",
                    "4":"15-ibk-dias.html"
                    }
                    this.objUtm = {
                    "1": "utm_campaign=IBK_remarketingCN_1",
                    "2": "utm_campaign=IBK_remarketingCN_2",
                    "3": "utm_campaign=IBK_remarketingCN_3",
                    "4": "utm_campaign=IBK_remarketingCN_4"
                    }
                }else if(this.$store.state.common.nuevoProducto == true){
                    this.objPlantilla = {}
                    this.objUtm = {}
                }
                this.abjVehicleSelect = JSON.parse(localStorage.getItem("abjVehicleSelect"))
                this.objVehicle = JSON.parse(localStorage.getItem("objVeh"))
                this.objRemarketing = {
                    "codigoRemarketing": this.$store.state.common.codigoRemarketingGenerado == null ? "" : this.$store.state.common.codigoRemarketingGenerado,
                    "producto": this.$store.state.common.businessId,
                    "identificador": this.$store.state.common.plateNumber,
                    "detalle": {
                    "correo": this.$store.state.common.email.trim().replace(/ /g,''),
                    "codigoVenta": this.$store.state.common.codeRmkt,
                    "pantalla": 3,
                    "enviarCorreo":0,
                    "datosCorreo":{
                        "url": process.env.URL+ (this.$store.state.common.businessId == 1 ? "vehicular" : "vehicular/interbank"),
                        "plantilla": this.objPlantilla,
                        "utm": this.objUtm
                    },
                    "datosProducto": {
                        valeAgora: this.valeAgora,
                        marca : this.$store.state.common.itemElegido.brand,
                        modelo : this.$store.state.common.itemElegido.model,
                        planSeleccionado : this.$store.state.common.planSeleccionado,
                        valorComercial : this.$store.state.common.current,
                        pagoMensual : this.$store.state.common.listaCotizacion.policy.monthly,
                        // desde : localStorage.getItem("monthly") == null
                        //     ? this.objectVehicle.minimumPolicyAmount
                        //     : null,
                        // montoMensualBasico:  this.listaBasica.policy.monthly,
                        // montoMensualMedio: this.listaMedia.policy.monthly,
                        // montoMensualFull: this.listaFull.policy.monthly,
                        /*********************************************************/
                        businessId: this.$store.state.common.businessId,
                        idEndosoSeleccionado: this.endosoSeleccionado.id,
                        endosoSeleccionado: this.endosoSeleccionado.name,
                        placa: this.$store.state.common.plateNumber,              
                        anio: this.$store.state.common.itemElegido.modelYear,
                        gps: this.$store.state.common.listaCotizacion.vehicle.gps,
                        riesgo: this.$store.state.common.listaCotizacion.policy.risk,
                        fechaInicio: this.$store.state.common.fechaVigencia,
                        
                        /******************************************************** */   
                        itemElegido: this.$store.state.common.itemElegido,
                        listCotizacion: this.$store.state.common.listaCotizacion,
                        nuevoProducto: this.$store.state.common.nuevoProducto                
                        /******************************************************** */      
                        /******************************************************** */
                        // idMarca: this.objectVehicle.brandId,
                        // idModelo: this.objectVehicle.modelId,
                        // idUso: 1,
                        // uso: "particular",    
                        // valorCalculado: this.listCotizacion.policy.monthlyCalculated,
                        // pagoTrimestral: this.listCotizacion.policy.quarterly,
                        // pagoAnual: this.listCotizacion.policy.annual
                    },
                    "datosTitular": {
                        "numeroDocumento": this.$store.state.common.documentoLocal,
                        "nombre": this.$store.state.common.objCliente.firstName,
                        "apellidoPaterno": this.$store.state.common.objCliente.firstLastName,
                        "apellidoMaterno": this.$store.state.common.objCliente.secondLastName,
                        "telefono": this.$store.state.common.objCliente.phoneNumber,
                        "originDocumentNumber": localStorage.getItem("originDocumentNumber"),
                        "origenDatos": localStorage.getItem("origenDatos"),
                    },
                    "remitente": {
                        "correoRemitente": "segurovehicular@interseguro.com.pe",
                        "correoRemitenteDisplay": "Interseguro Vehicular"
                    },
                    "datosPago": {
                        "idFrecuencia": this.payment,
                        "fechaInicioSeguro": ""
                    }
                }
            }
            this.$store.dispatch('common/sendRemarketing',this.objRemarketing).then((res) => {
              if (res) {
                this.$store.commit('common/setCodigoRemarketingGenerado', res.data.codigoRemarketing)
              }        
            })
          },
          mouseLeave(e) {
              if (this.$store.state.common.leaveMessage == 0) {
                  if (e.clientX < 0 || e.clientY < 0) {
                        this.$store.commit('common/setLeaveMessage',1)
                        // if (this.urlLocal = "/promocion50") {
                        //     // this.$nuxt.$emit('bv::show::modal','leavePaymentPromocion')
                        //     this.$nuxt.$emit('bv::show::modal','leavePayment')
                        // }else{
                        //     this.$nuxt.$emit('bv::show::modal','leavePayment')
                        // }
                        if (this.$store.state.common.planSeleccionado == "3" || this.$store.state.common.planSeleccionado == "10") {
                            this.$nuxt.$emit('bv::show::modal','leavePaymentAgora')
                        }else{
                            this.$nuxt.$emit('bv::show::modal','leavePayment')
                        }
                  }
              }
          },
          parseDecimal(number) {
              return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
        },
        computed:{
            appDiscount: function(){
                let appDiscount = this.$store.state.common.appDiscount
                return appDiscount
            },
            isEnable: function(){
                return this.cardCompleto;                
            },
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
        mounted: function () {
            if(localStorage.getItem('activoAgora')){
                this.valeAgora = true
            }
            this.urlLocal = localStorage.getItem("urlLocal")
            this.cobertura_is = this.$store.state.common.objectDigodat
            
            this.cotizador_datalayer("checkout",3)
            let objJWT = JSON.parse(localStorage.getItem("jwt"))
            if (objJWT == null || objJWT == undefined) {
                this.$nuxt.$router.push("/")
            }else{
                let objJWT = JSON.parse(localStorage.getItem("jwt"))
                this.itemElegido.assignedPrice = this.$store.state.common.current
                this.itemElegido.year = this.$store.state.common.itemElegido.year
                this.$store.dispatch('common/getCotizacion', this.itemElegido).then((res) => {
                    if (res.data.code == 0) {
                        if (this.$store.state.common.planSeleccionado == 4) {
                          this.$store.commit('common/setListaCotizacion', res.data.body.basic)
                        }else if(this.$store.state.common.planSeleccionado == 6){
                          this.$store.commit('common/setListaCotizacion', res.data.body.medium)
                        }else if (this.$store.state.common.planSeleccionado == 3 || this.$store.state.common.planSeleccionado == 10) {
                          this.$store.commit('common/setListaCotizacion', res.data.body.allRisk)
                        }else{
                          this.$store.commit('common/setListaCotizacion', res.data.body.allRisk)
                        }
                        this.listCotizacion = this.$store.state.common.listaCotizacion

                        this.planSeleccionado = objJWT.common.planSeleccionado
                        // this.vehicleState = objJWT.common.vehicleState                
                        
                        this.payment = objJWT.common.frecuenciaPago
                        this.businessId = this.$store.state.common.businessId
                        if (this.payment > 0 ) {
                            if(this.payment == 1){
                                this.monto_pagar = this.listCotizacion.policy.monthlyDiscount > 0 ? this.listCotizacion.policy.monthlyDiscount : this.listCotizacion.policy.monthly                                
                            }else if(this.payment == 2){
                                this.monto_pagar =  this.listCotizacion.policy.quarterlyDiscount > 0 ? this.listCotizacion.policy.quarterlyDiscount : this.listCotizacion.policy.quarterly                             
                            }else if(this.payment == 3){
                                this.monto_pagar = this.listCotizacion.policy.annualDiscount > 0 ? this.listCotizacion.policy.annualDiscount : this.listCotizacion.policy.annual   
                            }else{
                                this.isDisableButton = true
                            } 
                        }

                        if(this.$store.state.common.cuentasueldo == "Y"  ){
                            this.discountType = "cta-sueldo"
                        }else if (this.$store.state.common.tarjetaoh == "Y" ) {
                            this.discountType = "tarjeta-oh"
                        }else{
                            this.discountType = ""
                        }
                        this.$store.state.common.listaCotizacion.paymentMethodId = this.$store.state.common.frecuenciaPago
                    }
                })
                
                
            }

            /* DETECTAMOS SI ENDOSO DE SESION ESTA EN EL OBJ LOCAL */

            if(objJWT.common.entidadFinanciera !== null){      
                let entidadFinanciera = objJWT.common.entidadFinanciera
                this.endosoSeleccionado = objJWT.common.entidadFinanciera
                if (entidadFinanciera.id > 0) {        
                this.endosoSeleccionado = objJWT.common.entidadFinanciera
                }
            }else{
                this.$store.commit('common/setEntidadFinanciera', this.endosoSeleccionado)
            }
            /* FIN DE  ENDOSO DE SESION */

            if(this.$store.state.common.nuevoProducto){
                this.PaginaVistaNuevoProducto();
            }else{
                this.PaginaVista();
            }
            this.fechaVigencia = this.$store.state.common.fechaVigencia
    
            this.remarketingv2()
            // this.validarROOT()
            document.addEventListener('mouseleave', this.mouseLeave, { passive: true})
        },
        destroyed() {
            if (process.browser) {
                document.removeEventListener('mouseleave', this.mouseLeave, { passive: true})
            }
        }
    }
</script>

<style lang="scss">
        .liston-agora{
            display: none;
            position: absolute;
            left: 0;
            width: 282px;
            padding: 12px 4px;
            background: #fff;
            top: 16px;
            border-radius: 4px;
            padding-left: 12px;
            .titulo{
                font-size: 18px;
                color: #0855c4;
                font-family: 'Omnes Medium';
                margin-right: 8px;
            }
            .subtitulo{
                color: #454A6C;
                font-size: 18px;
                font-family: 'Omnes Medium';
            }
            .para-ti{
                background: #EA0F90;
                color: #ffffff;
                border-radius: 4px;
                padding: 4px;
            }
        }
a.steps__item.paso3:after{
  content: "3" !important;
  background: #0754c4 !important;
  color: white !important;
  text-align: center;
  font-size: 14px;
}
a.steps__item.paso2:after{
  content: "2" !important;
  background: #0754c4 !important;
  color: white !important;
  text-align: center;
  font-size: 14px;
}
a.steps__item.paso1:after{
  content: "1" !important;
  background: #0754c4 !important;
  color: white !important;
  text-align: center;
  font-size: 14px;
}
.card-body{
    padding-bottom: 0;
}
.roboTotal{
  background: #b1b1b1;
}
.semiFull{
  background: #e6ac38;
}
.full{
  background: #27362d;
}
.steps-box{
    padding-top: 100px;
    background: #f7f4fc;
    .steps-plan{
        background: white;
    }
}
.pruebabandera{
  transform: scale(1.2);
}
.banderaSliderMobile{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to bottom, #fed650 0%, #febc2f 100%);
  height: 90px;
  z-index: 999;
  img{
    position: absolute;
    //left: 15px;
    left: 1px;
    //height: 105px;
    height: 109px;
    //top: -10px;
    top: -20px;
    transition: transform 1s;
  }
  p{
    font-family: 'Omnes Regular';
    margin: 0;
    color: #0855c4;
    padding-left: 70px;
        position: relative;
    left: 38px;
    top: 16px;
  }
}
.banderaSlider{
  position: fixed;
    right: 0%;
    background: linear-gradient(to bottom, #fed650 0%, #febc2f 100%);
    width: 292px;
    height: 100px;
    background-size: contain;
    border-radius: 1rem 5px 1rem 5px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-left: 100px;
    top: 72px;
    z-index: 999;
  img{
    position: absolute;
    //left: 15px;
    left: -33px;
    //height: 105px;
    height: 132px;
    //top: -10px;
    top: -21px;
    transition: transform 1s;
  }
  p{
    font-family: 'Omnes Regular';
    margin: 0;
    color: #0855c4;
  }
}
.btn:hover {
    color: #fff;
    text-decoration: none;
}
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
    .capadecarga{
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        z-index: 999;
        background: #cae1f9f0;
        display: none;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        opacity: 0;
        transition: visibility 1s, opacity 1s linear;        
        img{
            max-width: 500px;
            width: 100%;
        }
    }
    .opacidad{        
        display: flex;
        visibility: visible;
        opacity: 1;
    }
.copiar-enlace{
    display: inline-block;
    padding: 4px 16px;
    border: 2px solid #0055c8;
    border-radius: 14px;
    color: #0055c8;
    width: 340px;
    overflow: hidden;
    height: 30px;
}
 .dnone{
    display: none;
    }

    .btn-copy{
        position: relative;
    }
    .msg-copy{
        position: absolute;
        right: -19px;
        top: -24px;
        font-size: 12px;
        width: 89px;
        background: #0055C8;
        border-radius: 5px;
        color: white;
    }
    .pago-procesado {
        padding-top: 140px;
        .content{
            background-color: rgba(7, 84, 196, 0.05);
        }  
    }
    .checkbox-aux label input[type="checkbox"]:checked + .checkbox-aux__span > .checkbox-aux__span--icon,
    .radio label input[type="radio"]:checked + .checkbox-aux__span > .checkbox-aux__span--icon{
    content: url('../../static/media/img/check_white.png');
        position: absolute;
        width: 15px;
        height: 15px;
        left: 1px;
        top: 1px;
        z-index: 999;
    }
    .card{
        border: none;
        background: #fff;
        width: 100%;
    }
    .planes-tabs{
        border: none;
        a{
            font-family: omnes !important;
        }
        .tab-pane:focus{
            outline: 0px;
        }
        ul{
            justify-content: center;
        }
        .tab-pane{
            padding-left: 0;
        }
        .card-header{
            padding-top: 0;
            background: #fff;
            font-size: 16px;
            border: none;
            width: 100%;
            justify-content: center;
            li.nav-item {
                width: 50%;
            }
        }
        .nav-pills .nav-link, .nav-pills .show > .nav-link {
            color: #919191;
            margin-right: 10px;
            font-size: 17px;
            text-transform: capitalize;
            border-radius: 4px;
            background-color: #f4f4f4;
            text-align: center;
            padding-top: 4px;
            padding-bottom: 4px;

        }
        .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
            border-radius: 4px;
            box-shadow: 0 3px 6px 0 rgba(8, 85, 196, 0.44);
            background-color: #0855c4;
            color: white;
        }
    }
    .cliploader {
        right: 0;   
    }    
    .steps-allRisk-box {
        padding-top: 0;
        margin-top: 70px;
    }
    .montoTachado{
        color: #A7A7A7; text-decoration:line-through; font-weight: 500;
        font-size: 13px;
    }
    #msg-valor {
        display: none;
        position: absolute;
        background: #002e75;
        color: white;
        bottom: 25px;
        left: -118px;
        width: 240px;
        padding: 8px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 500;
        z-index: 9;
    }

    .info_detalle {
        position: relative;
        font-size: 15px;
        width: 18px;
        background: transparent;
        height: 18px;
        display: inline-block;
        border-radius: 50%;
        text-align: center;
        line-height: 17px;
        color: #00ADEE;
        font-weight: 600;
        border: 1px solid #00ADEE;
    }
    .contenedor-custom{
        padding: 0;
    }
    .btn-movil{
        position: sticky;
        bottom: 5px;
        z-index: 100;
        width: 100%;
        height: 50px;
        display: flex; 
        background: transparent;
        &__volver{
            
            width: 80px;
            border-radius: 5px 0 0 5px;
            border: none;
            i{
                color: #333;
            }
        }
        &__pagar{
            
            position: relative;
            width: 100%;
            padding: 0;
            margin: 0;
            border-radius: 0 5px 5px 0;
            opacity: 1 !important;
            &:disabled{
                background: #777777;
            }
        }
    }
    .boxtitulo{
        width: 100%;
        .texto-candado{
            display: flex;
            align-items: center;
        }
        .img-candado{
            width: 14px;
            margin-left: 8px;
        }
        &__dto5{
            position: absolute;
            top: 10px;
            right: 4px;
            z-index: 9;
        }
        &__principal{
            color: #0855c4;
            font-size: 16px;
            margin: 0;
            line-height: 1;
            font-weight: bold;
            line-height: 24px;
        }
        &__secundario{
            color: #616161;
            font-size: 14px;
            line-height: 15px;
            display: inline-block;
            margin: 0;
            padding-top: 8px;
        }
    }
    .metodo-pago{
        border-radius: 20px;
        margin: 0 16px;
        margin-bottom: 24px;
        
        .imgs{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .msg-alterno{
            font-size: 13px;
            line-height: 16px;            
            font-weight: 500;
            color: #0855c4;
        }
        .cliploader{
            background: transparent;
        }
        .box-btn__button{
            height: 50px;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .pago_seguro{
                color: #fff;
                font-size: 11px;
                text-transform: initial;
            }
        }
        .box-btn__button.enlace-back{
            text-transform: capitalize;
            color: #616161;
            position: relative;
            text-align: left;
            padding-left: 32px;
            font-weight: 500;
            img{
                position: absolute;
                left: 0;
                top: 12px;
            }
        }
        .spinner-tarjeta{
            position: relative;
            height: 50px;
        }
        .spinner-descripcion{
            font-size: 11px;
            text-align: center;
            margin-bottom: 0;
        }
        .iptGral__input{
            text-align: center;
        }
        .panel-custom{
            // padding: 18px;
            // margin: 0 -15px;
            .text-secundario{
                font-size: 14px;
                color: #3b3131;
                width: 100%;
                display: inline-block;
            }
            .text-secundario__movil{
                color: #3b3131;
            }
        }
        &__comoPagar{
            padding: 0px 16px;
        }  
        &__ingresatarjeta{
            padding: 24px 16px 12px;
            border-radius: 0 0 16px 16px;
            background: #f7f4fc;
            .box-ingresaTarjeta{
                background: white;
                padding: 18px 15px 0 15px;
            }
            &:before{
                content: "";
                position: absolute;
                left: 0;
                background: #f7f4fc;
                width: 2px;
                height: 90%;
                top: 5%;
            }           
            .boxtitulo{
                &__secundario{
                    color: #0BD360;
                }
            }
            .checkbox-aux__span {
                width: 18px;
                height: 18px;
            }  
            .checkbox-aux__span--icon{
                font-size: 14px;
                position: absolute;
            }     
            .checkbox-aux__descripcion{
                margin-left: -12px;
                width: 86%;
                a{
                    color: #0855C4;
                }
            }
        }
    }
    .fechaVigencia{
        display: block;
        position: relative;
        flex-direction: column;
        .text-inicio{
            padding-right: 15px;
            color: #0855c4;
            font-weight: bold;
        }
        img{
            position: absolute;
            left: 20px;
            width: 24px;
            z-index: 9;
            bottom: 22px;
        }
        #fechaCustom{
            color: #0855c4;
            font-size: 16px;
            padding: 5px;
            border: 1px solid #0855c4;
            margin-bottom: 15px;
            font-weight: 500;
            box-shadow: none;
            position: relative;
            z-index: 9;
            background: transparent;
            width: 80%;
            padding-left: 40px;
            border-radius: 4px;
        }

        .vdp-datepicker__calendar {
            background: #fff;
            left: 0px;
            border-radius: 10px;
            color: #6c757d;
            border: 1px solid #dde1e2;
        }
        .vdp-datepicker__calendar .cell.selected {
            background: #0055c8;
            color: white;
        }
        .vdp-datepicker__calendar .cell.selected:hover {
            background: #0055c8;
            color: white;
        }

    }
    #filter{
        label{
            text-transform: initial;
        }
    }
    #monthly-radio:checked ~ #filter .monthly .igv_aux1, #quarterly-radio:checked ~ #filter .quarterly .igv_aux2, #annual-radio:checked ~ #filter .annual .igv_aux3, #biannual-radio:checked ~ #filter .biannual .igv_aux4{
        display: block !important;
        font-weight: 500;
    }
    .igv_aux{
        display: none;
        
    }
    
    #inicioVigencia{
        height: 45px;
        width: 200px;
        text-align: center;
        border: 2px solid #9e9e9e57;
        border-radius: 5px;
        color: #757575;
    }
    #inicioVigencia:focus{
        border: 2px solid #9e9e9e57;
        box-shadow: none;
    }
    .texto-inferior{
        font-size: 18px;
        font-weight: 500;
    }
    @media (min-width: 768px) {
        .metodo-pago{            
            &__comoPagar{
                // padding: 4px 15px;
                padding: 22px 28px;
            }  
            &__ingresatarjeta{
                // padding: 4px 15px;
                padding: 22px 28px;
            }
        }
        .btn-movil{
            display: none;
        }
        .fechaVigencia{
            display: flex;
            .text-inicio{
                padding-right: 15px;
            }
        }
    }

    /****************************************************************
    ************************INGRESA TU TARJETA***********************
    ****************************************************************/
    #focusCVV{
    position: absolute;
    right: 15px;
    display: none;
    border-radius: 5px;
    overflow: hidden;
    width: 170px;
    height: 115px;
    bottom: 105px;
    // background: #005EA1;
    z-index: 99;
    img{
        width: 100%;
    }
}
#focusMES{
    position: absolute;
    left: 15px;
    display: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #005EA1;
    border-radius: 5px;
    overflow: hidden;
    width: 170px;
    height: 85px;
    bottom: 110px;
    padding: 5px;
    color: white;
    z-index: 99;
    img{
        width: 100%;
    }
}
#focusTarjeta{
    position: absolute;
    left: 15px;
    display: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #005EA1;
    border-radius: 5px;
    overflow: hidden;
    width: 249px;
    height: 70px;
    bottom: 180px;
    padding: 5px;
    color: white;
    z-index: 99;
    font-size: 13px;
    img{
        width: 100%;
    }
}

#button-download a{
    color: #0BD360;
}
.modal-confirmaTusDatos{
    border: 0 !important;
    padding: 8px 24px;
    .btn-secondary{
        background: white;
        border: none;
        position: relative;
        height: 26px;
    }
    img{
        position: absolute;
        right: 0;
        top: -10px;
    }
    .modal-description{
        text-align: justify;
    }
    .btn-secondary:focus,  .btn-secondary:not(:disabled):not(.disabled).active:focus {
        box-shadow: none !important;
    }
    .btn:focus {
        box-shadow: none !important;
    }
}
    .error-gral{
        background: red;
        width: 100%;
        text-align: center;
        padding-top: 15px;
        height: 40px;
        display: none;
    }
    .error-card{
        background: red;
        width: 100%;
        text-align: center;
        padding-top: 15px;
        height: 40px;
        display: none;
    }
    .card-interseguro, #cardnumber, #cardmes, #cardaño,#cardccv{
        background: #fff !important;
        border-radius: 4px;
    }
    #cardmes{
        border-radius: 4px 0 0 4px;
        text-align: right;
        padding-right: 10px;

    }
    #cardaño{
        border-radius:  0 4px 4px 0;
        padding-left: 10px;
    }
    .box-checkbox{
        display: flex;
        align-items: center;
    }
    .ipt-cartNumber{
        padding-left: 34px;
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
        
    }
    .isActivePayment{
        display: none;
    }
    input.form-control.text-uppercase.iptGral__input:focus {
        box-shadow: none;
    }
    .card-interseguro{
        border-radius: 5px;
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
            padding: 0 0px 0px 4px;
        }
        .ipt-year{
            width: 65px;
            padding: 0 5px 0 0;
        }
        .ipt-cvv{
            width: 60px;
            padding: 0 0 0 8px;
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

    .card-custom{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 16px;
        &__cvv{
            width: 40%;
            position: relative;
            z-index: 7;
            margin-left: -4px;
            left: -1px;
            box-sizing: content-box;
        }
        &__date{    
            width: 40%;
            display: flex;
            .form-group-custom{
                &:nth-child(1){
                    width: 50%;
                }
                &:nth-child(2){
                    width: 50%;
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
                        height: 36px;
                        background: #fff;
                        content: "/";
                        top: 1px;
                        right: -2px;
                        position: absolute;
                        z-index: 99;
                        font-size: 17px;
                        line-height: 34px;
                    }
                }
            }
        }
    }
    .modal-personal-title {
        font-family: 'Omnes Medium';
        font-size: 24px;
        font-weight: 900;
        text-align: center;
        
    }
    .modal-description {
        text-align: left;
        font-family: 'Omnes Medium';
        font-size: 16px;
        font-weight: 300;
        color: #373737;
        border: 0;
        margin-top: 10px;
    }
    .modal-personal-title {
        font-family: 'Omnes Medium';
        font-size: 24px;
        font-weight: 900;
        text-align: center;
        
    }
    .cart-button-download {
        border: solid 1px #0BD360;
        outline: 0;
        padding: 15px 24px 15px 43px;
        margin: .5rem auto;
        border-radius: 6px;
        
        font-family: 'Omnes Medium';
        font-size: 16px;
        letter-spacing: 1px;
        font-weight: 900;
        text-align: center;
        cursor: pointer;
        color: #0BD360;
    }
    .leaveModal {
    .modal-lg {
        max-width: 660px;
    }
    font-family: 'Omnes Regular';
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    h2 {
        font-size: 32px;
        color: #0854c4;
    }
    h3 {
        font-size: 20px;
        color: #454a6c;
    }
    span {
        font-family: 'Omnes Medium';
    }
    img {
        margin-top: 30px;
    }
    .btn{
        background-color: #ea0c90;
        color: white;
        height: 50px;
        width: 300px;
        line-height: 0.5;
        font-size: 16px;
        border-radius: 3px;
        border: none;
        &:hover{
            opacity: .7;
        }
    }
}
.modal-agora{
    font-family: 'Omnes Regular';
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    .modal-lg {
        max-width: 660px;
    }    
    h2 {
        font-size: 18px;
        color: #114FFF;
        font-family: 'Omnes SemiBold';
    }
    h3 {
        font-size: 17px;
        color: #10B0FF;
    }
    span {
        font-family: 'Omnes Medium';
    }
    img {
        margin-top: 0px;
    }
    .btn{
        background-color: #ea0c90;
        color: white;
        height: 50px;
        width: 300px;
        line-height: 0.5;
        font-size: 16px;
        border-radius: 3px;
        border: none;
        &:hover{
            opacity: .7;
        }
    }
    p{
        color: #454A6C;
        font-size: 12px;
    }
}
    @media (min-width: 992px) {
        .modal-agora{
    h3 {
        font-size: 23px;
    }
    p{
        font-size: 15px;
    }
}
        .metodo-pago{
            
            &__comoPagar{                
                border-radius: 5px 5px 0 0;
            }  
            &__ingresatarjeta{
                border-radius:  0 5px  5px 0;
                padding: 22px 28px;
            }
        }
        .contenedor-custom{
            padding: 0 15px;
        }
        
        .metodo-pago{
            margin: 0;
            margin-top: 16px;
        }
        #focusCVV{
            right: -147px;
            bottom: 45px;
            img{
                width: 100%;
            }
        }
        #focusMES{
            left: -147px;
            bottom: 45px;
            img{
                width: 100%;
            }
        }
        #focusTarjeta{
            left: -239px;
            bottom: 63px;
            img{
                width: 100%;
            }
        }
        
    }
    @media (min-width: 990px){
        .steps-allRisk-box {
            margin-top: 90px;
        }
    }
    @media (min-width: 1024px){
        .liston-agora{
            display: block;
        }
        .metodo-pago__ingresatarjeta{
            background: white;
        }
        .steps-allRisk-box {
            padding-top: 0;
            margin-top: 90px;
        }
        .steps-box{    
            padding-top: 50px;        
            .steps-plan{
                background: transparent;
            }
        }
        .planes-tabs .nav-pills .nav-link, .planes-tabs .nav-pills .show > .nav-link {
            font-weight: 500;
        }
    }
// @media (min-width: 1024px){
//     .banderaSlider{
//     width: 320px;
//     }
// }

</style>

