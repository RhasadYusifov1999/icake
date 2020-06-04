<template>
    <div class="box-slider" >
        <ul class="slider-ul" ref="slider_ul">
            <li :style="'width:'+ width + 'px'" v-for="(item, index) in imgs" :key="index">
                <img :src="require('@/assets/uploads/sliders/'+item.url)" alt="">
            </li>
        </ul>
        <div class="controlSlider">
            <div class="circle-control left" @click="PrevSlider">
                <i class="fa fa-angle-left"></i>
            </div>
             <div class="circle-control right" @click="NextSlider">
                <i class="fa fa-angle-right"></i>
            </div>
        </div>
        <div class="slider-item">
            <div  v-for="(item, index) in imgs" :key="index" class="item-slider" :class="{'active': index == 0}" @click="nextSlider_item(index)"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        imgs:{
            type: Array,
            required: true
        }
    },
    data(){
        return {
            sliderCount: 0,
            width: 0
        }
    },
    methods: {
        ControlSlider(){
           let sliderWidth = document.querySelector('.slider-ul li').clientWidth;
           document.querySelector('.slider-ul').style.left = -sliderWidth * this.sliderCount + "px";
            document.querySelectorAll(`.slider-item .item-slider`).forEach(function(y){
                y.classList.remove('active');
            })
           document.querySelectorAll(`.slider-item .item-slider`)[this.sliderCount].classList.add('active');
        },
        NextSlider(){
            let sliderLength = document.querySelectorAll('.slider-ul li').length;
            if(this.sliderCount <sliderLength -1){
                this.sliderCount++;
                this.ControlSlider();
            }
            else{}
        },
        PrevSlider(){
            if(this.sliderCount > 0){
                this.sliderCount--;
                this.ControlSlider();
            }
            else{}
        },
        nextSlider_item(payload){
            this.sliderCount = payload;
            this.ControlSlider();
        }
    },
    watch: {
        imgs(newVal, oldVal){
            this.$refs.slider_ul.style.width = this.width * newVal.length + "px";
        }
    },
    mounted(){
        this.width = document.querySelector('.box-slider').clientWidth;
    }
}
</script>
<style scoped>
    .slider-item{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 100px;
        flex-wrap: wrap;
        justify-content: center;
        display: flex;
        z-index: 99;
        max-width: 80%;
    }
    .item-slider{
        width: 40px;
        height: 4px;
        cursor: pointer;
        margin-bottom: 10px;
        background-color: #ff7380;
        border-radius: 5px;
        margin-right: 10px;
        transition: 0.5s;
    }
    .item-slider.active{
        background-color: #af515b;
    }
    .item-slider:hover{
        transition: 0.5s;
        background-color: #af515b;
    }
    .controlSlider{
        height: 50px;
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
        z-index: 99;
    }
    .circle-control{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid white;
            background-color: #ff7380;
        cursor: pointer;
        color: white;
        font-size: 18px;
        position: absolute; 
        display: flex;
        transition: 0.5s;
        align-items: center;
        justify-content: center;
    }
        .circle-control:hover{
            color: white;
            border: 1px solid #ff7380;
            background-color: #ff7380;
            transition: 0.5s;
            font-weight: bold;
        }
     .circle-control.left{
         left: 50px;
     }
        .circle-control.right{
         right: 50px;
     }
    .box-slider{
        width: 100%;
        height: 500px;
        background-color: #ccc;
        overflow: hidden;
        position: sticky;
    }
    ul{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        padding: 0;
        z-index: 9;
        margin: 0;
        display: flex;
        transition: 0.5s;
    }
    ul li{
        height: 100%;
        list-style: none;
    }
    ul li img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media screen and (max-width: 767px){
        .box-slider{
            height: 190px;
        }
        .slider-item{
            display: none;
        }
    }
</style>