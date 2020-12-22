<template>
    <div class="main  container">
        <div class="root  row">
            <div class="col-12  col-lg-6  root__izq">
                <div class="root--info">
                    <router-link to="/cotiza/ingresa-tu-documento"><img class="volver_atras" src="./../../static/media/img/root/volver_atras.png" alt=""></router-link>                    
                    <h3>{{this.nombrecliente}}, tú también puedes ahorrar hasta 50% con nuestro app</h3>
                    <p class="datos-guardados  d-none  d-lg-block">
                        <span>Descarga </span> el app, <span>maneja</span> por 3 semanas mientras medimos tu habilidad de manejo y <span>recibe</span> un descuento de hasta 50% si eres un buen conductor.
                    </p>
                    <div class="btns-banner  btns-banner-descargar-app d-none  d-lg-block">
                        <div class="btn-cotizar" @click="showModalNumeroCelular('1')">
                            <span class="cotizar">DESCARGAR APP</span>                        
                        </div>
                    </div>
                    <div class="contacto  contacto-dkt">                    
                        <!-- <span class="telefono">{{}} <img src="" alt="x"></span> -->
                        <img class="root_mobile   d-flex  d-lg-none" src="./../../static/media/img/root/root_desktop.png" alt="">
                        <div class="box-reenviar-sms">                            
                            <span class="no-te-llego-sms  d-none  d-lg-flex">¿Quieres continuar con la compra de tu Seguro Vehicular por US$118 al mes?</span>
                        </div>
                    </div>
                    <p class="datos-guardados  d-block  d-lg-none">
                        <span>Descarga el app, maneja</span> por 3 semanas mientras medimos tu habilidad de manejo y recibe un <span>descuento de hasta 50%</span> 
                    </p>
                    <div class="box-btn  mt-4  mb-4  d-lg-none ">
                        <span class="btn-descargar" @click="descargarApp('1')" >Descargar app ahora</span>
                    </div>
                    <div class="contacto">                    
                        <div class="box-reenviar-sms">                            
                            <span class="no-te-llego-sms  d-flex  d-lg-none">¿Quieres continuar con la compra de tu Seguro Vehicular por US$118 al mes?</span>
                        </div>
                    </div>
                    <div class="btns-banner  btns-banner-quiero-continuar">
                        <div class="btn-continuar" @click="continuar_como_pagar()">
                            <span class="cotizar">Quiero continuar</span>                        
                        </div>

                    </div>


                </div>

            </div>
            <div class="d-none  d-md-flex  col-12  col-lg-6  root__der">
                <div class="root-img  d-none  d-lg-flex">
                    <img src="./../../static/media/img/root/root_desktop.png" alt="IMAGEN">
                </div>
                <div class="botones-app    d-none  d-lg-flex">
                    <div class="ios"  @click="showModalNumeroCelular('2',1)">
                        <img width="151" src="./../../static/media/img/root/tienda_ios.png" alt="">
                    </div>
                    <div class="google"  @click="showModalNumeroCelular('2',2)">
                        <img width="151" src="./../../static/media/img/root/tienda_google.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <b-modal
      id="modalTerminosCondiciones"
      ref="modalTerminosCondiciones"
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      size="lg"
    >
    
      <div class="modal-content modalTerminosCondiciones">
        <img class="close-modal" src="./../../static/media/img/root/close.png" alt="" @click="hidemodalTerminosCondiciones()">
        <div class="modal-head">
          <div class="modal-divider"></div>
        </div>

        <div class="modal-description">
          <br>
          <h4 class="text-center">CONDICIONES DE USO Y POLÍTICA DE PRIVACIDAD</h4>
          <p
            style="border: 1px solid #666; padding: 12px;"
          >RECOMENDAMOS ENFÁTICAMENTE LEER ÍNTEGRAMENTE ESTE DOCUMENTO ANTES DE ACEPTARLO.</p>
          <span>Con este documento manifiesta usted que ha sido informado por INTERSEGURO COMPAÑÍA DE SEGUROS S.A respecto a lo siguiente:
            <br>
          </span>
          <br>1. Finalidad del tratamiento de sus datos personales.
          <br>2. Quiénes son o pueden ser los destinatarios de sus datos personales.
          <br>3. Existencia del banco de datos en que se almacenarán, así como la identidad y domicilio de su titular.
          <br>4. De ser el caso, del o de los encargados del tratamiento de sus datos personales.
          <br>5. El carácter obligatorio o facultativo de sus respuestas al formulario que se le proponga, en especial en cuanto a los datos sensibles.
          <br>6. La transferencia de sus datos personales.
          <br>7. Las consecuencias de proporcionar sus datos personales y de su negativa a hacerlo.
          <br>8. El tiempo durante el cual se conservan sus datos personales.
          <br>9. La posibilidad de ejercer los derechos que la ley le concede y los medios previstos para ello.
          <br>
          <br>
          <p class="text-center">QUÉ SON LAS CONDICIONES DE USO Y POLÍTICA DE PRIVACIDAD</p>

          <br>Las Condiciones de Uso y Política de Privacidad constituyen un contrato entre INTERSEGURO COMPAÑÍA DE SEGUROS S.A (En adelante “INTERSEGURO”) y el USUARIO.
          <br>
          <br>Las Condiciones de Uso y Política de Privacidad (en adelante, el “CONTRATO”) regulan las condiciones en que INTERSEGURO brindará información, enviará publicidad y orientará al USUARIO, de manera general, sobre sus productos y servicios actuales y futuros; y los productos y servicios actuales y futuros de las empresas de su grupo económico.
          <br>
          <br>El CONTRATO parte de la premisa de que usted, como USUARIO, se encuentra interesado en conocer y recibir información de los productos y servicios de INTERSEGURO y de las empresas de su grupo. Este interés se entenderá existente y manifestado por usted cuando acepte el CONTRATO y se comunique con nosotros a través de los formularios disponibles en los enlaces para los cuales resulta aplicable el CONTRATO. Por lo tanto, la aceptación de estas Condiciones de Uso y Política de Privacidad significará para todo efecto la formalización del CONTRATO entre el USUARIO e INTERSEGURO en los términos y alcances en que en este documento se describen.
          <br>
          <br>El CONTRATO es a título gratuito. INTERSEGURO no cobrará ni recibirá ninguna suma de dinero ni contraprestación material.
          <br>
          <br>El CONTRATO es un contrato de adhesión. Sus términos no son negociables. Pero el USUARIO tiene plena e irrestricta libertad de aceptarlo o rechazarlo en su integridad.
          <br>
          <br>El CONTRATO no obliga a contratar un producto o servicio por parte del USUARIO.
          <br>La POLÍTICA DE PRIVACIDAD que se encuentra en el apartado IV del CONTRATO y que forma parte integrante del CONTRATO establece los alcances y límites del tratamiento de datos personales que INTERSEGURO necesita realizar para ejecutar el CONTRATO y con posterioridad a su vigencia. Por lo tanto, dicho tratamiento de datos personales resulta esencial para tal ejecución. Al aceptar el CONTRATO, el USUARIO consentirá la realización de dicho tratamiento.
          <br>
          <br>
          <h4
            class="text-center"
          >REQUISITOS ESENCIALES PARA PODER ACEPTAR LAS CONDICIONES DE USO Y POLÍTICA DE PRIVACIDAD.</h4>
          <br>
          <span>Es requisito esencial para aceptar este CONTRATO que el USUARIO cumpla con los siguientes requisitos, debiendo abstenerse de aceptarlos si es que no reúne cualquiera o todos ellos:</span>
          <br>
          <br>1. Es mayor de edad, de acuerdo con la LEY o tiene capacidad civil suficiente conforme a la LEY, para emitir una manifestación y declaración de voluntad sin vicio que afecte su razonamiento y entendimiento.
          <br>2. Es hábil en el idioma español.
          <br>3. Ha leído íntegramente los T&C.
          <br>4. En caso de actuar como representante de un tercero, actúa y declara contando con legitimidad y facultades suficientes conforme a LEY.
          <br>
          <br>
          <br>INTERSEGURO, actuando con buena fe, parte de la premisa y presunción de que el USUARIO cumple con todas estas exigencias. Si no fuese así, el USUARIO será único, exclusivo y total responsable de cualquier riesgo o perjuicio que se cause a INTERSEGURO, al GRUPO o a terceros derivados del incumplimiento de estos requisitos, o actuando en ausencia de cualquiera de ellos.
          <br>
          <br>
          <h4 class="text-center">I. GLOSARIO</h4>Los siguientes términos, sea en plural o singular, tendrán el siguiente significado en el CONTRATO:
          <br>

          <br>1. BANCO DE DATO: Alude al banco de datos personales USUARIOS DE LA PAGINA WEB de titularidad de Interseguro que se encuentra debidamente registrado en el Registro Nacional de Datos Personales del Ministerio de Justicia, en donde se almacenará los DATOS PERSONALES.
          <br>2. CONTRATO: Significa el acuerdo de voluntades celebrada entre el USUARIO e INTERSEGURO y formalizado a través de la aceptación de las Condiciones de Uso y Política de Privacidad.
          <br>3. DATOS PERSONALES: Son los siguientes: a) Nombres y apellidos; b) N° DNI; c) Dirección del domicilio; d) Teléfono; e) Dirección de correo electrónico; f) Carné de Extranjería; g) Estado Civil; h) Fecha de Nacimiento; i) Número de tarjeta; j) Fecha de Vencimiento; k) CVV.
          <br>4. GRUPO: Se refiere, conjuntamente a todas las empresas del grupo económico INTERCORP, que son: Interbank, Interfondos, Intercorp Financial Services, Financiera Oh!, Inteligo SAB y las que se encuentren en el siguiente enlace http://www.intercorp.com.pe/empresas.html, cuyo número podría variar a futuro.
          <br>5. INTERSEGURO: Significa INTERSEGURO COMPAÑÍA DE SEGUROS S.A., identificado con R.U.C. N° 20382748566, con domicilio para todos los efectos legales en Avenida Javier Prado Este Nro 492, Interior 2601, Distrito San Isidro, Provincia Lima y Departamento de Lima, inscrita en la Partida Electrónica N° 11020565 del Registro de Personas Jurídicas de la Oficina Registral de Lima y Callao.
          <br>6. LEY: Ordenamiento jurídico de la República del Perú.
          <br>7. LPDP: Significa, conjuntamente, la Ley 29733, Ley de Protección de Datos Personales, su reglamento, el Decreto Supremo 003-2013-JUS, las disposiciones normativas que de cuando en cuando las modifiquen y cualquier disposición normativa del ordenamiento jurídico peruano que regule la materia de tratamiento de datos personales en la República del Perú.
          8. PARTES: Se refiere conjuntamente a INTERSEGURO y al USUARIO.
          <br>9. POLÍTICA DE PRIVACIDAD: Apartado IV del presente documento, que representa la forma en que INTERSEGURO realiza el tratamiento de sus DATOS PERSONALES.
          <br>10. PRODUCTOS Y SERVICIOS: Cualquier y todos los productos y/o servicios ofrecidos o comercializados por INTERSEGURO y/o por las empresas que conforman el GRUPO. Con fines meramente enunciativos, los PRODUCTOS Y SERVICIOS de INTERSEGURO comprenden el Seguro Obligatorio de Accidentes de Tránsito, Pólizas de Vida Individual, Pólizas de Rentas Vitalicias, Pólizas de Seguro Vehicular, Pólizas de Seguro de Viaje, entre otros.
          <br>11. USUARIO: Persona natural que accede, hace uso o se comunica con INTERSEGURO a través de cualquiera de los URL a las que hace referencia el término WEB.
          <br>12. WEB: Alude de modo general a la página web principal de INTERSEGURO https://www.interseguro.pe y a todas las páginas relacionadas a ésta, como subdominios o relacionadas al dominio principal. No incluye el Libro de Reclamaciones virtual de INTERSEGURO.
          <br>
          <br>
          <br>
          <H4 class="text-center">II. FINALIDAD DEL CONTRATO</H4>El CONTRATO tiene como finalidades:
          <br>

          <br>1. Facilitar el intercambio de comunicaciones entre INTERSEGURO y el USUARIO para recibir y/o brindar información, orientación, asesoría y publicidad sobre los PRODUCTOS Y SERVICIOS de INTERSEGURO y los de productos y servicios del GRUPO, tanto los actuales como los que se creen u ofrezcan a futuro.
          <br>2. Regular los derechos y compromisos de cada una de las PARTES en la ejecución del CONTRATO.
          <br>3. Establecer los alcances y límites del tratamiento de los DATOS PERSONALES necesarios para la ejecución de la presente relación contractual.
          <br>
          <br>
          <H4>III. SOBRE LAS COMUNICACIONES CON OCASIÓN DEL CONTRATO</H4>
          <br>Con miras a ejecutar las finalidades del CONTRATO, INTERSEGURO podrá y se encuentra autorizado, en relación a todas las WEB, para:
          <br>

          <br>1. Brindar información, asesoría y orientación al USUARIO sobre los PRODUCTOS Y SERVICIOS, tanto actuales como futuros.
          <br>2. Gestionar y coordinar visitas o reuniones entre el USUARIO y funcionarios, colaboradores, promotores, comercializadores y fuerza de ventas de INTERSEGURO y del GRUPO, así como para cursar invitaciones para eventos.
          <br>3. Facilitar al USUARIO y/o recibir del USUARIO los documentos que conforman la contratación de pólizas de seguros, tanto para fines orientativos como para la propia contratación de seguros (solicitudes de seguros, solicitudes-certificados, condiciones generales, condiciones particulares, condiciones especiales, cláusulas adicionales, endosos, convenios de pago de prima, pólizas virtuales, entre otros).
          <br>4. Permitir el intercambio y envío de información sobre los PRODUCTOS Y SERVICIOS del GRUPO, sea por parte de cualquiera de las empresas del GRUPO como por INTERSEGURO y por terceros a los cuales INTERSEGURO o el GRUPO contraten.
          <br>5. Enviar promociones y publicidad de los PRODUCTOS Y SERVICIOS de INTERSEGURO y de los del GRUPO, sea por parte de cualquiera de las empresas del GRUPO como por INTERSEGURO y por terceros a los cuales INTERSEGURO o el GRUPO contraten.
          <br>6. Contactar con el USUARIO a través de correos electrónicos, llamadas telefónicas, SMS, comunicaciones escritas, redes sociales, aplicaciones de chat para teléfonos, como el WhatsApp, sistemas de comunicación masiva (tales como Call Centers, E-mailing, y SMS masivos para las finalidades indicadas en los numerales anteriores).
          <br>
          <br>
          <br>INTERSEGURO se encuentra facultado más no obligado a brindar información sobre PRODUCTOS Y SERVICIOS del GRUPO.
          <br>
          <br>El USUARIO podrá, se encuentra facultado y permite:
          <br>
          <br>1. Solicitar a INTERSEGURO información y asesoría sobre los PRODUCTOS Y SERVICIOS.
          <br>2. Enviar información o documentos a INTERSEGURO
          <br>3. Solicitar cotizaciones de PRODUCTOS Y SERVICIOS y, eventualmente, contratarlos, en tanto lo permitan las exigencias normativas sectoriales.
          <br>
          <br>
          <h4 class="text-center">IV. POLÍTICA DE PRIVACIDAD</h4>
          <br>
          <br>Para poder cumplir con las finalidades señaladas en el apartado II anterior y en general con las acciones necesarias para ejecutar el CONTRATO, INTERSEGURO requiere realizar el tratamiento de los DATOS PERSONALES del USUARIO. La presente sección contiene los lineamientos que regulan el tratamiento de los DATOS PERSONALES (en adelante, la “POLÍTICA DE PRIVACIDAD”), la misma que se aplica en estricto cumplimiento de la LEY y, particularmente, de la LPDP, con la finalidad de asegurar un tratamiento de DATOS PERSONALES legítimo, arreglado a derecho, confidencial y seguro.
          <br>

          <br>INTERSEGURO se encuentra firmemente comprometido con realizar los mayores esfuerzos de gestión, administrativos, legales y tecnológicos para garantizar el tratamiento confidencial y seguro de los DATOS PERSONALES.
          <br>

          <br>Los alcances del tratamiento de los DATOS PERSONALES para ejecutar el CONTRATO son los siguientes:
          <br>

          <br>1. Los DATOS PERSONALES recopilados a través de cualquiera de los enlaces que conforman la web se almacenarán en el Banco de Datos USUARIOS DE LA PAGINA WEB de titularidad de INTERSEGURO.
          <br>2. Los DATOS PERSONALES serán tratados con la finalidad de ejecutar las prestaciones y obligaciones y derechos atribuidos tanto al USUARIO como a INTERSEGURO contenidos en el CONTRATO. Como se ha señalado en el numeral II del CONTRATO, entre estas finalidades se encuentra la de mantener informado, asesorar y ofrecer al USUARIO los PRODUCTOS Y SERVICIOS tanto actuales como futuros.
          <br>3. Como consecuencia de las finalidades descritas y en tanto progresivamente INTERSEGURO y el GRUPO podrán ir diseñando y ofreciendo nuevos PRODUCTOS Y SERVICIOS, los DATOS PERSONALES se almacenarán y tratarán hasta el momento en que el USUARIO revoque formalmente el consentimiento que nos otorgó para su tratamiento, conforme la LPDP se lo permite e INTERSEGURO garantiza.
          <br>4. INTERSEGURO ha implementado las medidas administrativas, legales y tecnológicas con la intención de ejecutar un tratamiento seguro y confidencial de los DATOS PERSONALES. No obstante, INTERSEGURO no puede garantizar que los DATOS PERSONALES se encuentren completamente libre de accesos y tratamientos no autorizados e ilícitos cometidos por terceros ajenos a INTERSEGURO, debido a riesgos naturales y los propios del entorno virtual. En tal sentido, debe entenderse para todo efecto que la implementación de estas medidas administrativas, legales y tecnológicas constituyen deberes de medios y no de resultados. Como consecuencia de ello, INTERSEGURO no se responsabiliza en caso de que se materialicen dichos riesgos y se genere algún tipo de daño o perjuicio al USUARIO. En dicho caso, la responsabilidad de INTERSEGURO se encuentra sujeta y limitada a los límites contenidos en el presente documento.
          <br>5. Para efectos del intercambio de comunicaciones y envío de comunicaciones con ocasión de la ejecución del CONTRATO, descrito en los numerales II y III del CONTRATO, INTERSEGURO podrá usar sistemas de comunicación masiva, tales como centrales de llamadas (Call Centers), centrales o sistemas de envíos de mails masivos (mailing) o SMS masivos. En caso de que INTERSEGURO decida valerse de terceros para estos fines, se realizará transferencia de DATOS PERSONALES a través de los encargos de tratamiento que correspondan, garantizando el tratamiento de los DATOS PERSONALES por parte de estos terceros conforme a los alcances y limitaciones del consentimiento brindado por el USUARIO a través del CONTRATO y cumpliendo con las exigencias de la LPDP.
          <br>6. La POLÍTICA DE PRIVACIDAD podrá ser modificada de cuando en cuando (a todas ellas, en adelante, las “MODIFICACIONES”). En tales casos, INTERSEGURO le enviará un mensaje a través del correo que nos ha facilitado. A través de dicho mensaje usted podrá acceder y conocer íntegramente las MODIFICACIONES. Recomendamos que revise detenidamente y cuidadosamente las MODIFICACIONES. Usted es libre de aceptarlas o no aceptarlas. Sin embargo, en caso de que no aceptación, INTERSEGURO podría verse impedido de ejecutar el CONTRATO, si es que las MODIFICACIONES fueran necesarias para continuar con su ejecución. En tal caso, INTERSEGURO no asumirá ninguna responsabilidad derivada de la falta de asesoría o información.
          <br>7. Al usar la WEB o inclusive al sólo acceder a la página central de INTERSEGURO (www.interseguro.pe) usted acepta que se podrán instalar cookies en su ordenador o dispositivo. Estas pueden ser necesarias para recopilar información relevante para la ejecución del CONTRATO. Las cookies ya no continuarán con su finalidad al vencer el plazo por el cual INTERSEGURO almacenará sus DATOS PERSONALES. Sin embargo, en dicho momento, las cookies no se desinstalarán automáticamente, siendo usted el USUARIO el único y exclusivo responsable y encargado de la desinstalación.
          <br>8. La siguiente lista muestra las cookies de terceros que se podrían instalar, los fines para los que se utilizan y los enlaces a páginas web donde se puede encontrar más información sobre las mismas:
          <br>
          <br>
          <table class="tabla_modal" style="width: 100%;">
            <tbody>
              <tr>
                <td>Tipo de Cookie</td>
                <td>Proveedor o Titular</td>
                <td>Para qué se utiliza</td>
                <td>Enlace de Referencia</td>
              </tr>
              <tr>
                <td>Terceros</td>
                <td>Google Analytics</td>
                <td
                  rowspan="2"
                >Se utiliza para almacenar información de navegación (tiempo de conexión, sesiones con ID, tipo de dispositivo, navegador, sistema operativo, etc.).</td>
                <td>https://analytics.google.com/</td>
              </tr>
              <tr>
                <td></td>
                <td>Facebook Pixel</td>

                <td>https://facebook.com</td>
              </tr>
            </tbody>
          </table>
          <br>9. INTERSEGURO no gestiona cookies de terceros ni es responsable de ellas ni del tratamiento de datos personales que realizan. Al aceptar los T&C, usted acepta la instalación de las cookies de terceros. Recomendamos enfáticamente revisar con detenimiento y cuidado los enlaces incluidos en el cuadro anterior, antes de aceptar el CONTRATO.
          <br>10. INTERSEGURO garantiza el respeto de los derechos de los titulares de los DATOS PERSONALES consagrados en la LPDP, con la finalidad de que puedan ser ejercidos de la manera más amplia y sin costo alguno. Para tal fin, el USUARIO deberá enviar una comunicación al correo servicios@interseguro.com.pe o en la dirección Av. Paseo de la Republica Nro. 3071, San Isidro que deberá incluir todo lo siguiente: a) Nombres y apellidos, documento de identidad y sexo del USUARIO (Si se actúa a través de un representante legal, deberá acreditarse los documentos que acrediten dicha representación); b) Pedido concreto; c) Domicilio o dirección electrónica a donde se deberá responder; d) Fecha y firma de quien envía la solicitud; e) Documentos que sustenten la petición, de ser el caso.
          <br>11. INTERSEGURO no realiza tratamiento de DATOS PERSONALES de menores de edad. Si el USUARIO es menor de edad, deberá obtener la autorización previa de su padre, madre, tutor o representante legal y enviarla previamente a INTERSEGURO de forma física para acreditar la existencia del consentimiento previo.
          <br>12. Resultan aplicables a esta POLÍTICA DE PRIVACIDAD, de manera supletoria y complementaria, las disposiciones de la LPDP.
          <br>
          <br>Última actualización de las Condiciones de Uso y Política de Privacidad:
          22 de Mayo de 2019
          <br>
        </div>
      </div>
    </b-modal>
        <b-modal title="Bootstrap-Vue"
          hide-footer
          hide-header
          ref="modalNumeroCelular"
          id="modalNumeroCelular">
        <div class="modal-content modal-root">
            
            <div class="modal-body">
              <div class="box-mensajeEnviado" v-bind:class="{mostrarMensajeEnviado : mostrarMensajeEnviado}">
                <img class="check-enviado" src="./../../static/media/img/root/check.png" alt="">
                <p>¡Listo! En breve recibirás el link de descarga al <span>{{this.inputNumeroCelular}}</span></p>
              </div>
                <img class="close-modal" src="./../../static/media/img/root/close.png" alt="" @click="hideModalNumeroCelular()">
                <div class="box-img">
                  <img src="./../../static/media/img/root/descarga_modal.png" alt="">
                </div>
                <div class="box-titulo">
                  <p class="titulo">Recibe el link de descarga a tu celular</p>
                </div>
                <div class="box-input">
                  <b-form-input class="telefono" type="tel" maxlength="9" v-model="inputNumeroCelular" :placeholder="placeholderNumeroCelular"></b-form-input>
                  <span class="enviar" @click="enviarNumeroCelular()">Enviar</span>
                </div>
                <div class="condiciones">
                  <span>Al continuar acepto las <span class="enlaceTerminosCondiciones" @click="showModalTerminosCondiciones()">Condiciones de Uso y Política de Privacidad.</span></span>
                </div>
            </div>
        </div>
    </b-modal>

        <b-modal title="Bootstrap-Vue"
            hide-footer
            hide-header
            ref="modalIosQR"
            id="modalIosQR">
            <div class="modal-content fechaVigenciaCotizador">
                <b-btn class="mt-3 modal-close" @click="hideModalIosQR()" style="background: transparent; border: none;">
                <img src="./../../static/media/img/flujo/cotizacion/modal-close.svg"
                    width="30"
                    alt="icon close"
                    class=""/>
                </b-btn>
                <div class="modal-head">
                <div class="box-titulo">
                    <p class="text-inicio">TEXTO PENDIENTE POR SEBAS</p>
                </div>
                <div class="modal-divider"></div>
                </div>
                <div class="modal-body">
                    <div class="box_qr">
                        <img src="./../../static/media/img/root/iosQR.png" alt="">
                    </div>
                </div>
            </div>
        </b-modal>

        <!-- Modal de abandono -->
      <b-modal id="leaveStopper" class="leaveModal" size="lg"  static centered hide-footer hide-header>
        <b-container>
          <b-row class="justify-content-center">
            <b-col class="text-center mb-3" cols="12">
              <img src="../../static/media/modal/leave-stop.png" alt="Abandonar Seguro Vehicular">
            </b-col>
          </b-row>
          <b-row class="text-center">
            <b-col cols="12" class="mb-3">
              <h2><span>¡No te vayas sin descargar el app!</span></h2>
            </b-col>
            <b-col cols="12" class="mb-3">
              <h3>Con el app puedes acceder a un descuento <br> de hasta 50%, si tienes buenas habilidades <br> de manejo.</h3>
            </b-col>
          </b-row>
          <b-row class="justify-content-center">
            <b-col class="text-center mb-4" cols="12">
              <b-button @click="$nuxt.$emit('bv::hide::modal', 'leaveStopper')">QUIERO SABER SOBRE EL APP</b-button>
            </b-col>
            <b-col class="text-center mb-4" cols="12">
              <b-button style="background-color: white;"><router-link style="text-decoration: none; color: #ea0c90" @click="continuar_como_pagar()" class="" to="/cotiza/como-pagar">COMPRAR SIN EL DESCUENTO</router-link></b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-modal>

    </div>
</template>
<style lang="scss" scoope>
    .main{
        padding-top: 120px;
        span{
            display: inline-block;
        }
        h3, p{
            margin: 0;
            padding: 0;
        }
    }
    .root{
        .editarShow{
            display: none;
        }
        display: flex;
        .root--info{
            .no-te-llego-sms{                
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: normal;
                text-align: center;
                color: #454A6C;
            }
            .btn-cotizar{
                cursor: pointer;
                width: 210px;
                height: 49px;
                background-color: #ea0b90;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: auto;
                span{
                    color: white;
                }
                .cotizar{
                    font-family: 'Omnes Medium';
                    font-size: 18px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.39;
                    letter-spacing: normal;
                    text-align: left;
                    color: #ffffff;
                }

            }
            .btn-continuar{
                cursor: pointer;
                width: 210px;
                height: 49px;
                background-color: #ffffff;
                border: 1px solid #ea0b90;
                color: #ea0b90;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: auto;
                span{
                    color: white;
                }
                .cotizar{
                    font-family: 'Omnes Medium';
                    font-size: 18px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.39;
                    letter-spacing: normal;
                    text-align: left;
                    color: #ea0b90;
                }

            }
            .volver_atras{
                position: absolute;
                top: 0;
                left: 8px;
                width: 20px;                
            }
            .datos-guardados{
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: normal;
                text-align: center;
                color: #454A6C;
                span{
                    font-weight: bold;
                    color: #454A6C;
                }
            }
            .btns-banner-quiero-continuar{                
                margin-top: 8px !important;
            }
            .btns-banner-descargar-app{
                margin-top: 60px !important;
            }
            .btns-banner{
                margin: 42px 0;
            }
            .mensaje-enviado{
                font-size: 16px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: normal;
                text-align: center;
                color: #454a6c;
                margin-top: 16px;
            }
            h3{
                font-size: 20px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.23;
                letter-spacing: normal;
                text-align: center;
                color: #0854c4;
                margin-top: 22px;
            }
        }
        .contacto{
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            margin-top: 16px;
            align-items: center;
            .mensaje-exitoso{
                position: relative;
                left: 0;
                opacity: 0;
                width: 100%;
                font-size: 13px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.43;
                letter-spacing: normal;
                text-align: center;
                color: #ea0f90 ;
            }
            .box-reenviar-sms{
                position: relative;
            }
            .ocultarMensajeBase{
                display: none;
            }
            .mostrarMsjExitoso{
                opacity: 1;
                display: block;
            }
            .box-input{
                position: relative;
                img{
                    position: absolute;
                    right: 8px;
                    top: 10px;
                    width: 23px;
                }
            }
            .reenviar-link{
                font-size: 21px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.43;
                letter-spacing: normal;
                text-align: center;
                color: #ea0f90 ;
                cursor: pointer;
            }
            .root_mobile{
                width: 240px;
                margin: 20px 0;
            }
            .telefonoEditar{
                font-size: 18px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: normal;
                text-align: center;
                color: #0854c4;
                background: #f8f8f8;
                padding: 2px 10px;
                width: 220px;
                border: none;
                line-height: 22px;
            }
        }
        .box-btn{
            .btn-descargar{
                width: 285px;
                height: 45px;
                border-radius: 4px;
                box-shadow: 0 3px 6px 0 rgba(234, 15, 144, 0.22);
                background-color: #ea0f90;
                color: white;
                padding: 12px;
                display: inline-block;
                cursor: pointer;
            }
        }
        .continuar{
            text-align: center;
            margin-top: 12px;
            margin-bottom: 32px;
            span{
                font-family: 'Omnes Regular';
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.56;
                letter-spacing: normal;
                text-align: center;
                color: #656565;
            }
        }
        &__der{
            .root-img{
                img{
                    width: 470px;
                }
            }
            .botones-app{
                justify-content: center;
                img{
                    cursor: pointer;
                }
                .google{
                    margin-left: 30px;
                }
            }
        }
    }
    .modal-content{
        .box_qr{
            display: flex;
            justify-content: center;
        }
    }
    .telefonoEditar{
        padding-top: 4px !important;
        cursor: pointer;
    }
    .telefonoEditar::placeholder {
        color: #0854c4 !important;
        font-size: 26px;
    }

    @media (min-width: 992px) {
        .mensaje-exitoso{
            position: relative;
        }
        .root{
            padding: 72px 0;
            .root--info{
                width: 530px;
                .btn-cotizar{
                    width: 360px;
                    letter-spacing: 0.4px;
                }
                .volver_atras{
                    position: absolute;
                    top: -30px;
                    left: -8px;
                    width: 25px;
                }
                .datos-guardados{
                    font-family: 'Omnes Regular';
                    text-align: left;
                    font-size: 21px;
                    line-height: 1.43;
                    letter-spacing: normal;
                    width: 530px;
                    margin-top: 20px;
                }
                .mensaje-enviado{
                    text-align: left;
                    width: 419px;
                    font-size: 21px;
                    margin-top: 20px;
                }
                h3{
                    text-align: left;
                    font-size: 40px;
                }
                .box-input{
                    margin-top: 28px;
                    position: relative;
                    .editar{
                        position: absolute;
                        right: 8px;
                        width: 19px;
                        top: 12px;
                    }
                }
                .no-te-llego-sms{
                    text-align: center;
                    justify-content: center;
                    width: 530px;
                    font-size: 20px;
                    color: #454A6C;
                    font-family: 'Omnes Regular';
                    line-height: 1.43;
                    padding: 0 48px;
                }
                .continuar-mobile{
                    font-size: 18px;
                    font-style: normal;
                    line-height: 1.67;
                    text-align: center;
                    color: #656565;
                    font-family: 'Omnes Regular';
                    margin-top: 28px;
                }
                .contacto-dkt{
                    margin-top: 60px;
                }
                .contacto{
                    
                    .mensaje-exitoso{
                        font-size: 20px;
                    }
                }
            }
            &__der{
                flex-direction: column;
            }
        }
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
</style>
<script>
export default {
    layout: "InterseguroFlujo", 
    data() {
        return {
            nombrecliente: '',
            action: '',
            itemElegido:{},
            mostrarMsjExitoso: false,
            mostrarMensajeEnviado: false,
            ocultarMensajeBase: false,
            inputNumeroCelular: '',
            placeholderNumeroCelular: 'Ingresa tu número de télefono',
            editarShow: false,
            montoMensual: '',
            text:'',
            PulseLoader: '',
            placeholder :'',
            objUtm: {}
        }
    },
    created() {
        
    },
    methods: {
    remarketingv2(){
      if (this.$store.state.common.businessId == 2){
        this.objPlantilla = {}
        this.objUtm = {}
      }else if(this.$store.state.common.nuevoProducto == true){
        this.objPlantilla = {}
      }
      this.objRemarketing = {
        "codigoRemarketing": this.$store.state.common.codigoRemarketingGenerado == null ? "" : this.$store.state.common.codigoRemarketingGenerado,
        "producto": this.$store.state.common.businessId,
        "identificador": this.$store.state.common.plateNumber,
        "detalle": {
          "correo": this.$store.state.common.email.trim().replace(/ /g,''),
          "codigoVenta": this.$store.state.common.codeRmkt,
          "pantalla": 4,
          "enviarCorreo":0,
          "datosCorreo":{
            "url": process.env.URL+ (this.$store.state.common.businessId == 1 ? "vehicular" : "vehicular/interbank"),
            "plantilla": this.objPlantilla,
            "utm": this.objUtm
          },
          "datosProducto": {
            marca : this.$store.state.common.itemElegido.brand,
            modelo : this.$store.state.common.itemElegido.model,
            planSeleccionado : this.planSeleccionado+'',
            valorComercial : this.$store.state.common.current,
            pagoMensual : this.$store.state.common.listaCotizacion.policy.monthly,
            desde : null,
            /*********************************************************/
            businessId: this.$store.state.common.businessId,
            idEndosoSeleccionado: this.endosoSeleccionado.id,
            endosoSeleccionado: this.endosoSeleccionado.name,
            placa: this.$store.state.common.plateNumber,              
            anio: this.$store.state.common.itemElegido.modelYear,                            
            gps: this.$store.state.common.listaCotizacion.vehicle.gps,
            riesgo: this.$store.state.common.listaCotizacion.policy.risk,
            fechaInicio: this.$store.state.common.fechaVigencia,
            discountType: this.discountType,
            /******************************************************** */   
            itemElegido: this.$store.state.common.itemElegido,
            listCotizacion: this.$store.state.common.listaCotizacion,
            nuevoProducto: this.$store.state.common.nuevoProducto
          },
        "datosTitular": {
            numeroDocumento: this.$store.state.common.documentoLocal,
            nombre: this.$store.state.common.objCliente.firstName,
            apellidoPaterno: this.$store.state.common.objCliente.firstLastName,
            apellidoMaterno: this.$store.state.common.objCliente.secondLastName,
            telefono: this.$store.state.common.objCliente.phoneNumber,
            originDocumentNumber: localStorage.getItem("originDocumentNumber"),
            origenDatos: this.$store.state.common.origenCliente,
        },
          "remitente": {
            "correoRemitente": "segurovehicular@interseguro.com.pe",
            "correoRemitenteDisplay": "Interseguro Vehicular"
          },
          "datosPago": {
            "idFrecuencia": 1,
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
        PaginaVista() {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "pagina_vista",
                "page-url": "/vehicular-app/cotiza/descarga-app/",
                "page-title": "Stopper",
            })
        },   
        continuar_como_pagar(){
            window.dataLayer = window.dataLayer || [ ];
            dataLayer.push({
                'event': 'stopper_continuar_compra',
                'category': 'UI :: Descarga el app',
                'action': 'Click',
                'label': 'Quiero continuar'
            })
            this.$nuxt.$router.push("/cotiza/como-pagar/")
        },
        descargarApp(param) {
            if(param == '1'){
                window.dataLayer = window.dataLayer || [ ];
                dataLayer.push({
                    'event': 'stopper_descargar_app_ahora',
                    'category': 'UI :: Descarga el app',
                    'action': 'Click',
                    'label': 'Descargar app ahora'
                })
            }
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
            {
                window.location.replace("https://apps.apple.com/pe/app/interseguro-vehicular/id1517921041?l=en");
                return 'iOS';
            }
            else if( userAgent.match( /Android/i ) )
            {
            window.location.replace("https://play.google.com/store/apps/details?id=pe.interseguro.intersegurovehicular&hl=es_PE");
                return 'Android';
            }
            else
            {
            
            return 'unknown'; 
            }
        },
        showModalNumeroCelular(param, tienda) {        
            if (param == '1') {
                this.action = 'Descargar ahora'
                window.dataLayer = window.dataLayer || [ ];
                dataLayer.push({
                    'event': 'stopper_descargar_app_ahora',
                    'category': 'UI :: Descarga el app',
                    'action': 'Click',
                    'label': 'Descargar app ahora'
                })      
            }
            if (param == '2' && tienda == 1) {
                this.action = 'Click iOS'
                window.dataLayer = window.dataLayer || [ ];
                dataLayer.push({
                    'event': 'stopper_click_ios',
                    'category': 'UI :: Descarga el app',
                    'action': 'Click boton',
                    'label': 'iOS'
                })      
            }else if(param == '2' && tienda == 2) {
                this.action = 'Click Android'
                window.dataLayer = window.dataLayer || [ ];
                dataLayer.push({
                    'event': 'stopper_click_android',
                    'category': 'UI :: Descarga el app',
                    'action': 'Click boton',
                    'label': 'Android'
                })      
            }
            this.$refs.modalNumeroCelular.show();
        },

      hideModalNumeroCelular () {
          window.dataLayer = window.dataLayer || [ ];
            dataLayer.push({
                'event': 'stopper_cerrar_modal_numero_celular',
                'category': 'UI :: Descarga el app',
                'action': 'Close',
                'label': 'Popup descargar app'
            })
          this.$refs.modalNumeroCelular.hide();
      },
      hidemodalTerminosCondiciones() {
        this.$refs.modalTerminosCondiciones.hide()
      },
      showModalTerminosCondiciones() {
        this.$refs.modalTerminosCondiciones.show()
        this.$refs.modalNumeroCelular.hide()          
      },
      enviarNumeroCelular(){
          if (this.inputNumeroCelular.length == 9) {
            this.$store.dispatch('common/enviarMsjCelular',this.inputNumeroCelular).then((res)=>{
            if (res.data.code == 0) {
                window.dataLayer = window.dataLayer || [ ];
                dataLayer.push({
                    'event': 'stopper_recibiras_msj_texto',
                    'category': 'UI :: Descarga el app',
                    'action': this.action,
                    'label': 'Popup descargar app'
                })
                this.mostrarMensajeEnviado = true
                setTimeout(() => {
                  this.mostrarMensajeEnviado = false
                  this.$refs.modalNumeroCelular.hide();
                  this.inputNumeroCelular = ''
                }, 2000);
            }else{
                this.$swal({
                        title: "Ok!",
                        text: "No logramos enviar el mensaje, vuelve a intenarlo as tarde",
                        type: "warning",
                        showCancelButton: false,
                        confirmButtonColor: "#2177CC",
                        confirmButtonText: "OK"
                    });
              this.mostrarMensajeEnviado = false
              this.inputNumeroCelular = ''
            }
          })
          }else{
            this.$swal({
              title: "Ok!",
              text: "Ingrese un número válido",
              type: "warning",
              showCancelButton: false,
              confirmButtonColor: "#2177CC",
              confirmButtonText: "OK"
            })
            this.inputNumeroCelular = ''
          }
          
        },
        showModalGoogleQR() {
            this.$refs.modalGoogleQR.show();
        },
        hideModalGoogleQR() {
            this.$refs.modalGoogleQR.hide();
        },
        showModalIosQR() {
            this.$refs.modalIosQR.show();
        },
        hideModalIosQR () {
            this.$refs.modalIosQR.hide();
        },
        clickFueraInput (){
            this.editarShow = false
            if (this.text.length == 9) {
                this.$store.dispatch('common/enviarMsjCelular',this.text).then((res)=>{
                    if (res.data.code == 0) {
                        this.ocultarMensajeBase = true
                        this.mostrarMsjExitoso = true
                            this.mostrarMsjExitoso = true
                            setTimeout(() => {
                                this.mostrarMsjExitoso = false
                                this.ocultarMensajeBase = false
                            }, 2000);
                    }else{
                        this.inputNumeroCelular = ''
                        this.mostrarMsjExitoso = false
                    }
                })
            }else{
                this.$swal({
                title: "Ok!",
                text: "Ingrese un número válido",
                type: "warning",
                showCancelButton: false,
                confirmButtonColor: "#2177CC",
                confirmButtonText: "OK"
                })
                this.inputNumeroCelular = ''
            }
        },
        clickEditarInput (){
            this.editarShow = true
            this.placeholder = ''
            this.text = ''
            window.dataLayer = window.dataLayer || [ ];
            dataLayer.push({
                'event': 'stopper_editar_texto',
                'category': 'UI :: Descarga el app',
                'action': 'Editar',
                'label': 'Número celular'
            })
        },
        reenviar_link (){
            this.$store.dispatch('common/enviarMsjCelular',this.text).then((res)=>{
                if (res.data.code == 0) {
                    window.dataLayer = window.dataLayer || [ ];
                    dataLayer.push({
                        'event': 'stopper_reenviar_link',
                        'category': 'UI :: Descarga el app',
                        'action': 'Click',
                        'label': 'Reenviar el link a este celular'
                    })
                }else{
                    this.$swal({
                        title: "Ok!",
                        text: "No logramos enviar el mensaje, vuelve a intenarlo as tarde",
                        type: "warning",
                        showCancelButton: false,
                        confirmButtonColor: "#2177CC",
                        confirmButtonText: "OK"
                    });
                }
            })
        },
        mouseLeave(e) {
            if (this.$store.state.common.leaveMessage == 0) {
                if (e.clientX < 0 || e.clientY < 0) {
                    this.$store.commit('common/setLeaveMessage',1) 
                    this.$nuxt.$emit('bv::show::modal','leaveStopper')
                }
            }
        }
    },
    mounted() {
        this.nombrecliente = this.$store.state.common.objCliente.firstName
        if(this.$store.state.common.cuentasueldo === "Y"  ){
          this.discountType = "cta-sueldo"
        }else if (this.$store.state.common.tarjetaoh == "Y" ) {
          this.discountType = "tarjeta-oh"
        }else{
          this.discountType = ""
        }
        let objJWT = JSON.parse(localStorage.getItem("jwt"))
        if (objJWT == null || objJWT == undefined) {
            this.$nuxt.$router.push("/")
        }else{
            if(objJWT.common.entidadFinanciera !== null){   
                let entidadFinanciera = objJWT.common.entidadFinanciera
                this.endosoSeleccionado = objJWT.common.entidadFinanciera
                this.planSeleccionado = objJWT.common.planSeleccionado
                if (entidadFinanciera.id > 0) {        
                    this.endosoSeleccionado = objJWT.common.entidadFinanciera
                }
            }else{
                this.$store.commit('common/setEntidadFinanciera', this.endosoSeleccionado)
            }
        }
                
        this.listCotizacion = this.$store.state.common.listaCotizacion

        this.montoMensual = this.$store.state.common.listaCotizacion.policy.monthly
        this.text = this.$store.state.common.numeroTelefono
        this.placeholder = this.$store.state.common.numeroTelefono
        this.reenviar_link()
        this.PaginaVista()

        this.itemElegido.documentoLocal = this.$store.state.common.documentoLocal
        this.itemElegido.discountType = this.discountType
        this.$store.dispatch('common/getClient',this.itemElegido).then((res)=>{
          if (res.data.code == 0) {
            this.objClients = res.data.body
            setTimeout(()=>{
                this.remarketingv2()
            },0)
          }else {
            
          }
        })
        
        document.addEventListener('mouseleave', this.mouseLeave, { passive: true})
    },
    destroyed() {
        if (process.browser) {
            document.removeEventListener('mouseleave', this.mouseLeave, { passive: true})
        }
    }
}
</script>
