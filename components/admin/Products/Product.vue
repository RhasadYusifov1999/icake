<template>
    <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="card-product">
            <div class="add-slider-images" @click="$refs.slider_item_inp.click()" title="add slider images">
                <i class="fa fa-plus"></i>
                <input type="file"  accept="image/jpg, image/jpeg, image/gif, image/png, image/svg" max="5" hidden ref="slider_item_inp" multiple @change="addSlider($event)">
            </div>
            <div class="best-cakes" :class="{'active': bestCake == 1}" @click="bestCakeChange" :title="bestCake ? 'Best Cake Selected :)' : 'Best Cake no Selected :( '">
                <i class="fa fa-star" v-if="bestCake == 1"></i>
                <i class="fa fa-star-o" v-else></i>
            </div>
            <div class="product-image-box">
                <div class="slider-box">
                    <div class="arrow-items">
                        <div class="arrow-circle" :class="{'disabled': item.images.length < 1}" @click="prevSlider"><div class="arrow-black-bg"></div><i class="fa fa-angle-left absolute-icon"></i></div>
                        <div class="arrow-circle right" :class="{'disabled': item.images.length < 1}" @click="nextSlider"><div class="arrow-black-bg"></div><i class="fa fa-angle-right absolute-icon"></i></div>
                    </div>
                    <div class="top-band" v-if="item.images.length > 0">
                        <div class="bg-band"></div>
                        <p class="image-count">
                            <span>{{sliderCount+1}}</span>
                            <span>/</span>
                            <span>{{item.images.length}}</span>
                        </p>
                    </div>
                    <ul class="slider-parent-ul" ref="slider_item" :class="{'f-w': item.images.length < 1}">
                        <li class="alert-li" v-if="item.images.length < 1">
                            <div style="margin: 0;" class="alert alert-warning text-center"><b>Şəkil əlavə edilməyib </b > <span class="fa fa-image"></span></div>
                        </li>
                        <li v-for="(product, index) in item.images" :key="index">
                            <!-- <img v-if="!product.fake" :src="require('@/assets/uploads/products/'+product.url)" alt=""> -->
                            <img  :src="product.url" alt="">
                            <div class="remove-band">
                                <div class="bg-band"></div>
                                <i class="fa fa-trash icon-band" @click="removeImages($event, {id: item._id, url: product.id, index: index})"></i>
                            </div>
                        </li>
                    </ul>
                </div>
              
            </div>
             <div class="container-fluid">
                <div class="form-group mb-3">
                    <label><b>Başlıq:</b></label>
                    <input type="text" :value="item.title" class="form-control" @change="$emit('changeTitleProduct', {id: item._id, title: $event.target.value})">
                </div>
            </div>
            <div class="container-fluid  mb-3">
                <div class="row">
                    <div class="col-md-12 col-xs-12 col-sm-6">
                            <button class="btn btn-info col-12" @click="closeCategory = !closeCategory">
                                <b class="mr-2">Tərkib ələvə et.</b>
                                <i class="fa fa-plus"></i>
                           </button>
                    </div>
                </div>
            </div>
             <div class="category-box" v-if="closeCategory">
                 <div class="bg-category-box" @click="closeCategory = !closeCategory"></div>
                <Ingredients :composition="item.composition" @changeComposition="$emit('changeComposition', {...$event, parent_id: item._id})" @closeModule="closeCategory = !closeCategory" :categories="categories"/>
             </div>
            <div class="container-fluid">
                 <div class="flex-count-control mb-3">
                    <button class="btn btn-danger" @click="countControl(false)"><b><i class="fa fa-minus"></i></b></button>
                    <button class="btn btn-dark"><b>{{count_kg}} KG</b></button>
                    <button class="btn btn-primary" @click="countControl(true)"><b><i class="fa fa-plus"></i></b></button>
                </div>
            </div>
            <div class="container-fluid">
                <div class="price-select">
                    <div class="form-group">
                        <label><b>Qiymət ələvə edin.</b></label>
                        <input @change="$emit('changeProductPrice', {id: item._id, value: $event.target.value})" type="number" :value="item.price" class="form-control" placeholder="Qiymət ələvə edin.">
                    </div>    
                </div>
            </div>
            <div class="container-fluid mb-3">
                 <p class="title-cs">
                      Məhsul hansı markaya aiddir?
                  </p>
                <div class="select-custom" ref="cs">
                    <div class="cs-head" @click="openSelectCustom">
                         <div class="head-circle-selected">
                            <img ref="has_selected" :src='selected.img' alt="">
                         </div>
                         <p>{{selected.title}}</p>
                         <i class="fa fa-angle-down"></i>
                    </div>
                    <div class="cs-content">
                        <ul>
                            <li v-for="(item, index) in partners" :key="index" @click="selectedCs(item)">
                                <div class="img-marca">
                                   <img :src="require('@/assets/uploads/partners/'+item.img_url)" alt="">
                                </div>
                                <p class="title-marca">{{item.name}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container-fluid mb-3" >
                <button class="btn btn-danger  col-12" @click="$emit('removeProduct', {id: item._id})">
                    <b class="mr-2"> Məhsulu silin </b>
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import {importImage} from '@/mixins/mixins';
import Ingredients from '@/components/admin/Ingredients/Ingredients';
export default {
    mixins: [importImage],
    components:{
        Ingredients
    },
    props: {
        partners:{
            type: Array
        },
        categories: {
            type: Array
        },
        item: {
            type: Object
        }
    },
  
    data(){
        return {
            selected: {
                title: 'Marka seçin',
                img: require('@/static/marca.png')
            },
            checked: false,
            count_kg: 1,
            bestCake: 0,
            sliderCount: 0,
            closeCategory: false
        }
    },
    methods:{
        countControl(arg){
            if(arg){
                this.count_kg++;
            }
            else if(!arg && this.count_kg > 1){
                this.count_kg--;
            }
            else{}
            this.$emit('changeKgProduct', {id: this.item._id, value: this.count_kg});
        },
        bestCakeChange(){
            if(this.bestCake == 0){
                 this.bestCake = 1;
            }
            else if(this.bestCake == 1){
                 this.bestCake = 0;
            }
            else{}
            this.$emit('bestCakeChange', {status: this.bestCake, id: this.item._id});
        },
        resizeSlider(){
            setTimeout(function(){
                    let length_slider_li = document.querySelectorAll('.slider-parent-ul li').length;
                    if(length_slider_li > 0){
                        let width_ul = document.querySelector('.slider-box').clientWidth;
                            document.querySelector('.slider-parent-ul').style.width = width_ul * length_slider_li + "px";
                            document.querySelectorAll('.slider-parent-ul li').forEach(function(item){
                                item.style.width = width_ul + "px";
                        });
                    }
                    else{}
            });    
        },
        controlSlider(){
            let width_ul = document.querySelector('.slider-box').clientWidth;
            document.querySelector('.slider-parent-ul').style.left = -width_ul * this.sliderCount + "px";
        },
        nextSlider(){
            let length_slider_li = document.querySelectorAll('.slider-parent-ul li').length;
            if(this.sliderCount < length_slider_li -1){
                this.sliderCount++;
                this.controlSlider();
            }
            else{}
        },
        prevSlider(){
            if(this.sliderCount > 0){
                this.sliderCount--;
                this.controlSlider();
            }
            else{}
        },
        openSelectCustom(){
            this.$refs.cs.classList.add('active');
        },
        selectedCs(arg){
            if(arg){
                this.selected = {
                    title: arg.name,
                    img: require('@/assets/uploads/partners/'+arg.img_url)
                }
                this.$refs.cs.classList.remove('active');
                this.$emit('changeProducerProduct', {product_id: this.item._id ,producer_id: arg._id});
            }
            else{}
        },
         convertB64(file){
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result.split(";base64,").pop());
                reader.onerror = error => reject(error);
            });
        },
        async addSlider(event){
            let files = event.target.files;
            let base64_array = [];
            let thisIs = this;
            for(let i =0; i<files.length; i++){
                 let time = new Date().getTime() * Math.floor(Math.random() * 9999);
                 base64_array.push({id: time, url: await thisIs.convertB64(files[i])});
                 thisIs.item.images.push({url: URL.createObjectURL(files[i]), id: time, fake: true});
            }
            this.$emit('add_cake_images', {images: base64_array, id: this.item._id});
        },
        removeImages(thisIs, payload){
            this.$emit('removeSliderProduct', payload);
            this.item.images.splice(payload.index, 1);
            if(this.sliderCount > 0){
                this.sliderCount--;
                this.controlSlider();
            }
            else{}
        },
        removeImagesAdded(arg){
            console.log(arg);
        }
    },
    mounted(){
        this.resizeSlider();
        let thisIs = this;
        document.addEventListener('click', function(event){
            let control_parent = event.target.closest('.select-custom');
            if(control_parent == null){
              thisIs.$refs.cs.classList.remove('active');
            }
            else{}
        });
        this.bestCake = this.item.bestcake;
        this.count_kg = this.item.kg;
        if(thisIs.partners.length > 0){
            if(thisIs.item.producer != ""){
                    let index = thisIs.partners.findIndex(i => i._id == thisIs.item.producer);
                    if(index > -1){
                        thisIs.selected = {
                            title:thisIs.partners[index].name,
                            img: require('@/assets/uploads/partners/'+thisIs.partners[index].img_url)
                        }
                    }
                    else{}
            }
            else{}
        }
        else{}
    },
    watch: {
        'item.images'(){
            let thisIs = this;
            thisIs.resizeSlider();
        }
    }
}
</script>
<style scoped>
.bg-category-box{
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    background-color: black;
    opacity: 0.6;

}
.alert-li{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.head-circle-selected{
    min-width: 25px;
    min-height: 25px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: gray;
    position: relative;
    margin-right: 15px;
    overflow: hidden;
}
.head-circle-selected img{
      width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
}
.title-marca{
    margin: 0;
    font-weight: bold;
    font-family: sans-serif;
    color: black;
    font-size: 16px;
}
.img-marca{
    min-width: 35px;
    min-height: 35px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: gray;
    position: relative;
    margin-right: 15px;
    overflow: hidden;
}
.img-marca img{
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
}
.cs-content ul{
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
}
.cs-content ul li{
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    transition: 0.3s;
    height: 50px;
    overflow: hidden;
    padding-right: 15px;
    padding-left: 15px;
    display: flex;
    align-items: center;
}
.cs-content ul li:last-child{
    border: none;
}
.cs-content ul li:hover{
    transition: 0.3s;
    background-color: rgba(204, 204, 204, 0.37);
}
.select-custom.active .cs-head{
    border-radius: 5px 5px 0px 0px;
}
.select-custom.active .cs-content{
    display: block;
}
.cs-content{
    position: absolute;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0px 0px 5px 5px;
    border-top: none;
    max-height: 200px;
    margin-bottom: 20px;
    z-index: 9999;
    overflow: auto;
    background-color: white;
    display: none;
    padding-top: 25px;
    padding-bottom: 25px;
}

.cs-head p{
    white-space: nowrap;
    color: black;
    margin: 0;
    font-weight: bold;
}
.cs-head i{
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: black;
    font-size: 25px;
    transition: 0.3s;
}
.cs-head{
    height: 100%;
    padding-left: 15px;
    padding-right: 30px;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    height: 40px;
    border-radius: 5px;
}
.select-custom.active .cs-head i{
    transform: translateY(-50%) rotate(-180deg);
    transition: 0.3s;
}
.select-custom{
    width: 100%;
    margin-bottom: 15px;
    cursor: pointer;
    position: relative;
}
.title-cs{
    margin-bottom: 10px;
    font-family: sans-serif;
    font-weight: bold;
    width: 100%;
}
.add-slider-images{
    width: 40px;
    height: 40px;
    background-color: #007bff;
    position: absolute;
    left: -15px;
    top: -15px;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: 0.5s;
}
.add-slider-images:hover{
    background-color: #0069d9;
    transition: 0.5s;
}
.remove-band{
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}
.bg-band{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
    opacity: 0.6;
    left: 0;
    top: 0;
    z-index: 1;
}
.icon-band{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    color: white;
    font-weight: bold;
    transition: 0.3s;
    font-size: 25px !important;
}
.icon-band:hover{
    transition: 0.3s;
    filter: brightness(70%);
}
.arrow-items{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
}
.arrow-circle{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    border: 1px solid white;
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    overflow: hidden;
    transition: 0.3s;
    align-items: center;
    background-color: #63d471;
    background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);
}
.arrow-circle.disabled{
    opacity: 0.4;
    pointer-events: none;
}
.arrow-circle:hover{
    background-color: #63d471;
    transition: 0.3s;
     background-image: none;
}
.arrow-circle:hover .arrow-black-bg{
    opacity: 0;
    transition: 0.3s;
}
.arrow-black-bg{
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    transition: 0.3s;
    left: 0;
    z-index: 1;
    opacity: 0.6;
    top: 0;
}
.arrow-circle .absolute-icon{
    position: absolute;
    left: 50%;
    top: 50%;
    color: white;
    font-size: 25px;
    transform: translate(-50%, -50%);
    z-index: 5;
}
.arrow-circle.right{
    margin-left: auto;
}
    .best-cakes{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: absolute;
        right: -10px;
        top: -10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #dc3545;
        z-index: 999;
        cursor: pointer;
        color: white;
    }
    .best-cakes.active i{
        color: gold;
    }
    .flex-count-control{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #ccc;
    }
    .flex-count-control button{
        width: 100%;
        border-radius: 0;
    }
    .flex-count-control button:nth-child(1){
        border-radius: 5px 0px 0px 5px;
    }
    .flex-count-control button:nth-child(2){
        cursor: default;
    }
    .flex-count-control button:nth-child(3){
        border-radius: 0px 5px 5px 0px;
    }
    .category-box{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 9999;
        padding-bottom: 15px;
    }
    .category-bg{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: black;
        opacity: 0.8;
        border-radius: 10px 10px 0px 0px;
    }
    .card-product{
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 10px;
        position: relative;
    }
    .product-image-box{
        width: 100%;
        height: 200px;
        background-color: gray;
        margin-bottom: 20px;
        position: relative;
        border-radius: 10px 10px 0px 0px;
        overflow: hidden;
    }
    .product-image-box img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 60%;
        max-height: 60%;
    }
  
    .product-image-box i{
        color: white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
        font-size: 30px;
        cursor: pointer;
    }
    .center-category{
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;
        margin-bottom: 10px;
    }
    .slider-box{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    .slider-parent-ul{
        position: absolute;
        transition: 0.3s;
        padding: 0;
        margin: 0;
        left: 0;
        top: 0;
        list-style: none;
        height: 100%;
        display: flex;
        width: 100%;
    }
    .slider-parent-ul.f-w{
        width: 100% !important;
    }
    .slider-parent-ul li{
        height: 100%;
        position: relative;
        background-color: gray;
    }
    .slider-parent-ul li img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
    .top-band{
        width: 100%;
        height: 40px;
        position: absolute;
        z-index: 9;
        left: 0;
        top: 0;
    }
    .top-band .bg-band{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: black;
        opacity: 0.6;
    }
    .image-count{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        margin: 0;
    }
    .image-count span{
        color: white;
        font-size: 18px;
        font-weight: bold;
        margin-right: 15px;
    }
    .image-count span:last-child{
        margin-right: 0;
    }

</style>