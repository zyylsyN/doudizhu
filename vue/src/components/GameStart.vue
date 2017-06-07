<template>
	<div>
		欢迎来到星巴克
		<el-row>
			<el-col :span="8">
				<div style="width: 100%;">&nbsp;</div>
			</el-col>
			<el-col :span="8">
				
				<el-form ref="form" :model="form" label-width="80px" name="loginForm">
				  <el-form-item label="email:">
				    <el-input name='email'></el-input>
				  </el-form-item>
				  <el-form-item label="密码:">
				    <el-input type='password' name='pwd'></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click='login'>立即登录</el-button>
				    <router-link to="/register">
				    <el-button>注册</el-button>
				    </router-link>
				    
				  </el-form-item>
				</el-form>
			</el-col>
			<el-col :span="8">
				<div style="width: 100%;">&nbsp;</div>
			</el-col>
		</el-row>
	</div>
</template>


<script>
import {login} from '../vuex/actions/UserAction';

	export default {
	  data () {
	    return {
	      
	    }
	  },
	  methods:{
	  	login:function(e){
	  		login(loginForm,this);
	  	}
	  }
	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
