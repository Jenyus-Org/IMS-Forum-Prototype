<template>
  <div class="searchbar-container">
    <b-form class="searchbar">
      <div class="filtered-search">
        <b-form-input
          type="text"
          placeholder="Search"
          class="search-input"
        ></b-form-input>
        <div class="filter">
          <b-dropdown class="dropdown" :text="selectedBasicFilter">
            <b-dropdown-item
              v-for="basicfilter in basicfilters"
              :key="basicfilter.id"
              @click="choose(basicfilter.name, 1)"
            >
              {{ basicfilter.name }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="filter">
          <b-dropdown class="dropdown" :text="selectedLanguage">
            <b-dropdown-item
              v-for="language in languages"
              :key="language.id"
              @click="choose(language.name, 2)"
            >
              {{ language.name }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="filter">
          <b-dropdown class="dropdown" :text="selectedFramework">
            <b-dropdown-item
              v-for="framework in frameworks"
              :key="framework.id"
              @click="choose(framework.name, 3)"
            >
              {{ framework.name }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="filter">
          <b-dropdown class="dropdown" :text="selectedComplexity">
            <b-dropdown-item
              v-for="comp in complexities"
              :key="comp"
              @click="choose(comp, 4)"
            >
              {{ comp }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <FontAwesomeIcon class="icon fa-lg search-icon" icon="search" />
      </div>
    </b-form>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  data() {
    return {
      languages: [
        { id: 1, name: "Javascript" },
        { id: 2, name: "C#" },
      ],
      frameworks: [
        { id: 1, name: "Vue" },
        { id: 2, name: "Angular" },
        { id: 3, name: "React" },
      ],
      complexities: [1, 2, 3, 4, 5, 6],
      basicfilters: [
        { id: 1, name: "General" },
        { id: 2, name: "FrontEnd" },
        { id: 3, name: "BackEnd" },
      ],
      selectedLanguage: "Language",
      selectedFramework: "Framework",
      selectedComplexity: "Complexity",
      selectedBasicFilter: "Category",
      selectedDropdownItem: "Choose",
    };
  },
  methods: {
    choose(chosenItem, filterid) {
      switch (filterid) {
        case 1:
          this.selectedBasicFilter = chosenItem;
          break;
        case 2:
          this.selectedLanguage = chosenItem;
          break;
        case 3:
          this.selectedFramework = chosenItem;
          break;
        case 4:
          this.selectedComplexity = chosenItem;
          break;
        default:
          break;
      }
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss">
@import "../assets/css/searchbar.scss";
</style>
