<template>
	<div class="header-wrap">
		<div class="header clearfix">
			<div class="container clearfix">
				<h2>
					<img src="../../static/img/logo.png" class="logo" @click="()=>{this.$router.push('/');}" />
				</h2>

				<ul class="nav clearfix">
					<li v-for="item in navList">
						{{item.name}}
					</li>
				</ul>
				<!--移动端导航栏-->
				<nav class="navbar">
					<h4>
						<span @click="menu">
							<i></i>
							<i></i>
							<i></i>
						</span>
					</h4>
					<ul>
						<li v-for="item in navList" :class="item.act?'act':null">
							<h3 :class="item.length?'act':null" @click="Router(item.url)">{{item.name}}</h3>
							<div>
								<p v-for="items in item.subData" @click="Router(items.url)">{{items.name}}</p>
							</div>
						</li>
					</ul>
				</nav>
				<!--注册-->
				<div style="float: right;">
					<div class="register" @click="registerShow">
					{{$t("header.register")}}
				</div>
				<div class="language">
					<span @click="isLangFun" :class="language?'en':'cn'">{{language?'En':'中文'}}</span>
					<span @click="langSwitch" :class="isLang?'act':null">{{!language?'En':'中文'}}</span>
				</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
						name: this.$t("header.nav_first.nav1"),
						"act": false
					},
					{
						name: this.$t("header.nav_first.nav2"),
						"act": false
					},
					{
						name: this.$t("header.nav_first.nav3"),
						"act": false
					},
					{
						name: this.$t("header.nav_first.nav4"),
						"act": false
					},
					{
						name: this.$t("header.nav_first.nav5"),
						"act": false
					},
					{
						name: this.$t("header.nav_first.nav6"),
						"act": false
					}
				],
				navListCn:[{
						name: this.$t("header.nav_first.nav1"),
						"act": false
					},
					{
						name: this.$t("header.nav_first.nav2"),
						"act": false
					},
					{
						name: this.$t("header.nav_first.nav3"),
						"act": false
					},
					{
						name: this.$t("header.nav_first.nav4"),
						"act": false
					},
					{
						name: this.$t("header.nav_first.nav5"),
						"act": false
					},
					{
						name: this.$t("header.nav_first.nav6"),
						"act": false
					}
				],
				navListEn:[{
						name: 'APP DOWNLOAD',
						"act": false
					},
					{
						name: 'SOLUTION',
						"act": false
					},
					{
						name: 'CASE',
						"act": false
					},
					{
						name: 'RATE SCHEME',
						"act": false
					},
					{
						name: this.$t("header.nav_first.nav5"),
						"act": false
					},
					{
						name: this.$t("header.nav_first.nav6"),
						"act": false
					}
				],
				language: false,
				isLang: false
			}
		},
		methods: {
			langSwitch: function() {
				this.language = !this.language;
				this.isLang = !this.isLang;
				if(this.$i18n.locale == 'en') {
					this.$i18n.locale = 'cn';
					this.navList=this.navListCn
				} else {
					this.$i18n.locale = 'en';
					this.navList=this.navListEn
				};
			},
			isLangFun: function() {
				this.isLang = !this.isLang
			},
			//下拉导航按钮
			menu: function() {
				$(".navbar>ul").slideToggle();
			},
			//打开注册页面
			registerShow(){
				this.$emit('open')
			}
		},
		mounted(){
			$(".navbar>ul li h3").click(function(){
			if ($(this).next().is(":hidden")){
				$(".navbar>ul li div").slideUp("slow");
				$(this).next().slideDown("slow");
			}else{
				$(this).next().slideUp("slow");
			}
		})
		}
	}
</script>

<style scoped lang="less">
	.header-wrap{
		width: 100%;
		background: white;
		position: fixed;
		top: 0;
		z-index: 999;
		overflow: hidden;
	}
	.header {
		width: 100%;
		background: white;
		position: fixed;
		top: 0;
		z-index: 999;
		.container {
			h2 {
				float: left;
				padding-top: 12px;
			}
			.logo {
				cursor: pointer;
			}
			.nav {
				float: left;
				margin-left: 20px;
				li {
					display: inline-block;
					height: 72px;
					line-height: 72px;
					font-size: 16px;
					color: #000;
					cursor: pointer;
					padding: 0 25px;
				}
				li:nth-of-type(5) {
					margin-left: 360px;
				}
			}
			.register {
				width: 58px;
				height: 32px;
				line-height: 32px;
				text-align: center;
				float: left;
				margin: 20px 0 0 10px;
				border: 1px solid #000000;
				border-radius: 3px;
				cursor: pointer;
			}
			.language {
				width: 65px;
				height: 32px;
				float: left;
				margin-top: 20px;
				margin-left: 10px;
				position: relative;
				z-index: 200;
				span {
					display: block;
					width: 65px;
					height: 32px;
					line-height: 32px;
					cursor: pointer;
					box-sizing: border-box;
					float: left;
					text-align: right;
					background: white;
				}
				span:nth-of-type(2) {
					position: absolute;
					top: 0;
					transition: .4s;
					z-index: -1;
				}
				span:nth-of-type(2).act {
					top: 32px;
				}
				.cn {
					background-image: url(../../static/img/cn.png);
					background-repeat: no-repeat;
				}
				.en{
					background-image: url(../../static/img/en.png);
					background-repeat: no-repeat;
				}
			}
			.navbar {
				color: #fff;
				border: 1px solid #f1f1f1;
				margin: 10px 0 0 0;
				background: #fafafa;
				margin-bottom: 20px;
				width: 100%;
				box-sizing: border-box;
				h4 {
					height: 46px;
					span {
						width: 44px;
						height: 34px;
						display: block;
						border: 1px solid #ccc;
						border-radius: 5px;
						cursor: pointer;
						box-sizing: border-box;
						padding: 4px 0 0 0;
						float: right;
						margin: 6px 15px 0 0;
						i {
							width: 22px;
							height: 2px;
							background: #999;
							display: block;
							margin: 4px auto 0 auto;
						}
					}
					span:hover {
						border: 1px solid #03A9F4;
					}
				}
				ul {
					display: none;
					li {
						color: #666;
						font-weight: 700;
						font-size: 14px;
						line-height: 46px;
						border-top: 1px solid #f1f1f1;
						cursor: pointer;
						padding-left: 20px;
						h3 {
							position: relative;
							text-align: left;
						}
						h3.act:after {
							content: '';
							display: block;
							position: absolute;
							width: 10px;
							height: 10px;
							border-bottom: 1px solid #ccc;
							border-right: 1px solid #ccc;
							transform: translateY(-50%) rotate(45deg);
							right: 20px;
							top: 50%;
						}
						p {
							font-weight: 500;
							padding-left: 20px;
						}
					}
					li:hover {
						background: #fff;
					}
				}
			}
		}
	}
	
	@media only screen and (min-width:768px) {
		.header .navbar {
			display: none;
		}
	}
	
	@media only screen and (max-width:768px) {
		.header .container h2 {
			width: 100%;
			float: initial;
		}
		.header img {
			height: 35px;
			display: block;
		}
		.header .register{
			position:absolute;
			top:0;
			right:90px;
		}
		.header .container .language{
			position: absolute;
			top: 0;
			right: 20px;
		}
		.header .container .nav {
			display: none;
		}
	}
</style>