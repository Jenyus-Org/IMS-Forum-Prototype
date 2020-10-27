<template>
  <div class="tutorial-block p-1">
    <div class="title-container">
      <div class="tutorial-title text-left ml-3">{{ tutorial.name }}</div>
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
    <div class="footer-container align-items-center p-1">
      <div class="details">
        <img :src="tutorial.imgsrc" alt="complexity" />
        <img :src="tutorial.imgsrc" alt="type" />
        <img :src="tutorial.imgsrc" alt="language" />
        <img :src="tutorial.imgsrc" alt="framework" />
      </div>
      <div class="continue-btn">
        <router-link
          class="btn"
          :to="{ name: 'tutorial', params: { id: tutorial.id } }"
          >Learn more</router-link
        >
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
};
</script>

<style lang="scss">
@import "../../assets/css/tutorial.scss";
</style>
