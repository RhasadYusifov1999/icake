<template>
    <div>
        <p class="title-products">Məhsullar <i class="fa fa-product-hunt"></i></p>
        <div class="row mb-3">
             <div v-if="products.length < 1" class="alert alert-warning text-center mb-3 col-md-12"><b>Heç bir məhsul əlavə edilməyib.</b></div>
            <Product @removeProduct="$emit('removeProduct', $event)" @changeComposition="$emit('changeComposition', $event)" @changeProducerProduct="$emit('changeProducerProduct', $event)" @changeKgProduct="$emit('changeKgProduct', $event)" @changeProductPrice="$emit('changeProductPrice', $event)" @changeTitleProduct="$emit('changeTitleProduct', $event)" @bestCakeChange="$emit('bestCakeChange', $event)" @removeSliderProduct="$emit('removeSliderProduct', $event)" @add_cake_images="$emit('add_cake_images',$event)" :item="item" v-for="(item, index) in products" :key="index" :categories="categories" :partners="partners"/>
        </div>
        <div class="row mb-3">
            <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                <button class="btn btn-success" @click="$emit('create_new_product')"><b>Yeni Məhsul əlavə edin. <i class="fa fa-plus ml-2"></i></b></button>
            </div>
        </div>
    </div>
</template>
<script>
import Product from './Product';
export default {
    components: {
        Product
    },
    props: {
        partners: {
            type: Array
        },
        categories: {
            type: Array
        },
        products: {
            type: Array
        }
    }
}
</script>
<style scoped>
    .title-products{
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
</style>