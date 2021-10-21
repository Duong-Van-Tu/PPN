import React, { useEffect, useState } from "react";
import { services } from "../data/data";
import Contact from "../components/contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
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
    AOS.init({
      offset: 400, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
    });
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
    <div className="about">
      <div className="about__banner h-96">
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
                  <button className="btn my-4">
                    Chi tiết <i class="fad fa-chevron-double-right text-xs"></i>
                  </button>
                </div>
                <div className="w-2/3 h-96">
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
      <div className="about__main mx-16 my-12">
        <div className="about__intro flex">
          <img
            src="./images/about1.png"
            className="w-full rounded-l-lg"
            alt=""
          />
          <div className="about__intro-right rounded-r-lg">
            <h2 className="about__intro-title">Về Chúng Tôi</h2>
            <p className="about__intro-para px-8 text-justify">
              Thành lập từ năm 2008,{" "}
              <b> DOLPHIN SEA AIR SERVICES CORPORATION </b> là công ty chuyên
              cung cấp dịch vụ logistics toàn diện. Hiện tại, chúng tôi sở hữu
              một đội ngũ chuyên gia và nhân viên hơn 200 người, giàu kinh
              nghiệm, được đào tạo bài bản; hệ thống 18 văn phòng chi nhánh và
              văn phòng đại diện phủ khắp các thành phố lớn cũng như các khu
              công nghiệp trọng điểm của Việt Nam. Sau hơn môt thập kỷ phát
              triển, Dolphin được đánh giá là một trong những công ty Top đầu
              tại Việt Nam nói riêng và khu vực nói chung, cung cấp những dịch
              vụ giao nhận vận chuyển quốc tế đa dạng, đáng tin cậy và đầy linh
              hoạt.
            </p>
            <p className="px-8 text-justify">
              Kim chỉ nam cho các hoạt động của công ty chính là tinh thần và
              đặc tính của loài cá heo:{" "}
              <i>
                {" "}
                “Tốc độ, Ứng biến kịp thời, Tinh thần đồng đội, Tận tâm giúp đỡ,
                Luôn thân thiện và Hiền hòa” với khẩu hiệu{" "}
              </i>
              <b>“SPEEDY WITH BEST CARE”.</b>
            </p>
          </div>
        </div>
        <div className="my-8">
          <Contact></Contact>
        </div>
        <div className="about__bottom">
          <div className="about__bottom-top flex">
            <img src="./images/about2.png" className="w-1/2 h-80" alt="" />
            <h2 className="about__right-title flex justify-center items-center w-full">
              Vì sao nên chọn chúng tôi?
            </h2>
          </div>
          <div className="about__bottom-list p-4">
            <div className="flex about__item-group pb-8">
              <div
                className="flex items-center w-1/2 pr-6"
                data-aos="fade-right"
                data-aos-once="true"
              >
                <div className="about__item rounded-full">
                  <div className="about__item-1 w-24 h-24 flex justify-center items-center">
                    <div className="item-1-number w-20 h-20 rounded-full font-medium text-5xl flex justify-center items-center">
                      1
                    </div>
                  </div>
                </div>
                <div className="item-text-1 flex-1">
                  Tốc độ nhanh chóng, vượt trội
                </div>
              </div>
              <div
                className="item__dark flex items-center w-1/2 pl-6"
                data-aos="fade-left"
                data-aos-once="true"
              >
                <div className="about__item rounded-full">
                  <div className="about__item-1 w-24 h-24 flex justify-center items-center">
                    <div className="item-1-number w-20 h-20 rounded-full font-medium text-5xl flex justify-center items-center">
                      2
                    </div>
                  </div>
                </div>
                <div className="item-text-1 flex-1">
                  Đội ngũ nhân viên chuyên nghiệp
                </div>
              </div>
            </div>
            <div className="flex about__item-group pb-8">
              <div
                className="item__dark flex items-center w-1/2 pr-6"
                data-aos="fade-right"
                data-aos-once="true"
              >
                <div className="about__item rounded-full">
                  <div className="about__item-1 w-24 h-24 flex justify-center items-center">
                    <div className="item-1-number w-20 h-20 rounded-full font-medium text-5xl flex justify-center items-center">
                      3
                    </div>
                  </div>
                </div>
                <div className="item-text-1 flex-1">
                  Phục vụ tận tâm, nâng tầm chất lượng
                </div>
              </div>
              <div
                className=" flex items-center w-1/2 pl-6"
                data-aos="fade-left"
                data-aos-once="true"
              >
                <div className="about__item rounded-full">
                  <div className="about__item-1 w-24 h-24 flex justify-center items-center">
                    <div className="item-1-number w-20 h-20 rounded-full font-medium text-5xl flex justify-center items-center">
                      4
                    </div>
                  </div>
                </div>
                <div className="item-text-1 flex-1">
                  Linh hoạt - Thích ứng -Kịp thời
                </div>
              </div>
            </div>{" "}
            <div className="flex about__item-group pb-8">
              <div
                className="flex items-center w-1/2 pr-6"
                data-aos="fade-right"
                data-aos-once="true"
              >
                <div className="about__item rounded-full">
                  <div className="about__item-1 w-24 h-24 flex justify-center items-center">
                    <div className="item-1-number w-20 h-20 rounded-full font-medium text-5xl flex justify-center items-center">
                      5
                    </div>
                  </div>
                </div>
                <div className="item-text-1 flex-1">
                  Sẵn sàng giúp đỡ khi có yêu cầu
                </div>
              </div>
              <div
                className="item__dark flex items-center w-1/2 pl-6"
                data-aos="fade-left"
                data-aos-once="true"
              >
                <div className="about__item rounded-full">
                  <div className="about__item-1 w-24 h-24 flex justify-center items-center">
                    <div className="item-1-number w-20 h-20 rounded-full font-medium text-5xl flex justify-center items-center">
                      6
                    </div>
                  </div>
                </div>
                <div className="item-text-1 flex-1">Chi phí giá cả hợp lý</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
