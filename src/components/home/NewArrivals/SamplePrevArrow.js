import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

// Thành phần nút mũi tên quay lại
const SamplePrevArrow = (props) => {
  const { onClick } = props; // Nhận sự kiện khi nhấp chuột từ props
  return (
    <div
      className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-2"
      onClick={onClick} // Kích hoạt sự kiện khi nhấp chuột
    >
      <span>
        <FaLongArrowAltLeft /> {/* Biểu tượng mũi tên quay lại */}
      </span>
    </div>
  );
};

export default SamplePrevArrow;
