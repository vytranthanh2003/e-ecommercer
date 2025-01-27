import React from "react";

// Thành phần hiển thị tiêu đề trong danh sách footer
const FooterListTitle = ({ title }) => {
  return (
    <h3 className="text-xl font-bodyFont font-semibold mb-6">
      {title} {/* Tiêu đề sẽ được truyền từ props */}
    </h3>
  );
};

export default FooterListTitle;
