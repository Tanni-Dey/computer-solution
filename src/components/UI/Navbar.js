import { Menu, Layout, theme, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import Link from "next/link";
const { Header } = Layout;

const items = [
  {
    label: <Link href="/">CPU / Processor</Link>,
    key: "1",
  },
  {
    label: <Link href="/pc-builder">Motherboard</Link>,
    key: "2",
  },
  {
    label: <Link href="/pc-builder">RAM</Link>,
    key: "3",
  },
  {
    label: <Link href="/pc-builder">Power Supply Unit</Link>,
    key: "4",
  },
  {
    label: <Link href="/pc-builder">Storage Device</Link>,
    key: "5",
  },
  {
    label: <Link href="/pc-builder">Monitor</Link>,
    key: "6",
  },
  {
    label: <Link href="/pc-builder">GPU</Link>,
    key: "7",
  },
  {
    label: <Link href="/pc-builder">Mouse</Link>,
    key: "8",
  },
  {
    label: <Link href="/pc-builder">Keyboard</Link>,
    key: "9",
  },
];

const Navbar = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "orange",
      }}
    >
      <div className="demo-logo text-xl font-bold text-orange-500">
        <Link className="hover:text-orange-500" href="/">
          Computer-Solution
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link className="mr-5 text-orange-500 hover:text-orange-500" href="/">
          <items>Home</items>
        </Link>

        <Dropdown className="mr-5" menu={{ items }}>
          <Link className="mr-5 text-orange-500 hover:text-orange-500" href="/">
            <Space>
              Catagories
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>

        <Link href="/pc-builder">
          <Button type="primary" ghost>
            PC Builder
          </Button>
        </Link>
      </Menu>
    </Header>
  );
};

export default Navbar;
