<template>
    <div class="category-item">
        <p class="category-text">{{item.title}}</p>
        <div class="circle-trash" @click="$emit('deleteCategory', item._id)"><i class="fa fa-times"></i></div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
    .category-item{
        border-radius: 50px;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #63d471;
        padding: 15px;
        padding-left: 20px;
        padding-right: 20px;
        background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);
        margin-right: 25px;
        margin-bottom: 20px;
    }
    .category-item p{
        margin: 0;
        font-size: 14px;
        color: white;
        font-family: sans-serif;
        font-weight: bold;
        margin-right: 15px;
        text-transform: uppercase;
    }
    .circle-trash{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: white;
        color: black;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        font-size: 12px;
        transition: 0.5s;
    }
    .circle-trash:hover{
        transition: 0.5s;
        filter: brightness(60%);
    }
</style>