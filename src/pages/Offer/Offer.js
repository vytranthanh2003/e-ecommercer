import React, { useState } from "react";
import UuDaiDacBiet from "../../components/home/SpecialOffers/SpecialOffers";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const UuDai = () => {
  const [viTriTruoc] = useState("");

  return (
    <div className="max-w-container mx-auto">
      <Breadcrumbs title="Ưu Đãi" prevLocation={viTriTruoc} />
      <div className="pb-10">
        <UuDaiDacBiet />
      </div>
    </div>
  );
};

export default UuDai;
