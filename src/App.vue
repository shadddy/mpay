<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	.clearfix {
		zoom: 1;
	}
	
	.clearfix:after {
		content: '';
		display: block;
		overflow: hidden;
		clear: both;
		visibility: hidden;
		height: 0;
	}
	
	#app {
		font-family: "microsoft yahei";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-width: 320px;
		min-height: 500px;
		background: #f7f7f7;
	}
	
	div {
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	
	.container {
		width: 1490px;
		margin: 0 auto;
		box-sizing: border-box;
		h1 {
			font-size: 40px;
			color: #333;
			text-align: center;
			line-height: 1;
			width: 100%;
		}
		p {
			font-size: 16px;
			color: #999;
			text-align: center;
			padding: 18px 0 80px;
		}
	}
	
	@media only screen and (max-width:1280px) {
		.container {
			width: 100%;
			padding: 0 20px;
			box-sizing: border-box;
		}
	}
</style>