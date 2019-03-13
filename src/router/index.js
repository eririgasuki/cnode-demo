import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import Postlist from '../components/Postlist'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components:{
        main:Postlist
      }
    },
    {
      path: '/topic/:id&author=:name',
      name: 'post_content',
      components:{
        main:Article,
        SlideBar:SlideBar
      }
    },
    {
      path:'/userinfo/:name',
      name:'user_info',
      components:{
        main:UserInfo
      }
    }
  ]
})
