<template>
    <div class="col-md-4 sol-sm-6 col-xs-12">
        <div class="card-smedia">
            <div class="absolute-loader" v-if="loader">
                <div class="bg-loader"></div>
                <img src="@/static/node-loader.gif" alt="">
            </div>
            <div class="img-box">
                <div class="opacity-box"></div>
                <img :src="require('@/assets/uploads/social_media/'+item.img_url)" alt=""  ref="img_item">
                <input type="file" accept="image/jpg, image/jpeg, image/gif, image/png, image/svg" hidden ref="fileInp" @change="addSlider($event)">
                <i class="icon-font-awesome fa fa-edit"  v-if="!showIcon" @click="$refs.fileInp.click()"></i>
                <i class="icon-font-awesome fa fa-trash" v-if="showIcon" @click="trashImage"></i>
            </div>
            <div class="form-group pl-3 pr-3 mb-4">
                <label ><b>URL:</b></label>
                <input type="url" v-model="item_info.url" class="form-control" >
            </div>
            <div class="container-fluid mb-3">
                <div class="row">
                    <div class="col-6">
                        <button class="btn btn-success col-12 btn-sm" @click="saveUrl"><b>Save <i class="fa fa-save"></i></b></button>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-danger col-12 btn-sm" @click="trashSocial"><b>Trash <i class="fa fa-trash"></i></b></button>
                    </div>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object
        }
    },
    data(){
        return {
            showIcon: false,
            imgBase: [],
            item_info: {
                url: ''
            },
            loader: false
        }
    },
    methods: {
        convertB64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(";base64,").pop());
            reader.onerror = error => reject(error);
        });
        },
        async addSlider(event) {
            let files = event.target.files;
            let base64_array = [];
            let thisIs = this;
            if(files.length == 1){
                 for (let i = 0; i < files.length; i++) {
                    base64_array.push(await thisIs.convertB64(files[i]));
                    this.$refs.img_item.setAttribute('src', URL.createObjectURL(files[i]));
                }
                this.imgBase = base64_array;
                this.showIcon = true;
            }
            else{}
            this.$store.dispatch('changeSocialIcon', {
                id: this.item._id,
                url: base64_array[0]
            });
        },
        trashImage(){
            this.$refs.img_item.setAttribute('src', require('@/assets/uploads/social_media/default.png'));
            this.$store.dispatch('removeSocialImg', this.item._id).then(res => {
                if(res.status == 200){
                     this.showIcon = false;
                }
                else{}
            });
        },
        saveUrl(){
            this.loader = true;
            this.$store.dispatch('saveUrlSocial', {
                id: this.item._id,
                url: this.item_info.url
            }).then(res => {
                if(res.status == 200){
                    this.loader = false;
                }
                else{}
            });
        },
        trashSocial(){
            this.$store.dispatch('trashSocial', {
                id: this.item._id
            });
        }
  },
  mounted(){
      this.item_info.url = this.item.url;
      if(this.item.img_url == "default.png"){
         this.showIcon = false;   
      }
      else{
         this.showIcon = true;   
      }
  }
}
</script>
<style scoped>
    .absolute-loader{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        cursor: no-drop;
    }
    .absolute-loader img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 9;
        pointer-events: none;
    }
    .bg-loader{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.6;
        z-index: 1;
    }
    .card-smedia{
        width: 100%;
        position: relative;
        border-radius: 10px;
         overflow: hidden;
         border: 1px solid #ccc;
    }
    .img-box{
        height: 150px;
        width: 100%;
        object-fit: cover;
        background-color: #63d471;
        background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);
        margin-bottom: 20px;
        position: relative;
    }
    .card-smedia img{
        max-width: 80px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        z-index: 1;
    }
    .opacity-box{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: black;
        opacity: 0.6;
    }
    .icon-font-awesome{
        position: absolute;
        z-index: 8;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 30px;
        cursor: pointer;
    }
</style>