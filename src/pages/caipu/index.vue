<template>
	<scroll-view scroll-y="true" enable-back-to-top="true" class="mid-top">
    	<swiper-t :menu="menu"></swiper-t>
    	<content-t></content-t>
    </scroll-view>

</template>

<script>
	import fly from '@/utils/flyio1';
	import swiper from '@/components/swiper/swiper.vue'
	import content from '@/components/content/content.vue'
	import { mapState, mapMutations, mapGetters } from 'vuex';
	export default {
  		data() {
			return {
				indicatorDots:true,
			    imgUrls:[
			      'https://p4.nicaifu.com/cms/201807/c30f2f4e64894233b1bebf27f936dcfc.jpg',
			      'https://p4.nicaifu.com/cms/201807/c30f2f4e64894233b1bebf27f936dcfc.jpg',
			      'https://p4.nicaifu.com/cms/201807/c30f2f4e64894233b1bebf27f936dcfc.jpg',
			      'https://p4.nicaifu.com/cms/201807/c30f2f4e64894233b1bebf27f936dcfc.jpg',
			      'https://p4.nicaifu.com/cms/201807/c30f2f4e64894233b1bebf27f936dcfc.jpg'
			    ],
			    menu:[{id:1,picUrl:'http://p1.music.126.net/i5rd5n7OM8b4A0N_cNCSRA==/109951163387800594.jpg'},{id:1,picUrl:'http://p1.music.126.net/i5rd5n7OM8b4A0N_cNCSRA==/109951163387800594.jpg'}]
			}
  		},
  		components:{
	        'swiper-t':swiper,
	        'content-t':content
    	},
    	async onLoad() {
	      

	    },
  		methods:{
	  	
  		},
		created() {

		},
		onShareAppMessage (res) {
		    return {
				title: '快来一起品味美食吧！',
				path: '/pages/caipu/index',
				imageUrl: 'http://p1.music.126.net/i5rd5n7OM8b4A0N_cNCSRA==/109951163387800594.jpg'
		    }
		  }
	};

</script>

<style lang="stylus">
	.mid-top
		width 100%
		z-index 0
		position relative
		overflow hidden
		background #f3f3f3
</style>
