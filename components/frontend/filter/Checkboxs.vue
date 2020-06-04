<template>
    <div>
        <Checkbox v-for="(item, index) in product_categories" :key="index" :item="item" @changeCheckbox="controlAllList($event)"/>
    </div>
</template>
<script>
import Checkbox from '../common/Checkbox';
export default {
    data(){
        return {
            product_categories: [
                {id: 1, title: 'Banana'},
                {id: 2, title: 'Apple'},
                {id: 3, title: 'Mango'},
                {id: 4, title: 'Black berry'}
            ]
        }
    },
    components:{ 
        Checkbox
    },
    methods: {
        controlAllList(event){
            console.log(event);
        }
    }
}
</script>
<style scoped>
    
</style>