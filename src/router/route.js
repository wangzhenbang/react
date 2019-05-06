import Home from '../components/Home'
import User from '../components/User'
import OrderList from '../components/OrderList'
let routes=[
    {
       path:'/',
       component:Home,
       exact:true
    },
    {
      path:'/user',
      component:User
    },
    {
      path:'/orderList',
      component:OrderList
    }
  ]
  
 export default routes ;