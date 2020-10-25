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
            <span>{{ post.author.name }}</span>
            <div class="tag-container">
              <span
                class="tag"
                v-for="tag in post.author.tags"
                :key="tag.id"
                :style="{ background: tag.colour }"
                >{{ tag.name }}</span
              >
            </div>
          </div>
          <div class="body">
            {{ post.content }}
          </div>
          <div class="footer">
            <div class="actions">
              <span
                >{{ post.commentnumber }}
                <FontAwesomeIcon class="icon fa-sm" icon="comment"
              /></span>
              <span><FontAwesomeIcon class="icon fa-sm" icon="share" /></span>
              <span
                ><FontAwesomeIcon class="icon fa-sm" icon="exclamation"
              /></span>
              <span><FontAwesomeIcon class="icon fa-sm" icon="expand" /></span>
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
  data() {
    return {
      posts: [
        {
          id: 1,
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
          content:
            "Nunc rhoncus, tortor et aliquet rhoncus, ex diam interdum dui, sit amet iaculis lorem ligula eu urna. Cras vitae ante sit amet dui maximus varius at non sapien. Donec sapien elit, molestie ac malesuada a, tincidunt a erat. Integer a augue id lorem auctor egestas. Aenean quis tincidunt eros. Sed imperdiet consectetur mi, at cursus ante venenatis vitae. Aliquam enim quam, hendrerit a augue a, faucibus fringilla libero.",
          likes: 117,
          commentnumber: 13,
        },
        {
          id: 2,
          author: {
            id: 2,
            name: "Developer 2",
            profilepicture:
              "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
            tags: [
              { id: 1, name: "AKSA", colour: "#f58493" },
              { id: 2, name: "intern", colour: "#ffde82" },
              { id: 3, name: "BlueMouse GmbH", colour: "#7ee7f7" },
            ],
          },
          content:
            "Nunc rhoncus, tortor et aliquet rhoncus, ex diam interdum dui, sit amet iaculis lorem ligula eu urna. Cras vitae ante sit amet dui maximus varius at non sapien. Donec sapien elit, molestie ac malesuada a, tincidunt a erat. Integer a augue id lorem auctor egestas. Aenean quis tincidunt eros. Sed imperdiet consectetur mi, at cursus ante venenatis vitae. Aliquam enim quam, hendrerit a augue a, faucibus fringilla libero.",
          likes: 89,
          commentnumber: 5,
        },
        {
          id: 3,
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
          content:
            "Nunc rhoncus, tortor et aliquet rhoncus, ex diam interdum dui, sit amet iaculis lorem ligula eu urna. Cras vitae ante sit amet dui maximus varius at non sapien. Donec sapien elit, molestie ac malesuada a, tincidunt a erat. Integer a augue id lorem auctor egestas. Aenean quis tincidunt eros. Sed imperdiet consectetur mi, at cursus ante venenatis vitae. Aliquam enim quam, hendrerit a augue a, faucibus fringilla libero.",
          likes: 12,
          commentnumber: 1,
        },
      ],
    };
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