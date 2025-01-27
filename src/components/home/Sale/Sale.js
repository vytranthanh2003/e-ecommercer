import React from "react";
import { Link } from "react-router-dom";
import { saleImgOne, saleImgTwo, saleImgThree } from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  const images = [
    { src: saleImgOne, id: 1 },
    { src: saleImgTwo, id: 2 },
    { src: saleImgThree, id: 3 },
  ];

  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      {/* Hình ảnh đầu tiên */}
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/shop">
          <Image className="h-full w-full object-cover" imgSrc={images[0].src} />
        </Link>
      </div>

      {/* Các hình ảnh còn lại */}
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        {images.slice(1).map((image) => (
          <div key={image.id} className="h-1/2 w-full">
            <Link to="/shop">
              <Image className="h-full w-full object-cover" imgSrc={image.src} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;
