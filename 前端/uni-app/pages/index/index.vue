<template>
    <view>
		<!--banner-->
        <view class="banner" >
            <image class="banner-img" :src="banner.cover"></image>
            <view class="banner-title">{{banner.title}}</view>
        </view>
		<!--搜索栏-->
		<view class="search-box">
			<mSearch class="mSearch-input-box" :mode="2" button="inside" :placeholder="defaultKeyword" @search="doSearch(false)" @input="inputChange" @confirm="doSearch(false)" v-model="keyword" @getFocus="showHistory"></mSearch>
		</view>
		<view class="search-keyword" @touchstart="blur">
			<scroll-view class="keyword-box" v-show="isShowKeywordList" scroll-y>
				<view class="keyword-block" v-if="oldKeywordList.length>0">
					<view class="keyword-list-header">
						<view>历史搜索</view>
						<view>
							<image @tap="oldDelete" src="/static/HM-search/delete.png"></image>
						</view>
					</view>
					<view class="keyword">
						<view v-for="(keyword,index) in oldKeywordList" @tap="doSearch(keyword)" :key="index">{{keyword}}</view>
					</view>
				</view>
				<view class="keyword-block">
					<view class="keyword-list-header">
						<view>热门搜索</view>
						<view>
							<image @tap="hotToggle" :src="'/static/HM-search/attention'+forbid+'.png'"></image>
						</view>
					</view>
					<view class="keyword" v-if="forbid==''">
						<view v-for="(keyword,index) in hotKeywordList" @tap="doSearch(keyword)" :key="index">{{keyword}}</view>
					</view>
					<view class="hide-hot-tis" v-else>
						<view>当前搜热门搜索已隐藏</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!--新闻列表,只有有数据的时候才显示-->
        <view class="uni-list" v-if="listData.length >0">
            <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key"
                @click="goDetail(value,width)">
                <view class="uni-media-list">
                    <image class="uni-media-list-logo" :src="value.avatar"></image>
                    <view class="uni-media-list-body">
                        <view class="uni-media-list-text-top">
                            <!--标题-->
                            {{value.title}}
                                <!--标签-->
                                <text class='cu-tag bg-red text-white text-bold sm'>
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
        <!--搜索结果为空 跳出弹窗-->
		<uni-popup ref="popup" type="center" :mask-click="false" :animation="true">
			<view  class="uni-tip">
					<view class="uni-tip-title text-xl">
						404 not found
					</view>
					<view class="uni-tip-content">
						找不到结果
					</view>		
					<view class="uni-tip-group-button">
							<text class="uni-tip-button text-xl" @click="clearInput">取消</text>
							<text class="uni-tip-button text-xl" @click="clearInput">确定</text>
					</view>												
			</view>

		</uni-popup>
        <!--导航栏-->
		<!-- <navbar ref="navbar"></navbar> -->
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
				defaultKeyword: "",
				keyword: "",
				oldKeywordList: [],
				hotKeywordList: [],
				keywordList: [],
				forbid: '',
                isShowKeywordList: false
            }
		},
        onLoad() {
			//自动获取这两个
            this.getBanner();
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
					title_contains:this.keyword
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
							if(list.length >0){
                                this.listData = this.reload ? list : this.listData.concat(list);
                                this.last_id = list[list.length - 1].id;
                                this.reload = false;
                            } else {
                                this.listData =list;
                                this.$refs.popup.open();
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
            //显示搜索历史
            showHistory(msg){
				this.isShowKeywordList = msg;
				console.log(this.isShowKeywordList);
            },
			init() {
				this.loadDefaultKeyword();
				this.loadOldKeyword();
				this.loadHotKeyword();
			},
			blur(){
				uni.hideKeyboard()
			},
			//加载默认搜索关键字
			loadDefaultKeyword() {
				//定义默认搜索关键字，可以自己实现ajax请求数据再赋值,用户未输入时，以水印方式显示在输入框，直接不输入内容搜索会搜索默认关键字
				this.defaultKeyword = "请输入搜索信息";
			},
			//加载历史搜索,自动读取本地Storage
			loadOldKeyword() {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						var OldKeys = JSON.parse(res.data);
						this.oldKeywordList = OldKeys;
					}
				});
			},
			//加载热门搜索
			loadHotKeyword() {
				//定义热门搜索关键字，可以自己实现ajax请求数据再赋值
				this.hotKeywordList = ['键盘', '鼠标', '显示器', '电脑主机', '蓝牙音箱', '笔记本电脑', '鼠标垫', 'USB', 'USB3.0'];
			}, 
			//监听输入
			inputChange(event) {
				//兼容引入组件时传入参数情况
				var keyword = event.detail?event.detail.value:event;
				if (!keyword) {
					this.keywordList = [];
					this.isShowKeywordList = false;
					return;
				}
			},
			//高亮关键字
			drawCorrelativeKeyword(keywords, keyword) {
				var len = keywords.length,
					keywordArr = [];
				for (var i = 0; i < len; i++) {
					var row = keywords[i];
					//定义高亮#9f9f9f
					var html = row[0].replace(keyword, "<span style='color: #9f9f9f;'>" + keyword + "</span>");
					html = '<div>' + html + '</div>';
					var tmpObj = {
						keyword: row[0],
						htmlStr: html
					};
					keywordArr.push(tmpObj)
				}
				return keywordArr;
			},
			//顶置关键字
			setkeyword(data) {
				this.keyword = data.keyword;
			},
			//清除历史搜索
			oldDelete() {
				uni.showModal({
					content: '确定清除历史搜索记录？',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.oldKeywordList = [];
							uni.removeStorage({
								key: 'OldKeys'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//热门搜索开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},
			//执行搜索
			doSearch(key) {
				key = key ? key : this.keyword ? this.keyword : this.defaultKeyword;
				// this.keyword = key;
				this.saveKeyword(key); //保存为历史 
				this.reload = true;
                this.last_id = "";
                console.log(this.keyword)
                this.getList();
                //隐藏下拉列表
                this.isShowKeywordList = false;
			},
			//保存关键字到历史记录
			saveKeyword(keyword) {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						console.log(res.data);
						var OldKeys = JSON.parse(res.data);
						var findIndex = OldKeys.indexOf(keyword);
						if (findIndex == -1) {
							OldKeys.unshift(keyword);
						} else {
							OldKeys.splice(findIndex, 1);
							OldKeys.unshift(keyword);
						}
						//最多10个纪录
						OldKeys.length > 10 && OldKeys.pop();
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					},
					fail: (e) => {
						var OldKeys = [keyword];
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					}
				});
            },		
            //清除输入
            clearInput:function(e){
                this.keyword = "";
                this.getList();
                this.$refs.popup.close();

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
