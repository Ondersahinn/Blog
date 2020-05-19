import React , { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import CommentList from './commentList'
import {createComment, searchAllComments} from '../../api/service/commentService'
import { message } from 'antd';
import {formatDate} from '../../utils'
import {searchUserById} from '../../api/service/userService'
import CommentForm from './commentForm';

const Comment = props => {
    const [user, setUser] = useState([]);
    const [comment, setComment] = useState([]);

    const handeleSumbit = async (data) => {
        try {
            if (data !== undefined) {
                const userId = JSON.parse(localStorage.getItem('userId'));
                const createDateTime = formatDate(new Date());
                const commentData = {
                    content: data,
                    ownerId: userId,
                    articleId: props.articleId,
                    createDateTime: createDateTime,
                }
                const res = await createComment(commentData);
                if(res.data !== undefined){
                    message.success('Yazınız kayıt edildi')
                    localStorage.setItem('tabKey','2')
                }
            }
        }
        catch (error) {
            console.log('Kaydetme başarısız')
        }
    }

    useEffect(() => {
        if(user.length === 0){
            getUser();
            getComment();
        }
    });

    const getComment = async () =>{
        if(props.articleId !== null && comment.length === 0){
            const comments  = await searchAllComments();
            const comment = comments.data.filter(c => c.articleId._id === props.articleId)
            setComment(comment);
        }
    }

    const getUser = async () =>{
        const userId = JSON.parse(localStorage.getItem('userId'));
        if(userId !== null ){
            const user  = await searchUserById(userId)
            setUser(user.data);
        }
    }

    return (
        <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
            <CommentForm handeleSumbit={data => handeleSumbit(data)} user = {user} />
            <CommentList comment ={comment}/>
        </div>
    );

}

export default withRouter(Comment);