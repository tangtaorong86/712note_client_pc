<template>
<div class="page_right">
	<div class="page_right_left">
		<div class="page_right_left_top">
			<noteOrder></noteOrder>
			<noteSearch></noteSearch>
		</div>
		<div class="page_right_left_bottom">
			<noteList></noteList>
		</div>
	</div>
	<div class="page_resize page_resizex"></div>
	<transition name="slide">
		<router-view name="page_right_right"></router-view>
	</transition>
</div>
</template>

<script>
import noteList from '../../views/components/note_right_note_list.vue';
import noteSearch from '../../views/components/note_right_note_search.vue';
import noteOrder from '../../views/components/note_right_note_order.vue';
export default {
  data () {
    return {}
  },
  components: {
  	noteList,
  	noteSearch,
  	noteOrder
  }
}
</script>

<style>
.page_body .page_right{
	position: absolute;left:200px;right: 0;top: 0;bottom: 0;overflow: hidden;
}
	.page_resizex{
		left:320px !important;
	}
	.page_right .page_right_left{
	    position: absolute;left: 0;top: 0;bottom: 0px;z-index:10;width:320px;border-right: 1px solid #DDDDDD;
	    background-color:#fefefe;
	}
		.page_right_left_top{
			width:100%;height:45px;border-bottom: 1px solid #DDDDDD;box-shadow: 1px 2px 15px #eee;
			position: relative;overflow: hidden;
		}
		.order_div{
			width:45px;height:45px;text-align: center;line-height: 45px;border-right:1px solid #DDDDDD;
			color:#333333;float:left;box-shadow: 1px 2px 15px #eee;position: relative;z-index: 999999;
		}
		.search_div{
			position: relative;
		}
		.search_div_input{
			display:block;width:auto;height:45px;position: absolute;left:45px;right:0px;top:0px;bottom:0px;z-index:9999;
			border:0px;text-indent:10px;outline:none;
		}
		.search_div_sub{
			position:absolute;z-index:999999;right:0px;width:30px;height:45px;text-align: center;line-height:45px;
			border-left:1px solid #DDDDDD;color:#333333;
		}
		.page_right_left_bottom{
	   		position: absolute;left: 0;top:45px;bottom: 0px;width: 100%;padding:0px;
	    		background-attachment: fixed;z-index:99999;overflow-y:auto;
		}
		.page_right_left_bottom ul,.page_right_left_bottom li{
			display:block;width:100%;height:auto;padding:0px;margin:0px;
		}
		.page_right_left_bottom ul{
			margin:0px;padding:0px;height:auto;
		}
		.page_right_left_bottom li{
			padding:10px;border-bottom:1px solid #EEEEEE;cursor: pointer;position: relative;box-sizing:border-box;
-moz-box-sizing:border-box; /* Firefox */
-webkit-box-sizing:border-box; /* Safari */
		}
		.page_right_left_bottom li:hover{
			background-color:#E0E0E0;
		}
		.page_right_left_bottom li .li_toolbar{
			width:100%;height:30px;text-align:left;line-height:25px;position:absolute;background-color:#E0E0E0;
			right:0px;bottom:0px;display:none;
		}
		.page_right_left_bottom li .li_toolbar .diy_icon{
			float:left;height:24px;margin-top:3px;margin-left:6px;padding:0px 5px;
		}
		.page_right_left_bottom li .li_toolbar .diy_icon:hover{
			background-color:#FFFFFF;border-radius:10px;
		}
		.page_right_left_bottom li:hover .li_toolbar{
			display:block;
		}
		.li_title{
			height:25px;text-align:left;line-height:25px;position: relative;
		} 
			.li_title_left{
				width:100%;overflow: hidden;position: relative;
			}
			.diy_li_icon{
				display:block;height:18px;width:18px;background-size: 100% auto;vertical-align: middle;
				position: absolute;left:0px;
			}
			.diy_icon_markdown{
				background-image:url(../../images/li_icon_markdown.png);top:3px;
			}
			.diy_icon_page{
				background-image:url(../../images/li_icon_txt.png);top:3px;
			}
			.li_title font{
				display:block;font-size:14px;color:#393939;width:100%;overflow: hidden;text-indent:22px;
				text-overflow: ellipsis;white-space: nowrap;
			}
			
		.li_content{
			max-height:40px;width:100%;text-align: left;line-height:20px;color:#82828c;margin-top:3px;
			margin-bottom:3px;overflow: hidden;text-overflow:ellipsis;display:-webkit-box;
			-webkit-box-orient:vertical;-webkit-line-clamp:2; 
		}
		.li_bottom{
			width:100%;clear:both;height:20px;line-height:20px;text-align: left;color:#c2c2c2;
		}
		.li_bottom_left{
			float:left;width:auto;
		}
		.li_bottom_right{
			width:100px;float:right;text-align: right;
		}
	.page_right_right{
		position: absolute;left:320px;top:0;bottom: 0px;z-index:10;right:0px;border-right: 1px solid #DDDDDD;
	    text-align:left;
	}
		.page_right_right_top{
			width:100%;height:45px;border-bottom: 1px solid #DDDDDD;box-shadow: 1px 2px 15px #eee;
			position: absolute;overflow: hidden;
		}
		.page_right_right_top_title{
			width:auto;height:45px;float:left;position: absolute;left:0px;right:230px;
		}
		.page_right_right_top_right{
			width:230px;height:45px;float:right;line-height:45px;text-align: right;
		}
		.page_right_right_top_right .diy_button{
			width:90px;height: 30px;line-height: 30px;font-size: 11px;color:#5579BA;text-align: center;
    			border-radius: 6px;border: 1px solid #e2e2e2;float:right;cursor: pointer;background-color: #fff;
    			margin-top:7px;
		}
		.page_right_right_top_right .diy_button:hover{
  			color: #398dee;border: 1px solid #B9BBC5;
		}
		.page_right_right_top_right .diy_icon_div{
			float:right;height:30px;margin-top:7px;margin-right:10px;
		}
		.page_right_right_top_right .diy_icon_div .diy_icon{
			height:30px;line-height:30px;float:left;margin-left:10px;color:#5579BA;cursor: pointer;
		}
		.page_right_right_top_right .diy_icon_div .diy_icon:hover{
			color:#398dee;
		}
		.page_right_right_top_title input{
			height:45px;line-height:45px;outline:none;width: 100%;display: inline-block; background-color: transparent;
    			border: 0 none;font-size: 18px;color: #393939;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
    			text-indent:10px;
		}
		.editormd-menu>li>a>.fa{font-size:14px;}
	.page_right_right_bottom{
		width:100%;position:absolute;top:46px;bottom:0px;right:0px;left:0px;
		overflow: hidden;
	}
</style>
