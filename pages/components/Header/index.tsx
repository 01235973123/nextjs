/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import MenuToggle from "../Menu";
import Onboarding from "../../assets/onboarding.svg";
import Logo from "../../assets/logo.svg";
import GooglePlay from "../../assets/google-play.svg";
import Bg from "../../assets/bg.svg";
import Bg2 from "../../assets/bg-2.svg";
import Ios from "../../assets/ios.svg";
import Dot from "../../assets/dot.svg";

const Header = (props: any) => {
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
      <div className="header-one top">
        <div className="left">
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
            <Image className="dowload-icon" alt="" src={GooglePlay} />
            <Image className="dowload-icon ios" alt="" src={Ios} />
          </div>
        </div>
        <Image className="onboarding-icon" alt="" src={Onboarding} />
      </div>
    </div>
  );
};

export default Header;
