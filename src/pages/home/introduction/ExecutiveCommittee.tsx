import Footer from '@/components/LandingPage/Footer'
import Topmenu from '@/components/LandingPage/Header'
import { Table, Tag } from 'antd'

// Hội cấy ghép nha khoa
const columns = [
  {
    title: 'Họ Và Tên',
    dataIndex: 'name',
    key: 'name',
    width: '50%', // Đặt kích thước của cột là 50% của bảng
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Vị Trí',
    dataIndex: 'position',
    key: 'position',
    width: '50%', // Đặt kích thước của cột là 50% của bảng
    sorter: (a, b) => a.name.length - b.name.length,

    render: (_, { position }) => (
      <>
        <Tag color={'volcano'} key={position}>
          {position.toUpperCase()}
        </Tag>
      </>
    ),
  },
]

const members01 = [
  { name: 'BS Võ Văn Tự Hiến', position: 'Chủ tịch' },
  { name: 'BS.CKII. Huỳnh Đại Hải', position: 'Phó chủ tịch' },
  { name: 'BS.CKII. Nguyễn Đức Minh', position: 'Phó chủ tịch' },
  { name: 'TS. Trần Ngọc Quảng Phi', position: 'Phó chủ tịch' },
  { name: 'TS. Trần Hùng Lâm', position: 'Tổng thư ký' },
  { name: 'ThS. Hồ Nguyễn Thanh Chơn', position: 'Ủy viên' },
  { name: 'BS. Nguyễn Chí Công', position: 'Ủy viên' },
  { name: 'ThS. Hà Thị Bảo Đan', position: 'Ủy viên' },
  { name: 'BS. Hồ Hạc Bảo Khánh', position: 'Ủy viên' },
  { name: 'TS. Nguyễn Thị Bích Lý', position: 'Ủy viên' },
  { name: 'BS. Thân Trọng Nguyên', position: 'Ủy viên' },
  { name: 'ThS. Hồ Tân Tân', position: 'Ủy viên' },
  { name: 'ThS. Trần Ngọc Phương Thảo', position: 'Ủy viên' },
  { name: 'BS. Trần Thế Thọ', position: 'Ủy viên' },
  { name: 'TS. Đoàn Minh Trí', position: 'Ủy viên' },
  { name: 'BS Nguyễn Văn Tý', position: 'Ủy viên' },
  { name: 'ThS. Hoàng Trọng Hùng', position: 'Ủy viên' },
  { name: 'TS. Nguyễn Hiếu Tùng', position: 'Ủy viên' },
  { name: 'CN. Nguyễn Hùng Vũ', position: 'Ủy viên' },
]

const members02 = [
  { name: 'BS Võ Văn Tự Hiến', position: 'Chủ tịch' },
  { name: 'BS CKII Huỳnh Đại Hải', position: 'Phó chủ tịch' },
  { name: 'PGS,TS Lê Đức Lánh', position: 'Phó chủ tịch' },
  { name: 'ThS Trần Ngọc Quảng Phi', position: 'Phó chủ tịch' },
  { name: 'TS Trần Hùng Lâm', position: 'Tổng thư ký' },
  { name: 'BS Nguyễn Chí Công', position: 'Ủy viên' },
  { name: 'BS Lê Văn Điềm', position: 'Ủy viên' },
  { name: 'BS Phạm Thị Hồng Hảo', position: 'Ủy viên' },
  { name: 'BS Nguyễn Thị Nguyên Hương', position: 'Ủy viên' },
  { name: 'BS Lương Văn Tô My', position: 'Ủy viên' },
  { name: 'ThS Nguyễn Văn Khoa', position: 'Ủy viên' },
  { name: 'BS Phạm Hoài Nam', position: 'Ủy viên' },
  { name: 'ThS Hồ Tân Tân', position: 'Ủy viên' },
  { name: 'ThS Trần Ngọc Phương Thảo', position: 'Ủy viên' },
  { name: 'BS Trần Thế Thọ', position: 'Ủy viên' },
  { name: 'ThS Đoàn Minh Trí', position: 'Ủy viên' },
  { name: 'BS Nguyễn Văn Tý', position: 'Ủy viên' },
  { name: 'ThS Hoàng Trọng Hùng', position: 'Ủy viên' },
  { name: 'CN Nguyễn Hùng Vũ', position: 'Ủy viên' },
  { name: 'BS Vũ Khắc Đoan', position: 'Ủy viên' },
  { name: 'BS Nguyễn La Trí Dũng', position: 'Ủy viên' },
]

const ExecutiveCommitteeComponent = () => {
  return (
    <div style={{ lineHeight: '1.9' }}>
      <Topmenu />
      <main style={{ padding: '0.5% 10%' }}>
        <div style={{ marginTop: '18px' }}>
          <div className="title-devider">
            <b className="title-content">NHIỆM KỲ II (2016-2020)</b>
          </div>
          <Table
            columns={columns}
            dataSource={members01}
            pagination={false} // Tắt phân trang nếu không cần
            bordered // Hiển thị border cho bảng
          />
          <div style={{ marginTop: '18px' }}></div>
          <div className="title-devider">
            <b className="title-content">NHIỆM KỲ I (2010-2015)</b>
          </div>
          <Table
            columns={columns}
            dataSource={members02}
            pagination={false} // Tắt phân trang nếu không cần
            bordered // Hiển thị border cho bảng
          />
        </div>
      </main>
      <div style={{ marginBottom: '44px' }}></div>
      <Footer />
    </div>
  )
}

export default ExecutiveCommitteeComponent
