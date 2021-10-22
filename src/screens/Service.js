import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/banner/Banner.css";
import { services } from "../data/data";
const Service = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== services.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === services.length) {
      setSlideIndex(1);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timeoutSlider = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearTimeout(timeoutSlider);
    };
  });
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="service">
      <div className="service__banner">
        <div className="service__banner h-96">
          <div className="relative h-96 overflow-hidden">
            {services.map((data, index) => {
              return (
                <div
                  key={data.id}
                  className={
                    slideIndex === index + 1
                      ? "slide active-anim flex"
                      : "slide flex"
                  }
                >
                  <div className="service__slider-left h-96 w-1/3 flex flex-col items-center justify-center">
                    <h1 className="service__slider-title relative">
                      {data.title}
                    </h1>
                    <a href="#sea-way">
                      <button className="btn my-4">
                        Chi tiết{" "}
                        <i class="fad fa-chevron-double-right text-xs"></i>
                      </button>
                    </a>
                  </div>
                  <div className="service__slider-right w-2/3 h-96">
                    <img
                      src={`./images/img${index + 1}.png`}
                      className="w-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}

            <div className="container-dots">
              {Array.from({ length: 5 }).map((item, index) => (
                <div
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="service__main mx-8 mt-8 pb-8">
        <div className="service__main-intro">
          <h2>Dịch Vụ Chính</h2>
          <p>
            Công ty chúng tôi tự hào mang đến những dịch vụ Logistics toàn diện,
            thiết kế và tư vấn phù hợp nhu cầu khách hàng. Với 18 văn phòng trải
            khắp Việt Nam, cùng đội ngũ đối tác toàn thế giới, chúng tôi luôn
            cung cấp giải pháp vận chuyển phục vụ xuất nhập khẩu kịp thời và
            chất lượng nhất.
          </p>
        </div>
        <main className="service__container mt-8">
          <div className="service__card rounded-t-lg">
            <div className="w-1/2 p-3 service__card-text">
              <h2 className="service__intro-title">Vận Chuyển Đường Biển</h2>
              <p className="service__intro-paragraph p-2 text-justify">
                Không cần lo lắng về việc vận chuyển khối lượng hàng lớn tới
                những địa điểm xa ở bất cứ nơi đâu trên thế giới, không còn tình
                trạng rớt hàng ở cảng đi và các cảng chuyển tải, bởi dịch vụ vận
                chuyển đường biển của chúng tôi có thể đáp ứng đầy đủ nhu cầu
                vận chuyển hàng hóa đến được tất cả các cảng trong/ ngoài nước
                bằng giải pháp vận tải tối ưu. <b> PPN LOGISTICS </b>. sở hữu
                hợp đồng đối tác với các hãng tàu lớn và hệ thống đại lý uy tín
                trên toàn thế giới, do đó, dịch vụ vận chuyển đường biển của
                chúng tôi được đảm bảo chất lượng dịch vụ với mức giá cạnh tranh
                nhất.
              </p>
              <Link to="/service" className="btn service__btn">
                Chi tiết <i class="fad fa-chevron-double-right text-xs"></i>
              </Link>
            </div>
            <img src="./images/img1.png" className="h-full rounded-tr-lg" alt="" />
          </div>
          <div className="service__card" id="sea-way">
            <img src="./images/img2.png" className="h-full" alt="" />
            <div className="w-1/2 p-3 service__card-text">
              <h2 className="service__intro-title">Gom Hàng Lẻ LCL</h2>
              <p className="service__intro-paragraph text-justify p-2">
                Dịch vụ Gom Hàng Lẻ (LCL) của <b> PPN LOGISTICS </b>.
                <b> PPN LOGISTICS </b>. là Top 10 Việt Nam (Top 2 khu vực phía
                Bắc) trong lĩnh vực Gom hàng lẻ nhập khẩu (Inbound
                Consolidation). <b> PPN LOGISTICS </b>. tự hào nằm trong những
                nhà cung cấp dịch vụ gom hàng lẻ hàng đầu tại Việt Nam hiện nay,
                đáp ứng tất cả các nhu cầu vận chuyển đa quốc gia hoàn chỉnh cho
                các lô hàng với khối lượng không đủ một container.
              </p>
              <Link to="/service" className="btn service__btn">
                Chi tiết <i class="fad fa-chevron-double-right text-xs"></i>
              </Link>
            </div>
          </div>
          <div className="service__card">
            <div className="w-1/2 p-3 service__card-text">
              <h2 className="service__intro-title">Vận Chuyển Đường Bộ</h2>
              <p className="service__intro-paragraph p-2 text-justify">
                Vận tải đường bộ xuyên biên giới có thể giúp các doanh nghiệp
                tiết kiệm thời gian vận chuyển so với đường biển và tiết kiệm
                chi phí hơn so với đường hàng không. Nắm bắt được nhu cầu của
                khách hàng, <b> PPN LOGISTICS </b> đã phát triển dịch vụ vận
                chuyển xuyên biên giới đến Trung Quốc, Cambodia, Laos cũng như
                vận chuyển nội địa trong nước. Kết hợp với dịch vụ thông quan
                chuyên nghiệp, chúng tôi đảm bảo quá trình giao nhận tại các cửa
                khẩu sẽ được thực hiện nhanh chóng và thuận lợi hơn rất nhiều
                cho khách hàng. Sở hữu hệ thống hơn 60 xe tải hiện đại, đủ chủng
                loại, cùng các hợp đồng thầu phụ, phục vụ đa dạng nhu cầu của
                khách hàng, tất cả các xe chuyên chở đều gắn định vị GPS,
                <b> PPN LOGISTICS </b>. tự tin mang đến chất lượng dịch vụ hoàn
                hảo nhất.
              </p>
              <Link to="/service" className="btn service__btn">
                Chi tiết <i class="fad fa-chevron-double-right text-xs"></i>
              </Link>
            </div>
            <img src="./images/img3.png" className="h-ful" alt="" />
          </div>
          <div className="service__card rounded-b-lg">
            <img src="./images/img4.png" className="h-full rounded-bl-lg" alt="" />
            <div className="w-1/2 p-3 service__card-text">
              <h2 className="service__intro-title">Khai Thuế Hải Quan</h2>
              <p className="service__intro-paragraph p-2 text-justify">
                Xóa bỏ mọi nỗi lo về quy trình giấy tờ, tiết kiệm thời gian với
                dịch vụ Khai thuê Hải Quan của chúng tôi! Sở hữu đội ngũ chuyên
                gia đông đảo – giàu kinh nghiệm, <b> PPN LOGISTICS </b>
                có thể xử lý được toàn bộ các giấy tờ, thủ tục liên quan đến Hải
                quan và giấy phép xuất nhập khẩu trong thời gian ngắn nhất, cùng
                mức phí hấp dẫn nhất.
              </p>
              <Link to="/service" className="btn service__btn">
                Chi tiết <i class="fad fa-chevron-double-right text-xs"></i>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Service;
