<template>
  <div class="tutoring">
    <p class="title">Tutoring</p>
    <div
      class="card-container d-flex flex-wrap justify-content-between p-2 align-content-center"
    >
      <b-card
        v-for="tutor in tutors"
        :key="tutor.id"
        class="card m-2"
        style="flex: 1"
      >
        <div class="header">
          <b-avatar class="mb-3"></b-avatar>
          <div class="header-content">
            <p style="margin-bottom: 0.35rem">{{ tutor.name }}</p>
            <div class="d-flex header-content-score">
              <p class="mb-0">
                <FontAwesomeIcon class="icon fa-sm" icon="paw" />
              </p>
              <p class="mb-2 mr-1 score">{{ tutor.score }}</p>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="d-flex justify-content-between mb-4">
            <h6 class="card-subtitle text-muted m-0">{{ tutor.category }}</h6>
            <b-card-text>
              <div class="d-flex flex-column">
                <span v-if="Array.isArray(tutor.payRange)">
                  {{ tutor.payRange[0] | chf }} -
                  {{ tutor.payRange[1] | chf }}
                </span>
                <span v-else>{{ tutor.payRange | chf }}</span>
                <span class="font-weight-bold">{{ tutor.location }}</span>
              </div>
            </b-card-text>
          </div>
          <b-card-text>{{ tutor.description }}</b-card-text>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Tutoring",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      tutors: [
        {
          id: 1,
          name: "Developer 1",
          score: 6520,
          category: "Fullstack",
          payRange: "10",
          location: "Aarau",
          description:
            "Fullstack engineer trying to help students get a better understanding of the matter.",
        },
        {
          id: 2,
          name: "Developer 1",
          score: 6520,
          category: "Frontend",
          payRange: ["15", "20"],
          location: "Baden",
          description:
            "Fullstack engineer trying to help students get a better understanding of the matter.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.tutoring {
  flex: 1;
  margin-bottom: 10px;
  margin-right: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  .title {
    background-color: var(--dark-primary);
    color: var(--white);
    padding: 10px;
  }

  .card-container {
    .card {
      .header {
        padding: 10px;
        color: var(--dark-primary);
        border-bottom: #dae0e6 solid 1px;
        text-align: center;

        .header-content {
          text-align: center;
          padding-top: 5px;
          line-height: 1;

          .header-content-score {
            justify-content: center;

            .score {
              font-size: 14px;
              position: relative;
              top: 3px;
              padding-left: 3px;
            }
          }
        }
      }

      .card-body {
        padding: 0;
      }

      .card-content {
        padding: 1.25rem;
      }
    }
  }
}
</style>
