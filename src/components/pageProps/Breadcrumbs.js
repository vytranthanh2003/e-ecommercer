import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const DuongDanDieuHuong = ({ viTriTruoc, tieuDe }) => {
  const location = useLocation();
  const [duongDanHienTai, setDuongDanHienTai] = useState("");

  useEffect(() => {
    setDuongDanHienTai(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
      {/* Tiêu đề của trang */}
      <h1 className="text-5xl text-primeColor font-titleFont font-bold">
        {tieuDe}
      </h1>

      {/* Đường dẫn điều hướng */}
      <p className="text-sm font-normal text-lightText capitalize flex items-center">
        <span> {viTriTruoc === "" ? "Trang chủ" : viTriTruoc}</span>
        <span className="px-1">
          <HiOutlineChevronRight />
        </span>
        <span className="capitalize font-semibold text-primeColor">
          {duongDanHienTai}
        </span>
      </p>
    </div>
  );
};

export default DuongDanDieuHuong;
