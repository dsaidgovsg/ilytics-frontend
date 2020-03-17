<template>
  <div class="file">
    <div class="result">
      <b-img v-bind:src="'data:image/jpeg;base64,'+ parentData" />
      <br />
      <b-button block variant="primary" @click="viewStats">
        <md-icon>remove_red_eye</md-icon>View Statistics
      </b-button>
    </div>
  </div>
</template>

<style scoped>
.btn-block {
  margin: auto;
  display: block;
  width: 96%;
  margin-top: 10px;
}
.btn-primary {
  color: #fff;
  background-color: #0d5896;
  border-color: #0d5896;
}

.buttons {
  position: fixed;
  top: 450px;
  left: 140px;
  width: 180px;
  height: 24px;
  opacity: 1;
}
</style>

<script>
//comment
export default {
  data() {
    return {};
  },
  props: {
    parentData: String
  },
  methods: {
    viewStats() {
      this.$emit("viewStats");
    }
  }
};
</script>
