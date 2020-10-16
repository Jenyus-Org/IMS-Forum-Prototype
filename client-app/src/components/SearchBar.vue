<template>
  <div class="searchbar">
    <b-form-input type="search" class="search-input"></b-form-input>
    <b-form-select
      v-model="selectedLanguage"
      :options="languages"
      size="sm"
    ></b-form-select>
    <b-form-select
      v-model="selectedFramework"
      :options="frameworks"
      size="sm"
    ></b-form-select
    ><b-form-select
      v-model="selectedComplexity"
      :options="complexities"
      size="sm"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  data(){
    return{
      languages:["Javascript", "C#"],
      frameworks:["Vue", "Angular", "React"],
      complexities: [1,2,3,4,5,6],
      selectedLanguage:"Javascript",
      selectedFramework: "Vue",
      selectedComplexity: "1",
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/searchbar.scss";
</style>
