<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <div class="flex-copy">
                        <p>Bütün hüquqlar qorunur Icake 2020 ©</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div >
                        <ul class="flex-icons">
                                    <li class="social-li" v-for="(item, index) in social_media" :key="index"><a target="_blank" :href="item.url"><img :src="require('@/assets/uploads/social_media/'+item.img_url)" alt=""></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     props: {
        social_media:{
            type: Array
        }
    },
}
</script>
<style scoped>
 .social-li img{
        max-width: 25px;
    }
    .flex-icons{
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        justify-content: flex-end;

    }
    .flex-icons li{
        margin-left: 25px;
        font-size: 30px;
        color: white;
        transition: 0.3s;
        cursor: pointer;
    }
    .flex-icons li:hover{
        color: rgb(163, 163, 163);
        transition: 0.3s;
    }
    .footer{
        background-color: #ff7380;
        padding-top: 30px;
        padding-bottom: 30px;
        border-top: 1px solid white;
    }
    .flex-copy{
        color: white;
        font-size: 16px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
    }
    .flex-copy p{
        margin: 0;
    }
    @media screen and (max-width: 767px){
        .flex-icons{
            justify-content: flex-start;
        }
        .flex-icons li{
            margin-left: inherit;
            margin-right: 20px;
        }
    }
</style>