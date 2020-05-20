import React from 'react';
import { withRouter } from 'react-router-dom';
import ArticleForm from './ArticleForm'
import {createArticle} from '../../api/service/articleService'
import { message } from 'antd';

const ArticleCreator = props => {

    const createData = async (data) => {
        try {
            if (data !== undefined) {
                const res = await createArticle(data);
                if(res.data !== undefined){
                    message.success('Yazınız kayıt edildi')
                    localStorage.setItem('tabKey','2')
                }
            }
        }
        catch (error) {
            message.error('Yazınız kayıt edildi');
        }
    }

    return (
        <div style={{ border: '1px solid grey', width: '80%', height: '100%', padding: '10px 10px 0 20px', marginLeft: 'auto', marginRight: 'auto', marginTop: '2%' }}>
            <ArticleForm
                submitButtonClick={data => createData(data)}
            />
        </div>
    );

}

export default withRouter(ArticleCreator);