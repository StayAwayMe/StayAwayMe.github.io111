import React, { Component } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
const parentStyle={width:"500px",height:"300px",background:'orange'}
const childStyle={width:"400px",height:"200px",background:'pink'}
const LastChildStyle={height:"200px",background:'teal'}

const LastChild = ({...props}) => {
  useEffect(()=>{
  },[])
  return (
    <>
      <div style={LastChildStyle}>
        <br/><br/>
        <input
          placeholder={props.newbee}
          onInput={()=>{
          console.log(props);
          }}
        />
        <br/><br/>
      </div>
  </>
  )
}

const Child = (props) => {
  const [text, setText] = useState('click')
  const divref = useRef(null)
  return (
    <>
      <div style={childStyle}>
        <div
        ref={divref}
        onClick={() => {
          props.Click(text)
          console.log(divref.current,props);
        }}>{text}</div>
        <hr />
        
        <LastChild newbee={props.newbee}/>
      </div>
    </>
  )
}

export default class Parent extends React.Component {
  constructor(props){
    super(props)
    this.state={
      newbee : ''
    }
  }
  handleClick = (data) => {
    console.log("Parent received value from child: " + data)
  }
  render() {
    return (
      <>
      <div style={parentStyle}>
        父组件
          <Child Click={this.handleClick} newbee={this.state.newbee}/>
        <input type="text"
          ref={el => {
            this.modal = el
          }}
          onInput={(e)=>{
            this.setState({newbee:e.target.value
            })
          }}
        />
        <button onClick={() => {
          console.log(this.state.newbee);
        }}>
          按钮
        </button>
      </div>
      
      </>
    )
  }
}
