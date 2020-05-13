import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../ArticleCard';
import { Row, Col } from 'antd';
import { searchAllArticles } from '../../api/service/articleService';


class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
        };
    }

    async componentDidMount() {
        const response = await searchAllArticles();
        const { data } = response;
        this.setState({
            articles: data || [],
        });
    }

    render() {
        const { loading, articles } = this.state;
        const currentArticles = articles.map(article => {
            return (
                <Col className="gutter-row" span={6}>
                    <Link to={`/articles/${article._id}`} key={`Link${article._id}`}>
                        <ArticleCard
                            title={article.title}
                            subject={article.subject}
                            description={article.description}
                            createDateTime={article.createDateTime}>
                        </ArticleCard>
                    </Link>
                </Col>
            );
        });

        if (loading)
            return <div>loading</div>


        return (
            <div >
                <React.Fragment key={currentArticles.length}>
                    <Row  style={{ marginLeft:0, marginRight:0}}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {currentArticles.length > 0 ? (
                            currentArticles
                        ) : (
                                <p>No course Found</p>
                            )}
                    </Row>
                </React.Fragment>

            </div>
        )
    }
}

export default Store;