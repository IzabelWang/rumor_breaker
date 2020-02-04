<template>
    <view class="cu-bar search bg-white">
        <view class="search-form round">
            <text class="cuIcon-search"></text>
            <input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索相关谣言" confirm-type="search"></input>
        </view>
        <view class="action">
            <button class="cu-btn bg-green shadow-blur round">搜索</button>
        </view>
    </view>
</template>

<script>
	export default {
        name: "searchbar",
		data() {
			return {
				InputBottom: 0
			};
        },
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	}
</script>

<style>
	.box {
		margin: 20upx 0;
	}

	.box view.cu-bar {
		margin-top: 20upx;
	}
</style>