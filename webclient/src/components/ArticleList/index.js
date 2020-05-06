import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { columns } from '../../constans/UserTable'
import { searchAllArticles } from '../../api/service/articleService'



class ArticleList extends React.Component {
    state = {
        data: [],
    }

    async componentDidMount() {
        const ressult = await searchAllArticles();
        const userId = JSON.parse(localStorage.getItem('userId'));
        if (ressult.data.length > 0) {
            const articleList = ressult.data.filter(userData => userData.ownerId._id === userId);
            this.setState({ data: articleList });
        }
        else{
            this.setState({ data: [] });
        }
    }

    render() {
        const { data } = this.state;
        return <Table columns={columns} dataSource={data} />;
    }
}


export default ArticleList;