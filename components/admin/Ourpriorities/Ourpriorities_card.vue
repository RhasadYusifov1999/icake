<template>
  <div class="col-md-4 col-sm-6 col-xs-12">
    <div class="card">
      <div class="card-loader" v-if="loaderBolean.showLoader && loaderBolean.id == item._id">
         <div class="bg-loader"></div>
         <img src="@/static/node-loader.gif"  alt="" class="loader-img">
      </div>
      <div class="upload-img active">
        <i
          class="fa fa-edit"
          ref="edit"
          v-if="img_name == 'default.png'"
          @click="$refs.fileinp.click()"
        ></i>
        <i class="fa fa-trash" ref="trash" v-if="img_name != 'default.png'" @click="trash_image"></i>
        <div class="opacity-image"></div>
        <img ref="img_item" :src="require('@/assets/uploads/our_priorities/'+item.url)" alt />
        <input accept="image/jpg, image/jpeg, image/gif, image/png, image/svg" type="file" ref="fileinp" hidden id @change="addSlider($event)" />
      </div>
      <div class="container-fluid">
        <div class="form-group">
          <label>
            <b>Başlıq:</b>
          </label>
          <input type="text" v-model="title" class="form-control" />
        </div>
        <div class="form-group">
          <label>
            <b>Açıqlama:</b>
          </label>
          <textarea class="form-control" style="resize: none;" cols="30" rows="5" v-model="description"></textarea>
        </div>
        <div class="row">
          <div class="col-md-6 col-xs-6 sol-sm-6">
            <button class="btn btn-success w-100 mb-3" @click="saveOurBlock">
              <b>
                <i class="fa fa-save"></i>
              </b>
            </button>
          </div>
          <div class="col-md-6 col-xs-6 sol-sm-6">
            <button class="btn btn-danger w-100 mb-3" @click="trashOurBlock">
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
import { importImage } from "@/mixins/mixins";
export default {
  mixins: [importImage],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      title: '',
      description: '',
      imgBase: {
        title: "",
        baseUrl: []
      },
      img_name: ""
    };
  },
  computed: {
    loaderBolean(){
      return this.$store.getters.loaderBolean;
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
      if (files.length < 2) {
        let base64_array = [];
        let thisIs = this;
        for (let i = 0; i < files.length; i++) {
          base64_array.push(await thisIs.convertB64(files[i]));
        }
        if (files.length > 0) {
          this.imgBase.baseUrl = base64_array;
          this.$refs.img_item.setAttribute(
            "src",
            URL.createObjectURL(files[0])
          );
          this.$emit("changeImages", {
            url: this.imgBase.baseUrl,
            id: this.item._id
          });
          this.img_name = URL.createObjectURL(files[0]);
        }
      } else {
      }
    },
    trash_image() {
      this.$emit("trashOurImage", {
        id: this.item._id
      });
      this.img_name = "default.png";
      this.$refs.img_item.setAttribute(
        "src",
        require("@/assets/uploads/our_priorities/default.png")
      );
    },
    trashOurBlock(){
      this.$emit('trash_our_block', {
           id: this.item._id
      }); 
    },
    saveOurBlock(){
       
       this.$emit('save_our_block', {
           id: this.item._id,
           title: this.title,
           description: this.description
        }); 
    }
  },
  mounted() {
    this.img_name = this.item.url;
    this.title = this.item.title;
    this.description = this.item.description;
  }
};
</script>
<style scoped>
.bg-loader{
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
}
.loader-img{
  position: absolute;
  z-index: 9;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.card-loader{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 8;
}
.opacity-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
}
.upload-img {
  width: 100%;
  height: 150px;
  display: none;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}
.upload-img i {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: white;
  font-size: 40px;
  cursor: pointer;
}

.upload-img.active {
  display: flex;
}
.upload-img.active {
background-color: #63d471;
    background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);
}
.upload-img img {
  max-height: 70%;
  border-radius: 10px;
  cursor: pointer;
}
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 25px;
}
</style>