import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);
  const items = [
    {
      _id: 990,
      title: "HÀNG MỚI NHẬP",
      icons: true,
    },
    {
      _id: 991,
      title: "THỜI TRANG",
    },
    {
      _id: 992,
      title: "GIÀY DÉP",
      icons: true,
    },
    {
      _id: 993,
      title: "PHỤ KIỆN",
    },
    {
      _id: 994,
      title: "ĐỒNG HỒ",
    },
  ];
  return (
    <div className="w-full">
      <NavTitle title="MUA HÀNG THEO DANH MỤC" icons={false} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {items.map(({ _id, title, icons }) => (
            <li
              key={_id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
            >
              {title}
              {icons && (
                <span
                  onClick={() => setShowSubCatOne(!showSubCatOne)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
