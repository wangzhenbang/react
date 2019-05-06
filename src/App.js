import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";


import './assets/css/App.css'; 
import routes from './router/route'
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;
const { SubMenu }=Menu;
const  menulist=[
  {
    url:'/',
    name:'首页',
    iconType:'home'
  },
  {
    url:'/user',
    name:'用户列表',
    iconType:'user'
  },
  {
    url:'/orderList',
    name:'订单列表',
    iconType:'ordered-list'
  },
]
 
const LeftSider = withRouter(({history}) => {
  return (    
          <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[history.location.pathname]}
             
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
    this.state={
      collapsed: false   
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
  
    return (
      <Router>
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
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
                <div>{this.props.location}</div>
              </Header>
              <Content style={{
                margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
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
      </Router>
    );
  }
}

export default App;
