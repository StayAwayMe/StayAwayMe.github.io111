import React from 'react'
import axios from 'axios'

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
                    this.setState({arr:res.data})
                }
            })
    }
    render() {
        return (
            <div>
                <div>测试反向代理</div>
                <button onClick={this.handleQuery}>点击</button>
                <ul>
                {
                    this.state.arr.map((item,index)=>{
                        return(<li key={index}>group:<span>{item.group}</span>  linkname:<span>{item.linkname}</span>  title:<span>{item.title}</span></li>)                        
                    })
                }
                </ul>
            </div>
        )
    }
}

export default TestAnimation
