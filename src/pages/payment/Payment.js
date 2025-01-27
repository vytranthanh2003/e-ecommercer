import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const ThanhToan = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cổng thanh toán" />
      <div className="pb-10">
        <p>Cổng thanh toán chỉ áp dụng cho bản dựng Sản xuất.</p>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Khám phá thêm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThanhToan;
