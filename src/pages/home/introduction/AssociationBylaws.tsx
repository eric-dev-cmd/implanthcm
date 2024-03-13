import Footer from '@/components/LandingPage/Footer'
import Topmenu from '@/components/LandingPage/Header'
import './styles.css'

// Component for Chapter
const Chapter = ({ title, content, children }) => {
  return (
    <div className="chapter">
      <h3>{title}</h3>
      <h4>{content}</h4>
      {children}
    </div>
  )
}

// Component for Section
const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h4>{title}</h4>
      {children}
    </div>
  )
}
// Điều lệ hội
const AssociationBylawsComponent = () => {
  return (
    <div style={{ lineHeight: '1.9' }}>
      <Topmenu />
      <main style={{ padding: '0.5% 15%' }}>
        <div style={{ marginTop: '18px' }}>
          <Chapter
            title="CHƯƠNG I"
            content="TÊN GỌI – TÔN CHỉ – MỤC ĐÍCH – LĨNH VỰC VÀ PHẠM VI HOẠT ĐỘNG CỦA HỘI">
            <Section title="Điều 1">
              <p>Hội lấy tên là HỘI CẤY GHÉP NHA KHOA THÀNH PHỐ HỒ CHÍ MINH</p>
              <p>Tên giao dịch quốc tế: Ho Chi Minh City Society of DentaL Implantology</p>
              <p>Tên viết tắt tiến Anh: HSDI</p>
            </Section>
            <Section title="Điều 2">
              <p>
                Hội Cấy ghép Nha khoa Thành Phố Hồ Chí Minh là một tổ chức xã hội nghề nghiệp trong
                ngành Nha Khoa, tập hợp những người làm công tác chuyên môn nghiệp vụ và nghiên cứu
                khoa học trong lĩnh vực Cấy ghép Nha khoa, tự nguyện tham gia .
              </p>
            </Section>
            <Section title="Điều 3">
              <p>
                Hội Cấy ghép Nha khoa Thành Phố Hồ Chí Minh, thành viên của Hội Y học TP HCM, liên
                kết khoa học với Hội Răng Hàm Mặt TP HCM, hoạt động theo luật pháp Việt nam, theo
                điều lệ của Hội và điều lệ của Hội Y hoc TP HCM
              </p>
              <p>Trụ sở của Hội đặt tại số 263-265 Trần Hưng Đạo, Quận 1, Thành Phố Hồ Chí Minh</p>
              <p>
                Hội có tư cách pháp nhân, có con dấu và tài khoản riêng ở Ngân hàng theo quy định
                của Hội Y hoc Tp. Hồ Chí Minh.
              </p>
            </Section>
            <Section title="Điều 4">
              <p>Mục đích của Hội Cấy ghép Nha kHoa Thành Phố Hồ Chí Minh</p>
              <p>
                4.1. Tập hợp và tạo điều kiện để xây dựng một đội ngũ thực hành cấy ghép Nha khoa có
                trình độ chuyên môn ngày càng nâng cao, hành nghề theo đúng chuẩn mực đạo đức của
                người thầy thuốc Việt nam
              </p>
              <p>4.2. Bảo vệ danh dự và các quyền lợi chính đáng, hợp pháp của hội viên</p>
              <p>
                4.3. Tạo điều kiện và tận dụng các cơ hội hợp tác đa phương trong lĩnh vực Y học và
                hợp tác quốc tế
              </p>
              <p>4.4. Góp phần phát triển ngành Cấy ghép Nha khoa tiên tiến tại Việt Nam</p>
            </Section>
          </Chapter>

          <Chapter title="CHƯƠNG II" content="NHIỆM VỤ – QUYỀN HẠN">
            <Section title="Điều 5">
              <p>Nhiệm vụ của Hội</p>
              <p>
                5.1. Hỗ trợ hội viên không ngừng nâng cao kiến thức, trình độ chuyên môn nghiệp vụ,
                giữ gìn và phát huy đạo đức nghề nghiệp, góp phần bảo vệ và nâng cao uy tín của
                người thầy thuốc chuyên khoa.
              </p>
              <p>
                5.2. Thực hiện chức năng tham vấn, phản biện và giám định xã hội về khoa học kỹ
                thuật và pháp lý đối với các hoạt động có liên quan đến chuyên ngành Implant Nha
                khoa.
              </p>
              <p>
                5.3. Tạo điều kiện cho Hội viên tiếp cận với những thành tựu mới của ngành Implant
                Nha Khoa thông qua việc tổ chức các khóa huấn luyện, hợp tác quốc tế và hội nghị
                chuyên ngành.
              </p>
              <p>
                5.4. Tranh thủ các mối quan hệ quốc tế trong lĩnh vực Cấy ghép Nha khoa; hội nhập
                với các Hội Implant Nha khoa Quốc tế ở các nước trong khu vực và thế giới để trao
                đổi kinh nghiệm, cập nhật kiến thức; thiết lập các chuẩn mực và phát triển chuyên
                môn.
              </p>
              <p>5.5. Hỗ trợ việc phổ biến và quãng bá kiến thức Cấy ghép Nha khoa.</p>
            </Section>
            <Section title="Điều 6">
              <p>Quyền hạn của Hội</p>
              <p>
                6.1. Bảo vệ những quyền lợi chính đáng của Hội viên trong khuôn khổ pháp luật. Đại
                diện cho Hội viên trước Pháp luật khi có yêu cầu đối với các vấn đề về chuyên môn
                thuộc lĩnh vực Implant Nha khoa.
              </p>
              <p>
                6.2. Được lập quỹ Hội trên cơ sở hội phí của Hội viên và nguồn thu từ các hoạt động
                dịch vụ đúng theo qui định Nhà nước. Được nhận các nguồn tài trợ hợp pháp.
              </p>
              <p>
                Hội Cấy ghép Nha khoa Thành Phố Hồ Chí Minh hoạt động theo đúng Điều lệ của mình và
                tuân thủ luật pháp Nhà nước CHXHCNVN.
              </p>
            </Section>
          </Chapter>

          <Chapter title="CHƯƠNG III" content="NGUYÊN TẮC HOẠT ĐỘNG – CƠ CẤU TỔ CHỨC">
            <Section title="Điều 7">
              <p>
                Hội Cấy ghép Nha khoa Thành Phố Hồ Chí Minh hoạt động theo đúng Điều lệ của mình và
                tuân thủ luật pháp Nhà nước CHXHCNVN.
              </p>
            </Section>
            <Section title="Điều 8">
              <p>
                Cơ quan lãnh đạo cao nhất của Hội Cấy ghép Nha Khoa Thành Phố Hồ Chí Minh là Đại hội
                đại biểu của Hội, họp thường lệ 5 năm một lần, nếu cần thiết có thể tổ chức Đại hội
                giữa nhiệm kỳ. Đại hội họp bất thường khi có 2/3 Ủy viên Ban Chấp Hành (BCH) hoặc
                1/2 Hội viên chính thức yêu cầu. Số đại biểu tham dự đại hội do BCH Hội qui định.
              </p>
            </Section>
            <Section title="Điều 9: Đại hội đại biểu của Hội Cấy ghép Nha khoa Thành Phố Hồ Chí Minh có nhiệm vụ">
              <p>
                9.1. Thông qua báo cáo tổng kết hoạt động của Hội và báo cáo của Ban Chấp Hành dương
                nhiệm, quyết định đường lối và phương hướng hoạt động của hội trong nhiệm kỳ mới.
              </p>
              <p>9.2. Thảo luận và biểu quyết việc sửa đổi, bổ sung (nếu có) điều lệ của Hội</p>
              <p>
                9.3. Bầu ra Ban Chấp Hành mới của Hội theo thể thức và số lượng do Đại hội quy định,
                từ danh sách đã được Ban Chấp Hành đương nhiệm đề xuất sau khi tham khảo ý kiến của
                các đơn vị cơ sở.
              </p>
              <p>9.4. Thông qua báo cáo tài chính của Hội.</p>
              <p>
                9.5. Biểu quyết việc chia tách, sáp nhập, hợp nhất, giải thể Hội hoặc gia nhập Liên
                hiệp các Hội cùng lĩnh vực hoạt động.
              </p>
              <p>9.6. Quyết định mức đóng hội phí</p>
            </Section>
            <Section title="Điều 10">
              <p>
                10.1. Nhiệm kỳ của BCH Hội là 5 Năm, chủ tịch Hội giữ chức vụ tối đa 02 nhiệm kỳ
              </p>
              <p>10.2. BCH bầu ra Ban thường vụ (BTV), số thành viên do Ban Chấp hành quyết định</p>
              <p>
                10.3. BCH họp thường kỳ 6 tháng một lần và có thể họp bất thường khi có yêu cầu của
                BTV hoặc ít nhất 1/3 số ủy viên BCH
              </p>
              <p>
                10.4. BCH có nhiệm vụ tổ chức thực hiện nghị quyết của Đại hội đại biểu của Hội, chỉ
                đạo toàn bộ hoạt động của Hội giữa 2 kỳ Đại hội và quyết định cơ cấu tổ chức của BCH
                Hội
              </p>
              <p>
                10.5. Khi xét thấy cần thiết, BCH với sự nhất trí của ít nhất 2/3 tổng số ủy viên có
                thể quyết định bổ sung hay miễn nhiệm ủy viên BCH, giải thể hoặc xóa tên một tổ chức
                thành viên của Hội.
              </p>
            </Section>
            <Section title="Điều 11">
              <p>11.1. BCH bầu ra chủ tịch, các Phó Chủ Tịch và Trưởng Ban Kiểm Tra</p>
              <p>
                11.2. Tổng Thư Ký, các Uỷ Viên Thường Vụ do Chủ Tịch đề cử với sự thống nhất của BCH
              </p>
              <p>
                11.3. Tuỳ theo nhu cầu, BTV sẽ thành lập các ban chuyên trách do các thành viên BTV
                hoặc Ủy viên BCH đứng đầu như
              </p>
              <div>
                <ol>
                  <li>Ban Thư Ký</li>
                  <li>Ban Kiểm tra</li>
                  <li>Ban Khoa hoc – Đào tạo</li>
                  <li>Ban Tài chính</li>
                  <li>Ban đối ngoại</li>
                  <li>Ban Tổ chức – Thi đua khen thưởng và kỷ luật</li>
                </ol>
              </div>
              <p>
                11.4. BTV là cơ quan chỉ đạo của Hội giữa 2 kỳ họp của BCH và hoạt động theo nguyên
                tắc lãnh đạo tập thể. BTV họp định kỳ 3 tháng 1 lần. Trong trường hợp cần thiết, Chủ
                tịch có quyền triệu tập hội nghị bất thường của BTV.
              </p>
            </Section>

            <Section title="Điều 12">
              <p>
                Nghị quyết của BCH hay BTV chỉ có giá trị khi được thông qua trong các phiên họp với
                sự tham dự của tối thiểu trên ½ tổng số ủy viên.
              </p>
              <p>
                Trường hợp đặc biệt không thể tổ chức họp đa số ủy viên, có thể tổ chức lấy ý kiến
                bằng thư, fax hay e mail nhưng phải có đủ chữ ký của ít nhất ½ tổng số ủy viên BCH
                hoặc BTV.
              </p>
            </Section>
            <Section title="Điều 13">
              <p>
                13.1. Chủ tịch có nhiệm vụ chỉ đạo toàn bộ hoạt động của Hội trong suốt nhiệm kỳ;
                triệu tập và chủ trì các cuộc họp của BCH và BTV; đề xuất những định hướng có tính
                chiến lược cho sự phát triển của Hội; quyết định những vấn đề đã được tập thể thông
                qua.
              </p>
              <p>
                13.2. Phó Chủ tịch thường trực (PCT thứ nhất) là người thay thế Chủ tịch khi Chủ
                tịch vắng mặt. Các Phó Chủ Tịch có trách nhiệm giúp Chủ tịch trong mọi mặt công tác
                theo sự phân công.
              </p>
              <p>
                13.3. Tổng Thư ký là cán bộ thường trực của Hội, chịu trách nhiệm tổ chức, triển
                khai các hoạt động của Hội theo chủ trương và kế hoạch đã được BCH hoặc BTV đề ra;
                quản lý và điều hành các công việc thường xuyên của Hội ; theo dõi, tổng hợp tình
                hình hoạt động của Hội và các tổ chức thành viên; báo cáo định kỳ cho Chủ tịch, BTV
                và BCH và là người thay thế Chủ tịch và Phó Chủ tịch thường trực khi vắng mặt.{' '}
                <br />
                Giúp việc cho Tổng thư ký có Ban thư ký do Tổng thư ký đề cử và BTV thông qua.
              </p>
              <p>
                13.4. Trưởng ban Kiểm tra Giám sát lập ra Ban Kiểm tra Giám sát của Hội với sự thống
                nhất của BTV. Ban Kiểm tra Giám sát có nhiệm vụ kiểm tra các hoạt động kinh tế tài
                chánh cùng các hoạt động khác của Hội và các tổ chức trực thuộc theo các quy định
                của Nhà nước về tài chính và nghĩa vụ thuế.
              </p>
              <p>
                13.5. Các Ủy viên Thường vụ và Ủy viên BCH được phân công phụ trách các Ban Chuyên
                trách.
              </p>
            </Section>
          </Chapter>
          <Chapter title="CHƯƠNG IV" content="HỘI VIÊN">
            <Section title="Điều 14">
              <span>
                Những người đủ tiêu chuẩn sau đây, tự nguyện hoạt động trong một tổ chức cơ sở của
                Hội có thể được công nhận là Hội viên :
              </span>
              <p>
                14.1. Hội viên chính thức: là các bác sĩ Răng Hàm mặt, kỹ thuật viên Phục hình răng
                trình độ trung cấp trở lên, hoạt động chuyên môn trong lĩnh vực Implant Nha khoa.
              </p>
              <p>
                14.2. Hội viên liên kết: là những người không phải là bác sĩ Răng hàm Mặt, kỹ thuật
                viên phục hình răng nhưng có đóng góp cho các hoạt động trong lĩnh vực Implant Nha
                khoa làm đơn tình nguyện xin gia nhập làm Hội viên liên kết của Hội và được BCH chấp
                thuận.
              </p>
              <p>
                14.3. Hội viên danh dự: Những cá nhân đã có nhiều cống hiến cho công tác của Hội,
                được 2/3 Ban chấp hành của Hội biểu quyết công nhận là Hội viên danh dự theo từng
                nhiệm kỳ, kể cả có thể bầu là Chủ tịch danh dự hay thành viên Đoàn Chủ tịch danh dự
                trong một thời gian nhất định hay của từng nhiệm kỳ ban chấp hành
              </p>
            </Section>
            <Section title="Điều 15">
              <p>15.1. Chấp hành điều lệ Hội và các quyết định của Ban chấp hành</p>
              <p>
                15.2. Tích cực trau dồi kiến thức, kỹ năng và đạo đức nghề nghiệp, giữ vững uy tín
                cá nhân và tập thể y giới
              </p>
              <p>15.3. Tham gia mọi sinh hoạt Hội, tích cực góp phần xây dựng và phát triển Hội</p>
              <p>15.4. Đóng hội phí theo qui định</p>
            </Section>
            <Section title="Điều 16">
              <p>
                16.1. Chỉ có Hội viên chính thức mới có quyền biểu quyết mọi công việc của Hội; ứng
                cử và bầu cử vào BCH Hội theo quy định.
              </p>
              <p>
                16.2. Được Hội bảo vệ các quyền lợi chính đáng, hợp pháp trước pháp luật và công
                luận.
              </p>
              <p>
                16.3. Được tham gia báo cáo các đề tài nghiên cứu khoa học của mình trong các buổi
                sinh hoạt khoa học kỹ thuật của Hội; được giới thiệu đăng các bài viết và các công
                trình nghiên cứu của mình vào các tạp chí khoa học trong hệ thống y học; được tổ
                chức Hội nhận xét về các công trình, công tác của mình Khi cần thiết, được chọn lọc
                để đề nghị khen thưởng; được chứng nhận và giới thiệu về tư cách đạo đức và chuyên
                môn trong các hoạt động nghề nghiệp.
              </p>
              <p>
                16.4. Được cập nhật kiến thức về Implant Nha khoa thường xuyên qua các khóa huấn
                luyện với học phí ưu đãi cho Hội viên; giao lưu trao đổi kinh nghiệm chuyên môn với
                các đồng nghiệp và chuyên gia trên khắp thế giới thông qua các hội nghị chuyên
                ngành.
              </p>
              <p>16.5. Được xin ra khỏi Hội.</p>
            </Section>
          </Chapter>
          <Chapter title="CHƯƠNG V" content="TÀI SẢN – TÀI CHÍNH">
            <Section title="Điều 17: Tài sản của Hội cấy ghép Nha khoa Thành Phố Hồ chí Minh bao gồm:">
              <p>17.1. Phần hội phí do Hội viên đóng góp</p>
              <p>17.2. Phần đóng góp của các hoạt động dịch vụ và các hoạt động có thu</p>
              <p>17.3. Nguồn tài trợ của các tổ chức khác</p>
              <p>
                Tài chính của Hội được quản lý và sử dụng theo quy định của BCH Hội và sự hướng dẫn
                của cơ quan tài chính Nhà nườc
              </p>
            </Section>
            <Section title="Điều 18">
              <p>
                Trường hợp Hội giải thể hay sáp nhập vì bất cứ lý do chính đáng nào, việc thanh
                quyết toán tài sản và tài chính của Hội sẽ do Đại hội đại biểu của Hội quyết định.
                Trong trường hợp bất khả kháng, không thể tiến hành Đại hội đại biểu, BCH hội sẽ đề
                nghị các cấp thẩm quyền cho thanh quyết toán tài sản và tài chính của Hội trong
                khuôn khổ pháp luật.
              </p>
            </Section>
          </Chapter>
          <Chapter title="CHƯƠNG VI" content="KHEN THƯỞNG – KỶ LUẬT">
            <Section title="Điều 19">
              <p>
                Các Hội viên, tổ chức thành viên có nhiều đóng góp tích cực trong công tác xây dựng
                và phát triển Hội có thể được khen thuởng với nhiều hình thức: Giấy khen, bằng khen,
                hiện kim, miễn giảm phí đào tạo, biểu dương trong Đại hội và các hình thức khác do
                Ban Chấp Hành quy định, phù hợp với luật thi đua khen thưởng.
              </p>
            </Section>
            <Section title="Điều 20">
              <p>
                Các Hội viên vi phạm điều lệ Hội, hoặc có những hành vi làm tổn hại đến các hoạt
                động hoặc uy tín của Hội, tùy theo mức độ có thể chịu các hình thức kỷ luật từ phê
                bình, cảnh cáo hoặc khai trừ khỏi Hội. Hội viên không đóng hội phí trong 2 năm liền
                xem như tự ý ra khỏi Hội.
              </p>
            </Section>
            <Section title="Điều 21">
              <p>
                Trong phạm vi hành nghề, trên tinh thần tự quản, những sai lầm về chuyên môn, về
                nghĩa vụ và đạo đức nghề nghiệp được đưa ra Hội đồng kỷ luật xem xét và có ý kiến đề
                xuất xử lý. Các trường hợp nghiêm trọng có thể đưa đến quyết định không còn được
                công nhận là Hội viên.
              </p>
            </Section>
          </Chapter>
          <Chapter title="CHƯƠNG VII" content="HIỆU LỰC CỦA ĐIỀU LỆ">
            <Section title="Điều 22">
              <p>
                Bản Điều lệ này gồm 7 chương 23 điều, có hiệu lực trong nhiệm kỳ 5 năm (2010 – 2015)
                kể từ ngày được Đại hội đại biểu Hội Cấy ghép Nha Khoa Thành phố Hồ Chí Minh thông
                qua và được Hội Y Học thành phố Hồ Chí Minh phê duyệt.
              </p>
            </Section>
            <Section title="Điều 23">
              <p>
                Chỉ có Đại hội Hội Cấy ghép Nha khoa thành phố Hồ Chí Minh mới có quyền bổ sung, sửa
                đổi điều lệ này với 2/3 số đại biểu có mặt tán thành và được Hội Y Học thành phố Hồ
                Chí Minh phê duyệt mới có giá trị thi hành.
              </p>
            </Section>
          </Chapter>
        </div>
      </main>
      <div style={{ marginBottom: '44px' }}></div>
      <Footer />
    </div>
  )
}

export default AssociationBylawsComponent
