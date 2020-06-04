<template>
    <div>
        <p class="title-coupons">
            Endirim Kuponları.
         </p>
         <div class="flex-coupons">
             <Coupon @trashCoupon="$emit('trashCoupon', $event)" @couponStatusChange="$emit('couponStatusChange', $event)" :item="item" v-for="(item, index) in items" :key="index"/>
         </div>
         <div class="row pb-5" v-if="items.length < 1">
             <div class="col-md-12 col-sm-12 col-xs-12 ">
                 <div class="text-center alert alert-warning">
                     <b>Heç bir kupon kodu əlavə edilməyib. <i class="fa fa-gift"></i></b>
                 </div>
             </div>
         </div>
         <div class="add-new-coupon">
             <input type="number" v-model="percent" placeholder="%">
             <input type="text" placeholder="Name" v-model="name">
             <button class="btn btn-success btn-sm" @click="sendPromoCode"><b><i class="fa fa-plus"></i></b></button>
         </div>
    </div>
</template>
<script>
import Coupon from './Coupon';
export default {
    props:{
        items: {
            type: Array
        }
    },
    components: {
        Coupon
    },
    data(){
        return {
            percent: '',
            name: ''
        }
    },
    methods: {
        sendPromoCode(){
            this.$emit('createCoupon',{
                name: this.name,
                percent: this.percent
            });
            this.name = "";
            this.percent = "";
        }
    }
}
</script>
<style scoped>
    .title-coupons{
        margin-bottom: 25px;
        margin-top: 25px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: black;
        font-family: sans-serif;
        padding-bottom: 15px;
        padding-top: 15px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 15px;
        border-top: 1px solid #ccc;
    }
    .flex-coupons{
        position: relative;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-bottom: 50px;
    }
    .add-new-coupon{
        background-color: #ccc;
        height: 60px;
        width: 100%;
        display: flex;
        align-content: center;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
    }
    .add-new-coupon input
    {
        height: 40px;
        margin: 0;
        margin-right: 15px;
        width: auto;
        padding-left: 15px;
        padding-right: 15px;
        outline: none;
        min-width: auto;
        width: auto;
        border: 1px solid #28a745;
        font-family: sans-serif;
        font-weight: bold;
    }
    .add-new-coupon button{
        height: 40px;
        margin: 0;
        padding-left: 15px;
        padding-right: 15px;
    }
</style>