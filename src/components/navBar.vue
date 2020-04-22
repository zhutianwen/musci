<template>
    <div class="navBar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style >
    .navBar{
        width: 100%;
        height:1.3rem;
        display: flex;
        line-height: 1.3rem;
        text-align: center;
    }
    .left,.right{
        width:1.6rem;
    }
    .center{
        flex: 1;
    }
</style>