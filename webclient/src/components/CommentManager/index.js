import React from 'react';
import DeleteModal from './DeleteModal';
import { DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { message } from "antd";
import { Table, Button } from 'antd';
import { columns } from '../../constans/Comment';
import {
  searchAllComments,
  deleteComment,
} from '../../api/service/commentService';

class CommentManager extends React.Component {
  state = {
    data: [],
    visible: false,
    selectedComment: [],
  };

  async componentDidMount() {
    await this.commenList();
  }

  handleClickDelete = async (list) => {
    let { data } = this.state;
    data = data.map((comment) => {
      if (comment._id === list._id) {
        this.setState({ visible: true, selectedComment: comment });
      }
    });
  };

  commenList = async () => {
    const ressult = await searchAllComments();
    this.addDeleteButton(ressult.data);
    const userId = JSON.parse(localStorage.getItem('userId'));
    if (ressult.data.length > 0) {
      let data = ressult.data.map((data) => {
        data.key = data._id;
        return data;
      });
      data = data.filter((userData) => userData.articleId.ownerId === userId);

      data.forEach((createTable) => {
        createTable.username =
          createTable.ownerId.name + '  ' + createTable.ownerId.surname;
        createTable.articleTitle = createTable.articleId.title;
      });
      this.setState({ data });
    } else {
      this.setState({ data: [] });
    }
  };

  handleOk = async () => {
    const { selectedComment } = this.state;
    const res = await deleteComment(selectedComment._id);
    if (res.data !== undefined) {
      message.success("Yorum başarıyla silinmiştir.");
    }else {
      message.error("Bir hata oluştu daha sonra tekrar deneyin");
    }
    await this.commenList();
    this.setState({ visible: false });
    };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  addDeleteButton = (list) => {
    return list.map((listElement) => {
      const newList = listElement;
      newList.delete = (
        <Button
          type='primary'
          shape='circle'
          icon={<DeleteOutlined />}
          onClick={() => {
            this.handleClickDelete(listElement);
          }}
        />
      );
      return newList;
    });
  };

  render() {
    const { data, visible , selectedComment} = this.state;
    return (
      <div>
        <DeleteModal
          visible={visible}
          handleCancel={() => this.handleCancel()}
          handleOk={() => this.handleOk()}
          selectedComment = {selectedComment}
        />
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default CommentManager;
