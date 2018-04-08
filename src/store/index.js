let store  = {
	ajax_pending:false,
	team_rank:0,
	config:{},
	user:{
		userInfo:{},
	},
	initData:false,
	refresh:function (data) {
		this.user = data.user;
		this.config = data.config;
		this.initData = true;
	},
}

export  default store;
