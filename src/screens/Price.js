import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Price = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="price md:h-screen md:grid md:grid-cols-9">
      <section className="sidebar bg-green-400 md:col-span-2">
        <div className="py-4 px-2">
          <div className="text-white mt-1">
            <div className="px-2.5 py-1.5 flex items-center space-x-3 rounded-md">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  className="w-full"
                  src="./images/icon-service.png"
                  alt="MD. Shibbir Ahmed"
                />
              </div>
              <div className="flex flex-col justify-center content-start py-2">
                <h2 className="pl-3  text-2xl text-yellow ">Dịch Vụ</h2>
              </div>
            </div>
            <Link
              to="/service"
              className="sidebar__link px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
            >
              <div className="flex flex justify-center items-center content-start py-2">
                <i class="fad fa-plane-departure"></i>
                <h2 className="pl-3">Vận Chuyển Đường Không</h2>
              </div>
            </Link>
            <Link
              to="/service"
              className="sidebar__link px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
            >
              <div className="flex flex justify-center items-center content-start py-2">
                <i class="fad fa-ship"></i>
                <h2 className="pl-3">Vận Chuyển Đường Biển</h2>
              </div>
            </Link>{" "}
            <Link
              to="/service"
              className="sidebar__link px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
            >
              <div className="flex flex justify-center items-center content-start py-2">
                <i class="fad fa-shipping-fast"></i>
                <h2 className="pl-3">Vận Chuyển Đường Bộ</h2>
              </div>
            </Link>{" "}
            <Link
              to="/service"
              className="sidebar__link px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
            >
              <div className="flex flex justify-center items-center content-start py-2">
                <i class="fad fa-dumpster"></i>
                <h2 className="pl-3">Gom Hàng Lẻ LCL</h2>
              </div>
            </Link>{" "}
            <Link
              to="/service"
              className="sidebar__link px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
            >
              <div className="flex flex justify-center items-center content-start py-2">
                <i class="fad fa-money-check-edit"></i>
                <h2 className="pl-3">Khai Thuế Hải Quan</h2>
              </div>
            </Link>
            <Link
              to="/service"
              className="sidebar__link px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center content-start">
                <h2 className="pl-3">Xem thêm</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 my-2" />
      </section>
      <main className="price__form md:col-span-7">
        <form className="w-full max-w-4xl mx-auto py-6 bg-gray-200 my-4 px-4 shadow-lg rounded-xl mt-8">
          <h1 className="text-center text-3xl text-gray-700 pb-2">
            Nhận Báo Giá
          </h1>
          <div className="flex py-2">
            <span className="flex items-center justify-center border border-gray-400 border-r-0 py-2 px-3 text-gray-700">
              <i class="fad fa-user"></i>
            </span>
            <input
              className="w-full border border-gray-400 p-2 focus:outline-none rounded-lg"
              type="text"
              placeholder="Họ tên"
              required
            />
          </div>
          <div className="flex py-2">
            <span className="flex items-center justify-center border border-gray-400 border-r-0 py-2 px-3 text-gray-700">
              <i className="fad fa-phone"></i>
            </span>
            <input
              className="w-full border border-gray-400 p-2 focus:outline-none rounded-lg"
              type="text"
              placeholder="Số điện thoại"
              required
            />
          </div>
          <div className="flex py-2">
            <span className="flex items-center justify-center border border-gray-400 border-r-0 py-2 px-3 text-gray-700">
              <i class="fad fa-envelope-square"></i>
            </span>
            <input
              className="w-full border border-gray-400 p-2 focus:outline-none rounded-lg"
              type="text"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex py-2">
            <span className="flex items-center justify-center border border-gray-400 border-r-0 py-2 px-3 text-gray-700">
              <i class="fad fa-plane-departure"></i>
            </span>
            <div className="relative w-full border border-gray-400">
              <select className="block p-2 w-full appearance-none focus:outline-none">
                <option>Dịch Vụ</option>
                <option>Vận chuyển đường không</option>
                <option>Vận chuyển đường biển</option>
                <option>Vận chuyển đường bộ</option>
                <option>Gom hàng lẻ LCL</option>
                <option>Khai thuế hải quan</option>
              </select>
              <div className="flex items-center pointer-events-none absolute inset-y-0 right-0 px-2 text-gray-700">
                <i class="fad fa-angle-down"></i>
              </div>
            </div>
          </div>
          <div className="flex py-2">
            <span className="flex items-center justify-center border border-gray-400 border-r-0 py-2 px-3 text-gray-700">
              <i class="fad fa-comments"></i>
            </span>
            <div className="relative w-full border border-gray-400">
              <textarea
                className="block p-2 h-24 w-full appearance-none focus:outline-none rounded-lg"
                name="tt"
                placeholder="Lời nhắn của bạn"
              ></textarea>
            </div>
          </div>
          <div className="flex py-2 justify-center">
            <button className="btn btn-submit">Gửi</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Price;
