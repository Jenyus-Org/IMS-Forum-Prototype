<template>
  <div class="tutorial-overview">
    <div class="tutorial-details">
      <div class="like ml-2">
        <FontAwesomeIcon class="icon fa-lg heart-icon" icon="heart" />
        <span>117</span>
      </div>
      <div class="author">
        <div class="tags">
          <b-badge
            class="mr-2"
            :style="{ background: tag.colour }"
            v-for="tag in activetutorial.author.tags"
            :key="tag.id"
            >{{ tag.name }}</b-badge
          >
        </div>
        <span>{{ activetutorial.author.name }}</span>
        <b-avatar class="mx-2 profilepicture"></b-avatar>
      </div>
    </div>
    <div class="tutorial-body p-4">
      <div class="tutorial-tags mb-4">
        <img class="mr-4" :src="activetutorial.complexity" alt="complexity" />
        <img class="mr-4" :src="activetutorial.type" alt="type" />
        <img class="mr-4" :src="activetutorial.language" alt="language" />
        <img class="mr-4" :src="activetutorial.framework" alt="framework" />
      </div>
      <div v-if="post" v-html="post.tocHTML"></div>
      <div v-if="post" v-html="post.bodyHTML"></div>
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
  data() {
    return {
      post: null,
    };
  },
  computed: {
    activetutorial: function () {
      let fetchedTutorial = {
        id: "1",
        name: "Hello World",
        complexity:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        type:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        language:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        framework:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
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
  mounted() {
    this.$strapi.posts.get(1).then((post) => (this.post = post));
  },
};
</script>

<style scoped lang="scss">
.tutorial-overview {
  .tutorial-details {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.125);
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
      display: flex;
      align-items: center;
    }

    .profilepicture {
      cursor: pointer;
    }
  }

  .tutorial-body {
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 5px;
    text-align: left;

    .tutorial-tags {
      display: flex;

      img {
        height: 60px;
      }
    }
  }
}
.heart-icon {
  margin-top: 5px;
  cursor: pointer;

  &:hover {
    color: var(--dark-primary);
  }
}
</style>
