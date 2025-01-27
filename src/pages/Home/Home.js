import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import SanPhamBanChay from "../../components/home/BestSellers/BestSellers";
import SanPhamMoi from "../../components/home/NewArrivals/NewArrivals";
import KhuyenMai from "../../components/home/Sale/Sale";
import UuDaiDacBiet from "../../components/home/SpecialOffers/SpecialOffers";
import SanPhamNam from "../../components/home/YearProduct/YearProduct";

const TrangChu = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <KhuyenMai />
        <SanPhamMoi />
        <SanPhamBanChay />
        <SanPhamNam />
        <UuDaiDacBiet />
      </div>
    </div>
  );
};

export default TrangChu;
