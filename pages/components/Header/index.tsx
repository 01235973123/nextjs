/* eslint-disable @next/next/no-img-element */
import QRCode from "qrcode.react";
import Image from "next/image";
import MenuToggle from "../Menu";
import Onboarding from "../../assets/onboarding.svg";
import Logo from "../../assets/logo.svg";
import GooglePlay from "../../assets/google-play.svg";
import Bg from "../../assets/bg.svg";
import Bg2 from "../../assets/bg-2.svg";
import Ios from "../../assets/ios.svg";
import Dot from "../../assets/dot.svg";
import AndroidQr from "../../assets/Android-qr.svg";
import IosQr from "../../assets/IOS-qr.svg";
import { Tooltip } from "antd";
import { useRouter } from "next/router";

const Header = (props: any) => {
  const router = useRouter();

  const redirect = (path: string) => {
    router.push(path);
    // window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="header">
      <Image
        className="dot"
        style={{ top: "20%", left: "12%" }}
        alt=""
        src={Dot}
      />
      <Image className="bg-icon" alt="" src={Bg} />
      <Image className="bg-icon bg-2" alt="" src={Bg2} />
      <div className={`header-one top ${props.menuActive > 1 && "scroll"}`}>
        <div className="left cursor-pointer" onClick={() => redirect("/")}>
          <Image className="logo-icon" alt="" src={Logo} />
          <h1 className="title">Phúc Long Express</h1>
        </div>
        <MenuToggle menuActive={props.menuActive} />
      </div>
      <div className="header-one second">
        <div className="description-short">
          <b className="mua-h-v6">
            {" "}
            Mua hộ và vận chuyển từ US, EU về Việt Nam.
          </b>
          <div className="chng-ti-vi">{`Tải App để trải nghiệm dịch vụ của chúng tôi `}</div>
          <div className="dowload">
            <Tooltip
              title={
                <QRCode
                  style={{ borderRadius: 5 }}
                  value={
                    "https://play.google.com/store/apps/details?id=com.plelogistic.phuclongexpress"
                  }
                />
              }
              color={
                "linear-gradient(183.41deg, #f09e3e -8.57%, #ffd94f 82.96%)"
              }
              key={1}
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.plelogistic.phuclongexpress"
                target="_blank"
              >
                <Image className="dowload-icon" alt="" src={GooglePlay} />
              </a>
            </Tooltip>
            <Tooltip
              title={
                <QRCode
                  style={{ borderRadius: 5 }}
                  value={
                    "https://apps.apple.com/vn/app/phuclong-express/id6447059509"
                  }
                />
              }
              color={
                "linear-gradient(183.41deg, #f09e3e -8.57%, #ffd94f 82.96%)"
              }
              key={2}
            >
              <a
                href="https://apps.apple.com/vn/app/phuclong-express/id6447059509"
                target="_blank"
              >
                <Image className="dowload-icon ios" alt="" src={Ios} />
              </a>
            </Tooltip>
          </div>
        </div>
        <Image className="onboarding-icon" alt="onboarding" src={Onboarding} style={{ width: "auto", height: "auto" }} priority />
      </div>
    </div>
  );
};

export default Header;
