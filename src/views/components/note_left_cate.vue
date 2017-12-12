<style type="text/css">
.edit_input{
	height:25px;
}
.input:focus{
　　outline:medium !important;
}
</style>
<template>
	<li>
		<a href="javascript:;" class="nav_ax">
			<div class="nax_ax_first" @dblclick="dblclick" @contextmenu.prevent="showContextMenu()">
				<label class="nav_ax_label":style="{marginLeft:node.floor*15 + 25 + 'px'}">
					<div class="nav_ix_power" @click="toggle(node)" v-show="node.children.length">
						<i :class="node.open ? 'nav_ix_close' : 'nav_ix_open'"></i>
					</div>
					<div @click="click()">
						<i class="nav_i nav_i_folderx"></i>
						<font  v-show="!node.edit">{{node.name}}</font>
					</div>
				</label>
			</div>
			<context-menu></context-menu>
		</a>
		<ul v-show="node.open">
			<tree-ctrl :data="n" v-for="n in node.children" :key="node.cid"></tree-ctrl>
		</ul>
	</li>
</template>
<script>
import ContextMenu from '../../views/components/note_left_cate_contextmenu.vue'
export default {
	name: 'tree-ctrl',
	data: () => {
	    return {
	      contextMenuWidth: null,
	      contextMenuHeight: null
	    }
  	},
	props: {
    		data: Object
	},
  	methods: {
	    	click: function () {
	      	// alert("单击后右侧打开下属笔记和文件夹");
	    	},
	    	dblclick: function (m) {
	    		m.edit = true;
//	      	alert("双击可修改名称");
	    	},
	    	toggle: function (m) {
	    		
	    		m.open = m.open ? false : true;
	    	// alert("开启还是关闭？");
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
	computed: {
	    	node () {
	    		return this.data
	    	}
  	},
  	components: {
    		ContextMenu
  	}
}
</script>
<style scoped>

</style>
