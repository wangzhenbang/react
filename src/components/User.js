import React,{Component} from 'react'

import { Table, Button } from 'antd';
import '../assets/css/index.css';
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    width:200
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width:200
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 98; i++) {
  data.push({
    key: i,
    name: `King ${i}`,
    age: 32,
    address: `浙江省杭州市智汇中心${i}号`,
  });
}
class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
         };
    }
    
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                    Reload
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ y: 500 }} />
            </div>
        );
    }
}

export default User;