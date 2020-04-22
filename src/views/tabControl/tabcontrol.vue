<template>
    <div class="tabControl">
        <div
         @click="change(index)"
          v-for="(item,index) in titles"
           :key="index" :class="{active:index===currentIndex}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentIndex:0,
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
        
    },
    methods:{
        change(index){
            this.currentIndex = index
            // console.log(this.currentIndex)
        },
    }
}
</script>

<style>
    .tabControl{
        display: flex;
        justify-content: space-between;
        font-size: 0.45rem;
        font-weight: bold;
    }
    .active{
        font-size: 0.5rem;
        transition: all 0.2s;
    }
</style>