<template>
<div class="page_right_right">
	<div class="page_right_right_top">
		<div class="page_right_right_top_title">
			<input type="text" placeholder="请输入标题..."/>
		</div>
		<div class="page_right_right_top_right">
			<div class="diy_icon_div">
				<div class="diy_icon">
					<i class="fa fa-info-circle fa-lg"></i>
				</div>
				<div class="diy_icon">
					<i class="fa fa-tags fa-lg"></i>
				</div>
				<div class="diy_icon">
					<i class="fa fa-paperclip fa-lg"></i>
				</div>
			</div>
			<div class="diy_button">保存</div>
		</div>
	</div>
	<div class="page_right_right_bottom">
		<div id="editor" style="">
			<editor/>
		</div>
	</div>
</div>
</template>
<style scoped>
#editor{
	clear:both;width:100%;height:100%;position: relative;overflow: hidden;
}
</style>
<script>
import Editor from '../../components/markdown.vue'
export default {
	name: 'note_right_note_write_markdown',
	created() {
		
	},
	data () {
    		return {}
  	},
	components: {
		Editor
	}
}
</script>