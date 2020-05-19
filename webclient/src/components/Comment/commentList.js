import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const CommentList = props => {

  return (
    props.comment.map(cm => {
      return (
        <Comment
          author={<a>{cm ? cm.ownerId.name + " " + cm.ownerId.surname : "Han Solo"}</a>}
          avatar={
            <Avatar
              src={cm ? cm.ownerId.profileImage :
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
              alt={cm ? cm.ownerId.name + " " + cm.ownerId.surname : "Han Solo"}
            />
          }
          content={
            <p>
              {cm ? cm.content:''}
          </p>
          }
          datetime={
            <Tooltip title="Create Date Time">
              <span>{cm.createDateTime}</span>
            </Tooltip>
          }
        />
      );
    })

  );
}

export default CommentList;