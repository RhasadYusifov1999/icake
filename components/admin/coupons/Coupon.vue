<template>
    <div class="coupon-item enabled" :class="{'enabled': isActive, 'disabled': !isActive}"> 
        <div class="circle-price">
            <p>{{item.percent}}%</p>
        </div>
        <input hidden type="checkbox" :checked="isActive">
        <label @click="open_closed_status" :class="{'open': isActive, 'close': !isActive}"><i class="fa fa-check"></i></label>
        <p class="coupon-text">{{item.code}}</p>
        <div class="circle-remove" @click="$emit('trashCoupon', item._id)">
            <i class="fa fa-trash"></i>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            isActive: true
        }
    },
    methods: {
        open_closed_status(){
            this.isActive = !this.isActive;
            if(this.isActive){
                this.$emit('couponStatusChange', {
                    status: 1,
                    id: this.item._id
                });
            }
            else{
               this.$emit('couponStatusChange', {
                    status: 0,
                    id: this.item._id
                });
            }
        }
    },
    mounted(){
        if(this.item.status == 1){
            this.isActive = true;
        }
        else if(this.item.status == 0){
            this.isActive = false;
        }
        else{

        }
    }
}
</script>
<style scoped>
    .circle-price{
        position: absolute;
        left: -15px;
        top: -15px;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        background-color: white;
        border: 1px solid #ccc;
        box-shadow: 0px 0px 5px 1px #ccc; 
        font-size: 10px;
        font-weight: bold;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s;
        pointer-events: none;
        overflow: hidden;
    }
    .circle-price p{
        margin: 0;
    }
    .coupon-item{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        padding-left: 25px;
        padding-right: 25px;
        width: auto;
        margin-right: 35px;
        border-radius: 10px;
        transition: 0.5s;
        margin-top: 35px;
    }
    .coupon-item.enabled{
        transition: 0.5s;
        background-color: #28a745;
    }
     .coupon-item.disabled{
        background-color: #dc3545;
        transition: 0.5s;
    }
    .coupon-item.enabled .circle-price{
        filter: blur(0px);
        transition: 0.5s;
    }
    .coupon-item.disabled .circle-price{
        filter: blur(2px);
        transition: 0.5s;
    }
    label{
        margin: 0;
        width: 20px;
        height: 20px;
        background-color: white;
        border: 1px solid #ccc;
        position: relative;
        border-radius: 3px;
        display: flex;
        color: black;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-right: 20px;
        font-size: 11px;
        transition: 0.5s;
    }
   label:hover{
        background-color: rgb(185, 185, 185);
        transition: 0.5s;
    }
    label.open i{
        opacity: 1;
        transition: 0.5s;
    }
     label.close i{
        opacity: 0;
        transition: 0.5s;
    }
    .coupon-text{
        margin: 0;
        font-family: sans-serif;
        font-weight: bold;
        color: white;
        text-transform: uppercase;
        margin-right: 20px;
        font-size: 14px;
    }   
    .circle-remove{
        width: 20px;
        height: 20px;
        background-color: white;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 11px;
        color: black;
        transition: 0.5s;
    }
    .circle-remove:hover{
        background-color: rgb(185, 185, 185);
        transition: 0.5s;
    }
</style>