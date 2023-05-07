import React, { useState } from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import Head from "next/head";
import Header from "../components/Header";
import RulesImg from "../assets/rules.svg";
import Footer from "../components/Footer";
import Social from "../components/Social";

const Support = () => {
  // const [menuActive, setMenuActive] = useState(0);

  return (
    <div className="rules">
      <Head>
        <meta name="description" content="Phúc Long Express" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo-2.png" />
        <title>Phúc Long Express</title>
      </Head>
      {/* <InView
        as="div"
        onChange={(inView, entry) => inView && setMenuActive(0)}
      /> */}
      {/* <Header menuActive={menuActive} /> */}
      <div className="dieu-khoan title-rule">
        {/* <InView
          as="div"
          onChange={(inView, entry) => inView && setMenuActive(10)}
        /> */}
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
      <Social />
    </div>
  );
};

export default Support;
