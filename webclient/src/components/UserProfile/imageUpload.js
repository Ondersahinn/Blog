import React from 'react';
import { getBase64, beforeUpload } from '../../utils'
import { Upload, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import '../../App.less';

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '' ,
    previewTitle: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    console.log(file.url || file.preview)
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange =async ({ fileList }) => {
    const imageUrl = await getBase64(fileList[0].originFileObj);
    localStorage.setItem('userImageUrl', imageUrl)
     this.setState({ fileList });
      console.log(fileList) 
    }


  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const defaultImage = this.props.imageUrl ? this.props.imageUrl : previewImage ;
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
         <img alt="example" style={{ width: '100%' }} src={defaultImage } />
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
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={defaultImage } />
        </Modal>
      </div>
    );
  }
}
export default PicturesWall;