import React from 'react';
import {searchUserById ,updateUser} from '../../api/service/userService';
import ProfileUser from './profileForm';

class UserProfile extends React.Component {
    state = {
        userInfo:[],
        imageUrl:'',
    }

    async componentDidMount(){
        const userId =JSON.parse(localStorage.getItem('userId'));
        if(userId !==undefined){
            const res = await searchUserById(userId);
            this.setState({userInfo:res.data});
        }
    }

    createDate = async data =>{
        const userId =JSON.parse(localStorage.getItem('userId'));
        const userImage = localStorage.getItem('userImageUrl');
        const {userInfo} = this.state;
        const newUser = {
            email:userInfo.email,
            name:userInfo.name,
            password:userInfo.password,
            surname:userInfo.surname,
            facebook:data.user.facebook,
            instagram:data.user.instagram,
            twitter:data.user.twitter,
            linkedin:data.user.linkedin,
            profileImage:userImage
        }
        if(userId !==undefined){
            const res = await updateUser(userId,newUser);
            console.log(res)
        }
    }

    render() {
        const {userInfo} = this.state;
        return (
            <div style={{ border: '1px solid grey', width: '80%', height: '100%', padding: '10px 10px 0 20px', marginLeft: 'auto', marginRight: 'auto', marginTop: '2%' }}>
                <ProfileUser
                    userInfo = {userInfo}
                    createDate ={data => this.createDate(data)}
                />
            </div>
        );
    }

}

export default (UserProfile);