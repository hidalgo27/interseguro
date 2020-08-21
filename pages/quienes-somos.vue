<template>
  <div>
    <section class="contactanos">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="section-header pd-b16">
              <h3 class="section-header__title">Quiénes 
                <span class="span-primario"> somos</span>
              </h3>
              
            </div>
          </b-col>

          <b-col cols="12" lg="6">
            <div>
              <iframe width="100%" height="310" src="https://www.youtube-nocookie.com/embed/FLbQw1g9Lkc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </b-col>
          <b-col cols="12" lg="6">
            <ul>
              <li>
                <div>
                  <h3>Conócenos</h3>
                </div>
              </li>
              <li>
                <div>
                  <p>Proteger lo que más valoras es nuestro propósito. Hacerlo simple es nuestro compromiso. Te invitamos a conocer cómo lo hacemos.</span></p>
                </div>
              </li>
              <li>
                <div>
                  <a class="btn-mundoBeneficios"
                    type="buttton"  
                    href="https://www.interseguro.pe/conoce-interseguro/nuestra-empresa"         
                    target="_blanck"
                  >Conoce más
                  </a>
                </div>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'InterseguroWeb',
  data(){
    return {

    }
  },
  mounted(){
    var check = document.getElementById("nav-checkbox")
    check.checked = false
  }
};
</script>
<style lang="scss" scoped>
.btn-mundoBeneficios{
  border: 1.5px solid #ea0c90;
  border-radius: 28.44px;
  width: 292px;
  height: 52px;
  background: transparent;
  text-align: center;
  line-height: 50px;
  color: #ea0c90;
  font-family: Omnes;
  font-size: 19.97px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 40px;
  &:hover{
    background: #ea0c90;
    color: white;
  }
}
  .contactanos{
    padding-top: 70px;
    min-height: 500px;
    .img_contactanos{
      margin: 2rem 0rem;
      width: 100%;
    }
    .tag-1{
      color: #0855c4;
      font-size: 18px;
      line-height: 18px;
      padding-left: 8px;
    }
    .tag-2{
      color: aqua;
    }
  }
  ul{
    border-radius: 8px;    
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    li{
      list-style: none;
      div{
          padding-bottom: 12px;
      }
      p{
        display: flex;
        align-items: center;
      }
    }
  }
</style>
