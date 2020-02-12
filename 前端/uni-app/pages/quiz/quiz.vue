<template>
	<view>
		<!-- <cu-custom style='background:#500200;' id="top-box" >
			<block slot="content">
				<text class="text-white text-bold " style="font-size: 28rpx;">
				中老年养生信息辟谣平台
				</text>
			</block>
		</cu-custom> -->
		<hxNavbar :fixed="true" color="#ffffff" :backgroundColor="[80,2,0]" title="养生信息辟谣趣味答题" :back="false">
		</hxNavbar>
		
			<!--欢迎页面-->
		<view class="welcome" v-if="showWelcome==true" :style="{'height': welcomeHeight}" >           
			<view class="flex align-center" :style="{'height': welcomeHeight}" style="background:url('/h5/static/Quiz_BG.png') no-repeat center; background-size:cover; " >
				<!-- 背景设置 -->
				<!-- <image src="/static/text-quiz.png" mode="aspectFit" style="width:100%;height:100%; "  :style="[{animation: 'show 1s 1'}]"></image> -->
				<!-- 背景设置 -->
				<view>
					<image src="/static/slogan.png" mode="aspectFit" style="width: 90%;height:6%; position:absolute; left:calc(44rpx); top: calc(150rpx); border:#000 solid 0px;" :style="[{animation: 'show 1s 1'}]"></image>
				</view>
				<view>
					<image src="/static/quiz_name.png" mode="aspectFit" style="width: 90%;height:10%; position:absolute; left:calc(44rpx); top: calc(420rpx); border:#000 solid 0px;" :style="[{animation: 'show 10s 100 alternate'}]"></image>
				</view>
				<view>
					<image src="/static/quiz_logo.png" mode="aspectFit" style="width: 90%;height:16%; position:absolute; left:calc(40rpx); top: calc(760rpx); border:#000 solid 0px;" :style="[{animation: 'show 1s 1'}]"></image>
				</view>
				<view>
					<!-- <image src="/static/text-button.png" @click="showContent"  mode="aspectFit" style="width: 58%;height:9%; left:calc(160rpx); top: calc(375rpx); border:#000 solid 0px;" :style="[{animation: 'show 1s 1'}]"></image> -->
					<image src="/static/text-button.png" @click="showContent" mode="aspectFit" style="width: 50%;height:8%; position:absolute; left:calc(198rpx); top: calc(1180rpx); border:#000 solid 0px;" :style="[{animation: 'show 1s 1'}]"></image>
				</view>
				<view>
					<image src="/static/copyright.png" mode="aspectFit" style="width: 60%;height:2%; position:absolute; left:calc(288rpx); top: calc(1490rpx); border:#000 solid 0px;" :style="[{animation: 'show 1s 1'}]"></image>
				</view>
			</view>	
			
			<!-- <view :style="[{animation: 'show 1s 1'}]"> -->
				<!-- 答题按钮 -->
				<!-- <button class="cu-btn block lg line-red" style="";" @click="showContent"></button> -->
			<!-- </view>	 -->
		</view>
		
		<view class="content" v-if="showWelcome==false">
			<!--答题卡部分-->	
			<view id="top-box" class="cu-bar bg-white solid-bottom text-bold">
				<view class="action">
					<button class="cu-btn bg-selfset-red shadow" style="font-size: calc(28rpx);" @tap="showCardModal" data-target="modalCard">答题卡</button>
				</view>
			</view>
			<view class="cu-modal" :class="modalCard=='modalCard'?'show':''" @tap="hideCardModal">
				<view class="cu-dialog" @tap.stop>
					
					<scroll-view class="page padding" :scroll-y=true :style="{'height':height}" >				
					<view class="cu-bar solid-bottom">
							<view class="action" @tap="hideCardModal">
								<text class="cuIcon-close text-selfset-red text-bold"></text>
							</view>					
						<view class="action">
							<text class="cuIcon-title text-selfset-red"></text>答题卡
						</view>					
					</view>
					<view class="grid col-5 ">
						<view class="margin-tb-sm text-center" v-for="(quiz,index) in quizList" :key="index">
							<button class="cu-btn round" :class="[quiz.flag.length===0?'line-grey':'bg-selfset-red']" @click="AppointedSubject(index)" >{{index+1}}</button>
						</view>
					</view>
					
					</scroll-view>
				</view>
			</view>
			
			<!--题目-->	
			<form>
				<swiper :current="subjectIndex" class="swiper-box" @change="SwiperChange" :style="{'height':swiperHeight}">
					<swiper-item v-for="(quiz,index) in quizList" :key="index">					
					<scroll-view scroll-y=true scroll-top=0 :style="{'height':swiperHeight}"> 
						<view v-if="index-subjectIndex>=-1&&index-subjectIndex<=1">
						<!--题干部分-->					
						<view class="cu-bar bg-white solid-bottom">
							<view class="solid-bottom text-xxl padding">
								<text class="text-black text-bold">{{quiz.ques}}</text>
								<!-- 没有图片则不显示-->
								<image :src="quiz.img" style="width:100%" v-if="quiz.img" class="padding-top" mode="aspectFit"></image>
							</view>									
						</view>
						<!--选项按钮-->
						<view >
							<radio-group class="block"  @change="RadioboxChange" >
								<view @click="selectRadio" :data-value="option" class="cu-form-group" v-for="(option,index) in [quiz.item__001,quiz.item__002,quiz.item__003,quiz.item__004]" :key="index">
									<radio :value="option" :checked="quiz.flag == option ?true:false" v-if="option.length>0" color="#860000" ></radio>
									<view class="title text-black" v-if="option.length>0" style="font-size:40upx">{{option}}</view>									
								</view>
							</radio-group>

						</view>
						<!--答案解析-->
						<!-- <view  class="margin-top solid-top" v-if="quiz.flag.length>1">
								<view class="content text-xl text-center" v-if="optionList[quiz.ans] == quiz.flag">
									<text class=" cuIcon-roundcheckfill text-green"></text>恭喜您，您答对了！
								</view>
								<view class="content text-xl text-center" v-if="optionList[quiz.ans] != quiz.flag">
									<text class="text-red cuIcon-roundclosefill"></text>不好意思，您答错了！
								</view>
							<view class="padding-xl text-xl">
								<rich-text class="richText"  :nodes="quiz.tip"></rich-text>
							</view>						

						</view> -->
						</view>
						<!--按钮组-->
						<view class="padding flex flex-wrap justify-between align-center bg-white padding-bottom-xl margin-bottom-lg">
							<button class="cu-btn round lg" @click="MoveSubject(-1)"><text class="lg cuIcon-back"></text>上一题</button>
							<button class="cu-btn round lg" v-if="subjectIndex!=9" @click="MoveSubject(1)">下一题<text class="lg cuIcon-right"></text></button>
							<button class="cu-btn round lg" v-if="subjectIndex!=9" @click="GetRandomQuiz">退出答题<text class="lg cuIcon-refresh"></text></button>	
							<button class="cu-btn round lg" v-if="subjectIndex==9" @click="GetRandomQuiz">再测一次<text class="lg cuIcon-refresh"></text></button>							
						</view>
					</scroll-view>
					</swiper-item>
					
				</swiper>		
			</form>
		</view>
		
		<!--答案 居中弹窗-->
		<uni-popup ref="popup" type="center" :mask-click="false" :animation="true">
			<view  class="uni-tip">
					<view class="uni-tip-title text-xl" v-if="quizList.length>0 && optionList[quizList[subjectIndex].ans] == quizList[subjectIndex].flag">
						<text class=" cuIcon-roundcheckfill text-green"></text>
						<text class=" cuIcon-roundcheckfill text-white" style="font-size: 20upx;"></text>恭喜您，您答对了！
					</view>
					<view class="uni-tip-title text-xl" v-if="quizList.length>0 && optionList[quizList[subjectIndex].ans] != quizList[subjectIndex].flag">
						<text class="text-selfset-red cuIcon-roundclosefill"></text>
						<text class=" cuIcon-roundcheckfill text-white" style="font-size: 20upx;"></text>不好意思，您答错了！
					</view>
					<view class="uni-tip-content">
						<rich-text class="richText text-xl"  :nodes="quizList.length>0 && quizList[subjectIndex].tip"></rich-text>
					</view>		
					<view class="uni-tip-group-button">
							<!-- <text class="uni-tip-button text-xl" @click="closeAns">取消</text> -->
							<text class="uni-tip-button text-xl" @click="closeAns">好的👌</text>
					</view>												
			</view>

		</uni-popup>
		<!--导航栏 改变-->
		<!-- <navbar ref="navbar"></navbar> -->
	</view>
	
</template>

<script>
//引入插件
import uniPopup from "@/components/uni-popup/uni-popup.vue"

// //在微信开发者工具自动播放，本地网络没有反应，怀疑是 iOS 端播不了 or h5 播不了
// const innerAudioContext = uni.createInnerAudioContext()
// innerAudioContext.autoplay = true
// innerAudioContext.loop = true
// innerAudioContext.src = 'https://music.163.com/song/media/outer/url?id=28287132.mp3'

	export default {
		components: {
			uniPopup	
		},
		data() {
			return {
				showWelcome: true,//显示欢迎界面
				subjectIndex: 0,//跳转索引
				swiperHeight: '1600upx',//
				title: '新冠病毒专项答题',
				quizList:[],
				fullQuizList:[],
				//当前题目的选项列表
				optionList:[],
				modalCard: null ,//显示答题卡
				height:'',
				welcomeHeight:''
			}
		},
		onReady() {
			// this.$refs.navbar.PageCur='quiz';
			var tempHeight = 800;
			var _me = this;
			uni.getSystemInfo({
				//获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高                
				success: (res)=> {
					// console.log(res.model);                    
					// console.log(res.pixelRatio);                    
					// console.log(res.windowWidth);                    
					// console.log(res.windowHeight);
					// //这里是手机屏幕高度                    
					// console.log(res.language);                    
					// console.log(res.version);                    
					// console.log(res.platform);                    
					tempHeight = res.windowHeight;
					console.log("屏幕可用高度 " + tempHeight);
					_me.swiperHeight = tempHeight + 'px';
					console.log("滑屏最后高度 " + _me.swiperHeight);
					this.height = _me.swiperHeight;
					console.log("hello world")
					console.log(this.height);
					var welcomeHeight = tempHeight-55;			
					this.welcomeHeight = welcomeHeight +'px'	
				}
			});

		},
		onLoad() {
			// 加载背景音乐
			// const innerAudioContext = uni.createInnerAudioContext()
			// innerAudioContext.autoplay = true
			// innerAudioContext.loop = true
			// innerAudioContext.src = 'https://music.163.com/song/media/outer/url?id=28287132.mp3'
			
			//显示加载中
			uni.showLoading({
				title:"加载中...."
			});			
			uni.request({
				url: 'http://120.79.197.140:1337/quizzes', //真实接口的地址。
				method: 'GET',
				data: {},
				success: res => {
					function randomsort(a, b) {
						return Math.random()>.5 ? -1 : 1;
						//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
					}
					this.fullQuizList = res.data;
					//console.log(this.fullQuizList)
					this.fullQuizList.sort(randomsort); //打乱数组
					this.quizList = this.fullQuizList.slice(1,11)
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
			uni.setNavigationBarTitle({
				title: this.title
			});			
			
			
		},
		methods: {
			showContent: function(e) {
				this.showWelcome = false
				// console.log(this.showWelcome)
			},
			showCardModal: function(e) {
				this.modalCard = e.currentTarget.dataset.target
			},
			hideCardModal: function(e) {
				this.modalCard = null
			},
			showErrorModal: function(e) {
				this.modalError = e.currentTarget.dataset.target
			},
			hideErrorModal: function(e) {
				this.modalError = null
			},
			SwiperChange: function(e) { //滑动事件
			
				let index = e.target.current;
				
				if (index != undefined) {
					this.subjectIndex = index;	
				}								
			},
			selectRadio : function(e) { //单选选中
				var qui = this.quizList[this.subjectIndex];
				// console.log(e)
				var values = e.currentTarget.dataset.value; 
				this.optionList = [qui.item__001,qui.item__002,qui.item__003,qui.item__004];
				this.quizList[this.subjectIndex].flag = values;
				//显示答案
				this.$refs.popup.open()
			},
			RadioboxChange : function(e) { //单选选中
				// e.target.value = true;
				var qui = this.quizList[this.subjectIndex];
				var values = e.detail.value;				
				this.optionList = [qui.item__001,qui.item__002,qui.item__003,qui.item__004];
				this.quizList[this.subjectIndex].flag = values;
				//显示答案
				this.$refs.popup.open()
				
			},
			
			MoveSubject: function(e) { //上一题、下一题

				if (e === -1 && this.subjectIndex != 0) {
					this.subjectIndex -= 1;
				}
				if (e === 1 && this.subjectIndex < this.quizList.length - 1) {
					this.subjectIndex += 1;
				}
			},
			
			AppointedSubject: function(e) { //题卡指定				
					this.modalCard = null;
					this.subjectIndex = e;	

			},			
			//打乱题目
			GetRandomQuiz:function(e){
				//打乱题目
				function randomsort(a, b) {
					return Math.random()>.5 ? -1 : 1;
					//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
				}				
				this.fullQuizList.sort(randomsort); //打乱数组
				this.quizList = this.fullQuizList.slice(1,11);
				//删除上次的答题信息
				for (var i = 0; i < this.quizList.length; i++) {		
				this.$set(this.quizList[i],"flag","");				
				}
				//返回欢迎界面
				this.showWelcome = true
				this.subjectIndex = 0
			},
			//关闭答案
			closeAns:function(e){
				this.$refs.popup.close()
			}	
		}
	}
	
</script>

<style>
	@import "../../colorui/animation.css";
	page {
		background-color: #FFFFFF;
	}

	.cu-form-group {
		justify-content: flex-start
	}

	.cu-form-group .title {
		padding-left: 30upx;
		padding-right: 0upx;
	}

	.cu-form-group+.cu-form-group {
		border-top: none;
	}

	.cu-bar-title {
		min-height: 50upx;
	}
	
	.cu-list.menu>.cu-item-error{justify-content: flex-start;}
	.button {
		flex: 1;
		margin: 10px 0;
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
</style>
