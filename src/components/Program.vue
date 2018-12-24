<template>
    <section class="program-schedule">
        <div class="fl-container">
            <h1 class="title-section">
                Programa del evento
            </h1>

            <div class="schedule">
                <div class="schedule-item">
                    <div class="hour">
                        7:00
                    </div>
                    <div class="info">
                        Registro
                    </div>
                </div>
                <div class="schedule-item">
                    <div class="hour">
                        7:00
                    </div>
                    <div class="info">
                        Registro
                    </div>
                </div>
                <div class="schedule-item">
                    <div class="hour">
                        7:00
                    </div>
                    <div class="info">
                        Registro
                    </div>
                </div>
                <div class="schedule-item">
                    <div class="hour">
                        7:00
                    </div>
                    <div class="info">
                        Registro
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
        width: 70%;
        margin: 0 auto;
        &-item {
            padding: 1rem 0;
            display: flex;
            border-bottom: 1px solid rgba(0, 0, 0, 0.09);
            color: rgba(0, 0, 0, 0.9);
            font-weight: 700;
            .hour {
                color: #495057;
                padding: 1em;
            }
            .info {
                padding: 1em;
            }
        }
    }
</style>
