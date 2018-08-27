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
				<input v-for="item in login" :type="item.type" v-model="item.value" :placeholder="item.name" />
				<div class="btn" @click="loginFun">
					{{$t("login.btn")}}
				</div>
				<div class="login-other">
					<a @click="curStatus='register'">{{$t("login.register")}}</a>
					<a @click="curStatus='forget'">{{$t("login.forget")}}</a>
				</div>
			</div>
		</div>
		<!--注册页面-->
		<div class="register-content" v-show="curStatus=='register'">
			<h1 class="head">{{$t("register.title")}}</h1>
			<!--循环渲染register数据-->
			<input v-for="item in register" v-model="item.value" :placeholder="item.name" :type="item.type" />
			<div class="btn">
				{{$t("register.btn")}}
			</div>
			<a class="back" @click="curStatus='login'">{{$t("register.back")}}</a>
			
		</div>
		<!--忘记密码-->
		<div class="forget-content" v-show="curStatus=='forget'">
			<h1 class="head">{{$t("forget.title")}}</h1>
			<input type="text" :placeholder="forget.username.name" />
			<input type="number" :placeholder="forget.phone.name" />
			<input type="password" :placeholder="forget.newPass.name" />
			<input type="password" :placeholder="forget.newPass.name" />
			<div class="btn">
				{{$t("forget.btn")}}
			</div>
			<a class="back" @click="curStatus='login'">{{$t("forget.back")}}</a>
			<a class="note">{{$t("forget.note")}}</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',

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
						type: 'text'
					},
					password: {
						name: this.$t('login.password'),
						value: '',
						type: 'password'
					}
				},
				/*注册页数据*/
				register: {
					resUsername: {
						name: this.$t('register.username'),
						value: '',
						type: 'text'
					},
					resName: {
						name: this.$t('register.name'),
						value: '',
						type: 'text'
					},
					resNum: {
						name: this.$t('register.phone'),
						value: '',
						type: 'number'
					},
					resQQ: {
						name: this.$t('register.qq'),
						value: '',
						type: 'number'
					},
					resPass: {
						name: this.$t('register.password'),
						value: '',
						type: 'password'
					},
					resPass2: {
						name: this.$t('register.password2'),
						value: '',
						type: 'password'
					},
					resInvite: {
						name: this.$t('register.invite'),
						value: '',
						type: 'number'
					}
				},
				/*忘记密码*/
				forget: {
					username: {
						name: this.$t('forget.username'),
						value: ''
					},
					phone: {
						name: this.$t('forget.phone'),
						value: ''
					},
					newPass: {
						name: this.$t('forget.newPass'),
						value: ''
					},
					confirmPass: {
						name: this.$t('forget.confirmPass'),
						value: ''
					}
				}

			}
		},
		methods: {
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
			height: 100%;
			background-color: #2f4158;
			input {
				background: transparent;
				border: none;
				border-bottom: 1px solid #dbdbdb;
				color: #dbdbdb;
				margin: 0 auto;
				display: block;
				height: 90vw/@w;
				width: 512vw/@w;
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
		}
	}
</style>