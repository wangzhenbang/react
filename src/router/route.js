import Home from '../components/Home'
import User from '../components/User'
import chart from '../components/chart'
import Progress from '../components/Progress'
import Upload from '../components/upload'
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
      path:'/index/chart',
      component:chart
    },
    {
      path:'/index/progress',
      component:Progress
    },
    {
      path:'/index/upload',
      component:Upload
    }
  ]
  
 export default routes ;