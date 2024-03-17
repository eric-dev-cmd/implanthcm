import Footer from '@/components/LandingPage/Footer'
import Topmenu from '@/components/LandingPage/Header'
import { PhoneOutlined, WechatOutlined } from '@ant-design/icons'
import { Button, Col, Form, Image, Input, Row } from 'antd'
import { createStyles } from 'antd-style'
import React from 'react'
import Map from './map'

const useStyles = createStyles(() => {
  return {
    contactImage: {
      objectFit: 'cover',
    },
    textImage: {
      color: 'white',
      position: 'absolute',
      width: '100%',
      top: '40%',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    cardItem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
      background: 'white',
      textAlign: 'center',
      p: {
        margin: '10px 0 25px 0',
      },
    },
    form: {
      border: '1px solid #ccc',
      padding: '15px 50px',
      margin: '30px 0',
      textAlign: 'center',
      background: 'white',
    },
    wrapper: {
      zIndex: 9999,
      position: 'relative',
      margin: '-100px 0px 0px 0px',
    },
    icon: {
      fontSize: 35,
      color: 'white',
      background: 'black',
      padding: 9,
      borderRadius: '50%',
      marginBottom: 15,
    },
  }
})

const buttonStyle = {
  background: '#fe9322',
  borderColor: '#fe9322',
  color: 'white',
  transition: 'background 0.3s, color 0.3s',
}

const hoverStyle = {
  background: '#ffaa33', // Change the color for hover
}

const activeStyle = {
  background: '#e5831d', // Change the color for active/clicked
}

const Contact: React.FC = () => {
  const { styles } = useStyles()
  const [form] = Form.useForm()
  const key = 'yourKey'

  return (
    <>
      <Topmenu />
      <section>
        <Image
          className={styles.contactImage}
          width="100%"
          height="400px"
          preview={false}
          src="/bg-contact-page.jpg"
          alt="bg-contact"
        />
        <div className={styles.textImage}>
          <h2>Liên hệ với chúng tôi</h2>
          <p>
            Nếu bạn có bất cứ thắc mắc nào cần hỗ trợ xin vui lòng liên hệ với chúng tôi qua các
            thông tin bên dưới.
          </p>
        </div>
      </section>
      <main style={{ padding: '0.5% 15%', background: '#ccc' }}>
        <div className={styles.wrapper}>
          <Row>
            <Col span={12}>
              <div className={styles.cardItem} style={{ marginRight: 15 }}>
                <PhoneOutlined className={styles.icon} />
                <h3>Hotline hội viên</h3>
                <p>
                  Nếu các Hội viên cần hỗ trợ bất cứ thông tin gì, xin vui lòng liên hệ hotline của
                  chúng tôi.
                </p>
                <Button style={{ ...buttonStyle, ...hoverStyle, ...activeStyle }}>
                  ĐĂNG KÝ NGAY
                </Button>
              </div>
            </Col>

            <Col span={12}>
              <div className={styles.cardItem} style={{ marginLeft: 15 }}>
              <WechatOutlined className={styles.icon} />
                <h3>Liên hệ hỗ trợ</h3>
                <p>
                  Nếu có đóng góp hoặc bất cứ yêu cầu gì xin lien hệ với chúng tôi qua email bên
                  dưới.
                </p>
                <Button style={{ ...buttonStyle, ...hoverStyle, ...activeStyle }}>
                 LIÊN HỆ HỖ TRỢ
                </Button>
              </div>
            </Col>
            <Col span={24} className={styles.form}>
              <h2>Thắc mắc</h2>
              <Form form={form} layout="vertical">
                <Form.Item name="name" label="Tên" required tooltip="Trường bắt buộc nhập">
                  <Input />
                </Form.Item>
                <Form.Item name="email" label="Email" required tooltip="Trường bắt buộc nhập">
                  <Input />
                </Form.Item>
                <Form.Item name="title" label="Tiêu đề">
                  <Input />
                </Form.Item>
                <Form.Item name="description" label="Nội dung">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item>
                  <Button type="primary">Gửi</Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={24}>
              <div style={{ height: '400px', width: '100%' }}>
                <Map
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={
                    <div
                      style={{
                        height: `370px`,
                        margin: `auto`,
                        border: '2px solid black',
                        background: 'white',
                      }}
                    />
                  }
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
            </Col>
          </Row>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default Contact
