<template>
   <section class="header-section">
       <div class="container">
           <div class="center-header">
                <div class="container-fluid h-100">
                    <div class="flex-header">
                        <div class="flex-col-1">
                            <div class="logo-box">
                                <img src="@/assets/images/logo-icake.png" alt="">
                            </div>
                        </div>
                        <div class="flex-col-2">
                            <div ref="close_bg" @click="closeMenu" class="close-bg pc-none"></div>
                            <nav class="h-100">
                                <ul class="nav-ul mobile-right-menu" ref="nav_ul">
                                    <i class="fa fa-close close-popup pc-none" @click="closeMenu"></i>
                                    <nuxt-link exact active-class="active-link" to="/" tag="li" class="logo-mobile pc-none"><img src="@/assets/images/logo-icake.png" alt=""></nuxt-link>
                                    <nuxt-link exact active-class="active-link" to="/" tag="li">Home <i class="fa fa-home"></i></nuxt-link>
                                    <nuxt-link exact active-class="active-link" to="/shop" tag="li">Shop <i class="fa fa-shopping-bag"></i></nuxt-link>
                                    <nuxt-link exact active-class="active-link" to="/contact" tag="li">Contact <i class="fa fa-phone"></i></nuxt-link>
                                    <li class="flex-mobile-icons">
                                        <i class="fa fa-instagram "></i>
                                        <i class="fa fa-facebook "></i>
                                    </li>
                                </ul>
                                 <ul class="nav-ul" >
                                    <li class="shop-li">    
                                        <p class="item-count"><span>1</span></p>
                                        <p class="shop-box"> <i class="fa fa-shopping-cart"></i></p>
                                    </li>
                                    <li class="social-li" v-for="(item, index) in social_media" :key="index"><a target="_blank" :href="item.url"><img :src="require('@/assets/uploads/social_media/'+item.img_url)" alt=""></a></li>
                                    <li class="open-menu pc-none">
                                         <i class="fa fa-bars" @click="openMenu"></i>
                                     </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
           </div>
       </div>
   </section>
</template>
<script>
export default {
    props: {
        social_media:{
            type: Array
        }
    },
    data(){
        return {

        }
    },
    methods: {
        openMenu(){
            this.$refs.nav_ul.classList.add('active');
            this.$refs.close_bg.classList.add('active');
        },
        closeMenu(){
             this.$refs.nav_ul.classList.remove('active');
             this.$refs.close_bg.classList.remove('active');
        }
    }
}
</script>
<style scoped>
    .social-li img{
        max-width: 25px;
    }
    .active-link{
        border-bottom: 1px dashed white;
    }
    .pc-none{
        display: none;
    }
   .open-menu{
       cursor: pointer;
   }
    nav{
        display: flex;
        justify-content: flex-end;
    }
    .shop-li p{
        margin: 0;
    }
    .shop-box i{
        font-size: 22px;
    }
    .shop-li .item-count {
        position: absolute;
        top: -15px;
        left: 50%;
       font-family:Georgia, 'Times New Roman', Times, serif;
        transform: translateX(-50%);
    }
    .shop-li .item-count span{
        width: 14px;
        height: 14px;
        line-height: 12px;
    text-align: center;
        font-size: 11px;    background: #ffffff;
    color: #000000;display: inline-block;    position: relative;
        border-radius: 50%;
    }
    .nav-ul{
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: flex-end;
    }
    .nav-ul li{
        margin-left: 30px;
        color: white;
        cursor: pointer;    
        text-transform: uppercase;
        font-size: 14px;
        position: relative;
        font-weight: bold;
        letter-spacing: 1px;
           font-family: 'Gloria Hallelujah';

    }
    .logo-box{
        width: 110px;
        height: 100px;
        z-index: 99;
        border-radius: 50%;
            vertical-align: middle;
    position: absolute;    transform: translateY(-50%);    margin: 30px auto;
    }
    .flex-mobile-icons{
        display: none;
    }
    .logo-box img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 50%;
    }
    .flex-header{
        display: flex;
        height: 100%;
    }
    .icon-sm i{
        font-size: 25px;
        cursor: pointer;
    }
    .flex-col-1{
        width: 28%;
        margin-right: 2%;
    }
     .flex-col-2{
        width: 68%;
        margin-left: 2%;
    }
    .header-section{
        padding-top: 30px;
        position: relative;
        background-color: white;
    }
    .header-section::before{
        content: "";
        position: absolute;
        bottom: -19px;
        width: 100%;
        height: 19px;
        left: 0;
        z-index: 3;
        background: url(//cdn.shopify.com/s/files/1/1284/6493/files/iconbgtopimg_40x19.png?v=1530960253) repeat-x;
    }
    .center-header{
        position: relative;
        width: 100%;
        height: 68px;
        background-repeat: repeat-x;
        background-image: url(https://cdn.shopify.com/s/files/1/1284/6493/files/menu_center_1920X.png?v=1533532834);
    }
    .center-header::before{
        content: "";
        float: left;
        height: 68px;
        width: 40px;
        position: absolute;
        left: -37px;
        top: 0;
        z-index: 9;
        background: url(//cdn.shopify.com/s/files/1/1284/6493/files/menu_left_1920X.png?v=1533553346) no-repeat left center;
    }
    .center-header::after{
           content: "";
            float: right;
            height: 68px;
            width: 40px;
            position: absolute;
            right: -37px;
            top: 0;
            z-index: 9;
            background: url(//cdn.shopify.com/s/files/1/1284/6493/files/menu_right_small_8dfb2f3e-d132-4aec-aff1-cd4f535f27ad_1920X.png?v=1533553352) no-repeat right center;
    }
    .header-sticky{
        width: 100%;
        z-index: 9999;
    }

     @media screen and (max-width: 767px){
         .icon-sm{
             display: none;
         }
        .header-section{
            width: 100%;
            padding-left: 40px;
            padding-right: 40px;
        }
        .logo-box{
            height: 50px;
            width: 60px;
        }
        .mobile-right-menu{
            position: fixed;
            width: 80%;
            height: 100%;
            left: -90%;
            transition: 0.5s;
            top: 0;
            background-color: white;;
            z-index: 9999;
        }
        .mobile-right-menu.active{
            left: 0%;
        }
         .mobile-right-menu{
             display: block;
             padding: 20px;
             padding-top: 60px;
         }
          .mobile-right-menu li{
              margin: 0;
              text-align: center;
              border-bottom: 1px solid #ccc;
              margin-bottom: 25px;
              color: black;
              padding-bottom: 15px;
          }
          .logo-mobile{
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
          }
          .logo-mobile img{
              width: 100px;
              height: 90px;
              border-radius: 50%;
          }
          .close-popup{
              color: black;
              font-size: 26px;
              position: absolute;
              z-index: 99;
              top: 20px;
              right: 20px;
              display: block;
          }
          .fa.fa-bars{
              font-size: 25px;
          }
          .nav-ul li{
              margin-left: 20px;
          }
          .open-menu{
              display: block;   
          }
          .close-bg{
              width: 100%;
              height: 100%;
              position: fixed;
              z-index: 99;
              background-color: black;
              opacity: 0.4;
              left: 0;
              top: 0;
              display: none;
          }
          .close-bg.active{
              display: block; 
          }
          .flex-mobile-icons{
              display: flex;
              justify-content: center;
              align-content: center;
          }
          .flex-mobile-icons i{
              margin-right: 15px;
              font-size: 25px;
          }
    }
</style>