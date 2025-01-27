import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const TapChi = () => {
  const location = useLocation();
  const [viTriTruoc, setViTriTruoc] = useState("");
  useEffect(() => {
    setViTriTruoc(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Tạp Chí" prevLocation={viTriTruoc} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">THANHVY</span>{" "}
          Hệ thống cửa hàng của chúng tôi cung cấp các sản phẩm chất lượng cao,
          đáp ứng mọi nhu cầu của bạn!
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Tiếp tục mua sắm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TapChi;
