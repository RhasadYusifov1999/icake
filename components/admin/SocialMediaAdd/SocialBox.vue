<template>
    <div style="padding-top: 20px; border-top: 1px solid #ccc;">
        <p data-v-1f755fa2="" class="title-social" data-v-7f389ebb="">
            Social media.
        </p>
        <div class="row">
            <div class="col-12" v-if="items.length < 1">
                <div class="alert alert-warning text-center"> <span><b>Heç bir sosial media ələvə edilməyib.</b></span></div>
            </div>
            <socialItem :item="item" v-for="(item, index) in items" :key="index"/>
        </div>
        <div class="row pt-5 pb-5">
            <div class="col-12 text-center">
                <button class="btn btn-success" @click="$emit('newSocialMedia')"><b>Add social media. <i class="fa fa-globe"></i></b></button>
            </div>
        </div>
    </div>
</template>
<script>
import socialItem from './SocialItem';
export default {
    components: {
        socialItem
    },
    props: {
        items: {
            type: Array
        }
    }
}
</script>
<style scoped>
    .title-social{
        margin-bottom: 25px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: black;
    font-family: sans-serif;
    padding-bottom: 15px;
    }
</style>