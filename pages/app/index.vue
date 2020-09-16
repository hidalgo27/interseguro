<template>
  <div class="homeRoot">
    <!-- <div class="qr" >
      <img width="80" src="./../../static/media/img/root/qr.PNG" alt="qr">
    </div> -->
    <div class="capa-modal" v-bind:class="{'d-block' : mostrarCapaModal }" @click="hideCapaModal($event)">
      
    </div>
    <div class="banner-root">
      <div class="banner-root__body">
        <div class="root-izq">

          <div class="box-formCotizador box-modal-fake"   v-bind:class="{'mostrarModalFake': mostrarModalFake}">
              <p class="titulo-formulario">
                  <img class="img-form" src="./../../static/media/img/home/img-form.png" alt="banner">
                Manejar tranquilo <br> ahora es más fácil</p>
              <b-form class="formCotizador">
                <p class="formCotizador-titulo">Cotiza tu seguro vehicular ahora</p>
                <b-form-group label-for="placa">
                    <b-form-input
                      id="vehicleModelPlate"
                      class="text-uppercase text-center"
                      @keyup.native="consultarPlaca($event,750)"
                      maxlength="6"
                      autocomplete="off"
                      type="text"
                      v-model="item.plateNumber"                    
                      required
                      
                      placeholder="Ingresa tu Placa"
                      name="Placa"
                      aria-label="placa"                
                      autofocus
                  ></b-form-input>
                </b-form-group>
                <div class="box-btn-homeForm" style="position: relative">
                  <button
                    type="button"
                    @click="onSubmit"
                    class="btn-home-cotizar"
                  >
                    COTIZAR
                      <clip-loader class="cliploader" :loading="loading" :color="color" :size="size"></clip-loader>
                  </button>
                  <p class="no-tengo-placa" @click="resetearPlaca($event)">Todavía no tengo placa</p>
                  <p class="respaldo-intercorp">
                    <span> Con el respaldo del grupo</span>
                    <img src="./../../static/media/img/home/respaldo-intercorp.svg" alt="respaldo_intercorp">
                  </p>
                </div>
              </b-form>
          </div>


          <h1><span>Descarga el app</span> y maneja para recibir un descuento de <span>hasta 50%</span> en tu cotización
          </h1>
          
          <div class="btns-banner  d-none  d-lg-block">
            <div class="btn-cotizar" @click="showModalNumeroCelular('1')">
              <span class="cotizar">COTIZAR EN EL APP</span>
              
            </div>
            <div class="btn-quiero-cotizar" @click="showModalQuieroCotizarIzq($event)">
              <span>QUIERO COTIZAR AHORA</span>
            </div>
          </div>

          <p class="subtitulo" @click="showModalHomeVideo()"><span>&#9658;</span>  Ver cómo funciona</p>

        </div>
        <div class="root-der">
          <img class="d-none  d-lg-block" src="./../../static/media/img/root/banner.png" alt="">
          <div class="caja-mobile  d-flex  d-lg-none">
            <img class="" src="./../../static/media/img/root/banner_mobile.png" alt="">
          </div>
          <div class="btns-banner mt-3 d-block  d-lg-none">
            <div class="btn-cotizar" @click="descargarApp('1')">
              <span class="cotizar">COTIZAR</span>
              
            </div>
            <div class="btn-quiero-cotizar" @click="showModalQuieroCotizar($event)">
              <span>QUIERO COTIZAR AHORA</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-pasos  p-47px" style="padding-top: 45px;">
      <div class="home-pasos__titulo">
      </div>

      <div class="home-pasos__beneficios">
        <div class="home-pasos__planes--titulo">
          <p class="como-funciona">Es fácil, en solo 3 pasos</p>
        </div>
        
        <div class="home-pasos__cuerpo   pasos">
          <div class="pasos__item">
            <div class="pasos__item--img">
              <img src="./../../static/media/img/root/descarga.png" alt="lupa">            
            </div>
            <div class="pasos__item--desc">
              <p class="titulo">Descarga el app</p>
              <p class="descripcion">
                Ahora tú tienes el control.  <br>
                Comienza de un minuto. </p>
                
                <!-- <span class="descargar-ahora  d-block  d-lg-none" @click="descargarApp()">Descargar ahora</span>
                <span class="descargar-ahora  d-none  d-lg-block" @click="showModalNumeroCelular()">Descargar ahora</span> -->
            </div>
          </div>
          <div class="pasos__item">
            <div class="pasos__item--img">
              <img src="./../../static/media/img/root/maneja.png" alt="flecha">            
            </div>
            <div class="pasos__item--desc">
              <p class="titulo">Maneja tu carro</p>
              <p class="descripcion">
                Por 3 semanas vamos a medir tu habilidad de manejo desde el app.
              </p>
            </div>
          </div>
          <div class="pasos__item  pb-0">
            <div class="pasos__item--img">
              <img src="./../../static/media/img/root/ahorra.png" alt="candado">            
            </div>
            <div class="pasos__item--desc">
              <p class="titulo">Ahorra </p>
              <p class="descripcion"> Recibe tu cotización, elige tu plan y ¡estás protegido! <br> <span class="aplica-oro-black">Solo aplica a los planes Oro y Black </span> </p>
            </div>          
          </div>
        </div>
      </div>
    </div>

    <div class="home-root"  style="padding-top: 40px">
      <div class="home-root__izq  d-none  d-lg-flex">
        <p class="home-root--titulo">
          Los buenos conductores <br> merecen ahorrar más
        </p>
        <p class="home-root--parrafo">
          Con el App de Interseguro recolectaremos data sobre cómo manejas  para darte un precio a la medida usando solo tu teléfono. 
        </p><br>
        <p  class="home-root--parrafo">
          No te preocupes por manejar menos, preocúpate por manejar bien  y ahorra hasta 50%.
        </p><br>
        <div class="home-root__footer">
          <p  class="home-root--parrafo  footer-parrafo">
            Descarga el app e inicia tu prueba gratis.
          </p>
          <div class="botones-app    d-none  d-lg-flex">
            <div class="ios"  @click="showModalNumeroCelular('btn',1)">
                <img src="./../../static/media/img/root/tienda_ios.png" alt="">
            </div>
            <div class="google  ml-4"  @click="showModalNumeroCelular('btn',2)">
              <img src="./../../static/media/img/root/tienda_google.png" alt="">
            </div>
          </div>
          
        </div>
        <div class="enlace-home  p-47px">
          <span class="conoce-nuestros-planes" @click="sabermas('dkt')">SABER MÁS</span>    
        </div>
      </div>
      <div class="home-root__der">
        <div class="root-img">
          <iframe  class="d-none  d-lg-block"  width="560" height="315"  src="https://www.youtube.com/embed/x0YU3Am_GcI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <span class="d-block d-lg-none ver-video" @click="showModalHomeVideo()">Ver video</span>
        </div>
        <div class="box-btn    d-lg-none">
          <span @click="descargarApp('2')" class="btn-descargar" >DESCARGAR APP AHORA</span>
        </div>
        <div class="enlace-home d-flex  d-lg-none p-47px">
          <span class="mas-informacion" @click="sabermas('mbl')">Mas información</span>              
        </div>
      </div>
    </div>

    <div class="home-beneficios2  p-47px">
      <div class="home-beneficios2__titulo">
        <p>Disfruta de nuestros increíbles beneficios </p>
      </div>
      <div class="home-beneficios2__cuerpo  beneficios2 d-lg-flex">
        <div class="beneficios2__item">
          <div class="img-box">
            <img src="./../../static/media/img/root/inspeccion.png" alt="choferes">
          </div>
          <div class="beneficios-desc">
            <p class="beneficios-titulo">Inspección Digital </p>
        
            <p  class="">Desde tu celular <br> y en solo 5 minutos <span></span></p>
          </div>
          
        </div>
        <div class="beneficios2__item">
          <div class="img-box">
            <img src="./../../static/media/img/root/chofer.png" alt="gruas">
          </div>
          <div class="beneficios-desc">
            <p class="beneficios-titulo">
              Chofer de reemplazo
            </p>
            <p  class="">Hasta 5 choferes <br> de reemplazo al año  <span></span> </p>
          </div>
          
        </div>
        <div class="beneficios2__item">
          <div class="img-box">
            <img src="./../../static/media/img/root/auxilio.png" alt="mecanico">
          </div>
          <div class="beneficios-desc">
            <p class="beneficios-titulo">
              Auxilio mecánico
            </p>    
            <p  class=""><span></span> Te ayudamos en donde estés <br>hasta 2 veces al mes  </p>
          </div>
        </div>
        <div class="beneficios2__item">
          <div class="img-box">
            <img src="./../../static/media/img/root/vivemas.png" alt="">
          </div>
          <div class="beneficios-desc">
            <p class="beneficios-titulo">
              Programa de beneficios 
            </p>     
            <p  class=""><span></span> Descuentos en miles <br> de establecimientos </p>
          </div>
        </div>
      </div>
    </div>

    <div class="home-clientes2 p-47px d-none  d-lg-flex">
        <div class="box-titulo">
          <p class="titulito">¿Qué dicen nuestros clientes?</p>
        </div>

        <div class="box-total">
          <div class="box-slider">
            <img class="escudo-cliente" src="./../../static/media/img/root/clientes.png" alt="">
            <p class="cliente">Andrea Maldonado</p>
            <p class="ahorro">Ahorró US$210</p>
            <p class="descripcion">‘’Me sorprendí que pudiera ahorrar tanto, lo recomiendo.‘’</p>
          </div>
          <div class="box-slider">
            <img class="escudo-cliente" src="./../../static/media/img/root/clientes.png" alt="">
            <p class="cliente">Manuel Arana</p>
            <p class="ahorro">Ahorró US$236</p>
            <p class="descripcion">‘’La espera de la cotización valió la pena, ninguna aseguradora me ofrecía este precio‘’</p>
          </div>
          <div class="box-slider">
            <img class="escudo-cliente" src="./../../static/media/img/root/clientes.png" alt="">
            <p class="cliente">Jimena Ortega</p>
            <p class="ahorro">Ahorró US$180</p>
            <p class="descripcion">‘’La cobertura es buenísima, hasta ahora no he tenido ningún problema cuando pido asistencias.‘’</p>
          </div>
        </div>
    </div>

    <div class="home-clientes">
       <div class="clientes-slider    d-block  d-lg-none">
        <div class="box-titulo">
          <p>¿Qué dicen nuestros clientes?</p>
        </div>
        <b-carousel
          id="carousel-fade"
          class="carousel-clientes"
          v-model="slideBeneficios"
          :interval="4000"
          controls
          indicators
          he
          background="transparent"
          style="text-shadow: 1px 1px 2px #333; color: red;"
        >

          <b-carousel-slide class="carousel-clientes__item" img-blank-color='transparent'>
            <div>
              <div class="box-slider">
                <img class="escudo-cliente" src="./../../static/media/img/root/clientes.png" alt="">
                <p class="cliente">Andrea Maldonado</p>
                <p class="ahorro">Ahorró US$210</p>
                <p class="descripcion">‘’Me sorprendí que pudiera ahorrar tanto, lo recomiendo.‘’</p>
              </div>
            </div>
          </b-carousel-slide>

          <b-carousel-slide class="carousel-clientes__item" img-blank-color='transparent'>
            <div>
              <div class="box-slider">
                <img class="escudo-cliente" src="./../../static/media/img/root/clientes.png" alt="">
                <p class="cliente">Manuel Arana</p>
            <p class="ahorro">Ahorró US$236</p>
            <p class="descripcion">‘’La espera de la cotización valió la pena, ninguna aseguradora me ofrecía este precio‘’</p>
              </div>
            </div>
          </b-carousel-slide>

          <b-carousel-slide class="carousel-clientes__item" img-blank-color='transparent'>
            <div>
              <div class="box-slider">
                <img class="escudo-cliente" src="./../../static/media/img/root/clientes.png" alt="">
                <p class="cliente">Jimena Ortega</p>
                <p class="ahorro">Ahorró US$180</p>
                <p class="descripcion">‘’La cobertura es buenísima, hasta ahora no he tenido ningún problema cuando pido asistencias.‘’</p>
              </div>
            </div>
          </b-carousel-slide>

        </b-carousel>
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

    <b-modal
      id="modalHomeVideo"
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="modalHomeVideo"
    >
      <div class="modal-content modalHomeVideo">
        
        

        <div class="modal-body">
          <div>
            <div class="close" @click="hidemodalHomeVideo()">
              X
            </div>
            <div id="etiqueton" class="endosoSesion">
              <iframe width="560" height="450" src="https://www.youtube.com/embed/x0YU3Am_GcI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div class="row"></div>
      </div>
    </b-modal>

    <b-modal title="Bootstrap-Vue"
        hide-footer
        hide-header
        ref="modalQuieroCotizar"
        id="modalQuieroCotizar">
        <div class="modal-content">
            <b-btn class="mt-3 modal-close" @click="hideModalQuieroCotizar()" style="background: transparent; border: none;">
              <img src="./../../static/media/img/root/close.png"
                  width="50"
                  alt="icon close"
                  class=""/>
              </b-btn>
            <div class="modal-body">
                <div class="box-formCotizador">
                  <b-form class="formCotizador">                              
                    <h1 class="formCotizador-titulo">Cotiza tu seguro vehicular ahora</h1>
                    <b-form-group label-for="placa">
                        <b-form-input
                          id="vehicleModelPlate"
                          class="text-uppercase form-control  text-center"
                          @keyup.native="consultarPlaca($event,750)"
                          maxlength="6"
                          autocomplete="off"
                          type="text"
                          v-model="item.plateNumber"                    
                          required
                          placeholder="Ingresa tu Placa"
                          name="Placa"
                          aria-label="placa"                
                          autofocus
                      ></b-form-input>
                    </b-form-group>
                    <div class="box-btn-homeForm">
                      <button
                        type="button"
                        @click="onSubmit"
                        class="btn-home-cotizar"
                      >
                        COTIZAR
                          <clip-loader class="cliploader" :loading="loading" :color="color" :size="size"></clip-loader>
                      </button>
                      <p class="no-tengo-placa  mt-3" @click="resetearPlaca($event)">Todavía no tengo placa</p>
                      <p class="respaldo-intercorp mt-3">
                        <span> Con el respaldo del grupo</span>
                        <img src="./../../static/media/img/home/respaldo-intercorp.svg" alt="respaldo_intercorp">
                      </p>
                    </div>
                  </b-form>
                </div>
            </div>
        </div>
    </b-modal>

  </div>
</template>

<script>
  export default {
    layout: "InterseguroFlujo",
      data () {
          return {
            action: '',
            mostrarMensajeEnviado: false,
            inputNumeroCelular: '',
            placeholderNumeroCelular: 'Ingresa tu número de télefono',
            mostrarModalFake: false,
            mostrarCapaModal: false,
            loading: false,
            color: "#00ADEE",
            sizePulse: "45px",
            size: "30px",
            slideBeneficios:0,
            slide:0,
            flagCloseListon: 0,
            item:{
              plateNumber:'',
              email:''
            },
            saveVehicle:{},
            saveCliente:{}
          }
      },
      components: {},
      created() {
      },
      methods: {
        enviarNumeroCelular(param){
          if (this.inputNumeroCelular.length == 9) {
            this.$store.dispatch('common/enviarMsjCelular',this.inputNumeroCelular).then((res)=>{
              if (res.data.code == 0) {
                this.mostrarMensajeEnviado = true
                window.dataLayer = window.dataLayer || [ ];
                dataLayer.push({
                  'event': 'home_recibiras_msj_texto',
                  'category': 'UI :: Home',
                  'action': this.action,
                  'label': 'Popup descargar app'
                })
                setTimeout(() => {
                  this.mostrarMensajeEnviado = false
                  this.$refs.modalNumeroCelular.hide();
                  this.inputNumeroCelular = ''
                }, 2000);
              }else{
                this.$swal({
                  title: "Ups!",
                  text: "Tenemos algunos problemas, vuelvo a intentarlo mas tarde",
                  type: "warning",
                  showCancelButton: false,
                  confirmButtonColor: "#2177CC",
                  confirmButtonText: "OK"
                })
                this.inputNumeroCelular = ''
              }
            })
          }else{
            this.$swal({
              title: "Ups!",
              text: "Ingrese un número válido",
              type: "warning",
              showCancelButton: false,
              confirmButtonColor: "#2177CC",
              confirmButtonText: "OK"
            })
            this.inputNumeroCelular = ''
          }          
        },
        descargarApp(param) {
          if (param == '1') {
            window.dataLayer = window.dataLayer || [ ];
            dataLayer.push({
              'event': 'home_cotizar_app_ahora',
              'category': 'UI :: Home',
              'action': 'Click boton',
              'label': 'Cotizar en el app'
            })
          }
          if (param == '2') {
            window.dataLayer = window.dataLayer || [ ];
              dataLayer.push({
                  'event': 'home_descargar_app_ahora',
                  'category': 'UI :: Home',
                  'action': 'Click boton',
                  'label': 'Descargar app ahora'
              })
          }
          var userAgent = navigator.userAgent || navigator.vendor || window.opera;

          if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ){            
            window.location.replace("https://apps.apple.com/pe/app/interseguro-vehicular/id1517921041?l=en");
            return 'iOS';
          }else if( userAgent.match( /Android/i )){
            window.location.replace("https://play.google.com/store/apps/details?id=pe.interseguro.intersegurovehicular&hl=es_PE");
            return 'Android';
          }else{            
            return 'unknown'; 
          }
        },
        showModalNumeroCelular(param, tienda) {
            if (param == 'btn' && tienda == 1) {
              this.action = 'Click iOS'
              window.dataLayer = window.dataLayer || [ ];
              dataLayer.push({
                  'event': 'home_click_btn_ios',
                  'category': 'UI :: Home',
                  'action': 'Click boton',
                  'label': 'iOS'
              })
            }else if(param == 'btn' && tienda == 2){
              this.action = 'Click Android'
              window.dataLayer = window.dataLayer || [ ];
              dataLayer.push({
                'event': 'home_click_btn_android',
                'category': 'UI :: Home',
                'action': 'Click boton',
                'label': 'Android'
              })
            }
            if(param == '1') {
              this.action = 'Cotizar en el app'
              window.dataLayer = window.dataLayer || [ ];
              dataLayer.push({
                  'event': 'home_cotizar_app_ahora',
                  'category': 'UI :: Home',
                  'action': 'Click boton',
                  'label': 'Cotizar en el app'
              })
            }
            this.$refs.modalNumeroCelular.show();
        },
        hideModalNumeroCelular () {
          window.dataLayer = window.dataLayer || [ ];
          dataLayer.push({
              'event': 'home_cerrar_modal_numero_celular',
              'category': 'Home',
              'action': 'Close',
              'label': 'Popup descargar app'
          })
          this.$refs.modalNumeroCelular.hide();
        },

        hideCapaModal(){
          this.mostrarCapaModal = false
          this.mostrarModalFake = false
        },
        showModalQuieroCotizarIzq(){
          this.mostrarCapaModal = true
          this.mostrarModalFake = true
          window.dataLayer = window.dataLayer || [ ];
          dataLayer.push({
              'event': 'home_quiero_cotizar_ahora',
              'category': 'UI :: Home',
              'action': 'Click boton',
              'label': 'Quiero cotizar ahora'
          });

        },
        hideModalQuieroCotizarIzq(){
          // this.mostrarCapaModal = false
          // this.mostrarModalFake = false
        },
        showModalQuieroCotizar(){
          window.dataLayer = window.dataLayer || [ ];
          dataLayer.push({
              'event': 'home_quiero_cotizar_ahora',
              'category': 'UI :: Home',
              'action': 'Click boton',
              'label': 'Quiero cotizar ahora'
          });
          this.$refs.modalQuieroCotizar.show()
        },
        hideModalQuieroCotizar(){
          this.$refs.modalQuieroCotizar.hide()
        },
        pago_datalayer(error_detectado){
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
              event:'Errores',
              category: 'ErroresPago',
              action: error_detectado, 
              error_detectado: error_detectado
          });
        },
        hidemodalHomeVideo() {
          this.$refs.modalHomeVideo.hide()
        },
        sabermas(param){
          if (param == 'dkt') {
            window.dataLayer = window.dataLayer || [ ];
            dataLayer.push({
                'event': 'home_saber_mas',
                'category': 'UI :: Home',
                'action': 'Click',
                'label': 'saber mas'
            })
          }else if (param == 'mbl') {
            window.dataLayer = window.dataLayer || [ ];
            dataLayer.push({
                'event': 'home_mas_informacion',
                'category': 'UI :: Home',
                'action': 'Click',
                'label': 'mas informacion'
            })
          }
          
          this.$nuxt.$router.push({path: "/preguntas-frecuentes"})
        },
        showModalHomeVideo() {
          window.dataLayer = window.dataLayer || [ ];
          dataLayer.push({
              'event': 'home_click_modal_video',
              'category': 'UI :: Home',
              'action': 'Click',
              'label': 'Ver video'
          })
          this.$refs.modalHomeVideo.show()
        },
        hidemodalTerminosCondiciones() {
          this.$refs.modalTerminosCondiciones.hide()
        },
        showModalTerminosCondiciones() {
          this.$refs.modalTerminosCondiciones.show()
          this.$refs.modalNumeroCelular.hide()          
        },
        PaginaVista() {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "pagina_vista",
            "page-url": "/vehicular-app/",
            "page-title": "app"
          });
        },
        onSubmit() {

        },
        resetearPlaca(eve) {
          eve.preventDefault();
          this.$store.dispatch('common/getcreateRemarketing', this.item.email).then(res  => {
            this.$store.commit('common/setCodeRmkt', res.data.body.id)
            this.$nuxt.$router.push({path: "/cotiza/cotizacion-sin-placa"})
          })
        },
        consultarPlaca(event, ms) {  
          if(this.item.plateNumber.length == 6){
            this.loading = true
            this.isDisabled = true
            var self = this
            clearTimeout(self.timer)
            self.timer = setTimeout(function() {
              self.validacionInput(event)
            }, ms)
          }else{
            this.isDisabled =false
          }      
        },
        validacionInput(event) {
          this.item.plateNumber = this.item.plateNumber.replace(/[^a-z0-9\s]/gi, "").replace(/[_\s]/g, "");
          var longitudDePlaca = this.item.plateNumber.length;
          if (longitudDePlaca > 6) {
            this.item.plateNumber = this.item.plateNumber.slice(0, 6)
          } else if (longitudDePlaca == 6) {
            event.preventDefault()

            this.createMail()
            this.updateFields()
            this.getVehicle()  
          }
        },
          updateFields () {
            this.$store.commit('common/setPlateNumber', this.item.plateNumber)
            this.$store.commit('common/setEmail', this.item.email)
          },
          createMail () {
            const fecha = new Date()
            const fechaEnNumeros = fecha.getTime()
            const aleatorio = Math.random() * (10000 - 0) + 0
            const aleatorioFinal = fechaEnNumeros + parseInt(aleatorio)
            const mailGenerado = 'test_' + aleatorioFinal.toString() + '@test.com'
            this.item.email = mailGenerado
            this.$store.commit('common/setEmail', mailGenerado)
          },
          getVehicle () {
            this.$store.dispatch('common/getVehicle', this.item)
            .then((res) =>{
              let respuesta = res.data.body
              /* Code 0 = > el servicio respondio correctamente */
              if (res.data.code == 0) {
                // this.$store.commit('common/setAppDiscount', respuesta.appDiscount)
                if (respuesta.appDiscount == true) {
                  this.$nuxt.$router.push({path: "/app/"+this.item.plateNumber})
                }else{                  
                  /* Existe en nuestra base de datos */                
                  if (respuesta.exists == true) {
                    this.$store.commit('common/setVehicleState', 1)
                    if(respuesta.client.externalId > 0 ){
                      this.$store.commit('common/setOrigenCliente', 2)
                      this.$store.commit('common/setClienteSOAT', respuesta.client)
                      this.$store.commit('common/setDocumentoLocal', respuesta.client.documentNumber)
                      this.$store.commit('common/setEmail',res.data.body.client.emailAddress)
                      
                    }else {
                      this.$store.commit('common/setOrigenCliente', 1)
                    }
                    /* Tiene una poliza activa */
                    if (respuesta.activePolicy === true) {
                      this.$nuxt.$router.push({path: "/placa-registrada"})
                    } else {             
                      this.loading = false
                      if (document.location.hostname == "www.interseguro.pe"){
                        fbq('track', 'CompleteResgistration');
                      }else{
                      }
                      this.$store.commit('common/setPantallaFlujo', 1)
                      this.$nuxt.$router.push("/cotiza/cotizacion/")
                    }
                  }else {
                    if(respuesta.client.externalId > 0 ){
                      this.$store.commit('common/setOrigenCliente', 2)
                    }else{
                      this.$store.commit('common/setOrigenCliente', 1)
                    }          
                    this.$store.commit('common/setCodeRmkt', res.data.body.remarketingId)
                    this.$store.commit('common/setVehicleState', 0)
                    this.loading = false
                    if (document.location.hostname == "www.interseguro.pe"){
                      fbq('track', 'CompleteResgistration');
                    }else{
                    }
                    this.$store.commit('common/setPantallaFlujo', 1)
                    this.$nuxt.$router.push("/cotiza/cotizacion/")
                  }
                }
              }else{

              }
            })

          },
          reportWindowSize(){
            // let activador = false
            // if(document.documentElement.clientWidth < 1024){
            //   activador = true
            //   if (activador == true) {
            //     activador = false
            //   }
              
            // }else{
            //   activador = false
            // }
          }
      },
      computed: {
          
      },
      mounted () {
        this.$store.commit('common/setAppDiscount', 0)
        localStorage.setItem("urlLocal", "/app")
        this.$store.commit('common/setNuevoProducto', true)
        this.$store.commit('common/setDiscountType', '')
        window.addEventListener('resize', this.reportWindowSize)

        this.mostrarModalFake = false
        this.mostrarCapaModal = false
        // this.$store.commit('common/resetState')
        this.$store.commit('common/setBusinessId', 1)
        this.$store.commit('common/setFechaVigencia', '')
        this.$store.commit('common/setPlanSeleccionado', 3)
        this.$store.commit('common/setEntidadFinanciera', {id: 0,name: ''})
        this.$store.commit('common/setCodigoRemarketingGenerado', '')
        this.$store.commit('common/setObjectDigodat', {})
        this.$store.commit('common/setItemElegido', {})
        this.$store.commit('common/setCurrent', null)
        this.$store.commit('common/setFlujoDetectado', 'interseguro')
        this.PaginaVista()
        
        /************************************************************************ */
        /********************* CONFIGURACIONES GLOBALES************************* */
        /************************************************************************ */
        this.$store.commit('common/setCuentasueldo', 'N')
        this.$store.commit('common/setTarjetaoh', 'N')
        this.$store.commit('common/setBusinessId', 1)
        // let objJWT = JSON.parse(localStorage.setItem("jwt",{}))
        if (document.location.hostname == "www.interseguro.pe"){
          window.criteo_q = window.criteo_q || [];
          window.criteo_q.push(
            { event: "setAccount", account: 64802}, // You should never update this line
            { event: "setEmail", email: "" }, // Can be an empty string 
            { event: "setSiteType", type: /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d"},
            { event: "viewBasket", item: [{id: "Home-vehicular", price: "", quantity: 1 }]}
          )
        }
        var url = window.location.pathname
        if(url == "/vehicular/" || url == "/vehicular"){
          localStorage.setItem("urlLocal", "/")
        }
        /************************************************************************ */
        /************************************************************************ */
        /************************************************************************ */

        
        // let objJWT = JSON.parse(localStorage.setItem("jwt",{}))

        /* RESET DE ESTADOS */        
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
        this.createMail()
        this.$store.commit('common/setLeaveMessage',0) 
      }
  }
</script>

<style lang="scss" scope>
p, img{
  margin: 0;
  padding: 0;
}
#modalTerminosCondiciones.fade.show {
    align-items: flex-start;
}
#modalTerminosCondiciones{
  .close-modal{
    position: absolute;
    top: -41px;
    right: -41px;
    height: 61px;
    cursor: pointer;
  }
  .modal-content{
    border: none;
  }
}
.p-47px{
  padding: 47px 0 ;
}
#modalQuieroCotizar{
  display: flex;
  align-items: center;
  justify-content: center;
  .btn-home-cotizar{
    color: white;
  }
  .modal-content{
    border-radius: 20px;
    background: transparent;
    .formCotizador{
      border-radius: 20px;
      height: 286px;
    }
  }
  .no-tengo-placa{
    font-family: 'Omnes Medium';
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #0854c4;
  }
  .respaldo-intercorp{
    font-family: 'Omnes Medium';
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #494a49;
  }
}
#modalNumeroCelular{
  .modal-footer{
    justify-content: center;
  }
  .img-close-modal{
        position: absolute;
        top: -38px;
        right: -38px;
        cursor: pointer;
        width: 50px;
    }
  .condiciones{
    margin-top: 32px;
    .enlaceTerminosCondiciones{
      color: #0854c4;
      cursor: pointer;
    }
      span{
         font-family: 'Omnes Medium';
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.21;
          letter-spacing: normal;
          text-align: center;
          color: #656565;
      }
      a{
        color: #0854c4
      }
    }
  .close-modal{
    position: absolute;
    top: -41px;
    right: -41px;
    height: 61px;
    cursor: pointer;
  }
  .box-mensajeEnviado{
    opacity: 0;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .check-enviado{
      height: 63px;
    }
    p{
      font-family: 'Omnes Regular';
      font-size: 30px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.27;
      letter-spacing: normal;
      text-align: center;
      color: #0854c4;
      margin-top: 34px;
    }
  }
  .mostrarMensajeEnviado{
    display: flex;
    opacity: 1;
  }
  .modal-body{
    position: relative;
  }
  .modal-content{
    border: none;
  }
  .box-img{
    img{
      width: 94px;
    }
  }
  .box-condiciones{
    a span{
      font-family: 'Omnes Regular';
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.21;
      letter-spacing: normal;
      text-align: center;
      color: #0854c4;
    }
  }
  .box-titulo{
    .titulo{
      font-family: 'Omnes Regular';
      font-size: 18px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #0854c4;
      margin: 12px 0;
    }
  }
  .box-input{
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    .input{
      width: 200px;
      height: 43px;
      border-radius: 7px;
      border: solid 0.2px #a7a7a7;

    }
    .enviar{
      display: inline-block;
      width: 180px;
      height: 38px;
      border-radius: 7px;
      background-color: #ea0f90;
      font-size: 18px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 38px;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
      font-family: 'Omnes Regular';
    }
  }
}
.modal-content{
  .box_qr{
      display: flex;
      justify-content: center;
  }
}
.modal-body{
  .boxHome-banner{      
      background-color: #ebf1fb;
      position: relative;
      height: 500px;      
      .home-banner{
        margin: auto;
        background-repeat: no-repeat;
        background-size: 700px;
        background-position-y: bottom;
        background-position-x: right;
        display: flex;
        align-items: center;
        height: 100%;
        flex-direction: column;
        &__izq{
          padding-top: 68px !important;
          height: 500px;
          display: flex;
          align-items: flex-start;
          width: 90%;
          input{
            max-width: 360px;
            width: 100%;
            height: 51px;
            margin: 0 auto!important;
            text-align: center;
          }
          button{
            color: white !important;
            border-color: #ea0c90 !important;
            background-color: #ea0c90 !important;
            width: 360px;
            height: 51px;
          }
          .no-tengo-placa{
            font-size: 16px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.25;
            letter-spacing: normal;
            text-align: center;
            color: #0854c4;
            margin: 16px 0 10px;
            cursor: pointer;
          }
          .respaldo-intercorp{
            font-size: .938rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.33;
            letter-spacing: normal;
            text-align: center;
            color: #494a49;
            span{
              top: 2px;
              position: relative;
            }
          }
        }
        &__der{
          padding-top: 68px !important;
          height: auto;
          display: none;
          align-items: center;
          p{
            font-size: 2.8rem;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.25;
            letter-spacing: -1px;
            text-align: left;
            color: #0855c4;
            font-family: 'Omnes Medium';
          }
        }
      }
    }
    .box-formCotizador{
      width: 100%;
      padding: 0;      
      .titulo-formulario{
        font-family: 'Omnes Medium';
        font-size: 1.5rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: center;
        color: #0854c4;
        margin-top: 25px;
        padding: 0;
        margin: auto;
        padding-top: 18px;
        padding-bottom: 28px;
        position: relative;
        max-width: 438px;
        width: 100%;
        .img-form{
          position: absolute;
          bottom: -32px;
          left: 7px;
          z-index: 0;
          height: 82px;
          display: none;
          img{
            height: 82px;
          }
        }
      }
    }
    .formCotizador{
      padding:2rem 1.5rem;
      max-width: 438px;
      width: 100%;
      height: 296px;
      border-radius: 3rem 0 3rem 0;
      background: #fff;
      position: relative;
      margin: auto;
      z-index: 9999;
      h1{
        font-family: 'Omnes Regular';
        font-size: 1.1rem;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: center;
        color: #0855c4;
        margin-top: 25px;
        margin: 0;
        padding: 0;
        padding-top: 8px;
        padding-bottom: 18px;
      }
      &__msg{
        padding: 7px 14px;
        position: absolute;
        right: -1rem;
        top: -1rem;
        border-radius: 8px 0 8px 0;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,.19);
        background-color: #003aad!important;
        color: white !important;
        font-family: 'Omnes Medium';
      }
      .box-btn-homeForm{
        button{
          border: none !important;
          background-color: #ea0c90!important;
          max-width: 360px;
          width: 100%;
          height: 51px;
          margin: 0 auto!important;
          position: relative;
        }
      }
    }
}
  .listonMobile{
    position: relative;
    img{
        right: 0;
        position: absolute;
        width: 32px;
        animation: listonMobile 1s infinite;
        top: -30px;
    }
    p{
        text-align: center;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.3;
        letter-spacing: normal;
        text-align: center;
        color: #003aad;
        padding: 0;
        margin: 0;
        padding-top: 6px;
    }
  }
  #main-menu{
    display: none;
  }
  p:focus{
    outline: none;
  }
  .modalHomeVideo{
    iframe{
      height: 315px;
      width: 100%;
    }
    .close{
      position: absolute;
      right: -4px;
      top: -10px;
      background: white;
      z-index: 999;
      opacity: 1;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #2b3a41;
      cursor: pointer;
    }
  }

@keyframes updown{
    0%{ transform: translateY(0) }
    50%{ transform: translateY(-4px) }
}
@keyframes listonFondo {
    0% {
        background: #D8E8FA;
    }

    100% {
        background: #B1D4F7;
    }
}
@keyframes listonMobile {
    0% {
        width: 28px;
    }

    100% {
        width: 32px;
    }
}


  
  a{
    text-decoration: none;
    &:hover{
      text-decoration: none;
    }
  }

  .capa-modal{
    display: none;
    position: absolute;
    z-index: 9999;
    width: 100vw;
    height: 100%;
    opacity: 0.31;
    border: solid 1px #707070;
    background-color: #555555;
    transition: all .5s;
    position: fixed;
  }
  .qr{
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    width: 100px;
    height: 100px;
    opacity: 1;
    border: solid 1px #707070;
    background-color: #454A6C;
    transition: all .5s;
    position: fixed;
    right: 0;
    top: 50vh;    
  }
  .banner-root{
    background: #ebf1fb;
    &__body{
      padding-bottom: 24px;
      overflow: hidden;
      padding-top: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .root-izq{
      position: relative;
      .box-modal-fake{
        position: absolute;
        display: none;
        opacity: 0;
        transition: all .5s;
        top: 0;
        left: 0;
        margin : 0;
      }
      .mostrarModalFake{
        opacity: 1;
        transition: all .5s;
        display: block;
      }
      h1{
        font-family: 'Omnes Regular';
        font-size: 24px;
        font-weight: 500;
        line-height: 1.13;
        letter-spacing: normal;
        text-align: center;
        color: #0854c4;
        max-width: 330px;
        span{
          font-family: 'Omnes Medium';
        }
      }
      .subtitulo{
        span{
          background: #d5dae2;
          margin-right: 12px;
          border-radius: 28px;
          width: 28px;
          height: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #a2a2a3;
          font-size: 18px;
          text-align: center;
          padding-left: 4px;
        }
        cursor: pointer;
        font-family: 'Omnes Regular';
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: center;
        color: #6e6d6e;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 16px;
          margin-right: 12px;
        }
      }
      .btn-cotizar{
          cursor: pointer;
          width: 210px;
          height: 52px;
          background-color: #ea0b90;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          .accede-dto{
            font-family: 'Omnes Medium';
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.56;
            letter-spacing: normal;
            text-align: left;
            color: #ffffff;
          }

      }
      .btns-banner{
        margin-top: 24px;
      }
      .btn-quiero-cotizar{
        cursor: pointer;
        border-radius: 3px;
        border: solid 0.5px #ea0b90;
        width: 205px;
        height: 51px;
        color: #ea0b90;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .root-der{
      .caja-mobile{
        overflow: hidden;
        height: 240px;
      }
      img{
        max-width: 280px;
        margin: auto;
      }

      .btn-cotizar{
          cursor: pointer;
          width: 303px;
          height: 52.2px;
          background-color: #ea0b90;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          .accede-dto{
            font-family: 'Omnes Medium';
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.56;
            letter-spacing: normal;
            text-align: left;
            color: #ffffff;
          }

      }
      .btn-quiero-cotizar{
        cursor: pointer;
        border-radius: 3px;
        border: solid 0.5px #ea0f90;
        width: 303px;
        height: 47px;
        color: #ea0f90;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
      }
    }
  }

  .homeRoot{
    font-size: 16px;
    background-color: #fff;
    .enlace-home{
      font-family: 'Omnes Medium';
      display: flex;
      align-items: center;
      justify-content: center;
      .conoce-nuestros-planes{
        font-family: 'Omnes Medium';
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.14;
        letter-spacing: normal;
        text-align: center;
        color: #0854C4;
        cursor: pointer;
        border: 1px solid #0854C4;
        display: inline-block;
        padding: 15px 34px;
      }
      .mas-informacion{
        color: #EA0F90;
        font-family: 'Omnes Medium';
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.14;
        letter-spacing: normal;
        text-align: center;
        cursor: pointer;
        display: inline-block;
        padding: 15px 34px;
      }
      img{
        width: 10px;
        margin-left: 8px;
      }
    }
    .modal-root{
      .box-input{
        display: flex;
        .enviar{

        }
      }
    }
    
    .home-root{
      width: 100%;
      &__footer{
        display: flex;
        .home-root--parrafo{
          color: #454a6c;
          max-width: 215px;
        }
        .botones-app{
          padding-left: 36px;
          img{
            cursor: pointer;
          }
        }
      }
      &--parrafo{
        max-width: 615px;
        font-family: 'Omnes Regular';
        font-size: 21px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: #454a6c;
      }
      &__izq{
        width: 100%;
      }
      &__der{
        width: 100%;
        .root-img{
          display: flex;
          justify-content: center;
          img{
            max-width: 312px;
          }
          .ver-video{
            font-family: 'Omnes Medium';
            font-size: 26px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.27;
            letter-spacing: normal;
            text-align: center;
            color: #0854c4;
            margin-bottom: 30px;
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
        &--box-img{
          width: 100%;
        }
      }
      &--titulo{
        font-family: 'Omnes Medium';
        font-size: 30px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        text-align: left;
        color: #0854C4;
        padding-bottom: 28px;
      }
      
      .botones-app{

      }
    } 
    
    .cliploader{
      width: 100%;
      right: 0;
      height: 51px;
      top: 0px;
    }
    .carousel-indicators li {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    
    .home-pasos{
      background-color: #fff;
      .parrafo-video{
        font-size: 30px; 
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.97;
        letter-spacing: normal;
        text-align: center;
        color: #0667ba !important;
        font-family: 'Omnes Regular';
        cursor: pointer;
        img{
          position: relative;
          top: -7px;
        }
      }
      &__planes--titulo{
        p{
          opacity: 1;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: -0.21px;
          text-align: center;
        }
        .como-funciona{
          font-family: 'Omnes Medium';
          padding-bottom: 16px;
          font-size: 1.3rem;
          font-size: 26px;
          line-height: 1.27;
          text-align: center;
          color: #0854c4;
          max-width: 300px;
          margin: auto;
          padding-bottom: 47px;
        }
        span{
          font-size: 22px;
          letter-spacing: -0.23px;
          color: #00adee;
        }
      }
      .pasos{
        &__item{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          padding-bottom: 32px;
          max-width: 300px;
          margin: auto;
          .aplica-oro-black{
            font-family: 'Omnes Regular';
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.79;
            letter-spacing: normal;
            text-align: center;
            color: #808080;
          }
          &--img{
            width: 75px;
            img{
              width: 70px;
            }
          }
          &--desc{
            width: 100%;
            padding-left: 8px;
            .titulo{
              font-family: 'Omnes Medium';
              color: #454A6C;
              font-size: 20px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.25;
            }            
            .descripcion{
              font-size: 18px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.2;
              letter-spacing: normal;
              color: #454A6C;
              font-family: 'Omnes Regular';
              max-width: 250px;
            }
            .descargar-ahora{
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.56;
              letter-spacing: normal;
              color: #333333;
              text-decoration: underline;
              font-family: 'Omnes Regular';
              display: inline-block;
              width: 100%;
              cursor: pointer;
            }
          }
          &--flecha{
            img{
              width: 14px;
            }
          }          
        }
      }
      .planes{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 20px;
        padding-top: 34px;
        &__item{
          width: 100%;
          margin-bottom: 48px;
          max-width: 380px;
        }        
        .plata, .oro, .black{
          .plan--cabecera{
            height: 45px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .plata{        
          .plan--cabecera{  
            background-color: #b1b1b1;
            &:before{
              background-image: url(./../../static/media/img/home/plata_dto.png);
            } 
            &:after{
              background-image: url(./../../static/media/img/home/plata.png);
              bottom: -9px;
            }            
          }
        }
        .oro{        
          .plan--cabecera{  
            background-color: #e6ac38;
            &:before{
              background-image: url(./../../static/media/img/home/oro_dto.png);
            }
            &:after{
              background-image: url(./../../static/media/img/home/oro.png);
            } 
          }
        }
        .black{        
          .plan--cabecera{  
            background-color: #27362d;
            &:before{
              background-image: url(./../../static/media/img/home/black_dto.png);
            }
            &:after{
              background-image: url(./../../static/media/img/home/black.png);
            } 
          }
        }
      }
      .plan{
        border-radius: 9px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        min-height: 175px;
        position: relative;
        &--cabecera{
          text-align: center;          
          position: relative;
          &:after{
            content: "";
            position: absolute;
            bottom: -8px;
            width: 100%;
            height: 28px;
            background-size: contain;
            background-repeat: no-repeat;
          }
          &:before{
            content: "";
            position: absolute;
            top: -26px;
            width: 150px;
            height: 32px;
            left: -5px;
            background-size: contain;
            background-repeat: no-repeat;
          }
        }
        &--cuerpo{
          padding: 20px 0;
          p{
            height: 32px;
            font-size: 16px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: -0.16px;
            text-align: left;
            color: #696969;
            width: 85%;
            margin: auto;
            display: flex;
            align-items: center;
            span:nth-child(2){
              padding-left: 8px;
            }
          }
          a{
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.75;
            letter-spacing: normal;
            text-align: center;
            color: #ea0b90;
            text-decoration: underline;
            width: 100%;
            text-align: center;
            display: inline-block;
            position: absolute;
            bottom: 16px;
            font-family: 'Omnes Regular';
          }
        }
      }
    }
    .home-talleres{
      background-color: #f1f7ff;
      padding-top: 18px;
      .home-talleresBox{
        background-color: #f1f7ff;
        width: 100%;
        margin: auto;
      }
      &__desc{
        p{
          text-shadow: 0 3px 6px rgba(62, 135, 240, 0.08);
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.09;
          letter-spacing: normal;
          text-align: center;
          color: #01adee;
        }
      }
      &__boxBtn{
        text-align: center;
        margin-top: 16px;
        margin-bottom: 24px;
      }
      .btn-talleres{
        border-radius: 2px;
        background-color: #f1f7ff;
        color:#ea0b90;
        border: 1px solid #ea0b90;
        display: inline-block;
        height: 49px;
        width: 220px;
        line-height: 49px;
        font-size: 18px;
        text-align: center;
        transition: all .75s;
        &:hover{
          background-color: #ea0b90;
          color:#f1f7ff;
          border: 1px solid #f1f7ff;
          transition: all .75s
        }
      }
    }    
    .home-ofertas{
      padding: 24px 0 0;
      background: white;
      &__titulo{
        p{
          text-shadow: 0 3px 6px rgba(62, 135, 240, 0.08);
          font-size: 22px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 0.82;
          letter-spacing: normal;
          text-align: center;
          color: #505050;
        }
      }
      &__cuerpo{
        position: relative;        
        min-height: 240px;
        display: flex;
        justify-content: center;        
        &--palmeraIzq{
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100px;
        }
        &--palmeraDer{
          position: absolute;
          right: 0;
          bottom: 0;
          width: 100px;
        }
        &--slider{
          .box{
            margin: auto;
            display: flex;
            justify-content: center;
            overflow: hidden;
            width: 65%;
            &__descripcion{
              padding: 12px 12px 0 12px; 
              font-size: 16px;
              height: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              p{
                text-align: center;
              }
            }
            &__item{
              overflow: hidden;
              box-shadow: 0 8px 22px 0 rgba(35, 45, 65, 0.18);
              border-radius: 5px;
              margin: 24px;
              img{
                width: 100%;
              }
            }
          }
        }
      }
    }
    .home-clientes2{
      max-width: 80%;
      margin: auto;
      flex-direction: column;
      .box-titulo{
        margin-bottom: 48px;
      }
      .titulito{
        font-size: 36px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.89;
        letter-spacing: normal;
        text-align: center;
        color: #0854c4;
      }
      .box-total{
        margin-top: 32px;
        display: flex;
        justify-content: space-around;
      }
      .box-slider{
        padding: 0 30px;
        position: relative;
        display: flex;
        align-items: flex-start;
        width: 300px;
        height: 240px;
        border-radius: 12px;
        border: solid 0.8px #0854c4;
        flex-direction: column;
        justify-content: center;
        .escudo-cliente{
          position: absolute;
          top: -12px;
          width: 24px;
          left: calc(159px - 12px);
        }
        .cliente{
          font-family: 'Omnes Medium';
          font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.11;
          letter-spacing: normal;
          text-align: left;
          color: #555555;
        }
        .ahorro{
          margin-top: 4px;
          height: 18px;
          font-family: 'Omnes Medium';
          font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.11;
          letter-spacing: normal;
          text-align: left;
          color: #0854c4;
        }
        .descripcion{
          margin-top: 8px;
          font-family: 'Omnes Medium';
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.25;
          letter-spacing: normal;
          text-align: left;
          color: #555555;
        }
      }
    }
    .home-clientes{
      padding-top: 24px;
      .box-slider{
        padding: 0 30px;
        position: relative;
        display: flex;
        align-items: flex-start;
        width: 300px;
        height: 240px;
        border-radius: 12px;
        border: solid 0.8px #0854c4;
        flex-direction: column;
        justify-content: center;
        .escudo-cliente{
          position: absolute;
          top: -12px;
          width: 24px;
          left: calc(159px - 12px);
        }
        .cliente{
          font-family: 'Omnes Medium';
          font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.11;
          letter-spacing: normal;
          text-align: left;
          color: #555555;
        }
        .ahorro{
          margin-top: 4px;
          height: 18px;
          font-family: 'Omnes Medium';
          font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.11;
          letter-spacing: normal;
          text-align: left;
          color: #0854c4;
        }
        .descripcion{
          margin-top: 8px;
          font-family: 'Omnes Medium';
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.25;
          letter-spacing: normal;
          text-align: left;
          color: #555555;
        }
      }
      .box-titulo{
        p{
          font-family: 'Omnes Medium';
          font-size: 26px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.23;
          letter-spacing: normal;
          text-align: center;
          color: #0854c4;
        }
      }
      .carousel-clientes{
        height: 300px !important;
        margin-top: 24px;
        .box-slider{
          padding: 0 30px;
          position: relative;
          display: flex;
          align-items: flex-start;
          width: 308px;
          height: 240px;
          border-radius: 12px;
          border: solid 0.8px #0854c4;
          flex-direction: column;
          justify-content: center;
          .escudo-cliente{
            position: absolute;
            top: -12px;
            width: 24px;
            left: calc(159px - 12px);
          }
          .cliente{
            font-family: 'Omnes Medium';
            font-size: 18px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.11;
            letter-spacing: normal;
            text-align: left;
            color: #555555;
          }
          .ahorro{
            margin-top: 4px;
            height: 18px;
            font-family: 'Omnes Medium';
            font-size: 18px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.11;
            letter-spacing: normal;
            text-align: left;
            color: #0854c4;
          }
          .descripcion{
            margin-top: 8px;
            font-family: 'Omnes Medium';
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.25;
            letter-spacing: normal;
            text-align: left;
            color: #555555;
          }
        }
        &__item{
          height: 300px !important;          
          .carousel-caption {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-shadow: none !important;
            div{
              img{
                width: 110px;
              }
              p{
                transition: all .75s;
                font-size: 18px;
                font-weight: 400;
                font-stretch: 400;
                font-style: normal;
                line-height: 0.89;
                letter-spacing: normal;
                text-align: center;
                color: #696969;    
                font-family: 'Omnes Regular';        
              }
            }
          }
        }
      }
    }
    .home-beneficios2{
      background-color: #f7fbff;
      &__titulo{
        margin-bottom: 40px;
      }
      .box-titulo{
        p{
          font-family: 'Omnes Medium';
          font-size: 26px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.23;
          letter-spacing: normal;
          text-align: left;
          color: #0854c4;
        }
      }
      
      &__titulo{
        p{
          font-family: 'Omnes Medium';
          font-size: 26px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1;
          letter-spacing: normal;
          text-align: center;
          color: #0854c4;
        }
      }
      .beneficios2{
        display: flex;
        justify-content: center;
        margin: auto;
        flex-direction: column;
        align-items: center;
        &__item{
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          max-width: 320px;
          margin: auto;
          margin-bottom: 32px;
          .img-box {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 80px;
              img{
                width: 100%;
                padding: 0 10px;
              }
          }
          .beneficios-desc{
            width: 240px;
            margin-top: 12px;
          }
          .beneficios-titulo{
            font-size: 20px;
            font-family: 'Omnes Medium';
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.2;
            letter-spacing: normal;
            color: #454A6C;
          }
          &:hover{
            img{
              transition: all 0.5s;
            }
            span{
              transition: all 0.5s;
              font-weight: 500;
              font-family: 'Omnes Medium';
            }
          }
          img{
            width: 100px;
          }
          p{
            transition: all .75s;
            font-size: 18px;
            font-weight: 400;
            font-family: 'Omnes Regular';
            font-stretch: 400;
            font-style: normal;
            line-height: 1.2;
            letter-spacing: normal;
            text-align: left;
            color: #454A6C;            
          }
        }
      }      
    }
  }
  #vehicleModelPlate{
    font-family: 'Omnes Regular';
    font-size: 18.5px;
    color: #495057;
  }
  #vehicleModelPlate:focus {
    border-color: #0855c4 !important;
    border-width: 1.5px !important;
  }
  @media (min-width: 992px) {
    .homeRoot{
      .home-beneficios2{
        .beneficios2{
          flex-direction: row;
          flex-wrap: wrap;
          &__item{
            width: 50%;
          }
        }
      }
      
      .home-root{
        margin: auto;
        display: flex;
        width: 80%;
        &__izq{
          display: flex;
          flex-direction: column;
          width: 60%;
          .google{
            img{
              width: 100px;
            }
          }
          .ios{
            img{
              width: 100px;
            }
          }
        }
        &__der{
          padding-top: 10px;
          width: 40%;
          &--box-img{
            width: 100%;
          }
          .enlace-home{
            justify-content: flex-start;
            display: none;
          }
        }
        &--titulo{
          font-size: 30px;
        }
        &--parrafo{
          font-size: 21px;
        }
        .botones-app{
          
        }
      } 
      .boxHome-banner{      
        background-color:  rgba(8,85,196,.1);
        height: auto;
        .home-banner{
          flex-direction: row;
          padding-left: 45px;
          &__izq{
            padding-top: 68px !important;
            height: calc(81vh);
            display: flex;
            align-items: center;
            width: auto;            
            input{
              width: 360px;
              height: 51px;
              margin: 0 auto!important;
              text-align: center;
            }
            button{
              color: white !important;
              border-color: #ea0c90!important;
              background-color: #ea0c90!important;
              width: 360px;
              height: 51px;
            }
            .no-tengo-placa{
              font-size: 16px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.25;
              letter-spacing: normal;
              color: #0854c4;
              margin: 24px 0;
            }
            .respaldo-intercorp{
              font-size: .938rem;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.33;
              letter-spacing: normal;
              text-align: center;
              color: #494a49;
              font-family: 'Omnes Regular';
            }
          }
          &__der{
            padding-top: 68px !important;
            height: calc(81vh);
            display: flex;
            -webkit-box-align: center;
            background-size: 90%;
            background-image: url(/vehicular/_nuxt/static/media/interseguroVehicular_v2/banner_img.svg);
            background-repeat: no-repeat;
            background-position-y: bottom;
            background-position-x: right;
            width: 100%;
            align-items: flex-start;
            .box-titulo{
              padding-top: 150px;
              padding-left: 24px;
            }
            p{
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.25;
              letter-spacing: -1px;
              text-align: left;
              color: #0855c4;
            }
          }
        }
      }
      .box-formCotizador{
        padding: 0;
        .titulo-formulario{
          display: none;
        }
      }
      .formCotizador{
        padding: 2.375rem;
        width: 438px;
        height: 360px;
        background: #fff;
        position: relative;
        z-index: 9999;
        h1{
          font-size: 1.35rem;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.25;
          letter-spacing: normal;
          text-align: center;
          color: #003aad;
          
        }
        &__msg{
          padding: 7px 0;
          position: absolute;
          right: -1rem;
          top: -1rem;
          border-radius: 8px 0 8px 0;
          box-shadow: 0 4px 4px 0 rgba(0,0,0,.19);
          background-color: #0855c4 !important;
          color: white !important;
          width: 220px;
          height: 40px;
          text-align: center;
          font-size: 1.4rem;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.25;
          letter-spacing: -0.4px;
          color: #ffffff;
        }
        .box-btn-homeForm{
          button{
            border-color: #ea0c90!important;
            background-color: #ea0c90!important;
            max-width: 360px;
            width: 100%;
            height: 51px;
            margin: 0 auto!important;
            border: none;
          }
        }

      }
    }
  }
  @media (min-width: 1024px) {
    .qr{
      display: flex;
    }
    .banner-root{
      &__body{
        padding-bottom: 0;
        padding-top: 120px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: 578px;
        
      }
      .root-izq{
        padding-right: 12px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 305px;
        h1{
          text-align: left;
          font-size: 48px;
          max-width: 450px
        }
        .subtitulo{
          justify-content: flex-start;
          max-width: 340px;
          text-align: left;
        }
        .btns-banner{
          width: 430px;
          display: flex !important;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 48px;
          margin-bottom: 24px;
        }
      }
    }
    .home-root{
      &__der{
        .enlace-home{
          justify-content: flex-start;
          display: none;
        }
      }
    }
    .homeRoot{
      .formCotizador{
        padding-top: 60px;
        height: 334px;
        border-radius: 35px 0 35px;
        .formCotizador-titulo{
          font-size: 24px;
          max-width: 100%;
          color: #0854c4;
          margin-bottom: 15px;
        }
        .no-tengo-placa{
          font-family: 'Omnes Medium';
          font-size: 16px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.25;
          letter-spacing: normal;
          text-align: center;
          color: #0854c4;
          margin-top: 19px;
        }
        .respaldo-intercorp{
          font-family: 'Omnes Regular';
          font-size: 15px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.27;
          letter-spacing: normal;
          text-align: center;
          color: #494a49;
          margin-top: 15px;
        }
        .btn-home-cotizar{
          cursor: pointer;
          color: white;
        }

      }
      &__der{
        .enlace-home{
          justify-content: flex-start;
          display: none;
        }
      }
      .enlace-home{
        justify-content: flex-start;        
      }
      .home-banner{
        padding-left: 65px;
        
      }
      .home-portada{
        .yomequedoencasa{
          display: block;
        }
        &__form{
          background-image: url(./../../static/media/interseguroVehicular_v2/autopista_desktop.png);
          position: relative;          
          background-size: contain;
          background-repeat: round;
          border-radius: 0;
          display: flex;
          align-items: flex-start;
          height: 370px;
          padding: 14px 0 0 5%;
          .portada-form{
            width: 50%;
          }
        }
      }
      .home-pasos{
        &__beneficios{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pasos{
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width: 80%;
          margin: auto;
          align-items: flex-start;
          &__item{
            margin: initial;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            width: 33%;
            padding-left: 0;
            justify-content: center;
            max-width: 314px !important;
            padding-bottom: 0;
            &--flecha{
              position: absolute;
              right: 0;
            }
            &--desc{
              .titulo{
                text-align: left;
                font-size: 25px;
              }
              .descripcion{
                text-align: left;
                font-size: 18px;
                margin-top: 8px;
                max-width: 260px;
              }
              .descargar-ahora{
                text-align: left;
              }
            }
          }
          
        }
        .planes{
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 5%;
          justify-content: space-around;
          align-items: flex-end;
          &__item{
            max-width: 270px;
            .black{
              .plan--cuerpo{
               padding-top: 8px; 
              }
            }
            .oro{
              .plan--cuerpo{
                padding-top: 8px;
              }
            }
          }
        }        
        .plan--cuerpo{
          p{
            height: auto;
            width: 74%;
            span{
              font-size: 15px;
            }
            .check{
              font-weight: 600;
              color: #696969 !important;
            }
          }
          .incluye{
            font-size: 19px;
            span{
              color: #00adee;
              font-size: 26px;
              font-weight: 600;
              padding-right: 3px;
            }
          }
        }
        &__planes{
          &--titulo{
            p{
              text-align: left;
              font-size: 2.4rem;
            }
          }
        }
        .plata{
          min-height: 330px;
        }
        .oro{
          min-height: 360px;
        }
        .black{
          min-height: 390px;
        }
      }

      .home-talleres{
        background-color: #fff;
        .home-talleresBox{
          background-color: #f1f7ff;
          width: 90%;
          border-radius: 12px;
          display: flex;
          align-items: center;
        }
        &__img{
          img{
            height: 184px;
            width: inherit;
          }
        }
        &__desc{
          p{
            text-align: left;
            padding-left: 30px;
          }
        }
        .btn-talleres{
          height: 44px;
          line-height: 44px;
          width: 220px;
        }
      }
      
      .home-ofertas{
        background-image: url(./../../static/media/img/home/ofertas_auto.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 50%;
        background-position-y: bottom;
        &__titulo{
          p{
          }
        }
        &__cuerpo{
          min-height: 310px;
          &--palmeraIzq{
            width: 180px;
          }
          &--palmeraDer{
            width: 180px;
          }
        }
        .box{
          width: 65%;
          margin: auto;
          &__item{
            overflow: hidden;
            box-shadow: 0 8px 22px 0 rgba(35,45,65,.18);
            border-radius: 5px;
            img{
              width: 100%;
            }
          }
        }
      }
      .home-pasos .plan--cabecera:after {
        bottom: -15px !important;
      }
      .home-pasos .planes .black .plan--cabecera:after {
        bottom: -8px !important;
      }
      .home-clientes2 .box-slider{
        width: 250px;
      }
      .home-clientes2 .box-slider .escudo-cliente {
        left: calc(125px - 12px);
      }
    }
  }
  @media (min-width: 1200px) {
    #modalNumeroCelular{
      .modal-footer{
      }
      .img-close-modal{
      }
      .condiciones{
          span{
          }
          a{
          }
        }
      .close-modal{
      }
      .box-mensajeEnviado{
        .check-enviado{
        }
        p{
        }
      }
      .mostrarMensajeEnviado{
      }
      .modal-body{
      }
      .modal-content{
      }
      .box-img{
        img{
        }
      }
      .box-condiciones{
        a span{
        }
      }
      .box-titulo{
        .titulo{
          font-size: 24px;
        }
      }
      .box-input{
        .input{
        }
        .enviar{
        }
      }
  }

    .banner-root{
      &__body{
        justify-content: center;
      }
      .root-izq{
        padding-right: 12px;
        height: 412px;
        padding-top: 20px;
        .subtitulo{
          max-width: 450px;
        }
        h1{
          max-width: 620px;
        }
      }
      .root-der{
        min-width: 340px;
        img{
          max-width: 410px;
          max-height: 540px;
          position: relative;
          bottom: -30px;
        }
      }
      
    }
    .home .home-clientes2 .box-total {      
      display: flex;
      justify-content: space-around;
      width: 96%;
      margin: auto;
    }
    
    .listonMobile{
      display: none;
    }
    .modalHomeVideo{
      iframe{
        height: 450px;
        width: 700px;
      }
    }
    
    .homeRoot{
      .home-root{
        width: 1200px;
        &__izq{
          .google{
            img{
              width: 140px;
            }
          }
          .ios{
            img{
              width: 140px;
            }
          }
        }
      }
      .home-beneficios2{
        .beneficios2{
          max-width: 1200px;
          flex-direction: row;
          padding: 0;
          margin-top: 20px;
          &__item{
            margin-bottom: 0;
            width: 25%;
            flex-direction: column;
            .beneficios-titulo{
              font-size: 25px;
              margin: 8px 0;
            }
            .img-box{
              width: initial;
              height: 110px;
            }
            
          }
          .beneficios-desc{
            width: initial;
            p{
              text-align: center;
            }
          }
        }
      }
      .boxHome-banner{        
        .home-banner{
          background-image: url(./../../static/media/interseguroVehicular_v2/banner_img.svg);
          background-size: 50%;
          padding: 0 1.5rem;
          padding-left: 65px;
          &__der{
            background: transparent;
            margin-left: 0;
            padding-left: 1rem;
            align-items: center;
            p{
              font-size: 2.6rem;
            }
            .box-titulo{
              padding: 0;
            }
          }
        }
      }
      .formCotizador{
        height: 360px;
      }

      .home-pasos{
        padding-top: 48px;
        .pasos{
          width: 100%;
          max-width: 1200px;
          justify-content: space-between;
          &__item{
            max-width: 360px !important;
          }
        }
        &__planes{
          &--titulo{
            .como-funciona{
              font-size: 36px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.25;
              letter-spacing: normal;
              text-align: left;
              color: #0854c4;
              max-width: 100%;
            }
            span{
              font-size: 44px;
            }
            p{
              font-size: 28px;
            }
          }
        }
        .planes{
          margin-top: 20px;
          padding: 0 10%;
          &__item{
            max-width: 310px !important;
          }
        }
        .plan{
          min-height: 330px;
          &--cabecera{
            &:after{
              bottom: -9px;
            }
            p{
              font-size: 31px;
            }
          }
          &--cuerpo{
            p{
              height: auto;
              width: 74%;
              span{
                font-size: 18px;
              }
              .check{
                font-weight: 600;
                color: #696969 !important;
              }
            }
            .incluye{
              font-size: 19px;
              span{
                color: #00adee;
                font-size: 30px;
                font-weight: 600;
              }
            }
          }
        }
        
        .plata{
          min-height: 330px;
        }
        .oro{
          min-height: 360px;
        }
        .black{
          min-height: 390px;
        }
      }

      .home-talleres{
        padding: 0 10%;
        .home-talleresBox{
          width: 94%;
        }
      }
      
      .home-beneficios2{
        background-color: #f7fbff;
        &__titulo{
          p{
            font-size: 36px;
          }
        }
        .carousel-clientes{
          &__item{
            .carousel-caption{
              div{
                img{
                  width: 84px;
                }
              }
            }
          }
        }
      }
      .home-ofertas{
        &__titulo{
          height: 83px;
          p{
            font-size: 36px;
          }
        }
        &__cuerpo{
          min-height: 410px;
        }
      }
    }

    .carousel-caption {
      top: 20px;
    }
    .home .home-pasos .planes .oro .plan--cabecera:after {
      bottom: -12px !important;
    }
  }

  @media (min-width: 1366px) {
    .home .home-clientes2 .box-total { 
      width: 84%;
      margin: auto;
    }
    .home .home-clientes2 .box-slider{
      width: 270px;
    }
    .home  .home-clientes2 .box-slider .escudo-cliente {
      left: calc(135px - 12px);
    }
    .homeRoot{
      .home-pasos{
        
        .planes{
          padding: 0 10%;
        }
      }
      .home-talleres{
        .home-talleresBox{
          width: 82%;
        }
      }
    }
  }

  select:focus, textarea:focus, input[type="text"]:focus, input[type="password"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="date"]:focus, input[type="month"]:focus, input[type="time"]:focus, input[type="week"]:focus, input[type="number"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="color"]:focus, .uneditable-input:focus {
    box-shadow: none;
    outline: 0 none;
  }
  @media (min-width: 1440px) {
    .homeRoot{
      .boxHome-banner{              
        .home-banner{
          background-image: url(./../../static/media/interseguroVehicular_v2/banner_img.svg);
          background-size: 50%;
          padding-left: 128px;
          max-width: 1440px;
          background-position-y: 310px;
          background-size: 30%;
          &__der{
            background: transparent ;
            margin-left: 0;
            padding-left: 3rem;
            p{
              font-size: 2.7rem;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.25;
              letter-spacing: normal;
              text-align: left;
              color: #0854c4;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1900px) {
    .homeRoot{
      .boxHome-banner{              
        .home-banner{
          padding-left: 0;
          &__der{
            background: transparent ;
            margin-left: 0;
            padding-left: 3rem;
            p{
              font-size: 3rem;
            }
          }
        }
      }
    }
  }

  @media (min-height: 768px) and (min-width: 992px){
    .homeRoot{
        .boxHome-banner{
          .home-banner{
            &__izq{
              height: calc(100vh - 290px);
            }
            &__der{
              height: calc(100vh - 290px);
            }
          }
        }
    }
  }
</style>