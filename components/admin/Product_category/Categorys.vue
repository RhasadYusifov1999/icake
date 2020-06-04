<template>
    <div>
        <p class="title-category">tərkib Kataqoriyaları  <i class="fa fa-bano"></i> </p>
        <div class="hash-category">
            <Category @deleteCategory="$emit('deleteCategory', $event)" :item="item" v-for="(item, index) in items" :key="index"/> 
        </div>
        <div class="row mb-4" v-if="items.length < 1">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="alert alert-warning text-center"><b>Heç bir tərkib kataqoriyası ələvə edilməyib.</b></div>
            </div>
        </div>
        <div class="form-add-category">
            <div class="form-group m-0">
                <input type="text" class="form-control" v-model="title" placeholder="Enter category name">
            </div>
            <button class="btn btn-success ml-3" @click="sendTitle"><b>Add Category</b></button>
        </div>
    </div>
</template>
<script>
import Category from './Category';
export default {
    props:{
        items: {
            type: Array
        }
    },
    components: {
        Category
    },
    data(){
        return {
            title: ''
        }
    },
    methods: {
        sendTitle(){
            this.$emit('addCategory', this.title);
            this.title = '';
        }
    }
}
</script>
<style scoped>
    .title-category{
        margin-bottom: 25px;
        padding-top: 25px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: black;
        font-family: sans-serif;
        padding-bottom: 15px;
        border-bottom: 1px solid #ccc;
    }
    .hash-category{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
        margin-bottom: 25px;
    }
    .form-add-category{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 25px;
        background-color: #ccc;
        border-radius: 10px;
    }
</style>