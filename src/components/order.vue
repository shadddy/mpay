<template>
	<div class="order-wrap">
		<h1 class="head">订单 <input v-model="searchList" placeholder="查询订单" id="search"/></h1>
		<div class="order-content">
			<div v-for="i in orderList">
				<h1 class="dateHead">{{i.month}}</h1>
				<order-item v-for="item in i.list" :date='item.date' :type='item.type' :status="item.status" :orderId="item.orderId" :total="item.total" :fee="item.fee" :actrual="item.actrual"></order-item>
			</div>
		</div>
	</div>
</template>

<script>
	import orderItem from '@/components/base/orderItem'
	export default {
		components: {
			orderItem
		},
		data() {
			return {
				searchList:'',//搜索
				//订单列表数据
				orderList: [{
					month: "2018年07月",
					list: [{
							date: '07/12 16:23',
							type: '微信',
							status: '通知中',
							orderId: 'EF1531983243406403655',
							total: 200,
							fee: 0.1,
							actrual: 200
						},
						{
							date: '07/08 06:53',
							type: '支付宝',
							status: '待支付',
							orderId: 'MP15319805513406403655',
							total: 500,
							fee: 0.2,
							actrual: 500
						}
					]
				},{
					month: "2018年06月",
					list: [{
							date: '06/12 16:23',
							type: '微信',
							status: '通知中',
							orderId: 'EF1531983243406403655',
							total: 200,
							fee: 0.1,
							actrual: 200
						},
						{
							date: '06/08 06:53',
							type: '支付宝',
							status: '待支付',
							orderId: 'MP15319805513406403655',
							total: 500,
							fee: 0.2,
							actrual: 500
						}
					]
				}]
			}
		},
		computed:{
			slist:function(){
				var that=this
				var _arr=[]
				for(var i=0;i<this.orderList.length;i++){
					if(this.orderList[i].month.search(this.searchList)!=-1){
						_arr.push(this.goodsList[i])
					}
				}
				return _arr
			}
		}
	}
</script>

<style scoped lang="less">
	@w: 6.4;
	@h: 11;
	@media only screen and (max-width:768px) {
		.order-wrap {
			.head {
				height: 90vw/@w;
				width: 100%;
				line-height: 90vw/@w;
				text-align: left;
				text-indent: 20px;
				color: white;
				font-size: 28vw/@w;
				background: -webkit-linear-gradient(#596575, #222e3f);
				background: -moz-linear-gradient(#596575, #222e3f);
				background: -o-linear-gradient(#596575, #222e3f);
				background: linear-gradient(#596575, #222e3f);
				#search{
					border-radius: 5px;
					font-size: 20vw/@w;
					text-indent: 10vw/@w;
				}
			}
			.order-content {
				padding: 20px;
				.orderItem {
					margin-bottom: 10vw/@w;
				}
				.dateHead {
					font-size: 30vw/@w;
					color: white;
				}
			}
		}
	}
</style>

[ "2018年07月": [{ date: '07/12 16:23', type: '微信', status: '通知中', orderId: 'EF1531983243406403655', total: 200, fee: 0.1, actrual: 200 }, { date: '07/08 06:53', type: '支付宝', status: '待支付', orderId: 'MP15319805513406403655', total: 500, fee: 0.2, actrual: 500 } ], "2018年06月": [{ date: '06/12 16:23', type: '微信', status: '通知中', orderId: 'EF1531983243406403655', total: 200, fee: 0.1, actrual: 200 }, { date: '06/08 06:53', type: '支付宝', status: '待支付', orderId: 'MP15319805513406403655', total: 500, fee: 0.2, actrual: 500 } ] ]