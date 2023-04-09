import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import RulesImg from "../assets/rules.svg";
import Footer from "../components/Footer";

const Support = () => {
  return (
    <div className="rules">
      <Header />
      <div className="dieu-khoan title-rule">
        Thông tin liên hệ hỗ trợ
        <Image className="RulesImg-icon" alt="" src={RulesImg} />
      </div>
      <div className="description">
        <p className="font-bold">Địa chỉ chúng tôi</p>
        <p>
          Số 2, ngõ 382 đường Hồ Tùng Mậu, Phường Phú Diễn, Quận Bắc Từ Liêm,
          Thành phố Hà Nội, Việt Nam
        </p>
        <p className="font-bold">Email chúng tôi</p>
        <p>Chăm sóc khách hàng: support@ple-logistics.com</p>
        <p>Hỗ trợ kinh doanh: support@ple-logistics.com</p>
        <p className="font-bold">Điện thoại</p>
        <p>0989000320</p>
        <p className="font-bold">Thời gian làm việc</p>
        <p>Thứ 2 đến Chủ Nhật từ 8h30 đến 19h00 (Trừ các ngày lễ)</p>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
