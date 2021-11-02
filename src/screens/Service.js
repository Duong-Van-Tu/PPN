import React, { useState, useEffect } from "react";
import BannerService from "../components/banner/BannerService";
import "../components/banner/Banner.css";
import Contact from "../components/contact/Contact";
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
      <BannerService></BannerService>
      <Contact></Contact>
      {/* <div className="service__main m-8">
        <div className="service__main-intro">
          <h2>Dịch Vụ Chính</h2>
          <p className="text-justify">
            <span className="font-bold">PPN LOGISTICS TRANSPORT </span>
            hỗ trợ tư vấn khách hàng các loại tài liệu xuất nhập khẩu, các quy
            định về hải quan địa phương, trách nhiệm và thuế. Chúng tôi luôn sẵn
            sàng làm việc với các cơ quan liên quan để tìm ra các giải pháp tốt
            nhất để thông quan cho lô hàng một cách nhanh nhất và kịp thời.
          </p>
        </div>
        <main className="service__container mt-8">
          <div className="our__services">
            <h2 className="our__services-title">
              Chúng tôi sẽ cung cấp cho bạn những gì?
            </h2>
            <div className="our__services-content">
              <img src="./images/about2.png" className="content-left" alt="" />
              <div className="content-right">
                Hỗ trợ khai báo và đăng ký hải quan điện tử
                <br /> Hỗ trợ các giải pháp hải quan cho lô hàng phức tạp
                <br /> Hỗ trợ tính thuế
                <br /> Hỗ trợ hoàn thuế và miễn giảm thuế
                <br /> Hỗ trợ kiểm hóa hàng xuất nhập khẩu
                <br /> Dịch vụ thông quan biên giới
                <br /> Dịch vụ hải quan tại cảng đến
                <br /> Tư vấn giấy phép xuất nhập khẩu
                <br /> Tư vấn thuế
                <br /> Tư vấn kiểm dịch: giấy kiểm dịch thực vật, giấy kiểm dịch
                động vật, hun trùng
                <br /> Tư vấn chứng từ: chứng nhận nguồn gốc, chứng nhận chất
                lượng
                <br /> Tư vấn các yêu cầu cho từng sản phẩm cụ thể
              </div>
            </div>
          </div>
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
            </div>
            <img
              src="./images/img1.png"
              className="h-full rounded-tr-lg"
              alt=""
            />
          </div>
          <div className="service__card">
            <img src="./images/img2.png" className="h-full w-1/2" alt="" />
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
            </div>
            <img src="./images/img3.png" className="h-ful" alt="" />
          </div>
          <div className="service__card rounded-b-lg">
            <img
              src="./images/img4.png"
              className="h-full rounded-bl-lg"
              alt=""
            />
            <div className="w-1/2 p-3 service__card-text">
              <h2 className="service__intro-title">Khai Thuế Hải Quan</h2>
              <p className="service__intro-paragraph p-2 text-justify">
                <b>PPN LOGISTICS TRANSPORT </b> hỗ trợ tư vấn khách hàng các
                loại tài liệu xuất nhập khẩu, các quy định về hải quan địa
                phương, trách nhiệm và thuế. Chúng tôi luôn sẵn sàng làm việc
                với các cơ quan liên quan để tìm ra các giải pháp tốt nhất để
                thông quan cho lô hàng một cách nhanh nhất và kịp thời
              </p>
            </div>
          </div>
        </main>
      </div> */}
    </div>
  );
};

export default Service;
