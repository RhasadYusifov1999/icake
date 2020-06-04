<template>
    <div class="flex-check">
        <div class="check-box" :class="{'active': status == true}" @click="checkBoxSelect(this)">
            <i class="fa fa-check"></i>
        </div>
        <input type="checkbox" hidden ref="check_input" :value="item.id">
        <p class="title-checkbox">{{item.title}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            status: false
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        checkBoxSelect(event){
           this.status == false ? this.status = true  : this.status = false;
           this.$emit('changeCheckbox', {id: this.item.id, check: this.status});
        },
    }
}
</script>
<style scoped>
    .flex-check{
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .flex-check:last-child{
        margin-bottom: 0;
    }
    .check-box{
        width: 24px;
        height: 24px;
        border: 2px solid #ff7380;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        transition: 0.3s;
        cursor: pointer;
        border-radius: 4px;
        margin-right: 10px;
    }
    .check-box i{
        display: none;
    }
    .check-box.active i{
        display: block;
    }
    .check-box.active{
       background-color: #ff7380;
       transition: 0.3s;
    }
    .title-checkbox{
        margin: 0;
        font-size: 14px;
        color: black;
        font-weight: bold;
    }
</style>