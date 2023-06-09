/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
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
import Active from "./assets/active.svg";
import Tamnhin from "./assets/tamnhin.svg";
import Sumenh from "./assets/sumenh.svg";
import Giatri from "./assets/giatri.svg";
import New1 from "./assets/new-1.svg";
import New2 from "./assets/new-2.svg";
import AndroidQr from "./assets/Android-qr.svg";
import IosQr from "./assets/IOS-qr.svg";
import Ios from "./assets/ios.svg";
import Avatar from "./assets/avatar.svg";
import Service from "./assets/service.svg";
import Dotblue from "./assets/dot-blue.svg";
import Logo from "./assets/logo.svg";
import GooglePlay from "./assets/google-play.svg";
import ImgAbout from "./assets/img-about.svg";
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
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const [menuActive, setMenuActive] = useState(1);
  const [displayUi, setDisplayUi] = useState(1);

  useEffect(() => {
    function handleResize() {
      setWidth(typeof window !== "undefined" ? window.innerWidth : 0);
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
      <div id="common"></div>
      <div className={`content`}>
        <div className={`content-1 ${displayUi < 2 && "hidden"}`}>
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
          <div className="text-1">Giới thiệu chung</div>
          <div className="br-1"></div>
          <div className="text-2">
            Chúng tôi với đội ngũ chuyên nghiệp, trách nhiệm, nhiệt tình, lấy
            khách hàng là cốt lõi phát triển công ty, chúng tôi mong đợi sẽ đưa
            đến cho quý khách những trải nghiệm và dịch vụ tốt nhất.
          </div>
          <InView
            as="div"
            onChange={(inView, entry) => {
              if (inView) {
                setMenuActive(6);
                displayUi < 9 && setDisplayUi(displayUi + 1);
              }
            }}
          />
          <div className="about-common">
            <div className="item">
              <Image className="icon" alt="" src={Tamnhin} style={{ width: "auto", height: "auto" }} />
              <div className="title">Tầm nhìn</div>
              <div className="descrip">
                Đến năm 2025 trở thành công ty hàng đầu về dịch vụ mua hộ và vận
                chuyển từ UK, EU về Việt Nam.
              </div>
            </div>
            <div className="item">
              <Image className="icon" alt="" src={Sumenh} />
              <div className="title">Sứ mệnh</div>
              <div className="descrip">
                Ứng dụng công nghệ, nâng cao chất lượng, đào tạo đội ngũ chuyên
                nghiệp.
              </div>
            </div>
            <div className="item">
              <Image className="icon" alt="" src={Giatri} />
              <div className="title">Giá trị cốt lõi</div>
              <div className="descrip">
                Sự hài lòng của khách hàng là trọng tâm mà chúng tôi hướng đến.
              </div>
            </div>
          </div>
        </div>
        <div className={`content-3 nowrap bg-img ${displayUi < 3 && "hidden"}`}>
          <div className="reason">
            <div className="reason-title">Lý do bạn nên chọn chúng tôi</div>
            <InView
              as="div"
              onChange={(inView, entry) => {
                if (inView) {
                  setMenuActive(6);
                  displayUi < 9 && setDisplayUi(displayUi + 1);
                }
              }}
            />
            <div className="item">
              <Image alt="" src={Active} style={{ width: "auto", height: "auto" }} /> Giao hàng chuyên nghiệp
            </div>
            <div className="item">
              <Image alt="" src={Active} style={{ width: "auto", height: "auto" }} />
              Sẵn sàng khi cần
            </div>
            <div className="item">
              <Image alt="" src={Active} style={{ width: "auto", height: "auto" }} />
              Tiết kiệm tối đa
            </div>
            <div className="item">
              <Image alt="" src={Active} style={{ width: "auto", height: "auto" }} />
              An toàn tuyệt đối
            </div>
            <div className="item">
              <Image alt="" src={Active} style={{ width: "auto", height: "auto" }} />
              Hạn chế rủi ro
            </div>
          </div>
          <Image
            className="Content3-icon content4-icon resize-custom"
            alt=""
            src={ImgAbout}
          />
        </div>
        <div id="service"></div>
        <div className={`content-1 ${displayUi < 4 && "hidden"}`}>
          <Image
            className="dot"
            style={{ top: "-80%", left: "40%" }}
            alt=""
            src={Dotblue}
          />
          <div className="text-1">Quốc gia hỗ trợ dịch vụ</div>
          <InView
            as="div"
            onChange={(inView, entry) => {
              if (inView) {
                setMenuActive(2);
                displayUi < 9 && setDisplayUi(displayUi + 1);
              }
            }}
          />
          <div className="br-1"></div>
          <div className="text-2">
            Chúng tôi cung cấp đa dạng dịch vụ để khách hàng có thể chọn lựa phù
            hợp với nhu cầu.
          </div>
        </div>
        <div className={`body`}>
          <div className="content-2">
            <Image
              className="dot"
              style={{ top: "80%", right: "15%" }}
              alt=""
              src={Dotblue}
            />
            {/* <Image className="Service-icon" alt="" src={Service} /> */}
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
                    <div className="text-3">UK</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <Image className="Us-icon" alt="" src={Us} />
                    <div className="text-3">US</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <Image className="Jav-icon" alt="" src={Jav} />
                    <div className="text-3">Nhật Bản</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <Image className="Balan-icon" alt="" src={Balan} />
                    <div className="text-3">Ba Lan</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <Image className="Bodaonha-icon" alt="" src={Bodaonha} />
                    <div className="text-3">Bồ Đào Nha</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block">
                  <div className="block-country">
                    <Image className="Tbn-icon" alt="" src={Tbn} />
                    <div className="text-3">Tây Ban Nha</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div id="news" style={{ height: 80 }}></div>
        <div className={`content-3 ${displayUi < 5 && "hidden"}`}>
          <InView
            as="div"
            onChange={(inView, entry) => {
              if (inView) {
                displayUi < 9 && setDisplayUi(displayUi + 1);
              }
            }}
          />
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
                <div className="date">Ngày đăng: 30/01/2023</div>
              </div>
            </div>
            <InView
              as="div"
              onChange={(inView, entry) => {
                if (inView) {
                  setMenuActive(3);
                }
              }}
            />
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
                <div className="date">Ngày đăng: 30/01/2023</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`content-3 nowrap bg-img ${displayUi < 6 && "hidden"}`}>
          <div>
            <h3 className="text-white">
              <InView
                as="div"
                onChange={(inView, entry) => {
                  if (inView) {
                    displayUi < 9 && setDisplayUi(displayUi + 1);
                  }
                }}
              />
              Tải app để trải nghiệm dịch vụ của chúng tôi.
            </h3>
            <div className="br"></div>
            <div className="descrip text-white">
              Với những tính năng tiện tích, sử dụng đơn giản, nhanh chóng. Vui
              lòng tải app để trải nghiệm ngay:
            </div>
            <div className="flex justify-evenly mt-10 flex-wrap">
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://apps.apple.com/vn/app/phuclong-express/id6447059509"
                  target="_blank"
                >
                  <Image className="dowload-icon ios" alt="" src={Ios} />
                </a>
                <QRCode
                  style={{ borderRadius: 5, marginBottom: 20 }}
                  value={
                    "https://apps.apple.com/vn/app/phuclong-express/id6447059509"
                  }
                />
                <InView
                  as="div"
                  onChange={(inView, entry) => inView && setMenuActive(3)}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.plelogistic.phuclongexpress"
                  target="_blank"
                >
                  <Image className="dowload-icon" alt="" src={GooglePlay} />
                </a>
                <QRCode
                  style={{ borderRadius: 5, marginBottom: 20 }}
                  value={
                    "https://play.google.com/store/apps/details?id=com.plelogistic.phuclongexpress"
                  }
                />
              </div>
            </div>
          </div>
          <Image
            className="Content3-icon content4-icon"
            alt=""
            src={Content4}
          />
        </div>
        <div id="about-us"></div>
        <div
          className={`content-3 content-5 ${displayUi < 7 && "hidden"}`}
          style={{ position: "relative" }}
        >
          <InView
            as="div"
            onChange={(inView, entry) => {
              if (inView) {
                displayUi < 9 && setDisplayUi(displayUi + 1);
              }
            }}
          />
          <Image
            className="Content3-icon content5-icon"
            alt=""
            src={Content5}
          />
          <div className="network">
            <h3>Mạng lưới đối tác lớn</h3>
            <div className="br"></div>
            <div className="descrip">
              Chúng tôi đang hợp tác với rất nhiều đối tác vận chuyển uy tín,
              chất lượng và tốc độ, đảm bảo đem đến chất lượng tốt nhất cho
              khách hàng.
              <InView
                as="div"
                onChange={(inView, entry) => {
                  if (inView) {
                    setMenuActive(4);
                  }
                }}
              />
            </div>
          </div>
          <div style={{ position: "absolute", top: "50%" }}></div>
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
              <div className="descrip">
                Chúng tôi đang hợp tác với rất nhiều đối tác vận chuyển uy
                tín, chất lượng và tốc độ, đảm bảo đem đến chất lượng tốt nhất
                cho khách hàng.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h3>Mạng lưới đối tác rộng khắp</h3>
              <div className="br"></div>
              <div className="descrip">
                Chúng tôi đã hợp tác với rất nhiều khách hàng uy tín, đảm bảo
                đem đến chất lượng tốt nhất cho khách hàng.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h3>Mạng lưới đối tác rộng khắp</h3>
              <div className="br"></div>
              <div className="descrip">
                Chúng tôi đã hợp tác với rất nhiều khách hàng uy tín, đảm bảo
                đem đến chất lượng tốt nhất cho khách hàng.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h3>Mạng lưới đối tác rộng khắp</h3>
              <div className="br"></div>
              <div className="descrip">
                Chúng tôi đã hợp tác với rất nhiều khách hàng uy tín, đảm bảo
                đem đến chất lượng tốt nhất cho khách hàng.
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}
        </div>
        <div id="client"></div>
        <div className={`content-3 mb-10 ${displayUi < 8 && "hidden"}`}>
          <h3>Khách hàng nói về Phúc Long Express</h3>
          <InView
            as="div"
            onChange={(inView, entry) => {
              if (inView) {
                displayUi < 9 && setDisplayUi(displayUi + 1);
              }
            }}
          />
        </div>
        <div className={`flex y-kien-kh`}>
          <div className={`content-6`}>
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
            <div className="slider-container" style={{ touchAction: "pan-y" }}>
              <div className="review">
                <div className="flex flex-wrap justify-center items-center gap-y-4">
                  <div className="img">
                    <Image className="avatar" alt="" src={Avatar} />
                  </div>
                  <div className="info">
                    <div className="name">Nguyễn Minh Anh</div>
                    <div className="position">Nhân viên văn phòng</div>
                  </div>
                </div>
                <div className="describe">
                  {` "Nhân viên giao hàng rất nhiệt tình, tác phong lịch sử. Đó là
                  điều thu hút mình sử dụng dịch vụ của PLExpress trong suốt 1
                  năm qua"`}
                </div>
              </div>
            </div>
            <InView
              as="div"
              onChange={(inView, entry) => {
                if (inView) {
                  setMenuActive(5);
                }
              }}
            />
          </div>
          <div className={`content-6`}>
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
            <div className="slider-container" style={{ touchAction: "pan-y" }}>
              <div className="review">
                <div className="flex flex-wrap justify-center items-center gap-y-4">
                  <div className="img">
                    <Image className="avatar" alt="" src={Avatar} />
                  </div>
                  <div className="info">
                    <div className="name">Phạm Khánh Nguyên</div>
                    <div className="position">Nội trợ</div>
                  </div>
                </div>
                <div className="describe">
                  {`"Với tinh thần trách nhiệm cao, nhân viên tại PLExpress đã hỗ
                  trợ tôi rất tận tâm và chu đáo. Tôi thấy thật đúng đắn khi
                  chọn PLExpress là người bạn đáng tin cậy trong những năm qua."`}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Social />
    </React.Fragment>
  );
};

export default Landing;
