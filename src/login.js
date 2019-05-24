import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom'
import './assets/css/index.css'
import './assets/css/login.css'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    error = () => {
        message.error('账号或者密码错误，请重新输入！');
    }
    handleSubmit = e => {
        e.preventDefault(); 
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if(values.username=='admin'&&values.password=='admin'){
                    this.props.history.push('/index');
                }else{
                    this.error();
                }    
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="bg">
                <div className="box-from">
                    <div className="from-content">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入您的账号!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                    placeholder="账号"
                                    size="large"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入您的密码!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                    type="password"
                                    placeholder="密码"
                                    size="large"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>记住账号</Checkbox>)}
                                
                                <Button type="primary" size="large" htmlType="submit" className="login-form-button">
                                    登录 
                                </Button>
                            </Form.Item>
                        </Form> 
                    </div>

                </div>  
            </div>
        );
    }
}

export default withRouter(Form.create({ name: 'normal_login' })(login));

