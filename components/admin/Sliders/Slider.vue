<template>
    <div class="col-md-4 sol-sm-6 col-xs-12 card-slider">
        <div class="box-slider">
            <img :src="importImage('/assets/uploads/sliders/')+item.url"  alt="">
            <div class="trash-center">
                <button @click="$emit('removeSlider', {_id: item._id, url: item.url})" class="btn btn-danger btn-sm"><b>Şəkili silin  <i class="fa fa-trash"></i></b></button>
            </div>
        </div>
    
    </div>
</template>
<script>
import {importImage} from '@/mixins/mixins';
export default {
    mixins: [importImage],
    data(){
        return {

        }
    },
    props: {
        item: {
            type: Object
        }
    }
}
</script>
<style scoped>
    .box-slider{
        border: 1px solid #ccc;
        border-radius: 10px;
        height: 200px;
        width: 100%;
        overflow: hidden;
        margin-bottom: 20px;
    }
    .box-slider img{
        width: 100%;
        height:60%;
        object-fit: cover;
    }
    .trash-center{
        height: 40%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 20px;
        padding-right: 20px;
    }
</style>