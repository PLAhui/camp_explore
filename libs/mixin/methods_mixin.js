/**
 * 公用方法mixin
 */
module.exports = {
  data() {
    return {
      
    }
  },
  onLoad() {
  
  },
  methods: {
	//更新定位记录查询历史
	insert_HISTORY_LOCATION(data){
		var history = [];
		if(this.HISTORY_LOCATION==null){
			history.push(data)
		}else{
			history = this.HISTORY_LOCATION;
			for (var i = 0; i < history.length; i++) {
				console.log(history[i].title,data.title)
				if(history[i].title==data.title){
					
					history.splice(i, 1)
				}
			}
			history.unshift(data)
		}
		this.$t.vuex('HISTORY_LOCATION',history)
	}
  }
}