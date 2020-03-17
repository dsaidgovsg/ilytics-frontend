<template>
  <div class="file">
    <md-toolbar class="container">
      <h3 class="md-title"><img src="../assets/logo.svg"> </h3>
      <img src="../assets/ilytics.svg" v-show="imgCondition"> 
      <div class="title" v-show="!imgCondition"> {{title}} </div>
            <md-button @click="contact" class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
    </md-toolbar>
  </div>
</template>

<style scoped> 

.md-toolbar{
    justify-content: space-between;
}

.title{
  text-align: center;
  font: Bold 20px/24px Lato;
  letter-spacing: -0.4px;
  color: #000000;
}

</style>

<script>

export default{
    data() {
      
    return {
      imgCondition: true,
      title: "",
    }
  }, methods: {
    contact() {
        this.$emit('contact', true);
    }
    }
}

</script>
