<template>
	
	<view>
		<view class="cu-custom" style="padding-top: 10px;" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="bgColor">
				<view class="action">
					<text class="cuIcon-sort" @tap="showDrawer"></text>
					<view class="tab">
						<text :class="TabCur==0?'active':null" @tap="tabChange(0)">同城</text>
						<text :class="TabCur==1?'active':null" @tap="tabChange(1)">关注</text>
						<text :class="TabCur==2?'active':null" @tap="tabChange(2)">发现</text>
					</view>
				</view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<!-- <slot name="content"></slot> -->
				</view>
				<view class="right padding-right-sm">
					<text class="cuIcon-roundadd"></text>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				TabCur: 0
			};
		},
		name: 'cu-header',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar+5;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			}
		},
		methods: {
			showDrawer(e){
				this.$emit('showDrawer');
			},
			tabChange(val){
				this.TabCur = val;
				this.$emit('tabChange',val);
			}
		}
	}
</script>

<style>
.cuIcon-sort{
	font-size: 50upx;
}
.action>.tab{
	margin-left: 20upx;
}
.action>.tab>text{
	font-weight: bold;
	margin: 0 24upx;
	padding-bottom: 10upx;
	/* color: #1CBBB4; */
}
.tab>.active{
	border-bottom: 6upx solid #FFFFFF;
	/* color: #FFFFFF; */
}
.cu-bar>.right{
	font-size: 40upx;
}
</style>
