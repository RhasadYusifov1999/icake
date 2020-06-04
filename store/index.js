import Vuex from 'vuex';
const createStore = () => {
    return new Vuex.Store({
        state: {
            sliders: [],
            getOurItemsArr: [],
            loaderItem: false,
            changeId: '',
            callMeArr: [],
            socialMedia: [],
            partners: [],
            coupons: [],
            categories: [],
            products:[]
        },
        getters:{
            sliders_item(state){
                return state.sliders;
            },
            getOurItems(state){
                return state.getOurItemsArr;
            },
            loaderBolean(state){
                return {
                    showLoader: state.loaderItem,
                    id: state.changeId
                }
            },
            getOurItems(state){
                return state.getOurItemsArr;
            },
            getCallMeArr(state){
                return state.callMeArr;
            },
            getSocial(state){
                return state.socialMedia;
            },
            getPartners(state){
                return state.partners;
            },
            getCoupons(state){
                return state.coupons;
            },
            getCategories(state){
                return state.categories;
            },
            getProducts(state){
                return state.products;
            }
        },
        mutations: {
            set_our_array(state, payload){
                state.getOurItemsArr = payload;
            },
            add_new_our(state, payload){
                state.getOurItemsArr = payload;
            },
            trash_our(state, payload){
                let index = state.getOurItemsArr.findIndex(i => i._id == payload.id);
                state.getOurItemsArr[index].url = 'default.png';
            },
            trash_client_our(state, payload){
                let index = state.getOurItemsArr.findIndex(i => i._id == payload);
                state.getOurItemsArr.splice(index, 1);
            },
            save_client_our(state, payload){
                let index = state.getOurItemsArr.findIndex(i => i._id == payload.id);
                state.getOurItemsArr[index].title = payload.title;
                state.getOurItemsArr[index].description = payload.description;
            },
            setCallMe(state, payload){
                state.callMeArr = payload;
            },
            splice_call_me(state, payload){
                let index = state.callMeArr.findIndex(i => i._id == payload);
                state.callMeArr.splice(index, 1);
            },
            setSocial(state, payload){
                state.socialMedia = payload;
            },
            setSocialArr(state, payload){
                state.socialMedia = payload;
            },
            setSocialImg(state, payload){
                let index = state.socialMedia.findIndex(i => i._id == payload);
                state.socialMedia[index].img_url = 'default.png';
            },
            setSocialUrl(state, payload){
                let index = state.socialMedia.findIndex(i => i._id == payload.id);
                state.socialMedia[index].url = payload.url;
            },
            spliceSocial(state, payload){
                let index = state.socialMedia.findIndex(i => i._id == payload.id);
                state.socialMedia.splice(index, 1);
            },
            setPartners(state, payload){
                state.partners = payload;
            },
            setPartnerImage(state, payload){
                let index = state.partners.findIndex(i => i._id == payload);
                state.partners[index].img_url = 'default.png';
            },
            addPartner(state, payload){
                state.partners = payload;
            },
            setPartnerTitle(state, payload){
                let index = state.partners.findIndex(i => i._id == payload.id);
                state.partners[index].name = payload.name;
            },
            deletePartner(state, payload){
                let index = state.partners.findIndex(i => i._id == payload);
                state.partners.splice(index, 1);
            },
            setCoupons(state, payload){
                state.coupons = payload;
            },
            change_status_coupon(state, payload){
                let index = state.coupons.findIndex(i => i._id == payload.id);
                state.coupons[index].status = payload.status;
            },
            trash_coupon(state, payload){
                let index = state.coupons.findIndex(i => i._id == payload);
                state.coupons.splice(index, 1);
            },
            set_category(state, payload){
                state.categories = payload;
            },
            add_categories(state, payload){
                state.categories = payload;
            },
            delete_category(state, payload){
                let index = state.categories.findIndex(i => i._id == payload);
                state.categories.splice(index, 1);
            },
            setProduct(state, payload){
                state.products.push(payload);
            },
            setProducts(state, payload){
                state.products = payload;
            },
            removeProduct(state, payload){
                let index = state.products.findIndex(i => i._id == payload.id);
                state.products.splice(index, 1);
            }
        },
        actions: {
            add_slider(vuexContext, payload){
                this.$axios.post('/slider-save', {data: payload})
                .then(res => {
                    vuexContext.state.sliders = res.data.data;
                });
            },
            getSliders(vuexContext){
                this.$axios.get('/get-sliders').then(res => {
                    for(let i = 0; i<res.data.items.length; i++){
                        vuexContext.state.sliders.push(res.data.items[i]);
                    }
                });
            },
            removeSliders(vuexContext, payload){
                this.$axios.post('/remove-slider',{ data: payload }).then(res => {
                    if(res.status == 200){
                        let index = vuexContext.state.sliders.findIndex(i => i._id == payload._id);
                        vuexContext.state.sliders.splice(index, 1);
                    }
                });
            },
            getSlider(vuexContext){
                this.$axios.get('/sliders').then(res =>{
                    vuexContext.state.sliders = res.data.sliders;
                })
            },
            getOurItemDB(vuexContext){
                this.$axios.get('/get-our-item').then(res =>{
                    vuexContext.commit('set_our_array', res.data.items);
                });
            },
            createNewOurAsync(vuexContext){
                this.$axios.post('/create-new-our').then(res => {
                    vuexContext.commit('add_new_our', res.data.items);
                });
            },
            changeOurImage(vuexContext, payload){
               this.$axios.post('/change-our-image', {data: payload});
            },
            trash_our_img(vuexContext, payload){
                this.$axios.post('/trash-out-image', {data: payload}).then(res => {
                    if(res.status == 200){
                        vuexContext.commit('trash_our', payload);
                    }
                });
            },
            trash_block_our(vuexContext, payload){
                this.$axios.post('/trash-our-block', {data: payload}).then(res => {
                     vuexContext.commit('trash_client_our', res.data.id);
                });
            },
            save_block_our(vuexContext, payload){
                vuexContext.state.loaderItem = true;
                vuexContext.state.changeId = payload.id;
                this.$axios.post('/save-our-block', {data: payload}).then(res => {
                    if(res.status == 200){
                        vuexContext.commit('save_client_our', res.data.items);
                       vuexContext.state.loaderItem = false;
                    }
                    else{}
                });
            },
            send_call_me(vuexContext, payload){
                 return this.$axios.post('/call-me-new', {data: payload}).then(res => {
                    return res;
                 });
            },
            getCallMe(vuexContext){
                this.$axios.get('/call-me-get').then(res => {
                    vuexContext.commit('setCallMe', res.data.info);
                });
            },
            getChangeStatus(vuexContext){
                this.$axios.get('/change-all-status').then(res => {
                    console.log(res.data.success);
                })
            },
            trash_call_me(vuexContext, payload){
                this.$axios.post('/trash-call-me', {data: payload}).then(res => {
                     if(res.status == 200){
                        vuexContext.commit('splice_call_me', payload);
                     }
                     else{}
                });
            },
            create_new_social(vuexContext){
                this.$axios.post('/new-social-media').then(res => {
                    vuexContext.commit('setSocial', res.data.success)
                });
            },
            getSocialMedia(vuexContext){
                this.$axios.get('/get-social-media').then(res => {
                    vuexContext.commit('setSocialArr', res.data.items)
                });
            },
            changeSocialIcon(vuexContext, payload){
                this.$axios.post('/change-social-img', {data: payload}).then(res => {
                    //
                });
            },
            removeSocialImg(vuexContext, payload){
                return this.$axios.post('/remove-social-img', {data: payload}).then(res => {
                    vuexContext.commit('setSocialImg', payload);
                    return res;
                });
            },
            saveUrlSocial(vuexContext, payload){
                return this.$axios.post('/change-url-social', {data: payload}).then(res => {
                     vuexContext.commit('setSocialUrl', payload);
                     return res;
                });
            },
            trashSocial(vuexContext, payload){
                this.$axios.post('/trash-social', {data: payload}).then(res =>{
                    if(res.status == 200){
                        vuexContext.commit('spliceSocial', payload);
                    }
                    else{}
                });
            },
            create_partner(vuexContext){
                this.$axios.post('/create-partner').then(res => {
                    vuexContext.commit('addPartner', res.data.partner);
                });
            },
            getPartners(vuexContext){
                this.$axios.get('/get-partners').then(res => {
                    vuexContext.commit('setPartners', res.data.partners);
                });
            },
            partner_image_change(vuexContext, payload){
                this.$axios.post('/change-partner-image', {data: payload}).then(res => {
                    // console.log(res);
                });
            },
            removePartnerImage(vuexContext, payload){
                 return this.$axios.post('/remove-partner-image', {data: payload}).then(res => {
                    vuexContext.commit('setPartnerImage', payload);
                    return res;
                 });
            },
            changeNamePartner(vuexContext, payload){
                return this.$axios.post('/change-partner-name', {data: payload}).then(res => {
                    vuexContext.commit('setPartnerTitle', payload);
                    return res;
                });
            },
            delete_partner(vuexContext, payload){
                this.$axios.post('/delete-partner', {data: payload}).then(res => {
                    vuexContext.commit('deletePartner', payload);
                });
            },
            mail_icake(vuexContext, payload){
                this.$axios.post('/send-mail', {data: {id: 'ok'}}).then(res =>{
                    console.log(res.data.data)
                });
            },
            create_coupon(vuexContext, payload){
                this.$axios.post('/create-coupon', {data: payload}).then(res => {
                    vuexContext.commit('setCoupons', res.data.coupon);
                });
            },
            getCouponsAsync(vuexContext){
                this.$axios.get('/get-coupons').then(res => {
                    vuexContext.commit('setCoupons', res.data.coupons);
                });
            },
            couponStatusChange(vuexContext, payload){
                this.$axios.post('/change-status', {data: payload}).then(res => {
                    if(res.status == 200){
                        vuexContext.commit('change_status_coupon', payload);
                    }
                    else{

                    }
                });
            },
            trashCoupon(vuexContext, payload){
                this.$axios.post('/trash-coupon', {data: payload}).then(res => {
                    if(res.status == 200){
                        vuexContext.commit('trash_coupon', payload);
                    }
                    else{}
                });
            },
            addCategory(vuexContext, payload){
                this.$axios.post('/add-category', {data: payload}).then(res => {
                    if(res.status == 200){
                        vuexContext.commit('set_category', res.data.category);
                    }
                    else{}
                });
            },
            getCategories(vuexContext){
                this.$axios.get('/get-categories').then(res => {
                    if(res.status == 200){
                        vuexContext.commit('add_categories', res.data.categories);
                    }
                    else{}
                });
            },
            deleteCategory(vuexContext, payload){
                this.$axios.post('/delete-category', {data: payload}).then(res => {
                    if(res.status == 200){
                        vuexContext.commit('delete_category', payload);
                    }
                    else{}
                });
            },
            create_new_product(vuexContext){
                this.$axios.post('/create-product').then(res => {
                   const array_created = {
                       _id: res.data.product[0]._id,
                       composition: new Array(...res.data.product[0].composition.split("~")),
                       kg: res.data.product[0].kg,
                       price: res.data.product[0].price,
                       title: res.data.product[0].title,
                       bestcake: res.data.product[0].bestcake,
                       images: new Array(...res.data.product[0].images.split("~")),
                       producer: res.data.product[0].producer
                   }
                   vuexContext.commit('setProduct', array_created);
                });
            },
            getProducts(vuexContext){
                this.$axios.get('/get-products').then(res => {

                    let newArray = []
                    for(let i=0; i<res.data.products.length; i++){
                        newArray.push(
                            ...res.data.products[i],
                            {
                                id: new Array(...res.data.products[i].images.split("->")[0]),
                                images: new Array(...res.data.products[i].images.split("->")[1]),
                            }
                        )
                    }
                    console.log(res.data.products)

                });
            },
            add_product_images(vuexContext, payload){
                this.$axios.post('/add-product-images', {data: payload}).then(res => {
                    // check point
                });
            },
            removeSliderProduct(vuexContext, payload){
                this.$axios.post('/remove-slider-product', {data: payload}).then(res => {
                    // check point
                });
            },
            bestCakeChange(vuexContext, payload){
                this.$axios.post('/change-best-cake', {data: payload}).then(res =>{
                    // check point
                });
            },
            changeTitleProduct(vuexContext, payload){
                this.$axios.post('/change-product-title', {data: payload}).then(res=>{
                    // check point
                });
            },
            changeProductPrice(vuexContext, payload){
                this.$axios.post('/change-product-price', {data: payload}).then(res=>{
                    // check point
                });
            },
            changeKgProduct(vuexContext, payload){
                this.$axios.post('/change-product-kg', {data: payload}).then(res=>{
                    // check point
                });
            },
            changeProducerProduct(vuexContext, payload){
                this.$axios.post('/change-product-producer', {data: payload}).then(res=>{
                    // check point
                });
            },
            changeComposition(vuexContext, payload){
                this.$axios.post('/change-product-composition', {data: payload}).then(res => {
                    // check point
                });
            },
            removeProduct(vuexContext, payload){
                this.$axios.post('/remove-product', {data: payload}).then(res => {
                     vuexContext.commit('removeProduct', payload);
                });
            }
        }
    });
}
export default createStore;
