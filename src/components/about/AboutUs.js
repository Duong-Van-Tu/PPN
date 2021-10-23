import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="home__about flex mx-16 mt-16 mb-8">
      <div className="home__about-staff">
        <iframe
          width="560"
          height="350"
          src="https://www.youtube.com/embed/Rrp-FNYHC4s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="home__about-introduce">
        <div className="home__about-title pb-4">Về Chúng tôi</div>
        <div className="home__about-paragraph">
          <p>
            Công ty <b> TNHH Giao Nhận Vận Tải PPN </b> hoạt động trong lĩnh vực
            dịch vụ vận chuyển quốc tế, dịch vụ giao nhận khai Hải Quan và vận
            chuyển nội địa.
          </p>

          <p className="py-2">
            Với đội ngũ nhân viên nhiều kinh nghiệm trong lĩnh vực cung cấp dịch
            vụ vận chuyển và giao nhận, đã và đang được sự tín nhiệm của các
            khách hàng về chất lượng dịch vụ và giá cả cạnh tranh.
          </p>

          <p>
            Chúng tôi luôn luôn cải tiến, nâng cao chất lượng dịch vụ và đặt mục
            tiêu phấn đấu ngày càng hoàn thiện trở thành nhà cung cấp dịch vụ
            vận chuyển chất lượng hàng đầu.
          </p>
        </div>
        <Link to="/about">
          <button className="btn home__about-btn">
            Xem thêm <i className="fad fa-chevron-double-right text-xs"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
