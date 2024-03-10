import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { Link } from '@umijs/max'
import { Col, Row } from 'antd'
import { createStyles } from 'antd-style'
import { FormattedMessage } from 'react-intl'
const useStyles = createStyles({
  footer: {
    padding: '30px 30px 20px 30px',
    color: 'white',
    backgroundImage: 'url(https://implanthcm.com/wp-content/uploads/2020/07/footer-bg.png)',
    borderTop: '1px solid #e5e5e5',
    backgroundColor: '#191919',
  },
})
const Footer = () => {
  const items = [
    {
      label: 'Giới thiệu',
      key: 'introduce',
      children: [
        {
          label: <Link to="/">Ban chấp hành</Link>,
        },
        {
          label: <Link to="/">Điều lệ hội</Link>,
        },
        {
          label: <Link to="/">Phương hướng hoạt động</Link>,
        },
        {
          label: <Link to="/">Quyền lợi hội viên</Link>,
        },
      ],
    },
    {
      label: 'Hoạt động hội',
      key: 'introduce',
      children: [
        {
          label: <Link to="/">Ban chấp hành</Link>,
        },
        {
          label: <Link to="/">Điều lệ hội</Link>,
        },
        {
          label: <Link to="/">Phương hướng hoạt động</Link>,
        },
        {
          label: <Link to="/">Quyền lợi hội viên</Link>,
        },
      ],
    },
  ]
  {
    const { styles } = useStyles()
    return (
      <footer id="footer" className={styles.footer}>
        <div className="footer-wrap">
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <img alt="logo" src="/logo-mail.png" />
                </h2>
                <div>
                  <PhoneOutlined />
                  <a href="tel:097.972.5810">097.972.5810</a>
                </div>
                <div>
                  <MailOutlined />
                  <a href="mailto:thuky@implanthcm.com">thuky@implanthcm.com</a>
                </div>
                <div>
                  <EnvironmentOutlined />
                  Địa chỉ: 125 Lê Thị Riêng, P.Bến Thành, Quận 1, Tp. Hồ Chí Minh
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Giới thiệu</h2>
                <div>
                  <a target="_blank " href="http://ant.design">
                    Ant Design
                  </a>
                </div>
                <div>
                  <a target="_blank " href="https://pro.ant.design/">
                    Ant Design Pro
                  </a>
                </div>
                <div>
                  <a href="http://mobile.ant.design">Ant Design Mobile</a>
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="http://motion.ant.design">
                    Ant Motion
                  </a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.motion" />
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Hoạt động hội</h2>
                <div>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/ant-design/ant-design-landing/issues">
                    <FormattedMessage id="app.footer.issues" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener"
                    href={`http://ant.design/docs/spec/work-with-us-cn`}>
                    <FormattedMessage id="app.footer.work-with-us" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener"
                    href={`http://ant.design/docs/spec/work-with-us-cn`}>
                    <FormattedMessage id="app.footer.work-with-us" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener"
                    href={`http://ant.design/docs/spec/work-with-us-cn`}>
                    <FormattedMessage id="app.footer.work-with-us" />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Thống kê</h2>
                <div>
                  <img alt="logo" src="/mvctoday.png" />
                  Số lượng xem hôm nay: 38
                </div>
                <div>
                  <img alt="logo" src="/mvctotalviews.png" />
                  Tổng số lượng xem: 427491
                </div>
                <div>
                  <img alt="logo" src="/mvconline.png" />
                  Người online: 1
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom-bar">
          Made with <span className="heart">❤</span> by
          <a target="_blank" rel="noopener noreferrer" href="https://yuque.com/afx/blog">
            AFX
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
