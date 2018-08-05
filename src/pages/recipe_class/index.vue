<template>
 	<scroll-view scroll-y="true" enable-back-to-top="true">
		<div class="container">
			<div class="sccont" v-for="(item,index) in recipe" :key="item.name">
				<div class="miti" @click="toggle(item,index)">
	            	<i class="ic_scicon" style="background-image: url(https://i1.douguo.com//upload/caiku/0/c/5/0c5c2a5301cbcc86c286a8a6e5531575.jpg);"></i>
	                <i class="ic_adw"></i>
	                        {{item.name}}        
	            </div>
	            <ul class="plr7 clearfix" v-bind:class="{ 'active-show': item.isshow, 'active-hide': !item.isshow }">
	                <div class="pb10 clearfix">
	                    <li v-for="(itemc,indexc) in item.list" :key="itemc.name">
	                        <div class="plr7">
	                            <a :href="'/pages/caipulist/main?classid='+itemc.classid" class="scbubn">{{itemc.name}}</a>
	                        </div>
	            		</li>
	                </div>
	        	</ul>
			</div>
		</div>
	</scroll-view>
</template>

<script>
	import fly from '@/utils/flyio1';
	import { mapState, mapMutations, mapGetters } from 'vuex';
	export default {
  		data() {
			return {
				recipe:[],
				showindex:0
			}
  		},
  		components:{},
    	async onLoad() {
	        wx.showLoading({
	            title: '加载中',
	        })
	        let res = await fly.get(`https://way.jd.com/jisuapi/recipe_class?appkey=d1996bbdff69f778701ce586869e8e30`)
	        if (res.status == "200") {

	        	this.recipe = res.data.result.result.map((item,index)=>{
	    			if(index == 0) return Object.assign({},item,{isshow:true})
	    			return Object.assign({},item,{isshow:false})
	    			
	    		})
	            wx.hideLoading()
	        }

	    },
	    computed:{
	    },
  		methods:{
  			toggle(item,index){
  				item.isshow = !item.isshow;
  			}
  		},
		created() {

		}
	};

</script>

<style scoped>
.clearfix:after{clear:both;content:".";display:block;font-size:0;height:0;line-height:0;visibility:hidden}
.clearfix{zoom:1}
.sccont {
    width: 100%;
    font-size:14px;
}

.sccont .miti {
    font-size: 18px;
    color: #666;
    height: 64px;
    line-height: 64px;
    font-weight: normal;
    position: relative;
    text-indent: 70px;
    background-color: #fff;
    border-bottom: 1px solid #e1e1e1;
}

.sccont .miti a {
    width: 100%;
    display: block;
    color: #333;
}

.sccont ul {
    padding-top: 24px;
    padding-bottom: 16px;
}

.sccont li {
    width: 33.3%;
    float: left;
}

.scbubn {
    width: 100%;
    height: 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    line-height: 32px;
    color: #333;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background-color: #fff;
    display: block;
    margin-bottom: 8px;
    border: 1px solid #e1e1e1;
}

.scbubn:hover {
    background-color: #f5f5f5;
}

.scbubn:focus {
    background-color: #f5f5f5;
}

.ic_aup, .ic_adw {
    width: 14px;
    height: 8px;
    background: url(http://i1.douguo.net/static/img/wap0725/ic_scb.png?yupeng20151117) no-repeat 0 0;
    background-size: 36px 1250px;
    display: inline-block;
    position: absolute;
    top: 28px;
    right: 20px;
    z-index: 82;
}

.ic_adw {
    background-position: 0 -137px;
}

.ic_aup {
    background-position: 0 -60px;
}

.plr7 {
    padding-left: 7px;
    padding-right: 7px;
}

.ic_scicon {
    width: 36px;
    height: 36px;
    background-size: 36px 36px;
    background-position: 0 0;
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 19px;
    z-index: 82;
}
.active-show{
	display:block;
	transiton: 0.2s all;
	-webkit-transiton: 0.2s all;
}
.active-hide{
	display:none;
	transiton: 0.2s all;
	-webkit-transiton: 0.2s all;
}
</style>
