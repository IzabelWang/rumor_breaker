<template>
	<view class="serach">
		<view class="content" :style="{'border-radius':radius+'px'}">
			<!-- HM修改 增加进入输入状态的点击范围 -->
			<view class="content-box" :class="{'center':mode === 2}" @click="getFocus">
				<text class="icon icon-serach"></text>
				<!-- HM修改 增加placeholder input confirm-type confirm-->
				<input type="search" :placeholder="placeholder" class="input" :class="{'center':!active && mode === 2}" :focus="isFocus" v-model="inputVal" @focus="focus" @confirm="doSearch" @blur="blur" style="width:220px"/>
				<!-- HM修改 @click换成@click.stop阻止冒泡 -->
				<!-- <text v-if="isDelShow" class="icon icon-del"  @click.stop="clearInput"></text> -->
			</view>
			<view  v-show="(active&&show&&button === 'inside')||(isDelShow && button === 'inside')" class="serachBtn" @click.stop="clearButton">
				<text class="text-bold">取消</text>
			</view>
		</view>
		<view  v-if="button === 'outside'" class="button" :class="{'active':show||active}" @click.stop="clear">
			<view class="button-item">{{!show?searchName:'取消'}}</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		mode: {
			value: Number,
			default: 1
		},
		//HM修改 定义默认搜索关键词(水印文字)
		placeholder:{
			value: String,
			default: '请输入您要搜索的信息'
		},
		value: {
			type: String,
			default: 'false'
		},
		button: {
			value: String,
			default: 'outside'
		},
		show: {
			value: Boolean,
			default: true
		},
		radius: {
			value: String,
			default: 60
		}
	},
	data() {
		return {
			active: false,
			inputVal: '',
			searchName: '取消',
			isDelShow: false,
			isFocus: true
		};
	},
	methods: {
		//HM修改 触发组件confirm事件
		triggerConfirm(){
			this.$emit('confirm', false);
		},
		//HM修改 触发组件input事件
		inputChange(event){
			var keyword = event.detail.value;
			this.$emit('input', keyword);
			if (this.inputVal) {
				this.isDelShow = true;
			}
		},
		focus() {
			this.active = true;
			//HM修改 增加获取焦点判断
			if (this.inputVal) {
				this.isDelShow = true;
			};
			this.$emit('getFocus',true)
		},
		blur() {
			this.isFocus = true;
			if (!this.inputVal) {
				this.active = false;
				this.$emit('getFocus',false)
			}
		},
		//清空搜索
		clearInput() {
			//HM修改 收起键盘
			this.inputVal = '';
			//this.$emit('search', '');//HM修改 清空内容时候不进行搜索
		},
		//退出搜索界面
		clearButton() {
			//HM修改 收起键盘
			// console.log("hello world")
			uni.hideKeyboard();
			// this.isFocus = false;
			this.inputVal = '';
			// this.active = false;
			this.$emit('return',false)
		},
		getFocus() {
			this.isFocus = true;
		},
		doSearch() {
			//HM修改 增加点击取消时候退出输入状态，内容为空时，输入默认关键字
			if (!this.inputVal) {
				if(!this.show&&this.searchName == '取消'){
					uni.hideKeyboard();
					this.isFocus = false;
					this.active = false;
					return;
				}
			}
			// console.log(this.inputVal); 
			//清空输入数据
			// console.log(this.inputVal)
			this.isFocus = false;
			this.active = false;
			this.$emit('search', this.inputVal?this.inputVal:this.placeholder);
			this.inputVal = '';
			uni.hideKeyboard();


		}
	},
	watch: {
		inputVal(newVal) {
			if (newVal) {
				this.searchName = '搜索';
				//this.isDelShow = true; //HM修改 直接点击页面预设关键字样式异常，注销
			} else {
				this.searchName = '取消';
				this.isDelShow = false;
			}
		},
		//HM修改 双向绑定
		value(val) {
			this.inputVal = val;
		},
	}
};
</script>

<style lang="scss">
.serach {
	display: flex;
	width: 100%;
	//border-bottom: 1px #f5f5f5 solid; //HM修改 去掉边框
	box-sizing: border-box;
	font-size: $uni-font-size-base;
	.content {
		display: flex;
		align-items: center;
		margin-left: 35upx;
		padding-left: 5upx;
		width: 100%;
		height: 80upx;
		border: 2px #680000 solid; //HM修改 去掉边框
		background: #fff;
		overflow: hidden;
		transition: all 0.2s linear;
		border-radius: 30px;

		.content-box {
			width: 100%;
			display: flex;
			align-items: center;
			&.center {
				justify-content: center;
			}
			.icon {
				padding: 0 -50upx;
				&.icon-del {
					font-size: 38upx;
					&:before {content:"\e644";}
				}
				&.icon-serach:before {content:"\e61c";}
			}
			.input {
				width: 100%;
				max-width: 100%;
				line-height: 600upx;
				height: 60upx;
				transition: all 0.2s linear;
				&.center {
					width: 200upx;
				}
				&.sub {
					// position: absolute;
					width: auto;
					color: grey;
				}
			}
		}
		.serachBtn {
			height: 100%;
			flex-shrink: 0;
			padding: 0 30upx;
			//HM修改 按钮背景色
			background:#680000;
			//background: $uni-color-success;
			line-height: 72upx;
			color: #fff;
			//border-left: 1px #ccc solid; //HM修改 去掉边框
			transition: all 0s;
		}
	}

	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		flex-shrink: 0;
		width: 0;
		transition: all 0.2s linear;
		white-space: nowrap;
		overflow: hidden;
		&.active {
			padding-left: 15upx;
			width: 100upx;
		}
	}
}
//HM修改 把字体改成本地加载
@font-face {font-family:"iconfont";src:url('data:application/x-font-woff;charset=utf-8;base64,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');}


.icon {
	font-family: iconfont;
	font-size: 34upx;
	font-style: normal;
	color: #7e7e7e;
	width: 60rpx;
	
}
</style>
