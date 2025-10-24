'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift, FaCity, FaGolfBall, FaTree, FaStore, FaBiking } from "react-icons/fa";


export default function  Features() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one feature_wrap" id="why-invest-in-dubai">
            <div className="container banner_container_main_feature component_container">
              <div>
                                    <p className="small_heading">
                                        DETAILS
                                    </p>
                                </div>
                <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                                    <h2 className="why_invest">WHY INVEST IN DUBAI HILLS ESTATE?</h2>
                                </div>
                <div className="row feature_row">

                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{marginBottom: 0}} 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaCity className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

<h2 className="investment_content">
<a href="javascript:void(0);">2,700-acre</a></h2>

<p className="investment_text">
  <span className="about_para_span">Multi-purpose Development.</span>
</p> 
                            </div>
                        </div>
                    </div>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaGolfBall className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">18-Hole</a></h2>
<p className="investment_text">
  <span className="about_para_span">Championship Golf Course.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaTree className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
1,450,000 sqm</a></h2>

<p className="investment_text">
  <span className="about_para_span">Parks & Open Spaces.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaWalking className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">180,000 sqm</a></h2>
<p className="investment_text">
  <span className="about_para_span">Dubai Hills Park.</span>
</p>

                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}} 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaStore className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
282,000 sqm</a></h2>

<p className="investment_text">
  <span className="about_para_span">Dubai Hills Mall.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaSchool className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">3</a></h2>

<p className="investment_text">
  <span className="about_para_span">Schools.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single"  style={{paddingTop: 0}}
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaBiking className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">54 km</a></h2>
<p className="investment_text">
  <span className="about_para_span">Bicycle Route.</span>
</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="btn_style_invest">
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
