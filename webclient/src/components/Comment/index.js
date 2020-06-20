import React from "react";
import { withRouter } from "react-router-dom";
import CommentList from "./commentList";
import {
  createComment,
  searchAllComments,
} from "../../api/service/commentService";
import { message } from "antd";
import { formatDate } from "../../utils";
import { searchUserById } from "../../api/service/userService";
import CommentForm from "./commentForm";

class Comment extends React.Component {
  state = { user: [], comment: [] };

  async componentDidMount() {
    this.getUser();
    this.getComment();
  }

  handeleSumbit = async (data) => {
    const userId = localStorage.getItem('userId');
    const commentLenght = data.length;
      if (userId !== null) {
        if(data !== undefined && data !== '' && commentLenght > 10){
          const userId = JSON.parse(localStorage.getItem("userId"));
          const createDateTime = formatDate(new Date());
          const commentData = {
            content: data,
            ownerId: userId,
            articleId: this.props.articleId,
            createDateTime: createDateTime,
          };
          const res = await createComment(commentData);
          if (res.data !== undefined) {
            message.success("Yazınız kayıt edildi");
            this.getComment();
          }
        }
        else {
          message.error('Yorum karekter sayısı eksik');
        }
      }
      else {
        message.error("Kaydetme başarısız");
        this.props.history.push('/login')
      }
    
  };

  getComment = async () => {
    if (this.props.articleId !== null && this.state.comment.length === 0) {
      const comments = await searchAllComments();
      if (comments.data !== undefined) {
        const data = comments.data.map((data) => {
          data.key = data._id;
          return data;
        });
        const comment = data.filter(
          (c) => c.articleId._id === this.props.articleId
        );
        this.setState({ comment });
      }
    }
  };

  getUser = async () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    if (userId !== null) {
      const user = await searchUserById(userId);
      this.setState({ user: user.data });
    }
  };

  render() {
    const { comment, user } = this.state;
    return (
      <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <CommentForm
          handeleSumbit={(data) => this.handeleSumbit(data)}
          user={user}
        />
        <CommentList comment={comment} />
      </div>
    );
  }
}

export default withRouter(Comment);
