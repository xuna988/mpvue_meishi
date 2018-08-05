<template>
	<scroll-view scroll-y="true" enable-back-to-top="true">
    	<section>
    		<div class="mlr-25 mt20">
	    		<div class="dg-title"></div>
	    		<ul class="feed-recipe">
	    			<li class="menu-content" v-for="(item,index) in caipu_serch_detail" :key="item.id">
		              	<a :href="'/pages/caipu_detail/main?id='+item.id" class="cooka">
							<div class="menu-name text-lips" v-html="item.name"></div>
							<div class="flex mb10 mt8">
								<p class="text-lips flex-1 text-14" v-html="item.tag"></p>
								<!-- <div class="menu-other right">
									<span class="view" v-html="item.cookingtime"></span>
									<span class="collect" v-html="item.peoplenum"></span>
								</div> -->
							</div>
							<div class="cook-pic br4 hot-cook-pic" :style="'background-image:url('+item.pic+')'"></div>
		               </a>
	            	</li>
	    		</ul>
    		</div>
    	</section>
    </scroll-view>

</template>

<script>
	import fly from '@/utils/flyio1';
	import { mapState, mapMutations, mapGetters } from 'vuex';
	export default {
  		data() {
			return {
				caipu_serch_detail:{}
			}
  		},
  		components:{
	      
    	},
    	async onLoad() {
	        const {
	            keyword = "白菜"
	       	} = this.$root.$mp.query;
	        wx.showLoading({
	            title: '加载中',
	        })
	        let res = await fly.get(`https://way.jd.com/jisuapi/search?keyword=${keyword}&num=10&appkey=d1996bbdff69f778701ce586869e8e30`)

	        if (res.status == "200") {
	        	this.caipu_serch_detail = res.data.result.result.list
	            wx.hideLoading();
	        }

	    },
  		methods:{

  		},
		created() {

		}
	};

</script>

<style scoped>
	.mlr-25 {
	    margin-left: 25px;
	    margin-right: 25px;
	}
	.mt20 {
    	margin-top: 20px;
	}
	.feed-recipe li {
	    padding-top: 20px;
	    padding-bottom: 20px;
	    border-bottom: 1px solid #f3f3f3;
	    overflow: hidden;
	}
	.menu-name {
	    font-size: 18px;
	    color: #333;
	    line-height: 20px;
	    font-weight: bold;
	}
	.text-lips {
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.flex {
	    display: -webkit-box;
	    display: -moz-box;
	    display: -webkit-flexbox;
	    display: -ms-flexbox;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-pack: justify;
	    -moz-box-pack: justify;
	    -webkit-flex-pack: justify;
	    -ms-flex-pack: justify;
	    -webkit-justify-content: space-between;
	    justify-content: space-between;
	}
	.mt8 {
	    margin-top: 6px;
	}

	.mb10 {
	    margin-bottom: 10px;
	}
	.text-14 {
	    font-size: 14px;
	    line-height: 20px;
	    color: #9293AE;
	    word-wrap: break-word;
	}
	.text-lips {
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.flex-1 {
	    -webkit-box-flex: 1;
	    -moz-box-flex: 1;
	    width: -webkit-flex(1);
	    -webkit-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	}
	.right {
    	float: right;
	}
	.view {
    	margin-right: 6px;
	}
	.recipe-auth, .view, .collect {
	    font-size: 12px;
	    line-height: 14px;
	    color: #9293AE;
	    height: 14px;
	    display: inline-block;
	    vertical-align: middle;
	}
	.view::before {
    background: url(https://i1.douguo.com/upload/banner/1521438995.png);
}
.view::before, .collect::before {
    content: '';
    width: 12px;
    height: 12px;
    display: inline-block;
    vertical-align: top;
    background-size: 12px 12px !important;
    margin-right: 2px;
}
.recipe-auth, .view, .collect {
    font-size: 12px;
    line-height: 14px;
    color: #9293AE;
    height: 14px;
    display: inline-block;
    vertical-align: middle;
}
.collect::before {
    background: url(https://i1.douguo.com/upload/banner/1521438821.png);
}
.hot-cook-pic {
    padding-top: 56.3%;
}
.feed-pic, .th-in-pic, .menu-list, .hot-cook-pic {
    background-size: cover !important;
    background-repeat: no-repeat !important;
    overflow: hidden;
}
</style>
