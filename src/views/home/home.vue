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
        <!-- 新歌 新碟 -->
        <newSongDie :newslist="newslist" :newDie="newDie"></newSongDie>
    </div>
</template>

<script>

import {
    getBannerData,
    getrecomSonglist,
    getNewsSonglist,
    getNewsDielist
    } from 'api/found.js'

import navbar from 'components/navbar'
import tabcontrol from 'views/tabControl/tabControl'
import swiper from 'views/swiper/swiper'
import itemize from 'views/home/children/itemize'
import recomSonglist from 'views/home/children/recomSonglist'
import newSongDie from 'views/home/children/newSongDie'

export default {
    data(){
        return{
            bannerList:[],
            recomeList:[],
            newslist:[],
            newDie:[],
        }
    },
    created(){
        this.getBannerData();
        this.getrecomSonglist();
        this.getNewsSonglist();
        this.getNewsDielist();
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
       getNewsSonglist(){//包装一层方法
            getNewsSonglist().then(res=>{
                this.newslist = res.albums
            });
        },
       getNewsDielist(){//包装一层方法
            getNewsDielist().then(res=>{
                this.newDie = res.data
            });
        },
    },
    components:{
        navbar,
        tabcontrol,
        swiper,
        itemize,
        recomSonglist,
        newSongDie,
    }
}
</script>

<style>
    .icon-caidan,.icon-sousuo{
        font-size: 0.45rem;
        font-weight: bold;
    }
</style>