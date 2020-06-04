<template>
    <div>
        <p class="text-center text-title">Slider Yarat / Düzəliş et.</p>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12" v-if="items.length < 1">
                <div class="text-center">
                    <div class="alert alert-warning text-center">
                        <p style="margin: 0;"><b>Slider ələvə edilməyib.</b></p>
                    </div>
                </div>
            </div>
            <Slider @removeSlider="$emit('removeSlider', $event)" :item="item" v-for="(item, index) in items" :key="index"/>
       </div>
         <div class="text-center" style="padding-bottom: 15px; border-bottom: 1px solid #ccc;">
             <button class="btn btn-success" @click="$refs.fileinp.click()"><b>Səkil ələvə edin <i class="fa fa-image"></i></b></button>
         </div>
         <input accept="image/jpg, image/jpeg, image/gif, image/png, image/svg" type="file" multiple @change="addSlider($event)" hidden ref="fileinp">
    </div>
</template>
<script>
import Slider from './Slider';
export default {
    components: {
        Slider
    },
    props: {
        items: {
            type: Array
        }
    },
     methods: {
        convertB64(file){
        return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result.split(";base64,").pop());
                reader.onerror = error => reject(error);
            });
        },
        async addSlider(event){
            let files = event.target.files;
            let base64_array = [];
            let thisIs = this;
            for(let i =0; i<files.length; i++){
                base64_array.push(await thisIs.convertB64(files[i]));
            }
            this.$store.dispatch("add_slider", base64_array);
        }
  }
}
</script>
<style scoped>
    .text-title {
  font-size: 20px;
  font-weight: bold;
  color: black;
  font-family: sans-serif;
  margin-bottom: 15px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
}
</style>