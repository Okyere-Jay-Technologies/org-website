import Story1 from "../../../public/assets/imgs/story/story_tech_1.png";
import Story2 from "../../../public/assets/imgs/story/story_tech_2.png";
import Story3 from "../../../public/assets/imgs/story/story_tech_3.png";
import Story4 from "../../../public/assets/imgs/story/story_tech_4.png";
import Image from "next/image";

const AboutStory = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            <div className="from-text">
              from <span>1990</span>
            </div>

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Digital Studio</h2>
                <h3 className="sec-title title-anim">Our story</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                    Okyere Jay Technologies was founded on a simple premise: modern 
                    enterprises require digital infrastructure that is not just reliable, 
                    but resilient and infinitely scalable. We moved away from bloated 
                    legacy systems to architecting next-generation cloud environments, 
                    secure blockchain networks, and zero-trust cybersecurity frameworks. 
                    Our focus is strictly on high-performance engineering that powers 
                    the future of technology companies.
                  </p>
                  <p>
                    Our specialized team of cloud architects, security researchers, 
                    blockchain developers, and DevOps engineers work with streamlined 
                    processes to break through complex organizational roadblocks. We 
                    translate rigorous R&D into production-ready solutions, crafting 
                    thoughtful and robust digital ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={300}
                  style={{ height: "auto" }}
                  src={Story1}
                  alt="Story Thumbnail"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={Story2}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={230}
                  style={{ height: "auto" }}
                  src={Story3}
                  alt="Story Thumbnail"
                />
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={Story4}
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;
