<template>
	<div>
		<my-dialog title="注册" @on-close="registerShow=false" v-show="registerShow"></my-dialog>
		<my-header @open="registerShow=true"></my-header>
		<div class="banner">
			<!-- pc 轮播图-->
			<el-carousel :interval="3000" arrow="always" class="bigShow" trigger="click" :height="bannerImgH">
				<el-carousel-item v-for="(item,index) in $t('banner.img1')" :key="index">
					<img :src="item" alt="">
				</el-carousel-item>
			</el-carousel>
			<!--移动端轮播图-->
			<swiper :list="imgList" v-model="imgIndex" :auto="false" :show-dots="false" :loop="loop" class="bigHide"></swiper>
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
				<button @click="registerShow=true">{{$t("index.register")}}</button>
			</div>
		</div>
		<!--解决方案-->
		<div class="group">
			<div class="container clearfix">
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
		<!--客服-->
		<div class="custom">
			<div class="container">
				<h1>{{$t('custom.title')}}</h1>
				<button>{{$t('custom.btn')}}</button>
			</div>
		</div>
		<!--体验支付流程-->
		<div class="experience">
			<div class="container">
				<h1>{{$t("index.experience.title")}}</h1>
				<p>{{$t("index.experience.title2")}}</p>
				<ul class="clearfix">
					<li>
						<span :class="expCheck1?'active':null"><img src="../../static/img/exp-1.png" alt=""></span>
						<h3>{{$t("index.experience.list1_1")}}</h3>
						<p class="clearfix">
							<span class="ellipsis" :class="isCheck?'act':null" @click="isCheck=true"><i></i>{{$t("index.experience.list1_2")}}</span>
							<span class="ellipsis" :class="!isCheck?'act':null" @click="isCheck=false"><i></i>{{$t("index.experience.list1_3")}}</span>
						</p>
						<button class="ellipsis" @mouseenter="expCheck1=true" @mouseleave="expCheck1=false">{{$t("index.experience.list1_btn")}}</button>
					</li>
					<li>
						<span :class="expCheck2?'active':null"><img src="../../static/img/exp-2.png" alt=""></span>
						<h3>{{$t("index.experience.list2_1")}}</h3>
						<p class="clearfix">
							<span class="ellipsis" :class="isCheck2?'act':null" @click="isCheck2=true"><i></i>{{$t("index.experience.list2_2")}}</span>
							<span class="ellipsis" :class="!isCheck2	?'act':null" @click="isCheck2=false"><i></i>{{$t("index.experience.list2_3")}}</span>
						</p>
						<button class="ellipsis" @mouseenter="expCheck2=true" @mouseleave="expCheck2=false">{{$t("index.experience.list2_btn")}}</button>
					</li>
					<li>
						<span :class="expCheck3?'active':null"><img src="../../static/img/exp-3.png" alt=""></span>
						<h3>{{$t("index.experience.list3_1")}}</h3>
						<p class="clearfix">
							{{$t("index.experience.list3_2")}}
						</p>
						<button class="ellipsis" @mouseenter="expCheck3=true" @mouseleave="expCheck3=false">{{$t("index.experience.list3_btn")}}</button>
					</li>
					<li>
						<span :class="expCheck4?'active':null"><img src="../../static/img/exp-4.png" alt=""></span>
						<h3>{{$t("index.experience.list4_1")}}</h3>
						<p class="clearfix">
							{{$t("index.experience.list4_2")}}
						</p>
						<button class="ellipsis" @mouseenter="expCheck4=true" @mouseleave="expCheck4=false">{{$t("index.experience.list4_btn")}}</button>
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
					<li v-for="(item,index) in online"  @mouseenter="onlineCheck(index)" :class="index==onlineInd?'act':null">
						>>
					</li>
				</ul>
				<h3 v-for="(item,index) in online" v-show="index==onlineInd">
					{{item.title}}
				</h3>
				<p v-for="(item,index) in online" v-show="index==onlineInd">
					{{item.txt}}
				</p>
			</div>
		</div>
		<!--案例模板展示-->
		<div class="templet">
			<div class="container">
				<h1>{{$t('templet.title')}}</h1>
				<p>{{$t('templet.title2')}}</p>
				<div class="big" @mouseenter="enter(1)" @mouseleave="leave(1)"><transition name="drop"><span v-show="templet1">金融</span></transition><img src="../../static/img/templet-1.png"></div>
				<div class="box">
					<div class="small" @mouseenter="enter(2)" @mouseleave="leave(2)"><transition name="drop"><span v-show="templet2">零售</span></transition><img src="../../static/img/templet-2.png"></div>
					<div class="small" @mouseenter="enter(3)" @mouseleave="leave(3)"><transition name="drop"><span v-show="templet3">餐饮</span></transition><img src="../../static/img/templet-3.png"></div>
					<div class="middle" @mouseenter="enter(4)" @mouseleave="leave(4)"><transition name="drop"><span v-show="templet4">游戏</span></transition><img src="../../static/img/templet-4.png"></div>
				</div>
				<div class="big" @mouseenter="enter(5)" @mouseleave="leave(5)"><transition name="drop"><span v-show="templet5">门店</span></transition><img src="../../static/img/templet-5.png"></div>
			</div>
		</div>
		<!--加入我们-->
		<div class="join">
			<div class="container clearfix">
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
	import dialog from '../components/base/dialog'
	export default {
		components: {
			myHeader: header,
			myFooter: footer,
			myDialog: dialog
		},
		data() {
			return {
				bannerImgH: "0",
				registerShow: false,
				imgList: [{
					img: this.$t("banner.img1")
				}, {
					img: "../../static/img/banner2.png"
				}, {
					img: "../../static/img/banner3.png"
				}],
				imgIndex: 1,
				loop: true,
				online: [{
					title: this.$t('online.mestitle1'),
					txt: this.$t("online.mescont1")
				}, {
					title: this.$t('online.mestitle2'),
					txt: this.$t("online.mescont2")
				}, {
					title: this.$t('online.mestitle3'),
					txt: this.$t("online.mescont3")
				}, {
					title: this.$t('online.mestitle4'),
					txt: this.$t("online.mescont4")
				}, {
					title: this.$t('online.mestitle5'),
					txt: this.$t("online.mescont5")
				}, {
					title: this.$t('online.mestitle6'),
					txt: this.$t("online.mescont6")
				}],
				onlineInd: 0,
				isCheck: true,
				isCheck2: true,
				templet1:false,
				templet2:false,
				templet3:false,
				templet4:false,
				templet5:false,
				expCheck1:false,
				expCheck2:false,
				expCheck3:false,
				expCheck4:false,
			}
		},
		methods: {
			reSize: function() {
				let bl = 1920 / 800,
					bodyWidth = document.body.clientWidth;
				this.bannerImgH = bodyWidth / bl + "px";
			},
			onlineCheck: function(val) {
				console.log(val)
				this.onlineInd = val
			},
			enter(val){
				if(val==1){
					this.templet1=true
				}else if(val==2){
					this.templet2=true
				}else if(val==3){
					this.templet3=true
				}else if(val==4){
					this.templet4=true
				}else if(val==5){
					this.templet5=true
				}
			},
			leave(val){
				if(val==1){
					this.templet1=false
				}else if(val==2){
					this.templet2=false
				}else if(val==3){
					this.templet3=false
				}else if(val==4){
					this.templet4=false
				}else if(val==5){
					this.templet5=false
				}
			}

		},
		mounted() {
			let that = this;
			that.reSize();
			$(window).resize(function() {
				that.reSize();
			})
		}
	}
</script>

<style scoped lang="less">

	.drop-enter-active{
		transition: .5s ease;
	}
	.drop-leave-active{
		transition: .3s ease;
	}
	.drop-enter{
		transform:translateY(-50px);
	}
	.drop-leave-active{
		transform: translateY(-50px);
	}

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
		.container {
			padding: 110px 30px;
			ul {
				li {
					transition: .5s;
					float: left;
					width: calc(100% / 3);
					padding:30px;
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
				li:hover{
					background: #03A9F4;
				}
				li:hover h4{
					color: white;
				}
				li:hover p{
					color: white;
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
				background: transparent;
				border: 1px solid #03A9F4;
				color: #03A9F4;
				transition: .3s;
				-moz-transition: .3s;
				-webkit-transition: .3s;
			}
		}
	}
	
	.group {
		width: 100%;
		overflow: hidden;
		background-image: url(../../static/img/groupBg.png);
		background-position: center;
		background-size: 100% 100%;
		.container {
			padding: 90px 0;
			ul {
				li {
					float: left;
					width: calc(95% / 3);
					margin-right: 1%;
					img {
						width: 100%;
					}
					img:hover {
						transform: scale(1.05);
						transition: .3s;
						-moz-transition: .3s;
						-ms-transition: .3s;
						-webkit-transition: .3s;
					}
					p {
						padding: 0;
						text-align: left;
						padding-top: 25px;
						height: 50px;
					}
					h2 {
						color: #fff;
						font-size: 32px;
						margin-bottom: 50px;
					}
					h4 {
						color: #fff;
						margin-top: 30px;
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
						margin-top: 60px;
					}
					button:hover {
						background: #a6a6a6;
						color: white;
						-moz-transition: .3s;
						-ms-transition: .3s;
						-webkit-transition: .3s;
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
					margin: 0 auto;
					display: block;
					cursor: pointer;
				}
				button:hover {
					background: transparent;
					color: #00aaef;
					-moz-transition: .3s;
					-ms-transition: .3s;
					-webkit-transition: .3s;
				}
				span {
					position: relative;
					max-width: 50%;
					box-sizing: border-box;
					
					i {
						width: 16px;
						height: 16px;
						border: 1px solid #999999;
						display: block;
						border-radius: 16px;
						position: absolute;
						left: 0;
						top: 0;
						box-sizing: border-box;
					}
				}
				span.act {
					color: #00aaef;
					i {
						border: 1px solid #00aaef;
					}
					i:after {
						content: '';
						display: block;
						width: 10px;
						height: 10px;
						background: #00aaef;
						border-radius: 10px;
						position: absolute;
						left: 2px;
						top: 2px;
					}
				}
				p {
					span {
						padding-left: 24px;
					}
				}
			}
			ul li:last-of-type {
				margin-right: 0;
			}
			ul li>span {
				width: 128px;
				height: 128px;
				display: block;
				border-radius: 50%;
				margin: 0 auto;
				background:#cccccc ;
				transition: .5s;
				img {
					display: block;
					margin: 0 auto;
				}
			}
			ul li>span.active{
				background: #00aaef;
			}
		}
	}
	
	.online {
		width: 100%;
		background-image: url(../../static/img/online-bg.png);
		background-position: center;
		.container {
			text-align: center;
			padding: 110px 30px 30px 30px;
			h1 {
				color: white;
			}
			ul {
				 display:inline-block;  
				.act {
					background: #00aaef;
				}
				li {
					width: 120px;
					height: 120px;
					background: #14465a;
					border-radius: 50%;
					border: 1px solid #86888a;
					display: inline-block;
					margin: 0 30px;
					cursor: pointer;
					color: white;
					font-size: 50px;
					line-height: 120px;
					text-align: center;
				}
			}
			h3 {
				text-align: center;
				color: white;
				font-size: 30px;
				margin-top: 30px
			}
		}
	}
	
	.templet {
		.container {
			padding: 110px 30px;
			.box {
				width: 530px
			}
			div {
				overflow: hidden;
				display: inline-block;
				cursor: pointer;
				position: relative;
				span{
					position: absolute;
					display: block;
					padding: 10px 20px;
					background: rgba(0,0,0,0.5);
					color: white;
					border-radius: 20px;
					left: 25px;
					top: 25px;
				}
			}
			.big {
				width: 445px;
			}
			.small {
				width: 260px;
				margin-bottom: 20px;
			}
			.middle {
				width: 530px;
			}
			img {
				transition: .8s;
				width: 100%;
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
				padding-left: 100px;
				-moz-transition: .3s;
				-ms-transition: .3s;
				-webkit-transition: .3s;
				h1 {
					color: black;
				}
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
				button:hover{
					transition:.5s;
					background: white;
					color: black;
				}
			}
			.right {
				background: white;
				border-radius: 10px;
				button {
					background: transparent;
					color: black;
					border: 1px solid black;
					padding: 15px 30px;
					font-size: 16px;
					border-radius: 10px;
					cursor: pointer;
				}
				button:hover{
					background: black;
					color: white;
					transition: .5s;
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
	
	.custom {
		background: white;
		.container {
			padding: 120px 30px 60px 30px;
			button {
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
			button:hover {
				background: transparent;
				color: #00aaef;
				border: 1px solid #00aaef;
				-moz-transition: .3s;
				-ms-transition: .3s;
				-webkit-transition: .3s;
			}
		}
	}
	
	.partner {
		background: #f5f5f5;
		.container {
			padding: 110px 30px;
			ul {
				li {
					width: 252px;
					height: 105px;
					display: inline-block;
					margin-left: 20px;
				}
				li:nth-of-type(1) {
					background: url(../../static/img/partner-1.png);
					background-size: 100% 100%;
				}
				li:nth-of-type(2) {
					background: url(../../static/img/partner-2.png);
					background-size: 100% 100%;
				}
				li:nth-of-type(3) {
					background: url(../../static/img/partner-3.png);
					background-size: 100% 100%;
				}
				li:nth-of-type(4) {
					background: url(../../static/img/partner-4.png);
					background-size: 100% 100%;
				}
				li:nth-of-type(5) {
					background: url(../../static/img/partner-5.png);
					background-size: 100% 100%;
				}
			}
		}
	}
	
	@media only screen and (max-width:600px) {
		.payment .container ul li {
			width: 100%;
			margin-bottom: 20px;
			padding: 0;
		}
		.group .container ul li {
			width: 90%;
			float: inherit;
			margin: 0 auto 20px auto;
		}
		.experience .container ul li {
			width: 100%;
			margin-bottom: 10px;
		}
		.online .container ul li {
			width: 50px;
			height: 50px;
			margin-left: 5px;
			line-height: 50px;
			font-size: 20px;
		}
		.join .container div {
			float: inherit;
			padding: 0;
			margin-bottom: 50px;
		}
		.partner .container ul li {
			margin: 0;
			width: 150px;
			height: 60px;
			margin-left: 10px
		}
		.templet {
			.container {
				.big {
					width: 100%;
				}
				.small {
					width: 49%;
					margin-bottom: 5px
				}
				.box {
					width: 100%;
				}
				.middle {
					width: 100%;
				}
			}
		}
	}
	
	@media only screen and (max-width:768px) {
		.banner {
			padding-top: 125px;
		}
		.payment .container,
		.experience .container {
			padding: 40px 15px;
		}
		.payment .container>h1,
		.experience .container>h1 {
			font-size: 22px;
		}
	}
	
	@media only screen and (max-width:978px) {}
</style>