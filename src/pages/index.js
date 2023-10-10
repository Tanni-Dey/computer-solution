import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";
import RootLayout from "@/components/Layouts/RootLayout";
import FeatureCategory from "@/components/UI/FeatureCategory";

export default function Home({ products }) {
  const [allRandomProducts, setAllRandomProducts] = useState([]);

  useEffect(() => {
    let data = [];

    for (let i = 0; data.length <= 5; i++) {
      const randomNumber = Math.floor(Math.random() * products.length + 1);
      const randomProduct = data.find(
        (product) => product?._id === randomNumber
      );

      if (!randomProduct?._id) {
        const product = products.find(
          (product) => product?._id === randomNumber
        );
        data.push(product);
      }
    }
    setAllRandomProducts([...data]);
  }, [products]);

  return (
    <div>
      <Row gutter={30}>
        {allRandomProducts.map((product) => (
          <Col style={{ marginBottom: "30px" }} key={product?._id} span={6}>
            <Card
              type="inner"
              title={product?.productName}
              hoverable
              bordered={true}
              cover={
                <Image
                  width={600}
                  height={100}
                  alt="img"
                  src={product?.imgLink}
                />
              }
            >
              <h6 className="capitalize font-bold text-md">
                Category :{" "}
                <span className=" uppercase">{product?.category}</span>
              </h6>

              <h6 className="capitalize font-bold text-md">
                Status : {product?.stock ? "Stock In" : "Stock Out"}
              </h6>
              <h6 className="capitalize text-orange-500 font-bold text-md mb-5">
                Price : {product?.price}
              </h6>
              <Button type="primary" ghost block>
                More Details
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className="text-2xl font-bold capitalize text-center mt-14 mb-10">
        Feature Category
      </h2>
      <FeatureCategory />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  return { props: { products } };
}
