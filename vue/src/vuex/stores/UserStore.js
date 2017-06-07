import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);       //Vuex初始化


let userStore = new Vuex.Store({
	state:{         //存储空间
		loginbean:null
	},
	mutations:{
		zhuce:function(state,data){      //事件响应 ，修改存储
			state.loginbean =data;
			alert('啦啦啦'+data);
		},
		login:function(state,data){      //事件响应 ，修改存储
			state.loginbean =data;
			alert('啦啦啦'+data);
		},
		
	}
});

export default userStore;