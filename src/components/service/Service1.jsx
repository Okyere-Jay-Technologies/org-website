import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/service_tech_1.png";
import Service12 from "../../../public/assets/imgs/service/service_tech_2.png";
import Service13 from "../../../public/assets/imgs/service/service_tech_3.png";
import Service14 from "../../../public/assets/imgs/service/service_tech_4.png";
import Service15 from "../../../public/assets/imgs/service/service_tech_5.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], { zIndex: "1" });
              tl.to(
                service_imagess[i],
                { opacity: 0, duration: 1, scale: 1.2, ease: "power4.out" },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                {/* Left nav */}
                <div className="left-content">
                  <ul className="service__list-6">
                    <li>
                      <a href="#service_1">Cloud <br /> Architecture</a>
                    </li>
                    <li>
                      <a href="#service_2">Full-Stack <br /> Engineering</a>
                    </li>
                    <li>
                      <a href="#service_3">Cybersecurity <br /> & Compliance</a>
                    </li>
                    <li>
                      <a href="#service_4">Blockchain <br /> & Web3</a>
                    </li>
                    <li>
                      <a href="#service_5">DevOps <br /> & SRE</a>
                    </li>
                    <li>
                      <a href="#service_6">Research <br /> & Development</a>
                    </li>
                  </ul>
                </div>

                {/* Mid image panel */}
                <div className="mid-content">
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "auto" }} src={Service11} alt="Cloud Architecture" />
                  </div>
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "auto" }} src={Service12} alt="Full-Stack Engineering" />
                  </div>
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "auto" }} src={Service13} alt="Cybersecurity" />
                  </div>
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "auto" }} src={Service14} alt="Blockchain" />
                  </div>
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "auto" }} src={Service15} alt="DevOps" />
                  </div>
                  <div className="service__image">
                    <Image priority style={{ width: "auto", height: "auto" }} src={Service11} alt="R&D" />
                  </div>
                </div>

                {/* Right content */}
                <div className="right-content">
                  <div className="service__items-6">

                    {/* Service 1 */}
                    <div className="service__item-6 has__service_animation" id="service_1" data-secid="1">
                      <div className="image-tab">
                        <Image priority style={{ width: "auto", height: "auto" }} src={Service11} alt="Cloud Architecture" />
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">Cloud Computing & Infrastructure</h2>
                        <p>
                          We engineer highly scalable, fault-tolerant cloud architectures designed to handle millions of concurrent users. Our team specializes in container orchestration, microservices, and multi-cloud strategies to ensure your applications remain robust and reliable under any load.
                        </p>
                        <ul>
                          <li>+ Distributed Systems</li>
                          <li>+ Kubernetes & Docker</li>
                          <li>+ AWS / GCP / Azure</li>
                          <li>+ Microservices</li>
                          <li>+ Serverless Architecture</li>
                          <li>+ Performance Tuning</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link href="/service-details-dark" className="wc-btn-secondary btn-item btn-hover">
                            <span></span>Get free<br />quotes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Service 2 */}
                    <div className="service__item-6" id="service_2" data-secid="2">
                      <div className="image-tab">
                        <Image priority style={{ width: "auto", height: "auto" }} src={Service12} alt="Full-Stack Engineering" />
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">Full-Stack Software Engineering</h2>
                        <p>
                          Our engineering team builds enterprise-grade web and mobile applications using modern frameworks. We focus on clean architecture, high-performance rendering, and seamless user experiences tailored for scaling technology companies.
                        </p>
                        <ul>
                          <li>+ React & Next.js</li>
                          <li>+ Node.js & TypeScript</li>
                          <li>+ Flutter & React Native</li>
                          <li>+ GraphQL & REST APIs</li>
                          <li>+ Database Design</li>
                          <li>+ System Architecture</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link href="/service-details-dark" className="wc-btn-secondary btn-item btn-hover">
                            <span></span>Get free<br />quotes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Service 3 */}
                    <div className="service__item-6" id="service_3" data-secid="3">
                      <div className="image-tab">
                        <Image priority style={{ width: "auto", height: "auto" }} src={Service13} alt="Cybersecurity" />
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">Cybersecurity & Compliance</h2>
                        <p>
                          Security is built into everything we do. We provide zero-trust network architectures, advanced penetration testing, and compliance-ready infrastructure to protect your most critical assets against modern threats.
                        </p>
                        <ul>
                          <li>+ Zero-Trust Security</li>
                          <li>+ Penetration Testing</li>
                          <li>+ SOC2 Compliance</li>
                          <li>+ Threat Modeling</li>
                          <li>+ Data Encryption</li>
                          <li>+ Identity Management</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link href="/service-details-dark" className="wc-btn-secondary btn-item btn-hover">
                            <span></span>Get free<br />quotes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Service 4 */}
                    <div className="service__item-6" id="service_4" data-secid="4">
                      <div className="image-tab">
                        <Image priority style={{ width: "auto", height: "auto" }} src={Service14} alt="Blockchain" />
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">Blockchain & Web3 Development</h2>
                        <p>
                          We pioneer decentralized solutions with secure smart contracts, DeFi protocols, and robust blockchain nodes. Our deep understanding of cryptography ensures your Web3 applications are safe, efficient, and future-proof.
                        </p>
                        <ul>
                          <li>+ Smart Contracts</li>
                          <li>+ Solidity & Rust</li>
                          <li>+ DeFi Protocols</li>
                          <li>+ Node Infrastructure</li>
                          <li>+ Tokenomics Design</li>
                          <li>+ Web3 Integration</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link href="/service-details-dark" className="wc-btn-secondary btn-item btn-hover">
                            <span></span>Get free<br />quotes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Service 5 */}
                    <div className="service__item-6" id="service_5" data-secid="5">
                      <div className="image-tab">
                        <Image priority style={{ width: "auto", height: "auto" }} src={Service15} alt="DevOps" />
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">DevOps & Site Reliability Engineering</h2>
                        <p>
                          Accelerate your delivery with automated CI/CD pipelines, infrastructure as code, and comprehensive observability. Our Site Reliability Engineers ensure your systems are always available and recover instantly from failures.
                        </p>
                        <ul>
                          <li>+ CI/CD Pipelines</li>
                          <li>+ Infrastructure as Code</li>
                          <li>+ Terraform & Ansible</li>
                          <li>+ Observability & Logging</li>
                          <li>+ Incident Management</li>
                          <li>+ Reliability Engineering</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link href="/service-details-dark" className="wc-btn-secondary btn-item btn-hover">
                            <span></span>Get free<br />quotes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Service 6 */}
                    <div className="service__item-6" id="service_6" data-secid="6">
                      <div className="image-tab">
                        <Image priority style={{ width: "auto", height: "auto" }} src={Service11} alt="R&D" />
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">Advanced Research & Development</h2>
                        <p>
                          Pushing the boundaries of technology, our R&D lab explores AI integrations, predictive analytics, and next-generation algorithms. We translate cutting-edge research into production-ready innovations for your business.
                        </p>
                        <ul>
                          <li>+ Artificial Intelligence</li>
                          <li>+ Machine Learning</li>
                          <li>+ Predictive Analytics</li>
                          <li>+ Algorithmic Optimization</li>
                          <li>+ Prototype Development</li>
                          <li>+ Technical Feasibility</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link href="/service-details-dark" className="wc-btn-secondary btn-item btn-hover">
                            <span></span>Get free<br />quotes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
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

export default Service1;
