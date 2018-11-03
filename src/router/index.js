import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/article/Main'
import CrewComponent from '@/components/article/Crew'
import PicturesComponent from '@/components/article/Pictures'
import SongsComponent from '@/components/article/Songs'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: CrewComponent},
    {path: '/crew', component: CrewComponent},
    {path: '/pictures', component: PicturesComponent},
    {path: '/songs', component: SongsComponent},
  ]
})
