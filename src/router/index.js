import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('@/views/Home.vue'),
  },
  {
    path:'/touristCity',
    name:'TouristCity',
    component:()=>import('@/views/TouristCity.vue'),
    children:[{
      path:'activity/:city',
      name:'TouristCityActive',
      component:()=>import('@/views/TouristActivity.vue')
    },
    {
      path:'tourist/:city',
      name:'TouristCityTourist',
      component:()=>import('@/views/TouristInfo.vue')
    },
  ]
  },
  { 
    path:'/hotel',
    name:'Hotel',
    component:()=>import('@/views/HotelFoodIndex.vue'),
  },
  {
    path:'/live',
    name:'Live',
    component:()=>import('@/views/Hotelhome.vue'),
    children:[{
      path:'hotelsearch/:city',
      name:'LiveHotel',
      component:()=>import('@/views/Hotel.vue'),
    },
    {
      path:'foodsearch/:city',
      name:'LiveFood',
      component:()=>import('@/views/Food.vue'),
    },
    
  ]
  },
  {
    path:'/weather',
    name:'Weather',
    component:()=>import('@/views/Weather.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
