<template>
  <footer class="footer">
    <div>
      <a href="/" class="link"> Privacy policy</a>
    </div>
    <div>
      <a href="/" class="link">GTC</a>
    </div>
    <div class="jenyus">
      <div class="left-align">
        <a href="/" class="link">Jenyus</a>
        <span>©Jenyus Org</span>
        <a href="https://dan6erbond.github.io/#/" class="link" target="blank">
          Dan6erbond
        </a>
        <a href="https://doemuu.live/#/" class="link" target="blank">Doemuu</a>
      </div>
      <div class="right-align">
        <div class="jenyus-img"></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  justify-content: space-around;
  border-top: solid 2px var(--light-secondary);
}
.link {
  color: var(--font-colour);
}
.link:hover {
  cursor: pointer;
  text-decoration: none;
}
.jenyus {
  display: flex;
  flex-direction: row;
}
.left-align {
  text-align: start;
  border-right: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.jenyus-img {
  background-image: url("../assets/jenyus-logo.png");
  background-size: cover;
  height: 125px;
  width: 125px;
}

@media only screen and (max-width: 600px) {
  .left-align {
    display: none;
  }
}
</style>
