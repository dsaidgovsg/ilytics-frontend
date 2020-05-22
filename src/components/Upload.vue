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
  </div>
</template>

<style scoped>
.upload {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
//comment
import axios from "axios";
import PictureInput from "vue-picture-input";
import Animation from "./Animation.vue";

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
      const formData = new FormData();
      formData.append("file", this.file);
      axios
        .post("http://54.255.149.167:8080/upload", formData)
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
