import React from "react";
import { Button, Modal,Form,Input, message } from "antd";
import { useState } from "react";
import { useRef } from "react";
import { useForm } from "antd/lib/form/Form";
import axios from "axios";
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
export default function Mail() {
  const [modalvisible, setModalVisible] = useState(false);
  const [form] = useForm()
  const visible = () => {
    setModalVisible(true);
  };
  const novisible = () => {
    setModalVisible(false);
  };
  const onFinish = (values)=>{
    console.log(values);
    const {user,theme,content} = values
    axios.get(`http://localhost:8888/api/mail?user=${user}&theme=${theme}&content=${content}`).then((res) => {
      console.log(res);
      if(res.status==200){
        message.success("发送成功")
        form.resetFields()
        novisible()
      }else{
        message.error("发送异常")
        novisible()
      }
    });
  }
  const sumbitHandle = ()=>{
    console.log(form,'form');
    form.submit()
  }

  return (
    <>
      <Button type="primary" onClick={visible}>
        发送邮件
      </Button>
      <Modal
        title={"发送邮件"}
        visible={modalvisible}
        onCancel={novisible}
        onOk={sumbitHandle}
        okText="发送"
        cancelText="关闭"
      >
        <Form
        form={form}
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
        //   validateMessages={validateMessages}
        >
          <Form.Item
            name={"user"}
            label="接收方邮箱"
            rules={[
              {
                required: true,
                message: "请确保邮箱填写无误",
                type: "email",
              },
            ]}
          >
            <Input placeholder="请输入接收方邮箱"/>
          </Form.Item>
          <Form.Item
            name="theme"
            label="主题"
            rules={[{ required: true, message: "主题是必填项" }]}

          >
            <Input placeholder="请输入主题"/>
          </Form.Item>
          <Form.Item
            name="content"
            label="邮件内容"
            rules={[{ required: true, message: "邮件内容是必填项" }]}
          >
              <Input.TextArea rows={4} placeholder="请输入正文内容" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
