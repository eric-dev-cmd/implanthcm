import Footer from '@/components/LandingPage/Footer'
import Topmenu from '@/components/LandingPage/Header'
import { Button, Carousel, Col, Divider, List, Row, Tabs } from 'antd'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import NewsList from './News/NewsList'
import './styles.css'
import Tab1Component from './Tabs/Tab1'
import { carouselImages, mockNewsData } from './_mock'

const contentStyle: React.CSSProperties = {
  width: '100%',
  maxHeight: '300px', // Đặt chiều cao tối đa bạn mong muốn
  objectFit: 'cover', // Giữ nguyên tỷ lệ khung hình và cắt bớt
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

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

const containerStyle = {
  height: '400px', // Set your desired height
  width: '600px', // Set your desired width
  margin: 'auto', // Center the container horizontally
  textAlign: 'center', // Center the content inside the container
}

const data = [
  {
    title: 'Bảo vệ: Bài cần dịch số 1',
  },
  {
    title: 'Bảo vệ: Bài cần dịch số 1 2',
  },
  {
    title: 'Bảo vệ: Bài cần dịch số 1 3',
  },
  {
    title: 'Bảo vệ: Bài cần dịch số 1 4',
  },
]

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'BÁC SĨ HSDI',
    children: <Tab1Component />,
  },
  {
    key: '2',
    label: 'BÁC SĨ TRẺ',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'KTV PHỤC HÌNH',
    children: 'Content of Tab Pane 3',
  },
]

const initialCountdownInSeconds = 60 * 60

const CountdownTimer: FC = () => {
  const [countdown, setCountdown] = useState(initialCountdownInSeconds) // Set the initial countdown time in seconds

  const formatTimeUnit = (unit: number): string => {
    return unit < 10 ? `0${unit}` : unit.toString()
  }

  const formatCountdown = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    return ` ${formatTimeUnit(hours)} giờ ${formatTimeUnit(minutes)} phút ${formatTimeUnit(
      remainingSeconds,
    )} giây`
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(prevCountdown => prevCountdown - 1)
      } else {
        clearInterval(timer)
        // Optionally, you can perform an action when the countdown reaches zero
        console.log('Countdown reached zero')
      }
    }, 1000)

    return () => clearInterval(timer) // Cleanup on component unmount
  }, [countdown])

  return (
    <div
      className="centered"
      style={{
        marginTop: '4px',
        border: '1px solid #fe9322',
        padding: '10px',
        boxSizing: 'border-box', // Thêm thuộc tính box-sizing
        width: 'fit-content', // Cài đặt chiều rộng theo nội dung
        display: 'flex', // Thêm display: flex
        alignItems: 'center', // Thêm alignItems: center
      }}>
      {formatCountdown(countdown)}
    </div>
  )
}

const onChange = (key: string) => {
  console.log(key)
}

const Basic: FC = () => {
  return (
    <>
      {/* Header */}
      <Topmenu />
      <Carousel autoplay>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} style={contentStyle} />
          </div>
        ))}
      </Carousel>
      {/* Layout 1 */}
      <div style={{ padding: '0.5% 10%' }}>
        <Divider orientation="left" orientationMargin="0" style={{ borderColor: '#fe9322' }}>
          <span className="fs-120">HÌNH ẢNH HOẠT ĐỘNG HỘI</span>
        </Divider>
        <div className="container">
          {/* Phần hình ảnh bên trái */}
          <div className="image-container">
            <img
              src="https://implanthcm.com/wp-content/uploads/2022/07/bg-1-193182.jpg"
              alt="Event"
            />
            {/* Phần thông tin nằm trên chính giữa ảnh */}
            <div className="information-container-1">
              <h2 className="centered alt-font">Đăng ký dự thi</h2>
              <h1 className="centered title-left">
                Hội nghị Khoa học và Triển lãm Răng Hàm Mặt Quốc tế TP.HCM Lần 1
              </h1>
              <div
                className="centered"
                style={{
                  marginTop: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <CountdownTimer />
              </div>
              <Button style={{ ...buttonStyle, ...hoverStyle, ...activeStyle }}>
                ĐĂNG KÝ NGAY
              </Button>
            </div>
          </div>
          {/* Phần tin tức bên phải */}
          <div>
            <NewsList newsData={mockNewsData} />
          </div>
        </div>
      </div>
      {/* Layout 2 */}
      <div style={{ padding: '0.5% 10%', background: '#dff6fa', marginRight: '4px' }}>
        <Row>
          <Col span={8}>
            <div style={{ background: '#fff' }}>
              <div className="title-devider">
                <p className="title-content">BÀI DỊCH</p>
              </div>
              <List
                style={{
                  padding: '10px',
                }}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col span={1}></Col>

          <Col span={15}>
            <div style={{ background: '#fff' }}>
              <Tabs
                onChange={onChange}
                defaultActiveKey="1"
                size={'large'}
                type="card"
                items={items}
              />
            </div>
          </Col>
        </Row>
      </div>
      {/* Layout 3 */}
      <div style={{ padding: '0.5% 10%', background: '#fff', marginRight: '4px' }}>
        <Row>
          <Col span={24}>
            <Divider orientation="left" orientationMargin="0" style={{ borderColor: '#fe9322' }}>
              <span className="fs-120">HÌNH ẢNH HOẠT ĐỘNG HỘI</span>
            </Divider>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <p>Đang cập nhật</p>
          </Col>
          <Col span={8}>
            <p>Đang cập nhật</p>
          </Col>
          <Col span={8}>
            <p>Đang cập nhật</p>
          </Col>
        </Row>
      </div>
      {/* Layout 4 */}
      <div style={{ padding: '0.5% 10%', background: '#eeeeee', marginRight: '4px' }}>
        <Row style={{ marginTop: '10px' }}>
          <Col span={12}>
            <div className="container-layout-04">
              <h1>
                <span style={{ fontSize: '140%' }}>HỘI NGHỊ HSDI 2019</span>
              </h1>
              <p className="line-clamp-3">
                Trong bối cảnh phát triển không ngừng của chuyên ngành implant nha trên thế giới,
                mang lại một chất lượng điều trị nha khoa ngày càng tốt hơn cho cộng đồng…
              </p>
              <Button style={{ ...buttonStyle, ...hoverStyle, ...activeStyle }}>
                ĐĂNG KÝ NGAY
              </Button>
            </div>
          </Col>
          <Col span={12}>
            {/* Replace "Đang cập nhật" with an image */}
            <img
              src="https://implanthcm.com/wp-content/uploads/2022/07/bg-1-193182.jpg" // Replace with the actual path to your image
              alt="Alternative text"
              className="update-image"
            />
          </Col>
        </Row>
      </div>
      {/* Footer */}
      <Footer />
    </>
  )
}
export default Basic
