<template>
  <div>
    <div class="banner-pf">
      <div  class="contenedor">
          <h2 class="titulo">Estamos listos para ayudarte</h2>
          <p  class="descripcion">
            ¿Tienes dudas sobre Seguro Vehicular? Encuentra toda la información aquí.
          </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
    .banner-pf{
        background: #00C450;
        .contenedor{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 120px;      
        }
        .titulo{
            color: #fff;
            font-size: 23px;
            font-weight: 600;
            text-align: center;
        }
        .descripcion{
            color: #fff;
            font-size: 13.5px;
            font-weight: 300;
            letter-spacing: .1px;
            line-height: 18px;
            width: 670px;
            text-align: center;
            max-width: 250px;
        }
    }
    @media (min-width: 1024px) {
        .banner-pf{         
            background: #00C450;
            .contenedor{
                margin: auto;
                max-width: 1200px;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                height: 248px;
                padding-left: 4rem;
                .titulo{
                    text-align: left;
                    font-size: 2.4rem;
                }
                .descripcion{
                    margin-top: 24px;
                    font-size: 1.1rem;
                    text-align: left;
                    max-width: 100%;
                }
            }
        }
    }
</style>