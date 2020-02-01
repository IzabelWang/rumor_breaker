<template>
    <view class="cu-bar tabbar bg-white shadow foot">
        <view class="action" @click="NavChange" data-cur="basics">
            <view class='cuIcon-cu-image'>
                <navigator url="/pages/index/index">
                    <image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
                </navigator>
            </view>
            <view :class="PageCur=='basics'?'text-green':'text-gray'">元素</view>
        </view>
        <view class="action" @click="NavChange" data-cur="quiz">
            <view class='cuIcon-cu-image'>
                <navigator url="/pages/quiz/quiz">
                    <image :src="'/static/tabbar/component' + [PageCur == 'quiz'?'_cur':''] + '.png'"></image>
                </navigator>
            </view>
            <view :class="PageCur=='quiz'?'text-green':'text-gray'">答题</view>
        </view>
        <view class="action" @click="NavChange" data-cur="about">
            <view class='cuIcon-cu-image'>
                <image :src="'/static/tabbar/about' + [PageCur == 'about'?'_cur':''] + '.png'"></image>
            </view>
            <view :class="PageCur=='about'?'text-green':'text-gray'">关于</view>
        </view>
    </view>
</template>

<script>
	export default {
        name: "navbar",
		data() {
		return {
				PageCur: 'basics'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
