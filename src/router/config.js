import home from '../views/home/index.vue'
import list from '../views/list/index.vue'

const path = [
   
    {path:'/index',name:'index',component:home},
    {path:'/list',name:'list',component:list},
    {path:'/',component:home}
]

export default path