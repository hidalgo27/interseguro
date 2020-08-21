<template lang="pug">
  #text-links
    div(v-for="(item,key) in itemsMenu" :key="item.id")
      router-link.omnes-medium(:to="'/preguntas-frecuentes/'+item.to" target="_self" class="links-text")
        div
          img(v-bind:src="item.src" style="width: auto ; max-height: 38px; max-width: 38px; padding-right: 0; margin-right: 14px;" alt='seguro vehicular')
          span {{item.title}}
</template>

<script>
export default {
  data () {
    return {
      itemsMenu: [
        {
          title : "App Interseguro Vehicular",          
          id: "accordeon1",
          to: "app-interseguro-vehicular",
          src: require("./../../../static/media/img/root/pf/app_is_vehicular.png")
        },
        {
          title: "Como comprar un Seguro Vehicular",          
          id: "accordeon2",
          to: "como-comprar-un-seguro-vehicular",
          src: require("./../../../static/media/img/root/pf/comprar_is_vehicular.png")
        },
        {
          title: "Ya tengo mi Seguro Vehicular Interseguro",          
          id: "accordeon3",
          to: "ya-tengo-mi-seguro-vehicular-interseguro",
          src: require("./../../../static/media/img/root/pf/tengo_is_vehicular.png")
        },
        {
          title: "Coberturas de Seguro Vehicular",
          id: "accordeon4",
          to: "coberturas-de-seguro-vehicular",
          src: require("./../../../static/media/img/root/pf/cobertura.png")
        },
        {
          title: "Asistencias de Seguro Vehicular",
          id: "accordeon5",
          to: "asistencias-de-seguro-vehicular",
          src: require("./../../../static/media/img/root/pf/asistencias.png")
        },
        {
          title: "Inspección Vehicular",
          id: "accordeon6",
          to: "inspeccion-vehicular",
          src: require("./../../../static/media/img/root/pf/inspeccion.png")
        },
        
        {
          title: "Siniestros",
          id: "accordeon7",
          to: "siniestros",
          src: require("./../../../static/media/img/root/pf/siniestros.png")
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  #text-links {
    a > div {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      height:44px;
    }
    img {
      filter: contrast(0%)
    }
    span {
      filter: contrast(0%);
      color: #6F6F6F;
      font-size: 18px;
      font-weight: 400;
      line-height: 16px;
      text-align: left;
    }
    img {
      width: 2.8rem;
      padding-right: 14px;
    }
    a:hover {
      text-decoration: none;
    }
    .nuxt-link-exact-active {
      img, span {
        color: #0754C4 !important;
        font-family: 'Omnes Semibold';
        filter: contrast(100%)
      }
    }
  }

  #text-links {
    a > div {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      height:44px;
    }
    img {
      filter: contrast(0%)
    }
    span {
      filter: contrast(0%);
      color: #6F6F6F;
      font-size: 18px;
      font-weight: 400;
      line-height: 16px;
      text-align: left;
    }
    img {
      width: 2.8rem;
      padding-right: 14px;
    }
    a:hover {
      text-decoration: none;
    }
    .nuxt-link-exact-active {
      img, span {
        color: #0754C4 !important;
        font-family: 'Omnes Semibold';
        filter: contrast(100%)
      }
    }
  }
@media (max-width: 519px) {
  #preguntas-frecuentes {
    .container {
      max-width: 1170px;
    }
    .preguntas {
      margin-bottom: 3rem;
      a > div {
        display: flex;
        align-items: center;
        margin-top: 6px;
        margin-bottom: 6px;
        border-radius: 4.2px;
        font-size: 16px;
        box-shadow: 0 1px 4px 0 rgba(14, 90, 151, 0.5);
        padding: 10px;
        height: 45px;
        line-height: 18.2px;
      }
      a span {
        padding-left: 20px;
      }
      h3 {
        font-size: 20px;
        margin-bottom: 0px;
      }
    }
  
    .preguntas-tema {
      a > div {
        text-align: center;
        vertical-align: center;
        color: #0855C4;
        font-size: 18px;
        font-weight: 400;
        line-height: 15.97px;
        border-radius: 3.69px;
        height: 58px;
        box-shadow: 0 1px 4px 0 rgba(14, 90, 151, 0.5);
      }
    }
  
    .preguntas-genericas .rectangulo {
      box-shadow: none;
      border: 1px solid #0855c4;
    }
    h5.titulo {
      padding-bottom: 30px;
    }
    .dropdown-toggle, .dropdown-toggle:focus {
      box-shadow: none;
      border: none;
      background-image: none!important;
    }
    p {
      margin-bottom: 1rem;
    }
  }
}
</style>
