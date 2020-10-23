<template>
  <div class="tutorial-overview">
    <div class="tutorial-details">
      <div class="like">
        <FontAwesomeIcon class="icon fa-lg heart-icon" icon="heart" />
        <span>117</span>
      </div>
      <div class="author">
        <div
          v-for="tag in activetutorial.author.tags"
          :key="tag.id"
          class="tags"
        >
          <span class="tag" :style="{ background: tag.colour }">{{
            tag.name
          }}</span>
        </div>
        <span>{{ activetutorial.author.name }}</span>
        <span class="profilepicture"
          ><img :src="activetutorial.author.profilepicture"
        /></span>
      </div>
    </div>
    <div class="tutorial-body">
      <div class="tutorial-tags">
        <img :src="activetutorial.complexity" alt="complexity" />
        <img :src="activetutorial.type" alt="type" />
        <img :src="activetutorial.language" alt="language" />
        <img :src="activetutorial.framework" alt="framework" />
      </div>
      <div v-html="activetutorial.body"></div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "tutorial",
  components: {
    FontAwesomeIcon,
  },
  computed: {
    activetutorial: function () {
      let fetchedTutorial = {
        id: "1",
        name: "Hello World",
        complexity:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        type: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        language: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        framework: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        author: {
          id: 1,
          name: "Developer 1",
          profilepicture:
            "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
          tags: [
            { id: 1, name: "AKSA", colour: "#f58493" },
            { id: 2, name: "intern", colour: "#ffde82" },
            { id: 3, name: "Enhanzz AG", colour: "#7ee7f7" },
          ],
        },
        body: `<h1>My Tutorial</h1>
<p>Some text.</p>
<h2>Subheading</h2>
<p>Here I talk more in-depth about shit.</p>
<h1>Another Top-Level Heading</h1>
<p>Almost done.</p>`,
      };
      return fetchedTutorial;
    },
  },
};
</script>

<style scoped lang="scss">
.tutorial-overview {
  .tutorial-details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.25), 0 0px 2px rgba(0, 0, 0, 0.22);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  span {
    padding: 10px;
  }
  .like {
    text-align: left;
    flex: 1;
  }
  .author {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .tags {
      vertical-align: center;
      .tag {
        position: relative;
        top: 25%;
        margin-right: 10px;
        padding: 5px;
        border-radius: 2px;
      }
    }
    .profilepicture {
      img {
        height: inherit !important;
      }
      height: 30px;
    }
    .profilepicture:hover{
      cursor:pointer;
    }
  }
  .tutorial-body {
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.25), 0 0px 2px rgba(0, 0, 0, 0.22);
    padding:5px;
    .tutorial-tags{
      display:flex;
      img{
        height:80px;
        padding:10px;
      }
    }
  }
}
.heart-icon {
  margin-top: 5px;
}
.heart-icon:hover {
  color: var(--dark-primary);
  cursor: pointer;
}
</style>
