import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import RulesImg from "../assets/rules.svg";
import Footer from "../components/Footer";

const Rules = () => {
  return (
    <div className="rules">
      <Header />
      <div className="dieu-khoan">
        <a
          href="https://docs.google.com/document/d/15iwANQ9MC_LUylzhCQwO0HguyJ5JsNsaRhP47KKzAzw/edit"
          className="title-rule"
          target={"_blank"}
        >
          Điều khoản và chính sách sử dụng
        </a>
        <Image className="RulesImg-icon" alt="" src={RulesImg} />
      </div>
      <Footer />
    </div>
  );
};

export default Rules;
