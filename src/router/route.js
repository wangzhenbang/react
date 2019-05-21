import Home from '../components/Home'
import User from '../components/User'
import OrderList from '../components/OrderList'
let routes=[
    {
       path:'/index/',
       component:Home,
       exact:true
    },
    {
      path:'/index/user',
      component:User
    },
    {
      path:'/index/orderList',
      component:OrderList
    }
  ]
  
 export default routes ;