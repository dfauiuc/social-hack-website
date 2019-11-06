import React from "react";
import Logo from "./both.png";
import AnimatedLogo from "./Animate.gif"
import Taco from "./taco.gif";
import WhiteOutlineDFA from "./DFAIcon.png";
import { relative } from "path";

const Content = ({ styles }) => {

    const headerStyle = {
        position: "absolute",
        width: "30%",
        height: "auto",
        right: 0,
        top: "50%",
        left: "20%",
        transform: "translate(-50%, -50%)",
    };

    const logoStyle = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "60%",
    };

    const titleStyle = {
        paddingTop: 30,
        fontFamily: 'GothamBlack',
        fontSize: "4.8vw",
        textAlign: "center",
        color: styles.darkYellow(1)

    };

    const heading1Style = {
        position: relative,
        fontFamily: 'GothamMedium',
        fontSize: "2vw",
        textAlign: "center",
        color: styles.lightYellow(1),
        paddingTop: 20,
    };

    const heading2Style = {
        fontFamily: 'GothamMedium',
        fontSize: "2.5vw",
        textAlign: "center",
        color: styles.darkGreen(1),
        paddingTop: 20,
    };

    const heading2aStyle = {
        position: "relative",
        paddingTop: 15,
        fontSize: "2.3vw",
        fontFamily: 'GothamBlack',
        color: styles.dustyRose(1)
    };

    const heading3Style = {
        position: "relative",
        paddingTop: 15,
        fontSize: "2.3vw",
        color: styles.darkGreen(1),
        lineHeight: "2.5vw",
    };

    const heading4Style = {
        position: "relative",
        paddingTop: 15,
        fontFamily: 'GothamMedium',
        color: styles.lightYellow(1),
        fontSize: "1.5vw",
        lineHeight: "1.7vw",    
    };

    const bodyParagraphStyle = {
        position: "absolute",
        top: "50%",
        marginLeft: "70%",
        transform: "translate(-50%, -50%)",
        fontFamily: 'GothamMedium',
        width: "50%"
    };

    const DFAIconContainerStyle = {
        position: "fixed",
        bottom: "1vw",
        left: "95%",
        width: "20%",
    };

    const DFAIconStyle = {
        width: "20%",
        marginLeft: "auto",
    };

    const yellowColor = {
        color: styles.darkYellow(1),
    };

    const redColor = {
        color: styles.lightYellow(1),
    };

    return [
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
                March 2020
            </div>
        </div>,

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
                professors, local companies, and Chicago based firms.
                Winners will receive the resources to implement their ideas
                with guidance from DFA mentors and community partners.
            </div>
        </div>,

        <div style = {DFAIconContainerStyle}>
            <a style={{display: "table-cell"}} href="https://dfaillinois.com" target="_blank">
                <img style = {DFAIconStyle} src={WhiteOutlineDFA} alt="website logo" />
            </a>
        </div>
    ]
};

export default Content;