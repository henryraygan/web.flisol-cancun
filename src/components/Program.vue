<template>
    <section id="evento" class="program-schedule">
        <div class="fl-container">
            <h1 class="title-section">
                Durante el evento
            </h1>

            <div class="schedule">
                <div v-if="false" class="schedule-item">
                    <div class="hour">
                        7:00
                    </div>
                    <div class="info">
                        ENTRADA
                    </div>
                </div>
                <div class="schedule-item">
                    <div class="hour">
                        
                    </div>
                    <div class="info">
                        <span class="speaker">
                            Juan Carlos Geroy Fernández - <span class="role"> Leader SysAdmin at PriceTravel Holding</span> 
                        </span>
                        <p>
                            Infraestructuras hiperconvergentes con SL y de código abierto
                        </p>
                    </div>
                </div>
                <div class="schedule-item">
                    <div class="hour">
                    </div>
                    <div class="info">
                        <span class="speaker">
                            Luis Enrique Tejeda Rodríguez - <span class="role"> Frontend Developer at Grupo Xcaret</span> 
                        </span> 
                        <p>
                            Docker & CI/CD con Jenkins
                        </p>  
                    </div>
                </div>
                <div class="schedule-item">
                    <div class="hour">
                        
                    </div>
                    <div class="info">
                        <span class="speaker">
                            Miguel Ángel Torres Govea - <span class="role"> Leader SysAdmin CTI at PriceTravel Holding</span> 
                        </span>
                        <p>
                            Machine Learning con Open Source
                        </p>
                    </div>
                </div>
                <div class="schedule-item">
                    <div class="hour">
                        
                    </div>
                    <div class="info">
                        <span class="speaker">
                            Adan González - <span class="role"> SysAdmin at PriceTravel Holding</span> 
                        </span>
                        <p>
                            Aprovisionamiento de servidores con Asinble
                        </p>
                    </div>
                </div>
                <div class="schedule-item">
                    <div class="hour">
                        
                    </div>
                    <div class="info">
                        <span class="speaker">
                            Henry Raygan - <span class="role"> Community Lead at SlothTech</span> 
                        </span>
                        <p>
                            Arquitectura Frontend con Vuejs
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "Program"
};
</script>

<style lang="scss">

    .program-schedule {
        margin: 3rem 0;
    }

    .schedule {
        
        margin: 0 auto;
        &-item {
            padding: 1rem 0;
            display: flex;
            // border-bottom: 1px solid rgba(0, 0, 0, 0.09);
            color: rgba(0, 0, 0, 0.9);
            font-weight: 700;
            padding: 2rem;
            background-color: #fafafa;
            &:nth-child(2n) {
                background-color: #f1f1f1;
            }
            .hour {
                color: #495057;
                padding: 1em;
            }
            .info {
                padding: 1em;
                line-height: 1.5;
                font-size: 1.25rem;
                .speaker {
                    color: var(--primary-color);
                    font-size: 1rem;
                    font-weight: 200;
                    .role {
                        font-style: italic;
                    }
                }
            }
        }
    }
</style>
