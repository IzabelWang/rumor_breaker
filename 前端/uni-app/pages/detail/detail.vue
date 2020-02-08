<template>
    <view>
        <hxNavbar :fixed="true" color="#ffffff" :backgroundColor="[80,2,0]" :title="banner.title">
		</hxNavbar>
        <view class="banner">
            <image class="banner-img" :src="banner.avatar" v-if="banner.avatar"></image>
            <image class="banner-img" src="/static/avatar.png" v-if="!banner.avatar"></image>
            <view class="banner-title">{{banner.title}}</view>
        </view>
        <view class="article-meta">
            <text class="article-author">{{banner.source}}</text>
            <text class="article-text">发表于</text>
            <text class="article-time">{{banner.date}}</text>
        </view>
        <view class="article-content">
            <rich-text :nodes="htmlString"></rich-text>
        </view>
        <!-- #ifdef MP-WEIXIN -->
        <ad v-if="htmlString" unit-id="adunit-01b7a010bf53d74e"></ad>
        <!-- #endif -->
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'list-triplex-row',
                banner: {},
                htmlString: ""
            }
        },
        onShareAppMessage() {
            return {
                title: this.banner.title,
                path: '/pages/template/detail/detail?id=' + JSON.stringify(this.banner)
            }
        },
		onLoad:function(e){
 			uni.showLoading({
				title:"加载中...."
			});	           
			// console.log(e);
			uni.request({
				url: 'http://120.79.197.140:1337/passages?id='+e.id,
				method: 'GET',
				data: {},
				success: res => {
                    console.log(res);
                    this.banner = res.data[0];
                    this.title = res.data[0].title;
                    this.htmlString = res.data[0].detail.replace(/\\/g, "").replace(/<img/g,
                        "<img style=\"width:300px;\"");
                    uni.setNavigationBarTitle({
                        title: res.data[0].title
                    });              
                    uni.hideLoading();      
				},
				fail: () => {},
				complete: () => {}
			});
		}
    }
</script>

<style>
    view {
        font-size: 28upx;
        line-height: 1.8;
    }

    .banner {
        height: 435upx;
        overflow: hidden;
        position: relative;
        background-color: #f2f2f2;
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

    .article-meta {
        padding: 20upx 40upx;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        color: gray;
    }

    .article-text {
        font-size: 26upx;
        line-height: 50upx;
        margin: 0 20upx;
    }

    .article-author,
    .article-time {
        font-size: 30upx;
    }

    .article-content {
        padding: 0 30upx;
        overflow: hidden;
        font-size: 30upx;
        margin-bottom: 30upx;
    }
</style>
