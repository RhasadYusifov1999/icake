<template>
    <div class="our_priorities">
        <p class="title-cakes">
            Öncəliklərimiz. 
        </p>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12" v-if="items.length < 1">
                <div class="text-center">
                    <div class="alert alert-warning text-center">
                        <p style="margin: 0;"><b>Öncəliklərimiz ələvə edilməyib.</b></p>
                    </div>
                </div>
            </div>
            <OurprioritiesCard @save_our_block="save_our_block($event)" @trash_our_block="trash_block_our($event)" @trashOurImage="trashOurImage($event)" @changeImages="$emit('changeImages', $event)" :item="item" v-for="(item, index) in items" :key="index"/>
        </div>
        <div class="row  pb-2 mb-5" style="border-bottom: 1px solid #ccc">
            <div style="display: flex; justify-content: center; width: 100%;">
                  <button class="btn btn-success" @click="$emit('newOutCreated')"><b>Yeni öncəliklər yarad.</b></button>
            </div>
        </div>
    </div>
</template>
<script>
import OurprioritiesCard from './Ourpriorities_card';
export default {
    props:{
        items: {
            type: Array
        }
    },
    components: {
        OurprioritiesCard
    },
    methods: {
        trashOurImage(event){
            this.$emit('trashOurImage', event);
        },
        trash_block_our(event){
            this.$emit('trash_block_our', event);
        },
        save_our_block(event){
            this.$emit('save_block_our', event);
        }
    }
}
</script>
<style scoped>
.our_priorities{
    padding-top: 40px;
}
    .title-cakes{
        margin-bottom: 25px;
        text-align: center;
font-size: 20px;
    font-weight: bold;
    color: black;
    font-family: sans-serif;
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
    }
</style>