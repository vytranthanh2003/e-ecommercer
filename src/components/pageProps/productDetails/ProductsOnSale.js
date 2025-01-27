import React from "react";
import { SplOfferData } from "../../../constants";

const SanPhamDangGiamGia = () => {
  return (
    <div>
      {/* Tiêu đề của danh sách sản phẩm */}
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Sản phẩm đang giảm giá
      </h3>

      {/* Danh sách sản phẩm */}
      <div className="flex flex-col gap-2">
        {SplOfferData.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            {/* Hình ảnh sản phẩm */}
            <div>
              <img className="w-24" src={item.img} alt={item.productName} />
            </div>

            {/* Thông tin sản phẩm */}
            <div className="flex flex-col gap-2 font-titleFont">
              <p className="text-base font-medium">{item.tenSanPham}</p>
              <p className="text-sm font-semibold">${item.gia}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SanPhamDangGiamGia;
