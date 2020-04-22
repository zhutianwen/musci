import {request} from './request'

export function getBannerData(){
    return request({
        url:'/banner?type=2/'
    })
}
export function getrecomSonglist(){
    return request({
        url:'/personalized?limit=6'
    })
}