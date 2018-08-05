import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.prototype.$store=store;
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

import swiper from '@/common/css/base.css'
import app12 from '@/assets/app.scss'

// Vue.prototype.getList = function() {
//   wx.showLoading({
//       title:'加载中',
//   })
//   this.$http.get('music#!method=get').then((res)=>{
//       this.menu=res.data.data.menu
//       this.footimg=res.data.data.footimg
//       this.footimg1=res.data.data.footimg1
//       this.footimg2=res.data.data.footimg2
//       this.footimg3=res.data.data.footimg3
//       wx.hideLoading();
//   }).catch((e)=>{
//     console.log(e)
//   })
// }

export default {
  // 这个字段走 app.json
  
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/my/main','pages/caipu_search/main','pages/caipu_search_detail/main', '^pages/caipu/main','pages/recipe_class/main','pages/caipulist/main','pages/caipu_detail/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#494949',
      navigationBarTitleText: '菜谱',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      "borderStyle": "dark",
      "position": "bottom",
      "color":"#ffffff",
      "selectedColor":"#CC1004",
      "backgroundColor":"#303133",
      "list": [
        {
          "pagePath": "pages/caipu/main",
          "text":"菜谱",
          "iconPath": "/static/images/music1.png",
          "selectedIconPath": "/static/images/music.png"
        },
        {
          "pagePath": "pages/recipe_class/main",
          "text":"分类",
          "iconPath": "/static/images/le1.png",
          "selectedIconPath": "/static/images/le.png"
        },
        {
          "pagePath": "pages/caipu_search/main",
          "text":"搜索",
          "iconPath": "/static/images/video1.png",
          "selectedIconPath": "/static/images/video.png"
        }
      ]
    },
  }
}
