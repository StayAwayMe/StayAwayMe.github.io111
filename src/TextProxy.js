import React from 'react'
import axios from 'axios'
import { message, Button, Checkbox, Input, Form,Card} from 'antd'
const {Meta} = Card
const renderStyle = {
    listStyle: "none",
    width: '30%'
}
const plainOptions = ['Apple', 'Pear', 'Orange'];


class GithubSelect extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            arr: []
        }
    }
    render() {
        return (
            <div>
                <Form
                    name="horizontal_login"
                    layout="inline"
                    onFinish={(values) => {
                        const { key } = values
                        axios.get(`http://localhost:8888/api/gitselect?name=${key}`).then(res => {
                            console.log(res);
                            if (res.status == 200) {
                                let arr = []
                                arr.push(res.data)
                                this.setState({ arr })
                            } else {
                                this.setState({ arr: [] })
                            }
                        })
                    }}
                >
                    <Form.Item
                        label="输入关键字"
                        name="key"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input
                        // style={{ width: '20%' }} 
                        />
                    </Form.Item>
                    <Form.Item
                    >
                        <Button type="primary" htmlType="submit">
                            搜索
                        </Button>
                    </Form.Item>

                </Form>
                <br/>
                <br/>
                {
                    this.state.arr.map(item=>(
                <Card
                key={item.id}
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src={item.avatar_url} />}
                >
                    <Meta title={item.login} description={item.html_url} />
                </Card>
                    ))
                }
                
            </div>
        )
    }
}

class TestAnimation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            arr: []
        }
    }
    handleQuery = () => {
        axios.get('http://localhost:8888/api/zhihu')
            .then(res => {
                console.log(res)
                if (res.status == 200) {
                    this.setState({ arr: res.data }, () => {
                        message.success("获取数据完成")
                    })
                }
            })
    }
    resetHandle = () => {
        this.setState({ arr: [] }, () => {
            message.success("重置成功")
        })
    }
    onChange = (value) => {
        console.log(value);
    }
    render() {
        return (
            <div>
                <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={this.onChange} /><br />
                <div>测试反向代理</div>
                <Button onClick={this.handleQuery} type="primary">点击</Button>
                <Button onClick={this.resetHandle} type="ghost">重置</Button>

                <ul style={renderStyle}>
                    <li><h1>知乎热搜</h1></li>
                    {
                        this.state.arr.map((item, index) => {
                            return (<li key={item.uuid}>{item.query}</li>)
                        })
                    }
                </ul>
                <GithubSelect></GithubSelect>
            </div>
        )
    }
}

export default TestAnimation
