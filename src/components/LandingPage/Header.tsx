import {
  HomeOutlined,
  InfoCircleOutlined,
  MailOutlined,
  MenuOutlined,
  PhoneOutlined,
  ReadOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { Link } from '@umijs/max'
import { Button, Drawer, Image, Menu } from 'antd'
import { createStyles } from 'antd-style'
import { useState } from 'react'

const useStyles = createStyles(({ css, responsive }) => ({
  contact: {
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fe9322',
  },
  linkTag: {
    textDecoration: 'none',
    color: 'white',
    fontSize: 13,
  },
  line: {
    backgroundColor: 'white',
    width: 1,
    height: '100%',
    marginLeft: 7,
    marginRight: 7,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    padding: 15,
  },
  menubtn: css`
    margin-top: 20px;
    display: none;
    ${responsive.tablet} {
      display: 'block';
    }
    ${responsive.mobile} {
      position: absolute;
      right: 20px;
    }
  `,
  bigmenu: css`
    display: flex;
    justify-content: center;
    align-items: center;
    ${responsive.mobile} {
      display: 'none';
    }
  `,
  contactInfo: css`
    display: flex;
    alignitems: center;
    ${responsive.mobile} {
      display: none;
    }
  `,
  loginComponent: css`
    display: flex;
    alignitems: center;
    ${responsive.mobile} {
      justify-content: center;
      width: 100%;
    }
  `,
}))

const Topmenu = () => {
  const { styles } = useStyles()
  const [current, setCurrent] = useState('mail')
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const handleClick = (e: any) => {
    setCurrent(e.key)
  }

  const items = [
    {
      label: <Link to="/">Trang chủ</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: 'Giới thiệu',
      key: 'introduce',
      icon: <InfoCircleOutlined />,
      children: [
        {
          type: 'group',
          label: <Link to="/gioi-thieu/hoi-cay-ghep-nha-khoa/">Hội Cấy Ghép Nha Khoa</Link>,
        },
        {
          type: 'group',
          label: <Link to="/gioi-thieu/ban-chap-hanh/">Ban Chấp Hành</Link>,
        },
        {
          type: 'group',
          label: <Link to="/gioi-thieu/dieu-le-hoi/">Điều Lệ Hội</Link>,
        },
        {
          type: 'group',
          label: <Link to="/gioi-thieu/phuong-huong-hoat-dong">Phương Hướng Hoạt Động</Link>,
        },
      ],
    },
    {
      label: 'Hội viên',
      key: 'member',
      icon: <TeamOutlined />,
      children: [
        {
          type: 'group',
          label: <Link to="/user/register">Đăng ký hội viên</Link>,
        },
        {
          type: 'group',
          label: <Link to="/hoi-vien/quyen-loi-hoi-vien">Quyền lợi hội viên</Link>,
        },
      ],
    },
    {
      label: 'Tin tức',
      key: 'news',
      icon: <ReadOutlined />,
    },
    {
      label: 'Hoạt động hội',
      key: 'activities',
      icon: <TeamOutlined />,
      children: [
        {
          type: 'group',
          label: 'Đăng ký hội viên',
        },
        {
          type: 'group',
          label: 'Quyền lợi hội viên',
        },
      ],
    },
    {
      label: 'Góc chuyên môn',
      key: 'specialize',
      icon: <TeamOutlined />,
      children: [
        {
          type: 'group',
          label: 'Đăng ký hội viên',
        },
        {
          type: 'group',
          label: 'Quyền lợi hội viên',
        },
      ],
    },
    {
      label: 'Góc bệnh nhân',
      key: 'patient',
      icon: <ReadOutlined />,
    },
    {
      label: 'Liên hệ',
      key: 'contact',
      icon: <ReadOutlined />,
    },
  ]

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className={styles.contact} style={{ padding: '0.5% 10%' }}>
        <div className={styles.contactInfo}>
          <MailOutlined style={{ color: 'white', marginRight: 5 }} />
          <a href="mailto:thuky@implanthcm.com" className={styles.linkTag}>
            thuky@implanthcm.com
          </a>
          <div className={styles.line}></div>
          <PhoneOutlined style={{ color: 'white', marginLeft: 5, marginRight: 5 }} />
          <a href="tel:097.972.5810" className={styles.linkTag}>
            097.972.5810
          </a>
        </div>
        <div className={styles.loginComponent}>
          <Link to="/" className={styles.linkTag}>
            <span style={{ fontSize: 10, fontWeight: 'bold' }}>ĐĂNG KÝ HỘI VIÊN</span>
          </Link>
          <div className={styles.line}></div>
          <Link to="/" className={styles.linkTag}>
            Đăng nhập
          </Link>
        </div>
      </div>
      <div className={styles.logo}>
        <a href="/">
          <Image src="/logo.png" alt="logo" />
        </a>
      </div>
      <div className="main">
        <Button
          className={styles.menubtn}
          type="primary"
          shape="circle"
          icon={<MenuOutlined />}
          onClick={showDrawer}></Button>
        <Drawer
          title={<Image src="/logo.png" alt="logo" />}
          placement="right"
          onClose={onClose}
          visible={visible}>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
          />
        </Drawer>
      </div>
      <Menu
        className={styles.bigmenu}
        onClick={handleClick}
        overflowedIndicator={<MenuOutlined />}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  )
}

export default Topmenu
