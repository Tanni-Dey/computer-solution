import { Layout, theme } from "antd";
import Navbar from "../UI/Navbar";
import FooterComponent from "../UI/Footer";
const { Content } = Layout;

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <header>
        <title>Computer Solution</title>
      </header>
      <Navbar />
      <Content
        style={{
          padding: "25px 50px 25px 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default RootLayout;
