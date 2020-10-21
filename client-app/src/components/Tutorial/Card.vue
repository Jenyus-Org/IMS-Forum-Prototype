<template>
  <div class="tutorial-block">
    <div class="title-container">
      <div class="placeholder"></div>
      <div class="tutorial-title">{{ tutorial.name }}</div>
    </div>
    <div class="body-container">
      <div class="display-image-container">
        <img
          class="display-image"
          :src="tutorial.imgsrc"
          :alt="tutorial.name"
        />
      </div>
      <div class="display-description">
        <div class="description-title">
          <span>Why {{ tutorial.name }}?</span>
        </div>
        <div class="description-body">
          <span>{{ tutorial.reasondescription }}</span>
        </div>
        <div class="description-title">
          <span>What is {{ tutorial.name }}</span>
        </div>
        <div class="description-body">
          <span>{{ tutorial.description }}</span>
        </div>
      </div>
    </div>
    <div class="footer-container">
      <div class="details">
        <img :src="tutorial.imgsrc" alt="complexity" />
        <img :src="tutorial.imgsrc" alt="type" />
        <img :src="tutorial.imgsrc" alt="language" />
        <img :src="tutorial.imgsrc" alt="framework" />
      </div>
      <div class="continue-btn">
        <router-link class="btn" :to="tutoriallink">Learn more</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tutorial-Card",
  props: {
    tutorial: Object,
  },
  methods: {
    determineData() {
      console.log("Determine");
    },
  },
  computed:{
    tutoriallink: function(){
      let retVal = `/tutorial/${this.tutorial.id}`;
      return retVal;
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/tutorial.scss";
</style>
