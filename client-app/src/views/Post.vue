<template>
  <div class="post-container">
    <div class="post">
      <span class="title">Post</span>
      <div class="post-content">
        <p>{{ post.content }}</p>
      </div>
    </div>
    <div class="comment-container">
      <span class="title">Comment</span>
      <div
        v-for="comment in post.comments"
        :key="comment.id"
      >
        <div class="comment-box">
          <span>{{ comment.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      post: {
        content:
          "Quisque lacus tellus, pretium dapibus eros vel, tincidunt eleifend dui. Nam eu dolor eu nulla dignissim tempor eget quis augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus augue ex, tincidunt vel sapien eu, hendrerit fringilla sem. Proin interdum gravida nunc, nec lacinia urna interdum et.",
        comments: [
          {
            id: 1,
            parent: undefined,
            content: "Comment 1",
            author: {
              name: "Developer 1",
            },
            created: "26.10.2020",
          },
          {
            id: 2,
            parent: 1,
            content: "Comment 1.1",
            author: {
              name: "Developer 1",
            },
            created: "26.10.2020",
          },
          {
            id: 3,
            parent: undefined,
            content: "Comment 2",
            author: {
              name: "Developer 1",
            },
            created: "26.10.2020",
          },
          {
            id: 4,
            parent: undefined,
            content: "Comment 3",
            author: {
              name: "Developer 1",
            },
            created: "26.10.2020",
          },
          {
            id: 5,
            parent: 4,
            content: "Comment 3.1",
            author: {
              name: "Developer 1",
            },
            created: "26.10.2020",
          },
          {
            id: 6,
            parent: 5,
            content: "Comment 3.2",
            author: {
              name: "Developer 1",
            },
            created: "26.10.2020",
          },
          {
            id: 7,
            parent: 6,
            content: "Comment 3.3",
            author: {
              name: "Developer 1",
            },
            created: "26.10.2020",
          },
          {
            id: 8,
            parent: 7,
            content: "Comment 3.4",
            author: {
              name: "Developer 1",
            },
            created: "26.10.2020",
          },
          {
            id: 9,
            parent: 5,
            content: "Comment 3.1.1",
            author: {
              name: "Developer 1",
            },
            created: "26.10.2020",
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
.post-container {
  display: flex;
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
      padding: 5px;
    }
  }
  .comment-container {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 5px;
    .title {
      text-align: left;
      width: 100%;
    }
  }
}
</style>