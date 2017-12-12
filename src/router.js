const routers = [
	{
	    path: '/',
	    meta: {
	        title: '开源云笔记'
	    },
	    component: (resolve) => require(['./views/note.vue'], resolve),
	    children:[
			{
			    path: '/noteAdd',
			    meta: {
			        title: '新增普通笔记'
			    },
			    //此处是是可以把组件加载到指定的name的router-view，components是复数
			    components: {
			    	'page_right_right':(resolve) => require(['./views/components/note_right_note_write_common.vue'], resolve)
			    }
			},
			{
			    path: '/noteAddMarkdown',
			    name: 'page_right_right',
			    meta: {
			        title: '新增Markdown笔记'
			    },
			    components: {
			    	'page_right_right':(resolve) => require(['./views/components/note_right_note_write_markdown.vue'], resolve)
			    }
			},
			{
			    path: '/noteEdit/:noteId',
			    meta: {
			        title: '编辑笔记'
			    },
			    component: (resolve) => require(['./views/components/note_right_note_write_common.vue'], resolve)
			},
			{
			    path: '/noteDelete/:noteId',
			    meta: {
			        title: '删除笔记'
			    },
			    component: (resolve) => require(['./views/components/note_right_note_write_common.vue'], resolve)
			},
			{
			    path: '/cateAdd',
			    meta: {
			        title: '新增分类'
			    },
			    component: (resolve) => require(['./views/components/note_right_note_write_common.vue'], resolve)
			},
			{
			    path: '/cateEdit/:cateId',
			    meta: {
			        title: '编辑分类'
			    },
			    component: (resolve) => require(['./views/components/note_right_note_write_common.vue'], resolve)
			},
			{
			    path: '/cateDelete/:cateId',
			    meta: {
			        title: '删除分类'
			    },
			    component: (resolve) => require(['./views/components/note_right_note_write_common.vue'], resolve)
			},
			{
		        path: '*',
			    meta: {
			        title: '开源云笔记'
			    },
			    components: {
			    	'page_right_right':(resolve) => require(['./views/components/note_right_note_content.vue'], resolve)
			    }
		    }
	    ]
	},
	{
        path: '*',
        component: (resolve) => require(['./views/note.vue'], resolve),
    }
];
export default routers;