import { Button, Popover } from "antd";
import {
  CommentOutlined,
  FacebookOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Social = () => {
  const content = (
    <div className="content">
      <a
        href="https://www.facebook.com/phuclongexpress?mibextid=LQQJ4d"
        target={"_blank"}
      >
        <Button icon={<FacebookOutlined />} type="primary">
          Facebook
        </Button>
      </a>
      <Button icon={<PhoneOutlined />} type="primary">
        0989000320
      </Button>
    </div>
  );

  return (
    <Popover
      className="social-popover"
      content={content}
      placement="top"
      trigger="click"
    >
      <Button type="primary">
        Liên hệ <CommentOutlined />
      </Button>
    </Popover>
  );
};

export default Social;
