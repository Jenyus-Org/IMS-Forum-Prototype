<template>
  <div class="dashboard">
    <div class="content">
      <div class="top-offers">
        <div class="tutoring">
          <p class="title">Tutoring</p>
          <div
            class="card-container d-flex flex-wrap justify-content-between p-2 align-content-center"
          >
            <div
              v-for="tutor in tutors"
              :key="tutor.id"
              class="card m-2"
              style=" flex: 1"
            >
              <div class="header">
                <b-avatar class="mx-2"></b-avatar>
                <div class="header-content">
                  <span>{{ tutor.name }}</span>
                  <div class="d-flex header-content-score">
                    <p class="mb-0 mr-1 score">{{ tutor.score }}</p>
                    <p class="mb-0">
                      <FontAwesomeIcon class="icon fa-sm" icon="paw" />
                    </p>
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
                  <span>{{ intern.company }}</span>
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
                <p>{{ intern.description }}</p>
              </div>
              <div></div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="featured">
        <p class="title">Featured</p>
        <div
          class="card-container d-flex flex-wrap justify-content-between p-2 align-content-center"
        >
          <div
            v-for="feat in featured"
            :key="feat.id"
            class="card m-2"
            style="min-width: 400px; flex: 1"
          >
            <div>
              <div class="title-header p-2 align-items-center">
                <p class="mb-0">{{ feat.submission.name }}</p>
                <div class="d-flex align-items-center">
                  <p class="mb-0 mr-1 score">120</p>
                  <p class="mb-0">
                    <FontAwesomeIcon class="icon fa-sm" icon="paw" />
                  </p>
                </div>
              </div>
              <div class="body p-2">
                <span class="font-weight-bold">{{
                  feat.type.toUpperCase()
                }}</span>
                <p style="word-break: break-word">
                  {{ feat.submission.description }}
                </p>
                <p class="btn-container">
                  <router-link
                    class="btn"
                    :to="feat.type + '/' + feat.submission.id"
                    >Learn more</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="forum-specification">
      <div class="faq"></div>
      <div class="rules">
        <div class="paragraph">
          <span class="title"></span>
          <p class="body"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Home",
  components: {
    FontAwesomeIcon,
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
      featured: [
        {
          id: 1,
          type: "project",
          submission: {
            id: 552,
            name: "TestSubmission",
            description: "This is a description of the TestSubmission Project",
          },
        },
        {
          id: 2,
          type: "project",
          submission: {
            id: 956,
            name: "Submission2",
            description: "This is a description of the Submission2 Project",
          },
        },
        {
          id: 3,
          type: "tutorials",
          submission: {
            id: 2,
            name: "VueTutorial2",
            description: "This is a description of the VueTutorial2 Tutorial",
          },
        },
        {
          id: 4,
          type: "tutorials",
          submission: {
            id: 3,
            name: "VueTutorial3",
            description: "This is a description of the VueTutorial3 Tutorial",
          },
        },
        {
          id: 5,
          type: "tutorials",
          submission: {
            id: 4,
            name: "VueTutorial4",
            description: "This is a description of the VueTutorial4 Tutorial",
          },
        },
        {
          id: 6,
          type: "tutorials",
          submission: {
            id: 5,
            name: "VueTutorial5",
            description: "This is a description of the VueTutorial5 Tutorial",
          },
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.dashboard {
  .content {
    .title {
      background-color: var(--dark-primary);
      color: var(--white);
      padding: 10px;
    }
    .top-offers {
      display: flex;
      .tutoring {
        flex: 1;
        margin-bottom: 10px;
        margin-right: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        .card-container {
          .card {
            .header {
              padding: 10px;
              color: var(--dark-primary);
              border-bottom: #dae0e6 solid 1px;
              .header-content {
                padding-top: 5px;
                line-height: 1;
                .header-content-score {
                  justify-content: center;
                  .score {
                    font-size: 14px;
                    position: relative;
                    top: 3px;
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
                margin: 5px;
              }
            }
          }
        }
      }
      .internships {
        flex: 1;
        margin-bottom: 10px;
        margin-left: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
    }

    .featured {
      margin: 0 auto;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      padding-bottom: 10px;
      .card-container {
        margin: 5px;
      }
      .card {
        margin-bottom: 10px;
        width: 100%;
        .title-header {
          display: flex;
          justify-content: space-between;
          padding-left: 5px;
          padding-right: 5px;
          color: var(--dark-primary);
          border-bottom: #dae0e6 solid 1px;
          .score {
            font-size: 14px;
          }
        }
      }
      .body {
        margin: 5px;
        text-align: left;
        .btn-container {
          display: flex;
          justify-content: flex-end;
          margin: 5px;
        }
      }
    }
  }
}
</style>