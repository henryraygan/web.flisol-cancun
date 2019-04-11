<template>
  <section id="evento" class="program-schedule">
    <div class="fl-container">
      <h1 class="title-section">Durante el evento</h1>

      <div class="schedule">
        <div v-if="false" class="schedule-item">
          <div class="hour">7:00</div>
          <div class="info">REGISTRO</div>
        </div>
        <div v-for="(speak, i) in schedule" class="schedule-item" :key="i" v-scroll-reveal="{ delay: (100 * i) }">
          <div class="hour">{{ speak.hour }}</div>
          <div class="info">
            <span class="speaker">
              {{ speak.speaker }} -
              <span class="role">{{ speak.role }}</span>
            </span>
            <p>{{ speak.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Program",
  data() {
    return {
      schedule: []
    };
  },
  beforeCreate() {
      fetch('https://conekhub.firebaseio.com/schedule.json')
      .then(r => r.json())
      .then(response => {
          this.schedule = response;
      })
  }
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
