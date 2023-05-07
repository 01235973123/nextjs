import React, { useState, useRef, useEffect, RefObject } from "react";
import Image from "next/image";
import axios from "axios";
import { InView } from "react-intersection-observer";
import Header from "../components/Header";
import RulesImg from "../assets/rules.svg";
import Footer from "../components/Footer";
import Social from "../components/Social";
import { Button, Form, Input, notification, Spin } from 'antd';
import { NotificationPlacement } from "antd/es/notification/interface";
import Head from "next/head";

const { TextArea } = Input;

const customConfig = {
    headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
    }
};

const SupportVtp = () => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    // const [menuActive, setMenuActive] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errorField, setErrorField] = useState(null);
    const errorFieldRef: RefObject<HTMLInputElement> | null = useRef(null);

    useEffect(() => {
        if (errorFieldRef.current) {
            errorFieldRef.current?.focus();
        }
    }, [errorField]);

    const onFinishFailed = (error: any) => {
        // Lấy trường đầu tiên có lỗi validation
        const [firstErrorField] = error?.errorFields;
        // Nếu có trường đó, set giá trị của errorFieldRef
        if (firstErrorField) {
            if (firstErrorField.name[0] === errorField) {
                errorFieldRef.current?.focus();
                return;
            }
            setErrorField(firstErrorField.name[0]);
        } else {
            setErrorField(null);
        }
    };

    const onFinish = (values: any) => {
        setLoading(true);
        axios.post('https://api.ple-logistics.com/v1/cooperate/add', JSON.stringify(values), customConfig)
            .then(function (response: any) {
                form.resetFields();
                openNotification('topRight', response?.data?.message, 1);
            })
            .catch(function (error: { message: string; }) {
                openNotification('topRight', error?.message, 2);
            });
    };

    const openNotification = (placement: NotificationPlacement, message: string, type: number) => {
        setLoading(false);
        const data = {
            message: message,
            placement,
        };
        type === 1 ? api.success(data) : api.error(data);
    };

    return (
        <Spin spinning={loading} size="large">
            <Head>
                <meta name="description" content="Phúc Long Express" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/logo-2.png" />
                <title>Phúc Long Express</title>
            </Head>
            <div className="rules">
                {contextHolder}
                {/* <InView
          as="div"
          onChange={(inView, entry) => inView && setMenuActive(0)}
        /> */}
                {/* <Header menuActive={menuActive} /> */}
                {/* <div className="dieu-khoan title-rule">
          <InView
            as="div"
            onChange={(inView, entry) => inView && setMenuActive(10)}
          />
          Thông tin liên hệ
        </div> */}
                <div className="description descr-rule">
                    {/* <p><span className="font-bold">Trụ Sở Chính:</span> Km2. Đại lộ Thăng Long, phường Mễ Trì, quận Nam Từ Liêm, TP.Hà Nội</p>
          <p><span className="font-bold">Văn phòng miền nam:</span> 161-163 Trần Quốc Thảo, P9, Quận 3, TP.HCM</p>
          <p><span className="font-bold">Số Điện Thoại Liên Hệ:</span> 19008095</p>
          <p><span className="font-bold">Email:</span> cskh@viettel.com.vn</p>
          <p><span className="font-bold">Website:</span> viettelpost.com.vn</p>
          <p><span className="font-bold">Hợp tác kinh doanh</span></p>
          <p><span className="font-bold">Hotline:</span> 0983653311</p>
          <p><span className="font-bold">Email:</span> kinhdoanh@viettelpost.com.vn</p> */}
                    <p className="mt-20"><span className="font-bold lien-he">LIÊN HỆ NGAY VỚI PHÚC LONG EXPRESS</span></p>
                    <Form
                        name="basic"
                        form={form}
                        labelCol={{ span: 5 }}
                        labelAlign="left"
                        wrapperCol={{ span: 14 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Họ và tên"
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
                        >
                            <Input ref={errorField === 'name' ? errorFieldRef : null} maxLength={150} />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập email' }, {
                                type: 'email',
                                message: 'Vui lòng nhập đúng định dạng email',
                            },]}
                        >
                            <Input ref={errorField === 'email' ? errorFieldRef : null} maxLength={100} />
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
                            <Input ref={errorField === 'phone' ? errorFieldRef : null} maxLength={50} />
                        </Form.Item>
                        <Form.Item
                            label="Ghi chú"
                            name="note"
                            rules={[{ required: true, message: 'Vui lòng nhập ghi chú' }]}
                        >
                            <TextArea ref={errorField === 'note' ? errorFieldRef : null} rows={4} maxLength={500} />
                        </Form.Item>
                        <Form.Item className="button-submit" wrapperCol={{ offset: 0, span: 0 }}>
                            <Button type="primary" htmlType="submit" className="button">
                                Gửi ngay
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <Footer />
                <Social />
            </div>
        </Spin>
    );
};

export default SupportVtp;
