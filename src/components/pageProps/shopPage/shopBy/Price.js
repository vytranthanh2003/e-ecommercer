import React from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 100.000,
      priceTwo: 200.000,
    },
    {
      _id: 951,
      priceOne: 50.0000,
      priceTwo: 60.0000,
    },
    {
      _id: 952,
      priceOne: 100.000,
      priceTwo: 200.000,
    },
    {
      _id: 953,
      priceOne: 200.000,
      priceTwo: 400.000,
    },
    {
      _id: 954,
      priceOne: 400.000,
      priceTwo: 600.000,
    },
    {
      _id: 955,
      priceOne: 600.000,
      priceTwo: 900.000,
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="MUA THEO GIÁ" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              {item.priceOne.toFixed(2)} - {item.priceTwo.toFixed(2)}VND
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
