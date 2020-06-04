<template>
   <tr>
        <td>{{item.name}}</td>
        <td>{{item.lastname}}</td>
        <td>{{item.number}}</td>
        <td v-if="item.status == 0"><button class="btn btn-primary btn-sm"><b>Göruldü <i class="fa fa-eye"></i></b></button></td>
        <td v-else><button class="btn btn-success btn-sm"><b>Yeni <i class="fa fa-phone"></i></b></button></td>
        <td ><button class="btn btn-danger btn-sm" @click="$emit('removeCallTr', item._id)"><b><i class="fa fa-trash"></i></b></button></td>
   </tr>
</template>
<script>
export default {
    props: {
        item:{
            type: Object
        }
    }
}
</script>
<style scoped>
    
</style>