<template>
  <div class="tutorial-view">
    <SearchBar />
    <div class="description-container">
      <div class="description-container">
        <div class="description-block">
          <div class="text-container">
            <span class="description-title">Create your own Tutorial</span>
            <span class="description-body">
              Earn Karma and profile score by creating high quality tutorials
              for students by students
            </span>
          </div>
          <div class="create-btn-container">
            <router-link class="btn" :to="{ name: 'submitTutorial' }">
              Create Tutorial
            </router-link>
          </div>
        </div>
        <div class="description-block">
          <div class="text-container">
            <span class="description-title">Become a moderator</span>
            <span class="description-body">
              Accept, deny and correct tutorial post requests. Get a profile
              flair, priority treatment and extra profile score
            </span>
          </div>
          <div class="create-btn-container">
            <a href="" class="btn">Become Moderator</a>
          </div>
        </div>
        <div class="break"></div>
      </div>
    </div>
    <div class="tutorial-container">
      <div class="card-display">
        <div class="card" v-for="tutorial in tutorials" :key="tutorial.id">
          <TutorialCard :tutorial="tutorial" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import TutorialCard from "@/components/Tutorial/Card";
export default {
  name: "Tutorials",
  components: {
    SearchBar,
    TutorialCard,
  },
  data() {
    return {
      tutorials: [
        {
          id: 1,
          name: "Hello World",
          imgsrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
          reasondescription:
            "Hello World is used to either test code or to create simple code structures. Its important to use it properly!",
          description:
            "Hello World Tutorial is used to show the usage of Hello World in this very instance right here",
          basicfilter: "FrontEnd",
          language: "Javascript",
          framework: "vue",
          complexity: 6,
        },
        {
          id: 2,
          name: "Hello World",
          imgsrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
          reasondescription:
            "Hello World is used to either test code or to create simple code structures. Its important to use it properly!",
          description:
            "Hello World Tutorial is used to show the usage of Hello World in this very instance right here",
          basicfilter: "FrontEnd",
          language: "Javascript",
          framework: "vue",
          complexity: 6,
        },
        {
          id: 3,
          name: "Hello World",
          imgsrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
          reasondescription:
            "Hello World is used to either test code or to create simple code structures. Its important to use it properly!",
          description:
            "Hello World Tutorial is used to show the usage of Hello World in this very instance right here",
          basicfilter: "FrontEnd",
          language: "Javascript",
          framework: "vue",
          complexity: 6,
        },
        {
          id: 4,
          name: "Hello World",
          imgsrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
          reasondescription:
            "Hello World is used to either test code or to create simple code structures. Its important to use it properly!",
          description:
            "Hello World Tutorial is used to show the usage of Hello World in this very instance right here",
          basicfilter: "FrontEnd",
          language: "Javascript",
          framework: "vue",
          complexity: 6,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/tutorial.scss";
.description-container {
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  .description-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .description-block {
      flex: 1;
      margin: 10px;
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 5px;
      justify-content: space-between;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      .text-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        .description-title {
          font-weight: bold;
        }
        .create-btn-container {
          .btn {
            width: 200px;
          }
          width: 100%;
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
          margin-right: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
.tutorial-view {
  width: 100%;
}
.tutorial-container {
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
}
.card-display {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
}
.card {
  margin: 10px;
  max-width: 500px;
}
</style>
