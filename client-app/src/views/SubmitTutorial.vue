<template>
  <div>
    <h1 class="text-center">Submit a Tutorial</h1>
    <div class="d-flex my-4">
      <b-dropdown class="dropdown" :text="selectedBasicFilter">
        <b-dropdown-item
          v-for="basicfilter in basicfilters"
          :key="basicfilter.id"
          @click="choose(basicfilter.name, 1)"
        >
          {{ basicfilter.name }}
        </b-dropdown-item>
      </b-dropdown>
      <b-dropdown class="dropdown" :text="selectedLanguage">
        <b-dropdown-item
          v-for="language in languages"
          :key="language.id"
          @click="choose(language.name, 2)"
        >
          {{ language.name }}
        </b-dropdown-item>
      </b-dropdown>
      <b-dropdown class="dropdown" :text="selectedFramework">
        <b-dropdown-item
          v-for="framework in frameworks"
          :key="framework.id"
          @click="choose(framework.name, 3)"
        >
          {{ framework.name }}
        </b-dropdown-item>
      </b-dropdown>
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
    <editor
      @change="onContentChange"
      :initialValue="text"
      ref="toastuiEditor"
    />
  </div>
</template>

<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/vue-editor";

export default {
  components: {
    editor: Editor,
  },
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
      text: "",
    };
  },
  methods: {
    onContentChange() {
      this.text = this.$refs.toastuiEditor.invoke("getMarkdown");
    },
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
};
</script>

<style lang="scss">
@import "../assets/css/searchbar.scss";
</style>
