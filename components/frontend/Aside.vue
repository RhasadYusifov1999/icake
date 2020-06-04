<template>
    <div class="aside-box">
        <div class="container">
            <div class="row box-row">
                <div class="box-col col-md-4 col-sm-4 col-xs-12" v-for="(item, index) in items" :key="index">
                    <div class="flex-box">
                        <div class="img-box">
                            <img :src="require('@/assets/uploads/our_priorities/'+item.url)" alt="">
                        </div>
                        <p class="title-cake">
                            {{item.title}}
                        </p>
                         <p class="about-cake">
                            {{item.description}}
                        </p>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        items: {
            type: Array
        }
    }
}
</script>
<style scoped>
.title-cake{
    width: 100%;
    text-align: center;
    margin: 0;
        font-size: 20px;
    font-family: 'Gloria Hallelujah';
    font-weight: bold;
    color: white;
    margin-bottom: 15px;
}
.about-cake{
    text-align: center;
    line-height: 22px;
        font-size: 14px;
        color: white;
        padding-left: 20px;
        padding-right: 20px;
        font-family: sans-serif;
        margin: 0;
}
.img-box{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px dashed white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    position: relative;
}
.img-box img{
    max-width: 80%;
    max-height: 70%;
}
.flex-box{
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    position: relative;
    display: flex;
    justify-content: center;
}
    .aside-box{
            padding: 90px 0 90px;
            width: 100%;
            position: relative;
                background-image: url(//cdn.shopify.com/s/files/1/1284/6493/files/icon_wrapper_bg.png?v=1530960319);
    background-repeat: repeat-x;
    background-attachment: fixed;
    background-color: #ff7380;
}
    .aside-box:before{
        content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 19px;
    background: url(//cdn.shopify.com/s/files/1/1284/6493/files/iconbgtopimg.png?v=1530960253) repeat-x;
    left: 0;
    }
     
    @media screen and (max-width: 767px){
        .flex-box{
            margin-bottom: 40px;
        }
        .box-row .box-col:last-child .flex-box{
            margin-bottom: 0;
        }
    }
</style>