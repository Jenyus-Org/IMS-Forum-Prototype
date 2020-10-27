<template>
  <div class="internships">
    <b-jumbotron
      header="Internships"
      lead="Find your next dream job here."
    >
    </b-jumbotron>
    <SwissMap style="padding-bottom: 5px" />
    <div
      class="card-container d-flex flex-wrap justify-content-between p-2 align-content-center"
    >
      <b-card
        v-for="intern in internships"
        :key="intern.id"
        class="m-2 internship-card"
        style="flex: 1"
        :title="intern.company"
      >
        <div class="card-content">
          <div class="d-flex justify-content-between mb-4">
            <h6 class="card-subtitle text-muted m-0">{{ intern.type }}</h6>
            <b-card-text>
              <div class="d-flex flex-column">
                <span>{{ intern.pay | chf }}</span>
                <span class="font-weight-bold">{{ intern.location }}</span>
              </div>
            </b-card-text>
          </div>
          <b-card-text>{{ intern.description }}</b-card-text>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SwissMap from "@/components/SwissMap";

export default {
  name: "internships",
  components: {
    SwissMap,
  },
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
            "Description 1\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus distinctio impedit ratione, velit nulla quasi, ea quod nobis eaque modi aliquid enim quis vel quaerat optio et harum laboriosam.",
        },
        {
          id: 2,
          company: "Company2",
          pay: "1500",
          type: "Frontend",
          location: "Baden",
          description:
            "Description 2\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus distinctio impedit ratione, velit nulla quasi, ea quod nobis eaque modi aliquid enim quis vel quaerat optio et harum laboriosam.",
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

  .internship-card {
    .card-body {
      padding: 0;
    }

    .card-title {
      background-color: var(--dark-primary);
      color: var(--white);
      padding: 10px;
    }

    .card-content {
      padding: 1.25rem;
    }
  }
}
</style>
