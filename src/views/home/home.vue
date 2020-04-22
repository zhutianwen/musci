<template>
    <div class="home">
        <!-- 顶部导航栏 -->
        <navbar>
            <div slot="left">
                <i class="iconfont icon-caidan"></i>
            </div>
            <div slot="center">
                <tabcontrol :titles="['我的','发现','云村','视频']"></tabcontrol>
            </div>
            <div slot="right">
                <i class="iconfont icon-sousuo"></i>
            </div>
        </navbar>
        <!-- 轮播图 -->
        <swiper :bannerList="bannerList"></swiper>
        <!-- 分类 -->
        <itemize></itemize>
        <!-- 推荐歌单 -->
        <recomSonglist :recomeList="recomeList"></recomSonglist>
    </div>
</template>

<script>

import {getBannerData,getrecomSonglist} from 'api/found.js'

import navbar from 'components/navbar'
import tabcontrol from 'views/tabControl/tabControl'
import swiper from 'views/swiper/swiper'
import itemize from 'views/home/children/itemize'
import recomSonglist from 'views/home/children/recomSonglist'

export default {
    data(){
        return{
            bannerList:[],
            recomeList:[],
        }
    },
    created(){
        this.getBannerData();
        this.getrecomSonglist();
    },
    methods:{
       getBannerData(){//包装一层方法
            getBannerData().then(res=>{
                this.bannerList = res.banners;
            });
        },
       getrecomSonglist(){//包装一层方法
            getrecomSonglist().then(res=>{
                this.recomeList = res.result
            });
        },
    },
    components:{
        navbar,
        tabcontrol,
        swiper,
        itemize,
        recomSonglist
    }
}
</script>

<style>
    .icon-caidan,.icon-sousuo{
        font-size: 0.45rem;
        font-weight: bold;
    }
</style>