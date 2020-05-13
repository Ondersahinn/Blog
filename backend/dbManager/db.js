var mongoose = require('mongoose');
var Article = require('./model/articleModel')
var User = require('./model/userModel')
var fs = require('fs');


module.exports = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/SocialBlogTest', { useMongoClient: true,  useCreateIndex: true , useNewUrlParser: true});

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
      });
      mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
      });

    mongoose.Promise = global.Promise;
}

// var imgPath = './views/user.jpg';

// const user = new User();
// user.name='İbrahim';
// user.surname='Sahin';
// user.email='ibrahim@gmail.com';
// user.password='12345';
// user.gender='male';
// user.profileImage.data=fs.readFileSync(imgPath);
// user.profileImage.connectType='image/png';
// user.save();

// const article = new Article();
// article.subject = 'Yazılım';
// article.title = 'Yapay zeka';
// article.description = 'Yapay zeka alanındaki gelişmeler';
// article.createDateTime = '11-18-2019';
// article.ownerId= user;
// article.save();

// var customer1 = new Customer({
//     name:'Önder Şahin',
//     city:'Ankara'
// })
// customer1.save((error)=>{
//     if(error){
//         throw error
//     }
//     console.log('customer saved')
// })

// Customer.find({}//burası boş ise her datayı getirir buraya parametre verilirse ıba göre geklir name:'Önder', (error, data) => {
//     if (error) {
//         throw error
//     }
//     console.log(data)
// })

// Customer.findById(('5e73893e252f833794c4e5d8'), (error, data) => {
//     if (error) {
//         throw error
//     }
//     console.log(data)
// })

//Anakaralıları getir
// Customer.find({}, (error, data) => {
//     if (error) {
//         throw error
//     }
//     console.log(data)
// }).where('city').equals('Ankara');