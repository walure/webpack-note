import home from '../views/home/index.vue'
import list from '../views/list/index.vue'
console.log(111111)
const path = [
    {path:'/',component:home},
    {path:'/',name:'index',component:home},
    {path:'list',name:'list',component:list}
]

export default path