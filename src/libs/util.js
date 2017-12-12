import axios from 'axios';
import env from '../config/env';

let util = {};
util.title = function(title) {
    title = title ? title + ' - Home' : '开源云笔记';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://localhost/pro_note/api.php/' :
    env === 'production' ?
    'http://localhost/pro_note/api.php/' :
    'https://debug.url.com';

const qs = require('querystring');
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
  	withCredentials: false, // 默认的
	//`transformRequest`选项允许我们在请求发送到服务器之前对请求的数据做出一些改动
  	transformRequest:[function(data){
    		data = qs.stringify(data);
    		return data;
  	}]
});

export default util;