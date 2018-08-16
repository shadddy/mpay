<template>
	<div class="footer">
		<div class="container">
			<ul class="clearfix nav">
				<li>
					{{$t('footer.list1.txt1')}}
					<ul class="subNav">
						<li>{{$t('footer.list1.txt2')}}</li>
						<li>{{$t('footer.list1.txt3')}}</li>
					</ul>
				</li>
				<li>
					{{$t('footer.list2.txt1')}}
					<ul class="subNav">
						<li>{{$t('footer.list2.txt2')}}</li>
						<li>{{$t('footer.list2.txt3')}}</li>
						<li>{{$t('footer.list2.txt4')}}</li>
						<li>{{$t('footer.list2.txt5')}}</li>
						<li>{{$t('footer.list2.txt6')}}</li>
					</ul>
				</li>
				<li>
					{{$t('footer.list3.txt1')}}
					<ul class="subNav">
						<li>{{$t('footer.list3.txt2')}}</li>
						<li>{{$t('footer.list3.txt3')}}</li>
						<li>{{$t('footer.list3.txt4')}}</li>
						<li>{{$t('footer.list3.txt5')}}</li>
					</ul>
				</li>
				<li>
					{{$t('footer.list4.txt1')}}
					<ul class="subNav">
						<li>{{$t('footer.list4.txt2')}}</li>
					</ul>
				</li>
				<li>
					{{$t('footer.list5.txt1')}}
					<ul class="subNav">
						<li>{{$t('footer.list5.txt2')}}</li>
						<li>{{$t('footer.list5.txt3')}}</li>
					</ul>
				</li>
				<li>
					{{$t('footer.list6.txt1')}}
					<ul class="subNav">
						<li>{{$t('footer.list6.txt2')}}</li>
						<li>{{$t('footer.list6.txt3')}}</li>
					</ul>
				</li>
			</ul>
			<ul class="clearfix wechart">
				<li>
					<img src="../../static/img/wechat1.png" />
				</li>
				<li>
					<img src="../../static/img/wechat2.png" />
				</li>
				<li>
					<img src="../../static/img/wechat3.png" />
				</li>
			</ul>
			<div class="clearfix"></div>
			<p>Copyright©2017.ZNY Inc.All rights reserved</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped lang="less">
	.footer {
		overflow: hidden;
		
		background: #00374d;
		.container {
			padding: 50px 90px 10px 90px;
			.nav{
				float: left;
			}
			.nav>li {
				cursor: pointer;
				float: left;
				color: white;
				margin-left: 50px;
				.subNav>li {
					cursor: pointer;
					color: #6b787f;
					line-height: 30px;
				}
			}
			p {
				margin-top: 30px;
				padding: 0;
			}
			.wechart {
				float: right;
				li {
					width: 100px;
					height: 139px;
					display: inline-block;
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>