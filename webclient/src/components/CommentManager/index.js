import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { columns } from "../../constans/UserTable";
import { searchAllComments } from "../../api/service/commentService";

class CommentManager extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const ressult = await searchAllComments();
    const userId = JSON.parse(localStorage.getItem("userId"));
    if (ressult.data.length > 0) {
      let data = ressult.data.map((data) => {
        data.key = data._id;
        return data;
      });
        data = data.filter(
        (userData) => userData.articleId.ownerId === userId
      );
      data = data.map(createTable => {
        createTable.username = createTable.ownerId.name + createTable.ownerId.surname 
        createTable.articleSubject =  createTable.articleId.subject
        createTable.comment = createTable.content
        createTable.createDate = createTable.createDateTime
    });// For Each ile yeni bir data oluştur.
      this.setState({ data });
    } else {
      this.setState({ data: [] });
    }
  }

  render() {
    const { data } = this.state;
    return <Table columns={columns} dataSource={data} />;
  }
}

export default CommentManager;
