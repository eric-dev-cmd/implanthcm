import { Alert, Col, Row, Space } from 'antd'
import React from 'react'
import './tab1.css'

const BlogItem: React.FC = () => (
  <Col span={6}>
    <a rel="dofollow" href="chitiettintuc.html" className="blog-image align-top">
      <img
        src="https://implanthcm.com/wp-content/uploads/2022/07/bg-1-193182.jpg"
        alt="Liệu pháp thay thế răng tức thì trong ổ răng ngay sau khi nhổ: Một nghiên cứu tiến cứu có nhóm chứng về ảnh hưởng của các implant sửa trục dưới mào xương có bệ chuyển bẻ góc."
        className="img-fluid w-100 lazyload rounded"
        style={{ paddingTop: '10px' }}
      />
    </a>
  </Col>
)

const BlogContent: React.FC = () => (
  <Col span={18}>
    <div className="blog-title-wraper">
      <h3 className="blog-title fs-18">
        <a
          rel="dofollow"
          href="chitiettintuc.html"
          className="text-body text-decoration-none line-clamp-2">
          Liệu pháp thay thế răng tức thì trong ổ răng ngay sau khi nhổ: Một nghiên cứu tiến cứu có
          nhóm chứng về ảnh hưởng của các implant sửa trục dưới mào xương có bệ chuyển bẻ góc.
        </a>
      </h3>
      <p className="blog-description titlecom-3 line-clamp-3">
        Liệu pháp thay thế răng tức thì (ITRT), đặt implant và làm phục hình tạm trong các ổ răng
        ngay sau khi nhổ, được chứng minh là đạt được kết quả tốt cho...
      </p>
      <div className="blog-info d-inline">
        <p className="tacgia">
          Người dịch: <b>BS Nguyễn Thị Minh Hiền</b> | Hiệu đính: <b>BS Nguyễn Văn Tý </b> | Lượt
          xem: <b>656</b>
        </p>
      </div>
    </div>
  </Col>
)

const Divider: React.FC = () => <div style={{ margin: '10px 0' }}></div>

const Tab1Component: React.FC = () => (
  <div style={{ padding: '0px 20px 15px 20px' }}>
    <Space direction="vertical" style={{ width: '100%' }}>
      <Alert
        message="Danh mục này chỉ dành cho Hội Viên. Xin vui lòng đăng ký để xem tiếp."
        type="error"
      />
    </Space>

    <Divider />

    {/* Phần nội dung tin tức */}
    <div className="blog-list-style-5">
      <Row>
        <div className="blog-item">
          <BlogItem />
          <BlogContent />
        </div>
      </Row>
    </div>
  </div>
)

export default Tab1Component
