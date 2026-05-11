import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const AboutTestimonial = () => {
  return (
    <>
      <section className="testimonial__area-2">
        <div className="container g-0 line pb-140">
          <span className="line-3"></span>

          <div className="row g-0">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="testimonial__video">
                <video autoPlay muted loop>
                  <source src="assets/video/testimonial.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="testimonial__slider-wrapper-2">
                <div className="testimonial__slider">
                  <Swiper
                    modules={[FreeMode, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    freeMode={true}
                    loop={true}
                    speed={2000}
                    navigation={{
                      nextEl: ".next-button",
                      prevEl: ".prev-button",
                    }}
                  >
                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Flawless cloud infrastructure
                          </h2>
                          <p className="testimonial__text-2">
                            Okyere Jay Technologies completely transformed our enterprise infrastructure. 
                            Their zero-trust security implementation and scalable cloud architecture 
                            allowed us to handle a 500% increase in traffic without a single outage. 
                            Truly exceptional engineering and reliable delivery.
                          </p>
                          <h3 className="testimonial__author">Michael Chen</h3>
                          <h4 className="testimonial__role">CTO, FinTech Innovators</h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide ">
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Next-gen Web3 architecture
                          </h2>
                          <p className="testimonial__text-2">
                            The team at Okyere Jay Technologies delivered a robust and secure 
                            smart contract ecosystem for our decentralized exchange. Their deep 
                            understanding of cryptography and blockchain mechanics gave us the 
                            confidence to launch safely to thousands of users.
                          </p>
                          <h3 className="testimonial__author">Elena Rodriguez</h3>
                          <h4 className="testimonial__role">Founder, BlockChain Nexus</h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Unparalleled DevOps expertise
                          </h2>
                          <p className="testimonial__text-2">
                            By migrating our legacy systems to a modern Kubernetes environment 
                            and setting up automated CI/CD pipelines, they reduced our deployment 
                            times from days to mere minutes. Their technical competence is unmatched.
                          </p>
                          <h3 className="testimonial__author">David Kim</h3>
                          <h4 className="testimonial__role">VP of Engineering, CloudScale</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="testimonial__pagination">
                  <div style={{ cursor: "pointer" }} className="prev-button">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div style={{ cursor: "pointer" }} className="next-button">
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTestimonial;
