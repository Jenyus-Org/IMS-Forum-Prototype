<template>
  <div class="tutoring">
    <p class="title">Tutoring</p>
    <div
      class="card-container d-flex flex-wrap justify-content-between p-2 align-content-center"
    >
      <div
        v-for="tutor in tutors"
        :key="tutor.id"
        class="card m-2"
        style="flex: 1"
      >
        <div class="header">
          <b-avatar class="mx-2"></b-avatar>
          <div class="header-content">
            <span>{{ tutor.name }}</span>
            <div class="d-flex header-content-score">
              <p class="mb-0">
                <FontAwesomeIcon class="icon fa-sm" icon="paw" />
              </p>
              <p class="mb-0 mr-1 score">{{ tutor.score }}</p>
            </div>
          </div>
        </div>
        <div class="body">
          <div class="offer-details-container">
            <p>{{ tutor.category }}</p>
            <div class="offer-details">
              <span>{{ tutor.pay }} ChF</span>
              <span>{{ tutor.location }}</span>
            </div>
          </div>
          <p>{{ tutor.description }}</p>
        </div>
        <div></div>
        <p></p>
      </div>
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
          pay: "10",
          location: "Aarau",
          description:
            "Fullstack engineer trying to help students get a better understanding of the matter.",
        },
        {
          id: 2,
          name: "Developer 1",
          score: 6520,
          category: "FrontEnd",
          pay: "15-20",
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
      .body {
        .offer-details-container {
          .offer-details {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: flex-end;
          }
          display: flex;
          justify-content: space-between;
          margin: 3px;
        }
      }
    }
  }
}
</style>