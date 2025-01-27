import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Sản phẩm bán chạy nhất của chúng tôi" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Lọ Hoa"
          price="35.000 VNĐ"
          color="Đen và Trắng"
          badge={true}
          des="Lọ hoa sang trọng với thiết kế tinh tế, phù hợp để trang trí cho mọi không gian trong nhà bạn."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Balo Mới"
          price="180.000 VNĐ"
          color="Xám"
          badge={false}
          des="Balo thời trang, nhẹ, bền bỉ, và tiện lợi cho các chuyến đi học hoặc du lịch."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Vật Dụng Gia Đình"
          price="25.000 VNĐ"
          color="Hỗn Hợp"
          badge={true}
          des="Bộ sản phẩm gia đình đa năng, tiện lợi và phù hợp cho mọi nhu cầu sử dụng hàng ngày."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Túi Du Lịch"
          price="220.000 VNĐ"
          color="Đen"
          badge={false}
          des="Túi du lịch cao cấp, chống thấm nước và thiết kế hiện đại, đáp ứng mọi chuyến đi của bạn."
        />
      </div>
    </div>
  );
};

export default BestSellers;
