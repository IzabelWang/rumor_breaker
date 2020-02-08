<template>
    <view class="uni-fab-box">
		<uni-fab ref="fab" :pattern="pattern" :horizontal="horizontal" :vertical="vertical" :direction="direction"  @fabClick="showDrawer" Size="21px" Height="45px" Icon="send"/>
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">
			<!-- <hxNavbar :statusBar="false" :leftSlot="false" :transparent="auto" backgroundImg="../../static/bg.png" height="180px" color="#000000" @click="showDrawer" fixed="true">
			</hxNavbar> -->
				<!--新闻列表,只有有数据的时候才显示-->
			<view class="fixed nav" style="font-size: 0px;">
				<image src="/static/bg.png" alt="" mode="widthFix" style="width:100%"></image>
				<scroll-view scroll-x class="nav" scroll-with-animation :scroll-left="scrollLeft" style="background-color: #e4e4e4;">
					<view class="cu-item text-bold" :class="item==category?'bg-selfset-red':''" v-for="(item,index) in tabList" :key="index" @tap="tabSelect" :data-id="item" style="font-size: 17px;">
						{{item}}
					</view>
				</scroll-view>
			</view>
			<!-- 占位符 -->
			<view style="height:230px"></view>
			<view class="uni-list" v-if="listData.length >0">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key"
					@click="goDetail(value,width)">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="value.avatar" v-if="value.avatar!=null"></image>
						<!--显示默认图片-->
						<image class="uni-media-list-logo" src="/static/avatar.png" v-if="value.avatar==null"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">
								<!--标题-->
								{{value.title}}
									<!--标签-->
									<text class='cu-tag text-white text-bold ' style="background-color: #910000; font-size: 22upx; padding: 0 21upx; height: 40upx;">
										{{value.type}}
									</text>
								</view>
							<view class="uni-media-list-text-bottom">
								<text>{{value.date}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>		
				<!--触底了-->
			<uni-popup ref="popupBottom" type="center" :mask-click="false" :animation="true">
				<view  class="uni-tip">
						<view class="uni-tip-title text-xl">
							已经到底啦<br/>つ♡⊂<br/>———————————
						</view>
						<view class="uni-tip-group-button">
									<text class="uni-tip-button text-xl" @click="exit">好的👌</text>
						</view>												
				</view>

			</uni-popup>
		</scroll-view>
		
		<!-- 右侧 -->
		<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
			<text class="cuIcon-pullright"></text>
		</view>
		<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">
			<!-- 个人界面 -->
			<view class="header" style="margin-left: calc(40upx);">
				<text class="text-white text-bold" style="font-size: 56upx;" >团队介绍</text>
				<!-- </view> -->
			</view>
		
			
			<!-- list -->
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				
				<view class="cu-item arrow">
					<view class="content">
						<text class="text-black text-xl"><br/></text>
						<text class="cuIcon-form text-black"></text>
						<text class="text-black text-xl text-bold">北京大学</text>
						<text class="text-white text-xl text-bold"><br/>......</text>
						<text class="text-black text-xl text-bold">软件与微电子学院</text>
						<text class="text-white text-xl text-bold"><br/><br/>......</text>
						<text class="text-black text-xl">
							本平台由北京大学软件与微电子学院王可欣团队搭建而成，团队成员如下：
														
							 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;王可欣  周慧敏  程玄
							 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;陈鸿凯  江姗姗  徐康
							
							 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本平台面向的受众为中老年群体，内容为养生方向的谣言鉴别和辟除，其中分为搜索界面，谣言列表界面和辟谣问答游戏三个界面，目前已实现基本的所有功能，后期将不断对数据使用自然语言处理进行获取分类，希望得到各位用户的认可～
							 
							 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您对我们的网站还满意的话，就在我们的 GitHub 点个 ⭐ 叭～&nbsp;&nbsp;&nbsp;&nbsp;つ♡⊂
							 
							 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👍 👍 👍 👍 👍 👍 👍 👍 👍
							 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;———————————
							
						</text>
						<text class="text-white text-xl text-bold"><br/>.</text>
						<text class="text-white text-xl text-bold"><br/>.</text>
					</view>
				</view>			
						
			</view>			
		
			
		</scroll-view>
		<!-- end -->
		
    </view>
</template>

<script>
	import cuHeader from '@/components/cu-header.vue';
	import cuVideo from '@/components/cu-video.vue';
    export default {
		components: {
			cuHeader,
			cuVideo
		},
        data() {
            return {
				modalName: null,
				directionStr: '水平',
				horizontal: 'right',
				vertical: 'bottom',
				direction: 'vertical',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#690000',
					buttonColor: '#690000'
				},
				tabList:["新冠专项","食品安全","医学健康","生活窍门","自然环境","宠物花草","科学技术","神秘现象","传说轶事","其他分类"],
                banner: {},
                listData: [],
                last_id: "",
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
				scrollLeft:5
            }
		},
		onBackPress() {
			if (this.$refs.fab.isShow) {
				this.$refs.fab.close()
				return true
			}
			return false
		},
        onLoad() {
			//自动获取这两个
            this.getList();
            this.init();
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
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			//流言列表的内容
            getList() {
				uni.showLoading({
					title: '加载中'
				});
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
                        if (data.statusCode == 200) {
							let list = data.data;
							if(list.length >0){
                                this.listData = this.reload ? list : this.listData.concat(list);
                                this.last_id = list[list.length - 1].id;
                                this.reload = false;
                            } else {
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
	
	.DrawerPage {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0vw;
		background-color: #f1f1f1;
		transition: all 0.4s;
	}
	
	.DrawerPage.show {
		transform: scale(0.9, 0.9);
		left: 85vw;
		box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
		transform-origin: 0;
	}
	
	.DrawerWindow {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		padding: 100upx 0;
		background-color: #500200;
	}
	
	.DrawerWindow.show {
		transform: scale(1, 1) translateX(0%);
		opacity: 1;
		pointer-events: all;
	}
	
	.DrawerClose {
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 30upx;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
	}
	
	.DrawerClose.show {
		opacity: 1;
		pointer-events: all;
		width: 15vw;
		color: #fff;
	}
	
	.DrawerPage .cu-bar.tabbar .action button.cuIcon {
		width: 64upx;
		height: 64upx;
		line-height: 64upx;
		margin: 0;
		display: inline-block;
	}
	
	.DrawerPage .cu-bar.tabbar .action .cu-avatar {
		margin: 0;
	}
	
	.DrawerPage .nav {
		flex: 1;
	}
	
	.DrawerPage .nav .cu-item.cur {
		border-bottom: 0;
		position: relative;
	}
	
	.DrawerPage .nav .cu-item.cur::after {
		content: "";
		width: 10upx;
		height: 10upx;
		background-color: currentColor;
		position: absolute;
		bottom: 10upx;
		border-radius: 10upx;
		left: 0;
		right: 0;
		margin: auto;
	}
	
	.DrawerPage .cu-bar.tabbar .action {
		flex: initial;
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
