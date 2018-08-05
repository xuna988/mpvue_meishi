<template>
	<div class="content">
		<scroll-view scroll-y style="height:100%;" @scrolltolower="toLow">
			<a class="flex content-li" :href="'/pages/caipu_detail/main?id='+item.id"  v-for="(item,index) in list" :key="index">
				<div class="feed-pic cook-pic br4">
					<img :src="item.pic" :title="item.tag" class="npic br4"/>
				</div>
				<div class="feed-content flex-1">
					<div class="recipe-wrap mb10">
						<h2 class="recipe-name text-clamp">{{item.name}}</h2>
						<div class="recipe-cai text-lips">{{item.tag}}</div>
					</div>
					<div class="recipe-auth text-lips mb5">{{item.content}}</div>
				</div>
			</a>
		</scroll-view>
	</div>
</template>

<script>
	import fly from '@/utils/flyio1'
	export default {
		name: "",
	    data() {
	        return {
	            articleList: [],
	            page: 1,
	        }
	    },
	    computed:{
	    	list(){
	    		return this.articleList.map(item=>{
	    			return item;
	    		})
	    	}
	    },
	    methods:{
	    	async getList(page=1){
	    		let {classid} = this.$root.$mp.query
	    		wx.showLoading({
                	title: '加载中',
            	})
            	let res
            	if(classid){
            		res = await fly.get(`https://way.jd.com/jisuapi/byclass?classid=${classid}&start=0&num=10&appkey=d1996bbdff69f778701ce586869e8e30`)
            	}else{
            		res = await fly.get('https://way.jd.com/jisuapi/search?keyword=减肥&num=10&appkey=d1996bbdff69f778701ce586869e8e30')
            	}

            	if(res.data.result.status == 0){
            		this.articleList = res.data.result.result.list
            	}
            	wx.hideLoading()
            	
	    	}
	    },
	    async onLoad() {
	    	console.log("onLoad created")
        	this.getList();
    	}
	}
</script>
<style lang="stylus" scoped>
 .content-li
    padding 20px
    border-bottom 1px solid #f3f3f3
    overflow hidden
.flex
 display -webkit-box
 display -moz-box
 display -webkit-flexbox
 display -ms-flexbox
 display -webkit-flex
 display flex
 -webkit-box-pack justify
 -moz-box-pack justify
 -webkit-flex-pack justify
 -ms-flex-pack justify
 -webkit-justify-content space-between
 justify-content space-between
.feed-pic
 width 280rpx
 height 280rpx
 position relative
 margin-right 10rpx
 .npic
  display block
  width 280rpx
  height 280rpx
.br4
 border-radius 4px
 -webkit-border-radius 4px
 -moz-border-radius 4px
.feed-content
 overflow hidden
.flex-1
 -webkit-box-flex 1
 -moz-box-flex 1
 width -webkit-flex(1)
 -webkit-flex 1
 -ms-flex 1
 flex 1
.recipe-name
    font-size 18px
    line-height 26px
    color #333
    font-weight bold
.recipe-cai
    font-size 12px
    line-height 26px
    color #9293AE
.recipe-auth
    font-size 13px
    height 15px
    line-height 15px
.text-lips
    text-overflow ellipsis
    white-space nowrap
    overflow hidden
    font-size 12px
    line-height 14px
    color #9293AE
    height 14px
    display inline-block
    vertical-align middle
</style>
