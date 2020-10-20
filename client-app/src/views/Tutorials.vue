<template>
  <div>
    <SearchBar />
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
          imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
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
          imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
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
          imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
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
          imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
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

<style scoped>
.tutorial-container{
  display:flex;
  width:90%;
  margin:0 auto;
  margin-top:10px;
}
.card-display {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex:1;
  justify-content: center;
}
.card {
  margin:10px;
  width:500px;
}
</style>
