<template>
	<view class="bg-gradual-blue">
		
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">
			
			<!-- 导航栏 -->
			<cu-header bgColor="bg-black" @showDrawer="showDrawer" >
				<block slot="content">首页</block>
			</cu-header>

			

		</scroll-view>
		<!-- end -->
		
		
		<!-- 右侧抽屉 江姗姗你加油！！！ -->
		
		<!-- 返回主界面 -->
		<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
			<text class="cuIcon-pullright"></text>
		</view>
		<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''" style="background: #310000;">
			
			<!-- 个人界面 -->
			<view class="header margin-top-xl text-black">
				<text class="text-white text-bold" style="font-size: 56upx;" >个人界面</text>
			</view>
			
			<!-- list -->
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">

				<view class="cu-item arrow" @click="showHistory">
					<view class="content">
						<text class="cuIcon-search text-grey"></text>
						<text class="text-black text-xl">搜索历史</text>
					</view>
				</view>	

				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-more text-black"></text>
						<text class="text-black text-xl">团队介绍</text>
					</view>
				</view>			
						
			</view>
			
		</scroll-view>
		<!-- end -->
		
	</view>
</template>

<script>
	import cuHeader from '@/components/cu-header.vue';
	import cuVideo from '@/components/cu-video.vue';
	export default {
		components: {
			cuHeader,
			cuVideo
		},
		data() {
			return {
				modalName: null,
				videoList: []
			};
		},
		onLoad() {
			this.getVideoList();
		},
		methods: {
			showHistory(e) {
				uni.navigateTo({
					url: '/pages/HM-search/HM-search'
				});
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			// Drawer弹出
			showDrawer(){
				if( this.modalName == null ){
					this.modalName = 'viewModal';
				}else{
					this.modalName = null;
				}
			},
			// 顶部tab
			tabChange(val){
				console.log(val);
			},
			// 获取视频列表
			getVideoList() {
				uni.request({
					url: 'https://api.52170.xin/video',
					dataType: 'json',
					success: res => {
						console.log(res.data.data.list);
						for (let item of res.data.data.list) {
							this.videoList.push({
								video_id: item.video_id,
								nickname: item.nickname,
								video_describe: item.video_describe,
								cover_url: item.cover_url,
								video_url: item.video_url,
								dianzan: item.dianzan,
								pinglun: item.pinglun,
								zhuanfa: item.zhuanfa,
								is_dianzan: item.is_dianzan,
								flag: false
							});
						}

					}
				});
			}
			
			
		},
		
	}
</script>

<style>
	page {
		background-image: var(--gradualBlue);
		width: 100vw;
		overflow: hidden;
	}

	.DrawerPage {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0vw;
		background-color: #f1f1f1;
		transition: all 0.4s;
	}

	.DrawerPage.show {
		transform: scale(0.9, 0.9);
		left: 85vw;
		box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
		transform-origin: 0;
	}

	.DrawerWindow {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		padding: 100upx 0;
		background-color: #FFFFFF;
	}

	.DrawerWindow.show {
		transform: scale(1, 1) translateX(0%);
		opacity: 1;
		pointer-events: all;
	}

	.DrawerClose {
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 30upx;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
	}

	.DrawerClose.show {
		opacity: 1;
		pointer-events: all;
		width: 15vw;
		color: #fff;
	}

	.DrawerPage .cu-bar.tabbar .action button.cuIcon {
		width: 64upx;
		height: 64upx;
		line-height: 64upx;
		margin: 0;
		display: inline-block;
	}

	.DrawerPage .cu-bar.tabbar .action .cu-avatar {
		margin: 0;
	}

	.DrawerPage .nav {
		flex: 1;
	}

	.DrawerPage .nav .cu-item.cur {
		border-bottom: 0;
		position: relative;
	}

	.DrawerPage .nav .cu-item.cur::after {
		content: "";
		width: 10upx;
		height: 10upx;
		background-color: currentColor;
		position: absolute;
		bottom: 10upx;
		border-radius: 10upx;
		left: 0;
		right: 0;
		margin: auto;
	}

	.DrawerPage .cu-bar.tabbar .action {
		flex: initial;
	}
	
	/*  style */
	.sign>view{
		height: 100upx;
	}
	.sign>view:first-child>image{
		width: 40upx;
		margin-right: 10upx;
	}
	.sign>view:last-child>image{
		width: 80upx;
		margin-right: 10upx;
	}
	.tools{
		margin-top: 50upx;
		padding-left: 30upx;
	}
	.tools>view{
		flex-direction: column;
	}
	.tools>view .cuIcon{
		font-size: 50upx;
		margin-bottom: 10upx;
	}
	.foot{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		margin-bottom: 20upx;
	}
	.foot>view{
		flex-direction: column;
	}
	.foot>view .cuIcon{
		font-size: 46upx;
		margin-bottom: 10upx;
	}
	.header{
		flex-direction: row;
		padding-left: 45upx;
	}
	.header>.flex{
		flex-direction: row;
	}
	.header>.flex>.flex{
		flex: 3;
		flex-direction: column;
	}
</style>
