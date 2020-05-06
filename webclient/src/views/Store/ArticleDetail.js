import React from 'react';
import { withRouter } from 'react-router-dom';
import { searchArticleById } from '../../api/service/articleService';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { FacebookFilled, InstagramOutlined } from '@ant-design/icons';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';

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

    render() {
        const { data } = this.state
        const contentBlock = htmlToDraft(data.length > 0 ? data[0].description : '');
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        const userImage = require('../../images/user.jpeg')
        return (
            <div>
                <Row>
                    <Col span={12} offset={6}>
                        <h1>{data.length > 0 ? data[0].title : ''}</h1>
                        <Avatar size={64} src={userImage}/>
                        <span> {data.length > 0 ? (data[0].ownerId.name + ' ' + data[0].ownerId.surname) : ''}</span>
                        <span style={{ float: 'right', marginTop: '6vh' }}><InstagramOutlined style={{ color: '093B7F', fontSize: '20px' }} /> <FacebookFilled style={{ color: '093B7F', fontSize: '20px' }} /></span>
                        <Editor
                            editorState={editorState}
                            readOnly
                            toolbarHidden
                            toolbarClassName="rdw-storybook--toolbar"
                            wrapperClassName="rdw-storybook-wrapper"
                            editorClassName="studentCardDescription"
                        />
                    </Col>
                </Row>

            </div>
        )
    }
}

export default withRouter(ArticleDetail);