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
							<span class="ellipsis"><i></i>{{$t("index.experience.list1_2")}}</span>
							<span class="ellipsis"><i></i>{{$t("index.experience.list1_3")}}</span>
						</p>
						<button class="ellipsis">{{$t("index.experience.list1_btn")}}</button>
					</li>
					<li>
						<span><img src="../../static/img/exp-2.png" alt=""></span>
						<h3>{{$t("index.experience.list2_1")}}</h3>
						<p class="clearfix">
							<span class="ellipsis"><i></i>{{$t("index.experience.list1_2")}}</span>
							<span class="ellipsis"><i></i>{{$t("index.experience.list1_3")}}</span>
						</p>
						<button class="ellipsis">{{$t("index.experience.list2_btn")}}</button>
					</li>
					<li>
						<span><img src="../../static/img/exp-3.png" alt=""></span>
						<h3>{{$t("index.experience.list3_1")}}</h3>
						<p class="clearfix">
							{{$t("index.experience.list3_2")}}
						</p>
						<button class="ellipsis">{{$t("index.experience.list3_btn")}}</button>
					</li>
					<li>
						<span><img src="../../static/img/exp-4.png" alt=""></span>
						<h3>{{$t("index.experience.list4_1")}}</h3>
						<p class="clearfix">
							{{$t("index.experience.list4_2")}}
						</p>
						<button class="ellipsis">{{$t("index.experience.list4_btn")}}</button>
					</li>
				</ul>
			</div>
		</div>
		<!--上线流程-->
		<div class="online">
			<div class="container">
				<h1>{{$t('online.title')}}</h1>
				<p>{{$t('online.title2')}}</p>
				<ul class="clearfix">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<p></p>
			</div>
		</div>
		<!--案例模板展示-->
		<div class="templet">
			<div class="container">
				<h1>{{$t('templet.title')}}</h1>
				<p>{{$t('templet.title2')}}</p>
				<div class="big"><img src="../../static/img/templet-1.png"></div>
				<div style="width: 530px;">
					<div class="small"><img src="../../static/img/templet-2.png"></div>
					<div class="small"><img src="../../static/img/templet-3.png"></div>
					<div class="middle"><img src="../../static/img/templet-4.png"></div>
				</div>
				<div class="big"><img src="../../static/img/templet-5.png"></div>
			</div>
		</div>
		<!--加入我们-->
		<div class="join">
			<div class="container">
				<div class="left">
					<h1>{{$t('join.left.title1')}}</h1>
					<h1>{{$t('join.left.title2')}}</h1>
					<button>{{$t('join.left.btn')}}</button>
				</div>
				<div class="right">
					<h1>{{$t('join.right.title1')}}</h1>
					<p>{{$t('join.right.title2')}}</p>
					<button>{{$t('join.right.btn')}}</button>
				</div>
				
			</div>
		</div>
		<!--客服-->
		<div class="custom">
			<div class="container">
				<h1>{{$t('custom.title')}}</h1>
				<button>{{$t('custom.btn')}}</button>
			</div>
		</div>
		<!--合作伙伴-->
		<div class="partner">
			<div class="container">
				<h1>{{$t('partner.title1')}}</h1>
				<p>{{$t('partner.title2')}}</p>
				<ul class="clearfix">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
		<my-footer></my-footer>
	</div>

</template>

<script>
	import header from '@/components/header'
	import footer from '@/components/footer'
	export default {
		components: {
			myHeader: header,
			myFooter: footer
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
				button {
					width: 215px;
					height: 56px;
					line-height: 40px;
					border: 1px solid #00aaef;
					border-radius: 5px;
					color: #fff;
					background: #00aaef;
					font-size: 18px;
					box-sizing: border-box;
					margin: 38px auto 0 auto;
					display: block;
					cursor: pointer;
				}
			}
			ul li:last-of-type {
				margin-right: 0;
			}
			ul li>span {
				width: 128px;
				height: 128px;
				display: block;
				margin: 0 auto;
				img {
					display: block;
					margin: 0 auto;
				}
			}
		}
	}
	
	.online {
		width: 100%;
		height: 718px;
		background-image: url(../../static/img/online-bg.png);
		background-position: center;
		.container {
			padding: 110px 30px;
			h1 {
				color: white;
			}
			ul {
				li {
					width: 120px;
					height: 120px;
					background: #14465a;
					border-radius: 50%;
					border: 1px solid #86888a;
					display: inline-block;
					margin-left: 80px;
				}
			}
		}
	}
	
	.templet {
		.container {
			padding: 110px 30px;
			div {
				display: inline-block;
			}
			.big {
				width: 445px;
				height: 584px;
			}
			.small {
				width: 260px;
				height: 274px;
				margin-bottom: 33px;
			}
			.middle {
				width: 530px;
				height: 274px;
			}
		}
	}
	
	.join {
		width: 100%;
		background-image: url(../../static/img/join-bg.png);
		background-position: center;
		overflow: hidden;
		.container {
			padding: 80px 50px;
			div {
				box-sizing: border-box;
				padding-top: 50px;
				padding-bottom: 80px;
				width: 50%;
				float: left;
				min-width: 300px;
			}
			.left {
				h1 {
					color: white;
					text-align: left;
					line-height: 70px;
				}
				button {
					background: transparent;
					color: white;
					border: 1px solid white;
					padding: 15px 30px;
					font-size: 16px;
					border-radius: 10px;
					cursor: pointer;
					margin-top: 30px;
				}
			}
			.right {
				background: white;
				border-radius: 10px;
				padding-left: 100px;
				button {
					background: transparent;
					color: black;
					border: 1px solid black;
					padding: 15px 30px;
					font-size: 16px;
					border-radius: 10px;
					cursor: pointer;
				}
				h1 {
					text-align: left;
				}
				p {
					text-align: left;
					font-size: 24px;
					margin-top: 10px;
					color: black;
				}
			}
		}
	}
	.custom{
		background: white;
		.container{
			padding: 120px 30px 60px 30px;
			button{
				display: block;
				margin: 0 auto;
				background: #00aaef;
				border: none;
				color: white;
				width: 220px;
				height: 48px;
				text-align: center;
				line-height: 48px;
				border-radius: 5px;
				margin-top: 50px;
				cursor: pointer;
			}
		}
	}
	.partner{
		background: #f5f5f5;
		.container{
			padding: 110px 30px;
			ul{
				li{
					width: 252px;
					height: 105px;
					display: inline-block;
					margin-left: 20px;
					
				}
				li:nth-of-type(1){
					background: url(../../static/img/partner-1.png);
				}
				li:nth-of-type(2){
					background: url(../../static/img/partner-2.png);
				}
				li:nth-of-type(3){
					background: url(../../static/img/partner-3.png);
				}
				li:nth-of-type(4){
					background: url(../../static/img/partner-4.png);
				}
				li:nth-of-type(5){
					background: url(../../static/img/partner-5.png);
				}
				
			}
		}
	}
</style>