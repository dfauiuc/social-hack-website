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
import balsamiqLogo from "./balsamiq-logo-noborder-screen.png";
import MediaQuery from 'react-responsive';
import { relative } from "path";
import { Button} from 'react-bootstrap';

const Content = ({ styles }) => {

    const headerContainer = {
        position: "relative",  
        top: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "10vw",
    }

    const headerStyle = {
        display: "inline-block",    
        maxWidth: "60%",
        margin: "0.5em",
    };

    const bodyParagraphStyle = {
        display: "inline-block",    
        maxWidth: "60%", 
        paddingLeft: "20px",
        fontFamily: 'GothamMedium',
        margin: "0.5em",
    };

    const StakeholderSection = {
        display: "inline-block",    
        fontFamily: 'GothamMedium',
        backgroundColor: styles.dustyRose(1),
        marginTop: "5vw",
    };

    const logoStyle = {
        display: "block",
        justifyContent: "center",
        alignItems: "center",
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

    const buttonContainer = {
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "30px",
    }

    const buttonStyle = {
        backgroundColor: styles.darkYellow(1),
        color: styles.lightYellow(1),
        borderRadius: "0.5em",
        width: "600px",
        height: "40px",
        maxWidth: "70%",
        fontSize: "20px",
        fontFamily: 'GothamMedium',
        flexWrap: "wrap",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
    }

    const heading1Style = {
        position: relative,
        fontFamily: 'GothamMedium',
        fontSize: "30px",
        textAlign: "center",
        marginTop: "20px",  
        color: styles.dustyRose(1),
    };

    const heading2Style = {
        fontFamily: 'GothamBlack',
        fontSize: "45px",
        textAlign: "center",
        marginTop: "20px",  
        color: styles.lightYellow(1),
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
        color: styles.dustyRose(1),
        fontSize: "2vw",
        textAlign: "center",
    };

    const PartnerSection = {
        position: "relative",
        marginTop: "20%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center", 
    }

    const HostSection = {
        position: "relative",
        marginTop: "10vw",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center", 
    }

    const SponsorSection = {
        position: "relative",
        marginTop: "20%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center", 
    }

    const ContactSection = {
        position: "relative",
        marginTop: "15%",
        display: "flex",
        flexWrap: "wrap",   
        justifyContent: "center",
        alignItems: "center", 
    }

    const FAQContainer = {
        paddingTop: "10vw",
        paddingBottom: "10vw    ",
        display: "block",
        backgroundColor: styles.lightYellow(1),
    }

    const  subTitleStyle = {
        position: "absolute",
        fontSize: "5vw",
        fontFamily: 'GothamBlack',
        color: styles.darkGreen(1),
    }

    const  subTitle1Style = {
        fontSize: "5vw",
        fontFamily: 'GothamBlack',
        color: styles.lightGreen(1),
    }

    const  subTitle2Style = {
        fontSize: "5vw",
        fontFamily: 'GothamBlack',
        color: styles.lightYellow(1),
    }

    const  subTitle5Style = {
        marginTop: "3vw",
        fontSize: "5vw",
        fontFamily: 'GothamBlack',
        textAlign: "center",
        color: styles.dustyRose(1),
    }

    const  questionStyle = {
        marginTop: "2vw",
        marginLeft: "10vw",
        fontSize: "2.5vw",
        fontFamily: 'GothamMedium',
        color: styles.darkYellow(1),
    }

    const  answerStyle = {
        marginTop: "2vw",
        marginLeft: "10vw",
        marginRight: "10vw",
        fontSize: "2vw",
        fontFamily: 'GothamMedium',
        color: styles.darkGreen(1),
    }

    const partnerIconStyle = {
        display: "inline-block",   
        maxWidth: "30%",
        paddingLeft: "20px",
        paddingRight: "20px",
    };

    const hostIconStyle = {
        display: "inline-block",   
        maxWidth: "15%",
        paddingTop: "2vw",  
        paddingLeft: "30px",
        paddingRight: "30px",
    };

    const hostContainer = {
        position: "relative",  
        top: "4vw",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",  
    }
    
    const partnerContainer = {
        position: "relative",  
        top: "6vw",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",  
    }

    const sponsorContainer = {
        position: "relative",  
        top: "6vw",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: styles.dustyRose(1),
    }

    const sponsorIconStyle = {
        display: "inline-block",    
        maxWidth: "20%",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "9vw",
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
                    designing with, <br /> not for, our community
                </div>

                <div style = {heading2Style}>
                    RESCHEDULED FOR FALL 2020
                </div>
    
            </div>

            <div style = {bodyParagraphStyle}>
                <div style = {heading2aStyle}>
                    Led by students, for students.
                </div>
                <div style = {heading3Style}>
                    Social Hack is a conference hosted by
                    <span style = {redColor} > Design for America at the University of Illinois at Urbana-Champaign </span>
                    that focuses on how we can approach climate change from a human centered perspective.
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

        <div style = {StakeholderSection}>
            <div style = {HostSection}>
                <div style = {subTitleStyle}>
                    Co-hosted by
                </div>
            </div>

            <div style={hostContainer}>
                <img style = {hostIconStyle} src={DFALogo} alt="DFA logo" />
                <img style = {hostIconStyle} src={NCSALogo} alt="NCSA logo" />
                <img style={hostIconStyle} src={FuzzyMathLogo} alt="Fuzzy Math logo" />
            </div>

            <div style = {PartnerSection}>
                <div style = {subTitle1Style}>
                    Our Student Partners
                </div>
            </div>
        
            <div style={partnerContainer}>
                <img style = {partnerIconStyle} src={VIPLogo} alt="VIP logo" />
                <img style = {partnerIconStyle} src={SECSLogo} alt="SECS logo" />
            </div>

            <div style = {SponsorSection}>
                <div style = {subTitle2Style}>  
                    Our Sponsors
                </div>
            </div>

            <div style={sponsorContainer}>
                <img style={sponsorIconStyle} src={SSCLogo} alt="SSC logo" />
                <img style={sponsorIconStyle} src={FuzzyMathLogo} alt="Fuzzy Math logo" />
                <img style={sponsorIconStyle} src={JaguarLogo} alt="Jaguar logo" />
                <img style={sponsorIconStyle} src={SerraLogo} alt="Serra logo" />
                <img style={sponsorIconStyle} src={balsamiqLogo} alt="balsamiq logo" />
            </div>
        </div>,

        <div style = {FAQContainer}>
            <div style = {subTitle5Style}>
                FAQ
            </div>

            <div style = {questionStyle}>
                Who can attend?
            </div>

            <div style = {answerStyle}>
                Any student that attends the University of Illinois Urbana-Champaign.
            </div>

            <div style = {questionStyle}>
                Where's this located?
            </div>

            <div style = {answerStyle}>
                The conference will be hosted at the National Center for Supercomputing Applications.
            </div>

            <div style = {questionStyle}>
                What time is this?
            </div>

            <div style = {answerStyle}>
                Saturday, April 18 from 9 AM - 8 PM and Sunday, April 19 from 10 AM - 5PM (we promise it's worth it!)
            </div>

            <div style = {questionStyle}>
                Does this cost anything?
            </div>

            <div style = {answerStyle}>
                Nothing, this is free of charge! Food and swag will be included.
            </div>

            <div style = {questionStyle}>
                Do I need to have any particular experience in design?
            </div>

            <div style = {answerStyle}>
                No particular experience is required, but a passion for social impact is strongly recommended!
            </div>

            <div style = {questionStyle}>
                Any other questions?
            </div>

            <div style = {answerStyle}>
                Feel free to reach out to us at uiuc@designformamerica.com, we're happy to answer any other questions!
            </div>
        </div>
    ]
};

export default Content;