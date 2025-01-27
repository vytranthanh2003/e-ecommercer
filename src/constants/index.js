import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../assets/images/index";

// eslint-disable-next-line no-unused-vars
const unusedImages = [
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
];

// =================== Danh sách Thanh điều hướng ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Trang chủ",
    link: "/",
  },
  {
    _id: 1002,
    title: "Cửa hàng",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "Giới thiệu",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Liên hệ",
    link: "/contact",
  },
  {
    _id: 1005,
    title: "Tin tức",
    link: "/journal",
  },
];

// =================== Dữ liệu Ưu đãi đặc biệt ========================
export const SplOfferData = [
  {
    _id: "201",
    img: spfOne,
    productName: "Nón cho bé trai",
    price: "35.00",
    color: "Trắng và Đen",
    badge: true,
    des: "Chiếc nón thời trang và dễ thương, phù hợp cho bé trai mọi lứa tuổi.",
  },
  {
    _id: "202",
    img: spfTwo,
    productName: "Bàn trà",
    price: "180.00",
    color: "Xám",
    badge: true,
    des: "Bàn trà hiện đại với thiết kế thanh lịch, thích hợp cho mọi không gian.",
  },
  {
    _id: "203",
    img: spfThree,
    productName: "Tai nghe",
    price: "25.00",
    color: "Hỗn hợp",
    badge: true,
    des: "Tai nghe chất lượng cao mang lại trải nghiệm âm thanh tuyệt vời.",
  },
  {
    _id: "204",
    img: spfFour,
    productName: "Kính râm",
    price: "220.00",
    color: "Đen",
    badge: true,
    des: "Kính râm thời trang, bảo vệ mắt khỏi ánh nắng mặt trời.",
  },
];

// =================== Các mục Phân trang ============================
export const paginationItems = [...SplOfferData];
