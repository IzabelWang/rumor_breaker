<template>
	<view>
		<basics v-if="PageCur=='basics'"></basics>
		<plugin v-if="PageCur=='about'"></plugin>
		<navbar></navbar>
	</view>
</template>

<script>
	export default {
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
