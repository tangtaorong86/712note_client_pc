<template>
  <ul class="ivu-dropdown-menu context-menu" @contextmenu.prevent="stopRight()">
    <li class="ivu-dropdown-item" @click="newInfo()" >新建子文件夹</li> 
    <li class="ivu-dropdown-item" @click="newInfo()" >新建普通笔记</li> 
    <li class="ivu-dropdown-item" @click="newInfo()" >新建Markdown笔记</li> 
    <li class="ivu-dropdown-item" @click="renameInfo()">重命名</li> 
    <li class="ivu-dropdown-item" @click="mvInfoTo()">移动到</li> 
    <li class="ivu-dropdown-item" @click="cpInfoTo()">复制到</li> 
    <li class="ivu-dropdown-item" @click="deleteInfo()">删除</li>
    <li class="ivu-dropdown-item" @click="setInfoOpen()">设为公开</li>
    <li class="ivu-dropdown-item" @click="setInfoPassword()">阅读密码</li>
  </ul>
</template>
<script>
export default {
  name: 'tree-son',
  methods: {
    newInfo: function(){
			this.$Modal.confirm({
	        render: (h) => {
	            return h('Input', {
	                props: {
	                    value: this.value,
	                    autofocus: true,
	                    placeholder: 'Please enter your name...'
	                },
	                on: {
	                    input: (val) => {
	                        this.value = val;
	                    }
	                }
	            })
	        }
	    })
    },
    stopRight:function(){
      return false;
    },
    renameInfo: function(){
        this.$Modal.confirm({
            render: (h) => {
                return h('Input', {
                    props: {
                        value: this.value,
                        autofocus: true,
                        placeholder: 'Please enter your name...'
                    },
                    on: {
                        input: (val) => {
                            this.value = val;
                        }
                    }
                })
            }
        })
    },
    mvInfoTo: function(){
      alert('移动到');
    },
    cpInfoTo: function(){
      alert('复制到');
    },
    deleteInfo: function(){
      alert('删除');
    },
    setInfoOpen: function(){
      alert('设为公开');
    },
    setInfoPassword: function(){
      alert('设置阅读密码');
    },
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