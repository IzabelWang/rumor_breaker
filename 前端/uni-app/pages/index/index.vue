<template>
	<view>
		<view class="welcome padding-bottom-xl margin-bottom-xl" :style="{'height':height}" >
			<view :style="{'height':height}" style="background:url('/h5/static/Search_BG.png') no-repeat center; background-size:cover; " >
			</view>	
			
		</view>

	</view>
	
</template>

<script>
//引入插件
import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniPopup	
		},
		data() {
			return {
				swiperHeight: '1600upx',//
				height:'',
			}
		},
		onReady() {
			var tempHeight = 800;
			var _me = this;
			uni.getSystemInfo({
				//获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高                
				success: (res)=> {                   
					tempHeight = res.windowHeight;
					console.log("屏幕可用高度 " + tempHeight);
					_me.swiperHeight = tempHeight + 'px';
					console.log("滑屏最后高度 " + _me.swiperHeight);
					this.height = _me.swiperHeight;
					console.log("hello world")
					console.log(this.height);
					this.welcomeHeight = tempHeight-100;					
				}
			});
		},
	}
	
</script>

<style>

</style>
