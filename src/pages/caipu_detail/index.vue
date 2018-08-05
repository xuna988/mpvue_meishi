<template>
	<scroll-view scroll-y="true" enable-back-to-top="true">
    	<section>
    		<img :src="caipu_detail.pic" class="npic" :alt="caipu_detail.tag">
    		<div class="mar-25">
    			<h1 class="detail-name" v-html="caipu_detail.name"></h1>
    			<div class="text-17d" v-html="caipu_detail.content"></div>
	    		<div class="mt10 mb10">
		            <span class="level level-time">适合人数：{{caipu_detail.peoplenum}}</span>            
		            <span class="level level-hard">烹饪时间：{{caipu_detail.cookingtime}}</span>        
	            </div>
	            <div class="dg-mtitle pt20">食材清单</div>
	            <div class="cate-list mtb">
	            	<div class="cate-link" v-for="(item,index) in caipu_detail.material" :key="index">
	            		<span class="cate-name text-lips" v-html="item.mname"></span>
	            		<span class="cate-num text-lips" v-html="item.amount"></span>
	            	</div>
	            </div>
	            <div class="dg-mtitle pt20">烹饪步骤</div>
	            <ul class="detail-step mtb10">
	            	<li v-for="(item,index) in caipu_detail.process" :key="index">
                        <span class="text-18b">1/5</span>
                        <img :src="item.pic" class="npic br4 mtb10" alt="中国人的可乐——冰镇酸梅汤的做法 步骤1">
                        <p class="text-17 line-26" v-html="item.pcontent"></p>
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
				caipu_detail:{}
			}
  		},
  		components:{
	      
    	},
    	async onLoad() {
	        const {
	            id = 1
	       	} = this.$root.$mp.query;
	        wx.showLoading({
	            title: '加载中',
	        })
	        let res = await fly.get(`https://way.jd.com/jisuapi/detail?id=${id}&appkey=d1996bbdff69f778701ce586869e8e30`)

	        if (res.status == "200") {
	        	this.caipu_detail = res.data.result.result
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
	.npic {
	    width: 100%;
	    display: block;
	}
	.mar-25{
		margin: 25px;
	}
	.detail-name {
	    font-size: 23px;
	    line-height: 34px;
	    font-weight: bold;
	    text-align: center;
	    color: #333;
	    margin-bottom: 40rpx;
	}
	.text-17d{
		font-size: 17px;
	    line-height: 28px;
	    color: #333;
	    word-wrap: break-word;
	}
	.mt10 {
    	margin-top: 10px;
	}
	.mb10 {
	    margin-bottom: 10px;
	}
	.level {
	    display: block;
	    font-size: 15px;
	    line-height: 15px;
	    padding: 6px 0;
	    color: #666;
	}
	.dg-mtitle {
	    font-size: 19px;
	    line-height: 20px;
	    color: #333;
	    font-weight: bold;
	}
	.pt20 {
	    padding-top: 20px;
	}
	.mtb {
	    margin-bottom: 15px;
	    margin-top: 15px;
	}
	.cate-link {
	    display: block;
	    overflow: hidden;
	    line-height: 47px;
	    border-bottom: 0.5px solid #f3f3f3;
	    font-size: 17px;
	}
	.cate-name {
	    width: 58%;
	    float: left;
	    display: inline-block;
	}
	.cate-num {
	    width: 32%;
	    float: left;
	    display: inline-block;
	}

	.text-lips {
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.text-17 {
	    font-size: 17px;
	    line-height: 35px;
	    color: #333;
	    word-wrap: break-word;
	}
	.line-26 {
    	line-height: 26px;
	}
	.br4 {
	    border-radius: 4px;
	    -webkit-border-radius: 4px;
	    -moz-border-radius: 4px;
	}

</style>
