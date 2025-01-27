import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

// Thành phần nút mũi tên tiếp theo
const SampleNextArrow = (props) => {
  const { onClick } = props; // Nhận sự kiện khi nhấp chuột từ props
  return (
    <div
      className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-2"
      onClick={onClick} // Kích hoạt sự kiện khi nhấp chuột
    >
      <span className="text-xl">
        <FaLongArrowAltRight /> {/* Biểu tượng mũi tên */}
      </span>
    </div>
  );
};

export default SampleNextArrow;
