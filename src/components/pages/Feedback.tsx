import React from "react";
import { Form, Input, Icon, Button, Row, Col } from "antd";
import { FormComponentProps } from "antd/lib/form";
import "antd/dist/antd.css";
import "../../assets/css/feedback.css";
const { TextArea } = Input;

interface IFeedbackProps extends FormComponentProps {}

interface IFeedbackState {
  confirmDirty: boolean;
}

class FeedbackForm extends React.Component<IFeedbackProps, IFeedbackState> {
  constructor(props: Readonly<IFeedbackProps>) {
    super(props);
  }
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  private handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  private handleConfirmBlur = (e: React.FocusEvent<HTMLElement>) => {
    const value = (e.target as HTMLInputElement).value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  private compareToFirstPassword = (
    rule: any,
    value: any,
    callback: Function
  ) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Passwords don't match");
    } else {
      callback();
    }
  };

  private validateToNextPassword = (
    rule: any,
    value: any,
    callback: Function
  ) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const stlyedContent = {
      marginTop: 40
    };
    return (
      <Row style={stlyedContent}>
        <Col span={16} offset={2}>
          <Form
            {...formItemLayout}
            onSubmit={this.handleSubmit}
            className="login-form"
          >
            <Form.Item label="Name">
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Please input your name!" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Your Name"
                />
              )}
            </Form.Item>
            <Form.Item label="E-mail">
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email Address"
                />
              )}
            </Form.Item>
            <Form.Item label="Phone">
              {getFieldDecorator("phone", {
                rules: [
                  {
                    type: "number",
                    message: "The input is not valid number"
                  },

                  {
                    required: true,
                    whitespace: true,
                    message: "Please input your phone!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="(407) 123-4567"
                />
              )}
            </Form.Item>
            <Form.Item label="Feedback">
              {getFieldDecorator("feedback", {
                rules: [
                  { required: true, message: "Please input your feedback!" }
                ]
              })(<TextArea placeholder="Your Feedback" rows={4} />)}
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Send Feedback
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export let Feedback = Form.create({ name: "feedback" })(FeedbackForm);

// {getFieldDecorator(`names[${k}]`, {
//   validateTrigger: ["onChange", "onBlur"],
//   initialValue: "lucy",
//   rules: [
//     {
//       required: true,
//       whitespace: true,
//       message: "Please input passenger's name or delete this field."
//     }
//   ]
// })(
//   <Select>
//     <Option value="jack">Jack</Option>
//     <Option value="lucy">Lucy</Option>
//     <Option value="Yiminghe">yiminghe</Option>
//   </Select>
// )}
