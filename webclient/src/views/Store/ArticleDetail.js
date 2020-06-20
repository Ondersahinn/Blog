import React from "react";
import { withRouter } from "react-router-dom";
import { searchArticleById } from "../../api/service/articleService";
import { Row, Col } from "antd";
import { Avatar } from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterCircleFilled,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from "draft-js";
import Footer from "../../components/LandingPage/Footer";
import Comment from "../../components/Comment";
import htmlToDraft from "html-to-draftjs";

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: undefined,
      data: [],
    };
  }

  async componentDidMount() {
    const { id: articleId } = this.props.match.params;
    const response = await searchArticleById(articleId);
    const { data } = response;
    this.setState({
      data: data || [],
    });
  }

  userProfile = (data) => {
    return (
      <div style={{ marginBottom: "6vh", marginTop: "2vh" }} >
        <h1>{data.title}</h1>
        <Avatar size={64} src={data.ownerId.profileImage} />
        <span
          style={{ paddingLeft: "1vw", fontWeight: "bold", fontSize: "20px" }}
        >
          {data.ownerId.name + " " + data.ownerId.surname}
        </span>
        <span style={{ float: "right", marginTop: "6vh" }}>
          <a
            style={{ color: "#000000", fontSize: "22px" }}
            target="_blank"
            href={data.ownerId.instagram}
          >
            <InstagramOutlined />
          </a>
          <a
            style={{ color: "#000000", fontSize: "22px" }}
            target="_blank"
            href={data.ownerId.facebook}
          >
            <FacebookFilled />
          </a>
          <a
            style={{ color: "#000000", fontSize: "22px" }}
            target="_blank"
            href={data.ownerId.twitter}
          >
            <TwitterCircleFilled />
          </a>
          <a
            style={{ color: "#000000", fontSize: "22px" }}
            target="_blank"
            href={data.ownerId.linkedin}
          >
            <LinkedinOutlined />
          </a>
        </span>
      </div>
    );
  };

  render() {
    const { data } = this.state;
    const { id: articleId } = this.props.match.params;
    const contentBlock = htmlToDraft(
      data.length > 0 ? data[0].description : ""
    );
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);

    return (
      <div>
        <Row >
          <Col span={16} offset={4} >
            {data.length > 0 ? this.userProfile(data[0]) : ""}
            <Editor
            
              editorState={editorState}
              readOnly
              toolbarHidden
              toolbarClassName="rdw-storybook--toolbar"
              wrapperClassName="rdw-storybook-wrapper"
              editorClassName="studentCardDescription"
            />
            {data.length > 0
              ? data[0].subject.map((subj) => {
                  return (
                    <span
                      style={{ backgroundColor: "#f1f1f1", padding: "0.7%", marginLeft:'1%' }}
                    >
                      {subj}
                    </span>
                  );
                })
              : ""}
          </Col>
        </Row>
        <Comment articleId={articleId} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(ArticleDetail);
