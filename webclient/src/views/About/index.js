import React from "react";
import { Row, Col } from "antd";
import { Typography, Form, Button, Input } from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterCircleFilled,
  LinkedinOutlined,
} from "@ant-design/icons";
const { Title, Paragraph, Text } = Typography;

const About = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div style={{ marginTop: "10vh" }}>
      <Row justify="center">
        <Col span={12} offset={6}>
          <Title style={{ fontSize: "5em" }}>Hakkımda</Title>
        </Col>
      </Row>
      <Row
        style={{ backgroundColor: "#003363", height: "20vh", color: "white" }}
        justify="center"
      >
        <Col span={16}>
          <Paragraph style={{ paddingTop: "5vh", color: "white" }}>
            Merhabalar, İzmir İTO vakfı Süleyman Taştekin TL Web Programlama
            alanından mezun olduktan sonra Fırat Üniversitesi Yazılım
            Mühendisliği Bölümüne başladım. Temmuz 2020 itibari ile mezun
            olacağım. Eğitim hayatım boyunca C#, Python, Java gibi birçok dil
            öğrendim ve projeler geliştirdim. Yapay zeka, veri bilimi, görüntü
            işleme ve yazılım test gibi önemli dersleri başarıyla tamamladım.
            Lisans projemi Node js, Mongoose ve React js gibi yeni teknolojileri
            kullanarak geliştirdim.
          </Paragraph>
        </Col>
      </Row>
      <Row style={{ borderBottom: "1px solid grey" }}>
        <span style={{ marginTop: "2vh" }}>
          <a
            style={{ color: "rgb(0, 51, 99)", fontSize: "3em" }}
            target="_blank"
            href="#"
          >
            <InstagramOutlined />
          </a>
          <a
            style={{ color: "rgb(0, 51, 99)", fontSize: "3em" }}
            target="_blank"
            href="#"
          >
            <FacebookFilled />
          </a>
          <a
            style={{ color: "rgb(0, 51, 99)", fontSize: "3em" }}
            target="_blank"
            href="#"
          >
            <TwitterCircleFilled />
          </a>
          <a
            style={{ color: "rgb(0, 51, 99)", fontSize: "3em" }}
            target="_blank"
            href="#"
          >
            <LinkedinOutlined />
          </a>
        </span>
      </Row>
      <Row gutter={[8, 8]} style={{ margin: 0 }}>
        <Col span={12}>
          <Title>İletişim</Title>
          <Form
            onFinish={onFinish}
            name="Iletisim"
            initialValues={{
              layout: "vertical",
            }}
          >
            <Form.Item
              name={["contact", "email"]}
              label="Introduction"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["contact", "subject"]} label="Introduction">
              <Input placeholder="Konu" />
            </Form.Item>
            <Form.Item name={["contact", "message"]} label="Introduction">
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <Paragraph strong={true}>
            <Title>Konumumuz</Title>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.7435646791228!2d39.199766915760584!3d38.67776106746486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076c043f0ec934d%3A0x97da54a9bdfebc9a!2zRsSxcmF0IMOcbml2ZXJzaXRlc2k!5e0!3m2!1str!2str!4v1589986342800!5m2!1str!2str"
              width="600"
              height="450"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};
export default About;
