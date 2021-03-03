<template>
  <div class="mainUpload">
    <Animation v-show="loading" />
    <div class="upload">
      <picture-input
        ref="pictureInput"
        width="300"
        height="300"
        margin="16"
        accept="image/jpeg, image/png"
        size="10"
        :hideChangeButton="true"
        :custom-strings="{
        tap: 'Tap here to select a photo <br>from your gallery'
      }"
        @change="onSubmit"
      ></picture-input>
    </div>
    <label class="checkbox-inline">
      <input type="checkbox" ref="autocrop" checked> Auto Crop
    </label>
  </div>
</template>

<style scoped>
.upload {
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox-inline {
  display: flex;
  justify-content: center;
  
}
</style>

<script>
//comment
import axios from "axios";
import PictureInput from "vue-picture-input";
import Animation from "./Animation.vue";

var APP_IP = process.env.VUE_APP_IP

export default {
  data() {
    return {
      loading: false
    };
  },
  components: {
    PictureInput,
    Animation
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      this.file = this.$refs.pictureInput.file;
      if(this.$refs.autocrop.checked == true){
        this.auto_crop = 1
      }
      else{
        this.auto_crop = 0
      }
      console.log(this.auto_crop)
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("auto_crop", this.auto_crop)
      axios
        .post(`http://${APP_IP}:8888/upload`, formData)
        .then(response => {
          const result = [response.data.img, response.data.stat];
          this.$emit("submission", result);
          this.loading = false;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
