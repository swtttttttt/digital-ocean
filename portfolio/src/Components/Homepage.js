import React from "react";

export default function Homepage() {
    return(
        <div>
            <div className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Sarah Wittenburg Web Developer
                    </h1>
                </div>
            </div>

            <h2></h2>

            <div className="container overflow-hidden bg-light text-dark rounded">
                
                <div className="row"></div>
                <div className="row"></div>
                <div className="row"></div>
                <div className="row">
                <div className="col-6 border-bottom SarahMugPic">
                    <img src="https://i.postimg.cc/j5B1vDPJ/unnamed-2.jpg" className="img-responsive SarahMugPic" />
                </div> 
                <div className="col-6 border-bottom SarahHeading">
                    <h2 className="display-4">I'm Sarah I love technology and the marine 
                    sciences 🐋</h2>
                </div>
                </div>
            </div>

            <p></p>
            <p></p>
            <p></p>
            <p></p>

            <div className="row rounded">
                <div className="col projects border-left border-bottom rounded" style="background-color: #B489FC;">
                    Prince Tribute
                    <p></p>
                    <img src="https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMzQ0MzgyNjMxNzE1OTkw/prince-prince-performing-on-stage---purple-rain-tour-photo-by-richard-e-aaronredferns2.jpg" style="width: 350px; height: 320px;" />
                </div>
                <div className="col projects rounded" style="background-color: #A6C8F5;">
                    Survey Page
                    <p></p>
                    <img src="https://news.stonybrook.edu/wp-content/uploads/2018/09/featured-campus.jpg" style="width: 350px; height: 320px;" />
                </div>
                
            </div>

            <div className="row">
                <div className="col projects rounded" style="background-color: #A6C8F5;">
                    Muscle Contraction Mechanism
                    <p></p>
                    <img src="https://openstax.org/apps/archive/20220228.174637/resources/079419aef68b615feb19ec1d7a05d558e06b5adc" style="width: 350px; height: 320px;" />
                </div>
                <div className="col projects rounded" style="background-color: #46CF61">
                    Hulu Product Landing Page
                    <p></p>
                    <img src="https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg" alt="hulu-logo" style="width: 370px; height: 260px;" />
                </div>
                
            </div>

            <div className="row">
                <h3 className="col align-self-center rounded footer">
                Have an online vision - and don't know where to begin? <p></p><button>Hire Me!</button></h3>
            </div>
            </div>
        
     )}