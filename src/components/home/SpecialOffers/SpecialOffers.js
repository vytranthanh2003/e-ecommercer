import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  const sanPham = [
    {
      _id: "1101",
      img: spfOne,
      tenSanPham: "Mũ cho bé trai",
      gia: "35.00", // Giá sản phẩm
      mauSac: "Trắng và Đen",
      badge: true,
      moTa: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "1102",
      img: spfTwo,
      tenSanPham: "Bàn trà",
      gia: "180.00", // Giá sản phẩm
      mauSac: "Xám",
      badge: true,
      moTa: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "1103",
      img: spfThree,
      tenSanPham: "Tai nghe",
      gia: "25.00", // Giá sản phẩm
      mauSac: "Pha trộn",
      badge: true,
      moTa: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "1104",
      img: spfFour,
      tenSanPham: "Kính mát",
      gia: "220.00", // Giá sản phẩm
      mauSac: "Đen",
      badge: true,
      moTa: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
  ];

  return (
    <div className="w-full pb-20">
      <Heading heading="Ưu đãi đặc biệt" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {sanPham.map((product) => (
          <Product
            key={product._id}
            _id={product._id}
            img={product.img}
            productName={product.tenSanPham}
            price={product.gia} // Truyền giá vào phần price
            color={product.mauSac}
            badge={product.badge}
            des={product.moTa}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
