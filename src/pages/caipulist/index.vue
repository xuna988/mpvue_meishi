<template>
	<scroll-view scroll-y="true" enable-back-to-top="true" class="mid-top">
    	<content-t></content-t>
    </scroll-view>

</template>

<script>
	import fly from '@/utils/flyio1';
	import content from '@/components/content/content.vue'
	import { mapState, mapMutations, mapGetters } from 'vuex';
	export default {
  		data() {
			return {
				
			}
  		},
  		components:{
	        'content-t':content
    	},
    	async onLoad() {
    		
	    },
  		methods:{
	  		

  		},
		created() {

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
