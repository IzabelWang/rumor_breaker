<template>
    <view class="uni-fab-box">
		<uni-fab ref="fab" :pattern="pattern" :horizontal="horizontal" :vertical="vertical" :direction="direction"  @fabClick="goTop" Size="18px" Height="35px" Icon="top"/>
		<view class="nav fixed" style="font-size: 0px;">
			<!-- <image src="/static/bg.png" alt="" mode="widthFix" style="width:100%"></image> -->
			
			<!-- 轮播 -->
			<swiper class="screen-swiper" :class="dotStyle='square-dot'" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			
			<!-- 谣言分类 -->
			<scroll-view scroll-x class="nav" scroll-with-animation :scroll-left="scrollLeft" style="background-color: #e4e4e4;" id="head">
				<view class="cu-item text-bold" :class="item==category?'bg-selfset-red':''" v-for="(item,index) in tabList" :key="index" @tap="tabSelect" :data-id="item" style="font-size: 17px;">
					{{item}}
			</view>
			</scroll-view>
		</view>	
		
		<view v-if = "modalName==null" style="height:463upx"></view>	
		<!--新闻列表,只有有数据的时候才显示-->
		<view class="uni-list" v-if="listData.length >0">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key"
				@click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.avatar" v-if="value.avatar!=null"></image>
					<!--显示默认图片-->
					<image class="uni-media-list-logo" src="/static/avatar.png" v-if="value.avatar==null"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">
							<!--标题-->
							{{value.title}}
								<!--标签-->
								<text v-if='value.result=="假" || value.type=="假"' class='cu-tag text-white text-bold ' style="background-color: #910000; font-size: 22upx; padding: 0 21upx; height: 40upx;">
									{{value.type}}
								</text>
								<text v-if='value.result=="真"|| value.type=="真"' class='cu-tag text-white text-bold bg-green ' style="font-size: 22upx; padding: 0 21upx; height: 40upx;">
									{{value.type}}
								</text>
								<text  v-if='value.result=="疑"|| value.type=="论"' class='cu-tag text-white text-bold bg-grey' style="font-size: 22upx; padding: 0 21upx; height: 40upx;">
									{{value.type}}
								</text>
							</view>
						<view class="uni-media-list-text-bottom">
							<text>{{value.date}}</text>
							<text>{{value.platform}}</text>
						</view>
					</view>
				</view>
			</view>
			<uni-load-more :status="status"></uni-load-more>
		</view>	
    </view>
</template>

<script>
	//在微信开发者工具自动播放，本地网络没有反应，怀疑是 iOS 端播不了 or h5 播不了
	// const innerAudioContext = uni.createInnerAudioContext()
	// innerAudioContext.autoplay = true
	// innerAudioContext.loop = true
	// // innerAudioContext.src = 'https://music.163.com/song/media/outer/url?id=28287132.mp3'	
    export default {
        data() {
            return {
				directionStr: '水平',
				horizontal: 'right',
				vertical: 'bottom',
				direction: 'vertical',
				pattern: {
					color: '#c0c6cd',
					backgroundColor: '#fff',
					selectedColor: '#690000',
					buttonColor: '#690000'
				},
				tabList:["新冠专项","食品安全","医学健康","生活窍门","自然环境","宠物花草","科学技术","神秘现象","传说轶事","其他分类"],
                listData: [],
                last_id: 0,
				reload: false,
				//搜索框相关
				defaultKeyword: "",
				keyword: "",
				oldKeywordList: [],
				hotKeywordList: [],
				keywordList: [],
				forbid: '',
				isShowKeywordList: false,
				category:"新冠专项",
				scrollLeft:5,
				height:'',
				// headHeight:'',//顶部高度
				status:'more' ,//默认显示更多
				swiperList: [{
					id: 0,
					url: 'http://img.mp.itc.cn/upload/20170720/58aa09018c5346ffac7e5612a9c22456_th.jpg'
				}, {
					id: 1,
					url: 'http://img.mp.itc.cn/upload/20170720/061fa377d99f45628d2cbbcd241db429_th.jpg',
				}, {
					id: 2,
					url: 'http://img.mp.itc.cn/upload/20170720/d4c0ab53d8d54c15b153bd7c146d50b7_th.jpg'
				},{
					id: 3,
					url: 'http://img.mp.itc.cn/upload/20170720/d381555413634afb86be905c2891dbc7_th.jpg'
				}],
            }
		},
		onBackPress() {
			if (this.$refs.fab.isShow) {
				this.$refs.fab.close()
				return true
			}
			return false
		},
        onReady() {
			//自动获取这两个
            this.getList();
		},
		//下拉更新
        onPullDownRefresh() {
            this.reload = true;
            this.getList();
        },
        onReachBottom() {
			this.reload = true;
            this.getList();
        },
        methods: {
			//返回顶部
			goTop:function(e){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			//清空当前页面的数据
			init(){
				this.listData = [];
				this.last_id = 0;
			},
			// Drawer弹出
			showDrawer(){
				uni.showToast({
					title: '您打开了一个彩蛋',
					icon: 'none'
				})
				if( this.modalName == null ){
					this.modalName = 'viewModal';
				}else{
					this.modalName = null;
				}
				console.log(this.modalName)
			},
			//选择标签
			tabSelect(e) {
				this.init();
				this.category = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				this.getList();
			},
			//流言列表的内容
            getList() {
				uni.showLoading({
					title: '加载中'
				});
				this.status = "loading"
                var data = {
					_sort:'date:DESC',//按照时间顺序排序
					_limit:10, //需要的字段名
					category:this.category
                };
                if (this.last_id) { //说明已有数据，目前处于上拉加载
                    data._start = this.last_id;
                }
                uni.request({
					url: 'http://120.79.197.140:1337/rumors',
					method: 'GET',
                    data: data,
                    success: (data) => {
						uni.hideLoading();
						this.status = "more"
                        if (data.statusCode == 200) {
							let list = data.data;
							if(list.length >0){
                                this.listData = this.reload ? this.listData.concat(list):list;
                                this.last_id = this.listData.length;
								this.reload = false;
								console.log(this.reload)
                            } else {
								this.status= "noMore"
									// this.$refs.popupBottom.open();
                            }
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
            //清除输入
            exit:function(e){
                this.$refs.popupBottom.close();
            }
        },
    }
</script>

<style>
	
	page {
		width: 100vw;
		overflow: hidden;
	}

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
	.popup-content {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		background-color: #fff;
		padding: 15px;
		font-size: 14px;
	}

	/* 提示窗口 */
	.uni-tip {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 15px;
		width: 300px;
		background-color: #fff;
		border-radius: 10px;
	}

	.uni-tip-title {
		margin-bottom: 10px;
		text-align: center;
		font-weight: bold;
		color: #333;
	}

	.uni-tip-content {
		/* padding: 15px;
 */
		color: #666;
	}

	.uni-tip-group-button {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		margin-top: 20px;
	}

	.uni-tip-button {
		flex: 1;
		text-align: center;
		color: #3b4144;
	}
	view{display:block;}
	.search-box {width:95%;background-color:rgb(242,242,242);padding:15upx 2.5%;display:flex;justify-content:space-between;}
	.search-box .mSearch-input-box{width: 100%;}
	.search-box .input-box {width:85%;flex-shrink:1;display:flex;justify-content:center;align-items:center;}
	.search-box .search-btn {width:15%;margin:0 0 0 2%;display:flex;justify-content:center;align-items:center;flex-shrink:0;font-size:28upx;color:#fff;background:linear-gradient(to right,#ff9801,#ff570a);border-radius:60upx;}
	.search-box .input-box>input {width:100%;height:60upx;font-size:32upx;border:0;border-radius:60upx;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 3%;margin:0;background-color:#ffffff;}
	.placeholder-class {color:#9e9e9e;}
	.search-keyword {width:100%;background-color:rgb(242,242,242);}
	.keyword-list-box {height:calc(100vh - 110upx);padding-top:10upx;border-radius:20upx 20upx 0 0;background-color:#fff;}
	.keyword-entry-tap {background-color:#eee;}
	.keyword-entry {width:94%;height:80upx;margin:0 3%;font-size:30upx;color:#333;display:flex;justify-content:space-between;align-items:center;border-bottom:solid 1upx #e7e7e7;}
	.keyword-entry image {width:60upx;height:60upx;}
	.keyword-entry .keyword-text,.keyword-entry .keyword-img {height:80upx;display:flex;align-items:center;}
	.keyword-entry .keyword-text {width:90%;}
	.keyword-entry .keyword-img {width:10%;justify-content:center;}
	.keyword-box {height:calc(100vh - 110upx);border-radius:20upx 20upx 0 0;background-color:#fff;}
	.keyword-box .keyword-block {padding:10upx 0;}
	.keyword-box .keyword-block .keyword-list-header {width:94%;padding:10upx 3%;font-size:27upx;color:#333;display:flex;justify-content:space-between;}
	.keyword-box .keyword-block .keyword-list-header image {width:40upx;height:40upx;}
	.keyword-box .keyword-block .keyword {width:94%;padding:3px 3%;display:flex;flex-flow:wrap;justify-content:flex-start;}
	.keyword-box .keyword-block .hide-hot-tis {display:flex;justify-content:center;font-size:28upx;color:#6b6b6b;}
	.keyword-box .keyword-block .keyword>view {display:flex;justify-content:center;align-items:center;border-radius:60upx;padding:0 20upx;margin:10upx 20upx 10upx 0;height:60upx;font-size:28upx;background-color:rgb(242,242,242);color:#6b6b6b;}


</style>
