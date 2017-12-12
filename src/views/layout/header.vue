<template>
<div class="page_header topbar">
	<div class="content">
		<div class="top_left">
			<router-link tag="a" to="/" class="topbar_menu title" exact>
				<i class="fa fa-cloud"></i> 记忆匣云笔记
			</router-link>
			<router-link tag="a" to="/noteAdd" class="topbar_menu" active-class="topbar_menu_active">
				<i class="fa fa-file-text-o"></i> 新建普通笔记
			</router-link>
			<router-link tag="a" to="/noteAddMarkdown" class="topbar_menu" active-class="topbar_menu_active">
				<i class="fa fa-file-code-o"></i> 新建Markdown笔记
			</router-link>
		</div>
		<div class="top_center"></div>
		<div class="top_right">
			<div class="dialog_menu" style="position: relative;top:5px;">
				<a id="minimize" class="aui_min" style="display:block"></a>
				<a id="maximize" class="aui_max" style="display:block"></a>
				<a class="aui_close"></a>
			</div>
		</div>
		<div style="clear:both"></div>
	</div>
</div>
</template>

<script>
export default {
	return(){}
}
</script>

<style>
.page_header{
	width:100%;height:40px;position:absolute;top:0px;background-color:#5579BA;color:#DDDDDD;
}
.topbar .content {
	padding: 0px;
	line-height: 40px;
	height: 40px;
	wordbreak: break-all;
}

.topbar .content .topbar_menu {
	display: block;
	text-decoration: none;
	color: #fff;
	border: 1px solid #4a9eff;
	overflow: hidden;
	-webkit-transition: all 0.2s;
	-moz-transition: all 0.2s;
	-o-transition: all 0.2s;
	-ms-transition: all 0.2s;
	transition: all 0.2s;
	padding: 0px 1.2em;
	border-top: none;
	border-bottom: none;
	outline: none;
	float: left;
	margin-left: -1px;
	font-size: 14px;
}

.topbar .content .topbar_menu.title {
	font-size: 20px;
	width: 200px;
	width: 202px\0;
	padding: 0;
	text-align: center;
}

.topbar .content .topbar_menu.title:hover {
	background: none;
}

.topbar .content .topbar_menu_active,
.topbar .content .open .topbar_menu,
.topbar .content .topbar_menu:hover,
.topbar .content .topbar_menu.this,
.topbar .content .top_right ul a.this {
	background: #6e8dc4;
	border-color: #6e8dc4;
}
.topbar .content .top_left {
	overflow: hidden;
	height: 40px;
	width: 70%;
}

.topbar .content .top_right {
	position: absolute;
	right: 0px;
	top: 0px;
	margin-right: 0px;
	height: 40px;
}

.topbar .content .top_right .menu_group {
	height: 40px;
	margin-right: -1px;
	float: left;
	position: relative;
}

.topbar .content .top_right .topbar_menu {
	display: inline-block;
	padding: 0px 6px;
	margin-right: 1px;
}

.topbar .content .top_right .topbar_menu i {
	padding-right: 3px;
}

.topbar .content .topbar_menu {
	border-color: #6082be;
}
.page_body{
	position: absolute;left: 0;right: 0;top: 40px;bottom: 32px;
}
.page_resize{
	width: 10px;cursor: col-resize;z-index: 100;position: absolute;
    left: 194px;top: 0;bottom: 0;overflow: hidden;background: url("../../images/resize.png") 0px 50% no-repeat;
}
</style>
