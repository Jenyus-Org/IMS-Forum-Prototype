<template>
  <div>
    <h1 class="title pb-2">Submit a Tutorial</h1>
    <div class="d-flex">
      <editor
        @change="onContentChange"
        :initialValue="text"
        ref="toastuiEditor"
        height="550px"
        style="flex: 1"
      />
      <div class="toolbar">
        <div class="d-flex flex-column align-items-start px-2 py-2 ml-4">
          <p style="color: var(--dark-primary); font-weight: bold">Title</p>
          <b-form-input
            v-model="title"
            placeholder="Tutorial title"
            class="mb-4"
          ></b-form-input>
          <p style="color: var(--dark-primary); font-weight: bold">Tags</p>
          <p
            style="color: var(--dark-primary)"
            class="pl-2"
            @click="categoryCollapsed = !categoryCollapsed"
          >
            Category
          </p>
          <div
            :style="{ height: categoryCollapsed ? '50px' : 0 }"
            class="dropdown-container"
          >
            <b-dropdown class="dropdown mb-3" :text="selectedBasicFilter">
              <b-dropdown-item
                v-for="basicfilter in basicfilters"
                :key="basicfilter.id"
                @click="choose(basicfilter.name, 1)"
              >
                {{ basicfilter.name }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
          <p
            style="color: var(--dark-primary)"
            @click="languageCollapsed = !languageCollapsed"
            class="pl-2"
          >
            Language
          </p>
          <div
            :style="{ height: languageCollapsed ? '50px' : 0 }"
            class="dropdown-container"
          >
            <b-dropdown class="dropdown mb-3" :text="selectedLanguage">
              <b-dropdown-item
                v-for="language in languages"
                :key="language.id"
                @click="choose(language.name, 2)"
              >
                {{ language.name }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
          <p
            style="color: var(--dark-primary)"
            @click="frameworkCollapsed = !frameworkCollapsed"
            class="pl-2"
          >
            Framework
          </p>
          <div
            :style="{ height: frameworkCollapsed ? '50px' : 0 }"
            class="dropdown-container"
          >
            <b-dropdown class="dropdown mb-3" :text="selectedFramework">
              <b-dropdown-item
                v-for="framework in frameworks"
                :key="framework.id"
                @click="choose(framework.name, 3)"
              >
                {{ framework.name }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
          <p
            style="color: var(--dark-primary)"
            @click="complexityCollapsed = !complexityCollapsed"
            class="pl-2"
          >
            Complexity
          </p>
          <div
            :style="{ height: complexityCollapsed ? '50px' : 0 }"
            class="dropdown-container"
          >
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
          <div class="text-right d-block w-100 mt-1 pt-3 pr-2 pb-1" style="border-top: solid 1px #e5e5e5">
            <b-button>Submit</b-button>
          </div>
        </div>
      </div>
    </div>
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
      categoryCollapsed: false,
      languageCollapsed: false,
      frameworkCollapsed: false,
      complexityCollapsed: false,
      title: "",
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

.toolbar {
  p {
    color: black !important;
  }
}
</style>

<style scoped>
.title {
  color: var(--dark-primary);
}

.toolbar > div {
  width: 250px;
  border-radius: 2px;
  border: 1px solid #e5e5e5;
}

.dropdown-container {
  overflow: hidden;
  transition: height 0.5s ease;
}
</style>
