<template>
    <div>
        <Header :social_media="social_media"/>
        <Contact/>
        <Footer :social_media="social_media"/>
    </div>
</template>
<script>
import Header from '@/components/frontend/common/Header';
import Contact from '@/components/frontend/Contact';
import Footer from '@/components/frontend/common/Footer';
export default {
    components:{
        Contact,
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