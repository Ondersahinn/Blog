import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import SelectSubject from './SubjectSelect';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import { layout, validateMessages } from '../../constans/Article';
import { formatDate } from '../../utils';
import '../../App.less';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    const contentBlock = htmlToDraft(props.description || '');
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);
    this.state = {
      title: this.props.title || '',
      subject: this.props.subject || [],
      description: editorState || '',
      selectSubject: []
    };
  }


  onFinish = (values) => {
    this.setState({
      title: values.article.title,
    });
    this.createData();
  };

  onEditorStateChange = (description) => {
    this.setState({
      description,
    });
  };

  createData = async () => {
    const createDateTime = formatDate(new Date());
    const { title, description, selectSubject } = this.state;
    const ownerId = JSON.parse(localStorage.getItem('userId'));
    const descriptionToHtml = draftToHtml(
      convertToRaw(description.getCurrentContent())
    );
    if(selectSubject.length <= 0 || descriptionToHtml.length <= 100){
      message.error("Description veya subject boş geçilemez");
    }else{
      const data = {
        subject: selectSubject,
        title,
        description: descriptionToHtml,
        ownerId,
        createDateTime,
      };
      this.props.submitButtonClick(data);
    }
    
  };

  handleChange(value) {
   this.setState({selectSubject:value})
  }



  render() {
    const { description} = this.state;
    return (
      <div>
        <Form
          {...layout}
          name='nest-messages'
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['article', 'title']}
            label='Title'
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['article', 'subject']}
            label='Konu'
          >
          <SelectSubject handleChange={(value) =>this.handleChange(value)} />
          </Form.Item>
          <Form.Item name={['article', 'introduction']} label='Description'>
            <Editor
              editorState={description}
              wrapperClassName='demo-wrapper'
              toolbarStyle={{ width: '98%', margin: '0 auto' }}
              editorClassName='taskCardDiscription'
              onEditorStateChange={this.onEditorStateChange}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type='primary' htmlType='sumbit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
        {/* <Notification  message={'message'} status={status} open={open}/> */}
      </div>
    );
  }
}

export default ArticleForm;
