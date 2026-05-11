import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import Blog11 from "../../../public/assets/imgs/blog/1.jpg";
import Blog22 from "../../../public/assets/imgs/blog/2.jpg";
import Blog33 from "../../../public/assets/imgs/blog/3.jpg";
import Blog44 from "../../../public/assets/imgs/blog/4.jpg";
import Blog55 from "../../../public/assets/imgs/blog/5.jpg";
import Blog66 from "../../../public/assets/imgs/blog/6.jpg";
import animationCharCome from "@/lib/utils/animationCharCome";

gsap.registerPlugin(ScrollTrigger);

const Blog1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item");
          blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            blogTl.to(item, {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item",
              start: "top center+=300",
              markers: false,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.3,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="blog__area-6 blog__animation">
        <div className="container g-0 line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="row pb-130">
            <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Engineering <br />
                  Insights
                </h2>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
              <div className="blog__text">
                <p>
                  Deep technical articles on cloud architecture, cybersecurity,
                  blockchain, and the future of enterprise software engineering.
                </p>
              </div>
            </div>
          </div>

          <div className="row reset-grid">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details-dark">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog11}
                        alt="Zero-Trust Security"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog11}
                        alt="Zero-Trust Security"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/blog-dark">Cloud Engineering</Link> . 14 Jan 2024
                </h4>
                <h5>
                  <Link href="/blog-details-dark" className="blog__title">
                    Building Zero-Trust Network Architecture for Enterprise Scale
                  </Link>
                </h5>
                <Link href="/blog-details-dark" className="blog__btn">
                  Read More{" "}
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details-dark">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog22}
                        alt="Kubernetes at Scale"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog22}
                        alt="Kubernetes at Scale"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/blog-dark">DevOps</Link> . 28 Feb 2024
                </h4>
                <h5>
                  <Link href="/blog-details-dark" className="blog__title">
                    Kubernetes at Scale: Orchestrating Thousands of Microservices
                  </Link>
                </h5>
                <Link href="/blog-details-dark" className="blog__btn">
                  Read More{" "}
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details-dark">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog33}
                        alt="Blockchain Smart Contracts"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog33}
                        alt="Blockchain Smart Contracts"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/blog-dark">Web3</Link> . 10 Mar 2024
                </h4>
                <h5>
                  <Link href="/blog-details-dark" className="blog__title">
                    Securing Smart Contracts: Auditing Patterns for DeFi Protocols
                  </Link>
                </h5>
                <Link href="/blog-details-dark" className="blog__btn">
                  Read More{" "}
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details-dark">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog44}
                        alt="Multi-Cloud Strategy"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog44}
                        alt="Multi-Cloud Strategy"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/blog-dark">Cloud Architecture</Link> . 02 Apr 2024
                </h4>
                <h5>
                  <Link href="/blog-details-dark" className="blog__title">
                    Multi-Cloud Strategy: Avoiding Vendor Lock-In at Enterprise Scale
                  </Link>
                </h5>
                <Link href="/blog-details-dark" className="blog__btn">
                  Read More{" "}
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details-dark">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog55}
                        alt="AI in Cybersecurity"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog55}
                        alt="AI in Cybersecurity"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/blog-dark">Cybersecurity</Link> . 19 May 2024
                </h4>
                <h5>
                  <Link href="/blog-details-dark" className="blog__title">
                    AI-Driven Threat Detection: The Future of Cybersecurity Defense
                  </Link>
                </h5>
                <Link href="/blog-details-dark" className="blog__btn">
                  Read More{" "}
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details-dark">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog66}
                        alt="Site Reliability Engineering"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog66}
                        alt="Site Reliability Engineering"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/blog-dark">SRE</Link> . 07 Jun 2024
                </h4>
                <h5>
                  <Link href="/blog-details-dark" className="blog__title">
                    SRE Playbook: Achieving 99.99% Uptime in Distributed Systems
                  </Link>
                </h5>
                <Link href="/blog-details-dark" className="blog__btn">
                  Read More{" "}
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog1;
