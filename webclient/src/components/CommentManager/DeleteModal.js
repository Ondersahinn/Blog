import React from 'react';
import { Modal, Button } from 'antd';

class DeleteModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.props.handleOk();

  };

  handleCancel = (data) => {
   this.props.handleCancel(data);
  };

  render() {
      const {selectedComment} = this.props;
    return (
      <div>
        <Modal
          title="Delete"
          okType="danger"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
            <h3>{selectedComment.username}</h3>
          <p style={{fontStyle:'italic'}}>{selectedComment.content}</p>
          <p>Yorumunu silmek istediğinize emin misiniz ?</p>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;
