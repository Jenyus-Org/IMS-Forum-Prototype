<template>
  <div class="header">
    <div class="header-content"></div>
    <div v-if="$strapi.user" class="header-content text">
      <div class="header-content user-details">
        <div class="profile-score detail">
          <span>{{ $strapi.user.username }}</span>
          <div class="karma">
            <FontAwesomeIcon class="icon fa-sm" icon="paw" />
            <span>6520</span>
          </div>
        </div>
        <router-link
          class="avatar-link"
          :to="{ name: 'user', params: { id: $strapi.user.id } }"
        >
          <b-avatar class="mx-2"></b-avatar>
        </router-link>
      </div>
    </div>
    <div v-else class="header-content text">
      <router-link :to="{ name: 'signIn' }">Sign In</router-link>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Header",
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {},
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
  background-color: #24292e;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15), 0 1px 4px rgba(0, 0, 0, 0.15);
  top: 0;
}
.text {
  align-self: center;
  color: white;
  a {
    padding: 10px;
    padding-bottom: 5px;
    color: white;
    &:hover {
      cursor: pointer;
      text-decoration: none;
    }
  }
}
.header-content {
  flex: 1;
  .user-details {
    display: flex;
    justify-content: flex-end;
    .profile-score {
      line-height: 1;
      span {
        padding: 5px;
        font-size: 14px;
      }
    }
    .detail {
      align-self: center;
      padding-right: 10px;
    }
  }
}
.avatar-link {
  padding: 0px !important;
  text-align: center;
  .text {
    align-self: center;
    a {
      padding: 10px;
      padding-bottom: 5px;
      color: white;
      &:hover {
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
}
</style>
