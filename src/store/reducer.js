import {CHANGE_INPUT,ADD_INPUT} from './actionsType'
const defaultState={
    menulist:[
          {
            url:'/index/',
            name:'首页',
            iconType:'home'
          },
          {
            url:'/index/user',
            name:'用户列表',
            iconType:'user'
          },
          {
            url:'/index/chart',
            name:'数据图表',
            iconType:'bar-chart'
          },
          {
            url:'/index/progress',
            name:'进度表',
            iconType:'appstore'
          },
          {
            url:'/index/upload',
            name:'上传功能',
            iconType:'upload'
          }
          
    ]
}
export default (state=defaultState,action)=>{
    //action是从组件传过来   
    if(action.type===CHANGE_INPUT){
        const newState=JSON.parse(JSON.stringify(state))//深拷贝  
        newState.inputVal=action.value;
        return newState //改变原来的state里数据 返回到store  
    }
    return state;
}
