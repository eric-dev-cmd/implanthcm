import Footer from '@/components/LandingPage/Footer'
import Topmenu from '@/components/LandingPage/Header'
import { Divider } from 'antd'
import './styles.css'

// Điều lệ hội
const MembershipBenefitsComponent = () => {
  return (
    <div style={{ lineHeight: '1.9' }}>
      <Topmenu />
      <main style={{ padding: '0.5% 15%' }}>
        <div style={{ marginTop: '18px', lineHeight: '36px' }}>
          <div style={{ paddingBottom: '4px' }}>
            Hội viên Hội Cấy ghép Nha khoa Tp.HCM có những quyền lợi như sau:
          </div>
          <p>
            <ol>
              <li>1. Được tham gia biểu quyết, bàn luận mọi công việc của hội trong đại hội</li>
              <li>2. Được tham gia bầu cử, ứng cử ban chấp hành hội.</li>
              <li>
                3. Được tham gia báo cáo các đề tài nghiên cứu khoa học của mình trong các buổi sinh
                hoạt khoa học kỹ thuật của hội; được giới thiệu đăng các bài viết và các công trình
                nghiên cứu của mình vào các tạp chí khoa học trong hệ thống y học; được tổ chức hội
                nhận xét về các công trình, công tác của mình; khi cần thiết, được chọn lọc để đề
                nghị khen thưởng; được chứng nhận và giới thiệu về tư cách đạo đức và chuyên môn
                trong các hoạt động nghề nghiệp.
              </li>
              <li>
                4. Được cập nhật kiến thức về Cấy ghép Nha khoa thường xuyên qua các khóa huấn luyện
                với học phí ưu đãi cho Hội viên; giao lưu trao đổi kinh nghiệm chuyên môn với các
                đồng nghiệp và chuyên gia trên khắp thế giới thông qua các hội nghị chuyên ngành.
              </li>
              <li>
                5. Được download cái tài liệu chuyên môn (bài giảng, ca lâm sàng) trên website của
                Hội.
              </li>
              <li>6. Được yêu cầu tài liệu chuyên môn trong các tạp chí Implant.</li>
              <li>7. Được Hội bảo vệ các quyền lợi chính đáng trước pháp luật và công luận.</li>
              <li>8. Được giới thiệu trên website của Hội.</li>
              <li>9. Được xin ra khỏi Hội.</li>
            </ol>
          </p>
        </div>
        <Divider dashed />
      </main>
      <div style={{ marginBottom: '44px' }}></div>
      <Footer />
    </div>
  )
}

export default MembershipBenefitsComponent
