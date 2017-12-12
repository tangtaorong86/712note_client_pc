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
    		<Tinymce style="width:100%;height:100%;" ref="editor" v-model="content"></Tinymce>
	</div>
</div>
</template>
<style scoped>

</style>
<script>
import Tinymce from '../../components/tinymac.vue';
export default {
	name: 'note_right_note_write',
	data () {
 		return {
	        content: 'Tinymce'
      	}
  	},
  	components: { 
  		Tinymce 
  	},
	methods: {
   	}
}
</script>