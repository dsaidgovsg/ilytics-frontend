<template>
  <div class="file">
    <md-toolbar class="container">
      <h3 class="md-title">
        <img @click="change" src="../assets/back.svg" />
      </h3>
      <div class="font">Statistics</div>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
    </md-toolbar>
  </div>
</template>

<style scoped>
.font {
  text-align: center;
  font: Bold 20px/24px Lato;
  letter-spacing: -0.4px;
  color: #000000;
}

.md-toolbar {
  justify-content: space-between;
}
</style>

<script>
//comment
export default {
  methods: {
    change() {
      this.$emit("goingBack", true);
    }
  }
};
</script>
