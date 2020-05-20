import React from 'react';
import { getBase64, beforeUpload } from '../../utils'
import { Upload, Modal, Avatar } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import '../../App.less';


class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange = async ({ fileList }) => {
    if (fileList.length > 0) {
      const imageUrl = await getBase64(fileList[0].originFileObj);
      localStorage.setItem('userImageUrl', imageUrl);
    }
    this.setState({ fileList });
  }


  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const defaultImage = this.props.imageUrl ? this.props.imageUrl : previewImage;
    const uploadButton = (
      <div style={{ marginTop: '2vh' }}>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix" >
        <Avatar size={128} src={defaultImage} />
        <div  style={{ marginTop: '2vh', marginLeft:'1vw' }}>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={true}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={this.handleChange}
            beforeUpload={beforeUpload}
            onPreview={this.handlePreview}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
        </div>

        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          {previewImage ? <img alt="example" style={{ width: '100%' }} src={previewImage} /> : uploadButton}
        </Modal>
      </div>
    );
  }
}
export default PicturesWall;