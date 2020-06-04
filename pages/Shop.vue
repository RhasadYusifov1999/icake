<template>
    <div>
        <Header :social_media="social_media"/>
        <Shop/>
        <Footer :social_media="social_media"/>
    </div>
</template>
<script>
import Header from '@/components/frontend/common/Header';
import Shop from '@/components/frontend/Shop';
import Footer from '@/components/frontend/common/Footer';
export default {
    components:{
        Shop,
        Header,
        Footer
    },
    computed:{
        social_media(){
            return this.$store.getters.getSocial;
         }
    },
    created(){
        this.$store.dispatch('getSocialMedia');
    }
}
</script>
<style>
    
</style>