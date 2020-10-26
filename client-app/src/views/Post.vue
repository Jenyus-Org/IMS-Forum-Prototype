<template>
  <div class="post-container">
    <div class="post" v-if="post">
      <span class="title">Post</span>
      <div class="post-content">
        <div v-html="post.bodyHTML"></div>
      </div>
    </div>
    <div class="comments p-2" style="overflow: hidden">
      <comment
        v-for="comment in post.comments"
        :key="comment.id"
        :comment="comment"
      ></comment>
    </div>
  </div>
</template>

<script>
import Comment from "../components/Comment";

export default {
  components: {
    Comment,
  },
  name: "Post",
  data() {
    return {
      post: null,
    };
  },
  mounted() {
    this.$strapi.posts
      .get(this.$route.params.id)
      .then((post) => (this.post = post));
  },
};
</script>

<style lang="scss">
.post-content {
  img {
    width: 100%;
  }
  pre > code {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #abb2bf;
    background: #282c34;
  }
}
.comments {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 10px;
  text-align: left;
}
</style>

<style scoped lang="scss">
.post-container {
  display: flex;
  flex-wrap: wrap;
  .post {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 5px;
    .title {
      width: 100%;
      padding: 5px;
      background-color: var(--dark-primary);
      color: var(--white);
      text-align: left;
    }
    .post-content {
      text-align: left;
      min-width: 400px;
      padding: 5px;
    }
  }
}
</style>
