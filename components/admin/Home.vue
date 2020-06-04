<template>
    <div class="flex-item">
        <div class="fixed-gradient"></div>
          <div class="container">
            <div class="full-context">
              <div class="content-paper">
                  <div class="container-fluid">
                      <div class="row">
                          <div class="col-md-12 col-sm-12 col-xs-12">
                              <div class="new_section">
                                  <Sliders @removeSlider="removeSliderAsync($event)" :items="getSliders"/>
                              </div>
                          </div>
                          <div class="col-md-12 col-sm-12 col-xs-12">
                              <div class="new_section">
                                <Ourpriorities @save_block_our="save_block_our($event)" @trash_block_our="trash_block_our($event)" @trashOurImage="remove_our_image($event)" @changeImages="change_our_image($event)" @newOutCreated="createNewOur" :items="getOurItems"/>
                              </div>
                          </div>
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="new_section">
                                <CallTable @removeCallTr="trashCallMe($event)" :items="getCallMeArr"/>
                            </div>
                          </div>
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="new_section">
                              <SocialBox :items="getSocial" @newSocialMedia="newSocialMedia"/>
                            </div>
                          </div>
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="new_section">
                              <Partners @deletePartner="deletePartner($event)" @imageChangePartner="imageChangePartner($event)" :partners="getPartners" @createPartner="createPartner"/>
                            </div>
                          </div>
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="new_section">
                              <Coupons @trashCoupon="trashCoupon($event)" @couponStatusChange="couponStatusChange($event)" :items="getCoupons" @createCoupon="create_coupon($event)"/>
                            </div>
                          </div>
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="new_section">
                              <Categorys :items="getCategories" @deleteCategory="deleteCategory($event)" @addCategory="addCategory($event)"/>
                            </div>
                          </div>
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="new_section">
                              <Products @removeProduct="removeProduct($event)" @changeComposition="changeComposition($event)" @changeProducerProduct="changeProducerProduct($event)" @changeKgProduct="changeKgProduct($event)" @changeProductPrice="changeProductPrice($event)" @changeTitleProduct="changeTitleProduct($event)" @bestCakeChange="bestCakeChange($event)" @removeSliderProduct="removeSliderProduct($event)" @add_cake_images="add_cake_images($event)" :products="getProducts" @create_new_product="create_new_product" :categories="getCategories" :partners="getPartners"/>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
import Sliders from './Sliders/Sliders';
import Ourpriorities from './Ourpriorities/Ourpriorities';
import CallTable from './Callme/Call_table';
import SocialBox from './SocialMediaAdd/SocialBox';
import Partners from './Partner/Partners';
import Coupons from './coupons/Coupons';
import Categorys from './Product_category/Categorys';
import Products from './Products/Products';
export default {
  data() {
    return {

    };
  },
  components: {
    Sliders,
    Ourpriorities,
    CallTable,
    SocialBox,
    Partners,
    Coupons,
    Categorys,
    Products
  },
  computed: {
    getSliders(){
      return this.$store.getters.sliders_item;
    },
    getOurItems(){
     return this.$store.getters.getOurItems;
    },
    getCallMeArr(){
      return this.$store.getters.getCallMeArr;
    },
    getSocial(){
      return this.$store.getters.getSocial;
    },
    getPartners(){
      return this.$store.getters.getPartners;
    },
    getCoupons(){
      return this.$store.getters.getCoupons;
    },
    getCategories(){
      return this.$store.getters.getCategories;
    },
    getProducts(){
      return this.$store.getters.getProducts;
    }
  },
  methods: {
    removeSliderAsync(arg){
      this.$store.dispatch('removeSliders', arg);
    },
    createNewOur(){
      this.$store.dispatch('createNewOurAsync');
    },
    change_our_image(event){
      let thisIs = this;
      this.$store.dispatch('changeOurImage', event);
    },
    remove_our_image(event){
      this.$store.dispatch('trash_our_img', event);
    },
    trash_block_our(event){
      this.$store.dispatch('trash_block_our', event);
    },
    save_block_our(event){
      this.$store.dispatch('save_block_our', event);
    },
    trashCallMe(event){
        this.$store.dispatch('trash_call_me', event);
    },
    newSocialMedia(){
      this.$store.dispatch('create_new_social');
    },
    createPartner(){
      this.$store.dispatch('create_partner');
    },
    imageChangePartner(event){
      this.$store.dispatch('partner_image_change', event);
    },
    deletePartner(event){
       this.$store.dispatch('delete_partner', event);
    },
    create_coupon(event){
      this.$store.dispatch('create_coupon', event);
    },
    couponStatusChange(event){
      this.$store.dispatch('couponStatusChange', event);
    },
    trashCoupon(event){
      this.$store.dispatch('trashCoupon', event);
    },
    addCategory(event){
      this.$store.dispatch('addCategory', event);
    },
    deleteCategory(event){
      this.$store.dispatch('deleteCategory', event);
    },
    create_new_product(){
      this.$store.dispatch('create_new_product');      
    },
    add_cake_images(event){
      this.$store.dispatch('add_product_images', event);
    },
    removeSliderProduct(event){
      this.$store.dispatch('removeSliderProduct', event);
    },
    bestCakeChange(event){
      this.$store.dispatch('bestCakeChange', event);
    },
    changeTitleProduct(event){
      this.$store.dispatch('changeTitleProduct', event);
    },
    changeProductPrice(event){
      this.$store.dispatch('changeProductPrice', event);
    },
    changeKgProduct(event){
      this.$store.dispatch('changeKgProduct', event);
    },
    changeProducerProduct(event){
      this.$store.dispatch('changeProducerProduct', event);
    },
    changeComposition(event){
      this.$store.dispatch('changeComposition', event);
    },
    removeProduct(event){
      this.$store.dispatch('removeProduct', event);
    }
  },
   created(){
      this.$store.dispatch('getSliders');
      this.$store.dispatch('getOurItemDB');
      this.$store.dispatch('getCallMe');
      this.$store.dispatch('getSocialMedia');
      this.$store.dispatch('getPartners');
      this.$store.dispatch('getCouponsAsync');
      this.$store.dispatch('getCategories');
      this.$store.dispatch('getProducts');
   },
   mounted(){
      this.$store.dispatch('getChangeStatus');
   }
};
</script>
<style scoped>

.text-title {
  font-size: 20px;
  font-weight: bold;
  color: black;
  font-family: sans-serif;
  margin-bottom: 15px;

  padding-bottom: 15px;
}

.flex-item {
  width: 100%;
  position: relative;
  display: block;
  height: 100%;

}
.content-paper {
  background-color: white;
  border-radius: 10px;
  margin-bottom: 25px;
  margin-top: 25px;
  padding: 20px;
  width: 100%;
}

.fixed-gradient{
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  	background: linear-gradient(-45deg, #ffffff, #23d5ab, #489951,  #63d471, #233329);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>