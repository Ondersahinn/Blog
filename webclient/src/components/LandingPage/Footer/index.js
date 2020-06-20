import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Row, Col } from 'antd';
import '../../../App.less';

const style = { background: '#0092ff', padding: '8px 0' };
const footerLogo = require('../../../images/footerlogo.png');
const Footer = () => {
  return (
    <div
      style={{
        position: 'relative',
        bottom: '0',
        width: '99.9%',
        padding: '15px',
        backgroundColor: '#000',
      }}
    >
      <Row
        justify='center'
        style={{
          width: '90%',
          marginLeft: '5%',
          borderBottom: '1px solid grey',
        }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className='gutter-row' span={8}>
          <h3 style={{ color: 'white' }}>Sosyal Blog Platformunu Keşfedin</h3>
          <p style={{ color: 'white' }}>
            Kelimelerin önemli olduğu platforma hoş geldin. Söz uçar yazı kalır
            anılarını gezilerini, tecrubelerini paylaş.
          </p>
        </Col>
        <Col className='gutter-row' span={8}>
          <h3 style={{ color: 'white' }}>Gezi ve Eğlence</h3>
          <p style={{ color: 'white' }}>
            Gezdiğiniz yerleri eğlenceli fotoğraflarınız yazıya döküp
            anılarınızı paylaşın.
          </p>
        </Col>
        <Col className='gutter-row' span={8}>
          <h3 style={{ color: 'white' }}>Deneyim ve Arkadaşlık</h3>
          <p style={{ color: 'white' }}>
            Otostop gibi güzel deneyimlerinizi paylaşıp insanlara yardımcı olun.
            Yorum ve mesajlarla arkadaşlık kurun.
          </p>
        </Col>
      </Row>
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <img alt='Footer Logo' src={footerLogo} />
        <Link to='/about'>
        <span style={{ float: 'right', color: 'white', marginTop: '10vh' }}>
          About
        </span>
            </Link>
        
      </div>
    </div>
  );
};

export default withRouter(Footer);
