import "./about.css"
import main1 from "../../img/main1.jpeg";

const About = () => {
    return (
        <div className="a">
             <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={main1} alt="" className="a-img" />
                </div>
             </div>
             <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                A Lead Web Developer Able to construct interactive & user-centered website designs to scale
                </p>
                <p className="a-desc">
                I specialise in establishing elegant, modern websites, web services, and online stores for consumers, I design and develop services for them. My passion is to create meaningful engagement in digital user experiences. 
                </p>
    
             </div>
        </div>
    ) 
}

export default About