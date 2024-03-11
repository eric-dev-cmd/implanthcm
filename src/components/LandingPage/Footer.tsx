import {
  DoubleRightOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons'
import { Link } from '@umijs/max'
import { Col, Row } from 'antd'
import { createStyles } from 'antd-style'
const useStyles =createStyles(({ css, responsive }) => ({
  footer: {
    color: 'white',
    backgroundImage: 'url(https://implanthcm.com/wp-content/uploads/2020/07/footer-bg.png)',
    borderTop: '1px solid #e5e5e5',
    backgroundColor: '#191919',
  },
  footerBlock: {
    paddingRight: '10px',
    h2: css`
      ${responsive.tablet} {
        margin-top: 10px;
      }
      ${responsive.mobile} {
        margin-top: 10px;
      }
    `,
  },
  footerWarp: {
    maxWidth: '1250px',
    padding: '30px 10px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  footerItem: {
    display: 'flex',
    gap: '10px',
    textcolor: 'white',
    padding: '5px 0px',
    fontWeight: '400',
    fontSize: '16px',
    a: {
      color: 'white',
    },
    span: {
      color: '#ff8a00',
      fontSize: 12,
    },
    p:{
      margin:0
    }
  },
  footerContractInfo: {
    padding: 5,
    fontSize: 14,
    border: '1px solid #ff8a00',
    borderRadius: 25,
  },
  absoluteFooter: {
    textAlign: 'center',
    background: 'rgb(254, 147, 34)',
    color: 'rgba(255, 255, 255, 0.5)',
    padding: '15px 10px ',
    fontSize: 14,
  },
}));
const Footer = () => {
  const { styles } = useStyles()
  const items = [
    {
      label: 'Giới thiệu',
      key: 'introduce',
      children: [
        {
          key: 1,
          label: <Link to="/">Ban chấp hành</Link>,
        },
        {
          key: 2,
          label: <Link to="/">Điều lệ hội</Link>,
        },
        {
          key: 3,
          label: <Link to="/">Phương hướng hoạt động</Link>,
        },
        {
          key: 4,
          label: <Link to="/">Quyền lợi hội viên</Link>,
        },
      ],
    },
    {
      label: 'Hoạt động hội',
      key: 'activities',
      children: [
        {
          key: 5,
          label: <Link to="/">Hội nghị - Huấn luyện</Link>,
        },
        {
          key: 6,
          label: <Link to="/">Hoạt động xã hội</Link>,
        },
        {
          key: 7,
          label: <Link to="/">Sinh hoạt chuyên môn</Link>,
        },
        {
          key: 8,
          label: <Link to="/">Nha khoa cộng đồng</Link>,
        },
      ],
    },
  ]
  {
    return (
      <footer id="footer" className={styles.footer}>
        <div className={styles.footerWarp}>
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className={styles.footerBlock}>
                <h2>
                  <img alt="logo" src="/logo-mail.png" />
                </h2>
                <div className={styles.footerItem}>
                  <PhoneOutlined className={styles.footerContractInfo} />
                  <a href="tel:097.972.5810">097.972.5810</a>
                </div>
                <div className={styles.footerItem}>
                  <MailOutlined className={styles.footerContractInfo} />
                  <a href="mailto:thuky@implanthcm.com">thuky@implanthcm.com</a>
                </div>
                <div className={styles.footerItem}>
                  <div>
                    <EnvironmentOutlined className={styles.footerContractInfo} />
                  </div>
                  <p> Địa chỉ: 125 Lê Thị Riêng, P.Bến Thành, Quận 1, Tp. Hồ Chí Minh </p>
                </div>
              </div>
            </Col>
            {items.map(item => {
              return (
                <Col md={6} sm={24} xs={24} key={item.key}>
                  <div className={styles.footerBlock}>
                    <h2>{item.label}</h2>
                    {item.children &&
                      item.children.map(child => {
                        return (
                          <div key={child.key} className={styles.footerItem}>
                            <DoubleRightOutlined />
                            {child.label}
                          </div>
                        )
                      })}
                  </div>
                </Col>
              )
            })}
            <Col md={6} sm={24} xs={24}>
              <div className={styles.footerBlock}>
                <h2>Thống kê</h2>
                <div className={styles.footerItem}>
                  <img alt="logo" src="/mvctoday.png" />
                  Số lượng xem hôm nay: 38
                </div>
                <div className={styles.footerItem}>
                  <img alt="logo" src="/mvctotalviews.png" />
                  Tổng số lượng xem: 427491
                </div>
                <div className={styles.footerItem}>
                  <img alt="logo" src="/mvconline.png" />
                  Người online: 1
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={` ${styles.absoluteFooter}`}>
          <div>
            © Copyright 2024 Bản quyền nội dung thuộc về
            <strong> Hội Cấy Ghép Nha Khoa TP. HCM</strong>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
