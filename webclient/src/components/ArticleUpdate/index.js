import React from 'react';
import { Table, Result } from 'antd';
import { columns } from '../../constans/articleUpdate'
import { searchAllArticles, updateArticle } from '../../api/service/articleService'
import ArticleCard from '../ArticleCreator/ArticleForm';
import { formatDate } from '../../utils';

class ArticleUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            taskId: '',
            root: '',
            title: '',
            description: '',
            createDate: '',
        };
    }

    async componentDidMount() {
        const ressult = await searchAllArticles();
        const userId = JSON.parse(localStorage.getItem('userId'));
        const data = ressult.data.map(data =>{
                data.key =data._id
                return data;
        })
        const articleList = data.filter(userData => userData.ownerId._id === userId);

        this.setState({ data:articleList });
    }


    render() {
        const { data } = this.state;
        return (
            <Table
                className="components-table-demo-nested"
                columns={columns}
                expandable={{ expandedRowRender }}
                dataSource={data}
            />
        );
    }

}


function expandedRowRender(rowData) {

    const updateArticleF = async (taskId, data) => {
        if (data.title.length !== 0 || data.subject.length !== 0) {
            articleUpdate(taskId, data);
        }
    }

    const articleUpdate = async (taskId,rowData) => {
        const createDateTime = formatDate(new Date());
        const userId = JSON.parse(localStorage.getItem('userId'))
        let data = rowData;
        data.ownerId = userId;
        data.createDateTime = createDateTime;
        const res = await updateArticle(taskId, data);
        if(res.data !== undefined){
            message.success('Yazınız güncellendi edildi')
        }
        else {
            message.success('Güncelleme başarısız.')
        }
    }

    return (
        <div>
            <ArticleCard
                title={rowData.title}
                subject={rowData.subject}
                description={rowData.description}
                submitButtonClick={data => updateArticleF(rowData._id, data)}
            />
        </div>
    );
};

export default ArticleUpdate;