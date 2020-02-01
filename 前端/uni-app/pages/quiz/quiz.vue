<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" ><block slot="content">新冠病毒专项答题</block></cu-custom>
			<!--欢迎页面-->
			<view class="welcome padding-bottom-xl margin-bottom-xl" v-if="showWelcome==true"  style="background-size:100%;background:url(/static/bg-quiz.png);">
				<view class="flex align-center" style="height: 1200upx;">
					<image src="/static/text-quiz.png" mode="aspectFit" style="width: 100%;height:100%;"  :style="[{animation: 'show 1s 1'}]"></image>
				</view>		
				<view :style="[{animation: 'show 1s 1'}]">
					<button class="cu-btn block lg line-red" @click="showContent">开始答题</button>
				</view>	
			</view>
			<scroll-view scroll-y="true" scroll-top="0">
			<view class="content " v-if="showWelcome==false">
				<view id="top-box" class="cu-bar bg-white solid-bottom">
					<view class="action">
						<button class="cu-btn bg-green shadow" @tap="showCardModal" data-target="modalCard">答题卡</button>
					</view>
				</view>
				<view class="cu-modal" :class="modalCard=='modalCard'?'show':''" @tap="hideCardModal">
					<view class="cu-dialog" @tap.stop>
						
						<scroll-view class="page padding" :scroll-y=true :style="{'height':swiperHeight}" >				
						<view class="cu-bar solid-bottom">
								<view class="action" @tap="hideCardModal">
									<text class="cuIcon-close text-red"></text>
								</view>					
							<view class="action">
								<text class="cuIcon-title text-red"></text>答题卡
							</view>					
						</view>
						<view class="grid col-5 ">
							<view class="margin-tb-sm text-center" v-for="(quiz,index) in quizList" :key="index">
								<button class="cu-btn round" :class="[quiz.flag.length===0?'line-grey':'bg-red']" @click="AppointedSubject(index)" >{{index+1}}</button>
							</view>
						</view>
						
						</scroll-view>
					</view>
				</view>
				<form>
					<swiper :current="subjectIndex" class="swiper-box" @change="SwiperChange" :style="{'height':swiperHeight}">
						<swiper-item v-for="(quiz,index) in quizList" :key="index">					
							<scroll-view scroll-y=true scroll-top=0> 
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
							<view>
								<radio-group class="block"  @change="RadioboxChange" >
									<view class="cu-form-group" v-for="option in quiz.item" :key="option">
										<radio :value="option" :checked="quiz.flag == option ?true:false"></radio>
										<view class="title text-black">{{option}}</view>
									</view>
								</radio-group>

							</view>
							<!--答案解析-->
							<view  class="margin-top solid-top" v-if="quiz.flag.length>0">
									<view class="content text-xl text-center" v-if="quiz.item[quiz.ans] == quiz.flag">
										<text class=" cuIcon-roundcheckfill text-green"></text>
										恭喜您，您答对了！
									</view>
									<view class="content text-xl text-center" v-if="quiz.item[quiz.ans] != quiz.flag">
										<text class="text-red cuIcon-roundclosefill"></text>
										不好意思，您答错了！
									</view>
								<view class="padding-xl text-xl">
									<rich-text class="richText"  :nodes="quiz.tip"></rich-text>
								</view>						

							</view>
							</view>
							<!--按钮组-->
							<view class="padding flex flex-wrap justify-between align-center bg-white padding-bottom-xl margin-bottom-lg">
								<button class="cu-btn round lg" @click="MoveSubject(-1)"><text class="lg cuIcon-back"></text>上一题</button>
								<button class="cu-btn round lg" v-if="subjectIndex!=9" @click="MoveSubject(1)">下一题<text class="lg cuIcon-right"></text></button>
								<button class="cu-btn round lg" v-if="subjectIndex==9" @click="hideContent">再测一次<text class="lg cuIcon-refresh"></text></button>							
							</view>
							</scroll-view>
						</swiper-item>
						
					</swiper>		
				</form>
			</view>
		</scroll-view>


	</view>
</template>

<script>

	export default {
		data() {
			return {
				showWelcome:true,//显示欢迎界面
				subjectIndex: 0,//跳转索引
				swiperHeight: '1600upx',//
				title: '新冠病毒专项答题',
				quizList:[
					{"ques":"如果要接触发热的人，下面哪个口罩最合适？",
					"flag":"",
					"img":"https://mat1.gtimg.com/news/zt2020/2020wuhan/images/q13.png",
					"item":["海绵口罩","医用防护口罩","活性炭口罩","医用外科口罩"],
					"ans":1,
					"tip":"正确答案：B 医用防护口罩。",
					"tip_ig":""},
					{"ques":"下列哪个行为可以预防新型冠状病毒肺炎？",
					"flag":"",
					"img":"",
					"item":["抽烟","喝板蓝根","戴口罩、勤洗手","服用达菲"],
					"ans":2,
					"tip":"正确答案：C 戴口罩、勤洗手<br/>知识官阿源老师：目前新型冠状病毒尚无针对性的药物，而抽烟不仅不能预防感染，还会降低人体免疫力.",
					"tip_ig":""},
					{"ques":"对于预防新型冠状病毒肺炎，下列哪个说法是错误的？",
					"flag":"",
					"img":"",
					"item":["应当尽量少出门","避免去人群密集的地方","出门时需佩戴口罩","我身体好，没事的"],
					"ans":3,
					"tip":"正确答案：D 我身体好，没事的<br/>知识官阿源老师：新型冠状病毒作为新病毒，人类第一次接触，任何人都没抗体，人群普遍易感，身体好并不能降低感染几率。",
					"tip_ig":""},
					{"ques":"新型冠状病毒和SARS病毒什么关系？",
					"flag":"",
					"img":"",
					"item":["一样","近亲","完全没有关系","不好说"],
					"ans":1,
					"tip":"正确答案：B 近亲。",
					"tip_ig":""},
					{"ques":"有限人传人的特点是：",
					"flag":"",
					"img":"",
					"item":["病毒传染力相对较弱"," A传给B，B没有传染性","以上都对","以上都不对"],
					"ans":2,
					"tip":"正确答案：C 以上都对<br/>知识官阿源老师：有限人传人指的是，甲感染了传染病，将其传染给了乙、丙，但乙、丙并不具备足够的传染性，无法再传染给其他人了。",
					"tip_ig":""},
					{"ques":"持续人传人的特点是：",
					"flag":"",
					"img":"",
					"item":["很容易形成流行"," A传给B，B可以传给C ","病毒传染力强","以上都对"],
					"ans":3,
					"tip":"正确答案：D 以上都对<br/>持续人传人指的是病毒可以连续传几代，比如A传给B，B又传给C，C又传给D，这意味着病毒传播能力比初期的动物传人、人传人更强，感染人数呈指数增加，很容易形成传染病流行。",
					"tip_ig":""},
					{"ques":"小红是武汉人，已经订了回家的高铁票，今天放假了，最安全的选择是：",
					"flag":"",
					"img":"",
					"item":["按照既定行程回家","取消行程，待在现住地","取消行程去外地玩","将高铁票换成飞机票"],
					"ans":1,
					"tip":"正确答案：B 取消行程，待在现住地<br/>知识官阿源老师：国家卫健委高级别专家组专家呼吁公众：现在能不到武汉去就不去，武汉人能不出来就不出来。",
					"tip_ig":""},
					{"ques":"身边朋友出现了发热症状，我应该：",
					"flag":"",
					"img":"",
					"item":["避免和朋友近距离接触","建议朋友佩戴口罩并就诊","减少自身出行计划","以上都对"],
					"ans":3,
					"tip":"正确答案：D 以上都对<br/>防护手段包括：出门佩戴口罩，医用外科口罩、N95 外科口罩等均可，最长可持续使用 4 小时或内层变湿润；勤洗手；避免去人多的地方；保持家里通风；咳嗽、打喷嚏时，用纸巾捂住口鼻，事后要洗手；在家要吃熟食，肉类、蛋类、奶类等。",
					"tip_ig":""},
					{"ques":"下面正确佩戴口罩的方式：",
					"flag":"",
					"img":"https://mat1.gtimg.com/news/zt2020/2020wuhan/images/q34.png",
					"item":["吸水面朝外","鼻子外漏","遮住口鼻，紧贴鼻梁","穿戴污染口罩"],
					"ans":2,
					"tip":"正确答案：C 遮住口鼻，紧贴鼻梁<br/>知识官阿源老师：武汉肺炎爆发后，天天给你转发养生知识的中国父母，还暴露在拒绝戴口罩的危险之下。",
					"tip_ig":""},
					{"ques":"春节回家如何让自己旅途更为安全？",
					"flag":"",
					"img":"",
					"item":["避开经过武汉的列车","出行佩戴N95口罩","旅途自带免洗洗手液勤洗手","以上都对"],
					"ans":3,
					"tip":"正确答案：D 以上都对<br/>知识官阿源老师：目前主要的感染者集中在武汉地区，因此避开经过武汉的列车可以有效降低风险；出行佩戴 N95 口罩是有效的预防手段；旅途自带免洗洗手液，在接触口、眼、鼻之前，吃饭之前、上厕所之后洗手，均可减少自己的感染风险。",
					"tip_ig":""},					
					],
				modalCard: null ,//显示答题卡
			}
		},
		onReady() {

			var tempHeight = 800;
			var _me = this;
			uni.getSystemInfo({
				//获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高                
				success: function(res) {
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

					uni.createSelectorQuery().select("#top-box").fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						tempHeight -= data.height;
						console.log("减掉顶部后的高度 " + tempHeight);

						uni.createSelectorQuery().select("#foot-box").fields({
							size: true,
							scrollOffset: true
						}, (data) => {
							tempHeight -= data.height;
							console.log("减掉底部后的高度 " + tempHeight);
							_me.swiperHeight = tempHeight + 'px';
							console.log("滑屏最后高度 " + _me.swiperHeight);
						}).exec();

					}).exec();
				}
			});

		},
		onLoad() {
			
			this.currentType = this.subjectList[0].type;
			uni.setNavigationBarTitle({
				title: this.title
			});			
			
			
		},
		methods: {
			showContent: function(e) {
				this.showWelcome = false
				// console.log(this.showWelcome)
			},
			hideContent: function(e) {
				this.showWelcome = true
				this.subjectIndex = 0
				//随机选取10道题目
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
					this.currentType = this.subjectList[index].type;
					this.userFavor = this.subjectList[index].userFavor;					
				}								
			},			
			RadioboxChange : function(e) { //单选选中
							var items = this.quizList[this.subjectIndex].item;
				var values = e.detail.value;
				this.quizList[this.subjectIndex].flag = values;
				// if(this.autoRadioNext && this.subjectIndex < this.subjectList.length - 1){
				// 	this.subjectIndex += 1;						
				// 	};
				
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
</style>
