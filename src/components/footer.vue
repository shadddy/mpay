<template>
	<div class="footer">
		<ul class="clearfix">
			<li v-for="item in navList">{{item.name}}
				<ul>
					<li v-for="i in item.children">
					{{i.name}}
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
					name: '技术咨询',
					children: [{
						name: '接入咨询'
					}, {
						name: '技术支持'
					}]
				},{
					name:'APP下载',
					children: [{
						name: '小米'
					}, {
						name: 'OPPO'
					},{
						name:'华为'
					},{
						name:'三星'
					},{
						name:'魅族'
					}]
				}]
			}
		}
	}
</script>

<style scoped lang="less">
	.footer {
		background: #00374d;
	}
</style>