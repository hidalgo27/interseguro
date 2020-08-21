<template>
    <div class="exclusiones">
        <section class="pd-t16 sectTitle">
            <b-container class="mt-4 pb-4">
                <div class="section-header ">
                    <h3 class="section-header__title title blue mb-4">Exclusiones</h3>
                    <div class="text-center subtitle">
                       Esta Póliza no cubre los Daños y/o pérdidas y/o responsabilidad civil y/o Daños Personales 
                       que resulten o que sean causados directa o indirectamente por los siniestros: 
                    </div>
                </div>
            </b-container>  
        </section>
        <section>
            <div role="tablist" class="pt-4 mt-3  mb-5 pb-2 tablist">
                <b-container class="divexclusiones" >
                    <hr  class="active">
                    <div v-for="(value,key) in exclusiones" v-bind:key = 'key'>
                         <b-container>
                        <div class="row listExclusiones"> 
                            <b-col cols=1 lg="1" class="spanNumber blue">{{ key+1 }}.</b-col>
                            <b-col cols=11 lg="11" class="description">{{ value }}</b-col>
                        </div>
                        <hr  :class="{ 'lastdiv': key === (exclusiones.length-1) }">
                         </b-container>
                    </div>

                </b-container>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    layout: 'InterseguroWeb',
    data: () => ({
        exclusiones :['Producidos cuando el Vehículo no sea de uso particular a menos que otro uso hubiera sido específicamente incluido al contratarse el seguro.' , 
                        'Causados por personas, animales u objetos cargados, trasladados, descargados o remolcados con el Vehículo o durante estas acciones, así como los que causen a terceros independientemente de que ocurra un Accidente o Incendio',
                        'Producidas por transporte de mercaderías y/o insumos peligrosos, inflamables, corrosivos y explosivos, salvo que el vehículo está diseñado para tal fin. No cubre daños o pérdidas que ocasionen a terceros.',
                        'Causados por desgaste, sobrecarga, uso indebido, desperfecto mecánico o por falta de adecuado y oportuno mantenimiento.',
                        'Causados por actos fraudulentos, dolosos, intencionales o negligencia inexcusable del Contratante, Beneficiario o Endosatario, de los familiares' +
                        ' de cualquiera de ellos o de cualquier persona que estuviera a cargo del, o conduciendo el Vehículo, salvo que estos actos se realicen para evitar'+
                        ' el siniestro o atenuar sus consecuencias, por un deber de humanidad generalmente aceptada, por legítima defensa, estado de necesidad o cumplimiento de un deber legal.',
                        'Causados por el Vehículo a bienes de propiedad del Contratante o de propiedad de terceros que se encuentren bajo su custodia y/o control.',
                        'Producidos por personas no autorizadas o no aptas para conducir,incluyendo aquellas que tengan licencia inadecuada,vencida,suspendida o cancelada.',
                        'Ocasionados por la instalación defectuosa o incorrecta de cables eléctricos,componentes eléctricos u otros accesorios, así como el uso indebido del cableado eléctrico.','A neumáticos y cámaras, salvo que sean consecuencia de un Accidente indemnizable.',
                        'Producidas cuando el Vehículo esté siendo remolcado o auxiliado por otro medio que no sea una grúa autorizada para este servicio o esté remolcando a otro vehículo.',
                        'Producidas cuando el Conductor se encuentra en estado de ebriedad y/o bajo los efectos o influencia de estupefacientes, narcóticos, drogas, alucinógenos o tranquilizantes, aun cuando sean legales y/o prescritas por un médico. Para efectos de esta exclusión se entiende que una persona se encuentra en estado de ebriedad cuando al practicársele el examen de alcoholemia u otro que corresponda éste' +
                        ' arroje un resultado igual o superior al permitido por ley, al momento del accidente. Para determinar la cantidad de alcohol por litro de sangre que corresponde al momento del accidente se considerará que la cantidad de alcohol en la sangre en una persona desciende cada hora 0.15 gramos de alcohol por litro de sangre; consecuentemente a la cifra que arroje el resultado del examen de alcoholemia' +
                        ' se le añadirá 0.0025 gramos de alcohol por litro de sangre por cada minuto transcurrido desde el momento del accidente hasta el momento en que sangre se practicó el examen. Si el conductor se niega y/o no se somete oportunamente al examen de alcoholemia o al examen toxicológico u otro que corresponda se presumirá que al momento del accidente estaba en estado de ebriedad y/o bajo los efectos o' +
                        ' influencia de estupefacientes narcóticos y/o alucinógenos; consecuentemente se aplicará la presente exclusión.',
                        'Consecuencia directa o indirecta de guerra civil o internacional, declarada o no, confiscación, requisa, expropiación, nacionalización, destrucción de bienes por orden de autoridad legítima o no legítima o cualquier evento que determina la proclamación de estado de sitio. Para estos efectos, se verificará que exista una relación de causalidad adecuada entre el hecho y el daño ocasionado.',
                        'Consecuencia de reacción o radiación nuclear o contaminación radioactiva.',
                        'Ocasionados a terceros cuando el Vehículo haya sido robado, salvo las lesiones ocasionadas al Conductor u Ocupantes al momento inmediato anterior al robo.','Ocasionadas a remolques, casas rodantes y/o furgones acoplados al vehículo asegurado, así como lesiones personales o muerte de sus ocupantes. Tampoco cubre los daños materiales que estos puedan ocasionar al vehículo asegurado o a terceros.',
                        'Que se produzcan cuando el vehículo asegurado recorre o atraviesa por terrenos que no están destinados al tránsito de vehículos, salvo que estos sean trayectos obligados en camino público.',
                        'Ocasionados por suspensión o paralización o cesación, total o parcial, del negocio; por incumplimiento o resoluciones de contratos; pérdida de mercado y/o lucro cesante; pérdidas y gastos por multas y/o penalidades de cualquier tipo; por deficiencias de rendimiento o capacidad, o defectos estéticos; pérdidas o gastos por el tiempo que demanden las reparaciones o por demoras en las reparaciones;' +
                        ' por depreciación del vehículo, o pérdida de uso; por pérdida de la garantía del Vehículo y, en general, por cualquier daño o pérdida indirecta o consecuencial.',
                        'Por apropiación o apoderamiento del Vehículo indebidos o ilícitos o no autorizado.',
                        'Por la participación activa del Contratante o Conductor en riñas, alteración del orden público o hechos que pudieran involucrar agresiones o daños por terceros y a terceros.',
                        'Sufridos por el Vehículo cuando su Conductor abandona o huye del lugar del accidente, con o sin el Vehículo salvo que sea para evitar el siniestro o para atenuar sus consecuencias, por un deber de humanidad generalmente aceptado, por legítima defensa, estado de necesidad o por cumplimiento de un deber legal.',
                        'Producidos a la capota de lona, a accesorios y piezas y/o partes de vehículos descapotables.',
                        ' Sufridos por el Vehículo así como la responsabilidad civil y demás coberturas, por una infracción del conductor al Reglamento Nacional de Tránsito - Código de Tránsito y demás normas aplicables.','No relacionados a un siniestro.','La responsabilidad penal y toda consecuencia de cualquier proceso penal contra el contratante o conductor del vehículo asegurado con ocasión de un siniestro; en consecuencia'+
                        ' INTERSEGURO no estará obligada a intervenir en los juicios ni en las diligencias policiales para establecer el grado de responsabilidad ni a pagar indemnizaciones con cargo a alguna de las coberturas de la póliza, ni a otorgar fianzas o garantías para obtener la libertad del Contratante o Conductor.',
                        'Causadas por reparaciones y/o cambios de piezas sin autorización de INTERSEGURO que dificultan determinar las causas del siniestro o el daño.',
                        'Responsabilidad contractual.',
                        'Ocasionados cuando el vehículo no tuviera instalado el sistema GPS (Global Position System) a la fecha de ocurrencia del siniestro y dicho requerimiento hubiere sido informado en las Condiciones Particulares de la póliza.' 
        ]
  })
}
</script>

<style scoped>
    .exclusiones{
        padding-top: 60px;
    }
    .blue{
        color: #0055c8;
    }
    .sectTitle{
        background-color: #E7EEF9
    }
    .title{
        text-align: center;
        font-size: 42px;
        line-height: 20px;
    }
    .subtitle{
        color: #5E5E5E;
        font-family: 'omnes';
        font-size: 20px;
        line-height: 25px;
    }
    .spanNumber{
        font-weight: 600;
        padding-right: 0px;
    }
    .description{
        color: #5E5E5E;
        line-height: 21px;
    }
    .listExclusiones{
        padding-left: 40px;
    }
    .divexclusiones hr {
        background-color: #E7EEF9;
        height: 0.8px;
    }
    .divexclusiones hr.lastdiv {
        display: none;
    }
    .number{
        display:none;
    }
    @media (min-width: 768px){
        .exclusiones .col-lg-11 {
            flex: 0 0 97.666667%;
        }
        .exclusiones .col-lg-1 {
            flex: 0 0 1.333333%;
        }
        .active{
            display: none;
        }
    }
    @media (max-width: 767px){
        .description{
            text-align: justify;
        }
        .listExclusiones {
            padding-left: 0px;
            padding-top: 8px;
        }
        .title{
            padding: 0px;
            font-size: 32px;
        }
        .subtitle{
            font-size: 16px;
        }
        .tablist{
            padding-top: 0px !important;
        }
        .divexclusiones hr{
            border-top: #E7EEF9 .25rem;
            height: 3px;
            margin-bottom: 0px;
        }
        .number span {
            font-size: 15px;
            background-color: white;
            padding: 12px;
        }
        .number {
            display: block;
            position: relative;
            top: -0.9em;
            text-align: center;
        }
    }
</style>