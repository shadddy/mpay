<template>
	<div class="orderItem">
		<div class="box" :class="isOpen?'active':null">
			<div class="head" @click="isOpen=!isOpen">
				<span>
					{{date}}
				</span>
				<span>
					类型:{{type}}
				</span>
				<span>
					状态:{{status}}
				</span>
				<span class="arrow">
					>
				</span>
			</div>
			<div class="content" v-show="isOpen">
				<div class="left">
					<span>
						订单编号:{{orderId}}
					</span>
					<span>
						下单时间:{{date}}
					</span>
					<span>
						总金额:{{total}}￥
					</span>
					<span>
						手续费:{{fee}}￥
					</span>
					<span>
						类型:{{type}}
					</span>
					<span>
						订单状态:{{status}}
					</span>
				</div>
				<div class="right">
					<p>实收:<span class="actrual">{{actrual}}￥</span></p>
					<div class="reSendBtn">重发通知</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			date:{
				type:String,
				default:'07/08 06:53'
			},
			type:{
				type:String,
				default:'支付宝'
			},
			status:{
				type:String,
				default:'待支付'
			},
			orderId:{
				type:String,
				default:'MP15319805513406403655'
			},
			total:{
				type:Number,
				default:500
			},
			fee:{
				type:Number,
				default:0.2
			},
			actrual:{
				type:Number,
				default:500
			}
		},
		data() {
			return {
				isOpen: false
			}
		}
	}
</script>

<style scoped lang="less">
	@w: 6.4;
	@h: 11;
	.box {
		border-radius: 5px;
		overflow: hidden;
		.head {
			background: white;
			color: #828f9f;
			padding: 20vw/@w;
			font-size: 20vw/@w;
			position: relative;
			span{
				margin-right: 20vw/@w;
			}
			.arrow{
				font-size: 40vw/@w;
				position: absolute;
				right: 10vw/@w;
				top: 5vw/@w;
				
				
			}
			
		}
		.content {
			padding: 10px;
			background: #35cfeb;
			font-size: 18vw/@w;
			color: white;
			display: flex;
			.right{
				padding-top: 30px;
				.reSendBtn{
					margin-top: 10vw/@w;
					background: #2ab7d0;
					text-align: center;
					padding: 2vw/@w 10vw/@w;
					border-radius: 5px;
				}
			}
			span{
				display: flex;
			}
			.actrual{
				font-size: 40vw/@w;
				display: inline;
			}
		}
	}
	
	.active {
		.head {
			background: #2ab7d0;
			color: white;
			.arrow{
				transform: rotate(90deg);
				-moz-transform: rotate(90deg);
				-ms-transform: rotate(90deg);
				-webkit-transform: rotate(90deg);
			}
		}
	}
</style>