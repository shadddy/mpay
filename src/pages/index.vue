<template>
	<div>
		<my-header></my-header>
		<div class="banner">
			<!-- pc 轮播图-->
			<el-carousel :interval="3000" arrow="always" class="bigShow" trigger="click" :height="bannerImgH">
				<el-carousel-item v-for="(item,index) in $t('banner.img1')" :key="index">
					<img :src="item" alt="">
				</el-carousel-item>
			</el-carousel>
		</div>
		<!--注册-->
		<div class="payment">
			<div class="container">
				<h1>{{$t("index.payment_title")}}</h1>
				<p>{{$t("index.payment_title2")}}</p>
				<ul class="clearfix">
					<li>
						<span><img src="../../static/img/payment-icon1.png" alt=""></span>
						<h4>{{$t("index.payment_list_title1")}}</h4>
						<p>{{$t("index.payment_list_txt1")}}</p>
					</li>
					<li>
						<span><img src="../../static/img/payment-icon2.png" alt=""></span>
						<h4>{{$t("index.payment_list_title2")}}</h4>
						<p>{{$t("index.payment_list_txt2")}}</p>
					</li>
					<li>
						<span><img src="../../static/img/payment-icon3.png" alt=""></span>
						<h4>{{$t("index.payment_list_title3")}}</h4>
						<p>{{$t("index.payment_list_txt3")}}</p>
					</li>
				</ul>
				<button>{{$t("index.register")}}</button>
			</div>
		</div>
		<!--解决方案-->
		<div class="group">
			<div class="container">
				<ul>
					<li>
						<h2>{{$t("group.list1_title")}}</h2>
						<img src="../../static/img/group1.png" />
						<h4>{{$t("group.title1")}}</h4>
						<p>{{$t("group.list1_txt1")}}</p>
						<h4>{{$t("group.title2")}}</h4>
						<p>{{$t("group.list1_txt2")}}</p>
						<button>{{$t("group.more")}}</button>
					</li>
					<li>
						<h2>{{$t("group.list2_title")}}</h2>
						<img src="../../static/img/group2.png" />
						<h4>{{$t("group.title1")}}</h4>
						<p>{{$t("group.list2_txt1")}}</p>
						<h4>{{$t("group.title2")}}</h4>
						<p>{{$t("group.list2_txt2")}}</p>
						<button>{{$t("group.more")}}</button>
					</li>
					<li>
						<h2>{{$t("group.list3_title")}}</h2>
						<img src="../../static/img/group3.png" />
						<h4>{{$t("group.title1")}}</h4>
						<p>{{$t("group.list3_txt1")}}</p>
						<h4>{{$t("group.title2")}}</h4>
						<p>{{$t("group.list3_txt2")}}</p>
						<button>{{$t("group.more")}}</button>
					</li>
				</ul>
			</div>
		</div>
		<!--体验支付流程-->
		<div class="experience">
			<div class="container">
				<h1>{{$t("index.experience.title")}}</h1>
				<p>{{$t("index.experience.title2")}}</p>
				<ul class="clearfix">
					<li>
						<span><img src="../../static/img/exp-1.png" alt=""></span>
						<h3>{{$t("index.experience.list1_1")}}</h3>
						<p class="clearfix">
							<span class="ellipsis"  ><i></i>{{$t("index.experience.list1_2")}}</span>
							<span class="ellipsis" ><i></i>{{$t("index.experience.list1_3")}}</span>
						</p>
						<button class="ellipsis">{{$t("index.experience.list1_btn")}}</button>
					</li>
				</ul>
			</div>
		</div>
	</div>

</template>

<script>
	import header from '@/components/header'
	export default {
		components: {
			myHeader: header
		},
		data() {
			return {
				bannerImgH: "0"
			}
		},
		methods: {
			resSize: function() {
				let bl = 1920 / 800,
					bodyWidth = document.body.clientWidth;
				this.bannerImgH = bodyWidth / bl + "px";
			}
		},
		mounted() {
			let that = this;
			that.resSize();
			$(window).resize(function() {
				that.resSize();
			})
		}
	}
</script>

<style scoped lang="less">
	/* 轮播图*/
	
	@media only screen and (max-width:768px) {
		.bigShow {
			display: none;
		}
		.bigHide {
			display: block;
		}
	}
	
	@media only screen and (min-width:768px) {
		.bigShow {
			display: block;
		}
		.bigHide {
			display: none;
		}
	}
	
	.bigShow img {
		height: 100%;
		width: 100%;
	}
	
	.payment {
		width: 100%;
		height: 840px;
		.container {
			padding: 110px 30px;
			ul li {
				transition: .5s;
				float: left;
				width: calc(100% / 3);
				padding: 0 30px;
				box-sizing: border-box;
				span {
					display: block;
					min-height: 64px;
				}
				img {
					display: block;
					margin: 0 auto;
				}
				h4 {
					text-align: center;
					color: #fc5f00;
					font-size: 28px;
					line-height: 70px;
					margin-top: 15px;
					padding: 10px 0;
				}
				p {
					font-size: 16px;
					color: #999999;
					line-height: 24px;
				}
			}
			button {
				width: 240px;
				height: 56px;
				line-height: 56px;
				font-size: 16px;
				color: #fff;
				outline: none;
				border: none;
				cursor: pointer;
				background: #00aaef;
				box-sizing: border-box;
				margin: 66px auto 0 auto;
				display: block;
			}
			button:hover {
				border-radius: 10px;
				transition: .5s;
				-moz-transition: .5s;
				-webkit-transition: .5s;
			}
		}
	}
	
	.group {
		width: 100%;
		height: 1030px;
		background-image: url(../../static/img/groupBg.png);
		background-position: center;
		.container {
			padding: 110px 0;
			ul {
				li {
					float: left;
					width: calc(95% / 3);
					margin-right: 1%;
					img {
						width: 100%;
					}
					p {
						padding: 0;
						text-align: left;
						padding-top: 25px;
					}
					h2 {
						color: #fff;
						font-size: 32px;
						margin-bottom: 50px;
					}
					h4 {
						color: #fff;
						margin-top: 80px;
						font-size: 24px;
					}
					button {
						width: 190px;
						height: 48px;
						color: #a6a6a6;
						border: 1px solid #a6a6a6;
						background: transparent;
						outline: none;
						border-radius: 5px;
						cursor: pointer;
						margin-top: 80px;
					}
				}
			}
		}
	}
	
	.experience {
		background: #f8f8f8;
		.container {
			padding: 80px 30px;
			ul li {
				float: left;
				background: #fff;
				width: calc((100% - 60px) / 4);
				box-sizing: border-box;
				padding: 48px 18px;
				margin-right: 20px;
				h3 {
					text-align: center;
					font-size: 18px;
					padding: 24px 0 26px 0;
				}
			}
			ul li:last-of-type {
				margin-right: 0;
			}
			ul li>span {
				width: 50px;
				height: 60px;
				display: block;
				margin: 0 auto;
				img {
					display: block;
					margin: 0 auto;
				}
			}
		}
	}
</style>