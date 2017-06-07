<template>
	<el-row style="margin-bottom:  18px;">
	 <el-col :span='6'>
	 	<Levelnav />
	 </el-col>
	  <el-col :span='6'>
	 	<RoomList />
	 </el-col>
	</el-row>
</template>
<script>
import {getRoomList} from '../../vuex/actions/HallAction'
import Levelnav from './Levelnav'
import RoomList from './RoomList'

	export default {
		mounted:function(){ 
       		//axios向服务器发请求,获取房间列表
       		getRoomList(this);
  		},
  		components:{
//			RoomList:RoomList
//			Levelnav:Levelnav
  		}
	}
</script>