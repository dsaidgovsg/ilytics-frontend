<template>
  <div class="file">
    <md-toolbar class="container">
      <h3 class="md-title"><img src="../assets/logo.svg"> </h3>
      <img src="../assets/ilytics.svg"> 
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





</style>

<script>


export default{
    methods: {
    contact() {
        this.$emit('contact', true);
    }
    }
}

</script>
