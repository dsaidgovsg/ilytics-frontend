<template>
    <div>
    <Toolbar  v-show="uploadCondition" />
    <ToolbarStatistics @goingBack="goingBack" v-show="statsCondition" />
    <ToolbarResult  v-show="picCondition" />
    <Upload v-show="uploadCondition" @submission="upload" />


    <Result :parentData="imageBytes" v-show="picCondition" @viewStats="displayStatistics"/>

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

import Toolbar from './Toolbar.vue' 
import ToolbarStatistics from './ToolbarStatistics.vue' 
import ToolbarResult from './ToolbarResult.vue' 
import Upload from './Upload.vue'
import Result from './Result.vue'


export default {
  data() {
      
    return {
      imageBytes: "",
      stat: {1: '1'},
      uploadCondition: true,
      picCondition: false,
      statsCondition: false
    }
  },components: {
    Toolbar, ToolbarResult, ToolbarStatistics, Upload, Result
  },
  methods: {
    displayStatistics(){
        this.picCondition = false;
        this.statsCondition = true;
    },
    goingBack(){
        this.picCondition = true;
        this.statsCondition = false;
    },
    upload($event){
        this.imageBytes = $event[0];
        this.stat = $event[1];
        this.uploadCondition = false;
        this.picCondition = true;
    }
  }
}
</script>

