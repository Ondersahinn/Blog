import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
const { Meta } = Card;

const ArticleCard = props => {
    const { description, title, subject, createDateTime } = props;

    const contentBlock = htmlToDraft(description);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    const currentContent = editorState.getCurrentContent().getPlainText('');
    const descriptionFormat =
    currentContent.length > 67 ? `${currentContent.substring(0, 67)} ...` : currentContent;

    return (
        <div>
            <Card
                hoverable
                style={{ width: 240, marginLeft: '10%', float: "left" }}
                cover={<img alt="example" src="https://www.egepostasi.com/haber_resim/izmir-korfezi-nde-yelken-soleni-168748.jpg" />}>

                <Meta title={title} />
                <div style={{ width: '100%', height: 1, marginTop: '10%', borderBottom: '1px solid grey' }}></div>

                <p>{descriptionFormat}</p>

                <span style={{ float: 'left' }}>{subject}</span>
                <span style={{ float: 'right' }}><ClockCircleOutlined />   {createDateTime}</span>
            </Card>
        </div>
    );
}

export default ArticleCard;

