import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const products = [
    {
      _id: "100001",
      img: newArrOne,
      productName: "Đồng hồ bàn tròn",
      price: "44.00",
      color: "Đen",
      badge: true,
      des: "Đồng hồ để bàn với thiết kế hiện đại, phù hợp cho mọi không gian sống.",
    },
    {
      _id: "100002",
      img: newArrTwo,
      productName: "Đồng hồ thông minh",
      price: "250.00",
      color: "Đen",
      badge: true,
      des: "Đồng hồ thông minh với nhiều tính năng tiện ích, kết nối nhanh chóng.",
    },
    {
      _id: "100003",
      img: newArrThree,
      productName: "Giỏ đựng quần áo",
      price: "80.00",
      color: "Hỗn hợp",
      badge: true,
      des: "Giỏ đựng quần áo đa năng, giúp không gian gọn gàng hơn.",
    },
    {
      _id: "100004",
      img: newArrFour,
      productName: "Đồ chơi vui nhộn cho trẻ em",
      price: "60.00",
      color: "Hỗn hợp",
      badge: false,
      des: "Đồ chơi an toàn và vui nhộn, giúp trẻ phát triển sáng tạo.",
    },
    {
      _id: "100005",
      img: newArrTwo,
      productName: "Đồ chơi vui nhộn cho trẻ em",
      price: "60.00",
      color: "Hỗn hợp",
      badge: false,
      des: "Đồ chơi an toàn và vui nhộn, giúp trẻ phát triển sáng tạo.",
    },
  ];

  return (
    <div className="w-full pb-16">
      <Heading heading="Sản phẩm mới" />
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product._id} className="px-2">
            <Product
              _id={product._id}
              img={product.img}
              productName={product.productName}
              price={product.price}
              color={product.color}
              badge={product.badge}
              des={product.des}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;