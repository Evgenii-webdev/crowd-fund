import React from "react";
import {
  List,
  Avatar,
  Typography,
  Button,
  Modal,
  Row,
  Col,
  Comment,
  Collapse,
  Card,
  Icon,
  Tooltip,
  Form,
  Input,
  Select
} from "antd";
import moment from "moment";
import "../../assets/css/comments.css";
import { FormComponentProps } from "antd/lib/form";
const Panel = Collapse.Panel;
const Search = Input.Search;
const { Option } = Select;
const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
interface projectItem {
  image: string;
  title: string;
  took: string;
  description: string;
  suggestion: string;
  button: string;
  ques_count: string;
  aws_count: string;
}
interface messageInfoItem {
  project_id: number;
  href: string;
  name: string;
  date: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}
const projectLists: projectItem[] = [
  {
    image: "https://brite.us/img/news/early-stage-conference-2019.png",
    title: "r/popular",
    took: "May 9-10 2019 in Orlando, FL",
    description:
      "The best posts on Brite for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.",
    suggestion: "We will have a booth and present on the stage.",
    button: "Event Information",
    ques_count: "9",
    aws_count: "22"
  }
];
const channelLists = [
  "r/popular.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];
const commentsData: messageInfoItem[] = [];
for (let i = 0; i < 23; i++) {
  const item = {
    project_id: i,
    href: "http://ant.design",
    name: "wen",
    date: "two days ago",
    title: `WHAT SETS BRITE APART?`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  };
  commentsData.push(item);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const repliesData = [
  {
    actions: [],
    author: "Han Solo",
    avatar: <Avatar>U</Avatar>,
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, "days")
          .format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>
          {moment()
            .subtract(1, "days")
            .fromNow()}
        </span>
      </Tooltip>
    )
  },
  {
    actions: [],
    author: "Han Solo",
    avatar: <Avatar>U</Avatar>,
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, "days")
          .format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>
          {moment()
            .subtract(2, "days")
            .fromNow()}
        </span>
      </Tooltip>
    )
  }
];

function handleChange(value: string) {
  console.log(`selected ${value}`);
}
interface ICommentFromProps extends FormComponentProps {}
interface IState {
  loading: boolean;
  visible: boolean;
  postVisible: boolean;
}
export class Comments extends React.Component<ICommentFromProps, IState> {
  constructor(props: Readonly<ICommentFromProps>) {
    super(props);
  }
  public readonly state = {
    loading: false,
    visible: false,
    postVisible: false
  };
  private showModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      visible: true
    });
  };
  private createPost = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      postVisible: true
    });
  };
  private handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  handleOk = () => {
    this.setState({ loading: false, visible: false, postVisible: false });
  };

  handleCancel = () => {
    this.setState({ visible: false, postVisible: false });
  };
  render() {
    const { postVisible, visible, loading } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
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
    const questionsData = [
      {
        actions: [<span onClick={this.showModal}>Reply to</span>],
        author: "Wen",
        avatar: <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />,
        content: <p>WHAT SETS BRITE APART?</p>,
        datetime: (
          <Tooltip
            title={moment()
              .subtract(1, "days")
              .format("YYYY-MM-DD HH:mm:ss")}
          >
            <span>
              {moment()
                .subtract(1, "days")
                .fromNow()}
            </span>
          </Tooltip>
        )
      }
    ];
    return (
      <>
        <div className="container">
          <Row
            gutter={24}
            type="flex"
            justify="space-between"
            className="row"
            align="top"
            style={{ margin: "auto" }}
          >
            <Col
              offset={4}
              sm={24}
              md={16}
              style={{ marginTop: "18px", float: "left" }}
            >
              <Paragraph
                className="title-container"
                style={{ fontSize: "60px" }}
              >
                <span>Comments</span>
              </Paragraph>
            </Col>
          </Row>
        </div>
        <section className="subject">
          <Row
            gutter={24}
            type="flex"
            justify="space-between"
            className="row"
            align="top"
            style={{ margin: "auto" }}
          >
            <Col sm={24} md={16} style={{ marginTop: "18px", float: "left" }}>
              <Modal
                visible={visible}
                title="Reply to this question"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="back" onClick={this.handleCancel}>
                    cancel
                  </Button>,
                  <Button type="primary" onClick={this.handleOk}>
                    submit
                  </Button>
                ]}
              >
                <Form
                  {...formItemLayout}
                  onSubmit={this.handleSubmit}
                  className="reply-form"
                >
                  <Form.Item>
                    <TextArea placeholder="" rows={4} />
                  </Form.Item>
                </Form>
              </Modal>
              <Modal
                visible={postVisible}
                title="As a question about this offering"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="back" onClick={this.handleCancel}>
                    cancel
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    loading={loading}
                    onClick={this.handleOk}
                  >
                    submit
                  </Button>
                ]}
              >
                <p>
                  <Form
                    {...formItemLayout}
                    onSubmit={this.handleSubmit}
                    className="question-form"
                  >
                    <Form.Item style={{ width: "100% !important;" }}>
                      <TextArea placeholder="" rows={4} />
                    </Form.Item>
                  </Form>
                </p>
              </Modal>
              <Col sm={24} md={12} className="no-padding">
                <Select
                  defaultValue="lucy"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  className="filter-view"
                >
                  <Option value="jack">Latest</Option>
                  <Option value="lucy">Oldest</Option>
                </Select>
              </Col>
              <Col sm={24} md={12} className="no-padding">
                <Search
                  className="search-view"
                  placeholder="input search text"
                  onSearch={value => console.log(value)}
                  enterButton
                />
              </Col>
            </Col>
            <Col sm={24} md={16} style={{ marginTop: "18px" }}>
              <Collapse defaultActiveKey={["1"]}>
                {commentsData.map((data, key) => {
                  return (
                    <Panel
                      showArrow={false}
                      className="comments-list-item"
                      header={
                        <Row
                          gutter={24}
                          type="flex"
                          justify="space-between"
                          className="row"
                          align="top"
                          style={{ margin: "auto" }}
                        >
                          <Col sm={24} md={2}>
                            <Avatar
                              style={{ backgroundColor: "#87d068" }}
                              icon="user"
                            />
                          </Col>

                          <Col sm={24} md={22} style={{ display: "grid" }}>
                            <List
                              className="question-list"
                              header=""
                              itemLayout="horizontal"
                              dataSource={questionsData}
                              renderItem={item => (
                                <li>
                                  <Comment
                                    className="replies-view"
                                    actions={item.actions}
                                    author={item.author}
                                    content={item.content}
                                    datetime={item.datetime}
                                  />
                                </li>
                              )}
                            />
                          </Col>
                        </Row>
                      }
                      key={key.toString()}
                    >
                      <List
                        className="comment-list"
                        header={`${repliesData.length} replies`}
                        itemLayout="horizontal"
                        dataSource={repliesData}
                        renderItem={item => (
                          <li>
                            <Comment
                              className="replies-view"
                              actions={item.actions}
                              author={item.author}
                              avatar={item.avatar}
                              content={item.content}
                              datetime={item.datetime}
                            />
                          </li>
                        )}
                      />
                    </Panel>
                  );
                })}
              </Collapse>
            </Col>
            <Col sm={24} md={8} style={{ position: "sticky", top: "60px" }}>
              {projectLists.map((data: projectItem) => (
                <Col sm={24} md={24}>
                  <Card
                    className="card"
                    style={{ marginTop: "1rem" }}
                    cover={<img src={data.image} className="card-photo" />}
                  >
                    <Title level={4} className="card-title">
                      {data.title}
                    </Title>
                    <Text className="card-desc">{data.description}</Text>
                    <Text className="card-desc">
                      <Icon
                        className="comment-icon"
                        type="aliwangwang"
                        style={{ marginLeft: "0px" }}
                      />
                      Questions : {data.ques_count}
                    </Text>
                    <Text className="card-desc">
                      <Icon
                        className="comment-icon"
                        type="issues-close"
                        style={{ marginLeft: "0px" }}
                      />
                      Answers : {data.aws_count}
                    </Text>
                    <Paragraph style={{ width: "100%" }}>
                      <Button className="card-btn" onClick={this.createPost}>
                        Create Post
                      </Button>
                    </Paragraph>
                  </Card>
                </Col>
              ))}
              <Col sm={24} md={24}>
                <List
                  size="small"
                  header={
                    <div
                      className="channel-header"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}
                    >
                      Projects
                    </div>
                  }
                  bordered
                  dataSource={channelLists}
                  renderItem={item => (
                    <List.Item className="channel-list-item">{item}</List.Item>
                  )}
                  style={{
                    textAlign: "left",
                    backgroundColor: "white"
                  }}
                />
              </Col>
            </Col>
          </Row>
        </section>
      </>
    );
  }
}
