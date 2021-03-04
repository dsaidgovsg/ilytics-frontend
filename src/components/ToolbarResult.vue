<template>
  <div class="file">
    <md-toolbar class="container">
      <h3 class="md-title">
        <a v-bind:href="url">
          <img src="../assets/back.svg" />
        </a>
      </h3>
      <div class="font">Results</div>
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

var APP_IP = process.env.VUE_APP_IP

export default {
    data() {
        return {
            url:`http://${APP_IP}:8080`
        }
    }
}
//comment
</script>
