<template>
  <div class="group-call-me">
    <p class="title-call">Sizə zəng etmək üçün telefon nömrənizi göndərin.</p>
    <div class="phone-img-flex">
      <img src="@/assets/images/phone.png" alt class="phone" />
    </div>
     
      <transition name="ani" mode="out-in">
       <div class="parent-center" v-if="showForm">
        <div class="alert alert-success">
          <div class="flex-alert">
            <i class="fa fa-check-circle"></i>
            <p>Məlumatlarınız qeyd edildi, ən qısa zamanda sizinlə ələqə saxlanılacaq.</p>
          </div>
        </div>
      </div>
      </transition>
    <transition name="ani" mode="out-in">
      <div class="show-form" v-if="!showForm">
        <div class="parent-center">
          <div class="flex-form">
            <div class="center-form">
              <div class="form-group">
                <label>
                  <b>Adınız:</b>
                </label>
                <input type="text" v-model="call_info.name" class="form-control custom-control" />
              </div>
              <div class="form-group">
                <label>
                  <b>Soyadınız:</b>
                </label>
                <input type="text" v-model="call_info.lastname" class="form-control custom-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="parent-center">
          <div class="flex-form">
            <div class="center-form">
              <div class="form-group">
                <label>
                  <b>T.Nömrəniz:</b>
                </label>
                <input type="number" v-model="call_info.number" class="form-control custom-control"  />
              </div>
              <div class="form-group">
                <label>
                  <br />
                </label>
                <button class="btn btn-success custom-control" @click="showFormFun">
                  <b>
                    Göndərin
                    <i class="fa fa-send"></i>
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      showForm: false,
      call_info: {
          name: '',
          lastname: '',
          number: ''
      }
    };
  },
  methods: {
    showFormFun() {
      this.$store.dispatch('send_call_me', this.call_info).then(res => {
          if(res.status == 200){
              this.showForm = true;
          }
          else{}
      })
    }
  }
};
</script>
<style scoped>
.ani-enter {
  opacity: 0;
}
.ani-enter-active {
  transition: 1s;
}
.ani-leave {
  background-color: deepskyblue;
}
.ani-leave-active {
  transition: 1s;
  opacity: 0;
}
.alert {
  border: 1px solid #155724;
  border-radius: 10px;
}
.flex-alert {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-alert p {
  margin: 0;
  margin-left: 25px;
  font-weight: bold;
  font-size: 20px;
  font-family: "Gloria Hallelujah";
}
.flex-alert i {
  font-size: 35px;
}
.center-form .form-group:nth-child(odd) {
  margin-right: 1%;
}
.center-form .form-group:nth-child(even) {
  margin-left: 1%;
}
.center-form .form-group {
  width: 49%;
  margin-right: 0;
}
.alert {
  width: 65%;
}

.parent-center {
  width: 100%;
  display: flex;
  justify-content: center;
}
.flex-form {
  width: 65%;
}

.custom-control {
  width: 100%;
}
.flex-form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.flex-form .center-form {
  flex-wrap: wrap;
  display: flex;
  width: 100%;
}
.phone-img-flex {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}
.phone-img-flex img {
  width: 40px;
}
.title-call {
  margin-bottom: 10px;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 30px;
  font-family: "Gloria Hallelujah";
}
.group-call-me {
  padding: 90px 0 90px;
  position: relative;
  background-image: url(https://cdn.shopify.com/s/files/1/1284/6493/files/icon_wrapper_bg.png?v=1530960319);
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-color: rgb(120, 214, 240);
}
@media screen and (max-width: 767px) {
  .center-form .form-group {
    width: 100%;
    margin-right: 0;
  }
  .center-form .form-group:nth-child(odd) {
    margin-right: 0%;
  }
  .center-form .form-group:nth-child(even) {
    margin-left: 0%;
  }
  .flex-form {
    width: 90%;
  }
  .phone-img-flex {
    margin-bottom: 30px;
  }
  .alert {
    width: 90%;
  }
}
</style>