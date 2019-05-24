import React, { Component } from 'react'
import { Progress,Rate } from 'antd';
class progress extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>
                    <Progress percent={30} />
                    <Progress percent={50} status="active" />
                    <Progress percent={70} status="exception" />
                    <Progress percent={50} showInfo={false} />
                    <Progress strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                      }}
                      percent={99.9}/>
                </div>
                <div style={{marginTop:'30px'}}>
                    <Progress type="circle" percent={30} width={80} />
                    <Progress type="circle" percent={70} width={80} status="exception" />
                    <Progress type="circle" percent={100} width={80} />
                </div>

                <Rate allowHalf defaultValue={2.5} />
            </div>
        );
    }
}

export default progress;