<template>
  <div class="internships">
    <p class="title">Internships</p>
    <div
      class="card-container d-flex flex-wrap justify-content-between p-2 align-content-center"
    >
      <div
        v-for="intern in internships"
        :key="intern.id"
        class="card m-2"
        style="flex: 1"
      >
        <div class="header">
          <div class="header-content">
            <span style="padding-left:5px; padding-right:5px;">{{ intern.company }}</span>
          </div>
        </div>
        <div class="body">
          <div class="offer-details-container">
            <p>{{ intern.type }}</p>
            <div class="offer-details">
              <span>{{ intern.pay }} ChF</span>
              <span>{{ intern.location }}</span>
            </div>
          </div>
          <p style="padding-left:5px; padding-right:5px;">{{ intern.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "internships",
  data() {
    return {
      internships: [
        {
          id: 1,
          company: "Company1",
          pay: "500",
          type: "Fullstack",
          location: "Alpnach",
          description:
            "Work description for internship at Company1 filler filler filler filler filler filler filler filler filler filler filler",
        },
        {
          id: 2,
          company: "Company2",
          pay: "1500",
          type: "FrontEnd",
          location: "Baden",
          description:
            "Work description for internship at Company2 filler filler filler filler filler filler filler filler filler filler filler filler filler filler",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.internships {
  flex: 1;
  margin-bottom: 10px;
  margin-left: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  .title {
    background-color: var(--dark-primary);
    color: var(--white);
    padding: 10px;
  }
  .header {
    padding-top: 10px;
    .header-content {
      font-weight: bold;
      color: var(--dark-primary);
    }
  }
  .body {
    .offer-details-container {
      display: flex;
      justify-content: space-between;
      margin: 5px;
      .offer-details {
        display: flex;
        flex-direction: column;
        text-align: right;
      }
    }
  }
}
</style>