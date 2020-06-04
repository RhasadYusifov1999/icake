<template>
  <div>
    <div class="min">
       <label for="customRange1"><b>MIN:</b> {{min}}AZN</label>
       <input type="range"  @click="controlMinVal($event)" @change="controlMinVal($event)" class="custom-range" min="0" max="500" id="customRange1" v-model="min">
    </div>
    <div class="max">
       <br>
       <label for="customRange2"><b>MAX:</b> {{max}}AZN</label>
       <input @change="controlMaxVal($event)"  @click="controlMaxVal($event)" type="range" class="custom-range" min="0" max="500" id="customRange2" v-model="max">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{ 
      min: 0,
      max: 0
    }
  },
  methods: {
    controlMaxVal(event){
      let value = event.target.value;
      if(value < this.min){
         this.max = this.min;
      }
      else{}
    },
     controlMinVal(event){
      let value = event.target.value;
      if(value > this.max){
         this.min = this.max;
      }
      else{}
    }
  }
}
</script>
<style scoped>
  .custom-range::-webkit-slider-thumb {
  background: #ff7380;
box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);

}

.custom-range::-moz-range-thumb {
  background: #ff7380;

}

.custom-range::-ms-thumb {
  background: #ff7380;

}

</style>