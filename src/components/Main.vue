<template>
  <div>
    <Toolbar v-show="uploadCondition" />
    <ToolbarStatistics @goingBack="goingBack" v-show="statsCondition" />
    <ToolbarResult v-show="picCondition" />
    <Upload v-show="uploadCondition" @submission="upload" />
    <Result :parentData="imageBytes" v-show="picCondition" @viewStats="displayStatistics" />
    <Statistics :parentData="stat" v-show="statsCondition" />
  </div>
</template>

<style scoped>
</style>

<script>
//comment
import Toolbar from "./Toolbar.vue";
import ToolbarStatistics from "./ToolbarStatistics.vue";
import ToolbarResult from "./ToolbarResult.vue";
import Upload from "./Upload.vue";
import Result from "./Result.vue";
import Statistics from "./Statistics.vue";

export default {
  data() {
    return {
      imageBytes: "",
      stat: { 1: "1" },
      uploadCondition: true,
      picCondition: false,
      statsCondition: false
    };
  },
  components: {
    Toolbar,
    ToolbarResult,
    ToolbarStatistics,
    Upload,
    Result,
    Statistics
  },
  methods: {
    displayStatistics() {
      this.picCondition = false;
      this.statsCondition = true;
    },
    goingBack() {
      this.picCondition = true;
      this.statsCondition = false;
    },
    upload($event) {
      this.imageBytes = $event[0];
      this.stat = $event[1];
      this.uploadCondition = false;
      this.picCondition = true;
    }
  }
};
</script>

