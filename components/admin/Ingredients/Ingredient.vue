<template>
   <div class="item-list">
        <label @click="checkedRadio(item._id)"><i v-if="checked" class="fa fa-check"></i></label>
        <p class="title-label">{{item.title}}</p>
        <input :value="item._id"  hidden type="checkbox">
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object
        },
        composition: {
            type: Array
        }
    },
    data(){
        return {
             checked: false
        }
    },
    methods: {
         checkedRadio(id){
            this.checked = !this.checked;
            this.$emit('changeComposition', {id: id, checked: this.checked});
        }
    },
    created(){
        let index = this.composition.indexOf(this.item._id);
        if(index > -1){
            this.checked = true;
        }
        else{}
    }
}
</script>
<style scoped>
     .item-list{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title-label{
        color: white;
        margin: 0;
        font-size: 16px;
        font-family: sans-serif;
    }
    .item-list label{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        margin: 0;
        transition: 0.5s;
        cursor: pointer;
        background-color: white;
        margin-right: 15px;
    }
    .item-list label i{
        transition: 0.5s;
        color: #dc3545;
        font-size: 12px;
    }
    .item-list{
        padding: 15px;
        display: flex;
        align-content: center;
        background-color: #dc3545;
        border-radius: 10px;
        color: white;
        margin-right: 25px;
        margin-bottom: 20px;
    }
</style>