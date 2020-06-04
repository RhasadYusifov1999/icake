<template>
  <div>
    <Header :social_media="social_media"/>
    <Slider :imgs="slider_item"/>
    <Aside :items="our_item"/>
    <Cakes />
    <Callback/>
    <Footer :social_media="social_media"/>
  </div>
</template>

<script>
import Header from '@/components/frontend/common/Header';
import Slider from '@/components/frontend/common/Slider';
import Aside from '@/components/frontend/Aside';
import Cakes from '@/components/frontend/best_cake/Cakes';
import Callback from '@/components/frontend/Callback';
import Footer from '@/components/frontend/common/Footer';
export default {
  data(){
    return {

    }
  },
  computed: {
    slider_item(){
      return this.$store.getters.sliders_item;
    },
    our_item(){
      return this.$store.getters.getOurItems;
    },
    social_media(){
      return this.$store.getters.getSocial;
    }
  },
  components: {
    Header,
    Slider,
    Aside,
    Cakes,
    Callback,
    Footer
  },
  created(){
    this.$store.dispatch('getSlider');
    this.$store.dispatch('getOurItemDB');
    this.$store.dispatch('getSocialMedia');
  }
}
</script>

<style>
  body{
    background-color: #ccc !important;
  }
</style>
