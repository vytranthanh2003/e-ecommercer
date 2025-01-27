import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    hoTen: "",
    email: "",
    matKhau: "",
    xacNhanMatKhau: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.hoTen) newErrors.hoTen = "Họ tên không được để trống.";
    if (!formData.email) {
      newErrors.email = "Email không được để trống.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ.";
    }
    if (!formData.matKhau) newErrors.matKhau = "Mật khẩu không được để trống.";
    if (formData.matKhau !== formData.xacNhanMatKhau) {
      newErrors.xacNhanMatKhau = "Mật khẩu xác nhận không khớp.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      setErrors({});
      setSuccessMessage("Đăng ký thành công!");
      // Xử lý logic đăng ký ở đây (nếu cần)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Đăng Ký</h2>
        {successMessage && (
          <div className="mb-4 text-green-600 text-center">{successMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Họ và tên</label>
            <input
              type="text"
              name="hoTen"
              value={formData.hoTen}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.hoTen ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.hoTen && <p className="text-red-500 text-sm mt-1">{errors.hoTen}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              name="matKhau"
              value={formData.matKhau}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.matKhau ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.matKhau && <p className="text-red-500 text-sm mt-1">{errors.matKhau}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
            <input
              type="password"
              name="xacNhanMatKhau"
              value={formData.xacNhanMatKhau}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.xacNhanMatKhau ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.xacNhanMatKhau && (
              <p className="text-red-500 text-sm mt-1">{errors.xacNhanMatKhau}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Đăng Ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
