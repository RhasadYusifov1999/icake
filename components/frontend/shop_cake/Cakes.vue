<template>
         <div class="col-md-9 col-sm-12 col-xs-12">
            <div class="container-fluid">
                <div class="row">
                     <Cake :send_class="'col-md-4 col-sm-6 col-xs-12'" v-for="(item, index) in 6" :key="index"/>
                 </div>
            </div>
        </div>
</template>
<script>
import Cake from '../common/Cake';
export default {
    components: {
        Cake
    }
}
</script>
<style >
     .record-cake{
        padding: 90px 0 90px;
        background-color: white;
        background-image: url(//cdn.shopify.com/s/files/1/1284/6493/files/home_best_selling_img.png?v=1531124032);
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #f4f4f4;
        background-attachment: fixed;
        width: 100%;
    }
    .cake-parent-box{
     padding-left: 20px;
     padding-right: 20px;
    }
    .flex-img-cakes{
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
    .title-best-cake{
        font-size: 30px;
        font-family: 'Gloria Hallelujah';
        color: #ff7380;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
    }
</style>
