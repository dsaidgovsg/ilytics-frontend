<template>
    <div>
    <Toolbar  v-show="uploadCondition" />
    <Toolbar v-show="hamburgerCondition" />
    <ToolbarStatistics @goingBack="goingBack" v-show="statsCondition" />
    <ToolbarResult  v-show="picCondition" />
    <div class='mainUpload' v-show="uploadCondition">   
    <div class='upload'>
    <picture-input 
      ref="pictureInput"
      width="600" 
      height="600" 
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      hideChangeButton="true"
      :custom-strings="{
        tap: 'Tap here to select a photo <br>from your gallery'
      }"
      @change="onSubmit">
    </picture-input>
</div>
    </div>

    <div class="animation" v-show="loading" >
    <div class="orbit-spinner">
    <div class="orbit"></div>
    <div class="orbit"></div>
    <div class="orbit"></div>
    </div>
    </div>

    <div class='result' v-show="picCondition">
    <b-img v-bind:src="'data:image/jpeg;base64,'+imageBytes"/>
    <br>
    <b-button block variant="primary" @click="displayStatistics"><md-icon >remove_red_eye</md-icon> View Statistics</b-button></div>
    <div class='statsresult' v-show="statsCondition">  
        <div class="total-rotifer"> Total rotifer count <div class="total-rotifer-count">  {{stat["rot"] + stat["1"] + stat["2"]}}  </div>  </div>
        <div class="breakdown"> Breakdown </div>
        <div class="breakdown-box">
        <div class="rotifer-text"> Rotifer </div>
        <div class="rotifer-text-count"> {{stat["rot"]}} </div>
        <div class="green-bar" v-bind:style=" {top: 262 + 'px', left: 24 + 'px' }"></div>
        <div class="one-egg-carrier-text"> One-egg carrier</div>
        <div class="one-egg-carrier-count"> {{stat[1]}}</div>
        <div class="green-bar" v-bind:style=" {top: 302 + 'px', left: 24 + 'px' }"></div>
        <div class="two-egg-carrier-text"> Two-egg carrier</div>
        <div class="two-egg-carrier-count"> {{stat[2]}}</div>
        <div class="green-bar" v-bind:style=" {top: 342 + 'px', left: 25 + 'px' }"></div>
        <div class="dead-rotifers-text"> Dead rotifers</div>
        <div class="dead-rotifers-count"> {{stat[5]}}</div>
         <div class="red-bar" v-bind:style=" {top: 382 + 'px', left: 24 + 'px' }"></div>
        <div class="ciliates-text"> Ciliates </div>
        <div class="ciliates-count"> {{stat[4]}}</div>
         <div class="red-bar" v-bind:style=" {top: 422 + 'px', left: 24 + 'px' }"></div>
        <div class="clumps-text"> Clumps </div>
        <div class="clumps-count"> {{stat[6]}} </div>
         <div class="red-bar" v-bind:style=" {top: 462 + 'px', left: 24 + 'px' }"></div>
        </div>
    </div>
    <div class="hamburger" v-show="hamburgerCondition">
    <div class="box" ><img src="../assets/email.svg" :href="`mailto:`"><a :href="`mailto:${email}`">&nbsp;&nbsp; Contact Us</a></div>
    </div>
    </div>
</template>

<style scoped>

.box{
    width: 100vw;
    height: 48px;
    border: 1px solid #E0E0E0;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font: Bold 16px/19px Lato;
    letter-spacing: -0.32px;
    color: #000000;
    opacity: 1;
    white-space: normal; 
}

.hamburger{
    display: flex;
    flex-direction: column;
    align-items: center;
}


.btn-primary { 
    color: #fff; 
    background-color: #0D5896;
    border-color: #0D5896;
}

.btn-block {
    margin: auto; 
    display: block; 
    width: 96%; 
    margin-top: 10px;
}


.animation{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
}

.orbit-spinner, .orbit-spinner * {
      box-sizing: border-box;
    }

    .orbit-spinner {
      height: 55px;
      width: 55px;
      border-radius: 50%;
      perspective: 800px;
    }

    .orbit-spinner .orbit {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    .orbit-spinner .orbit:nth-child(1) {
      left: 0%;
      top: 0%;
      animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
      border-bottom: 3px solid #ff1d5e;
    }

    .orbit-spinner .orbit:nth-child(2) {
      right: 0%;
      top: 0%;
      animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
      border-right: 3px solid #1efc38;
    }

    .orbit-spinner .orbit:nth-child(3) {
      right: 0%;
      bottom: 0%;
      animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
      border-top: 3px solid #1f44ff;
    }

    @keyframes orbit-spinner-orbit-one-animation {
      0% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
      }
      100% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
      }
    }

    @keyframes orbit-spinner-orbit-two-animation {
      0% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
      }
      100% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
      }
    }

    @keyframes orbit-spinner-orbit-three-animation {
      0% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
      }
      100% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
      }
    }

.green-bar{
    position:fixed;
    width: 21px;
    height: 4px;
    background: #5DD528 0% 0% no-repeat padding-box;
    opacity: 1;
}

.red-bar{
    position:fixed;
    width: 21px;
    height: 4px;
    background: #D54328 0% 0% no-repeat padding-box;
    opacity: 1;
}

.rotifer-text{
    position:fixed;
    top: 236px;
    left: 24px;
    width: 47px;
    height: 19px;
    text-align: left;
    font: Medium 16px/19px Lato;
    letter-spacing: -0.32px;
    color: #000000;
    opacity: 1;
}


.rotifer-text-count{
    position:fixed;
    top: 239px;
    left: 307px;
    width: 23px;
    height: 24px;
    text-align: left;
    font: Bold 20px/24px Lato;
    letter-spacing: -0.4px;
    color: #000000;
    opacity: 1;
}


.one-egg-carrier-text{
position:fixed;
top: 276px;
left: 24px;
width: 104px;
height: 19px;
text-align: left;
font: Medium 16px/19px Lato;
letter-spacing: -0.32px;
color: #000000;
opacity: 1;
}

.one-egg-carrier-count{
position:fixed;
top: 279px;
left: 307px;
width: 23px;
height: 24px;
text-align: left;
font: Bold 20px/24px Lato;
letter-spacing: -0.4px;
color: #000000;
opacity: 1;
}

.two-egg-carrier-text{
position:fixed;
top: 316px;
left: 24px;
width: 104px;
height: 19px;
text-align: left;
font: Medium 16px/19px Lato;
letter-spacing: -0.32px;
color: #000000;
opacity: 1;
}

.two-egg-carrier-count{
position:fixed;
top: 319px;
left: 307px;
width: 23px;
height: 24px;
text-align: left;
font: Bold 20px/24px Lato;
letter-spacing: -0.4px;
color: #000000;
opacity: 1;
}

.dead-rotifers-text{
position:fixed;
top: 356px;
left: 24px;
width: 90px;
height: 19px;
text-align: left;
font: Medium 16px/19px Lato;
letter-spacing: -0.32px;
color: #000000;
opacity: 1;
}

.dead-rotifers-count{
position:fixed;
top: 359px;
left: 307px;
width: 23px;
height: 24px;
text-align: left;
font: Bold 20px/24px Lato;
letter-spacing: -0.4px;
color: #000000;
opacity: 1;
}

.ciliates-text{
position:fixed;
top: 396px;
left: 24px;
width: 49px;
height: 19px;
text-align: left;
font: Medium 16px/19px Lato;
letter-spacing: -0.32px;
color: #000000;
opacity: 1;
}

.ciliates-count{
position:fixed;
top: 399px;
left: 307px;
width: 12px;
height: 24px;
text-align: left;
font: Bold 20px/24px Lato;
letter-spacing: -0.4px;
color: #000000;
opacity: 1;
}

.clumps-text{
position:fixed;
top: 436px;
left: 24px;
width: 51px;
height: 19px;
text-align: left;
font: Medium 16px/19px Lato;
letter-spacing: -0.32px;
color: #000000;
opacity: 1;
}

.clumps-count{
position:fixed;
top: 439px;
left: 307px;
width: 12px;
height: 24px;
text-align: left;
font: Bold 20px/24px Lato;
letter-spacing: -0.4px;
color: #000000;
opacity: 1;
}


.buttons{
    position: fixed;
    top: 450px;
    left: 140px;
    width: 180px;
    height: 24px;
    opacity: 1;
}

.upload {
    position: fixed;
    top: 248px;
    left: 88px;
    width: 199px;
    height: 199px;
    opacity: 1;
}


.breakdown-box{
    position:fixed;
    top: 216px;
    left: 8px;
    width: 360px;
    height: 270px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 4px #00000029;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    opacity: 1;
}

.breakdown{
    position: fixed;
    top: 182px;
    left: 24px;
    width: 78px;
    height: 19px;
    text-align: center;
    font: Bold 16px/19px Lato;
    letter-spacing: -0.32px;
    color: #000000;
    opacity: 1;
}
.total-rotifer{
    position: fixed;
    top: 103px;
    left: 8px;
    width: 260px;
    height: 64px;
    background: #0d5896 0 0 no-repeat padding-box;
    box-shadow: 0px 2px 6px #00000029;
    border-radius: 4px 0px 0px 4px;
    opacity: 1;
    font: Bold 16px/19px Lato;
    letter-spacing: -0.32px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}

.total-rotifer-count{
    position: fixed;
    top: 103px;
    left: 268px;
    width: 100px;
    height: 64px;
    background: 0 0 no-repeat padding-box;
    box-shadow: 0px 2px 6px #00000029;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 700 20px/24px Lato;
    letter-spacing: -.4px;
    color: #000000;
}


</style>

<script>

import axios from 'axios';
import PictureInput from 'vue-picture-input'
import Toolbar from './Toolbar.vue' 
import ToolbarStatistics from './ToolbarStatistics.vue' 
import ToolbarResult from './ToolbarResult.vue' 


export default {
  data() {
      
    return {
      file: "",
      imageBytes: "",
      stat: {1: '1'},
      uploadCondition: true,
      picCondition: false,
      statsCondition: false,
      loading: false,
      hamburgerCondition: false,
      email: "kaiwei@dsaid.gov.sg"
    }
  },components: {
    PictureInput, Toolbar, ToolbarResult, ToolbarStatistics
  },
  methods: {
    async onSubmit(){
      this.file = this.$refs.pictureInput.file
      const formData = new FormData();
      formData.append('file',this.file);
      this.loading = true;
      this.uploadCondition = false;
      axios.post('https://ilytics-backend.com/upload',formData)
        .then((response) => {
          this.loading = false;
          this.imageBytes = response.data.img;
          this.stat = response.data.stat;
          this.picCondition = true;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 
    displayStatistics(){
        this.picCondition = false;
        this.statsCondition = true;
    },
    goingBack(){
        this.picCondition = true;
        this.statsCondition = false;
    },
    contact(){
        this.hamburgerCondition = !this.hamburgerCondition;
    }
  }
}
</script>

