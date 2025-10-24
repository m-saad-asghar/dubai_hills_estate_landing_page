"use client";
import Link from "next/link"
import Image from "next/image";
import { FaBuilding, FaCity, FaDollarSign, FaGift, FaHouseUser, FaTree } from "react-icons/fa";
export default function Future() {
    return (
        <>
            <section className="about-one future_styling" id="the-future-of-waterfront-living">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container banner_container_main_except component_container">
                    <div className="row minus_styling">

                           <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div className="sec-title">
                                    <h2 className="welcome_emaar_styling">
                                        <span className="welcome_emaar_styling_span">
                                            LIVE THE VIBRANT LIFESTYLE AT DUBAI HILLS ESTATE
                                        </span>
                                    </h2>
                                </div>

                                {/* <div className="text-box">
                                    <h3 className="about_subheading">"Our goal is to build sustainable, livable, and dynamic urban spaces for generations to come."</h3>
                                </div> */}

                                <div className="text-box">
<p className="about_paragraph">
    <span className="about_paragraph_span">Discover Dubai Hills Estate — a 2,700-acre masterfully planned community that redefines modern living. Home to a world-class championship golf course, expansive parks, and the iconic Dubai Hills Park, it offers a lifestyle where leisure and nature blend seamlessly. Shop at the vibrant Dubai Hills Mall, benefit from top-tier schools nearby, and enjoy effortless connectivity with dedicated cycling routes throughout the community. From scenic green spaces to the prestigious Dubai Hills Golf Club, every detail is designed to enrich life at Dubai Hills Estate — a place where elegance, wellness, and convenience meet.</span>
</p>
                                </div>

                                <div className="row future_row">
                                
                                                    {/* <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="feauture-one__single" 
                                                        >
                                                            <div className="feauture-one__single-text">
                                
                                                              <div className="feauture-one__single-bottom">
                                                                <div className="icon-box">
                                                                    <span className="icon-plane">
                                <FaBuilding className="icon-plane" size={30}/> 
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>

                                <h3 className="investment_content">
<span className="investment_content_para">711,399 sqm</span></h3>
                                
                                <p className="investment_text">
    <span className="about_paragraph_span">Serviced Apartments.</span>
</p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                  {/* <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="feauture-one__single" 
                                                        >
                                                            <div className="feauture-one__single-text">
                                
                                                              <div className="feauture-one__single-bottom">
                                                                <div className="icon-box">
                                                                    <span className="icon-plane">
                                <FaCity className="icon-plane" size={30}/> 
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>

                                <h3 className="investment_content">
<span className="investment_content_para">7.4 million sqm</span></h3>
                            
                                <p className="investment_text">
    <span className="about_paragraph_span">Residential Space.</span>
</p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                
                                                     {/* <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="feauture-one__single" 
                                                        >
                                                            <div className="feauture-one__single-text">
                                
                                                              <div className="feauture-one__single-bottom">
                                                                <div className="icon-box">
                                                                    <span className="icon-plane">
                                <FaTree className="icon-plane" size={30}/> 
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>

<h3 className="investment_content">
<span className="investment_content_para">500,000 sqm</span></h3>
                                
                                <p className="investment_text">
    <span className="about_paragraph_span">Parks & Open Spaces.</span>
</p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                
                                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="btn_style">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("home");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            REGISTER INTEREST
          </button>
</div>
                
            </section>
        </>
    )
}
