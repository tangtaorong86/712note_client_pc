<template>
<div class="page_left">
	<nav class="page_left_nav_a">
		<a href="javascript:;" class="nav_a">
			<i class="nav_i nav_i_favorite"></i><font>我的收藏</font>
		</a>
		<a href="javascript:;" class="nav_a ">
			<i class="nav_i nav_i_newnote"></i><font>最新笔记</font>
		</a>
		<a href="javascript:;" class="nav_a">
			<div @dblclick="dblclick" @contextmenu.prevent="showContextMenu()">
				<i class="nav_i nav_i_folder"></i><font>我的文件夹</font>
			</div>
			<context-menu-folder></context-menu-folder>
		</a>
	</nav>
	<nav class="page_left_nav_b">
		<div class="page_left_nav_folder">
			<ul>
				<cate :data="node" v-for="node in nodes" :key="nodes.cid"></cate>
			</ul>
		</div>
	</nav>
	<nav class="page_left_nav_c">
		<a href="javascript:;" class="nav_a">
			<i class="nav_i nav_i_recycle"></i><font>回收站</font>
		</a>
	</nav>
</div>
</template>

<script>
import Util from '../../libs/util';
import cate from '../../views/components/note_left_cate.vue';
import ContextMenuFolder from '../../views/components/note_left_contextmenu_folder.vue'
export default {
  	props: {
    		// seller: Object
  	},
  	created() {
    		Util.ajax.get('/v1/cate/index').then((res) => {
//  			console.log(res);
    			this.nodes = res.data;
    		});
	},
	data: function () {
    		return {
	    		nodes: [],
	    		contextMenuWidth: null,
	    		contextMenuHeight: null
    		}
	},
	methods: {
	    	dblclick: function () {
	      	// alert("双击可修改名称");
	    	},
	    	showContextMenu: function() {
	    		$(".context-menu").removeClass("show");
		    	var menu = $(event.currentTarget).parent("a").find(".context-menu");
		    	if(!this.contextMenuWidth || !this.contextMenuHeight) {
		        $(menu).css("visibility","hidden");
		        $(menu).css("display","block");
		        this.contextMenuWidth = $(menu).width();
		        this.contextMenuHeight = $(menu).height();
		        $(menu).removeAttr("style");
		    	}
		    	
		    	if((this.contextMenuWidth + event.clientX) >= window.innerWidth) {
		        	$(menu).css("left",(event.clientX - this.contextMenuWidth) + "px");
		    	} else {
		    		$(menu).css("left",event.clientX + "px");
		    	}
	
		    	// console.log(event.clientY);
		    	// console.log(window.innerHeight);
		    	if((this.contextMenuHeight + event.clientY + 80) >= window.innerHeight) {
		        	// menu.style.top = (event.clientY - this.contextMenuHeight) + "px";
		        	$(menu).css("top",(event.clientY - this.contextMenuHeight) + "px");
		    	} else {
		        	// menu.style.top = event.clientY + "px";
		        	$(menu).css("top",event.clientY + "px");
		    	}
		      
		    	// menu.classList.add('show');
		    	$(menu).addClass('show');
	    }
  	},
	components: {
    		cate,ContextMenuFolder
	}
}
</script>

<style>
.page_body .page_left{
    position: absolute;left: 0;top: 0;bottom: 0px;width: 199px;border-right: 1px solid #ddd;
    background:#fafafa;background-attachment: fixed;
}
.page_left nav{
	display:block;position: absolute;width: 100%;
}
.page_left nav.page_left_nav_a{
	top:0px;border-bottom:1px solid #e8e8e8;
	-webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.page_left nav.page_left_nav_b{
	top:120px;bottom:40px;overflow:auto;
	-webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.page_left nav.page_left_nav_c{
	bottom:0px;z-index:999;background-color:#fafafa;border-top:1px solid #e8e8e8;
	-webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.page_left nav .nav_a{
	display:block;line-height:40px;height:40px;padding:0;margin: 0;list-style: none;white-space: nowrap;outline: 0;
	padding-top: 0px;cursor: pointer;text-decoration: none;color: #333;vertical-align: top;padding-left:25px;
}
.page_left nav .nav_a:hover{
	background:#eee;
}
.page_left nav .active,.page_left nav .active:hover{
	background:#5579BA;color:#FFFFFF;
}
.nav_i{
	display:block;float:left;height:18px;width:18px;background-size: 100% auto;vertical-align: middle;
	position: relative;top:10px;margin-right:8px;
}
.nav_i_favorite{
	background-image:url(../../images/nav_favorite.png);top:9px;
}
.nav_i_folder{
	background-image:url(../../images/nav_folder.png);
}
.nav_i_recycle{
	background-image:url(../../images/nav_recycle.png);
}
.nav_i_newnote{
	background-image:url(../../images/nav_newnote.png);
}
.nav_i_folderx{
	background-image: url(../../images/nav_b_folder.png);top:8px;margin-right:6px;
}
.nav_a>font{
	display:block;float:left;text-align: left;
}

.page_left_nav_folder{
	height:auto;width:100%;
}
.page_left_nav_folder ul{
	display:block;width:100%;padding:0px;
}
.page_left_nav_folder ul li{
	display:block;width:100%;
}

.nav_ax{
	display:block;line-height:35px;height:35px;padding:0;margin: 0;list-style: none;white-space: nowrap;
	outline:0;padding-top:0px;cursor:pointer;text-decoration:none;color:#333;vertical-align:top;
}
.nav_ax .nav_ax_first{
	width:100%;height:100%;overflow: hidden;
}
.nav_ax:hover,.nav_ax_hover{
	background:#eee;text-decoration:none;
}

.nav_ax .splite{
	height:15px;width:15px;float:left;
}
.nav_ax .nav_ax_label{
	display:block;float:left;width:auto;height:35px;line-height:36px;color:#333333;font-weight: normal;
	position: relative;
}
.nav_ax .nav_ix_power{
	display:block;float:left;width:18px;height:20px;text-align: center;
	position: absolute;left:-18px;top:7px;cursor: pointer;
}
.nav_ax .nav_ix_power:hover{
	background-color:#E5E5E5;
}
.nav_ax .nav_ix_open{
	position: relative;top:5px;left:8px;display:block;float:left;width:0;height:0; 
	border-top:5px solid transparent;border-bottom:5px solid transparent;
	border-left:5px solid #aaa;
}
.nav_ax .nav_ix_close{
	position: relative;top:9px;left:4px;display:block;float:left;width:0;height:0; 
	border-left:5px solid transparent;border-right:5px solid transparent;
	border-top:5px solid #aaa;
}
</style>
