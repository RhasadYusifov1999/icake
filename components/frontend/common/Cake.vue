<template>
       <div :class="send_class">
            <div class="card-cake">
                <div class="img-cake">
                   <img src="@/assets/uploads/best_cakes/item.webp" alt="">
                </div>
                <div class="title-cakes">
                    <p>{{'Thank you Cup Cake' | cut_text}}</p>
                </div>
                <div class="cakes-price">
                    <p>100AZN</p>
                </div>
                <div class="select-count-cake">
                    <button class="btn-pink btn-minus" @click="controlCount(0)"><b>-</b></button>
                    <button class="show-count"><b>{{cake_count}}</b></button>
                    <button class="btn-pink btn-plus" @click="controlCount(1)"><b>+</b></button>
                </div>
                <div class="add-card-button">
                    <button class="add-btn">Səbətə əlavə edin <i class="fa fa-shopping-cart"></i></button>
                </div>
            </div>
       </div>
</template>
<script>
import {cut_text} from '@/mixins/mixins';
export default {
    props: {
        send_class: {
            type: String,
            required: true
        }
    },
    mixins: [cut_text],
    data(){
        return {
            cake_count: 0
        }
    },
    methods: {
        controlCount(int){
            if(int > 0){
                this.cake_count ++;
            }
            else if(int < 1 && !this.cake_count < 1){
                this.cake_count--;
            }
        }
    }
}
</script>
<style scoped>
.btn-minus{
    border-radius: 5px 0px 0px 5px;
}
.btn-plus{
    border-radius: 0px 5px 5px 0px;
}
.show-count{
       position: relative;
    text-decoration: none;
    background-color: #f4f4f4;
    color: #a8b2b7;
    font-size: 16px;
    border: none;
    z-index: 1;
    transition: 0.5s;
    min-width: 30px;
    outline: none;
}
.btn-pink{
    position: relative;
    text-decoration: none;
    background-color: #ff7380;
    color: #ffffff;
    font-size: 16px;
    border: none;
    z-index: 1;
    transition: 0.5s;
    width: 30px;
    outline: none;
}
.btn-pink:hover{
    background-color: #aa515a;
    transition: 0.5s;
}
.select-count-cake{
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
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
.add-card-button{
    display: flex;
    justify-content: center;
}
.add-btn{
    margin-bottom: 10px;
    position: relative;
    border-radius: 5px;
    text-decoration: none;
    background-color: #ff7380;
    padding: 10px 10px;
    color: #ffffff;
    border-radius: 7px;
    font-weight: normal;
    font-size: 16px;
    border: none;
    z-index: 1;
    transition: 0.5s;
    display: inline-block;
    line-height: normal;
    outline: none;
}
.add-btn:hover{
    background-color: #aa515a;
    transition: 0.5s;
}
.stars-cakes{
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}
.stars-cakes i{
    margin-right: 5px;
    color: #bfa474;
    opacity: 0.6;
}
.stars-cakes i:last-child{
    margin-left: 0;
}
.cakes-price{
    width: 100%;
    display: flex;
    justify-content: center;
}
.cakes-price p{
    margin: 0;
    color: #ff7380;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
}
.title-cakes{
    background: #f4f4f4;
    padding-bottom: 10px;
    padding-top: 10px;
    text-align: center;
    margin-bottom: 20px;
}
.title-cakes p{
    white-space: nowrap;    
    margin: 0;
    font-weight: 300;
    font-family: sans-serif;
    letter-spacing: 0.5px;
    color: #a8b2b7;
}
.img-cake{
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.img-cake img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
    .cake-parent-box{
        padding-left: 20px;
     padding-right: 20px;
    }
    .card-cake{
        width: 100%;
        border-radius: 3px;
        border: 2px solid #ccc;
        margin-bottom: 20px;
        transition: 0.5s;
        background-color: white;

    }
    .card-cake:hover{
        border-color: #ff7380;
        transition: 0.5s;
    }
    .card-cake:hover  img{
        transition: 0.5s;
        transform: scale(1.1) rotateY(-9deg) rotateX(-9deg);
    }
    
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
        
</style>