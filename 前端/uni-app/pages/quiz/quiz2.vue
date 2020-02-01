	<view class="cu-card dynamic" >
		<view class="cu-item shadow" :style="[{animation: 'show 1s 1'}]">
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="solid-bottom text-xl padding">
						<text class="text-black text-bold">{{quiz.ques}}</text>
					</view>
				</view>
			</view>
			<view class="grid flex-sub padding-lr">
				<!-- 没有图片则不显示-->
				<image :src="quiz.img" mode="widthFix" style="width:100%" v-if="quiz.img"></image>
			</view>
			<view class="padding flex flex-direction" v-for="item in quiz.item" :key="item">
				<button class="cu-btn lg"  @click="buttonChange" :data-value="item" :class="item==selected?'bg-blue':''">{{item}}</button>
			</view>
		</view>
	</view>
	<view class="cu-modal" :class="showAns=='true'?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content" v-if="this.quiz.item[this.quiz.ans] == this.selected">
					<text class=" cuIcon-roundcheckfill text-green"></text>
					您答对了！
				</view>
				<view class="content" v-if="this.quiz.item[this.quiz.ans] != this.selected">
					<text class="text-red cuIcon-roundclosefill"></text>
					您答错了！
				</view>
				<view class="action" @tap="hideAns">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
				<rich-text class="richText"  :nodes="quiz.tip"></rich-text>
			</view>
			<view class="cu-bar bg-white justify-end">
				<view class="action">
					<button class="cu-btn line-green text-green" @tap="hideAns">下一题</button>
					<button class="cu-btn bg-green margin-left" @tap="hideAns">确定</button>

				</view>
			</view>
		</view>
	</view>
	<script>
	export default {
        name: "quiz",
		data() {
			return {
				swiperList:	[
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
	  "tip_ig":""}],      
				//当前选中的按钮
				selected:'',
				//显示答案
				showAns:'',
				//答案是否正确
				rightAns:'',
				//当前卡片下标
				cardCur:0
        };
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			//点击变色
			buttonChange(e) {
				this.selected = e.currentTarget.dataset.value
				this.showAns = 'true'
				console.log(rightAns)
			},
			//返回答题页面
			hideAns(e) {
				this.showAns = ''
			},
			//跳到下一题
		}
	}
</script>
<style>
	@import "../../colorui/animation.css";
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
</style>