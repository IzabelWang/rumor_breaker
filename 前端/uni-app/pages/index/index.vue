<template>
    <view>
		<!--banner-->
        <view class="banner" >
            <image class="banner-img" :src="banner.cover"></image>
            <view class="banner-title">{{banner.title}}</view>
        </view>
		<!--搜索栏-->
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="lg cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索相关谣言" confirm-type="search"  v-model="searchText">
			</view>
			<view class="action">
				<button class="cu-btn shadow-blur round text-xl" style="background-color: #720000; color: #ffffff;" @click="searchRumor">搜索</button>
			</view>
		</view>
		<!--新闻列表-->
        <view class="uni-list">
            <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key"
                @click="goDetail(value,width)">
                <view class="uni-media-list">
                    <image class="uni-media-list-logo" :src="value.avatar"></image>
                    <view class="uni-media-list-body">
                        <view class="uni-media-list-text-top">{{value.title}}</view>
                        <view class="uni-media-list-text-bottom">
                            <text>{{value.type}}</text>
                            <text>{{value.date}}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <!--导航栏-->
		<navbar ref="navbar"></navbar>
    </view>
</template>

<script>
    var dateUtils = require('../../common/util.js').dateUtils;

    export default {
        data() {
            return {
                banner: {},
                listData: [],
                last_id: "",
				reload: false,
				//搜索框相关
				InputBottom:0,
				searchText:""
            }
		},
		onReady(){
			this.$refs.navbar.PageCur='index';		
		},
        onLoad() {
			//自动获取这两个
            this.getBanner();
			this.getList();
		},
		//下拉更新
        onPullDownRefresh() {
            this.reload = true;
            this.last_id = "";
            this.getBanner();
            this.getList();
        },
        onReachBottom() {
            this.getList();
        },
        methods: {
			//banner的内容
            getBanner() {
                let data = {
                    column: "id,post_id,title,author_name,cover,published_at" //需要的字段名
                };
                uni.request({
                    url: 'https://unidemo.dcloud.net.cn/api/banner/36kr',
                    data: data,
                    success: (data) => {
                        uni.stopPullDownRefresh();
                        if (data.statusCode == 200) {
                            this.banner = data.data;
                        }
                    },
                    fail: (data, code) => {
                        console.log('fail' + JSON.stringify(data));
                    }
                })
			},
			//流言列表的内容
            getList() {
                var data = {
					_sort:'date:DESC',//按照时间顺序排序
					_limit:10, //需要的字段名
					title_contains:this.searchText
                };
                if (this.last_id) { //说明已有数据，目前处于上拉加载
                    data._start = this.last_id;
                }
                uni.request({
					url: 'http://120.79.197.140:1337/rumors',
					method: 'GET',
                    data: data,
                    success: (data) => {
                        if (data.statusCode == 200) {
							let list = data.data;
							// console.log(list)
                            this.listData = this.reload ? list : this.listData.concat(list);
                            this.last_id = list[list.length - 1].id;
                            this.reload = false;
                        }
                    },
                    fail: (data, code) => {
                        console.log('fail' + JSON.stringify(data));
                    }
                })
			},			
			//进入详情页面
            goDetail: function(e) {
                uni.navigateTo({
                    url: "../detail/detail?id=" + e.id
                })
			},
			//搜索框输入
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			//搜索框退出输入
			InputBlur(e) {
				this.InputBottom = 0
			},	
			//进行搜索
			searchRumor:function(e){
				this.reload = true;
				this.last_id = "";
				this.getBanner();
				this.getList();
			}		
        },
    }
</script>

<style>
    .banner {
        height: 360upx;
        overflow: hidden;
        position: relative;
        background-color: #ccc;
    }

    .banner-img {
        width: 100%;
    }

    .banner-title {
        max-height: 84upx;
        overflow: hidden;
        position: absolute;
        left: 30upx;
        bottom: 30upx;
        width: 90%;
        font-size: 32upx;
        font-weight: 400;
        line-height: 42upx;
        color: white;
        z-index: 11;
    }

    .uni-list {
        background-color: #FFFFFF;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .uni-list:after {
        position: absolute;
        z-index: 10;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .uni-list::before {
        position: absolute;
        z-index: 10;
        right: 0;
        top: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .uni-list-cell {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .uni-list-cell-hover {
        background-color: #eee;
    }

    .uni-list-cell::after {
        position: absolute;
        z-index: 3;
        right: 0;
        bottom: 0;
        left: 30upx;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .uni-list .uni-list-cell:last-child::after {
        height: 0upx;
    }

    /* 图文列表 */
    .uni-media-list {
        padding: 22upx 30upx;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        flex-direction: row;
    }

    .uni-navigate-right.uni-media-list {
        padding-right: 74upx;
    }

    .uni-pull-right {
        flex-direction: row-reverse;
    }

    .uni-pull-right>.uni-media-list-logo {
        margin-right: 0upx;
        margin-left: 20upx;
    }

    .uni-media-list-logo image {
        height: 100%;
        width: 100%;
    }


    .uni-media-list-text-bottom {
        width: 100%;
        line-height: 30upx;
        font-size: 26upx;
        color: #8f8f94;
    }

    .uni-media-list-logo {
        width: 180upx;
        height: 140upx;
        margin-right: 20upx;
    }

    .uni-media-list-body {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        overflow: hidden;
        height: auto;
    }

    .uni-media-list-text-top {
        width: 100%;
        line-height: 36upx;
        font-size: 30upx;
        height: 74upx;
        font-size: 28upx;
        overflow: hidden;
    }

    .uni-media-list-text-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
