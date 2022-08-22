import React, { Component } from 'react'
import {Modal,Button} from 'antd'

class MyModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible :false,
      nowtime:new Date().toLocaleString()+"",
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        nowtime:new Date().toLocaleString()+""
      })
    }, 1000);
  }
  show(){ 
    console.log("显示");
    this.setState({modalVisible:true})
  }
  hide(){ 
    console.log("隐藏");
    this.setState({modalVisible:false})
  }
  good(){
    console.log("调用了MyModal组件的good方法");
  }
  render() {
 
    const {modalVisible,nowtime} = this.state
    return <Modal 
    title={nowtime}
    visible={modalVisible}
    onCancel={()=>{
      this.setState({modalVisible:false})
    }}
    />
  }
}

export default class Parent extends React.Component {

  render() {
    const clickHandle=()=>{
      this.modal.good()
      this.modal.setState({modalVisible:true})
    }
    return (
      <>
        <Button onClick={clickHandle} type="primary">按钮</Button>
        <MyModal
          ref={el => {
            this.modal = el
          }}
        />
      </>
    )
  }
}

