import React from "react";
import AnimatedLogo from "./Animate.gif";
import DFALogo from "./DFAIcon.png";
import VIPLogo from "./VIP Logo.png";
import SECSLogo from "./secslogo.png";
import SSCLogo from "./SSC_Logo.png";
import FuzzyMathLogo from "./White.png";
import JaguarLogo from "./jaguarlogo.png";
import SerraLogo from "./serraLogo.png";
import NCSALogo from "./ncsalogo.jpg";
import MediaQuery from 'react-responsive';
import { relative } from "path";

const Content = ({ styles }) => {

    const headerContainer = {
        position: "relative",  
        top: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",  
        paddingTop: "100px",
    }

    const headerStyle = {
        display: "inline-block",    
        maxWidth: "48%",
        paddingRight: "20px",
        margin: "1em",
    };

    const bodyParagraphStyle = {
        display: "inline-block",    
        maxWidth: "48%", 
        paddingLeft: "20px",
        fontFamily: 'GothamMedium',
    };

    const logoStyle = {
        display: "block",
        justifyContent: "50%",
        margin: "auto",
        maxWidth: "60%",
    };

    const titleStyle = {
        fontFamily: 'GothamBlack',
        fontSize: "75px",
        marginTop: "20px",  
        textAlign: "center",
        color: styles.darkYellow(1),
    };

    const heading1Style = {
        position: relative,
        fontFamily: 'GothamMedium',
        fontSize: "30px",
        textAlign: "center",
        marginTop: "20px",  
        color: styles.lightYellow(1),
    };

    const heading2Style = {
        fontFamily: 'GothamBlack',
        fontSize: "45px",
        textAlign: "center",
        marginTop: "20px",  
        color: styles.dustyRose(1),
    };

    const heading2aStyle = {
        position: "relative",
        paddingTop: "60px",
        fontSize: "45px",
        fontFamily: 'GothamBlack',
        color: styles.dustyRose(1)
    };

    const heading3Style = {
        position: "relative",
        paddingTop: "15px",
        fontSize: "35px",
        color: styles.darkGreen(1),
        lineHeight: "40px",
    };

    const heading4Style = {
        position: "relative",
        paddingTop: "15px",
        fontFamily: 'GothamMedium',
        color: styles.lightYellow(1),
        fontSize: "20px",
    };

    const heading5Style = {
        position: "relative",
        paddingTop: "15px",
        paddingBottom: "45px",
        fontFamily: 'GothamMedium',
        color: styles.lightYellow(1),
        fontSize: "2vw",
        textAlign: "center",
    };

    const PartnerSection = {
        position: "relative",
        marginTop: "150px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center", 
    }

    const SponsorSection = {
        position: "relative",
        marginTop: "150px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center", 
    }

    const  subTitleStyle = {
        fontSize: "3vw",
        fontFamily: 'GothamBold',
        color: styles.dustyRose(1),
    }

    const  subTitle1Style = {
        fontSize: "3vw",
        fontFamily: 'GothamBold',
        color: styles.darkGreen(1),
    }

    const  subTitle2Style = {
        fontSize: "3vw",
        fontFamily: 'GothamBold',
        color: styles.lightYellow(1),
    }

    const partnerIconStyle = {
        display: "inline-block",   
        maxWidth: "30%",
        paddingLeft: "20px",
        paddingRight: "20px",
    };

    const hostIconStyle = {
        display: "inline-block",   
        maxWidth: "20%",
        paddingLeft: "30px",
        paddingRight: "30px",
    };

    const hostContainer = {
        position: "relative",  
        top: "50px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",  
    }
    
    const partnerContainer = {
        position: "relative",  
        top: "50px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",  
    }

    const sponsorContainer = {
        position: "relative",  
        top: "20px",
        bottom: "0px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center", 
    }

    const sponsorIconStyle = {
        display: "inline-block",    
        maxWidth: "20%",
        paddingLeft: "10px",
        paddingRight: "10px",
    };

    const yellowColor = {
        color: styles.darkYellow(1),
    };

    const redColor = {
        color: styles.lightYellow(1),
    };

    return [
        <div style= {headerContainer}>
            <div style = {headerStyle}>
                <img style = {logoStyle} src={AnimatedLogo} alt="website logo" />

                <div style = {titleStyle}>
                    Social Hack
                </div>

                <div style = {heading1Style}>
                    designing with,
                </div>

                <div style = {heading1Style}>
                    not for, our community
                </div>

                <div style = {heading2Style}>
                    April 18-19, 2020
                </div>
            </div>

            <div style = {bodyParagraphStyle}>
                <div style = {heading2aStyle}>
                    Led by students, for students.
                </div>
                <div style = {heading3Style}>
                    <span style = {yellowColor}> Social Hack </span> is a conference hosted by
                    <span style = {redColor}> Design for America at the University of Illinois at Urbana-Champaign </span>
                    that focuses on how we can approach
                    <span style = {yellowColor}> climate change </span>
                    from a
                    <span style = {yellowColor}> human centered </span> perspective.
                </div>

                <div style = {heading4Style}>
                    Teams will learn the design process to tackle specific areas of climate change
                    that affect our community. 
                    By the end of the conference, students will present their prototypes to 
                    stakeholders, local companies, and nationally recognized design firms.
                    Winners will receive the resources to implement their ideas
                    with guidance from DFA mentors and community partners.
                </div>
            </div>
        </div>,

        <div style = {PartnerSection}>
            <div style = {subTitleStyle}>
                    Co-hosted by
            </div>
        </div>,

        <div style={hostContainer}>
            <img style = {hostIconStyle} src={DFALogo} alt="DFA logo" />
            <img style = {hostIconStyle} src={NCSALogo} alt="NCSA logo" />
            <img style={hostIconStyle} src={FuzzyMathLogo} alt="Fuzzy Math logo" />
        </div>,

        <div style = {PartnerSection}>
            <div style = {subTitle1Style}>
                    Our Student Partners
            </div>
        
        </div>,
        
        <div style={partnerContainer}>
            <img style = {partnerIconStyle} src={VIPLogo} alt="VIP logo" />
            <img style = {partnerIconStyle} src={SECSLogo} alt="SECS logo" />
        </div>,

        <div style = {SponsorSection}>
            <div style = {subTitle2Style}>  
                Our Sponsors
            </div>
        </div>,

        <div style={sponsorContainer}>
            <img style={sponsorIconStyle} src={SSCLogo} alt="SSC logo" />
            <img style={sponsorIconStyle} src={FuzzyMathLogo} alt="Fuzzy Math logo" />
            <img style={sponsorIconStyle} src={JaguarLogo} alt="Jaguar logo" />
            <img style={sponsorIconStyle} src={SerraLogo} alt="Serra logo" />
        </div>,

        <div>
            <div style = {SponsorSection}>
                <div style = {subTitleStyle}>
                    Contact us
                </div>
            </div>

            <div style = {heading5Style}>
                    Email us at uiuc@designforamerica.com
                </div>
        </div>
    ]
};

export default Content;