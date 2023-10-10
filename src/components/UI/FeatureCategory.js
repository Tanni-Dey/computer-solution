import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const FeatureCategory = () => {
  const categories = [
    {
      id: 1,
      category: "cpu/processor",
      path: "/category/cpu",
      imgLink:
        "https://www.ryanscomputers.com/assets/images/category-icon/svg/Processor.svg",
    },
    {
      id: 2,
      category: "motherboard",
      path: "/category/motherboard",
      imgLink:
        "https://www.ryanscomputers.com/assets/images/category-icon/svg/software.svg",
    },
    {
      id: 3,
      category: "ram",
      path: "/category/ram",
      imgLink:
        "https://www.ryanscomputers.com/assets/images/category-icon/svg/GPU.svg",
    },
    {
      id: 4,
      category: "power-supply-unit",
      path: "/category/power-supply-unit",
      imgLink:
        "https://www.ryanscomputers.com/assets/images/category-icon/svg/Processor.svg",
    },
    {
      id: 5,
      category: "storage-device",
      path: "/category/storage-device",
      imgLink:
        "https://www.ryanscomputers.com/assets/images/category-icon/svg/speaker.svg",
    },
    {
      id: 6,
      category: "monitor",
      path: "/category/monitor",
      imgLink:
        "https://www.ryanscomputers.com/assets/images/category-icon/svg/Monitor.svg",
    },
  ];

  return (
    <Row gutter={30}>
      {categories.map((category) => (
        <Col
          style={{ marginBottom: "30px", textTransform: "uppercase" }}
          key={category?._id}
          span={6}
        >
          <Link href={category.path}>
            <Card
              type="inner"
              size="small"
              title={category?.category}
              hoverable
              bordered={true}
            >
              <Image
                className="mx-auto my-5"
                width={150}
                height={100}
                alt="img"
                src={category?.imgLink}
              />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default FeatureCategory;
