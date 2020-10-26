<template>
  <div class="forum">
    <div class="post-container" v-for="post in posts" :key="post.id">
      <div class="post">
        <div class="left-align">
          <span
            ><FontAwesomeIcon class="icon fa-sm" icon="paw" />
            {{ post.likes }}</span
          >
        </div>
        <div class="right-align">
          <div class="author">
            <div class="d-flex justify-content-between">
              <span>
                <b>
                  {{ post.title }}
                </b>
              </span>
              <span>{{ post.author.username }}</span>
            </div>
            <div class="tag-container">
              <span
                class="tag"
                v-for="tag in post.author.tags"
                :key="tag.id"
                :style="{ background: tag.colour }"
              >
                {{ tag.name }}
              </span>
            </div>
          </div>
          <div class="body">
            {{ post.body.substring(0, 250) }}
            {{ post.body.substring(250) && "..." }}
          </div>
          <div class="footer">
            <div class="actions">
              <span>
                {{ post.comments.length }}
                <FontAwesomeIcon class="icon fa-sm" icon="comment" />
              </span>
              <span><FontAwesomeIcon class="icon fa-sm" icon="share" /></span>
              <span>
                <FontAwesomeIcon class="icon fa-sm" icon="exclamation" />
              </span>
              <span @click="expand(post.id)" class="expand">
                <FontAwesomeIcon class="icon fa-sm" icon="expand" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Forum",
  components: {
    FontAwesomeIcon,
  },
  methods: {
    expand(id) {
      this.$router.push({ name: "post", params: { id } });
    },
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.$strapi.posts.get().then((posts) => (this.posts = posts));
  },
};
</script>

<style scoped lang="scss">
.forum {
  display: flex;
  flex-wrap: wrap;
  .post-container {
    margin: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 500px;
    .post {
      display: flex;
      margin: 5px;
      .left-align {
        padding: 5px;
        border-right: solid 1px #dae0e6;
        span {
          position: relative;
          top: 45%;
        }
      }
      .right-align {
        flex: 1;
        .author {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 5px;
          text-align: right;
          line-height: 1.2;
          .tag-container {
            .tag {
              padding: 2px;
            }
          }
          span {
            margin-right: 2px;
          }
        }
        .body {
          padding: 5px;
          text-align: left;
          border-top: solid 1px #dae0e6;
          border-bottom: solid 1px #dae0e6;
        }
        .footer {
          display: flex;
          justify-content: space-around;
          span {
            flex: 1;
          }
          .actions {
            flex: 1;
            display: flex;
            .expand {
              &:hover {
                cursor: pointer;
              }
            }
            .icon {
              flex: 1;
            }
          }
        }
      }
    }
  }
}
</style>
