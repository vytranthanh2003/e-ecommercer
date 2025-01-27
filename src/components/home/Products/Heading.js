import React from "react";
import PropTypes from "prop-types";

const Heading = ({ heading, alignment = "left", underline = false, color = "black" }) => {
  return (
    <div
      className={`text-3xl font-semibold pb-6 ${
        alignment === "center" ? "text-center" : alignment === "right" ? "text-right" : "text-left"
      }`}
      style={{ color }}
    >
      {heading}
      {underline && <div className="w-16 h-1 bg-primeColor mt-2 mx-auto"></div>}
    </div>
  );
};

// Xác định kiểu dữ liệu và giá trị mặc định
Heading.propTypes = {
  heading: PropTypes.string.isRequired, // Tiêu đề bắt buộc phải có
  alignment: PropTypes.oneOf(["left", "center", "right"]), // Căn chỉnh văn bản
  underline: PropTypes.bool, // Hiển thị gạch chân dưới tiêu đề
  color: PropTypes.string, // Màu chữ
};

export default Heading;
