<template>
    <div class="body">
        <div class="banner">
            <img src="@/assets/images/banner.jpg" alt="">
            <p class="title-banner">Shop</p>
        </div>
        <div class="filter-box">
           <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div>
                            <p class="title-filter">Filter</p>
                        </div>
                        <div class="filter-gray">
                              <div class="box-checkbox">
                                   <p class="title-categories">
                                         Məhsulun tərkibini seçin.
                                   </p>
                                    <Checkboxs/>
                              </div>
                             <div class="range-box">
                                    <p class="title-categories pt-4">Məbləği seçin</p>
                                   <Range/>
                             </div>
                        </div>
                    </div>
                    <Cakes/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Checkboxs from './filter/Checkboxs';
import Range from './filter/Range';
import Cakes from '../frontend/shop_cake/Cakes'
export default {
    components:{
        Checkboxs,
        Range,
        Cakes
    }
}
</script>
<style scoped>

.box-checkbox{
    padding-bottom: 25px;
    border-bottom: 1px solid #000;
}
.title-filter{
    font-size: 40px;
    color: #ff7380;
   font-family: 'Gloria Hallelujah';
    margin-bottom: 25px;
    font-weight: bold;  
}
.title-categories{
    margin-bottom: 25px;
    color: black;
    font-weight: bold;
    font-family: sans-serif;
}
.filter-gray{
    background-color: #f2f2f2;
    border-radius: 6px;
    padding: 20px;
    margin-bottom: 40px;
}
.filter-box{
    padding-top: 50px;
    background-color: white;
}
    .banner{
        height: 300px;
        position: relative;
        width: 100%;
    }
    .banner::after{
        content: "";
        position: absolute;
        bottom: -2px;
        width: 100%;
        height: 20px;
      background: url(//cdn.shopify.com/s/files/1/1284/6493/t/5/assets/iconbgwrapperimg.png?744) repeat-x;
        left: 0;
    }
    .banner img{
        width: 100%;
        height: 100%;
        background-attachment: fixed;
        object-fit: cover;
    }
    .title-banner{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 70px;
        font-weight: bold;
        color: #ff7380;
        font-family: 'Gloria Hallelujah';
    }
</style>