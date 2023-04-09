import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import RulesImg from "../assets/rules.svg";
import Footer from "../components/Footer";

const Rules = () => {
  return (
    <div className="rules">
      <Header />
      <div className="dieu-khoan title-rule">
        Điều khoản và chính sách sử dụng
        <Image className="RulesImg-icon" alt="" src={RulesImg} />
      </div>
      <div className="description">
        <p className="font-bold ">
          Bằng việc chấp nhận sử dụng Dịch vụ của Phúc Long Express, Khách hàng
          hiểu và đồng ý với chính sách về Quyền và nghĩa vụ được nêu dưới đây.
        </p>
        <p className="font-bold">I. THUẬT NGỮ</p>
        <p>
          <span className="font-bold">“PL Express”</span> có nghĩa là Phúc Long
          express
        </p>
        <p>
          <span className="font-bold">“Khách hàng”</span> có nghĩa là cá nhân
          hoặc tổ chức sử dụng Dịch vụ của PL Express.
        </p>
        <p>
          <span className="font-bold">“Bưu gửi”</span> có nghĩa là thư, gói,
          kiện hàng hóa được PL Express chấp nhận, vận chuyển và phát hợp pháp
          trong hệ thống bưu cục của PL Express.
        </p>
        <p>
          <span className="font-bold"> “Đơn hàng”</span> có nghĩa là yêu cầu
          thực hiện Dịch vụ được Khách hàng thiết lập qua Hệ thống hoặc được
          viết tay dưới dạng Phiếu gửi/Phiếu yêu cầu Dịch vụ có đầy đủ thông tin
          về Bưu gửi.
        </p>
        <p>
          <span className="font-bold"> “Dịch vụ”</span> có nghĩa là dịch vụ liên
          quan việc giao nhận Bưu gửi, bao gồm: chấp nhận, vận chuyển và phát
          Bưu gửi bằng các phương thức khác nhau từ địa điểm do Khách hàng chỉ
          định đến địa điểm của người nhận.
        </p>
        <p>
          <span className="font-bold">“Hệ thống”</span> có nghĩa là phần mềm ứng
          dụng được cài đặt trên thiết bị di động hoặc website mà PL Express
          thiết lập cho việc sử dụng Dịch vụ của Khách hàng, bao gồm tạo, quản
          lý, theo dõi tiến độ của Đơn hàng; thanh toán cước Dịch vụ; kiểm soát,
          đối chiếu dữ liệu về Bưu gửi và cước Dịch vụ.
        </p>
        <p className="font-bold">II. QUYỀN VÀ NGHĨA VỤ CỦA KHÁCH HÀNG</p>
        <p className="font-bold">1.Quyền của Khách hàng</p>
        <p>
          Được PL Express cung cấp đầy đủ thông tin liên quan đến toàn bộ quy
          trình cung ứng Dịch vụ.
        </p>
        <p>
          Được PL Express đảm bảo bí mật thông tin, an toàn đối với Bưu gửi
          trong toàn quá trình giao hàng theo qui định của pháp luật.
        </p>
        <p>
          Được PL Express giải quyết khiếu nại, được giải quyết thỏa đáng về
          Dịch vụ cung ứng đã sử dụng.
        </p>
        <p>
          Được PL Express bồi thường thiệt hại tùy theo thực tế từng trường hợp.
        </p>
        <p className="font-bold">2. Nghĩa vụ của khách hàng</p>
        <p>Thực hiện việc đối soát cước phí Dịch vụ đảm bảo đúng thời hạn.</p>
        <p>
          Không gửi Bưu gửi chưa được lưu thông trên thị trường, hàng cấm, hàng
          hạn chế vận chuyển/kinh doanh hoặc hàng kinh doanh có điều kiện nhưng
          không cung cấp được giấy phép.
        </p>
        <p>
          Khách hàng có nghĩa vụ mở hàng và phối hợp với PL Express trong việc
          đồng kiểm cũng như niêm phong hàng hóa khi gửi hàng.
        </p>
        <p>
          Chịu trách nhiệm trước PL Express và trước pháp luật về nội dung Bưu
          gửi, hóa đơn, chứng từ nguồn gốc xuất xứ của Bưu gửi và chứng từ đính
          kèm.
        </p>
        <p>
          Chịu trách nhiệm làm việc, giải quyết với Cơ quan có thẩm quyền khi
          Bưu gửi tạm giữ hoặc tịch thu.
        </p>
        <p>
          Cung cấp đầy đủ hóa đơn, chứng từ của Bưu gửi cho PL Express khi gửi
          Bưu gửi.
        </p>
        <p>
          PL Express sẽ được miễn trừ trách nhiệm bồi thường trong trường hợp
          Bưu gửi bị tạm giữ hoặc tịch thu bởi cơ quan có thẩm quyền do Bưu gửi
          không có hóa đơn, chứng từ hợp pháp đính kèm.
        </p>
        <p>
          Đóng gói Bưu gửi theo đúng từng quy cách, kích thước và tính chất của
          từng mặt hàng, đặc biệt đối với Bửu gửi là các mặt hàng dễ vỡ.
        </p>
        <p>
          Cung cấp đầy đủ chỉ dẫn liên quan đến Bưu gửi; thông tin liên quan đến
          Người gửi, Người nhận trên Bưu gửi.
        </p>
        <p>
          Bồi thường thiệt hại thực tế cho PL Express và bên thứ 3 có liên quan
          khi thiệt hại xảy ra có nguồn gốc từ Khách hàng/Người gửi theo quy
          định của pháp luật.
        </p>{" "}
        <p></p>
        <p>
          Chịu trách nhiệm về mọi thông tin liên quan đến Người nhận mà Khách
          hàng giao cho PL Express. Trường hợp xảy ra sai sót về thông tin Người
          nhận hoặc Bưu gửi không đúng yêu cầu của Người nhận thì Khách hàng có
          trách nhiệm tự giải quyết với Người nhận, đồng thời Khách hàng vẫn
          phải thanh toán Cước phí Dịch vụ đối với Đơn hàng trên dựa trên lộ
          trình đã thực hiện.
        </p>
        <p>
          Bằng chi phí của mình, chịu trách nhiệm giải quyết các vấn đề liên
          quan đến (i) tranh chấp về quyền sở hữu Bưu gửi, nguồn gốc Bưu gửi với
          bên thứ ba bất kỳ; hoặc (ii) khiếu nại của Người nhận về việc hàng hóa
          bị lỗi, không đúng yêu cầu.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Rules;
