import React from "react";
import { Button, Input, Space, List, Checkbox, message } from "antd";
import store from "../../store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
export default function App() {
  //   const [donelist, setDonelist] = useState(store.getState()["donelist"]);
  const [inputContent, setInputContent] = useState("");
  const inputref = useRef()
  const willdolist = useSelector((state) => state?.willdolist);
  const donelist = useSelector((state) => state?.donelist);
  return (
    <>
      <div style={{ marginLeft: "20px" }}>
        <Space size={"large"}>
          <Input
            ref={inputref}
            placeholder={store.getState()["inputValue"]}
            style={{ width: "230px" }}
            onChange={(value) => {
              setInputContent(value.target.value);
            }}
            onBlur={(e)=>{
              console.log(e);
              store.dispatch({
                type: 'COMPLETE_TODO',
                index: e.target.value
              })
            }}
            value={inputContent}
          />
          <Button
            type="primary"
            onClick={() => {
              console.log(store);
              if (inputref.current.input.value=="") {
                message.error("请不要输入空内容")
                return
              }
              const action = {
                type: "changeWilldoList",
                value: inputContent,
              };
              store.dispatch(action);
              setInputContent('')
              console.log(store);
            }}
          >
            按钮
          </Button>
        </Space>
      </div>
      <div style={{ maxWidth: "500px", marginLeft: "20px" }}>
        <List
          header={<div>列表头————未完成</div>}
          dataSource={willdolist}
          renderItem={(item) => (
            <List.Item>
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    const action = {
                      type: "changeDone",
                      value: e.target.value,
                    };
                    store.dispatch(action);
                  }
                }}
                value={item}
                key={item}
              >
                {item}
              </Checkbox>
            </List.Item>
          )}
        />
      </div>
      <div style={{ maxWidth: "500px", marginLeft: "20px" }}>
        <List
          header={<div>列表头————已完成</div>}
          dataSource={donelist}
          renderItem={(item) => (
            <List.Item>
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    const action = {
                      type: "changeWilldone",
                      value: e.target.value,
                    };
                    store.dispatch(action);
                  }
                }}
                key={item}
                value={item}
              >
                {item}
              </Checkbox>
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
