<template>
	<view class="content">
		<uni-list>
			<view  v-for="(item,index) in rumors" :key="index">
                <view  hover-class="uni-list-cell-hover" @tap="openinfo" :data-rumorid="item.id">
                    <uni-list-item :title="item.title" :thumb="item.img_url" :note="item.descrip">
                    </uni-list-item>
                </view>
			</view>
		</uni-list>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
        name:"rumors",
		components: {
			uniSection,
			uniList,
			uniListItem
		},
		data() {
			return {
				rumors : []
			};
		},
		onLoad:function(){
			uni.showLoading({
				title:"加载中...."
			})
			uni.request({
				url: 'http://120.79.197.140:1337/rumors',
				method: 'GET',
				data: {},
				success: res => {
                    this.rumors = res.data;
                    console.log(this.rumors)
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			openinfo(e) {
				var rumorid = e.currentTarget.dataset.rumorid;
				uni.navigateTo({
					url: '../info/info?rumorid='+rumorid
				});
			}
		},
	}
</script>

