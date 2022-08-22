import React from 'react'
import axios from 'axios'
import { message ,Button,} from 'antd'
const renderStyle={
    listStyle:"none",
    width:'30%'
}
class TestAnimation extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         arr :[]
      }
    }
    handleQuery = () => {
        // axios.get('http://localhost:8888/data')

        // http://localhost:8888/data
        axios.get('http://localhost:8888/api/data')
            .then(res => {
                console.log(res)
                if(res.status==200){
                    this.setState({arr:res.data},()=>{
                        message.success("获取数据完成")
                    })
                }
            })
    }
    resetHandle =()=>{
        this.setState({arr:[]},()=>{
            message.success("重置成功")
        })
    }
    render() {
        return (
            <div>
                <div>测试反向代理</div>
                <Button onClick={this.handleQuery} type="primary">点击</Button>
                <Button onClick={this.resetHandle} type="ghost">重置</Button>
                
                <ul style={renderStyle}>
                    <li><h1>知乎热搜</h1></li>
                {
                    this.state.arr.map((item,index)=>{
                        return(<li key={item.uuid}>{item.query}</li>)                        
                    })
                }
                </ul>
            </div>
        )
    }
}

export default TestAnimation
