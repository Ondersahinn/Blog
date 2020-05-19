import React from 'react';
import { Row, Col } from 'antd';
import '../../../App.less';

const style = { background: '#0092ff', padding: '8px 0' };
const footerLogo = require('../../../images/footerlogo.png')
const Footer = () => {

    return (
        <div style={{ position: 'relative', bottom: '0', width: '99.9%', padding: '15px', backgroundColor: '#000' }}>
            <Row justify="center" style={{width:'90%',marginLeft:'5%',borderBottom:'1px solid grey'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                    <h3 style={{ color: 'white' }}>Sosyal Blog Platformunu Keşfedin</h3>
                    <p style={{ color: 'white' }}> Kelimelerin önemli olduğu platforma hoş geldin. Söz uçar yazı kalır anılarını gezilerini, tecrubelerini paylaş.                 </p>
                </Col>
                <Col className="gutter-row" span={8}>
                    <h3 style={{ color: 'white' }}>Sosyal Blog Platformunu Keşfedin</h3>
                    <p style={{ color: 'white' }}>Kelimelerin önemli olduğu platforma hoş geldin. Söz uçar yazı kalır anılarını gezilerini, tecrubelerini paylaş.                 </p>
                </Col>
                <Col className="gutter-row" span={8}>
                    <h3 style={{ color: 'white' }}>Sosyal Blog Platformunu Keşfedin</h3>
                    <p style={{ color: 'white' }}>Kelimelerin önemli olduğu platforma hoş geldin. Söz uçar yazı kalır anılarını gezilerini, tecrubelerini paylaş.                 </p>
                </Col>
            </Row>
            <div style={{width:'90%',marginLeft:'5%'}}>
                <img alt="Footer Logo" src={footerLogo} />
                <span style={{float:'right',color:'white',marginTop:'10vh'}}>
                    About Help
                </span>
            </div>
        </div >
    );
}

export default Footer;