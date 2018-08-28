<template>
	<div class="login-wrap">
		<!--登录页面-->
		<div class="login-content" v-show="curStatus=='login'">
			<h1 class="head">{{$t("login.title")}}</h1>
			<div class="login-content">
				<div class="login-logo">
					<img src="../../static/img/login-logo.png" />
				</div>
				<!--循环渲染login数据-->
				<input v-for="item in login" :type="item.type" v-model="item.value" :placeholder="item.name" class="icon" :class="item.class" />
				<div class="btn" @click="loginFun">
					{{$t("login.btn")}}
				</div>
				<div class="login-other">
					<a @click="curStatus='register'">{{$t("login.register")}}</a>
					<a @click="toForget">{{$t("login.forget")}}</a>
				</div>
			</div>
		</div>
		<!--注册页面-->
		<div class="register-content" v-show="curStatus=='register'">
			<h1 class="head">{{$t("register.title")}}</h1>
			<!--循环渲染register数据-->
			<input v-for="item in register" v-model="item.value" :placeholder="item.name" :type="item.type" class="icon" :class="item.class"/>
			<div class="btn" @click="registerFun">
				{{$t("register.btn")}}
			</div>
			<a class="back" @click="curStatus='login'">{{$t("register.back")}}</a>

		</div>
		<!--找回密码-->
		<div class="forget-content" v-show="curStatus=='forget'">
			<h1 class="head">{{$t("forget.title")}}</h1>
			<input type="text" :placeholder="forget.username.name" v-model="forget.username.value" class="icon icon-email"/>
			<div class="identify_1">
				<input type="number" class="identifyInput_1" v-model="identify1" placeholder="请输入图形验证码" />
				<div class="code" @click="refreshCode">
					<s-identify :identifyCode="identifyCode"></s-identify>
				</div>
			</div>
			<input type="number" :placeholder="forget.phone.name" class="icon icon-phone"/>
			<div class="identify_1">
				<input type="number" class="identifyInput_1" v-model="identify2" placeholder="请输入短信验证码" />
				<div class="identify-btn">获取验证码</div>
			</div>
			<input type="password" :placeholder="forget.newPass.name" class="icon icon-pass"/>
			<input type="password" :placeholder="forget.confirmPass.name" class="icon icon-pass"/>
			<div class="btn" @click="forgetFun">
				{{$t("forget.btn")}}
			</div>
			<a class="back" @click="curStatus='login'">{{$t("forget.back")}}</a>
			<a class="note">{{$t("forget.note")}}</a>
		</div>
		<!--订单页-->
		<div class="order-content" v-show="curStatus=='order'">
			<my-order></my-order>
		</div>
	</div>
</template>

<script>
	import sIdentify from '../components/base/identify'
	import myOrder from '../components/order'
	export default {
		name: 'login',
		components: {
			sIdentify,
			myOrder
		},

		data() {
			return {
				curStatus: "login",
				placeholder1: this.$t('login.username'),
				placeholder2: this.$t('login.password'),
				username: '',
				password: '',
				/*登录页数据*/
				login: {
					username: {
						name: this.$t('login.username'),
						value: '',
						type: 'text',
						class: 'icon-user'
					},
					password: {
						name: this.$t('login.password'),
						value: '',
						type: 'password',
						class: 'icon-pass'
					}
				},
				/*注册页数据*/
				register: {
					resUsername: {
						name: this.$t('register.username'),
						value: '',
						type: 'text',
						class:'icon-email'
					},
					resName: {
						name: this.$t('register.name'),
						value: '',
						type: 'text',
						class:'icon-user'
					},
					resNum: {
						name: this.$t('register.phone'),
						value: '',
						type: 'number',
						class:'icon-phone'
					},
					resQQ: {
						name: this.$t('register.qq'),
						value: '',
						type: 'number',
						class:'icon-qq'
					},
					resPass: {
						name: this.$t('register.password'),
						value: '',
						type: 'password',
						class:'icon-pass'
					},
					resPass2: {
						name: this.$t('register.password2'),
						value: '',
						type: 'password',
						class:'icon-pass'
					},
					resInvite: {
						name: this.$t('register.invite'),
						value: '',
						type: 'number',
						class:'icon-invite'
					}
				},
				/*找回密码页数据*/
				forget: {
					username: {
						name: this.$t('forget.username'),
						value: '',
						class:'icon-email'
					},
					phone: {
						name: this.$t('forget.phone'),
						value: '',
						class:'icon-phone'
					},
					newPass: {
						name: this.$t('forget.newPass'),
						value: '',
						class:'icon-pass'
					},
					confirmPass: {
						name: this.$t('forget.confirmPass'),
						value: '',
						class:'icon-pass'
					}
				},
				//验证码
				identifyCodes: "1234567890",
				identifyCode: "",
				identify1: '', //数字验证码
				identify2: '' //手机验证码

			}
		},
		mounted() {

			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);
		},
		methods: {
			//关闭界面
			closeMyself() {
				this.$store.state.show = false
			},
			toLogin() {
				this.curStatus = 'login'
			},
			//登录
			loginFun() {
				let that = this;
				var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; // 邮箱 正则
				if(this.login.username.value == '') {
					alert('用户名不能为空')
					return false
				} else if(this.login.password.value == '') {
					alert('密码不能为空')
					return false
				}
				alert('登陆成功')
				this.curStatus = "order"

			},

			//注册
			registerFun() {
				if(this.register.resUsername.value == '') {
					alert('用户名不能为空')
					return
				} else if(this.register.resName.value == '') {
					alert('姓名不能为空')
					return
				} else if(this.register.resNum.value == '') {
					alert('手机号码不能为空')
					return
				} else if(this.register.resPass.value == '') {
					alert('密码不能为空')
					return
				} else if(this.register.resPass2.value == '') {
					alert('密码不能为空')
					return
				} else if(this.register.resInvite.value == '') {
					alert('邀请码不能为空')
					return
				}
				alert('注册成功')
				this.closeMyself()
			},
			//初始化忘记密码
			toForget() {
				this.curStatus = 'forget'
				this.forget.username.value = ''
				this.refreshCode()
			},
			//重置密码
			forgetFun() {
				let that = this
				if(this.forget.username.value == "") {
					alert('用户名不能为空')
					return
				} else if(this.identify1 !== this.identifyCode) {
					alert('验证码不对')
					this.refreshCode()
					return
				}
			},
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},
			refreshCode() {
				this.identifyCode = "";
				this.identify1 = ""
				this.makeCode(this.identifyCodes, 4);
			},
			makeCode(o, l) {
				for(let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[
						this.randomNum(0, this.identifyCodes.length)
					];
				}
				console.log(this.identifyCode);
			}
		},
		watch: {
			"$store.state.show": function() {
				if(this.$store.state.show) {
					this.toLogin()
				}
			}
		}
	}
</script>

<style scoped lang="less">
	@w: 6.4;
	@h: 11;
	/*移动端*/
	
	@media only screen and (max-width:768px) {
		.login-wrap {
			width: 100%;
			min-height: 100%;
			background-color: #2f4158;
			input {
				background-color: transparent;
				border: none;
				border-bottom: 1px solid #dbdbdb;
				color: #dbdbdb;
				margin: 0 auto;
				display: block;
				height: 90vw/@w;
				width: 512vw/@w;
				text-indent: 40vw/@w;
			}
			input:-webkit-autofill {
				-webkit-box-shadow: 0 0 0 1000px white inset !important;
			}
			.head {
				height: 90vw/@w;
				width: 100%;
				line-height: 90vw/@w;
				text-align: center;
				color: white;
				font-size: 28vw/@w;
				background: -webkit-linear-gradient(#596575, #222e3f);
				background: -moz-linear-gradient(#596575, #222e3f);
				background: -o-linear-gradient(#596575, #222e3f);
				background: linear-gradient(#596575, #222e3f);
			}
			.btn {
				width: 512vw/@w;
				height: 80vw/@w;
				background: #39daf7;
				margin: 75vw/@w auto 30vw/@w auto;
				color: white;
				font-size: 36vw/@w;
				line-height: 80vw/@w;
				text-align: center;
			}
			.back {
				text-align: center;
				display: block;
				color: #f5f5f5;
			}
			.note {
				text-align: center;
				display: block;
				color: #89909a;
				font-size: 14vw/@w;
				margin-top: 50vw/@w;
			}
			.identify_1 {
				display: flex;
				padding: 0 64vw/@w;
				margin-top: 35vw/@w;
			}
			.identifyInput_1 {
				width: 300vw/@w;
				height: 65vw/@w;
				background: white;
				color: black;
				text-indent: 20px;
			}
			.identify-btn {
				width: 195vw/@w;
				height: 65vw/@w;
				background: #39daf7;
				color: white;
				text-align: center;
				line-height: 64vw/@w;
			}
			.login-content {
				.login-logo {
					padding: 70vw/@w 0 90vw/@w 0;
					text-align: center;
					img {
						width: 190vw/@w;
					}
				}
				.login-other {
					width: 265vw/@w;
					margin: 0 auto;
					a {
						color: #f5f5f5;
					}
					a:nth-of-type(1) {
						border-right: 1px solid #f5f5f5;
						padding-right: 5px;
					}
				}
			}
			.register-content {
				input:nth-of-type(1) {
					margin-top: 30vw/@w;
				}
				.back {
					text-align: center;
					display: block;
					color: #f5f5f5;
				}
			}
			.icon{
				background-repeat: no-repeat;
				background-position: left center;
				background-size: 28vw/@w 32vw/@w;
			}
			.icon-user {
				background-image: url(../../static/img/user-icon.png);
				
			}
			.icon-pass {
				background-image: url(../../static/img/pass-icon.png);
			}
			.icon-phone{
				background-image: url(../../static/img/phone-icon.png);
			}
			.icon-invite{
				background-image: url(../../static/img/invite-icon.png);
			}
			.icon-email{
				background-image: url(../../static/img/email-icon.png);
			}
			.icon-qq{
				background-image: url(../../static/img/qq-icon.png);
			}
		}
	}
</style>