<template>
    <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
            <p class="title-partners" >
                Partnerlər.
             </p>
        </div>
        <Partner @deletePartner="$emit('deletePartner', $event)" @imageChangePartner="$emit('imageChangePartner',$event)" :partner="item" v-for="(item, index) in partners" :key="index"/>
        <div class="col-md-12 col-sm-12 col-xs-12" v-if="partners.length < 1">
            <div class=" text-center alert alert-warning">
                <b>Heç bir partner ələvə edilməyib <i class="fa fa-handshake-o"></i></b>
            </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12">
            <br>
            <div class="text-center">
                <button class="btn btn-success" @click="$emit('createPartner')">
                    <b>Yeni Partner ələvə et <i class="fa fa-plus"></i></b>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import Partner from './Partner';
export default {
    props: {
        partners: {
            type: Array
        }
    },
    components: {
        Partner
    }
}
</script>
<style scoped>
    .title-partners{
        margin-bottom: 25px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: black;
        font-family: sans-serif;
        padding-bottom: 15px;
        border-bottom: 1px solid #ccc;
    }
</style>