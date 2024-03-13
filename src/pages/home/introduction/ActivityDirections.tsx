import { Chapter } from '@/components/Chapter'
import Footer from '@/components/LandingPage/Footer'
import Topmenu from '@/components/LandingPage/Header'
import { Section } from '@/components/Section'
import { Divider } from 'antd'
import './styles.css'

// Điều lệ hội
const AssociationBylawsComponent = () => {
  return (
    <div style={{ lineHeight: '1.9' }}>
      <Topmenu />
      <main style={{ padding: '0.5% 15%' }}>
        <div style={{ marginTop: '18px' }}>
          <div>PHƯƠNG HƯỚNG HOẠT ĐỘNG CỦA HỘI CẤY GHÉP NHA KHOA TP HCM</div>
          <Chapter title="1. CÔNG TÁC TỔ CHỨC – HỘI VIÊN" content=" ">
            <Section>
              <p>
                <li>Củng cố tổ chức Hội</li>
                <li>Phát triển hội viên</li>
                <li>Phát thẻ hội viên</li>
              </p>
            </Section>
          </Chapter>
          <Chapter title="2. CÔNG TÁC ĐÀO TẠO – KHOA HỌC CÔNG NGHỆ" content=" ">
            <Section>
              <p>
                <li>
                  Tổ chức các lớp đào tạo liên tục để cập nhật kiến thức và kỹ năng cho Hội viên.
                  Phối hợp với các cơ sở đào tạo có thẩm quyền để cấp các chứng chỉ đào tạo liên tục
                  có giá trị trong hành nghề.
                </li>
                <li>
                  Phối hợp với Hội Implant Nha khoa thế giới (ICOI), Hội Implant Nha khoa các nước,
                  các trường đaị học có uy tín trên thế giới… tổ chức các khóa huấn luyện nâng cao
                  giúp ngành implant Nha khoa Việt nam theo kịp những tiến bộ trên thế giới và giúp
                  các Hội viên có các bằng cấp được thế giới công nhận
                </li>
                <li>Tổ chức hội nghị Cấy ghép Nha khoa Việt Nam định kỳ mỗi năm</li>
                <li>Biên soạn và phát hành các ấn phẩm implant nha khoa</li>
              </p>
            </Section>
          </Chapter>
          <Chapter title="3. CÔNG TÁC THÔNG TIN TRUYỀN THÔNG" content=" ">
            <Section>
              <p>
                <li>Xây dựng trang web của Hội Cấy Ghép Nha Nhoa TP HCM</li>
                <li>Xây dựng diễn đàn để các Hội viên trao đổi kinh nghiệm</li>
                <li>Thư viện điện tử Implant nha khoa</li>
              </p>
            </Section>
          </Chapter>
          <Chapter title="4. CÔNG TÁC ĐỐI NGOẠI – HỢP TÁC QUỐC TẾ" content=" ">
            <Section>
              <p>
                <li>
                  Tổ chức cho Hội viên tham dự các hội nghị implant Nha khoa của thế giới và khu vực
                </li>
                <li>
                  Phối hợp với ICOI tổ chức hội nghị imlant nha khoa của khu vực Châu Á – Thái Bình
                  Dương tại Việt nam (2012)
                </li>
                <li>
                  Khuyến khích, tạo điều kiện để các BS Việt nam tham gia viết bài cho các tạp chí
                  Implant có uy tín trên thế giới, tham gia poster hoặc báo cáo khoa học tại các hội
                  nghị trên thế giới.
                </li>
              </p>
            </Section>
          </Chapter>
          <Chapter title="5. CÔNG TÁC XÃ HỘI – TƯ VẤN PHẢN BIỆN" content=" ">
            <Section>
              <p>
                <li>Hoạt động xã hội từ thiện trong ngành nha khoa </li>
                <li>Tổ chức các hoạt động giao lưu để kết nối tình đoàn kết Hội viên trong Hội </li>
                <li>Hoạt động tư vấn phản biện trong chuyên ngành Implant nha khoa </li>
              </p>
            </Section>
          </Chapter>
          <Divider dashed />
          <div>CHƯƠNG TRÌNH HOẠT ĐỘNG NĂM 2011</div>
          <p>
            <ol>
              <li>1. Làm thẻ hội viên</li>
              <li>2. Xây dựng website và diễn đàn</li>
              <li>3. Hoàn tất khóa Implant căn bản 1</li>
              <li>4. Liên kết với trường để cấp chứng chỉ cho học viên khóa implant căn bản</li>
              <li>5. Tổ chức Hội nghị Cấy ghép Nha khoa lần thứ nhất (06/2011)</li>
              <li>6. Biên soạn quyển thuật ngữ chuyên ngành Cấy ghép Nha khoa</li>
              <li>7. Tổ chức khóa huấn luyện cho KTV Phục hình trên Implant đợt 1 (2 ngày)</li>
              <li>8. Tổ chức khóa huấn luyện Implant căn bản 2 (4 đợt)</li>
              <li>9. Chuẩn bị Tổ chức Hội nghị ICOI-AP ngày 9-12/03/2012 tại TP. HCM</li>
              <li>
                10. Tổ chức cho hội viên tham dự Hội nghị Implant thế giới tại Hàn quốc 10/2011
              </li>
            </ol>
          </p>
        </div>
      </main>
      <div style={{ marginBottom: '44px' }}></div>
      <Footer />
    </div>
  )
}

export default AssociationBylawsComponent
