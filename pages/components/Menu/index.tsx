import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Head from "next/head";

const MenuToggle = (props: any) => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const redirect = (path: string) => {
    router.push(path);
    onClose();
    // window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const scroll = (id: any) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    onClose();
  };

  return (
    <>
      <Head>
        <meta name="description" content="Phúc Long Express" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo-2.png" />
        <title>Phúc Long Express</title>
      </Head>
      <div className="menu">
        <div
          onClick={() => redirect("/")}
          className={`menu-item ${props.menuActive === 1 && "active"}`}
        >
          Trang chủ
        </div>
        <div
          className={`menu-item ${props.menuActive === 6 && "active"}`}
          onClick={() => scroll("#common")}
        >
          Về chúng tôi
        </div>
        <div
          className={`menu-item ${props.menuActive === 2 && "active"}`}
          onClick={() => scroll("#service")}
        >
          Dịch vụ
        </div>
        <div
          className={`menu-item ${props.menuActive === 3 && "active"}`}
          onClick={() => scroll("#news")}
        >
          Tin tức
        </div>
        <div
          className={`menu-item ${props.menuActive === 4 && "active"}`}
          onClick={() => scroll("#about-us")}
        >
          Đối tác
        </div>
        <div
          className={`menu-item ${props.menuActive === 5 && "active"}`}
          onClick={() => scroll("#client")}
        >
          Khách hàng
        </div>
      </div>
      <div className="mobile">
        <div className="menu-toggle" onClick={showDrawer}>
          <MenuOutlined />
        </div>
        <Drawer placement="right" onClose={onClose} visible={visible}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[String(props.menuActive)]}
          >
            <Menu.Item onClick={() => redirect("/")} key="1">
              Trang chủ
            </Menu.Item>
            <Menu.Item key="6" onClick={() => scroll("#common")}>
              Về chúng tôi
            </Menu.Item>
            <Menu.Item key="2" onClick={() => scroll("#service")}>
              Dịch vụ
            </Menu.Item>
            <Menu.Item key="3" onClick={() => scroll("#news")}>
              Tin tức
            </Menu.Item>
            <Menu.Item key="4" onClick={() => scroll("#about-us")}>
              Đối tác
            </Menu.Item>
            <Menu.Item key="5" onClick={() => scroll("#client")}>
              Khách hàng
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </>
  );
};

export default MenuToggle;
