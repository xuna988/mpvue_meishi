<template>
	<div class="container">
        <!--搜索框-->
        <form class="m-input f-bd f-bd-btm" method="get" action="#">
        	<div class="inputcover">
        		<i class="u-svg u-svg-srch"></i>
                <input confirm-type="search" v-model="keyword" class="input" placeholder="搜索喜欢的菜肴" @confirm="confirm_search($event)">
        		<!-- <input type="search" name="search" class="input" placeholder="搜索喜欢的菜肴" value="" autocomplete="off"> -->
        		<figure class="close">
        			<i class="u-svg u-svg-empty"></i>
        		</figure>
        	</div>
        </form>
        <!--搜索框-->
        <!--热门搜索区域-->
        <div class="mlf">
            <div class="dg-title mb15">热门搜索</div>
                <div class="search-hot mb30 clearfix hot-heit">
                    <a href="/pages/caipu_search_detail/main?keyword=盐酥鸡" class="hot-btn">盐酥鸡</a>
                    <a href="/pages/caipu_search_detail/main?keyword=冷面" class="hot-btn">冷面</a>
                    <a href="/pages/caipu_search_detail/main?keyword=绿豆汤" class="hot-btn">绿豆汤</a>
                    <a href="/pages/caipu_search_detail/main?keyword=饺子馅" class="hot-btn">饺子馅</a>
                    <a href="/pages/caipu_search_detail/main?keyword=凉拌菜" class="hot-btn">凉拌菜</a>
                    <a href="/pages/caipu_search_detail/main?keyword=秋葵" class="hot-btn">秋葵</a>
                    <a href="/pages/caipu_search_detail/main?keyword=红烧茄子" class="hot-btn">红烧茄子</a>
                    <a href="/pages/caipu_search_detail/main?keyword=凉面" class="hot-btn">凉面</a>
                    <a href="/pages/caipu_search_detail/main?keyword=南瓜饼" class="hot-btn">南瓜饼</a>
                    <a href="/pages/caipu_search_detail/main?keyword=家常菜" class="hot-btn">家常菜</a>
                    <a href="/pages/caipu_search_detail/main?keyword=下饭菜" class="hot-btn">下饭菜</a>
                    <a href="/pages/caipu_search_detail/main?keyword=快手菜" class="hot-btn">快手菜</a>
                    <a href="/pages/caipu_search_detail/main?keyword=茄子" class="hot-btn">茄子</a>
                    <a href="/pages/caipu_search_detail/main?keyword=土豆" class="hot-btn">土豆</a>
                    <a href="/pages/caipu_search_detail/main?keyword=冰淇淋" class="hot-btn">冰淇淋</a>
                    <a href="/pages/caipu_search_detail/main?keyword=冬瓜" class="hot-btn">冬瓜</a>
                    <a href="/pages/caipu_search_detail/main?keyword=苦瓜" class="hot-btn">苦瓜</a>
                    <a href="/pages/caipu_search_detail/main?keyword=丝瓜" class="hot-btn">丝瓜</a>
                    <a href="/pages/caipu_search_detail/main?keyword=水煮肉片" class="hot-btn">水煮肉片</a>
                </div>
            </div>
        <!--热门搜索区域-->
	</div>

</template>

<script>
	import fly from '@/utils/flyio1';
	import { mapState, mapMutations, mapGetters } from 'vuex';
	export default {
  		data() {
			return {
			     
			}
  		},
  		components:{
    	},
    	async onLoad() {
	      

	    },
  		methods:{
	  	    confirm_search(e) {
                let url = "/pages/caipu_search_detail/main?keyword=" + e.target.value
                wx.navigateTo({url})
            }
  		},
		created() {

		},
        
	};

</script>

<style scoped>
.m-input {
    padding: 15px 10px
}

.m-input:after {
    border-color: rgba(0,0,0,.1)
}

.m-input .inputcover {
    position: relative;
    width: 90%;
    height: 44px;
    padding: 0 30px;
    box-sizing: border-box;
    background: #ebecec;
    border-radius: 20px;
    margin:0 auto;
}

.m-input .u-svg-srch {
    position: absolute;
    left: 0;
    top: 9px;
    margin: 0 8px;
    vertical-align: middle
}

.m-input .close {
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    line-height: 28px;
    text-align: center
}

.m-input .u-svg-empty {
    display: none;
    vertical-align: middle
}

.m-input .u-svg-empty.z-show {
    display: inline-block
}

.m-input .input {
    display: block;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background: transparent;
    font-size: 14px;
    color: #333
}

.m-input .input::-webkit-input-placeholder {
    font-size: 14px;
    color: #c9c9c9
}

.m-input .input::-webkit-search-cancel-button {
    display: none
}

.m-input .holder {
    position: absolute;
    left: 30px;
    top: 5px;
    font-size: 14px;
    color: #c9c9c9;
    background: transparent;
    pointer-events: none
}

/*热门搜索区域*/
.mlf{
    margin-left: 25px;
    margin-right: 25px;
}
.dg-title {
    font-size: 23px;
    line-height: 23px;
    color: #333;
    font-weight: bold;
}
.mb15 {
    margin-bottom: 15px;
}
.hot-heit {
    max-height: 82px;
    overflow: hidden;
}
.mb30 {
    margin-bottom: 30px;
}
.clearfix:after{clear:both;content:".";display:block;font-size:0;height:0;line-height:0;visibility:hidden}
.clearfix{zoom:1}
.hot-btn {
    line-height: 15px;
    margin: 4px;
    font-size: 15px;
    color: #9292AF;
    display: inline-block;
    padding: 10px 10px 8px;
    border: 1px solid #9292AF;
    border-radius: 48px;
}
</style>
