import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import RulesImg from "../assets/rules.svg";
import Footer from "../components/Footer";
import { InView } from "react-intersection-observer";
import Social from "../components/Social";
import { Button, Form, Input, notification } from 'antd';
import { NotificationPlacement } from "antd/es/notification/interface";

const { TextArea } = Input;

const SupportVtp = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [menuActive, setMenuActive] = useState(0);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    form.resetFields();
    openNotification('topRight');
  };

  const openNotification = (placement: NotificationPlacement) => {
    api.success({
      message: `Gửi thành công !`,
      placement,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="rules">
      {contextHolder}
      <InView
        as="div"
        onChange={(inView, entry) => inView && setMenuActive(0)}
      />
      <Header menuActive={menuActive} />
      <div className="dieu-khoan title-rule">
        <InView
          as="div"
          onChange={(inView, entry) => inView && setMenuActive(10)}
        />
        Tổng Công ty Cổ phần Bưu chính Viettel
      </div>
      <div className="description descr-rule">
        <p><span className="font-bold">Trụ Sở Chính:</span> Km2. Đại lộ Thăng Long, phường Mễ Trì, quận Nam Từ Liêm, TP.Hà Nội</p>
        <p><span className="font-bold">Văn phòng miền nam:</span> 161-163 Trần Quốc Thảo, P9, Quận 3, TP.HCM</p>
        <p><span className="font-bold">Số Điện Thoại Liên Hệ:</span> 19008095</p>
        <p><span className="font-bold">Email:</span> cskh@viettel.com.vn</p>
        <p><span className="font-bold">Website:</span> viettelpost.com.vn</p>
        <p><span className="font-bold">Hợp tác kinh doanh</span></p>
        <p><span className="font-bold">Hotline:</span> 0983653311</p>
        <p><span className="font-bold">Email:</span> kinhdoanh@viettelpost.com.vn</p>
        <p><span className="font-bold">LIÊN HỆ NGAY VỚI VIETTEL POST</span></p>
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 3 }}
          labelAlign="left"
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Họ và tên"
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
          >
            <Input maxLength={100} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Vui lòng nhập email' }, {
              type: 'email',
              message: 'Vui lòng nhập đúng định dạng email',
            },]}
          >
            <Input maxLength={100} />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }, () => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject();
                }
                if (isNaN(value)) {
                  return Promise.reject("Vui lòng chỉ nhập số");
                }
                return Promise.resolve();
              },
            }),]}
          >
            <Input maxLength={12} />
          </Form.Item>
          <Form.Item
            label="Ghi chú"
            name="note"
          >
            <TextArea rows={4} maxLength={1000} />
          </Form.Item>
          <Form.Item className="text-center" wrapperCol={{ offset: 0, span: 16 }}>
            <Button type="primary" htmlType="submit" className="button">
              Gửi ngay
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
      <Social />
    </div>
  );
};

export default SupportVtp;
