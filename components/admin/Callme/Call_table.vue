<template>
    <div>
        <p class="title-callme" >
                Zəng istəkləri. 
      </p>
           <table class="table">
        <thead>
            <tr>
                <th>
                    <b><i>Müştəri adı:</i></b>
                </th>
                 <th>
                    <b><i>Müştəri soyadı:</i></b>
                </th>
                 <th>
                    <b><i>Müştəri T.nömrəsi:</i></b>
                </th>
                <th>
                    <b class="text-danger" v-if="newCallComputed > 0"><i>Yeni: {{newCallComputed}}</i></b>
                    <b class="text-danger" v-else ><i>Yeni Yoxdur</i></b>
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
           <callTr @removeCallTr="$emit('removeCallTr', $event)" v-for="(item, index) in items" :item="item" :key="index"/>
            <tr v-if="items.length < 1">
                <td colspan="5" >
                     <div class="alert alert-warning text-center mt-3">
                         <b><i class="fa fa-phone"></i> Heç bir zəng ismarici gəlməyib.</b>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>
<script>
import callTr from './Call_tr';
export default {
    data(){
        return {
        }
    },
    computed:{
        newCallComputed(){
            let length = this.items.filter(function(item){
               return item.status == 1;
            }).length;
            return length;
        }
    },
    props: {
        items: {
            type: Array
        }
    },
    components: {
        callTr
    }
}
</script>
<style scoped>
    .title-callme{
        margin-bottom: 25px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: black;
    font-family: sans-serif;
    padding-bottom: 15px;
    }
</style>