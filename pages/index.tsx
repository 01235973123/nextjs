/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { InView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Uk from "./assets/uk.svg";
import Us from "./assets/us.svg";
import Jav from "./assets/jav.svg";
import Tbn from "./assets/tbn.svg";
import Balan from "./assets/balan.svg";
import Bodaonha from "./assets/bodaonha.svg";
import Content3 from "./assets/content-3.svg";
import Content4 from "./assets/content-4.svg";
import Content5 from "./assets/content-5.svg";
import ArrowBellow from "./assets/arrow-bellow.svg";
import Tamnhin from "./assets/tamnhin.svg";
import Sumenh from "./assets/sumenh.svg";
import Giatri from "./assets/giatri.svg";
import New1 from "./assets/new-1.svg";
import New2 from "./assets/new-2.svg";
import Avatar from "./assets/avatar.svg";
import Service from "./assets/service.svg";
import Dotblue from "./assets/dot-blue.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Social from "./components/Social";

const settings: Settings = {
  dots: true,
  arrows: false,
  infinite: true,
  swipe: true,
  swipeToSlide: true,
  draggable: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
};

const Landing = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : null
  );
  const [menuActive, setMenuActive] = useState(1);

  useEffect(() => {
    function handleResize() {
      setWidth(typeof window !== "undefined" ? window.innerWidth : null);
    }

    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      <InView
        as="div"
        onChange={(inView, entry) => inView && setMenuActive(1)}
      />
      <Header menuActive={menuActive} />
      <div style={{ height: "230px" }} id="common"></div>
      <div className="content">
        <InView
          as="div"
          onChange={(inView, entry) => inView && setMenuActive(6)}
        />
        <div className="content-1">
          <Image
            className="dot"
            style={{ top: "50%", left: "65%" }}
            alt=""
            src={Dotblue}
          />
          <Image
            className="dot"
            style={{ top: "80%", left: "12%" }}
            alt=""
            src={Dotblue}
          />
          <p className="text-1">Giới thiệu chung</p>
          <div className="br-1"></div>
          <p className="text-2">
            Chúng tôi với đội ngũ chuyên nghiệm, trách nhiệm, nhiệt tình, lấy
            khách hàng là cốt lõi phát triển công ty, chúng tôi mong đợi sẽ đưa
            đến cho quý khách những trải nghiệm và dịch vụ tốt nhất.
          </p>
          <div className="about-common">
            <div className="item">
              <Image className="icon" alt="" src={Tamnhin} />
              <p className="title">Tầm nhìn</p>
              <p className="descrip">
                Đến năm 2025 trở thành công ty hàng đầu về dịch vụ mua hộ và vận
                chuyển từ UK, EU về Việt Nam.
              </p>
            </div>
            <div className="item">
              <Image className="icon" alt="" src={Sumenh} />
              <p className="title">Sứ mệnh</p>
              <p className="descrip">
                Ứng dụng công nghệ, nâng cao chất lượng, đào tạo đội ngũ chuyên
                nghiệp.
              </p>
            </div>
            <div className="item">
              <Image className="icon" alt="" src={Giatri} />
              <p className="title">Giá trị cốt lõi</p>
              <p className="descrip">
                Sự hài lòng của khách hàng là trọng tâm mà chúng tôi hướng đến.
              </p>
            </div>
          </div>
        </div>
        <div id="service"></div>
        <div className="content-1">
          <Image
            className="dot"
            style={{ top: "-80%", left: "40%" }}
            alt=""
            src={Dotblue}
          />
          <p className="text-1">Quốc gia hỗ trợ dịch vụ</p>
          <div className="br-1"></div>
          <p className="text-2">
            Chúng tôi cung cấp đa dạng dịch vụ để khách hàng có thể chọn lựa phù
            hợp với nhu cầu.
          </p>
        </div>
        <InView
          as="div"
          onChange={(inView, entry) => inView && setMenuActive(2)}
        />
        <div className="body">
          <div className="content-2">
            <Image
              className="dot"
              style={{ top: "80%", right: "15%" }}
              alt=""
              src={Dotblue}
            />
            <Image className="Service-icon" alt="" src={Service} />
            <Swiper
              style={{ width: "80%", height: 300, padding: "0 20px" }}
              slidesPerView={width < 800 ? 1 : 3}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <Image className="Uk-icon" alt="" src={Uk} />
                    <p className="text-3">UK</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <Image className="Us-icon" alt="" src={Us} />
                    <p className="text-3">US</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <Image className="Jav-icon" alt="" src={Jav} />
                    <p className="text-3">Nhật Bản</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <Image className="Balan-icon" alt="" src={Balan} />
                    <p className="text-3">Ba Lan</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <Image className="Bodaonha-icon" alt="" src={Bodaonha} />
                    <p className="text-3">Bồ Đào Nha</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <Image className="Tbn-icon" alt="" src={Tbn} />
                    <p className="text-3">Tây Ban Nha</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="content-3" id="news">
          <Image className="Content3-icon" alt="" src={Content3} />
          <div className="news">
            <h3>Tin tức</h3>
            <div className="br"></div>
            <div className="block-new">
              <Image className="new-icon" alt="" src={New1} />
              <div className="info">
                <a
                  href="https://baotintuc.vn/kinh-te/logistics-xanh-huong-di-moi-de-phat-trien-ben-vung-20230401073856267.htm"
                  className="title"
                  target="_blank"
                >
                  Logistics xanh- Hướng đi mới để phát triển bền vững
                </a>
                <p className="date">Ngày đăng: 30/01/2023</p>
              </div>
            </div>
            <div className="block-new">
              <Image className="new-icon" alt="" src={New2} />
              <div className="info">
                <a
                  href="https://baotintuc.vn/kinh-te/chuyen-doi-so-thuc-day-tang-truong-va-phat-trien-ben-vung-20230321122719141.htm"
                  className="title"
                  target="_blank"
                >
                  Chuyển đổi số thúc đẩy tăng trưởng và phát triển bền vững
                </a>
                <p className="date">Ngày đăng: 30/01/2023</p>
              </div>
            </div>
          </div>
        </div>
        <InView
          as="div"
          onChange={(inView, entry) => inView && setMenuActive(3)}
        />
        <div className="content-3 nowrap">
          <div>
            <h3>Tải app để trải nghiệm dịch vụ của chúng tôi.</h3>
            <div className="br"></div>
            <p className="descrip">
              Với những tính năng tiện tích, sử dụng đơn giản, nhanh chóng. Vui
              lòng tải app để trải nghiệm ngay:
            </p>
            <div className="more dowload">
              Download
              <Image className="arrow-icon" alt="" src={ArrowBellow} />
            </div>
            <div id="about-us"></div>
          </div>
          <Image
            className="Content3-icon content4-icon"
            alt=""
            src={Content4}
          />
        </div>
        <div className="content-3 content-5" style={{ position: "relative" }}>
          <Image
            className="Content3-icon content5-icon"
            alt=""
            src={Content5}
          />
          <div className="network">
            <InView
              as="div"
              onChange={(inView, entry) => inView && setMenuActive(4)}
            />
            <h3>Mạng lưới đối tác lớn</h3>
            <div className="br"></div>
            <p className="descrip">
              Chúng tôi đang hợp tác với rất nhiều đối tác vận chuyển uy tín,
              chất lượng và tốc độ, đảm bảo đem đến chất lượng tốt nhất cho
              khách hàng.
            </p>
          </div>
          <div id="client" style={{ position: "absolute", top: "50%" }}></div>
          {/* <Swiper
          style={{ width: "50%", height: 300, padding: "0 20px" }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mang-luoi"
        >
          <SwiperSlide>
            <div>
              <h3>Mạng lưới đối tác lớn</h3>
              <div className="br"></div>
              <p className="descrip">
                Chúng tôi đang hợp tác với rất nhiều đối tác vận chuyển uy
                tín, chất lượng và tốc độ, đảm bảo đem đến chất lượng tốt nhất
                cho khách hàng.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h3>Mạng lưới đối tác rộng khắp</h3>
              <div className="br"></div>
              <p className="descrip">
                Chúng tôi đã hợp tác với rất nhiều khách hàng uy tín, đảm bảo
                đem đến chất lượng tốt nhất cho khách hàng.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h3>Mạng lưới đối tác rộng khắp</h3>
              <div className="br"></div>
              <p className="descrip">
                Chúng tôi đã hợp tác với rất nhiều khách hàng uy tín, đảm bảo
                đem đến chất lượng tốt nhất cho khách hàng.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h3>Mạng lưới đối tác rộng khắp</h3>
              <div className="br"></div>
              <p className="descrip">
                Chúng tôi đã hợp tác với rất nhiều khách hàng uy tín, đảm bảo
                đem đến chất lượng tốt nhất cho khách hàng.
              </p>
            </div>
          </SwiperSlide>
        </Swiper> */}
        </div>
        <div className="content-6">
          <h3>Khách hàng nói về PLExpress</h3>
          <Image
            className="dot"
            style={{ top: "2%", right: "0%" }}
            alt=""
            src={Dotblue}
          />
          <Image
            className="dot"
            style={{ top: "80%", left: "0%" }}
            alt=""
            src={Dotblue}
          />
          <div className="br"></div>
          <div className="slider-container" style={{ touchAction: "pan-y" }}>
            <Slider {...settings}>
              <div className="review">
                <div className="img">
                  <Image className="avatar" alt="" src={Avatar} />
                </div>
                <div className="info">
                  <p className="name">Nguyễn Minh Anh</p>
                  <p className="position">Nhân viên văn phòng</p>
                </div>
                <div className="describe">
                  {` "Nhân viên giao hàng rất nhiệt tình, tác phong lịch sử. Đó là
                  điều thu hút mình sử dụng dịch vụ của PLExpress trong suốt 1
                  năm qua"`}
                </div>
              </div>
              <div className="review">
                <div className="img">
                  <Image className="avatar" alt="" src={Avatar} />
                </div>
                <div className="info">
                  <p className="name">Phạm Khánh Nguyên</p>
                  <p className="position">Nội trợ</p>
                </div>
                <div className="describe">
                  {`"Với tinh thần trách nhiệm cao, nhân viên tại PLExpress đã hỗ
                  trợ tôi rất tận tâm và chu đáo. Tôi thấy thật đúng đắng khi
                  chọn PLExpress là người bạn đáng tin cậy trong những năm qua."`}
                </div>
              </div>
            </Slider>
            <InView
              as="div"
              onChange={(inView, entry) => inView && setMenuActive(5)}
            />
          </div>
        </div>
        <Footer />
      </div>
      <Social />
    </React.Fragment>
  );
};

export default Landing;
