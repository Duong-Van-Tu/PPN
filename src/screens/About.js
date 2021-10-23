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
        <div className="about__banner-slider relative h-96 overflow-hidden">
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
                <div className="service__slider-right w-2/3">
                  <img
                    src={`./images/img${index + 1}.png`}
                    className="w-full h-full object-cover"
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
          <img src="./images/about1.png" className="rounded-l-lg" alt="" />
          <div className="about__intro-right rounded-r-lg">
            <h2 className="about__intro-title">Về Chúng Tôi</h2>
            <div className="text-justify pb-4 px-4 text-lg font-medium">
              <p>
                Công ty <b> TNHH Giao Nhận Vận Tải PPN </b> hoạt động trong lĩnh
                vực dịch vụ vận chuyển quốc tế, dịch vụ giao nhận khai Hải Quan
                và vận chuyển nội địa.
              </p>

              <p className="py-2">
                Với đội ngũ nhân viên nhiều kinh nghiệm trong lĩnh vực cung cấp
                dịch vụ vận chuyển và giao nhận, đã và đang được sự tín nhiệm
                của các khách hàng về chất lượng dịch vụ và giá cả cạnh tranh.
              </p>

              <p>
                Chúng tôi luôn luôn cải tiến, nâng cao chất lượng dịch vụ và đặt
                mục tiêu phấn đấu ngày càng hoàn thiện trở thành nhà cung cấp
                dịch vụ vận chuyển chất lượng hàng đầu.
              </p>
            </div>
          </div>
        </div>
        <div className="my-8">
          <Contact></Contact>
        </div>
        <div className="about__bottom">
          <div className="about__bottom-top flex">
            <img src="./images/about2.png" className="w-1/2 h-80" alt="" />
            <h2 className="about__right-title flex justify-center items-center w-1/2">
              Vì sao nên chọn chúng tôi?
            </h2>
          </div>
          <div className="about__bottom-list px-4 py-8">
            <div className="flex about__item-group pb-8">
              <div
                className="bottom-item flex items-center w-1/2 pr-6"
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
                className="bottom-item item__dark flex items-center w-1/2 pl-6"
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
                className="bottom-item item__dark item__odd flex items-center w-1/2 pr-6"
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
                className="bottom-item item__even flex items-center w-1/2 pl-6"
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
                className="bottom-item flex items-center w-1/2 pr-6"
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
                className="bottom-item item__dark flex items-center w-1/2 pl-6"
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
