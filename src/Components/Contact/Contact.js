import React from "react";
import "./Contact.scss";
import { Button, Form, Input } from "antd";

const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="Contact">
      <div className="Contact__Description">
        <h1 className="Contact__Description__Title">Let's Connect!</h1>
        <p className="Contact__Description__Description">
          Now that you've known a lot about me, let me know if you are want to
          connect with me.
        </p>
      </div>
      <div className="Contact__Form">
        <Form
          name="basic"
          layout="vertical"
          labelCol={{
            span: 15,
          }}
          wrapper={{
            span: 19,
          }}
          style={{
            maxWidth: 450,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={
              <label
                style={{
                  color: "black",
                  fontSize: "23px",
                }}
              >
                Name
              </label>
            }
            name="Name"
          >
            <Input styles={{ backgroundColor: "red" }} />
          </Form.Item>

          <Form.Item
            label={
              <label
                style={{
                  color: "black",
                  fontSize: "23px",
                }}
              >
                Email Address
              </label>
            }
            name="Email Address"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={
              <label
                style={{
                  color: "black",
                  fontSize: "23px",
                }}
              >
                Message
              </label>
            }
            name="Message"
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "gray" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
