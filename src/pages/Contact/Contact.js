import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const LienHe = () => {
  const location = useLocation();
  const [viTriTruocDo, setViTriTruocDo] = useState("");
  useEffect(() => {
    setViTriTruocDo(location.state.data);
  }, [location]);

  const [tenKhachHang, setTenKhachHang] = useState("");
  const [email, setEmail] = useState("");
  const [tinNhan, setTinNhan] = useState("");

  // ========== Thông báo lỗi bắt đầu ở đây ============
  const [loiTenKhachHang, setLoiTenKhachHang] = useState("");
  const [loiEmail, setLoiEmail] = useState("");
  const [loiTinNhan, setLoiTinNhan] = useState("");
  // ========== Thông báo lỗi kết thúc ở đây ===========
  const [thongBaoThanhCong, setThongBaoThanhCong] = useState("");

  const xuLyTen = (e) => {
    setTenKhachHang(e.target.value);
    setLoiTenKhachHang("");
  };
  const xuLyEmail = (e) => {
    setEmail(e.target.value);
    setLoiEmail("");
  };
  const xuLyTinNhan = (e) => {
    setTinNhan(e.target.value);
    setLoiTinNhan("");
  };

  // ================= Xác thực Email bắt đầu ở đây =============
  const XacThucEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Xác thực Email kết thúc ở đây =============

  const xuLyGui = (e) => {
    e.preventDefault();
    if (!tenKhachHang) {
      setLoiTenKhachHang("Vui lòng nhập tên của bạn");
    }
    if (!email) {
      setLoiEmail("Vui lòng nhập email của bạn");
    } else {
      if (!XacThucEmail(email)) {
        setLoiEmail("Vui lòng nhập một email hợp lệ");
      }
    }
    if (!tinNhan) {
      setLoiTinNhan("Vui lòng nhập tin nhắn của bạn");
    }
    if (tenKhachHang && email && XacThucEmail(email) && tinNhan) {
      setThongBaoThanhCong(
        `Cảm ơn bạn ${tenKhachHang}, tin nhắn của bạn đã được gửi thành công. Thông tin chi tiết sẽ được gửi đến email của bạn tại ${email}.`
      );
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Liên Hệ" prevLocation={viTriTruocDo} />
      {thongBaoThanhCong ? (
        <p className="pb-20 w-96 font-medium text-green-500">{thongBaoThanhCong}</p>
      ) : (
        <form className="pb-20">
          <h1 className="font-titleFont font-semibold text-3xl">
            Điền vào biểu mẫu
          </h1>
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Tên
              </p>
              <input
                onChange={xuLyTen}
                value={tenKhachHang}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Nhập tên của bạn"
              />
              {loiTenKhachHang && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {loiTenKhachHang}
                </p>
              )}
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Email
              </p>
              <input
                onChange={xuLyEmail}
                value={email}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="email"
                placeholder="Nhập email của bạn"
              />
              {loiEmail && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {loiEmail}
                </p>
              )}
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Tin nhắn
              </p>
              <textarea
                onChange={xuLyTinNhan}
                value={tinNhan}
                cols="30"
                rows="3"
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                type="text"
                placeholder="Nhập tin nhắn của bạn"
              ></textarea>
              {loiTinNhan && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {loiTinNhan}
                </p>
              )}
            </div>
            <button
              onClick={xuLyGui}
              className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
            >
              Gửi
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LienHe;
