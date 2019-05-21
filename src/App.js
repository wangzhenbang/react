import React, { Component } from 'react';
import {  Route, Link,withRouter } from "react-router-dom";

import { getInputChangeAction,getAddItemAction} from './store/actionCreators' //定义类型的文件引用

import { connect } from 'react-redux' //连接的作用


import './assets/css/index.css';
import './assets/css/App.css'; 
import routes from './router/route'
import { Layout, Menu, Icon } from 'antd';
 
const { Header, Sider, Content } = Layout;
// const { SubMenu }=Menu;
let menulist=[

  
];

const LeftSider = withRouter((props) => {
  return (    
          <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[props.history.location.pathname]}
             
          >
          {              
            menulist.map((item,key)=>{  
              return (  
                <Menu.Item key={item.url}>
                  <Link to={item.url} >
                    <Icon type={item.iconType} />
                    <span>
                        {item.name}
                    </span>
                  </Link>
                </Menu.Item>
              )
            }) 
          }
          </Menu>
  );
  

  })
class App extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state={
      collapsed: false   
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  loginOut=()=>{
    this.props.history.push('/login');
  }
  render() {
    menulist=this.props.menulist;
    return (
        <div className="app">
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}  
            >
              <div className="logo" />
              <LeftSider />     
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0,position:'relative' }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
                <div className="login-out" onClick={this.loginOut}>退出登录</div>
              </Header>
              <Content style={{
                margin: '24px 16px', padding: 24, background:'#fff', minHeight: 280,
              }}
              >
                {
                  routes.map((route,key) => {
                    if(route.exact){
                      return <Route exact key={key} path={route.path} component={route.component} />
                    }else{
                      return <Route key={key} path={route.path} component={route.component} />
                    }
                  })
                }      
              </Content>
            </Layout>
          </Layout>         
        </div>
  
    );
  }
}



//可以另外新建一个js文件 属于容器组件  
const mapState=(state)=>{
  return {
    menulist:state.menulist
  }
}
const mapdispatchAction=(dispatch)=>{
  return {
    changeInputValue(e){
      const action=getInputChangeAction(e.target.value)
      dispatch(action)
    },
    add(){
      const action=getAddItemAction()
      dispatch(action)
    }
  }
}
export default connect(mapState,mapdispatchAction)(App);//connect是连接 跟Provide配套使用
