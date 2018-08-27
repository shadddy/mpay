<template>
	<div class="login-wrap">
		<div class="login-content">
			<h1 class="login-head">欢迎使用摩派支付</h1>
			<div class="login-content">
				<div class="login-logo">
					<img src="../../static/img/login-logo.png" />
				</div>
				<input class="username" placeholder="请输入邮箱/手机号"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login'
	}
</script>

<style scoped lang="less">
	/*移动端*/
	
	@media only screen and (max-width:768px) {
		.login-wrap {
			width: 100%;
			height: 100%;
			background-color: #2f4158;
			.login-head {
				height: 90px;
				width: 100%;
				line-height: 90px;
				text-align: center;
				color: white;
				font-size: 28px;
				background: -webkit-linear-gradient(#596575, #222e3f);
				background: -moz-linear-gradient(#596575, #222e3f);
				background: -o-linear-gradient(#596575, #222e3f);
				background: linear-gradient(#596575, #222e3f);

			}
			.login-content{
				.login-logo{
					padding: 70px 0;
					text-align: center;
					img{
						width: 190px;
						height: 190px;
					}
					
				}
				input{
					background: transparent;
					border: none;
					border-bottom: 1px solid #dbdbdb;
					color: #dbdbdb;
					margin: 0 auto;
					display: block;
					width: 512px;
				}
			}
		}
	}
</style>