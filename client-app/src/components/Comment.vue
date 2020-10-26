<template>
  <div class="comment">
    <div class="d-block mt-2"></div>
    <span class="text-muted" style="font-size: 14px">
      {{ username }} says:
    </span>
    <div class="m-0 mb-2" v-html="comment.bodyHTML"></div>
    <div class="comments">
      <comment
        v-for="comment in comment.comments"
        :key="comment.id"
        :comment="comment"
      ></comment>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["comment"],
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    this.comment.author.fetch().then((res) => (this.username = res.username));
  },
};
</script>

<style lang="scss" scoped>
.comment {
  width: 100%;
  text-align: left;
  border-right: 0;
  border-left: 0;
  box-shadow: none;
  margin: 0;
  padding: 0 10px;
  &::before {
    content: "";
    margin: 0 -10000px;
    display: block;
    border-top: 1px solid var(--secondary);
  }
  /*&::after {
    content: "";
    margin: 0 -10000px -10px -10000px;
    display: block;
    border-bottom: 1px solid var(--secondary);
  }*/
}
</style>
