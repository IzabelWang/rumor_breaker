<template>
	<view class="content">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block>
				<text class="text-white text-bold " style="font-size: 28rpx;">
				流言详情
				</text>
			</block>
		</cu-custom>
		<view class="title">{{title}}</view>
		<view class="art-content">
			<rich-text class="richText" :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				strings : '',
				//系统宽度
				width : '',
				nodes: [{
					name: 'div',
					attrs: {
						class: 'div-class',
						style: 'line-height: 60px; color: red; text-align:center;'
					},
					children: [{
						type: 'text',
						text: 'Hello&nbsp;uni-app!'
					}]
				}],
				strings: '<div style="text-align:center;"><img src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"/></div>'
			}
		},
		onReady() {
			this.$refs.navbar.PageCur='quiz';
			var tempWidth = 800;
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
					tempWidth = res.windowWidth;
					this.width = tempWidth-50;
				}
			});
		},
		onLoad:function(e){
			console.log(e);
			uni.request({
				url: 'http://120.79.197.140:1337/passages?id='+e.rumorid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					this.title = res.data[0].title;
					this.strings = res.data[0].detail;
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
.content{padding:10upx 2%; width: 96%; flex-wrap:wrap;}
.title{line-height:2em; font-weight:700; font-size:38upx;}
.art-content{line-height:2em;}
.pgc-img{
	width:300upx
}
</style>
