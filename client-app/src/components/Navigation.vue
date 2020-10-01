<template>
  <div>
    <div class="navigation" v-if="loggedIn">
      <div class="navi">
        <div class="header-logo">
          <p>IMS-Forum</p>
        </div>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="/">General</router-link>
          </li>
          <li class="nav-item">
            <router-link tclass="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="navigation" v-else>
      <div class="navi">
        <div class="header-logo">
          <p>IMS-Forum</p>
        </div>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/">General</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigaton",
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>

<style scoped>
.navigation {
  width: 15%;
  height: 100vh;
  min-width: 300px;
  position: absolute;
}
.navi {
  height: inherit;
  background-color: lightgrey;
}

.nav-item:hover{
  border: solid 1px #0a200d;
  background-color: rgb(76, 179, 76)
}

.active{
  border-left: solid 8px #0a200d;
}

.header-logo {
  height: 50px;
  border-bottom: solid 1px black;
  width: 100%;
}
.header-logo p {
  position: relative;
  transform: translateY(-14px);
  top: 50%;
}
</style>
