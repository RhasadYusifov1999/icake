<template>
        <div class="box-whiite-category">
            <div class="circle-closeCategory" @click="$emit('closeModule')"><i class="fa fa-close"></i></div>
            <Ingredient :composition="composition" @changeComposition="$emit('changeComposition', $event)" :item="item" v-for="(item, index) in categories" :key="index"/>
        </div>
</template>
<script>
import Ingredient from './Ingredient';
export default {
    data(){
        return{ 
        }
    },
    components: {
        Ingredient
    },
    props: {
        categories: {
            type: Array
        },
        composition: {
            type: Array
        }
    },
    methods: {
         closeCategoryFun(){
            this.closeCategory = false;
        },
    }
}
</script>
<style scoped>
      .box-whiite-category{
        position: absolute;
        height: auto;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 70%;
        max-height: 70%;
        background-color: white;
        border-radius: 15px;
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
    }
        .circle-closeCategory{
        width: 30px;
        height: 30px;
        cursor: pointer;
        border-radius: 50%;
        position: absolute;
        right: -10px;
        top: -10px;
        background-color: #dc3545;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
</style>