<template>
  <div class="col-md-4 col-sm-6 col-xs-12">
    <div class="card-partner">
      <div class="nuxt-loader" v-if="loaderShow">
          <div class="bg-loader"></div>
          <img src="@/static/node-loader.gif" alt="">
      </div>
      <div class="img-layer">
        <div class="bg-layer"></div>
        <img ref="img_item" :src="require('@/assets/uploads/partners/'+partner.img_url)" alt />
        <i v-if="showTrash" class="fa fa-edit icon-layer" @click="$refs.fileInp.click()"></i>
        <i v-if="!showTrash" class="fa fa-trash icon-layer" @click="trashImage"></i>
        <input accept="image/jpg, image/jpeg, image/gif, image/png, image/svg" type="file"  @change="addSlider($event)" hidden ref="fileInp">
      </div>
      <div class="container-fluid">
        <div class="form-group">
          <label>
            <b>Başlıq:</b>
          </label>
          <input type="text" v-model="title" class="form-control" />
        </div>
        <div class="row pb-3">
          <div class="col-md-6 col-xs-12 col-sm-6">
            <button class="btn btn-success col-12" @click="changeTitlePartner">
              <b>
                <i class="fa fa-save"></i>
              </b>
            </button>
          </div>
          <div class="col-md-6 col-xs-12 col-sm-6">
            <button class="btn btn-danger col-12" @click="$emit('deletePartner', partner._id)">
              <b>
                <i class="fa fa-trash"></i>
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    partner: {
      type: Object
    }
  },
  data() {
    return {
      showTrash: true,
      title: '',
      loaderShow: false
    };
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
      if (files.length < 2) {
        let base64_array = [];
        let thisIs = this;
        for (let i = 0; i < files.length; i++) {
          base64_array.push(await thisIs.convertB64(files[i]));
        }
        if (files.length > 0) {
          this.$refs.img_item.setAttribute(
            "src",
            URL.createObjectURL(files[0])
          );
          this.showTrash = false;
          this.$emit('imageChangePartner',{
            id: this.partner._id,
            img: base64_array[0]
          });
        }
      } else {
      }
    },
    trashImage(){
      this.$store.dispatch('removePartnerImage', this.partner._id).then(res => {
         if(res.status == 200){
           this.$refs.img_item.setAttribute('src', require('@/assets/uploads/partners/default.png'));
           this.showTrash = true;
         }
         else{}
      });
    },
    changeTitlePartner(){
        this.loaderShow = true;
        this.$store.dispatch('changeNamePartner', {
          id: this.partner._id,
          name: this.title
        }).then(res => {
          if(res.status == 200){
            this.loaderShow = false;
          }
          else{}
        })
    }
  },
  mounted(){
    this.title = this.partner.name;
    if(this.partner.img_url != 'default.png'){
      this.showTrash = false;
    }
    else{
      this.showTrash = true;
    }
  }
};
</script>
<style scoped>
.nuxt-loader{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  z-index: 99;
}
.nuxt-loader img{
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translate(-50%, -50%);
 z-index: 9;
}
.bg-loader{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  z-index: 1;
  background-color: black;
  opacity: 0.6;
}
.card-partner {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.img-layer {
  width: 100%;
  height: 150px;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: #63d471;
  background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);
  margin-bottom: 20px;
  position: relative;
}
.img-layer img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 40%;
}
.bg-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
  z-index: 1;
}
.icon-layer {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 9;
  cursor: pointer;
  font-size: 30px;
}
</style>