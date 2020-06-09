import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { columns } from "../../constans/UserTable";
import { searchAllArticles } from "../../api/service/articleService";

class ArticleList extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const ressult = await searchAllArticles();
    const userId = JSON.parse(localStorage.getItem("userId"));
    if (ressult.data.length > 0) {
      const data = ressult.data.map((data) => {
        data.key = data._id;
        return data;
      });
      const articleList = data.filter(
        (userData) => userData.ownerId._id === userId
      );
      this.setState({ data: articleList });
    } else {
      this.setState({ data: [] });
    }
  }

  render() {
    const { data } = this.state;
    return <Table columns={columns} dataSource={data} />;
  }
}

export default ArticleList;
