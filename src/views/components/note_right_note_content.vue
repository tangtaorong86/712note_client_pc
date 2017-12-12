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
			<div class="diy_button">编辑</div>
		</div>
	</div>
	<div class="page_right_right_bottom demo-spin-article">
		我是笔记内容
		<Spin fix>
            <Icon type="load-c" size=18 class="demo-spin-icon-load" v-if="spinShow"></Icon>
            正在努力加载中...
        </Spin>
	</div>
</div>
</template>
<style scoped>
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<script>
export default {
	name: 'note_right_note_content',
	data () {
	    return {
            spinShow: true
        }
  	}
}
</script>