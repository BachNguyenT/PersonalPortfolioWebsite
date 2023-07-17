import { React} from "react";
import "./Contact.scss";
import { Button, Form, Input } from "antd";

const Contact = () => {
  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="Contact" >
      <div className="Contact__Description">
        <h1 className="Contact__Description__Title">Let's Connect!</h1>
        <p className="Contact__Description__Description">
          Now that you've known a lot about me, I am thrilled to connect with
          you!
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
            maxWidth: 570,
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
                  fontSize: "23px",
                  color: "rgba(54, 54, 54, 0.836)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Name
              </label>
            }
            name="Name"
          >
            <Input
              style={{
                backgroundColor: "rgba(0, 0, 255, 0.075)",
                border: "hidden",
                boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Form.Item>

          <Form.Item
            label={
              <label
                style={{
                  fontSize: "23px",
                  color: "rgba(54, 54, 54, 0.836)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Email Address
              </label>
            }
            name="Email Address"
          >
            <Input
              style={{
                backgroundColor: "rgba(0, 0, 255, 0.075)",
                border: "hidden",
                boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Form.Item>

          <Form.Item
            label={
              <label
                style={{
                  fontSize: "23px",
                  color: "rgba(54, 54, 54, 0.836)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Message
              </label>
            }
            name="Message"
          >
            {/* <Input
              style={{
                backgroundColor: "rgba(0, 0, 255, 0.075)",
                border: "hidden",
                boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
              }}
              rows={4}
            /> */}
            <TextArea
              rows={5}
              style={{
                backgroundColor: "rgba(0, 0, 255, 0.075)",
                border: "hidden",
                boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
              }}
            />
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
              style={{ backgroundColor: "blue" }}
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
