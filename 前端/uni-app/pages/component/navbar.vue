<template>
    <view class="cu-bar tabbar bg-white shadow foot" style="background-color: #540000;">
		
        <view class="action" @click="NavChange" data-cur="index">
            <view class='cuIcon-cu-image'>
                <image :src="'/static/tabbar/basics' + [PageCur=='index'?'_cur':''] + '.png'"></image>
            </view>
            <view :class="PageCur=='basics'?'text-white':'text-grey'">搜索页面</view>
        </view>
		
        <view class="action" @click="NavChange" data-cur="quiz">
            <view class='cuIcon-cu-image'>
                <image :src="'/static/tabbar/component' + [PageCur == 'quiz'?'_cur':''] + '.png'"></image>
            </view>
            <view :class="PageCur=='quiz'?'text-white':'text-grey'">辟谣小游戏</view>
        </view>
		
        <view class="action" @click="NavChange" data-cur="about">
            <view class='cuIcon-cu-image'>
                <image :src="'/static/tabbar/about' + [PageCur == 'about'?'_cur':''] + '.png'"></image>
            </view>
            <view :class="PageCur=='list'?'text-white':'text-grey'">个人界面</view>
        </view>
    </view>
</template>

<script>
	export default {
        name: "navbar",
		data() {
		return {
				PageCur: 'index'
			}
		},
		methods: {
			NavChange: function(e) {
                this.PageCur = e.currentTarget.dataset.cur;
                // console.log(this.PageCur);
                // console.log(e.currentTarget.dataset.cur);
                uni.navigateTo({
                    url:'/pages/'+this.PageCur+'/'+this.PageCur
                })
			}
		}
	}
</script>

<style>

</style>
