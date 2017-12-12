<template>
  <ul class="ivu-dropdown-menu context-menu">
    <li class="ivu-dropdown-item" @click="newForder('formValidate')" >新建子文件夹</li> 
    <li class="ivu-dropdown-item" @click="newInfo()" >新建普通笔记</li> 
    <li class="ivu-dropdown-item" @click="newInfo()" >新建Markdown笔记</li>
    <Modal
	    v-model="newForderModel"
	    title="新建子文件夹"
	    :loading="loading"
	    @on-ok="asyncOK('formValidate')">
	    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="70">
	        	<Form-item label="博客显示" prop="open">
	           <i-switch size="large" v-model="formValidate.switch">
				        <span slot="open">显示</span>
				        <span slot="close">隐藏</span>
				    </i-switch>
	        </Form-item>
					<Form-item label="分类名称" prop="title">
	       		<Input v-model="formValidate.title" placeholder="请输入分类名称"></Input>
	    			</Form-item>
	    </Form>
  		</Modal>
  </ul>
</template>
<script>
import Util from '../../libs/util';
export default {
  name: 'tree-son',
  data () {
    return {
        newForderModel: false,
        loading: true,
        //表单控件默认值
        formValidate: {
        		switch:true,
        		title:""
        },
        //表单校验规则
        ruleValidate:{
        		switch: [
            { required: true, message: '请选择是否公开！', trigger: 'change' }
          ],
        		title: [
            { required: true, message: '标题不能为空！', trigger: 'blur' }
          ]
        }
    }
  },
  methods: {
    newForder: function(name){
    		this.$refs[name].resetFields();
			this.newForderModel = true;
    },
    asyncOK (name) {
    		this.$refs[name].validate((valid) => {
            if (valid) {
            		var formData = Object.assign({}, this.formValidate)
               
               Util.ajax.post('/v1/cate/add',formData).then((res,status) => {
//             	console.log(status);
				    			this.$Message.success('提交成功!');
				    			setTimeout(() => {
				            this.newForderModel = false;
				        },1000);
				        
				    		}).catch(function(error){
							    console.log(error);
							});
            } else {
               this.$Message.error('表单验证失败!');
            }
	    })
  		} 
  }
}
</script>

<style scoped>
.context-menu {
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  display: none;
  list-style: none;
  position: fixed;
  z-index: 2147483647;
  width:inherit;
  overflow: auto;
  background-color:#fff;
  box-sizing: border-box;
  /*border-radius: 4px;*/
  box-shadow: 0 1px 6px rgba(0,0,0,.2);
  z-index: 900;
}

.context-menu.show {
  display: block;
}

.context-menu-icon {
  top: 1px;
  position: relative;
  margin-right: 10px;
}

</style>