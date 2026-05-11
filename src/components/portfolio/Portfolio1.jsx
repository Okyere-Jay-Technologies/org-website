import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import $ from "jquery";
import Link from "next/link";
import Portfilio61 from "../../../public/assets/imgs/portfolio/6/1.jpg";
import Portfilio62 from "../../../public/assets/imgs/portfolio/6/2.jpg";
import Portfilio63 from "../../../public/assets/imgs/portfolio/6/3.jpg";
import Portfilio64 from "../../../public/assets/imgs/portfolio/6/4.jpg";
import Portfilio65 from "../../../public/assets/imgs/portfolio/6/5.jpg";
import Portfilio66 from "../../../public/assets/imgs/portfolio/6/6.jpg";
import Portfilio67 from "../../../public/assets/imgs/portfolio/6/7.jpg";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

gsap.registerPlugin(ScrollTrigger);

const Portfolio1 = () => {
  const charAnim = useRef();
  const charAnim2 = useRef();
  const portfolioItemList = useRef();
  const PortfolioTotal = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current, 0.15);
    if (typeof window !== "undefined") {
      const totalPortfolioItems = portfolioItemList.current.children.length;

      if (totalPortfolioItems) {
        PortfolioTotal.current.innerHTML = totalPortfolioItems;
      }

      $(document).on("scroll", function () {
        $(".portfolio__item-6").each(function () {
          if (
            $(this).position().top <= $(document).scrollTop() &&
            $(this).position().top + $(this).outerHeight() >
              $(document).scrollTop()
          ) {
            var item_num = $(this).data("portfitem");
            $(".portfolio__current").html(item_num);
            $(this).addClass("active").siblings().removeClass("active");
          }
        });
      });

      let tHero = gsap.context(() => {
        const portfolio_listss = gsap.utils.toArray(".portfolio__item-6 img");
        if (portfolio_listss) {
          portfolio_listss.forEach((item, i) => {
            gsap.from(item, {
              scrollTrigger: {
                trigger: item,
                start: "top center",
                scrub: 1.5,
              },
              scale: 2.5,
              duration: 1,
            });
          });
        }
        function mousemoveHandler(e) {
          const target = e.target;

          let tl = gsap.timeline({
            defaults: {
              x: e.clientX,
              y: e.clientY,
            },
          });
          let t2 = gsap.timeline({
            defaults: {
              x: e.clientX,
              y: e.clientY,
            },
          });
        }
        ScrollTrigger.create({
          trigger: ".portfolio__wrapper-6",
          start: "top top",
          end: "bottom bottom",
          pin: ".portfolio__title-wrap-6",
          pinSpacing: false,
        });
        document.addEventListener("mousemove", mousemoveHandler);
      });
      return () => {
        tHero.revert();
      };
    }
  }, []);
  return (
    <>
      <section className="portfolio__area-6">
        <div className="container line pt-100 pb-140">
          <span className="line-3"></span>
          <div className="zi-9">
            <div className="row">
              <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
                <div className="sec-title-wrapper portfolio__title-wrap-6">
                  <div className="">
                    <h2
                      className="sec-sub-title animation__char_come"
                      ref={charAnim}
                    >
                      Featured
                    </h2>
                    <h3
                      className="sec-title animation__char_come_long"
                      ref={charAnim2}
                    >
                      Work
                    </h3>
                    <p>
                      View the full case study of our recent featured and
                      awesome works that we created for our clients.
                    </p>
                  </div>
                  <div className="portfolio__pagination-6">
                    <span className="portfolio__current">01</span> / 0
                    <span
                      className="portfolio__total"
                      ref={PortfolioTotal}
                    ></span>
                  </div>
                </div>
              </div>

              <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-6">
                <div className="portfolio__wrapper-6">
                  <div className="portfolio__list-6" ref={portfolioItemList}>
                    <div className="portfolio__item-6" data-portfitem="1">
                      <Link href="/portfolio-details-dark">
                        <Image
                          priority
                          width={770}
                          style={{ height: "auto" }}
                          src={Portfilio61}
                          alt="Global FinTech Infrastructure"
                          data-speed="0.4"
                        />
                        <div className="portfolio__content-6">
                          <h4 className="portfolio__title-6">Global FinTech Infrastructure</h4>
                          <h5 className="portfolio__date">April 2023</h5>
                        </div>
                      </Link>
                    </div>

                    <div className="portfolio__item-6" data-portfitem="2">
                      <Link href="/portfolio-details-dark">
                        <Image
                          priority
                          width={770}
                          style={{ height: "auto" }}
                          src={Portfilio62}
                          alt="AI Data Pipeline"
                          data-speed="0.4"
                        />
                        <div className="portfolio__content-6">
                          <h4 className="portfolio__title-6">AI-Powered Data Pipeline</h4>
                          <h5 className="portfolio__date">September 2023</h5>
                        </div>
                      </Link>
                    </div>

                    <div className="portfolio__item-6" data-portfitem="3">
                      <Link href="/portfolio-details-dark">
                        <Image
                          priority
                          width={770}
                          style={{ height: "auto" }}
                          src={Portfilio63}
                          alt="Enterprise Cloud Migration"
                          data-speed="0.4"
                        />
                        <div className="portfolio__content-6">
                          <h4 className="portfolio__title-6">Enterprise Cloud Migration</h4>
                          <h5 className="portfolio__date">January 2024</h5>
                        </div>
                      </Link>
                    </div>

                    <div className="portfolio__item-6" data-portfitem="4">
                      <Link href="/portfolio-details-dark">
                        <Image
                          priority
                          width={770}
                          style={{ height: "auto" }}
                          src={Portfilio64}
                          alt="Zero-Trust Security Architecture"
                          data-speed="0.4"
                        />
                        <div className="portfolio__content-6">
                          <h4 className="portfolio__title-6">Zero-Trust Security Architecture</h4>
                          <h5 className="portfolio__date">March 2024</h5>
                        </div>
                      </Link>
                    </div>

                    <div className="portfolio__item-6" data-portfitem="5">
                      <Link href="/portfolio-details-dark">
                        <Image
                          priority
                          width={770}
                          style={{ height: "auto" }}
                          src={Portfilio65}
                          alt="High-Frequency Trading Network"
                          data-speed="0.4"
                        />
                        <div className="portfolio__content-6">
                          <h4 className="portfolio__title-6">High-Frequency Trading Network</h4>
                          <h5 className="portfolio__date">May 2024</h5>
                        </div>
                      </Link>
                    </div>

                    <div className="portfolio__item-6" data-portfitem="6">
                      <Link href="/portfolio-details-dark">
                        <Image
                          priority
                          width={770}
                          style={{ height: "auto" }}
                          src={Portfilio66}
                          alt="Predictive Analytics Engine"
                          data-speed="0.4"
                        />
                        <div className="portfolio__content-6">
                          <h4 className="portfolio__title-6">Predictive Analytics Engine</h4>
                          <h5 className="portfolio__date">July 2024</h5>
                        </div>
                      </Link>
                    </div>

                    <div className="portfolio__item-6" data-portfitem="7">
                      <Link href="/portfolio-details-dark">
                        <Image
                          priority
                          width={770}
                          style={{ height: "auto" }}
                          src={Portfilio67}
                          alt="Web3 DeFi Protocol"
                          data-speed="0.4"
                        />
                        <div className="portfolio__content-6">
                          <h4 className="portfolio__title-6">Web3 DeFi Protocol</h4>
                          <h5 className="portfolio__date">October 2024</h5>
                        </div>
                      </Link>
                    </div>
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

export default Portfolio1;
