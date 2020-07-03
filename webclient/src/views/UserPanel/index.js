import React from 'react';
import { Tabs } from 'antd';
import ArticleList from '../../components/ArticleList';
import CommentList from '../../components/CommentManager';
import ArticleCreator from '../../components/ArticleCreator';
import ArticleUpdate from '../../components/ArticleUpdate'
import UserProfile from '../../components/UserProfile';

const { TabPane } = Tabs;

const UserPanel = () => {
    const tabs = JSON.parse(localStorage.getItem('tabKey'))
    const tabKey = tabs !== undefined ? tabs : '1'
    return (
        <div >
            <Tabs tabBarStyle={{marginTop:'4vh'}} tabPosition="left" defaultActiveKey={tabKey}	type="line">
                <TabPane  tab="Create" key="1">
                    <ArticleCreator />
                </TabPane>
                <TabPane tab="List" key="2">
                    <ArticleList />
                </TabPane>
                <TabPane tab="Update" key="3">
                    <ArticleUpdate />
                </TabPane>
                <TabPane tab="Comment List" key="4">
                    <CommentList />
                </TabPane>
                <TabPane tab="Profile" key="5">
                    <UserProfile/>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default UserPanel;

