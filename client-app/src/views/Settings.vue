<template>
  <div class="settings">
    <div class="activities">
      <div class="description mb-4">
        <p class="title">Description</p>
        <p class="body mx-3">
          Hi, my name is Developer 1. My passion is frontend coding with a focus
          on design. I designed this website for instance. I mainly code in
          Javascript but I am also used to BackEnd languages like C# or Java.
          Besides writing clean, durable code, I build snowboards and spend my
          time testing them. Learn more about me on my social medias.
        </p>
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
    <div class="profile">
      <div class="profile-generals py-3">
        <b-avatar class="mt-2 mb-3"></b-avatar>
        <span class="name font-weight-bold mb-1">{{
          $strapi.user.username
        }}</span>
        <div class="score">
          <span><FontAwesomeIcon class="icon fa-sm" icon="paw" /></span>
          <span>6520</span>
        </div>
      </div>
      <div class="tags-container py-2">
        <b-badge
          class="mr-2"
          :style="{ background: tag.colour }"
          v-for="tag in tags"
          :key="tag.id"
          >{{ tag.name }}</b-badge
        >
      </div>
      <div class="socialmedia-container">
        <div class="socialmedia p-1 m-1">
          <a><FontAwesomeIcon class="icon fa-lg" icon="heart" /></a>
          <a><FontAwesomeIcon class="icon fa-lg" icon="heart" /></a>
          <a><FontAwesomeIcon class="icon fa-lg" icon="heart" /></a>
        </div>
        <div class="add p-2" :class="{ hidden: !personalProfile }">
          <b-form-select
            class="select"
            v-model="selectedSocialMedia"
            :options="socialmedias"
          ></b-form-select>
          <a class="add-btn">
            <FontAwesomeIcon class="icon fa-sm" icon="plus" />
          </a>
        </div>
      </div>
      <div class="interests-container">
        <div class="collection">
          <p class="title">Categories</p>
          <div class="body">
            <span>FrontEnd</span>
            <span>Fullstack</span>
          </div>
          <div class="add" :class="{ hidden: !personalProfile }">
            <b-form-select
              class="select"
              v-model="selectedCategory"
              :options="categories"
            ></b-form-select>
            <a class="add-btn">
              <FontAwesomeIcon class="icon fa-sm" icon="plus" />
            </a>
          </div>
        </div>
        <div class="collection">
          <p class="title">Languages</p>
          <div class="body">
            <span>Javascript</span>
            <span>C#</span>
          </div>
          <div class="add" :class="{ hidden: !personalProfile }">
            <b-form-select
              class="select"
              v-model="selectedLanguage"
              :options="languages"
            ></b-form-select>
            <a class="add-btn">
              <FontAwesomeIcon class="icon fa-sm" icon="plus" />
            </a>
          </div>
        </div>
        <div class="collection">
          <p class="title">Frameworks</p>
          <div class="body">
            <span>VueJS</span>
            <span>ReactJS</span>
          </div>
          <div class="add" :class="{ hidden: !personalProfile }">
            <b-form-select
              class="select"
              v-model="selectedFramework"
              :options="frameworks"
            ></b-form-select>
            <a class="add-btn">
              <FontAwesomeIcon class="icon fa-sm" icon="plus" />
            </a>
          </div>
        </div>
        <div class="collection">
          <div class="body">
            <span
              ><FontAwesomeIcon
                :class="{ hidden: edit }"
                class="icon fa-sm"
                icon="code" />
              <a class="personal-website" :class="{ hidden: edit }" href="">{{
                personalwebsite
              }}</a>
              <b-form-input
                class="input"
                :class="{ hidden: !edit }"
                :placeholder="personalwebsite"
                v-model="website"
              ></b-form-input>
              <FontAwesomeIcon
                :class="{ hidden: !edit, save: edit }"
                class="icon fa-sm"
                style="margin-top: 2px"
                icon="save"
                @click="editWebsite(website)" />
              <FontAwesomeIcon
                :class="{ hidden: edit }"
                class="icon fa-sm"
                icon="edit"
                @click="editWebsite('')"
            /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Settings",
  data() {
    return {
      selectedFramework: "VueJs",
      selectedLanguage: "Javascript",
      selectedCategory: "FrontEnd",
      selectedSocialMedia: "GitHub",
      personalwebsite: "personal-website.com",
      frameworks: ["VueJs", "ReactJs", "Angular", "JQuery"],
      languages: ["Javascript", "C#", "Python"],
      categories: ["FrontEnd", "General", "BackEnd", "Fullstack"],
      socialmedias: ["GitHub", "LinkedIn", "Xing", "Instagram"],
      edit: false,
      tags: [
        { id: 1, name: "AKSA", colour: "#f58493" },
        { id: 2, name: "intern", colour: "#ffde82" },
        { id: 3, name: "Enhanzz AG", colour: "#7ee7f7" },
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
  components: {
    FontAwesomeIcon,
  },
  computed: {
    personalProfile: function () {
      let retval = false;
      if (this.$strapi.user.id == this.$route.params.id) {
        retval = true;
      }
      return retval;
    },
  },
  methods: {
    editWebsite(website) {
      if (website != "") {
        this.personalwebsite = website;
      }
      this.edit = !this.edit;
    },
  },
};
</script>

<style scoped lang="scss">
.hidden {
  display: none !important;
}
.settings {
  display: flex;
  .activities {
    flex: 0.8;
    margin: 5px 25px 5px 5px;
    text-align: left;
    .description {
      margin: 0 auto;
      margin-bottom: 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      padding-bottom: 10px;
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
      }
    }
    .title {
      background-color: var(--dark-primary);
      color: var(--white);
      padding: 10px;
    }
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
    .body {
      margin: 5px;
      .btn-container {
        display: flex;
        justify-content: flex-end;
        margin: 5px;
      }
    }
  }
  .profile {
    flex: 0.2;
    margin: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    flex-direction: column;
    .profile-generals {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px;
      background-color: var(--dark-primary);
      color: var(--white);
      line-height: 1;
      .score {
        span {
          padding: 2px;
          font-size: 14px;
        }
      }
      .name {
        padding-top: 5px;
      }
    }
    .add {
      border-top: #dae0e6 solid 1px;
      display: flex;
      flex-direction: column;
      padding: 7px;
      .select {
        width: calc(100% - 10px);
        margin: 0 auto;
        margin-top: 5px;
        &:focus {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          border: none;
        }
      }
    }
    .tags-container {
      width: 90%;
      margin: 0 auto;
      margin-top: 5px;
      margin-bottom: 5px;
      display: flex;
      flex-wrap: wrap;
    }
    .socialmedia-container {
      display: flex;
      flex-direction: column;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      width: 90%;
      margin: 0 auto;
      margin-top: 5px;
      .socialmedia {
        margin-top: 10px;
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        a {
          padding: 10px;
          .icon {
            color: var(--dark-primary);
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
    .add-btn {
      padding: 5px;
      color: var(--dark-primary);
      .icon:hover {
        cursor: pointer;
      }
    }
    .interests-container {
      width: 90%;
      margin: 0 auto;
      margin-top: 10px;
      padding-bottom: 15px;
      .collection {
        margin-top: 15px;
        margin-bottom: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        display: flex;
        flex-direction: column;
        .title {
          margin: 0px;
          padding: 10px 10px 10px 12px;
          text-align: left;
          color: var(--dark-primary);
          border-bottom: solid 2px var(--dark-primary);
        }
        .body {
          display: flex;
          text-align: left;
          padding: 10px;
          flex-direction: column;
          .icon {
            color: var(--dark-primary);
            &:hover {
              cursor: pointer;
            }
          }
          .personal-website {
            padding-left: 5px;
            padding-right: 5px;
            color: var(--dark);
          }
          .input {
            &:focus {
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                0 1px 2px rgba(0, 0, 0, 0.24);
              border: none;
            }
          }
          .save {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
}
</style>
