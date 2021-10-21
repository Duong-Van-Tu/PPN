import React, { useState, useEffect } from "react";
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
        <div className="home__about-title">Về Chúng tôi</div>
        <div className="home__about-paragraph">
          <p>
            Thành lập từ năm 2008, <b> DOLPHIN SEA AIR SERVICES CORPORATION </b>{" "}
            là công ty chuyên cung cấp dịch vụ logistics toàn diện. Hiện tại,
            chúng tôi sở hữu một đội ngũ chuyên gia và nhân viên hơn 200 người,
            giàu kinh nghiệm, được đào tạo bài bản; hệ thống 18 văn phòng chi
            nhánh và văn phòng đại diện phủ khắp các thành phố lớn cũng như các
            khu công nghiệp trọng điểm của Việt Nam. Sau hơn môt thập kỷ phát
            triển, Dolphin được đánh giá là một trong những công ty Top đầu tại
            Việt Nam nói riêng và khu vực nói chung, cung cấp những dịch vụ giao
            nhận vận chuyển quốc tế đa dạng, đáng tin cậy và đầy linh hoạt.
          </p>
          <p>
            Kim chỉ nam cho các hoạt động của công ty chính là tinh thần và đặc
            tính của loài cá heo:{" "}
            <i>
              {" "}
              “Tốc độ, Ứng biến kịp thời, Tinh thần đồng đội, Tận tâm giúp đỡ,
              Luôn thân thiện và Hiền hòa” với khẩu hiệu{" "}
            </i>
            <b>“SPEEDY WITH BEST CARE”.</b>
          </p>
        </div>
        <button className="home__about-btn">
          Xem thêm <i className="fad fa-chevron-double-right text-xs"></i>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
